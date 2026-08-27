import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'novo-hamburgo-rs',
  nome: 'Novo Hamburgo',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'hamburguense',
  tipo: 'cidade',

  populacao: 239051,
  populacaoAno: 2022,
  idhm: 0.747,
  idhmClasse: 'alto',
  altitudeM: 57,

  resumoEconomico:
    'Coração do Vale dos Sinos e tradicional polo coureiro-calçadista do Brasil (palco da feira Fenac e do Museu do Calçado), Novo Hamburgo integra a Região Metropolitana de Porto Alegre. A economia é diversificada entre indústria, comércio e serviços.',

  mercado:
    'Cidade metropolitana com bom poder aquisitivo, Novo Hamburgo tem rede consolidada de academias e estúdios; a cultura de treino indoor é reforçada pelo inverno frio, enquanto o Parcão sustenta o treino ao ar livre nas meias-estações.',

  bairrosNobres: ['Centro', 'Hamburgo Velho', 'Ideal', 'Rondônia'],
  bairrosPopulares: ['Canudos', 'Santo Afonso', 'Liberdade', 'Operário'],

  parques: [
    {
      nome: 'Parque Municipal Henrique Luís Roessler (Parcão)',
      descricao:
        'Mais de 50 hectares em Hamburgo Velho, com trilhas ecológicas, quadras, academia ao ar livre e playground; entrada gratuita.',
    },
    {
      nome: 'Margens do Rio dos Sinos',
      descricao:
        'Área para caminhada e ciclismo ao longo do rio que dá nome ao vale.',
    },
    {
      nome: 'Praças e parques do Centro/Hamburgo Velho',
      descricao:
        'Espaços com estrutura de lazer no bairro histórico, usados para caminhada e atividade ao ar livre.',
    },
  ],
  ciclovias:
    'A cidade tem malha cicloviária urbana; a extensão total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido, com verões quentes e úmidos e invernos frios, com possibilidade de geada (médias abaixo de 16 °C no inverno).',
  climaTreino:
    'No inverno, há maior procura por treino indoor e musculação; nas meias-estações, o treino ao ar livre é confortável e o Parcão se torna o ponto principal.',

  mobilidade:
    'Novo Hamburgo é cortada pela BR-116 (principal eixo norte-sul) e pela RS-239, e é integrada à Grande Porto Alegre pelo trem metropolitano (Trensurb).',

  corridas: [
    {
      nome: 'Circuito Juntos de Corrida de Rua',
      descricao:
        'Etapa de Novo Hamburgo que reúne cerca de mil atletas, com provas de 5 km e 10 km.',
    },
    {
      nome: 'Fashion Night Run',
      descricao:
        'Corrida noturna que encerra o circuito local de corridas, com cerca de 900 participantes.',
    },
  ],
  culturaEsportiva:
    'O Vale dos Sinos tem forte tradição futebolística e uma comunidade de corrida de rua ativa, com circuitos próprios; o público está acostumado a academias e treino indoor no inverno.',
  academias:
    'A oferta reúne academias e estúdios consolidados, com bom poder de compra metropolitano, complementada pelo Parcão e pelas margens do Rio dos Sinos.',

  academiasProximas: [
    { nome: 'Smart Fit Novo Hamburgo', detalhe: 'na Rua Primeiro de Março, no Centro' },
    { nome: 'Smart Fit Stok Center Novo Hamburgo' },
  ],

  destaquesFitness: [
    'Parcão como referência de treino ao ar livre (trilhas e academia pública).',
    'Inverno frio que impulsiona musculação e treino indoor.',
    'Circuitos de corrida estabelecidos (Juntos, Fashion Night Run).',
    'Cidade metropolitana com infraestrutura e poder de compra.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 170,
    mensalMin: 360,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Polo coureiro-calçadista do Vale dos Sinos, Novo Hamburgo une infraestrutura metropolitana, o Parcão e uma cena de corrida ativa. Um personal trainer ajuda a equilibrar o treino indoor do inverno frio com o outdoor das meias-estações, de forma consistente o ano todo.',

  vizinhas: ['porto-alegre-rs', 'canoas-rs', 'caxias-do-sul-rs'],

  capaArte: {
    src: '/capas-cidade/novo-hamburgo-rs.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em Novo Hamburgo (RS) em arte quadrada com o sapato símbolo do Museu Nacional do Calçado, o parque municipal e o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Novo Hamburgo: foco, disciplina e constância com acompanhamento profissional no Vale dos Sinos.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Novo Hamburgo', url: 'https://cidades.ibge.gov.br/brasil/rs/novo-hamburgo/panorama' },
    { nome: 'Prefeitura de Novo Hamburgo', url: 'https://www.novohamburgo.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-27',
};
