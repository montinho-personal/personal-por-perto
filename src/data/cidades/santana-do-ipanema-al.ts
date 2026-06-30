import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santana-do-ipanema-al',
  nome: 'Santana do Ipanema',
  uf: 'AL',
  estado: 'Alagoas',
  estadoSlug: 'alagoas',
  regiao: 'Nordeste',
  gentilico: 'santanense',
  tipo: 'cidade',

  populacao: 46220,
  populacaoAno: 2022,
  idhm: 0.591,
  idhmClasse: 'baixo',
  altitudeM: 250,

  resumoEconomico:
    'Principal cidade do médio sertão alagoano, Santana do Ipanema fica às margens do rio Ipanema, que nasce em Pernambuco e desagua no São Francisco. A economia se apoia no comércio e nos serviços, na administração pública e na agropecuária do entorno, com destaque para a pecuária leiteira, a criação de caprinos e ovinos e a agricultura familiar. Ao lado de Arapiraca e Palmeira dos Índios, a cidade exerce o papel de polo regional, oferecendo comércio, saúde e educação aos municípios vizinhos do sertão.',

  mercado:
    'O mercado fitness de Santana do Ipanema é o de uma cidade média do interior nordestino, concentrado em academias locais de musculação e treino funcional que atendem também a moradores das cidades próximas. A procura por personal trainers tende a crescer entre quem busca acompanhamento individual e treino adaptado ao calor do sertão, seja em ambiente fechado, seja nas praças e vias da cidade.',

  bairrosNobres: ['Centro', 'Alto do Cruzeiro', 'Bemfica', 'Nossa Senhora de Fátima'],
  bairrosPopulares: ['Alto Cidade Alta', 'Santo Antônio', 'Brasília', 'Cohab'],

  parques: [
    {
      nome: 'Margens do Rio Ipanema',
      descricao:
        'O rio que dá nome à cidade corta a área urbana e marca a paisagem do sertão; seus arredores e as vias próximas servem de cenário para caminhadas e treino ao ar livre, condicionados ao regime de chuvas do semiárido.',
    },
    {
      nome: 'Praças do Centro',
      descricao:
        'As praças centrais concentram a vida pública da cidade e recebem eventos culturais e esportivos, funcionando como pontos de encontro e de atividade física leve no fim de tarde.',
    },
    {
      nome: 'Entorno serrano do sertão',
      descricao:
        'A cidade é cercada por morros e elevações típicos do sertão alagoano, que oferecem percursos com aclives para quem treina ao ar livre e busca variação de terreno.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta, e boa parte do pedal e da corrida acontece nas vias urbanas e nos trechos de acesso à cidade. A bicicleta também tem papel de transporte no dia a dia do sertão.',

  clima:
    'O clima é semiárido quente (tipo BSh na classificação de Köppen), com temperatura média em torno de 25 °C, chuvas concentradas em poucos meses do ano e longos períodos de seca. Os dias são quentes e o ar seco predomina na maior parte do ano, característica marcante do sertão alagoano.',
  climaTreino:
    'O calor e a baixa umidade pedem treino bem cedo ou no fim da tarde, com hidratação reforçada e atenção à exposição ao sol nos horários de pico. Nos dias mais quentes, ambientes ventilados ou climatizados são a opção mais segura, e o período de chuvas tende a amenizar o treino ao ar livre.',

  mobilidade:
    'Santana do Ipanema é um nó rodoviário do médio sertão, ligada às demais cidades da região por rodovias estaduais como a AL-220, eixo que conecta o sertão a Arapiraca e ao litoral. O transporte urbano e intermunicipal é feito por ônibus e vans, e a posição de polo regional concentra o fluxo de quem vem das cidades vizinhas em busca de comércio e serviços.',

  corridas: [
    {
      nome: 'Corrida de Rua da Festa da Juventude',
      descricao:
        'Prova de corrida de rua promovida pela prefeitura dentro da programação esportiva da Festa da Juventude, reunindo corredores locais e da região do sertão.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva santanense mistura o futebol, as competições promovidas pela cidade em datas festivas e o uso das praças e vias para caminhada e corrida. O calor do sertão molda os hábitos de quem se exercita, favorecendo os horários mais frescos do dia.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média que também atende moradores dos municípios vizinhos.',

  destaquesFitness: [
    'Polo de serviços do médio sertão alagoano, às margens do rio Ipanema.',
    'Clima semiárido quente e seco, que exige planejar horário e hidratação no treino.',
    'Praças centrais e margens do rio como espaços de caminhada e corrida ao ar livre.',
    'Economia de comércio regional e agropecuária, com destaque para a pecuária leiteira.',
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
    'Cidade quente do sertão alagoano e polo de serviços para a região, Santana do Ipanema pede um treino adaptado ao clima semiárido e à rotina do interior. Um personal trainer ajuda a organizar os horários, respeitar o calor e a estação seca e manter a constância ao longo do ano, aproveitando as praças, as margens do rio e o relevo do sertão.',

  vizinhas: ['arapiraca-al', 'palmeira-dos-indios-al'],

  fontes: [
    { nome: 'IBGE Cidades — Santana do Ipanema', url: 'https://cidades.ibge.gov.br/brasil/al/santana-do-ipanema/panorama' },
    { nome: 'Prefeitura de Santana do Ipanema', url: 'https://santanadoipanema.al.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
