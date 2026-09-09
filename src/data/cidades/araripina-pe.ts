import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'araripina-pe',
  nome: 'Araripina',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'araripinense',
  tipo: 'cidade',

  populacao: 85088,
  populacaoAno: 2022,
  idhm: 0.602,
  idhmClasse: 'médio',
  altitudeM: 622,

  resumoEconomico:
    'Araripina é a âncora do Polo Gesseiro do Araripe — o maior do Brasil e da América Latina —, que reúne mais de 500 indústrias entre mineração, calcinação, artefatos e distribuição, ao lado de Ouricuri, Ipubi, Bodocó e Trindade. Pernambuco responde por cerca de 97% do gesso consumido no país, e o setor é o que mais emprega no sertão do Araripe. A 683 km do Recife, no extremo oeste do estado e a 622 metros de altitude, a cidade fica na divisa com Ceará e Piauí, encostada na Chapada do Araripe.',

  mercado:
    'O mercado de personal em Araripina tem uma característica que quase nenhuma outra cidade do porte tem: boa parte do público já faz esforço físico pesado o dia inteiro — carregamento, forno de calcinação, movimentação de placa. O treino aqui raramente é sobre gastar mais energia; é sobre organizar carga, cuidar de coluna e ombro e devolver disposição a quem chega em casa esgotado. O restante do público — comércio, serviços, servidores e os estudantes que a cidade concentra — busca o de sempre: composição corporal e saúde, com as academias do Centro como base.',

  bairrosNobres: ['Centro', 'Alto Alegre', 'Entorno da Matriz de Nossa Senhora da Conceição', 'Eixo da Rua Coelho Rodrigues'],
  bairrosPopulares: ['Distrito de Nascente', 'Distrito de Morais', 'Distrito de Rancharia', 'Distrito de Lagoa do Barro'],

  parques: [
    {
      nome: 'Chapada do Araripe',
      descricao:
        'O planalto que dá nome à cidade e separa Pernambuco do Ceará: a borda da chapada é o cenário — e o desnível — de quem corre e pedala nas primeiras horas do dia.',
    },
    {
      nome: 'Parque Águas do Araripe',
      descricao:
        'Área de lazer no Sítio Cajueiro, na zona rural, com estrutura para famílias e grupos — o destino de fim de semana da cidade, com piscina e espaço aberto.',
    },
    {
      nome: 'Eixo da Rua Coelho Rodrigues e praças centrais',
      descricao:
        'A rua onde fica a Prefeitura é a mesma que recebe a largada e a chegada da Corrida do Trabalhador; no cotidiano, ela e as praças do Centro concentram a caminhada do fim de tarde.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária; o pedal usa as ruas do Centro e as estradas que ligam a sede aos distritos, no começo da manhã e no fim do dia.',

  clima:
    'Semiárido do sertão do Araripe, com média anual em torno de 24,6 °C e cerca de 800 mm de chuva concentrados no verão. Os 622 metros de altitude derrubam a temperatura à noite — e rendem manhãs de inverno que já registraram sensação de 14 °C, coisa rara no sertão pernambucano.',
  climaTreino:
    'A altitude é uma aliada rara por aqui: enquanto o meio do dia continua impraticável ao ar livre, o amanhecer e a noite em Araripina são mais frescos que na média do sertão, o que amplia a janela de treino externo. A poeira do polo gesseiro é o outro fator — em dia de vento forte, quem tem sensibilidade respiratória rende melhor em ambiente coberto, e isso é conversa para o médico, não para o treinador.',

  mobilidade:
    'A BR-122 costura Araripina a Ouricuri e ao eixo do sertão do Araripe, com o fluxo pesado do gesso rumo ao restante do país. Do outro lado da Chapada, a menos de duas horas, o Cariri cearense — Crato e Juazeiro do Norte — é a referência regional de serviços e o aeroporto mais próximo. Dentro do município, a sede se liga aos distritos de Nascente, Morais, Rancharia e Lagoa do Barro por estradas vicinais.',

  corridas: [
    {
      nome: 'Corrida do Trabalhador',
      descricao:
        'A prova tradicional da cidade, no 1º de maio, com percursos de 6 km e 12 km, largada e chegada em frente à Prefeitura, na Rua Coelho Rodrigues, além de versão kids e caminhada da melhor idade.',
    },
    {
      nome: 'Calendário esportivo municipal',
      descricao:
        'Jogos Escolares de Araripina (JEA), com mais de 2 mil alunos; Copa Araripina de Futsal, com 32 equipes; Torneio Feminino de Futsal em quatro etapas; Copa Araripina de Futebol Master; Circuito Araripinense de Futevôlei; e o Circuito Araripinense de Vaquejada.',
    },
  ],
  culturaEsportiva:
    'O esporte araripinense é de quadra e de rua: futsal em profusão — masculino, feminino e master, cada um com sua copa —, futevôlei em circuito, vaquejada como paixão sertaneja e a Corrida do Trabalhador como o grande encontro de quem corre. Somado a isso, os Jogos Escolares movimentam mais de dois mil alunos por ano, o que faz da escola a principal porta de entrada no esporte na cidade.',
  academias:
    'A oferta formal se concentra no Centro, com musculação e funcional de custo acessível, e atende também moradores dos distritos e de municípios vizinhos do polo gesseiro.',

  destaquesFitness: [
    'Altitude de 622 m: noites e manhãs mais frescas que a média do sertão pernambucano.',
    'Chapada do Araripe na porta — desnível de verdade para corrida e pedal.',
    'Corrida do Trabalhador: 6 km e 12 km no 1º de maio, com largada no centro da cidade.',
    'Público de trabalho pesado, em que o treino serve para organizar carga e proteger a coluna.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 580,
    onlineMin: 110,
    onlineMax: 320,
  },

  conclusao:
    'Araripina treina numa combinação incomum: altitude que refresca, chapada que dá relevo e um público que já chega cansado do trabalho. O papel de um bom acompanhamento aqui é menos "somar esforço" e mais organizar o que já existe — carga, descanso e horário —, para que o treino devolva disposição em vez de cobrar mais dela. Presencial nas academias do Centro ou online para quem mora nos distritos e nas cidades do polo gesseiro.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Araripina?',
      resposta:
        'Nas academias de musculação e funcional do Centro, que são a base da cidade, em casa, e ao ar livre no eixo da Rua Coelho Rodrigues e nas praças centrais, onde a caminhada do fim de tarde é hábito. Para quem mora nos distritos de Nascente, Morais, Rancharia e Lagoa do Barro — ou nas cidades vizinhas do polo gesseiro —, o acompanhamento online resolve a distância: o plano vai pelo celular e o ajuste acontece sem depender de estrada.',
    },
    {
      pergunta: 'Quem trabalha no polo gesseiro deve treinar do mesmo jeito que todo mundo?',
      resposta:
        'Não. Quem passa o dia carregando, movimentando placa ou trabalhando perto do forno já chega ao treino com uma conta de fadiga aberta, e repetir o mesmo padrão de esforço só aprofunda o buraco. O ajuste costuma ser na direção oposta do senso comum: menos volume, mais qualidade de execução, atenção a coluna, ombro e quadril, e descanso tratado como parte do plano. Desconforto persistente ou sintoma respiratório não é assunto de treino — é conversa com médico ou fisioterapeuta antes de qualquer programação.',
    },
    {
      pergunta: 'A altitude de Araripina muda alguma coisa no treino?',
      resposta:
        'Muda o horário, não a fisiologia. Os 622 metros não são altura suficiente para alterar desempenho, mas são o bastante para derrubar a temperatura à noite e no início da manhã — a cidade já registrou sensação de 14 °C em julho. Na prática, isso amplia a janela de treino ao ar livre em relação ao resto do sertão: dá para correr confortavelmente cedo e depois do anoitecer boa parte do ano, deixando o meio do dia para o ambiente coberto.',
    },
  ],

  vizinhas: ['ouricuri-pe', 'salgueiro-pe', 'crato-ce', 'juazeiro-do-norte-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Araripina', url: 'https://cidades.ibge.gov.br/brasil/pe/araripina/panorama' },
    { nome: 'Prefeitura de Araripina', url: 'https://araripina.pe.gov.br/' },
    { nome: 'Sindusgesso — APL do Gesso', url: 'https://sindusgesso.org.br/apl-do-gesso/' },
  ],
  atualizadoEm: '2026-09-09',
};
