import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'araguaina-to',
  nome: 'Araguaína',
  uf: 'TO',
  estado: 'Tocantins',
  estadoSlug: 'tocantins',
  regiao: 'Norte',
  gentilico: 'araguainense',
  tipo: 'cidade',

  populacao: 171301,
  populacaoAno: 2022,
  idhm: 0.752,
  idhmClasse: 'alto',
  altitudeM: 227,

  resumoEconomico:
    'Segunda maior cidade do Tocantins e principal polo do norte do estado, Araguaína é conhecida como "Capital do Boi Gordo", forte em pecuária e frigoríficos. É também centro de comércio, saúde e educação que atende o norte do TO, o sul do Pará e o do Maranhão.',

  mercado:
    'Como polo de saúde e educação com população jovem e forte presença universitária, a cidade sustenta demanda crescente por academias, estúdios e assessorias de corrida.',

  bairrosNobres: ['Setor Central', 'Setor Oeste', 'Jardim Paulista', 'Setor Universitário'],
  bairrosPopulares: ['Setor Cimba', 'Araguaína Sul', 'Costa Esmeralda', 'Jardim das Flores'],

  parques: [
    {
      nome: 'Eco Parque Cimba',
      descricao:
        'Tem pistas de 1,2 km (caminhada/corrida e ciclismo) e academia ao ar livre (adulto, infantil e PCD), recebendo centenas de pessoas por dia.',
    },
    {
      nome: 'Via Lago / Lago Sul',
      descricao:
        'Orla de lago usada para caminhada e atividades físicas.',
    },
    {
      nome: 'Rede de academias ao ar livre',
      descricao:
        'Dezenas de unidades distribuídas em praças e setores da cidade.',
    },
  ],
  ciclovias:
    'O Eco Parque Cimba tem pista de ciclismo dedicada (cerca de 1,2 km); a malha cicloviária urbana mais ampla ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de savana, quente o ano todo, com estação seca acentuada de maio a setembro.',
  climaTreino:
    'O calor intenso e a baixa umidade no inverno seco recomendam treinar nas primeiras horas da manhã, hidratar bem e priorizar áreas arborizadas como o Cimba.',

  mobilidade:
    'Araguaína é cortada pela BR-153 (Belém–Brasília), principal eixo logístico que reforça seu papel de entroncamento do norte do estado.',

  corridas: [
    {
      nome: 'Corrida do Trabalhador de Araguaína',
      descricao:
        'Uma das maiores do estado, com milhares de inscritos.',
    },
    {
      nome: 'Corrida de Rua do Parque Ecológico Cimba',
      descricao:
        'Etapa do circuito local, com recordes de milhares de inscritos no aniversário da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura de corrida de rua é muito forte (eventos com milhares de inscritos) e há investimento público continuado em academias ao ar livre e praças.',
  academias:
    'A oferta reúne academias e estúdios, com público jovem e universitário, complementada por uma das maiores redes de academias ao ar livre do Norte.',

  destaquesFitness: [
    'Dezenas de espaços públicos para atividade física (rede de academias ao ar livre).',
    'Eco Parque Cimba como hub completo (pistas, academia e ciclovia).',
    'Eventos de corrida com milhares de participantes (alta adesão).',
    'Polo universitário e de saúde, que alimenta a demanda fitness.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 135,
    mensalMin: 280,
    mensalMax: 760,
    onlineMin: 150,
    onlineMax: 390,
  },

  conclusao:
    'Capital do Boi Gordo e polo do norte tocantinense, Araguaína tem uma das culturas de corrida mais fortes da região e ótimos espaços públicos. Um personal trainer ajuda a aproveitar o Eco Parque Cimba com método, ajustando horários e hidratação ao calor do cerrado.',

  vizinhas: ['palmas-to'],

  fontes: [
    { nome: 'IBGE Cidades — Araguaína', url: 'https://cidades.ibge.gov.br/brasil/to/araguaina/panorama' },
    { nome: 'Prefeitura de Araguaína', url: 'https://www.araguaina.to.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
