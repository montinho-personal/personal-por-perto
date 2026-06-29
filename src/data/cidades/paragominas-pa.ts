import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'paragominas-pa', nome: 'Paragominas', uf: 'PA', estado: 'Pará', estadoSlug: 'para', regiao: 'Norte', gentilico: 'paragominense', tipo: 'cidade',
  populacao: 105550, populacaoAno: 2022, idhm: 0.645, idhmClasse: 'médio', altitudeM: 90,

  resumoEconomico:
    'No sudeste paraense, cortada pela BR-010 (Belém–Brasília), Paragominas é um dos principais polos do agronegócio do estado. A produção de grãos — sobretudo soja e milho — expandiu fortemente nas últimas décadas, ao lado da pecuária bovina, e a mineração de bauxita movimenta a economia local: a mina operada pela Hydro está entre as maiores do mundo no minério. A cidade também é referência ambiental como pioneira do projeto Município Verde, no combate ao desmatamento na Amazônia.',

  mercado:
    'Como polo do agronegócio paraense, Paragominas tem renda circulante e demanda crescente por saúde e bem-estar. O mercado fitness combina academias na área urbana com forte atuação do personal domiciliar, que atende quem prefere treinar em casa ou em condomínio. O calor o ano todo é fator central no planejamento das rotinas de treino.',

  bairrosNobres: ['Centro', 'Promissão', 'Célio Miranda', 'Nagibão'],
  bairrosPopulares: ['Jaderlândia', 'Uraim', 'Cidade Nova', 'Bom Jesus'],

  parques: [
    {
      nome: 'Lago Verde',
      descricao:
        'Cartão-postal da cidade, reúne corredores e caminhantes ao redor da água, com academia ao ar livre de equipamentos gratuitos — principal ponto de treino ao ar livre.',
    },
    {
      nome: 'Parque Ambiental',
      descricao:
        'Área verde urbana usada para caminhada e atividade física, com trilhas e espaço arborizado que ameniza o calor.',
    },
    {
      nome: 'Praças do Projeto Saúde na Praça',
      descricao:
        'Praças de bairro recebem turmas diárias de exercícios aeróbicos do programa municipal, que mobiliza centenas de pessoas pela manhã.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária não é divulgada em fonte oficial; o entorno do Lago Verde e as avenidas largas da cidade são os espaços mais usados para pedal e caminhada.',

  clima:
    'O clima é equatorial, quente e úmido, com estação chuvosa e período mais seco bem definidos e temperaturas altas o ano inteiro.',
  climaTreino:
    'O calor e a umidade pedem hidratação reforçada e treinos no início da manhã ou no fim da tarde; áreas arborizadas como o Lago Verde e o Parque Ambiental tornam a atividade ao ar livre mais confortável.',

  mobilidade:
    'A BR-010 (Belém–Brasília) é o eixo de mobilidade e logística da cidade, ligando Paragominas a Belém e ao restante do país e escoando a produção de grãos e bauxita da região.',

  corridas: [
    {
      nome: 'Corrida de Rua de Aniversário de Paragominas',
      descricao:
        'Prova de 8 km promovida pela prefeitura nas comemorações do aniversário da cidade, com largada e chegada no Lago Verde, aberta a atletas locais e de outras regiões.',
    },
    {
      nome: 'Corrida do Bem',
      descricao:
        'Evento de corrida de rua organizado por academia local, reunindo a comunidade em torno do esporte e de ações solidárias.',
    },
  ],
  culturaEsportiva:
    'A cidade tem cultura esportiva ativa: o Lago Verde concentra corredores e caminhantes diariamente, o Projeto Saúde na Praça mobiliza centenas de pessoas em exercícios aeróbicos e as corridas de rua vêm ganhando adesão.',
  academias:
    'A oferta de academias se concentra na área urbana e é complementada por academias ao ar livre no Lago Verde e em praças, além do personal domiciliar para quem treina em casa.',

  destaquesFitness: [
    'Lago Verde como principal espaço de corrida, caminhada e academia ao ar livre.',
    'Projeto Saúde na Praça com turmas diárias de exercícios em praças de bairro.',
    'Corridas de rua de aniversário e solidárias com adesão crescente.',
    'Personal domiciliar consolidado em uma cidade de calor o ano todo.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 270,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Polo do agronegócio e referência ambiental como Município Verde, Paragominas tem no Lago Verde e nas praças seus grandes espaços de treino. Um personal trainer ajuda a montar uma rotina que respeite o calor equatorial e aproveite com segurança esses cenários ao ar livre.',

  vizinhas: ['belem-pa', 'maraba-pa', 'castanhal-pa'],

  fontes: [
    { nome: 'IBGE Cidades — Paragominas', url: 'https://cidades.ibge.gov.br/brasil/pa/paragominas/panorama' },
    { nome: 'Prefeitura de Paragominas', url: 'https://paragominas.pa.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
