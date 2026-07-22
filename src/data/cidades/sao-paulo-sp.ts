import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-paulo-sp',
  nome: 'São Paulo',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'paulistano',

  populacao: 11451999,
  populacaoAno: 2022,
  idhm: 0.805,
  idhmClasse: 'muito alto',
  altitudeM: 760,

  resumoEconomico:
    'Principal centro financeiro da América Latina e sede da B3, a maior bolsa de valores das Américas, São Paulo tem a economia mais diversificada do país. Os eixos da Avenida Paulista, da Faria Lima e do Itaim Bibi concentram bancos, gestoras e seguradoras — um público corporativo com rotina intensa que movimenta boa parte da demanda por treino antes e depois do expediente.',

  mercado:
    'São Paulo é o mercado de personal trainer mais competitivo do país — e também o mais segmentado. No eixo corporativo (Paulista, Faria Lima, Itaim Bibi), predominam treinos encaixados antes ou depois do expediente e na hora do almoço, muitas vezes em academias perto do escritório. Em bairros residenciais de renda alta, como Moema, Jardins e Morumbi, pesam o atendimento em condomínio e em casa, com estúdios boutique completando a oferta. Nos bairros de classe média e na periferia, o treino acontece nas academias de bairro e nos parques, com o custo-benefício na frente. Essa variedade permite encontrar de tudo — do estúdio premium ao acompanhamento online, formato em que o portal destaca o Montinho Personal, com base na região de Alphaville, na Grande São Paulo, e atendimento presencial combinável conforme agenda e local.',

  bairrosNobres: [
    'Jardins',
    'Itaim Bibi',
    'Vila Nova Conceição',
    'Moema',
    'Vila Olímpia',
    'Pinheiros',
    'Vila Mariana',
    'Morumbi',
  ],
  bairrosPopulares: ['Capão Redondo', 'Itaquera', 'São Mateus', 'Brasilândia', 'Cidade Tiradentes'],

  parques: [
    {
      nome: 'Parque Ibirapuera',
      descricao:
        'Cartão-postal do esporte paulistano, com cerca de 1,5 milhão de m². A volta do lago tem aproximadamente 3 km planos e o entorno arborizado oferece um circuito de cooper de terra batida de cerca de 6 km, muito procurado de manhã cedo e no fim da tarde.',
    },
    {
      nome: 'Parque Villa-Lobos',
      descricao:
        'Na zona oeste, é o parque mais técnico para corredores: três pistas de cooper sinalizadas por cor — amarela (700 m), vermelha (1.400 m) e azul (2.100 m) — além de ciclovia e quadras, o que facilita montar treinos intervalados com distância controlada.',
    },
    {
      nome: 'Parque do Povo e Parque da Aclimação',
      descricao:
        'Opções menores e bem distribuídas pela cidade, úteis para quem busca treino funcional, mobilidade e caminhada perto de casa sem encarar grandes deslocamentos.',
    },
  ],
  ciclovias:
    'São Paulo tem a maior malha cicloviária do Brasil — 731 km, com meta de alcançar 1.000 km —, incluindo um trecho de 1,9 km que liga a Avenida Paulista ao Ibirapuera (dado da Prefeitura de São Paulo).',

  clima:
    'O clima é subtropical úmido, com quatro estações bem marcadas. A média anual fica em torno de 20 °C, com invernos amenos (perto de 13 °C) e verões que chegam a 29 °C. A precipitação anual é de cerca de 1.658 mm, concentrada no verão — não à toa a capital é conhecida como a "terra da garoa".',
  climaTreino:
    'O clima ameno o ano inteiro favorece o treino ao ar livre, mas o verão chuvoso e os picos de poluição em dias secos de inverno pedem flexibilidade: ter um plano B em academia ou condomínio evita que a rotina trave nos dias ruins.',

  mobilidade:
    'A capital tem a maior rede metroferroviária do país — cerca de 388 km, com 14 linhas e mais de 180 estações, somando metrô e CPTM. Muitos parques e academias ficam a poucos minutos de uma estação, o que torna viável treinar perto do trabalho mesmo morando longe.',

  corridas: [
    {
      nome: 'Corrida Internacional de São Silvestre',
      descricao:
        'A prova mais tradicional do Brasil, disputada todo 31 de dezembro: 15 km com largada e chegada na Avenida Paulista. A edição de 2025 marcou 100 anos de história e reuniu cerca de 55 mil corredores.',
    },
    {
      nome: 'Circuito de corridas de rua',
      descricao:
        'Além da São Silvestre, a cidade tem um dos calendários de corrida de rua mais intensos do país, com provas de 5 km, 10 km, 21 km e 42 km praticamente todo fim de semana.',
    },
  ],
  culturaEsportiva:
    'São Paulo tem a cultura de corrida de rua mais forte do Brasil e um público fitness exigente. A combinação de grandes parques, ampla malha cicloviária e calendário esportivo lotado cria um ambiente em que treinar faz parte da identidade da cidade.',
  academias:
    'É o mercado fitness mais maduro do país: berço da Smart Fit (fundada na capital em 2001, hoje a maior rede da América Latina), com forte presença em bairros, shoppings e estações de metrô. No segmento boutique, a Bodytech é referência, e a oferta de CrossFit e treino funcional é vasta.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'fundada na capital em 2001, hoje a maior rede da América Latina, presente em praticamente todos os bairros' },
    { nome: 'Bio Ritmo', detalhe: 'marca premium do grupo Smart Fit, com unidades em bairros como Itaim Bibi, Campo Belo e Morumbi' },
    { nome: 'Bodytech', detalhe: 'referência no segmento boutique, com superunidades que somam piscina e lutas' },
    { nome: 'Companhia Athletica', detalhe: 'rede de alto padrão, com unidades como Morumbi, Itaim e Anália Franco' },
    { nome: 'Estúdios boutique e boxes de CrossFit', detalhe: 'oferta vasta, espalhada por todas as regiões da cidade' },
  ],

  destaquesFitness: [
    'Maior malha cicloviária do Brasil (731 km).',
    'Cultura de corrida de rua mais forte do país, simbolizada pela São Silvestre.',
    'Mercado de academias e estúdios o mais competitivo e variado do Brasil.',
    'Parques de referência (Ibirapuera e Villa-Lobos) com circuitos de cooper medidos.',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 200,
    mensalMin: 400,
    mensalMax: 1200,
    onlineMin: 200,
    onlineMax: 500,
  },

  conclusao:
    'São Paulo reúne a maior oferta de personal trainers, academias e espaços de treino do Brasil — o desafio não é encontrar, é escolher bem. Vale definir objetivo, orçamento e logística (perto de casa, do trabalho ou no condomínio) antes de fechar, e usar os guias do portal para comparar formatos. Com parques de referência, a maior malha cicloviária do país e um calendário esportivo que não para, a cidade joga a favor de quem decide treinar com constância.',

  faqsExtra: [
    {
      pergunta: 'Em quais regiões de São Paulo o personal costuma atender?',
      resposta:
        'Em todas — o que muda é o formato. No eixo corporativo (Paulista, Faria Lima, Itaim Bibi), o comum é treinar em academia perto do escritório, antes ou depois do expediente. Em bairros como Moema, Jardins, Morumbi e Vila Mariana, cresce o atendimento em casa e na academia do condomínio. Perto do Ibirapuera e do Villa-Lobos, o treino ao ar livre com material portátil é forte. Como a cidade é enorme, a regra prática é buscar um profissional que atenda no seu bairro ou no trajeto casa-trabalho.',
    },
    {
      pergunta: 'Treinar perto de casa ou perto do trabalho: o que funciona melhor em São Paulo?',
      resposta:
        'Depende do seu horário mais protegido. Quem treina cedo tende a manter melhor a rotina perto de casa; quem prefere a hora do almoço ou o pós-expediente costuma se dar melhor perto do trabalho — a rede metroferroviária de mais de 180 estações ajuda a encaixar academia no trajeto. O personal experiente monta o plano em torno dessa logística, e o acompanhamento online resolve as semanas em que o trânsito ou a agenda desmontam o plano A.',
    },
    {
      pergunta: 'Quais objetivos são mais comuns entre quem contrata personal em São Paulo?',
      resposta:
        'No público de escritório, lideram emagrecimento, condicionamento e o alívio de dores e postura da rotina sentada — muitas vezes com metas de prova de rua no meio do caminho, dada a cultura de corrida da cidade. Nos bairros residenciais, aparecem força, saúde geral e o acompanhamento para começar do zero com segurança. Em todos os perfis, a constância é o divisor: é nela que o acompanhamento próximo faz mais diferença.',
    },
    {
      pergunta: 'Existe personal em São Paulo para quem sente dores ou tem limitações?',
      resposta:
        'Existe — e é uma das buscas que mais crescem. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas e a vivência de quem já treinou com desconforto. Com base na região de Alphaville, na Grande São Paulo, o atendimento presencial na capital pode ser combinado conforme agenda e local, e o acompanhamento online cobre toda a cidade. O treino é adaptado e progressivo, sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['guarulhos-sp', 'osasco-sp', 'santo-andre-sp', 'barueri-sp'],

  fontes: [
    { nome: 'IBGE Cidades — São Paulo', url: 'https://cidades.ibge.gov.br/brasil/sp/sao-paulo/panorama' },
    { nome: 'Prefeitura de São Paulo — Ciclovias', url: 'https://www.prefeitura.sp.gov.br/' },
    { nome: 'Corrida Internacional de São Silvestre', url: 'https://www.saosilvestre.com.br/' },
  ],
  capaArte: {
    src: '/capas-cidade/sao-paulo-sp.webp',
    alt:
      'Personal trainer em São Paulo (SP) orientando aluna em treino de força ao ar livre, com a Ponte Estaiada Octávio Frias de Oliveira e os arranha-céus da capital paulista ao fundo — Personal por Perto',
    legenda:
      'Treino personalizado em São Paulo: acompanhamento profissional perto de você, em toda a capital e regiões.',
  },
  atualizadoEm: '2026-07-22',
};
