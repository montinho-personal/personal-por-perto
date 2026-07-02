import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'mirassol-sp',
  nome: 'Mirassol',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'mirassolense',
  tipo: 'cidade',

  populacao: 63337,
  populacaoAno: 2022,
  idhm: 0.762,
  idhmClasse: 'alto',
  altitudeM: 587,

  resumoEconomico:
    'No noroeste paulista, a cerca de 15 km de São José do Rio Preto e cortada pela Rodovia Washington Luís (SP-310), Mirassol é um dos maiores polos moveleiros do Brasil: ao lado da vizinha Votuporanga, concentra dezenas de fábricas de móveis residenciais e corporativos, com destaque para a produção de racks, painéis, guarda-roupas e estofados. Depois dos móveis, o comércio, os serviços e a administração pública respondem pela maior fatia do PIB municipal, que soma cerca de R$ 2,7 bilhões. A cidade também ganhou projeção nacional com o Mirassol Futebol Clube, que disputa a Série A do Campeonato Brasileiro com jogos no remodelado Estádio Municipal José Maria de Campos Maia, o "Maião".',

  mercado:
    'O mercado de personal trainers em Mirassol reflete o perfil de uma cidade média em rápido crescimento, impulsionada pela indústria moveleira e pela proximidade com São José do Rio Preto. A oferta reúne redes de academia, estúdios de treino personalizado e profissionais autônomos que atendem em domicílio, em condomínios fechados e em espaços públicos como o Parque da Grota, atendendo tanto trabalhadores do polo industrial quanto moradores dos condomínios residenciais que se multiplicaram nos últimos anos.',

  bairrosNobres: ['Centro', 'Terras Alphaville Mirassol', 'Village Damha', 'Setlife Mirassol'],
  bairrosPopulares: ['Cohab I', 'Vila Moreira', 'Bela Vista', 'Conjunto Habitacional Reynaldo Trovo'],

  parques: [
    {
      nome: 'Parque Natural Municipal da Grota de Mirassol',
      descricao:
        'Com cerca de 21 hectares, protege um dos últimos fragmentos de mata estacional semidecidual do noroeste paulista, reunindo trilhas, lagoas e nascentes usadas para caminhada, observação de aves e atividades ao ar livre; passa por revitalização com o projeto Trilha do Conhecimento.',
    },
    {
      nome: 'Praça Anísio José Moreira',
      descricao:
        'Praça central que serve de ponto de largada e chegada de corridas de rua da cidade, como a Corrida da Independência, funcionando também como espaço de caminhada e convivência.',
    },
  ],

  clima:
    'O clima é tropical (Aw), com verão quente e chuvoso — de dezembro a março, com picos de chuva em janeiro — e inverno mais seco e ameno, com temperaturas mínimas em torno de 16 °C a 18 °C entre junho e agosto. A temperatura média anual fica perto de 23,5 °C, em padrão semelhante ao da vizinha São José do Rio Preto.',
  climaTreino:
    'O calor e a umidade do verão pedem treinos nos horários mais frescos do dia e hidratação reforçada, enquanto o inverno seco e ameno costuma ser o período mais convidativo para atividades ao ar livre no Parque da Grota e nas praças da cidade.',

  mobilidade:
    'Mirassol é ponto de partida da Rodovia Euclides da Cunha (SP-320), que liga a cidade a Votuporanga, Fernandópolis e Jales, e tem acesso direto pela Rodovia Washington Luís (SP-310), que conecta o município a São José do Rio Preto em poucos minutos. A região também é servida pela Rodovia Assis Chateaubriand (SP-425). O transporte coletivo urbano é feito por ônibus, e a proximidade com Rio Preto faz de Mirassol parte da conurbação econômica do polo regional.',

  corridas: [
    {
      nome: 'Corrida da Independência de Mirassol',
      descricao:
        'Prova anual com percurso de 5 km, corridas kids e caminhada de 3 km para a terceira idade, com largada e chegada na Praça Anísio José Moreira.',
    },
    {
      nome: 'Corrida do Centenário de Mirassol',
      descricao:
        'Prova comemorativa do Mirassol Futebol Clube, com percursos de 5 km e 10 km e largada em frente ao Estádio Municipal José Maria de Campos Maia, o "Maião".',
    },
  ],
  culturaEsportiva:
    'O futebol é o centro da vida esportiva da cidade: o Mirassol Futebol Clube, fundado em 1925, chegou à Série A do Campeonato Brasileiro e mobiliza a torcida no Estádio Municipal José Maria de Campos Maia. Ao lado da paixão pelo futebol, cresce a procura por corridas de rua e pelo uso do Parque da Grota para caminhada e atividades ao ar livre.',
  academias:
    'A oferta combina redes com unidade na cidade, como Panobianco e Companhia Athletica, academias locais de musculação e treino funcional e estúdios voltados a atendimento personalizado, concentrados principalmente no Centro e nos bairros residenciais.',

  destaquesFitness: [
    'Um dos maiores polos moveleiros do Brasil, ao lado da vizinha Votuporanga.',
    'Parque Natural Municipal da Grota de Mirassol, com trilhas e nascentes para atividade ao ar livre.',
    'Cidade do Mirassol Futebol Clube, que disputa a Série A no Estádio José Maria de Campos Maia.',
    'Acesso direto pela SP-310 a São José do Rio Preto e ponto de partida da SP-320 rumo ao noroeste paulista.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Impulsionada pela indústria moveleira e pela proximidade com São José do Rio Preto, Mirassol cresce rápido e oferece boas opções para treinar, do Parque da Grota aos condomínios residenciais. Um personal trainer ajuda a organizar a rotina de treino considerando o calor do verão, a correria do polo industrial e o clima esportivo trazido pela ascensão do Mirassol Futebol Clube.',

  vizinhas: ['sao-jose-do-rio-preto-sp', 'jaboticabal-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Mirassol', url: 'https://cidades.ibge.gov.br/brasil/sp/mirassol/panorama' },
    { nome: 'Prefeitura de Mirassol', url: 'https://www.mirassol.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
