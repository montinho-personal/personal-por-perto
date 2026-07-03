import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'monte-belo-do-sul-rs',
  nome: 'Monte Belo do Sul',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'monte-belense',
  tipo: 'cidade',

  populacao: 2557,
  populacaoAno: 2022,
  idhm: 0.752,
  idhmClasse: 'alto',
  altitudeM: 618,

  resumoEconomico:
    'Monte Belo do Sul é um dos menores municípios da Serra Gaúcha, no coração da região vinícola do Vale dos Vinhedos — a primeira Denominação de Origem de vinhos do Brasil. Colonizado a partir de 1877 por famílias vindas da Itália, em um caso raro de colonização inteiramente italiana, o município preserva o Talian, dialeto dos imigrantes, e é considerado o maior produtor per capita de uvas finas da América Latina, além de concentrar a maior produção de vinhos naturais do país. A primeira vinícola registrada no Rio Grande do Sul, a Vinícola Francioni, nasceu ali, e hoje cerca de uma dezena de vinícolas familiares recebem visitantes para degustação em meio aos vinhedos. O turismo enológico é recente — ganhou força a partir de 2017 — e convive com a agricultura, que segue como principal atividade econômica do município.',

  mercado:
    'Com pouco mais de 2,5 mil habitantes, Monte Belo do Sul não sustenta uma rede própria de academias: a oferta se limita a poucos espaços locais de musculação, e quem busca estrutura maior ou modalidades específicas costuma se deslocar até Bento Gonçalves, a cerca de 18 km pela RS-444. Nesse contexto, o personal trainer com atendimento domiciliar ou em pequenos espaços particulares é a alternativa mais prática para treinar sem depender de deslocamento, especialmente entre famílias ligadas à produção de uva e vinho, cuja rotina segue o calendário da vindima e da colheita.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Linha Leopoldina', 'Linha Armênio', 'Linha Colussi', 'Linha 2ª Secção'],

  parques: [
    {
      nome: 'Praça central e casario histórico',
      descricao:
        'O pequeno centro da cidade, no alto de uma colina, reúne a praça, a igreja e o casario colonial de imigração italiana; é o ponto de encontro e caminhada mais usado por moradores, com vista para os vinhedos ao redor.',
    },
    {
      nome: 'Estradas rurais entre os vinhedos',
      descricao:
        'Os cerca de 2.300 hectares de vinhas que cobrem o relevo ondulado do município são cortados por estradas de chão e asfalto, roteiro natural para caminhada, corrida leve e passeios de bicicleta entre pequenas vinícolas familiares.',
    },
    {
      nome: 'Vale dos Vinhedos',
      descricao:
        'Monte Belo do Sul integra a região da primeira Denominação de Origem de vinhos do Brasil, com paisagem de colinas e parreirais compartilhada com Bento Gonçalves e Garibaldi, cenário de passeios a pé e de bike entre cantinas.',
    },
  ],
  ciclovias:
    'O município não tem ciclovias estruturadas; o pedal e a caminhada acontecem nas estradas rurais entre os vinhedos, terreno ondulado bastante usado por visitantes em passeios de bicicleta entre as vinícolas.',

  clima:
    'O clima é subtropical úmido, com verões amenizados pela altitude (618 m) e invernos frios, por vezes com geada, acentuados pela altitude e por ventos constantes característicos da Serra Gaúcha.',
  climaTreino:
    'Nas manhãs de inverno, o frio e a eventual geada pedem aquecimento mais longo e agasalho para caminhar, correr ou pedalar pelas estradas rurais; no verão, mais ameno que o das terras baixas do estado, as primeiras horas do dia seguem sendo a janela mais confortável para treinar ao ar livre.',

  mobilidade:
    'Monte Belo do Sul faz divisa com Cotiporã, Bento Gonçalves e Santa Tereza, e o acesso à sede é feito pela RS-444, a estrada do Vale dos Vinhedos, que liga o município a Bento Gonçalves em cerca de 18 km. Porto Alegre fica a pouco mais de 130 km, viagem de cerca de 2 horas. Não há transporte coletivo urbano estruturado, e o deslocamento entre o centro e as linhas rurais depende basicamente de veículo próprio.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva de Monte Belo do Sul é rural e comunitária, moldada pelo calendário da vindima: a Festa de Abertura da Vindima reúne a comunidade em torno da colheita da uva, da pisa coletiva e da enogastronomia, celebrando a herança dos imigrantes italianos. Caminhada e bicicleta entre os vinhedos fazem parte da rotina de moradores e do roteiro oferecido a visitantes, enquanto a corrida de rua propriamente dita não tem prova organizada no município.',
  academias:
    'A oferta de academias dentro do município é pequena, compatível com uma população de pouco mais de 2,5 mil habitantes; quem busca treinar em estrutura de academia mais completa costuma se deslocar até Bento Gonçalves.',

  destaquesFitness: [
    'Maior produtor per capita de uvas finas da América Latina, no coração da D.O. Vale dos Vinhedos.',
    'Colonização inteiramente italiana desde 1877, que preserva o Talian e celebra a Festa da Vindima.',
    'Estradas rurais entre os cerca de 2.300 hectares de vinhedos, usadas para caminhada, corrida leve e passeios de bicicleta.',
    'Cidade pequena sem rede própria de academias, o que torna o personal trainer com atendimento domiciliar a alternativa mais prática.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Pequena e vinícola, Monte Belo do Sul tem nas estradas rurais entre os parreirais e na praça central do alto da colina seus principais espaços de treino ao ar livre, sem contar com uma rede própria de academias. Um personal trainer com atendimento domiciliar ajuda a manter a constância nesse contexto, respeitando os invernos frios da Serra Gaúcha e a rotina de quem trabalha na vinha e nas pequenas vinícolas familiares.',

  vizinhas: ['bento-goncalves-rs', 'garibaldi-rs', 'caxias-do-sul-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Monte Belo do Sul', url: 'https://cidades.ibge.gov.br/brasil/rs/monte-belo-do-sul/panorama' },
    { nome: 'Prefeitura de Monte Belo do Sul', url: 'https://www.montebelodosul.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
