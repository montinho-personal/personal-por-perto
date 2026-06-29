import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itapecerica-da-serra-sp',
  nome: 'Itapecerica da Serra',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'itapecericano',
  tipo: 'cidade',

  populacao: 158522,
  populacaoAno: 2022,
  idhm: 0.742,
  idhmClasse: 'alto',
  altitudeM: 920,

  resumoEconomico:
    'Município da Região Metropolitana de São Paulo, na zona sudoeste e a cerca de 35 km da capital, Itapecerica da Serra fica em área de mananciais ligada à represa de Guarapiranga, o que impõe restrições ambientais à ocupação e preserva extensas áreas verdes de Mata Atlântica. A economia é apoiada em comércio, serviços e indústrias instaladas ao longo da Rodovia Régis Bittencourt (BR-116), e a cidade tem forte ligação cotidiana com o emprego na capital.',

  mercado:
    'O mercado de personal trainers se concentra em academias de bairro e estúdios no entorno do Centro e dos loteamentos residenciais, com demanda crescente por treino ao ar livre nas áreas verdes e junto aos mananciais. O perfil é predominantemente de público amplo, com nichos de maior poder aquisitivo em condomínios mais novos.',

  bairrosNobres: ['Centro', 'Parque Paraíso', 'Jardim Jacira', 'Lagoa'],
  bairrosPopulares: ['Jardim Branca Flor', 'Jardim Eliza', 'Olaria', 'Embu Mirim'],

  parques: [
    {
      nome: 'Parque Ecológico da Represinha',
      descricao:
        'Área de Mata Atlântica preservada com lagos, trilhas ecológicas, decks e passarela, usada para caminhada e contato com a natureza; foi alvo de projeto de revitalização da Prefeitura.',
    },
    {
      nome: 'Entorno da represa de Guarapiranga',
      descricao:
        'A cidade margeia a represa de Guarapiranga e seus mananciais (rios Embu-Guaçu e Embu-Mirim), com paisagem natural e áreas verdes que favorecem caminhada e atividade outdoor.',
    },
    {
      nome: 'Praças e áreas verdes urbanas',
      descricao:
        'Por ser área de proteção de mananciais, o município mantém grande cobertura vegetal e praças arborizadas no tecido urbano, aproveitadas para caminhada e treino ao ar livre.',
    },
  ],
  ciclovias:
    'A malha cicloviária urbana ainda é pouco consolidada; o uso da bicicleta se concentra em vias locais e no entorno das áreas verdes, sem rede contínua amplamente divulgada.',

  clima:
    'O clima é subtropical de altitude (cidade a cerca de 920 m), ameno e úmido, com forte presença de mata e mananciais que mantêm temperaturas mais frescas que na capital.',
  climaTreino:
    'O clima é agradável para o treino ao ar livre na maior parte do ano, com atenção às manhãs frias e úmidas de inverno e às chuvas frequentes do verão, típicas de região de mata e represa.',

  mobilidade:
    'A principal via é a Rodovia Régis Bittencourt (BR-116), que corta o município e o conecta a Taboão da Serra, à capital e ao sul do país; o deslocamento depende muito do automóvel e de linhas de ônibus metropolitanas, com trechos sujeitos a congestionamento.',

  corridas: [
    {
      nome: 'Corrida e Caminhada Ecológica de Itapecerica da Serra',
      descricao:
        'Evento de corrida e caminhada com apelo ambiental, aproveitando as áreas verdes e os mananciais da cidade.',
    },
    {
      nome: 'Rodeio de Itapecerica da Serra',
      descricao:
        'Tradicional evento de cultura rural e sertaneja do município; embora não seja prova de corrida, movimenta o calendário esportivo e de lazer local.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso das áreas verdes e mananciais para caminhada e corrida com tradições rurais (como o rodeio) e o futebol de bairro, num município que valoriza o contato com a natureza.',
  academias:
    'A oferta é formada por academias de bairro e estúdios distribuídos pelo Centro e pelos loteamentos residenciais, complementada pelas áreas verdes e pelo entorno da represa para o treino ao ar livre.',

  destaquesFitness: [
    'Áreas verdes de Mata Atlântica e mananciais da Guarapiranga como cenário para treino ao ar livre.',
    'Parque Ecológico da Represinha com trilhas, lagos e decks para caminhada.',
    'Clima ameno de altitude (cerca de 920 m), favorável à atividade outdoor.',
    'Eventos como a corrida e caminhada ecológica reforçando a cultura de bem-estar local.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 760,
    onlineMin: 125,
    onlineMax: 380,
  },

  conclusao:
    'Cercada por mananciais e Mata Atlântica na zona sudoeste da Grande SP, Itapecerica da Serra une clima ameno de altitude, áreas verdes e proximidade com a capital. Para o personal trainer, é um mercado de público amplo com forte vocação para o treino ao ar livre, do Parque da Represinha ao entorno da Guarapiranga.',

  vizinhas: ['taboao-da-serra-sp', 'cotia-sp', 'sao-paulo-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Itapecerica da Serra', url: 'https://cidades.ibge.gov.br/brasil/sp/itapecerica-da-serra/panorama' },
    { nome: 'Prefeitura de Itapecerica da Serra', url: 'https://www.itapecerica.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
