import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tiete-sp',
  nome: 'Tietê',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'tieteense',
  tipo: 'cidade',

  populacao: 37663,
  populacaoAno: 2022,
  idhm: 0.730,
  idhmClasse: 'alto',
  altitudeM: 508,

  resumoEconomico:
    'No interior paulista, às margens do rio Tietê, a cidade fica no extremo norte da Região Metropolitana de Sorocaba, na divisa com a região de Piracicaba. A história local nasceu dos engenhos de açúcar do antigo povoado de Pirapora do Curuçá, e a cana-de-açúcar segue no centro da economia, com forte presença do setor sucroalcooleiro. Somam-se a indústria de confecções infanto-juvenis, a fabricação de artefatos de madeira, o comércio e os serviços, que respondem pela maior fatia do valor adicionado do município.',

  mercado:
    'Cidade média do interior, Tietê tem um mercado fitness enxuto, formado por academias locais de musculação e treino funcional e por profissionais autônomos. A procura por personal trainers costuma vir de quem busca acompanhamento individual, treino para retomada de rotina e orientação para aproveitar as praças e as margens do rio como espaço de atividade ao ar livre.',

  bairrosNobres: ['Centro', 'Jardim da Serra', 'Vila Bela Vista'],
  bairrosPopulares: ['Seis Irmãos', 'Jardim Santa Cruz', 'Vila Vitório', 'Sete Fogões'],

  parques: [
    {
      nome: 'Praça Doutor Elias Garcia',
      descricao:
        'Cartão-postal do Centro, a praça rendeu à cidade o apelido de "Cidade Jardim", com arquitetura de inspiração francesa, fontes luminosas e coreto de 1935. É ponto tradicional de encontro, caminhada e eventos ao ar livre.',
    },
    {
      nome: 'Margens do Rio Tietê',
      descricao:
        'O rio que dá nome à cidade marca a paisagem e a história local desde os primeiros engenhos. Os trechos ribeirinhos e vias próximas servem de percurso para caminhada e corrida de quem prefere treinar perto da água.',
    },
    {
      nome: 'Centro Esportivo Municipal',
      descricao:
        'Espaço público voltado à prática esportiva e ao lazer, usado para treinos, atividades comunitárias e ponto de apoio para quem corre e caminha na cidade.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece em ruas de bairros residenciais, nas praças e nas vias próximas às margens do rio.',

  clima:
    'O clima é subtropical de altitude, típico do interior paulista, com a cidade a cerca de 500 metros de altitude. O verão é quente e chuvoso (de novembro a março) e o inverno é mais seco e ameno, com noites frias e amplitude térmica marcante entre a manhã e a tarde.',
  climaTreino:
    'O verão úmido pede treino cedo ou no fim da tarde, com atenção à hidratação nos dias mais quentes; no inverno seco, as manhãs frias favorecem atividades ao ar livre, exigindo aquecimento cuidadoso. É um clima que permite treinar fora na maior parte do ano, com ajustes de horário conforme a estação.',

  mobilidade:
    'Tietê fica a cerca de 150 km da capital e se conecta pela Rodovia Marechal Rondon (SP-300), principal eixo da região, com acesso à Rodovia do Açúcar (SP-308, Comendador Mário Dedini) rumo a Piracicaba. O deslocamento interno é curto e a maior parte dos trajetos urbanos é feita a pé, de bicicleta ou de carro, com transporte por ônibus complementando as ligações regionais.',

  corridas: [
    {
      nome: 'Corrida de Pedestres de Tietê',
      descricao:
        'Prova de rua tradicional da cidade, com largada na Praça Doutor Elias Garcia, que reúne atletas locais e da região há décadas — em 2026 chegou à sua 47ª edição.',
    },
    {
      nome: 'Circuito Esporte Vida',
      descricao:
        'Etapa de corrida e caminhada realizada em Tietê, voltada a praticantes de diferentes níveis e ao público que busca atividade física comunitária.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura a corrida de rua tradicional, o uso das praças e das margens do rio para caminhada e o forte calendário de festas populares — do Carnaval de rua à Festa de São Benedito —, que fazem da praça central e das ruas do Centro um palco de encontro ao longo do ano.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, além de estúdios e opções de natação e ginástica, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior.',

  destaquesFitness: [
    'Cidade às margens do rio Tietê, com margens e praças usadas para caminhada e corrida ao ar livre.',
    'Corrida de Pedestres de Tietê, prova de rua tradicional com largada na Praça Doutor Elias Garcia.',
    'Clima subtropical de altitude, que permite treinar fora quase o ano todo, com ajuste de horário por estação.',
    'Economia da cana-de-açúcar e do setor sucroalcooleiro, com indústria de confecções e artefatos de madeira.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade do interior paulista com forte ligação ao rio que lhe dá nome, Tietê combina praças históricas, tradição de corrida de rua e um clima que favorece o treino ao ar livre na maior parte do ano. Um personal trainer ajuda a organizar a rotina, definir os melhores horários conforme a estação e manter a constância aproveitando os espaços da cidade.',

  vizinhas: ['tatui-sp', 'piracicaba-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Tietê', url: 'https://cidades.ibge.gov.br/brasil/sp/tiete/panorama' },
    { nome: 'Prefeitura de Tietê', url: 'https://www.tiete.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
