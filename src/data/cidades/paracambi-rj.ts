import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'paracambi-rj',
  nome: 'Paracambi',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'paracambiense',
  tipo: 'cidade',

  populacao: 41375,
  populacaoAno: 2022,
  idhm: 0.720,
  idhmClasse: 'alto',
  altitudeM: 50,

  resumoEconomico:
    'Localizada no extremo oeste da Região Metropolitana do Rio de Janeiro, no pé da Serra do Mar e na faixa do Vale do Café fluminense, Paracambi nasceu ligada à ferrovia e à indústria têxtil — a Companhia Têxtil Brasil Industrial, erguida em 1871 em arquitetura inglesa, foi uma das maiores fábricas do país em sua época. Hoje o antigo complexo fabril abriga a Fábrica do Conhecimento, polo de ensino com campus do IFRJ, FAETEC e CEDERJ. A economia atual combina administração pública, comércio e serviços, indústria e o ensino, com forte presença da Mata Atlântica preservada no entorno.',

  mercado:
    'Como cidade média e de perfil residencial na Região Metropolitana, Paracambi tem um mercado fitness enxuto, concentrado em academias de bairro e treino funcional. A procura por personal trainers tende a vir de quem busca acompanhamento próximo e de moradores que aproveitam a serra e as áreas verdes da cidade para treinar ao ar livre, além do público estudantil ligado aos polos de ensino.',

  bairrosNobres: ['Centro', 'Fábrica', 'Lages', 'Jardim Nova Era'],
  bairrosPopulares: ['Sabugo', 'Guarajuba', 'Ponte Coberta', 'Cascata'],

  parques: [
    {
      nome: 'Parque Natural Municipal do Curió',
      descricao:
        'Unidade de conservação de proteção integral com cerca de 913 hectares de Mata Atlântica preservada, criada em 2002 e batizada em homenagem à ave curió. Suas trilhas, cachoeiras e ambiente de floresta fazem dele o principal espaço para caminhada, trilha e atividade ao ar livre na cidade.',
    },
    {
      nome: 'Conjunto da antiga Fábrica Têxtil (Fábrica do Conhecimento)',
      descricao:
        'Antigo complexo da Companhia Têxtil Brasil Industrial, marco da arquitetura industrial inglesa no Brasil, hoje convertido em polo de ensino (IFRJ, FAETEC, CEDERJ). O entorno histórico, junto ao rio e à área central, é usado para caminhada e como ponto de encontro.',
    },
    {
      nome: 'Entorno da Serra do Mar',
      descricao:
        'No pé da serra e cercada por remanescentes de Mata Atlântica, a cidade oferece estradas e trilhas em meio à natureza para corrida, pedal e trekking, com relevo que varia do vale urbano às encostas mais íngremes.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e restrita a trechos da área urbana; boa parte do pedal acontece nas vias da cidade e nas estradas vicinais que sobem em direção à serra e às áreas rurais.',

  clima:
    'O clima é tropical, quente e úmido no vale onde fica a área urbana, com verões chuvosos (de novembro a março) e invernos mais secos e amenos. A proximidade da Serra do Mar deixa as encostas e as áreas de floresta mais frescas e úmidas do que o centro da cidade.',
  climaTreino:
    'O calor e a umidade do verão pedem treino bem cedo ou no fim da tarde, com hidratação reforçada; as áreas de mata e a serra oferecem sombra e temperatura mais amena, sendo boas opções para atividade ao ar livre, enquanto o inverno mais seco favorece treinos em qualquer horário.',

  mobilidade:
    'Paracambi é o ponto mais a oeste da malha de trens metropolitanos do Rio de Janeiro, com estação que liga a cidade à capital pelo ramal ferroviário — herança de sua origem ligada à ferrovia. O acesso rodoviário se dá pela RJ-127, que conecta a cidade à BR-116 (Rio–São Paulo), e o transporte interno é feito por ônibus.',

  corridas: [
    {
      nome: 'Corridas e provas de rua regionais',
      descricao:
        'A cidade e o entorno da Baixada/Região Metropolitana recebem provas de corrida de rua ao longo do ano, com percursos que aproveitam a área central histórica e as vias próximas à serra.',
    },
    {
      nome: 'Trilhas do Parque do Curió',
      descricao:
        'As trilhas em meio à Mata Atlântica do Parque Natural Municipal do Curió são reduto de quem pratica trekking e corrida em trilha, com percursos que sobem pela floresta preservada.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso das trilhas e da Mata Atlântica do Parque do Curió para caminhada e trilha, o pedal pelas estradas da serra e a caminhada no entorno histórico da antiga fábrica e da área central — tudo marcado pela paisagem de pé de serra.',
  academias:
    'A oferta é formada principalmente por academias de bairro de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média da Região Metropolitana.',

  destaquesFitness: [
    'Parque Natural Municipal do Curió, com cerca de 913 hectares de Mata Atlântica preservada, trilhas e cachoeiras.',
    'Cidade no pé da Serra do Mar, com relevo e áreas verdes que favorecem trilha, pedal e corrida ao ar livre.',
    'Antiga fábrica têxtil do século XIX convertida em polo de ensino (Fábrica do Conhecimento, com IFRJ e FAETEC).',
    'Ligação ferroviária histórica com a capital e acesso rodoviário pela RJ-127, no extremo oeste da Região Metropolitana.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade de pé de serra, histórica e cercada por Mata Atlântica, Paracambi reúne trilhas, áreas verdes e um centro de origem ferroviária e industrial que convidam ao treino ao ar livre. Um personal trainer ajuda a montar uma rotina que aproveite o Parque do Curió e a serra, ajustando horários ao calor do verão e mantendo a constância ao longo do ano.',

  vizinhas: ['itaguai-rj', 'seropedica-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Paracambi', url: 'https://cidades.ibge.gov.br/brasil/rj/paracambi/panorama' },
    { nome: 'Prefeitura de Paracambi', url: 'https://paracambi.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
