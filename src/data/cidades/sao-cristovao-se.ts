import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-cristovao-se',
  nome: 'São Cristóvão',
  uf: 'SE',
  estado: 'Sergipe',
  estadoSlug: 'sergipe',
  regiao: 'Nordeste',
  gentilico: 'são-cristovense',
  tipo: 'cidade',

  populacao: 95612,
  populacaoAno: 2022,

  resumoEconomico:
    'Fundada em 1590, São Cristóvão é a quarta cidade mais antiga do Brasil e foi a primeira capital de Sergipe — a "cidade mãe" do estado. Hoje ela vive duas realidades no mesmo município: o núcleo histórico, cujo conjunto colonial abriga a Praça São Francisco, Patrimônio Mundial da UNESCO desde 2010, e o complexo do Rosa Elze, na divisa com Aracaju, que concentrava mais de 56 mil moradores em 2023 — mais da metade da população — como extensão direta da malha urbana da capital. No meio dos dois, o campus sede da UFS, única universidade pública do estado.',

  mercado:
    'O mercado de personal trainer aqui é, na prática, dois mercados. No Rosa Elze e no entorno da UFS, o público é jovem, universitário e de renda média, com academias de rua e demanda por preço acessível e horário flexível. No núcleo histórico e nos povoados, a densidade cai muito e o atendimento a domicílio ou online passa a fazer mais sentido. A 22 km de Aracaju, muitos profissionais atendem nas duas cidades — o que amplia a oferta e torna a pergunta sobre deslocamento decisiva.',

  bairrosNobres: ['Centro Histórico', 'Rosa Elze', 'Eduardo Gomes', 'Entorno da UFS'],
  bairrosPopulares: ['Conjunto Marcos Freire', 'Luiz Alves', 'Cardoso de Melo', 'Povoados do Vaza-Barris'],

  parques: [
    {
      nome: 'Praça São Francisco e o conjunto histórico',
      descricao:
        'Patrimônio Mundial da UNESCO desde 2010, é uma das raras praças das Américas a fundir os modelos português e espanhol de urbanismo colonial — herança da União Ibérica. O casario em volta faz do centro um circuito de caminhada plano e sombreado.',
    },
    {
      nome: 'Praça do Carmo',
      descricao:
        'Cartão-postal do núcleo histórico e ponto de largada do percurso principal de 24 km da Corrida Cidade de Aracaju, uma das maiores provas públicas de rua do país.',
    },
    {
      nome: 'Margens do rio Vaza-Barris',
      descricao:
        'O município fica ao norte do estuário do Vaza-Barris: terreno plano, vento de rio e percursos abertos para caminhada e pedal fora do eixo urbano.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária estruturada no município; o pedal acontece nas avenidas do Rosa Elze, nas vias do entorno da UFS e nas estradas de acesso aos povoados.',

  clima:
    'Tropical litorâneo, quente o ano inteiro, com o período chuvoso concentrado do outono ao inverno (de abril a agosto) e a brisa do estuário amenizando as tardes.',
  climaTreino:
    'Começo da manhã e fim de tarde são as janelas confortáveis para treino ao ar livre o ano todo. O que exige plano B aqui não é o calor — é a chuva do meio do ano, que cai forte e concentrada e derruba semanas inteiras de quem só treina na rua.',

  mobilidade:
    'São Cristóvão fica a cerca de 22 km ao sul de Aracaju, com percurso de aproximadamente 25 minutos de carro, e integra a Região Metropolitana da capital. Faz divisa com Aracaju a leste, Nossa Senhora do Socorro, Laranjeiras e Areia Branca ao norte e Itaporanga d\'Ajuda a oeste e ao sul. O deslocamento diário entre o Rosa Elze e a capital é rotina para boa parte dos moradores.',

  corridas: [
    {
      nome: 'Corrida Cidade de Aracaju',
      descricao:
        'Uma das maiores corridas públicas do país, com o percurso principal de 24 km largando da Praça do Carmo, em São Cristóvão, e seguindo até a capital.',
    },
    {
      nome: 'Calendário esportivo universitário da UFS',
      descricao:
        'O campus sede movimenta a cena esportiva do município o ano inteiro, com competições e atividades abertas que puxam a demanda por treino na região do Rosa Elze.',
    },
  ],
  culturaEsportiva:
    'O esporte são-cristovense reflete a divisão do município: no entorno da UFS e do Rosa Elze há cena universitária, futsal, corrida e academias de rua; no núcleo histórico e nos povoados, futebol de campo e a caminhada de fim de tarde nas ruas de pedra. A Corrida Cidade de Aracaju, que larga daqui, é o evento que une os dois lados uma vez por ano.',
  academias:
    'A oferta formal se concentra no complexo do Rosa Elze e no entorno da UFS, com academias de rua de mensalidade acessível voltadas ao público universitário; no núcleo histórico, o atendimento a domicílio e o treino ao ar livre predominam.',

  destaquesFitness: [
    'Largada da Corrida Cidade de Aracaju, uma das maiores provas públicas do Brasil, na Praça do Carmo.',
    'Campus sede da UFS, que sustenta demanda jovem e constante por treino.',
    'Núcleo histórico plano e sombreado — circuito de caminhada com Patrimônio Mundial no caminho.',
    'A 22 km de Aracaju: oferta ampliada de profissionais que atendem nas duas cidades.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 620,
    onlineMin: 130,
    onlineMax: 340,
  },

  conclusao:
    'São Cristóvão é uma cidade com dois corpos: o histórico, que caminha entre igrejas do século XVII, e o Rosa Elze, que é Aracaju por outro nome. Escolher personal aqui começa por saber em qual dos dois você mora — porque isso define preço, formato e, principalmente, quanto tempo o profissional leva para chegar até você.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em São Cristóvão?',
      resposta:
        'Nas academias de rua do complexo do Rosa Elze e do entorno da UFS, que é onde se concentra mais da metade da população do município, e em casa. No núcleo histórico, onde a densidade é bem menor, o atendimento a domicílio e o treino ao ar livre nas praças e ruas do conjunto colonial são o padrão. Para quem mora nos povoados, o acompanhamento online resolve a distância sem depender de estrada.',
    },
    {
      pergunta: 'Vale contratar um personal de Aracaju?',
      resposta:
        'Vale, e é comum — são 22 km e cerca de 25 minutos de carro, e muitos profissionais atendem nas duas cidades. A pergunta que evita frustração é sobre tempo, não sobre preço: confirme de que ponto ele sai e em que horário, porque o trajeto no pico é bem diferente do trajeto às seis da manhã. Deslocamento longo que não foi combinado vira atraso e remarcação alguns meses depois.',
    },
    {
      pergunta: 'Há acompanhamento em São Cristóvão para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para São Cristóvão, o formato é o acompanhamento online: treino adaptado à estrutura que você tem — academia do Rosa Elze, casa ou as praças do centro histórico —, vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura: quadro clínico pede também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['aracaju-se', 'nossa-senhora-do-socorro-se', 'estancia-se', 'itabaiana-se'],

  fontes: [
    { nome: 'IBGE Cidades — São Cristóvão', url: 'https://www.ibge.gov.br/cidades-e-estados/se/sao-cristovao.html' },
    { nome: 'Prefeitura de São Cristóvão', url: 'https://www.saocristovao.se.gov.br/' },
    { nome: 'IPHAN — Praça São Francisco', url: 'http://portal.iphan.gov.br/pagina/detalhes/43' },
  ],
  atualizadoEm: '2026-09-11',
};
