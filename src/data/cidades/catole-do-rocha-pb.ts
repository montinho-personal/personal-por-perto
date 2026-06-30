import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'catole-do-rocha-pb',
  nome: 'Catolé do Rocha',
  uf: 'PB',
  estado: 'Paraíba',
  estadoSlug: 'paraiba',
  regiao: 'Nordeste',
  gentilico: 'catoleense',
  tipo: 'cidade',

  populacao: 30661,
  populacaoAno: 2022,
  idhm: 0.640,
  idhmClasse: 'médio',
  altitudeM: 304,

  resumoEconomico:
    'Principal cidade do Alto Sertão paraibano na divisa com o Rio Grande do Norte, Catolé do Rocha concentra serviços, comércio e administração pública que atendem toda a sua microrregião. A pecuária tem peso histórico, com destaque para a produção de leite organizada em cooperativa local, ao lado da agropecuária familiar típica do semiárido. A cidade também é um polo educacional da região, sede do Campus IV da Universidade Estadual da Paraíba (UEPB), o que atrai estudantes das cidades vizinhas.',

  mercado:
    'Como cidade média de referência no sertão, Catolé do Rocha tem um mercado fitness enxuto, formado por academias locais de musculação e treino funcional e por profissionais que atendem nos bairros e a domicílio. A presença universitária ajuda a sustentar a procura por treino orientado, e a busca por personal trainers cresce entre quem quer driblar o calor intenso e manter constância ao longo do ano.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Olho d’Água', 'Alto da Conceição', 'São Sebastião'],

  parques: [
    {
      nome: 'Praças do Centro',
      descricao:
        'O conjunto de praças e calçadões da área central concentra boa parte da caminhada e da atividade ao ar livre no fim da tarde, quando o calor cede — ponto de encontro tradicional da cidade.',
    },
    {
      nome: 'Açudes e reservatórios da região',
      descricao:
        'No semiárido, os açudes e barragens que abastecem o município e o entorno servem também de cenário para caminhadas e pedaladas nas estradas vicinais próximas, condicionadas ao regime de chuvas.',
    },
    {
      nome: 'Entorno do Campus IV da UEPB',
      descricao:
        'A presença da universidade movimenta a prática esportiva entre estudantes, com uso de espaços abertos e quadras para atividades físicas e treino na cidade.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e o pedal acontece principalmente nas vias urbanas e nas estradas que ligam Catolé do Rocha às comunidades rurais e cidades vizinhas.',

  clima:
    'O clima é semiárido quente, característico do Alto Sertão paraibano, com temperaturas médias em torno de 27 °C e chuvas escassas e irregulares, concentradas em poucos meses do ano (geralmente entre fevereiro e abril) e total anual abaixo de 800 mm. A maior parte do ano é marcada por calor forte e baixa umidade.',
  climaTreino:
    'O calor intenso e a baixa umidade pedem treino bem cedo ou no fim da tarde, com hidratação reforçada e atenção à exposição ao sol; nos dias mais quentes, ambientes climatizados são a opção mais segura para manter a rotina sem sobrecarga.',

  mobilidade:
    'Catolé do Rocha articula-se à malha rodoviária do sertão pela BR-405, que cruza o Alto Sertão paraibano e conecta a cidade ao eixo de Sousa e Cajazeiras e ao Rio Grande do Norte. O deslocamento interno é feito sobretudo por veículos próprios, motos e transporte intermunicipal, e a cidade funciona como entroncamento de serviços para os municípios menores do entorno.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário municipal',
      descricao:
        'A cidade recebe provas de corrida de rua ligadas a datas e eventos do município, comuns no calendário esportivo do sertão paraibano e abertas a corredores de diferentes níveis.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o futebol, a caminhada nas praças e ruas do Centro no fim do dia e provas de corrida pontuais, tudo moldado pelo calor do semiárido e pelo ritmo de uma cidade universitária do interior.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pela área central e pelos bairros residenciais, com porte compatível com uma cidade média do sertão.',

  destaquesFitness: [
    'Principal cidade do Alto Sertão paraibano, polo de serviços e comércio para a microrregião.',
    'Cidade universitária, sede do Campus IV da UEPB, com público estudantil que movimenta a prática esportiva.',
    'Calor intenso do semiárido, que exige planejamento de horário e hidratação no treino.',
    'Praças do Centro e estradas vicinais como espaços de caminhada, corrida e pedal ao ar livre.',
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
    'Cidade quente e de referência no Alto Sertão paraibano, Catolé do Rocha pede um treino adaptado ao semiárido, que aproveite as praças e o fim de tarde mais ameno. Um personal trainer ajuda a organizar a rotina respeitando o calor, escolhendo os melhores horários e mantendo a constância ao longo do ano.',

  vizinhas: ['cajazeiras-pb', 'sousa-pb'],

  fontes: [
    { nome: 'IBGE Cidades — Catolé do Rocha', url: 'https://cidades.ibge.gov.br/brasil/pb/catole-do-rocha/panorama' },
    { nome: 'Prefeitura de Catolé do Rocha', url: 'https://catoledorocha.pb.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
