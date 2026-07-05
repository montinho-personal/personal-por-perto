import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'formoso-do-araguaia-to',
  nome: 'Formoso do Araguaia',
  uf: 'TO',
  estado: 'Tocantins',
  estadoSlug: 'tocantins',
  regiao: 'Norte',
  gentilico: 'formosense do araguaia',
  tipo: 'cidade',

  populacao: 18881,
  populacaoAno: 2022,
  idhm: 0.670,
  idhmClasse: 'médio',
  pibPerCapita: 52337,
  pibPerCapitaAno: 2023,
  altitudeM: 240,

  resumoEconomico:
    'No sudoeste do Tocantins, a cerca de 320 km de Palmas e 73 km de Gurupi, Formoso do Araguaia é o maior município do estado em extensão territorial e abriga o maior projeto de arroz irrigado em área contínua do mundo, com 27.787 hectares de várzea ao longo do Rio Formoso. O Projeto Rio Formoso, implantado ainda na década de 1970, transformou o município em um dos quatro maiores produtores de arroz irrigado do Norte do Brasil, ao lado de Lagoa da Confusão, Pium e Dueré — todos no Tocantins. Além do arroz, a economia se apoia na pecuária de corte, na pesca esportiva e no turismo de natureza, favorecido pela proximidade com a Ilha do Bananal, a maior ilha fluvial do mundo, dividida entre Formoso do Araguaia, Lagoa da Confusão e Pium.',

  mercado:
    'Formoso do Araguaia tem um mercado fitness pequeno e concentrado, movido pela renda do agronegócio orizícola e da pecuária. A procura por personal trainer parte principalmente de produtores rurais, técnicos agrícolas e comerciantes locais, que buscam treino individualizado diante de uma oferta ainda limitada de academias no município, muitas vezes conciliando o treino com a rotina intensa da safra do arroz.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Setor Aliança', 'Setor Central'],

  parques: [
    {
      nome: 'Recanto da Ilha',
      descricao:
        'Praia fluvial às margens do Rio Javaés, junto à Ilha do Bananal, um dos points de veraneio mais procurados do Tocantins em julho, com areia, água limpa e estrutura de bares na temporada de seca dos rios.',
    },
    {
      nome: 'Lago Municipal e lagos do Projeto Rio Formoso',
      descricao:
        'Espelhos d\'água formados pela infraestrutura de irrigação do arroz, hoje também usados para pesca esportiva, passeios de barco e caminhada nas margens nos horários mais frescos do dia.',
    },
    {
      nome: 'Lagoa do Morro Azul',
      descricao:
        'Piscina natural de água cristalina formada por uma nascente termal em fenda de rocha calcária, destino de banho e lazer nos arredores da cidade.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária estruturada no município; o deslocamento de bicicleta se concentra nas ruas do Centro e do Setor Aliança e nas estradas de terra que dão acesso às fazendas de arroz e às praias de rio.',

  clima:
    'O clima é tropical úmido, com verão chuvoso e inverno seco: a precipitação anual varia de 1.400 mm a 1.900 mm, concentrada entre outubro e abril, e as temperaturas mais altas do ano, de até 35°C, ocorrem em junho, julho e agosto, no auge da seca. A cheia do Rio Araguaia marca a paisagem na estação chuvosa.',
  climaTreino:
    'No pico da seca, entre junho e agosto, o calor forte e a baixa umidade pedem hidratação reforçada e treinos no início da manhã ou no fim da tarde; na estação chuvosa, as pancadas costumam se concentrar à tarde, o que favorece o treino matinal ao ar livre.',

  mobilidade:
    'O acesso à cidade é feito pela TO-070, que liga Formoso do Araguaia a Sandolândia e à malha rodoviária do sul do Tocantins, com Gurupi — a 73 km — funcionando como principal polo regional de referência. A extensão territorial do município, uma das maiores do estado, faz com que boa parte da população viva ligada à zona rural e às fazendas de arroz, com deslocamento interno predominantemente de carro.',

  corridas: [
    {
      nome: 'Campeonato de Pesca Esportiva do Lago Taboca',
      descricao:
        'Competição organizada pela Prefeitura com apoio do Sebrae, reunindo dezenas de equipes de Formoso do Araguaia e de cidades vizinhas, como Gurupi, Palmas e Porto Nacional, nas categorias barco e caiaque.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Formoso do Araguaia gira em torno da pesca esportiva, com torneios e campeonatos que atraem competidores de outras cidades do Tocantins e de fora do estado, e do turismo de rio no Recanto da Ilha e nos lagos do Projeto Rio Formoso. O contato com a Ilha do Bananal e os povos indígenas Javaé e Karajá também marca o calendário de eventos e o turismo étnico do município.',
  academias:
    'A oferta de academias é enxuta, concentrada no Centro, com poucos estúdios de musculação e funcional atendendo a uma população ligada majoritariamente ao agronegócio do arroz e à pecuária; o treino ao ar livre nas margens dos lagos e do rio complementa essa estrutura limitada.',

  destaquesFitness: [
    'Maior projeto de arroz irrigado em área contínua do mundo, com 27.787 hectares, sustenta a economia do município.',
    'Recanto da Ilha, na Ilha do Bananal, é um dos points de praia fluvial mais procurados do Tocantins.',
    'Torneios de pesca esportiva no Lago Taboca movimentam o calendário esportivo da cidade.',
    'Calor intenso e seca marcante entre junho e agosto exigem hidratação reforçada e ajuste de horário no treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 225,
    mensalMax: 590,
    onlineMin: 105,
    onlineMax: 290,
  },

  conclusao:
    'Maior município do Tocantins em área e um dos principais polos de arroz irrigado do Brasil, Formoso do Araguaia tem na lavoura, na pecuária e no turismo de rio — com destaque para a Ilha do Bananal — sua base econômica. Um personal trainer ajuda a manter a constância do treino em meio à rotina da safra, aproveitando os lagos e as praias fluviais e respeitando o calor forte da seca tocantinense.',

  vizinhas: ['gurupi-to', 'palmas-to'],

  fontes: [
    {
      nome: 'IBGE Cidades — Formoso do Araguaia',
      url: 'https://cidades.ibge.gov.br/brasil/to/formoso-do-araguaia/panorama',
    },
    { nome: 'Prefeitura Municipal de Formoso do Araguaia', url: 'https://formosodoaraguaia.to.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-05',
};
