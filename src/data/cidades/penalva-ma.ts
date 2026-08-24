import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'penalva-ma',
  nome: 'Penalva',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'penalvense',
  tipo: 'cidade',

  populacao: 32511,
  populacaoAno: 2022,

  resumoEconomico:
    'Na Baixada Maranhense — a maior planície inundável do Nordeste, protegida como APA e reconhecida como sítio Ramsar de importância internacional —, Penalva vive o ciclo das águas: campos que viram mar na chuva e pasto na seca, lagos piscosos como o de Penalva e o Cajari, pesca artesanal, babaçu e agricultura familiar. Mais da metade da população vive na zona rural, entre povoados ribeirinhos e comunidades quilombolas.',

  mercado:
    'O mercado formal de treino é enxuto e concentrado no Centro, com o perfil das cidades da Baixada: professores, servidores e comerciantes na sede, e uma população rural que treina no trabalho — remo, roça e caminhada de campo alagado. O acompanhamento online é o formato que melhor alcança quem está nos povoados.',

  bairrosNobres: ['Centro', 'Orla do Lago', 'Entorno da Matriz', 'Porto dos Pescadores'],
  bairrosPopulares: ['Povoados da Baixada', 'Comunidades ribeirinhas', 'Comunidades quilombolas', 'Zona Rural'],

  parques: [
    {
      nome: 'Lago de Penalva e campos alagados',
      descricao:
        'O cartão-postal e a estrada líquida da cidade: na cheia, canoas e lanchas cruzam os campos; na seca, os mesmos campos viram quilômetros de caminhada plana a perder de vista.',
    },
    {
      nome: 'APA da Baixada Maranhense',
      descricao:
        'A grande planície inundável protegida — sítio Ramsar —, com aningais, buritizais e uma das maiores concentrações de aves aquáticas do Nordeste.',
    },
    {
      nome: 'Lago Cajari e povoados ribeirinhos',
      descricao:
        'O sistema de lagos vizinho, ligado a Penalva por água e por estradas de campo — território de pesca artesanal e remo cotidiano.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária; as ruas da sede e as estradas de campo — transitáveis conforme a estação — são o terreno de quem pedala.',

  clima:
    'Tropical quente e úmido com duas estações nítidas: o inverno maranhense de chuvas fortes (janeiro a junho), quando a Baixada alaga, e o verão seco e ventoso do segundo semestre.',
  climaTreino:
    'Manhã cedo e fim de tarde são as janelas do treino ao ar livre o ano inteiro. Na cheia, o remo vira o cardio natural; na seca, os campos abertos são pista plana infinita — sempre com hidratação reforçada.',

  mobilidade:
    'A MA-014 liga Penalva a Viana e à rede regional rumo a São Luís (cerca de 200 km por terra); na estação das chuvas, barcos e canoas complementam os deslocamentos entre povoados. Pinheiro e Santa Inês são os polos regionais de referência.',

  corridas: [
    {
      nome: 'Provas e festivais das festas de Penalva',
      descricao:
        'O calendário esportivo acompanha o padroeiro e as festas juninas — a cidade é terra de bumba meu boi forte —, com torneios e atividades na sede.',
    },
  ],
  culturaEsportiva:
    'O corpo penalvense treina no ciclo das águas: remo de canoa como transporte e ofício, pesca artesanal, quebra de coco babaçu e caminhada longa de campo. O futebol de várzea (literal — o campo alaga) e as festas do boi completam a cena de uma cidade que dança e rema o ano inteiro.',
  academias:
    'A oferta formal é mínima e concentrada no Centro; o treino de força acontece em espaços simples, em casa ou a distância, com o lago como academia aquática de todos.',

  destaquesFitness: [
    'Baixada Maranhense: sítio Ramsar com campos alagados e lagos piscosos.',
    'Remo de canoa como cardio cotidiano — transporte, pesca e treino num gesto só.',
    'Campos da seca: quilômetros de caminhada e corrida plana a céu aberto.',
    'Cultura do bumba meu boi — resistência física disfarçada de festa.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 100,
    mensalMin: 230,
    mensalMax: 580,
    onlineMin: 120,
    onlineMax: 320,
  },

  conclusao:
    'Penalva treina no ritmo das águas: rema na cheia, caminha na seca e dança o boi o ano inteiro. Um personal trainer daqui trabalha com o que o território dá — força para o remo e a roça, fôlego para o campo aberto — com atendimento presencial na sede e online para os povoados da Baixada.',

  vizinhas: ['pinheiro-ma', 'santa-ines-ma'],

  fontes: [
    { nome: 'IBGE Cidades — Penalva', url: 'https://cidades.ibge.gov.br/brasil/ma/penalva/panorama' },
    { nome: 'Prefeitura de Penalva', url: 'https://www.penalva.ma.gov.br/' },
    { nome: 'APA da Baixada Maranhense', url: 'https://www.gov.br/icmbio/pt-br' },
  ],
  atualizadoEm: '2026-08-24',
};
