import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'porto-seguro-ba',
  nome: 'Porto Seguro',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'porto-segurense',
  tipo: 'cidade',

  populacao: 168326,
  populacaoAno: 2022,
  idhm: 0.676,
  idhmClasse: 'médio',

  resumoEconomico:
    'No extremo sul da Bahia, na Costa do Descobrimento, Porto Seguro é um dos maiores destinos de turismo de praia do país, com os distritos de Arraial d\'Ajuda e Trancoso. A economia é movida por turismo, hotelaria, comércio e construção civil, com aeroporto que recebe voos nacionais.',

  mercado:
    'Há presença de redes nacionais e academias locais concentradas na Cidade Alta, em Olhos d\'Água e na Orla Norte; a demanda turística e estética sustenta o setor.',

  bairrosNobres: ['Cidade Alta', 'Mundaí', 'Orla Norte', 'Olhos d\'Água'],
  bairrosPopulares: ['Baianão', 'Vila Vitória', 'Frades', 'Pacatá'],

  parques: [
    {
      nome: 'Orla Norte',
      descricao:
        'Novo espaço de lazer com academia ao ar livre, pista de caminhada, deck com vista para o mar e ciclovia.',
    },
    {
      nome: 'Passarela do Descobrimento',
      descricao:
        'Calçadão à beira-mar e do Rio Buranhém, ideal para caminhada e corrida.',
    },
    {
      nome: 'Praias de Taperapuan',
      descricao:
        'Faixa de areia extensa das praias do norte, usada para corrida e treino funcional.',
    },
  ],
  ciclovias:
    'Há ciclovia na nova estrutura da Orla Norte; a extensão total da rede ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical litorâneo, quente e úmido o ano todo.',
  climaTreino:
    'O calor e a umidade altos pedem treino cedo ou no fim de tarde, com hidratação e proteção solar; a areia da praia é recurso para treino de resistência.',

  mobilidade:
    'Porto Seguro é servida pela BR-367 (acesso principal e ligação com a balsa para o Litoral Sul) e pela BR-101, com aeroporto que recebe voos nacionais.',

  corridas: [
    {
      nome: 'Corrida da Ponte',
      descricao:
        'Realizada na BR-367, no acesso à travessia para o Litoral Sul, com provas de 4 km e 10 km.',
    },
    {
      nome: 'Meia Maratona do Descobrimento',
      descricao:
        'Prova de rua que integra o calendário esportivo local, ao lado de night runs.',
    },
  ],
  culturaEsportiva:
    'Há forte cultura de corridas de rua aproveitando a orla e as rodovias, com turismo esportivo (night runs e meias maratonas) em crescimento, somado aos esportes de praia.',
  academias:
    'A oferta reúne redes e academias locais na Cidade Alta e na orla, com as praias e a nova Orla Norte funcionando como academia a céu aberto.',

  destaquesFitness: [
    'Nova Orla Norte, com academia ao ar livre e pista.',
    'Passarela do Descobrimento como percurso de caminhada à beira-mar.',
    'Praias (Taperapuan) para treino funcional e corrida na areia.',
    'Calendário ativo de corridas de rua (Corrida da Ponte, Descobrimento).',
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
    'Berço do Brasil e destino turístico de praia, Porto Seguro une orlas extensas e turismo esportivo em alta. Um personal trainer ajuda a aproveitar a Orla Norte e Taperapuan com método, ajustando horários e hidratação ao calor litorâneo.',

  vizinhas: ['vitoria-da-conquista-ba', 'ilheus-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Porto Seguro', url: 'https://cidades.ibge.gov.br/brasil/ba/porto-seguro/panorama' },
    { nome: 'Prefeitura de Porto Seguro', url: 'https://www.portoseguro.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
