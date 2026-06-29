import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itatiba-sp',
  nome: 'Itatiba',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'itatibense',
  tipo: 'cidade',

  populacao: 122424,
  populacaoAno: 2022,
  idhm: 0.778,
  idhmClasse: 'alto',
  altitudeM: 750,

  resumoEconomico:
    'Conhecida como "Princesa das Colinas", Itatiba fica no interior paulista, a cerca de 80 km da capital, entre os eixos de Jundiaí, Campinas e Bragança Paulista. É um dos principais polos moveleiros do país, reconhecida como a capital brasileira do móvel colonial, com forte concentração de lojas e fábricas na Avenida 29 de Abril e o Centro Tecnológico da Madeira e do Mobiliário do Senai. O relevo de colinas e a altitude garantem clima ameno e atraem um intenso movimento de condomínios de alto padrão.',

  mercado:
    'Itatiba combina alta renda concentrada em condomínios fechados de alto padrão com uma boa cultura de treino. Os grandes loteamentos residenciais, com casas amplas, áreas verdes e segurança, criam forte demanda por atendimento domiciliar de personal trainer, em academias internas dos condomínios ou nas próprias residências. Some-se a isso o público ativo dos parques e das provas de corrida, e o resultado é um mercado exigente e disposto a investir em acompanhamento personalizado.',

  bairrosNobres: [
    'Loteamento Fazenda Dona Carolina',
    'Condomínio Reserva Santa Rosa',
    'Condomínio Terras de Santa Cruz',
    'Residencial Parque da Fazenda',
    'Capela do Barreiro',
  ],
  bairrosPopulares: ['Jardim Belém', 'Bairro do Engenho', 'Jardim Maria Eugênia', 'Vila Santa Cruz'],

  parques: [
    {
      nome: 'Parque Luís Latorre (Parque da Juventude)',
      descricao:
        'Construído na várzea da antiga Fazenda Santa Rosa, tem cerca de 355 mil m² e é o principal espaço de lazer da cidade. Reúne circuitos de caminhada e corrida, trilha ecológica, playground e duas quadras poliesportivas, em meio à natureza.',
    },
    {
      nome: 'Praças e áreas verdes do Centro',
      descricao:
        'A região central, em terreno de colinas, oferece praças arborizadas e ruas com inclinações que servem de treino natural para caminhada e corrida no dia a dia.',
    },
  ],
  ciclovias:
    'A cidade tem uso crescente da bicicleta para lazer, favorecido pelo clima ameno; o relevo de colinas torna os percursos um bom desafio para ciclismo e treinos de subida.',

  clima:
    'O clima é subtropical de altitude (em torno de 750 m, com pontos do município acima de 800 m), com verões longos, quentes e chuvosos e invernos curtos, amenos e mais secos. A altitude e o relevo de colinas deixam as temperaturas mais agradáveis ao longo do ano.',
  climaTreino:
    'As condições para treino ao ar livre são muito boas, sobretudo nas manhãs e no fim de tarde no inverno. No verão, as chuvas se concentram em janeiro, então vale planejar os treinos externos para o começo do dia.',

  mobilidade:
    'Itatiba é cortada pela Rodovia Dom Pedro I (SP-065), que a conecta a Campinas, Atibaia e ao Vale do Paraíba, e fica próxima dos eixos das rodovias Anhanguera e Bandeirantes, integrando-se com facilidade a Jundiaí, Campinas e Bragança Paulista. A boa malha viária reforça o atendimento domiciliar entre condomínios espalhados pelo município.',

  corridas: [
    {
      nome: 'Itatiba Night Run',
      descricao:
        'Corrida noturna realizada no Parque Luís Latorre, com provas de 5 km e 10 km e caminhada de 5 km, com apoio da Prefeitura Municipal.',
    },
    {
      nome: 'Eco Run Itatiba',
      descricao:
        'Prova de corrida de rua com inscrições gratuitas, realizada no Bairro do Engenho, que movimenta a cena local de corredores.',
    },
  ],
  culturaEsportiva:
    'Itatiba tem uma cena de corrida de rua ativa, com provas como a Night Run e a Eco Run e circuitos de corridas populares ao longo do ano. O Parque Luís Latorre concentra caminhada e corrida no dia a dia, e o relevo de colinas estimula treinos ao ar livre e ciclismo.',
  academias:
    'A oferta reúne academias de musculação, estúdios de treinamento funcional e crossfit, além das academias internas dos grandes condomínios de alto padrão, onde o atendimento domiciliar de personal trainer é especialmente valorizado.',

  destaquesFitness: [
    'Condomínios de alto padrão (Fazenda Dona Carolina, Reserva Santa Rosa, Terras de Santa Cruz) com forte demanda por atendimento domiciliar.',
    'Parque Luís Latorre, com 355 mil m², circuitos de corrida e caminhada e trilha ecológica.',
    'Clima ameno de altitude e relevo de colinas, ideais para treino ao ar livre e ciclismo.',
    'Cena de corrida de rua ativa, com a Itatiba Night Run e a Eco Run.',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 180,
    mensalMin: 400,
    mensalMax: 1100,
    onlineMin: 180,
    onlineMax: 480,
  },

  conclusao:
    'Com alta renda concentrada em condomínios de alto padrão, clima ameno de altitude e uma boa cultura de treino, Itatiba é um ótimo lugar para a vida ativa. Um personal trainer ajuda a aproveitar o atendimento domiciliar, os parques e as provas de corrida da cidade com um plano sob medida — unindo qualidade de vida e resultado.',

  vizinhas: ['campinas-sp', 'jundiai-sp', 'braganca-paulista-sp', 'atibaia-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Itatiba', url: 'https://cidades.ibge.gov.br/brasil/sp/itatiba/panorama' },
    { nome: 'Prefeitura de Itatiba', url: 'https://www.itatiba.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
