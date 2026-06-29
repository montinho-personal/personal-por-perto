import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itaguai-rj',
  nome: 'Itaguaí',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'itaguaiense',
  tipo: 'cidade',

  populacao: 116841,
  populacaoAno: 2022,
  idhm: 0.715,
  idhmClasse: 'alto',
  altitudeM: 8,

  resumoEconomico:
    'Na Costa Verde fluminense, às margens da baía de Sepetiba e a cerca de 70 km do Rio pela BR-101, Itaguaí tem economia ancorada na logística portuária e na indústria naval. Abriga o Porto de Itaguaí, o maior do estado e o porto público que mais movimenta minério de ferro no Brasil, além do Complexo Naval de Itaguaí, onde a Marinha conduz o Programa de Desenvolvimento de Submarinos (PROSUB), em parceria com a França, e a Nuclebrás Equipamentos Pesados (Nuclep). Pela cidade já foram lançados os submarinos Riachuelo, Humaitá, Tonelero e Almirante Karam.',

  mercado:
    'Cidade média portuária, Itaguaí combina uma classe trabalhadora ligada ao porto, à indústria naval e à logística com bairros litorâneos como Coroa Grande. O mercado de personal trainer se apoia em academias de bairro e em atendimento domiciliar, com demanda também por treino ao ar livre na orla da baía de Sepetiba.',

  bairrosNobres: ['Centro', 'Coroa Grande', 'Vila Geni', 'Mazomba'],
  bairrosPopulares: ['Engenho', 'Brisa Mar', 'Chaperó', 'Ilha da Madeira'],

  parques: [
    {
      nome: 'Orla de Coroa Grande',
      descricao:
        'Faixa litorânea na baía de Sepetiba, com calçada e área para caminhada, corrida e treino ao ar livre à beira-mar.',
    },
    {
      nome: 'Praças e orla do Centro',
      descricao:
        'Espaços públicos no entorno do Centro que concentram caminhada, alongamento e treinos funcionais em grupo.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada e concentrada em trechos urbanos; a extensão oficial de ciclovia não é amplamente divulgada.',

  clima:
    'O clima é tropical quente e úmido, típico do litoral fluminense, com verões chuvosos e calor intenso e invernos mais amenos e secos.',
  climaTreino:
    'Dá para treinar ao ar livre o ano todo, mas o calor e a umidade do verão pedem horários de início da manhã ou fim da tarde e boa hidratação; os meses mais secos, entre maio e agosto, são os mais confortáveis.',

  mobilidade:
    'A cidade é cortada pela BR-101 (Rio-Santos), principal eixo de acesso ao Rio e a Angra dos Reis, e tem o movimento de cargas do Porto de Itaguaí como marca da mobilidade local; o transporte coletivo se dá sobretudo por ônibus municipais e intermunicipais.',

  corridas: [
    {
      nome: 'Corrida Mulheres em Ação',
      descricao:
        'Prova de rua promovida na cidade com foco na saúde e na participação feminina, incentivando a atividade física na comunidade.',
    },
    {
      nome: 'Run Itaguaí',
      descricao:
        'Grupo local de corrida de rua e trail que organiza treinos coletivos e estimula a prática esportiva ao ar livre.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva itaguaiense gira em torno da corrida de rua, do futebol e dos treinos ao ar livre na orla da baía de Sepetiba, com grupos de corrida e provas comunitárias movimentando o calendário.',
  academias:
    'A oferta se concentra em academias de bairro, como na região de Coroa Grande, complementada por estúdios de lutas e treinamento funcional e por forte atuação de personais em atendimento domiciliar.',

  destaquesFitness: [
    'Cidade portuária e naval (Porto de Itaguaí e PROSUB) com classe trabalhadora ligada à indústria.',
    'Orla da baía de Sepetiba, em Coroa Grande, para corrida e treino ao ar livre.',
    'Grupos de corrida de rua locais, como o Run Itaguaí, e provas comunitárias.',
    'Mercado apoiado em academias de bairro e em atendimento domiciliar.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 270,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade portuária e naval da Costa Verde, Itaguaí une o dinamismo do maior porto do estado e do programa de submarinos da Marinha a uma orla convidativa na baía de Sepetiba. Um personal trainer ajuda a transformar a rotina de quem trabalha no porto e na indústria em treino consistente, aproveitando academias de bairro, a orla de Coroa Grande e o atendimento domiciliar.',

  vizinhas: ['rio-de-janeiro-rj', 'nova-iguacu-rj', 'angra-dos-reis-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Itaguaí', url: 'https://cidades.ibge.gov.br/brasil/rj/itaguai/panorama' },
    { nome: 'Prefeitura de Itaguaí', url: 'https://itaguai.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/330200' },
  ],
  atualizadoEm: '2026-06-29',
};
