import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'icara-sc',
  nome: 'Içara',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'içarense',
  tipo: 'cidade',

  populacao: 59035,
  populacaoAno: 2022,
  idhm: 0.74,
  idhmClasse: 'alto',
  altitudeM: 15,

  resumoEconomico:
    'No litoral sul de Santa Catarina e integrante da região carbonífera (AMREC), Içara fica a poucos quilômetros de Criciúma e tem economia industrial diversificada: revestimentos cerâmicos, vestuário e confecção, plásticos e descartáveis, metalmecânica e o histórico carvão. No campo, é forte na fumicultura e referência estadual na produção de mel, o que lhe rendeu o título de "Capital do Mel".',

  mercado:
    'A base industrial diversificada e a proximidade com o polo de Criciúma sustentam academias e estúdios na área urbana, enquanto a faixa litorânea aquece a procura por treino no verão. A oferta é típica de cidade média catarinense, complementada por praças e pela orla.',

  bairrosNobres: ['Centro', 'Cristo Rei', 'Liri', 'Jardim Elizabete'],
  bairrosPopulares: ['Vila Nova', 'Presidente Vargas', 'Raichaski', 'Boa Vista'],

  parques: [
    {
      nome: 'Praça Presidente João Goulart',
      descricao:
        'A principal praça do Centro, ponto de encontro e de caminhada no coração da cidade.',
    },
    {
      nome: 'Praia do Luz',
      descricao:
        'Trecho do litoral içarense, frequentado para caminhadas e atividades ao ar livre na beira-mar, sobretudo no verão.',
    },
    {
      nome: 'Praia da Esplanada',
      descricao:
        'Outro ponto da orla no extremo sul do litoral de Içara, com extensa faixa de areia usada para corridas e treinos à beira da praia.',
    },
  ],
  ciclovias:
    'Há trechos cicláveis na malha urbana e ligações com o litoral; a extensão total da rede não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido, com influência litorânea: verões quentes (em torno de 27 °C) e invernos frios, com mínimas que se aproximam de 10 °C.',
  climaTreino:
    'O inverno é confortável para treinar ao ar livre; no verão, vale priorizar a manhã ou o fim de tarde, reforçar a hidratação e aproveitar a brisa da orla.',

  mobilidade:
    'A BR-101 corta o município e é o principal eixo de acesso, ligando Içara a Criciúma, ao norte, e a Araranguá, ao sul; vias estaduais conectam a sede ao litoral e ao vizinho Balneário Rincão.',

  corridas: [
    {
      nome: 'Corridas de rua locais',
      descricao:
        'O calendário regional inclui provas de rua promovidas por organizadores e assessorias do entorno de Criciúma, com etapas que passam por Içara.',
    },
    {
      nome: 'Treinos na orla',
      descricao:
        'A faixa de areia das praias do Luz e da Esplanada é usada por corredores para treinos longos à beira-mar, especialmente no verão.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura a tradição industrial e operária da região carbonífera com o uso intenso da orla no verão. A proximidade com Criciúma amplia o acesso a eventos e assessorias de corrida da região.',
  academias:
    'A oferta reúne academias e estúdios na área urbana, complementados pelas praças do Centro e pela orla das praias do Luz e da Esplanada, e reforçados pela vizinhança com o polo de Criciúma.',

  destaquesFitness: [
    'Cidade de IDHM alto, com público que valoriza saúde e bem-estar.',
    'Litoral com praias do Luz e da Esplanada para treino à beira-mar.',
    'Proximidade com Criciúma amplia o acesso a eventos e assessorias.',
    'Inverno ameno favorece o treino ao ar livre; o verão exige ajuste de horário.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade industrial e litorânea do sul catarinense, vizinha de Criciúma e do Balneário Rincão, Içara combina praças urbanas com a orla das praias do Luz e da Esplanada. Um personal trainer ajuda a aproveitar esses espaços e a montar uma rotina consistente o ano todo, ajustando o treino ao verão litorâneo e ao inverno ameno.',

  vizinhas: ['criciuma-sc', 'ararangua-sc', 'tubarao-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Içara', url: 'https://cidades.ibge.gov.br/brasil/sc/icara/panorama' },
    { nome: 'Prefeitura de Içara', url: 'https://www.icara.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
