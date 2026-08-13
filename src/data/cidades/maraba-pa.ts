import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'maraba-pa',
  nome: 'Marabá',
  uf: 'PA',
  estado: 'Pará',
  estadoSlug: 'para',
  regiao: 'Norte',
  gentilico: 'marabaense',
  tipo: 'cidade',

  populacao: 266533,
  populacaoAno: 2022,
  idhm: 0.668,
  idhmClasse: 'médio',

  resumoEconomico:
    'No sudeste do Pará, na confluência dos rios Tocantins e Itacaiúnas, Marabá é o principal polo de comércio e logística de mais de trinta municípios da região. A economia se apoia em mineração e siderurgia (ferro, cobre e manganês ligados a Carajás), pecuária e serviços, sendo uma das maiores economias do estado.',

  mercado:
    'Como polo regional de quase 270 mil habitantes, com renda ligada à mineração e ao comércio, Marabá sustenta uma rede crescente de academias e estúdios distribuídos pelos núcleos urbanos, com espaço para personal trainers ligados à orla e às academias de bairro.',

  bairrosNobres: ['Cidade Nova', 'Nova Marabá (Folha 26)', 'Morada Nova', 'Belo Horizonte'],
  bairrosPopulares: ['Cabelo Seco', 'São Félix', 'Laranjeiras', 'Amapá'],

  parques: [
    {
      nome: 'Orla Sebastião Miranda (Rio Tocantins)',
      descricao:
        'O principal cartão-postal da Velha Marabá e o local preferido para caminhada, corrida e ciclismo, com vista para o rio — palco de largadas das grandes provas da cidade.',
    },
    {
      nome: 'Orla do Encontro dos Rios (Parque do Tocantins)',
      descricao:
        'Orla revitalizada com academia ao ar livre, cerca de 565 m de extensão e área de skate.',
    },
    {
      nome: 'Praça Osório Francisco Martins Pinheiro',
      descricao:
        'Funciona como academia ao ar livre, com aparelhos, pista de exercícios, fonte e playground.',
    },
  ],
  ciclovias:
    'A orla do Tocantins é muito usada para ciclismo; uma ciclovia formal e sua extensão ainda não são divulgadas em fonte oficial.',

  clima:
    'O clima é tropical quente e úmido, com médias anuais de 25 a 30 °C, seca de maio a setembro e chuvas de novembro a março.',
  climaTreino:
    'O calor e a umidade elevados exigem treinos cedo de manhã ou à noite, com sombra e hidratação intensa; a orla é mais movimentada nas horas frescas.',

  mobilidade:
    'Marabá é cortada pela BR-230 (Transamazônica) e pela BR-155, além de contar com ferrovia, hidrovia (Tocantins) e aeroporto — um importante entroncamento logístico do sudeste paraense.',

  corridas: [
    {
      nome: 'Corrida do Aço',
      descricao:
        'A prova mais tradicional da cidade, com mais de dez edições e mais de 1.400 atletas, largada na Praça São Félix de Valois, junto à Orla Sebastião Miranda.',
    },
    {
      nome: 'Meia Maratona de Marabá',
      descricao:
        'Prova de rua já em diversas edições, no calendário esportivo da cidade.',
    },
    {
      nome: 'Circuito AABB — Etapa Marabá',
      descricao:
        'Corrida e caminhada com largada na Nova Marabá, ao lado de eventos como o Circuito Sesc.',
    },
  ],
  culturaEsportiva:
    'Há forte hábito de caminhada, corrida e ciclismo na orla do Tocantins ao amanhecer e ao fim de tarde, com calendário regular de corridas de rua consolidado na região.',
  academias:
    'A oferta reúne academias e estúdios distribuídos pelos núcleos urbanos (Nova Marabá, Cidade Nova e Velha Marabá), complementada pelas orlas dos rios.',

  destaquesFitness: [
    'Orla do Rio Tocantins como principal corredor de caminhada, corrida e ciclismo.',
    'Orla do Encontro dos Rios com academia ao ar livre.',
    'Calendário ativo de corridas de rua (Meia Maratona, AABB, Sesc).',
    'Treinos em horários amenos pelo calor e pela umidade amazônica.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 145,
    mensalMin: 300,
    mensalMax: 820,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'Polo logístico e minerador do sudeste do Pará, Marabá tem nas orlas do Tocantins e do Itacaiúnas seus principais espaços de treino. Um personal trainer ajuda a aproveitá-las com método, ajustando horários e hidratação ao calor amazônico.',

  vizinhas: ['parauapebas-pa', 'tucurui-pa'],

  faqsExtra: [
    {
      pergunta: 'Qual o melhor horário para treinar ao ar livre em Marabá?',
      resposta:
        'Antes das 7h30 ou depois das 17h30 — o calor amazônico, que passa dos 30 °C boa parte do ano, torna o meio do dia inviável. A Orla Sebastião Miranda concentra o movimento nessas janelas, com o pôr do sol sobre o Tocantins como bônus. Hidratação reforçada é regra o ano inteiro, especialmente na seca de maio a setembro.',
    },
    {
      pergunta: 'Personal trainer atende nos três núcleos de Marabá?',
      resposta:
        'Sim. Nova Marabá, Cidade Nova e Velha Marabá têm academias próprias, e os profissionais costumam organizar a agenda por núcleo por causa das distâncias — a cidade é espalhada como poucas. O atendimento a domicílio é comum nas folhas da Nova Marabá e na Cidade Nova, e o formato online cobre quem mora nos núcleos mais distantes.',
    },
    {
      pergunta: 'Como treinar na época das chuvas em Marabá?',
      resposta:
        'De novembro a março, as pancadas diárias pedem plano B: academias cobertas nos três núcleos, treino em casa com acompanhamento e aproveitamento das janelas secas do dia. Nas cheias maiores do Tocantins, trechos da orla podem alagar — o personal ajusta o circuito para praças e ruas altas sem perder a rotina.',
    },
  ],
  fontes: [
    { nome: 'IBGE Cidades — Marabá', url: 'https://cidades.ibge.gov.br/brasil/pa/maraba/panorama' },
    { nome: 'Prefeitura de Marabá', url: 'https://www.maraba.pa.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-13',
};
