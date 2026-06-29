import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'taboao-da-serra-sp',
  nome: 'Taboão da Serra',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'taboanense',
  tipo: 'cidade',

  populacao: 273542,
  populacaoAno: 2022,
  idhm: 0.769,
  idhmClasse: 'alto',
  altitudeM: 747,

  resumoEconomico:
    'Integrante da Região Metropolitana de São Paulo, no vetor sudoeste e totalmente conurbada à capital, Taboão da Serra tem a maior densidade demográfica do Brasil. A economia é dominada por serviços e comércio, com indústria nos setores farmacêutico, de alimentos e tecnologia, e o Shopping Taboão como motor comercial regional.',

  mercado:
    'A altíssima densidade e o grande volume populacional sustentam muitas academias de bairro e estúdios, num mercado de escala, conveniência e proximidade, com fluxo pendular para a capital.',

  bairrosNobres: ['Parque Pinheiros', 'Jardim Salete', 'Arraial Paulista', 'Jardim Record'],
  bairrosPopulares: ['Jardim Saira', 'Vila Mafalda', 'Jardim Scandia', 'Ponte Alta'],

  parques: [
    {
      nome: 'Parque das Hortênsias Armando Andrade',
      descricao:
        'Tem pistas de caminhada e corrida e playground, sendo sede de corridas de rua.',
    },
    {
      nome: 'Parque Francisco Rizzo',
      descricao:
        'Tem academia, pistas de cooper e equipamentos de ginástica ao ar livre.',
    },
    {
      nome: 'Parque Linear Ponte Alta',
      descricao:
        'Tem quadra, ciclovia, pista de caminhada, equipamentos de ginástica e bosque.',
    },
  ],
  ciclovias:
    'Há ciclovia no Parque Linear Ponte Alta; a extensão da malha cicloviária urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude da Grande São Paulo, com inverno mais seco e ameno e verão quente e chuvoso.',
  climaTreino:
    'O treino ao ar livre é viável o ano todo, e a topografia acidentada (morros) favorece treinos de subida.',

  mobilidade:
    'Taboão da Serra é cortada pela Rodovia Régis Bittencourt (BR-116), com proximidade do Rodoanel, da Raposo Tavares e da Marginal Pinheiros, em forte integração viária com a capital.',

  corridas: [
    {
      nome: 'Taboão da Serra Run',
      descricao:
        'Com mais de mil participantes, tem provas de 10 km, 5 km e caminhada, com largada no Parque das Hortênsias.',
    },
    {
      nome: 'Corrida da Folia de Taboão da Serra',
      descricao:
        'Corrida de rua tradicional do calendário local, ao lado de provas temáticas.',
    },
  ],
  culturaEsportiva:
    'O município se afirma como referência em corrida de rua, com eventos que percorrem pontos icônicos da cidade e forte adesão de assessorias e grupos de corrida, apesar da densidade urbana extrema.',
  academias:
    'A oferta é de altíssimo volume, com muitas academias de bairro e estúdios, complementada por parques com academia ao ar livre e pistas de cooper.',

  destaquesFitness: [
    'Mercado de altíssimo volume, pela maior densidade demográfica do país.',
    'Cena consolidada de corrida de rua (Taboão da Serra Run e provas temáticas).',
    'Parques com academia ao ar livre e pistas de cooper (Hortênsias e Rizzo).',
    'Relevo de morros e proximidade da capital, que ampliam opções de treino e clientela.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 170,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Cidade de maior densidade do Brasil e colada à capital, Taboão da Serra tem mercado de escala e cena de corrida forte. Um personal trainer encontra aqui uma base imensa de alunos por km², com parques e relevo de morros para variar o treino.',

  vizinhas: ['sao-paulo-sp', 'osasco-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Taboão da Serra', url: 'https://cidades.ibge.gov.br/brasil/sp/taboao-da-serra/panorama' },
    { nome: 'Prefeitura de Taboão da Serra', url: 'https://www.ts.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
