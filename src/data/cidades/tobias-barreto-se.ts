import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tobias-barreto-se',
  nome: 'Tobias Barreto',
  uf: 'SE',
  estado: 'Sergipe',
  estadoSlug: 'sergipe',
  regiao: 'Nordeste',
  gentilico: 'tobiense',
  tipo: 'cidade',

  populacao: 50905,
  populacaoAno: 2022,
  idhm: 0.557,
  idhmClasse: 'baixo',
  altitudeM: 198,

  resumoEconomico:
    'No sudoeste de Sergipe, na divisa com a Bahia e entre os rios Real e Jabiberi, Tobias Barreto é conhecida como a capital sergipana dos bordados e confecções. A economia gira em torno do polo de confecção e bordado — com centenas de pequenas empresas e milhares de bordadeiras e costureiras —, da agropecuária (milho, feijão, maracujá e criação de bovinos, ovinos e caprinos) e do comércio que abastece a região do agreste. A famosa Feira da Coruja movimenta a venda das peças têxteis produzidas na cidade e nos povoados.',

  mercado:
    'Como cidade média do interior nordestino, Tobias Barreto tem um mercado fitness enxuto, formado por academias locais de musculação e treino funcional. A procura por personal trainers tende a crescer entre quem busca acompanhamento individualizado e orientação para treinar respeitando o calor do agreste, seja em ambiente fechado, seja nas praças e vias da cidade.',

  bairrosNobres: ['Centro', 'Sinhazinha', 'Bonsucesso', 'Vila Esperança'],
  bairrosPopulares: ['Salgado', 'Samambaia', 'Jacaré', 'Capitoa'],

  parques: [
    {
      nome: 'Praça do Cruzeiro',
      descricao:
        'Uma das praças mais conhecidas da cidade, requalificada e com monumento a Tobias Barreto de Menezes e o Cruzeiro do Século; ponto de encontro e largada de eventos esportivos no centro.',
    },
    {
      nome: 'Praça da Matriz',
      descricao:
        'Praça em frente à Igreja Matriz, no coração do centro, onde se concentram eventos religiosos e culturais e que serve de espaço de convívio e caminhada leve na cidade.',
    },
    {
      nome: 'Entorno dos rios Real e Jabiberi',
      descricao:
        'A cidade fica entre os rios Real e Jabiberi, no agreste de transição para o semiárido; as estradas vicinais e o entorno rural servem de percurso para quem treina ao ar livre, condicionados ao calor e ao período de seca.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e a bicicleta é muito usada como transporte do dia a dia; grande parte do pedal e da corrida acontece nas vias da área urbana e nas estradas que ligam a cidade aos povoados.',

  clima:
    'O clima é tropical quente semiúmido, típico do agreste em transição para o semiárido sergipano, com bioma de caatinga na região. A temperatura média anual fica em torno de 28 °C e a chuva concentra-se no outono e inverno, com média anual em torno de 780 mm e um período seco que pode durar de cinco a oito meses no ano.',
  climaTreino:
    'O calor e a baixa umidade no período de estiagem pedem treinar bem cedo ou no fim da tarde, com hidratação reforçada; nos picos de calor, ambientes climatizados são a opção mais segura, e os meses mais chuvosos costumam ser mais amenos para o treino ao ar livre.',

  mobilidade:
    'Tobias Barreto fica a cerca de 128 km de Aracaju e funciona como entroncamento rodoviário do sudoeste sergipano, com ligação à Bahia pela BR-349 e por rodovias estaduais que conectam a cidade aos municípios vizinhos. O transporte urbano é feito sobretudo por ônibus, mototáxi e bicicleta.',

  corridas: [
    {
      nome: 'Circuito Sesc de Corridas — etapa Tobias Barreto',
      descricao:
        'Etapa do circuito estadual de corridas de rua realizada na cidade, com largada na Praça do Cruzeiro e percursos de caminhada e corrida chancelados pela federação de atletismo de Sergipe.',
    },
    {
      nome: 'Meia Maratona de Tobias Barreto',
      descricao:
        'Prova de corrida de rua organizada na cidade, que reúne corredores da região e reforça o calendário esportivo do sudoeste sergipano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o futebol e as areninhas espalhadas pelos bairros, o uso das praças centrais para caminhada e as provas de corrida de rua que passam pelo centro da cidade — tudo moldado pelo calor característico do agreste.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior.',

  destaquesFitness: [
    'Capital sergipana dos bordados e confecções, com forte tradição têxtil e a Feira da Coruja.',
    'Praças do Cruzeiro e da Matriz como espaços de caminhada e ponto de largada de corridas.',
    'Clima quente do agreste em transição para o semiárido, que exige planejar horário e hidratação.',
    'Entroncamento rodoviário do sudoeste sergipano, na divisa com a Bahia, entre os rios Real e Jabiberi.',
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
    'Cidade do agreste sergipano marcada pela tradição dos bordados e pelo calor, Tobias Barreto pede um treino adaptado ao clima e que aproveite as praças e o entorno para a atividade ao ar livre. Um personal trainer ajuda a organizar a rotina respeitando o calor, definindo os melhores horários e mantendo a constância ao longo do ano.',

  vizinhas: ['lagarto-se', 'itabaiana-se'],

  fontes: [
    { nome: 'IBGE Cidades — Tobias Barreto', url: 'https://cidades.ibge.gov.br/brasil/se/tobias-barreto/panorama' },
    { nome: 'Prefeitura de Tobias Barreto', url: 'https://tobiasbarreto.se.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
