import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'varzea-paulista-sp',
  nome: 'Várzea Paulista',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'varzino',
  tipo: 'cidade',

  populacao: 115771,
  populacaoAno: 2022,
  idhm: 0.759,
  idhmClasse: 'alto',
  altitudeM: 720,

  resumoEconomico:
    'Integrante da Região Metropolitana de Jundiaí, Várzea Paulista tem sua malha urbana praticamente conurbada com Jundiaí e Campo Limpo Paulista. Emancipada de Jundiaí em 1965, deixou de ser cidade-dormitório para se firmar como polo industrial e de serviços: o parque fabril reúne centenas de empresas dos setores metalúrgico, químico, têxtil e alimentício, e o comércio local é diversificado. A cidade também é conhecida como produtora de orquídeas, com orquidários de referência na região.',

  mercado:
    'Por estar dentro da Região Metropolitana de Jundiaí e ligada à capital pela ferrovia e pela rodovia, Várzea Paulista tem um mercado fitness que acompanha o padrão do interior metropolitano paulista: academias de bairro, estúdios de treino funcional e personal trainers que atendem tanto na cidade quanto nos municípios vizinhos. A procura por acompanhamento individual cresce entre quem concilia a rotina de deslocamento para Jundiaí e São Paulo com o desejo de manter uma prática regular perto de casa.',

  bairrosNobres: ['Centro', 'Jardim América', 'Jardim Paulista', 'Vila Real'],
  bairrosPopulares: ['Cidade Nova', 'Jardim Promeca', 'Vila Tupi', 'Parque Guarani'],

  parques: [
    {
      nome: 'Parque das Orquídeas',
      descricao:
        'Espaço público no Jardim América IV, um dos pontos indicados pela prefeitura para caminhada e atividade ao ar livre, associado à tradição da cidade na produção de orquídeas.',
    },
    {
      nome: 'Parque Chico Mendes',
      descricao:
        'Espaço arborizado no Jardim Paulista usado para caminhada e lazer, um dos locais de prática de atividade física recomendados no município.',
    },
    {
      nome: 'Complexo Esportivo Kim Nozaki',
      descricao:
        'Complexo esportivo e social no Jardim Promeca, revitalizado com pista de caminhada, campo, playground e áreas de convivência acessíveis.',
    },
  ],
  ciclovias:
    'A cidade é compacta e conurbada com Jundiaí, com trechos de vias e avenidas usados para pedal e corrida; boa parte da prática ao ar livre acontece nos parques e complexos esportivos e nas ruas dos bairros residenciais.',

  clima:
    'O clima é tropical de altitude, ameno pela posição a cerca de 720 metros acima do nível do mar, com temperaturas que costumam variar entre 12 °C e 30 °C ao longo do ano. Os verões são quentes e chuvosos, e os invernos, mais secos e frescos, com umidade relativa mais baixa. A cidade fica na bacia do rio Jundiaí-Mirim, que corta o município.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre na maior parte do ano, sobretudo de manhã e no fim da tarde; no verão, convém evitar os horários de sol forte e chuva concentrada, e no inverno o frescor pede aquecimento mais cuidadoso antes das sessões mais intensas.',

  mobilidade:
    'Várzea Paulista é servida pela Linha 7-Rubi de trens metropolitanos (concedida à TIC Trens desde 2024), que liga Jundiaí à capital passando pela estação Várzea Paulista, o que integra a cidade ao trajeto ferroviário para São Paulo. O acesso rodoviário se dá pelo entroncamento com Jundiaí e pela proximidade das rodovias que cortam a região metropolitana, além do transporte urbano por ônibus.',

  corridas: [
    {
      nome: 'Circuito Cidades Paulistas',
      descricao:
        'Série de corridas de rua realizada em municípios do interior paulista, incluindo etapas na região de Jundiaí, próxima a Várzea Paulista.',
    },
    {
      nome: 'Circuito Eco (etapa Jundiaí)',
      descricao:
        'Prova de corrida com percursos de 5 km e 10 km realizada em Jundiaí, cidade vizinha, opção acessível para os corredores varzinos.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva se apoia nos parques e complexos esportivos municipais, como o Kim Nozaki e o Ginásio Ayrton Senna, na região central, além das provas de corrida de rua realizadas na vizinha Jundiaí. Caminhada, corrida e treino funcional ao ar livre são bem populares, favorecidos pelo clima ameno.',
  academias:
    'A oferta reúne academias de musculação e estúdios de treino funcional distribuídos pelos bairros, com porte compatível com uma cidade média conurbada à malha urbana de Jundiaí, além de espaços públicos de esporte e lazer mantidos pela prefeitura.',

  destaquesFitness: [
    'Clima tropical de altitude, ameno, que favorece o treino ao ar livre na maior parte do ano.',
    'Parques e complexos esportivos municipais, como o Kim Nozaki e o Parque das Orquídeas, com pistas de caminhada.',
    'Integração ferroviária pela Linha 7-Rubi (estação Várzea Paulista), ligando a cidade a Jundiaí e à capital.',
    'Cidade da Região Metropolitana de Jundiaí, com forte parque industrial e tradição na produção de orquídeas.',
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
    'Cidade compacta, industrial e integrada à Região Metropolitana de Jundiaí, Várzea Paulista tem clima ameno e boa rede de espaços públicos de esporte para quem quer treinar perto de casa. Um personal trainer ajuda a encaixar a atividade física na rotina de quem se desloca para Jundiaí e São Paulo, aproveitando os parques e complexos esportivos da cidade com constância.',

  vizinhas: ['jundiai-sp', 'itatiba-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Várzea Paulista', url: 'https://cidades.ibge.gov.br/brasil/sp/varzea-paulista/panorama' },
    { nome: 'Prefeitura de Várzea Paulista', url: 'https://portal.varzeapaulista.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
