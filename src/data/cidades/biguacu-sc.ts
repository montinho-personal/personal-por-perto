import type { Cidade } from '../../lib/types';

/*
 * Criada em 26/10/2026 a pedido do Renato ("pode criar próximos dois, mas de
 * cidades agora"). Escolha: entre os municípios acima de 60 mil habitantes
 * (Censo 2022) ainda sem página, os vizinhos de capitais que já rendem no
 * GSC — Florianópolis, 387 impressões em 28 dias. Nenhuma consulta com o nome
 * da cidade no GSC de 90 dias: é aposta de vizinhança, dita aqui.
 *
 * Fontes conferidas em 26/10/2026: IBGE/SIDRA (população 2022, urbana e
 * rural, distritos, área, PIB e valor adicionado por setor); IBGE Biblioteca
 * (gentílico e histórico); malha municipal IBGE 2022 (divisas); ALESC, LC
 * 495/2010 (Núcleo Metropolitano); Prefeitura (Ginásio Nagib Salum, Portaria
 * 3887/2021 — o resto do site deu 403); INMET, normais 1991–2020 da estação
 * Florianópolis; Smart Fit (localizador oficial: nenhuma unidade no
 * município); academias por Wellhub + TotalPass. Fora: IDHM (Atlas Brasil
 * bloqueado; só snippet), distância rodoviária e BR-101 (sem página oficial
 * aberta), parques da Prefeitura (403), corridas (a meia "de Governador
 * Celso Ramos" que calendários põem em Biguaçu larga no município vizinho),
 * Pratique (uma fonte só). Preço: um degrau abaixo de São José e Palhoça.
 */
