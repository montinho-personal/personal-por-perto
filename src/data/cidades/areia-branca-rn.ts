import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'areia-branca-rn',
  nome: 'Areia Branca',
  uf: 'RN',
  estado: 'Rio Grande do Norte',
  estadoSlug: 'rio-grande-do-norte',
  regiao: 'Nordeste',
  gentilico: 'areia-branquense',
  tipo: 'cidade',

  populacao: 24093,
  populacaoAno: 2022,
  idhm: 0.682,
  idhmClasse: 'médio',
  altitudeM: 5,

  resumoEconomico:
    'Conhecida como a Terra do Sal, Areia Branca vive da tríade sal marinho, petróleo em terra e pesca — o Porto-Ilha, terminal salineiro construído em alto-mar, é referência de engenharia naval e símbolo da cidade. O PIB per capita, na casa dos R$ 45 mil, está entre os mais altos do interior potiguar, e o polo Costa Branca soma o turismo de praias, dunas e falésias à economia local.',

  mercado:
    'A renda do sal e do petróleo sustenta uma demanda estável por serviços — incluindo treino orientado —, e o cenário natural faz o resto: são 42 km de litoral com praias, dunas e falésias, da urbana Upanema à Ponta do Mel, onde o sertão encontra o mar. Academias e personal trainers se concentram no centro e na orla.',

  bairrosNobres: ['Centro', 'Cidade Alta', 'Nossa Senhora da Conceição', 'Bela Vista'],
  bairrosPopulares: ['Mutirão', 'Baixa do Juncal', 'Paraíso', 'Cônego Estanislau'],

  parques: [
    {
      nome: 'Orla e Praia de Upanema',
      descricao:
        'A praia urbana da cidade, mais próxima do centro e a mais frequentada, concentra caminhada, corrida na areia e o movimento do fim de tarde.',
    },
    {
      nome: 'Ponta do Mel',
      descricao:
        'A cerca de 25 km do centro, o vilarejo entre falésias avermelhadas é o ponto onde a caatinga encontra o oceano — cenário de trilhas, caminhadas e um dos visuais mais singulares do litoral potiguar.',
    },
    {
      nome: 'Dunas e praias da Costa Branca',
      descricao:
        'Redonda, Baixa Grande e São Cristóvão completam os 42 km de litoral do município, com dunas e areia firme para treinos longos à beira-mar.',
    },
  ],
  ciclovias:
    'O pedal acontece na orla e nas estradas litorâneas entre as praias do polo Costa Branca; a malha cicloviária urbana é limitada e sem extensão oficial divulgada.',

  clima:
    'Clima semiárido litorâneo: sol forte o ano quase todo, chuvas concentradas no primeiro semestre e vento constante — marca registrada da costa salineira.',
  climaTreino:
    'Treina-se nas pontas do dia: amanhecer e fim de tarde na orla, com o vento como aliado contra o calor; no meio do dia, o treino migra para espaços cobertos.',

  mobilidade:
    'Areia Branca fica a cerca de 40 minutos de Mossoró — o segundo maior mercado do estado — pela RN-013, e integra o polo turístico Costa Branca com as cidades litorâneas vizinhas.',

  corridas: [
    {
      nome: 'Provas da Costa Branca e de Mossoró',
      descricao:
        'O calendário regional de corridas de rua movimenta o oeste potiguar, com provas de 5 km e 10 km em Mossoró e eventos litorâneos nas cidades do polo.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva gira em torno da orla: caminhada e corrida no fim de tarde, futebol de areia e os esportes de vento que o litoral salineiro favorece.',
  academias:
    'A oferta reúne academias de musculação e personal trainers no centro e nos bairros, complementada pela orla de Upanema como pista natural de treino.',

  destaquesFitness: [
    '42 km de litoral com praias, dunas e falésias para treinos à beira-mar.',
    'Renda do sal e do petróleo, entre as maiores do interior potiguar.',
    'Ponta do Mel, onde o sertão encontra o mar — trilhas e caminhadas únicas.',
    'Vento constante do litoral salineiro, aliado natural contra o calor.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 660,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Terra do Sal e porta da Costa Branca, Areia Branca tem renda forte para o seu porte e um litoral de 42 km como academia a céu aberto. Um personal trainer transforma a orla de Upanema e as trilhas da Ponta do Mel em treino com método — no horário certo do sol.',

  vizinhas: ['mossoro-rn'],

  fontes: [
    { nome: 'IBGE Cidades — Areia Branca', url: 'https://cidades.ibge.gov.br/brasil/rn/areia-branca/panorama' },
    { nome: 'Prefeitura de Areia Branca', url: 'https://areiabranca.rn.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-04',
};
