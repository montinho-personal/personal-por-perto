import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'campo-mourao-pr',
  nome: 'Campo Mourão',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'mourãoense',
  tipo: 'cidade',

  populacao: 99432,
  populacaoAno: 2022,
  idhm: 0.757,
  idhmClasse: 'alto',
  altitudeM: 630,

  resumoEconomico:
    'Principal cidade do Centro-Oeste do Paraná, Campo Mourão tem a economia ancorada no agronegócio e na agroindústria, com destaque para a Coamo, maior cooperativa agroindustrial da América Latina, sediada no município. Comércio, serviços, saúde e educação superior completam um polo regional que concentra a vida econômica da microrregião.',

  mercado:
    'O mercado fitness é o típico de cidade média do interior paranaense, com boa oferta de academias de musculação, estúdios de funcional e crossfit e personais atuando em academias e a domicílio. A presença de universidades e o perfil de polo regional sustentam uma demanda constante por treino orientado.',

  bairrosNobres: ['Centro', 'Jardim Tropical', 'Lar Paraná', 'Jardim Araucária'],
  bairrosPopulares: ['Vila Urupês', 'Jardim Copacabana', 'Cohab', 'Jardim Lar Paraná'],

  parques: [
    {
      nome: 'Parque Estadual do Lago Azul',
      descricao:
        'Unidade de conservação estadual no entorno do reservatório da Usina Mourão, com trilhas, bosque e circuitos para caminhada, corrida e ciclismo em meio à mata — o principal espaço natural para atividade física na região.',
    },
    {
      nome: 'Lago Azul e Usina Mourão',
      descricao:
        'O conjunto da represa e da usina, acessado pela BR-487, reúne ciclovia e áreas de lazer às margens do lago, muito procuradas por quem treina ao ar livre nos fins de semana.',
    },
    {
      nome: 'Praças e espaços públicos de lazer',
      descricao:
        'A cidade conta com praças e áreas públicas com equipamentos de ginástica e pistas de caminhada, que complementam a oferta de pontos para treino externo no perímetro urbano.',
    },
  ],
  ciclovias:
    'Campo Mourão tem ciclovias e rotas de cicloturismo, com destaque para o trecho às margens da Usina Mourão, no caminho do Lago Azul, ponto tradicional de pedal e caminhada no fim de semana.',

  clima:
    'O clima é subtropical úmido, típico do Centro-Oeste paranaense, com verões quentes e chuvosos e invernos amenos, sujeitos a quedas acentuadas de temperatura e geadas ocasionais.',
  climaTreino:
    'O treino ao ar livre é viável o ano todo. No verão úmido, as manhãs e o fim de tarde são os melhores horários para escapar do calor; no inverno, vale agasalhar bem nos dias de frente fria.',

  mobilidade:
    'Importante entroncamento rodoviário do interior, Campo Mourão é cortada pela BR-158 e pela BR-487, que concentram o fluxo de carga do agronegócio. O deslocamento urbano é predominantemente por carro e moto, com distâncias curtas no perímetro central.',

  corridas: [
    {
      nome: 'Prova Rústica São José',
      descricao:
        'Corrida de rua tradicional que leva o nome do padroeiro do município e reúne atletas da região e de fora do estado, um dos eventos mais antigos do calendário esportivo local.',
    },
    {
      nome: 'Corridas e caminhadas no Lago Azul',
      descricao:
        'Provas e eventos de caminhada e corrida que aproveitam os circuitos do entorno do Lago Azul e da Usina Mourão, cenário natural mais procurado pelos praticantes.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura corrida de rua, com provas tradicionais como a Rústica São José, ciclismo de fim de semana rumo ao Lago Azul e forte adesão à musculação e ao funcional nas academias. Programas municipais de atividade física ampliam o acesso em diversos pontos da cidade.',
  academias:
    'A oferta reúne academias de musculação, estúdios de funcional e crossfit e personais que atendem em academias e a domicílio, atendendo um público regional que vai de estudantes a trabalhadores do setor agroindustrial.',

  destaquesFitness: [
    'Parque Estadual do Lago Azul, com trilhas e circuitos para corrida, caminhada e ciclismo em meio à mata.',
    'Ciclovia às margens da Usina Mourão, no caminho do Lago Azul.',
    'Prova Rústica São José, corrida de rua tradicional que aquece a cena local.',
    'Polo regional com universidades e programas municipais de atividade física que sustentam a demanda por treino orientado.',
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
    'Polo agroindustrial do Centro-Oeste do Paraná, Campo Mourão combina a vida de cidade média com espaços naturais como o Lago Azul para quem quer treinar ao ar livre. Um personal trainer ajuda a transformar essa estrutura em resultado, com método e constância — seja na musculação, no funcional ou na preparação para as corridas da região.',

  vizinhas: ['maringa-pr', 'cascavel-pr', 'guarapuava-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Campo Mourão', url: 'https://cidades.ibge.gov.br/brasil/pr/campo-mourao/panorama' },
    { nome: 'Prefeitura de Campo Mourão', url: 'https://www.campomourao.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