export const cidade: Cidade = {
  slug: 'biguacu-sc',
  nome: 'Biguaçu',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'biguaçuense',
  tipo: 'cidade',

  populacao: 76773,
  populacaoAno: 2022,

  resumoEconomico:
    'Biguaçu começou no povoado açoriano de São Miguel, fundado em 1747, virou vila em 1833 e teve a sede transferida para onde está hoje em 1894. Faz parte do Núcleo Metropolitano da Região Metropolitana de Florianópolis, pela lei estadual de 2010. A economia é de serviços: em 2021, eles respondiam por quase 60% do valor adicionado do município, contra 19% da indústria, segundo o IBGE.',

  mercado:
    'Com 92% dos moradores na área urbana, a demanda se concentra na sede, onde ficam as academias de bairro. A Smart Fit não tem unidade no município — as mais próximas da rede estão em Florianópolis. O mercado de personal aqui se divide entre a academia do bairro, o atendimento em casa e o profissional que vem da capital ou de São José, o que torna o deslocamento parte da conversa.',

  bairrosNobres: [],
  bairrosPopulares: [],

  parques: [
    {
      nome: 'Ginásio de Esportes Nagib Salum',
      descricao:
        'Ginásio municipal com quadra poliesportiva, de uso gratuito pela comunidade, segundo a portaria da Prefeitura que regula o espaço.',
    },
  ],

  clima:
    'Chuva o ano inteiro e inverno fresco. Pelas normais do INMET (1991–2020) da estação de Florianópolis, a média anual é de 21,1 °C; fevereiro é o mês mais quente (25,3 °C) e julho o mais frio (16,5 °C). Chove 1.766 mm por ano: janeiro é o mês mais chuvoso, com 241 mm, e junho o menos chuvoso, com 86 mm — não há estação seca.',
  climaTreino:
    'Como chove em todos os meses, o treino ao ar livre precisa de plano B coberto o ano todo, e mais ainda no verão, quando a chuva é maior. O inverno, com médias perto de 16 °C em julho, é a época mais confortável para correr — só pede aquecimento mais longo.',

  mobilidade:
    'Biguaçu integra o Núcleo Metropolitano da Região Metropolitana de Florianópolis e faz divisa com São José, Antônio Carlos, Governador Celso Ramos, Tijucas, Canelinha e São João Batista. O município tem três distritos: a sede, com 69,5 mil moradores, Guaporanga e Sorocaba do Sul.',

  corridas: [],
  culturaEsportiva:
    'Não encontramos calendário oficial de corridas de rua no município — a meia maratona que alguns calendários listam em Biguaçu larga em Governador Celso Ramos, a cidade vizinha. A Prefeitura mantém ginásios municipais, como o Nagib Salum, de uso gratuito.',
  academias:
    'A oferta é de academias de bairro. Pelo TotalPass e pelo Wellhub, com a mesma rua, estão a Just Gym, na Rua São José, no Centro; a Cross Wings, na Rua Hermann Vieira, e a Proquality Maniacs, na Rua Hipólito Henrique Pfleger, as duas no Bom Viver; e a Academia Inevitável, na Rua Firmino Veríssimo Bernardino. A Smart Fit não tem unidade no município.',

  academiasProximas: [
    { nome: 'Just Gym', detalhe: 'na Rua São José, no Centro' },
    { nome: 'Cross Wings', detalhe: 'na Rua Hermann Vieira, no Bom Viver' },
    { nome: 'Proquality Maniacs', detalhe: 'na Rua Hipólito Henrique Pfleger, no Bom Viver' },
    { nome: 'Academia Inevitável', detalhe: 'na Rua Firmino Veríssimo Bernardino' },
  ],
  academiasVerificadasEm: '2026-10-26',

  destaquesFitness: [
    'Núcleo Metropolitano da Grande Florianópolis, com divisa com São José.',
    '92% da população na área urbana, onde ficam as academias de bairro.',
    'Ginásio municipal Nagib Salum, de uso gratuito.',
    'Chuva distribuída o ano todo: o plano B coberto faz parte do treino.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 155,
    mensalMin: 330,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'Biguaçu é uma cidade de mais de 270 anos que hoje vive como parte da Grande Florianópolis. Escolher personal aqui começa por decidir onde o treino acontece — academia do bairro, casa ou online — e, se o profissional vier de São José ou da capital, por combinar o deslocamento antes do primeiro treino.',

  faqsExtra: [
    {
      pergunta: 'Tem Smart Fit em Biguaçu?',
      resposta:
        'Não. Pelo localizador oficial da rede, não há unidade no município; as mais próximas ficam em Florianópolis, a cerca de 10 km. Em Biguaçu, a oferta é de academias de bairro — pelo TotalPass e pelo Wellhub, a Just Gym, no Centro, a Cross Wings e a Proquality Maniacs, no Bom Viver, e a Academia Inevitável.',
    },
    {
      pergunta: 'Vale contratar um personal de Florianópolis ou de São José morando em Biguaçu?',
      resposta:
        'Pode valer, desde que o deslocamento esteja combinado. Pergunte de onde o profissional sai, em que horário e se a distância já está no preço — o trajeto entre as cidades da Grande Florianópolis muda muito no horário de pico, e deslocamento que não foi combinado costuma virar atraso e remarcação.',
    },
    {
      pergunta: 'Há acompanhamento em Biguaçu para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Biguaçu, o formato é o acompanhamento online: treino adaptado à estrutura que você tem — academia do bairro, casa ou condomínio —, vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura: quadro clínico pede também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['sao-jose-sc', 'florianopolis-sc', 'governador-celso-ramos-sc', 'tijucas-sc'],

  fontes: [
    { nome: 'IBGE/SIDRA — Censo 2022, população de Biguaçu', url: 'https://apisidra.ibge.gov.br/values/t/4709/n6/4202305/v/93/p/2022' },
    { nome: 'IBGE — Histórico de Biguaçu', url: 'https://biblioteca.ibge.gov.br/visualizacao/dtb/santacatarina/biguacu.pdf' },
    { nome: 'ALESC — Lei Complementar 495/2010 (Região Metropolitana de Florianópolis)', url: 'http://leis.alesc.sc.gov.br/html/2010/495_2010_lei_complementar.html' },
    { nome: 'Prefeitura de Biguaçu', url: 'https://www.bigua.sc.gov.br/' },
    { nome: 'INMET — Normais Climatológicas 1991–2020', url: 'https://portal.inmet.gov.br/normais' },
  ],
  atualizadoEm: '2026-10-26',
};
