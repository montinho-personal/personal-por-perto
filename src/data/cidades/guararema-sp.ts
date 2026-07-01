import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'guararema-sp',
  nome: 'Guararema',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'guararemense',
  tipo: 'cidade',

  populacao: 31236,
  populacaoAno: 2022,
  idhm: 0.731,
  idhmClasse: 'alto',
  altitudeM: 585,

  resumoEconomico:
    'Na divisa entre a Região Metropolitana de São Paulo (Alto Tietê) e o Vale do Paraíba, Guararema é conhecida como a "Cidade das Árvores" e virou queridinha do turismo de fim de semana pela proximidade com a capital (cerca de 80 km) e pelo casario histórico. A economia é diversificada, com indústria em crescimento — o distrito industrial fica no entroncamento da Rodovia Presidente Dutra com o complexo Ayrton Senna/Carvalho Pinto —, comércio, serviços e turismo religioso e rural. A agropecuária, antes principal atividade, hoje se concentra em flores e frutas, com destaque para o caqui e a tangerina.',

  mercado:
    'Por ser um município pequeno e com forte apelo de qualidade de vida, o mercado fitness de Guararema é enxuto e ligado ao estilo de vida ao ar livre que atrai novos moradores em busca de sossego perto da capital. A procura por personal trainers tende a crescer entre famílias que se mudam para a cidade e entre quem quer aproveitar o rio Paraíba do Sul, as trilhas e o clima ameno para treinar fora da academia.',

  bairrosNobres: ['Centro', 'Nogueira', 'Ipiranga', 'Freguesia da Escada'],
  bairrosPopulares: ['Parateí', 'Lambari', 'Itapema', 'Luís Carlos'],

  parques: [
    {
      nome: 'Parque Municipal da Pedra Montada',
      descricao:
        'Santuário natural em área de Mata Atlântica, construído em torno de uma curiosa sobreposição de rochas; oferece trilhas autoguiadas de dificuldade moderada, como o percurso até a Pedra do Tubarão, ideais para caminhada e atividade leve em meio à floresta.',
    },
    {
      nome: 'Rio Paraíba do Sul',
      descricao:
        'Cercado pela Mata Atlântica, o rio que corta a cidade é palco de turismo náutico e esportes aquáticos, além de servir de cenário para caminhadas e passeios de bicicleta às suas margens.',
    },
    {
      nome: 'Freguesia da Escada e Centro Histórico',
      descricao:
        'Núcleo original da cidade, a cerca de 3,5 km do centro, com casarões antigos, igrejas históricas e ruas tranquilas que convidam à caminhada e ao passeio a pé em ritmo leve.',
    },
  ],
  ciclovias:
    'A cidade tem perfil interiorano e as opções de pedal se concentram nas vias tranquilas da área urbana e nas estradas rurais e margens do rio Paraíba do Sul, muito usadas por ciclistas de fim de semana.',

  clima:
    'O clima é tropical de altitude, com chuvas concentradas no verão e inverno mais seco. A altitude em torno de 585 metros garante temperaturas amenas em boa parte do ano, com noites e madrugadas frescas no inverno.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre durante quase todo o ano; o período de abril a setembro, mais seco e estável, é o mais indicado para trilhas e corridas, enquanto no verão chuvoso vale ajustar o horário para escapar das pancadas de chuva da tarde.',

  mobilidade:
    'Guararema tem localização estratégica no entroncamento da Rodovia Presidente Dutra — uma das mais movimentadas do país, ligando São Paulo ao Rio de Janeiro — com o complexo Ayrton Senna/Carvalho Pinto, o que facilita o acesso à capital e ao Vale do Paraíba. O transporte urbano é feito por ônibus municipais, com linhas que conectam o centro aos distritos e bairros rurais.',

  corridas: [
    {
      nome: 'Provas de trail run na região',
      descricao:
        'As trilhas do Parque da Pedra Montada e o relevo de Mata Atlântica do entorno atraem provas e treinos de corrida em trilha (trail run), que exploram os percursos naturais da cidade.',
    },
    {
      nome: 'Corridas de rua em datas comemorativas',
      descricao:
        'A cidade recebe corridas de rua e caminhadas ligadas ao calendário de eventos e ao turismo, aproveitando o centro histórico e as margens do rio como cenário.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é marcada pelo uso da natureza: trilhas no Parque da Pedra Montada, esportes aquáticos e passeios no rio Paraíba do Sul e caminhadas pelo centro histórico e pela Freguesia da Escada, tudo favorecido pelo clima ameno de altitude.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade pequena e turística do interior paulista.',

  destaquesFitness: [
    'Cidade das Árvores: clima ameno de altitude que favorece o treino ao ar livre quase o ano todo.',
    'Trilhas de Mata Atlântica no Parque Municipal da Pedra Montada, palco de caminhadas e trail run.',
    'Rio Paraíba do Sul com turismo náutico e esportes aquáticos.',
    'Destino de turismo religioso e rural na divisa do Alto Tietê com o Vale do Paraíba, junto à Rodovia Presidente Dutra.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Pequena, tranquila e cercada de natureza, Guararema é feita sob medida para quem quer treinar ao ar livre aproveitando o clima ameno, as trilhas e o rio Paraíba do Sul. Um personal trainer ajuda a transformar esse cenário em rotina, organizando os treinos entre a academia e os espaços naturais e mantendo a constância ao longo das estações.',

  vizinhas: ['mogi-das-cruzes-sp', 'jacarei-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Guararema', url: 'https://cidades.ibge.gov.br/brasil/sp/guararema/panorama' },
    { nome: 'Prefeitura de Guararema', url: 'https://guararema.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
