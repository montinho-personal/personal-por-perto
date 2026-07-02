import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'morro-redondo-rs',
  nome: 'Morro Redondo',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'morro-redondense',
  tipo: 'cidade',

  populacao: 6046,
  populacaoAno: 2022,
  idhm: 0.700,
  idhmClasse: 'alto',

  resumoEconomico:
    'Morro Redondo fica na Serra dos Tapes, a cerca de 35 km de Pelotas, da qual era o 8º distrito até se emancipar em 12 de maio de 1988, formado por área do antigo Distrito de Morro Redondo e parte do Distrito de Cascata. A colonização é de origem alemã e pomerana — que também moldou os vizinhos Canguçu e São Lourenço do Sul —, somada a famílias de origem italiana e portuguesa, e é celebrada em roteiros e festas coloniais. A economia é agrícola: o município é um dos maiores produtores de pêssego do Rio Grande do Sul, com cerca de 60 famílias cultivando a fruta em 450 hectares, produção que abastece cinco indústrias de conservas locais e rende a Festa Municipal do Pêssego, realizada na comunidade Cristo Rei do Colorado. Batata, cebola e cenoura completam a produção agrícola — Morro Redondo é o maior produtor de cenoura da região Sul do estado.',

  mercado:
    'Com pouco mais de 6 mil habitantes, Morro Redondo não sustenta uma rede própria de academias e estúdios variados: a oferta se resume a poucos espaços locais de musculação, e quem busca mais estrutura ou modalidades específicas normalmente se desloca até Pelotas, a cerca de 35 km. Nesse cenário, o personal trainer com atendimento domiciliar é a alternativa mais direta para treinar sem depender de deslocamento, especialmente entre famílias da zona rural ligadas à produção de pêssego e às pequenas indústrias de conservas, cuja rotina de safra pede flexibilidade de horário.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Colônia Colorado', 'Santa Bernardina', 'São Pedro'],

  parques: [
    {
      nome: 'Roteiro Turístico Morro de Amores',
      descricao:
        'Circuito de turismo rural criado em 2014, com apoio do Sebrae, Emater-RS/Ascar e Embrapa, que reúne propriedades da zona rural com trilhas em meio à natureza, arroios para banho e colheita de pêssego direto do pé — usado por moradores e visitantes para caminhada em meio à paisagem colonial.',
    },
    {
      nome: 'Morro que dá nome ao município',
      descricao:
        'A elevação de formato arredondado situada na zona urbana, que batiza a cidade, tem ruas e acessos ao redor aproveitados informalmente para caminhada com desnível na sede do município.',
    },
    {
      nome: 'Estradas rurais e pomares de pêssego',
      descricao:
        'Fora da pequena área urbana, o relevo ondulado da Serra dos Tapes — com boa parte do território acima dos 200 m de altitude — é cortado por estradas de chão entre pomares e propriedades coloniais, caminho natural para caminhada, corrida leve e pedal.',
    },
  ],
  ciclovias:
    'O município não tem ciclovias estruturadas; o pedal acontece nas estradas rurais de chão batido entre as colônias, terreno que serve de palco para etapas do Desafio Serra dos Tapes de mountain bike e turismo rural.',

  clima:
    'O clima é subtropical, com invernos relativamente frios — geadas ocorrem em média cerca de 20 dias por ano — e ocorrência de nevoeiros nas manhãs mais úmidas; os verões são moderados e as chuvas ficam bem distribuídas ao longo do ano.',
  climaTreino:
    'Nas manhãs de inverno com geada ou nevoeiro, o treino ao ar livre nas estradas rurais pede cautela, aquecimento mais longo e atenção à visibilidade; no verão, mais ameno que o das cidades da metade norte do estado, as primeiras horas do dia e o fim de tarde seguem sendo as janelas mais confortáveis para caminhar, correr ou pedalar.',

  mobilidade:
    'Morro Redondo faz divisa com Pelotas, Capão do Leão, Canguçu e Cerrito, e o acesso à sede é feito pela BR-392, que liga o município a Pelotas, Porto Alegre e ao porto de Rio Grande. Não há transporte coletivo urbano estruturado, e o deslocamento pelo relevo de morros e colônias depende basicamente de veículo próprio.',

  corridas: [
    {
      nome: 'Desafio Serra dos Tapes — Etapa Morro Redondo',
      descricao:
        'Evento não competitivo de mountain bike e turismo rural, com edições sediadas em Morro Redondo, que leva ciclistas e caminhantes por propriedades rurais, arroios e agroindústrias do município, com categorias de MTB e caminhada em diferentes distâncias.',
    },
    {
      nome: 'Maratona de Pelotas (Sesc)',
      descricao:
        'Prova de rua com 42 km, 21 km, 10 km e 5 km realizada na vizinha Pelotas, a cerca de 35 km; por proximidade, é a referência de corrida de rua mais acessível para quem mora em Morro Redondo.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Morro Redondo é rural e comunitária, girando em torno de festas coloniais como a Festa do Pêssego e a Festa do Doce Colonial, que reúnem a comunidade nas colônias. O Roteiro Morro de Amores e o Desafio Serra dos Tapes trouxeram a caminhada e o mountain bike para dentro do calendário local, enquanto a corrida de rua propriamente dita fica mais associada às provas da vizinha Pelotas.',
  academias:
    'A oferta de academias dentro do município é pequena, compatível com o porte da população; parte de quem busca treinar em estrutura de academia ou musculação mais completa acaba se deslocando até Pelotas.',

  destaquesFitness: [
    'Cidade da Serra dos Tapes com colonização alemã e pomerana, emancipada de Pelotas em 1988.',
    'Roteiro Turístico Morro de Amores: trilhas rurais, arroios para banho e pomares de pêssego abertos à visitação.',
    'Desafio Serra dos Tapes — Etapa Morro Redondo: evento de mountain bike e caminhada por propriedades coloniais.',
    'Cidade pequena sem rede própria de academias, o que torna o personal trainer com atendimento domiciliar a alternativa mais prática.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 680,
    onlineMin: 120,
    onlineMax: 340,
  },

  conclusao:
    'Pequena e agrícola, Morro Redondo tem nas estradas rurais entre os pomares de pêssego, no Roteiro Morro de Amores e nas etapas do Desafio Serra dos Tapes seus principais espaços de treino ao ar livre, sem contar com uma rede própria de academias. Um personal trainer com atendimento domiciliar ajuda a manter a constância nesse contexto, respeitando as geadas do inverno e a rotina de quem trabalha na lavoura ou nas indústrias de conservas locais.',

  vizinhas: ['pelotas-rs', 'cangucu-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Morro Redondo', url: 'https://cidades.ibge.gov.br/brasil/rs/morro-redondo/panorama' },
    { nome: 'Prefeitura de Morro Redondo', url: 'https://www.morroredondo.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
