import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'indaial-sc',
  nome: 'Indaial',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'indaialense',
  tipo: 'cidade',

  populacao: 71549,
  populacaoAno: 2022,
  idhm: 0.777,
  idhmClasse: 'alto',
  altitudeM: 64,

  resumoEconomico:
    'Conhecida como o "Portal do Vale Europeu", Indaial fica no Médio Vale do Itajaí, na margem esquerda do rio Itajaí-Açu, a poucos quilômetros de Blumenau. De colonização majoritariamente alemã, é uma cidade industrial com base têxtil e metalmecânica, integrada à economia do entorno e marcada pela tradição germânica na cultura, na gastronomia e no folclore.',

  mercado:
    'A cena fitness acompanha o porte de cidade média catarinense, com academias locais consolidadas e redes presentes no Centro e nos bairros mais movimentados. A proximidade com Blumenau amplia as opções, e a forte cultura de ciclismo do Vale do Itajaí cria espaço para acompanhamento de personal trainers voltado a corrida, pedal e preparação física geral.',

  bairrosNobres: ['Centro', 'Tapajós', 'Nações', 'Estados'],
  bairrosPopulares: ['Carijós', 'Benedito', 'Ribeirão das Pedras', 'Encano'],

  parques: [
    {
      nome: 'Parque Ecológico Municipal',
      descricao:
        'Área verde da cidade voltada ao lazer e ao contato com a natureza, com trilhas e espaços ao ar livre usados para caminhada e atividades físicas no dia a dia.',
    },
    {
      nome: 'Orla e margens do rio Itajaí-Açu',
      descricao:
        'O rio que corta a cidade e suas margens oferecem áreas planas para caminhada e corrida, integradas à paisagem urbana do Vale do Itajaí.',
    },
    {
      nome: 'Parque Ribeirão das Pedras',
      descricao:
        'Amplo espaço usado para eventos e atividades ao ar livre, com pistas e grandes áreas abertas que servem a caminhadas e práticas esportivas.',
    },
  ],
  ciclovias:
    'Indaial integra o Circuito Vale Europeu de cicloturismo, rota consagrada que passa por cidades do Vale do Itajaí como Timbó, Pomerode, Rodeio e Apiúna, reforçando a cultura de pedal da região.',

  clima:
    'O clima é subtropical úmido, típico do Vale do Itajaí, com chuvas bem distribuídas ao longo do ano e invernos amenos. Há histórico de enchentes do rio Itajaí-Açu em períodos de chuva intensa, com bairros baixos sujeitos a alagamentos.',
  climaTreino:
    'O treino ao ar livre é confortável na maior parte do ano, mas em episódios de chuva forte é importante acompanhar os alertas da Defesa Civil, já que áreas próximas ao rio podem ser afetadas. Ter um plano B em academia ajuda a manter a constância nos meses mais chuvosos.',

  mobilidade:
    'O principal eixo é a BR-470, em duplicação, que liga Indaial a Blumenau e ao litoral (Itajaí e Navegantes) de um lado e ao interior do estado de outro. A proximidade com Blumenau facilita o deslocamento e amplia o acesso a estrutura esportiva na região.',

  corridas: [
    {
      nome: 'Corrida de Verão de Indaial',
      descricao:
        'Prova de rua realizada no Centro da cidade, com largada próxima à Prefeitura, reunindo corredores da região em percursos de rua.',
    },
    {
      nome: 'Provas do calendário do Vale do Itajaí',
      descricao:
        'Indaialenses participam de corridas e desafios de ciclismo espalhados pelas cidades vizinhas do Vale, num calendário regional ativo ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina a tradição germânica dos clubes e festas com forte presença do ciclismo e da corrida de rua, favorecidos pela paisagem do Vale do Itajaí e pelos circuitos que ligam as cidades vizinhas.',
  academias:
    'A oferta reúne academias locais e redes presentes no Centro e nos bairros mais movimentados, complementadas pelos parques e pelas margens do rio para treino ao ar livre.',

  destaquesFitness: [
    'Cidade do Médio Vale do Itajaí, o "Portal do Vale Europeu", a poucos minutos de Blumenau.',
    'Integra o Circuito Vale Europeu de cicloturismo, com forte cultura de pedal.',
    'Parque Ecológico Municipal e margens do rio Itajaí-Açu para caminhada e corrida.',
    'Calendário ativo de corridas de rua, como a Corrida de Verão de Indaial.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 760,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade industrial de tradição alemã no Vale do Itajaí, Indaial alia boa qualidade de vida a uma cultura ativa de ciclismo e corrida. Um personal trainer ajuda a aproveitar os parques, as margens do rio e a estrutura da região com método, levando em conta o clima úmido e a rotina de quem mora no Médio Vale.',

  vizinhas: ['blumenau-sc', 'gaspar-sc', 'rio-do-sul-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Indaial', url: 'https://cidades.ibge.gov.br/brasil/sc/indaial/panorama' },
    { nome: 'Prefeitura de Indaial', url: 'https://indaial.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
