import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'olimpia-sp',
  nome: 'Olímpia',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'olimpiense',
  tipo: 'cidade',

  populacao: 55075,
  populacaoAno: 2022,
  idhm: 0.766,
  idhmClasse: 'alto',
  altitudeM: 506,

  resumoEconomico:
    'No noroeste paulista, Olímpia é uma das principais estâncias turísticas do interior de São Paulo, conhecida pelos parques aquáticos de águas termais — com destaque para o Thermas dos Laranjais, um dos parques aquáticos mais visitados do mundo — e por uma ampla rede de hotéis e resorts. A economia combina o turismo de águas termais com o agronegócio tradicional da região, marcado pela cana-de-açúcar, pela laranja e pelo café, e a cidade é reconhecida nacionalmente como Capital do Folclore.',

  mercado:
    'A vocação turística movimenta o ano inteiro a hotelaria, a gastronomia e os serviços, sustentando demanda por academias e personal trainers tanto entre moradores quanto em estruturas de bem-estar de resorts. Cidade média com IDHM alto, Olímpia reúne oferta de academias nos bairros residenciais e procura crescente por treino ao ar livre.',

  bairrosNobres: ['Jardim das Acácias', 'Jardim Itália', 'Residencial Figueira', 'Centro'],
  bairrosPopulares: ['São José', 'Jardim Santa Terezinha', 'Nova Olímpia', 'Jardim América'],

  parques: [
    {
      nome: 'Bosque Municipal',
      descricao:
        'Área verde no perímetro urbano usada para caminhada e lazer, com sombra de árvores nativas que ameniza o calor da região.',
    },
    {
      nome: 'Bosque Urbano do São José',
      descricao:
        'Novo bosque às margens do córrego Olhos d’Água, com pista de caminhada e ciclismo, academia ao ar livre, playground e paisagismo.',
    },
    {
      nome: 'Recinto de Exposições João Batista de Lima Figueiredo',
      descricao:
        'Espaço amplo que sedia a Festa do Folclore e eventos, com áreas abertas aproveitadas para atividades e caminhada.',
    },
  ],
  ciclovias:
    'O novo Bosque Urbano do São José prevê pista compartilhada de caminhada e ciclismo; a extensão total da malha cicloviária urbana não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical com estação seca (tipo Aw), característico do noroeste paulista, com verões quentes e chuvosos, frequentemente acima de 32 °C, e invernos secos e amenos.',
  climaTreino:
    'O calor intenso da maior parte do ano pede treino ao ar livre nas primeiras horas da manhã ou no fim da tarde; o inverno seco favorece o desempenho, mas exige atenção redobrada à hidratação.',

  mobilidade:
    'Olímpia é cortada pela rodovia Assis Chateaubriand (SP-425), que liga Barretos a São José do Rio Preto, e tem acesso pela Armando de Salles Oliveira (SP-322), conectando-a ao norte paulista e à capital, a cerca de 440 km.',

  corridas: [
    {
      nome: 'Corrida do Folclore',
      descricao:
        'Prova de rua integrada à programação esportiva da cidade, com percurso pelas vias urbanas e distâncias para diferentes níveis.',
    },
    {
      nome: 'Circuitos de corrida de rua locais',
      descricao:
        'A cidade recebe provas pontuais de corrida de rua ao longo do ano, com largadas em pontos centrais e percursos asfaltados.',
    },
  ],
  culturaEsportiva:
    'A cultura local gira em torno do folclore e do turismo, com a Festa do Folclore como grande evento da cidade; no esporte, há cena de corrida de rua e crescente uso dos bosques urbanos para caminhada e atividades ao ar livre.',
  academias:
    'A oferta reúne academias nos bairros residenciais e no Centro, complementada pelos bosques urbanos e por estruturas de bem-estar ligadas à forte rede hoteleira da estância turística.',

  destaquesFitness: [
    'Polo de turismo de águas termais (Thermas dos Laranjais, hotéis e resorts) que aquece o setor de bem-estar.',
    'Bosques urbanos como espaços de caminhada e treino ao ar livre, com academia ao ar livre no São José.',
    'IDHM alto e perfil de estância turística que sustentam o mercado fitness.',
    'Clima quente do noroeste paulista, que pede ajuste de horários e atenção à hidratação.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 270,
    mensalMax: 720,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Capital do Folclore e referência em turismo de águas termais, Olímpia combina a energia de uma estância turística com o calor do noroeste paulista. Um personal trainer ajuda a aproveitar os bosques urbanos com método, ajustando os horários ao clima quente e mantendo a constância ao longo do ano.',

  vizinhas: ['barretos-sp', 'sao-jose-do-rio-preto-sp', 'bebedouro-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Olímpia', url: 'https://cidades.ibge.gov.br/brasil/sp/olimpia/panorama' },
    { nome: 'Prefeitura da Estância Turística de Olímpia', url: 'https://www.olimpia.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
