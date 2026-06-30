import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'adamantina-sp',
  nome: 'Adamantina',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'adamantinense',
  tipo: 'cidade',

  populacao: 34687,
  populacaoAno: 2022,
  idhm: 0.790,
  idhmClasse: 'alto',
  altitudeM: 412,

  resumoEconomico:
    'Conhecida como a "Joia da Nova Alta Paulista", Adamantina é um polo regional de serviços no oeste paulista. A economia se apoia fortemente no setor de serviços e no comércio diversificado que atende toda a microrregião, complementados pela agropecuária e pela agroindústria do entorno. A presença de instituições de ensino superior, com destaque para a FAI (Centro Universitário de Adamantina), e de uma rede de saúde de referência faz da cidade um centro de educação e atendimento médico para os municípios vizinhos.',

  mercado:
    'Como cidade média e polo universitário, Adamantina tem um mercado fitness aquecido pela presença de estudantes, profissionais de saúde e uma população atenta à qualidade de vida. A procura por personal trainers cresce entre quem busca acompanhamento individualizado, seja em academias do centro e dos bairros residenciais, seja em treinos ao ar livre nos parques e praças da cidade.',

  bairrosNobres: ['Centro', 'Jardim Adamantina', 'Jardim Brasil', 'Jardim América'],
  bairrosPopulares: ['Vila Cicma', 'Jardim Europa', 'Parque do Sol', 'Jardim Bandeirantes'],

  parques: [
    {
      nome: 'Parque dos Pioneiros',
      descricao:
        'Principal cartão de visita da cidade, com área arborizada de mais de 40 mil m². Reúne quadras de areia, parque infantil, academia ao ar livre e mesas de jogos, sendo um dos espaços mais usados para caminhada, corrida e treino ao ar livre.',
    },
    {
      nome: 'Praça Euclides Romanini',
      descricao:
        'Praça com uma pequena lagoa povoada por patos, cágados e peixes, além de parque infantil, academia ao ar livre, quadra de areia e uma imagem do Cristo Redentor — um ponto agradável para atividade física no dia a dia.',
    },
    {
      nome: 'Centro Esportivo e ginásios municipais',
      descricao:
        'A cidade conta com estrutura esportiva pública e quadras que apoiam a prática de atividades coletivas e o treino orientado, complementando as opções ao ar livre dos parques e praças.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é típica de uma cidade média do interior, concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias internas dos bairros e no entorno dos parques.',

  clima:
    'O clima é tropical, com duas estações bem definidas: verões quentes e chuvosos e invernos secos e amenos. As temperaturas médias anuais ficam em torno de 23 °C, com dias bastante quentes nos meses de verão, padrão característico do oeste paulista.',
  climaTreino:
    'O calor do verão pede treinar no início da manhã ou no fim da tarde, com hidratação reforçada, enquanto o inverno seco e ameno costuma ser o período mais confortável para atividades ao ar livre nos parques e praças da cidade.',

  mobilidade:
    'Adamantina é cortada pela Rodovia Comandante João Ribeiro de Barros (SP-294), eixo que liga a cidade a Marília, Tupã, Osvaldo Cruz, Dracena e Panorama, em direção à divisa com o Mato Grosso do Sul. A rodovia, em processo de melhorias e duplicação em trechos, sustenta a conexão regional, e o transporte urbano é feito por ônibus dentro de uma malha viária de porte interiorano.',

  corridas: [
    {
      nome: 'Corrida e Caminhada Juntos com a Camda',
      descricao:
        'Prova de rua de caráter solidário realizada na cidade, que alia atividade física à arrecadação de alimentos para entidades assistenciais do município.',
    },
    {
      nome: 'Adamantina Animal Run',
      descricao:
        'Corrida e caminhada com largada no Parque dos Pioneiros, voltada à conscientização sobre a causa animal, que reúne corredores e famílias da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Adamantina mistura o uso dos parques e praças para caminhada e corrida, provas de rua com forte apelo comunitário e solidário, e o estímulo à atividade física ligado à vocação da cidade como polo de saúde e educação da Nova Alta Paulista.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média e universitária do interior paulista.',

  destaquesFitness: [
    'Polo regional de serviços, saúde e educação da Nova Alta Paulista, com a FAI entre as instituições de referência.',
    'Parque dos Pioneiros, com mais de 40 mil m², como principal espaço de caminhada, corrida e treino ao ar livre.',
    'Calendário de corridas de rua de caráter solidário e comunitário.',
    'Clima tropical com verão quente e inverno seco e ameno, que orienta os melhores horários de treino.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Polo de serviços, saúde e educação no oeste paulista, Adamantina oferece boa estrutura de parques e praças para quem quer se exercitar, somada a um calendário de corridas com forte espírito comunitário. Um personal trainer ajuda a organizar a rotina respeitando o clima da região, escolhendo os melhores horários e mantendo a constância ao longo do ano.',

  vizinhas: ['tupa-sp', 'marilia-sp', 'presidente-prudente-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Adamantina', url: 'https://cidades.ibge.gov.br/brasil/sp/adamantina/panorama' },
    { nome: 'Prefeitura de Adamantina', url: 'https://www.adamantina.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
