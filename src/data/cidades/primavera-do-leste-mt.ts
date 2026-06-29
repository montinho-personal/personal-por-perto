import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'primavera-do-leste-mt',
  nome: 'Primavera do Leste',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'primaverense',
  tipo: 'cidade',

  populacao: 85146,
  populacaoAno: 2022,
  idhm: 0.752,
  idhmClasse: 'alto',
  altitudeM: 636,

  resumoEconomico:
    'Cidade jovem e planejada do sudeste de Mato Grosso, Primavera do Leste nasceu da colonização do cerrado e é grande polo do agronegócio — soja, algodão e milho —, com a maior área irrigada do estado e um dos maiores PIBs agropecuários de MT, com forte cadeia agroindustrial e exportadora.',

  mercado:
    'Cidade de alta renda do agro e perfil jovem, sustenta forte oferta fitness — redes, boxes de crossfit e diversas academias —, terreno fértil para personal trainers.',

  bairrosNobres: ['Jardim Riva', 'Parque Eldorado', 'Primavera II', 'Poncho Verde'],
  bairrosPopulares: ['Buritis', 'Residencial Tancredo Neves', 'Primavera III', 'Residencial Sagrada Família'],

  parques: [
    {
      nome: 'Praça Esportiva Florindo Gasparotto',
      descricao:
        'Espaço de lazer e prática esportiva no bairro Parque Eldorado.',
    },
    {
      nome: 'Praça Anderson Boese',
      descricao:
        'Tem academia ao ar livre adaptada para pessoas com deficiência.',
    },
    {
      nome: 'Pistas e academias ao ar livre dos bairros',
      descricao:
        'A cidade tem dezenas de pistas de caminhada e academias ao ar livre, além de arenas de crossfit, distribuídas pelos setores.',
    },
  ],
  ciclovias:
    'Há ciclovia confirmada na cidade, usada em corridas e caminhadas; a extensão oficial ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de savana (cerrado), quente o ano todo, com verão em torno de 34 °C e estação chuvosa de outubro a março.',
  climaTreino:
    'O calor e a umidade elevados no período chuvoso e o calor seco fora dele pedem horários frescos e hidratação reforçada.',

  mobilidade:
    'Primavera do Leste fica no entroncamento da BR-070 com a MT-130 (Rota dos Grãos), a cerca de 230 km de Cuiabá, eixo logístico do agronegócio.',

  corridas: [
    {
      nome: 'Corrida Homens do Fogo',
      descricao:
        'Prova com percurso de cerca de 5 km e categorias diversas.',
    },
    {
      nome: 'Corrida e Caminhada da Primavera',
      descricao:
        'Prova realizada na ciclovia da cidade, parte do calendário esportivo local.',
    },
  ],
  culturaEsportiva:
    'Há forte investimento público em infraestrutura de lazer (dezenas de academias ao ar livre e pistas em todos os setores) e um calendário de corridas de rua, com a cidade integrando o circuito de MT.',
  academias:
    'A oferta reúne redes, boxes de crossfit e academias, com público jovem de alta renda do agro, complementada por uma das maiores estruturas públicas de pistas e academias ao ar livre do estado.',

  destaquesFitness: [
    'Altíssima renda per capita do agro (soja, algodão e milho) e público jovem.',
    'Infraestrutura pública robusta: dezenas de pistas de caminhada e academias ao ar livre.',
    'Boxes de crossfit e redes já instalados.',
    'Corridas de rua locais recorrentes (Homens do Fogo, Corrida da Primavera).',
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
    'Cidade planejada e de altíssima renda do agro mato-grossense, Primavera do Leste tem uma das maiores estruturas públicas de treino ao ar livre do estado. Um personal trainer encontra aqui um mercado jovem e aquecido, ideal para treino presencial e online.',

  vizinhas: ['rondonopolis-mt', 'cuiaba-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Primavera do Leste', url: 'https://cidades.ibge.gov.br/brasil/mt/primavera-do-leste/panorama' },
    { nome: 'Prefeitura de Primavera do Leste', url: 'https://www.primaveradoleste.mt.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
