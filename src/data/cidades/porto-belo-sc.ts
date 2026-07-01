import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'porto-belo-sc',
  nome: 'Porto Belo',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'porto-belense',
  tipo: 'cidade',

  populacao: 27688,
  populacaoAno: 2022,
  idhm: 0.760,
  idhmClasse: 'alto',
  altitudeM: 4,

  resumoEconomico:
    'Município do litoral norte catarinense, Porto Belo tem no turismo de praia e no turismo náutico o seu principal motor econômico. A cidade se firmou como porto de escala de cruzeiros marítimos — recebeu mais de 70 mil visitantes na temporada 2024/2025 — e mantém forte tradição pesqueira, com colônias de pescadores nas enseadas e a vocação para passeios de barco à Ilha de Porto Belo. Comércio, gastronomia, serviços de hospedagem e marinas completam a economia, que multiplica seu movimento na alta temporada de verão.',

  mercado:
    'O mercado fitness de Porto Belo é fortemente sazonal: cresce no verão, quando a população flutuante de turistas e veranistas se soma aos moradores. A orla e as praias funcionam como espaço natural de treino, e a procura por personal trainers tende a aumentar entre quem quer manter a rotina de exercícios na temporada ou aproveitar o cenário litorâneo para treinos ao ar livre.',

  bairrosNobres: ['Centro', 'Perequê', 'Araçá', 'Santa Luzia'],
  bairrosPopulares: ['Baixio', 'Vila Nova', 'Alto Perequê', 'Encano'],

  parques: [
    {
      nome: 'Praia do Perequê',
      descricao:
        'A maior praia do município e a de melhor infraestrutura, com orla, calçadão e quiosques — o trecho mais usado para caminhada, corrida e treino ao ar livre à beira-mar.',
    },
    {
      nome: 'Ilha de Porto Belo',
      descricao:
        'Ilha a cerca de 900 metros da costa, acessível apenas por barco, com duas praias de águas calmas, trilha ecológica e mirantes — cenário para atividade física em meio à natureza preservada.',
    },
    {
      nome: 'Praia do Araçá',
      descricao:
        'Enseada tranquila e de estrutura rústica, ligada à tradição pesqueira dos primeiros colonizadores; a orla e a vila servem de percurso calmo para caminhada e corrida leve.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é pontual e concentrada em trechos da área urbana e da orla; boa parte do pedal e da corrida acontece nas vias que ligam o Centro às praias e ao longo dos calçadões à beira-mar.',

  clima:
    'O clima é subtropical úmido, ameno na maior parte do ano, com chuvas bem distribuídas e temperatura média anual em torno de 20 °C. O verão (de dezembro a março) é quente e úmido, com termômetros que podem passar de 30 °C e sensação térmica elevada pela umidade; o outono e o inverno são mais amenos, e primavera e outono costumam ter variações bruscas entre manhãs frescas e tardes quentes.',
  climaTreino:
    'No verão úmido, o ideal é treinar cedo ou no fim da tarde, com hidratação reforçada e atenção à sensação térmica; nas demais estações, o clima ameno favorece o treino ao ar livre na orla praticamente o ano todo, aproveitando os dias de menos movimento fora da alta temporada.',

  mobilidade:
    'O acesso a Porto Belo se dá pela BR-101, que conecta a cidade a Florianópolis (ao sul) e a Balneário Camboriú e Curitiba (ao norte, via BR-376); o transporte urbano é feito por ônibus. Na alta temporada, o fluxo turístico e as escalas de cruzeiros aumentam o trânsito nos acessos às praias, e a cidade tem investido em terminal de passageiros junto ao trapiche municipal.',

  corridas: [
    {
      nome: 'Volta do Estaleiro',
      descricao:
        'Prova de corrida realizada no litoral porto-belense, com percurso que explora a orla e enseadas da região, associando a corrida ao cenário de praias do município.',
    },
    {
      nome: 'Circuito de corridas do litoral norte',
      descricao:
        'Provas de rua que percorrem cidades do litoral norte catarinense e passam por Porto Belo e municípios vizinhos, reforçando a vocação da região para corridas à beira-mar.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Porto Belo é marcada pelo mar: esportes náuticos, stand-up paddle, mergulho, caminhada e corrida na orla convivem com a tradição pesqueira das enseadas. A vida ao ar livre gira em torno das praias, que servem de espaço de lazer e de treino ao longo de todo o ano.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros próximos às praias, com porte compatível com uma cidade litorânea de temporada.',

  destaquesFitness: [
    'Litoral norte catarinense com praias como Perequê, Bombas e Araçá para treino ao ar livre.',
    'Ilha de Porto Belo e turismo náutico: passeios de barco, trilha e esportes no mar.',
    'Clima subtropical ameno boa parte do ano, com verão quente e úmido que pede treino cedo ou à tarde.',
    'Economia de turismo, cruzeiros e pesca, com mercado fitness fortemente sazonal.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 135,
    mensalMin: 280,
    mensalMax: 800,
    onlineMin: 130,
    onlineMax: 390,
  },

  conclusao:
    'Cidade litorânea e turística, Porto Belo oferece praias, orla e cenário náutico que convidam ao treino ao ar livre o ano inteiro. Um personal trainer ajuda a montar uma rotina que aproveite o clima ameno, ajuste os horários ao calor do verão e mantenha a constância dentro e fora da alta temporada.',

  vizinhas: ['itapema-sc', 'balneario-camboriu-sc', 'tijucas-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Porto Belo', url: 'https://cidades.ibge.gov.br/brasil/sc/porto-belo/panorama' },
    { nome: 'Prefeitura de Porto Belo', url: 'https://portobelo.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
