import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'coromandel-mg',
  nome: 'Coromandel',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'coromandelense',
  tipo: 'cidade',

  populacao: 28894,
  populacaoAno: 2022,
  idhm: 0.708,
  idhmClasse: 'alto',
  pibPerCapita: 71010,
  pibPerCapitaAno: 2023,
  altitudeM: 930,

  resumoEconomico:
    'Coromandel está no extremo oeste do Alto Paranaíba mineiro, na divisa com Goiás, a cerca de 500 km de Belo Horizonte. A cidade é nacionalmente conhecida pela mineração de diamantes: abrigou os dois maiores diamantes brutos já encontrados no Brasil, a "Getúlio Vargas" (727 quilates, 1938) e a "Darcy Vargas" (460 quilates, 1939), e segue como um dos poucos municípios do país com autorização da Agência Nacional de Mineração para garimpo — em maio de 2025 uma pedra de 646,78 quilates, avaliada em R$ 16 milhões, foi encontrada às margens do Rio Douradinho. Ao lado da mineração, a economia gira em torno do café do Cerrado Mineiro, da soja, do milho e do algodão, de culturas irrigadas por pivô central, como cebola e batata, e da pecuária leiteira ligada à agricultura familiar. O PIB municipal soma cerca de R$ 1,5 bilhão, com a agropecuária respondendo por 49,5% do valor adicionado, os serviços por 31,4%, a administração pública por 10,2% e a indústria por 8,9%; o PIB per capita de R$ 71 mil (2023) supera o de Belo Horizonte, reflexo da riqueza concentrada da mineração e do agronegócio numa população de porte modesto.',

  mercado:
    'O mercado de personal trainers acompanha o porte de uma cidade pequena do interior mineiro, mas é sustentado por uma renda per capita atipicamente alta para o tamanho da população, puxada pela mineração de diamantes e pelo agronegócio. As academias da cidade oferecem musculação, treino funcional, muay thai, boxe, zumba, pilates e yoga, normalmente das 6h às 22h, com algumas unidades 24 horas — o que abre espaço para o personal trainer atender fora do horário comercial, inclusive em domicílio e em clubes como a AABB e o Clube Campestre Boa Vista.',

  bairrosNobres: ['Centro', 'Setor Comercial', 'Sagrada Família', 'Boa Esperança'],
  bairrosPopulares: ['Taquaril', 'Morada Nova', 'Dom Bosco', 'União'],

  parques: [
    {
      nome: 'Vila Olímpica e Estádio Municipal Mário de Assis',
      descricao:
        'Principal complexo esportivo público da cidade, reúne o estádio municipal, quadras poliesportivas e espaço para o futebol amador organizado, funcionando como epicentro da vida esportiva coromandelense.',
    },
    {
      nome: 'Clube Campestre Boa Vista e AABB',
      descricao:
        'As duas sedes recreativas da cidade concentram piscinas, quadras e áreas verdes usadas para esporte e lazer estruturado, e são ponto de encontro tradicional para atividade física fora do ambiente das academias.',
    },
    {
      nome: 'Rios, cachoeiras e represas do entorno rural',
      descricao:
        'Num município de relevo 78% montanhoso, os cursos d\'água e cachoeiras que cortam a zona rural — com pousadas de pesca nas margens — oferecem opções de caminhada e contato com a natureza para quem busca treinar fora da malha urbana.',
    },
  ],
  ciclovias:
    'A cidade não tem malha cicloviária estruturada; o deslocamento de bicicleta acontece nas ruas do Centro e nas estradas rurais que levam às fazendas de café e às áreas de mineração.',

  clima:
    'O clima é tropical de altitude, com relevo predominantemente montanhoso (78% da área) que varia de 845 m, na calha do Rio Sapucaí, a 1.915 m, na Pedra de Santa Rita — a sede fica a cerca de 930 m. As chuvas se concentram no verão, com mais de 80% da precipitação anual entre outubro e março, enquanto o inverno é seco, com temperaturas entre 10 °C e 18 °C, contra médias de 19 °C a 26 °C no restante do ano.',
  climaTreino:
    'O relevo acidentado torna a corrida e o pedal ao ar livre mais exigentes, premiando quem tem preparo físico e técnica de subida; no inverno seco, as manhãs frias de altitude pedem aquecimento mais longo e agasalho, enquanto no verão chuvoso o ideal é treinar cedo, antes das pancadas de chuva do fim da tarde.',

  mobilidade:
    'Coromandel é cortada pela BR-352, que liga Araguari a Felixlândia passando por Patrocínio, Coromandel e Patos de Minas, e pela MG-188, recapeada em obra de R$ 71,8 milhões entre Coromandel e Patrocínio após duas décadas de espera — rodovia essencial para o escoamento do café, dos grãos e da produção mineral da região.',

  corridas: [
    {
      nome: 'Corrida do Diamante',
      descricao:
        'Prova de rua realizada em Coromandel — a edição de 2025 aconteceu em 31 de agosto —, batizada em referência à vocação diamantífera que projetou a cidade no mapa da mineração mundial.',
    },
    {
      nome: 'Eventos esportivos da Expo-Coró',
      descricao:
        'A tradicional exposição agropecuária de julho reúne, além dos negócios do agro, atividades esportivas e de lazer que mobilizam a comunidade coromandelense.',
    },
  ],
  culturaEsportiva:
    'O futebol amador tem no Estádio Municipal Mário de Assis, na Vila Olímpica, seu principal palco, complementado por três ginásios cobertos e diversas quadras espalhadas pela cidade. A tradição da mineração e da vida no campo molda um cotidiano fisicamente ativo, reforçado pelas sedes recreativas da AABB e do Clube Campestre Boa Vista e pelo calendário de exposições e corridas de rua.',
  academias:
    'A oferta reúne academias de bairro com musculação e modalidades como funcional, muay thai, boxe, zumba, pilates e yoga, concentradas no Centro e no Setor Comercial, com horários que vão das 6h às 22h e algumas unidades com funcionamento 24 horas.',

  destaquesFitness: [
    'Terra dos maiores diamantes já encontrados no Brasil, com garimpo autorizado pela Agência Nacional de Mineração.',
    'PIB per capita de R$ 71 mil (2023), superior ao de Belo Horizonte, puxado pela mineração e pelo agronegócio do Cerrado Mineiro.',
    'Relevo 78% montanhoso, entre 845 m e 1.915 m de altitude, que torna corrida e pedal mais desafiadores.',
    'Corrida do Diamante e Expo-Coró movimentam o calendário esportivo da cidade.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 680,
    onlineMin: 120,
    onlineMax: 340,
  },

  conclusao:
    'Marcada pela riqueza diamantífera e pelo café do Cerrado Mineiro, Coromandel tem no relevo montanhoso e no clima de altitude o principal desafio — e atrativo — para quem treina ao ar livre. Um personal trainer ajuda a adaptar corrida e caminhada às subidas da cidade e às estações seca e chuvosa, aproveitando estruturas como a Vila Olímpica, o Clube Campestre Boa Vista e a AABB.',

  vizinhas: ['patrocinio-mg', 'monte-carmelo-mg', 'patos-de-minas-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Coromandel', url: 'https://cidades.ibge.gov.br/brasil/mg/coromandel/panorama' },
    { nome: 'Prefeitura Municipal de Coromandel', url: 'https://coromandel.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    {
      nome: 'Correio de Minas — PIB e mineração de diamantes em Coromandel',
      url: 'https://correiodeminas.com.br/2025/10/11/cidade-mineira-abriga-os-tres-maiores-diamantes-do-brasil-tem-pib-acima-de-belo-horizonte-e-virou-referencia-mundial-na-mineracao/',
    },
  ],
  atualizadoEm: '2026-07-04',
};
