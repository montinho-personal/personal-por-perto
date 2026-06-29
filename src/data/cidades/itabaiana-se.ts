import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itabaiana-se',
  nome: 'Itabaiana',
  uf: 'SE',
  estado: 'Sergipe',
  estadoSlug: 'sergipe',
  regiao: 'Nordeste',
  gentilico: 'itabaianense',
  tipo: 'cidade',

  populacao: 103439,
  populacaoAno: 2022,
  idhm: 0.642,
  idhmClasse: 'médio',
  altitudeM: 188,

  resumoEconomico:
    'Principal cidade do agreste sergipano, a cerca de 58 km de Aracaju, Itabaiana tornou-se no Censo 2022 o município mais populoso do interior de Sergipe. Tem economia movida por um comércio pujante e pelo transporte rodoviário de cargas, o que lhe rendeu apelidos como "Cidade do Dinheiro", "Capital Sergipana do Comércio" e "Capital Nacional dos Caminhões". A feira livre, o setor de serviços e o campus da Universidade Federal de Sergipe completam o cenário de uma economia local diversificada e dinâmica.',

  mercado:
    'O mercado fitness de Itabaiana acompanha o porte de cidade média do interior nordestino, com academias de bairro, estúdios de treino funcional e musculação no centro e nas áreas comerciais. A presença do campus da UFS e o forte comércio sustentam um público jovem e economicamente ativo, que abre espaço para o trabalho de personal trainers tanto em academia quanto ao ar livre.',

  bairrosNobres: ['Centro', 'Bairro Industrial', 'Marianga', 'Cidade Nova'],
  bairrosPopulares: ['Mangabeira', 'Porto', 'São Cristóvão', 'Santa Maria'],

  parques: [
    {
      nome: 'Parque Nacional Serra de Itabaiana',
      descricao:
        'Unidade de conservação federal criada em 2005, com cerca de 8 mil hectares às margens da BR-235, abrangendo Itabaiana e municípios vizinhos. A Serra de Itabaiana, com 659 m, é o segundo ponto mais alto de Sergipe e tem trilhas, cachoeiras e mirantes muito procurados para caminhada e trekking.',
    },
    {
      nome: 'Serra de Itabaiana',
      descricao:
        'Conjunto de cristas residuais que domina a paisagem do agreste sergipano, com percursos de trilha e subidas que viraram referência para quem treina resistência e condicionamento ao ar livre na região.',
    },
  ],
  ciclovias:
    'Itabaiana tem estrutura cicloviária ainda restrita, concentrada em avenidas do centro e em vias de acesso; boa parte do pedal e da corrida acontece em ruas de bairro e nas estradas do entorno rural.',

  clima:
    'O clima é semiárido típico do agreste sergipano, quente e com estação seca prolongada. As temperaturas chegam a passar dos 34 °C nos meses mais secos e ficam mais amenas, em torno de 25 °C, entre maio e setembro, com noites que podem cair perto de 18 °C.',
  climaTreino:
    'Com calor forte na maior parte do ano e poucos meses mais frescos, o treino ao ar livre rende melhor no início da manhã ou no fim da tarde, com hidratação reforçada. O período de maio a setembro, mais ameno, favorece corridas e trilhas mais longas na serra.',

  mobilidade:
    'O principal eixo de acesso é a BR-235, que liga Itabaiana a Aracaju e ao interior e passa junto à Serra de Itabaiana. A cidade é um polo regional de transporte de cargas, e o deslocamento urbano se dá sobretudo por ônibus, carro, moto e bicicleta.',

  corridas: [
    {
      nome: 'Itabaiana Night Race',
      descricao:
        'Corrida noturna de rua disputada em percursos de 2,5 km, 5 km e 10 km, com largada na região central da cidade, reunindo corredores locais e da região do agreste.',
    },
  ],
  culturaEsportiva:
    'Itabaiana tem tradição esportiva ligada ao futebol e uma cena crescente de corrida de rua e atividades ao ar livre, impulsionada pela proximidade da Serra de Itabaiana, que atrai praticantes de trilha e trekking. A cidade reúne ainda academias de bairro e grupos de treino que mantêm a vida ativa ao longo do ano.',
  academias:
    'A rede de academias se concentra no centro e nas áreas comerciais, com unidades de musculação, estúdios de funcional e espaços de treino que atendem o público da cidade e dos municípios vizinhos do agreste.',

  destaquesFitness: [
    'Serra de Itabaiana (659 m), segundo ponto mais alto de Sergipe, com trilhas e cachoeiras para treino ao ar livre.',
    'Parque Nacional Serra de Itabaiana às margens da BR-235, com cerca de 8 mil hectares de natureza preservada.',
    'Calendário de corrida de rua com provas como a Itabaiana Night Race.',
    'Cidade mais populosa do interior de Sergipe, com forte comércio e campus da UFS aquecendo a demanda por treino.',
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
    'Polo comercial e a maior cidade do interior de Sergipe, Itabaiana combina a energia de um centro econômico dinâmico com a paisagem marcante da Serra de Itabaiana. Um personal trainer ajuda a transformar as trilhas da serra, as ruas da cidade e as academias locais em um plano de treino consistente, ajustado ao clima quente do agreste e ao seu objetivo.',

  vizinhas: ['aracaju-se', 'lagarto-se', 'nossa-senhora-do-socorro-se'],

  fontes: [
    { nome: 'IBGE Cidades — Itabaiana', url: 'https://cidades.ibge.gov.br/brasil/se/itabaiana/panorama' },
    { nome: 'Prefeitura de Itabaiana', url: 'https://itabaiana.se.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
