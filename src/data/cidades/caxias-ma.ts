import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'caxias-ma',
  nome: 'Caxias',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'caxiense',
  tipo: 'cidade',

  populacao: 156973,
  populacaoAno: 2022,
  idhm: 0.624,
  idhmClasse: 'médio',
  altitudeM: 66,

  resumoEconomico:
    'No leste do Maranhão, perto da divisa com o Piauí, Caxias é uma das cidades mais populosas e históricas do estado — a "Princesa do Sertão Maranhense", terra do poeta Gonçalves Dias e palco da Balaiada. Cortada pelo Rio Itapecuru, é polo regional do leste maranhense, com economia apoiada em comércio, serviços, administração pública, agropecuária e atividade industrial, atraindo moradores das cidades vizinhas.',

  mercado:
    'O mercado fitness é popular e de perfil regional, formado sobretudo por academias de bairro e atendimento domiciliar, com presença de redes de baixo custo. Como polo do leste maranhense, Caxias concentra a oferta de serviços da região, e o calor o ano todo faz a maioria optar por treinos nos horários mais frescos ou em ambiente coberto.',

  bairrosNobres: ['Centro', 'Trezidela', 'Volta Redonda', 'Caldeirões'],
  bairrosPopulares: ['Ponte', 'Cangalheiro', 'Campo de Belém', 'Vila Lobão'],

  parques: [
    {
      nome: 'Orla do Rio Itapecuru',
      descricao:
        'Beira do rio que corta a cidade, usada para caminhada e lazer ao ar livre, especialmente no fim da tarde, quando o calor afrouxa.',
    },
    {
      nome: 'Praças do Centro Histórico',
      descricao:
        'O conjunto de praças e ruas do centro histórico tombado, com arquitetura dos séculos XIX e XX, serve de roteiro para caminhadas no centro da cidade.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada; o deslocamento de bicicleta acontece principalmente pelas vias urbanas e avenidas do entorno do centro.',

  clima:
    'O clima é tropical, quente o ano todo, com estação chuvosa concentrada no primeiro semestre e período seco no segundo. As temperaturas costumam ficar elevadas, com calor intenso ao longo de todo o ano.',
  climaTreino:
    'Pelo calor intenso típico do sertão maranhense, o treino ao ar livre se concentra no início da manhã e no fim da tarde, com hidratação reforçada e atenção à desidratação.',

  mobilidade:
    'O acesso rodoviário se dá pela BR-316, que liga o leste maranhense a Teresina e à capital São Luís, posicionando a cidade como entroncamento regional. O transporte urbano é feito por ônibus, vans e mototáxis.',

  corridas: [
    {
      nome: 'Corridas de rua de Caxias',
      descricao:
        'A cidade recebe provas de corrida de rua em datas comemorativas e eventos locais, com largadas em horários mais frescos por causa do calor.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o futebol, as caminhadas na orla do Itapecuru e no centro histórico e os eventos esportivos ligados ao calendário da cidade. Como polo regional, Caxias concentra atividades e competições que atraem moradores das cidades vizinhas.',
  academias:
    'A oferta é dominada por academias de bairro e por personal trainers que atendem em domicílio e em espaços ao ar livre, complementadas por redes de baixo custo voltadas ao público popular.',

  destaquesFitness: [
    'Polo regional do leste maranhense, que concentra a oferta de serviços da região.',
    'Forte presença de academias de bairro e atendimento domiciliar.',
    'Orla do Rio Itapecuru e centro histórico como espaços para caminhada.',
    'Calor intenso o ano todo exige treino em horários frescos e hidratação reforçada.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 240,
    mensalMax: 620,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Histórica e polo do leste maranhense, Caxias tem um mercado fitness popular, apoiado em academias de bairro e atendimento domiciliar. Um personal trainer ajuda a montar uma rotina segura diante do calor o ano todo, ajustando horários e hidratação e aproveitando espaços como a orla do Itapecuru e o centro histórico.',

  vizinhas: ['timon-ma', 'sao-luis-ma', 'imperatriz-ma'],

  fontes: [
    { nome: 'IBGE Cidades — Caxias', url: 'https://cidades.ibge.gov.br/brasil/ma/caxias/panorama' },
    { nome: 'Prefeitura Municipal de Caxias', url: 'https://caxias.ma.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
