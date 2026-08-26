import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'betim-mg',
  nome: 'Betim',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'betinense',
  tipo: 'cidade',

  populacao: 411846,
  populacaoAno: 2022,
  idhm: 0.749,
  idhmClasse: 'alto',
  altitudeM: 810,

  resumoEconomico:
    'Um dos principais polos industriais da Grande Belo Horizonte e líder econômico de Minas Gerais em PIB per capita, Betim abriga uma das maiores plantas da Stellantis (ex-Fiat) do mundo e a Refinaria Gabriel Passos (REGAP). O perfil industrial e o grande contingente de trabalhadores moldam uma demanda específica por treino — com horários flexíveis, antes e depois dos turnos.',

  mercado:
    'O mercado fitness é consolidado, com a Smart Fit (Betim Shopping e bairro Angola) e dezenas de academias e boxes locais de funcional e crossfit. O perfil operário e industrial gera forte demanda por musculação acessível e por treino que se encaixe na rotina de trabalho.',

  bairrosNobres: ['Angola', 'Jardim da Cidade', 'Brasiléia', 'Filadélfia'],
  bairrosPopulares: ['Bueno Franco', 'Parque das Cachoeiras', 'Citrolândia', 'Teresópolis'],

  parques: [
    {
      nome: 'Parque Ecológico Cléo Barbosa',
      descricao:
        'Tem pista de caminhada, academia popular e quadra — um dos principais espaços públicos para treino na cidade.',
    },
    {
      nome: 'Parque Natural Felisberto Neves',
      descricao:
        'Com cerca de 290 mil m², oferece trilhas e muita área verde para caminhada em meio à natureza.',
    },
    {
      nome: 'Praça do Encontro',
      descricao:
        'Tem pista e academia ao ar livre, conectada por ciclovia à Avenida Amazonas — ponto popular de caminhada e corrida.',
    },
  ],
  ciclovias:
    'Betim tem ciclovia e pista entre a Praça do Encontro e a Avenida Amazonas (cerca de 3 km, revitalizada e iluminada), além de trechos em avenidas como a Edméia Lazzarotti.',

  clima:
    'O clima é tropical de altitude, com média em torno de 20 °C, verão chuvoso e inverno seco.',
  climaTreino:
    'O treino ao ar livre é viável o ano todo, com atenção às chuvas no verão e à baixa umidade no inverno; as manhãs costumam ser as melhores janelas.',

  mobilidade:
    'Betim é cortada pela BR-381 (Fernão Dias), eixo BH–São Paulo e fator central do seu polo industrial. A integração com a Grande BH é feita por ônibus, sem metrô ou BRT próprios.',

  corridas: [
    {
      nome: 'Corrida de Betim',
      descricao:
        'Prova ligada ao aniversário do município, com forte cunho social e boa participação popular.',
    },
    {
      nome: 'Circuito da Inconfidência',
      descricao:
        'Prova regional que passa por Betim e reúne milhares de inscritos, integrando a cidade ao calendário mineiro de corrida.',
    },
  ],
  culturaEsportiva:
    'Betim tem agenda esportiva municipal forte, com programas públicos de incentivo, e corrida de rua e ciclismo em crescimento. As praças e parques com academia ao ar livre democratizam o acesso ao treino para a população trabalhadora.',
  academias:
    'A oferta reúne a Smart Fit e dezenas de academias e boxes locais de musculação e funcional, com demanda puxada pelo grande público industrial da cidade.',

  academiasProximas: [
    { nome: 'Smart Fit Betim Shopping', detalhe: 'unidade da rede dentro do shopping' },
    { nome: 'Pratique Fitness São Caetano', detalhe: 'na Av. Tapajós: maior rede da região metropolitana de BH' },
    { nome: 'Pratique Fitness Chácaras', detalhe: 'na Av. Bandeirantes' },
    { nome: 'Pratique Fitness Decamão', detalhe: 'na Av. Edmeia Matos Lazzarotti' },
    { nome: 'Pratique Fitness Senhora das Graças', detalhe: 'na Rua do Acre' },
  ],

  destaquesFitness: [
    'Público trabalhador, que demanda horários flexíveis (cedo e pós-turno).',
    'Boa malha de redes e boxes de crossfit e funcional.',
    'Praças e parques com academia ao ar livre gratuitos.',
    'Clima de altitude que permite atividade externa o ano inteiro.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'Polo industrial da Grande BH, Betim tem uma demanda muito ligada à rotina de trabalho — e boa estrutura pública e privada para atendê-la. Um personal trainer ajuda a encaixar o treino no dia a dia, com método, seja na academia, na praça ou no formato online.',

  vizinhas: ['belo-horizonte-mg', 'contagem-mg', 'juiz-de-fora-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Betim', url: 'https://cidades.ibge.gov.br/brasil/mg/betim/panorama' },
    { nome: 'Prefeitura de Betim', url: 'https://www.betim.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-26',
  capaArte: {
    src: '/capas-cidade/betim-mg.webp',
    w: 1200,
    h: 849,
    alt:
      'Personal trainer em Betim (MG) em arte com referências reais da cidade — a refinaria REGAP, o trem de carga, o Parque Ecológico Felisberto Neves e o mapa da Grande BH — Personal por Perto',
    legenda:
      'Treino personalizado em Betim: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
