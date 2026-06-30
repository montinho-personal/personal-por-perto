import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'bom-despacho-mg',
  nome: 'Bom Despacho',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'bom-despachense',
  tipo: 'cidade',

  populacao: 51737,
  populacaoAno: 2022,
  idhm: 0.750,
  idhmClasse: 'alto',
  altitudeM: 768,

  resumoEconomico:
    'Conhecida como "Cidade Sorriso", Bom Despacho fica no Centro-Oeste de Minas, na região do Alto São Francisco e na Região Geográfica Intermediária de Divinópolis, a cerca de 150 km de Belo Horizonte. A economia se apoia na indústria de calçados e confecções, em um comércio forte e regular ao longo do ano, e na posição de entroncamento rodoviário: o município é cortado pela BR-262 e ligado à malha regional por rodovias como a MG-050 e a MG-164, o que reforça sua vocação logística e de prestação de serviços para as cidades do entorno.',

  mercado:
    'Como cidade média do interior mineiro, Bom Despacho tem um mercado fitness em expansão gradual, apoiado em academias de bairro, estúdios de treino funcional e profissionais autônomos. A procura por personal trainers cresce entre quem busca acompanhamento individualizado e entre o público ligado ao comércio e à indústria local, que valoriza horários flexíveis e treinos objetivos encaixados na rotina de trabalho.',

  bairrosNobres: ['Centro', 'Belvedere', 'Esplanada', 'Ana Rosa'],
  bairrosPopulares: ['São José', 'São Geraldo', 'Santa Efigênia', 'Vila Aurora'],

  parques: [
    {
      nome: 'Praça da Matriz',
      descricao:
        'Coração da cidade, em frente à Igreja Matriz de Nossa Senhora do Bom Despacho, com jardins, bancos e sombra de árvores — ponto de encontro tradicional e espaço de caminhada no Centro.',
    },
    {
      nome: 'Parque Municipal',
      descricao:
        'Área verde de lazer usada para caminhadas, piqueniques e momentos em família, uma das principais opções de atividade ao ar livre dentro da malha urbana.',
    },
    {
      nome: 'Praça da Estação',
      descricao:
        'Espaço público ligado à memória ferroviária da cidade, que reúne moradores em atividades de lazer e serve de referência para caminhadas no entorno do Centro.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é modesta e concentrada em alguns trechos da área urbana; boa parte do pedal e da corrida acontece nas vias dos bairros e nas avenidas mais planas da cidade.',

  clima:
    'O clima é tropical de altitude, com verão chuvoso e quente (de outubro a março) e inverno seco e mais ameno, quando as madrugadas e noites ficam frias por causa dos 768 metros de altitude. A umidade cai bastante no período de estiagem, deixando o ar mais seco entre os meses de inverno.',
  climaTreino:
    'O inverno seco favorece o treino ao ar livre, especialmente no início da manhã e no fim da tarde, mas o ar seco pede atenção à hidratação. No verão, o calor e as pancadas de chuva da tarde recomendam adiantar o treino para a manhã ou recorrer a ambientes cobertos nos dias mais quentes.',

  mobilidade:
    'Bom Despacho é um importante entroncamento rodoviário do Centro-Oeste mineiro: é cortada pela BR-262 e conectada à região por rodovias como a MG-050 e a MG-164, o que facilita o acesso a Divinópolis, a Belo Horizonte e ao Triângulo. O transporte urbano é feito por ônibus, e a cidade é parada frequente de linhas intermunicipais por causa de sua posição de cruzamento de estradas.',

  corridas: [
    {
      nome: 'Corridas rústicas da região',
      descricao:
        'Atletas de Bom Despacho participam com frequência das corridas rústicas tradicionais do Centro-Oeste mineiro, como as provas de Divinópolis e de Conceição do Pará, que movimentam o calendário esportivo regional.',
    },
    {
      nome: 'Caminhadas e provas comunitárias',
      descricao:
        'Caminhadas e corridas ligadas a campanhas de saúde e a datas comemorativas costumam reunir moradores nas ruas e praças da cidade, reforçando o hábito da atividade física ao ar livre.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso das praças e do Parque Municipal para caminhada, a participação dos corredores locais nas provas rústicas da região e a forte tradição do futebol amador, característica das cidades do interior de Minas.',
  academias:
    'A oferta é formada por academias de musculação e estúdios de treino funcional espalhados pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior mineiro.',

  destaquesFitness: [
    'Clima tropical de altitude, com inverno seco que favorece o treino ao ar livre.',
    'Praça da Matriz e Parque Municipal como espaços de caminhada e atividade no Centro.',
    'Entroncamento rodoviário (BR-262, MG-050 e MG-164) que liga a cidade a Divinópolis e a Belo Horizonte.',
    'Economia de calçados, confecções e comércio, que sustenta um público com rotina de trabalho intensa.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Cidade média do Centro-Oeste mineiro, com clima de altitude e boa qualidade de vida, Bom Despacho oferece praças, parque e ruas tranquilas para quem quer se exercitar. Um personal trainer ajuda a aproveitar o inverno seco para o treino ao ar livre, a organizar a rotina em meio ao trabalho no comércio e na indústria e a manter a constância ao longo do ano.',

  vizinhas: ['divinopolis-mg', 'para-de-minas-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Bom Despacho', url: 'https://cidades.ibge.gov.br/brasil/mg/bom-despacho/panorama' },
    { nome: 'Prefeitura de Bom Despacho', url: 'https://www.bomdespacho.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
