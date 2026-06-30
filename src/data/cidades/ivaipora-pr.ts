import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ivaipora-pr',
  nome: 'Ivaiporã',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'ivaiporaense',
  tipo: 'cidade',

  populacao: 32720,
  populacaoAno: 2022,
  idhm: 0.730,
  idhmClasse: 'alto',
  altitudeM: 692,

  resumoEconomico:
    'Polo regional do Vale do Ivaí, no centro do Paraná, Ivaiporã fica próxima ao marco que assinala o Centro Geográfico do estado. A economia se apoia no comércio e nos serviços que atendem aos municípios vizinhos, na administração pública e na agropecuária — com destaque para a pecuária leiteira e para grãos escoados por cooperativas regionais. A cidade funciona como referência de compras, saúde e educação para um conjunto de cidades menores do entorno.',

  mercado:
    'Como cidade média que concentra serviços de toda a microrregião, Ivaiporã tem um mercado fitness em crescimento, formado por academias locais de musculação e treino funcional. A procura por personal trainers vem aumentando entre quem busca acompanhamento individual e quem se prepara para as corridas de rua que ganharam força na região do Vale do Ivaí.',

  bairrosNobres: ['Centro', 'Jardim Aeroporto', 'Vila Nova', 'Jardim Botânico'],
  bairrosPopulares: ['Jardim Universitário', 'Vila Esperança', 'Jardim Paraná', 'Vila Operária'],

  parques: [
    {
      nome: 'Parque Ambiental Jardim Botânico',
      descricao:
        'Área verde de cerca de 100 mil m² com trilha ecológica, lago, viveiro de mudas e pista de caminhada — o principal espaço da cidade para caminhada, corrida e atividade ao ar livre, com infraestrutura revitalizada nos últimos anos.',
    },
    {
      nome: 'Lago das Flores',
      descricao:
        'Espaço de lazer e contemplação que passou por revitalização com melhorias de iluminação, acessibilidade e paisagismo, integrando bairros e o centro e servindo de ponto de caminhada para a população.',
    },
    {
      nome: 'Praça Manoel Teodoro da Rocha',
      descricao:
        'Praça central que articula áreas de convívio no coração da cidade, usada para caminhadas leves e encontros, próxima aos demais espaços de lazer urbano de Ivaiporã.',
    },
  ],
  ciclovias:
    'A malha cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e nos percursos do entorno do Parque Ambiental Jardim Botânico.',

  clima:
    'O clima é subtropical, na zona de transição típica do Vale do Ivaí entre o subtropical úmido (Cfa) e o de altitude mais ameno (Cfb). Os verões são quentes e chuvosos, e os invernos frescos, com possibilidade de geadas nas madrugadas mais frias por causa da altitude em torno de 690 metros.',
  climaTreino:
    'A amplitude térmica entre estações pede ajuste de roupa e horário: no verão, treinar cedo ou no fim da tarde para fugir do calor e da chuva da tarde; no inverno, aquecimento mais cuidadoso nas manhãs frias, quando a geada pode aparecer.',

  mobilidade:
    'Ivaiporã é um entroncamento rodoviário do centro do estado: a PR-466 faz o acesso principal à cidade e se conecta à PR-082, eixos que ligam a região a Apucarana, Campo Mourão e ao restante do Paraná. O transporte urbano é feito por ônibus, e a rodovia de acesso passou por obras de duplicação para melhorar o fluxo regional.',

  corridas: [
    {
      nome: 'KR Run',
      descricao:
        'Corrida de rua que reúne centenas de participantes em Ivaiporã, com percursos de 5 km e 10 km e inscrições de atletas de todo o Vale do Ivaí e de outras cidades do Paraná.',
    },
    {
      nome: 'Corrida Rústica Pare de Fumar Correndo',
      descricao:
        'Prova de rua tradicional na cidade, que já mobilizou corredores de dezenas de municípios do Paraná e de São Paulo em torno do incentivo à atividade física.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso do Parque Ambiental Jardim Botânico e dos espaços de lazer urbano para caminhada e corrida com um calendário de corridas de rua que cresceu na região, reunindo atletas de todo o Vale do Ivaí.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média que atende a toda a microrregião.',

  destaquesFitness: [
    'Polo do Vale do Ivaí, próximo ao marco do Centro Geográfico do Paraná.',
    'Parque Ambiental Jardim Botânico como principal espaço de caminhada e corrida ao ar livre.',
    'Calendário de corridas de rua em expansão, que atrai atletas de toda a região.',
    'Clima subtropical com invernos frescos e possibilidade de geada, que pede ajuste de horário no treino.',
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
    'Referência regional do centro do Paraná, Ivaiporã reúne espaços verdes revitalizados e um calendário de corridas que estimula a vida ativa no Vale do Ivaí. Um personal trainer ajuda a aproveitar o Parque Ambiental Jardim Botânico, a se preparar para as provas de rua e a manter a constância ao longo das estações, respeitando o calor do verão e o frio do inverno.',

  vizinhas: ['apucarana-pr', 'campo-mourao-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Ivaiporã', url: 'https://cidades.ibge.gov.br/brasil/pr/ivaipora/panorama' },
    { nome: 'Prefeitura de Ivaiporã', url: 'https://www.ivaipora.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
