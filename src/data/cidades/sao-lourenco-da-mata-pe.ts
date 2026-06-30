import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-lourenco-da-mata-pe',
  nome: 'São Lourenço da Mata',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'são-lourenciano',
  tipo: 'cidade',

  populacao: 111249,
  populacaoAno: 2022,
  idhm: 0.653,
  idhmClasse: 'médio',
  altitudeM: 23,

  resumoEconomico:
    'Integrante da Região Metropolitana do Recife, São Lourenço da Mata fica a cerca de 20 km da capital, cortada pelo rio Capibaribe, que foi decisivo em sua formação durante o período colonial. A economia tem forte ligação histórica com a atividade sucroalcooleira — as antigas usinas e engenhos marcaram o território — e hoje gira em torno do setor de serviços, do comércio e de uma indústria em crescimento. O município ganhou projeção nacional ao sediar a Arena de Pernambuco, palco da Copa do Mundo de 2014, em torno da qual se desenvolveu o projeto urbano conhecido como Cidade da Copa.',

  mercado:
    'O mercado de personal trainers acompanha a lógica metropolitana da Grande Recife: há academias de rede e de bairro concentradas no Centro e nos núcleos mais adensados, além de atendimento em condomínios e em áreas residenciais que cresceram no entorno da Arena de Pernambuco. A conurbação com Camaragibe, Jaboatão dos Guararapes e Recife amplia a oferta de profissionais e facilita o deslocamento de quem busca acompanhamento especializado.',

  bairrosNobres: ['Centro', 'Tiúma', 'Cidade da Copa', 'Parque Capibaribe'],
  bairrosPopulares: ['Matriz', 'Pilar', 'Chã de Cruz', 'Várzea do Una'],

  parques: [
    {
      nome: 'Entorno da Arena de Pernambuco',
      descricao:
        'Área da Cidade da Copa, com vias largas e espaços abertos no entorno do estádio que sediou a Copa do Mundo de 2014, usados para caminhada, corrida e treino ao ar livre.',
    },
    {
      nome: 'Margens do rio Capibaribe',
      descricao:
        'O rio que atravessa o município oferece trechos de orla e áreas ribeirinhas que servem de referência para caminhadas e atividade física em contato com a paisagem.',
    },
    {
      nome: 'Praças e academias ao ar livre',
      descricao:
        'Praças do Centro e dos bairros contam com aparelhos de ginástica e espaços para treino funcional e caminhada no dia a dia.',
    },
  ],
  ciclovias:
    'O ciclismo urbano se apoia em vias locais e no eixo da BR-408; a malha cicloviária estruturada ainda é limitada, e parte dos ciclistas usa rotas compartilhadas dentro do município e em direção às cidades vizinhas da região metropolitana.',

  clima:
    'O clima é tropical quente e úmido, típico da Região Metropolitana do Recife, com calor o ano todo e chuvas concentradas no outono e inverno, sobretudo entre março e agosto.',
  climaTreino:
    'O treino ao ar livre rende mais cedo pela manhã ou no fim de tarde, sempre com hidratação reforçada por conta do calor e da umidade elevada; nos meses mais chuvosos, vale combinar atividades em ambiente coberto.',

  mobilidade:
    'A BR-408 é o principal eixo de mobilidade, ligando São Lourenço da Mata a Camaragibe, Recife e ao restante da Região Metropolitana do Recife, com forte conurbação entre os municípios. A cidade é atendida pela linha férrea/metropolitana da Grande Recife, e o deslocamento se apoia também em ônibus metropolitanos e veículos particulares.',

  corridas: [
    {
      nome: 'Corridas e caminhadas comunitárias',
      descricao:
        'Provas e caminhadas organizadas por grupos locais e pela prefeitura usam ruas do Centro e dos bairros, reunindo corredores da cidade e da região.',
    },
    {
      nome: 'Eventos do calendário metropolitano',
      descricao:
        'Corredores de São Lourenço da Mata também participam de provas de rua em Recife, Jaboatão dos Guararapes e Camaragibe, aproveitando a integração pela BR-408.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva tem no futebol uma marca forte, reforçada pela presença da Arena de Pernambuco, e combina campos e quadras de bairro com o uso crescente de praças e áreas abertas para caminhada e corrida. A integração com a Grande Recife dá acesso a um calendário maior de eventos esportivos.',
  academias:
    'A oferta reúne academias de rede e de bairro no Centro e nos núcleos mais adensados, complementadas por estúdios de treino funcional e pelos espaços públicos com aparelhos ao ar livre.',

  destaquesFitness: [
    'Arena de Pernambuco e a Cidade da Copa, com áreas abertas para corrida e treino ao ar livre.',
    'Margens do rio Capibaribe como cenário para caminhadas e atividade física.',
    'Conurbação com Recife, Camaragibe e Jaboatão amplia a oferta de profissionais e eventos.',
    'BR-408 e a linha metropolitana como eixos de integração para corridas e ciclismo na região.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 350,
  },

  conclusao:
    'Entre a herança sucroalcooleira às margens do Capibaribe e a modernidade da Arena de Pernambuco, São Lourenço da Mata oferece cenários variados para treinar, do Centro às áreas abertas da Cidade da Copa. Um personal trainer ajuda a transformar essa geografia em um plano consistente, respeitando o clima quente e úmido e o seu objetivo.',

  vizinhas: ['recife-pe', 'camaragibe-pe', 'jaboatao-dos-guararapes-pe'],

  fontes: [
    { nome: 'IBGE Cidades — São Lourenço da Mata', url: 'https://cidades.ibge.gov.br/brasil/pe/sao-lourenco-da-mata/panorama' },
    { nome: 'Prefeitura de São Lourenço da Mata', url: 'https://saolourencodamata.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
