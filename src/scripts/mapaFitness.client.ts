/**
 * Comportamento do Mapa Fitness.
 *
 * Progressive enhancement puro: a lista e os filtros já vêm do servidor
 * renderizados e legíveis. Este script só acrescenta filtragem sem recarregar,
 * medição e — quando a cidade tem coordenadas verificadas — o mapa gráfico.
 *
 * O mapa é carregado sob demanda, ao entrar no viewport, e nunca bloqueia a
 * leitura. Se a biblioteca ou os tiles falharem, a lista continua inteira:
 * a experiência degrada, não quebra.
 */

type Gtag = (comando: string, evento: string, params?: Record<string, unknown>) => void;

interface Estado {
  categoria: string;
  atividade: string;
}

/** Só envia dados agregados — nunca a localização precisa de quem navega. */
function ev(nome: string, raiz: HTMLElement, params: Record<string, unknown> = {}): void {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof g !== 'function') return;
  g('event', nome, {
    city: raiz.dataset.cidade || '',
    state: raiz.dataset.uf || '',
    ...params,
  });
}

/* ------------------------------------------------------------------ *
 * Filtros
 * ------------------------------------------------------------------ */

function montarFiltros(raiz: HTMLElement, aoFiltrar: (e: Estado) => void): void {
  const estado: Estado = { categoria: '', atividade: '' };
  const itens = Array.from(raiz.querySelectorAll<HTMLElement>('.mf-item'));
  const vazio = raiz.querySelector<HTMLElement>('[data-vazio]');

  const aplicar = (interacao: boolean) => {
    let visiveis = 0;
    for (const item of itens) {
      const cat = item.dataset.categoria || '';
      const atts = (item.dataset.atividades || '').split(' ');
      const passa =
        (!estado.categoria || cat === estado.categoria) &&
        (!estado.atividade || atts.includes(estado.atividade));
      item.hidden = !passa;
      if (passa) visiveis++;
    }
    if (vazio) vazio.hidden = visiveis > 0;
    aoFiltrar(estado);
    if (interacao) {
      ev('fitness_map_filter', raiz, {
        location_category: estado.categoria || 'todos',
        filter: estado.atividade || 'todos',
        results: visiveis,
      });
    }
  };

  raiz.querySelectorAll<HTMLButtonElement>('[data-filtro]').forEach((botao) => {
    botao.addEventListener('click', () => {
      const tipo = botao.dataset.filtro as keyof Estado;
      const valor = botao.dataset.valor || '';
      estado[tipo] = valor;
      // Marca visualmente o chip ativo dentro do próprio grupo.
      const grupo = botao.closest('.mf-chips');
      grupo?.querySelectorAll('.mf-chip').forEach((c) => c.classList.remove('mf-chip--on'));
      botao.classList.add('mf-chip--on');
      aplicar(true);
    });
  });

  raiz.querySelector<HTMLButtonElement>('[data-limpar]')?.addEventListener('click', () => {
    estado.categoria = '';
    estado.atividade = '';
    raiz.querySelectorAll<HTMLElement>('.mf-chips').forEach((g) => {
      g.querySelectorAll('.mf-chip').forEach((c, i) => c.classList.toggle('mf-chip--on', i === 0));
    });
    aplicar(true);
  });

  aplicar(false);
}

/* ------------------------------------------------------------------ *
 * Mapa (carregado sob demanda)
 * ------------------------------------------------------------------ */

/**
 * Leaflet vem empacotado no próprio domínio (dependência npm), não de CDN:
 * uma requisição a terceiros a menos, sem ponto único de falha externo e
 * compatível com política de segurança de conteúdo restritiva. O import
 * dinâmico faz o Vite gerar um pedaço separado, baixado só quando a seção
 * do mapa entra na tela — não pesa no carregamento inicial da página.
 */
async function carregarLeaflet() {
  const [L] = await Promise.all([import('leaflet'), import('leaflet/dist/leaflet.css')]);
  return L.default ?? L;
}

/** Símbolo do pino por categoria — forma distinta, não apenas cor. */
function simbolo(categoria: string): string {
  const glifos: Record<string, string> = {
    gym: 'M6 9v6M18 9v6M9 7v10M15 7v10M9 12h6',
    park: 'M12 20v-5M7 13l5-7 5 7z',
    running: 'M7 18l4-5 3 2 3-6',
    outdoor_gym: 'M8 8v8M16 8v8M8 12h8',
    sports_center: 'M12 6a6 6 0 100 12 6 6 0 000-12zM12 6v12M6 12h12',
  };
  const d = glifos[categoria] ?? glifos.park;
  return (
    '<svg viewBox="0 0 30 38" width="30" height="38" aria-hidden="true" focusable="false">' +
    '<path d="M15 1C7.8 1 2 6.8 2 14c0 9 13 23 13 23s13-14 13-23c0-7.2-5.8-13-13-13z" ' +
    'fill="var(--accent, #f1681d)" stroke="#fff" stroke-width="2"/>' +
    `<g transform="translate(3 2) scale(0.8)" fill="none" stroke="#fff" stroke-width="2" ` +
    `stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></g></svg>`
  );
}

