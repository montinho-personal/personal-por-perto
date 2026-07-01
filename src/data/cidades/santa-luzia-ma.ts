import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santa-luzia-ma',
  nome: 'Santa Luzia',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'santa-luziense',
  tipo: 'cidade',

  populacao: 57635,
  populacaoAno: 2022,
  idhm: 0.550,
  idhmClasse: 'baixo',
  altitudeM: 89,

  resumoEconomico:
    'No oeste maranhense, às margens do rio Pindaré e já na transição para a Amazônia (a chamada pré-Amazônia), Santa Luzia tem economia apoiada na agropecuária, no comércio local e na logística ligada à ferrovia. A cidade fica na área de influência de Imperatriz e Açailândia, um dos eixos mais dinâmicos do estado, e é cortada pela Estrada de Ferro Carajás, corredor de exportação de minério e grãos que estrutura o transporte de cargas da região.',

  mercado:
    'Como cidade média do interior maranhense, Santa Luzia tem mercado fitness enxuto, formado sobretudo por academias de bairro e treino funcional. A procura por personal trainers aparece principalmente entre quem busca acompanhamento individualizado para lidar com o calor equatorial e para manter constância ao longo do ano, aproveitando o começo da manhã e o fim da tarde para o treino ao ar livre.',

  bairrosNobres: ['Centro', 'São Raimundo', 'Nova Santa Luzia'],
  bairrosPopulares: ['Vila Nova', 'Alto da Boa Vista', 'Cohab', 'São José'],

  parques: [
    {
      nome: 'Orla do Rio Pindaré',
      descricao:
        'O rio Pindaré é a principal referência natural da cidade; seu entorno e as vias próximas à margem servem de espaço para caminhada e corrida ao ar livre, com paisagem típica da pré-Amazônia maranhense.',
    },
    {
      nome: 'Praças e vias do Centro',
      descricao:
        'As praças e ruas da área central concentram boa parte da atividade física urbana, usadas para caminhada e treino leve no começo da manhã e no fim da tarde, quando o calor cede.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e restrita a poucos trechos urbanos; grande parte do pedal e da corrida acontece nas vias da cidade e em estradas de acesso da zona rural.',

  clima:
    'O clima é equatorial, quente e úmido, com duas estações bem marcadas: um período chuvoso (o "inverno" amazônico, concentrado no primeiro semestre) e um período seco no segundo semestre. As temperaturas são altas o ano todo, com umidade elevada típica da faixa de transição para a Amazônia.',
  climaTreino:
    'O calor e a umidade constantes pedem treinar bem cedo ou no fim da tarde, com hidratação reforçada e atenção ao desgaste. No período chuvoso, a alternância entre pancadas de chuva e sol forte exige flexibilidade na rotina; ambientes cobertos ajudam a manter a regularidade nos dias mais úmidos.',

  mobilidade:
    'A cidade se conecta à região pela BR-222, rodovia que liga o oeste maranhense a Açailândia e ao eixo de Imperatriz, e é cortada pela Estrada de Ferro Carajás, que transporta minério e grãos rumo ao litoral. O deslocamento interno é feito principalmente por transporte rodoviário e veículos individuais, em escala compatível com uma cidade média do interior.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva local gira em torno do futebol e das atividades ao ar livre no entorno do rio Pindaré e nas vias do Centro, com caminhada e corrida ganhando espaço entre quem busca rotina de saúde apesar do calor equatorial.',
  academias:
    'A oferta é formada principalmente por academias de musculação e treino funcional nos bairros centrais e residenciais, com porte típico de uma cidade média do interior maranhense.',

  destaquesFitness: [
    'Cidade às margens do rio Pindaré, na pré-Amazônia maranhense, com espaço para treino ao ar livre.',
    'Clima equatorial quente e úmido, que exige planejar horário e reforçar a hidratação no treino.',
    'Economia de agropecuária e comércio, na área de influência de Imperatriz e Açailândia.',
    'Cidade cortada pela Estrada de Ferro Carajás e conectada pela BR-222, importante eixo logístico do oeste do estado.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Cidade quente e úmida do oeste maranhense, às margens do Pindaré, Santa Luzia pede um treino adaptado ao clima equatorial e que aproveite os horários mais amenos do dia. Um personal trainer ajuda a organizar a rotina, escolher os melhores momentos para treinar e manter a constância ao longo das estações chuvosa e seca.',

  vizinhas: ['imperatriz-ma', 'acailandia-ma'],

  fontes: [
    { nome: 'IBGE Cidades — Santa Luzia (MA)', url: 'https://cidades.ibge.gov.br/brasil/ma/santa-luzia/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Infosanbas — Santa Luzia (MA)', url: 'https://infosanbas.org.br/municipio/santa-luzia-ma/' },
  ],
  atualizadoEm: '2026-06-29',
};
