import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'laranjal-do-jari-ap',
  nome: 'Laranjal do Jari',
  uf: 'AP',
  estado: 'Amapá',
  estadoSlug: 'amapa',
  regiao: 'Norte',
  gentilico: 'laranjalense',
  tipo: 'cidade',

  populacao: 35114,
  populacaoAno: 2022,
  idhm: 0.665,
  idhmClasse: 'médio',
  altitudeM: 30,

  resumoEconomico:
    'No sul do Amapá, às margens do rio Jari e na divisa com o Pará, Laranjal do Jari nasceu da migração de trabalhadores ligados ao Projeto Jari (celulose e silvicultura) e cresceu sobre a beira do rio. A economia atual combina o extrativismo vegetal do Vale do Jari (castanha-da-amazônia, açaí, óleos e resinas como copaíba, andiroba e breu branco), a agricultura familiar, a pesca, o comércio local e o serviço público. A Usina Hidrelétrica de Santo Antônio do Jari, no rio Jari, marca a região como polo de geração de energia.',

  mercado:
    'Por ser uma cidade média e relativamente isolada do sul do Amapá, o mercado fitness de Laranjal do Jari é enxuto, concentrado em academias locais de musculação e treino funcional. A procura por personal trainers é mais pontual, ligada a quem busca acompanhamento individualizado e treino adaptado ao calor e à umidade típicos da Amazônia.',

  bairrosNobres: ['Centro', 'Agreste', 'Novo Horizonte', 'Prosperidade'],
  bairrosPopulares: ['Bom Jesus', 'Santarém', 'Sumaúma', 'Liberdade'],

  parques: [
    {
      nome: 'Orla do rio Jari (Beiradão)',
      descricao:
        'A beira do rio Jari, marcada pelas palafitas que deram à cidade o apelido de Beiradão, é o espaço urbano mais característico; trechos da orla servem de caminho para caminhada e convivência ao ar livre.',
    },
    {
      nome: 'Entorno do Vale do Jari',
      descricao:
        'A floresta primária do Vale do Jari, rica em castanhais e cursos d’água, cerca a cidade e oferece percursos de acesso e estradas vicinais usados por quem treina ao ar livre, condicionados ao regime de chuvas.',
    },
    {
      nome: 'Praças e vias centrais',
      descricao:
        'As praças e ruas dos bairros Centro e Agreste, atendidos pelo transporte urbano, concentram boa parte da caminhada e da atividade física comunitária na parte mais consolidada da cidade.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é praticamente inexistente; o pedal e a corrida acontecem nas vias urbanas dos bairros em terra firme, sobretudo no Centro e no Agreste.',

  clima:
    'O clima é equatorial, quente e úmido o ano todo, com temperaturas que costumam variar entre cerca de 20 °C e 33 °C e chuvas abundantes distribuídas pela maior parte do ano. A estação chuvosa é longa e intensa, e parte dos bairros fica em áreas alagáveis sujeitas às cheias do rio Jari.',
  climaTreino:
    'O calor e a umidade elevada pedem treinar nos horários mais frescos, cedo ou no fim da tarde, com hidratação reforçada; nos períodos de chuva forte e de cheia, ambientes cobertos e climatizados são a opção mais previsível para manter a constância.',

  mobilidade:
    'O acesso terrestre se dá pelo eixo sul da BR-156, em grande parte ainda sem pavimentação, e o rio Jari segue como via fundamental de circulação de pessoas e cargas. Dentro da cidade, o transporte é feito por ônibus que atendem principalmente os bairros Centro e Agreste, enquanto áreas alagáveis dependem mais do deslocamento a pé e por embarcações.',

  corridas: [
    {
      nome: 'Corrida e Caminhada da Mulher',
      descricao:
        'Evento promovido pela prefeitura, citado como a maior corrida de rua só de mulheres do Amapá, com edições anuais que reúnem corredoras da cidade e da região do Vale do Jari.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso das vias urbanas para caminhada e corrida, a forte ligação com o rio Jari e provas comunitárias como a Corrida e Caminhada da Mulher, tudo moldado pelo clima quente e úmido da Amazônia.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, concentradas nos bairros em terra firme, com porte compatível com uma cidade média e isolada do interior do Norte.',

  destaquesFitness: [
    'Cidade ribeirinha do rio Jari, conhecida como Beiradão pelas palafitas à beira do rio.',
    'Clima equatorial quente e úmido, que exige planejamento de horário e hidratação no treino.',
    'Acesso por via fluvial e pela BR-156, em boa parte sem pavimentação, no sul do Amapá.',
    'Economia ligada ao extrativismo do Vale do Jari e à hidrelétrica de Santo Antônio do Jari.',
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
    'Cidade ribeirinha, quente e úmida no coração do Vale do Jari, Laranjal do Jari pede um treino adaptado ao clima equatorial e ao ritmo das cheias do rio. Um personal trainer ajuda a organizar a rotina, escolher os melhores horários e manter a constância mesmo com a longa estação chuvosa, aproveitando as vias e praças dos bairros em terra firme.',

  vizinhas: ['macapa-ap', 'santana-ap'],

  fontes: [
    { nome: 'IBGE Cidades — Laranjal do Jari', url: 'https://cidades.ibge.gov.br/brasil/ap/laranjal-do-jari/panorama' },
    { nome: 'Prefeitura de Laranjal do Jari', url: 'https://laranjaldojari.ap.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
