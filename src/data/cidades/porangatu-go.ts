import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'porangatu-go',
  nome: 'Porangatu',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'porangatuense',
  tipo: 'cidade',

  populacao: 45512,
  populacaoAno: 2025,
  idhm: 0.727,
  idhmClasse: 'alto',
  pibPerCapita: 46772.74,
  pibPerCapitaAno: 2023,
  altitudeM: 390,

  resumoEconomico:
    'Considerada a principal cidade do norte de Goiás, Porangatu — nome tupi que significa "paisagem bela" — foi emancipada em 1948 e teve sua importância regional multiplicada a partir de 1958, quando a construção da rodovia Belém-Brasília (BR-153) passou pelo município e o transformou em entroncamento estratégico entre o Centro-Sul e a Amazônia Legal. A pecuária de corte e leite é o pilar histórico da economia — o município está entre os maiores rebanhos bovinos do estado, com mais de 470 mil cabeças — ao lado de lavouras de grãos, comércio, serviços e pequenas indústrias de transformação, com Porangatu tendo sido pioneira na região no cultivo da soja.',

  mercado:
    'Como maior polo econômico do norte goiano, Porangatu tem um mercado fitness mais amplo que o de cidades vizinhas de menor porte, com academias de musculação e treino funcional atendendo tanto a população local quanto o público de passagem pela BR-153. A renda ligada à pecuária e ao comércio regional sustenta a procura por personal trainer entre quem busca acompanhamento individualizado, muitas vezes fora do horário comercial de fazendas e negócios da família.',

  bairrosNobres: ['Setor Central', 'Jardim Goiás'],
  bairrosPopulares: ['Aldeia do Vale', 'Bela Vista', 'Jardim Sol Nascente', 'Morada Nova', 'Vila Dias'],

  parques: [
    {
      nome: 'Praça Ângelo Rosa',
      descricao:
        'Praça central arborizada, ao lado do Centro Cultural de Porangatu, ponto de encontro e caminhada no coração da cidade, num dos setores de maior circulação do comércio local.',
    },
    {
      nome: 'Praças e áreas de lazer do Setor Central',
      descricao:
        'O traçado do centro concentra as principais praças e calçadas arborizadas da cidade, usadas informalmente para caminhada e atividade física ao ar livre pelos moradores.',
    },
  ],
  ciclovias:
    'Porangatu não conta com uma malha cicloviária estruturada; o pedal urbano acontece nas ruas do Setor Central e nas margens da BR-153, o que exige atenção redobrada pelo intenso fluxo de caminhões na rodovia.',

  clima:
    'O clima é tropical, com verão chuvoso e um inverno seco marcado, típico do norte de Goiás, com temperaturas elevadas ao longo de boa parte do ano e baixa umidade do ar entre maio e setembro.',
  climaTreino:
    'O calor constante e a baixa umidade do período seco pedem treino ao ar livre nos horários mais amenos — início da manhã ou fim de tarde — com hidratação reforçada; no verão chuvoso, pancadas de chuva à tarde tornam útil ter uma alternativa de treino coberto.',

  mobilidade:
    'Porangatu é cortada pela BR-153, a histórica rodovia Belém-Brasília, que a conecta a Uruaçu e Goiânia (cerca de 426 km) ao sul e ao Tocantins e à região Norte do país. O entroncamento rodoviário é parte central da economia e da logística da cidade, com o transporte urbano feito por ônibus e o acesso à zona rural e aos municípios vizinhos dependendo majoritariamente de veículo próprio.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva e cultural de Porangatu gira em torno de eventos de grande porte para o padrão do interior — um dos carnavais de rua mais tradicionais do interior goiano, com mais de 20 anos de história, a Mostra Nacional de Teatro (TeNpo) e o Festival Goyazes de música independente —, ao lado do futebol amador e da caminhada pelas praças do Setor Central.',
  academias:
    'A oferta de academias de musculação e treino funcional é a mais consistente entre os municípios do norte de Goiás, concentrada no Setor Central, refletindo o papel de Porangatu como referência regional de comércio e serviços na BR-153.',

  destaquesFitness: [
    'Maior cidade do norte de Goiás e entroncamento histórico da rodovia Belém-Brasília (BR-153), pavimentada em 1958.',
    'Um dos maiores rebanhos bovinos do estado, com mais de 470 mil cabeças, ao lado de lavouras de grãos.',
    'Carnaval de rua tradicional, Festival Goyazes e Mostra Nacional de Teatro (TeNpo) movimentam o calendário cultural.',
    'Clima tropical com inverno seco pede hidratação reforçada e treino nos horários mais amenos do dia.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 115,
    mensalMin: 270,
    mensalMax: 660,
    onlineMin: 125,
    onlineMax: 330,
  },

  conclusao:
    'Maior cidade do norte de Goiás e entroncamento histórico da BR-153, Porangatu tem na pecuária, no comércio regional e nos grandes eventos culturais o pulso de sua economia. Um personal trainer ajuda a organizar o treino com regularidade, ajustando horários ao calor e à baixa umidade do período seco e aproveitando as praças do Setor Central para o treino ao ar livre.',

  vizinhas: ['goianesia-go'],

  fontes: [
    { nome: 'IBGE Cidades — Porangatu', url: 'https://cidades.ibge.gov.br/brasil/go/porangatu/panorama' },
    { nome: 'Prefeitura de Porangatu — História', url: 'https://porangatu.go.gov.br/historia/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Goiás Turismo — Porangatu', url: 'https://www.goiasturismo.go.gov.br/pt/destinos/porangatu' },
  ],
  atualizadoEm: '2026-07-05',
};
