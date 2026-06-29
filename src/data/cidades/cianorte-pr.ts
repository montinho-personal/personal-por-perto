import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cianorte-pr',
  nome: 'Cianorte',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'cianortense',
  tipo: 'cidade',

  populacao: 79527,
  populacaoAno: 2022,
  idhm: 0.755,
  idhmClasse: 'alto',
  altitudeM: 530,

  resumoEconomico:
    'No Noroeste do Paraná, Cianorte é conhecida como a "Capital do Vestuário": o polo de confecção reúne centenas de indústrias e marcas e responde por uma fatia expressiva da produção nacional de jeans, gerando milhares de empregos diretos e indiretos. Nascida da expansão cafeeira, a cidade migrou para o setor têxtil e hoje sustenta uma economia movida pela moda, pelo comércio atacadista e pelo agronegócio do entorno.',

  mercado:
    'O mercado fitness acompanha o porte de cidade média do interior paranaense, com academias de musculação, estúdios de funcional e crossfit e profissionais autônomos espalhados pelas zonas residenciais e pelo Centro. O fluxo de trabalhadores e lojistas ligados às confecções e ao comércio de atacado sustenta uma demanda constante por treino orientado.',

  bairrosNobres: ['Centro Cívico', 'Zona 1', 'Zona 2', 'Jardim Universitário'],
  bairrosPopulares: ['Zona 4', 'Zona 5', 'Conjunto Sonho Meu', 'Jardim Paraíso'],

  parques: [
    {
      nome: 'Parque Municipal Cinturão Verde',
      descricao:
        'Uma das maiores florestas urbanas do país, com mais de 500 hectares de mata preservada ao redor da cidade e trilhas para caminhada e cicloturismo — o grande pulmão verde e cartão de visita para atividade ao ar livre.',
    },
    {
      nome: 'Parque Urbano Manduhy',
      descricao:
        'Maior área de lazer da cidade, com pista de caminhada e corrida, ciclovia, quadras, deck de madeira com mirante, academia ao ar livre e playground.',
    },
    {
      nome: 'Bosques e praças do Cinturão Verde',
      descricao:
        'O cinturão de mata que envolve Cianorte se distribui em bosques e praças arborizadas que servem de cenário para caminhadas e treinos leves em meio à natureza.',
    },
  ],
  ciclovias:
    'A cidade soma cerca de 35 km de vias e trilhas pavimentadas para caminhada e em torno de 4 km de ciclovias, boa parte associada aos parques urbanos e ao Cinturão Verde, com rotas de cicloturismo no entorno.',

  clima:
    'O clima é subtropical úmido, típico do Noroeste do Paraná, com verões quentes, chuvas bem distribuídas ao longo do ano e invernos amenos, com geadas pouco frequentes.',
  climaTreino:
    'As condições para treino ao ar livre são boas na maior parte do ano. No verão quente e úmido, o ideal é priorizar o início da manhã ou o fim da tarde para fugir do calor do meio do dia.',

  mobilidade:
    'Cianorte tem traçado planejado, com avenidas largas e organização por zonas, e transporte coletivo gratuito que conecta os shoppings de atacado. O acesso rodoviário se dá principalmente pela PR-323, que liga a cidade a Maringá e ao restante da região.',

  corridas: [
    {
      nome: 'Circuito de Corrida de Rua de Cianorte',
      descricao:
        'Calendário de provas de rua organizado no município, com etapas que reúnem corredores de dezenas de cidades da região Noroeste.',
    },
    {
      nome: 'Corridas e caminhadas no Parque Urbano Manduhy',
      descricao:
        'A pista do parque concentra treinos e eventos de corrida e caminhada, servindo de ponto de encontro para grupos e assessorias locais.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva se apoia na malha de parques e bosques do Cinturão Verde e em uma cena de corrida de rua sustentada pelo calendário municipal de provas. Caminhada, corrida e ciclismo de lazer são hábitos comuns, favorecidos pela cidade planejada e arborizada.',
  academias:
    'A oferta reúne academias de musculação, estúdios de funcional e crossfit e personal trainers autônomos distribuídos pelas zonas residenciais e pelo Centro, atendendo um público ligado ao comércio, às confecções e ao agronegócio.',

  destaquesFitness: [
    'Cinturão Verde com mais de 500 hectares de floresta urbana e trilhas para caminhada e cicloturismo.',
    'Parque Urbano Manduhy com pista de corrida, ciclovia e academia ao ar livre.',
    'Cerca de 35 km de vias para caminhada e em torno de 4 km de ciclovias.',
    'Calendário municipal de corrida de rua que aquece a demanda por assessorias.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 110,
    mensalMin: 280,
    mensalMax: 680,
    onlineMin: 130,
    onlineMax: 340,
  },

  conclusao:
    'Planejada, arborizada e movida pela energia da "Capital do Vestuário", Cianorte oferece um ambiente agradável para treinar — do Cinturão Verde ao Parque Urbano Manduhy. Um personal trainer ajuda a transformar essa estrutura em resultado, com método e constância, seja na musculação, seja na preparação para as corridas de rua.',

  vizinhas: ['maringa-pr', 'umuarama-pr', 'paranavai-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Cianorte', url: 'https://cidades.ibge.gov.br/brasil/pr/cianorte/panorama' },
    { nome: 'Prefeitura de Cianorte', url: 'https://www.cianorte.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
