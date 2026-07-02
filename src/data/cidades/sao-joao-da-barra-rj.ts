import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-joao-da-barra-rj',
  nome: 'São João da Barra',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'sanjoanense',
  tipo: 'cidade',

  populacao: 36573,
  populacaoAno: 2022,
  idhm: 0.671,
  idhmClasse: 'médio',
  pibPerCapita: 382417,
  pibPerCapitaAno: 2023,
  altitudeM: 2,

  resumoEconomico:
    'No litoral norte fluminense, na foz do rio Paraíba do Sul, São João da Barra teve sua economia transformada pela chegada do Porto do Açu, complexo industrial-portuário operado pela Prumo Logística desde 2014 e hoje um dos maiores terminais privados de águas profundas da América do Sul, voltado a óleo e gás, mineração e logística. O porto responde por cerca de 40% da receita tributária própria do município (via IPTU e ISS de empresas instaladas no complexo) e emprega milhares de trabalhadores, boa parte deles moradores da própria cidade e de Campos dos Goytacazes. Ao lado da atividade portuária, a cidade mantém pesca artesanal, agricultura familiar nos distritos do interior e turismo de praia, com destaque para o balneário de Grussaí.',

  mercado:
    'O mercado fitness de São João da Barra é o de uma cidade de porte pequeno-médio em transformação: a chegada de empresas e profissionais ligados ao Porto do Açu ampliou a renda média local e a procura por academias e treino personalizado, especialmente na sede do município. Ao mesmo tempo, a vocação de praia da cidade — em Grussaí e no entorno — sustenta demanda por treino ao ar livre, funcional e voltado a esportes aquáticos, com sazonalidade marcada pelo veraneio.',

  bairrosNobres: ['Centro', 'Grussaí'],
  bairrosPopulares: ['Atafona', 'Barcelos', 'Cajueiro', 'Pipeiras'],

  parques: [
    {
      nome: 'Praia e Lagoa de Grussaí',
      descricao:
        'Principal point turístico do município, reúne casas de veraneio do início do século XX, quiosques, pousadas e um beach clube; os ventos costeiros favorecem o kitesurf, e a orla é usada para caminhada e corrida.',
    },
    {
      nome: 'Orla de Atafona',
      descricao:
        'Distrito litorâneo às margens da foz do rio Paraíba do Sul, historicamente point de veraneio; enfrenta um avançado processo de erosão costeira, que já destruiu centenas de imóveis e vem reconfigurando o uso da faixa de praia.',
    },
    {
      nome: 'Praias do Açu e de Iquipari',
      descricao:
        'Faixas de praia mais afastadas do centro urbano, na área de influência do complexo portuário, com menor infraestrutura e uso mais voltado à pesca e a atividades ao ar livre de moradores locais.',
    },
  ],
  ciclovias:
    'A malha cicloviária é modesta e concentrada em trechos da sede e da orla de Grussaí; a maior parte do treino ao ar livre acontece nas praias, no calçadão e nas vias do centro.',

  clima:
    'O clima é tropical (Aw na classificação de Köppen), com temperatura média anual em torno de 24°C. Os verões são chuvosos e mais abafados, enquanto o inverno é mais seco e ventoso, com os ventos costeiros marcando o litoral o ano todo.',
  climaTreino:
    'O calor e a umidade do verão pedem treino nas primeiras horas da manhã ou no fim da tarde, com boa hidratação; o vento constante da orla favorece esportes como o kitesurf, e o inverno mais seco tende a ser mais confortável para atividades ao ar livre durante o dia.',

  mobilidade:
    'A rodovia estadual RJ-196 liga a sede do município à BR-356 e a Campos dos Goytacazes, a cerca de 36 km de distância; a Ponte da Integração, mais recente, encurtou o trajeto entre São João da Barra, Campos e São Francisco de Itabapoana. O transporte interno é feito por ônibus e vans, e boa parte da movimentação de trabalhadores do Porto do Açu depende de transporte fretado pelas empresas do complexo.',

  corridas: [
    {
      nome: 'Meia Maratona de São João da Barra',
      descricao:
        'Prova organizada pela Desafio Espartano – Eventos Esportivos, com percursos de 21 km e 12 km que combinam trilha, estrada de terra, areia e trechos de paralelepípedo pela cidade.',
    },
    {
      nome: 'Corrida do Bem – etapa Porto do Açu',
      descricao:
        'Etapa da Corrida do Bem realizada no Balneário de Atafona, com percursos de 5 km e 10 km, patrocinada pela Ferroport e voltada à promoção de saúde e ações solidárias.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina o uso das praias de Grussaí e Atafona para caminhada, corrida e esportes aquáticos como o kitesurf com uma programação esportiva de verão promovida pela prefeitura, além de provas de rua como a Meia Maratona de São João da Barra e a Corrida do Bem, que atraem participantes da região Norte Fluminense.',
  academias:
    'A oferta de academias e estúdios está concentrada na sede do município, com crescimento puxado pela chegada de trabalhadores e empresas ligados ao Porto do Açu; a estrutura ainda é a de uma cidade de pequeno porte, sem grandes redes de academia.',

  destaquesFitness: [
    'Praia de Grussaí, com casas de veraneio centenárias, beach clube e ventos favoráveis ao kitesurf.',
    'Porto do Açu, um dos maiores complexos portuário-industriais privados da América do Sul, que vem mudando a renda e o mercado de serviços da cidade.',
    'Orla de Atafona, marcada pelo avanço do mar, que reconfigura o espaço de treino na praia.',
    'Meia Maratona de São João da Barra, prova de 21 km e 12 km em trilha, estrada, areia e paralelepípedo.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 270,
    mensalMax: 750,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade de praia e de porto, São João da Barra vive a convivência entre a tradição da pesca e da agricultura familiar e a transformação econômica trazida pelo Porto do Açu. Um personal trainer ajuda a aproveitar a orla de Grussaí e os ventos costeiros para treinos ao ar livre e esportes aquáticos, adaptando a rotina ao calor do litoral norte fluminense e à sazonalidade do veraneio.',

  vizinhas: ['campos-dos-goytacazes-rj', 'macae-rj'],

  fontes: [
    {
      nome: 'IBGE Cidades — São João da Barra',
      url: 'https://cidades.ibge.gov.br/brasil/rj/sao-joao-da-barra/panorama',
    },
    { nome: 'Prefeitura de São João da Barra', url: 'https://www.sjb.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
