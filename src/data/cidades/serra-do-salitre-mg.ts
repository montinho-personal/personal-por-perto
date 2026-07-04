import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'serra-do-salitre-mg',
  nome: 'Serra do Salitre',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'serralitrense',
  tipo: 'cidade',

  populacao: 11801,
  populacaoAno: 2022,
  idhm: 0.696,
  idhmClasse: 'médio',
  pibPerCapita: 83678,
  pibPerCapitaAno: 2021,
  altitudeM: 1220,

  resumoEconomico:
    'No Alto Paranaíba mineiro, na microrregião de Patrocínio, Serra do Salitre tem no café seu principal produto: cerca de 12.500 hectares de lavouras, com produtividade média de 1.500 kg/ha e escoamento por cooperativas como a Cooxupé, que mantém núcleo na cidade. A produção rural soma ainda soja, milho, feijão e batata — esta última puxada pela empresa Montesa, que emprega cerca de 350 pessoas —, além de pecuária leiteira que sustenta uma tradição local de queijo artesanal, com rebanho estimado em 57 mil cabeças. O PIB municipal gira em torno de R$ 983,2 milhões, com a agropecuária respondendo por 44,8% do valor adicionado, a indústria por 27,8%, os serviços por 19,8% e a administração pública por 7,5%; o PIB per capita, de cerca de R$ 83,7 mil em 2021, supera a média do estado e da região do Alto Paranaíba. Desde março de 2024, o município também abriga o Complexo Mineroindustrial da EuroChem, maior projeto do grupo fora da Europa, com investimento da ordem de US$ 1 bilhão e cerca de 830 empregos diretos na produção de fertilizantes fosfatados.',

  mercado:
    'Como cidade pequena do Alto Paranaíba, Serra do Salitre tem um mercado fitness modesto, formado por academias de bairro e profissionais que atendem em domicílio e em propriedades rurais. A procura por personal trainers vem sobretudo de produtores de café, técnicos agrícolas e funcionários da agroindústria local — incluindo o novo complexo industrial da EuroChem —, que buscam treino organizado para compensar jornadas longas e o clima frio de boa parte do ano.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Bairro das Nações', 'Bairro das Flores', 'Bairro Bela Vista'],

  parques: [
    {
      nome: 'Praça Dr. José Wanderley',
      descricao:
        'Praça central da cidade, erguida no entorno da capela dedicada a São Sebastião que deu origem ao povoado — ponto de encontro tradicional e um dos espaços mais usados para caminhada no Centro.',
    },
    {
      nome: 'Praça Nossa Senhora do Rosário',
      descricao:
        'Sede da Festa Regional do Café e das comemorações de aniversário da cidade, com espaço aberto usado tanto para eventos quanto para caminhada nos dias sem programação.',
    },
    {
      nome: 'Estradas rurais entre os cafezais',
      descricao:
        'O relevo de altitude e as estradas vicinais que cortam as lavouras de café e os pivôs centrais da região abrem opções de corrida e pedal de longa distância em meio à paisagem do Cerrado mineiro.',
    },
  ],
  ciclovias:
    'A cidade não tem malha cicloviária estruturada; o pedal urbano acontece nas ruas do Centro e dos bairros, e o pedal de estrada aproveita as vias rurais entre as fazendas de café.',

  clima:
    'A 1.220 metros de altitude, Serra do Salitre tem clima tropical de altitude (Cwb), com inverno frio e seco — quando o ponto de orvalho próximo de 2 °C já indica risco de geada — e verão ameno e chuvoso, condição que favorece a produção de café de qualidade na região.',
  climaTreino:
    'Nas manhãs de inverno, entre junho e agosto, o frio e o risco de geada recomendam aquecimento mais longo, agasalho e, se possível, treinar mais tarde, quando a temperatura já subiu; no verão chuvoso, vale checar a previsão e ter um plano B coberto para os dias de chuva mais forte.',

  mobilidade:
    'O acesso à cidade é feito pela BR-146, que liga Araxá a Patos de Minas e corta o município, e pela MG-230, que conecta Serra do Salitre a Patrocínio e Rio Paranaíba. O transporte interno é predominantemente rodoviário, com deslocamentos facilitados pelo porte pequeno da malha urbana.',

  corridas: [
    {
      nome: 'Corrida do Café',
      descricao:
        'Prova de rua que abre a programação da Festa Regional do Café e das comemorações de emancipação política do município, reunindo corredores locais na Praça Nossa Senhora do Rosário.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva da cidade gira em boa parte em torno do calendário agrícola e das festas tradicionais, como a Festa Regional do Café e a ExpoSerra — festa do produtor rural —, que costumam reunir corrida de rua, shows e atividades comunitárias em um mesmo evento, reforçando a identidade cafeeira do município.',
  academias:
    'A oferta de estruturas de treino é pequena, típica de um município de pouco mais de 11 mil habitantes, com academias como a Espaço Fitness na Rua Calendola oferecendo musculação, complementadas pelo trabalho de personal trainers autônomos.',

  destaquesFitness: [
    'Altitude de 1.220 metros, uma das mais elevadas entre as cidades cafeeiras do Cerrado Mineiro, com noites frias favoráveis ao café de qualidade — e ao treino refrescante ao amanhecer, fora do período de geada.',
    'Cerca de 12.500 hectares de café, escoados por cooperativas como a Cooxupé, sustentam a economia e o calendário de festas da cidade.',
    'Complexo Mineroindustrial da EuroChem, maior investimento do grupo fora da Europa, gera cerca de 830 empregos diretos na produção de fertilizantes.',
    'Corrida do Café abre anualmente a Festa Regional do Café, principal evento esportivo-cultural do município.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 580,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Cidade cafeeira do Alto Paranaíba, a mais de 1.200 metros de altitude, Serra do Salitre tem no café, na pecuária leiteira e, mais recentemente, no complexo de fertilizantes da EuroChem a base de sua economia. Um personal trainer ajuda a adaptar o treino ao frio das manhãs de inverno e ao risco de geada, aproveitando as praças centrais e as estradas rurais entre os cafezais nos dias de clima ameno.',

  vizinhas: ['patrocinio-mg', 'rio-paranaiba-mg', 'ibia-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Serra do Salitre', url: 'https://cidades.ibge.gov.br/brasil/mg/serra-do-salitre/panorama' },
    { nome: 'Prefeitura de Serra do Salitre — Dados do Município', url: 'https://serradosalitre.mg.gov.br/a-cidade/dados-do-municipio' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Agência Minas Gerais — Complexo EuroChem em Serra do Salitre', url: 'https://www.agenciaminas.mg.gov.br/noticia/com-apoio-do-governo-de-minas-fabrica-de-fertilizantes-em-serra-do-salitre-vai-gerar-1-2-mil-empregos-e-reduzir-dependencia-de-importacoes' },
  ],
  atualizadoEm: '2026-07-04',
};
