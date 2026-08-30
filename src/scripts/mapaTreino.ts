/**
 * mapaTreino — a memória da jornada, no navegador da pessoa.
 *
 * Decisões de projeto que valem registro:
 *
 * 1. NADA sai do dispositivo. Não há requisição, não há cadastro, não há
 *    identificador. É por isso que o mapa pode existir sem pedir nada em
 *    troca — e é por isso que ele some se a pessoa limpar o navegador,
 *    o que é dito com todas as letras na interface.
 * 2. Só entram dados NÃO identificáveis: frequência, objetivo, gargalo,
 *    formato, cidade. Nunca nome, e-mail, telefone ou nome de profissional.
 * 3. Versionado e com validade. Schema incompatível ou mapa velho demais
 *    são descartados em silêncio, em vez de quebrar a página.
 * 4. Toda operação é tolerante a falha. Modo privado, cota estourada,
 *    armazenamento desligado: a função devolve o mapa vazio e a ferramenta
 *    continua funcionando exatamente como funcionava antes de existir
 *    jornada nenhuma.
 */
import {
  VERSAO_MAPA,
  mapaVazio,
  type FerramentaId,
  type Mapa,
  type PerfilMapa,
} from '../lib/jornada';

const CHAVE = 'ppp-mapa';
/** Mapa parado por mais de 120 dias não descreve mais a pessoa. */
const VALIDADE_DIAS = 120;

const hoje = () => new Date().toISOString().slice(0, 10);

function diasEntre(a: string, b: string): number {
  const ms = new Date(b).getTime() - new Date(a).getTime();
  return Number.isFinite(ms) ? Math.floor(ms / 86_400_000) : 0;
}

/** Lê o mapa. Nunca lança: na dúvida, devolve um mapa vazio. */
export function lerMapa(): Mapa {
  try {
    const bruto = localStorage.getItem(CHAVE);
    if (!bruto) return mapaVazio(hoje());
    const d = JSON.parse(bruto) as Mapa;
    if (!d || d.v !== VERSAO_MAPA) return mapaVazio(hoje());
    if (diasEntre(d.atualizadoEm, hoje()) > VALIDADE_DIAS) return mapaVazio(hoje());
    // Defesa contra dado corrompido por edição manual ou versão antiga.
    return {
      v: VERSAO_MAPA,
      criadoEm: typeof d.criadoEm === 'string' ? d.criadoEm : hoje(),
      atualizadoEm: typeof d.atualizadoEm === 'string' ? d.atualizadoEm : hoje(),
      concluidas: d.concluidas && typeof d.concluidas === 'object' ? d.concluidas : {},
      perfil: d.perfil && typeof d.perfil === 'object' ? d.perfil : {},
    };
  } catch {
    return mapaVazio(hoje());
  }
}

/** Grava o mapa. Falha em silêncio — o recurso é opcional por definição. */
function gravar(m: Mapa): void {
  try {
    localStorage.setItem(CHAVE, JSON.stringify(m));
  } catch {
    /* modo privado, cota cheia ou armazenamento desligado */
  }
}

/** O armazenamento está disponível de fato? Usado para não prometer o que não dá. */
export function mapaDisponivel(): boolean {
  try {
    const t = '__ppp__';
    localStorage.setItem(t, '1');
    localStorage.removeItem(t);
    return true;
  } catch {
    return false;
  }
}

/**
 * Registra a conclusão de uma ferramenta e funde o que ela descobriu.
 *
 * Campos novos sobrescrevem os antigos de propósito: se a pessoa refez a
 * ferramenta de rotina e agora consegue 4 dias em vez de 3, o dado novo é
 * o verdadeiro. Valores `undefined` não apagam o que já existe.
 */
export function registrar(id: FerramentaId, perfil: PerfilMapa = {}): Mapa {
  const m = lerMapa();
  m.concluidas[id] = hoje();
  m.atualizadoEm = hoje();
  for (const [k, v] of Object.entries(perfil)) {
    if (v !== undefined && v !== null && v !== '') {
      (m.perfil as Record<string, unknown>)[k] = v;
    }
  }
  gravar(m);
  return m;
}

/** Guarda só a cidade, sem marcar etapa concluída. */
export function registrarCidade(slug?: string, nome?: string): void {
  if (!slug) return;
  const m = lerMapa();
  m.perfil.cidadeSlug = slug;
  if (nome) m.perfil.cidadeNome = nome;
  m.atualizadoEm = hoje();
  gravar(m);
}

/** Apaga tudo. Chamado pelo botão "apagar meus dados". */
export function apagarMapa(): void {
  try {
    localStorage.removeItem(CHAVE);
  } catch {
    /* nada a fazer */
  }
}
