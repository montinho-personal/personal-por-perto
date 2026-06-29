import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'palhoca-sc',
  nome: 'Palhoça',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'palhocense',
  tipo: 'cidade',

  populacao: 222598,
  populacaoAno: 2022,
  idhm: 0.757,
  idhmClasse: 'alto',

  resumoEconomico:
    'Integrante da Região Metropolitana de Florianópolis e conurbada à capital, Palhoça é uma das cidades que mais crescem no Brasil, deixando de ser cidade-dormitório. A economia gira em torno de comércio, serviços, construção civil e tecnologia, com atrativos como as praias da Pinheira e Guarda do Embaú e o Parque Estadual da Serra do Tabuleiro.',

  mercado:
    'O mercado está em forte expansão, acompanhando o boom demográfico; o bairro planejado Pedra Branca concentra estúdios e academias premium, e a rede municipal de academias ao ar livre cresce.',

  bairrosNobres: ['Pedra Branca', 'Pagani', 'Passa Vinte', 'Ponte do Imaruim'],
  bairrosPopulares: ['Aririú', 'Barra do Aririú', 'Brejaru', 'Centro'],

  parques: [
    {
      nome: 'Lago da Pedra Branca',
      descricao:
        'No bairro planejado Pedra Branca, tem academia ao ar livre gratuita, pista e ruas compartilhadas para caminhada e corrida.',
    },
    {
      nome: 'Parque do Aririú',
      descricao:
        'Tem quadras, pista de ciclismo e lago, espaço de lazer e treino na cidade.',
    },
    {
      nome: 'Praia da Guarda do Embaú',
      descricao:
        'Primeira Reserva Mundial de Surfe do Brasil, ideal para corrida na areia e surfe, ao lado da Praia da Pinheira.',
    },
  ],
  ciclovias:
    'Há pista de ciclismo no Parque do Aririú e vias compartilhadas no bairro Pedra Branca; a extensão total da malha ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido litorâneo, com verão morno e abafado e inverno longo e ameno, com ventos.',
  climaTreino:
    'O inverno mais ameno torna o treino ao ar livre viável quase o ano todo; o verão úmido e a praia favorecem os horários de manhã cedo e fim de tarde.',

  mobilidade:
    'Palhoça é cortada pela BR-101 (eixo principal) e pela BR-282 (acesso à serra e ao interior), conurbada a Florianópolis.',

  corridas: [
    {
      nome: 'Meia Maratona de Palhoça',
      descricao:
        'Provas de 21 km, 10 km, 5 km e caminhada, com largada no bairro Pedra Branca.',
    },
    {
      nome: 'Pedra Branca Night Run',
      descricao:
        'Corrida noturna com 3,5 km, 5 km e 10 km, com largada no Parque dos Lagos, na Cidade Universitária Pedra Branca.',
    },
  ],
  culturaEsportiva:
    'A cena de corrida é ativa e concentrada na Pedra Branca (meia maratona e night run), com forte ligação aos esportes de praia e surfe na Guarda do Embaú.',
  academias:
    'A oferta reúne academias premium na Pedra Branca e estúdios, complementada pela praia, pela Serra do Tabuleiro e pela rede de academias ao ar livre.',

  destaquesFitness: [
    'Pedra Branca como epicentro fitness: bairro planejado com academias premium e eventos de corrida.',
    'Praias (Pinheira e Guarda do Embaú) para treino funcional na areia e esportes aquáticos.',
    'Crescimento demográfico explosivo — mercado em expansão acelerada para personal.',
    'Serra do Tabuleiro, que oferece trilhas para treino outdoor e trail running.',
  ],

  precos: {
    avulsaMin: 75,
    avulsaMax: 180,
    mensalMin: 380,
    mensalMax: 1000,
    onlineMin: 180,
    onlineMax: 450,
  },

  conclusao:
    'Uma das cidades que mais crescem no Brasil, Palhoça une o bairro planejado Pedra Branca, praias de surfe e a Serra do Tabuleiro. Um personal trainer encontra aqui um mercado em expansão acelerada, do estúdio premium ao treino na areia.',

  vizinhas: ['florianopolis-sc', 'sao-jose-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Palhoça', url: 'https://cidades.ibge.gov.br/brasil/sc/palhoca/panorama' },
    { nome: 'Prefeitura de Palhoça', url: 'https://www.palhoca.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
