import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-gabriel-rs',
  nome: 'São Gabriel',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'gabrielense',
  tipo: 'cidade',

  populacao: 58487,
  populacaoAno: 2022,
  idhm: 0.699,
  idhmClasse: 'médio',
  altitudeM: 115,

  resumoEconomico:
    'No coração da Campanha gaúcha, São Gabriel é conhecida como a "Terra dos Marechais" e como cidade ligada à figura de Sepé Tiaraju, o líder guarani símbolo da região. A economia se apoia no agronegócio do Pampa: pecuária de corte e de leite, ovinocultura e lavouras de arroz, soja e milho, atividade em que o município figura entre os líderes da produção gaúcha. A presença da UNIPAMPA (Universidade Federal do Pampa) e de unidades do Exército, como o 6º Batalhão de Engenharia de Combate, também movimenta a vida econômica e social da cidade.',

  mercado:
    'Como cidade média do interior gaúcho com perfil universitário e militar, São Gabriel tem um mercado fitness em consolidação, formado por academias locais e profissionais autônomos. A procura por personal trainers cresce entre estudantes da UNIPAMPA, integrantes das unidades militares e moradores que buscam orientação para treinar com regularidade em meio às variações fortes de temperatura ao longo do ano.',

  bairrosNobres: ['Centro', 'Bela Vista', 'Independência', 'Cidade Nova'],
  bairrosPopulares: ['Trindade', 'Gabrielense', 'Menino Jesus', 'Vila Medianeira'],

  parques: [
    {
      nome: 'Praça Dr. Fernando Abbott',
      descricao:
        'A praça central da cidade, ponto de encontro tradicional, reúne o chimarródromo em formato de roda de carroça e área arborizada — espaço usado para caminhada, alongamento e atividade leve no centro.',
    },
    {
      nome: 'Sanga da Bica',
      descricao:
        'Curso d’água que atravessa a área urbana e deságua no rio Vacacaí, com mata ciliar protegida por lei municipal; o entorno verde serve de referência para quem caminha e corre próximo ao centro.',
    },
    {
      nome: 'Monumento a Sepé Tiaraju (Distrito de Tiaraju)',
      descricao:
        'Marco histórico e cultural ligado ao herói guarani, em meio à paisagem típica do Pampa; a área e as estradas vicinais do entorno são usadas por quem treina ao ar livre na zona rural.',
    },
  ],
  ciclovias:
    'A malha cicloviária é modesta e concentrada em alguns trechos da área urbana; boa parte do pedal e da corrida acontece nas avenidas da cidade e nas estradas planas da campanha, onde as coxilhas oferecem percursos longos.',

  clima:
    'O clima é subtropical úmido, com as quatro estações bem marcadas. Os verões são quentes e abafados, enquanto o inverno, característico da Campanha gaúcha, registra frio intenso, geadas frequentes, ventos fortes e, ocasionalmente, neve. A amplitude térmica ao longo do ano é grande, traço típico do bioma Pampa.',
  climaTreino:
    'O calor abafado do verão pede treinos no início da manhã ou no fim da tarde, com boa hidratação; já no inverno rigoroso, o frio e as geadas favorecem o uso de ambientes fechados e exigem aquecimento mais cuidadoso antes das atividades ao ar livre.',

  mobilidade:
    'São Gabriel é cortada pela BR-290, eixo da Rota do Mercosul que liga Porto Alegre à fronteira oeste, e também pela BR-158, importante ligação norte-sul do estado. O transporte urbano é feito por linhas de ônibus que atendem o perímetro consolidado, e a cidade conta com terminal rodoviário; o predomínio é do transporte rodoviário.',

  corridas: [
    {
      nome: 'Meia Maratona de São Gabriel',
      descricao:
        'Prova de rua organizada na cidade pela associação local de corredores, uma das principais do calendário esportivo gabrielense.',
    },
    {
      nome: 'Desafio das Coxilhas',
      descricao:
        'Competição que explora o relevo ondulado típico da Campanha gaúcha, atraindo corredores que buscam percursos com as coxilhas características do Pampa.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina a tradição gaúcha do Pampa, a forte presença de corredores de rua organizados em associação e o uso das praças e avenidas para caminhada e corrida. O perfil universitário e militar da cidade reforça a procura por atividade física regular.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior gaúcho.',

  destaquesFitness: [
    'Terra dos Marechais, no coração da Campanha gaúcha e do bioma Pampa.',
    'Inverno rigoroso, com geadas e frio intenso, que pede planejamento e aquecimento no treino.',
    'Cidade universitária (UNIPAMPA) e militar, com público ativo em busca de orientação.',
    'Tradição de corrida de rua, com provas que exploram as coxilhas da campanha.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade da Campanha gaúcha marcada pela tradição do Pampa e por verões quentes e invernos rigorosos, São Gabriel pede um treino que respeite as variações de clima e aproveite as praças e estradas planas da região. Um personal trainer ajuda a ajustar a rotina às estações, definir os melhores horários e manter a constância ao longo do ano.',

  vizinhas: ['bage-rs', 'santa-maria-rs'],

  fontes: [
    { nome: 'IBGE Cidades — São Gabriel', url: 'https://cidades.ibge.gov.br/brasil/rs/sao-gabriel/panorama' },
    { nome: 'Prefeitura de São Gabriel', url: 'https://www.saogabriel.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
