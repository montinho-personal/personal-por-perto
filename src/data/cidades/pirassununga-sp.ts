import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pirassununga-sp',
  nome: 'Pirassununga',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'pirassununguense',
  tipo: 'cidade',

  populacao: 73545,
  populacaoAno: 2022,
  idhm: 0.801,
  idhmClasse: 'muito alto',
  altitudeM: 627,

  resumoEconomico:
    'Pirassununga fica no centro-leste do estado de São Paulo, no eixo entre as regiões de Campinas, Ribeirão Preto e São Carlos. A economia combina serviços, comércio e agroindústria, com forte identidade institucional: a cidade é sede da Academia da Força Aérea (AFA), que forma os oficiais da Aeronáutica brasileira, e abriga a fábrica da Cachaça 51, uma das maiores do país. O município também é polo educacional, com o campus da USP (Faculdade de Zootecnia e Engenharia de Alimentos, a FZEA).',

  mercado:
    'A presença da AFA, do campus da USP e de uma população com IDHM muito alto sustenta um público diversificado para personal trainers, de militares e estudantes a famílias e profissionais. A oferta reúne academias de bairro, estúdios e espaços ao ar livre, com demanda recorrente por treino funcional, corrida e preparação física.',

  bairrosNobres: ['Centro', 'Vila Santa Fé', 'Jardim Carlos Gomes', 'Jardim do Lago'],
  bairrosPopulares: ['Vila Belmiro', 'Cidade Jardim', 'Jardim Trevo', 'Vila Pinheiro'],

  parques: [
    {
      nome: 'Parque Municipal Temístocles Marrocos Leite (Lago Municipal)',
      descricao:
        'Principal área de lazer da cidade, com lago, áreas de caminhada, quadras poliesportivas, playground e praça da terceira idade. É ponto de encontro para atividades ao ar livre e recebe eventos esportivos.',
    },
    {
      nome: 'Cachoeira de Emas',
      descricao:
        'Atração natural sobre o rio Mogi-Guaçu, a cerca de 9 km do centro, com quedas d’água, prainhas, quiosques e restaurantes de peixe. Espaço procurado para caminhadas e lazer ativo nos fins de semana.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de ciclovia e ciclofaixa em vias e avenidas, mas a extensão total da malha não é divulgada em fonte oficial consolidada.',

  clima:
    'O clima é tropical com estação seca no inverno, marcado por verão quente e chuvoso (pico de chuvas entre dezembro e fevereiro) e inverno ameno e seco. A cidade fica a cerca de 627 m de altitude, na região do rio Mogi-Guaçu.',
  climaTreino:
    'No verão, vale priorizar o treino ao ar livre no começo da manhã ou no fim de tarde, fugindo do calor e das pancadas de chuva; o inverno seco e ameno é o período mais confortável para corrida e atividades externas.',

  mobilidade:
    'Pirassununga é cortada pela rodovia Anhanguera (SP-330) e articulada pelas rodovias SP-225 (sentido Itirapina/Brotas) e SP-201, que ligam o município à malha do interior paulista e às cidades vizinhas. O deslocamento interno é predominantemente por carro, moto e bicicleta.',

  corridas: [
    {
      nome: 'Circuito de Corrida e Caminhada de Pirassununga',
      descricao:
        'Evento recorrente com percursos de corrida (cerca de 5 km) e caminhada (cerca de 3 km), com largada no Parque Municipal (Lago Municipal) e atividades como alongamento e avaliação física.',
    },
    {
      nome: 'Volta da USP (campus Pirassununga)',
      descricao:
        'Corrida de rua realizada no campus da USP, integrando a comunidade universitária e os corredores da região em provas de curta e média distância.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura a tradição militar da AFA, a vida universitária do campus da USP e a prática ao ar livre no Lago Municipal e na Cachoeira de Emas. Corridas de rua e circuitos de caminhada aparecem com regularidade no calendário local.',
  academias:
    'A oferta reúne academias de bairro, estúdios de treino funcional e espaços ao ar livre, complementada pela estrutura esportiva ligada à AFA e ao campus da USP e pelas áreas de lazer do Lago Municipal.',

  destaquesFitness: [
    'Sede da Academia da Força Aérea (AFA), com forte cultura de preparação física e atividade ao ar livre.',
    'Lago Municipal e Cachoeira de Emas como espaços públicos para caminhada, corrida e lazer ativo.',
    'Polo educacional com o campus da USP (FZEA), que amplia o público jovem e ativo.',
    'Inverno seco e ameno, favorável ao treino ao ar livre na maior parte do ano.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 270,
    mensalMax: 720,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Sede da AFA e da fábrica da Cachaça 51 e polo educacional com a USP, Pirassununga reúne tradição esportiva e boa estrutura de lazer ao ar livre. Um personal trainer ajuda a aproveitar o Lago Municipal e a Cachoeira de Emas com método, ajustando os horários ao calor do verão paulista.',

  vizinhas: ['leme-sp', 'rio-claro-sp', 'mogi-guacu-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Pirassununga', url: 'https://cidades.ibge.gov.br/brasil/sp/pirassununga/panorama' },
    { nome: 'Prefeitura de Pirassununga', url: 'https://www.pirassununga.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
