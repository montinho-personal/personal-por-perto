import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-sebastiao-sp',
  nome: 'São Sebastião',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'sebastianense',
  tipo: 'cidade',

  populacao: 81540,
  populacaoAno: 2022,
  idhm: 0.772,
  idhmClasse: 'alto',

  resumoEconomico:
    'Município do litoral norte paulista com mais de 100 km de costa, São Sebastião tem economia movida pelo turismo de praia (com praias famosas como Maresias e Camburi) e pela atividade portuária e petrolífera — o Porto de São Sebastião e o Terminal Aquaviário Almirante Barroso (TEBAR), da Transpetro/Petrobras, integram a logística do pré-sal.',

  mercado:
    'O mercado é sazonal, influenciado pelo turismo e pela cena de esportes de praia (surfe e esportes aquáticos), com demanda elevada na alta temporada nos núcleos de Maresias, Boiçucanga e Centro.',

  bairrosNobres: ['Maresias', 'Boiçucanga', 'Camburi', 'Juqueí'],
  bairrosPopulares: ['Topolândia', 'Morro do Abrigo', 'Varadouro', 'Vila Amélia'],

  parques: [
    {
      nome: 'Praia de Maresias',
      descricao:
        'Orla extensa, principal polo de surfe (sede de etapa mundial), ideal para corrida na areia e treino funcional.',
    },
    {
      nome: 'Praia de Camburi',
      descricao:
        'Praia popular para banho e esportes ao ar livre.',
    },
    {
      nome: 'Orla do Centro Histórico',
      descricao:
        'Beira-mar e centro histórico, área plana e agradável para caminhada e atividades ao ar livre.',
    },
  ],
  ciclovias:
    'A extensão e o traçado de ciclovias ainda não são divulgados em fonte oficial.',

  clima:
    'O clima é tropical úmido, com temperaturas entre cerca de 18 °C e 35 °C e chuvas abundantes, sobretudo no verão.',
  climaTreino:
    'A umidade alta e o calor pedem hidratação e horários mais frescos; o clima litorâneo permite treinar ao ar livre o ano todo, com atenção às chuvas de verão.',

  mobilidade:
    'São Sebastião é estruturada pela Rodovia Rio-Santos (SP-055/BR-101) e tem acesso ao Vale do Paraíba e à capital pela Tamoios via Caraguatatuba, com os contornos da Tamoios reduzindo muito o trajeto.',

  corridas: [
    {
      nome: 'Etapa do Circuito Mundial de Surfe (Maresias)',
      descricao:
        'Etapa do circuito mundial realizada em Maresias, referência nacional do surfe.',
    },
    {
      nome: 'Circuito Mares',
      descricao:
        'Evento multiesportivo (natação em águas abertas, aquathlon, corrida e SUP), com milhares de atletas.',
    },
  ],
  culturaEsportiva:
    'Há forte identidade ligada ao surfe e aos esportes aquáticos e de praia, com Maresias como referência nacional, e calendário ativo de etapas de surfe, travessias e corridas.',
  academias:
    'A oferta reúne academias e estúdios, com mais de 100 km de orla funcionando como academia a céu aberto e a sazonalidade do verão elevando a demanda.',

  destaquesFitness: [
    'Maresias como polo de surfe de nível internacional (etapa mundial).',
    'Eventos multiesportivos (Circuito Mares: natação, aquathlon, corrida e SUP).',
    'Mais de 100 km de orla para corrida, treino funcional e esportes aquáticos.',
    'Clima litorâneo que permite treino ao ar livre o ano inteiro.',
  ],

  precos: {
    avulsaMin: 75,
    avulsaMax: 180,
    mensalMin: 380,
    mensalMax: 1000,
    onlineMin: 180,
    onlineMax: 450,
  },

  conclusao:
    'Capital paulista do surfe em Maresias e cidade portuária, São Sebastião une mais de 100 km de orla a uma cena multiesportiva forte. Um personal trainer ajuda a aproveitar a praia como academia a céu aberto, do treino na areia à preparação para o mar.',

  vizinhas: ['caraguatatuba-sp', 'sao-jose-dos-campos-sp'],

  fontes: [
    { nome: 'IBGE Cidades — São Sebastião', url: 'https://cidades.ibge.gov.br/brasil/sp/sao-sebastiao/panorama' },
    { nome: 'Prefeitura de São Sebastião', url: 'https://www.saosebastiao.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
