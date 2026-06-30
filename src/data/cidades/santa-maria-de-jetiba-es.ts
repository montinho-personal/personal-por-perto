import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santa-maria-de-jetiba-es',
  nome: 'Santa Maria de Jetibá',
  uf: 'ES',
  estado: 'Espírito Santo',
  estadoSlug: 'espirito-santo',
  regiao: 'Sudeste',
  gentilico: 'jetibaense',
  tipo: 'cidade',

  populacao: 41636,
  populacaoAno: 2022,
  idhm: 0.671,
  idhmClasse: 'médio',
  altitudeM: 700,

  resumoEconomico:
    'Santa Maria de Jetibá fica na Região das Montanhas Capixabas, a cerca de 80 km de Vitória, e é conhecida como o município mais pomerano do Brasil — colonizado a partir do fim do século XIX por imigrantes da Pomerânia (Alemanha), onde a língua pomerana ainda é falada no dia a dia. A economia é fortemente rural e familiar: o município é o maior produtor de ovos do Brasil, com avicultura de postura em larga escala, além de horticultura intensiva (é um dos grandes celeiros de hortaliças do Espírito Santo) e café de montanha. O agroturismo e a cultura pomerana, com eventos como a Festa Pomerana (Pomerfest), completam o perfil econômico.',

  mercado:
    'Em uma cidade média de serra e perfil rural, a demanda por personal trainers concentra-se na sede, ligada a academias e a quem busca acompanhamento individual. O clima ameno de altitude favorece o treino ao ar livre, e o relevo montanhoso atrai quem gosta de caminhada, corrida e ciclismo em subidas. O acompanhamento online amplia o alcance para as comunidades do interior, distantes do centro.',

  bairrosNobres: ['Centro (Sede)', 'Vila Nova', 'São Luís'],
  bairrosPopulares: ['Garrafão', 'Caramuru', 'Recreio', 'Rio Bonito'],

  parques: [
    {
      nome: 'Pedra dos Três Pontões',
      descricao:
        'Conjunto de formações rochosas que é cartão-postal da cidade e ponto de trilhas e contemplação, com mirantes para a Região das Montanhas Capixabas — destino procurado por quem combina caminhada e natureza.',
    },
    {
      nome: 'Pedra do Garrafão',
      descricao:
        'No distrito de Garrafão, parte mais alta do município, é referência para trilhas em meio à mata e vistas panorâmicas da serra, opção de treino em terreno íngreme.',
    },
    {
      nome: 'Barragem do Rio Bonito',
      descricao:
        'Reservatório em ambiente rural usado para passeios e atividades ao ar livre, em meio às propriedades de agroturismo da região.',
    },
  ],
  ciclovias:
    'A cidade não tem uma malha cicloviária estruturada; o ciclismo acontece principalmente nas estradas vicinais e rodovias da serra, em percursos de montanha procurados por ciclistas de estrada e mountain bike.',

  clima:
    'O clima é ameno de altitude, típico da serra capixaba: a cerca de 700 m, as temperaturas são mais frescas que no litoral, com noites frias no inverno e dias agradáveis na maior parte do ano.',
  climaTreino:
    'O clima de montanha favorece treinar ao ar livre com conforto térmico boa parte do ano, sobretudo de manhã e no fim da tarde. No inverno, o frio pede aquecimento mais longo; o relevo de subidas é um aliado natural para trabalho de força e resistência.',

  mobilidade:
    'O acesso principal a partir da Grande Vitória se dá pela ES-080, passando por Santa Leopoldina, com ligação interna à ES-261 rumo às demais cidades da serra. O deslocamento é predominantemente por carro, e as comunidades do interior dependem de estradas vicinais — o que torna a localização do treino na sede um fator prático.',

  corridas: [
    {
      nome: 'Corridas de rua e trilha da serra',
      descricao:
        'O calendário esportivo local inclui provas de corrida de rua e de trilha que aproveitam o relevo montanhoso e o clima ameno, atraindo participantes da Região das Montanhas Capixabas.',
    },
    {
      nome: 'Pedalas e cicloturismo de montanha',
      descricao:
        'As estradas e trilhas da serra recebem eventos e passeios de ciclismo que exploram as subidas e as paisagens rurais do agroturismo pomerano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é marcada pelo ambiente de montanha: caminhadas, trilhas, corrida e ciclismo em subidas fazem parte da rotina de quem treina ao ar livre. A forte identidade pomerana e o agroturismo dão um cenário particular, com eventos culturais e esportivos que movimentam a cidade ao longo do ano.',
  academias:
    'A oferta de academias se concentra na sede do município, atendendo quem busca musculação e treino funcional, complementada pelas opções de treino ao ar livre que o relevo e o clima da serra proporcionam.',

  destaquesFitness: [
    'Clima ameno de altitude (cerca de 700 m), confortável para treinar ao ar livre boa parte do ano.',
    'Trilhas e mirantes na Pedra dos Três Pontões e na Pedra do Garrafão.',
    'Relevo de montanha que favorece corrida, caminhada e ciclismo em subidas.',
    'Cenário de agroturismo e cultura pomerana, com eventos esportivos na serra capixaba.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Santa Maria de Jetibá une a tradição pomerana, o agroturismo e o clima ameno da serra capixaba a um relevo que é convite natural ao treino ao ar livre. Das trilhas da Pedra dos Três Pontões às subidas das estradas de montanha, um personal trainer ajuda a aproveitar esse cenário com método, segurança e progressão adequada.',

  vizinhas: ['serra-es', 'cariacica-es'],

  fontes: [
    { nome: 'IBGE Cidades — Santa Maria de Jetibá', url: 'https://cidades.ibge.gov.br/brasil/es/santa-maria-de-jetiba/panorama' },
    { nome: 'Prefeitura de Santa Maria de Jetibá', url: 'http://www.pmsmj.es.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
