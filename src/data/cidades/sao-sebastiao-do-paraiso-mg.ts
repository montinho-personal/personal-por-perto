import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-sebastiao-do-paraiso-mg',
  nome: 'São Sebastião do Paraíso',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'paraisense',
  tipo: 'cidade',

  populacao: 70976,
  populacaoAno: 2022,
  idhm: 0.722,
  idhmClasse: 'alto',
  altitudeM: 970,

  resumoEconomico:
    'Principal cidade da região imediata que leva seu nome, no Sudoeste de Minas, São Sebastião do Paraíso une a força do agronegócio cafeeiro a um relevante parque industrial. Cercada por extensas lavouras de café, integra a tradição cafeeira da região e abriga um polo de couro e calçados — de curtumes a fábricas de calçados — além de confecções e indústria de material cirúrgico, que sustentam o comércio e os serviços locais.',

  mercado:
    'O mercado fitness segue o padrão de cidade média mineira em desenvolvimento, com academias de bairro, redes regionais, estúdios e espaços de treino funcional. A vocação industrial e o comércio aquecido dão suporte à demanda por personal trainers, acompanhamento de bem-estar e treino orientado.',

  bairrosNobres: ['Centro', 'Belvedere', 'Jardim Alvorada', 'Lagoinha'],
  bairrosPopulares: ['Cidade Industrial', 'Real Grandeza', 'Conjunto Habitacional', 'Sebastião Figueiredo'],

  parques: [
    {
      nome: 'Parque Ecológico da Serrinha',
      descricao:
        'Área de preservação ambiental no entorno urbano, com mata e trilhas; é uma das referências para caminhada e contato com a natureza na cidade.',
    },
    {
      nome: 'Lagoinha',
      descricao:
        'Espaço de lazer com lago e entorno arborizado, usado pela população como ponto de encontro para caminhada e atividade física ao ar livre.',
    },
    {
      nome: 'Mirante do Morro do Baú',
      descricao:
        'Ponto alto com vista panorâmica da cidade e do pôr do sol; o acesso e a subida são procurados por quem gosta de caminhada e passeio ao ar livre.',
    },
  ],
  ciclovias:
    'A cidade conta com vias de pedalada e ruas de menor tráfego utilizadas por ciclistas; a extensão oficial total de ciclovias não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude, típico do Sudoeste de Minas, com verão quente e chuvoso (dezembro a fevereiro) e inverno seco e ameno, com madrugadas mais frias favorecidas pela altitude próxima de 970 m.',
  climaTreino:
    'O inverno seco e a altitude favorecem o treino ao ar livre, sobretudo no começo da manhã; no verão, vale priorizar os horários mais frescos, evitar o fim de tarde por causa das chuvas e reforçar a hidratação.',

  mobilidade:
    'São Sebastião do Paraíso é cortada pelas rodovias BR-265 e BR-491, em posição estratégica no Sudoeste mineiro e próxima da divisa com São Paulo (região de Franca). Os eixos rodoviários ligam a cidade a outros municípios da região e facilitam o deslocamento dentro e fora do município.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário municipal',
      descricao:
        'A cidade recebe provas de rua e caminhadas ao longo do ano, com apoio do poder público e boa adesão de corredores locais, em distâncias variadas pelas vias urbanas.',
    },
    {
      nome: 'Caminhadas e circuitos comunitários',
      descricao:
        'Eventos de caminhada e percursos coletivos promovidos por grupos de corrida e pela comunidade reforçam a prática de atividade física ao ar livre.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva paraisense combina o gosto pela atividade ao ar livre, favorecida pelo clima de altitude, com grupos de corrida e caminhada e o uso dos espaços públicos. O calendário local de provas de rua estimula a comunidade a treinar com regularidade.',
  academias:
    'A oferta reúne academias de bairro, redes regionais, estúdios e espaços de treino funcional, complementados pelas áreas públicas como o Parque Ecológico da Serrinha e a Lagoinha.',

  destaquesFitness: [
    'Parque Ecológico da Serrinha como referência para caminhada e contato com a natureza.',
    'Lagoinha e o Mirante do Morro do Baú entre os espaços ao ar livre da cidade.',
    'Calendário municipal de corridas de rua e caminhadas comunitárias.',
    'Inverno seco e clima de altitude favoráveis ao treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 280,
    mensalMax: 700,
    onlineMin: 130,
    onlineMax: 350,
  },

  conclusao:
    'Polo cafeeiro e industrial do Sudoeste de Minas, próximo da divisa com São Paulo, São Sebastião do Paraíso reúne clima de altitude, espaços ao ar livre como o Parque Ecológico da Serrinha e a Lagoinha e uma comunidade ativa em corridas e caminhadas. Um personal trainer ajuda a estruturar treinos com método e segurança, aproveitando o cenário local e o calendário de provas de rua.',

  vizinhas: ['passos-mg', 'pocos-de-caldas-mg', 'varginha-mg'],

  fontes: [
    {
      nome: 'IBGE Cidades — São Sebastião do Paraíso',
      url: 'https://cidades.ibge.gov.br/brasil/mg/sao-sebastiao-do-paraiso/panorama',
    },
    { nome: 'Prefeitura de São Sebastião do Paraíso', url: 'https://www.ssparaiso.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
