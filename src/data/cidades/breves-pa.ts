import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'breves-pa',
  nome: 'Breves',
  uf: 'PA',
  estado: 'Pará',
  estadoSlug: 'para',
  regiao: 'Norte',
  gentilico: 'brevense',
  tipo: 'cidade',

  populacao: 106968,
  populacaoAno: 2022,
  idhm: 0.503,
  idhmClasse: 'baixo',
  altitudeM: 10,

  resumoEconomico:
    'Maior cidade da Ilha de Marajó e principal centro urbano do oeste do arquipélago, Breves fica na margem esquerda do rio Parauaú, cercada por um estuário de furos, igarapés e igapós. A economia é fortemente extrativista e ribeirinha: açaí, palmito, pesca e a tradicional exploração de madeira — esta em declínio diante das políticas ambientais — além de carvão vegetal e, mais recentemente, a fabricação de móveis. O comércio da sede atende toda a região do baixo Marajó, e o acesso à cidade se faz sobretudo por via fluvial, com Belém a cerca de 160 km em linha reta.',

  mercado:
    'Como cidade média e relativamente isolada no interior do Marajó, o mercado fitness de Breves é enxuto e concentrado em algumas academias locais de musculação e treino funcional. A procura por personal trainers é incipiente, mais ligada a quem busca acompanhamento individual para lidar com o calor e a umidade constantes e para manter uma rotina de atividade dentro das limitações de espaço e de estrutura de uma cidade ribeirinha.',

  bairrosNobres: ['Centro', 'Aeroporto', 'Cristo Rei', 'Jardim dos Buritis'],
  bairrosPopulares: ['Parque dos Buritis', 'Cacoal', 'Vila Nova', 'Cajueiro'],

  parques: [
    {
      nome: 'Orla do rio Parauaú',
      descricao:
        'A frente da cidade voltada para o rio Parauaú é o principal espaço público de convívio e o trecho mais usado para caminhada e para o vaivém das embarcações, com o porto e o comércio ribeirinho concentrados junto à beira-rio.',
    },
    {
      nome: 'Praça da Matriz (Centro)',
      descricao:
        'Praça central em torno da igreja matriz, ponto de encontro da população e espaço plano usado para caminhada leve e atividades ao ar livre no coração da cidade.',
    },
    {
      nome: 'Estuário e furos do Marajó',
      descricao:
        'O entorno de Breves é um labirinto de furos, igarapés e igapós que conectam comunidades ribeirinhas; canoagem, remo e travessias de barco fazem parte do cotidiano e podem virar atividade física em meio à natureza da ilha.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é mínima. A bicicleta é meio de transporte comum na malha urbana plana da sede, mas o pedal divide espaço com o trânsito nas vias do centro e dos bairros, sem ciclovias estruturadas de porte.',

  clima:
    'O clima é equatorial úmido, quente o ano inteiro, com temperaturas médias altas e umidade elevada típica da foz amazônica. O ano se divide entre uma estação chuvosa, mais intensa por volta de dezembro a maio, e uma estação menos chuvosa, de junho a novembro — que, ainda assim, mantém umidade e calor característicos do Marajó.',
  climaTreino:
    'Calor e umidade altos o ano todo pedem treinar bem cedo ou no fim da tarde, com hidratação reforçada e atenção ao desgaste. No período chuvoso, as pancadas frequentes favorecem ambientes cobertos; a fase menos chuvosa tende a ser mais previsível para a atividade ao ar livre.',

  mobilidade:
    'A mobilidade de Breves é essencialmente fluvial. O acesso à cidade e às comunidades do interior se dá por barcos de linha, lanchas, rabetas e canoas que navegam o rio Parauaú e a rede de furos e igarapés do estuário. A ligação com Belém é feita por embarcações, e o município está entre os contemplados por obras de terminal hidroviário para ordenar o embarque de passageiros. Na sede, o deslocamento é curto, a pé, de bicicleta e por mototáxi.',

  corridas: [
    {
      nome: 'Breves Fest Verão (Jogos de Verão)',
      descricao:
        'Programação esportiva promovida pela prefeitura no período de verão, com modalidades variadas que incluem atletismo, corrida de bike, natação e canoagem, reunindo a comunidade em torno do esporte.',
    },
    {
      nome: 'Festival Brevense de Folclore',
      descricao:
        'Evento cultural anual que reúne os grupos folclóricos do município; embora não seja uma prova esportiva, mobiliza a cidade e integra o calendário de atividades coletivas ligado à identidade marajoara.',
    },
  ],
  culturaEsportiva:
    'A cultura de movimento em Breves é marcada pela vida ribeirinha: remo e canoagem fazem parte do dia a dia, e o futebol e as modalidades de praia e de rio aparecem em eventos como o Breves Fest Verão. A orla do Parauaú e as praças do centro concentram a caminhada e o convívio, tudo moldado pelo calor e pela umidade equatoriais.',
  academias:
    'A oferta se resume a academias locais de musculação e treino funcional na sede, de porte compatível com uma cidade média e isolada do interior do Marajó, distribuídas pelo centro e pelos bairros residenciais.',

  destaquesFitness: [
    'Maior cidade da Ilha de Marajó e principal centro urbano do oeste do arquipélago.',
    'Cidade ribeirinha às margens do rio Parauaú, com mobilidade essencialmente fluvial.',
    'Clima equatorial úmido, quente o ano todo, que exige planejar horário e hidratação no treino.',
    'Economia extrativista de açaí, palmito, pesca e madeira, com forte comércio ribeirinho.',
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
    'Cidade ribeirinha, quente e úmida no coração do Marajó, Breves pede um treino adaptado ao clima equatorial e à realidade de uma cidade acessível quase só pela água. Um personal trainer ajuda a organizar a rotina respeitando o calor, escolhendo os melhores horários e mantendo a constância ao longo das estações chuvosa e menos chuvosa.',

  vizinhas: ['belem-pa', 'abaetetuba-pa'],

  fontes: [
    { nome: 'IBGE Cidades — Breves', url: 'https://cidades.ibge.gov.br/brasil/pa/breves/panorama' },
    { nome: 'Prefeitura de Breves', url: 'https://breves.pa.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
