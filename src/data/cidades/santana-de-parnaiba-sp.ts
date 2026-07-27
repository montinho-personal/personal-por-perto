import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santana-de-parnaiba-sp',
  nome: 'Santana de Parnaíba',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'parnaibano',
  tipo: 'cidade',

  populacao: 154105,
  populacaoAno: 2022,
  idhm: 0.814,
  idhmClasse: 'muito alto',
  pibPerCapita: 79580,
  pibPerCapitaAno: 2021,
  altitudeM: 719,

  resumoEconomico:
    'Santana de Parnaíba é uma cidade de contrastes marcantes. De um lado, abriga parte dos complexos planejados de Alphaville e Tamboré, com condomínios de alto padrão, polo empresarial e uma das maiores rendas médias da Grande São Paulo; de outro, preserva o maior conjunto arquitetônico colonial do estado — mais de 200 casarões dos séculos XVII a XIX tombados no Centro Histórico. Fundada em 1580 e elevada a vila em 1625, é conhecida como o "berço dos bandeirantes". A economia é puxada por serviços e comércio, com indústria concentrada nos bairros Fazendinha e Tamboré.',

  mercado:
    'O mercado de personal trainers em Santana de Parnaíba reflete esse contraste. Nos condomínios fechados de Alphaville e Tamboré, a procura é por atendimento exclusivo dentro de casa ou na estrutura do próprio condomínio, com forte presença de estúdios boutique e profissionais especializados. Nos bairros residenciais como Fazendinha, Cidade São Pedro e Colinas da Anhanguera, o foco é custo-benefício, proximidade e treino em academias de bairro. Some-se a isso uma cena fitness madura, com unidades de redes como Bodytech (no Iguatemi Alphaville), Smart Fit, Allp Fit e CrossFit, e o resultado é uma das demandas mais sofisticadas da região oeste.',

  bairrosNobres: ['Alphaville', 'Tamboré', 'Colinas da Anhanguera', 'Suru'],
  bairrosPopulares: ['Fazendinha', 'Cidade São Pedro', 'Jardim Isaura', 'Jardim Itapuã'],

  parques: [
    {
      nome: 'Parque Municipal do Refúgio dos Bandeirantes',
      descricao:
        'Inaugurado em 2023, tem cerca de 29 mil m² com lago natural, pista de caminhada, quadras de areia e sintéticas, playground e concha acústica — uma das estruturas públicas mais completas para atividade física na cidade.',
    },
    {
      nome: 'Parque dos Bandeirantes',
      descricao:
        'Parque urbano às margens do Rio Tietê, entre o Monumento aos Bandeirantes e a ponte sobre o rio. É ponto de partida de várias corridas de rua da cidade e bom espaço para caminhada e treino ao ar livre.',
    },
    {
      nome: 'Parque Ecológico do Tietê (núcleo Barueri)',
      descricao:
        'Na divisa com Barueri, junto à represa do Tietê, oferece pista asfaltada para corrida, caminhada e ciclismo ao redor de um grande lago — muito usado por moradores de Alphaville e Tamboré.',
    },
  ],
  ciclovias:
    'A cidade conta com cerca de 14,7 km de ciclovias e ciclofaixas a partir da Avenida Duque de Caxias, passando pela Praça do Ciclista e pela Praça da Paz, atendendo bairros como Alphaville e Colinas da Anhanguera. Desde 2014, o município entregou cerca de dez novos parques, ampliando os espaços para prática esportiva.',

  clima:
    'O clima é subtropical de altitude, com a cidade a cerca de 719 m acima do nível do mar e chuvas concentradas no verão. Manchas remanescentes de Mata Atlântica ajudam a amenizar a temperatura.',
  climaTreino:
    'As manhãs amenas, especialmente fora do verão, são ótimas janelas para treino ao ar livre. No verão chuvoso, vale priorizar o início do dia ou ter um plano B em academia ou na estrutura do condomínio.',

  mobilidade:
    'Santana de Parnaíba não tem estação de trem própria: o acesso é predominantemente por carro e ônibus, pelas rodovias Castello Branco (saída 26) e Anhanguera (saída 29), seguindo pela Estrada dos Romeiros. A estação de CPTM mais próxima é a de Barueri (Linha 8-Diamante). Essa dependência do automóvel, somada ao trânsito de pico, valoriza o personal que atende em domicílio ou no condomínio.',

  corridas: [
    {
      nome: 'Circuito Cidades Paulistas e Circuito Atalanta',
      descricao:
        'A cidade recebe etapas de circuitos tradicionais de corrida de rua, com provas de 5 km e 9 km e largada no Monumento aos Bandeirantes — em geral gratuitas, com apoio de leis de incentivo ao esporte.',
    },
    {
      nome: 'Cioeste Run',
      descricao:
        'Prova regional com percursos de 4 km (caminhada) e 8 km (corrida), que reforça o calendário esportivo de Santana de Parnaíba e da região oeste.',
    },
  ],
  culturaEsportiva:
    'Com IDHM muito alto (0,814) e uma rede de cerca de dez parques municipais, Santana de Parnaíba tem uma cultura esportiva acessível e em crescimento. As corridas de rua gratuitas atraem público de toda a região, e o Centro Histórico vira cenário para caminhadas e turismo ativo nos fins de semana.',
  academias:
    'A oferta de academias é robusta, concentrada principalmente na região de Alphaville: Bodytech no Iguatemi Alphaville, Smart Fit, Allp Fit e unidades de CrossFit, além de muitos estúdios integrados a plataformas como o Wellhub. Nos bairros residenciais, predominam academias de bairro com bom custo-benefício.',
  academiasProximas: [
    { nome: 'Bodytech Iguatemi Alphaville', detalhe: 'academia premium no shopping da região' },
    { nome: 'Smart Fit', detalhe: 'rede de baixo custo com unidades na região de Alphaville' },
    { nome: 'Allp Fit', detalhe: 'rede em expansão com presença na cidade' },
    { nome: 'The One Aldeia da Serra', detalhe: 'academia na parte parnaibana da Aldeia da Serra' },
    { nome: 'Boxes de CrossFit e estúdios', detalhe: 'muitos integrados a plataformas como o Wellhub' },
  ],

  destaquesFitness: [
    'IDHM muito alto (0,814) e uma das maiores rendas médias da Grande São Paulo.',
    'Forte demanda por atendimento em condomínio nos complexos de Alphaville e Tamboré.',
    'Cerca de dez parques municipais entregues desde 2014, com pistas de caminhada.',
    'Calendário ativo de corridas de rua gratuitas com largada no Monumento aos Bandeirantes.',
  ],

  precos: {
    avulsaMin: 90,
    avulsaMax: 220,
    mensalMin: 450,
    mensalMax: 1300,
    onlineMin: 190,
    onlineMax: 500,
  },

  conclusao:
    'Treinar com um personal trainer em Santana de Parnaíba pode significar coisas bem diferentes conforme o bairro: do atendimento exclusivo dentro de um condomínio de Alphaville ao treino acessível em uma academia de bairro. Em todos os casos, o que faz diferença é escolher um profissional alinhado ao seu objetivo e à sua rotina — e, com a boa rede de parques e academias da cidade, faltam poucos motivos para não começar.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal atende em Santana de Parnaíba?',
      resposta:
        'Depende do bairro. Na parte parnaibana de Alphaville e Tamboré, o atendimento acontece principalmente dentro dos condomínios — em casa ou na academia do residencial. Em bairros como Colinas da Anhanguera, Fazendinha e Cidade São Pedro, o treino costuma acontecer em academias locais ou nos parques municipais. A cidade está na área de atendimento presencial do Montinho Personal, destacado pelo portal, com base na região de Alphaville.',
    },
    {
      pergunta: 'Como funciona o deslocamento do personal até os condomínios da cidade?',
      resposta:
        'Os acessos principais são a Castello Branco (saída 26) e a Estrada dos Romeiros, e os núcleos de Alphaville, Tamboré e Colinas da Anhanguera ficam a poucos minutos entre si em condições normais de trânsito. Por isso, o atendimento em domicílio e em condomínio é viável na maior parte da cidade, com agenda combinada para evitar os horários de pico.',
    },
    {
      pergunta: 'Quais objetivos são mais comuns entre quem contrata personal na cidade?',
      resposta:
        'Nos condomínios de alto padrão, predominam emagrecimento, recomposição corporal e condicionamento para rotinas de trabalho intensas. Nos bairros residenciais, a procura maior é por saúde geral, ganho de força e acompanhamento para começar com segurança. Em ambos os perfis, dores e postura aparecem com frequência como motivação — área em que o Montinho Personal, destacado pelo portal, tem formação complementar específica, sempre sem substituir avaliação médica quando há quadro clínico.',
    },
  ],

  vizinhas: ['alphaville-sp', 'tambore-sp', 'barueri-sp', 'osasco-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Santana de Parnaíba', url: 'https://cidades.ibge.gov.br/brasil/sp/santana-de-parnaiba/panorama' },
    { nome: 'Prefeitura de Santana de Parnaíba', url: 'https://www.santanadeparnaiba.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  capaArte: {
    src: '/capas-cidade/santana-de-parnaiba-sp.webp',
    w: 1200,
    h: 900,
    alt:
      'Montinho Personal, personal trainer em Santana de Parnaíba (SP), de braços cruzados com a entrada do complexo Alphaville e a região arborizada ao fundo — Personal por Perto',
    legenda:
      'Treino personalizado em Santana de Parnaíba com o Montinho Personal: acompanhamento próximo, exclusivo e feito para o seu objetivo.',
  },
  atualizadoEm: '2026-07-27',
};
