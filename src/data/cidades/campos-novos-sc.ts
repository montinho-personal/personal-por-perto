import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'campos-novos-sc',
  nome: 'Campos Novos',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'campo-novense',
  tipo: 'cidade',

  populacao: 36932,
  populacaoAno: 2022,
  idhm: 0.742,
  idhmClasse: 'alto',
  altitudeM: 947,

  resumoEconomico:
    'Situada no Meio-Oeste catarinense, no Planalto Sul de Santa Catarina, Campos Novos é conhecida como o "Celeiro Catarinense" pela força do agronegócio: é uma das maiores produtoras de grãos do estado, com destaque para soja, milho, trigo e feijão, além de boa parte da produção estadual de sementes. A pecuária de leite e de corte e a suinocultura complementam a agricultura, e a cidade ainda tem peso no setor de energia — as usinas hidrelétricas instaladas na região respondem por uma fatia expressiva da geração de Santa Catarina. Setores como celulose e papel, metal-mecânico, madeireiro e de frigoríficos reforçam a economia local.',

  mercado:
    'Como cidade média do interior catarinense com economia aquecida pelo agronegócio, Campos Novos tem um mercado fitness em crescimento gradual, sustentado por academias locais de musculação e treino funcional. A procura por personal trainers tende a vir de quem busca acompanhamento individualizado para enfrentar a rotina, manter constância no inverno rigoroso do planalto e aproveitar praças e áreas ao ar livre nos dias mais amenos.',

  bairrosNobres: ['Centro', 'Aparecida', 'São Cristóvão', 'Boa Vista'],
  bairrosPopulares: ['Santa Lúcia', 'Vila Áurea', 'São José', 'Bela Vista'],

  parques: [
    {
      nome: 'Parque Ambiental Ernesto Zortéa',
      descricao:
        'Parque ambiental e ecológico voltado ao lazer e à educação ambiental, com áreas verdes que servem de espaço para caminhada e atividades ao ar livre em meio à natureza do planalto.',
    },
    {
      nome: 'Praça central (Praça do Imigrante)',
      descricao:
        'A praça principal reúne espaços abertos, arborização, bancos sombreados, playground e academia ao ar livre, sendo um dos pontos mais usados para caminhada e treino livre no centro da cidade.',
    },
    {
      nome: 'Praça Arlindo Bess',
      descricao:
        'Praça em frente ao terminal rodoviário, com gramados, árvores, playground e área para esportes, que funciona como espaço de convivência e atividade física ao ar livre.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e em estradas vicinais do entorno rural.',

  clima:
    'O clima é subtropical úmido (Cfa de Köppen), típico do Planalto Sul catarinense, com temperatura média anual em torno de 17 °C, verões amenos e invernos frios. A altitude elevada (cerca de 950 m) favorece quedas acentuadas de temperatura no inverno, com geadas frequentes e ocorrência ocasional de neve; as chuvas são bem distribuídas ao longo do ano, sem estação seca definida.',
  climaTreino:
    'O frio de altitude é o principal fator a considerar: no inverno, o aquecimento prévio é essencial e os horários do meio do dia tendem a ser mais confortáveis para treino ao ar livre, enquanto manhãs de geada pedem cautela. Nos dias amenos, as praças e o parque ambiental favorecem caminhada e corrida ao ar livre.',

  mobilidade:
    'Campos Novos fica em um importante entroncamento rodoviário do Meio-Oeste, no cruzamento da BR-282 com a BR-470 e rodovias estaduais como a SC-135 e a SC-458, o que liga a cidade ao litoral e ao oeste do estado e escoa a produção agrícola. O transporte urbano é feito por ônibus, e a malha rodoviária é a principal via de circulação de pessoas e cargas.',

  corridas: [
    {
      nome: 'Run Copercampos',
      descricao:
        'Corrida e caminhada de rua pelas ruas da cidade, com percursos de 5 km de corrida, 3 km de caminhada e provas infantis, organizada pela cooperativa Copercampos e parceiros.',
    },
    {
      nome: 'Circuito Catarinense de Corridas de Rua',
      descricao:
        'Calendário estadual de corridas de rua e trail running promovido pela Federação Catarinense de Atletismo, que reforça a cena do corredor no interior de Santa Catarina.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso das praças e do parque ambiental para caminhada e corrida, provas de rua ligadas ao cooperativismo agrícola e a forte identidade rural da cidade — tudo moldado pelo clima frio característico do planalto catarinense.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior catarinense.',

  destaquesFitness: [
    'Celeiro Catarinense: economia forte no agronegócio de soja, milho, trigo e sementes.',
    'Clima frio de altitude no Planalto Sul, com geadas no inverno que exigem aquecimento e planejamento de horário.',
    'Praças centrais e o Parque Ambiental Ernesto Zortéa como espaços de caminhada e treino ao ar livre.',
    'Polo de energia: usinas hidrelétricas na região (Campos Novos, no rio Canoas, e Barra Grande, no rio Pelotas).',
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
    'Cidade do planalto catarinense marcada pelo agronegócio e pelo inverno frio, Campos Novos pede um treino que respeite o clima de altitude e aproveite as praças e áreas verdes nos dias amenos. Um personal trainer ajuda a organizar a rotina, definir os melhores horários e manter a constância ao longo das estações, sobretudo nos meses mais frios.',

  vizinhas: ['lages-sc', 'videira-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Campos Novos', url: 'https://cidades.ibge.gov.br/brasil/sc/campos-novos/panorama' },
    { nome: 'Prefeitura de Campos Novos', url: 'https://camposnovos.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
