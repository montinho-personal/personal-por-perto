import type { Cidade } from '../../lib/types';

/*
 * Criada em 29/10/2026 a pedido do Renato ("criar próximos 2 artigos de
 * cidades"). Entre os municípios acima de 60 mil habitantes (Censo 2022)
 * ainda sem página, Iranduba/AM foi descartada: Prefeitura e Governo do AM
 * não abrem no ambiente e o TotalPass não tem academia no município. Cruzeiro
 * é a seguinte com fonte oficial acessível, e fecha o trecho paulista do
 * Vale do Paraíba entre Lorena e Guaratinguetá, que já têm página. Nenhuma
 * consulta com o nome da cidade no GSC de 90 dias: é aposta, dita aqui.
 *
 * Fontes conferidas em 29/10/2026: IBGE/SIDRA (população 2022 e 2010, área);
 * Prefeitura (história do Embaú, município em 1871, ferrovia, IDHM 0,788,
 * altitude e cumes da serra, SP-052 até a divisa com Passa
 * Quatro, Parque Linear da Av. Vereador João Silvano de Mesquita, Corrida dos
 * Revolucionários 2026 e Corrida da Serra 2022); INMET, normais 1991–2020 da
 * estação Resende (RJ), no mesmo vale; academias por Wellhub + TotalPass,
 * com o mesmo endereço; Smart Fit pelo localizador oficial (sem unidade no
 * município). Fora: gentílico (sem fonte aberta), bairros nobres/populares
 * (sem fonte para classificar), população de 81.406 que a Prefeitura ainda
 * publica (o Censo 2022 dá 74.961). Preço: mesma faixa de Lorena, vizinha de
 * porte parecido.
 */
