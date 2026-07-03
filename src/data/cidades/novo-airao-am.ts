import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'novo-airao-am',
  nome: 'Novo Airão',
  uf: 'AM',
  estado: 'Amazonas',
  estadoSlug: 'amazonas',
  regiao: 'Norte',
  gentilico: 'novo-airãoense',
  tipo: 'cidade',

  populacao: 15761,
  populacaoAno: 2022,
  idhm: 0.570,
  idhmClasse: 'baixo',
  pibPerCapita: 15437.83,
  pibPerCapitaAno: 2023,

  resumoEconomico:
    'Às margens do rio Negro, Novo Airão é a principal porta de entrada do Parque Nacional de Anavilhanas — o segundo maior arquipélago fluvial do mundo, com centenas de ilhas que mudam de forma conforme a cheia e a seca do rio — e também dá acesso ao Parque Nacional do Jaú. Conhecida como a "cidade do boto-cor-de-rosa" pela interação com os botos na Plataforma Flutuante, a economia do município gira em torno do ecoturismo e do turismo de base comunitária, da pesca (inclusive a pesca esportiva de tucunaré) e da marcenaria e marchetaria artesanal, com destaque para o trabalho de reaproveitamento de madeira feito pela Fundação Almerinda Malaquias. O município integra a Região Metropolitana de Manaus.',

  mercado:
    'O mercado fitness de Novo Airão é pequeno, típico de um município do interior do Amazonas com pouco mais de 15 mil habitantes, concentrado em academias locais de musculação. A procura por personal trainer tende a vir de moradores que buscam treino orientado para o calor e a umidade constantes, e também de guias, condutores de turismo e tripulantes de embarcações que precisam de preparo físico para trilhas, remo e o dia a dia do ecoturismo em Anavilhanas e no Jaú.',

  bairrosNobres: [],
  bairrosPopulares: [],

  parques: [
    {
      nome: 'Parque Nacional de Anavilhanas',
      descricao:
        'Unidade de conservação federal que protege o segundo maior arquipélago fluvial do mundo, formado por centenas de ilhas no rio Negro; passeios de barco, canoagem e observação de fauna e flora mudam de paisagem entre a cheia e a seca do rio.',
    },
    {
      nome: 'Parque Nacional do Jaú',
      descricao:
        'Uma das maiores unidades de conservação totalmente florestadas da América do Sul, parte do Complexo de Conservação da Amazônia Central (Patrimônio Mundial da UNESCO), acessível a partir de Novo Airão por expedições fluviais.',
    },
    {
      nome: 'Orla do Centro (beira-rio do Negro)',
      descricao:
        'Trecho à beira do rio Negro, junto ao Centro, alvo de obras de revitalização e ponto onde moradores caminham, se banham e acompanham o pôr do sol — a referência local para atividade ao ar livre.',
    },
    {
      nome: 'Praias fluviais do rio Negro',
      descricao:
        'Na época da seca, o recuo do rio Negro revela praias de areia clara em meio ao arquipélago de Anavilhanas, usadas para banho e lazer e acessadas principalmente de barco.',
    },
  ],
  ciclovias:
    'Não há estrutura cicloviária relevante no município; os deslocamentos a pé e de bicicleta acontecem pelas vias do Centro, e a vida ao ar livre é puxada pela orla e pelo rio.',

  clima:
    'O clima é equatorial, quente e úmido o ano inteiro, com temperaturas elevadas e chuvas abundantes típicas da Amazônia. A rotina da cidade é marcada pelo ciclo hidrológico do rio Negro, que alterna cheia (aproximadamente de dezembro a junho) e seca (de julho a novembro), definindo se a paisagem é de floresta alagada ou de praias fluviais expostas.',
  climaTreino:
    'O calor e a umidade elevados pedem treinos no início da manhã ou no fim da tarde, com hidratação reforçada; a época de seca costuma favorecer o treino ao ar livre e o acesso às praias do rio, enquanto na cheia as opções de piso seco ficam mais restritas ao Centro.',

  mobilidade:
    'O acesso rodoviário a Novo Airão é feito pela AM-352 (Estrada de Novo Airão, com cerca de 98,6 km), que parte da AM-070 nas proximidades de Manacapuru; partindo de Manaus, a viagem soma cerca de 190 a 200 km e passa pela Ponte Rio Negro. A estrada tem desníveis acentuados e pouca sinalização. O acesso fluvial pelo rio Negro, em barcos regionais e lanchas rápidas a partir de Manaus, também é bastante usado, sobretudo por quem chega para o turismo em Anavilhanas. Dentro da cidade, os deslocamentos são curtos, feitos a pé, de moto e mototáxi.',

  corridas: [
    {
      nome: 'XTERRA Amazônia',
      descricao:
        'Etapa do circuito nacional de esportes off-road XTERRA Brasil, sediada em Novo Airão desde 2021, com provas de trail run (5 km, 10 km e 21 km), triatlo e endurance de 50 km em meio à floresta amazônica, reunindo cerca de 600 atletas amadores e profissionais por edição.',
    },
  ],
  culturaEsportiva:
    'A vida ativa de Novo Airão é indissociável do rio Negro: natação e banho de rio, remo, passeios de barco e a pesca esportiva de tucunaré fazem parte do cotidiano de moradores e visitantes. A observação de botos-cor-de-rosa e as trilhas de ecoturismo em Anavilhanas e no Jaú também exigem preparo físico de guias e turistas. A cidade ainda ganhou projeção esportiva ao sediar a XTERRA Amazônia, etapa do maior circuito off-road do país.',
  academias:
    'A oferta é restrita a academias locais de musculação, de pequeno porte, concentradas na área central do município, compatível com o tamanho de uma cidade pequena do interior do Amazonas.',

  destaquesFitness: [
    'Porta de entrada do Parque Nacional de Anavilhanas, o segundo maior arquipélago fluvial do mundo.',
    'Sede da XTERRA Amazônia, etapa de trail run, triatlo e endurance disputada em meio à floresta.',
    'Ciclo de cheia e seca do rio Negro, que alterna floresta alagada e praias fluviais e molda o treino ao ar livre.',
    'Forte vocação para pesca esportiva de tucunaré e observação de botos-cor-de-rosa, atividades que exigem preparo físico de guias e visitantes.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Cercada pelo rio Negro e pelas ilhas de Anavilhanas, Novo Airão vive no ritmo da cheia e da seca, entre o ecoturismo, a pesca e a floresta. Treinar na cidade significa lidar com o calor e a umidade equatoriais e aproveitar a orla e as praias fluviais quando o rio permite — e é nesse contexto que um personal trainer ajuda a organizar horários, hidratação e constância, seja para moradores, seja para quem vive do turismo local.',

  vizinhas: ['manaus-am', 'manacapuru-am'],

  fontes: [
    { nome: 'IBGE Cidades — Novo Airão', url: 'https://cidades.ibge.gov.br/brasil/am/novo-airao/panorama' },
    { nome: 'Prefeitura de Novo Airão', url: 'https://www.novoairao.am.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
