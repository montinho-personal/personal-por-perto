import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'gaspar-sc',
  nome: 'Gaspar',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'gasparense',
  tipo: 'cidade',

  populacao: 72570,
  populacaoAno: 2022,
  idhm: 0.765,
  idhmClasse: 'alto',
  altitudeM: 18,

  resumoEconomico:
    'Às margens do rio Itajaí-Açu, no Médio Vale do Itajaí, Gaspar é vizinha de Blumenau e forma com ela uma área conurbada. De colonização alemã, italiana e açoriana, mantém forte vocação têxtil e industrial, com confecções, malharias e indústrias que aproveitam a logística da BR-470. Cidade em crescimento acelerado, ganhou projeção também pelo turismo dos seus parques aquáticos.',

  mercado:
    'A oferta de academias acompanha o crescimento da cidade e a proximidade com Blumenau, com unidades de redes e academias de bairro, além de estúdios menores. O mercado é puxado pela rotina industrial e pela procura por treino com método em uma cidade que se espalha entre o centro ribeirinho e os bairros mais altos.',

  bairrosNobres: ['Centro', 'Bela Vista', 'Sete de Setembro', 'Coloninha'],
  bairrosPopulares: ['Margem Esquerda', 'Gasparinho', 'Poço Grande', 'Figueira'],

  parques: [
    {
      nome: 'Parque Aquático Cascanéia',
      descricao:
        'No bairro Belchior, é um dos maiores parques aquáticos de Santa Catarina, com mais de 100 mil m² em meio à natureza — referência de lazer da região, embora voltado ao turismo, não ao treino diário.',
    },
    {
      nome: 'Orla e margens do rio Itajaí-Açu',
      descricao:
        'O rio corta o centro e vários bairros; suas margens e ruas planas próximas são usadas para caminhada e corrida no dia a dia.',
    },
    {
      nome: 'Praças e academias ao ar livre',
      descricao:
        'Praças do Centro e dos bairros contam com equipamentos de ginástica ao ar livre, alternativa gratuita para treino funcional e alongamento.',
    },
  ],
  ciclovias:
    'A cidade tem trechos cicláveis ao longo de avenidas e da ligação com Blumenau, ainda em expansão; o relevo plano junto ao rio favorece o pedal no dia a dia.',

  clima:
    'O clima é subtropical úmido, típico do Vale do Itajaí, com chuvas bem distribuídas e verões quentes e úmidos. A cidade, situada em baixa altitude junto ao rio Itajaí-Açu, tem histórico de enchentes em períodos muito chuvosos.',
  climaTreino:
    'Treinar ao ar livre é confortável boa parte do ano, com a ressalva do calor úmido no verão, quando vale priorizar o início da manhã ou o fim da tarde. Em épocas de chuva intensa, é importante acompanhar os alertas da Defesa Civil, pois áreas baixas e ribeirinhas podem ser afetadas — um plano B em academia ajuda na constância.',

  mobilidade:
    'O principal eixo é a BR-470, que liga Gaspar a Blumenau e ao litoral (Itajaí e Navegantes) e concentra boa parte da indústria e do comércio. A conurbação com Blumenau faz parte do deslocamento diário ser intermunicipal, e o transporte coletivo conecta os bairros ao centro e à cidade vizinha.',

  corridas: [
    {
      nome: 'Gaspar Ultra Trail Rota das Águas',
      descricao:
        'Prova de trail running com percursos longos pela natureza da região, explorando a paisagem do Vale e a "Rota das Águas" — um chamariz para corredores de trilha.',
    },
    {
      nome: 'Corrida Amizade',
      descricao:
        'Prova de rua de 5 km realizada na cidade, com perfil comunitário e participação aberta — exemplo da cena local de corrida em crescimento.',
    },
  ],
  culturaEsportiva:
    'Gaspar reúne a tradição esportiva do Vale do Itajaí — com forte presença de corrida de rua e trail —, herança dos clubes de origem alemã e italiana e a vida ativa puxada também pela proximidade de Blumenau.',
  academias:
    'A oferta inclui academias de rede e de bairro e estúdios menores, complementadas pelas praças com academia ao ar livre e pelas margens planas do rio para caminhada e corrida.',

  destaquesFitness: [
    'Margens planas do rio Itajaí-Açu e ruas do centro boas para caminhada e corrida.',
    'Cena de corrida e trail em crescimento (Gaspar Ultra Trail Rota das Águas, Corrida Amizade).',
    'Praças com academia ao ar livre como alternativa gratuita de treino.',
    'Proximidade com Blumenau amplia o acesso a academias e eventos esportivos.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 760,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade de alto IDHM, vocação industrial e crescimento acelerado no Vale do Itajaí, Gaspar combina o ritmo da indústria têxtil com a vida ao ar livre às margens do rio. Um personal trainer ajuda a treinar com método e constância, levando em conta o clima úmido, o histórico de enchentes e a rotina de quem vive na conurbação com Blumenau.',

  vizinhas: ['blumenau-sc', 'brusque-sc', 'itajai-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Gaspar', url: 'https://cidades.ibge.gov.br/brasil/sc/gaspar/panorama' },
    { nome: 'Prefeitura de Gaspar', url: 'https://www.gaspar.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
