import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'vale-real-rs',
  nome: 'Vale Real',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'vale-realense',
  tipo: 'cidade',

  populacao: 6058,
  populacaoAno: 2022,
  idhm: 0.737,
  idhmClasse: 'alto',
  altitudeM: 450,

  resumoEconomico:
    'Vale Real fica na Região Metropolitana de Porto Alegre, na microrregião de Montenegro, a cerca de 89 km da capital gaúcha. O município nasceu em 1992, desmembrado de Feliz junto com Alto Feliz e Linha Nova, e carrega raízes da colonização alemã: o antigo nome do lugar, Kronenthal, significa "Vale da Coroa", referência aos treze morros que cercam o vale onde a cidade se assenta, banhado pelo Rio Caí. A economia é puxada pela indústria — com destaque para confecção de roupas, fabricação de vidros e esquadrias e máquinas —, ao lado de comércio, serviços e agricultura familiar, com a fruticultura (morango e amora) concentrada na localidade de Forqueta Baixa. O PIB per capita gira em torno de R$ 32,8 mil, abaixo da média do Rio Grande do Sul.',

  mercado:
    'Vale Real é um dos municípios menores da Região Metropolitana de Porto Alegre, com pouco mais de 6 mil habitantes, e não sustenta uma rede própria de academias e estúdios variados: quem busca mais opções de estrutura recorre a Feliz ou aos polos maiores da Serra Gaúcha, como Farroupilha e Caxias do Sul. Nesse contexto, o personal trainer com atendimento domiciliar é a alternativa mais direta para treinar sem se deslocar, especialmente entre moradores da zona rural e trabalhadores da indústria local, cujos horários de turno pedem flexibilidade de agenda.',

  bairrosNobres: ['Centro', 'Canto Krewer'],
  bairrosPopulares: ['Arroio do Ouro', 'Forqueta Baixa', 'Morro Gaúcho'],

  parques: [
    {
      nome: 'Praça do Bosque',
      descricao:
        'Revitalizada e entregue à comunidade em 2009, é o principal espaço público do Centro, com área arborizada — o ponto mais usado para caminhada e convívio ao ar livre na sede do município.',
    },
    {
      nome: 'Rota Caminho Sabores das Frutas (Forqueta Baixa)',
      descricao:
        'Roteiro rural implantado em 2008 na localidade de Forqueta Baixa, entre pomares de morango e amora; as estradas de terra da rota são aproveitadas para caminhada e pedal em meio à paisagem agrícola.',
    },
    {
      nome: 'Margens do Rio Caí e ponte histórica',
      descricao:
        'A ponte sobre o Rio Caí, construída em 1952, é a mais antiga do município e liga o Centro à zona rural da divisa com Feliz; o entorno do rio serve de referência para caminhadas leves fora da área central.',
    },
  ],
  ciclovias:
    'O município não tem ciclovias estruturadas; o pedal acontece nas estradas rurais que cortam os morros, o que exige preparo físico para enfrentar as subidas do relevo bastante ondulado.',

  clima:
    'O clima é subtropical úmido, com verões quentes (a altitude de 450 m ameniza um pouco o calor em relação às cidades do fundo de vale) e invernos frios, com geadas frequentes e manhãs próximas de 0 °C nos morros mais altos.',
  climaTreino:
    'No verão, o ideal é treinar ao ar livre nas primeiras horas da manhã ou no fim da tarde, evitando o sol forte do meio-dia. No inverno, as manhãs de geada pedem cautela e aquecimento mais longo antes de qualquer atividade externa nas estradas dos morros; horários mais quentes do dia costumam ser mais confortáveis.',

  mobilidade:
    'A RS-452 corta o município, ligando ao sul com a RS-122 e ao norte com a BR-116, os principais eixos de acesso a Feliz, Farroupilha e à Região Metropolitana de Porto Alegre. Não há transporte coletivo urbano estruturado, e o deslocamento pelo relevo de morros depende basicamente de veículo próprio.',

  corridas: [
    {
      nome: 'Corrida e Caminhada Unimed Vale do Caí',
      descricao:
        'Prova de rua tradicional da região, realizada no polo de Montenegro, que reúne corredores de vários municípios do COREDE Vale do Caí, entre eles moradores de Vale Real.',
    },
    {
      nome: 'Circuito Vale do Caí',
      descricao:
        'Etapa de corrida de rua que percorre o calendário regional do Vale do Caí, sustentando uma comunidade de corredores amadores nos municípios menores da região, incluindo Vale Real.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva do município é de perfil rural e comunitário, com o futebol amador como principal atividade de lazer nas localidades — como o campo de futebol da comunidade de Forqueta Alta. A corrida e a caminhada ganham força por meio das provas do calendário regional do Vale do Caí, mais do que por eventos realizados dentro do próprio município.',
  academias:
    'A oferta de academias dentro do município é praticamente inexistente, dado o porte pequeno da população; quem busca treinar em estrutura de academia normalmente se desloca até Feliz ou até cidades maiores da Serra Gaúcha.',

  destaquesFitness: [
    'Antigo nome Kronenthal ("Vale da Coroa"): município cercado por treze morros que moldam o relevo e o treino ao ar livre.',
    'Rota Caminho Sabores das Frutas, em Forqueta Baixa, entre pomares de morango e amora, aproveitada para caminhada e pedal rural.',
    'Rio Caí e a ponte histórica de 1952, que liga o Centro à zona rural na divisa com Feliz.',
    'Cidade pequena sem rede própria de academias, o que torna o personal trainer com atendimento domiciliar a alternativa mais prática.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 100,
    mensalMin: 250,
    mensalMax: 620,
    onlineMin: 120,
    onlineMax: 320,
  },

  conclusao:
    'Pequena e cercada por morros, Vale Real tem no relevo, nas estradas rurais e nas margens do Rio Caí seus principais espaços de treino ao ar livre, sem contar com uma rede própria de academias. Um personal trainer com atendimento domiciliar ajuda a manter a constância nesse contexto, adaptando o treino às estações do ano e à rotina de quem trabalha na indústria local ou na zona rural.',

  vizinhas: ['lajeado-rs', 'estrela-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Vale Real', url: 'https://cidades.ibge.gov.br/brasil/rs/vale-real/panorama' },
    { nome: 'Prefeitura de Vale Real', url: 'https://www.valereal.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
