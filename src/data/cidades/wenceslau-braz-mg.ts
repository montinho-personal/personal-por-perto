import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'wenceslau-braz-mg',
  nome: 'Wenceslau Braz',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'wenceslau-brazense',
  tipo: 'cidade',

  populacao: 2356,
  populacaoAno: 2022,
  idhm: 0.678,
  idhmClasse: 'médio',
  altitudeM: 1174,

  resumoEconomico:
    'Encravada na Serra da Mantiqueira, na microrregião de Itajubá, no extremo sul de Minas Gerais, Wenceslau Braz é um dos municípios mineiros menos populosos, com pouco mais de 2,3 mil habitantes segundo o Censo 2022. A economia gira em torno da agropecuária: a pecuária leiteira é a atividade mais tradicional, celebrada anualmente pelo Torneio Leiteiro (evento reconhecido como patrimônio cultural imaterial do município, que reúne exposição de gado, competições de ordenha e provas do cavalo Mangalarga Marchador), somada à agricultura familiar e à criação de gado de corte. O comércio local é pequeno e voltado ao consumo do dia a dia, e boa parte dos serviços mais especializados — de saúde a educação superior e varejo de maior porte — é buscada em Itajubá, a cerca de 20 km de distância.',

  mercado:
    'Por ser um município muito pequeno e majoritariamente rural, Wenceslau Braz não sustenta uma rede própria de academias variadas: a estrutura de treino formal se resume a poucas opções simples na sede, e quem busca mais variedade de modalidades recorre a Itajubá. Nesse cenário, o personal trainer com atendimento domiciliar ou em sítios e propriedades rurais é uma alternativa prática tanto para moradores da zona urbana quanto para famílias ligadas à atividade leiteira e à pecuária, cuja rotina de trabalho no campo pede horários flexíveis de treino.',

  bairrosNobres: ['Centro', 'Roseta'],
  bairrosPopulares: ['Charco', 'Itererê'],

  parques: [
    {
      nome: 'Praça Central e entorno do Centro',
      descricao:
        'Núcleo urbano do município, em ponto elevado da Serra da Mantiqueira; suas ruas e o entorno da praça concentram a caminhada informal do dia a dia da pequena população da sede.',
    },
    {
      nome: 'Cachoeira do Quilombo',
      descricao:
        'Queda d\'água em área rural do município, com estrutura simples de camping e trilhas a cavalo nos arredores — um dos atrativos naturais mais conhecidos para quem busca contato com a natureza fora da sede.',
    },
    {
      nome: 'Distrito de Itererê e zona rural',
      descricao:
        'A cerca de 11 km do centro por estrada de terra, o distrito de Itererê e as demais localidades rurais do município oferecem estradas vicinais em meio a serras e pastagens, aproveitadas para caminhada e pedal em contato com a paisagem da Mantiqueira.',
    },
  ],
  ciclovias:
    'O município não possui ciclovias estruturadas; o pedal acontece nas estradas vicinais de terra que cortam a zona rural e ligam a sede ao distrito de Itererê, em relevo bastante acidentado.',

  clima:
    'A altitude de mais de 1.000 metros na Serra da Mantiqueira garante um clima tropical de altitude bem mais ameno que o do restante de Minas Gerais, com verões de temperaturas suaves e invernos frios, com geadas frequentes e mínimas próximas de 0 °C nas partes mais altas.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre durante boa parte do ano, mas as manhãs de inverno exigem agasalho e aquecimento mais longo por causa das geadas; no verão, as chuvas de fim de tarde pedem atenção ao horário de treino nas estradas rurais.',

  mobilidade:
    'O acesso principal se dá pela BR-459, que liga a região a Itajubá, e por estradas estaduais e vicinais que conectam Wenceslau Braz aos vizinhos Piranguçu, Delfim Moreira e Campos do Jordão (SP). Não há transporte coletivo urbano estruturado dentro do município, e o deslocamento tanto na sede quanto até o distrito de Itererê depende basicamente de veículo próprio, dado o relevo de serra e o pequeno porte da malha viária.',

  corridas: [
    {
      nome: 'Corrida de São José (Itajubá)',
      descricao:
        'Prova tradicional do aniversário de Itajubá, disputada em março com percursos de 5 km e 10 km e caminhada de 5 km; por proximidade e pela ausência de provas de rua estruturadas na própria Wenceslau Braz, é um dos eventos que atraem corredores do município.',
    },
    {
      nome: 'Corrida do Águia da Mantiqueira (Itajubá)',
      descricao:
        'Prova de rua realizada na região da Serra da Mantiqueira, com percursos de 5 km e 10 km, caminhada e prova infantil, reforçando o calendário de corridas do sul de Minas próximo a Wenceslau Braz.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva do município é essencialmente rural e comunitária, girando em torno de eventos como o Torneio Leiteiro (com suas provas de laço e desfile de cavaleiros) e o rodeio local, além do futebol amador jogado no ginásio e nos campos da sede. Corrida de rua organizada não faz parte do calendário local, e quem corre de forma mais estruturada normalmente participa de provas de Itajubá ou de outras cidades vizinhas do sul de Minas.',
  academias:
    'A oferta de estrutura de academia dentro do município é praticamente inexistente, compatível com a população pequena e o perfil rural; treino orientado tende a acontecer via atendimento domiciliar ou em espaços improvisados, com quem busca mais opções de estrutura se deslocando até Itajubá.',

  destaquesFitness: [
    'Cidade instalada na Serra da Mantiqueira, acima de 1.000 m de altitude, com clima ameno favorável ao treino ao ar livre.',
    'Economia apoiada na pecuária leiteira, celebrada pelo tradicional Torneio Leiteiro, patrimônio cultural imaterial do município.',
    'Distrito rural de Itererê e a Cachoeira do Quilombo, acessados por estradas de terra em meio a serras e pastagens.',
    'Município muito pequeno, sem rede própria de academias, o que torna o personal trainer com atendimento domiciliar a alternativa mais prática.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 95,
    mensalMin: 250,
    mensalMax: 600,
    onlineMin: 115,
    onlineMax: 300,
  },

  conclusao:
    'Pequena, serrana e voltada à pecuária leiteira, Wenceslau Braz tem no clima ameno da Mantiqueira e nas estradas rurais em torno da sede e do distrito de Itererê seus principais espaços de treino ao ar livre, sem contar com uma rede própria de academias. Um personal trainer com atendimento domiciliar ajuda a manter a constância nesse contexto, adaptando o treino às estações do ano e à rotina de quem vive do campo ou se desloca com frequência até Itajubá.',

  vizinhas: ['itajuba-mg', 'pouso-alegre-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Wenceslau Braz (MG)', url: 'https://cidades.ibge.gov.br/brasil/mg/wenceslau-braz/panorama' },
    { nome: 'Prefeitura de Wenceslau Braz (MG)', url: 'https://www.wenceslaubraz.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
