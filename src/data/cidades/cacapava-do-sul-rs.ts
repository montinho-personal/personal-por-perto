import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cacapava-do-sul-rs',
  nome: 'Caçapava do Sul',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'caçapavano',
  tipo: 'cidade',

  populacao: 32515,
  populacaoAno: 2022,
  idhm: 0.704,
  idhmClasse: 'alto',
  altitudeM: 450,

  resumoEconomico:
    'No coração da Serra do Sudeste gaúcha, Caçapava do Sul foi a segunda capital da República Farroupilha, entre 1839 e 1840, e guarda desse período o Forte Dom Pedro II. A economia se apoia na mineração — o município responde por cerca de 80% do calcário extraído no Rio Grande do Sul — e tem raízes na histórica exploração de cobre das Minas do Camaquã, hoje alvo de novos projetos de pesquisa mineral de cobre, zinco e chumbo. Somam-se a pecuária de corte e ovina, típica da Campanha e do Pampa, e um crescente turismo geológico em torno do Geoparque Caçapava, projeto que reúne prefeitura, universidades (UFSM e Unipampa) e a associação local de geoturismo na candidatura a Geoparque Mundial da UNESCO.',

  mercado:
    'O mercado de personal trainers em Caçapava do Sul é pequeno e concentrado no Centro, refletindo o porte de uma cidade média do interior gaúcho. Além da procura ligada à musculação e ao condicionamento geral, o município atrai um público específico de escaladores e praticantes de trekking que visitam a Pedra do Segredo e as Guaritas, o que abre espaço para acompanhamento voltado a preparo físico para atividades ao ar livre e trilhas de maior exigência.',

  bairrosNobres: ['Centro', 'Centro Histórico', 'Bairro Nossa Sra. de Fátima', 'Bairro D. Pedro II'],
  bairrosPopulares: ['Bairro Promorar', 'Bairro Floresta', 'Bairro Batista', 'Bairro Pazinato'],

  parques: [
    {
      nome: 'Geoparque Caçapava — Guaritas e Estrada das Guaritas',
      descricao:
        'Geosite formado por paredões de arenito e conglomerado esculpidos ao longo de milhões de anos, cortado pela Estrada das Guaritas; um dos cenários que sustentam a candidatura do Geoparque Caçapava a Geoparque Mundial da UNESCO e atrai caminhantes e fotógrafos de natureza.',
    },
    {
      nome: 'Parque Natural Municipal Pedra do Segredo',
      descricao:
        'Unidade de conservação municipal com trilhas autoguiadas e uma trilha principal de cerca de uma hora até grutas no alto da formação rochosa; ponto de referência para escalada e trekking no Geoparque Caçapava, com paredões que chegam a formações como a "Cabeça do Gorila".',
    },
    {
      nome: 'Praça Central e Forte Dom Pedro II',
      descricao:
        'A praça arborizada em frente à Igreja Matriz Nossa Senhora da Assunção, com o Monumento Farroupilha, é o principal ponto de caminhada do Centro; nas proximidades, o Forte Dom Pedro II, fortificação de meados do século XIX com muralhas de até 10 metros, complementa o roteiro histórico a pé.',
    },
  ],
  ciclovias:
    'A malha cicloviária ainda é incipiente, com poucos trechos implantados no Centro. A prefeitura, em parceria com a Unipampa, desenvolveu um projeto de rede cicloviária de cerca de 10,5 km para o eixo mais densamente ocupado da cidade, aproveitando o relevo predominantemente favorável do núcleo urbano — o pedal e a corrida de rua ainda acontecem majoritariamente nas próprias vias.',

  clima:
    'O clima é subtropical (Cfa), na transição para o clima oceânico das partes mais altas da Serra do Sudeste. Os verões são quentes, com máximas que podem chegar a 38 °C, enquanto os invernos são frios, com geadas frequentes e mínimas que já registraram valores próximos de -4 °C; a neve é rara, mas já foi registrada na região. As chuvas são bem distribuídas ao longo do ano, sem estação seca definida.',
  climaTreino:
    'O verão quente pede treinos ao ar livre no início da manhã ou fim da tarde, com boa hidratação; já o inverno rigoroso, com geadas frequentes, torna os ambientes fechados e aquecidos a opção mais segura nas primeiras horas do dia, exigindo aquecimento cuidadoso antes de qualquer atividade ao ar livre.',

  mobilidade:
    'Caçapava do Sul é servida pela BR-392, parte do corredor que liga Santa Maria a Rio Grande e escoa calcário e produção agropecuária da Campanha, com acesso ao município no km 257,5 — trevo que recebeu obras de sinalização e faixa de desaceleração do DNIT em 2024 — além da BR-153 e das rodovias estaduais RS-625 e RS-357. O transporte urbano é feito por ônibus, e o relevo relativamente plano do núcleo urbano favorece deslocamentos a pé e de bicicleta.',

  corridas: [
    {
      nome: 'Corridas de rua e caminhadas comunitárias',
      descricao:
        'A cidade integra o calendário de corridas de rua e caminhadas do interior gaúcho, com provas geralmente ligadas a causas de saúde e datas cívicas, disputadas nas ruas do Centro Histórico e em torno da Praça Central.',
    },
    {
      nome: 'Trekking e escalada no Geoparque Caçapava',
      descricao:
        'A Pedra do Segredo e as Guaritas são destino de escaladores e praticantes de trekking de vários pontos do estado, com trilhas de diferentes níveis de dificuldade em meio às formações rochosas do geoparque.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina a tradição gaúcha das atividades de campo, ligada à pecuária e à vida na Campanha, com o crescimento do turismo de aventura em torno das Guaritas e da Pedra do Segredo, que atrai escaladores e caminhantes. No Centro, a praça arborizada e o entorno histórico concentram parte da caminhada e da corrida do dia a dia.',
  academias:
    'A oferta de academias é enxuta, concentrada no Centro e em bairros próximos, com estúdios de musculação e treino funcional compatíveis com o porte de uma cidade média do interior gaúcho.',

  destaquesFitness: [
    'Geoparque Caçapava, aspirante a Geoparque Mundial da UNESCO, com as Guaritas e a Pedra do Segredo como cenário para trekking e escalada.',
    'Segunda capital da República Farroupilha, com o Forte Dom Pedro II e o Centro Histórico como roteiro de caminhada.',
    'Clima de Serra do Sudeste, com verões quentes de até 38 °C e invernos frios com geadas e ocorrência rara de neve, que exigem planejamento de horário no treino ao ar livre.',
    'Economia apoiada na mineração de calcário (cerca de 80% da produção gaúcha) e na pecuária, moldando um mercado fitness ainda pequeno e concentrado no Centro.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 340,
  },

  conclusao:
    'Marcada pela história farroupilha e pela paisagem rochosa do Geoparque Caçapava, Caçapava do Sul pede um treino que respeite as variações fortes de clima da Serra do Sudeste e aproveite o Centro Histórico e as trilhas das Guaritas e da Pedra do Segredo. Um personal trainer ajuda a organizar a rotina entre os verões quentes e os invernos frios, preparando o corpo tanto para o dia a dia quanto para as trilhas e escaladas que atraem visitantes ao geoparque.',

  vizinhas: ['santa-maria-rs', 'bage-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Caçapava do Sul', url: 'https://cidades.ibge.gov.br/brasil/rs/cacapava-do-sul/panorama' },
    { nome: 'Prefeitura de Caçapava do Sul', url: 'https://cacapavadosul.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
