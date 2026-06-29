import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pato-branco-pr',
  nome: 'Pato Branco',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'pato-branquense',
  tipo: 'cidade',

  populacao: 91836,
  populacaoAno: 2022,
  idhm: 0.782,
  idhmClasse: 'alto',
  altitudeM: 760,

  resumoEconomico:
    'Polo do sudoeste do Paraná e referência nacional em tecnologia e inovação (apelidada de "vale do software"), Pato Branco tem ecossistema com centenas de empresas de inovação e startups, forte agronegócio e a presença do segundo maior campus da UTFPR. É reconhecida pela alta qualidade de vida.',

  mercado:
    'A alta renda relativa e o perfil universitário e jovem favorecem academias, estúdios e serviços de personal; o inverno rigoroso desloca parte do treino para ambientes fechados.',

  bairrosNobres: ['Centro', 'São Cristóvão', 'Anchieta', 'Jardim Floresta'],
  bairrosPopulares: ['Bortot', 'Sambugaro', 'Pinheirinho', 'Industrial'],

  parques: [
    {
      nome: 'Parque do Alvorecer',
      descricao:
        'Cerca de 107 hectares de mata nativa, com trilhas, ciclovia, lagos, pistas emborrachadas de caminhada, campo de futebol e academia de saúde ao ar livre.',
    },
    {
      nome: 'Praças com academia ao ar livre',
      descricao:
        'Praças municipais com equipamentos de ginástica, ampliando o acesso ao treino nos bairros.',
    },
    {
      nome: 'Bosque Municipal',
      descricao:
        'Área verde urbana usada para caminhada e lazer.',
    },
  ],
  ciclovias:
    'O Parque do Alvorecer tem ciclovia interna; a extensão total da malha urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical, com quatro estações definidas, geadas frequentes entre junho e agosto e julho como mês mais frio (média em torno de 14 °C).',
  climaTreino:
    'Os invernos frios e as noites próximas de zero exigem aquecimento prévio e agasalho, com maior uso de espaços cobertos na estação fria.',

  mobilidade:
    'Pato Branco é cortada pela BR-158 e pela BR-280, eixos do sudoeste do Paraná.',

  corridas: [
    {
      nome: 'Corrida Maluca',
      descricao:
        'Prova realizada no autódromo do Parque de Exposições durante a feira de tecnologia da cidade.',
    },
    {
      nome: 'Corrida da Semana Tecnológica',
      descricao:
        'Corrida integrada à programação tecnológica da UTFPR.',
    },
  ],
  culturaEsportiva:
    'A comunidade jovem e universitária (UTFPR) tem forte presença de eventos que cruzam tecnologia e esporte, com cultura ao ar livre favorecida pelos parques.',
  academias:
    'A oferta reúne academias e estúdios premium, com público de alta renda e qualidade de vida, e tem no Parque do Alvorecer o principal hub de treino ao ar livre.',

  destaquesFitness: [
    'Parque do Alvorecer como hub natural de treino ao ar livre (pista emborrachada e academia de saúde).',
    'Público de alta renda e qualidade de vida, favorável a personal e estúdios premium.',
    'Perfil universitário (UTFPR), que amplia a demanda jovem.',
    'Inverno frio, que direciona a sazonalidade para o indoor.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 165,
    mensalMin: 360,
    mensalMax: 960,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'O "vale do software" do sudoeste paranaense, Pato Branco une alta renda, a UTFPR e o Parque do Alvorecer. Um personal trainer encontra aqui um público qualificado e receptivo a treino premium, presencial e online, com protocolos para o inverno rigoroso.',

  vizinhas: ['cascavel-pr', 'foz-do-iguacu-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Pato Branco', url: 'https://cidades.ibge.gov.br/brasil/pr/pato-branco/panorama' },
    { nome: 'Prefeitura de Pato Branco', url: 'https://www.patobranco.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
