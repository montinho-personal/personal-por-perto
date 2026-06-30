import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'oiapoque-ap',
  nome: 'Oiapoque',
  uf: 'AP',
  estado: 'Amapá',
  estadoSlug: 'amapa',
  regiao: 'Norte',
  gentilico: 'oiapoquense',
  tipo: 'cidade',

  populacao: 27482,
  populacaoAno: 2022,
  idhm: 0.66,
  idhmClasse: 'médio',
  altitudeM: 10,

  resumoEconomico:
    'No extremo norte do Brasil, à margem direita do rio Oiapoque, a cidade marca o ponto onde o país faz fronteira com a Guiana Francesa, território ultramarino da França. A economia gira em torno do comércio de fronteira — movimentado pela travessia do rio e pela Ponte Binacional Franco-Brasileira, inaugurada em 2017 —, do garimpo de ouro histórico na região, da pesca artesanal e do extrativismo, com forte presença de povos indígenas (Karipuna, Galibi-Marworno, Palikur e Galibi Kali’na) nas terras dos rios Uaçá e Oiapoque. A expectativa em torno da exploração de petróleo na costa da Foz do Amazonas tem atraído novos moradores e impulsionado a construção na cidade.',

  mercado:
    'Cidade pequena, fronteiriça e distante da capital, Oiapoque tem um mercado fitness enxuto, concentrado em poucas academias de musculação e treino funcional no perímetro urbano. A procura por personal trainers ainda é incipiente, ligada principalmente a quem busca acompanhamento individual para treinar diante do calor e da umidade equatoriais e para manter constância onde a oferta de estrutura é limitada.',

  bairrosNobres: ['Centro', 'Universidade'],
  bairrosPopulares: ['Infraero', 'Nova Esperança', 'Nova União', 'Planalto'],

  parques: [
    {
      nome: 'Orla do Rio Oiapoque',
      descricao:
        'A frente da cidade voltada para o rio, com monumentos e calçadões, é o principal espaço público de caminhada e corrida — ponto de encontro da população e cartão de visita da fronteira com a Guiana Francesa.',
    },
    {
      nome: 'Entorno da Ponte Binacional Franco-Brasileira',
      descricao:
        'A ponte estaiada sobre o rio Oiapoque, que liga o Brasil a Saint-Georges-de-l’Oyapock, virou marco da cidade; seu entorno serve de referência para percursos a pé e provas de corrida na região fronteiriça.',
    },
    {
      nome: 'Margens e igarapés da Amazônia',
      descricao:
        'A cidade é cercada pela floresta amazônica e por cursos d’água; trilhas, estradas vicinais e as margens do rio oferecem opções de atividade ao ar livre, sempre condicionadas ao regime intenso de chuvas equatoriais.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é praticamente inexistente; o pedal e a corrida acontecem nas próprias vias urbanas e na orla, onde o tráfego é mais leve por se tratar de uma cidade pequena.',

  clima:
    'O clima é equatorial, quente e muito úmido o ano inteiro, com temperaturas elevadas e chuvas abundantes. O regime de precipitação é marcado por uma estação chuvosa intensa, que concentra o maior volume de água ao longo de grande parte do ano, e um período mais seco entre agosto e novembro, quando as chuvas diminuem.',
  climaTreino:
    'O calor constante combinado com a alta umidade dificulta a dissipação do suor, exigindo treinar bem cedo ou no fim da tarde, com hidratação reforçada e atenção à intensidade. No período mais chuvoso, ambientes cobertos ganham importância; a janela mais seca, de agosto a novembro, tende a favorecer o treino ao ar livre.',

  mobilidade:
    'A ligação terrestre com o restante do estado é feita pela BR-156, que conecta Oiapoque a Macapá, a cerca de 590 km — trecho que ainda tem partes sem pavimentação e pode sofrer com as chuvas, tornando a viagem demorada. A travessia do rio Oiapoque por barco e a Ponte Binacional estruturam o fluxo internacional com a Guiana Francesa, e o deslocamento interno se dá em distâncias curtas dentro da malha urbana.',

  corridas: [
    {
      nome: 'Corrida de Oiapoque',
      descricao:
        'Prova de rua realizada no município, com largada associada à Ponte Binacional e percurso até a orla, valorizando a integração fronteiriça e o incentivo ao esporte na cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso da orla do rio Oiapoque para caminhada e corrida, a forte tradição da pesca e a vida ribeirinha, somadas a provas de rua que exploram o simbolismo da fronteira — tudo moldado pelo calor e pela umidade equatoriais.',
  academias:
    'A oferta resume-se a poucas academias locais de musculação e treino funcional na área urbana, com porte compatível com uma cidade pequena e distante dos grandes centros.',

  destaquesFitness: [
    'Cidade de fronteira com a Guiana Francesa, ligada por barco e pela Ponte Binacional sobre o rio Oiapoque.',
    'Orla do rio Oiapoque como principal espaço de caminhada e corrida ao ar livre.',
    'Clima equatorial quente e muito úmido, que pede planejamento de horário e hidratação no treino.',
    'Economia de comércio de fronteira, garimpo, pesca e extrativismo, com forte presença de povos indígenas.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'No extremo norte do país, marcada pelo rio, pela floresta e pela fronteira com a Guiana Francesa, Oiapoque pede um treino adaptado ao calor e à umidade equatoriais e que aproveite a orla como espaço ao ar livre. Um personal trainer ajuda a organizar a rotina, escolher os melhores horários e manter a constância onde a estrutura é limitada e o clima é desafiador.',

  vizinhas: ['macapa-ap', 'santana-ap'],

  fontes: [
    { nome: 'IBGE Cidades — Oiapoque', url: 'https://cidades.ibge.gov.br/brasil/ap/oiapoque/panorama' },
    { nome: 'Governo do Amapá — Oiapoque', url: 'https://www.portal.ap.gov.br/conheca/oiapoque' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
