import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'queimados-rj',
  nome: 'Queimados',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'queimadense',
  tipo: 'cidade',

  populacao: 140523,
  populacaoAno: 2022,
  idhm: 0.68,
  idhmClasse: 'médio',
  altitudeM: 29,

  resumoEconomico:
    'Emancipada de Nova Iguaçu em 1990, Queimados é uma cidade popular da Baixada Fluminense que se firmou como polo logístico e industrial. Seu Distrito Industrial, às margens da Rodovia Presidente Dutra (BR-116), reúne dezenas de empresas de logística, alimentos, embalagens e cosméticos, aproveitando a posição estratégica no eixo Rio–São Paulo e a proximidade do Arco Metropolitano.',

  mercado:
    'O mercado fitness é o de uma cidade popular da Baixada: predominam academias de bairro com mensalidades acessíveis e cresce o atendimento de personal domiciliar e ao ar livre. A demanda se concentra em quem busca saúde, condicionamento e rotina próxima de casa, num público que se desloca diariamente para a capital e cidades vizinhas.',

  bairrosNobres: ['Centro', 'Vila Pacaembu', 'Jardim da Fonte', 'Inconfidência'],
  bairrosPopulares: ['Vila Camarim', 'Santa Eugênia', 'Eldorado', 'Fanchem'],

  parques: [
    {
      nome: 'Praça dos Eucaliptos',
      descricao:
        'Praça central de Queimados, ponto de encontro da cidade e largada de eventos esportivos como a corrida Movimenta Queimados, com espaço para caminhada e atividades ao ar livre.',
    },
    {
      nome: 'Parque de Eventos de Queimados',
      descricao:
        'Espaço público que recebe grandes eventos do calendário municipal, como o Arraiá Queimadense, e serve de área aberta para atividades comunitárias.',
    },
    {
      nome: 'Orla de Queimados',
      descricao:
        'Trecho urbano usado como percurso de corridas de rua da cidade, ligando a região central ao entorno da linha férrea.',
    },
  ],
  ciclovias:
    'A cidade tem terreno plano, favorável ao deslocamento por bicicleta, mas a extensão da malha cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente e úmido, típico da Baixada Fluminense, com verões quentes e chuvosos.',
  climaTreino:
    'O calor e a umidade pedem treino ao ar livre no início da manhã ou no fim da tarde, com hidratação reforçada. O relevo plano facilita corridas e caminhadas em ruas e praças.',

  mobilidade:
    'Queimados é servida pelo trem da SuperVia (Ramal Japeri), com a Estação Queimados — inaugurada em 1858 — ligando a cidade à capital. A Rodovia Presidente Dutra (BR-116) passa próxima, reforçando a conurbação com o restante da Baixada Fluminense.',

  corridas: [
    {
      nome: 'Movimenta Queimados',
      descricao:
        'Corrida e caminhada de 5 km com largada na Praça dos Eucaliptos, percorrendo a região central e o entorno da linha férrea, reunindo milhares de participantes.',
    },
    {
      nome: 'Corrida do Aniversário de Queimados',
      descricao:
        'Prova de rua que integra o calendário comemorativo da cidade, atraindo corredores de Queimados e cidades vizinhas da Baixada.',
    },
  ],
  culturaEsportiva:
    'Queimados tem uma cena esportiva ligada a eventos públicos e populares, com corridas de rua organizadas pela prefeitura, festas tradicionais como o Arraiá Queimadense e o uso de praças como pontos de atividade física ao ar livre.',
  academias:
    'A oferta é formada principalmente por academias de bairro com preços acessíveis, distribuídas pelo Centro e pelos bairros residenciais, complementadas por treino domiciliar e atividades em praças.',

  destaquesFitness: [
    'Praça dos Eucaliptos como ponto central de treino e largada de corridas.',
    'Relevo plano favorável a corrida e caminhada de rua.',
    'Corrida Movimenta Queimados, que reúne milhares de participantes.',
    'Forte presença de academias de bairro e atendimento domiciliar.',
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
    'Cidade popular e polo logístico da Baixada Fluminense, Queimados combina rotina de quem se desloca diariamente com praças e ruas planas que favorecem o treino ao ar livre. Um personal trainer ajuda a estruturar resultados respeitando o orçamento, o clima quente e a agenda de quem mora e trabalha na região.',

  vizinhas: ['nova-iguacu-rj', 'belford-roxo-rj', 'mesquita-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Queimados', url: 'https://cidades.ibge.gov.br/brasil/rj/queimados/panorama' },
    { nome: 'Prefeitura de Queimados', url: 'https://queimados.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
