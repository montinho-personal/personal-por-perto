import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'bom-jesus-pi',
  nome: 'Bom Jesus',
  uf: 'PI',
  estado: 'Piauí',
  estadoSlug: 'piaui',
  regiao: 'Nordeste',
  gentilico: 'bom-jesuense',
  tipo: 'cidade',

  populacao: 28796,
  populacaoAno: 2022,
  idhm: 0.668,
  idhmClasse: 'médio',
  pibPerCapita: 57705.04,
  pibPerCapitaAno: 2023,
  altitudeM: 277,

  resumoEconomico:
    'Conhecida como a "Capital do Gurguéia", Bom Jesus fica no sudoeste do Piauí, no vale do rio Gurguéia, distante cerca de 635 km de Teresina. Desde os anos 1990 a cidade recebeu produtores de grãos vindos do Sul do Brasil, do Uruguai e do Paraguai, que passaram a cultivar soja e algodão nos cerrados piauienses — movimento que colocou o município no eixo do MATOPIBA, a chamada última fronteira agrícola do país, e o levou a figurar entre os maiores PIBs do Piauí. Ao lado do agronegócio, a economia é movimentada pelo comércio, pelos serviços ligados ao campo e pela pecuária, além do polo de ensino formado pelo campus da Universidade Federal do Piauí (UFPI) e pela Universidade Estadual do Piauí (UESPI).',

  mercado:
    'Por ser uma cidade de porte médio no interior do Piauí, o mercado fitness de Bom Jesus é enxuto e concentrado em academias locais de musculação e treino funcional, além de profissionais que atendem também a comunidade universitária da UFPI. A procura por personal trainers tende a crescer entre produtores rurais, empresários do agronegócio e estudantes que buscam treino orientado para lidar com o calor extremo característico do cerrado piauiense.',

  bairrosNobres: ['Centro', 'São Pedro'],
  bairrosPopulares: ['Cohab', 'Água Branca', 'Chapadinha I', 'São Luís'],

  parques: [
    {
      nome: 'Praça da Bandeira',
      descricao:
        'Principal praça do Centro, ao lado da Igreja Matriz do Senhor Bom Jesus da Gurguéia, é ponto de encontro e referência para caminhadas curtas no coração da cidade.',
    },
    {
      nome: 'Entorno do campus da UFPI (Professora Cinobelina Elvas)',
      descricao:
        'A área do campus universitário, com seus espaços abertos, é usada por estudantes e moradores para caminhada e atividade física ao ar livre.',
    },
    {
      nome: 'Vale do Rio Gurguéia',
      descricao:
        'O rio que dá nome à região corta o entorno da cidade e, junto com as áreas rurais de cerrado, oferece paisagem para quem busca caminhada e pedal fora do perímetro urbano mais denso.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada nas vias do Centro; boa parte da caminhada, da corrida e do pedal acontece nas ruas da área urbana e nas estradas de acesso às fazendas do cerrado.',

  clima:
    'O clima é tropical, com estação seca prolongada e chuvas concentradas entre outubro e abril (índice pluviométrico de cerca de 1.000 mm ao ano). No trimestre de junho a agosto praticamente não chove, e a umidade relativa do ar pode cair para 20% ou menos. Bom Jesus figura com frequência entre os municípios com as temperaturas mais altas do Brasil, com termômetros ultrapassando os 40 °C.',
  climaTreino:
    'O calor extremo e a baixíssima umidade do período seco exigem treinar bem cedo ou no fim da tarde, com hidratação reforçada e atenção à exposição ao sol; em ambientes climatizados o treino fica mais seguro nos horários de pico de calor, e a estação chuvosa tende a amenizar um pouco as condições para atividade ao ar livre.',

  mobilidade:
    'O principal eixo de acesso é a BR-135, que liga Bom Jesus a Eliseu Martins e Currais ao sul e à região de Uruçuí em direção a Teresina ao norte. O deslocamento urbano é feito majoritariamente por carro e moto, e o Aeroporto Regional do Vale do Gurguéia, a poucos quilômetros do Centro, conecta a cidade a voos regionais ligados ao agronegócio.',

  corridas: [
    {
      nome: 'Corrida de Rua de Bom Jesus',
      descricao:
        'Prova anual (já em sua 9ª edição) com largada em frente à Prefeitura Municipal e percurso de 5 km, consolidada como um dos principais eventos de pedestrianismo do Sul do Piauí, reunindo corredores de várias cidades e estados.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina caminhadas e corridas nas ruas do Centro com a rotina de estudantes da UFPI e trabalhadores ligados ao agronegócio, tudo condicionado ao calor intenso do cerrado piauiense, que molda os horários de treino ao longo do ano.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, concentradas principalmente no Centro, com porte compatível com uma cidade média do interior do Piauí.',

  destaquesFitness: [
    'Polo do agronegócio no cerrado piauiense, parte do MATOPIBA, com produção de soja e algodão.',
    'Campus da UFPI (Professora Cinobelina Elvas), que atrai estudantes e movimenta a demanda por atividade física.',
    'Calor extremo e baixa umidade no período seco, entre as condições mais quentes do Brasil.',
    'Acesso pela BR-135, eixo que liga a cidade à região Sul do Piauí e ao corredor logístico do agronegócio.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 600,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Cidade do agronegócio no cerrado piauiense, Bom Jesus pede um treino planejado em torno do calor extremo e da baixa umidade que marcam boa parte do ano. Um personal trainer ajuda a organizar a rotina de produtores, empresários e estudantes da UFPI, definindo os melhores horários e mantendo a constância entre a longa estação seca e o período de chuvas.',

  vizinhas: ['sao-raimundo-nonato-pi', 'floriano-pi', 'teresina-pi'],

  fontes: [
    { nome: 'IBGE Cidades — Bom Jesus', url: 'https://cidades.ibge.gov.br/brasil/pi/bom-jesus/panorama' },
    { nome: 'Atlas Brasil — IDHM (Bom Jesus)', url: 'https://www.atlasbrasil.org.br/perfil/municipio/220190' },
    { nome: 'Prefeitura de Bom Jesus', url: 'https://www.bomjesus.pi.gov.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
