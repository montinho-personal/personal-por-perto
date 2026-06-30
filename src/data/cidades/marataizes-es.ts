import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'marataizes-es',
  nome: 'Marataízes',
  uf: 'ES',
  estado: 'Espírito Santo',
  estadoSlug: 'espirito-santo',
  regiao: 'Sudeste',
  gentilico: 'marataizense',
  tipo: 'cidade',

  populacao: 41929,
  populacaoAno: 2022,
  idhm: 0.685,
  idhmClasse: 'médio',
  altitudeM: 8,

  resumoEconomico:
    'No litoral sul do Espírito Santo, Marataízes é conhecida como a "Pérola do Sul Capixaba" e tem na economia um forte componente de veraneio, com população que se multiplica no verão. Somam-se a isso a pesca artesanal, a agricultura (com destaque para o abacaxi) e os royalties e serviços ligados à exploração de petróleo e gás na região, vizinha a Presidente Kennedy.',

  mercado:
    'A orla extensa, com cerca de 25 km de praias, e a sazonalidade de verão sustentam a procura por treino ao ar livre e academias, com a Praia Central e os calçadões funcionando como espaço natural para corrida e caminhada.',

  bairrosNobres: ['Centro', 'Cidade Nova', 'Miramar', 'Belvedere'],
  bairrosPopulares: ['Santa Rita', 'Esplanada', 'Nova Marataízes', 'Petrolândia'],

  parques: [
    {
      nome: 'Praia Central',
      descricao:
        'Principal cartão-postal da cidade, com calçadão, quiosques, bares e restaurantes de frutos do mar — ponto de encontro para caminhada e corrida à beira-mar.',
    },
    {
      nome: 'Praia de Cidade Nova',
      descricao:
        'Tem calçadão estreito e areias firmes e amareladas, propício para corrida e caminhada, com boa estrutura de quiosques.',
    },
    {
      nome: 'Falésias de Marataízes',
      descricao:
        'Monumento natural de tons avermelhados e alaranjados com cerca de 40 m de altura, as maiores do estado, com trechos de praia mais desertos ao sul para treino e caminhada.',
    },
  ],
  ciclovias:
    'A cidade tem calçadões na orla da Praia Central e de Cidade Nova usados para caminhada e corrida; a extensão da malha cicloviária não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente do litoral sul capixaba, com verões quentes e úmidos e influência da brisa marinha.',
  climaTreino:
    'O calor predominante favorece treinos no começo da manhã ou no fim de tarde, com atenção à hidratação e aproveitando a brisa do mar na orla.',

  mobilidade:
    'O acesso se dá pela Rodovia do Sol (ES-060), que corre junto ao litoral, com a BR-101 passando próxima e conectando a cidade a Cachoeiro de Itapemirim e ao restante do estado.',

  corridas: [
    {
      nome: 'Corrida de Rua de Marataízes',
      descricao:
        'Prova de rua promovida no calendário esportivo municipal, com percursos pela orla e pelas vias centrais da cidade.',
    },
    {
      nome: 'Circuito de corridas do verão',
      descricao:
        'Provas e eventos de corrida e caminhada concentrados na temporada de veraneio, aproveitando a Praia Central e a orla.',
    },
  ],
  culturaEsportiva:
    'A vida à beira-mar e a cultura de veraneio reforçam a prática de corrida, caminhada e esportes de praia ao longo da orla, com a pesca artesanal como traço identitário local.',
  academias:
    'A oferta reúne academias e estúdios no Centro e bairros próximos à orla, com a Praia Central e os calçadões servindo como academia a céu aberto.',

  destaquesFitness: [
    'Cerca de 25 km de praias, com a Praia Central como polo de treino outdoor.',
    'Calçadões da Praia Central e de Cidade Nova para corrida e caminhada.',
    'Falésias de Marataízes, monumento natural de até 40 m, com trechos de praia para caminhada.',
    'Sazonalidade de verão que aquece a procura por treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Conhecida como a "Pérola do Sul Capixaba", Marataízes une praias extensas, falésias e cultura de veraneio e pesca. Um personal trainer ajuda a aproveitar a orla e os calçadões com método, ajustando horários e hidratação ao calor do litoral sul do Espírito Santo.',

  vizinhas: ['cachoeiro-de-itapemirim-es', 'guarapari-es'],

  fontes: [
    { nome: 'IBGE Cidades — Marataízes', url: 'https://cidades.ibge.gov.br/brasil/es/marataizes/panorama' },
    { nome: 'Prefeitura de Marataízes', url: 'https://www.marataizes.es.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
