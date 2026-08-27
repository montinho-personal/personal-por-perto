import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'aquiraz-ce',
  nome: 'Aquiraz',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'aquirazense',
  tipo: 'cidade',

  populacao: 80645,
  populacaoAno: 2022,
  idhm: 0.641,
  idhmClasse: 'médio',
  altitudeM: 18,

  resumoEconomico:
    'Primeira capital do Ceará, Aquiraz integra a Região Metropolitana de Fortaleza e tem na economia do turismo de praia e resorts seu principal motor. O litoral de Porto das Dunas, onde fica o Beach Park, concentra hotéis, condomínios e empreendimentos de lazer, enquanto o centro histórico preserva igrejas e construções do século 18. A combinação de orla movimentada e sol o ano inteiro torna a atividade física parte natural da rotina local.',

  mercado:
    'O mercado fitness de Aquiraz é puxado pelo eixo turístico de Porto das Dunas, com academias de resorts, condomínios e estúdios de bairro voltados a treino funcional e estética de praia. A proximidade com Fortaleza (cerca de 27 km pela CE-040) amplia a oferta de profissionais e a circulação de personal trainers entre as duas cidades. A orla e os esportes de areia criam um ambiente propício para o atendimento ao ar livre.',

  bairrosNobres: ['Porto das Dunas', 'Centro', 'Patacas'],
  bairrosPopulares: ['João de Castro', 'Jacaúna', 'Camará', 'Iguape'],

  parques: [
    {
      nome: 'Orla de Porto das Dunas',
      descricao:
        'Principal frente de mar de Aquiraz, com faixa de areia larga, quiosques e estrutura turística em torno do Beach Park — palco de caminhada, corrida e esportes de areia.',
    },
    {
      nome: 'Praia do Presídio',
      descricao:
        'Praia mais extensa e tranquila, com dunas e coqueirais, boa para caminhadas longas e treinos ao ar livre fora do burburinho dos resorts.',
    },
    {
      nome: 'Prainha',
      descricao:
        'Praia tradicional de Aquiraz, conhecida pela vila de jangadeiros e pela renda de bilro, com orla usada para corrida e lazer ativo.',
    },
  ],
  ciclovias:
    'A mobilidade ativa se concentra na orla de Porto das Dunas e nos eixos de acesso aos empreendimentos turísticos; a infraestrutura cicloviária ainda é pontual, com pedaladas comuns ao longo da faixa litorânea.',

  clima:
    'O clima é tropical quente do litoral cearense, com sol predominante o ano inteiro, temperaturas em geral entre 24 °C e 31 °C e estação chuvosa concentrada no primeiro semestre. A brisa marítima e a umidade litorânea são constantes.',
  climaTreino:
    'Com calor forte e alta insolação, o ideal é treinar cedo de manhã ou no fim da tarde, reforçando a hidratação e a proteção solar. A brisa da orla ajuda no conforto térmico durante os exercícios ao ar livre.',

  mobilidade:
    'O acesso a Aquiraz a partir de Fortaleza se dá principalmente pela CE-040, conectando a sede e o litoral de Porto das Dunas ao restante da Região Metropolitana. A cidade depende fortemente do transporte rodoviário e do carro, com a orla turística bem servida de vias de acesso.',

  corridas: [
    {
      nome: 'Provas na orla de Porto das Dunas',
      descricao:
        'O litoral turístico costuma sediar corridas de rua e provas promocionais ligadas ao turismo e aos resorts — vale conferir o calendário atualizado antes de se inscrever.',
    },
    {
      nome: 'Esportes de areia',
      descricao:
        'Beach tennis, futevôlei e vôlei de praia são fortes nas areias de Aquiraz, parte essencial da cultura esportiva do litoral cearense.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Aquiraz gira em torno da praia: corrida e caminhada na orla, esportes de areia como beach tennis e futevôlei e a valorização da estética convivem com o forte fluxo turístico. O sol o ano todo torna o treino ao ar livre parte natural do dia a dia.',
  academias:
    'A oferta vai das academias de resorts e condomínios de Porto das Dunas a estúdios e academias de bairro na sede, com presença marcante de treino funcional e atividades de praia.',

  academiasProximas: [
    { nome: 'ProFitness Academia', detalhe: 'na Rua Major José Câmara, no Centro' },
  ],
  academiasVerificadasEm: '2026-08-27',

  destaquesFitness: [
    'Orla de Porto das Dunas: frente de mar estruturada para treino ao ar livre.',
    'Sol o ano todo favorece o exercício ao ar livre (com cuidado térmico).',
    'Beach tennis e futevôlei em alta nas areias do litoral.',
    'Proximidade com Fortaleza (cerca de 27 km pela CE-040) amplia a oferta de profissionais.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 360,
  },

  conclusao:
    'Com orla turística estruturada, sol o ano inteiro e uma cultura de praia que valoriza o corpo, Aquiraz é um bom lugar para treinar. Um personal trainer ajuda a aproveitar Porto das Dunas e as academias da região com método e segurança, respeitando o calor e o seu objetivo.',

  vizinhas: ['fortaleza-ce', 'eusebio-ce', 'maracanau-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Aquiraz', url: 'https://cidades.ibge.gov.br/brasil/ce/aquiraz/panorama' },
    { nome: 'Prefeitura de Aquiraz', url: 'https://www.aquiraz.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-27',
  capaArte: {
    src: '/capas-cidade/aquiraz-ce.webp',
    w: 1200,
    h: 900,
    alt:
      'Personal trainer em Aquiraz (CE) em arte que une treino em dupla na orla e o litoral cearense com coqueiros e toboáguas do parque aquático ao fundo — Personal por Perto',
    legenda:
      'Treino personalizado em Aquiraz: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
