import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'alto-paraiso-de-goias-go',
  nome: 'Alto Paraíso de Goiás',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'alto-paraisense',
  tipo: 'cidade',

  populacao: 10306,
  populacaoAno: 2022,
  idhm: 0.710,
  idhmClasse: 'alto',
  pibPerCapita: 39620,
  pibPerCapitaAno: 2023,
  altitudeM: 1233,

  resumoEconomico:
    'Encravada no Planalto Central e considerada a cidade mais alta da região Centro-Oeste, Alto Paraíso de Goiás é a principal porta de entrada da Chapada dos Veadeiros, cujo Parque Nacional fica em seu território e no de municípios vizinhos. A economia combina agricultura (soja, milho e arroz) e pecuária com um turismo de natureza e espiritual pujante, apoiado em mais de 120 cachoeiras catalogadas, no garimpo histórico de cristais de quartzo e em uma extensa rede de pousadas, hotéis e campings. O distrito de São Jorge, a cerca de 36 km da sede, funciona como vila de apoio ao acesso do parque nacional.',

  mercado:
    'Por ser uma cidade pequena e de forte vocação turística, o mercado fitness de Alto Paraíso é enxuto e convive com uma extensa oferta de bem-estar alternativo — retiros de yoga, centros holísticos e terapias corporais ligados ao turismo espiritual da Chapada. A procura por personal trainer tende a se somar a essa cultura de bem-estar, unindo condicionamento físico para trilhas e cachoeiras a um público local e a visitantes que passam temporadas na cidade.',

  bairrosNobres: ['Centro', 'Setor Eldorado'],
  bairrosPopulares: ['Setor Novo Horizonte', 'Vila Bandeira'],

  parques: [
    {
      nome: 'Parque Nacional da Chapada dos Veadeiros',
      descricao:
        'Unidade de conservação que dá nome à região e atrai visitantes do mundo todo, com trilhas homologadas (como Saltos, Cânions e Carioca) que partem do acesso próximo ao distrito de São Jorge — o principal cenário de trekking e caminhada de longa duração da cidade.',
    },
    {
      nome: 'Vale da Lua',
      descricao:
        'Formação rochosa às margens do rio São Miguel, com piscinas naturais e trilha curta de acesso; um dos passeios mais procurados, combinando caminhada leve com banho em águas cristalinas.',
    },
    {
      nome: 'Cachoeiras do entorno de Alto Paraíso',
      descricao:
        'Com mais de 120 cachoeiras catalogadas no município, trilhas até quedas d\'água como as da região do Moinho e da Fazenda São Bento são parte da rotina de caminhada de moradores e visitantes.',
    },
  ],
  ciclovias:
    'A cidade não tem malha cicloviária estruturada; o ciclismo e o mountain bike acontecem nas estradas de terra e vicinais que levam às cachoeiras e ao distrito de São Jorge, terreno que também é usado para corrida e caminhada.',

  clima:
    'A altitude elevada da sede (cerca de 1.233 m) dá a Alto Paraíso um clima tropical de altitude, mais ameno e seco que o restante de Goiás. Nas noites de céu limpo, a temperatura pode cair rapidamente após o pôr do sol, e o inverno (maio a setembro) é a estação seca, com baixa umidade; o verão concentra as chuvas e temperaturas mais altas durante o dia.',
  climaTreino:
    'O clima ameno de altitude favorece o treino ao ar livre em boa parte do ano, mas as manhãs e noites frias do inverno pedem aquecimento adequado, enquanto a baixa umidade da seca exige hidratação reforçada nas trilhas e cachoeiras sob sol forte.',

  mobilidade:
    'O acesso principal a Alto Paraíso se dá pela GO-118, a partir da BR-020 vindo de Brasília (cerca de 220 km) e Formosa; a cidade fica a aproximadamente 412 km de Goiânia. O deslocamento até o distrito de São Jorge e às cachoeiras costuma ocorrer por estradas vicinais, parte delas não pavimentadas, o que reforça o uso de veículo ou van para o turismo de natureza.',

  corridas: [
    {
      nome: 'Ultra Maratona da Chapada',
      descricao:
        'Prova de ultramaratona (52 km) realizada em Alto Paraíso de Goiás, com categorias individuais e de revezamento em dupla, explorando o relevo e as paisagens da Chapada dos Veadeiros.',
    },
    {
      nome: 'Meia Maratona da Chapada',
      descricao:
        'Corrida de rua de 21 km disputada em Alto Paraíso de Goiás, organizada pela Central da Corrida (Cerrado Adventure) e já em edições consecutivas no calendário esportivo da cidade.',
    },
    {
      nome: 'Mountain Do Chapada dos Veadeiros',
      descricao:
        'Competição de trail running com percursos de 14 km e 21 km, com largada na Praça do Bambu, em Alto Paraíso de Goiás, atraindo corredores de trilha de várias partes do país.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Alto Paraíso gira em torno do trekking até cachoeiras e cânions, do trail running em provas que exploram a Chapada dos Veadeiros e de práticas de yoga e bem-estar ligadas ao turismo espiritual da região — um conjunto que faz do corpo em movimento parte central da experiência local.',
  academias:
    'A oferta de academias é pequena, típica de um município turístico de porte reduzido, e convive com estúdios de yoga, espaços holísticos e retiros de bem-estar que atendem tanto moradores quanto visitantes de temporada.',

  destaquesFitness: [
    'Cidade mais alta da região Centro-Oeste (cerca de 1.233 m), com clima ameno favorável ao treino ao ar livre.',
    'Porta de entrada do Parque Nacional da Chapada dos Veadeiros e do distrito de São Jorge, com mais de 120 cachoeiras catalogadas para trekking.',
    'Calendário de corridas de rua e trail running na região, como a Ultra Maratona da Chapada e a Mountain Do Chapada dos Veadeiros.',
    'Forte cultura de turismo espiritual e bem-estar, com retiros de yoga e centros holísticos que reforçam a demanda por práticas corporais.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade mais alta do Centro-Oeste e porta de entrada da Chapada dos Veadeiros, Alto Paraíso de Goiás oferece um cenário raro para quem treina ao ar livre, entre cachoeiras, trilhas e clima ameno. Um personal trainer ajuda a preparar o condicionamento para o trekking e para as provas de trail da região, além de orientar a rotina de treino de quem concilia vida local com o fluxo constante de turismo.',

  vizinhas: ['formosa-go', 'planaltina-go', 'niquelandia-go'],

  fontes: [
    { nome: 'IBGE Cidades — Alto Paraíso de Goiás', url: 'https://cidades.ibge.gov.br/brasil/go/alto-paraiso-de-goias/panorama' },
    { nome: 'Prefeitura de Alto Paraíso de Goiás — Turismo', url: 'https://turismo.altoparaiso.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
