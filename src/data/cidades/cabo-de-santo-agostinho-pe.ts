import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cabo-de-santo-agostinho-pe',
  nome: 'Cabo de Santo Agostinho',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'cabense',
  tipo: 'cidade',

  populacao: 203440,
  populacaoAno: 2022,
  idhm: 0.686,
  idhmClasse: 'médio',
  altitudeM: 16,

  resumoEconomico:
    'Integrante da Região Metropolitana do Recife, no litoral sul, o Cabo de Santo Agostinho é um dos maiores polos industriais e portuários do Nordeste graças ao Complexo de Suape — petroquímica, automotivo, estaleiro e logística portuária. Tem também forte vocação turística, com praias como Gaibu e Calhetas e a Reserva do Paiva.',

  mercado:
    'Cidade de porte médio, tem academias de bairro no Centro, em Ponte dos Carvalhos e na Charneca, enquanto o eixo nobre do Paiva e da Enseada concentra estúdios e público de maior poder aquisitivo; o perfil litorâneo favorece o treino funcional e os esportes de praia.',

  bairrosNobres: ['Reserva do Paiva', 'Enseada dos Corais', 'Gaibu', 'Garapu'],
  bairrosPopulares: ['Ponte dos Carvalhos', 'Charneca', 'Jardim Santo Inácio', 'Nossa Senhora do Rosário'],

  parques: [
    {
      nome: 'Praia de Gaibu',
      descricao:
        'Orla extensa de areia firme, com faixa larga para caminhada, corrida e esportes de praia.',
    },
    {
      nome: 'Parque Metropolitano Armando de Holanda Cavalcanti',
      descricao:
        'Reserva natural com trilhas para caminhada e hiking, além de sítio histórico.',
    },
    {
      nome: 'Ciclovia do Paiva',
      descricao:
        'Estende-se pela Enseada até as proximidades de Gaibu, usada para pedal e corrida.',
    },
  ],
  ciclovias:
    'A ciclovia do Paiva foi estendida pela Enseada até perto de Gaibu, com travessia pela ponte que liga ao Paiva; a extensão total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente, com médias entre 24 °C e 27 °C, mais chuvoso de março a agosto.',
  climaTreino:
    'O calor e a umidade altos o ano todo recomendam treinar no início da manhã ou no fim de tarde, com hidratação e treino de praia nas horas mais frescas.',

  mobilidade:
    'O Cabo é cortado pela BR-101 e pela PE-060, rodovia que conecta o litoral sul ao Recife e a Suape.',

  corridas: [
    {
      nome: 'Corrida das Falésias Suape',
      descricao:
        'Prova em cenário litorâneo, na região de Suape.',
    },
    {
      nome: 'Corrida da Amizade',
      descricao:
        'Prova de rua local, parte do calendário esportivo da cidade.',
    },
  ],
  culturaEsportiva:
    'Há forte ligação com o mar — esportes de praia, surfe e mergulho (Calhetas) —, além de um calendário ativo de corridas de rua ligado a Suape e ao eixo do Paiva.',
  academias:
    'A oferta reúne academias de bairro e estúdios premium no eixo do Paiva, complementada pela orla de Gaibu e pela ciclovia.',

  destaquesFitness: [
    'Orla de Gaibu como academia natural para corrida e funcional na areia.',
    'Ciclovia Paiva–Enseada–Gaibu para pedal e corrida.',
    'Eixo nobre da Reserva do Paiva como nicho premium.',
    'Esportes aquáticos (mergulho em Calhetas, surfe) como complemento de condicionamento.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 420,
  },

  conclusao:
    'Polo de Suape e do litoral sul pernambucano, o Cabo de Santo Agostinho une indústria, praias e o eixo premium do Paiva. Um personal trainer ajuda a aproveitar Gaibu e a ciclovia do Paiva com método, ajustando horários e hidratação ao calor litorâneo.',

  vizinhas: ['recife-pe', 'jaboatao-dos-guararapes-pe'],

  capaArte: {
    src: '/capas-cidade/cabo-de-santo-agostinho-pe.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer no Cabo de Santo Agostinho (PE) em arte com a Praia de Calhetas, o Farol de Nazaré, a Praia de Gaibu e a Enseada dos Corais, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado no Cabo de Santo Agostinho: foco, disciplina e resultados no litoral sul de Pernambuco.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Cabo de Santo Agostinho', url: 'https://cidades.ibge.gov.br/brasil/pe/cabo-de-santo-agostinho/panorama' },
    { nome: 'Prefeitura do Cabo de Santo Agostinho', url: 'https://www.cabo.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-01',
};
