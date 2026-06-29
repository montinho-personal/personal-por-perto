import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'barbacena-mg',
  nome: 'Barbacena',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'barbacenense',
  tipo: 'cidade',

  populacao: 125317,
  populacaoAno: 2022,
  idhm: 0.769,
  idhmClasse: 'alto',
  altitudeM: 1126,

  resumoEconomico:
    'Na região do Campo das Vertentes, Barbacena tem economia diversificada que combina serviços, comércio regional, saúde e educação com forte vocação rural. É reconhecida como a "Cidade das Rosas", graças a uma floricultura que se tornou referência nacional, ao lado da produção de leite e da fruticultura de clima temperado. A presença de instituições de ensino militar, como a EPCAR, e o papel de polo de serviços para os municípios vizinhos sustentam um mercado urbano com público ativo.',

  mercado:
    'O mercado fitness acompanha o porte de uma cidade média mineira, com academias de bairro, estúdios de musculação e personal trainers atendendo nos espaços públicos do centro e nas regiões residenciais. A altitude e o clima ameno favorecem o treino ao ar livre, e praças tradicionais como o Jardim Municipal funcionam como pontos naturais de caminhada e corrida.',

  bairrosNobres: ['São José', 'Boa Morte', 'Caiçaras', 'Grogotó'],
  bairrosPopulares: ['Pontilhão', 'Santo Antônio', 'Diniz', 'Monte Mário'],

  parques: [
    {
      nome: 'Jardim Municipal (Praça dos Andradas)',
      descricao:
        'Um dos espaços mais emblemáticos do centro de Barbacena, com áreas arborizadas e caminhos usados por moradores para caminhada e lazer no coração da cidade.',
    },
    {
      nome: 'Praça da Boa Morte',
      descricao:
        'Praça tradicional que serve de cenário para eventos esportivos e largadas de corridas de rua, sendo ponto de referência para a prática de atividade física no centro.',
    },
    {
      nome: 'Parque de Exposições Senador Bias Fortes',
      descricao:
        'Amplo espaço que sedia a Festa das Rosas e Flores e diversos eventos da cidade, com áreas abertas aproveitadas para caminhadas e atividades ao ar livre.',
    },
  ],
  ciclovias:
    'A cidade conta com vias e trechos aproveitados por ciclistas no deslocamento urbano e no lazer, integrando-se aos espaços públicos do centro.',

  clima:
    'O clima é tropical de altitude, marcado pela posição elevada no Campo das Vertentes (cerca de 1.100 m). As temperaturas são amenas o ano todo, com invernos secos e frios e madrugadas que costumam ser bastante geladas.',
  climaTreino:
    'As condições para treino ao ar livre são favoráveis na maior parte do ano, com destaque para o clima fresco. Vale atenção ao frio intenso nas manhãs de inverno, quando o agasalho e o aquecimento prévio fazem diferença.',

  mobilidade:
    'Barbacena é cortada pela BR-040, principal eixo entre Belo Horizonte e o Rio de Janeiro, o que reforça seu papel de entroncamento regional no Campo das Vertentes. O transporte urbano é feito por ônibus, e a malha viária conecta o centro aos bairros residenciais.',

  corridas: [
    {
      nome: 'Corrida do Galo',
      descricao:
        'Tradicional corrida de clubes realizada na cidade, com percurso de 5 km, reunindo grande público no centro de Barbacena.',
    },
    {
      nome: 'Corrida do Jubileu de São José',
      descricao:
        'Corrida de rua de longa tradição local, integrada ao calendário esportivo e religioso do bairro São José.',
    },
  ],
  culturaEsportiva:
    'Barbacena tem cultura esportiva ativa, com corridas de rua tradicionais como a Corrida do Galo e o Jubileu de São José, além de programas públicos de atividade física espalhados pelos bairros. O clima de altitude e as praças do centro estimulam caminhada e corrida ao ar livre.',
  academias:
    'A oferta reúne academias de bairro e estúdios de musculação distribuídos pelas regiões residenciais, com personal trainers atuando tanto em ambiente fechado quanto nos espaços públicos do centro.',

  destaquesFitness: [
    'Reconhecida como "Cidade das Rosas", com clima de altitude fresco e agradável.',
    'Corrida do Galo e Corrida do Jubileu de São José no calendário local.',
    'Jardim Municipal e Praça da Boa Morte como pontos de caminhada no centro.',
    'Posição na BR-040, entre Belo Horizonte e Rio de Janeiro, como polo regional.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Com clima de altitude ameno, praças tradicionais e uma cena de corrida de rua consolidada, Barbacena oferece um ambiente convidativo para treinar. Um personal trainer ajuda a aproveitar o Jardim Municipal, as praças do centro e as academias locais com método e constância ao longo do ano.',

  vizinhas: ['juiz-de-fora-mg', 'sao-joao-del-rei-mg', 'conselheiro-lafaiete-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Barbacena', url: 'https://cidades.ibge.gov.br/brasil/mg/barbacena/panorama' },
    { nome: 'Prefeitura de Barbacena', url: 'https://www.barbacena.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
