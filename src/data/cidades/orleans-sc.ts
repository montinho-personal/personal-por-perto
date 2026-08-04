import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'orleans-sc',
  nome: 'Orleans',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'orleanense',
  tipo: 'cidade',

  populacao: 23661,
  populacaoAno: 2022,
  idhm: 0.76,
  idhmClasse: 'alto',
  altitudeM: 105,

  resumoEconomico:
    'Nas encostas da Serra Geral, no sul catarinense, Orleans nasceu da imigração italiana — com contribuições alemãs, polonesas e letãs — e vive hoje de uma indústria diversificada que responde por cerca de 40% dos empregos, ao lado de comércio forte e agricultura familiar. O patrimônio da colonização, preservado no museu ao ar livre da cidade, é referência nacional da memória imigrante.',

  mercado:
    'A renda industrial e o perfil de cidade universitária — Orleans sedia campus universitário que atrai jovens da região — sustentam academias movimentadas e uma demanda crescente por treino orientado, com o relevo de encosta da Serra Geral como cenário natural.',

  bairrosNobres: ['Centro', 'Alto Paraná', 'Conde D’Eu', 'Murialdo'],
  bairrosPopulares: ['Coloninha', 'Sagrado Coração', 'Barra do Rio Laranjeiras', 'Boa Vista'],

  parques: [
    {
      nome: 'Encostas da Serra Geral',
      descricao:
        'As subidas em direção à serra — com a Serra do Rio do Rastro na vizinhança regional — rendem pedais desafiadores e caminhadas com desnível de verdade.',
    },
    {
      nome: 'Museu ao ar livre e patrimônio da imigração',
      descricao:
        'O complexo do museu ao ar livre, referência nacional da memória da colonização, integra caminhadas culturais em meio ao verde na borda da cidade.',
    },
    {
      nome: 'Praças centrais e margens do rio Tubarão',
      descricao:
        'O centro compacto e as margens do rio concentram a caminhada diária e a vida comunitária da cidade.',
    },
  ],
  ciclovias:
    'O ciclismo de estrada é forte nas rotas de serra da região; a malha cicloviária urbana ainda é limitada e sem extensão oficial divulgada.',

  clima:
    'Clima subtropical úmido de encosta: verões quentes, invernos frios e chuva bem distribuída, com a serra condicionando o tempo.',
  climaTreino:
    'No verão, treina-se nas pontas do dia; no inverno, o meio do dia é a melhor janela — e a academia coberta é o plano B das semanas de chuva.',

  mobilidade:
    'Pela SC-108 e pelas rodovias do sul catarinense, Orleans se conecta a Braço do Norte, Tubarão e Criciúma — o eixo industrial da região funciona de forma integrada.',

  corridas: [
    {
      nome: 'Provas do sul catarinense',
      descricao:
        'O calendário de corridas da região circula por Tubarão, Criciúma e cidades vizinhas, com percursos de 5 km e 10 km ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A herança da imigração se traduz em vida comunitária ativa — sociedades, ginásios e festas — e o esporte acompanha, do futsal à corrida de rua e ao pedal de serra.',
  academias:
    'A oferta reúne academias de musculação e personal trainers no centro e nos bairros, com o público universitário somando demanda jovem ao mercado local.',

  destaquesFitness: [
    'Encostas da Serra Geral como resistência natural para pedais e caminhadas.',
    'Renda industrial estável que sustenta o mercado de treino.',
    'Campus universitário com público jovem e ativo.',
    'Patrimônio da imigração e caminhadas culturais no museu ao ar livre.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade da imigração nas encostas da Serra Geral, Orleans une indústria forte, memória preservada e um relevo que desafia qualquer treino. Um personal trainer transforma as subidas da serra e a rotina da cidade em condicionamento com método.',

  vizinhas: ['braco-do-norte-sc', 'tubarao-sc', 'criciuma-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Orleans', url: 'https://cidades.ibge.gov.br/brasil/sc/orleans/panorama' },
    { nome: 'Prefeitura de Orleans', url: 'https://pmo.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-04',
};
