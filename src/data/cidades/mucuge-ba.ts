import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'mucuge-ba',
  nome: 'Mucugê',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'mucugeense',
  tipo: 'cidade',

  populacao: 12137,
  populacaoAno: 2022,
  idhm: 0.611,
  idhmClasse: 'médio',
  altitudeM: 983,

  resumoEconomico:
    'Mucugê nasceu do garimpo: os primeiros diamantes de valor comercial da Bahia foram encontrados às margens do rio Cumbuca em 1844, e a cidade chegou a reunir cerca de 30 mil habitantes entre 1844 e 1848, no auge da corrida pelas pedras. A queda dos preços internacionais, pressionada pela concorrência das minas africanas, levou ao esvaziamento populacional, e entre as décadas de 1960 e 1970 parte da economia passou a girar em torno da coleta e comercialização da sempre-viva, flor nativa dos campos rupestres. Hoje o município vive principalmente do turismo histórico e de natureza ligado à Chapada Diamantina — Mucugê concentra 52% do território do Parque Nacional da Chapada Diamantina — e da agricultura irrigada: o polo agrícola formado com o vizinho Ibicoara tem uma das maiores densidades de pivôs centrais do país, gerando milhares de empregos diretos na produção de morango e outras frutas vermelhas, hortaliças e batata inglesa.',

  mercado:
    'O mercado fitness de Mucugê é bastante enxuto, compatível com uma cidade de pouco mais de 12 mil habitantes cuja economia gira em torno do turismo e da agricultura irrigada. A oferta se resume a poucas academias e a atendimentos particulares, com espaço para o personal trainer que atenda tanto moradores quanto visitantes interessados em preparo físico para trilhas, cachoeiras e as provas de corrida e aventura sediadas na cidade.',

  bairrosNobres: ['Centro Histórico'],
  bairrosPopulares: ['Guiné', 'João Correia'],

  parques: [
    {
      nome: 'Parque Nacional da Chapada Diamantina',
      descricao:
        'Mucugê abriga 52% do território da unidade de conservação, com acesso pela BA-142 (por volta do km 96) e trilhas na Serra do Sincorá que atraem trekking, observação de cachoeiras e canyoning.',
    },
    {
      nome: 'Parque Municipal de Mucugê',
      descricao:
        'A cerca de 4 km do centro da cidade, reúne trilhas, formações rochosas e cachoeiras que servem de extensão natural para caminhada e corrida em meio à Chapada.',
    },
    {
      nome: 'Cachoeira do Tiburtino e Projeto Sempre-Viva',
      descricao:
        'Trilha até uma das cachoeiras mais visitadas do entorno, integrada ao Projeto Sempre-Viva, iniciativa da própria cidade para conciliar turismo de natureza com a conservação da flor sempre-viva, antes explorada comercialmente na região.',
    },
  ],
  ciclovias:
    'Não há rede cicloviária urbana estruturada; o relevo da Serra do Sincorá e as trilhas do entorno concentram a prática de mountain bike, modalidade que ganhou tração na cidade com o Desafio Mucugê, prova de MTB de longa distância disputada nas trilhas ao redor do município.',

  clima:
    'Situada a 983 m de altitude, no coração da Chapada Diamantina, Mucugê tem clima mais ameno do que o litoral baiano, com temperaturas amenas ao longo do ano e noites frias. As chuvas se concentram entre novembro e março, enquanto o período mais seco, por volta de junho a agosto, costuma ser o mais procurado para turismo de aventura e trilhas.',
  climaTreino:
    'A altitude e o clima ameno favorecem o treino ao ar livre em praticamente qualquer horário do dia; ainda assim, a exposição solar intensa em trilhas abertas e a queda de temperatura à noite pedem atenção a protetor solar, hidratação e aquecimento antes de atividades como trekking e corrida em trilha.',

  mobilidade:
    'O acesso principal se dá pela BA-142, rodovia estadual que liga Mucugê a Andaraí (cerca de 50 km) e a Ibicoara, conectando o município à malha rodoviária da Chapada Diamantina; Salvador fica a aproximadamente 450 km. A cidade não tem aeroporto próprio — o mais próximo com voos regulares é o de Lençóis — e os deslocamentos internos, no casario de ruas de pedra do centro histórico, são feitos majoritariamente a pé ou de carro.',

  corridas: [
    {
      nome: 'Corrida Santa',
      descricao:
        'Prova de rua realizada em Mucugê durante a Semana Santa, com percursos de 7, 14, 21 e 42 km, unindo esporte à tradição religiosa da subida às cruzes da cidade.',
    },
    {
      nome: 'Running Daventura / Campeonato Baiano de Corrida de Aventura',
      descricao:
        'Etapa do Campeonato Baiano de Corrida de Aventura sediada em Mucugê, com provas de 51 km e 128 km que combinam trekking, mountain bike, canoagem e rapel usando técnicas de orientação com mapa e bússola pelas trilhas, rios e serras do entorno.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Mucugê gira em torno do turismo de natureza: trekking pelo Parque Nacional da Chapada Diamantina e pela Serra do Sincorá, banho em cachoeiras como a do Tiburtino, e mountain bike nas trilhas que servem de palco ao Desafio Mucugê. Essa vocação também sustenta provas de corrida de rua e de aventura sediadas na cidade, como a Corrida Santa e etapas do Campeonato Baiano de Corrida de Aventura.',
  academias:
    'A oferta de academias é pequena, concentrada no centro da cidade e voltada principalmente a musculação; parte do condicionamento físico de moradores e guias de turismo acontece de forma informal, aproveitando as trilhas e o relevo da Serra do Sincorá.',

  destaquesFitness: [
    'Concentra 52% do território do Parque Nacional da Chapada Diamantina, com trilhas na Serra do Sincorá.',
    'Altitude de 983 m garante clima ameno, favorável ao treino ao ar livre durante boa parte do ano.',
    'Sedia provas reais de corrida e aventura, como a Corrida Santa (7 a 42 km) e etapas do Campeonato Baiano de Corrida de Aventura (Running Daventura).',
    'Centro histórico tombado pelo IPHAN desde 1980, com o Cemitério de Santa Isabel (bizantino) e ruas de pedra que também servem de percurso para caminhada.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade histórica erguida sobre o ciclo do diamante e hoje voltada ao turismo de natureza e à agricultura irrigada, Mucugê oferece um cenário raro de trilhas, cachoeiras e altitude amena para quem treina ao ar livre. Um personal trainer pode ajudar a preparar o corpo para as exigências de trekking e provas de aventura sediadas na cidade, além de manter a constância do treino entre a rotina de moradores e o fluxo de visitantes da Chapada Diamantina.',

  vizinhas: ['lencois-ba', 'brumado-ba', 'vitoria-da-conquista-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Mucugê', url: 'https://cidades.ibge.gov.br/brasil/ba/mucuge/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'IPHAN — Conjunto Arquitetônico e Paisagístico de Mucugê', url: 'http://portal.iphan.gov.br/pagina/detalhes/480' },
  ],
  atualizadoEm: '2026-07-02',
};
