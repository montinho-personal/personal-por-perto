import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tome-acu-pa',
  nome: 'Tomé-Açu',
  uf: 'PA',
  estado: 'Pará',
  estadoSlug: 'para',
  regiao: 'Norte',
  gentilico: 'tomeaçuense',
  tipo: 'cidade',

  populacao: 67585,
  populacaoAno: 2022,
  idhm: 0.586,
  idhmClasse: 'baixo',
  altitudeM: 45,

  resumoEconomico:
    'No nordeste paraense, às margens do rio Acará-Mirim e a cerca de 250 km de Belém, Tomé-Açu é reconhecida pela forte presença da imigração japonesa, que chegou à região a partir de 1929 e moldou sua vocação agrícola. A cidade ficou mundialmente conhecida como a "terra da pimenta", quando se tornou grande produtora de pimenta-do-reino, e depois se reinventou com o cacau e o dendê. É também berço dos Sistemas Agroflorestais (SAF): praticamente toda a produção de cacau combina diferentes culturas e árvores num mesmo terreno, tornando o município referência nacional e internacional em agricultura sustentável.',

  mercado:
    'Como cidade do interior paraense de porte médio e perfil agrícola, Tomé-Açu tem um mercado fitness mais enxuto, concentrado em academias locais de musculação e treino funcional na sede e no distrito de Quatro Bocas. A procura por personal trainers tende a crescer entre quem busca orientação para treinar respeitando o calor e a umidade da Amazônia e para manter constância ao longo do ano.',

  bairrosNobres: ['Centro', 'Quatro Bocas', 'Vila Nova', 'Jardim Bela Vista'],
  bairrosPopulares: ['Açaizal', 'Vila Pedrinha', 'Nova Vida', 'Canindé'],

  parques: [
    {
      nome: 'Orla do rio Acará-Mirim',
      descricao:
        'O rio que corta o município é parte da paisagem e da história local; suas margens e os acessos próximos servem de cenário para caminhadas e atividade ao ar livre nas primeiras horas do dia.',
    },
    {
      nome: 'Distrito de Quatro Bocas',
      descricao:
        'Principal núcleo urbano e comercial do município, concentra avenidas e ruas planas usadas para caminhada e corrida, além de eventos esportivos da cidade.',
    },
    {
      nome: 'Roteiro das agroflorestas (SAF)',
      descricao:
        'As propriedades de cacau e frutas em sistema agroflorestal, marca registrada da colônia japonesa, formam um entorno verde e sombreado que atrai quem gosta de pedalar e caminhar por estradas vicinais.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada na área urbana da sede e de Quatro Bocas; boa parte do pedal acontece nas avenidas centrais e nas estradas vicinais que ligam a cidade às colônias e agroflorestas.',

  clima:
    'O clima é equatorial, quente e úmido, típico da Amazônia, com temperaturas elevadas o ano inteiro e alta umidade do ar. O regime de chuvas divide o ano em dois períodos: o mais chuvoso, no primeiro semestre (o "inverno amazônico"), e o mais seco, no segundo semestre, quando as chuvas ficam mais espaçadas.',
  climaTreino:
    'O calor e a umidade constantes pedem treinar bem cedo ou no fim da tarde, com hidratação reforçada e roupas leves; no período chuvoso, ambientes cobertos garantem regularidade, e o segundo semestre, mais seco, tende a ser o mais confortável para o treino ao ar livre.',

  mobilidade:
    'Tomé-Açu se conecta por rodovias estaduais: a PA-140, que passa pela cidade e a liga à região de Belém, e a PA-256, uma das mais extensas do estado, que integra o município a Tailândia e Paragominas. O transporte interno é feito principalmente por carro, moto e ônibus, e o escoamento da produção agrícola depende dessas estradas.',

  corridas: [
    {
      nome: 'Corrida pelo Clima',
      descricao:
        'Prova de rua de 5 km promovida pela prefeitura na abertura da Semana do Meio Ambiente, com largada no distrito de Quatro Bocas e percurso pelo perímetro urbano, reunindo moradores e grupos esportivos da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso das vias planas da sede e de Quatro Bocas para caminhada e corrida, eventos ligados à colônia japonesa e à pauta ambiental, e a vida ao ar livre em meio às agroflorestas — tudo condicionado pelo calor e pela umidade amazônicos.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, distribuídas pela sede e pelo distrito de Quatro Bocas, com porte compatível com uma cidade média do interior do Norte.',

  destaquesFitness: [
    'Forte herança da imigração japonesa, que moldou a economia e a cultura local.',
    'Berço dos Sistemas Agroflorestais (SAF), referência em agricultura sustentável.',
    'Clima equatorial quente e úmido, que exige planejar horário e hidratação no treino.',
    'Economia agrícola de cacau, dendê e pimenta-do-reino, com vida ao ar livre pelas colônias.',
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
    'Cidade quente, úmida e marcada pela colônia japonesa e pelas agroflorestas, Tomé-Açu pede um treino adaptado ao clima amazônico e que aproveite as vias da sede e de Quatro Bocas e o entorno verde das colônias. Um personal trainer ajuda a organizar a rotina respeitando o calor, escolhendo os melhores horários e mantendo a constância nos períodos chuvoso e seco.',

  vizinhas: ['castanhal-pa', 'paragominas-pa'],

  fontes: [
    { nome: 'IBGE Cidades — Tomé-Açu', url: 'https://cidades.ibge.gov.br/brasil/pa/tome-acu/panorama' },
    { nome: 'Prefeitura de Tomé-Açu', url: 'https://www.prefeituratomeacu.pa.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
