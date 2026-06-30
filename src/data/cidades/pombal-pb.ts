import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pombal-pb',
  nome: 'Pombal',
  uf: 'PB',
  estado: 'Paraíba',
  estadoSlug: 'paraiba',
  regiao: 'Nordeste',
  gentilico: 'pombalense',
  tipo: 'cidade',

  populacao: 32473,
  populacaoAno: 2022,
  idhm: 0.630,
  idhmClasse: 'médio',
  altitudeM: 184,

  resumoEconomico:
    'No coração do Sertão paraibano, às margens do rio Piancó — próximo de onde ele encontra o rio Piranhas —, Pombal é uma das cidades mais antigas da Paraíba e o primeiro povoado fundado no sertão do estado, ainda no fim do século XVII. A economia se apoia na agropecuária típica do semiárido (criação de bovinos, caprinos e ovinos e lavouras adaptadas à irregularidade das chuvas), no comércio e nos serviços que atendem municípios vizinhos, e na presença do campus da UFCG com o Centro de Ciências e Tecnologia Agroalimentar (CCTA), que movimenta o ensino, a pesquisa em agronomia e a vida estudantil local.',

  mercado:
    'Como cidade média de polo regional no Sertão, Pombal tem um mercado fitness em formação, concentrado em academias de musculação e treino funcional e impulsionado pela população universitária do campus da UFCG. A procura por personal trainers cresce entre estudantes, servidores e quem busca orientação para treinar com segurança diante do calor forte e da rotina puxada do interior.',

  bairrosNobres: ['Centro', 'Janduhy Carneiro', 'Jardim Rogério', 'Santa Rosa'],
  bairrosPopulares: ['Vida Nova', 'Pereiros', 'Francisco Paulino', 'Francisco Pereira'],

  parques: [
    {
      nome: 'Orla do rio Piancó',
      descricao:
        'O rio Piancó corta a cidade e dá identidade a Pombal; as áreas marginais e a ponte sobre o rio servem de referência para caminhadas e corridas, condicionadas ao regime de cheia e estiagem típico do semiárido.',
    },
    {
      nome: 'Praças do Centro histórico',
      descricao:
        'Como uma das cidades mais antigas da Paraíba, Pombal guarda praças e largos no Centro, em torno da igreja matriz, que funcionam como pontos de encontro e de atividade ao ar livre no fim da tarde.',
    },
    {
      nome: 'Campus da UFCG (CCTA)',
      descricao:
        'O campus do Centro de Ciências e Tecnologia Agroalimentar reúne áreas abertas e vias internas usadas pela comunidade acadêmica para caminhada e corrida, além de atividades esportivas estudantis.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é modesta e restrita a poucos trechos da área urbana; boa parte do pedal e da corrida acontece nas avenidas da cidade, nas vias de acesso ao campus e nas estradas vicinais do entorno.',

  clima:
    'O clima é semiárido quente, característico do Sertão paraibano, com temperaturas elevadas na maior parte do ano e baixa umidade. As chuvas são irregulares e concentradas em poucos meses, com maior incidência entre fevereiro e abril; o restante do ano é marcado por estiagem e sol forte.',
  climaTreino:
    'O calor intenso e o sol forte do semiárido pedem treino bem cedo ou no fim da tarde, com hidratação reforçada e atenção à exposição direta; nos horários mais quentes, ambientes climatizados ou cobertos são a opção mais segura.',

  mobilidade:
    'Pombal é cortada pela BR-230 (Transamazônica), eixo que liga o Sertão ao litoral paraibano e às cidades vizinhas de Sousa e Cajazeiras, o que reforça seu papel de ponto de passagem e polo de serviços. O deslocamento dentro da cidade é feito sobretudo a pé, de moto e de carro, com transporte rodoviário intermunicipal pela BR.',

  corridas: [
    {
      nome: 'Pombal Run',
      descricao:
        'Corrida de rua realizada na cidade, reunindo corredores locais e da região do Sertão em percursos pelas vias urbanas de Pombal.',
    },
    {
      nome: 'Corrida S3 Fitness',
      descricao:
        'Prova de rua organizada por uma academia local, que tem ajudado a movimentar a cena de corrida amadora em Pombal.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva pombalense mistura o futebol de tradição no interior, a vida estudantil do campus da UFCG e um movimento crescente de corrida de rua, com provas que aproveitam as avenidas da cidade e o entorno do rio Piancó.',
  academias:
    'A oferta se concentra em academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média de polo regional no Sertão.',

  destaquesFitness: [
    'Cidade às margens do rio Piancó, no Sertão paraibano, com a orla e o Centro histórico usados para caminhada e corrida.',
    'Campus da UFCG (CCTA) que traz população universitária e dinamiza a procura por treino orientado.',
    'Calor forte do semiárido, que exige planejamento de horário e hidratação reforçada.',
    'Polo regional cortado pela BR-230, com economia de agropecuária, comércio e serviços que atende as cidades vizinhas.',
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
    'Antiga e estratégica no Sertão paraibano, Pombal combina o calor do semiárido, a vida universitária do campus da UFCG e uma cena de corrida em crescimento. Um personal trainer ajuda a montar uma rotina que respeite o clima quente, defina os melhores horários e mantenha a constância ao longo do ano, aproveitando a orla do rio Piancó e os espaços da cidade.',

  vizinhas: ['sousa-pb', 'cajazeiras-pb'],

  fontes: [
    { nome: 'IBGE Cidades — Pombal', url: 'https://cidades.ibge.gov.br/brasil/pb/pombal/panorama' },
    { nome: 'Prefeitura de Pombal', url: 'https://www.pombal.pb.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
