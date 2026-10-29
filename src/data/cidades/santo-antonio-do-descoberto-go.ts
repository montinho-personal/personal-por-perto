import type { Cidade } from '../../lib/types';

/*
 * Criada em 29/10/2026 a pedido do Renato ("criar próximos 2 artigos de
 * cidades"). Mesmo critério de Goianira e Biguaçu: município acima de 60 mil
 * habitantes (Censo 2022) ainda sem página, vizinho de capital que rende no
 * GSC — Brasília. Nenhuma consulta com o nome da cidade no GSC: é aposta de
 * vizinhança, dita aqui.
 *
 * Fontes conferidas em 29/10/2026: IBGE/SIDRA (população 2022 e 2010, área);
 * Prefeitura (gentílico, fundação no ciclo do ouro, distrito de Luziânia em
 * 1963, emancipação em 14/05/1982, BR-060, 61 km do aeroporto de Brasília,
 * Lago Corumbá IV, Corrida do Trabalhador 2026); INMET, normais 1991–2020 da
 * estação Brasília; academias por Wellhub + TotalPass, com o mesmo endereço.
 * Fora: IDHM (Atlas Brasil bloqueado aqui e a Prefeitura não publica),
 * parques com estrutura de treino (a ciclovia da GO-225 aparece em 2020 só
 * como projeto), bairros nobres/populares (sem fonte para classificar),
 * Smart Fit (sem unidade no município). Preço: mesma faixa de Águas Lindas
 * de Goiás, do Entorno, de porte parecido.
 */
