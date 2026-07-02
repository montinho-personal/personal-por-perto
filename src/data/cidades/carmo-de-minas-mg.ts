import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'carmo-de-minas-mg',
  nome: 'Carmo de Minas',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'carmoense',
  tipo: 'cidade',

  populacao: 13797,
  populacaoAno: 2022,
  idhm: 0.682,
  idhmClasse: 'médio',
  altitudeM: 931,

  resumoEconomico:
    'No sul de Minas, nas encostas da Serra da Mantiqueira, Carmo de Minas é referência nacional em café especial de altitude — a Fazenda Sertão, no município, chegou a produzir o café que venceu a Cup of Excellence com uma das maiores notas já registradas no mundo. A economia gira em torno das fazendas de café acima de 1.200 m, da agropecuária e de um turismo rural crescente ligado à Rota do Café Especial, que leva visitantes a conhecer o cultivo, a colheita e a degustação nas fazendas históricas da região. A cidade integra o Circuito das Águas mineiro, próxima a São Lourenço.',

  mercado:
    'Cidade pequena e de economia rural, Carmo de Minas tem um mercado fitness discreto, apoiado em poucas academias e estúdios locais. A demanda por personal trainer vem sobretudo de moradores que buscam atividade física orientada num município sem grande estrutura esportiva, de proprietários e trabalhadores das fazendas de café e do público ligado ao turismo rural que passa temporadas na região.',

  bairrosNobres: ['Centro', 'Vila Nova', 'São Sebastião'],
  bairrosPopulares: ['Bela Vista', 'Fátima', 'São Judas Tadeu'],

  parques: [
    {
      nome: 'Praça Central (Centro Histórico)',
      descricao:
        'Praça principal da cidade, com obras em mortar do artista local Chico Cascateiro, incluindo o coreto — ponto de convivência e caminhada no Centro, cercado pelo casario da "Atenas sul-mineira".',
    },
    {
      nome: 'Rota do Café Especial',
      descricao:
        'Roteiro rural que passa pelas fazendas de café de altitude do entorno da cidade, com trilhas e estradas de terra em meio às lavouras a mais de 1.200 m — usadas informalmente por quem caminha ou pedala entre os cafezais.',
    },
    {
      nome: 'Serra da Mantiqueira (entorno rural)',
      descricao:
        'O relevo montanhoso que envolve a cidade, com mirantes e estradas vicinais entre as fazendas, oferece o cenário natural para caminhada e atividade ao ar livre em meio ao clima ameno de altitude.',
    },
  ],
  ciclovias:
    'Não há rede de ciclovias estruturada; o pedal e a caminhada acontecem nas ruas do Centro e nas estradas rurais que cortam as fazendas de café da região.',

  clima:
    'O clima é tropical de altitude, com verões amenos e úmidos e invernos secos (de abril a setembro), marcados por manhãs frias — a altitude em torno de 930 m no Centro (e acima de 1.200 m nas fazendas de café do entorno) mantém as temperaturas médias entre 19 °C e 26 °C ao longo do ano.',
  climaTreino:
    'O clima ameno de serra favorece o treino ao ar livre na maior parte do ano; nas manhãs de inverno o frio pede aquecimento e agasalho, enquanto no verão as chuvas mais concentradas à tarde tornam o período da manhã o mais indicado.',

  mobilidade:
    'O acesso rodoviário principal se dá pela BR-459, que liga a região a Pouso Alegre e Itajubá, com entroncamento em Piranguinho para a MG-347 — rodovia estadual pavimentada que corta Carmo de Minas a caminho de São Lourenço, passando por Cristina, Pedralva e São José do Alegre. Não há transporte coletivo urbano estruturado; os deslocamentos internos são feitos majoritariamente a pé, de bicicleta ou por veículo particular, dado o porte pequeno do município.',

  corridas: [
    {
      nome: 'Circuito IFSULDEMINAS — Etapa Carmo de Minas',
      descricao:
        'Etapa do circuito de corrida e pedal do Instituto Federal do Sul de Minas realizada no campus local, com percursos de 5 km (corrida) e 10 km (pedal) abertos à comunidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local é modesta e comunitária, apoiada em eventos como a etapa do Circuito IFSULDEMINAS e no uso informal das ruas do Centro e das estradas rurais para caminhada e corrida — sem grande tradição de provas de grande porte, dado o tamanho do município.',
  academias:
    'A oferta de academias é pequena, concentrada no Centro, compatível com o porte de um município rural de pouco mais de 13 mil habitantes; parte da procura por treino orientado se resolve com aulas particulares ou deslocamento a cidades vizinhas maiores.',

  destaquesFitness: [
    'Altitude de serra (930 m no Centro, acima de 1.200 m nas fazendas do entorno) que garante clima ameno e favorável ao treino ao ar livre.',
    'Cenário rural da Rota do Café Especial, com estradas entre fazendas de altitude para caminhada e pedal.',
    'Etapa local do Circuito IFSULDEMINAS de corrida e pedal, ligada ao campus do instituto federal.',
    'Cidade pequena e de economia cafeeira, com mercado fitness enxuto concentrado no Centro.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 115,
    onlineMax: 320,
  },

  conclusao:
    'Cercada por fazendas de café premiado e pelo verde da Serra da Mantiqueira, Carmo de Minas oferece clima ameno e cenário rural favoráveis ao treino ao ar livre, ainda que com uma estrutura fitness pequena. Um personal trainer ajuda a aproveitar as estradas entre os cafezais e a manter a constância num município de rotina tranquila e forte vocação rural.',

  vizinhas: ['itajuba-mg', 'pouso-alegre-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Carmo de Minas', url: 'https://cidades.ibge.gov.br/brasil/mg/carmo-de-minas/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Carmo de Minas', url: 'https://www.carmodeminas.mg.gov.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
