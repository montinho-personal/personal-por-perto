import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'uniao-dos-palmares-al',
  nome: 'União dos Palmares',
  uf: 'AL',
  estado: 'Alagoas',
  estadoSlug: 'alagoas',
  regiao: 'Nordeste',
  gentilico: 'palmarino',
  tipo: 'cidade',

  populacao: 59280,
  populacaoAno: 2022,
  idhm: 0.593,
  idhmClasse: 'baixo',
  altitudeM: 135,

  resumoEconomico:
    'Principal cidade da microrregião Serrana dos Quilombos, na Zona da Mata alagoana, União dos Palmares tem economia tradicionalmente ligada à cana-de-açúcar e à agroindústria sucroalcooleira, complementada por comércio, serviços públicos e agropecuária. É conhecida como a Terra de Zumbi dos Palmares, marca histórica que sustenta um turismo cultural ligado à Serra da Barriga.',

  mercado:
    'Cidade média do interior nordestino, reúne uma oferta enxuta de academias e estúdios concentrada na área central, que atende moradores da cidade e do entorno serrano em um mercado fitness ainda em formação.',

  bairrosNobres: ['Centro', 'Jardim Esperança', 'Aldeia'],
  bairrosPopulares: ['Floresta', 'Várzea', 'Bom Jesus', 'Santa Cruz'],

  parques: [
    {
      nome: 'Serra da Barriga',
      descricao:
        'Sítio histórico do antigo Quilombo dos Palmares, liderado por Zumbi, abriga o Parque Memorial Quilombo dos Palmares, com trilhas em mata atlântica e mirantes — espaço de caminhada e contato com a natureza no alto da serra.',
    },
    {
      nome: 'Orla do Rio Mundaú',
      descricao:
        'Beira do rio que corta a cidade, usada como referência de passeio e caminhada na área urbana.',
    },
  ],
  ciclovias:
    'A cidade não dispõe de malha cicloviária estruturada divulgada em fonte oficial; os deslocamentos de bicicleta acontecem majoritariamente pelas vias urbanas.',

  clima:
    'O clima é tropical quente e úmido da Zona da Mata alagoana, com temperaturas médias entre cerca de 25 °C e 28 °C ao longo do ano e período chuvoso concentrado no outono e inverno, quando o Rio Mundaú costuma subir.',
  climaTreino:
    'O calor e a umidade elevados pedem treinos no início da manhã ou no fim de tarde, com hidratação reforçada; na estação chuvosa convém prever alternativas cobertas para os dias de chuva intensa.',

  mobilidade:
    'União dos Palmares é cortada pela BR-104, eixo que a liga a Maceió (cerca de 75 km) e à divisa com Pernambuco, funcionando como principal acesso rodoviário da Zona da Mata serrana.',

  corridas: [
    {
      nome: 'Corridas de rua locais',
      descricao:
        'A cidade recebe provas de rua e caminhadas pontuais no calendário esportivo regional, divulgadas em plataformas de eventos e organizadas em datas comemorativas.',
    },
    {
      nome: 'Trilhas na Serra da Barriga',
      descricao:
        'As trilhas em mata atlântica do Parque Memorial Quilombo dos Palmares, no alto da serra, atraem praticantes de caminhada e trekking que unem atividade física a turismo histórico.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o futebol de várzea, tradicional no interior, com caminhadas e trilhas na Serra da Barriga e provas de rua pontuais, em um cenário em que o esporte se mistura à forte identidade histórica e cultural palmarina.',
  academias:
    'A oferta reúne academias e estúdios concentrados na área central, complementada pelos espaços ao ar livre como a orla do Rio Mundaú e as trilhas da Serra da Barriga.',

  destaquesFitness: [
    'Serra da Barriga como cenário único para caminhada e trilha em meio à história do Quilombo dos Palmares.',
    'Clima quente e úmido da Zona da Mata, que orienta treinos para os períodos mais frescos do dia.',
    'Orla do Rio Mundaú como referência de caminhada na área urbana.',
    'Mercado fitness em formação, concentrado no Centro e com espaço para crescimento.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Terra de Zumbi dos Palmares, União dos Palmares une história quilombola, a Serra da Barriga e o clima quente e úmido da Zona da Mata em um cenário de treino diferente. Um personal trainer ajuda a aproveitar esse ambiente com método, ajustando horários e hidratação ao calor e explorando trilhas e a orla do Mundaú com segurança.',

  vizinhas: ['maceio-al', 'arapiraca-al', 'rio-largo-al'],

  fontes: [
    { nome: 'IBGE Cidades — União dos Palmares', url: 'https://cidades.ibge.gov.br/brasil/al/uniao-dos-palmares/panorama' },
    { nome: 'Prefeitura de União dos Palmares', url: 'https://uniaodospalmares.al.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
