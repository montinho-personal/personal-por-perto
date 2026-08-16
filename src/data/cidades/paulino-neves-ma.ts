import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'paulino-neves-ma',
  nome: 'Paulino Neves',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'paulinense',
  tipo: 'cidade',

  populacao: 17056,
  populacaoAno: 2022,

  resumoEconomico:
    'Entre Barreirinhas e Tutóia, na rota que liga os Lençóis Maranhenses ao Delta do Parnaíba, Paulino Neves guarda os Pequenos Lençóis — o "irmão menor" do parque nacional, com dunas livres, lagoas de chuva e o Rio Novo serpenteando até o mar. A economia combina agricultura familiar, pesca e um turismo que cresce na esteira da Rota das Emoções, com passeios de 4x4, quadriciclo e barco.',

  mercado:
    'O mercado formal de treino é mínimo, concentrado na sede, com o perfil das cidades pequenas do litoral maranhense: trabalhadores do campo, da pesca e do turismo que treinam no cotidiano — e condutores e guias que precisam de perna e fôlego para as dunas todos os dias. O acompanhamento online é o formato que melhor alcança a demanda local.',

  bairrosNobres: ['Centro', 'Beira Rio', 'Novo Paulino', 'Barro Vermelho'],
  bairrosPopulares: ['Caburé (estrada)', 'Sucuruju', 'Boa Vista', 'Alto Bonito'],

  parques: [
    {
      nome: 'Pequenos Lençóis Maranhenses',
      descricao:
        'O campo de dunas livres entre o Rio Novo e o mar: lagoas na estação das chuvas, areia a perder de vista e nenhuma corda de isolamento — subir e descer duna aqui é o treino de perna mais bonito do Brasil.',
    },
    {
      nome: 'Rio Novo',
      descricao:
        'O rio que desenha a cidade e deságua entre as dunas, com passeios de barco, banho e remo — a "academia aquática" local.',
    },
    {
      nome: 'Praia do Caburé (região)',
      descricao:
        'A faixa de areia entre o rio Preguiças e o mar, na divisa com Barreirinhas, destino clássico dos passeios que partem da região.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária; as ruas de areia da sede e as travessias entre povoados são o terreno de quem pedala — pneu largo obrigatório.',

  clima:
    'Tropical quente e úmido, com chuvas de janeiro a junho — quando as lagoas dos Pequenos Lençóis enchem — e segundo semestre seco e ventoso.',
  climaTreino:
    'Manhã cedo e fim de tarde são as janelas de treino; caminhar e correr na areia fofa multiplica o esforço e cobra panturrilha, tornozelo e fôlego. Na estação das lagoas, o banho pós-treino é recompensa garantida.',

  mobilidade:
    'A MA-315 corta o município ligando Barreirinhas (cerca de 40 km) a Tutóia; boa parte dos deslocamentos locais é por estradas de areia, de moto, quadriciclo ou 4x4.',

  corridas: [
    {
      nome: 'Eventos da temporada e festas locais',
      descricao:
        'O calendário esportivo acompanha as festas da cidade e a temporada turística, com torneios de futebol e atividades na beira do Rio Novo.',
    },
  ],
  culturaEsportiva:
    'Aqui o treino funcional é paisagem: subir duna, remar no Rio Novo, caminhar quilômetros de areia entre povoados. O futebol de várzea e de praia completa a cena — e os guias e condutores locais têm o condicionamento que muita esteira de academia nunca viu.',
  academias:
    'A oferta formal é mínima e concentrada na sede; o treino de força acontece em espaços simples, em casa ou a distância, com as dunas como complemento de cardio que nenhuma cidade grande replica.',

  destaquesFitness: [
    'Pequenos Lençóis: dunas livres e lagoas sazonais como campo de treino natural.',
    'Rio Novo para remo, natação e travessias.',
    'Areia fofa em toda parte — o "peso extra" invisível de cada caminhada.',
    'Meio do caminho da Rota das Emoções, entre Barreirinhas e Tutóia.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 105,
    mensalMin: 240,
    mensalMax: 600,
    onlineMin: 130,
    onlineMax: 330,
  },

  conclusao:
    'Paulino Neves treina na areia desde sempre: cada ida ao mercado é caminhada em duna, cada passeio é subida e descida no maior parquinho natural do Maranhão. Um personal trainer daqui lapida o que o território já começou — pernas, fôlego e tornozelos à prova de Lençóis, com acompanhamento presencial ou online.',

  vizinhas: ['barreirinhas-ma', 'tutoia-ma'],

  fontes: [
    { nome: 'IBGE Cidades — Paulino Neves', url: 'https://cidades.ibge.gov.br/brasil/ma/paulino-neves/panorama' },
    { nome: 'Prefeitura de Paulino Neves', url: 'https://paulinoneves.ma.gov.br/' },
    { nome: 'Rota das Emoções', url: 'https://rotadasemocoes.com.br/' },
  ],
  atualizadoEm: '2026-08-16',
};
