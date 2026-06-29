import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'angra-dos-reis-rj',
  nome: 'Angra dos Reis',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'angrense',
  tipo: 'cidade',

  populacao: 167434,
  populacaoAno: 2022,
  idhm: 0.724,
  idhmClasse: 'alto',

  resumoEconomico:
    'Na Costa Verde fluminense, Angra dos Reis tem economia diversificada entre serviços, indústria e turismo de alto padrão. É a capital do turismo náutico (com a Ilha Grande e mais de 10 mil embarcações registradas), abriga o estaleiro BrasFELS (construção naval), o Terminal da Baía da Ilha Grande (TEBIG/Petrobras) e a Central Nuclear Almirante Álvaro Alberto (usinas Angra 1 e 2), em Itaorna.',

  mercado:
    'O público de turismo náutico de alto padrão e os condomínios de luxo, como o Frade, sustentam um nicho premium, complementado por uma rede de academias e por ampla oferta de equipamentos públicos de ginástica espalhados pelos bairros.',

  bairrosNobres: ['Frade', 'Praia do Anil', 'Bonfim', 'Centro'],
  bairrosPopulares: ['Japuíba', 'Parque Mambucaba', 'Jacuecanga', 'Camorim'],

  parques: [
    {
      nome: 'Praia do Anil',
      descricao:
        'Orla urbana que costuma sediar eventos esportivos da cidade, com faixa de areia e calçada para corrida e caminhada.',
    },
    {
      nome: 'Orla da Vila Histórica de Mambucaba',
      descricao:
        'Cerca de 1 km de orla movimentada no encontro do mar com o rio Mambucaba, com quiosques e área de caminhada.',
    },
    {
      nome: 'Academias ao ar livre municipais',
      descricao:
        'Rede de unidades distribuídas por bairros como Camorim, Jacuecanga, Japuíba, Frade e Centro, ampliando o acesso público ao treino.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada; bicicletas são transportadas gratuitamente nas barcas para a Ilha Grande. A extensão oficial de ciclovia ainda não é divulgada.',

  clima:
    'O clima é tropical úmido, quente e chuvoso, entre a Serra do Mar e o Atlântico, com alta umidade o ano todo.',
  climaTreino:
    'Dá para treinar ao ar livre o ano todo, mas o calor, a umidade e as chuvas frequentes pedem flexibilidade de horário; os meses mais secos, de março a junho, são os mais confortáveis.',

  mobilidade:
    'Angra estende-se por mais de 70 km da BR-101 (Rodovia Rio-Santos), entre a Serra do Mar e o oceano, com acesso rodoviário sinuoso e travessias marítimas (barcas) para as ilhas.',

  corridas: [
    {
      nome: 'Corrida de Rua de São José Operário',
      descricao:
        'Prova tradicional já em diversas edições, que incentiva a atividade física ao ar livre na cidade e na região.',
    },
    {
      nome: 'Provas e travessias náuticas',
      descricao:
        'Calendário esportivo que combina corridas de rua com eventos aquáticos na Baía da Ilha Grande.',
    },
  ],
  culturaEsportiva:
    'Angra tem forte vocação para esportes náuticos (vela, mergulho e stand-up paddle), ligada à Baía da Ilha Grande, e incentiva corrida de rua e academias ao ar livre pelo poder público.',
  academias:
    'A oferta combina um nicho premium ligado ao turismo náutico e aos condomínios de luxo com uma ampla rede de academias públicas ao ar livre espalhadas pelos bairros.',

  destaquesFitness: [
    'Nicho premium ligado ao turismo náutico e a condomínios de luxo (Frade).',
    'Rede de academias públicas ao ar livre distribuída pelos bairros.',
    'Esportes aquáticos (SUP, vela, mergulho) como diferencial de treino.',
    'Orlas do Anil e de Mambucaba para corrida e caminhada à beira-mar.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 175,
    mensalMin: 360,
    mensalMax: 980,
    onlineMin: 180,
    onlineMax: 440,
  },

  conclusao:
    'Capital do turismo náutico, Angra dos Reis une mar, montanha e uma rede de academias públicas ao ar livre. Um personal trainer ajuda a aproveitar as orlas do Anil e de Mambucaba e os esportes aquáticos com método, ajustando o treino ao calor úmido da Costa Verde.',

  vizinhas: ['rio-de-janeiro-rj', 'volta-redonda-rj', 'niteroi-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Angra dos Reis', url: 'https://cidades.ibge.gov.br/brasil/rj/angra-dos-reis/panorama' },
    { nome: 'Prefeitura de Angra dos Reis', url: 'https://portal.angra.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
