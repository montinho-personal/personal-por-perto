import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'brotas-sp',
  nome: 'Brotas',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'brotense',
  tipo: 'cidade',

  populacao: 23898,
  populacaoAno: 2022,
  idhm: 0.740,
  idhmClasse: 'alto',
  altitudeM: 647,

  resumoEconomico:
    'Conhecida como a Capital da Aventura do interior paulista, Brotas fica no centro do estado de São Paulo, banhada pelo rio Jacaré-Pepira, um dos rios mais limpos do estado. A economia combina o turismo de aventura e o ecoturismo — rafting, cachoeiras, trilhas e cânions que atraem visitantes o ano todo — com a forte produção agropecuária da região, baseada em cana-de-açúcar, laranja, eucalipto e pecuária. A cidade foi pioneira no país ao criar legislação específica para o turismo de aventura, virando referência nacional no setor.',

  mercado:
    'Por ser uma cidade pequena e voltada ao turismo, o mercado fitness de Brotas é enxuto e concentrado em academias locais de musculação e treino funcional. A vocação para esportes ao ar livre, no entanto, cria espaço para personal trainers que trabalham preparação física para trilhas, corrida e atividades de aventura, além do público local que busca acompanhamento individualizado.',

  bairrosNobres: ['Centro', 'Jardim Santa Cecília', 'Vila Santo Antônio', 'Jardim Olímpico'],
  bairrosPopulares: ['Jardim Bom Jesus', 'Patrimônio', 'Vila Esperança', 'Jardim Brotas'],

  parques: [
    {
      nome: 'Parque dos Saltos',
      descricao:
        'Cartão-postal urbano de Brotas, reúne quedas-d\'água em sequência no rio Jacaré-Pepira em pleno centro da cidade, com mata ciliar preservada e os vestígios de uma antiga usina hidrelétrica do começo do século XX — ponto de caminhada e contato com a natureza a pé da área urbana.',
    },
    {
      nome: 'Cachoeira Cassorova',
      descricao:
        'Uma das cachoeiras mais conhecidas da região, premiada pela beleza cênica e cercada por trilhas e ecoparque que servem de cenário para caminhadas e atividades ao ar livre.',
    },
    {
      nome: 'Rio Jacaré-Pepira',
      descricao:
        'Personagem principal do turismo brotense e um dos únicos rios limpos do estado de São Paulo, com 14 corredeiras usadas no rafting e margens que oferecem percursos para quem treina em meio à natureza.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária urbana é modesta, típica de uma cidade pequena; boa parte do pedal e da corrida acontece nas vias da área central e, sobretudo, nas estradas rurais e trilhas que dão acesso às cachoeiras e ecoparques no entorno.',

  clima:
    'O clima é subtropical úmido (Cwa na classificação de Köppen), com verões quentes e chuvosos e invernos mais amenos e secos. A altitude em torno de 647 metros suaviza o calor, e a estação chuvosa concentra-se entre outubro e março, quando o volume do rio Jacaré-Pepira fica mais alto.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre na maior parte do ano; no verão, vale priorizar o início da manhã ou o fim da tarde e reforçar a hidratação, enquanto o inverno seco e mais fresco é ideal para trilhas e corrida em meio à natureza.',

  mobilidade:
    'Brotas fica no centro do estado, a cerca de 235 km da capital, com acesso pela rodovia Engenheiro Paulo Nilo Romano (SP-225) e ligação às grandes vias paulistas como Bandeirantes, Anhanguera e Washington Luís. A cidade está a aproximadamente 18 km de São Carlos e 54 km de Jaú, e o deslocamento interno é feito principalmente por carro, já que o transporte coletivo é limitado.',

  corridas: [
    {
      nome: 'Trail Run de Brotas',
      descricao:
        'Provas de corrida de trilha realizadas na região aproveitam o relevo, as cachoeiras e as estradas rurais, com distâncias que vão de percursos curtos a desafios mais longos voltados a corredores de montanha.',
    },
    {
      nome: 'Eventos de endurance e aventura',
      descricao:
        'A vocação da cidade para o esporte ao ar livre atrai provas de endurance e desafios multiesportivos que exploram o rio, as trilhas e o terreno acidentado do entorno.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Brotas é fortemente ligada à aventura e à natureza: rafting, canoagem, trilhas, rapel e cachoeirismo fazem parte do cotidiano da cidade, que se tornou referência nacional em turismo de aventura. Esse ambiente estimula o preparo físico voltado a atividades ao ar livre.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, em número compatível com uma cidade pequena, distribuídas pela área central e bairros residenciais.',

  destaquesFitness: [
    'Capital da Aventura: referência nacional em turismo de aventura, com rafting no rio Jacaré-Pepira.',
    'Cerca de 70 cachoeiras catalogadas e ecoparques que servem de cenário para trilhas e treino ao ar livre.',
    'Clima subtropical ameno e altitude em torno de 647 m, favoráveis à atividade física ao ar livre.',
    'Economia que une ecoturismo a uma forte produção agropecuária de cana, laranja e eucalipto.',
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
    'Cercada por cachoeiras, trilhas e pelo rio Jacaré-Pepira, Brotas pede um treino que aproveite a natureza e o clima ameno do centro paulista. Um personal trainer ajuda a preparar o corpo para as atividades de aventura, organizar a rotina ao longo das estações e manter a constância, seja no treino ao ar livre ou na academia.',

  vizinhas: ['jau-sp', 'sao-carlos-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Brotas', url: 'https://cidades.ibge.gov.br/brasil/sp/brotas/panorama' },
    { nome: 'Prefeitura de Brotas', url: 'https://www.brotas.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
