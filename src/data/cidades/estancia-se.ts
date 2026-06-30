import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'estancia-se',
  nome: 'Estância',
  uf: 'SE',
  estado: 'Sergipe',
  estadoSlug: 'sergipe',
  regiao: 'Nordeste',
  gentilico: 'estanciano',
  tipo: 'cidade',

  populacao: 65078,
  populacaoAno: 2022,
  idhm: 0.647,
  idhmClasse: 'médio',
  altitudeM: 25,

  resumoEconomico:
    'Conhecida como o "Jardim de Sergipe", Estância fica no sul do estado, cortada pelos rios Piauí e Piauitinga e próxima ao litoral. É uma das maiores economias sergipanas e um importante polo industrial do estado, com tradição têxtil que remonta às antigas fábricas instaladas a partir do fim do século XIX. A economia combina indústria, serviços, agropecuária (com destaque para a laranja e o maracujá voltados ao processamento) e um turismo em expansão, puxado pelas praias e pela cultura local.',

  mercado:
    'Como cidade média do interior nordestino com base industrial e vocação turística, Estância tem um mercado fitness formado sobretudo por academias locais e treino funcional, e ainda em desenvolvimento no atendimento personalizado. A procura por personal trainers tende a crescer entre quem busca treino adaptado ao calor litorâneo e quem quer aproveitar a orla e os espaços ao ar livre para a atividade física.',

  bairrosNobres: ['Centro', 'Cidade Nova', 'Bonfim', 'Cidade Alta'],
  bairrosPopulares: ['Porto D\'Areia', 'Conjunto Balduíno', 'Conjunto Camaçari', 'Cidade Baixa'],

  parques: [
    {
      nome: 'Praia do Saco',
      descricao:
        'Uma das praias mais bonitas de Sergipe, com longa faixa de areia e águas calmas; o trecho de orla é procurado para caminhada e corrida ao ar livre, sobretudo nos horários de menor calor.',
    },
    {
      nome: 'Praia do Abaís',
      descricao:
        'Praia extensa de areia clara e mar morno, a poucos quilômetros da sede; a orla e os acessos servem de cenário para atividades ao ar livre e para quem treina aproveitando o litoral.',
    },
    {
      nome: 'Margens dos rios Piauí e Piauitinga',
      descricao:
        'Os dois rios que cortam a cidade e suas pontes históricas marcam a paisagem urbana; o entorno e as vias próximas são usados por moradores para caminhadas e atividade física no dia a dia.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e nos acessos em direção ao litoral.',

  clima:
    'O clima é tropical litorâneo, quente o ano todo, amenizado pela brisa do mar que rende a Estância fama de bom clima. As chuvas se concentram no outono e no inverno (de abril a julho), enquanto a primavera e o verão tendem a ser mais secos e ensolarados.',
  climaTreino:
    'O calor constante pede treinar de manhã cedo ou no fim da tarde, com hidratação reforçada; a brisa litorânea ajuda a tornar a atividade ao ar livre mais confortável, e os meses mais secos favorecem treinos na orla e ao ar livre.',

  mobilidade:
    'Estância é cortada pela BR-101, principal eixo rodoviário que liga a cidade a Aracaju, ao norte, e à Bahia, ao sul, o que reforça seu papel de entroncamento no sul sergipano. O acesso às praias se faz por estradas vicinais e pela rota litorânea conhecida como Linha Verde; o transporte urbano é feito por ônibus.',

  corridas: [
    {
      nome: 'Provas do calendário sergipano de corrida de rua',
      descricao:
        'Estância integra o circuito de corridas de rua do sul de Sergipe, com provas amadoras promovidas ao longo do ano por organizadores e pela comunidade de corredores do estado.',
    },
    {
      nome: 'Corridas ligadas a datas e festas locais',
      descricao:
        'Eventos esportivos costumam acompanhar o calendário cultural da cidade, aproveitando o período festivo e o público que circula pelas praias para movimentar a corrida de rua.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Estância mistura o uso da orla das praias do Saco e do Abaís para caminhada e corrida, a forte tradição das festas juninas e do forró — com os famosos fogos e o "barco de fogo" ligados aos fogueteiros do bairro Porto D\'Areia — e o futebol como paixão local.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelos bairros centrais e residenciais, com porte compatível com uma cidade média do interior nordestino.',

  destaquesFitness: [
    'Jardim de Sergipe: cidade litorânea com bom clima e brisa do mar que favorecem o treino ao ar livre.',
    'Praias do Saco e do Abaís como espaços de caminhada e corrida junto ao litoral.',
    'Calor constante, que exige planejamento de horário e hidratação no treino.',
    'Uma das maiores economias e polos industriais de Sergipe, entroncada na BR-101 no sul do estado.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Cidade litorânea, quente e de bom clima, Estância pede um treino adaptado ao calor e que aproveite as praias e os espaços ao ar livre. Um personal trainer ajuda a organizar a rotina respeitando o clima, definindo os melhores horários e mantendo a constância ao longo do ano.',

  vizinhas: ['aracaju-se', 'lagarto-se'],

  fontes: [
    { nome: 'IBGE Cidades — Estância', url: 'https://cidades.ibge.gov.br/brasil/se/estancia/panorama' },
    { nome: 'Prefeitura de Estância', url: 'https://www.estancia.se.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
