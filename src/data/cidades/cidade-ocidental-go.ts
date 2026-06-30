import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cidade-ocidental-go',
  nome: 'Cidade Ocidental',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'ocidentalense',
  tipo: 'cidade',

  populacao: 91767,
  populacaoAno: 2022,
  idhm: 0.717,
  idhmClasse: 'alto',
  altitudeM: 1000,

  resumoEconomico:
    'Cidade Ocidental fica no Entorno Sul do Distrito Federal e integra a RIDE, a Região Integrada de Desenvolvimento do DF e Entorno. Originada de um loteamento da década de 1970 e emancipada de Luziânia em 1990, foi o 17º município mais populoso de Goiás no Censo 2022 e um dos que mais cresceram na última década. Cortada pela BR-040, mantém forte ligação com Brasília, para onde se desloca diariamente boa parte de quem mora aqui. A economia local é puxada por comércio e serviços, com peso crescente de condomínios e loteamentos planejados como o Alphaville Planalto Central.',

  mercado:
    'O perfil de cidade fortemente ligada ao DF molda o mercado fitness: público que divide a rotina entre Cidade Ocidental e Brasília, com demanda por horários flexíveis. A oferta se concentra em academias de bairro nas Super Quadras e nos parques residenciais, somadas a estúdios menores e a personal trainers que atendem em casa ou online — formato que cai bem para quem enfrenta o trajeto diário pela BR-040 até a capital. Em condomínios como o Alphaville Planalto Central, há ainda demanda por atendimento dentro da própria estrutura de lazer.',

  bairrosNobres: ['Alphaville Planalto Central', 'Setor de Mansões Suleste', 'Condomínio Damha', 'Colina Verde'],
  bairrosPopulares: ['Super Quadras (Centro)', 'Parque Nápolis', 'Jardim ABC', 'Residencial São Mateus'],

  parques: [
    {
      nome: 'Praças das Super Quadras',
      descricao:
        'As praças distribuídas pelas Super Quadras do centro concentram caminhada, lazer e treino ao ar livre, servindo de ponto de apoio nos setores residenciais mais adensados.',
    },
    {
      nome: 'Áreas verdes do Alphaville Planalto Central',
      descricao:
        'O loteamento planejado reúne ruas arborizadas e estrutura de lazer usada para corrida e atividade física, e já sediou etapas de provas de rua na região.',
    },
    {
      nome: 'Espaços esportivos municipais',
      descricao:
        'Quadras e equipamentos esportivos da rede municipal apoiam a prática de exercícios e eventos comunitários nos bairros.',
    },
  ],
  ciclovias:
    'A mobilidade ativa ainda é incipiente e convive com vias movimentadas; o desenho em quadras do centro favorece caminhadas curtas, enquanto os trechos próximos à BR-040 exigem atenção redobrada de pedestres e ciclistas.',

  clima:
    'O clima é tropical de savana (Cerrado), típico do Planalto Central, com temperaturas amenizadas pela altitude (cerca de 1.000 m) e duas estações bem marcadas: chuvas concentradas entre novembro e março e período seco entre maio e setembro.',
  climaTreino:
    'Dá para treinar ao ar livre o ano todo; na estação seca, a baixa umidade característica do Cerrado pede atenção redobrada à hidratação, sobretudo nos horários mais quentes do dia.',

  mobilidade:
    'Cortada pela BR-040, Cidade Ocidental fica entre Valparaíso de Goiás e Luziânia, no Entorno Sul do DF, com forte fluxo pendular rumo a Brasília. O deslocamento diário pela rodovia até a capital é parte da rotina de boa parte da população, o que pesa na escolha de horários e locais de treino.',

  corridas: [
    {
      nome: 'ASICS Run Challenge — Etapa Brasília',
      descricao:
        'Circuito de corrida de rua com percursos de 4 km, 7 km e 15 km que já teve etapa sediada no Alphaville Planalto Central, em Cidade Ocidental, atraindo corredores de toda a região do DF e Entorno.',
    },
    {
      nome: 'Corrida do Empreendedorismo',
      descricao:
        'Prova realizada no Alphaville Planalto Central, com opções de caminhada de 3 km e corridas de 5 km e 10 km, reforçando o calendário esportivo local.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva cresce junto com a cidade, apoiada em corridas de rua sediadas em loteamentos planejados, no uso de praças das Super Quadras e em iniciativas comunitárias. A proximidade com o Distrito Federal aproxima a população de um circuito esportivo mais amplo na capital.',
  academias:
    'A oferta é dominada por academias de bairro distribuídas pelas Super Quadras e pelos parques residenciais, complementadas por estúdios menores e por personal trainers que atendem em casa ou online — útil para quem se desloca diariamente até Brasília.',

  destaquesFitness: [
    'Cidade do Entorno Sul do DF em crescimento acelerado, com demanda fitness em expansão.',
    'Corridas de rua sediadas no Alphaville Planalto Central atraem atletas da região.',
    'Praças das Super Quadras e áreas verdes usadas para treino ao ar livre.',
    'Perfil de forte ligação com Brasília favorece atendimento domiciliar e online.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 680,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade do Entorno Sul do DF em rápido crescimento, Cidade Ocidental combina a rotina puxada de quem se divide com Brasília e uma rede fitness de bairro em expansão. Um personal trainer ajuda a encaixar o treino nessa rotina — na academia da quadra, em casa ou online — com um plano sob medida.',

  vizinhas: ['valparaiso-de-goias-go', 'luziania-go', 'brasilia-df'],

  fontes: [
    { nome: 'IBGE Cidades — Cidade Ocidental', url: 'https://cidades.ibge.gov.br/brasil/go/cidade-ocidental/panorama' },
    { nome: 'Prefeitura de Cidade Ocidental', url: 'https://cidadeocidental.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
