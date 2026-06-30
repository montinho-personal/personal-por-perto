import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santo-antonio-de-padua-rj',
  nome: 'Santo Antônio de Pádua',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'paduano',
  tipo: 'cidade',

  populacao: 41325,
  populacaoAno: 2022,
  idhm: 0.718,
  idhmClasse: 'alto',
  altitudeM: 86,

  resumoEconomico:
    'Cidade do Noroeste Fluminense, às margens do rio Pomba, Santo Antônio de Pádua é o principal polo de extração e beneficiamento de pedras decorativas do estado, com a chamada "pedra madeira" (ou paduana) reconhecida por indicação geográfica. A economia combina o setor de rochas ornamentais, a exploração de águas minerais e termais de propriedades medicinais e um comércio de alcance regional que atende municípios vizinhos do interior fluminense e da divisa com Minas Gerais.',

  mercado:
    'O mercado de personal trainers em Pádua é o de uma cidade média do interior fluminense: academias e estúdios concentrados no Centro, atendimento domiciliar e forte uso de espaços públicos para treino ao ar livre. O papel da cidade como polo de comércio e serviços da microrregião amplia o público que circula e treina por ali.',

  bairrosNobres: ['Centro', 'Aeroporto', 'Cidade Nova', 'Vila Maria'],
  bairrosPopulares: ['Sapucaia', 'Paraíso', 'Inema', 'Coqueiros'],

  parques: [
    {
      nome: 'Margens do rio Pomba',
      descricao:
        'O rio Pomba corta a cidade e suas margens urbanas são usadas para caminhada e corrida no eixo central de Pádua.',
    },
    {
      nome: 'Parque de águas minerais',
      descricao:
        'Área ligada às fontes de águas minerais e termais de propriedades medicinais que dão fama à cidade, com espaço arborizado para caminhada.',
    },
    {
      nome: 'Praça Visconde de Figueira',
      descricao:
        'Praça central de Pádua, ponto de encontro e referência de largada de eventos da cidade.',
    },
  ],
  ciclovias:
    'A cidade tem relevo de vales e morros do Noroeste Fluminense; a extensão oficial de ciclovias não é divulgada em fonte pública consolidada.',

  clima:
    'O clima é tropical, típico do Noroeste Fluminense, com verão quente e chuvoso e inverno mais seco e ameno.',
  climaTreino:
    'O calor do verão pede treino ao ar livre nos horários mais amenos, no início da manhã ou no fim da tarde, com atenção à hidratação; o inverno mais seco abre boas janelas para atividade ao ar livre ao longo do dia.',

  mobilidade:
    'Santo Antônio de Pádua é servida pela RJ-186, eixo rodoviário que conecta a cidade aos municípios do Noroeste Fluminense e à divisa com Minas Gerais, reforçando seu papel de entroncamento de comércio e serviços da microrregião.',

  corridas: [
    {
      nome: 'Corrida da Festa de Santo Antônio',
      descricao:
        'Prova de rua tradicional da cidade, associada às festividades do padroeiro, com percurso pelas ruas do Centro.',
    },
    {
      nome: 'Corrida das Estações',
      descricao:
        'Circuito de corrida de rua de 5 km disputado em voltas pelo Centro, com a Praça Pereira Lima como referência.',
    },
  ],
  culturaEsportiva:
    'Pádua reúne a tradição futebolística do interior fluminense com um calendário de corridas de rua que mobiliza praticantes da cidade e da microrregião, muitas vezes ligado a datas e festas locais.',
  academias:
    'A oferta de academias e estúdios é compatível com o porte de uma cidade média do interior, concentrada no Centro e complementada pelo atendimento domiciliar e pelas margens do rio Pomba para treino ao ar livre.',

  destaquesFitness: [
    'Polo de pedras decorativas e águas minerais no Noroeste Fluminense.',
    'Margens do rio Pomba para caminhada e corrida no centro da cidade.',
    'Calendário de corridas de rua ligado às festas locais.',
    'Comércio regional que amplia o público que circula e treina na cidade.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 680,
    onlineMin: 115,
    onlineMax: 340,
  },

  conclusao:
    'Cidade de porte médio no Noroeste Fluminense, Santo Antônio de Pádua tem mercado fitness compatível com seu tamanho e bons espaços ao ar livre, como as margens do rio Pomba e a área das águas minerais. Um personal trainer ajuda a montar uma rotina que respeite o clima tropical da região e aproveite as academias do Centro com método.',

  vizinhas: ['itaperuna-rj', 'muriae-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Santo Antônio de Pádua', url: 'https://cidades.ibge.gov.br/brasil/rj/santo-antonio-de-padua/panorama' },
    { nome: 'Prefeitura de Santo Antônio de Pádua', url: 'https://www.santoantoniodepadua.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
