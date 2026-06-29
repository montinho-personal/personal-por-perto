import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'guarapuava-pr',
  nome: 'Guarapuava',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'guarapuavano',
  tipo: 'cidade',

  populacao: 182093,
  populacaoAno: 2022,
  idhm: 0.731,
  idhmClasse: 'alto',
  altitudeM: 1120,

  resumoEconomico:
    'Maior cidade e polo regional do Centro-Sul do Paraná, Guarapuava é capital sub-regional de alta influência, atendendo dezenas de municípios. Tem forte agronegócio de grãos (sendo um dos municípios mais ricos do PR no setor), além de madeira e papel e a maior maltaria da América Latina, à margem da rodovia que liga o Porto de Paranaguá ao Mercosul.',

  mercado:
    'Há presença de redes nacionais e academias locais, num mercado de musculação ativo de polo regional, complementado por boa estrutura pública de parques.',

  bairrosNobres: ['Trianon', 'Santa Cruz', 'Centro', 'Bonsucesso'],
  bairrosPopulares: ['Boqueirão', 'Vila Bela', 'Morro Alto', 'Primavera'],

  parques: [
    {
      nome: 'Parque do Lago (Lagoa das Lágrimas)',
      descricao:
        'Tem pista de caminhada e corrida, academia da terceira idade, aparelhos de musculação, quadras e pista de skate, aberto 24h e iluminado.',
    },
    {
      nome: 'Parque Municipal das Araucárias',
      descricao:
        'Tem trilhas em meio à floresta de araucárias, pista de caminhada, lago e jardim botânico, à margem da BR-277.',
    },
    {
      nome: 'Parque das Crianças',
      descricao:
        'Tem academias ao ar livre adaptadas, inclusive para cadeirantes.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical de altitude, frio — uma das cidades mais frias do Paraná, com geadas e temperaturas negativas no inverno.',
  climaTreino:
    'O frio exige aquecimento prolongado e roupas térmicas para o treino ao ar livre no inverno; os verões amenos favorecem corrida e outdoor.',

  mobilidade:
    'Guarapuava fica no cruzamento das BR-277 (eixo Mercosul, acesso ao Porto de Paranaguá) e BR-373, sendo entroncamento rodoviário regional.',

  corridas: [
    {
      nome: 'Meia Maratona de Guarapuava',
      descricao:
        'Prova de 21 km com largada e chegada no Parque do Lago, parte do circuito paranaense de meias maratonas.',
    },
    {
      nome: 'Corrida Rústica da Padroeira',
      descricao:
        'Prova de rua comunitária tradicional, já em mais de uma dezena de edições.',
    },
  ],
  culturaEsportiva:
    'Há cultura ativa de corrida de rua ligada ao Parque do Lago, e a cidade promove turismo e lazer de inverno (a "Capital do Frio") com forte uso dos parques.',
  academias:
    'A oferta reúne redes e academias locais, com o Parque do Lago como hub público 24h de treino e o Parque das Araucárias para o treino em natureza.',

  destaquesFitness: [
    'Parque do Lago como hub público 24h de caminhada, corrida e musculação ao ar livre.',
    'Trilhas do Parque das Araucárias para treino em natureza.',
    'Frio de altitude, que exige protocolos de aquecimento e vestuário térmico.',
    'Circuito de meias maratonas consolidado (Parque do Lago como largada).',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 155,
    mensalMin: 340,
    mensalMax: 920,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Capital do Frio e polo do Centro-Sul do Paraná, Guarapuava une renda do agro e o Parque do Lago, aberto 24h. Um personal trainer ajuda a aproveitar a estrutura pública com método, com protocolos de aquecimento para o inverno rigoroso.',

  vizinhas: ['cascavel-pr', 'ponta-grossa-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Guarapuava', url: 'https://cidades.ibge.gov.br/brasil/pr/guarapuava/panorama' },
    { nome: 'Prefeitura de Guarapuava', url: 'https://www.guarapuava.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
