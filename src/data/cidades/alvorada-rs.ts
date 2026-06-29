import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'alvorada-rs',
  nome: 'Alvorada',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'alvoradense',
  tipo: 'cidade',

  populacao: 187315,
  populacaoAno: 2022,
  idhm: 0.699,
  idhmClasse: 'médio',
  altitudeM: 36,

  resumoEconomico:
    'Alvorada fica na Região Metropolitana de Porto Alegre, a cerca de 15 km da capital, conurbada com Porto Alegre e Viamão. Com mais de 187 mil habitantes em uma área pequena, é uma das cidades mais densas do estado. A economia é baseada em comércio e serviços, e boa parte da população trabalha em Porto Alegre, o que dá ao município o perfil clássico de cidade dormitório. A indústria se concentra no distrito industrial às margens da RS-118.',

  mercado:
    'Cidade grande, popular e densamente povoada da Grande Porto Alegre, Alvorada tem mercado fitness movido por academias de bairro espalhadas pelos centros comerciais e pela forte demanda de atendimento domiciliar, que se ajusta às longas jornadas de quem trabalha na capital. O personal de bairro e o treino em casa têm espaço grande nesse perfil dormitório.',

  bairrosNobres: ['Bela Vista', 'Centro', 'Jardim Algarve', 'Aparecida'],
  bairrosPopulares: ['Sumaré', 'Formoza', 'Maria Regina', 'Umbu'],

  parques: [
    {
      nome: 'Chimarródromo',
      descricao:
        'Espaço público de convívio e lazer ao ar livre da cidade, usado para caminhadas, encontros e atividades comunitárias.',
    },
    {
      nome: 'CT Alvorada (Sport Club Internacional)',
      descricao:
        'Centro de treinamento do Internacional no bairro Bela Vista, referência esportiva local na formação de jogadores das categorias de base.',
    },
  ],
  ciclovias:
    'A malha cicloviária de Alvorada é incipiente; os deslocamentos por bicicleta se concentram em vias urbanas dos bairros, e a extensão total não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido, com verões quentes e invernos frios e úmidos, em que as mínimas podem se aproximar de zero.',
  climaTreino:
    'O frio e a umidade do inverno favorecem o treino indoor, em academia ou em casa; nos verões quentes, vale treinar cedo ou ao entardecer, com boa hidratação.',

  mobilidade:
    'Sem ligação ferroviária própria, Alvorada depende fortemente do transporte rodoviário para a capital: a maior parte da população se desloca diariamente a Porto Alegre, reforçando o perfil de cidade dormitório. A RS-118 corta o município e concentra o distrito industrial, e a BR-290 (Free Way) está nas proximidades da região.',

  corridas: [
    {
      nome: 'Eventos esportivos da SMCEJ',
      descricao:
        'A Secretaria Municipal de Cultura, Esporte e Juventude (SMCEJ) organiza atividades e ações esportivas comunitárias ao longo do ano nos bairros.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local gira em torno do futebol e das ações comunitárias de bairro, com a presença marcante do CT do Internacional na Bela Vista como referência regional de formação.',
  academias:
    'A oferta é dominada por academias de bairro distribuídas pelos centros comerciais da cidade, complementadas pela forte procura por atendimento domiciliar — formato que combina com a rotina de quem trabalha na capital.',

  destaquesFitness: [
    'Academias de bairro acessíveis espalhadas pelos centros comerciais.',
    'Forte demanda por personal e treino domiciliar no perfil dormitório.',
    'CT Alvorada do Internacional como referência esportiva local.',
    'Chimarródromo e espaços públicos para caminhada e treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Cidade dormitório grande e densa da Região Metropolitana de Porto Alegre, Alvorada tem mercado fitness popular, movido por academias de bairro e por uma demanda forte de atendimento em casa. Um personal trainer ajuda quem enfrenta longas jornadas até a capital a manter a rotina de treino perto de casa, com método e horários flexíveis.',

  vizinhas: ['porto-alegre-rs', 'viamao-rs', 'gravatai-rs', 'cachoeirinha-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Alvorada', url: 'https://cidades.ibge.gov.br/brasil/rs/alvorada/panorama' },
    { nome: 'Prefeitura de Alvorada', url: 'https://www.alvorada.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
