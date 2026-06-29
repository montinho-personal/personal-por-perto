import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'castanhal-pa',
  nome: 'Castanhal',
  uf: 'PA',
  estado: 'Pará',
  estadoSlug: 'para',
  regiao: 'Norte',
  gentilico: 'castanhalense',
  tipo: 'cidade',

  populacao: 192262,
  populacaoAno: 2022,
  idhm: 0.673,
  idhmClasse: 'médio',
  altitudeM: 41,

  resumoEconomico:
    'Conhecida como "Cidade Modelo", Castanhal integra a Região Metropolitana de Belém (a cerca de 68 km da capital) e é o principal polo do nordeste paraense. Tem economia diversificada em comércio atacadista e varejista, agroindústria de frutas e educação superior, com localização logística estratégica.',

  mercado:
    'Cidade-polo de comércio e educação, com população jovem universitária, sustenta uma rede crescente de academias e estúdios e um circuito ativo de corridas de rua.',

  bairrosNobres: ['Centro', 'Estrela', 'Novo Estrela', 'Salles Jardim'],
  bairrosPopulares: ['Jaderlândia', 'Milagre', 'Cristo Redentor', 'Caiçara'],

  parques: [
    {
      nome: 'Parque das Águas',
      descricao:
        'Principal balneário da cidade, com piscinas naturais, parque infantil e estrutura esportiva.',
    },
    {
      nome: 'Praça do Cristo',
      descricao:
        'Uma das praças mais frequentadas, ponto de largada de corridas de rua.',
    },
    {
      nome: 'Praça do Estrela',
      descricao:
        'Espaço de lazer no bairro Estrela, usado para caminhada e atividade ao ar livre.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é equatorial amazônico, quente e úmido o ano todo, com chuvas abundantes no primeiro semestre.',
  climaTreino:
    'O calor e a umidade muito altos dificultam a termorregulação, pedindo treino cedo, em locais cobertos ou sombreados, com hidratação reforçada.',

  mobilidade:
    'Castanhal é cortada pela BR-316, principal ligação entre Belém e o interior, eixo que a consolida como ponto de distribuição.',

  corridas: [
    {
      nome: 'Corrida do Aniversário de Castanhal',
      descricao:
        'Prova comemorativa da fundação da cidade.',
    },
    {
      nome: 'Circuito de Corridas NC Sports',
      descricao:
        'Circuito local de corrida de rua, ao lado do Circuito Sesc — Etapa Castanhal.',
    },
  ],
  culturaEsportiva:
    'A cidade tem circuito de corrida de rua ativo e pulverizado (NC Sports, Sesc e encontros de corredores) e tradição esportiva ligada ao futebol, com as praças centrais como pontos de concentração.',
  academias:
    'A oferta reúne academias e estúdios, com público universitário (UFPA e UEPA), complementada pelo Parque das Águas e pelas praças centrais.',

  destaquesFitness: [
    'Efeito metrópole: integra a Região Metropolitana de Belém, com mercado ampliado.',
    'Polo universitário que alimenta um público fitness jovem.',
    'Circuito de corridas de rua diversificado e recorrente.',
    'Parque das Águas e praças centrais como espaços de atividade.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 135,
    mensalMin: 280,
    mensalMax: 760,
    onlineMin: 150,
    onlineMax: 390,
  },

  conclusao:
    'Cidade Modelo da Grande Belém, Castanhal une polo universitário e um circuito de corrida ativo. Um personal trainer ajuda a aproveitar o Parque das Águas e as praças centrais com método, ajustando o treino ao calor e à umidade amazônicos.',

  vizinhas: ['belem-pa', 'ananindeua-pa'],

  fontes: [
    { nome: 'IBGE Cidades — Castanhal', url: 'https://cidades.ibge.gov.br/brasil/pa/castanhal/panorama' },
    { nome: 'Prefeitura de Castanhal', url: 'https://www.castanhal.pa.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
