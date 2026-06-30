import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'capanema-pa',
  nome: 'Capanema',
  uf: 'PA',
  estado: 'Pará',
  estadoSlug: 'para',
  regiao: 'Norte',
  gentilico: 'capanemense',
  tipo: 'cidade',

  populacao: 70394,
  populacaoAno: 2022,
  idhm: 0.655,
  idhmClasse: 'médio',
  altitudeM: 24,

  resumoEconomico:
    'Capanema é um dos principais polos do nordeste paraense, no coração da Zona Bragantina, e funciona como centro de comércio e serviços para os municípios vizinhos. A economia se apoia no comércio varejista e atacadista, no funcionalismo, na agricultura familiar e na agroindústria, com peso histórico da produção de cimento na região. A presença de instituições de ensino superior, como o campus da UFRA e a oferta do IFPA, reforça o papel da cidade como referência educacional da microrregião bragantina.',

  mercado:
    'O mercado de personal trainers em Capanema acompanha o porte de cidade média do interior paraense, com oferta concentrada no Centro e nos bairros mais estruturados. A demanda é puxada por estudantes, profissionais do comércio e do funcionalismo e por moradores que buscam treino orientado, além do uso das praças e vias da cidade para caminhada e corrida no dia a dia.',

  bairrosNobres: ['Centro', 'Caixa D’Água', 'São José', 'Comercial'],
  bairrosPopulares: ['Vila Nova', 'Pedrinhas', 'Boa Vista', 'Açaizal'],

  parques: [
    {
      nome: 'Praças do Centro',
      descricao:
        'O Centro de Capanema concentra praças arborizadas em torno da igreja matriz e do comércio, formando um circuito plano e movimentado, muito usado para caminhada urbana no fim da tarde.',
    },
    {
      nome: 'Entorno da antiga estação ferroviária',
      descricao:
        'A área ligada à antiga Estrada de Ferro de Bragança, que cortava a cidade, preserva traçados e logradouros amplos no tecido urbano, aproveitados para caminhada e atividade leve.',
    },
    {
      nome: 'Avenidas e vias largas da cidade',
      descricao:
        'Avenidas estruturadas, como o eixo ligado à Barão de Capanema, oferecem calçadas e canteiros que servem de percurso para caminhada e corrida de rua no cotidiano.',
    },
  ],
  ciclovias:
    'A cidade não dispõe de malha cicloviária estruturada divulgada em fonte oficial; a bicicleta é meio de transporte comum no dia a dia capanemense, e o pedal recreativo acontece nas avenidas e vias largas da área urbana.',

  clima:
    'O clima é equatorial úmido, típico do nordeste paraense: quente o ano inteiro, com período chuvoso intenso no primeiro semestre e estiagem mais marcada no segundo, sob temperaturas e umidade elevadas.',
  climaTreino:
    'O calor e a umidade altos pedem hidratação reforçada e treino nos horários mais amenos, no início da manhã e no fim de tarde, evitando o sol forte do meio do dia. Sombra das praças e das vias arborizadas ajuda a tornar a atividade ao ar livre mais tolerável.',

  mobilidade:
    'Capanema é um entroncamento da Zona Bragantina: é cortada pela BR-316, principal ligação rodoviária rumo a Belém, e articula-se com a BR-308 em direção a Bragança e o litoral, além da PA-242 no sentido de Igarapé-Açu. A cidade nasceu como estação da antiga Estrada de Ferro de Bragança (Belém-Bragança), desativada em 1965, cujo traçado ainda marca a malha urbana. Internamente, os deslocamentos são curtos, com forte presença de motos e bicicletas.',

  corridas: [
    {
      nome: 'Corridas de rua no calendário municipal',
      descricao:
        'Provas de rua e caminhadas organizadas em datas cívicas e esportivas costumam usar o Centro e as principais avenidas como percurso, reunindo corredores locais e da microrregião.',
    },
    {
      nome: 'Caminhadas e atividades em datas comemorativas',
      descricao:
        'O calendário de festas e eventos da cidade movimenta praças e ruas centrais, com caminhadas coletivas que reforçam a prática esportiva entre os moradores.',
    },
  ],
  culturaEsportiva:
    'A cultura de movimento em Capanema é urbana e cotidiana: caminhada nas praças e avenidas do Centro, futebol nos campos e quadras dos bairros e o uso das vias largas herdadas do traçado ferroviário. O perfil estudantil, ligado às instituições de ensino, ajuda a manter a procura por atividade física na cidade.',
  academias:
    'A oferta de academias se concentra no Centro e nos bairros mais estruturados, complementada por treino ao ar livre nas praças, nas avenidas arborizadas e nos espaços esportivos espalhados pela cidade.',

  destaquesFitness: [
    'Praças do Centro, planas e arborizadas, como principal espaço de caminhada urbana.',
    'Avenidas largas herdadas do traçado da antiga ferrovia Belém-Bragança, boas para corrida de rua.',
    'Perfil de polo regional e estudantil, que sustenta a procura por treino orientado.',
    'Clima equatorial úmido, que valoriza o treino no início da manhã e no fim de tarde.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Polo do nordeste paraense na Zona Bragantina, Capanema reúne o dinamismo do comércio, a herança da ferrovia Belém-Bragança e a presença de instituições de ensino como cenário para treinar. Um personal trainer ajuda a montar uma rotina que respeite o calor equatorial e aproveite as praças e avenidas da cidade com regularidade e segurança.',

  vizinhas: ['braganca-pa', 'castanhal-pa'],

  fontes: [
    { nome: 'IBGE Cidades — Capanema', url: 'https://cidades.ibge.gov.br/brasil/pa/capanema/panorama' },
    { nome: 'Prefeitura de Capanema', url: 'https://www.capanema.pa.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
