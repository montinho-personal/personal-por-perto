import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-desiderio-ba',
  nome: 'São Desidério',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  tipo: 'cidade',

  populacao: 32828,
  populacaoAno: 2022,
  idhm: 0.580,
  idhmClasse: 'baixo',

  resumoEconomico:
    'São Desidério, no extremo oeste da Bahia, é um dos municípios mais importantes do agronegócio brasileiro: em 2018 liderou o ranking nacional de valor de produção agrícola, com R$ 3,6 bilhões movimentados pela soja, pelo milho e, principalmente, pelo algodão — o município responde por cerca de 14% de toda a produção de algodão do país. O PIB per capita, de R$ 259.713,10 em 2023, é o segundo maior entre os municípios baianos. A economia se concentra nas grandes lavouras do Cerrado, sobretudo no distrito de Roda Velha, polo agrícola a cerca de 130 km da sede, que reúne fazendas de grãos que atraíram produtores de outros estados como Paraná, Rio Grande do Sul e São Paulo. É o segundo maior município da Bahia em extensão territorial, com aproximadamente 15,1 mil km², mas tem densidade demográfica muito baixa (2,17 hab/km²), já que a população se espalha entre a sede e distritos e povoados como Roda Velha e Sítio do Rio Grande.',

  mercado:
    'O mercado de personal trainers de São Desidério é pequeno e concentrado na sede do município, cuja população urbana é uma fração do total — boa parte dos moradores vive em áreas rurais e em distritos distantes ligados ao agronegócio, como Roda Velha. Isso limita a oferta presencial e favorece formatos que lidam com deslocamento e rotina do campo, incluindo acompanhamento online para quem mora ou trabalha em fazendas afastadas da cidade.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Roda Velha', 'Sítio do Rio Grande'],

  parques: [
    {
      nome: 'Orla da Represa',
      descricao:
        'Apontada pela prefeitura como o point de encontro mais charmoso e atrativo da cidade, a orla às margens da represa é também indicada como espaço ideal para a prática de exercícios físicos ao ar livre.',
    },
    {
      nome: 'Mirante do Cristo Redentor',
      descricao:
        'Monumento erguido em ponto elevado da cidade, de onde se tem vista estratégica e privilegiada da sede municipal — um destino comum para caminhadas com subida.',
    },
    {
      nome: 'Rio das Fêmeas e cavernas do Cerrado',
      descricao:
        'O município é referência em ecoturismo, com mais de 200 cavernas catalogadas, rios subterrâneos e o Rio das Fêmeas, que reúne corredeiras de classes 4 e 5 usadas para rafting em meio à vegetação de cerrado.',
    },
  ],
  ciclovias:
    'Não há registro de rede cicloviária estruturada; dado o território extenso e pouco denso, os deslocamentos motorizados predominam, e a atividade física ao ar livre se concentra na sede, sobretudo na orla da represa.',

  clima:
    'O clima é tropical e quente, com temperatura média anual em torno de 24°C, variando entre 18°C e 35°C ao longo do ano. O período chuvoso vai de outubro a abril, com índice pluviométrico de cerca de 1.144 mm/ano, seguido por uma estação seca bem marcada entre maio e setembro, típica do Cerrado.',
  climaTreino:
    'O calor constante recomenda treinar nas primeiras horas da manhã ou no fim da tarde, com atenção redobrada à hidratação. Na estação seca, a baixa umidade e a poeira das grandes lavouras pedem cuidado extra para quem treina ao ar livre, tornando os ambientes climatizados uma alternativa mais confortável nesse período.',

  mobilidade:
    'A sede do município liga-se a Barreiras, a cerca de 27 km, pela rodovia estadual BA-463, principal via de acesso à região. A mesma malha conecta a cidade ao distrito de Roda Velha, o polo agrícola do município, situado a cerca de 130 km da sede. A BR-242 (Rodovia Milton Santos) cruza o Oeste da Bahia e é a principal via de escoamento de grãos da região do Matopiba, da qual São Desidério faz parte. O transporte urbano na sede é modesto, compatível com o porte de uma cidade pequena cuja população está bastante dispersa pelo território rural.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva local está ligada ao ecoturismo e aos esportes de aventura do Cerrado: rafting em corredeiras do Rio das Fêmeas, rapel e tirolesa no Paredão do Deus Me Livre e visitas às centenas de cavernas catalogadas no município. Na sede, a orla da represa funciona como principal espaço de caminhada e exercício ao ar livre, e a Festa da Paz reúne parte da vida social e cultural da cidade.',
  academias:
    'A oferta de academias é reduzida e concentrada na sede do município; moradores de distritos e fazendas mais distantes, como Roda Velha, dependem de deslocamento até a cidade ou de treino no próprio local de trabalho.',

  destaquesFitness: [
    'Maior município agrícola do Brasil em valor de produção (2018), com destaque nacional na produção de algodão (cerca de 14% do total do país), soja e milho no Cerrado do Oeste baiano.',
    'Segundo maior território da Bahia (cerca de 15,1 mil km²) com densidade demográfica muito baixa, o que espalha moradores entre a sede e distritos como Roda Velha, a 130 km de distância.',
    'Orla da represa, o point de encontro da cidade, indicada pela própria prefeitura como espaço para prática de exercícios físicos.',
    'Forte vocação para esportes de aventura no Cerrado, com rafting no Rio das Fêmeas, rapel no Paredão do Deus Me Livre e mais de 200 cavernas catalogadas.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 600,
    onlineMin: 120,
    onlineMax: 320,
  },

  conclusao:
    'São Desidério combina uma economia agrícola de escala nacional com uma cidade pequena e um território imenso e pouco povoado. Treinar por lá exige lidar com o calor do Cerrado, a distância entre a sede e os distritos rurais e uma oferta local enxuta de estrutura fitness — cenário em que um personal trainer ajuda a organizar horários, aproveitar espaços como a orla da represa e manter a constância mesmo à distância, com acompanhamento online para quem vive mais isolado.',

  vizinhas: ['barreiras-ba', 'bom-jesus-da-lapa-ba'],

  fontes: [
    { nome: 'IBGE Cidades — São Desidério', url: 'https://cidades.ibge.gov.br/brasil/ba/sao-desiderio/panorama' },
    { nome: 'Prefeitura Municipal de São Desidério', url: 'https://saodesiderio.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