export const cidade: Cidade = {
  slug: 'santo-antonio-do-descoberto-go',
  nome: 'Santo Antônio do Descoberto',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'descobertense',
  tipo: 'cidade',

  populacao: 72127,
  populacaoAno: 2022,

  resumoEconomico:
    'Santo Antônio do Descoberto nasceu por volta de 1722, no ciclo do ouro, às margens do Rio Descoberto. Foi distrito de Luziânia a partir de 1963 e se emancipou em 14 de maio de 1982. Fica no Entorno do Distrito Federal, a 61 km do Aeroporto de Brasília, segundo a Prefeitura, e é cortada pela BR-060, que liga Brasília a Anápolis e Goiânia. Pelo IBGE, a população passou de 63 mil moradores em 2010 para 72 mil em 2022.',

  mercado:
    'Cidade do Entorno, com a BR-060 no caminho para Brasília: para quem trabalha no DF, o horário de treino precisa caber antes da saída ou depois da volta. A oferta presencial é de academias de bairro, concentradas no Centro; não há unidade da Smart Fit no município. O atendimento a domicílio e o online resolvem para quem não quer somar mais um deslocamento ao dia.',

  bairrosNobres: [],
  bairrosPopulares: [],

  parques: [
    {
      nome: 'Praça Princesa Isabel (Praça da Igrejinha)',
      descricao:
        'Praça central da cidade, usada pela Prefeitura como largada da Corrida do Trabalhador. Bom ponto de encontro para caminhada; a estrutura para treino vale conferir no local.',
    },
  ],

  clima:
    'Verão chuvoso e inverno seco. Pelas normais do INMET (1991–2020) da estação de Brasília, a média anual é de 21,4 °C; outubro é o mês mais quente (23,1 °C), e junho e julho os menos quentes (19,3 °C). Chove cerca de 1.480 mm por ano, quase tudo de outubro a abril: novembro passa de 250 mm, e julho tem 1,5 mm.',
  climaTreino:
    'O inverno seco é a melhor época para treinar na rua, com mínimas perto de 14 °C em julho e quase nenhuma chuva de junho a agosto — leve água, porque é a época mais seca do ano. De outubro a abril, as chuvas de fim de tarde pedem um plano B coberto, em casa ou na academia.',

  mobilidade:
    'A BR-060 atravessa o município e liga a cidade a Brasília, Anápolis e Goiânia. Pela Prefeitura, o Aeroporto Internacional de Brasília fica a 61 km. Dentro da cidade, as academias de bairro ficam a poucos minutos do Centro.',

  corridas: [
    {
      nome: 'Corrida do Trabalhador',
      descricao:
        'Prova da Prefeitura, pela Secretaria de Esporte e Lazer, com cerca de 5 km e largada na Praça Princesa Isabel (Praça da Igrejinha). A 2ª edição foi em 1º de maio de 2026, com inscrição gratuita, 900 vagas e idade mínima de 18 anos.',
    },
  ],
  culturaEsportiva:
    'O calendário oficial tem a Corrida do Trabalhador, de cerca de 5 km, no 1º de maio. Para provas maiores, o calendário mais próximo é o de Brasília.',
  academias:
    'A oferta é de academias de bairro, a maior parte no Centro. Pelo Wellhub e pelo TotalPass, com o mesmo endereço, estão a Active Body, na Avenida Pernambuco; a Power Up Fitness, na Quadra 75; e a Biodinâmica SAD, na Rua 13. A Athenas Gym aparece nos dois apps no Centro. A Smart Fit não tem unidade no município.',

  academiasProximas: [
    { nome: 'Active Body', detalhe: 'na Avenida Pernambuco, no Centro' },
    { nome: 'Power Up Fitness', detalhe: 'na Quadra 75, no Centro' },
    { nome: 'Academia Biodinâmica SAD', detalhe: 'na Rua 13, Quadra 63, no Centro' },
    { nome: 'Athenas Gym', detalhe: 'no Centro' },
  ],
  academiasVerificadasEm: '2026-10-29',

  destaquesFitness: [
    'No Entorno do DF, cortada pela BR-060 e a 61 km do Aeroporto de Brasília.',
    'Corrida do Trabalhador de 5 km no 1º de maio, organizada pela Prefeitura.',
    'Inverno seco, com julho quase sem chuva: a melhor época para treinar na rua.',
    'Academias de bairro pelos apps de benefício; Smart Fit só no DF.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Santo Antônio do Descoberto é cidade de ouro antigo e rotina nova: nasceu no século XVIII e hoje divide a semana com Brasília pela BR-060. Escolher personal aqui começa pela agenda — o trajeto até o DF decide o horário que sobra — e passa pelo formato: academia do Centro, casa ou online.',

  faqsExtra: [
    {
      pergunta: 'Tem Smart Fit em Santo Antônio do Descoberto?',
      resposta:
        'Não. Pelo localizador oficial da rede, não há unidade no município; as mais próximas na lista da rede ficam no Distrito Federal, no Recanto das Emas e em Samambaia. Na cidade, a oferta é de academias de bairro — pelo Wellhub e pelo TotalPass, a Active Body, a Power Up Fitness, a Biodinâmica SAD e a Athenas Gym, todas no Centro.',
    },
    {
      pergunta: 'Vale contratar um personal de Brasília morando em Santo Antônio do Descoberto?',
      resposta:
        'Pode valer, desde que o deslocamento esteja combinado. A ligação é pela BR-060, e o tempo de trajeto muda muito no horário de pico. Pergunte de onde o profissional sai, em que horário e se a distância já está no preço — deslocamento que não foi combinado costuma virar atraso e remarcação.',
    },
    {
      pergunta: 'Há acompanhamento em Santo Antônio do Descoberto para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Santo Antônio do Descoberto, o formato é o acompanhamento online: treino adaptado à estrutura que você tem — academia do bairro, casa ou condomínio —, vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura: quadro clínico pede também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['brasilia-df', 'aguas-lindas-de-goias-go', 'luziania-go'],

  fontes: [
    { nome: 'IBGE/SIDRA — Censo 2022, população de Santo Antônio do Descoberto', url: 'https://apisidra.ibge.gov.br/values/t/4709/n6/5219753/v/93/p/2022' },
    { nome: 'Prefeitura de Santo Antônio do Descoberto — História', url: 'https://santoantoniododescoberto.go.gov.br/historia/' },
    { nome: 'Prefeitura de Santo Antônio do Descoberto — Corrida do Trabalhador 2026', url: 'https://santoantoniododescoberto.go.gov.br/inscricao-da-corrida-do-trabalhador-2026/' },
    { nome: 'INMET — Normais Climatológicas 1991–2020', url: 'https://portal.inmet.gov.br/normais' },
  ],
  atualizadoEm: '2026-10-29',
};
