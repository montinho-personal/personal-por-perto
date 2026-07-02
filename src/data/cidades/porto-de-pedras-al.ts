import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'porto-de-pedras-al',
  nome: 'Porto de Pedras',
  uf: 'AL',
  estado: 'Alagoas',
  estadoSlug: 'alagoas',
  regiao: 'Nordeste',
  gentilico: 'porto-pedrense',
  tipo: 'cidade',

  populacao: 9295,
  populacaoAno: 2022,
  idhm: 0.540,
  idhmClasse: 'baixo',

  resumoEconomico:
    'Porto de Pedras fica no litoral norte de Alagoas, na foz do rio Manguaba, cerca de 100 km ao norte de Maceió, e é uma das cidades que compõem a Rota Ecológica, trecho de praias preservadas entre Maragogi e a capital. O município é conhecido pela Praia do Patacho, reconhecida com o selo internacional Bandeira Azul, pela colorida Vila de Tatuamunha e pelos passeios de jangada e barco pelo rio Manguaba, incluindo o trabalho da Associação Peixe-Boi na observação do peixe-boi marinho. A economia local tem forte peso da agropecuária (cana-de-açúcar e coco, com produção mais recente de maracujá e laranja, além de feijão, mandioca, milho e banana) e da pesca artesanal (tilápia, agulha, cavala, sardinha, xaréu e camarão), somada ao turismo, que sustenta pousadas e sua rede de hotelaria como um dos maiores empregadores da cidade.',

  mercado:
    'O mercado fitness de Porto de Pedras é bastante restrito, típico de um município pequeno cuja economia gira em torno da pesca, da agricultura e do turismo sazonal ligado às praias e ao rio Manguaba. A oferta se resume a poucas academias locais, e a procura por personal trainer tende a vir de moradores que buscam treino individualizado e de visitantes e proprietários de pousadas que passam temporadas na cidade, muitas vezes aproveitando a orla e as áreas ao ar livre como espaço de treino.',

  bairrosNobres: ['Centro', 'Patacho', 'Tatuamunha'],
  bairrosPopulares: ['Porto da Rua', 'Lages', 'Zona Rural'],

  parques: [
    {
      nome: 'Praia do Patacho',
      descricao:
        'Praia com selo internacional Bandeira Azul e piscinas naturais que se formam na maré baixa; a faixa de areia é o principal espaço da cidade para caminhada e corrida ao ar livre.',
    },
    {
      nome: 'Vila de Tatuamunha e rio Manguaba',
      descricao:
        'Distrito de casario colorido às margens do rio Manguaba, ponto de partida de passeios de jangada e barco, incluindo os roteiros da Associação Peixe-Boi; as ruas e a orla ribeirinha também servem para caminhada.',
    },
    {
      nome: 'Farol de Porto de Pedras',
      descricao:
        'Instalado no alto de uma elevação com vista panorâmica para a foz do rio Manguaba e para as praias vizinhas, o entorno do farol funciona como percurso de subida para quem treina ao ar livre.',
    },
  ],
  ciclovias:
    'Porto de Pedras não tem infraestrutura cicloviária estruturada; o deslocamento a pé e de bicicleta acontece pelas vias do Centro, pela orla e pela travessia de balsa até Japaratinga, dividindo espaço com o tráfego local.',

  clima:
    'O clima é tropical, quente e úmido, típico do litoral norte alagoano, com temperaturas médias em torno de 25 °C. As chuvas se concentram no outono e no inverno (de abril a agosto), enquanto a primavera e o verão são mais secos e coincidem com a alta temporada turística das praias.',
  climaTreino:
    'O calor e a umidade constantes recomendam treinar nas primeiras horas da manhã ou no fim da tarde, com hidratação reforçada; a exposição solar forte na praia e nos passeios de barco pelo rio Manguaba exige proteção extra em treinos ao ar livre.',

  mobilidade:
    'O acesso a Porto de Pedras é feito pela AL-101 Norte, rodovia que liga a cidade a Maceió, cerca de 100 km ao sul. Para quem vem do norte, de Maragogi ou Recife, o trajeto passa por Japaratinga e inclui a travessia de balsa sobre o rio Manguaba até a cidade. O transporte urbano e intermunicipal é feito por ônibus e vans, e boa parte da mobilidade interna da cidade e dos povoados vizinhos, como Tatuamunha, também depende de embarcações pelo rio.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva de Porto de Pedras está ligada ao mar e ao rio: caminhada e corrida na areia do Patacho, passeios de jangada e barco pelo rio Manguaba e a pesca artesanal como atividade cotidiana. Não há grande estrutura de eventos esportivos organizados, e o futebol de várzea e o lazer na orla concentram boa parte da prática física informal da população.',
  academias:
    'A oferta de academias é bastante limitada, restrita a poucos estabelecimentos de musculação e treino funcional no Centro, como a Academia PortoFit, compatível com o porte pequeno do município e sua economia voltada à pesca, à agricultura e ao turismo.',

  destaquesFitness: [
    'Praia do Patacho, com selo internacional Bandeira Azul e piscinas naturais, usada para caminhada e corrida na areia.',
    'Passeios de jangada e barco pelo rio Manguaba até a Vila de Tatuamunha, incluindo os roteiros da Associação Peixe-Boi.',
    'Clima tropical quente e úmido do litoral norte alagoano, que pede treino nos horários mais amenos do dia.',
    'Economia de base agropecuária (cana-de-açúcar e coco) e pesqueira, com mercado fitness pequeno e concentrado em poucas academias locais.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 200,
    mensalMax: 550,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Cidade pequena do litoral norte alagoano, vivendo da pesca, da agricultura e do turismo das praias e do rio Manguaba, Porto de Pedras oferece um cenário natural privilegiado para treinar ao ar livre, respeitado o calor e a umidade típicos da região. Um personal trainer ajuda a organizar a rotina de treino em torno do clima e da vida local, aproveitando a praia, a orla do rio e os poucos espaços estruturados da cidade para manter a constância.',

  vizinhas: ['maragogi-al', 'maceio-al'],

  fontes: [
    { nome: 'IBGE Cidades — Porto de Pedras', url: 'https://cidades.ibge.gov.br/brasil/al/porto-de-pedras/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Porto de Pedras', url: 'https://site.portodepedras.al.gov.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
