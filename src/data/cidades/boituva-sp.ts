import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'boituva-sp',
  nome: 'Boituva',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'boituvense',
  tipo: 'cidade',

  populacao: 61081,
  populacaoAno: 2022,
  idhm: 0.780,
  idhmClasse: 'alto',
  altitudeM: 580,

  resumoEconomico:
    'Conhecida como a Capital Nacional do Paraquedismo e do Balonismo Turístico, Boituva fica na região de Sorocaba, no interior paulista, a cerca de 120 km da capital. A economia combina um distrito industrial forte, instalado às margens da Rodovia Castello Branco, o comércio local e um turismo de aventura movimentado pelo Centro Nacional de Paraquedismo — um dos maiores da América Latina — e pelos voos de balão. A posição estratégica na Castello Branco sustenta a logística das indústrias e o fluxo de visitantes que chegam para saltar e voar.',

  mercado:
    'Por ser uma cidade de porte médio em crescimento e com boa renda média, Boituva tem um mercado fitness em expansão, apoiado por academias de bairro e estúdios de treino. A procura por personal trainers tende a crescer entre famílias que se mudaram para os condomínios e loteamentos da cidade e entre quem busca preparo físico para o próprio turismo de aventura que é a marca do município.',

  bairrosNobres: ['Centro', 'Cidade Jardim', 'Vila Aparecida', 'Portal Ville'],
  bairrosPopulares: ['Jardim América', 'Boituville', 'Colina Nova Boituva', 'Jardim das Palmeiras'],

  parques: [
    {
      nome: 'Centro Nacional de Paraquedismo (CNP)',
      descricao:
        'Um dos maiores centros de paraquedismo da América Latina, com ampla área aberta e pista, é o símbolo da cidade; o entorno reúne clubes, escolas de salto e movimento constante de praticantes de esporte de aventura.',
    },
    {
      nome: 'Lago do Taboãozinho',
      descricao:
        'Área de lazer com espelho d’água e áreas verdes usada por moradores para caminhada e atividades ao ar livre em meio à natureza urbana.',
    },
    {
      nome: 'Vias dos condomínios e loteamentos',
      descricao:
        'Loteamentos e condomínios como o Portal Ville oferecem ruas arborizadas e tranquilas que servem de percurso para corrida e caminhada no dia a dia dos moradores.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias residenciais dos bairros e loteamentos e em estradas vicinais do entorno.',

  clima:
    'O clima é tropical de altitude, com verão quente e chuvoso (de novembro a março) e inverno mais ameno e seco. A cerca de 580 metros de altitude, a cidade tem temperaturas agradáveis boa parte do ano, com dias que costumam variar aproximadamente entre 13 °C e 30 °C, e noites mais frias no inverno.',
  climaTreino:
    'O inverno seco e ameno favorece o treino ao ar livre em quase qualquer horário; no verão, o calor e as chuvas de fim de tarde pedem atenção à hidratação e preferência pelo começo da manhã. As manhãs de céu limpo, aliás, são o horário nobre também para os voos de balão na cidade.',

  mobilidade:
    'A Rodovia Castello Branco (SP-280) é o principal eixo de Boituva, ligando a cidade a Sorocaba, Itu e à capital paulista e sustentando o distrito industrial e o turismo. O deslocamento urbano é feito por ônibus e, dado o porte da cidade, por carro e moto, com distâncias curtas entre os bairros.',

  corridas: [
    {
      nome: 'Ultra Desafio Boituva',
      descricao:
        'Prova de corrida com largada de madrugada e percursos que exploram a região, com estrutura de pós-prova para os participantes; consolidou-se no calendário esportivo local.',
    },
    {
      nome: 'Rock In Run Boituva',
      descricao:
        'Corrida e caminhada de 5 km realizada no fim da tarde, com clima descontraído, que atrai corredores iniciantes e recreativos da cidade e do entorno.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Boituva é fortemente marcada pelos esportes aéreos — paraquedismo e balonismo — que dão identidade à cidade, somados a corridas de rua no calendário local e ao uso das vias residenciais e áreas verdes para caminhada e pedal.',
  academias:
    'A oferta é formada principalmente por academias de musculação e estúdios de treino funcional distribuídos pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior paulista em crescimento.',

  destaquesFitness: [
    'Capital Nacional do Paraquedismo e do Balonismo Turístico, com forte turismo de aventura.',
    'Centro Nacional de Paraquedismo, um dos maiores da América Latina.',
    'Clima tropical de altitude, com inverno seco e ameno favorável ao treino ao ar livre.',
    'Posição estratégica na Rodovia Castello Branco, com distrito industrial e economia diversificada.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Cidade de clima agradável, em crescimento e com uma vocação única para os esportes de aventura, Boituva reúne boas condições para treinar ao ar livre boa parte do ano. Um personal trainer ajuda a organizar a rotina aproveitando o inverno seco e as vias tranquilas dos bairros, ajustando o treino ao calor e às chuvas do verão e mantendo a constância ao longo das estações.',

  vizinhas: ['tatui-sp', 'itu-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Boituva', url: 'https://cidades.ibge.gov.br/brasil/sp/boituva/panorama' },
    { nome: 'Prefeitura de Boituva', url: 'https://www.boituva.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
