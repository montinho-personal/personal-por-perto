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
  academiasProximas: [
    { nome: 'Wave', detalhe: 'no Barra Sul, uma das maiores academias do Sul do país' },
    { nome: 'Academias premium e de fisiculturismo', detalhe: 'densidade acima da média nacional' },
    { nome: 'Estúdios de alto padrão', detalhe: 'personal, funcional e estética pelos bairros centrais' },
    { nome: 'Academias públicas da orla', detalhe: 'gratuitas, no parque linear da Praia Central' },
  ],

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

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Balneário Camboriú?',
      resposta:
        'A cidade vertical treina em três andares: nas academias premium — da Wave, no Barra Sul, aos estúdios de alto padrão —, nas academias dos próprios prédios, já que os arranha-céus novos nascem com estrutura completa (o que torna o atendimento em condomínio fortíssimo), e na orla reurbanizada da Praia Central, um parque linear de 6 km com pista de corrida e academias públicas. A Interpraias completa como rota cênica de corrida e bike.',
    },
    {
      pergunta: 'Treinar na "capital da estética" intimida quem está começando?',
      resposta:
        'É uma preocupação comum — e a realidade é mais amigável do que o Instagram sugere. A densidade de academias de BC significa também variedade: há salas premium com público avançado, mas também redes, estúdios reservados, a academia do próprio prédio e a orla democrática. Para quem está começando e não quer plateia, o personal resolve exatamente isso: treino no condomínio ou em estúdio fechado, progressão no seu ritmo e a segurança de não depender da comparação com ninguém. O nível alto da cidade vira inspiração, não régua.',
    },
    {
      pergunta: 'Há acompanhamento em Balneário Camboriú para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Balneário Camboriú, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio, casa ou orla), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['florianopolis-sc', 'curitiba-pr', 'porto-alegre-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Balneário Camboriú', url: 'https://cidades.ibge.gov.br/brasil/sc/balneario-camboriu/panorama' },
    { nome: 'Prefeitura de Balneário Camboriú', url: 'https://www.bc.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  capaArte: {
    src: '/capas-cidade/balneario-camboriu-sc.webp',
    alt:
      'Personal trainer em Balneário Camboriú (SC) acompanhando aluna em treino de força ao ar livre, com a Praia Central e os arranha-céus à beira-mar ao fundo — Personal por Perto',
    legenda:
      'Treino personalizado em Balneário Camboriú: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
  atualizadoEm: '2026-07-22',
};
