import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'conceicao-do-mato-dentro-mg',
  nome: 'Conceição do Mato Dentro',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'conceicionense',
  tipo: 'cidade',

  populacao: 23163,
  populacaoAno: 2022,
  idhm: 0.634,
  idhmClasse: 'médio',
  altitudeM: 740,

  resumoEconomico:
    'Fundada no início do século XVIII no ciclo do ouro, Conceição do Mato Dentro fica na Serra do Espinhaço, cerca de 167 km ao norte de Belo Horizonte pela rodovia MG-010, no trecho que passa pela Serra do Cipó. A economia atual gira em torno da mineração de ferro: o Sistema Minas-Rio, da Anglo American, opera mina e usina de beneficiamento no município (com extensão para Alvorada de Minas) e alimenta o mineroduto de 529 km até o Porto do Açu, no Rio de Janeiro — um dos maiores investimentos de mineração do país. Ao lado da mineração, o turismo histórico e o ecoturismo ganham espaço, puxados pelo casario colonial, pelas igrejas barrocas do centro e por cachoeiras como a do Tabuleiro, a mais alta de Minas Gerais. A agropecuária de pequena escala completa a base econômica.',

  mercado:
    'O mercado fitness de Conceição do Mato Dentro é típico de uma cidade média do interior mineiro, com academias locais de musculação e treino funcional concentradas no centro e formadas majoritariamente por empreendimentos independentes, sem grandes redes nacionais. A presença de trabalhadores ligados à mineração e o fluxo de visitantes atraídos pelas cachoeiras e trilhas da região criam demanda tanto por treino de academia convencional quanto por preparo físico voltado a caminhada, trekking e atividades ao ar livre.',

  bairrosNobres: ['Centro Histórico', 'Bandeirinha'],
  bairrosPopulares: ['Costa Sena', 'Córregos', 'Santo Antônio do Rio Abaixo', 'Tabuleiro'],

  parques: [
    {
      nome: 'Cachoeira do Tabuleiro',
      descricao:
        'Com queda livre de 273 metros, é considerada a cachoeira mais alta de Minas Gerais e uma das mais altas do Brasil, eleita uma das "7 Maravilhas da Estrada Real". O acesso se dá por estrada de terra até o distrito do Tabuleiro, seguido de trilhas que atraem caminhantes e praticantes de trekking de vários estados.',
    },
    {
      nome: 'Proximidade com o Parque Nacional da Serra do Cipó',
      descricao:
        'Ainda que a sede administrativa do parque fique no vizinho município de Santana do Riacho, o território de Conceição do Mato Dentro se estende pela Serra do Espinhaço e compartilha paisagens de campos rupestres, trilhas e cachoeiras com a unidade de conservação, ampliando as opções de atividade física em contato com a natureza.',
    },
    {
      nome: 'Centro Histórico e Praça Nephtal Brandão',
      descricao:
        'O casario colonial e as igrejas barrocas do século XVIII, entre elas o Santuário do Bom Jesus de Matozinhos, formam o núcleo urbano onde moradores caminham e se exercitam nas ladeiras e ruas de pedra do centro.',
    },
  ],
  ciclovias:
    'Não há infraestrutura cicloviária urbana consolidada; o ciclismo na cidade acontece principalmente como mountain bike em estradas rurais e trilhas da Serra do Espinhaço, modalidade que ganhou força com a realização de provas específicas no município.',

  clima:
    'O clima é tropical de altitude, com temperatura média anual em torno de 21 °C, verão chuvoso e inverno seco — o período de abril a novembro costuma ser o mais indicado para trilhas, banho de cachoeira e atividades ao ar livre.',
  climaTreino:
    'A altitude de cerca de 740 m e as temperaturas amenas favorecem o treino ao ar livre durante boa parte do ano, mas o relevo montanhoso do entorno exige preparo físico para subidas e descidas; no período chuvoso (verão), trilhas e acessos de terra ficam mais escorregadios, o que pede atenção redobrada em atividades como caminhada e trekking.',

  mobilidade:
    'O acesso principal é a rodovia estadual MG-010, que liga Belo Horizonte ao município passando por Lagoa Santa, Confins, Jaboticatubas e Santana do Riacho, cruzando a Serra do Cipó. Dentro do território, o acesso a distritos e atrativos como o Tabuleiro se dá majoritariamente por estradas de terra, e o transporte coletivo urbano é limitado, com forte dependência de veículo próprio. A cidade também é ponto de partida do mineroduto do Sistema Minas-Rio, estrutura logística de 529 km até o Porto do Açu (RJ), reflexo do peso da mineração na economia local.',

  corridas: [
    {
      nome: 'Mato Dentro Outdoor Festival',
      descricao:
        'Festival multiesportivo realizado em Conceição do Mato Dentro, com provas de trail run, mountain bike e boulder disputadas nas paisagens de montanha da Serra do Espinhaço ao redor da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina o legado histórico do centro colonial com a vocação natural da Serra do Espinhaço: trekking até cachoeiras como a do Tabuleiro, mountain bike em estradas rurais e trilhas, e provas ao ar livre que aproveitam o relevo montanhoso, atraindo tanto moradores quanto visitantes e atletas de fora da região.',
  academias:
    'A oferta de academias é formada por estabelecimentos locais de musculação e treino funcional no centro da cidade, de porte compatível com um município de cerca de 23 mil habitantes, sem presença de grandes redes nacionais.',

  destaquesFitness: [
    'Cachoeira do Tabuleiro, com 273 m de queda livre, considerada a mais alta de Minas Gerais e destino de trekking de referência estadual.',
    'Território na Serra do Espinhaço, nas imediações do Parque Nacional da Serra do Cipó, com trilhas e paisagens de campo rupestre.',
    'Economia marcada pela mineração de ferro do Sistema Minas-Rio (Anglo American), ao lado do turismo histórico e ecoturismo.',
    'Altitude de cerca de 740 m e clima ameno, favoráveis à prática de atividades físicas ao ar livre na maior parte do ano.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 550,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Entre o casario colonial e a Serra do Espinhaço, Conceição do Mato Dentro reúne cachoeiras, trilhas e um relevo montanhoso que pedem preparo físico específico para trekking e caminhadas longas. Um personal trainer ajuda a estruturar esse condicionamento e a manter a constância do treino, seja na academia local, seja aproveitando o entorno natural que faz da cidade um destino de ecoturismo em Minas Gerais.',

  vizinhas: ['santana-do-riacho-mg', 'diamantina-mg', 'itabira-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Conceição do Mato Dentro', url: 'https://cidades.ibge.gov.br/brasil/mg/conceicao-do-mato-dentro/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Conceição do Mato Dentro', url: 'https://www.cmd.mg.gov.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
