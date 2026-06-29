import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'corumba-ms',
  nome: 'Corumbá',
  uf: 'MS',
  estado: 'Mato Grosso do Sul',
  estadoSlug: 'mato-grosso-do-sul',
  regiao: 'Centro-Oeste',
  gentilico: 'corumbaense',
  tipo: 'cidade',

  populacao: 96268,
  populacaoAno: 2022,
  idhm: 0.700,
  idhmClasse: 'alto',
  altitudeM: 118,

  resumoEconomico:
    'Conhecida como a Capital do Pantanal, Corumbá fica na fronteira com a Bolívia, às margens do rio Paraguai. A economia combina mineração de ferro e manganês (o Maciço do Urucum é uma das maiores reservas do país), pecuária, turismo de pesca e ecoturismo no Pantanal, além do comércio movimentado pela proximidade com Puerto Quijarro e Puerto Suárez. O porto fluvial e a posição estratégica na fronteira sustentam o fluxo logístico da cidade.',

  mercado:
    'Por ser uma cidade média e relativamente isolada, o mercado fitness de Corumbá é mais enxuto que o das maiores cidades do estado, concentrado em academias locais e algumas marcas de musculação. A procura por personal trainers tende a crescer entre quem busca treino orientado para lidar com o calor extremo e para aproveitar a orla do rio como espaço de atividade ao ar livre.',

  bairrosNobres: ['Centro', 'Cervejaria', 'Dom Bosco', 'Universitário'],
  bairrosPopulares: ['Cristo Redentor', 'Nova Corumbá', 'Generoso', 'Maria Leite'],

  parques: [
    {
      nome: 'Orla do Rio Paraguai (Porto Geral)',
      descricao:
        'O cartão-postal da cidade, na parte baixa junto ao Porto Geral, reúne o casario histórico e calçadões à beira-rio — o trecho mais usado para caminhada, corrida e treino ao ar livre, em fase de requalificação.',
    },
    {
      nome: 'Forte Junqueira',
      descricao:
        'Fortificação histórica do século XIX em ponto elevado da cidade; o entorno e as ladeiras próximas servem de percurso para quem treina ao ar livre com vista para o rio e o Pantanal.',
    },
    {
      nome: 'Entorno do Pantanal',
      descricao:
        'A cidade é porta de entrada da maior planície alagável do planeta; trilhas e estradas de acesso ao Pantanal oferecem opções de atividade em meio à natureza, condicionadas aos ciclos de cheia e seca.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana e da orla; grande parte do pedal e da corrida acontece nas vias da parte alta da cidade e ao longo do rio.',

  clima:
    'O clima é tropical, muito quente, e Corumbá figura com frequência entre as cidades mais quentes do Brasil — com vários dias acima de 40 °C ao ano. A dinâmica do Pantanal marca o ano em duas estações: a cheia (verão chuvoso, de novembro a março) e a seca (inverno mais ameno, quando pode ocorrer a friagem, queda brusca de temperatura).',
  climaTreino:
    'O calor intenso e a baixa altitude exigem treinar bem cedo ou no fim da tarde, com hidratação reforçada; nos picos de calor, ambientes climatizados são a opção mais segura, e o período de seca tende a ser mais favorável ao treino ao ar livre.',

  mobilidade:
    'Cidade de fronteira, Corumbá se conecta à Bolívia por Puerto Quijarro e tem o transporte urbano feito por ônibus. A logística histórica passa pela ferrovia (ramal que liga o Brasil à Bolívia) e pela hidrovia Paraguai-Paraná, com o porto fluvial no rio Paraguai escoando minério e cargas da região.',

  corridas: [
    {
      nome: 'Corrida do Pantanal',
      descricao:
        'Evento de corrida de rua associado ao bioma pantaneiro, que reforça a vocação da região para provas em meio à natureza.',
    },
    {
      nome: 'Pantanal Extremo',
      descricao:
        'Prova de percursos técnicos sediada em Corumbá, voltada a corredores que buscam desafio em ambiente natural do Pantanal.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso da orla do rio Paraguai para caminhada e corrida, a pesca e o ecoturismo ligados ao Pantanal, e provas que exploram o bioma — tudo moldado pelo calor característico da fronteira.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelos bairros centrais e residenciais, com porte compatível com uma cidade média do interior.',

  destaquesFitness: [
    'Capital do Pantanal: porta de entrada da maior planície alagável do planeta.',
    'Orla do rio Paraguai e Porto Geral como espaço de caminhada e corrida ao ar livre.',
    'Calor extremo, que exige planejamento de horário e hidratação no treino.',
    'Cidade de fronteira com a Bolívia, com economia de mineração de ferro e logística por ferrovia e hidrovia.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade quente, fronteiriça e cercada pelo Pantanal, Corumbá pede um treino adaptado ao clima e que aproveite a orla do rio e o entorno natural. Um personal trainer ajuda a organizar a rotina respeitando o calor, definindo os melhores horários e mantendo a constância ao longo das estações de cheia e seca.',

  vizinhas: ['campo-grande-ms', 'tres-lagoas-ms', 'dourados-ms'],

  fontes: [
    { nome: 'IBGE Cidades — Corumbá', url: 'https://cidades.ibge.gov.br/brasil/ms/corumba/panorama' },
    { nome: 'Prefeitura de Corumbá', url: 'https://corumba.ms.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
