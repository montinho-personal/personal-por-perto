import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'eldorado-sp',
  nome: 'Eldorado',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'eldoradense',
  tipo: 'cidade',

  populacao: 13069,
  populacaoAno: 2022,
  idhm: 0.691,
  idhmClasse: 'medio',
  altitudeM: 62,

  resumoEconomico:
    'A antiga Xiririca, no coração do Vale do Ribeira, guarda a maior caverna turística de São Paulo — a Caverna do Diabo, com 6,5 km de galerias — e algumas das comunidades quilombolas mais antigas do país, como Ivaporunduva, Sapatu e André Lopes. Estância turística às margens do Rio Ribeira de Iguape, vive da bananicultura, do turismo de natureza e da agricultura familiar quilombola.',

  mercado:
    'O mercado de treino é pequeno e concentrado no centro, com o perfil típico do Vale do Ribeira: monitores ambientais, condutores de turismo e trabalhadores rurais que precisam de perna, coluna e fôlego para o serviço — e um público crescente de visitantes que chega para cavernas, trilhas e cachoeiras.',

  bairrosNobres: ['Centro', 'Itapeúna', 'Braço', 'Barra do Batatal'],
  bairrosPopulares: ['Ivaporunduva', 'Sapatu', 'André Lopes', 'Nhunguara'],

  parques: [
    {
      nome: 'Parque Estadual Caverna do Diabo',
      descricao:
        'Mais de 40 mil hectares de mata atlântica; a caverna tem 6,5 km de extensão, com 700 m abertos à visita — um passeio de escadarias e salões que é treino de perna disfarçado.',
    },
    {
      nome: 'Trilha do Araçá e Mirante do Governador',
      descricao:
        'Trilhas curtas do parque: o Araçá leva a três cachoeiras com poço de banho; o mirante sobe 800 m até a vista panorâmica do Vale do Ribeira.',
    },
    {
      nome: 'Cachoeira do Meu Deus e Cachoeira do Sapatu',
      descricao:
        'Quedas d\'água clássicas do município — a do Meu Deus despenca 53 m de uma nascente ligada à Caverna do Diabo; a do Sapatu fica no território quilombola.',
    },
    {
      nome: 'Circuito Quilombola',
      descricao:
        'Roteiros de turismo de base comunitária em Ivaporunduva, Sapatu e André Lopes, com caminhadas, roças tradicionais e a igreja histórica à beira do Ribeira.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária urbana; as estradas do vale, incluindo a SP-165, são usadas por cicloturistas em rotas de baixo tráfego.',

  clima:
    'Subtropical úmido, com chuvas bem distribuídas e a umidade alta característica da mata atlântica do Vale do Ribeira.',
  climaTreino:
    'A umidade constante faz o esforço render suor mesmo em dias amenos; trilhas e cavernas pedem preparo de tornozelo, quadril e coluna para piso irregular, escadas e passagens baixas.',

  mobilidade:
    'A SP-165 corta o município ligando Jacupiranga a Iporanga pelo vale; a sede fica a cerca de 45 km de Registro, o polo regional de serviços. Deslocamentos para bairros rurais e quilombos se fazem por estradas de terra.',

  corridas: [
    {
      nome: 'Provas de trail run do Vale do Ribeira',
      descricao:
        'O calendário regional usa as trilhas de mata atlântica e as estradas rurais do vale, com percursos técnicos de forte desnível.',
    },
  ],
  culturaEsportiva:
    'Caminhar é ofício: monitores, condutores e quilombolas percorrem trilhas, roças e escadarias de caverna toda semana. Somam-se o futebol dos bairros rurais, o cicloturismo de estrada de terra e o fluxo de visitantes que chega para o ecoturismo.',
  academias:
    'A oferta formal é pequena e concentrada no centro; parte de quem treina sério combina espaços simples de musculação com acompanhamento online e o "treino natural" das trilhas.',

  destaquesFitness: [
    'Caverna do Diabo: 700 m de passarelas e escadarias que exigem perna e fôlego de verdade.',
    'Circuito de cachoeiras e mirantes com trilhas de todos os níveis.',
    'Turismo quilombola de base comunitária, com caminhadas guiadas por Ivaporunduva e Sapatu.',
    'Rotina de trabalho no ecoturismo que já é, por si, condicionamento físico.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 630,
    onlineMin: 130,
    onlineMax: 340,
  },

  conclusao:
    'Eldorado treina no terreno que a natureza deu: escadarias de caverna, trilhas de cachoeira e estradas de terra do Vale do Ribeira. Um personal trainer daqui constrói pernas, coluna e fôlego para o trabalho e para o passeio — do salão da Caverna do Diabo ao alto do Mirante do Governador.',

  vizinhas: ['iporanga-sp', 'registro-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Eldorado', url: 'https://cidades.ibge.gov.br/brasil/sp/eldorado/panorama' },
    { nome: 'Parque Estadual Caverna do Diabo', url: 'https://www.cavernadodiabo.com/' },
    { nome: 'Prefeitura de Eldorado', url: 'https://www.eldorado.sp.gov.br/' },
  ],
  atualizadoEm: '2026-08-13',
};
