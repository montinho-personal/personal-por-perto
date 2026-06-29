import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sorriso-mt',
  nome: 'Sorriso',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'sorriseense',
  tipo: 'cidade',

  populacao: 110635,
  populacaoAno: 2022,
  idhm: 0.744,
  idhmClasse: 'alto',
  altitudeM: 365,

  resumoEconomico:
    'Cidade jovem do norte de Mato Grosso, às margens da BR-163, Sorriso é a maior produtora de soja do Brasil e capital nacional do agronegócio, também grande produtora de milho. Tem um dos maiores valores de produção agrícola do país e PIB per capita elevado, com economia diversificada entre serviços, agropecuária e indústria.',

  mercado:
    'Cidade de alta renda e população jovem, com poder aquisitivo elevado vindo do agronegócio, sustenta demanda crescente por academias, personal training e eventos esportivos.',

  bairrosNobres: ['Jardim Itália', 'Village', 'Alphaville', 'Jardim das Flores'],
  bairrosPopulares: ['Bela Vista', 'Jardim Primavera', 'São Domingos', 'Residencial Vila Bela'],

  parques: [
    {
      nome: 'Praça das Fontes',
      descricao:
        'Praça arborizada com playground, quadras de areia, academia ao ar livre e espaço para caminhada — ponto de largada de corridas.',
    },
    {
      nome: 'Parque Ecológico Municipal Claudino Francio',
      descricao:
        'Mais de 122 mil m² com trilhas ecológicas, pista de cooper, ciclovia e lagos.',
    },
    {
      nome: 'Parque Municipal da Zona Leste',
      descricao:
        'Lago artificial de cerca de 1,6 hectare, com passarelas, iluminação e acesso pavimentado.',
    },
  ],
  ciclovias:
    'A rede está em expansão, com cerca de 5 km na Av. Blumenau e trechos adicionais em outros eixos.',

  clima:
    'O clima é tropical quente e úmido de cerrado, com média em torno de 24 °C e estações seca e chuvosa bem definidas.',
  climaTreino:
    'O calor intenso do cerrado pede treino em horários frescos (manhã ou fim de tarde) e atenção à hidratação.',

  mobilidade:
    'Sorriso é cortada pela BR-163 (eixo Cuiabá–Sinop–Pará, principal corredor logístico da soja), com acesso pela MT-242.',

  corridas: [
    {
      nome: 'Corrida da Soja',
      descricao:
        'Tradicional prova de rua, já em mais de uma dezena de edições, com largada na Praça das Fontes.',
    },
    {
      nome: 'Night Run Sorriso',
      descricao:
        'Corrida e caminhada noturna com viés social (arrecadação de alimentos), ao lado de eventos de trail e MTB.',
    },
  ],
  culturaEsportiva:
    'Cidade jovem, Sorriso tem forte agenda de corridas de rua, trail e mountain bike (muitas com cunho familiar e solidário) e investimento público crescente em parques, ciclovias e academias ao ar livre.',
  academias:
    'A oferta de academias e estúdios acompanha a renda do agro e o público jovem, complementada por três parques com pista, ciclovia e academias ao ar livre.',

  destaquesFitness: [
    'Capital nacional do agronegócio — alta renda e PIB per capita elevado.',
    'População jovem em rápido crescimento, com perfil consumidor de fitness.',
    'Calendário ativo de corridas de rua e trail (Corrida da Soja, Night Run).',
    'Boa estrutura pública: três parques com pista, ciclovia e academias ao ar livre.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 165,
    mensalMin: 360,
    mensalMax: 960,
    onlineMin: 180,
    onlineMax: 450,
  },

  conclusao:
    'Maior produtora de soja do Brasil, Sorriso une altíssima renda, público jovem e boa estrutura de parques. Um personal trainer encontra aqui um mercado aquecido, ideal para treino presencial e online, ajustando os horários ao calor do cerrado.',

  vizinhas: ['sinop-mt', 'lucas-do-rio-verde-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Sorriso', url: 'https://cidades.ibge.gov.br/brasil/mt/sorriso/panorama' },
    { nome: 'Prefeitura de Sorriso', url: 'https://www.sorriso.mt.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
