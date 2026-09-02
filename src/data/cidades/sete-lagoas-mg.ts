import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sete-lagoas-mg',
  nome: 'Sete Lagoas',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'setelagoano',
  tipo: 'cidade',

  populacao: 227360,
  populacaoAno: 2022,
  idhm: 0.760,
  idhmClasse: 'alto',
  altitudeM: 761,

  resumoEconomico:
    'Conhecida como a "cidade das sete lagoas", fica a cerca de 72 km de Belo Horizonte pela BR-040 e é um dos maiores polos industriais do interior mineiro. Tem forte base siderúrgica e metalúrgica (ferro-gusa), além de alimentos e bebidas — abriga uma das maiores fábricas da Ambev no país —, com os serviços respondendo por boa parte do PIB.',

  mercado:
    'Cidade de grande porte com rede de academias consolidada (redes e estabelecimentos locais) e uma comunidade ativa de corredores. As lagoas urbanas funcionam como espaços naturais de treino ao ar livre.',

  bairrosNobres: ['Eldorado', 'São Dimas', 'Progresso', 'Canaã'],
  bairrosPopulares: ['Pôr do Sol', 'Boa Vista', 'Santo Antônio', 'Nova Cidade'],

  parques: [
    {
      nome: 'Lagoa da Boa Vista',
      descricao:
        'Tem pista dupla de caminhada e corrida de cerca de 1,6 a 1,8 km, skatepark e área de bicicross — a principal raia urbana de treino.',
    },
    {
      nome: 'Lagoa Paulino (Lagoa Grande)',
      descricao:
        'Orla no centro da cidade, ponto de encontro para caminhadas, cercada de bares e restaurantes.',
    },
    {
      nome: 'Academia ao ar livre do bairro Pôr do Sol',
      descricao:
        'Equipamentos públicos de ginástica instalados pela Secretaria de Esportes, ampliando o acesso ao treino nos bairros.',
    },
  ],
  ciclovias:
    'Há vias de lazer junto às lagoas urbanas; a extensão oficial da malha cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude moderada, quente no verão e com estação seca no inverno.',
  climaTreino:
    'Nos meses quentes, vale priorizar o treino ao ar livre no início da manhã ou no fim de tarde, com boa hidratação.',

  mobilidade:
    'Sete Lagoas é cortada pela BR-040 (eixo Belo Horizonte–Brasília), sua principal ligação rodoviária, com acesso também pelas MG-238 e MG-424.',

  corridas: [
    {
      nome: 'Corrida Toca Raul',
      descricao:
        'Prova de rua local que reúne corredores da cidade e da região.',
    },
    {
      nome: 'Corrida Noturna Império',
      descricao:
        'Corrida noturna realizada na cidade, parte de um calendário esportivo em crescimento.',
    },
  ],
  culturaEsportiva:
    'O lazer está fortemente associado às lagoas urbanas (corrida, caminhada e ciclismo na orla), com uma cena crescente de corrida de rua e grupos de corredores ativos.',
  academias:
    'A oferta reúne redes e academias locais, complementada pelas lagoas urbanas e pelas academias ao ar livre dos bairros.',

  destaquesFitness: [
    'Lagoa da Boa Vista como principal raia urbana de corrida (pista demarcada).',
    'Orla da Lagoa Paulino para caminhada e treino funcional ao ar livre.',
    'Academias ao ar livre instaladas em bairros.',
    'Cidade de grande porte com público amplo e rede de academias instalada.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 150,
    mensalMin: 330,
    mensalMax: 900,
    onlineMin: 160,
    onlineMax: 420,
  },

  conclusao:
    'Polo industrial perto de BH e cidade das lagoas, Sete Lagoas tem ótimas raias urbanas para corrida e uma cena esportiva em alta. Um personal trainer ajuda a aproveitar a Lagoa da Boa Vista com método, ajustando os horários ao calor do verão.',

  vizinhas: ['belo-horizonte-mg', 'contagem-mg'],

  capaArte: {
    src: '/capas-cidade/sete-lagoas-mg.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em Sete Lagoas (MG) em arte com a Lagoa Paulino e a Serra de Santa Helena ao fundo, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Sete Lagoas: disciplina, constância e foco no centro de Minas Gerais.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Sete Lagoas', url: 'https://cidades.ibge.gov.br/brasil/mg/sete-lagoas/panorama' },
    { nome: 'Prefeitura de Sete Lagoas', url: 'https://www.setelagoas.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-01',
};
