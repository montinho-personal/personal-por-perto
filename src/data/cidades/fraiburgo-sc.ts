import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'fraiburgo-sc',
  nome: 'Fraiburgo',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'fraiburguense',
  tipo: 'cidade',

  populacao: 33463,
  populacaoAno: 2022,
  idhm: 0.731,
  idhmClasse: 'alto',
  altitudeM: 1048,

  resumoEconomico:
    'Conhecida como a Terra da Maçã, Fraiburgo fica no Meio-Oeste catarinense e é um dos berços da fruticultura de clima temperado no Brasil. A cidade construiu sua identidade econômica em torno dos pomares de maçã — a região responde por uma fatia expressiva da produção nacional da fruta — com forte presença da agroindústria ligada à classificação, ao armazenamento em câmaras frias e ao processamento de frutas. A vocação agrícola se completa com turismo rural e de eventos, especialmente nas épocas de floração e colheita.',

  mercado:
    'Como cidade média do interior catarinense, Fraiburgo tem um mercado fitness enxuto, formado por academias locais e estúdios de musculação e treino funcional. A procura por personal trainers cresce entre quem busca treino orientado para o clima frio de altitude e para manter a constância no inverno rigoroso, quando treinar ao ar livre fica mais desafiador.',

  bairrosNobres: ['Centro', 'Jardim das Araucárias', 'São Miguel', 'Bela Vista'],
  bairrosPopulares: ['Liberata', 'Roland Mayer', 'Das Nações', 'Butiá Verde'],

  parques: [
    {
      nome: 'Parque Ecológico René Frey',
      descricao:
        'Reserva de cerca de 50 hectares de mata nativa em plena área central, com araucárias e imbuias centenárias e trilhas — um dos principais espaços verdes da cidade para caminhada e contato com a natureza.',
    },
    {
      nome: 'Lago das Araucárias',
      descricao:
        'Cartão-postal de Fraiburgo, com entorno arborizado e calçadões à beira da água muito usados para caminhada e corrida leve, sobretudo ao entardecer.',
    },
    {
      nome: 'Pomares e entorno rural',
      descricao:
        'As estradas e os pomares de maçã que cercam a cidade compõem percursos de altitude usados por quem treina caminhada, corrida e pedal em meio à paisagem da fruticultura.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta; boa parte do pedal e da corrida acontece nas vias urbanas, no entorno do Lago das Araucárias e nas estradas rurais que cortam os pomares, com atenção ao relevo acidentado de altitude.',

  clima:
    'O clima é temperado de altitude (subtropical mesotérmico úmido), com as quatro estações bem marcadas. A cidade está a cerca de 1.048 metros de altitude e tem invernos frios — entre junho e agosto as mínimas se aproximam de zero, com geadas frequentes e, em altitudes mais elevadas, episódios ocasionais de neve. A temperatura média anual gira em torno de 16 °C, e é justamente esse frio que favorece os pomares de maçã.',
  climaTreino:
    'O frio intenso de inverno pede aquecimento mais longo e roupas em camadas para treinar ao ar livre, especialmente cedo, quando há geada; ambientes fechados ganham espaço nos meses mais gelados. Primavera e verão, mais amenos, são as melhores janelas para caminhada, corrida e pedal nas estradas dos pomares.',

  mobilidade:
    'Fraiburgo se conecta à região por rodovias estaduais, com acesso à BR-282 (eixo que cruza Santa Catarina de leste a oeste) pelos municípios vizinhos, ligando a cidade a polos como Videira e Caçador. O transporte urbano é feito por ônibus, e o relevo de altitude marca os deslocamentos dentro e ao redor da cidade.',

  corridas: [
    {
      nome: 'Corrida Oliza Fraiburgo',
      descricao:
        'Prova de rua tradicional da cidade, com percursos de corrida e caminhada partindo da região central, próximo ao ginásio poliesportivo e à orla do Lago das Araucárias.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso do entorno do Lago das Araucárias e do Parque René Frey para caminhada e corrida, as estradas dos pomares para pedal e corrida de altitude, e provas de rua locais — tudo moldado pelo clima frio que define o ritmo das estações.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e estúdios de treino funcional, distribuídos pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior catarinense.',

  destaquesFitness: [
    'Terra da Maçã: pomares e estradas rurais de altitude como cenário para corrida e pedal.',
    'Clima frio de altitude (cerca de 1.048 m), com invernos rigorosos que exigem adaptação no treino.',
    'Lago das Araucárias e Parque Ecológico René Frey como espaços de caminhada ao ar livre.',
    'Economia ligada à fruticultura da maçã e à agroindústria de clima temperado.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade fria e de altitude, cercada pelos pomares de maçã, Fraiburgo pede um treino que respeite o inverno rigoroso e aproveite a primavera e o verão ao ar livre. Um personal trainer ajuda a organizar a rotina ao longo das estações, escolhendo os melhores horários e mantendo a constância mesmo nos meses mais gelados.',

  vizinhas: ['videira-sc', 'cacador-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Fraiburgo', url: 'https://cidades.ibge.gov.br/brasil/sc/fraiburgo/panorama' },
    { nome: 'Prefeitura de Fraiburgo', url: 'https://www.fraiburgo.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
