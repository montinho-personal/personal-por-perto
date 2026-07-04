import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'carmo-do-paranaiba-mg',
  nome: 'Carmo do Paranaíba',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'carmelitano',
  tipo: 'cidade',

  populacao: 29011,
  populacaoAno: 2022,
  idhm: 0.705,
  idhmClasse: 'alto',
  altitudeM: 1061,

  resumoEconomico:
    'Carmo do Paranaíba integra a Região do Cerrado Mineiro, primeira região cafeeira do Brasil a receber Denominação de Origem, ao lado de municípios como Patrocínio, Monte Carmelo, Araguari e São Gotardo. O café ocupa cerca de 9.500 hectares no município e é um dos maiores empregadores formais, ao lado da pecuária leiteira — o PIB municipal soma cerca de R$ 1,1 bilhão, com serviços (43,1%), agropecuária (28,1%), administração pública (16,8%) e indústria (12,1%) dividindo o valor adicionado. A cidade também é referência em queijo artesanal: integra a maior região produtora de Queijo Minas Artesanal do estado, com o "Queijo do Cerrado" reconhecido com Indicação Geográfica pelo INPI em 2023, e a técnica local da "Broa de Massa de Queijo" é Patrimônio Imaterial do município. Cultivos de maracujá, tomate e milho completam a base agrícola, sustentada por cooperativas locais como a Carpec e a Carmocer.',

  mercado:
    'O mercado de personal trainer em Carmo do Paranaíba reflete o perfil de uma cidade média do Alto Paranaíba, com demanda vindo de produtores rurais, funcionários da administração pública e famílias ligadas às cadeias do café e do leite. A procura se concentra em treino de força, emagrecimento e condicionamento geral, com boa parte do atendimento acontecendo em academias de bairro e, para quem mora na zona rural ou tem rotina de safra, no formato online.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Lagoinha', 'Santa Cruz', 'Amazonas', 'Alvorada'],

  parques: [
    {
      nome: 'Praça Santo Antônio (Niterói)',
      descricao:
        'Uma das praças que recebeu academia ao ar livre instalada pela prefeitura, servindo de ponto de exercício para moradores do bairro Niterói.',
    },
    {
      nome: 'Academias ao ar livre da zona rural',
      descricao:
        'A prefeitura instalou equipamentos de ginástica ao ar livre em comunidades rurais como Sossego e Campo do Meio, levando estrutura de treino para além da área urbana central.',
    },
  ],
  ciclovias:
    'Não há evidência de uma malha cicloviária formal na cidade — o deslocamento de bicicleta acontece principalmente compartilhando as vias comuns com o tráfego de veículos.',

  clima:
    'A 1.061 metros de altitude, Carmo do Paranaíba tem clima tropical de altitude, ameno para os padrões do Cerrado mineiro, com solo fértil e boa distribuição de chuvas ao longo do ano — condições que favorecem tanto a lavoura de café quanto a pecuária leiteira.',
  climaTreino:
    'O clima de altitude deixa as manhãs mais frescas mesmo em dias quentes, o que favorece caminhada e corrida cedo do dia. No inverno, a queda de temperatura pede agasalho para o aquecimento inicial, mas raramente impede o treino ao ar livre durante o resto do dia.',

  mobilidade:
    'A BR-354 passa a cerca de 4 km do centro da cidade, ligando Carmo do Paranaíba a Patos de Minas e à região de Presidente Olegário. A rodovia estadual LMG-743 conecta a sede municipal ao distrito de Quintinos, entroncando com a BR-354 no Alto Paranaíba.',

  corridas: [
    {
      nome: 'CP Street Run',
      descricao:
        'Corrida de rua promovida pela Secretaria Municipal de Educação, Cultura, Lazer e Esporte pelas ruas de Carmo do Paranaíba, com percurso kids incluído.',
    },
    {
      nome: 'Corrida Rústica e Caminhada Auge do Carmo',
      descricao:
        'Prova de corrida rústica com opção de caminhada, já em sua terceira edição, reunindo participantes locais em torno da atividade física ao ar livre.',
    },
  ],
  culturaEsportiva:
    'O Paranaíba Esporte Clube, o "Galinho Carmense" fundado em 1917, é o time histórico da cidade e manda seus jogos no Estádio Prefeito João Luiz de Carvalho. O Ginásio Poliesportivo Agostinho de Deus recebe jogos escolares e eventos como o JECAP/OLECAP, enquanto o Carmo Country Club organiza torneios de vôlei e beach tennis em parceria com a Secretaria Municipal de Esportes e Lazer. A tradicional Expocarmo, com rodeio e shows, e o Circuito Regional de Vôlei reforçam o calendário esportivo-cultural da cidade.',
  academias:
    'A cidade tem academias de bairro como a Marção Academia, na Avenida Tancredo Neves (bairro Alvorada), e a Academia Vida Saudável, no bairro Amazonas, com aulas de fitness, treinamento funcional e zumba — oferta compatível com o porte de um município médio do Alto Paranaíba.',

  destaquesFitness: [
    'Carmo do Paranaíba integra o Cerrado Mineiro, primeira região do Brasil com Denominação de Origem para café.',
    'A cidade é referência em Queijo Minas Artesanal, com o "Queijo do Cerrado" reconhecido com Indicação Geográfica pelo INPI.',
    'Altitude de 1.061 metros deixa o clima mais ameno que o de cidades mais baixas do Cerrado, favorecendo o treino ao ar livre.',
    'Paranaíba Esporte Clube, fundado em 1917, e o Ginásio Poliesportivo Agostinho de Deus sustentam a tradição esportiva local.',
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
    'Entre lavouras de café premiado e uma das maiores produções artesanais de queijo de Minas Gerais, Carmo do Paranaíba combina tradição rural com uma vida esportiva ativa em torno do Paranaíba Esporte Clube e do Ginásio Poliesportivo Agostinho de Deus. A altitude de mais de mil metros ajuda a manter o clima ameno para o treino ao ar livre boa parte do ano, e um personal trainer ajuda a dar constância à rotina entre as safras e as estações do Cerrado.',

  vizinhas: ['patos-de-minas-mg', 'ibia-mg', 'rio-paranaiba-mg', 'serra-do-salitre-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Carmo do Paranaíba', url: 'https://cidades.ibge.gov.br/brasil/mg/carmo-do-paranaiba' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/3114303' },
    { nome: 'Prefeitura Municipal de Carmo do Paranaíba/MG', url: 'https://carmodoparanaiba.mg.gov.br/' },
    { nome: 'Rota do Café Cerrado Mineiro — Carmo do Paranaíba', url: 'https://www.rotadocafecerradomg.com.br/carmodoparanaiba' },
  ],
  atualizadoEm: '2026-07-04',
};
