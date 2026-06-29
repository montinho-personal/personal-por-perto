import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'nova-serrana-mg',
  nome: 'Nova Serrana',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'nova-serranense',
  tipo: 'cidade',

  populacao: 105552,
  populacaoAno: 2022,
  idhm: 0.72,
  idhmClasse: 'alto',
  altitudeM: 744,

  resumoEconomico:
    'Conhecida como a "Capital Nacional do Calçado Esportivo", Nova Serrana é um dos maiores polos calçadistas do país, com milhares de fábricas e empresas voltadas à produção de tênis e calçados esportivos. O setor concentra a economia local e atrai trabalhadores de toda a região, fazendo da cidade uma das que mais cresceram no centro-oeste mineiro.',

  mercado:
    'Cidade industrial em forte expansão, com a população mais jovem de Minas Gerais segundo o Censo 2022, Nova Serrana reúne perfil favorável à demanda fitness. A prefeitura instalou academias ao ar livre em vários bairros, reforçando uma cultura crescente de atividade física no dia a dia dos moradores.',

  bairrosNobres: ['Centro', 'Boa Vista', 'Santo Antônio', 'Frei Ambrósio'],
  bairrosPopulares: ['Romeu Duarte', 'São Geraldo', 'Belo Horizonte', 'Cidade Jardim'],

  parques: [
    {
      nome: 'Parque Ecológico de Nova Serrana',
      descricao:
        'Área verde com trilhas, lagos e vegetação preservada, usada para caminhada, contato com a natureza e atividade ao ar livre.',
    },
    {
      nome: 'Pista de Cooper',
      descricao:
        'Espaço público de referência para corrida e caminhada na cidade, ponto de encontro de praticantes e grupos de treino de rua.',
    },
    {
      nome: 'Praça da Lagoa',
      descricao:
        'Uma das praças mais frequentadas, com área de convivência e uso para caminhada no entorno; integra a rede de espaços públicos urbanos.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária não é divulgada em fonte oficial; a cidade investe mais em academias ao ar livre instaladas em diversos bairros e na pista de cooper.',

  clima:
    'O clima é tropical de altitude, com estação chuvosa concentrada no verão e estação seca no inverno; a temperatura média oscila aproximadamente entre 19 e 26 graus.',
  climaTreino:
    'O inverno seco e ameno favorece o treino ao ar livre; o verão úmido pede atenção ao horário e à hidratação.',

  mobilidade:
    'Nova Serrana é cortada pela BR-262, principal eixo que liga a cidade a Belo Horizonte e a Divinópolis, facilitando o acesso regional e o escoamento da produção calçadista.',

  corridas: [
    {
      nome: 'Corridas de rua locais na Pista de Cooper',
      descricao:
        'A Pista de Cooper concentra a prática de corrida na cidade, com grupos que realizam treinos de corrida, alongamento e fortalecimento ao longo do ano.',
    },
    {
      nome: 'Eventos esportivos municipais',
      descricao:
        'Nova Serrana sedia etapas regionais de jogos escolares e provas esportivas no calendário do centro-oeste mineiro.',
    },
  ],
  culturaEsportiva:
    'Cidade jovem e industrial, Nova Serrana tem cultura esportiva em crescimento, com academias ao ar livre instaladas pela prefeitura em bairros como Santo Antônio, Romeu Duarte, Frei Ambrósio e Boa Vista, além de grupos de corrida ativos na pista de cooper.',
  academias:
    'A oferta reúne academias e estúdios na malha urbana, somada à rede municipal de academias ao ar livre distribuídas em vários bairros, que ampliam o acesso popular ao treino.',

  destaquesFitness: [
    'Capital Nacional do Calçado Esportivo, com forte identidade ligada ao esporte.',
    'Academias ao ar livre instaladas em vários bairros pela prefeitura.',
    'Pista de cooper como ponto de referência para corrida e caminhada.',
    'Clima de altitude favorável ao treino ao ar livre no inverno seco.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 280,
    mensalMax: 720,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Capital Nacional do Calçado Esportivo e uma das cidades que mais crescem no centro-oeste mineiro, Nova Serrana combina perfil jovem, parque ecológico, pista de cooper e academias ao ar livre em vários bairros. Um personal trainer ajuda a estruturar o treino nesses espaços com método, ajustando os horários ao clima de altitude.',

  vizinhas: ['divinopolis-mg', 'para-de-minas-mg', 'itauna-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Nova Serrana', url: 'https://cidades.ibge.gov.br/brasil/mg/nova-serrana/panorama' },
    { nome: 'Prefeitura de Nova Serrana', url: 'https://www.novaserrana.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