function montarMapa(raiz: HTMLElement): void {
  const canvas = raiz.querySelector<HTMLElement>('[data-mapa-canvas]');
  if (!canvas) return;

  const pontos = Array.from(raiz.querySelectorAll<HTMLElement>('.mf-item')).filter(
    (i) => i.dataset.lat && i.dataset.lng,
  );
  if (!pontos.length) return;

  let iniciado = false;
  const iniciar = async () => {
    if (iniciado) return;
    iniciado = true;
    try {
      const L = await carregarLeaflet();
      canvas.replaceChildren();

      const mapa = L.map(canvas, {
        // No celular, rolar a página não pode ser sequestrado pelo mapa.
        scrollWheelZoom: false,
        dragging: !('ontouchstart' in window),
      });

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© colaboradores do <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapa);

      const marcadores = new Map<string, import('leaflet').Marker>();
      const camadas: import('leaflet').Layer[] = [];

      for (const item of pontos) {
        const lat = Number(item.dataset.lat);
        const lng = Number(item.dataset.lng);
        const nome = item.querySelector('.mf-card-nome')?.textContent ?? '';
        const rotulo = item.querySelector('.mf-tag')?.textContent ?? '';
        const marcador = L.marker([lat, lng], {
          title: nome,
          alt: `${nome} — ${rotulo}`,
          // Ícone próprio: os PNGs padrão do Leaflet dão 404 quando a
          // biblioteca é empacotada, e o símbolo por categoria evita
          // depender só de cor para diferenciar (acessibilidade).
          icon: L.divIcon({
            className: 'mf-pin',
            html: simbolo(item.dataset.categoria || 'park'),
            iconSize: [30, 38],
            iconAnchor: [15, 38],
            popupAnchor: [0, -34],
          }),
        });
        // Texto puro: nada de HTML vindo de dado externo.
        marcador.bindPopup(`${nome} — ${rotulo}`);
        marcador.addTo(mapa);
        marcador.on('click', () => {
          selecionar(item.dataset.local || '');
          ev('fitness_map_location_select', raiz, { location_category: item.dataset.categoria || '' });
        });
        marcadores.set(item.dataset.local || '', marcador);
        camadas.push(marcador);
      }

      // Enquadra os pontos, sem zoom absurdo quando estão muito próximos.
      const grupo = L.featureGroup(camadas);
      mapa.fitBounds(grupo.getBounds().pad(0.15), { maxZoom: 15 });

      // Sincronização lista -> mapa.
      function selecionar(slug: string) {
        raiz.querySelectorAll('.mf-item').forEach((i) => i.classList.remove('mf-item--ativo'));
        const item = raiz.querySelector<HTMLElement>(`.mf-item[data-local="${CSS.escape(slug)}"]`);
        item?.classList.add('mf-item--ativo');
        const m = marcadores.get(slug);
        if (m) {
          mapa.setView(m.getLatLng(), Math.max(mapa.getZoom(), 15));
          m.openPopup();
        }
      }

      for (const item of pontos) {
        item.addEventListener('click', () => selecionar(item.dataset.local || ''));
      }

      ev('fitness_map_interaction', raiz, { pins: pontos.length });
    } catch {
      // Mapa é realce: se falhar, a lista resolve sozinha.
      canvas.hidden = true;
      raiz.querySelector('.mf-pular')?.setAttribute('hidden', '');
    }
  };

  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(
      (entradas) => {
        if (entradas.some((e) => e.isIntersecting)) {
          obs.disconnect();
          void iniciar();
        }
      },
      { rootMargin: '200px' },
    );
    obs.observe(canvas);
  } else {
    void iniciar();
  }
}

/* ------------------------------------------------------------------ *
 * Início
 * ------------------------------------------------------------------ */

export function iniciarMapaFitness(): void {
  const raiz = document.querySelector<HTMLElement>('[data-mapa-fitness]');
  if (!raiz) return;

  montarFiltros(raiz, () => {});
  montarMapa(raiz);

  // Visualização real da seção (metade dela na tela), não do carregamento.
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (!e.isIntersecting) continue;
          obs.disconnect();
          ev('fitness_map_view', raiz, {
            places: raiz.querySelectorAll('.mf-item').length,
          });
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(raiz);
  }

  raiz.querySelectorAll('[data-mf-direcoes]').forEach((a) => {
    a.addEventListener('click', () => ev('fitness_map_directions_click', raiz));
  });
}
