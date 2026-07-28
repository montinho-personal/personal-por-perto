import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itaqui-rs',
  nome: 'Itaqui',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'itaquiense',
  tipo: 'cidade',

  populacao: 35768,
  populacaoAno: 2022,

  resumoEconomico:
    'Na fronteira oeste, à beira do rio Uruguai e de frente para a Argentina, Itaqui é um dos grandes polos do arroz irrigado gaúcho — as lavouras e os silos dominam a paisagem da campanha. O porto histórico e a orla do rio Uruguai marcam a cidade, que vive da agroindústria do arroz, da pecuária e do comércio de fronteira.',

  mercado:
    'O mercado de personal trainer em Itaqui segue o ritmo do arroz: safra e entressafra mudam a agenda de boa parte dos alunos, e o personal que entende esse calendário mantém a constância do aluno o ano todo. As academias do Centro, a orla do rio Uruguai para caminhada e corrida ao pôr do sol e o clima de extremos da fronteira completam o cenário.',

  bairrosNobres: ['Centro', 'Vila Nova', 'Ponte Seca', 'Chácara'],
  bairrosPopulares: ['Cafifas', 'Enfermaria', 'Várzea', 'Promorar'],

  parques: [
    {
      nome: 'Orla do rio Uruguai',
      descricao:
        'O cartão-postal itaquiense: a beira-rio de frente para a Argentina rende caminhada e corrida com um dos pores do sol mais bonitos da fronteira.',
    },
    {
      nome: 'Praças do Centro',
      descricao:
        'As praças centrais concentram a caminhada do fim de tarde e a estrutura pública de exercício.',
    },
    {
      nome: 'Estradas da campanha arrozeira',
      descricao:
        'As lavouras e estradas planas do entorno rendem percursos longos de pedal e corrida nos horários frescos.',
    },
  ],

  clima:
    'Clima subtropical de extremos da fronteira oeste: verões muito quentes, entre os mais rigorosos do estado, e invernos frios com geadas.',
  climaTreino:
    'No verão da fronteira, o meio do dia é para ser respeitado: treino nas pontas do dia, com a brisa do rio ajudando na orla. No inverno, o meio da tarde vira a janela e o aquecimento é obrigatório.',

  mobilidade:
    'A BR-472 liga Itaqui a Uruguaiana e São Borja pelo eixo do rio Uruguai. O deslocamento urbano é simples; a ponte internacional mais próxima cruza para a Argentina em Uruguaiana e São Borja.',

  corridas: [
    {
      nome: 'Provas de rua do calendário da fronteira',
      descricao:
        'O calendário da fronteira oeste mantém rústicas e provas locais ao longo do ano, com a orla do rio Uruguai como palco preferido.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva itaquiense mistura a lida campeira da fronteira — cavalgadas, CTGs — com a caminhada na orla do rio Uruguai e o futebol de bairro. O ritmo da safra do arroz marca o ano da cidade, inclusive na rotina de treino.',
  academias:
    'A oferta se concentra em academias de musculação e funcional no Centro, com bom custo-benefício e ambiente de cidade onde todos se conhecem.',
  academiasProximas: [
    { nome: 'Academias do Centro', detalhe: 'musculação e funcional com bom custo-benefício' },
    { nome: 'Orla do rio Uruguai', detalhe: 'caminhada e corrida com o pôr do sol da fronteira' },
    { nome: 'Praças centrais', detalhe: 'estrutura pública para a caminhada diária' },
  ],

  destaquesFitness: [
    'Orla do rio Uruguai de frente para a Argentina como pista natural.',
    'Polo do arroz irrigado: safra e entressafra moldam a agenda de treino.',
    'Verões entre os mais quentes do RS: treino nas pontas do dia.',
    'Cultura campeira de disciplina que conversa com a rotina de treino.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 120,
    onlineMax: 340,
  },

  conclusao:
    'Itaqui tem a receita da fronteira: orla de rio para o treino com pôr do sol, academias acessíveis no Centro e um calendário — o do arroz — que o personal precisa entender para manter o aluno constante. Com plano ajustado à safra e ao clima de extremos, treinar bem aqui é questão de método.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Itaqui?',
      resposta:
        'Nas academias do Centro, na orla do rio Uruguai — o cartão-postal da cidade, com caminhada e corrida ao pôr do sol de frente para a Argentina —, nas praças centrais e em casa. Para quem vive o calendário das lavouras de arroz e passa temporadas na campanha, o acompanhamento online mantém o treino rodando onde a safra estiver.',
    },
    {
      pergunta: 'Como conciliar o treino com a safra do arroz?',
      resposta:
        'Com plano por fases, o mesmo princípio do agro gaúcho: na entressafra, treinos mais longos e progressão de carga; no plantio e na colheita, sessões curtas e eficientes de 40 a 60 minutos que preservam o condicionamento construído. O verão quente da fronteira reforça as janelas do amanhecer e do entardecer. É o tipo de ajuste que uma planilha genérica não faz — e um acompanhamento profissional faz por padrão.',
    },
    {
      pergunta: 'Há acompanhamento em Itaqui para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Itaqui, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou a orla do rio), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['uruguaiana-rs', 'sao-borja-rs', 'alegrete-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Itaqui', url: 'https://cidades.ibge.gov.br/brasil/rs/itaqui/panorama' },
    { nome: 'Prefeitura de Itaqui', url: 'https://www.itaqui.rs.gov.br/' },
  ],
  atualizadoEm: '2026-07-28',
};
