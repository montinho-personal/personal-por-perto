import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'camaqua-rs',
  nome: 'Camaquã',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'camaquense',
  tipo: 'cidade',

  populacao: 62200,
  populacaoAno: 2022,
  idhm: 0.697,
  idhmClasse: 'médio',
  altitudeM: 25,

  resumoEconomico:
    'Polo regional do centro-sul gaúcho, Camaquã fica às margens do rio Camaquã e próxima da Lagoa dos Patos, na rota da BR-116 entre Porto Alegre e Pelotas. A economia é fortemente ligada à agropecuária — com destaque para o arroz, uma das principais lavouras do estado — somada a um comércio e setor de serviços que atendem toda a microrregião.',

  mercado:
    'Como polo de comércio e serviços do centro-sul do RS, Camaquã concentra a oferta fitness da microrregião. O personal training cresce ligado às academias do Centro e dos bairros, atendendo tanto quem busca musculação quanto treino funcional e acompanhamento individual.',

  bairrosNobres: ['Centro', 'Olaria', 'Santo Antônio'],
  bairrosPopulares: ['Cohab', 'Getúlio Vargas', 'São José'],

  parques: [
    {
      nome: 'Parque Estadual do Camaquã',
      descricao:
        'Unidade de conservação na foz do rio Camaquã, junto à Lagoa dos Patos, com um raro delta intralagunar — área natural de banhados e mata para contato com a natureza nas redondezas.',
    },
    {
      nome: 'Praças e orla do rio Camaquã',
      descricao:
        'Praças do Centro e os trechos junto ao rio servem de ponto de caminhada e atividade ao ar livre no dia a dia da cidade.',
    },
  ],
  ciclovias:
    'Cidade de relevo predominantemente plano, Camaquã é favorável ao deslocamento de bicicleta, bastante usada no dia a dia; a malha cicloviária ainda é pontual, concentrada em vias do Centro.',

  clima:
    'O clima é subtropical úmido, típico da metade sul gaúcha: verões quentes, invernos frios e úmidos e chuvas bem distribuídas ao longo do ano, com influência dos ventos da planície junto à Lagoa dos Patos.',
  climaTreino:
    'De outubro a abril, as condições para treino ao ar livre são boas, com atenção ao calor e à umidade no verão; no inverno, o frio e o vento úmido pedem agasalho e tendem a levar o treino para ambientes fechados.',

  mobilidade:
    'Cortada pela BR-116, Camaquã é um entroncamento do centro-sul do RS, a cerca de 125 km de Porto Alegre e de Pelotas e com acesso ao superporto de Rio Grande. A cidade é plana e compacta, o que facilita deslocamentos a pé e de bicicleta.',

  corridas: [
    {
      nome: 'Corridas de rua de Camaquã',
      descricao:
        'A cidade recebe provas e eventos de corrida de rua ao longo do ano, integrados ao calendário esportivo do interior gaúcho.',
    },
  ],
  culturaEsportiva:
    'Camaquã tem cultura ativa de caminhada e corrida, favorecida pelo relevo plano e pelas praças e vias do Centro. O futebol e os clubes locais também têm peso na vida esportiva da cidade.',
  academias:
    'A oferta reúne academias de musculação e estúdios de treino funcional no Centro e nos bairros, complementada pelo espaço das praças e da orla do rio para atividades ao ar livre.',

  destaquesFitness: [
    'Cidade plana e compacta, boa para caminhada, corrida e bicicleta.',
    'Parque Estadual do Camaquã e a natureza junto à Lagoa dos Patos nas redondezas.',
    'Praças do Centro e trechos junto ao rio Camaquã como pontos de treino ao ar livre.',
    'Polo regional do centro-sul gaúcho, que concentra a oferta fitness da microrregião.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 120,
    onlineMax: 330,
  },

  conclusao:
    'Plana e às margens do rio Camaquã, perto da Lagoa dos Patos, Camaquã é convidativa para caminhar, correr e pedalar. Um personal trainer ajuda a estruturar a rotina aproveitando as praças e a orla nos meses quentes e migrando para a academia no inverno frio e úmido da metade sul.',

  vizinhas: ['porto-alegre-rs', 'pelotas-rs', 'guaiba-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Camaquã', url: 'https://cidades.ibge.gov.br/brasil/rs/camaqua/panorama' },
    { nome: 'Prefeitura de Camaquã', url: 'https://www.camaqua.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
