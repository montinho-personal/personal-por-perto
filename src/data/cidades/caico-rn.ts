import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'caico-rn',
  nome: 'Caicó',
  uf: 'RN',
  estado: 'Rio Grande do Norte',
  estadoSlug: 'rio-grande-do-norte',
  regiao: 'Nordeste',
  gentilico: 'caicoense',
  tipo: 'cidade',

  populacao: 61146,
  populacaoAno: 2022,
  idhm: 0.712,
  idhmClasse: 'alto',
  altitudeM: 151,

  resumoEconomico:
    'Principal cidade do Seridó potiguar, Caicó é polo regional de comércio, serviços, saúde e educação para dezenas de municípios do interior do Rio Grande do Norte. A economia se apoia na pecuária leiteira e na produção de laticínios — com destaque para o tradicional queijo de manteiga e o queijo de coalho —, no bordado caicoense reconhecido com Indicação Geográfica e em uma indústria têxtil em crescimento, voltada a confecções como camisetas e moda íntima.',

  mercado:
    'Por concentrar serviços e renda de toda a região do Seridó, Caicó reúne uma rede de academias de musculação, estúdios de funcional e crossfit que sustenta a demanda por personal trainers acima do que se esperaria pelo tamanho da cidade. A forte cultura de corrida de rua, puxada por provas tradicionais, e o público que vem de cidades vizinhas treinar ampliam o mercado para profissionais que oferecem acompanhamento presencial e online.',

  bairrosNobres: ['Paraíba', 'Recreio', 'Boa Passagem', 'Centro'],
  bairrosPopulares: ['Penedo', 'Walfredo Gurgel', 'João XXIII', 'Barra Nova'],

  parques: [
    {
      nome: 'Ilha de Sant’Ana',
      descricao:
        'Parque urbano multifuncional às margens do rio Seridó, na Avenida Seridó, com calçadões, pista para caminhada, ciclismo e espaço para eventos — ponto de partida de várias corridas de rua da cidade.',
    },
    {
      nome: 'Açude Itans',
      descricao:
        'Cartão-postal de Caicó, inaugurado em 1936 às margens do rio Seridó. A parede do açude, parcialmente pavimentada, e o entorno servem de cenário para caminhadas e pedais com vista para o espelho d’água.',
    },
    {
      nome: 'Orla do rio Seridó',
      descricao:
        'O eixo do rio Seridó que corta a cidade reúne avenidas e calçadões usados por corredores e caminhantes, sobretudo no início da manhã e no fim da tarde, quando o calor do semiárido afrouxa.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de ciclovia e ciclofaixa concentrados no entorno da Ilha de Sant’Ana e em avenidas centrais, usados tanto para deslocamento quanto para lazer e treino.',

  clima:
    'O clima é semiárido quente e seco, típico do Seridó potiguar e do bioma Caatinga, com sol forte o ano inteiro, baixa umidade e temperaturas que costumam superar os 35 °C nos meses mais quentes. As chuvas se concentram no primeiro semestre.',
  climaTreino:
    'O calor intenso e a baixa umidade pedem treino bem cedo de manhã ou após o pôr do sol, com hidratação reforçada e proteção solar. Atividades ao ar livre no meio do dia devem ser evitadas, e a aclimatação é essencial para quem chega de outras regiões.',

  mobilidade:
    'O deslocamento é predominantemente por carro, moto e ônibus, com a BR-427 como principal eixo de ligação de Caicó ao restante do estado e às cidades vizinhas do Seridó. O tamanho compacto da cidade facilita trajetos curtos a pé ou de bicicleta.',

  corridas: [
    {
      nome: 'Corrida de Sant’Ana',
      descricao:
        'Uma das provas mais tradicionais do estado, integra a programação da Festa de Sant’Ana (em julho), com largada na Ilha de Sant’Ana e percursos de 5 km, 10 km, caminhada e prova kids.',
    },
    {
      nome: 'Corrida Nacional do SESI',
      descricao:
        'Etapa caicoense de uma prova de abrangência nacional, reunindo corredores da cidade e da região do Seridó em percursos de rua.',
    },
    {
      nome: 'Circuito de Corridas do Servidor',
      descricao:
        'Evento de corrida de rua sediado em Caicó, com etapa local que movimenta a cena de corredores amadores do município.',
    },
  ],
  culturaEsportiva:
    'Caicó tem forte cultura de corrida de rua, com provas que se misturam à intensa vida cultural e religiosa da cidade — da Festa de Sant’Ana, Patrimônio Cultural Imaterial, ao tradicional carnaval caicoense. O futebol amador e o ciclismo também têm público fiel, e os calçadões à beira do rio Seridó concentram caminhantes e corredores.',
  academias:
    'A rede de academias de musculação e estúdios de funcional e crossfit, somada aos espaços públicos da Ilha de Sant’Ana e do Açude Itans, dá boa cobertura para quem treina, atendendo também a moradores das cidades vizinhas que buscam estrutura na cidade-polo.',

  destaquesFitness: [
    'Ilha de Sant’Ana e orla do rio Seridó: espaços públicos para corrida e caminhada no centro da cidade.',
    'Cena de corrida de rua consolidada, com provas tradicionais como a Corrida de Sant’Ana.',
    'Cidade-polo do Seridó, que atrai público de toda a região para academias e treinos.',
    'Açude Itans como cenário para pedais e caminhadas ao amanhecer e no fim da tarde.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Cidade-polo do Seridó, com cultura de corrida ativa e espaços como a Ilha de Sant’Ana e o Açude Itans, Caicó é um bom lugar para quem quer treinar respeitando o clima do semiárido. Um personal trainer ajuda a montar uma rotina que aproveite as horas mais frescas do dia e potencialize os resultados — da corrida à beira do rio Seridó à musculação nas academias da cidade.',

  vizinhas: ['natal-rn', 'mossoro-rn'],

  fontes: [
    { nome: 'IBGE Cidades — Caicó', url: 'https://cidades.ibge.gov.br/brasil/rn/caico/panorama' },
    { nome: 'Prefeitura de Caicó', url: 'https://www.caico.rn.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
