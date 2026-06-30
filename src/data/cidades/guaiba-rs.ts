import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'guaiba-rs',
  nome: 'Guaíba',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'guaibense',
  tipo: 'cidade',

  populacao: 92924,
  populacaoAno: 2022,
  idhm: 0.73,
  idhmClasse: 'alto',
  altitudeM: 18,

  resumoEconomico:
    'Guaíba fica na Região Metropolitana de Porto Alegre, na margem oposta à capital, separada pelo Lago Guaíba e ligada pela BR-116. A economia é fortemente industrial, ancorada no setor de celulose: a unidade da CMPC no município está entre as maiores indústrias do Rio Grande do Sul. O comércio e os serviços completam a base econômica de uma cidade que combina porte médio e forte vínculo logístico com a Grande Porto Alegre.',

  mercado:
    'Cidade de porte médio e perfil industrial na Grande Porto Alegre, Guaíba reúne academias de bairro, redes e estúdios, com demanda puxada pela orla e pelos espaços públicos de lazer. A proximidade com Porto Alegre amplia a circulação de profissionais e o acesso a eventos esportivos regionais.',

  bairrosNobres: ['Centro', 'Parque 35', 'Jardim dos Lagos', 'Santa Rita'],
  bairrosPopulares: ['Cohab', 'Alvorada', 'Santa Isabel', 'Pedras Brancas'],

  parques: [
    {
      nome: 'Orla do Lago Guaíba',
      descricao:
        'Cartão-postal da cidade, a orla às margens do Lago Guaíba foi revitalizada com calçadões, decks, ciclovia e espaços de convivência, sendo o principal ponto para caminhadas, corridas e pedaladas com vista para a água e o pôr do sol.',
    },
    {
      nome: 'Praia Alegria e Praia da Alvorada',
      descricao:
        'Trechos de orla com áreas de lazer, quadras e espaços abertos integrados à beira do lago, usados para atividades ao ar livre e treinos de rua.',
    },
    {
      nome: 'Praça da Maçã (Centro)',
      descricao:
        'Espaço público central, na Av. João Pessoa, que serve de ponto de largada de provas de rua e de encontro para grupos de corrida e caminhada.',
    },
  ],
  ciclovias:
    'A revitalização da orla incluiu ciclovia à beira do Lago Guaíba, principal eixo de pedal e treino ao ar livre da cidade; a extensão total da malha cicloviária não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido, típico da Região Metropolitana de Porto Alegre, com verões quentes, invernos frios e chuvas distribuídas ao longo do ano.',
  climaTreino:
    'O frio e a umidade do inverno favorecem o treino indoor; nos verões quentes, a orla rende melhor cedo pela manhã ou no fim da tarde, com boa hidratação.',

  mobilidade:
    'Guaíba é cortada pela BR-116 e tem acesso à BR-290 (Free Way), o que a conecta a Porto Alegre, Canoas e ao restante da malha rodoviária do estado. A travessia em relação à capital se dá pelo Lago Guaíba, com a cidade situada na margem oposta.',

  corridas: [
    {
      nome: 'Circuito Sesc de Corridas — Etapa Guaíba',
      descricao:
        'Etapa do circuito estadual do Sesc/RS realizada na cidade, com percursos de 3 km, 5 km e 10 km, além de provas infantis e caminhada participativa.',
    },
    {
      nome: 'Corrida do Sesi — Guaíba',
      descricao:
        'Prova de rua promovida pelo Sesi no município, parte do calendário esportivo regional voltado a trabalhadores e à comunidade.',
    },
  ],
  culturaEsportiva:
    'A orla do Lago Guaíba concentra a vida esportiva ao ar livre da cidade, com grupos de corrida e caminhada ativos. Guaíba é reconhecida na história gaúcha pela ligação com a Revolução Farroupilha, e a beira do lago — palco de momentos da política do Rio Grande do Sul no século XX — hoje é o principal espaço de lazer ativo da população.',
  academias:
    'A oferta reúne academias de bairro, estúdios e redes, complementadas pela estrutura ao ar livre da orla revitalizada, com calçadão e ciclovia à beira do Lago Guaíba.',

  destaquesFitness: [
    'Orla do Lago Guaíba: calçadão e ciclovia revitalizados para corrida, caminhada e pedal.',
    'Praias da Alegria e da Alvorada: áreas de lazer e treino à beira do lago.',
    'Etapas regionais de corrida de rua (Sesc e Sesi) no calendário da cidade.',
    'Praça da Maçã, no Centro, como ponto de largada e encontro de grupos de corrida.',
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
    'Polo de celulose e cidade da Grande Porto Alegre debruçada sobre o lago, Guaíba tem na orla revitalizada seu melhor cenário de treino ao ar livre. Um personal trainer ajuda a aproveitar o calçadão e a ciclovia com método, alternando o treino na beira do Lago Guaíba com a academia nos meses frios.',

  vizinhas: ['porto-alegre-rs', 'canoas-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Guaíba', url: 'https://cidades.ibge.gov.br/brasil/rs/guaiba/panorama' },
    { nome: 'Prefeitura de Guaíba', url: 'https://www.guaiba.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
