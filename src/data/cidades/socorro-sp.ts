import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'socorro-sp',
  nome: 'Socorro',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'socorrense',
  tipo: 'cidade',

  populacao: 40122,
  populacaoAno: 2022,
  idhm: 0.729,
  idhmClasse: 'alto',
  altitudeM: 745,

  resumoEconomico:
    'Estância turística no Circuito das Águas Paulista, na divisa com o Sul de Minas e aos pés da Serra da Mantiqueira, Socorro tem a economia apoiada em três pilares: turismo, malharia/confecção e agropecuária. A cidade é uma das referências nacionais em turismo de aventura, com rafting, boia-cross, arvorismo, tirolesa e trilhas no Rio do Peixe, e foi pioneira em unir aventura e acessibilidade para pessoas com deficiência e mobilidade reduzida. É também um forte polo de malhas e confecções, com centenas de fábricas e lojas que atraem o turismo de compras, enquanto os serviços, o comércio e a agropecuária completam a base econômica.',

  mercado:
    'Por ser uma cidade pequena e de forte vocação turística, o mercado fitness de Socorro é enxuto e concentrado no centro e nos bairros residenciais. A demanda por personal trainers cresce entre moradores que buscam treino orientado e entre quem quer aproveitar o relevo de serra e o clima ameno para atividades ao ar livre, além do público ligado ao turismo de aventura e às trilhas da região.',

  bairrosNobres: ['Centro', 'Salto', 'Bela Vista', 'Jardim Teixeira'],
  bairrosPopulares: ['Rio do Peixe', 'Vila Palmira', 'Oliveiras', 'Jardim São Sebastião'],

  parques: [
    {
      nome: 'Caminho Turístico do Rio do Peixe',
      descricao:
        'Trecho às margens do Rio do Peixe, no coração da cidade, requalificado como percurso de caminhada e contemplação — um dos espaços mais usados para atividade ao ar livre na área urbana.',
    },
    {
      nome: 'Pedra da Bela Vista',
      descricao:
        'Mirante a cerca de 1.250 m de altitude na Serra da Mantiqueira, com vista panorâmica das montanhas e das cidades vizinhas; ponto clássico de trekking, trilhas e corrida de montanha, além de atividades de aventura.',
    },
    {
      nome: 'Serra da Mantiqueira (entorno rural)',
      descricao:
        'O relevo acidentado ao redor da cidade concentra estradas rurais, morros e trilhas usadas para caminhada, pedal e corrida em meio à natureza, com o clima ameno da serra a favor.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária urbana é modesta, própria de uma cidade pequena; boa parte do pedal e da corrida acontece nas vias do centro, ao longo do Rio do Peixe e, principalmente, nas estradas rurais de serra, que atraem o cicloturismo e o mountain bike.',

  clima:
    'O clima é ameno, influenciado pela altitude (cerca de 745 m) e pela proximidade com a Serra da Mantiqueira. Os verões são quentes e chuvosos, com máximas em geral na faixa dos 30 °C, e os invernos são secos e frios, com madrugadas que podem se aproximar de 1 °C nas áreas mais altas. É um dos climas mais agradáveis para atividade física no interior paulista.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre na maior parte do ano; no verão, o começo da manhã e o fim da tarde são os melhores horários e pedem hidratação, enquanto no inverno vale reforçar o aquecimento por causa das madrugadas frias. O relevo de serra oferece ganho natural de intensidade em subidas e trilhas.',

  mobilidade:
    'Socorro fica a cerca de 135 km da capital e 112 km de Campinas, com acesso pela rodovia SP-008 (Rodovia Vice-Prefeito Salustiano Salgado Neves), que liga a cidade a Bragança Paulista e ao entorno do Circuito das Águas. O deslocamento interno é predominantemente por veículo próprio, e o fluxo turístico marca a mobilidade nos fins de semana e feriados.',

  corridas: [
    {
      nome: 'Trail run na Pedra da Bela Vista',
      descricao:
        'Os trechos de trilha e subida da Pedra da Bela Vista, na Serra da Mantiqueira, são muito usados por praticantes de corrida de montanha atraídos pelo relevo e pela vista panorâmica.',
    },
    {
      nome: 'Provas de aventura e trilha na região',
      descricao:
        'A vocação de Socorro para o turismo de aventura sustenta a realização eventual de provas de trail run e corridas em ambiente natural, aproveitando o relevo de serra e as trilhas do entorno.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local é fortemente ligada à natureza e à aventura: rafting e boia-cross no Rio do Peixe, arvorismo, tirolesa, trilhas, cicloturismo e corrida de montanha na Serra da Mantiqueira. Some-se a isso a marca pioneira de acessibilidade, que abre a prática de atividades ao ar livre a públicos com mobilidade reduzida.',
  academias:
    'A oferta é composta principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade pequena do interior de vocação turística.',

  destaquesFitness: [
    'Referência nacional em turismo de aventura no Rio do Peixe (rafting, boia-cross, arvorismo, tirolesa e trilhas).',
    'Pioneira em unir aventura e acessibilidade para pessoas com deficiência e mobilidade reduzida.',
    'Relevo de serra e clima ameno da Mantiqueira, favoráveis à corrida de montanha, ao pedal e às trilhas.',
    'Polo de malhas e confecções do Circuito das Águas Paulista, com forte turismo de compras.',
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
    'Cidade de serra, clima ameno e vocação para a aventura, Socorro é um cenário privilegiado para quem quer treinar ao ar livre — de trilhas e corrida de montanha ao pedal nas estradas rurais. Um personal trainer ajuda a aproveitar esse relevo com segurança, organizando a rotina e a progressão de intensidade ao longo do ano.',

  vizinhas: ['braganca-paulista-sp', 'atibaia-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Socorro', url: 'https://cidades.ibge.gov.br/brasil/sp/socorro/panorama' },
    { nome: 'Prefeitura da Estância de Socorro', url: 'https://www.socorro.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
