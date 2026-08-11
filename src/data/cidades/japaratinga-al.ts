import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'japaratinga-al',
  nome: 'Japaratinga',
  uf: 'AL',
  estado: 'Alagoas',
  estadoSlug: 'alagoas',
  regiao: 'Nordeste',
  gentilico: 'japaratinguense',
  tipo: 'cidade',

  populacao: 9219,
  populacaoAno: 2022,
  idhm: 0.57,
  idhmClasse: 'baixo',
  altitudeM: 5,

  resumoEconomico:
    'Formada a partir de uma vila de pescadores, Japaratinga tem 9.219 habitantes (Censo 2022) e 15 quilômetros de litoral divididos em cinco praias, a 10 km de Maragogi e 117 km de Maceió. A agropecuária ainda responde por 42,4% do valor adicionado do município, seguida de serviços (36%) e administração pública (18,9%) — mas é o turismo da Costa dos Corais que vem reorganizando a economia local.',

  mercado:
    'O mercado de personal trainer acompanha o ritmo do turismo: cresce na alta temporada, com hóspedes de pousadas e resorts, e se sustenta o resto do ano com moradores e trabalhadores do setor. O atendimento acontece na areia, na orla e a domicílio — a oferta de academia formal é pequena e concentrada no centro.',

  bairrosNobres: ['Centro', 'Barreiras do Boqueirão', 'Praia de Japaratinga', 'Bitingui'],
  bairrosPopulares: ['Baixa Grande', 'Rio Manguaba', 'Cocos', 'Zona Rural'],

  parques: [
    {
      nome: 'Piscinas naturais e APA Costa dos Corais',
      descricao:
        'O município integra a Área de Proteção Ambiental Costa dos Corais, que protege a segunda maior barreira de corais do mundo. A Piscina Natural do Picão tem cerca de 23 hectares e 2,1 km de perímetro, alcançada de embarcação na maré baixa.',
    },
    {
      nome: 'Orla e faixa de praia',
      descricao:
        'São 15 km de litoral em cinco praias, com faixa de areia firme na maré baixa — a melhor pista natural da cidade para caminhada e corrida.',
    },
    {
      nome: 'Rio Manguaba',
      descricao:
        'O encontro do rio com o mar forma um cenário de mangue e água calma, usado para stand up paddle, caiaque e passeios de embarcação.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária estruturada; a bicicleta é transporte cotidiano e o trecho plano da rodovia litorânea que liga Japaratinga a Maragogi e São Miguel dos Milagres é o percurso preferido de quem pedala.',

  clima:
    'Tropical litorâneo, quente e úmido o ano todo, com chuvas concentradas entre abril e julho e temperaturas médias altas mesmo no inverno.',
  climaTreino:
    'O calor e a umidade concentram o treino ao ar livre no começo da manhã e no fim da tarde — que são também os horários de maré e luz mais agradáveis na praia. No miolo do dia, a sombra e o ambiente coberto resolvem, com hidratação levada a sério.',

  mobilidade:
    'A cidade é pequena e plana, o que torna o deslocamento a pé e de bicicleta natural. O acesso regional se faz pela rodovia litorânea, com Maragogi a 10 km e Maceió a 117 km.',

  corridas: [
    {
      nome: 'Provas do calendário da Costa dos Corais',
      descricao:
        'A região recebe corridas de praia e provas ligadas ao calendário turístico do litoral norte alagoano, com percursos planos na areia firme e na orla.',
    },
  ],
  culturaEsportiva:
    'A vida ribeirinha e marítima coloca natação, remada e caminhada na areia no cotidiano. O futebol de areia domina o fim de semana, e os esportes de prancha crescem junto com o turismo.',
  academias:
    'A oferta formal é pequena e concentrada no centro, complementada pelas estruturas de pousadas e resorts e por profissionais que atendem a domicílio e na praia.',

  destaquesFitness: [
    '15 km de litoral em cinco praias, com areia firme na maré baixa.',
    'Piscina Natural do Picão, com cerca de 23 hectares dentro da APA Costa dos Corais.',
    'Rio Manguaba para stand up paddle e caiaque em água calma.',
    'Terreno plano, que favorece corrida de rua e bicicleta.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 620,
    onlineMin: 110,
    onlineMax: 320,
  },

  conclusao:
    'Japaratinga tem 15 quilômetros de areia e a segunda maior barreira de corais do mundo na porta. Um personal trainer daqui usa a praia como equipamento e a academia como base de força — um plano que funciona tanto para quem mora quanto para quem passa a temporada.',

  vizinhas: ['maragogi-al', 'sao-miguel-dos-milagres-al', 'porto-de-pedras-al'],

  fontes: [
    { nome: 'IBGE Cidades — Japaratinga', url: 'https://cidades.ibge.gov.br/brasil/al/japaratinga/panorama' },
    { nome: 'Prefeitura de Japaratinga', url: 'https://www.japaratinga.al.gov.br/' },
    { nome: 'ICMBio — APA Costa dos Corais', url: 'https://www.gov.br/icmbio/' },
  ],
  atualizadoEm: '2026-08-06',
};
