import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'alem-paraiba-mg',
  nome: 'Além Paraíba',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'alemparaibano',
  tipo: 'cidade',

  populacao: 30717,
  populacaoAno: 2022,
  idhm: 0.726,
  idhmClasse: 'alto',
  altitudeM: 90,

  resumoEconomico:
    'Na Zona da Mata mineira, na divisa com o Rio de Janeiro e às margens do rio Paraíba do Sul, Além Paraíba nasceu do antigo Porto Novo do Cunha, ponto de travessia entre as margens mineira e fluminense do rio. A economia é puxada pelos serviços e pelo comércio, que atende também municípios vizinhos e o lado fluminense, seguidos pela indústria e pela administração pública; a agropecuária tem peso menor. A cidade tem forte herança ferroviária, ligada à Estrada de Ferro Leopoldina, que ajudou a escoar o café da região no século XIX.',

  mercado:
    'Cidade de pequeno porte no interior de Minas, Além Paraíba tem um mercado fitness enxuto, formado por academias de bairro e profissionais autônomos. A procura por personal trainers tende a se concentrar em quem busca acompanhamento mais próximo, treino para saúde e condicionamento, e no público que se prepara para as provas de corrida de rua que passaram a integrar o calendário local.',

  bairrosNobres: ['Centro', 'Santa Rita', 'Cidade Alta', 'São José'],
  bairrosPopulares: ['Porto Novo', 'Vila Laroca', 'Cidade Nova', 'Aeroporto'],

  parques: [
    {
      nome: 'Orla do Rio Paraíba do Sul',
      descricao:
        'O rio Paraíba do Sul corta a cidade e é sua principal referência geográfica; as margens e as avenidas junto à água servem de espaço para caminhada, corrida e pedal, com as pontes históricas ligando os dois lados da cidade.',
    },
    {
      nome: 'Ponte Metálica e entorno do Centro',
      descricao:
        'As pontes sobre o Paraíba do Sul, entre elas a antiga estrutura metálica, marcam a paisagem urbana e o percurso de quem treina no Centro e nas vias ribeirinhas.',
    },
    {
      nome: 'Estação de Porto Novo (patrimônio ferroviário)',
      descricao:
        'O conjunto ferroviário ligado à Leopoldina, no Centro, é referência histórica da cidade; o entorno das antigas estações e trilhos serve de cenário para caminhadas urbanas.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é modesta, típica de cidade pequena; boa parte do pedal e da corrida acontece nas avenidas junto ao rio e nas vias planas da parte baixa, evitando as ladeiras dos bairros mais altos.',

  clima:
    'O clima é tropical, quente no verão e ameno no inverno, com verão chuvoso (de novembro a março) e inverno mais seco. Ao longo do ano, as temperaturas costumam variar de cerca de 14 °C nas manhãs mais frias do inverno a mais de 30 °C nos dias quentes de verão, e a proximidade do rio deixa o ar úmido nos meses de calor.',
  climaTreino:
    'No verão, o calor e a umidade pedem treinos cedo pela manhã ou no fim da tarde, com boa hidratação; o inverno mais seco e ameno costuma ser o período mais confortável para atividades ao ar livre ao longo da orla e das vias da parte baixa.',

  mobilidade:
    'Além Paraíba fica em posição estratégica na divisa entre Minas e Rio de Janeiro, cortada pela BR-116 (ligação com o Rio de Janeiro e Teresópolis) e pela BR-393 (Rodovia Lúcio Meira, que segue pelo Sul Fluminense até a Via Dutra). O rio Paraíba do Sul e as pontes conectam as duas partes da cidade, e a herança da Estrada de Ferro Leopoldina marca a história logística do município. O transporte urbano é feito por ônibus.',

  corridas: [
    {
      nome: 'Meia Maratona Além Runners',
      descricao:
        'Prova de corrida de rua realizada na cidade com percursos de 5, 10 e 21 km, além de caminhada de 3 km, com apoio da prefeitura e forte adesão de atletas locais e da região.',
    },
    {
      nome: 'Corrida Outubro Rosa / Novembro Azul',
      descricao:
        'Evento de corrida e caminhada ligado às campanhas de saúde, que reúne a comunidade em provas de rua no calendário do município.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso das margens do rio Paraíba do Sul para caminhada e corrida, o futebol e as provas de rua que ganharam espaço no município, refletindo o crescimento do hábito de correr em cidades do interior mineiro.',
  academias:
    'A oferta é formada por academias de musculação e treino funcional de bairro, distribuídas pelo Centro e pelas áreas residenciais, com porte compatível com uma cidade pequena do interior de Minas.',

  destaquesFitness: [
    'Cidade às margens do rio Paraíba do Sul, com orla e pontes usadas para caminhada, corrida e pedal.',
    'Posição de divisa entre Minas e Rio de Janeiro, cortada pela BR-116 e pela BR-393.',
    'Calendário de corridas de rua em crescimento, como a Meia Maratona Além Runners.',
    'Forte herança ferroviária da Estrada de Ferro Leopoldina, ligada ao antigo Porto Novo do Cunha.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade ribeirinha e de divisa, Além Paraíba oferece a orla do rio Paraíba do Sul e vias planas para treinar, além de um calendário de corridas que vem crescendo. Um personal trainer ajuda a organizar a rotina de acordo com o clima quente do verão, a aproveitar os espaços à beira-rio e a manter a constância ao longo do ano.',

  vizinhas: ['cataguases-mg', 'muriae-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Além Paraíba', url: 'https://cidades.ibge.gov.br/brasil/mg/alem-paraiba/panorama' },
    { nome: 'Prefeitura de Além Paraíba', url: 'https://www.alemparaiba.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
