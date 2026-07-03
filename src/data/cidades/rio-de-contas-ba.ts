import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'rio-de-contas-ba',
  nome: 'Rio de Contas',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'rio-contense',
  tipo: 'cidade',

  populacao: 13184,
  populacaoAno: 2022,
  idhm: 0.605,
  idhmClasse: 'médio',
  altitudeM: 994,

  resumoEconomico:
    'Fundada em 1723 como a primeira vila da Chapada Diamantina, Rio de Contas viveu o auge do ciclo do ouro no século XVIII, chegando a abrigar uma Casa de Fundição para a cobrança do quinto real. Com o esgotamento das jazidas e a descoberta de diamantes na vizinha Mucugê, a economia entrou em declínio, mas deixou como herança um dos maiores conjuntos arquitetônicos coloniais da Bahia, tombado pelo IPHAN em 1980. Hoje o município vive principalmente do turismo histórico e ecológico — impulsionado pelo casario colonial e pelo acesso ao Pico das Almas e ao Pico do Barbado, dois dos pontos mais altos do Nordeste — além da agricultura de subsistência e da pecuária praticadas nos distritos e povoados do interior.',

  mercado:
    'O mercado de personal trainers em Rio de Contas é bastante restrito, compatível com o porte de um município pequeno e majoritariamente rural. A demanda tende a se concentrar em moradores do centro histórico e em guias e condutores de montanhismo que precisam de preparo físico específico para as travessias aos picos da região, além de visitantes que buscam orientação pontual durante estadias voltadas ao trekking. A ausência de grandes redes de academia abre espaço para o trabalho individualizado, muitas vezes combinando treino de força com condicionamento para caminhada em trilhas de altitude.',

  bairrosNobres: ['Centro Histórico', 'Largo do Rosário', 'Vila do Mato Grosso'],
  bairrosPopulares: ['Arapiranga', 'Marcolino Moura', 'Quilombos de Barra e Bananal'],

  parques: [
    {
      nome: 'Pico das Almas',
      descricao:
        'Com 1.958 m, é um dos pontos mais altos do Nordeste e fica na Serra das Almas, na divisa entre Rio de Contas e Livramento de Nossa Senhora. O acesso a partir da cidade soma cerca de 18 km de estrada de terra até a Vila do Mato Grosso, seguidos de trilha de subida considerada de alta dificuldade, muito procurada por montanhistas.',
    },
    {
      nome: 'Pico do Barbado',
      descricao:
        'Com 2.033 m, é o ponto culminante da Região Nordeste e só pode ser escalado com registro pela base de Rio de Contas, integrando o Circuito Gigantes do Nordeste ao lado dos picos das Almas e do Itobira — um roteiro de referência para o trekking de montanha no país.',
    },
    {
      nome: 'Ponte do Coronel (Sete Poços)',
      descricao:
        'Balneário natural nas margens do Rio Brumado, a cerca de 14 km do centro, com corredeiras e poços de águas cristalinas de diferentes profundidades; funciona como a "praia" local, usada tanto para lazer quanto para recuperação após trilhas.',
    },
  ],
  ciclovias:
    'A cidade não tem malha cicloviária estruturada; o deslocamento em bicicleta e a corrida acontecem nas ruas de pedra do centro histórico e nas estradas vicinais que levam aos distritos e às trilhas de montanha, incluindo trechos da BA-148, rodovia que também recebe a tradicional prova de ciclismo de estrada entre Brumado e Rio de Contas.',

  clima:
    'A quase 1.000 m de altitude, Rio de Contas tem um clima mais ameno do que boa parte do interior baiano, com temperaturas diurnas costumando ficar entre 20 °C e 27 °C e mínimas noturnas que podem cair a cerca de 12 °C, sobretudo no inverno. A altitude também deixa a cidade sujeita a neblina e a amplitudes térmicas maiores do que as observadas no litoral do estado.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre durante boa parte do dia, mas as noites e madrugadas mais frias pedem aquecimento adequado antes de atividades físicas; para quem se prepara para os picos da região, o principal cuidado é o condicionamento prévio para lidar com trilhas longas, subidas íngremes e a exposição solar nos trechos de campo aberto.',

  mobilidade:
    'O acesso rodoviário principal se dá pela BA-148, que liga Rio de Contas a Livramento de Nossa Senhora e Brumado e segue até a BR-116, principal rota de quem vem de Salvador (cerca de 570 a 620 km, em torno de 8 horas de viagem). Dentro da cidade, as ruas de pedra do centro histórico e o relevo montanhoso condicionam o deslocamento, feito majoritariamente a pé ou de carro, sem estrutura de transporte coletivo urbano relevante.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva de Rio de Contas gira em torno do montanhismo e do trekking: a cidade é a base de acesso ao Pico do Barbado, ao Pico das Almas e ao Circuito Gigantes do Nordeste, roteiros que atraem caminhantes e montanhistas de várias partes do país. A região também é palco da Corrida Ecológica Brumado a Rio de Contas, tradicional prova de ciclismo de estrada e mountain bike disputada pela BA-148 desde o fim dos anos 1990, um dos maiores eventos de ciclismo do estado.',
  academias:
    'A oferta de academias é pequena e concentrada no centro da cidade, voltada principalmente à musculação; boa parte do condicionamento físico de moradores, guias e montanhistas locais acontece de forma informal, aproveitando as ladeiras do centro histórico e as trilhas de acesso aos picos da região.',

  destaquesFitness: [
    'Base de acesso ao Pico do Barbado (2.033 m) e ao Pico das Almas (1.958 m), dois dos pontos mais altos do Nordeste, referência para trekking e montanhismo.',
    'Centro histórico colonial tombado pelo IPHAN em 1980, com ladeiras de pedra que desafiam quem caminha ou corre pela cidade.',
    'Altitude de quase 1.000 m garante clima ameno durante o dia e noites frias, favorável ao treino ao ar livre fora dos horários de calor.',
    'Ponto final da Corrida Ecológica Brumado a Rio de Contas, tradicional prova de ciclismo de estrada disputada pela BA-148 há mais de duas décadas.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Cidade histórica cercada pelas montanhas mais altas do Nordeste, Rio de Contas oferece condições raras para quem busca treino ao ar livre e preparo físico voltado ao trekking e ao montanhismo. Um personal trainer pode ajudar a condicionar o corpo para trilhas longas e subidas íngremes, além de orientar o treino de força e de resistência dentro da estrutura enxuta de academias que uma cidade desse porte oferece.',

  vizinhas: ['brumado-ba', 'vitoria-da-conquista-ba', 'guanambi-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Rio de Contas', url: 'https://cidades.ibge.gov.br/brasil/ba/rio-de-contas/panorama' },
    { nome: 'IPHAN — Rio de Contas (BA)', url: 'http://portal.iphan.gov.br/pagina/detalhes/118' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
