import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'esteio-rs',
  nome: 'Esteio',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'esteiense',
  tipo: 'cidade',

  populacao: 76137,
  populacaoAno: 2022,
  idhm: 0.754,
  idhmClasse: 'alto',
  altitudeM: 17,

  resumoEconomico:
    'Esteio é um município totalmente urbano da Região Metropolitana de Porto Alegre, situado a cerca de 25 km da capital. Apesar de uma das menores áreas territoriais do estado, é um dos municípios mais densamente povoados do Rio Grande do Sul. A economia combina indústria, comércio e serviços, e ganha projeção nacional como sede do Parque de Exposições Assis Brasil, que abriga a Expointer, uma das maiores feiras agropecuárias da América Latina.',

  mercado:
    'Compacta e de alta densidade, Esteio concentra a clientela em poucos quilômetros, o que facilita o atendimento domiciliar e em academias de bairro. O comércio fitness é apoiado por redes e estúdios, e a proximidade com Canoas, São Leopoldo e a capital amplia a circulação de profissionais e alunos.',

  bairrosNobres: ['Centro', 'Tamandaré', 'Olímpica', 'São Sebastião'],
  bairrosPopulares: ['Parque Amador', 'Liberdade', 'Primavera', 'Novo Esteio'],

  parques: [
    {
      nome: 'Parque de Exposições Assis Brasil',
      descricao:
        'Maior espaço da cidade, com 141 hectares e sede da Expointer. Fora do período de feiras, suas amplas vias e áreas abertas são usadas para caminhadas, corridas e atividades ao ar livre.',
    },
    {
      nome: 'Praças e academias ao ar livre dos bairros',
      descricao:
        'Esteio distribui praças com equipamentos de ginástica e pistas de caminhada pelos bairros, opções de treino gratuito próximas de casa em uma cidade compacta.',
    },
  ],
  ciclovias:
    'A cidade tem ciclofaixas e vias compartilhadas em trechos urbanos; por ser compacta e plana, favorece deslocamentos curtos de bicicleta. A extensão total da malha cicloviária não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido, típico da Região Metropolitana de Porto Alegre, com verões quentes e invernos frios, em que as mínimas podem se aproximar de zero.',
  climaTreino:
    'O frio e a umidade do inverno favorecem o treino indoor; nos verões quentes, vale priorizar o início da manhã ou o fim da tarde, com boa hidratação.',

  mobilidade:
    'Esteio é atendida pela Trensurb, com estação no Centro que liga a cidade diretamente a Porto Alegre e a outras cidades da região metropolitana. É cortada pela BR-116, um dos principais eixos logísticos do estado, o que a torna bem conectada apesar da pequena área.',

  corridas: [
    {
      nome: 'Esteio Run',
      descricao:
        'Corrida de rua realizada na cidade, com percursos de 5 km e 10 km que percorrem as ruas urbanas de Esteio.',
    },
    {
      nome: 'Circuito das Estações (Região Metropolitana)',
      descricao:
        'Um dos maiores circuitos de corrida de rua do país, com etapas sazonais na Grande Porto Alegre que atraem corredores de Esteio e cidades vizinhas.',
    },
  ],
  culturaEsportiva:
    'Cidade compacta e de forte identidade comunitária, Esteio tem tradição em corrida de rua e atividades em praças de bairro, beneficiada pela proximidade com o calendário esportivo de toda a Grande Porto Alegre.',
  academias:
    'A oferta reúne academias e estúdios de bairro, complementados por praças com academias ao ar livre. A curta distância entre os bairros facilita o atendimento de personal trainers a domicílio.',

  destaquesFitness: [
    'Parque de Exposições Assis Brasil: amplo espaço para caminhada e corrida fora do período da Expointer.',
    'Praças de bairro com academias ao ar livre e pistas de caminhada.',
    'Tradição em corrida de rua, com a Esteio Run e o Circuito das Estações na região.',
    'Cidade compacta e plana, ideal para atendimento domiciliar e treinos ao ar livre.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Compacta, densa e bem conectada pela Trensurb e pela BR-116, Esteio reúne indústria, comércio e a projeção nacional da Expointer. Um personal trainer ajuda a aproveitar as praças de bairro e os amplos espaços do Parque Assis Brasil com método, alternando o treino ao ar livre com a academia nos meses frios.',

  vizinhas: ['canoas-rs', 'sao-leopoldo-rs', 'gravatai-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Esteio', url: 'https://cidades.ibge.gov.br/brasil/rs/esteio/panorama' },
    { nome: 'Prefeitura de Esteio', url: 'https://www.esteio.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
