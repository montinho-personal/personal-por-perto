import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itamaraju-ba',
  nome: 'Itamaraju',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'itamarajuense',
  tipo: 'cidade',

  populacao: 59603,
  populacaoAno: 2022,
  idhm: 0.63,
  idhmClasse: 'médio',
  altitudeM: 112,

  resumoEconomico:
    'No extremo sul da Bahia, banhada pelo rio Jucuruçu — que dá origem ao próprio nome do município, do tupi "pedra da mata do Jucuruçu" —, Itamaraju é o maior centro comercial da região, com o quarto maior polo de comércio do extremo sul baiano e cerca de 48 ramos distintos de atividade. A economia soma um PIB de aproximadamente R$ 1,1 bilhão, puxado pelos serviços (38,2% do valor adicionado), pela agropecuária (27,7%) e pela administração pública (23,7%). No campo, o município é hoje o maior produtor de cacau do Território Extremo Sul: de uma safra regional de 2.514 toneladas colhidas em dez municípios, Itamaraju sozinha responde por 66,5% do total, ao lado de café, pecuária de corte e leite e extração de madeira.',

  mercado:
    'Como maior centro comercial da região, Itamaraju tem o mercado de personal trainers mais aquecido entre as cidades do extremo sul baiano fora do eixo Teixeira de Freitas–Eunápolis–Porto Seguro. A academia Power Fit, que organiza o Circuito Itamaraju Run, é referência local, e a procura por acompanhamento individualizado vem tanto de comerciantes e produtores rurais quanto de moradores dos bairros centrais.',

  bairrosNobres: ['Centro', 'Liberdade', 'Posto Serral'],
  bairrosPopulares: ['Várzea Alegre', 'Furlam', 'Novo Prado', 'Coruja'],

  parques: [
    {
      nome: 'Monte Pescoço',
      descricao:
        'Monólito de cerca de 600 metros de altitude à margem da BR-101, a 5 km do centro, também chamado de Pedra do Gado Bravo — o "Dedo de Deus baiano" visto por quem passa pela rodovia. Reúne trilhas de até 15 km, mirante e via de escalada e rapel, sendo o principal destino de trekking e atividade física ao ar livre do município.',
    },
    {
      nome: 'Margens do Rio Jucuruçu',
      descricao:
        'O rio que batiza o município corta a cidade e a região rural; suas margens e a travessia de balsa até a comunidade de Tururim, próxima a piscinas naturais, são usadas para caminhada e passeios ao ar livre.',
    },
  ],
  ciclovias:
    'A cidade não tem malha cicloviária estruturada; o ciclismo urbano acontece nas ruas do Centro e nos acessos rurais, e a BR-101 é usada por ciclistas de estrada em trechos fora do perímetro urbano.',

  clima:
    'O clima é tropical úmido a subúmido, com temperatura média anual em torno de 24 °C e calor constante ao longo do ano, sem inverno rigoroso — padrão típico do extremo sul baiano.',
  climaTreino:
    'O calor recomenda treinar no início da manhã ou no fim da tarde, com hidratação reforçada; nos dias de chuva mais forte, comuns em boa parte do ano, vale ter alternativa coberta para não depender só das trilhas do Monte Pescoço ou das margens do Jucuruçu.',

  mobilidade:
    'Itamaraju é cortada pela BR-101, principal eixo rodoviário do extremo sul da Bahia, que liga o município a Teixeira de Freitas, Eunápolis e Porto Seguro. A cidade faz limite com Prado, Jucuruçu, Vereda, Itabela, Porto Seguro e Guaratinga, e o deslocamento interno é feito majoritariamente por veículos particulares, moto e transporte coletivo local.',

  corridas: [
    {
      nome: 'Circuito Itamaraju Run',
      descricao:
        'Circuito de corrida de rua organizado pela Academia Power Fit Itamaraju, dividido em quatro etapas ao longo do ano — outono, inverno, primavera e verão —, reunindo corredores da cidade e da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina o Circuito Itamaraju Run, mantido por uma academia da cidade, com o ecoturismo de aventura do Monte Pescoço — escalada, rapel e trilhas que atraem visitantes de outras regiões do Brasil — e o uso das margens do rio Jucuruçu para caminhada e lazer ao ar livre.',
  academias:
    'A oferta de academias é a mais robusta entre as cidades do extremo sul baiano fora do eixo Teixeira de Freitas–Porto Seguro, concentrada no Centro e nos bairros Liberdade e Posto Serral, com estabelecimentos que também organizam eventos esportivos próprios.',

  destaquesFitness: [
    'Maior produtor de cacau do Território Extremo Sul da Bahia, responsável por 66,5% da safra regional.',
    'Monte Pescoço, monólito às margens da BR-101 com trilhas de até 15 km, escalada e rapel — point de ecoturismo de aventura.',
    'Circuito Itamaraju Run, com quatro etapas anuais organizadas por academia local.',
    'Maior centro comercial do extremo sul baiano, com mercado fitness mais aquecido que o de cidades vizinhas de porte semelhante.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 240,
    mensalMax: 650,
    onlineMin: 120,
    onlineMax: 330,
  },

  conclusao:
    'Maior centro comercial do extremo sul baiano e principal produtor de cacau da região, Itamaraju tem no Monte Pescoço e nas margens do rio Jucuruçu um cenário natural raro para o treino ao ar livre. Um personal trainer ajuda a organizar essa rotina com método, do preparo para trilhas e escaladas ao ajuste de horários e hidratação diante do calor constante da região.',

  vizinhas: ['prado-ba', 'teixeira-de-freitas-ba', 'porto-seguro-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Itamaraju', url: 'https://cidades.ibge.gov.br/brasil/ba/itamaraju/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura Municipal de Itamaraju — Conheça Itamaraju', url: 'https://www.itamaraju.ba.gov.br/detalhe-da-materia/info/conheca-itamaraju/6513' },
  ],
  atualizadoEm: '2026-07-05',
};
