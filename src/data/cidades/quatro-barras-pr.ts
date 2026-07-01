import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'quatro-barras-pr',
  nome: 'Quatro Barras',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'quatrobarrense',
  tipo: 'cidade',

  populacao: 24191,
  populacaoAno: 2022,
  idhm: 0.742,
  idhmClasse: 'alto',
  altitudeM: 914,

  resumoEconomico:
    'Na Região Metropolitana de Curitiba, ao pé da Serra do Mar, Quatro Barras combina uma vocação industrial forte com o turismo de montanha. Cortada pela BR-116 (Régis Bittencourt) e pelo Contorno Leste, a cidade atrai indústrias e operações logísticas que abastecem a cadeia automotiva da região, além de fábricas de autopeças e de explosivos. O setor de serviços responde pela maior fatia do valor adicionado, seguido de perto pela indústria, e o entorno natural — com o Morro do Anhangava e o Caminho do Itupava — sustenta um fluxo crescente de visitantes.',

  mercado:
    'Cidade pequena e integrada à malha metropolitana de Curitiba, Quatro Barras tem um mercado fitness enxuto, formado por academias locais e estúdios, com parte dos moradores buscando estrutura também nos municípios vizinhos. A procura por personal trainers tende a se apoiar no perfil ativo ligado às trilhas da Serra do Mar e na busca por treino orientado para quem quer encarar as subidas do Anhangava e do Itupava.',

  bairrosNobres: ['Centro', 'Jardim das Acácias', 'Borda do Campo', 'Graciosa'],
  bairrosPopulares: ['Jardim Menino Deus', 'Jardim São Pedro', 'Palmitalzinho', 'Nova Alvorada'],

  parques: [
    {
      nome: 'Parque Estadual da Serra da Baitaca',
      descricao:
        'Unidade de conservação que abriga o Morro do Anhangava e o início do Caminho do Itupava; é o principal território de trilhas, escalada e montanhismo da cidade, com acesso a percursos de dificuldade variada.',
    },
    {
      nome: 'Morro do Anhangava',
      descricao:
        'Com cerca de 1.420 metros de altitude, é um dos morros mais procurados por aventureiros do Paraná e referência de escalada e montanhismo; a trilha, de cerca de 4 km, é usada por quem treina subidas e resistência ao ar livre.',
    },
    {
      nome: 'Caminho do Itupava',
      descricao:
        'Antigo caminho colonial que ligava o Primeiro Planalto ao litoral, com cerca de 16 km e desnível de aproximadamente 1.000 metros; é um percurso histórico e técnico procurado por trekkers e corredores de trilha.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada e concentrada em trechos da área urbana; boa parte do pedal acontece em estradas rurais e vias de acesso à Serra, enquanto o trail e as trilhas dominam a prática ao ar livre.',

  clima:
    'O clima é subtropical de altitude, ameno e úmido, típico da Serra do Mar paranaense. Ao longo do ano a temperatura costuma variar de cerca de 10 °C a 26 °C, com invernos frios em que a mínima pode cair abaixo de 5 °C e ocorrer geada, e verões mornos. A chuva se distribui pelo ano todo, com neblina frequente na serra.',
  climaTreino:
    'O frio de altitude no inverno pede aquecimento cuidadoso e roupas em camadas, sobretudo nas primeiras horas do dia; a umidade e a neblina exigem atenção nas trilhas, e o clima ameno do verão favorece treinos ao ar livre em quase todos os horários.',

  mobilidade:
    'Quatro Barras é cortada pela BR-116 (Régis Bittencourt) e pelo Contorno Leste, eixos que ligam a cidade a Curitiba e ao restante da Região Metropolitana e sustentam sua vocação logística e industrial. O transporte urbano se apoia em ônibus e na conexão metropolitana, e as rodovias concentram grande parte do deslocamento diário.',

  corridas: [
    {
      nome: 'Campeonato Brasileiro de Corrida em Trilha e Montanha',
      descricao:
        'Prova nacional sediada no Parque Estadual da Serra da Baitaca, com percursos técnicos como o circuito Itupava e o Anhangava, reunindo atletas de vários estados em terreno rochoso e de forte desnível.',
    },
    {
      nome: 'The Hill Race',
      descricao:
        'Corrida de montanha realizada na região da Serra da Baitaca, com percursos que exploram as subidas do Anhangava e trechos de trilha, voltada a corredores que buscam desafio em ambiente natural.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Quatro Barras é marcada pela montanha: escalada e montanhismo no Anhangava, trekking no Caminho do Itupava e provas de corrida em trilha no Parque da Serra da Baitaca convivem com a prática urbana em academias e vias da cidade.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional e alguns estúdios, distribuídas pela área central e pelos bairros residenciais, com porte compatível com um município pequeno da Região Metropolitana de Curitiba.',

  destaquesFitness: [
    'Pé da Serra do Mar, com o Morro do Anhangava como referência de escalada e montanhismo do Paraná.',
    'Caminho do Itupava, antigo caminho colonial de cerca de 16 km e mil metros de desnível, procurado por trekkers e corredores.',
    'Clima subtropical de altitude, com invernos frios e geada que pedem planejamento no treino ao ar livre.',
    'Cidade industrial e logística da RM Curitiba, cortada pela BR-116 e pelo Contorno Leste.',
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
    'Encravada ao pé da Serra do Mar e integrada à Região Metropolitana de Curitiba, Quatro Barras oferece um cenário raro de trilhas de montanha e clima de altitude para quem quer treinar. Um personal trainer ajuda a preparar o corpo para as subidas do Anhangava e do Itupava, a lidar com o frio do inverno e a manter a constância aproveitando o entorno natural da cidade.',

  vizinhas: ['curitiba-pr', 'pinhais-pr', 'piraquara-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Quatro Barras', url: 'https://cidades.ibge.gov.br/brasil/pr/quatro-barras/panorama' },
    { nome: 'Prefeitura de Quatro Barras', url: 'https://quatrobarras.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
