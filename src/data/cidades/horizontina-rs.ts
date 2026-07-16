import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'horizontina-rs',
  nome: 'Horizontina',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'horizontinense',
  tipo: 'cidade',

  populacao: 18851,
  populacaoAno: 2022,
  idhm: 0.780,
  idhmClasse: 'alto',
  altitudeM: 343,

  resumoEconomico:
    'No Noroeste gaúcho, na região da Fronteira Noroeste, Horizontina começou a ser colonizada em 1927, sobretudo por imigrantes alemães, com a chegada posterior de descendentes portugueses, eslavos e italianos. Distrito de Santa Rosa até ser emancipada em dezembro de 1954, a cidade é conhecida como berço da colheitadeira automotriz nacional: foi ali que a Schneider Logemann & Cia. (SLC), fundada em 1945, lançou em novembro de 1965 a SLC 65-A, a primeira colheitadeira autopropelida fabricada no Brasil. A multinacional John Deere assumiu o controle da empresa entre 1979 e 1999 e mantém no município uma grande fábrica de plantadeiras e colheitadeiras. A indústria responde pela maior parte do valor adicionado do PIB municipal, com forte presença da montagem de máquinas agrícolas e de empresas metalmecânicas locais, ao lado de um campus da Fahor (Faculdade Horizontina), voltado à formação em engenharias e agronegócio.',

  mercado:
    'Em uma cidade industrial de porte médio, o mercado de personal trainers em Horizontina é enxuto e concentrado no Centro, formado por academias locais de musculação e treino funcional e por profissionais autônomos. A rotina de turnos da indústria metalmecânica e a presença de estudantes da Fahor sustentam parte da procura por treino em horários alternativos, incluindo o fim de tarde e o início da noite.',

  bairrosNobres: ['Centro', 'Eldorado', 'Alvorada'],
  bairrosPopulares: ['São José', 'Industrial', 'Kennedy', 'Novo Horizonte'],

  parques: [
    {
      nome: 'Parque Natural Municipal Logemann',
      descricao:
        'Criado por lei municipal em 2021, é o maior remanescente de mata urbana da cidade, com cerca de 14,7 hectares de vegetação nativa de Mata Atlântica — espaço de referência para caminhada em contato com a natureza.',
    },
    {
      nome: 'Praça 25 de Julho',
      descricao:
        'Na Avenida Tucunduva, é um dos principais pontos de encontro da cidade, com área arborizada usada para caminhada, descanso e eventos comunitários e feiras ao ar livre.',
    },
    {
      nome: 'Parque Municipal e entorno do Rio Buricá',
      descricao:
        'Estrutura com quadras poliesportivas, campo de futebol, pista de caminhada e playground, complementada por um trecho verde ao longo do Rio Buricá com trilhas e áreas de descanso.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é pontual, comum a um município de porte médio; a maior parte do pedal e da corrida acontece nas ruas do Centro, nas praças e nas estradas que ligam a cidade à zona rural e aos distritos vizinhos.',

  clima:
    'O clima é subtropical, com as quatro estações bem marcadas. Os verões são quentes, com temperaturas que chegam à casa dos 30 °C, enquanto os invernos são frios, com geadas frequentes e mínimas que podem se aproximar de 0 °C. As chuvas se distribuem ao longo do ano, sem uma estação seca definida.',
  climaTreino:
    'Nas manhãs de inverno, o frio e a geada pedem agasalho e cuidado redobrado com o piso, o que aumenta a procura por musculação e treino indoor; já nos meses mais quentes, o ideal é treinar ao ar livre cedo ou no fim da tarde, evitando o sol forte do meio-dia.',

  mobilidade:
    'Horizontina é servida pela BR-468 e por rodovias estaduais como a ERS-342, que liga a cidade a Três de Maio e a Doutor Maurício Cardoso, e a ERS-305, em direção a Vila Cascata. Um contorno viário (VRS-837) foi inaugurado para desviar o tráfego pesado do centro, conectando essas rodovias estaduais. O transporte urbano é feito por ônibus, e a rodoviária local liga a cidade a outros municípios da Fronteira Noroeste e do Rio Grande do Sul.',

  corridas: [
    {
      nome: 'Circuito Regional de Corridas — etapa Horizontina',
      descricao:
        'Etapa sediada em Horizontina de um circuito regional de corridas de rua, organizada pela Secretaria Municipal de Esportes, Cultura, Juventude e Lazer em parceria com a ACEHOR (Associação Cultural e Esportiva de Horizontina), com provas de diferentes distâncias — de percursos infantis a 5 km para o público adulto — com largada na Avenida Tucunduva, no Centro.',
    },
  ],
  culturaEsportiva:
    'A identidade esportiva da cidade é atravessada pela história industrial: o legado da SLC e da John Deere marca o cotidiano de boa parte das famílias horizontinenses. No dia a dia, a prática esportiva se apoia no Estádio Municipal Wilson Nascimento, no Ginásio de Esportes Edio Stoll e em espaços de lazer como o Balneário Lago das Estremosas, além das provas de corrida de rua organizadas com apoio da ACEHOR.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional concentradas no Centro, com opções também em bairros como Eldorado, além de profissionais autônomos de personal trainer — em escala compatível com um município industrial de porte médio.',

  destaquesFitness: [
    'Berço da colheitadeira automotriz nacional: sede histórica da SLC e hoje polo industrial da John Deere, o que molda a rotina de trabalho e de treino da cidade.',
    'Parque Natural Municipal Logemann, maior remanescente de mata urbana do município, com trilhas em meio à Mata Atlântica.',
    'Campus da Fahor (Faculdade Horizontina), voltado a engenharias e agronegócio, que atrai população jovem e universitária.',
    'Clima subtropical de quatro estações, com invernos frios e geadas, que pede ajuste sazonal de horário e roupa no treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 230,
    mensalMax: 680,
    onlineMin: 115,
    onlineMax: 330,
  },

  conclusao:
    'Cidade industrial de porte médio no Noroeste gaúcho, Horizontina combina a rotina de trabalho ligada às fábricas de máquinas agrícolas com um mercado fitness enxuto, mas ativo, apoiado no Centro, no Parque Natural Municipal Logemann e nas provas de corrida de rua sediadas na cidade. Um personal trainer ajuda a organizar o treino considerando os turnos da indústria e a rotina universitária da Fahor, respeitando os invernos frios e mantendo a constância ao longo do ano.',

  vizinhas: ['santa-rosa-rs', 'ijui-rs', 'santo-angelo-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Horizontina', url: 'https://cidades.ibge.gov.br/brasil/rs/horizontina/panorama' },
    { nome: 'Prefeitura de Horizontina', url: 'https://www.horizontina.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
