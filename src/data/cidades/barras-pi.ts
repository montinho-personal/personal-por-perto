import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'barras-pi',
  nome: 'Barras',
  uf: 'PI',
  estado: 'Piauí',
  estadoSlug: 'piaui',
  regiao: 'Nordeste',
  gentilico: 'barrense',
  tipo: 'cidade',

  populacao: 47938,
  populacaoAno: 2022,
  idhm: 0.595,
  idhmClasse: 'baixo',
  altitudeM: 88,
  pibPerCapita: 14048.62,
  pibPerCapitaAno: 2023,

  resumoEconomico:
    'No norte do Piauí, na Microrregião do Baixo Parnaíba Piauiense, a cerca de 120 km de Teresina, Barras é a sexta cidade mais populosa do estado e a segunda maior de sua microrregião. A economia é fortemente dependente da administração pública, responsável por 52,7% do valor adicionado do PIB municipal, seguida pelos serviços (32,9%), pela agropecuária (8,4%) e pela indústria (6%) — perfil típico de cidade-polo do interior nordestino, cujo comércio diversificado e descentralizado atende também os municípios vizinhos.',

  mercado:
    'O mercado de personal trainers em Barras é modesto, refletindo a dependência da economia local do funcionalismo público e do comércio de bens e serviços. A procura por acompanhamento individualizado tende a se concentrar no Centro e nos bairros próximos à Avenida Beira Rio, principal espaço de lazer ativo da cidade.',

  bairrosNobres: ['Centro', 'Jardim'],
  bairrosPopulares: ['Angelim', 'Boa Presença', 'Boca da Mata', 'São Domingos', 'Esperança'],

  parques: [
    {
      nome: 'Avenida Beira Rio',
      descricao:
        'Principal espaço de lazer ativo de Barras, à margem do rio Longá; recebeu a 1ª Corrida Barras Runners e é o ponto mais procurado para caminhada e corrida na cidade, sobretudo no fim da tarde.',
    },
  ],
  ciclovias:
    'A cidade não tem malha cicloviária estruturada; o ciclismo urbano acontece nas ruas do Centro e da Avenida Beira Rio, além das trilhas de terra usadas pela Barras Marathon na zona rural.',

  clima:
    'O clima é tropical subúmido, com cerca de seis meses de período seco, temperaturas médias entre 24 °C e 36 °C e pluviosidade anual em torno de 1.554 mm, sob vegetação de transição entre caatinga e mata dos cocais.',
  climaTreino:
    'O calor forte durante boa parte do ano pede treinos no início da manhã ou no fim da tarde, com hidratação reforçada; a Avenida Beira Rio, à margem do Longá, costuma ficar mais amena nesses horários e concentra o movimento de quem treina ao ar livre.',

  mobilidade:
    'Barras é servida pela rodovia estadual PI-110, que a liga a Miguel Alves, Batalha e Piracuruca, e fica próxima do corredor da BR-343, eixo que conecta Teresina ao litoral piauiense. O deslocamento interno é feito majoritariamente por veículos particulares, moto e transporte coletivo local.',

  corridas: [
    {
      nome: 'Corrida Barras Runners',
      descricao:
        'Prova de 5 km disputada na região da Avenida Beira Rio, com apoio da Secretaria Municipal de Esportes e da Secretaria da Juventude — principal corrida de rua da cidade.',
    },
    {
      nome: 'Barras Marathon',
      descricao:
        'Prova de mountain bike (XCM) que já chegou à 8ª edição, disputada em setembro; uma das etapas mais tradicionais e disputadas do Campeonato Piauiense de XCM.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina o uso da Avenida Beira Rio para caminhada e corrida com duas provas de peso no calendário: a Corrida Barras Runners, de rua, e a Barras Marathon, de mountain bike, que atrai atletas de outras cidades do Piauí para as trilhas do entorno.',
  academias:
    'A oferta de academias é enxuta e concentrada no Centro, compatível com uma cidade média do interior norte-piauiense cuja economia depende sobretudo do setor público e do comércio.',

  destaquesFitness: [
    'Avenida Beira Rio, às margens do rio Longá, como principal espaço de caminhada e corrida da cidade.',
    'Barras Marathon, prova de mountain bike XCM já na 8ª edição, referência regional no calendário piauiense.',
    'Corrida Barras Runners, prova de rua de 5 km com apoio da prefeitura.',
    'Clima tropical subúmido com cerca de seis meses de seca, exigindo hidratação reforçada e treino nos horários mais frescos.',
  ],

  precos: {
    avulsaMin: 40,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 600,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Cidade-polo do norte do Piauí à margem do rio Longá, Barras tem na Avenida Beira Rio o palco cotidiano da atividade física e em provas como a Barras Marathon e a Corrida Barras Runners os pontos altos do calendário esportivo. Um personal trainer ajuda a manter a constância do treino, ajustando horários e hidratação ao calor da região.',

  vizinhas: ['piripiri-pi', 'campo-maior-pi'],

  fontes: [
    { nome: 'IBGE Cidades — Barras', url: 'https://cidades.ibge.gov.br/brasil/pi/barras/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura Municipal de Barras', url: 'https://www.barras.pi.gov.br/' },
  ],
  atualizadoEm: '2026-07-05',
};
