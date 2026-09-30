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

  academiasProximas: [
    { nome: 'Smart Fit Palhoça', detalhe: 'na Av. Atílio Pedro Pagani, no Pagani' },
    { nome: 'Skyfit Palhoça', detalhe: 'no Pedra Branca' },
    { nome: 'Pratique Fitness Palhoça', detalhe: 'no Passa Vinte' },
    { nome: 'Live Sports Center', detalhe: 'no Passeio Pedra Branca' },
  ],
  academiasVerificadasEm: '2026-09-08',

  /*
   * Busca dominante da página: "consultoria online musculacao palhoca" —
   * 250 das 371 impressões de 01/06 a 29/09/2026, posição 7,5 e nenhum
   * clique (relatório em docs/relatorios/2026-09-30-gsc-desempenho/). O
   * título gerado prometia "quanto custa a aula", que não é o que essa busca
   * pede. Title com 53 caracteres; description com 152.
   */
  metaTitulo: 'Personal Trainer e Consultoria Online em Palhoça (SC)',
  metaDescricao:
    'Consultoria online de musculação em Palhoça: de R$ 180 a R$ 450 por mês. O presencial, de R$ 75 a R$ 180 a aula. Onde treinar na cidade e como escolher.',

  faqsExtra: [
    {
      pergunta: 'Como funciona a consultoria online de musculação em Palhoça?',
      resposta:
        'Você continua treinando onde já treina — numa academia da Pedra Branca ou do Pagani, no condomínio ou em casa — e o profissional monta e acompanha o treino à distância: avaliação inicial, planilha com séries e cargas, vídeo de execução dos exercícios e revisão periódica conforme a evolução. Em Palhoça, a faixa de mercado fica entre R$ 180 e R$ 450 por mês, contra R$ 380 a R$ 1.000 do pacote presencial com duas ou três sessões por semana. O que o online não entrega é a correção ao vivo: quem nunca treinou ganha em começar com algumas aulas presenciais, e quem sente dor deve passar antes por médico ou fisioterapeuta. O Montinho Personal, destacado pelo portal, atende nesse formato em todo o Brasil.',
    },
  ],

  capaArte: {
    src: '/capas-cidade/palhoca-sc.webp',
    w: 1200,
    h: 675,
    alt: 'Personal trainer em Palhoça (SC) em arte com a orla, a passarela e o mar da praia, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Palhoça: foco, disciplina e resultados na Grande Florianópolis.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Palhoça', url: 'https://cidades.ibge.gov.br/brasil/sc/palhoca/panorama' },
    { nome: 'Prefeitura de Palhoça', url: 'https://www.palhoca.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-30',
};
