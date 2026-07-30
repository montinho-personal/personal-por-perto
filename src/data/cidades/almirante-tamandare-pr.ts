import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'almirante-tamandare-pr',
  nome: 'Almirante Tamandaré',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'tamandareense',
  tipo: 'cidade',

  populacao: 119825,
  populacaoAno: 2022,
  idhm: 0.699,
  idhmClasse: 'médio',
  altitudeM: 950,

  resumoEconomico:
    'Conurbada ao norte de Curitiba e integrante da Região Metropolitana, Almirante Tamandaré tem forte tradição na mineração de calcário e na produção de cal, com cerca de vinte indústrias do setor concentradas ao longo da Rodovia dos Minérios (PR-092). O subsolo é marcado pelo aquífero carste e por grutas calcárias, como a Gruta do Sumidouro. Boa parte da população trabalha em Curitiba, configurando uma economia popular e fortemente dependente do polo da capital.',

  mercado:
    'Cidade popular da RM Curitiba, com economia voltada à indústria de cal e ao deslocamento diário para a capital. O mercado fitness se apoia em academias de bairro e no atendimento domiciliar, formato que combina com a renda média da população e com bairros residenciais espalhados. A proximidade com Curitiba também leva moradores a treinar na capital, mas há espaço crescente para o personal de bairro e o acompanhamento perto de casa.',

  bairrosNobres: ['Centro', 'Jardim Roma', 'Lamenha Pequena', 'Cachoeira'],
  bairrosPopulares: ['Tranqueira', 'Botiatuva', 'Águas Belas', 'Areia Branca'],

  parques: [
    {
      nome: 'Praças e áreas de lazer do Centro',
      descricao:
        'O entorno do Centro concentra praças e espaços abertos usados para caminhada e atividade física ao ar livre, ponto de encontro da população local.',
    },
    {
      nome: 'Gruta do Sumidouro e região do carste',
      descricao:
        'Em meio ao relevo cárstico de calcário, é apontada como uma das grutas mais importantes do norte da RM Curitiba e a única com acesso a visitantes, atraindo quem busca trilhas e contato com a natureza.',
    },
  ],
  ciclovias:
    'A malha cicloviária é limitada e a mobilidade ativa convive com o tráfego pesado das rodovias da mineração; a duplicação da Rodovia dos Minérios tende a melhorar o deslocamento na ligação com Curitiba.',

  clima:
    'O clima é subtropical de altitude (cerca de 950 m), semelhante ao de Curitiba, com verões amenos e invernos frios, com manhãs geladas e possibilidade de mínimas baixas.',
  climaTreino:
    'No inverno, as manhãs frias pedem aquecimento mais longo e roupa térmica; nas demais estações, a altitude e o clima ameno favorecem o treino ao ar livre boa parte do ano.',

  mobilidade:
    'Conurbada ao norte de Curitiba (cerca de 15 km do centro da capital), tem como principais acessos a BR-476 (Estrada da Ribeira) e a Rodovia dos Minérios (PR-092), esta última em duplicação na ligação com Curitiba e usada pelo transporte de cal e calcário.',

  corridas: [
    {
      nome: 'Corrida de Almirante Tamandaré (SMEL)',
      descricao:
        'Prova de rua organizada pela Secretaria Municipal de Esporte e Lazer, com distâncias de 5 km e 10 km e percursos curtos para iniciantes, voltada ao incentivo da atividade física na cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é de base comunitária, sustentada por provas de rua municipais da SMEL e pela prática em praças e espaços públicos. O futebol amador e o uso de academias de bairro completam o cenário de uma cidade popular da RM Curitiba.',
  academias:
    'A oferta é predominantemente de academias de bairro e estúdios menores, complementada pelo atendimento domiciliar de personal trainers, formato bem adaptado à realidade residencial e à renda local.',

  destaquesFitness: [
    'Cidade popular da RM Curitiba conurbada à capital, com mercado de academias de bairro e atendimento domiciliar.',
    'Provas de rua municipais da SMEL (5 km e 10 km) incentivando a corrida.',
    'Relevo cárstico de calcário, com grutas e trilhas para atividade ao ar livre.',
    'Altitude (cerca de 950 m) e clima ameno favorecem o aeróbico ao ar livre boa parte do ano.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 680,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade popular e conurbada ao norte de Curitiba, marcada pela mineração de cal e calcário, Almirante Tamandaré tem um mercado fitness ancorado em academias de bairro e no atendimento domiciliar. Um personal trainer perto de casa ajuda a manter a constância sem depender do deslocamento à capital, ajustando o treino ao frio do inverno e aproveitando o clima ameno nas demais estações.',

  vizinhas: ['curitiba-pr', 'colombo-pr', 'campo-largo-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Almirante Tamandaré', url: 'https://cidades.ibge.gov.br/brasil/pr/almirante-tamandare/panorama' },
    { nome: 'Prefeitura de Almirante Tamandaré', url: 'https://tamandare.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-30',
  capaArte: {
    src: '/capas-cidade/almirante-tamandare-pr.webp',
    w: 1200,
    h: 849,
    alt:
      'Personal trainer em Almirante Tamandaré (PR) em arte que une treino funcional e a igreja matriz de torre alta em meio ao verde da região metropolitana de Curitiba — Personal por Perto',
    legenda:
      'Treino personalizado em Almirante Tamandaré: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
