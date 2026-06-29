import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'conselheiro-lafaiete-mg',
  nome: 'Conselheiro Lafaiete',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'lafaietense',
  tipo: 'cidade',

  populacao: 131621,
  populacaoAno: 2022,
  idhm: 0.761,
  idhmClasse: 'alto',
  altitudeM: 984,

  resumoEconomico:
    'Maior cidade do Alto Paraopeba, no centro-sul mineiro, Conselheiro Lafaiete é um polo regional de comércio e serviços que concentra atendimento de saúde e educação para os municípios vizinhos. A economia é diversificada, com forte setor de comércio e prestação de serviços, indústria e atividade ligada à mineração de ferro nas serras do entorno, herança da tradição mineradora que remonta às minas de manganês do Morro da Mina. Esse perfil de cidade-âncora movimenta a renda local e o consumo de serviços, incluindo o fitness.',

  mercado:
    'Como polo regional do centro-sul mineiro, a cidade reúne uma rede de academias locais bem estabelecidas (Smart Flex, Center Fitness e Mais Fit, entre outras) distribuídas pelos bairros, atendendo tanto os moradores quanto quem vem das cidades do entorno. Há boa demanda por personal trainer em academias e também em atendimento domiciliar, formato prático para quem busca acompanhamento individual em uma cidade de porte médio com bairros residenciais espalhados.',

  bairrosNobres: ['Centro', 'São João', 'Carijós', 'Jardim Campestre'],
  bairrosPopulares: ['Siderúrgico', 'Cidade Satélite', 'São Sebastião', 'Santa Matilde'],

  parques: [
    {
      nome: 'Praça Barão de Queluz (Praça da Matriz)',
      descricao:
        'Coração histórico da cidade, com o tradicional chafariz colonial, é ponto de encontro e caminhada no centro, em referência ao antigo nome de Real Vila de Queluz.',
    },
    {
      nome: 'Parque Aclimação',
      descricao:
        'Área verde urbana usada por moradores para caminhada, corrida leve e lazer ao ar livre.',
    },
    {
      nome: 'Avenidas e vias do centro',
      descricao:
        'Corredores e praças da região central servem de circuito informal para caminhada e treino ao ar livre no dia a dia.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária ainda é pontual; o uso de bicicleta acontece sobretudo em vias urbanas e nos deslocamentos entre bairros, com relevo acentuado típico do centro-sul mineiro.',

  clima:
    'O clima é tropical de altitude (cidade a cerca de 980 m, com partes do município passando de 1.100 m), com verões chuvosos e invernos secos e amenos, marcados por manhãs frias.',
  climaTreino:
    'As condições para treino ao ar livre são boas na maior parte do ano; vale atenção ao frio nas manhãs de inverno, às chuvas de verão e ao relevo ondulado, que exige progressão cuidadosa em corridas e caminhadas.',

  mobilidade:
    'Conselheiro Lafaiete é cortada pela BR-040, principal eixo Rio–Belo Horizonte, o que reforça seu papel de entroncamento e polo regional. A cidade também é servida pela BR-383 e por rodovias estaduais que conectam o Alto Paraopeba, e o transporte urbano é feito por ônibus.',

  corridas: [
    {
      nome: 'Corrida e Caminhada da Associação Médica de Conselheiro Lafaiete',
      descricao:
        'Prova de rua com percursos de 3 km, 5 km e 10 km, parte do calendário esportivo local.',
    },
    {
      nome: 'Corrida e Caminhada do Macarrão',
      descricao:
        'Evento tradicional de corrida e caminhada na cidade, com edições anuais que reúnem corredores da região.',
    },
  ],
  culturaEsportiva:
    'A cidade tem uma cena de corrida de rua ativa para o seu porte, com provas locais como a Corrida do Macarrão e a corrida da Associação Médica, além de forte cultura de academia e musculação alimentada pelo público regional do Alto Paraopeba.',
  academias:
    'A oferta reúne academias locais consolidadas como Smart Flex, Center Fitness e Mais Fit, bem distribuídas pelos bairros, com cultura firme de musculação e treino funcional e espaço para atividades ao ar livre nas praças e avenidas do centro.',

  destaquesFitness: [
    'Academias locais consolidadas (Smart Flex, Center Fitness, Mais Fit) pelos bairros.',
    'Calendário de corridas de rua com provas como a Corrida do Macarrão.',
    'Praça Barão de Queluz e Parque Aclimação para caminhada e treino ao ar livre.',
    'Papel de polo regional do Alto Paraopeba, com público de cidades vizinhas.',
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
    'Polo regional do centro-sul mineiro com clima de altitude, relevo desafiador e uma cena de corrida em crescimento, Conselheiro Lafaiete oferece bom terreno para treinar com método. Um personal trainer ajuda a aproveitar as academias da cidade e os espaços ao ar livre do centro com segurança e constância, seja no atendimento em academia ou domiciliar.',

  vizinhas: ['belo-horizonte-mg', 'ouro-preto-mg', 'betim-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Conselheiro Lafaiete', url: 'https://cidades.ibge.gov.br/brasil/mg/conselheiro-lafaiete/panorama' },
    { nome: 'Atlas Brasil — IDHM Conselheiro Lafaiete', url: 'http://www.atlasbrasil.org.br/perfil/municipio/311830' },
    { nome: 'Prefeitura de Conselheiro Lafaiete', url: 'https://conselheirolafaiete.mg.gov.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
