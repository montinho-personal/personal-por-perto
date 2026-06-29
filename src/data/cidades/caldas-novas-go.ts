import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'caldas-novas-go',
  nome: 'Caldas Novas',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'caldense',
  tipo: 'cidade',

  populacao: 98622,
  populacaoAno: 2022,
  idhm: 0.733,
  idhmClasse: 'alto',
  altitudeM: 686,

  resumoEconomico:
    'No sul de Goiás, a cerca de 170 km de Goiânia, Caldas Novas é a maior estância hidrotermal do mundo, com águas que brotam quentes do solo a partir de dezenas de poços. A economia gira quase integralmente em torno do turismo, da hotelaria, dos parques aquáticos e do bem-estar, movimentando a cidade o ano inteiro.',

  mercado:
    'Cidade turística com forte rede de academias e estúdios concentrados no Setor Central e no Setor Turista, tem demanda mista de moradores e turistas de bem-estar, criando um nicho para personal trainers ligados a hotéis e resorts.',

  bairrosNobres: ['Estância Itanhangá', 'Setor Turista', 'Bandeirantes', 'Setor Central'],
  bairrosPopulares: ['Bairro Popular', 'Setor São José', 'Setor Santa Efigênia', 'Jardim Tangará'],

  parques: [
    {
      nome: 'Orla do Lago Corumbá',
      descricao:
        'Calçadão à beira-lago com quadras de areia, pergolados, academia ao ar livre e píer, ponto de caminhada.',
    },
    {
      nome: 'Parque Estadual da Serra de Caldas Novas (PESCaN)',
      descricao:
        'Unidade de conservação do Cerrado com trilhas para trekking (Cascatinha e Paredão) e mirantes a cerca de 1.043 m, de entrada gratuita.',
    },
    {
      nome: 'Praças do Setor Central',
      descricao:
        'Academias ao ar livre e áreas de caminhada urbana no centro da cidade.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical semiúmido, com inverno seco (alta temporada) e verão chuvoso; é quente, mas a altitude (cerca de 686 m) ameniza as noites.',
  climaTreino:
    'O calor diurno intenso do cerrado recomenda treinar ao ar livre cedo ou no fim de tarde, com hidratação reforçada.',

  mobilidade:
    'O acesso se dá pela BR-153 (eixo Goiânia–sul de Goiás) e por rodovias estaduais como a GO-139, em uma cidade compacta de perfil turístico.',

  corridas: [
    {
      nome: 'Circuito AABB de Corrida de Rua — Caldas Novas',
      descricao:
        'Prova de rua local, parte do calendário esportivo da cidade.',
    },
    {
      nome: 'Provas e treinões na orla do Lago Corumbá',
      descricao:
        'Eventos de corrida e caminhada que aproveitam a orla e o entorno do lago.',
    },
  ],
  culturaEsportiva:
    'A cidade tem forte ligação com lazer aquático e bem-estar (termas, SPAs e parques aquáticos), com caminhada na orla do lago e ecoturismo nas trilhas do PESCaN como atividades predominantes.',
  academias:
    'A oferta reúne academias e estúdios no Setor Central e no Setor Turista, com nicho de treino em hotéis e resorts de bem-estar, complementada pela orla e pelas trilhas.',

  destaquesFitness: [
    'Orla do Lago Corumbá com academia ao ar livre e calçadão à beira-lago.',
    'Trilhas do Parque Estadual da Serra de Caldas para treino outdoor e trekking.',
    'Nicho de personal training em hotéis e resorts de bem-estar.',
    'Treino recomendado em horários amenos pelo calor do cerrado.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 155,
    mensalMin: 330,
    mensalMax: 900,
    onlineMin: 160,
    onlineMax: 420,
  },

  conclusao:
    'Maior estância hidrotermal do mundo, Caldas Novas une turismo de bem-estar, a orla do Lago Corumbá e as trilhas da Serra de Caldas. Um personal trainer ajuda a aproveitar esse cenário com método, ajustando horários e hidratação ao calor do cerrado.',

  vizinhas: ['goiania-go', 'aparecida-de-goiania-go'],

  fontes: [
    { nome: 'IBGE Cidades — Caldas Novas', url: 'https://cidades.ibge.gov.br/brasil/go/caldas-novas/panorama' },
    { nome: 'Prefeitura de Caldas Novas', url: 'https://www.caldasnovas.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
