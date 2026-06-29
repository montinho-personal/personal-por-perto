import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'lagarto-se',
  nome: 'Lagarto',
  uf: 'SE',
  estado: 'Sergipe',
  estadoSlug: 'sergipe',
  regiao: 'Nordeste',
  gentilico: 'lagartense',
  tipo: 'cidade',

  populacao: 101579,
  populacaoAno: 2022,
  idhm: 0.625,
  idhmClasse: 'médio',
  altitudeM: 183,

  resumoEconomico:
    'Segundo município mais populoso de Sergipe, Lagarto fica no agreste, na região Centro-Sul do estado, a cerca de 75 km de Aracaju. A economia tem forte base agrícola — laranja, fumo, mandioca e produção de leite e queijos — somada a comércio e serviços que atendem toda a região. A instalação do campus de saúde da Universidade Federal de Sergipe (UFS) ampliou o fluxo de estudantes e profissionais e movimentou o setor de serviços da cidade.',

  mercado:
    'O mercado fitness de Lagarto é típico de cidade média do interior nordestino: academias de bairro, estúdios de treino funcional e personal trainers que atendem em praças, na orla de avenidas e em condomínios. O campus da UFS traz um público jovem e ligado à área de saúde, o que ajuda a sustentar a demanda por treino orientado e acompanhamento profissional.',

  bairrosNobres: ['Centro', 'Cidade Nova', 'Alto da Boa Vista', 'Jardim Campo Novo'],
  bairrosPopulares: ['São José', 'Loiola', 'Horta', 'Novo Horizonte'],

  parques: [
    {
      nome: 'Praça Filomeno Hora (Praça do Coreto)',
      descricao:
        'Principal praça do centro de Lagarto, ponto de encontro tradicional usado para caminhada leve, alongamento e atividades ao ar livre no fim do dia.',
    },
    {
      nome: 'Avenida Doutor Bezerra de Menezes',
      descricao:
        'Um dos corredores mais movimentados da cidade, com calçadas largas usadas por moradores para caminhada e corrida no início da manhã e no fim da tarde.',
    },
    {
      nome: 'Campus UFS Professor Antônio Garcia Filho',
      descricao:
        'O campus de saúde da UFS tem áreas abertas e vias internas frequentadas por estudantes e moradores para caminhada e corrida.',
    },
  ],
  ciclovias:
    'Lagarto ainda tem malha cicloviária limitada, concentrada em trechos de avenidas centrais; o uso de bicicleta é comum no deslocamento diário, mas o ciclismo de treino costuma acontecer nas estradas vicinais do entorno rural.',

  clima:
    'O clima é de agreste sergipano, quente o ano todo, com temperaturas que costumam variar de cerca de 19 °C a 33 °C. O verão é longo e quente; o período mais chuvoso concentra-se no outono e no inverno.',
  climaTreino:
    'Pelo calor predominante, o treino ao ar livre rende mais cedo de manhã ou após o pôr do sol, com hidratação reforçada. Nos meses mais secos e quentes, vale buscar sombra e horários amenos para correr nas avenidas e praças.',

  mobilidade:
    'O acesso principal a Lagarto se dá pela BR-101, que corta a região Centro-Sul de Sergipe e liga a cidade a Aracaju (cerca de 75 km) e ao restante do litoral, complementada por rodovias estaduais. O deslocamento dentro do município é feito por carro, moto e ônibus.',

  corridas: [
    {
      nome: 'Corrida Hiper Rocha',
      descricao:
        'Corrida de rua realizada em Lagarto com percursos de 3 km, 5 km e 10 km, atendendo desde iniciantes até corredores mais experientes.',
    },
    {
      nome: 'Provas regionais do Centro-Sul sergipano',
      descricao:
        'Lagarto também recebe etapas e provas de calendários de corrida de rua do interior de Sergipe, que reúnem corredores das cidades vizinhas.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Lagarto mistura o futebol, tradicional no interior, com uma cena crescente de corrida de rua e treino funcional. Praças e avenidas funcionam como espaços informais de atividade física, e o público universitário da área de saúde reforça o interesse por hábitos ativos.',
  academias:
    'A cidade conta com academias de bairro e estúdios de treino funcional e musculação, além de personal trainers que atendem em espaços próprios, em casa e ao ar livre nas praças e avenidas centrais.',

  destaquesFitness: [
    'Segundo maior município de Sergipe em população, com mercado de serviços em expansão.',
    'Campus de saúde da UFS, que traz público jovem ligado a hábitos ativos.',
    'Calendário de corridas de rua, como a Corrida Hiper Rocha (3 km, 5 km e 10 km).',
    'Praças e avenidas centrais que funcionam como espaços de treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Como segundo maior município de Sergipe, Lagarto combina base agrícola, comércio regional e o impulso do campus de saúde da UFS, criando espaço para uma cena fitness em crescimento. Um personal trainer ajuda a organizar o treino aproveitando praças, avenidas e o clima quente do agreste, com um plano ajustado ao seu objetivo e à sua rotina.',

  vizinhas: ['aracaju-se', 'nossa-senhora-do-socorro-se'],

  fontes: [
    { nome: 'IBGE Cidades — Lagarto', url: 'https://cidades.ibge.gov.br/brasil/se/lagarto/panorama' },
    { nome: 'Prefeitura de Lagarto', url: 'https://www.lagarto.se.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
