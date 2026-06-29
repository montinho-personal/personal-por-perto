import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'parnaiba-pi',
  nome: 'Parnaíba',
  uf: 'PI',
  estado: 'Piauí',
  estadoSlug: 'piaui',
  regiao: 'Nordeste',
  gentilico: 'parnaibano',
  tipo: 'cidade',

  populacao: 163087,
  populacaoAno: 2022,
  idhm: 0.690,
  idhmClasse: 'médio',
  altitudeM: 13,

  resumoEconomico:
    'Segunda maior cidade do Piauí, no litoral norte e às margens do Rio Igaraçu (braço do Rio Parnaíba), Parnaíba é a porta de entrada do Delta do Parnaíba. A economia se baseia em comércio, serviços, turismo (ecoturismo do Delta e praias) e pesca, sendo o principal centro urbano e logístico da planície litorânea piauiense.',

  mercado:
    'O mercado é de porte médio, impulsionado pelo turismo, pelo clima litorâneo e por uma cena ativa de corrida de rua; academias e assessorias aproveitam a orla e as praças para o treino ao ar livre.',

  bairrosNobres: ['Reis Veloso', 'Nova Parnaíba', 'São José', 'Fátima'],
  bairrosPopulares: ['Piauí', 'Frei Higino', 'Pindorama', 'João Paulo II'],

  parques: [
    {
      nome: 'Orla do Rio Igaraçu / Porto das Barcas',
      descricao:
        'Sítio histórico restaurado às margens do Igaraçu, com calçadão, área de lazer, restaurantes e teatro ao ar livre — ponto de caminhada e corrida.',
    },
    {
      nome: 'Praça do Amor / orla central',
      descricao:
        'Área pública usada para atividades físicas e ponto de largada de corridas de rua.',
    },
    {
      nome: 'Praias da Ilha Grande de Santa Isabel',
      descricao:
        'Acessíveis pela ponte (como a Pedra do Sal), usadas para corrida na areia e treino ao ar livre.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária da cidade ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente o ano todo, com pouca variação entre as estações, sol forte e chuvas concentradas entre fevereiro e maio.',
  climaTreino:
    'Os treinos são recomendados cedo de manhã ou ao entardecer, com hidratação reforçada; a brisa litorânea ajuda no fim de tarde.',

  mobilidade:
    'Cidade plana e litorânea, Parnaíba liga-se a Teresina (cerca de 340 km) por rodovia e conta com a ponte Simplício Dias sobre o Igaraçu, conectando a Ilha Grande de Santa Isabel, as praias e o acesso ao Delta.',

  corridas: [
    {
      nome: 'Circuito Clube de Corrida de Rua — Etapa Parnaíba',
      descricao:
        'Prova anual com percursos de 5 km e 10 km (e distâncias menores), com largada na Praça do Amor.',
    },
    {
      nome: 'Super Running Parnaíba',
      descricao:
        'Corrida com percursos de 3 km (caminhada), 5 km e 12 km, parte do calendário esportivo local.',
    },
  ],
  culturaEsportiva:
    'Parnaíba tem cena consolidada de corrida de rua, com provas recorrentes, e forte ligação com esportes ao ar livre e náuticos por causa do Delta, das praias e do Rio Igaraçu.',
  academias:
    'A oferta de academias e assessorias é complementada pela orla do Igaraçu e pelas praias da Ilha Grande, aproveitadas para treino ao ar livre.',

  destaquesFitness: [
    'Orla do Igaraçu / Porto das Barcas como cartão-postal e ponto de treino.',
    'Praias da Ilha Grande (Pedra do Sal) para corrida e atividades na areia.',
    'Calendário ativo de corridas de rua com múltiplas distâncias.',
    'Clima litorâneo e turismo do Delta que sustentam a demanda por preparo físico.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 135,
    mensalMin: 290,
    mensalMax: 780,
    onlineMin: 150,
    onlineMax: 390,
  },

  conclusao:
    'Porta de entrada do Delta do Parnaíba, a cidade une orla histórica, praias e uma cena de corrida ativa. Um personal trainer ajuda a aproveitar o Porto das Barcas e a Pedra do Sal com método, ajustando horários e hidratação ao calor litorâneo o ano todo.',

  vizinhas: ['teresina-pi', 'sao-luis-ma', 'fortaleza-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Parnaíba', url: 'https://cidades.ibge.gov.br/brasil/pi/parnaiba/panorama' },
    { nome: 'Prefeitura de Parnaíba', url: 'https://www.parnaiba.pi.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
