import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'balneario-camboriu-sc',
  nome: 'Balneário Camboriú',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'balneariense',
  tipo: 'cidade',

  populacao: 139155,
  populacaoAno: 2022,
  idhm: 0.845,
  idhmClasse: 'muito alto',
  altitudeM: 2,

  resumoEconomico:
    'Conhecida como a "Capital dos arranha-céus", Balneário Camboriú é uma das economias mais dinâmicas do Vale do Itajaí, forte em serviços, turismo de alto padrão e construção civil supervalorizada — oito dos dez maiores prédios do Brasil estão na cidade, que tem o metro quadrado mais caro do país. Com IDHM muito alto (0,845) e PIB per capita bem acima da média nacional, reúne um público de altíssimo poder aquisitivo.',

  mercado:
    'Balneário Camboriú é um verdadeiro epicentro nacional de musculação premium e estética. A cidade tem densidade altíssima de academias de alto padrão — como a Wave, no Barra Sul, uma das maiores do Sul do país, além de redes premium e academias voltadas ao fisiculturismo. A cultura do corpo, ligada ao turismo e à alta renda, é uma das mais intensas do Brasil, o que sustenta forte demanda por personal trainers especializados.',

  bairrosNobres: ['Barra Sul', 'Centro (Av. Atlântica)', 'Pioneiros', 'Estados'],
  bairrosPopulares: ['Nova Esperança', 'São Judas Tadeu', 'Vila Real', 'Municípios'],

  parques: [
    {
      nome: 'Orla da Praia Central (Av. Atlântica)',
      descricao:
        'Calçadão com pista de caminhada e corrida e ciclovia ao longo de cerca de 6 km, da Barra Sul à Barra Norte. A reurbanização recente transformou a orla em um grande parque linear, com pista de corrida, academias públicas e decks.',
    },
    {
      nome: 'Barra Sul',
      descricao:
        'Extremo sul da orla e ponto de largada de corridas, com calçadão à beira-mar e acesso ao Parque Unipraias.',
    },
    {
      nome: 'Parque Unipraias (Morro da Aguada)',
      descricao:
        'Área de Mata Atlântica a cerca de 240 m de altitude, com trilhas e acesso por bondinhos — opção de natureza e treino com vista para o mar.',
    },
  ],
  ciclovias:
    'A ciclovia acompanha a Avenida Atlântica e a orla por cerca de 6 km, integrada ao calçadão da Praia Central e à reurbanização em formato de parque linear.',

  clima:
    'O clima é subtropical úmido, quente no verão e ameno no inverno.',
  climaTreino:
    'Dá para treinar ao ar livre o ano todo. No verão, com pico de calor e umidade (e a cidade lotada de turistas), o início da manhã e o fim da tarde são os melhores horários — e a orla reurbanizada oferece ótima estrutura.',

  mobilidade:
    'A cidade é cortada pela BR-101, principal eixo do litoral catarinense, e pela Rodovia Interpraias, via cênica para as praias agrestes, muito usada por ciclistas e corredores. O transporte urbano é feito por ônibus.',

  corridas: [
    {
      nome: 'Meia Maratona Internacional de Balneário Camboriú',
      descricao:
        'Prova na orla com percursos de 21 km e 5 km, incluindo o "Desafio da Rainha" — uma subida puxada pela Estrada da Rainha — e largadas à beira-mar na Barra Sul.',
    },
    {
      nome: 'Circuito de corridas na Barra Sul',
      descricao:
        'Provas de 5 km integradas ao calendário local, sempre com a orla como cenário, refletindo a forte cultura de corrida da cidade.',
    },
  ],
  culturaEsportiva:
    'Poucas cidades brasileiras têm uma cultura fitness e de estética tão intensa quanto Balneário Camboriú — é referência nacional em musculação e culto ao corpo. A orla concentra grande circulação de praticantes de corrida, ciclismo, beach tennis e vôlei de praia o ano todo.',
  academias:
    'A oferta de academias premium está acima da média nacional, com nomes como a Wave (Barra Sul), academias voltadas ao fisiculturismo e estúdios de alto padrão, atendendo um público disposto a investir em personal training e estética.',

  destaquesFitness: [
    'Concentração de academias premium acima da média nacional (incluindo uma das maiores do Sul).',
    'Orla de cerca de 6 km com pista de corrida, ciclovia e academias públicas no parque linear.',
    'IDHM muito alto (0,845) e PIB per capita elevado — público de alto poder aquisitivo.',
    'Referência nacional em musculação e estética, com calendário esportivo consolidado.',
  ],

  precos: {
    avulsaMin: 100,
    avulsaMax: 250,
    mensalMin: 500,
    mensalMax: 1500,
    onlineMin: 220,
    onlineMax: 550,
  },

  conclusao:
    'Em Balneário Camboriú, a busca por estética e performance é parte da cultura local — e um personal trainer especializado é peça-chave para alcançar resultados com segurança. Da musculação premium ao treino na orla reurbanizada, a cidade oferece um dos melhores ambientes do país para quem leva o corpo a sério.',

  vizinhas: ['florianopolis-sc', 'curitiba-pr', 'porto-alegre-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Balneário Camboriú', url: 'https://cidades.ibge.gov.br/brasil/sc/balneario-camboriu/panorama' },
    { nome: 'Prefeitura de Balneário Camboriú', url: 'https://www.bc.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
