import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'jaragua-do-sul-sc',
  nome: 'Jaraguá do Sul',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'jaraguaense',
  tipo: 'cidade',

  populacao: 182660,
  populacaoAno: 2022,
  idhm: 0.803,
  idhmClasse: 'muito alto',
  altitudeM: 29,

  resumoEconomico:
    'Polo industrial do norte catarinense, no vale do Rio Itapocu, Jaraguá do Sul é sede da WEG (multinacional de motores e equipamentos elétricos) e das malharias Marisol e Malwee. De colonização alemã, tem alta renda, baixíssimo desemprego e está entre as cidades mais seguras do país.',

  mercado:
    'O público de alta renda e a cultura de trabalho intensa, somados a novos empreendimentos verticais de alto padrão com academias próprias, formam um terreno favorável para personal trainers e estúdios premium.',

  bairrosNobres: ['Centro', 'Vila Nova', 'Baependi', 'Czerniewicz'],
  bairrosPopulares: ['Jaraguá Esquerdo', 'Vila Lalau', 'Tifa Martins', 'Rau'],

  parques: [
    {
      nome: 'Parque Malwee',
      descricao:
        'Cerca de 1,5 milhão de m² com 16 lagoas, dezenas de milhares de árvores e trilhas, de entrada gratuita — muito usado para caminhada e corrida.',
    },
    {
      nome: 'Parque Linear Via Verde',
      descricao:
        'Às margens do Rio Itapocu, com ciclovia e área de lazer conectando bairros.',
    },
    {
      nome: 'Pico Malwee',
      descricao:
        'Mirante e trilhas (cerca de 550 m), atrativo para treino outdoor e esportes de aventura.',
    },
  ],
  ciclovias:
    'Há rede de ciclovias para mobilidade urbana, com destaque para a do Parque Linear Via Verde; a extensão total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido, com invernos frios.',
  climaTreino:
    'Os meses frios reduzem o treino ao ar livre, abrindo oportunidade para estúdios e academias climatizadas; nas meias-estações, os parques são ótimos para correr.',

  mobilidade:
    'Jaraguá do Sul é cortada pela BR-280, principal eixo rodoviário que liga ao porto de São Francisco do Sul e à BR-101.',

  corridas: [
    {
      nome: 'Meia Maratona de Jaraguá do Sul',
      descricao:
        'Prova de rua tradicional da cidade.',
    },
    {
      nome: 'Jaraguá SkyMarathon',
      descricao:
        'Trail running com várias distâncias nos morros da região.',
    },
  ],
  culturaEsportiva:
    'A cidade tem calendário denso de corridas de rua e trail, com associação local de corredores ativa e forte adesão a atividades ao ar livre nos parques e morros.',
  academias:
    'A oferta inclui estúdios premium e academias, com público de altíssima renda, complementada pelo Parque Malwee e pelo Parque Linear Via Verde.',

  destaquesFitness: [
    'Público de altíssima renda e baixo desemprego — clientes com poder de compra.',
    'Parque Malwee como hub gratuito de treino ao ar livre.',
    'Cena consolidada de corrida e trail (eventos recorrentes).',
    'Novos prédios de alto padrão com academias internas — demanda por personal.',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 190,
    mensalMin: 400,
    mensalMax: 1100,
    onlineMin: 190,
    onlineMax: 470,
  },

  conclusao:
    'Polo industrial de altíssima renda em SC, Jaraguá do Sul une o Parque Malwee, trilhas e uma cena de corrida forte. Um personal trainer ajuda a aproveitar esse cenário com método, equilibrando outdoor e indoor conforme o frio do inverno.',

  vizinhas: ['joinville-sc', 'blumenau-sc'],

  capaArte: {
    src: '/capas-cidade/jaragua-do-sul-sc.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em Jaraguá do Sul (SC) em arte com a Chiesetta Alpina no alto do Pico Malwee, o Parque Malwee, a Igreja Matriz São Sebastião e o centro da cidade, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Jaraguá do Sul: treino perto de você, com acompanhamento profissional no norte catarinense.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Jaraguá do Sul', url: 'https://cidades.ibge.gov.br/brasil/sc/jaragua-do-sul/panorama' },
    { nome: 'Prefeitura de Jaraguá do Sul', url: 'https://www.jaraguadosul.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-01',
};
