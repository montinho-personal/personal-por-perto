import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ituiutaba-mg',
  nome: 'Ituiutaba',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'ituiutabano',
  tipo: 'cidade',

  populacao: 99981,
  populacaoAno: 2022,
  idhm: 0.739,
  idhmClasse: 'alto',
  altitudeM: 544,

  resumoEconomico:
    'Maior cidade do Pontal do Triângulo Mineiro, Ituiutaba tem a economia ancorada no agronegócio: cana-de-açúcar, soja e milho dominam as lavouras de maior área plantada, somadas a uma forte pecuária e a usinas sucroenergéticas instaladas na região. O comércio e os serviços atendem um polo regional que reúne municípios vizinhos, e a cidade abriga um campus da Universidade Federal de Uberlândia (UFU), que movimenta a vida acadêmica e a demanda por moradia e serviços.',

  mercado:
    'Como cidade média e polo do Pontal Mineiro, Ituiutaba tem um mercado fitness em consolidação, formado por academias de musculação e estúdios de treino funcional distribuídos pelos bairros centrais e residenciais. A presença universitária e o público de servidores e profissionais do agronegócio sustentam a procura por personal trainers, especialmente entre quem busca acompanhamento individual e treino orientado para o calor característico do oeste do Triângulo.',

  bairrosNobres: ['Centro', 'Universitário', 'Jardim do Rosário', 'Setor Sul'],
  bairrosPopulares: ['Natal', 'Junqueira', 'Progresso', 'Novo Tempo'],

  parques: [
    {
      nome: 'Parque do Goiabal',
      descricao:
        'Unidade de conservação criada em 1986 na porção sul da área urbana, com cerca de 37 hectares de vegetação preservada; é a principal área verde da cidade, usada para contato com a natureza, educação ambiental e atividades ao ar livre.',
    },
    {
      nome: 'Parques ecológicos de bairro',
      descricao:
        'A cidade conta com parques ecológicos instalados em bairros como Guimarães (junto à Praça Santos Drummond) e Buritis, alguns com academia ao ar livre, que servem de ponto de caminhada e treino para os moradores do entorno.',
    },
    {
      nome: 'Praças e avenidas arborizadas',
      descricao:
        'As praças centrais e avenidas arborizadas reúnem boa parte da caminhada e da corrida do dia a dia, complementadas por trechos com pista solicitada e implantada para a prática de atividade física na malha urbana.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é pontual e concentrada em algumas avenidas e na área central; grande parte do pedal e da corrida acontece nas vias urbanas e nos trechos arborizados da cidade, terreno relativamente plano que favorece os percursos.',

  clima:
    'O clima é tropical com inverno seco (Aw, na classificação de Köppen), típico do oeste do Triângulo Mineiro. O ano se divide em uma estação chuvosa de outubro a abril e um período seco de maio a setembro; a baixa altitude e a continentalidade deixam o calor mais acentuado, com temperaturas médias que variam de cerca de 14 °C no inverno a perto de 31 °C nos meses mais quentes.',
  climaTreino:
    'Com o calor reforçado pela baixa altitude do Pontal, o ideal é treinar cedo ou no fim da tarde, com hidratação caprichada, sobretudo no fim da seca, quando o ar fica mais quente e empoeirado. O inverno seco e ameno costuma ser a janela mais confortável para o treino ao ar livre.',

  mobilidade:
    'Ituiutaba é cortada pela BR-365, principal eixo rodoviário que liga o Pontal Mineiro a Uberlândia e ao restante do estado, com conexões para o Sudeste de Goiás. O transporte urbano é feito por ônibus, e a posição de polo regional concentra na cidade serviços e fluxo logístico do agronegócio dos municípios vizinhos.',

  corridas: [
    {
      nome: 'Bulk Run',
      descricao:
        'Corrida de rua tradicional da cidade, organizada por academia local, com percursos de 5 km e 10 km e edições anuais que reúnem corredores de Ituiutaba e da região do Pontal.',
    },
    {
      nome: 'Corrida Unimed/Unicred',
      descricao:
        'Prova de rua promovida na cidade com apoio de empresas locais, que reforça o calendário esportivo de Ituiutaba e a cultura de corrida entre os moradores.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso das praças e avenidas arborizadas para caminhada e corrida, um calendário municipal de eventos esportivos ao longo do ano e provas de rua que mobilizam corredores da região, num terreno plano que favorece a prática.',
  academias:
    'A oferta é formada por academias de musculação e estúdios de treino funcional espalhados pelos bairros centrais e residenciais, com porte compatível com uma cidade média que funciona como polo de serviços do Pontal Mineiro.',

  destaquesFitness: [
    'Polo do Pontal do Triângulo Mineiro, com economia forte no agronegócio (cana, soja e milho) e na pecuária.',
    'Parque do Goiabal e parques ecológicos de bairro como áreas verdes para atividade ao ar livre.',
    'Calor acentuado pela baixa altitude, que exige planejamento de horário e hidratação no treino.',
    'Calendário de corridas de rua e presença universitária (campus da UFU) que aquecem a procura por treino orientado.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Polo do Pontal Mineiro, com calor acentuado e bons espaços ao ar livre como o Parque do Goiabal, Ituiutaba pede um treino adaptado ao clima e que aproveite as praças e o terreno plano da cidade. Um personal trainer ajuda a definir os melhores horários, organizar a rotina e manter a constância ao longo das estações seca e chuvosa.',

  vizinhas: ['uberlandia-mg', 'itumbiara-go'],

  fontes: [
    { nome: 'IBGE Cidades — Ituiutaba', url: 'https://cidades.ibge.gov.br/brasil/mg/ituiutaba/panorama' },
    { nome: 'Prefeitura de Ituiutaba', url: 'https://www.ituiutaba.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