export const cidade: Cidade = {
  slug: 'cruzeiro-sp',
  nome: 'Cruzeiro',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  tipo: 'cidade',

  populacao: 74961,
  populacaoAno: 2022,
  idhm: 0.788,
  idhmClasse: 'alto',

  resumoEconomico:
    'Cruzeiro nasceu no século XVIII no Embaú, onde as rotas dos mineiros que desciam para os portos de Paraty e Mambucaba criaram roças de abastecimento para os tropeiros. A capela de Nossa Senhora da Conceição do Embaú começou a ser erguida em 1781, e o município foi criado em 1871 como Conceição do Cruzeiro, nome que lembra a cruz de divisa no alto da serra, entre São Paulo e Minas Gerais. A ferrovia Dom Pedro II instalou uma estação a 8 km dali, e ao redor dela se formou o núcleo que virou a cidade de hoje. São 74.961 moradores, pelo Censo 2022.',

  mercado:
    'Cidade média do Vale do Paraíba, com serra logo acima e a oferta de academias concentrada no Centro. Não há Smart Fit no município: as unidades mais próximas da rede ficam em Lorena e em Guaratinguetá. Para quem treina em casa, ou quer preparar o corpo para as subidas da serra, o atendimento a domicílio e o online completam o presencial.',

  bairrosNobres: [],
  bairrosPopulares: [],

  parques: [
    {
      nome: 'Parque Linear da Avenida Vereador João Silvano de Mesquita',
      descricao:
        'Primeiro trecho do Projeto Vias (Via de Atividade Saudável) da Prefeitura: espaço arborizado para caminhada, corrida e lazer, que a Prefeitura dava como praticamente pronto em outubro de 2022, com ciclovia implantada a partir de dezembro daquele ano.',
    },
  ],
  ciclovias:
    'A ciclovia do Parque Linear da Avenida Vereador João Silvano de Mesquita começou a ser implantada pela Prefeitura em dezembro de 2022, dentro do Projeto Vias.',

  clima:
    'Verão quente e chuvoso, inverno seco e fresco. Pelas normais do INMET (1991–2020) da estação de Resende (RJ), no mesmo vale, as máximas passam de 30 °C em janeiro e fevereiro, e a mínima média de julho fica em 12,7 °C. Chove cerca de 1.620 mm por ano: janeiro passa de 300 mm, e agosto tem 24 mm.',
  climaTreino:
    'O inverno seco, de junho a agosto, é a melhor época para correr e pedalar, com manhãs frescas — aqueça bem antes de acelerar. No verão, o calor da tarde e as chuvas pedem treino cedo ou um plano B coberto.',

  mobilidade:
    'O acesso é pela Via Dutra, eixo São Paulo–Rio. A SP-052 sai da Dutra e sobe a serra por cerca de 26 km até o Belvedere da Santa, na divisa com Passa Quatro (MG), segundo a Prefeitura.',

  corridas: [
    {
      nome: 'Corrida dos Revolucionários',
      descricao:
        'Corrida tradicional que fecha a programação municipal da Revolução Constitucionalista de 1932. Em 2026 foi em 26 de julho, com largada às 7h30 na Praça 9 de Julho.',
    },
    {
      nome: 'Corrida da Serra',
      descricao:
        'Prova com caminhada de 3 km e corridas de 5 e 10 km pelos pontos turísticos da cidade. A edição de março de 2022, com largada na Escola Superior de Cruzeiro, reuniu mais de 900 corredores, segundo a Prefeitura. Confira se há edição nova antes de planejar.',
    },
  ],
  culturaEsportiva:
    'O calendário tem a Corrida dos Revolucionários, em julho, dentro da programação da Revolução de 1932, e a Corrida da Serra, de 5 e 10 km. O relevo ajuda quem gosta de subida: pela Prefeitura, a altitude média é de 515 m, com cumes que passam de 2.000 m.',
  academias:
    'Pelo Wellhub e pelo TotalPass, com o mesmo endereço, estão a Frog Fitness, na Avenida Major Novaes; a Supernova Saúde e Fitness, na Avenida Jorge Tibiriçá; a Academia Corpus, na Rua Santa Cruz, todas no Centro; e a Academia Jump, na Avenida Nesralla Rubez. A Smart Fit não tem unidade no município; as mais próximas ficam em Lorena e Guaratinguetá.',

  academiasProximas: [
    { nome: 'Academia Frog Fitness', detalhe: 'na Avenida Major Novaes, no Centro' },
    { nome: 'Supernova Saúde e Fitness', detalhe: 'na Avenida Jorge Tibiriçá, no Centro' },
    { nome: 'Academia Corpus', detalhe: 'na Rua Santa Cruz, no Centro' },
    { nome: 'Academia Jump', detalhe: 'na Avenida Nesralla Rubez' },
  ],
  academiasVerificadasEm: '2026-10-29',

  destaquesFitness: [
    'IDHM de 0,788, segundo a Prefeitura: faixa alta do índice.',
    'Serra logo acima: a SP-052 sobe até a divisa com Minas Gerais.',
    'Corrida dos Revolucionários em julho e Corrida da Serra de 5 e 10 km.',
    'Parque Linear com espaço de caminhada, corrida e ciclovia.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Cruzeiro tem história de tropeiro e de ferrovia, e um relevo que convida a treinar: o Parque Linear no plano e a serra logo acima. Escolher personal aqui começa pelo objetivo — saúde, força ou a prova de julho — e passa pelo formato: academia do Centro, casa ou online.',

  faqsExtra: [
    {
      pergunta: 'Tem Smart Fit em Cruzeiro?',
      resposta:
        'Não. Pelo localizador oficial da rede, não há unidade no município; as mais próximas ficam em Lorena, na Avenida Doutor Peixoto de Castro, e no Buriti Shopping, em Guaratinguetá. Em Cruzeiro, a oferta é de academias locais — pelo Wellhub e pelo TotalPass, a Frog Fitness, a Supernova, a Corpus e a Jump.',
    },
    {
      pergunta: 'Onde correr em Cruzeiro?',
      resposta:
        'No plano, o Parque Linear da Avenida Vereador João Silvano de Mesquita foi feito pela Prefeitura para caminhada e corrida. Para treino de subida, a SP-052 sobe a serra até a divisa com Minas, mas é rodovia: só com acostamento, de dia e com roupa visível. Em julho, a Corrida dos Revolucionários larga da Praça 9 de Julho.',
    },
    {
      pergunta: 'Há acompanhamento em Cruzeiro para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Cruzeiro, o formato é o acompanhamento online: treino adaptado à estrutura que você tem — academia do bairro, casa ou condomínio —, vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura: quadro clínico pede também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['lorena-sp', 'guaratingueta-sp', 'resende-rj'],

  fontes: [
    { nome: 'IBGE/SIDRA — Censo 2022, população de Cruzeiro', url: 'https://apisidra.ibge.gov.br/values/t/4709/n6/3513405/v/93/p/2022' },
    { nome: 'Prefeitura de Cruzeiro — A cidade', url: 'https://www.cruzeiro.sp.gov.br/a-cidade/' },
    { nome: 'Prefeitura de Cruzeiro — Programação da Revolução Constitucionalista 2026', url: 'https://www.cruzeiro.sp.gov.br/prefeitura-de-cruzeiro-divulga-programacao-oficial-do-mes-da-revolucao-constitucionalista-de-1932/' },
    { nome: 'Prefeitura de Cruzeiro — Ciclovia do Parque Linear', url: 'https://www.cruzeiro.sp.gov.br/prefeitura-de-cruzeiro-inicia-obras-da-ciclovia-do-parque-linear-do-centro/' },
    { nome: 'INMET — Normais Climatológicas 1991–2020', url: 'https://portal.inmet.gov.br/normais' },
  ],
  atualizadoEm: '2026-10-29',
};
