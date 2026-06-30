import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'penapolis-sp',
  nome: 'Penápolis',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'penapolense',
  tipo: 'cidade',

  populacao: 61679,
  populacaoAno: 2022,
  idhm: 0.759,
  idhmClasse: 'alto',
  altitudeM: 416,

  resumoEconomico:
    'No noroeste paulista, a cerca de 480 km da capital, Penápolis nasceu em 1908 ligada à expansão da Estrada de Ferro Noroeste do Brasil e à frente cafeeira que avançou pelo oeste do estado. Hoje a economia tem forte base no agronegócio, com destaque para a cana-de-açúcar e o setor sucroenergético (com unidades industriais na região), além de indústrias de segmentos variados como curtume, calçados, confecção e implementos agrícolas. O setor de serviços e a administração pública respondem pela maior parte do valor adicionado do município.',

  mercado:
    'Como cidade média do interior paulista, Penápolis tem um mercado fitness consolidado para o seu porte, formado por academias de musculação e treino funcional, estúdios e profissionais autônomos. A procura por personal trainers acompanha a tendência das cidades médias da região, com público que busca acompanhamento individualizado tanto em ambiente fechado quanto ao ar livre, aproveitando praças e áreas verdes.',

  bairrosNobres: ['Centro', 'Jardim Eldorado', 'Santa Lúcia', 'São Vicente'],
  bairrosPopulares: ['São Bernardo', 'Santa Terezinha', 'Jardim Bandeirantes', 'Vila Maria'],

  parques: [
    {
      nome: 'Parque Municipal Recanto Verde (Mata do Patronato)',
      descricao:
        'Área verde no coração da cidade, cercada por bairros residenciais, com dezenas de hectares de mata nativa destinados ao lazer e à convivência. É um dos principais espaços para caminhada e contato com a natureza dentro da malha urbana.',
    },
    {
      nome: 'Praças centrais',
      descricao:
        'O conjunto de praças do Centro, como a Praça 9 de Julho, reúne arborização e calçadas usadas por moradores para caminhadas e momentos ao ar livre, em pontos de encontro tradicionais da cidade.',
    },
    {
      nome: 'Orla do rio Tietê / represa de Nova Avanhandava',
      descricao:
        'O distrito de Penápolis às margens do rio Tietê conta com praias de água doce e lagos formados pela represa da usina de Nova Avanhandava, espaço de lazer, esporte náutico e atividade ao ar livre na região.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é típica de cidade média do interior, concentrada em alguns corredores e avenidas; boa parte do pedal e da corrida acontece nas vias urbanas e nas áreas de lazer próximas às praças e à mata municipal.',

  clima:
    'O clima é tropical com inverno seco (tipo Aw), característico do noroeste paulista: verões quentes e chuvosos, de outubro a março, e invernos mais secos e amenos, de abril a setembro. Os dias de calor são frequentes na primavera e no verão, quando as temperaturas podem ficar elevadas à tarde.',
  climaTreino:
    'Nos meses mais quentes, o ideal é treinar no início da manhã ou no fim da tarde, com boa hidratação; o período seco do inverno costuma ser o mais confortável para atividade ao ar livre, ainda que o ar mais seco peça atenção redobrada com a hidratação.',

  mobilidade:
    'Penápolis é cortada pela Rodovia Marechal Rondon (SP-300), eixo que liga a cidade a Araçatuba, Birigui e à região de Bauru, e mantém a herança ferroviária da antiga Noroeste do Brasil. O transporte urbano é feito por ônibus, e a posição na rodovia facilita o deslocamento entre os municípios vizinhos do noroeste paulista.',

  corridas: [
    {
      nome: 'Provas de corrida de rua do calendário regional',
      descricao:
        'A cidade e os municípios vizinhos do noroeste paulista recebem provas de corrida de rua ao longo do ano, integrando o calendário esportivo regional que movimenta corredores da microrregião.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva penapolense mistura o uso das praças e da mata municipal para caminhada e corrida, o lazer às margens do rio Tietê e a tradição esportiva da cidade, com clubes e eventos que reúnem a comunidade.',
  academias:
    'A oferta é formada principalmente por academias de musculação e treino funcional, estúdios e profissionais autônomos, distribuídos pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior.',

  destaquesFitness: [
    'Parque Municipal Recanto Verde (Mata do Patronato) como área verde para caminhada dentro da cidade.',
    'Lazer e esporte às margens do rio Tietê e da represa de Nova Avanhandava.',
    'Clima tropical de inverno seco, que favorece o treino ao ar livre nos meses mais amenos.',
    'Cidade média do noroeste paulista, com economia ligada ao agronegócio e ao setor sucroenergético.',
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
    'Cidade média do noroeste paulista, com praças arborizadas, mata municipal e a orla do rio Tietê por perto, Penápolis oferece bons espaços para quem quer treinar dentro e fora da academia. Um personal trainer ajuda a organizar a rotina respeitando o clima quente do verão, escolhendo os melhores horários e mantendo a constância ao longo do ano.',

  vizinhas: ['aracatuba-sp', 'birigui-sp', 'lins-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Penápolis', url: 'https://cidades.ibge.gov.br/brasil/sp/penapolis/panorama' },
    { nome: 'Prefeitura de Penápolis', url: 'https://www.penapolis.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
