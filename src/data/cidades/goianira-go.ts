import type { Cidade } from '../../lib/types';

/*
 * Criada em 26/10/2026 a pedido do Renato ("pode criar próximos dois, mas de
 * cidades agora"). Escolha: entre os municípios acima de 60 mil habitantes
 * (Censo 2022) ainda sem página, os vizinhos de capitais que já rendem no
 * GSC — Goiânia, 517 impressões em 28 dias. Nenhuma consulta com o nome da
 * cidade no GSC de 90 dias: é aposta de vizinhança, dita aqui.
 *
 * Fontes conferidas em 26/10/2026: IBGE/SIDRA (população 2022 e 2010, área);
 * Prefeitura (gentílico, IDHM citando o PNUD — Atlas Brasil bloqueado aqui —,
 * história, emancipação, 22 km de Goiânia, vizinhos, Terminal e BRT, trevos
 * da GO-070, polo calçadista, Lago Municipal); INMET, normais 1991–2020 da
 * estação Goiânia; academias por Wellhub + TotalPass. Fora: corridas (nenhuma
 * com página oficial), parques com equipamento (a Prefeitura não publica),
 * bairros nobres/populares (sem fonte para classificar), Smart Fit (sem
 * unidade no município). Preço: mesma faixa de Trindade, vizinha de porte
 * parecido na Região Metropolitana.
 */
export const cidade: Cidade = {
  slug: 'goianira-go',
  nome: 'Goianira',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'goianirense',
  tipo: 'cidade',

  populacao: 71916,
  populacaoAno: 2022,
  idhm: 0.694,
  idhmClasse: 'médio',

  resumoEconomico:
    'Goianira nasceu em 1920 como o povoado de São Geraldo, serviu de base de apoio à construção de Goiânia nos anos 1940 e se emancipou da capital em 1958. Faz parte da Região Metropolitana de Goiânia, e a população passou de 34 mil moradores em 2010 para quase 72 mil em 2022, mais que o dobro, segundo o IBGE. No Distrito Agroindustrial, a Prefeitura mantém um polo calçadista.',

  mercado:
    'Uma cidade que dobrou de tamanho em doze anos, a 22 km de Goiânia e ligada a ela por BRT: para quem divide a semana entre as duas cidades, o horário de treino precisa caber entre o trajeto de ida e o de volta. As academias de bairro concentram a oferta presencial; não há unidade da Smart Fit no município. O atendimento a domicílio e o online resolvem para quem não quer somar mais um deslocamento ao dia.',

  bairrosNobres: [],
  bairrosPopulares: [],

  parques: [
    {
      nome: 'Lago Municipal Umberto Donato Ialacci',
      descricao:
        'Espaço público da cidade, usado pela Prefeitura para eventos como o torneio de pesca esportiva e o Natal. Vale conferir no local a estrutura para caminhada antes de montar o treino ali.',
    },
  ],

  clima:
    'Verão chuvoso e inverno seco. Pelas normais do INMET (1991–2020) da estação de Goiânia, a 22 km, a média anual é de 24,5 °C; setembro é o mês mais quente (26,3 °C) e junho o menos quente (22,3 °C). Chove 1.610 mm por ano, quase tudo de outubro a abril: dezembro passa de 270 mm, e julho tem 1,5 mm. Em agosto, a umidade relativa média cai para cerca de 41%.',
  climaTreino:
    'O inverno seco é a melhor época para treinar na rua, mas pede cuidado com a umidade baixa de julho e agosto: água à mão e treino cedo. De outubro a abril, as chuvas de fim de tarde pedem um plano B coberto, em casa ou na academia.',

  mobilidade:
    'Goianira fica a 22 km de Goiânia pela rodovia, com acesso pelos trevos da GO-070, e faz divisa com Goiânia, Trindade, Caturaí, Brazabrantes e Santo Antônio de Goiás. O Terminal Goianira liga a cidade à capital pelo BRT do Eixo Anhanguera e tem linhas para Caturaí e Brazabrantes.',

  corridas: [],
  culturaEsportiva:
    'Não encontramos calendário oficial de corridas de rua no município. Quem quer prova encontra o calendário mais próximo em Goiânia, a 22 km.',
  academias:
    'A oferta é de academias de bairro. Pelo Wellhub e pelo TotalPass, com o mesmo endereço, estão a GigaFit, na Rua São João, no Setor Parque das Camélias; a Skyfit Goianira, na Rua Faria Lima, na Vila Verdes Mares; e a Power Fitness, na Avenida Goianira. A Smart Fit não tem unidade no município; as mais próximas da rede ficam em Goiânia.',

  academiasProximas: [
    { nome: 'GigaFit', detalhe: 'na Rua São João, no Setor Parque das Camélias' },
    { nome: 'Skyfit Goianira', detalhe: 'na Rua Faria Lima, na Vila Verdes Mares' },
    { nome: 'Academia Power Fitness', detalhe: 'na Avenida Goianira' },
  ],
  academiasVerificadasEm: '2026-10-26',

  destaquesFitness: [
    'População mais que dobrou entre 2010 e 2022, segundo o IBGE: mercado de treino em formação.',
    'A 22 km de Goiânia, com BRT do Eixo Anhanguera saindo do Terminal Goianira.',
    'Inverno seco, com julho quase sem chuva: a melhor época para treinar na rua.',
    'Academias de bairro pelos apps de benefício; Smart Fit só em Goiânia.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 680,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Goianira é uma cidade nova no tamanho e antiga na história: dobrou de população em doze anos e continua com um pé em Goiânia. Escolher personal aqui começa pela agenda — o trajeto até a capital decide o horário que sobra — e passa pelo formato: academia de bairro, casa ou online.',

  faqsExtra: [
    {
      pergunta: 'Tem Smart Fit em Goianira?',
      resposta:
        'Não. Pelo localizador oficial da rede, não há unidade no município; as mais próximas ficam em Goiânia, a cerca de 20 km. Em Goianira, a oferta é de academias de bairro — pelo Wellhub e pelo TotalPass, a GigaFit, no Setor Parque das Camélias, a Skyfit Goianira, na Vila Verdes Mares, e a Power Fitness, na Avenida Goianira.',
    },
    {
      pergunta: 'Vale contratar um personal de Goiânia morando em Goianira?',
      resposta:
        'Pode valer, desde que o deslocamento esteja combinado. São 22 km entre as duas cidades, e o tempo de trajeto muda muito no horário de pico. Pergunte de onde o profissional sai, em que horário e se a distância já está no preço — deslocamento que não foi combinado costuma virar atraso e remarcação.',
    },
    {
      pergunta: 'Há acompanhamento em Goianira para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Goianira, o formato é o acompanhamento online: treino adaptado à estrutura que você tem — academia do bairro, casa ou condomínio —, vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura: quadro clínico pede também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['goiania-go', 'trindade-go'],

  fontes: [
    { nome: 'IBGE/SIDRA — Censo 2022, população de Goianira', url: 'https://apisidra.ibge.gov.br/values/t/4709/n6/5208806/v/93/p/2022' },
    { nome: 'Prefeitura de Goianira — Dados geográficos', url: 'https://goianira.go.gov.br/dados-geograficos/' },
    { nome: 'Prefeitura de Goianira — História', url: 'https://goianira.go.gov.br/historia/' },
    { nome: 'INMET — Normais Climatológicas 1991–2020', url: 'https://portal.inmet.gov.br/normais' },
  ],
  atualizadoEm: '2026-10-26',
};
