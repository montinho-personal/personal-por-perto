import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cananeia-sp',
  nome: 'Cananéia',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'cananeense',
  tipo: 'cidade',

  populacao: 12289,
  populacaoAno: 2022,

  resumoEconomico:
    'Com 12.289 habitantes (Censo 2022), Cananéia disputa o título de povoado mais antigo do Brasil — a ocupação remonta a 1531, um ano antes da fundação oficial de São Vicente. No extremo sul do litoral paulista, a economia combina pesca, ecoturismo no estuário e a ostra cultivada nos manguezais, com certificação de origem e reputação entre as melhores do país.',

  mercado:
    'O mercado de personal trainer é pequeno e ligado ao ritmo do estuário: moradores que vivem da pesca e da maricultura, trabalhadores do turismo e uma temporada de verão que multiplica a população. A academia do centro divide espaço com o treino ao ar livre na orla do mar pequeno e com o acompanhamento online.',

  bairrosNobres: ['Centro Histórico', 'Rocio', 'Carijo', 'Retiro das Caravelas'],
  bairrosPopulares: ['Acaraú', 'Porto Cubatão', 'Ariri', 'Itapitangui'],

  parques: [
    {
      nome: 'Parque Estadual da Ilha do Cardoso',
      descricao:
        'Criado em 1962, com 22.500 hectares em frente à cidade, reúne praias desertas, costões, restinga e mata atlântica preservada — as travessias de barco e as trilhas da ilha são o grande programa ativo do município.',
    },
    {
      nome: 'Estuário e manguezais de Cananéia',
      descricao:
        'O complexo estuarino-lagunar abriga o cultivo de ostras e uma das maiores populações de boto-cinza do litoral brasileiro; caiaque e stand up paddle percorrem os canais de água calma.',
    },
    {
      nome: 'Centro histórico colonial',
      descricao:
        'O casario e as igrejas seculares do núcleo fundado no século XVI formam o circuito de caminhada mais tradicional da cidade, à beira do mar pequeno.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária estruturada. A ilha de Cananéia é plana e de tráfego calmo, e a bicicleta é meio de transporte cotidiano dos moradores.',

  clima:
    'Subtropical úmido, com verões quentes e chuvosos e invernos amenos; a umidade do estuário é constante o ano todo.',
  climaTreino:
    'O verão pede treino cedo ou no fim da tarde, com a brisa do mar pequeno ajudando no conforto. No inverno, as manhãs amenas são ideais para caminhada e corrida na orla — e a água calma do estuário mantém remo e caiaque viáveis o ano inteiro.',

  mobilidade:
    'O acesso se faz pela SP-226, a partir da BR-116 em Registro. A cidade ocupa uma ilha ligada ao continente por ponte, e as comunidades do entorno — como Ariri e a Ilha do Cardoso — dependem de barco.',

  corridas: [
    {
      nome: 'Provas e travessias do Lagamar',
      descricao:
        'O calendário regional do Vale do Ribeira e do Lagamar reúne corridas de rua, provas de trilha e travessias aquáticas que aproveitam o estuário e as praias da região.',
    },
  ],
  culturaEsportiva:
    'A vida ativa local gira em torno da água: remo, caiaque, canoa caiçara e a pesca artesanal que exige força e equilíbrio no dia a dia. Futebol de várzea e caminhada na orla completam a rotina — e no verão o SUP toma conta do mar pequeno.',
  academias:
    'A oferta formal é compacta e concentrada no centro. O personal local trabalha entre a academia, o atendimento a domicílio e o treino ao ar livre na orla, com o online cobrindo os meses de baixa temporada.',

  destaquesFitness: [
    'Ilha do Cardoso: 22.500 ha de trilhas, praias desertas e costões.',
    'Estuário de águas calmas para caiaque, SUP e canoa o ano todo.',
    'Orla do mar pequeno plana e caminhável, colada ao centro histórico.',
    'Povoado mais antigo do país como cenário de caminhada diária.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 650,
    onlineMin: 130,
    onlineMax: 350,
  },

  conclusao:
    'Cananéia treina no ritmo do estuário: remo e caiaque na água calma, caminhada na orla histórica, trilha na Ilha do Cardoso. Um personal trainer daqui constrói a base de força que sustenta essa vida anfíbia — e ajusta o programa entre a agitação do verão e o silêncio da baixa temporada.',

  vizinhas: ['iguape-sp', 'registro-sp', 'itapeva-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Cananéia', url: 'https://www.ibge.gov.br/cidades-e-estados/sp/cananeia.html' },
    { nome: 'Prefeitura de Cananéia', url: 'https://cananeia.sp.gov.br/' },
    { nome: 'Fundação Florestal — Parque Estadual da Ilha do Cardoso', url: 'https://www.infraestruturameioambiente.sp.gov.br/fundacaoflorestal/pagina-inicial/parques-estaduais/parque-estadual-da-ilha-do-cardoso/' },
  ],
  atualizadoEm: '2026-08-12',
};
