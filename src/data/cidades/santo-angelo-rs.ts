import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santo-angelo-rs',
  nome: 'Santo Ângelo',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'santo-angelense',
  tipo: 'cidade',

  populacao: 76917,
  populacaoAno: 2022,
  idhm: 0.772,
  idhmClasse: 'alto',
  altitudeM: 286,

  resumoEconomico:
    'Considerada a capital das Missões, Santo Ângelo é o município mais populoso da região noroeste do Rio Grande do Sul ligada às antigas reduções jesuítico-guaranis. Sua economia combina comércio e serviços com forte base agropecuária e agroindustrial (soja, trigo, milho e leite), apoiada por cooperativas. A cidade é polo regional de saúde e educação, sede da URI — Universidade Regional Integrada do Alto Uruguai e das Missões.',

  mercado:
    'Como polo regional de uma área agrícola próspera, Santo Ângelo concentra academias e estúdios que atendem a cidade e municípios vizinhos. A presença da URI e o perfil de cidade média gaúcha sustentam uma demanda constante por acompanhamento personalizado, com personal trainers atuando em academias, em estúdios e no atendimento domiciliar.',

  bairrosNobres: ['Centro', 'Pippi', 'Santa Fé', 'Hospital'],
  bairrosPopulares: ['Dytz', 'Atafona', 'Cidade Alta', 'Operário'],

  parques: [
    {
      nome: 'Praça Pinheiro Machado',
      descricao:
        'Praça central diante da Catedral Angelopolitana, é o principal espaço público de convívio e caminhada no coração da cidade, palco de eventos ao ar livre.',
    },
    {
      nome: 'Campus da URI',
      descricao:
        'O campus da Universidade Regional Integrada oferece áreas abertas e estrutura esportiva usadas por estudantes e pela comunidade.',
    },
    {
      nome: 'Sítio Arqueológico de São Miguel das Missões (proximidades)',
      descricao:
        'A poucos quilômetros, as ruínas de São Miguel Arcanjo — Patrimônio Mundial da UNESCO — atraem visitantes e caminhadas pela região das Missões.',
    },
  ],
  ciclovias:
    'A extensão da rede cicloviária urbana não é divulgada em fonte oficial; o relevo suave do centro favorece deslocamentos a pé e de bicicleta.',

  clima:
    'O clima é subtropical do noroeste gaúcho, com verões quentes e invernos frios marcados por geadas e mínimas em torno de 8 °C em julho.',
  climaTreino:
    'O frio e as geadas do inverno favorecem o treino indoor, enquanto primavera e outono trazem ótimas condições ao ar livre. Um personal ajuda a manter a constância ajustando o treino às variações de temperatura ao longo do ano.',

  mobilidade:
    'Importante entroncamento do noroeste do estado, Santo Ângelo é servida pela BR-285 e pela RS-218, com aeroporto regional. A cidade não conta com sistema de trens ou metrô urbano, e os deslocamentos se dão por carro, ônibus e bicicleta.',

  corridas: [
    {
      nome: 'Circuito Noroeste Missões de Corrida de Rua',
      descricao:
        'Etapas do circuito regional passam por Santo Ângelo, com provas de 2 km e 5 km que reúnem corredores das Missões.',
    },
    {
      nome: 'Rústica da Terra da Erva-Mate',
      descricao:
        'Prova de rua realizada na cidade, integrando o calendário de corridas da região noroeste.',
    },
  ],
  culturaEsportiva:
    'Santo Ângelo tem uma cena de corrida de rua ativa, alimentada por circuitos regionais que percorrem os municípios das Missões, além da prática de caminhada nos espaços públicos do centro e no campus da URI.',
  academias:
    'A oferta reúne academias e estúdios que atendem a cidade e a região, com a Praça Pinheiro Machado e o campus da URI como principais espaços para atividades ao ar livre.',

  destaquesFitness: [
    'Capital das Missões: polo regional com academias que atendem toda a microrregião.',
    'Praça Pinheiro Machado: espaço central de caminhada diante da Catedral Angelopolitana.',
    'Campus da URI com áreas abertas e estrutura esportiva.',
    'Circuitos regionais de corrida de rua passando pela cidade.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Capital das Missões e maior cidade do noroeste gaúcho ligado às reduções, Santo Ângelo une vida universitária, força agroindustrial e uma rica herança histórica. Com inverno frio e estações bem definidas, um personal trainer ajuda o morador a treinar com constância o ano todo, dentro ou ao ar livre.',

  vizinhas: ['ijui-rs', 'santa-maria-rs', 'passo-fundo-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Santo Ângelo', url: 'https://cidades.ibge.gov.br/brasil/rs/santo-angelo/panorama' },
    { nome: 'Prefeitura de Santo Ângelo', url: 'https://www.santoangelo.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
