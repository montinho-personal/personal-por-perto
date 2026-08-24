import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'alto-caparao-mg',
  nome: 'Alto Caparaó',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'alto-caparaoense',
  tipo: 'cidade',

  populacao: 5795,
  populacaoAno: 2022,

  resumoEconomico:
    'Aos pés do Pico da Bandeira — 2.892 metros, o terceiro ponto mais alto do Brasil —, Alto Caparaó é a porta mineira do Parque Nacional do Caparaó e uma das capitais brasileiras do montanhismo. A economia gira em torno do turismo de montanha (pousadas, guias, transporte 4x4 até a Tronqueira) e dos cafés especiais de altitude que fizeram fama na região.',

  mercado:
    'O mercado de treino é pequeno no papel e único na prática: guias de montanha, condutores e pousadeiros que sobem o parque toda semana, e um fluxo constante de montanhistas que chegam de todo o país precisando de perna e fôlego para os 2.892 metros. O preparo físico para o Pico da Bandeira é a demanda que define a cidade — atendida presencialmente e, sobretudo, a distância.',

  bairrosNobres: ['Centro', 'Liberdade', 'Avenida Pico da Bandeira', 'Vale Verde'],
  bairrosPopulares: ['Comunidades rurais do café', 'Entorno do Parque Nacional', 'Estrada da Tronqueira', 'Zona Rural'],

  parques: [
    {
      nome: 'Parque Nacional do Caparaó',
      descricao:
        'A unidade que abriga o Pico da Bandeira: trilhas que sobem da portaria à Tronqueira (2.370 m) e dali ao cume, com o clássico ataque de madrugada para ver o nascer do sol do topo do Sudeste.',
    },
    {
      nome: 'Trilha do Pico da Bandeira',
      descricao:
        'Do estacionamento da Tronqueira ao cume são cerca de 4,5 km de subida contínua acima dos 2.300 m — pernas, fôlego e frio de montanha num só pacote.',
    },
    {
      nome: 'Cachoeiras e vales do Caparaó',
      descricao:
        'Cachoeira Bonita, Vale Verde e os poços do rio Caparaó: trilhas mais curtas que combinam caminhada e banho gelado de montanha.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária; as estradas de montanha e o acesso ao parque são procurados por ciclistas de subida — o ganho de altitude é dos maiores do país.',

  clima:
    'Tropical de altitude nas partes baixas e clima de montanha no parque: verões amenos e chuvosos, invernos secos com madrugadas abaixo de zero no alto — geada é rotina e o frio no cume surpreende o ano inteiro.',
  climaTreino:
    'O treino ao ar livre é privilégio o ano todo na sede, com o frio de montanha exigindo agasalho de verdade no inverno. Para quem sobe o pico, o preparo pede subidas com mochila, fôlego para altitude e joelhos prontos para a descida — o que mais machuca em montanha.',

  mobilidade:
    'O acesso é pela BR-262/MG-111 via Manhuaçu e Manhumirim; da portaria do parque, veículos 4x4 sobem até a Tronqueira. O lado capixaba do parque (Pedra Menina) conecta pela travessia clássica.',

  corridas: [
    {
      nome: 'Provas de montanha do Caparaó',
      descricao:
        'O calendário regional gira em torno do parque, com desafios de trail run e provas de montanha que usam as trilhas e estradas de altitude.',
    },
  ],
  culturaEsportiva:
    'Aqui o esporte é vertical: montanhismo e trekking como modo de vida, trail run crescendo nas trilhas do parque, e o ciclismo de subida nas estradas de montanha. Guias e carregadores locais têm o condicionamento que só quem sobe o Bandeira toda semana constrói.',
  academias:
    'A oferta formal é mínima e concentrada na sede; o treino de força acontece em espaços simples e em casa, e o "cardio" oficial da cidade é a própria montanha.',

  destaquesFitness: [
    'Pico da Bandeira: 2.892 m e o nascer do sol mais famoso do montanhismo brasileiro.',
    'Trilhas de altitude que são treino de perna e fôlego por natureza.',
    'Cafés especiais e pousadas — turismo ativo o ano inteiro.',
    'Base natural para preparo físico de montanhismo e trail run.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 620,
    onlineMin: 130,
    onlineMax: 340,
  },

  conclusao:
    'Alto Caparaó treina olhando para o teto do Sudeste: subida de verdade, altitude de verdade e o Bandeira esperando no fim da trilha. Um personal trainer daqui prepara pernas, fôlego e joelhos para a montanha — presencial na sede ou online para o montanhista que chega de longe com o cume marcado no calendário.',

  vizinhas: ['manhuacu-mg', 'muriae-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Alto Caparaó', url: 'https://cidades.ibge.gov.br/brasil/mg/alto-caparao/panorama' },
    { nome: 'ICMBio — Parque Nacional do Caparaó', url: 'https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/unidade-de-conservacao/unidades-de-biomas/mata-atlantica/lista-de-ucs/parna-do-caparao' },
    { nome: 'Prefeitura de Alto Caparaó', url: 'https://altocaparao.mg.gov.br/' },
  ],
  atualizadoEm: '2026-08-24',
};
