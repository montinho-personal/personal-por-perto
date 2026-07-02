import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'corumba-de-goias-go',
  nome: 'Corumbá de Goiás',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'corumbaense',
  tipo: 'cidade',

  populacao: 10562,
  populacaoAno: 2022,
  idhm: 0.680,
  idhmClasse: 'médio',
  pibPerCapita: 32234.52,
  pibPerCapitaAno: 2023,
  altitudeM: 950,

  resumoEconomico:
    'Fundada em 1731 como arraial de mineração de ouro às margens do rio Corumbá e do ribeirão Bagagem, a cidade tornou-se município em 1902 e recebeu o nome atual em 1943, para se diferenciar da Corumbá sul-mato-grossense. Seu conjunto arquitetônico colonial — com destaque para a Igreja Matriz de Nossa Senhora da Penha de França, o Cine-Teatro Esmeralda e o casario do entorno — foi tombado pelo IPHAN em 2000, o que a coloca ao lado de Goiás, Pilar de Goiás e Pirenópolis entre as cidades históricas tombadas do estado. A agropecuária responde pela maior fatia do PIB municipal, seguida por serviços e administração pública, mas o turismo ganha peso crescente: o Salto Corumbá, parque ecológico com sete cachoeiras e esportes de aventura, atrai visitantes de Brasília e Goiânia, assim como a Festa de Nossa Senhora da Penha, que reúne as tradicionais Cavalhadas. A cidade também fica no entorno do corredor de turismo místico e espiritual do centro de Goiás, que tem em Abadiânia e na Chapada dos Veadeiros seus polos mais conhecidos.',

  mercado:
    'Cidade pequena e de vocação turística, Corumbá de Goiás tem um mercado fitness compacto, concentrado no centro histórico e voltado tanto à população local quanto ao público que visita o Salto Corumbá e as cachoeiras do entorno. A procura por personal trainer costuma estar ligada ao preparo físico para trilhas e cavalgadas, além do acompanhamento individualizado em uma cidade onde a oferta de academias é limitada.',

  bairrosNobres: ['Centro Histórico', 'Alto da Boa Vista'],
  bairrosPopulares: ['São João', '9 de Julho'],

  parques: [
    {
      nome: 'Salto Corumbá',
      descricao:
        'Parque ecológico particular considerado um dos maiores do Cerrado goiano, reúne sete cachoeiras (a principal com cerca de 50 m de queda), trilhas sinalizadas, rapel, tirolesa, arvorismo e boia cross, além de área de camping e day use.',
    },
    {
      nome: 'Cachoeiras do Izidoro, Monjolinho e Poço Rico',
      descricao:
        'Além do Salto, o município reúne outras quedas d\'água e a gruta do Buracão, formando um roteiro de cachoeiras que atrai caminhantes e banhistas pelo interior do território.',
    },
    {
      nome: 'Centro Histórico',
      descricao:
        'Casario colonial tombado pelo IPHAN em torno da Igreja Matriz de Nossa Senhora da Penha de França, com praças e ruas de pedra percorridas a pé por moradores e turistas.',
    },
  ],
  ciclovias:
    'Como cidade pequena e de relevo acidentado no Planalto Central, Corumbá de Goiás não conta com malha cicloviária estruturada; o ciclismo se concentra nas estradas vicinais e em trilhas de mountain bike rumo às cachoeiras e à zona rural.',

  clima:
    'O clima é tropical de altitude, com estações bem definidas: verão chuvoso (outubro a abril) e inverno seco (maio a setembro). Os 950 m de altitude no Planalto Central Goiano amenizam um pouco o calor típico do Cerrado, com noites mais frescas do que em cidades de menor altitude da região.',
  climaTreino:
    'A baixa umidade da estação seca pede hidratação reforçada e atenção às vias respiratórias em trilhas e cavalgadas, com os horários de início de manhã e fim de tarde mais indicados para o treino ao ar livre. No período chuvoso, o acesso às cachoeiras pode ficar mais difícil, o que reforça a importância de alternativas de treino em dias de temporal.',

  mobilidade:
    'O acesso principal se dá pela BR-414 e pela BR-070, que ligam a cidade a Anápolis (cerca de 45 km) e a Brasília (cerca de 130 km); Goiânia fica a aproximadamente 110 km. No distrito de Planalmira, entroncamento da BR-414 com a GO-338, sai o acesso rodoviário a Pirenópolis. O transporte urbano é modesto, com poucas linhas de ônibus, e o deslocamento até cachoeiras e áreas rurais costuma exigir veículo próprio.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva da cidade gira em torno das cachoeiras e trilhas do Salto Corumbá e do entorno rural, da tradição das cavalgadas — presentes tanto no lazer quanto na Festa de Nossa Senhora da Penha, com suas Cavalhadas seculares — e de esportes de aventura como rapel, tirolesa e arvorismo oferecidos no parque ecológico local.',
  academias:
    'A oferta de academias é pequena, concentrada no centro da cidade, com estúdios e espaços de musculação e treino funcional de porte compatível com um município de pouco mais de dez mil habitantes.',

  destaquesFitness: [
    'Salto Corumbá: parque ecológico com sete cachoeiras e esportes de aventura como rapel, tirolesa, arvorismo e boia cross.',
    'Centro histórico tombado pelo IPHAN, com igreja matriz e casario colonial de 1731 percorridos a pé.',
    'Cavalhadas seculares na Festa de Nossa Senhora da Penha, com forte tradição de cavalgadas na região.',
    'Altitude de 950 m no Planalto Central e proximidade de Brasília e Goiânia via BR-070, BR-414 e GO-338.',
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
    'Cercada por cachoeiras e com um centro histórico tombado pelo IPHAN, Corumbá de Goiás oferece um cenário raro para treinar em contato com a natureza e o patrimônio colonial goiano. Um personal trainer ajuda a preparar o corpo para trilhas, cavalgadas e os desníveis do Salto Corumbá, respeitando a altitude, o clima de Cerrado e a rotina de uma cidade pequena.',

  vizinhas: ['pirenopolis-go', 'anapolis-go', 'goiania-go'],

  fontes: [
    { nome: 'IBGE Cidades — Corumbá de Goiás', url: 'https://cidades.ibge.gov.br/brasil/go/corumba-de-goias/panorama' },
    { nome: 'Prefeitura de Corumbá de Goiás', url: 'https://corumbadegoias.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
