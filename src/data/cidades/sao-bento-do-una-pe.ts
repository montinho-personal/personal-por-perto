import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-bento-do-una-pe',
  nome: 'São Bento do Una',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'são-bento-unense',
  tipo: 'cidade',

  populacao: 49449,
  populacaoAno: 2022,
  idhm: 0.593,
  idhmClasse: 'baixo',
  altitudeM: 614,

  resumoEconomico:
    'No Agreste Meridional pernambucano, São Bento do Una é uma das capitais nordestinas da avicultura: figura entre os maiores produtores de ovos do país e concentra dezenas de granjas que geram milhares de empregos na região. A economia se completa com a agroindústria ligada à cadeia avícola, a suinocultura, a pecuária leiteira e a agropecuária do agreste, somadas ao comércio e aos serviços que atendem o município e o entorno. A força do campo se reflete na identidade da cidade, que celebra essa vocação até nas festas populares.',

  mercado:
    'O mercado fitness de São Bento do Una tem o porte de uma cidade média do interior nordestino, formado por academias locais de musculação e treino funcional concentradas no Centro e nos bairros residenciais. A procura por personal trainers cresce entre quem busca acompanhamento individualizado para emagrecimento, condicionamento e saúde, com atenção especial ao calor e à baixa umidade típicos do agreste.',

  bairrosNobres: ['Centro', 'Espírito Santo'],
  bairrosPopulares: ['Jurubeba', 'Pimenta', 'Queimada Grande', 'Manicoba'],

  parques: [
    {
      nome: 'Praça Historiador Adalberto Paiva (Centro)',
      descricao:
        'Largo central da cidade, em frente à sede da prefeitura e próximo à Igreja Matriz do Bom Jesus; ponto de encontro e referência para caminhadas urbanas no coração de São Bento do Una.',
    },
    {
      nome: 'Igreja Matriz do Bom Jesus',
      descricao:
        'Templo centenário no Centro, um dos principais marcos históricos e turísticos da cidade; o entorno é usado para caminhada leve e convívio ao ar livre.',
    },
    {
      nome: 'Parque de Exposições',
      descricao:
        'Espaço que recebe feiras agropecuárias e eventos ligados à avicultura e à pecuária; em datas livres, a área ampla serve de apoio a atividades e eventos esportivos.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e típica de cidade de interior; boa parte do pedal e da corrida acontece nas vias urbanas do Centro e nas estradas vicinais que ligam a sede aos distritos e às granjas da região.',

  clima:
    'O clima é semiárido de agreste, quente e com baixa umidade na maior parte do ano. As chuvas se concentram no período do outono-inverno (em geral de março a julho), enquanto o segundo semestre é mais seco. A altitude próxima de 600 metros ameniza as noites, que costumam ser mais frescas do que nas áreas baixas do sertão.',
  climaTreino:
    'O calor diurno e a baixa umidade pedem hidratação reforçada e treinos preferencialmente no início da manhã ou no fim da tarde, quando a temperatura cai. Nos meses mais secos, a atenção à reposição de líquidos é ainda maior; as noites amenas do agreste favorecem o treino ao ar livre.',

  mobilidade:
    'São Bento do Una se conecta ao Agreste por rodovias estaduais, com destaque para a PE-180, que liga a cidade a Belo Jardim e ao eixo da BR-423, dando acesso à região de Garanhuns e ao polo de Caruaru. O transporte se dá por ônibus intermunicipais e vans, e a malha de estradas vicinais integra a sede aos distritos rurais e às granjas que sustentam a economia local.',

  corridas: [
    {
      nome: 'Corrida da Galinha',
      descricao:
        'Festa-corrida bem-humorada criada nos anos 1990 que virou marca da cidade, em referência à fama de São Bento do Una como grande produtora de ovos e frangos; reúne moradores e visitantes em clima de celebração popular.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o futebol e as caminhadas nas praças e vias do Centro com eventos populares que abraçam a identidade avícola da cidade, como a Corrida da Galinha. O calor do agreste molda os hábitos de treino, que tendem a se concentrar nos horários mais amenos do dia.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior pernambucano.',

  destaquesFitness: [
    'Uma das maiores produtoras de ovos do país, com identidade ligada à avicultura e à agroindústria.',
    'Clima semiárido de agreste, quente e seco, que exige hidratação e treino nos horários mais frescos.',
    'Altitude em torno de 600 metros, que deixa as noites mais amenas e favoráveis ao treino ao ar livre.',
    'Corrida da Galinha, festa-corrida popular que celebra a vocação avícola da cidade.',
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
    'Cidade quente do Agreste Meridional, com forte vocação agropecuária e avícola, São Bento do Una pede um treino adaptado ao clima semiárido e à rotina do interior. Um personal trainer ajuda a organizar os horários respeitando o calor, a manter a hidratação e a sustentar a constância ao longo das estações seca e chuvosa.',

  vizinhas: ['caruaru-pe', 'garanhuns-pe'],

  fontes: [
    { nome: 'IBGE Cidades — São Bento do Una', url: 'https://cidades.ibge.gov.br/brasil/pe/sao-bento-do-una/panorama' },
    { nome: 'Prefeitura de São Bento do Una', url: 'https://www.saobentodouna.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
