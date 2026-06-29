import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'rio-claro-sp',
  nome: 'Rio Claro',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'rio-clarense',
  tipo: 'cidade',

  populacao: 201418,
  populacaoAno: 2022,
  idhm: 0.803,
  idhmClasse: 'muito alto',
  altitudeM: 613,

  resumoEconomico:
    'Interior paulista conhecido como "Cidade Azul", Rio Claro tem economia liderada por serviços e indústria, com forte peso do polo cerâmico (que, junto a Santa Gertrudes, Limeira e Cordeirópolis, forma o maior polo cerâmico das Américas). Tem tradição ferroviária histórica e fica próxima de Limeira.',

  mercado:
    'Cidade universitária (com a Unesp) e de renda média/alta, Rio Claro tem público jovem e ativo, com rede de academias e lojas de suplementos que apoiam eventos de corrida.',

  bairrosNobres: ['Cidade Jardim', 'Jardim São Paulo', 'Jardim Conduta', 'Bela Vista'],
  bairrosPopulares: ['Cidade Nova', 'Vila Alemã', 'Vila Paulista', 'São Miguel'],

  parques: [
    {
      nome: 'Parque Lago Azul',
      descricao:
        'Cerca de 130 mil m² com pista para caminhadas, quadras esportivas e ampla área verde.',
    },
    {
      nome: 'Floresta Estadual Edmundo Navarro de Andrade (Horto Florestal)',
      descricao:
        'Cerca de 2.230 hectares com trilhas para corrida e caminhada, criada em 1909.',
    },
    {
      nome: 'Aero Clube',
      descricao:
        'Espaço usado para largadas de corridas de rua, como a Corrida Cidade Azul.',
    },
  ],
  ciclovias:
    'Há trechos de ciclovia e ciclofaixa na malha urbana; a extensão consolidada ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude, com média em torno de 20,3 °C e chuvas concentradas no verão.',
  climaTreino:
    'As condições amenas favorecem o treino ao ar livre a maior parte do ano; o verão exige cuidado com calor e chuva no fim de tarde.',

  mobilidade:
    'O principal eixo é a Rodovia Washington Luís (SP-310), de pista dupla, ligando à capital, São Carlos e Araraquara, com conexão fácil a Limeira e Piracicaba.',

  corridas: [
    {
      nome: 'Corrida Cidade Azul',
      descricao:
        'Prova de rua tradicional, com largada no Aero Clube.',
    },
    {
      nome: 'Circuito Bem-Estar Covabra — Etapa Rio Claro',
      descricao:
        'Circuito de corrida com apoio da prefeitura, ao lado de provas na Floresta Estadual.',
    },
  ],
  culturaEsportiva:
    'Rio Claro tem calendário ativo de corridas de rua e de mountain bike/trail (na Floresta Estadual e na Cidade Azul), com público engajado pela presença universitária.',
  academias:
    'A oferta reúne academias e estúdios, com público universitário da Unesp, complementada pelo Parque Lago Azul e pela Floresta Estadual.',

  destaquesFitness: [
    'Floresta Estadual como maior área natural para trail running e trilhas da região.',
    'Parque Lago Azul como hub urbano de caminhada e corrida.',
    'Público universitário (Unesp) que movimenta o mercado fitness.',
    'Calendário forte de corridas (Cidade Azul, Covabra).',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 170,
    mensalMin: 360,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Cidade Azul de IDHM muito alto, Rio Claro une polo cerâmico, presença universitária e uma das maiores florestas urbanas da região. Um personal trainer ajuda a aproveitar a Floresta Estadual e o Lago Azul com método, num clima de altitude favorável.',

  vizinhas: ['limeira-sp', 'piracicaba-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Rio Claro', url: 'https://cidades.ibge.gov.br/brasil/sp/rio-claro/panorama' },
    { nome: 'Prefeitura de Rio Claro', url: 'https://www.rioclaro.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
