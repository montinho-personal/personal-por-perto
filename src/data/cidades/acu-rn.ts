import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'acu-rn',
  nome: 'Açu',
  uf: 'RN',
  estado: 'Rio Grande do Norte',
  estadoSlug: 'rio-grande-do-norte',
  regiao: 'Nordeste',
  gentilico: 'assuense',
  tipo: 'cidade',

  populacao: 56502,
  populacaoAno: 2022,
  idhm: 0.661,
  idhmClasse: 'médio',
  altitudeM: 27,

  resumoEconomico:
    'Principal cidade do Vale do Açu, no oeste potiguar, Açu (também grafada Assu) tem a economia ancorada na fruticultura irrigada — banana, manga, mamão e melão produzidos com a água da Barragem Armando Ribeiro Gonçalves, no rio Piranhas-Açu — e na produção de petróleo terrestre da Bacia Potiguar. O comércio, os serviços e a presença universitária, com campus da UERN e a atuação da UFERSA na região do Vale do Açu, completam a base econômica do município.',

  mercado:
    'O mercado de personal trainers é o de uma cidade média do interior nordestino, sustentado pelo comércio, pelos serviços, pelo público universitário e pelos profissionais ligados à fruticultura e ao petróleo. O calor do semiárido concentra o treino ao ar livre nos horários mais amenos, e há academias atendendo o centro e os bairros residenciais.',

  bairrosNobres: ['Bela Vista', 'Centro', 'Recreio', 'Dom Elizeu'],
  bairrosPopulares: ['Frutilândia', 'Vertentes', 'Bela Vista Piató', 'São João'],

  parques: [
    {
      nome: 'Orla do rio Piranhas-Açu',
      descricao:
        'A beira do rio que corta o Vale do Açu é referência para caminhada e lazer, aproveitando as áreas mais frescas próximas à água.',
    },
    {
      nome: 'Barragem Armando Ribeiro Gonçalves',
      descricao:
        'Maior reservatório do estado, no rio Piranhas-Açu, é cartão-postal regional e atrai atividades de lazer e contato com a natureza nos arredores do município.',
    },
    {
      nome: 'Praças e avenidas do Centro',
      descricao:
        'As praças e avenidas centrais funcionam como espaços de uso público para caminhada e exercício, sobretudo no fim da tarde.',
    },
  ],
  ciclovias:
    'A bicicleta é meio de transporte comum no município, mas a cidade ainda tem poucos trechos de ciclovia dedicada.',

  clima:
    'O clima é semiárido quente e seco, típico do oeste potiguar, com temperaturas elevadas ao longo do ano e chuvas concentradas e irregulares no primeiro semestre.',
  climaTreino:
    'O calor intenso recomenda o treino ao ar livre no início da manhã ou à noite, com atenção redobrada à hidratação e à proteção solar.',

  mobilidade:
    'O acesso se dá pela BR-304, principal eixo rodoviário que liga o Vale do Açu a Mossoró e a Natal e estrutura o deslocamento regional. O trânsito interno é leve, característico de cidade média do interior.',

  corridas: [
    {
      nome: 'Corridas e caminhadas promovidas pela prefeitura',
      descricao:
        'O calendário municipal inclui corridas e caminhadas em datas comemorativas e de saúde, com largadas pelas avenidas centrais da cidade.',
    },
    {
      nome: 'Provas escolares e universitárias',
      descricao:
        'O público estudantil, com o campus da UERN em Assú, ajuda a movimentar atividades esportivas e de corrida na cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o futebol, tradicional no interior potiguar, com uma adesão crescente à caminhada e à corrida de rua, favorecida pelo trânsito leve e pelo custo de vida acessível.',
  academias:
    'A oferta de academias acompanha o porte de cidade média e o público universitário, complementada pelas praças e avenidas do centro e pela orla do rio Piranhas-Açu para o treino ao ar livre.',

  destaquesFitness: [
    'Orla do rio Piranhas-Açu como espaço natural para caminhada e treino ao ar livre.',
    'Barragem Armando Ribeiro Gonçalves como referência regional de lazer e atividade ao ar livre.',
    'Demanda sustentada pelo público universitário (UERN) e pelos setores de fruticultura e petróleo.',
    'Praças e avenidas centrais como rotas naturais para caminhada e corrida no fim da tarde.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Capital do Vale do Açu, marcada pela fruticultura irrigada e pelo petróleo terrestre, Açu reúne boas rotas ao ar livre — da orla do rio Piranhas-Açu às avenidas do centro — desde que se respeite o calor do semiárido. Um personal trainer ajuda a montar uma rotina segura, com horários e hidratação ajustados à realidade do oeste potiguar.',

  vizinhas: ['mossoro-rn', 'natal-rn'],

  fontes: [
    { nome: 'IBGE Cidades — Açu', url: 'https://cidades.ibge.gov.br/brasil/rn/acu/panorama' },
    { nome: 'Prefeitura Municipal de Assu', url: 'https://assu.rn.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
