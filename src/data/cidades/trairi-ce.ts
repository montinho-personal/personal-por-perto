import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'trairi-ce',
  nome: 'Trairi',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'trairense',
  tipo: 'cidade',

  populacao: 58415,
  populacaoAno: 2022,
  idhm: 0.606,
  idhmClasse: 'médio',
  altitudeM: 18,

  resumoEconomico:
    'Trairi é um município do litoral oeste cearense conhecido pelas praias de Flecheiras e Mundaú, dois dos principais polos de kitesurf e windsurf do Brasil, com pousadas e hotéis de padrão internacional que atraem visitantes estrangeiros o ano todo. A base econômica tradicional é a pesca artesanal, praticada em colônias distribuídas pelos 36 km de litoral do município (praias de Cana Brava, Emboaca, Flecheiras, Guajiru e Mundaú), somada à agricultura e à carcinicultura. Nos últimos anos, os parques eólicos instalados na região elevaram o peso da indústria na economia local, que hoje soma turismo, energia, pesca e comércio.',

  mercado:
    'O mercado de personal trainers em Trairi é pequeno e concentrado na sede do município e nas vilas de Flecheiras e Mundaú, onde a presença de turistas estrangeiros e de proprietários de pousadas amplia a procura por aulas avulsas e por treino de preparação física ligado aos esportes de vento. Fora da temporada turística, a demanda vem principalmente de moradores fixos, com opções mais limitadas de academias e estúdios do que em cidades maiores do estado.',

  bairrosNobres: ['Flecheiras', 'Mundaú', 'Guajiru'],
  bairrosPopulares: ['Centro (sede)', 'Cana Brava', 'Emboaca'],

  parques: [
    {
      nome: 'Praia de Flecheiras',
      descricao:
        'Vila de pescadores transformada em point internacional de kitesurf, com pousadas de padrão europeu à beira-mar; a faixa de areia e o calçadão são usados para caminhada, corrida e alongamento ao ar livre.',
    },
    {
      nome: 'Praia de Mundaú',
      descricao:
        'Vila no extremo oeste do município, onde o Rio Mundaú encontra o mar em meio a dunas; ponto tradicional de windsurf e kitesurf, também aproveitado para caminhada na orla e travessias de stand up paddle.',
    },
    {
      nome: 'Praia de Guajiru',
      descricao:
        'Praia de dunas móveis e lagoas entre dunas a cerca de 18 km da sede do município, cenário para caminhada em terreno arenoso e passeios de bugue.',
    },
  ],
  ciclovias:
    'Não há rede cicloviária estruturada; o deslocamento ativo acontece nas vias da sede e nos calçadões e ruas de areia das vilas de praia, compartilhados com o trânsito local.',

  clima:
    'O clima é tropical quente, com temperaturas elevadas o ano todo e chuvas concentradas na primeira metade do ano (a "quadra chuvosa" cearense, de janeiro a maio). No segundo semestre, de agosto a dezembro, os ventos alísios sopram fortes e constantes, condição que torna Flecheiras e Mundaú destinos procurados por praticantes de kitesurf e windsurf de vários países.',
  climaTreino:
    'O calor e o vento forte pedem treino nos horários mais amenos, com proteção solar e hidratação reforçada; a orla e a areia funcionam como espaço natural para treino funcional e cardio, mas o vento constante exige atenção redobrada em atividades que envolvam equipamentos leves.',

  mobilidade:
    'O acesso a partir de Fortaleza é feito pela CE-085 (Rodovia Estruturante/Costa do Sol Poente), passando por Caucaia, com entroncamento na CE-163 até a sede do município e as praias de Flecheiras e Mundaú — trajeto de cerca de 125 a 130 km. Dentro do município, o transporte entre a sede e as vilas de praia é feito majoritariamente por veículos particulares, vans e mototáxis, já que o transporte coletivo urbano é limitado.',

  corridas: [
    {
      nome: 'Circuito BRB de Corrida — Etapa Flecheiras/Mundaú',
      descricao:
        'Etapa do circuito de corrida de rua realizada entre as praias de Flecheiras e Mundaú, com percursos de 5 km e 12 km/15 km, saída na praça central de Flecheiras e chegada em Mundaú.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Trairi gira em torno do vento e do mar: kitesurf e windsurf são praticados o ano todo, com temporada mais forte no segundo semestre, ao lado do surfe, da pesca esportiva e de esportes de praia como futevôlei e vôlei de praia. A presença de escolas de kite e de uma comunidade internacional de esportistas de vento em Flecheiras e Mundaú marca o cotidiano esportivo do município, complementada por eventos pontuais de corrida de rua nas praias.',
  academias:
    'A oferta de academias e estúdios é pequena, concentrada na sede do município, com estrutura voltada à musculação e ao treino funcional; nas vilas de Flecheiras e Mundaú, o treino ao ar livre e as aulas avulsas ligadas aos esportes de vento têm mais peso do que academias convencionais.',

  destaquesFitness: [
    'Flecheiras e Mundaú, dois dos principais polos de kitesurf e windsurf do litoral cearense.',
    'Ventos alísios constantes no segundo semestre, que atraem esportistas de vento de vários países.',
    'Pousadas e comunidade internacional em Flecheiras e Mundaú, que sustentam demanda por aulas avulsas.',
    '36 km de litoral entre Cana Brava, Emboaca, Flecheiras, Guajiru e Mundaú, com praias, dunas e o Rio Mundaú.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 150,
    mensalMin: 260,
    mensalMax: 750,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Entre a pesca artesanal, o vento constante e o turismo internacional de Flecheiras e Mundaú, Trairi tem no litoral seu maior ativo para o treino ao ar livre. Um personal trainer ajuda a organizar a rotina de exercícios considerando o calor, o vento e a rotina sazonal de quem mora ou passa uma temporada nas praias do município.',

  vizinhas: ['itapipoca-ce', 'caucaia-ce', 'fortaleza-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Trairi', url: 'https://cidades.ibge.gov.br/brasil/ce/trairi/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura Municipal de Trairi', url: 'https://www.trairi.ce.gov.br/omunicipio.php' },
  ],
  atualizadoEm: '2026-07-02',
};
