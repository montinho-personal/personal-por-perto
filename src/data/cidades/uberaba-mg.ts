import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'uberaba-mg',
  nome: 'Uberaba',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'uberabense',
  tipo: 'cidade',

  populacao: 337836,
  populacaoAno: 2022,
  idhm: 0.772,
  idhmClasse: 'alto',
  altitudeM: 823,

  resumoEconomico:
    'Principal polo do agronegócio do Triângulo Mineiro e "Capital Mundial do Zebu", Uberaba é sede da ABCZ e palco da ExpoZebu — a maior feira de gado zebu do mundo, no Parque Fernando Costa. Combina pecuária e grãos com indústria (fertilizantes e química) e serviços, em uma cidade de bom padrão de renda.',

  mercado:
    'O mercado fitness é consolidado, com grandes redes, boxes de crossfit e estúdios, além de boa cobertura de planos corporativos. O clima de altitude e o inverno seco favorecem o treino ao ar livre boa parte do ano.',

  bairrosNobres: ['Estados Unidos', 'Fabrício', 'Abadia', 'São Benedito'],
  bairrosPopulares: ['Alfredo Freire', 'Amoroso Costa', 'Boa Vista', 'Costa Telles'],

  parques: [
    {
      nome: 'Parque das Acácias ("Piscinão")',
      descricao:
        'Com cerca de 14,7 hectares, tem pista de caminhada com piso tátil, academia ao ar livre, pista de skate e quadras — o principal hub público de treino.',
    },
    {
      nome: 'Parque do Jacarandá (Bosque)',
      descricao:
        'Com cerca de 33 mil m², é uma área arborizada para caminhada e corrida em meio à natureza.',
    },
    {
      nome: 'Parque Fernando Costa (ABCZ)',
      descricao:
        'Complexo da ExpoZebu, usado como arena e ponto de largada de corridas de rua.',
    },
  ],
  ciclovias:
    'A cidade tem ciclovias urbanas; a extensão oficial total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude, com verão quente e chuvoso e inverno seco e ameno (média em torno de 22,9 °C).',
  climaTreino:
    'O inverno seco e a altitude favorecem o treino ao ar livre, especialmente cedo de manhã; no verão, vale evitar o fim de tarde (chuvas) e reforçar a hidratação.',

  mobilidade:
    'Uberaba é servida pela BR-050 (São Paulo e Brasília) e pela BR-262 (Belo Horizonte), em posição estratégica no Triângulo Mineiro, próxima a Uberlândia e Araxá.',

  corridas: [
    {
      nome: 'Meia Maratona de Uberaba',
      descricao:
        'Prova de rua tradicional, com percursos de 5 km, 10 km e 21 km.',
    },
    {
      nome: 'Maratona Geoparque Uberaba',
      descricao:
        'Primeira maratona completa (42 km) da cidade, com largada no Parque Fernando Costa.',
    },
  ],
  culturaEsportiva:
    'Uberaba tem um calendário esportivo ativo, com forte adesão à corrida de rua e bom uso dos parques públicos; a tradição da pecuária também movimenta os esportes equestres.',
  academias:
    'A oferta reúne grandes redes, boxes de crossfit e estúdios, com cobertura de planos corporativos, complementada pela estrutura pública do Parque das Acácias.',

  destaquesFitness: [
    'Parque das Acácias como principal hub público de treino.',
    'Cena de corrida de rua consolidada (Meia Maratona e a nova Maratona).',
    'Mercado com redes, crossfit e estúdios, com planos corporativos.',
    'Inverno seco e clima de altitude que favorecem o treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Capital do Zebu e polo do Triângulo Mineiro, Uberaba tem clima de altitude favorável e boa estrutura de parques e academias. Um personal trainer ajuda a aproveitar o Parque das Acácias e a preparar provas de rua, da meia à maratona, com método.',

  vizinhas: ['uberlandia-mg', 'ribeirao-preto-sp', 'belo-horizonte-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Uberaba', url: 'https://cidades.ibge.gov.br/brasil/mg/uberaba/panorama' },
    { nome: 'Prefeitura de Uberaba', url: 'https://www.uberaba.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
