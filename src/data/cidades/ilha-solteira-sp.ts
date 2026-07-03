import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ilha-solteira-sp',
  nome: 'Ilha Solteira',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  tipo: 'cidade',

  populacao: 25549,
  populacaoAno: 2022,
  idhm: 0.812,
  idhmClasse: 'muito alto',
  altitudeM: 335,

  resumoEconomico:
    'Ilha Solteira nasceu como núcleo habitacional planejado pela antiga CESP para abrigar os operários da construção da Usina Hidrelétrica de Ilha Solteira, no rio Paraná, na divisa com o Mato Grosso do Sul — a maior usina do estado de São Paulo e uma das maiores do Brasil. Emancipada em 1968 e reconhecida como Estância Turística, a cidade sedia o campus da Faculdade de Engenharia da Unesp (FEIS), que atrai mais de 3 mil estudantes e movimenta o comércio e os serviços locais. A economia soma ainda o turismo náutico no reservatório da usina, com piscicultura de tilápia, pesca esportiva e passeios de barco.',

  mercado:
    'Por ser uma cidade pequena, mas de perfil socioeconômico elevado — puxado pela renda ligada à usina e pela presença da comunidade universitária da Unesp —, o mercado de personal trainers em Ilha Solteira é enxuto, porém qualificado, concentrado em academias e estúdios de treino funcional que atendem tanto moradores fixos quanto estudantes e turistas atraídos pelas praias do reservatório.',

  bairrosNobres: ['Centro', 'Morumbi', 'Santa Catarina', 'Ilha Bela'],
  bairrosPopulares: ['Zona Norte', 'Zona Sul', 'CDHU', 'COHAB'],

  parques: [
    {
      nome: 'Parque Balneário (Praia Catarina e Praia Marina)',
      descricao:
        'Maior espaço de lazer da cidade, às margens do reservatório formado pela usina. A Praia Catarina, no rio Paraná, tem infraestrutura voltada a banho e mergulho, enquanto a Praia Marina, no rio São José dos Dourados, é procurada para windsurfe e jet-ski — servindo também de ponto de caminhada e treino ao ar livre.',
    },
    {
      nome: 'Reservatório da Usina Hidrelétrica de Ilha Solteira',
      descricao:
        'O lago formado pela represa é o principal cenário esportivo do município, usado para pesca, passeios de barco e veleiro e demais esportes náuticos, além de ser o pano de fundo da vocação turística da cidade.',
    },
    {
      nome: 'Cinturão Verde',
      descricao:
        'Área verde prevista desde o planejamento original da cidade, contemplada em revisões do Plano Diretor municipal como espaço de preservação e lazer a ser qualificado no entorno urbano.',
    },
  ],
  ciclovias:
    'A cidade planejada tem avenidas largas e arborizadas, com uma ciclovia construída cortando parte da malha urbana; a estrutura é modesta e boa parte do pedal e da corrida acontece nessas vias centrais e no acesso ao Parque Balneário.',

  clima:
    'O clima é tropical, com verão quente e chuvoso (por volta de outubro a março, com máximas entre 34 °C e 37 °C) e inverno mais seco e ameno, com mínimas próximas de 15 °C. A proximidade do reservatório eleva a umidade do ar em relação a outras cidades do interior paulista.',
  climaTreino:
    'O calor marcante do verão pede treino nos horários mais frescos — início da manhã ou fim de tarde — e hidratação reforçada; nos dias mais quentes, ambientes climatizados ou o treino junto ao reservatório nas primeiras horas do dia são as opções mais seguras.',

  mobilidade:
    'O acesso rodoviário principal se dá pela SP-461 e pela BR-158, que liga o município a Andradina (a cerca de 62 km) e ao restante da região Noroeste paulista; a cidade fica a 661 km da capital paulista. O transporte interno é feito majoritariamente por carro e moto, e o município conta com o Aeroporto Estadual Theo Dutra, a poucos quilômetros do centro.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva local gira em torno do reservatório — vela, windsurfe, jet-ski, pesca esportiva e passeios de barco — somada à vida universitária da Unesp, com a Atlética Acadêmica e eventos como a Integração Universitária movimentando o calendário esportivo da cidade ao longo do ano.',
  academias:
    'A oferta de academias é compatível com uma cidade pequena, mas qualificada, com unidades de musculação e treino funcional concentradas nas avenidas Brasil Norte e Brasil Sul, no Centro, atendendo moradores e a comunidade universitária.',

  destaquesFitness: [
    'Sede da Usina Hidrelétrica de Ilha Solteira, a maior de São Paulo e uma das maiores do Brasil, com reservatório que forma praias artificiais.',
    'Cidade planejada com IDHM muito alto (0,812) e polo universitário do campus da Unesp (FEIS).',
    'Parque Balneário com a Praia Catarina, para banho e mergulho, e a Praia Marina, para windsurfe e jet-ski.',
    'Estância turística de clima tropical quente, que pede treino nos horários mais frescos do dia.',
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
    'Cidade planejada em torno de uma das maiores usinas hidrelétricas do Brasil, Ilha Solteira combina renda elevada, vida universitária e um reservatório que funciona como point de esportes náuticos e lazer ao ar livre. Um personal trainer ajuda a aproveitar esse cenário com segurança, ajustando os horários de treino ao calor tropical e mantendo a constância entre a rotina da cidade e as praias do lago.',

  vizinhas: ['aracatuba-sp', 'penapolis-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Ilha Solteira', url: 'https://cidades.ibge.gov.br/brasil/sp/ilha-solteira/panorama' },
    { nome: 'Atlas Brasil — IDHM (Ilha Solteira)', url: 'https://www.atlasbrasil.org.br/perfil/municipio/352044' },
    { nome: 'Prefeitura da Estância Turística de Ilha Solteira', url: 'https://ilhasolteira.sp.gov.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
