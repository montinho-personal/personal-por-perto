import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'garibaldi-rs',
  nome: 'Garibaldi',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'garibaldense',
  tipo: 'cidade',

  populacao: 34335,
  populacaoAno: 2022,
  idhm: 0.786,
  idhmClasse: 'alto',
  altitudeM: 640,

  resumoEconomico:
    'Conhecida como a Capital Nacional do Espumante, Garibaldi fica na Serra Gaúcha, em região de forte colonização italiana. A economia é diversificada: a indústria responde pela maior parte do valor adicionado, com destaque para a metalmecânica (a cidade abriga uma das unidades da Tramontina e dezenas de empresas do setor metalúrgico) e para a agroindústria do vinho e do espumante. A vitivinicultura e o enoturismo, ancorados em vinícolas tradicionais e no passeio da Maria Fumaça que liga Bento Gonçalves, Garibaldi e Carlos Barbosa, completam uma matriz produtiva que combina campo, fábrica e turismo.',

  mercado:
    'Por ser uma cidade média da Serra Gaúcha, com bom poder de consumo e forte presença industrial, Garibaldi tem um mercado fitness em consolidação, formado por academias locais e estúdios de treino. A procura por personal trainers tende a crescer entre trabalhadores da indústria e do setor de serviços que buscam treino orientado, e entre quem quer aproveitar o clima ameno de serra para atividades ao ar livre boa parte do ano.',

  bairrosNobres: ['Centro', 'Glória', 'Borghetto'],
  bairrosPopulares: ['Cinquentenário', 'Marcorama', 'São José da Costa Real', 'Tamandaré'],

  parques: [
    {
      nome: 'Estação Maria Fumaça',
      descricao:
        'Ponto turístico e de encontro da cidade, a estação do trem do vinho tem uma ampla área verde no entorno, muito usada por famílias para lazer, caminhada e descanso ao ar livre.',
    },
    {
      nome: 'Passeio da Barragem',
      descricao:
        'Percurso à beira da barragem de Garibaldi, junto aos trilhos da Maria Fumaça, com paisagem bucólica e travessia sobre ponte de pedra — trecho procurado para caminhada e corrida leve.',
    },
    {
      nome: 'Trilha do Morro da Antena',
      descricao:
        'Trilha que leva a um mirante com vista panorâmica da cidade e das montanhas ao redor, opção para quem gosta de caminhada em meio à natureza da serra.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em alguns trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e nas estradas do interior, em meio aos parreirais, com o relevo de serra exigindo preparo para as subidas.',

  clima:
    'O clima é subtropical de altitude, marcado pelas quatro estações bem definidas. A cerca de 640 metros, Garibaldi tem invernos frios — com mínimas que se aproximam de 0 °C, manhãs de geada e neblina — e verões amenos, com dias quentes pontuais. As chuvas são bem distribuídas ao longo do ano.',
  climaTreino:
    'O clima ameno de serra favorece o treino ao ar livre na maior parte do ano. No inverno, o frio e a geada pedem aquecimento mais longo e roupas adequadas, especialmente cedo da manhã; no verão, as temperaturas raramente chegam a extremos, o que torna a estação confortável para atividade externa.',

  mobilidade:
    'Garibaldi fica a cerca de 110 km de Porto Alegre e é vizinha de Bento Gonçalves e Carlos Barbosa, na rota do vinho da Serra Gaúcha. O acesso se dá por rodovias estaduais que cortam a região vitivinícola, e o transporte urbano é feito por ônibus. A ferrovia, hoje voltada ao passeio turístico da Maria Fumaça, é parte marcante da identidade e da paisagem da cidade.',

  corridas: [
    {
      nome: 'Rústica Noturna de Garibaldi',
      descricao:
        'Prova de corrida de rua promovida pela prefeitura, com percurso de cerca de 7 km pelas principais ruas da cidade, reunindo atletas de Garibaldi e de municípios vizinhos da serra.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura a tradição italiana e o gosto pela vida ao ar livre típicos da serra, com caminhadas e pedaladas em meio aos parreirais, o uso da área da estação e do passeio da barragem para atividade física, e provas de rua organizadas pela cidade.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional e por estúdios, distribuídos pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média e industrializada da Serra Gaúcha.',

  destaquesFitness: [
    'Capital Nacional do Espumante, na Serra Gaúcha, com forte herança da colonização italiana.',
    'Clima subtropical de altitude, com invernos frios e verões amenos que favorecem o treino ao ar livre.',
    'Área da Estação Maria Fumaça e passeio da barragem como espaços de caminhada e corrida.',
    'Economia diversificada, com indústria metalmecânica, vitivinicultura e enoturismo.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 760,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade de serra, industrializada e com forte tradição vinícola, Garibaldi reúne clima ameno e espaços ao ar livre que convidam à atividade física durante boa parte do ano. Um personal trainer ajuda a organizar a rotina aproveitando o relevo e o clima da região, ajustando o treino ao frio do inverno e mantendo a constância ao longo das estações.',

  vizinhas: ['bento-goncalves-rs', 'caxias-do-sul-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Garibaldi', url: 'https://cidades.ibge.gov.br/brasil/rs/garibaldi/panorama' },
    { nome: 'Prefeitura de Garibaldi', url: 'https://www.garibaldi.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
