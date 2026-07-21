import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'campinas-sp',
  nome: 'Campinas',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'campineiro',

  populacao: 1139047,
  populacaoAno: 2022,
  idhm: 0.805,
  idhmClasse: 'muito alto',
  altitudeM: 685,

  resumoEconomico:
    'Conhecida como o "Vale do Silício brasileiro", Campinas é um polo de tecnologia e pesquisa ancorado na Unicamp, na PUC-Campinas e em centros como o CPQD. À força industrial e ao agronegócio da região soma-se o Aeroporto de Viracopos, um dos principais hubs de cargas do país. O resultado é um público de alta escolaridade e renda, que valoriza acompanhamento profissional e resultados mensuráveis.',

  mercado:
    'O mercado de personal trainer de Campinas é um dos mais qualificados do interior do Brasil: renda e escolaridade altas, um polo de tecnologia e pesquisa (Unicamp, CPQD) que forma um público orientado a metas e dados, e bairros de alto padrão — Cambuí, Taquaral, Nova Campinas e os condomínios do eixo Alphaville Campinas — onde o atendimento em casa e em condomínio é rotina. A Lagoa do Taquaral funciona como o grande clube a céu aberto da cidade, os estúdios de treino personalizado se multiplicam no Cambuí, e a demanda por acompanhamento estruturado, com avaliação e progressão mensurável, é marca registrada do perfil campineiro.',

  bairrosNobres: ['Cambuí', 'Taquaral', 'Nova Campinas', 'Gramado', 'Alphaville Campinas'],
  bairrosPopulares: ['Ouro Verde', 'Campo Grande', 'DIC', 'Jardim São Marcos'],

  parques: [
    {
      nome: 'Lagoa do Taquaral (Parque Portugal)',
      descricao:
        'O grande hub esportivo da cidade. Tem pista de cooper de cerca de 2.800 m, ciclovia interna de aproximadamente 5 km e uma volta completa do lago de cerca de 6 km, muito usada por corredores e ciclistas. É o ponto de encontro de quem treina ao ar livre em Campinas.',
    },
    {
      nome: 'Bosque dos Jequitibás',
      descricao:
        'Área verde tradicional no centro, ideal para caminhadas, alongamento e treinos leves em meio à mata, com fácil acesso para quem mora ou trabalha na região central.',
    },
    {
      nome: 'Lago do Café',
      descricao:
        'Outro espaço popular para caminhada e corrida, que ajuda a distribuir a prática esportiva para além da Lagoa do Taquaral.',
    },
  ],
  ciclovias:
    'A ciclovia interna do Parque Portugal tem cerca de 5 km e concentra boa parte do ciclismo de lazer da cidade; a orla da Lagoa do Taquaral é o circuito mais usado para corrida e pedaladas.',

  clima:
    'Campinas tem clima tropical de altitude, com inverno seco e verão chuvoso. A temperatura média anual gira em torno de 22 °C, com verões quentes e invernos amenos. O período mais chuvoso coincide com o verão.',
  climaTreino:
    'O clima de altitude é convidativo para treino outdoor na maior parte do ano. No verão, a recomendação é priorizar os horários da manhã, antes das pancadas de chuva e do calor mais forte do início da tarde.',

  mobilidade:
    'O deslocamento na cidade é predominantemente por carro e por ônibus, com sistema municipal gerido pela EMDEC e terminais integrados. Não há ainda um trem urbano metropolitano em operação plena, o que faz da localização do profissional — perto de casa, do trabalho ou da academia — um fator decisivo na escolha.',

  corridas: [
    {
      nome: 'Corridas de rua na Lagoa do Taquaral',
      descricao:
        'A cidade tem um calendário ativo de corridas de rua, com boa parte das provas realizadas na orla da Lagoa do Taquaral — a ponto de a EMDEC organizar operações de trânsito específicas nesses dias.',
    },
  ],
  culturaEsportiva:
    'Cidade universitária e de tecnologia, Campinas tem um público acostumado a metas e dados — o que se reflete em uma comunidade de corrida e ciclismo organizada em torno da Lagoa do Taquaral. Treinar com acompanhamento e medir evolução faz parte da cultura local.',
  academias:
    'O mercado de academias e estúdios é relevante, com presença de grandes redes e de estúdios de treino funcional e personalizado, especialmente nos bairros de maior renda como Cambuí e Taquaral.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades no Cambuí, no Campinas Shopping e na Chácara Primavera' },
    { nome: 'Estúdios de funcional e personal', detalhe: 'concentrados no Cambuí e no Taquaral' },
    { nome: 'Academias ao ar livre', detalhe: 'gratuitas, na orla da Lagoa do Taquaral' },
  ],

  destaquesFitness: [
    'Lagoa do Taquaral como grande polo de corrida, ciclismo e caminhada.',
    'Público de alta escolaridade e renda, ligado à Unicamp e ao setor de tecnologia.',
    'Clima de altitude favorável ao treino ao ar livre boa parte do ano.',
    'Bairros como Cambuí e Taquaral com forte oferta de estúdios e treino funcional.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 360,
    mensalMax: 950,
    onlineMin: 180,
    onlineMax: 450,
  },

  conclusao:
    'Polo de tecnologia com renda alta e cultura de metas, Campinas é um dos melhores mercados do país para treinar com acompanhamento. Da volta da Lagoa do Taquaral aos estúdios do Cambuí e aos condomínios de alto padrão, estrutura não falta — um personal trainer transforma esse cenário em progressão medida, semana a semana, no estilo que o campineiro valoriza.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Campinas?',
      resposta:
        'A Lagoa do Taquaral é o epicentro: pista de cooper, ciclovia e a volta de cerca de 6 km concentram o treino ao ar livre da cidade. Nas academias, a Smart Fit cobre do Cambuí aos shoppings, e os estúdios de funcional se adensam no Cambuí e no Taquaral. O atendimento em casa e em condomínio é forte em Nova Campinas, no Gramado e no Alphaville Campinas — condomínios com estrutura própria de treino, no mesmo modelo da região de Alphaville da capital.',
    },
    {
      pergunta: 'O público de tecnologia de Campinas treina diferente?',
      resposta:
        'Treina com a mesma lógica com que trabalha: metas, dados e processo. No "Vale do Silício brasileiro", o aluno típico quer entender o porquê de cada exercício, acompanhar progressão em números e ver o plano ajustado com base em resultados — não em achismo. É um perfil que combina especialmente bem com acompanhamento estruturado (presencial ou online), em que avaliações periódicas, planilha de cargas e métricas de evolução fazem parte do pacote. Motivação por dashboard é real — e funciona.',
    },
    {
      pergunta: 'Há acompanhamento em Campinas para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Campinas, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio ou casa), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['sao-paulo-sp', 'barueri-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Campinas', url: 'https://cidades.ibge.gov.br/brasil/sp/campinas/panorama' },
    { nome: 'Prefeitura de Campinas', url: 'https://www.campinas.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-19',
};
