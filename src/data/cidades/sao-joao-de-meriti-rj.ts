import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-joao-de-meriti-rj',
  nome: 'São João de Meriti',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'meritiense',
  tipo: 'cidade',

  populacao: 440962,
  populacaoAno: 2022,
  idhm: 0.719,
  idhmClasse: 'alto',
  altitudeM: 19,

  resumoEconomico:
    'Integrante da Baixada Fluminense, na Região Metropolitana do Rio e conurbada à capital, São João de Meriti tem uma das maiores densidades demográficas das Américas, o que lhe rende o apelido de "formigueiro das Américas". A economia é centrada em comércio e serviços, com polos como Vilar dos Teles, o Centro e o Shopping Grande Rio.',

  mercado:
    'Há boa presença de redes, boxes de crossfit e oferta ativa de personal trainers, em um mercado de altíssima densidade populacional e perfil de classe média e popular.',

  bairrosNobres: ['Vilar dos Teles', 'Coelho da Rocha', 'Éden', 'Jardim Meriti'],
  bairrosPopulares: ['Tomazinho', 'Vila Rosali', 'Parque Araruama', 'Engenheiro Belford'],

  parques: [
    {
      nome: 'Complexo Esportivo Valter Pereira da Silva',
      descricao:
        'No Parque Araruama, tem campo de futebol, quadra de areia, academia ao ar livre, pista de caminhada e playground.',
    },
    {
      nome: 'Vila Olímpica de São João de Meriti',
      descricao:
        'À margem da Via Dutra, tem quadra poliesportiva, campo de futebol e área de atletismo, corrida e caminhada.',
    },
    {
      nome: 'Parque RJ Baixada Fluminense',
      descricao:
        'Em implantação (cerca de 35 mil m²), com quadras, pista de caminhada, academias ao ar livre e playgrounds previstos.',
    },
  ],
  ciclovias:
    'Há ciclovia ligando São Mateus ao Centro, com novas vias em obras; a extensão total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente e úmido, típico da Baixada, com verões muito quentes.',
  climaTreino:
    'O calor e a umidade altos no verão recomendam treino ao ar livre no início da manhã ou no fim de tarde, com atenção redobrada à hidratação.',

  mobilidade:
    'São João de Meriti é cortada pela Via Dutra (BR-116), com acesso à Linha Vermelha e à Via Light, conectando rapidamente ao Rio e à Baixada.',

  corridas: [
    {
      nome: '10 Milhas Internacional de São João de Meriti',
      descricao:
        'Prova internacional inédita no estado, com milhares de vagas esgotadas rapidamente e largada em frente à Prefeitura.',
    },
    {
      nome: 'Corrida e Caminhada de São João de Meriti',
      descricao:
        'Etapas de corrida e caminhada de rua organizadas localmente.',
    },
  ],
  culturaEsportiva:
    'Há forte cultura de futebol e de corrida e caminhada de rua, com grande adesão popular e investimento público recente em complexos esportivos e vila olímpica.',
  academias:
    'A oferta reúne redes consolidadas e boxes de crossfit em vários bairros, complementada por espaços públicos com academia ao ar livre e pista.',

  destaquesFitness: [
    'Altíssima densidade populacional — enorme base potencial de alunos por km².',
    'Redes consolidadas e boxes de crossfit em vários bairros.',
    'Espaços públicos com academia ao ar livre e pista (Vila Olímpica, Complexo Valter Pereira).',
    'Calendário de corridas de rua em expansão (10 Milhas Internacional como vitrine).',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 150,
    mensalMin: 300,
    mensalMax: 820,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'O "formigueiro das Américas" na Baixada Fluminense, São João de Meriti tem densidade altíssima e cena de corrida em expansão. Um personal trainer encontra aqui uma base imensa de alunos por km², com espaços públicos para treino e calendário de provas crescente.',

  vizinhas: ['duque-de-caxias-rj', 'nova-iguacu-rj', 'rio-de-janeiro-rj'],

  fontes: [
    { nome: 'IBGE Cidades — São João de Meriti', url: 'https://cidades.ibge.gov.br/brasil/rj/sao-joao-de-meriti/panorama' },
    { nome: 'Prefeitura de São João de Meriti', url: 'https://www.meriti.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-30',
  capaArte: {
    src: '/capas-cidade/sao-joao-de-meriti-rj.webp',
    w: 1200,
    h: 849,
    alt:
      'Personal trainer em São João de Meriti (RJ) em arte com a paisagem real da cidade — o casario denso do "Formigueiro das Américas", o trem da Baixada Fluminense e o mapa do município — Personal por Perto',
    legenda:
      'Treino personalizado em São João de Meriti: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
