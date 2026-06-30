import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'palmares-pe',
  nome: 'Palmares',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'palmarense',
  tipo: 'cidade',

  populacao: 54584,
  populacaoAno: 2022,
  idhm: 0.622,
  idhmClasse: 'médio',
  altitudeM: 125,

  resumoEconomico:
    'Conhecida como a "Capital da Mata Sul" — e também por apelidos como "Atenas Pernambucana" e "Terra dos Poetas" —, Palmares é um dos principais polos comerciais e de serviços da Zona da Mata Sul de Pernambuco. A economia historicamente se apoia no setor sucroalcooleiro (cana-de-açúcar e agroindústria do açúcar) e em um comércio varejista regional que atende municípios vizinhos. A cidade é cortada pelo rio Una e marcada pela memória das grandes enchentes de 2010, que motivaram obras como a barragem de Serro Azul.',

  mercado:
    'O mercado fitness acompanha o porte de uma cidade média do interior pernambucano, concentrado no Centro e nos bairros de maior movimento comercial. A oferta combina academias locais de musculação e ginástica com estúdios de funcional e treino personalizado, atendendo um público regional que extrapola os limites do município.',

  bairrosNobres: ['Centro', 'Santa Luzia', 'Bartolomeu de Gusmão', 'Jardim Panorama'],
  bairrosPopulares: ['Cohab', 'Borralha', 'Santo Antônio', 'Bela Vista'],

  parques: [
    {
      nome: 'Praça Pátio Pernambuco',
      descricao:
        'Espaço público requalificado de convivência e lazer no Centro, usado para caminhada, encontros e atividades ao ar livre.',
    },
    {
      nome: 'Margens do rio Una',
      descricao:
        'O rio que corta a cidade organiza vias e espaços de circulação no Centro, opção para caminhadas urbanas — com a ressalva do histórico de cheias na bacia.',
    },
    {
      nome: 'Praças e largos do Centro',
      descricao:
        'O núcleo histórico concentra praças e logradouros arborizados que servem de ponto de encontro para caminhada e lazer no fim de tarde.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada, como é comum em cidades médias do interior; o uso da bicicleta se dá sobretudo nas vias urbanas e nas ligações com bairros e distritos.',

  clima:
    'O clima é tropical quente e úmido, típico da Zona da Mata Sul de Pernambuco, com temperaturas elevadas ao longo do ano e estação chuvosa concentrada no outono e inverno (outono-inverno costeiro do Nordeste).',
  climaTreino:
    'O calor e a umidade altos pedem hidratação reforçada e preferência pelo início da manhã e pelo fim da tarde para o treino ao ar livre, evitando o sol forte do meio-dia. No período chuvoso, alternativas cobertas ganham importância.',

  mobilidade:
    'A cidade é um entroncamento da Mata Sul, servida pela BR-101, principal eixo que liga Palmares ao Recife (a cerca de 120 km ao norte) e ao litoral sul do estado e a Alagoas. Não há metrô (o Metrô do Recife atende apenas a região metropolitana da capital); os deslocamentos se dão por ônibus, vans intermunicipais e carro.',

  corridas: [
    {
      nome: 'Corridas e caminhadas do calendário municipal',
      descricao:
        'Provas e caminhadas associadas a datas cívicas e festivas da cidade, em geral com percursos pelo Centro e vias principais.',
    },
    {
      nome: 'Eventos no período junino',
      descricao:
        'O São João e as festividades juninas movimentam a Mata Sul e costumam abrigar atividades esportivas e caminhadas no calendário da estação.',
    },
  ],
  culturaEsportiva:
    'Como referência regional da Mata Sul, Palmares concentra a vida esportiva e de lazer de vários municípios vizinhos, com o futebol amador e as caminhadas em praças entre as práticas mais populares, num cenário de clima quente que favorece o treino nas primeiras e últimas horas do dia.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e ginástica e por estúdios de funcional e treino personalizado, distribuídos pelo Centro e pelos bairros de maior movimento.',

  destaquesFitness: [
    'Capital da Mata Sul: polo comercial e de serviços que concentra o público fitness regional.',
    'Clima quente e úmido — manhã e fim de tarde são as melhores janelas para treino ao ar livre.',
    'Centro e Praça Pátio Pernambuco como pontos de caminhada e atividade urbana.',
    'Acesso pela BR-101, eixo que liga a cidade ao Recife e ao litoral sul.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Capital da Mata Sul de Pernambuco, Palmares reúne um comércio regional aquecido e uma vida urbana concentrada no Centro e nas margens do rio Una. Em uma cidade de clima quente e úmido, um personal trainer ajuda a montar uma rotina segura e eficiente, respeitando o calor e aproveitando as melhores janelas do dia para treinar.',

  vizinhas: ['caruaru-pe', 'garanhuns-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Palmares', url: 'https://cidades.ibge.gov.br/brasil/pe/palmares/panorama' },
    { nome: 'Prefeitura de Palmares', url: 'https://palmares.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
