import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cuiaba-mt',
  nome: 'Cuiabá',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'cuiabano',
  tipo: 'cidade',

  populacao: 650912,
  populacaoAno: 2022,
  idhm: 0.785,
  idhmClasse: 'alto',
  altitudeM: 165,

  resumoEconomico:
    'Capital de Mato Grosso, Cuiabá é um dos principais polos do agronegócio do Centro-Oeste, com economia girando em torno de grãos (soja e milho), pecuária, comércio e serviços. Forma região metropolitana conurbada com Várzea Grande e recebe grande fluxo de pessoas ligadas ao agro, o que dá dinamismo ao comércio e aos serviços, incluindo o setor fitness.',

  mercado:
    'A cidade tem boa oferta de academias (redes e nomes locais) e uma cultura de treino ativa apesar do calor, impulsionada por programas públicos gratuitos como o "Movimente-se", oferecidos em parques e na UFMT. Musculação e treino funcional são bastante populares.',

  bairrosNobres: ['Goiabeiras', 'Jardim das Américas', 'Santa Marta', 'Bosque da Saúde'],
  bairrosPopulares: ['Quilombo', 'Araés', 'CPA', 'Nova Esperança'],

  parques: [
    {
      nome: 'Parque Mãe Bonifácia',
      descricao:
        'O principal ponto de corrida da cidade, com trilhas internas que somam mais de 5 km, cinco postos de academia ao ar livre e mirante, em um circuito arborizado e levemente ondulado.',
    },
    {
      nome: 'Parque das Águas',
      descricao:
        'Com cerca de 270 mil m², tem pista de caminhada e corrida de aproximadamente 1,5 km, ciclovia de cerca de 1,6 km e duas academias ao ar livre.',
    },
    {
      nome: 'Parque das Nações Indígenas',
      descricao:
        'Tem pista de caminhada, ciclovia e área verde com infraestrutura de apoio, complementando os espaços públicos de treino da capital.',
    },
  ],
  ciclovias:
    'A rede cicloviária está em expansão, com trechos como o do Parque das Águas (cerca de 1,6 km) e novos segmentos previstos junto ao projeto do BRT.',

  clima:
    'Cuiabá é uma das cidades mais quentes do Brasil, com máximas frequentemente acima de 30 °C e raramente abaixo de 14 °C.',
  climaTreino:
    'Pelo calor extremo, o treino ao ar livre concentra-se no início da manhã (das 6h às 8h, faixa dos programas públicos) e à noite. Hidratação e proteção solar são absolutamente essenciais.',

  mobilidade:
    'O VLT está paralisado desde 2015 e vem sendo substituído pelo projeto do BRT (que prevê ciclovia e pista de caminhada). A cidade fica no cruzamento das BR-070, BR-163 e BR-364 e é conurbada com Várzea Grande.',

  corridas: [
    {
      nome: 'Corrida de Reis',
      descricao:
        'Disputada desde 1985, é a maior prova de corrida do estado, reunindo mais de 20 mil participantes — um clássico do calendário cuiabano.',
    },
    {
      nome: 'Corrida Bom Jesus de Cuiabá',
      descricao:
        'Prova de 10 km realizada nas comemorações de aniversário da capital, com milhares de participantes.',
    },
  ],
  culturaEsportiva:
    'Mesmo com o calor extremo, Cuiabá tem uma cultura de corrida forte, com provas tradicionais de grande porte. Programas públicos gratuitos incentivam a atividade física matinal nos parques, ampliando o acesso ao treino.',
  academias:
    'A oferta de academias acompanha o porte da capital, com redes e nomes locais, complementada pelas aulas gratuitas do programa "Movimente-se" em parques e na universidade.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades em Goiabeiras, no Jardim das Américas, no CPA e na Av. Rubens de Mendonça' },
    { nome: 'Selfit', detalhe: 'rede de baixo custo com presença na capital' },
    { nome: 'Programa Movimente-se', detalhe: 'aulas públicas gratuitas em parques e na UFMT' },
    { nome: 'Academias ao ar livre do Mãe Bonifácia', detalhe: 'cinco postos gratuitos em meio às trilhas' },
  ],

  destaquesFitness: [
    'Parque Mãe Bonifácia: hub de corrida com mais de 5 km de trilhas e academia ao ar livre.',
    'Programa público "Movimente-se" com aulas gratuitas em parques e na UFMT.',
    'Calor extremo concentra os treinos no início da manhã e à noite.',
    'Corrida de Reis, uma das maiores provas do Centro-Oeste (mais de 20 mil inscritos).',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Em uma das cidades mais quentes do país, treinar bem é, antes de tudo, saber lidar com o calor — e é aí que um personal trainer faz diferença, ajustando horários, intensidade e hidratação. Com parques como o Mãe Bonifácia e uma forte cultura de corrida, Cuiabá tem estrutura para quem quer evoluir com segurança.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Cuiabá?',
      resposta:
        'O Parque Mãe Bonifácia é o coração: mais de 5 km de trilhas arborizadas, cinco postos de academia ao ar livre e o circuito preferido dos corredores da capital. Completam o mapa o Parque das Águas, as academias de rede (Smart Fit em quatro pontos, Selfit) e locais, e o atendimento em casa e em condomínio, forte em Goiabeiras, no Jardim das Américas e no Santa Marta — os bairros onde o calor torna o deslocamento a menos algo valioso.',
    },
    {
      pergunta: 'Em uma das cidades mais quentes do Brasil, quando treinar em Cuiabá?',
      resposta:
        'Nas bordas do dia — e a cidade inteira já entendeu isso. A janela da manhã vai das 6h às 8h (a mesma faixa dos programas públicos gratuitos), e a da noite abre depois das 18h30, quando parques e avenidas enchem de corredores. No miolo do dia, o treino é indoor, sem negociação. A hidratação em Cuiabá não é dica, é parte do treino: começa antes, continua durante e segue depois. O personal monta a semana inteira em volta dessas janelas térmicas.',
    },
    {
      pergunta: 'Há acompanhamento em Cuiabá para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Cuiabá, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio ou casa), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['campo-grande-ms', 'goiania-go', 'brasilia-df'],

  fontes: [
    { nome: 'IBGE Cidades — Cuiabá', url: 'https://cidades.ibge.gov.br/brasil/mt/cuiaba/panorama' },
    { nome: 'Prefeitura de Cuiabá', url: 'https://www.cuiaba.mt.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-19',
};
