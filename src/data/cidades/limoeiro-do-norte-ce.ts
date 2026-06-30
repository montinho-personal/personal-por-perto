import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'limoeiro-do-norte-ce',
  nome: 'Limoeiro do Norte',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'limoeirense',
  tipo: 'cidade',

  populacao: 59560,
  populacaoAno: 2022,
  idhm: 0.682,
  idhmClasse: 'médio',
  altitudeM: 70,

  resumoEconomico:
    'Conhecida como Princesa do Vale, Limoeiro do Norte é cidade-polo do Vale do Jaguaribe, no Baixo Jaguaribe cearense, situada entre braços do rio Jaguaribe e do Banabuiú. A economia gira em torno da fruticultura irrigada e do agronegócio na Chapada do Apodi — com produção de banana, melão, mamão e outras frutas, parte voltada à exportação —, somada ao comércio, aos serviços e a um polo de ensino que atende toda a região. A agricultura irrigada deu à cidade um dos maiores PIBs per capita do interior do estado.',

  mercado:
    'Como cidade média que concentra comércio, serviços e ensino superior para o Vale do Jaguaribe, Limoeiro do Norte tem um mercado fitness em formação, apoiado por academias locais e pela forte cultura de bicicleta e de atividade ao ar livre. A procura por personal trainers tende a crescer entre estudantes, trabalhadores do agronegócio e moradores que buscam treino orientado para lidar com o calor do semiárido.',

  bairrosNobres: ['Centro', 'Santa Luzia', 'Dr. José Simões', 'Bom Nome'],
  bairrosPopulares: ['João XXIII', 'Luís Alves de Freitas', 'Bom Fim', 'Socorro'],

  parques: [
    {
      nome: 'Praça da Matriz (Praça José Osterne)',
      descricao:
        'Principal praça do Centro, palco de eventos culturais da cidade; o entorno arborizado e os calçadões são usados para caminhada e encontros ao fim do dia.',
    },
    {
      nome: 'Margens do rio Jaguaribe',
      descricao:
        'Cercada por braços do Jaguaribe e do Banabuiú, a cidade tem nas margens do rio e nas estradas vicinais entre os perímetros irrigados um cenário aberto para caminhada, corrida e pedal.',
    },
    {
      nome: 'Chapada do Apodi',
      descricao:
        'O relevo elevado da chapada, que avança pela divisa com o Rio Grande do Norte, oferece estradas e trilhos em meio à caatinga e aos plantios irrigados, usados por ciclistas e corredores da região.',
    },
  ],
  ciclovias:
    'A bicicleta é parte da identidade local — Limoeiro do Norte é chamada de Capital Cearense da Bicicleta e Terra das Bicicletas, com uso intenso do transporte por bike no dia a dia e passeios ciclísticos tradicionais pelas ruas da cidade. O relevo plano da área urbana favorece o pedal como meio de locomoção e como atividade física.',

  clima:
    'O clima é semiárido quente, típico da caatinga, com temperaturas altas ao longo de quase todo o ano e baixa amplitude entre as estações. Há uma estação chuvosa concentrada no primeiro semestre (em torno de fevereiro a maio) e um longo período seco no restante do ano, quando o calor e a baixa umidade se acentuam.',
  climaTreino:
    'O calor do semiárido pede treinar bem cedo ou no fim da tarde, com hidratação reforçada e atenção à exposição ao sol; nos horários mais quentes, ambientes climatizados são a opção mais segura, e o período após as chuvas costuma ser mais agradável para atividades ao ar livre.',

  mobilidade:
    'A BR-116 passa junto à entrada da cidade e conecta Limoeiro do Norte a Fortaleza e ao restante do Vale do Jaguaribe, principal eixo logístico para o escoamento da produção de frutas. No deslocamento interno, a bicicleta tem peso incomum para uma cidade do porte, dividindo as vias com o transporte por ônibus e os veículos particulares.',

  corridas: [
    {
      nome: 'Corrida do Raio de Limoeiro do Norte',
      descricao:
        'Prova de corrida de rua realizada na cidade, que reúne corredores da região do Vale do Jaguaribe em percursos pelas vias urbanas.',
    },
    {
      nome: 'Corrida Bless Fit — Etapa Limoeiro do Norte',
      descricao:
        'Etapa de circuito de corrida de rua sediada em Limoeiro do Norte, voltada a praticantes locais e de cidades vizinhas.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é marcada pelo ciclismo do cotidiano, que rendeu à cidade o apelido de Capital Cearense da Bicicleta, somado a provas de corrida de rua e ao uso das margens do rio e das estradas entre os perímetros irrigados — tudo moldado pelo calor do semiárido.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade-polo do interior nordestino.',

  destaquesFitness: [
    'Capital Cearense da Bicicleta: forte cultura de pedal no transporte e no lazer.',
    'Margens do rio Jaguaribe e estradas dos perímetros irrigados como espaço de corrida e caminhada.',
    'Calor do semiárido, que exige planejamento de horário e hidratação no treino.',
    'Cidade-polo do Vale do Jaguaribe, com economia de fruticultura irrigada na Chapada do Apodi.',
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
    'Quente, plana e movida a bicicleta, Limoeiro do Norte pede um treino adaptado ao semiárido e que aproveite as ruas, as margens do rio e a forte cultura de pedal. Um personal trainer ajuda a organizar a rotina respeitando o calor, escolhendo os melhores horários e mantendo a constância ao longo do ano.',

  vizinhas: ['russas-ce', 'aracati-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Limoeiro do Norte', url: 'https://cidades.ibge.gov.br/brasil/ce/limoeiro-do-norte/panorama' },
    { nome: 'Prefeitura de Limoeiro do Norte', url: 'https://www.limoeirodonorte.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
