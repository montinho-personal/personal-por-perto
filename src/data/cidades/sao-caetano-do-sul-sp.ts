import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-caetano-do-sul-sp',
  nome: 'São Caetano do Sul',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'são-caetanense',
  tipo: 'cidade',

  populacao: 165655,
  populacaoAno: 2022,
  idhm: 0.862,
  idhmClasse: 'muito alto',
  altitudeM: 740,

  resumoEconomico:
    'Município do ABC paulista, na Região Metropolitana de São Paulo, São Caetano do Sul tem o maior IDHM e a maior renda per capita do Brasil. A economia é forte em serviços, comércio e indústria (tradição metalúrgica e automotiva), hoje com perfil corporativo crescente, em uma das maiores densidades demográficas do país.',

  mercado:
    'São Caetano do Sul concentra o mercado de personal trainer mais qualificado do ABC: maior IDHM e renda per capita do Brasil, população densamente urbana e verticalizada, e um perfil premium comprimido em pouco mais de 15 km². Isso se traduz em demanda forte por atendimento a domicílio e em academias de condomínio nos bairros Cerâmica, Santa Paula e Barcelona, por estúdios boutique e por acompanhamento de longo prazo — o público local valoriza continuidade e resultado mais do que preço. A infraestrutura pública joga a favor: o Espaço Verde Chico Mendes tem pista de cooper coberta, raridade que permite sessão ao ar livre mesmo com chuva. Para o personal, a densidade significa deslocamentos mínimos entre alunos; para o aluno, significa achar academia, estúdio ou parque a poucos minutos de casa em qualquer ponto da cidade.',

  bairrosNobres: ['Cerâmica', 'Santa Paula', 'Barcelona', 'Centro'],
  bairrosPopulares: ['Fundação', 'Boa Vista', 'Mauá', 'Prosperidade'],

  parques: [
    {
      nome: 'Espaço Verde Chico Mendes',
      descricao:
        'Cerca de 140 mil m² com pistas de cooper coberta e descoberta, sete quadras poliesportivas e playground — permite treino independente de chuva.',
    },
    {
      nome: 'Bosque do Povo',
      descricao:
        'Cerca de 27 mil m² com pista de cooper de 650 m, quadras poliesportivas, academia ao ar livre e barras de alongamento.',
    },
    {
      nome: 'Praças e pistas de cooper urbanas',
      descricao:
        'A cidade compacta tem praças e vias arborizadas usadas para caminhada e corrida, com o programa público de esporte atendendo milhares de pessoas.',
    },
  ],
  ciclovias:
    'Há trechos de ciclovia integrados à malha do ABC; a extensão específica de São Caetano ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido, temperado pela altitude, sem extremos severos.',
  climaTreino:
    'O treino ao ar livre é viável o ano todo, com atenção ao calor e à umidade no verão e às chuvas de fim de tarde.',

  mobilidade:
    'São Caetano é servida pela Rodovia Anchieta e por uma malha urbana densa e bem conectada a São Paulo e às demais cidades do ABC.',

  corridas: [
    {
      nome: 'Prova de Reis de São Caetano do Sul',
      descricao:
        'Tradicional prova de 10 km do ABC, já em dezenas de edições, com largada na Av. Presidente Kennedy.',
    },
    {
      nome: 'Evoque Run São Caetano',
      descricao:
        'Provas de 5 km e 10 km, com largada na Av. Presidente Kennedy.',
    },
  ],
  culturaEsportiva:
    'A cidade tem tradição esportiva forte (referência no basquete e no futsal do ABC) e calendário consolidado de corridas de rua, com alta adesão à atividade física pela renda e pela infraestrutura.',
  academias:
    'A oferta é premium — academias de alto padrão e estúdios boutique —, complementada por unidades de rede bem distribuídas e por parques com pistas de cooper cobertas que permitem treinar em qualquer clima.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades Santa Paula, Fundação e Assaí SCS (Av. Goiás)' },
    { nome: 'Bluefit São Caetano', detalhe: 'na Rua Alegre, bairro Barcelona' },
    { nome: 'Skyfit', detalhe: 'unidade no Centro, na Av. Conde Francisco Matarazzo' },
    { nome: 'Pistas cobertas do Espaço Verde Chico Mendes', detalhe: 'cooper gratuito mesmo em dia de chuva' },
  ],

  destaquesFitness: [
    'Maior IDHM e renda per capita do Brasil — público premium para personal.',
    'Densidade urbana extrema, que favorece o atendimento a domicílio e em condomínio.',
    'Pistas de cooper cobertas (Chico Mendes) para treino independente de chuva.',
    'Prova de Reis como evento-âncora para captação e periodização de corredores.',
  ],

  precos: {
    avulsaMin: 90,
    avulsaMax: 220,
    mensalMin: 450,
    mensalMax: 1300,
    onlineMin: 200,
    onlineMax: 520,
  },

  conclusao:
    'Maior IDHM do Brasil e coração do ABC, São Caetano do Sul tem público premium e ótima infraestrutura esportiva. Um personal trainer ajuda a aproveitar o Espaço Verde Chico Mendes e o Bosque do Povo com método, com forte espaço para atendimento personalizado e online.',

  faqsExtra: [
    {
      pergunta: 'O personal atende em casa e em condomínio em São Caetano do Sul?',
      resposta:
        'Sim — e a cidade é uma das mais práticas do país para esse formato. Como São Caetano é compacta e verticalizada, o deslocamento do profissional entre alunos leva minutos, o que barateia e viabiliza o atendimento a domicílio e nas academias de condomínio, muito procurado nos bairros Cerâmica, Santa Paula e Barcelona. Para quem prefere sair de casa, estúdios boutique e academias de rede ficam a curta distância em qualquer ponto da cidade.',
    },
    {
      pergunta: 'Dá para manter o treino em dia de chuva em São Caetano?',
      resposta:
        'Dá, e essa é uma vantagem rara da cidade: o Espaço Verde Chico Mendes tem pista de cooper coberta, o que permite sessão de corrida, caminhada ou treino funcional mesmo com chuva — sem custo. Somando as academias bem distribuídas e a facilidade do atendimento em casa, praticamente não existe cenário climático que justifique pausar a rotina: o personal apenas troca o local da sessão e mantém o plano.',
    },
    {
      pergunta: 'Há acompanhamento em São Caetano do Sul para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem formação complementar no treinamento de pessoas com dores e limitações musculoesqueléticas — e conhece essas barreiras pela própria vivência de mais de 20 anos de musculação. Para o ABC, o formato mais prático é o acompanhamento online, com treino adaptado e ajustes contínuos; o atendimento presencial pode ser avaliado conforme agenda e local, a partir da base na região de Alphaville. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['santo-andre-sp', 'sao-paulo-sp'],

  capaArte: {
    src: '/capas-cidade/sao-caetano-do-sul-sp.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em São Caetano do Sul (SP) em arte com a igreja matriz, o casarão histórico e o Parque Chico Mendes, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em São Caetano do Sul: treino perto de você, com acompanhamento profissional no ABC paulista.',
  },
  fontes: [
    { nome: 'IBGE Cidades — São Caetano do Sul', url: 'https://cidades.ibge.gov.br/brasil/sp/sao-caetano-do-sul/panorama' },
    { nome: 'Prefeitura de São Caetano do Sul', url: 'https://www.saocaetanodosul.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-02',
};
