import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'japeri-rj',
  nome: 'Japeri',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'japeriense',
  tipo: 'cidade',

  populacao: 96289,
  populacaoAno: 2022,
  idhm: 0.659,
  idhmClasse: 'médio',
  altitudeM: 30,

  resumoEconomico:
    'Emancipada de Nova Iguaçu em 1991, Japeri é o município mais a oeste da Baixada Fluminense, na ponta da Região Metropolitana do Rio de Janeiro. De origem ferroviária, cresceu ao redor das estações dos distritos de Japeri e Engenheiro Pedreira, no entroncamento dos antigos ramais que ligavam o Rio ao interior. A economia é predominantemente residencial e de serviços, com forte presença de comércio local e de trabalhadores que se deslocam diariamente para outras cidades da Baixada e para a capital. O território integra a bacia do rio Guandu, principal manancial de abastecimento de água da metrópole, e abriga nascentes e áreas de mata na divisa com a Serra.',

  mercado:
    'O mercado fitness é o de uma cidade popular da Baixada Fluminense: predominam academias de bairro com mensalidades acessíveis e cresce o atendimento de personal trainer em domicílio e ao ar livre. A demanda se concentra em quem busca saúde, condicionamento e uma rotina de treino próxima de casa, conciliada com os longos deslocamentos diários de quem usa o trem para trabalhar fora do município.',

  bairrosNobres: ['Centro', 'Engenheiro Pedreira', 'Jardim Delamare', 'Vila Central'],
  bairrosPopulares: ['Parque Guandu', 'Santa Amélia', 'Cosme e Damião', 'Pedra Lisa'],

  parques: [
    {
      nome: 'Margens do Rio Guandu',
      descricao:
        'O rio Guandu corta o município e suas margens, especialmente em Engenheiro Pedreira, servem de área de lazer e de paisagem natural para caminhadas, num território que é o principal manancial de água da Região Metropolitana do Rio.',
    },
    {
      nome: 'Praça Wendel Coelho (Engenheiro Pedreira)',
      descricao:
        'Praça central do distrito de Engenheiro Pedreira, ponto de encontro da comunidade e local de largada de eventos esportivos, como o Circuito do VAPO, com espaço para caminhada e atividades ao ar livre.',
    },
    {
      nome: 'Entorno do Paço Municipal',
      descricao:
        'Área aberta no centro administrativo de Japeri, usada como ponto de chegada de corridas de rua e como espaço público para atividades comunitárias e eventos do calendário municipal.',
    },
  ],
  ciclovias:
    'O relevo predominantemente plano da planície da Baixada favorece o deslocamento por bicicleta dentro dos bairros, mas a extensão da malha cicloviária do município ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente e úmido, típico da Baixada Fluminense, com verões muito quentes e chuvosos e invernos amenos.',
  climaTreino:
    'O calor e a umidade pedem treino ao ar livre no início da manhã ou no fim da tarde, com hidratação reforçada. O terreno plano da planície favorece corridas e caminhadas em ruas e praças, enquanto a proximidade das matas e do rio oferece trechos mais arejados.',

  mobilidade:
    'Japeri é o ponto final do Ramal Japeri da SuperVia, com as estações de Japeri e Engenheiro Pedreira ligando a cidade ao centro do Rio de Janeiro por trem — eixo de transporte estruturante para os trabalhadores do município. O acesso rodoviário se dá pela BR-116 (Rodovia Presidente Dutra) nas proximidades e pelo Arco Metropolitano (BR-493), que reforça a conexão com o restante da Baixada Fluminense e o Porto de Itaguaí.',

  corridas: [
    {
      nome: 'Circuito do VAPO',
      descricao:
        'Corrida de rua de 5 km com largada na Praça Wendel Coelho, em Engenheiro Pedreira, e chegada no Paço Municipal, com apoio da prefeitura e estrutura de hidratação e apoio médico.',
    },
    {
      nome: 'Corridas e circuitos municipais',
      descricao:
        'A prefeitura e entidades locais promovem provas de rua e caminhadas ao longo do ano, ligadas a datas comemorativas e a campanhas comunitárias, reunindo moradores dos distritos de Japeri e Engenheiro Pedreira.',
    },
  ],
  culturaEsportiva:
    'A cena esportiva de Japeri é ligada a eventos públicos e populares, com corridas de rua organizadas pela prefeitura, uso de praças como pontos de atividade física ao ar livre e forte tradição de futebol de várzea nos bairros. A cidade valoriza atletas locais e celebra a presença de craques revelados na região.',
  academias:
    'A oferta é formada principalmente por academias de bairro com preços acessíveis, distribuídas pelo Centro, por Engenheiro Pedreira e pelos bairros residenciais, complementadas por treino domiciliar e por atividades em praças e nas margens do Guandu.',

  destaquesFitness: [
    'Margens do rio Guandu como cenário natural para caminhada e treino ao ar livre.',
    'Relevo plano da Baixada, favorável a corrida e caminhada de rua.',
    'Circuito do VAPO, corrida de rua entre Engenheiro Pedreira e o Paço Municipal.',
    'Forte presença de academias de bairro e de atendimento domiciliar a preços acessíveis.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 240,
    mensalMax: 620,
    onlineMin: 110,
    onlineMax: 330,
  },

  conclusao:
    'Cidade ferroviária e popular na ponta oeste da Baixada Fluminense, Japeri combina a rotina de quem se desloca diariamente de trem com praças, ruas planas e as margens do Guandu, que favorecem o treino ao ar livre. Um personal trainer ajuda a estruturar resultados respeitando o orçamento, o clima quente e a agenda de quem mora e trabalha na região.',

  vizinhas: ['nova-iguacu-rj', 'queimados-rj', 'seropedica-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Japeri', url: 'https://cidades.ibge.gov.br/brasil/rj/japeri/panorama' },
    { nome: 'Prefeitura de Japeri', url: 'https://japeri.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
