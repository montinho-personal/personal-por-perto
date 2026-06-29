import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'maracanau-ce',
  nome: 'Maracanaú',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'maracanauense',
  tipo: 'cidade',

  populacao: 234392,
  populacaoAno: 2022,
  idhm: 0.686,
  idhmClasse: 'médio',

  resumoEconomico:
    'Integrante da Região Metropolitana de Fortaleza, Maracanaú é um dos maiores polos industriais do Ceará, com um extenso distrito industrial. A economia é dominada por serviços e indústria, com comércio forte, em uma cidade densamente urbanizada e conurbada à capital.',

  mercado:
    'O mercado fitness está em expansão, com redes consolidadas concentradas no Centro e no eixo da Av. Carlos Jereissati, e demanda puxada pela densidade urbana e pela população industrial.',

  bairrosNobres: ['Pajuçara', 'Jereissati', 'Centro', 'Parque Tropical'],
  bairrosPopulares: ['Acaracuzinho', 'Alto Alegre', 'Boa Esperança', 'Cidade Nova'],

  parques: [
    {
      nome: 'Lagoa do Mingau',
      descricao:
        'No distrito industrial, tem circuito de caminhada e corrida ao redor da lagoa, muito usado para treino.',
    },
    {
      nome: 'Parque de Eventos Narciso Pessoa de Araújo',
      descricao:
        'Cerca de 80 mil m² de espaço público amplo para atividades ao ar livre.',
    },
    {
      nome: 'Avenidas requalificadas',
      descricao:
        'Vias como a Av. Senador Virgílio Távora ganharam novas calçadas e iluminação, usadas para caminhada e corrida.',
    },
  ],
  ciclovias:
    'Há ciclovia no entorno do Parque do Cocó, na divisa com Fortaleza; a rede própria de Maracanaú ainda não tem extensão divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente e semiúmido, quente o ano todo, com chuvas concentradas no primeiro semestre.',
  climaTreino:
    'O calor intenso favorece os horários de menor radiação (manhã cedo e fim de tarde), com hidratação.',

  mobilidade:
    'Maracanaú é servida pela BR-020 e pela CE-060, próximo à BR-116, em conurbação com Fortaleza e cidades vizinhas da região metropolitana.',

  corridas: [
    {
      nome: 'Circuito de Corrida de Rua de Maracanaú',
      descricao:
        'Provas por etapas, com largada na Av. Senador Virgílio Távora.',
    },
    {
      nome: 'Corrida do Município',
      descricao:
        'Prova oficial da prefeitura em alusão à emancipação da cidade.',
    },
  ],
  culturaEsportiva:
    'A cidade tem calendário ativo de corridas de rua promovidas pelo poder público, com tradição esportiva ligada ao complexo do Conjunto Jereissati e aos equipamentos públicos da região metropolitana.',
  academias:
    'A oferta reúne redes e estúdios concentrados no Centro e no eixo da Av. Carlos Jereissati, complementada pela Lagoa do Mingau e pelas avenidas requalificadas.',

  destaquesFitness: [
    'Lagoa do Mingau como circuito natural de corrida no distrito industrial.',
    'Avenidas requalificadas com calçadas e iluminação para o treino urbano.',
    'Circuito de corrida de rua próprio, que sustenta a comunidade de corredores.',
    'Calor forte o ano todo, que pede atenção a horário e hidratação.',
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
    'Polo industrial da Grande Fortaleza, Maracanaú tem na Lagoa do Mingau e nas avenidas requalificadas seus espaços de treino. Um personal trainer ajuda a aproveitá-los com método, ajustando horários e hidratação ao calor do ano todo.',

  vizinhas: ['fortaleza-ce', 'caucaia-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Maracanaú', url: 'https://cidades.ibge.gov.br/brasil/ce/maracanau/panorama' },
    { nome: 'Prefeitura de Maracanaú', url: 'https://www.maracanau.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
