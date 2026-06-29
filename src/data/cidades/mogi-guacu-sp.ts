import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'mogi-guacu-sp',
  nome: 'Mogi Guaçu',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'guaçuano',
  tipo: 'cidade',

  populacao: 153658,
  populacaoAno: 2022,
  idhm: 0.774,
  idhmClasse: 'alto',
  altitudeM: 588,

  resumoEconomico:
    'Mogi Guaçu é uma cidade média industrial do interior paulista, na região de Campinas e Mogi Mirim, às margens do Rio Mogi Guaçu. Sua economia tem forte tradição em papel e celulose — abriga uma grande fábrica do setor instalada às margens da Rodovia SP-340 desde a década de 1960 —, somada a metalurgia, alimentos, cosméticos e cerâmica, atividade que rendeu à cidade a fama de "Capital da Cerâmica". No campo, destaca-se a produção de laranja e tomate.',

  mercado:
    'O mercado fitness é o de uma cidade média industrial: predominam academias de bairro, estúdios e algumas redes maiores, com boa demanda de trabalhadores da indústria e do comércio. É um ambiente favorável para personal trainers que atuam em academias de bairro e atendimento domiciliar, complementado pelo treino ao ar livre nas áreas verdes próximas ao rio.',

  bairrosNobres: ['Jardim Novo', 'Centro', 'Chácara Alvorada', 'Recanto Itamaracá'],
  bairrosPopulares: ['Vila São Carlos', 'Martinho Prado Júnior', 'Jardim Bandeirantes', 'Jardim Cristina'],

  parques: [
    {
      nome: 'Parque dos Ingás',
      descricao:
        'Principal área verde no Centro, às margens do Rio Mogi Guaçu, bem arborizada e com pista de caminhada iluminada, trilhas, playgrounds e espaço para piquenique — opção popular para atividade física ao ar livre.',
    },
    {
      nome: 'Estação Experimental de Mogi Guaçu',
      descricao:
        'Área de reserva e pesquisa florestal com trilhas em meio à mata, usada por moradores para caminhada e corrida em contato com a natureza.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é pontual e está em ampliação; o projeto de revitalização do Parque dos Ingás prevê ciclovia, pista de caminhada e bicicletário. A extensão total da rede não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido (Cfa), com média anual em torno de 21,6 °C, verão quente e chuvoso (pico em fevereiro) e inverno curto, ameno e seco (mês mais seco em agosto).',
  climaTreino:
    'No verão, vale priorizar o treino ao ar livre no início da manhã ou no fim de tarde, fugindo do calor e das pancadas de chuva; o inverno seco e ameno é o período mais confortável para corrida e atividades externas.',

  mobilidade:
    'Mogi Guaçu é cortada pela Rodovia SP-340, eixo que liga a cidade a Campinas, Mogi Mirim e à região nordeste do estado, concentrando boa parte da atividade industrial às suas margens. O deslocamento interno é majoritariamente rodoviário, com terminal municipal de ônibus no Centro.',

  corridas: [
    {
      nome: 'Circuito Pague Menos — Etapa Mogi Guaçu',
      descricao:
        'Etapa local de circuito de corrida de rua que passa pela cidade, com percursos para corredores e caminhantes.',
    },
    {
      nome: 'Good Run — Etapa Mogi Guaçu',
      descricao:
        'Prova de rua com percursos de 10 km e 5 km, além de caminhada de 5 km, recebendo atletas de diferentes níveis.',
    },
    {
      nome: 'Circuito de Corrida e Caminhada',
      descricao:
        'Etapa com corrida de 5 km e caminhada livre de 3 km, realizada com inscrições gratuitas e largada em área central da cidade.',
    },
  ],
  culturaEsportiva:
    'A cidade tem um calendário recorrente de corridas de rua, com etapas de circuitos regionais e provas beneficentes, além de boa adesão à caminhada e à corrida no Parque dos Ingás e na orla do Rio Mogi Guaçu. A cultura esportiva é a típica do interior paulista, ligada ao polo regional de Campinas.',
  academias:
    'A oferta reúne academias de bairro, estúdios e algumas redes maiores, com presença de planos corporativos voltados aos trabalhadores da indústria, complementada pelo treino ao ar livre nas áreas verdes do Centro.',

  destaquesFitness: [
    'Parque dos Ingás, às margens do Rio Mogi Guaçu, com pista de caminhada iluminada e trilhas.',
    'Trilhas na Estação Experimental para corrida em meio à mata.',
    'Calendário recorrente de corridas de rua (Circuito Pague Menos, Good Run, circuitos regionais).',
    'Inverno seco e ameno favorável ao treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade média industrial às margens do Rio Mogi Guaçu, Mogi Guaçu combina forte tradição em papel e celulose com boas áreas verdes para treino, como o Parque dos Ingás. Um personal trainer ajuda a aproveitar essas opções com método, ajustando os horários ao calor do verão paulista e à rotina de quem trabalha na indústria local.',

  vizinhas: ['campinas-sp', 'limeira-sp', 'jaguariuna-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Mogi Guaçu', url: 'https://cidades.ibge.gov.br/brasil/sp/mogi-guacu/panorama' },
    { nome: 'Prefeitura de Mogi Guaçu', url: 'https://www.mogiguacu.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
