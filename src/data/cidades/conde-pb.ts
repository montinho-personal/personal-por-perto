import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'conde-pb',
  nome: 'Conde',
  uf: 'PB',
  estado: 'Paraíba',
  estadoSlug: 'paraiba',
  regiao: 'Nordeste',
  gentilico: 'condense',
  tipo: 'cidade',

  populacao: 27605,
  populacaoAno: 2022,
  idhm: 0.620,
  idhmClasse: 'médio',
  pibPerCapita: 59710.20,
  pibPerCapitaAno: 2023,

  resumoEconomico:
    'Conde integra a Região Metropolitana de João Pessoa e ficou nacionalmente conhecida pela Costa do Conde, faixa de cerca de 20 km de litoral sul paraibano com praias como Jacumã, Tabatinga, Carapibus, Tambaba e Coqueirinho, marcadas por falésias multicoloridas de até 40 metros. A sede administrativa fica cerca de 24 km de João Pessoa, mas o distrito litorâneo de Jacumã — o mais urbanizado e turístico — está a cerca de 30 a 45 km da capital pela PB-008. O turismo (pousadas, bares de praia, passeios de quadriciclo) e a agroindústria canavieira, tradicional no litoral paraibano, dividem espaço na economia local.',

  mercado:
    'O mercado de personal trainers em Conde é pequeno e concentrado no eixo turístico da Costa do Conde, sobretudo em Jacumã, onde a maior infraestrutura de pousadas e comércio atrai veranistas e proprietários de segunda residência. A demanda é sazonal, puxada por quem busca treino funcional e na areia durante temporada de férias e feriados prolongados, além de moradores locais que procuram musculação e condicionamento nas academias de bairro.',

  bairrosNobres: ['Jacumã', 'Tabatinga', 'Coqueirinho', 'Carapibus'],
  bairrosPopulares: ['Centro (sede)', 'Acaú', 'Gramame', 'Ipiranga'],

  parques: [
    {
      nome: 'Praia de Coqueirinho',
      descricao:
        'Uma das praias mais fotografadas da Paraíba, com falésias em tons de vermelho, laranja e amarelo, coqueiros e piscinas naturais na maré baixa — cenário usado para caminhada e treino funcional na areia.',
    },
    {
      nome: 'Praia de Tambaba',
      descricao:
        'Primeira praia oficialmente naturista do Brasil (desde 1989), dividida em trechos com falésias, formações rochosas e trilhas de acesso a mirantes e à praia vizinha da Arapuca.',
    },
    {
      nome: 'Trilha dos Mirantes (Tabatinga a Coqueirinho)',
      descricao:
        'Percurso à beira das falésias que liga as praias de Tabatinga e Coqueirinho, com vista para o litoral; serve de base para provas de trail running e caminhadas na região.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária estruturada; o deslocamento entre as praias da Costa do Conde é feito majoritariamente por carro ou quadriciclo pela PB-008, com trechos de acostamento usados por ciclistas e corredores.',

  clima:
    'O clima é tropical úmido de litoral, quente o ano todo, com o período mais seco e ensolarado entre setembro e fevereiro e chuvas concentradas no outono e início do inverno.',
  climaTreino:
    'O calor e a umidade do litoral sul paraibano pedem treino no início da manhã ou no fim da tarde, com hidratação reforçada; a brisa do mar nas praias e falésias ajuda a tornar as sessões ao ar livre mais amenas.',

  mobilidade:
    'O acesso à sede de Conde e à Costa do Conde a partir de João Pessoa é feito pela PB-008, rodovia litorânea que liga a capital a Jacumã, Tabatinga, Coqueirinho e Tambaba. O transporte dentro do município é predominantemente por carro; não há linhas de ônibus estruturadas que substituam o veículo próprio para conectar as praias entre si.',

  corridas: [
    {
      nome: '21K do Conde — Rota dos Mirantes',
      descricao:
        'Meia maratona de trail running pela Costa do Conde, com percursos de 7, 12 e 21 km entre as praias de Tabatinga e Coqueirinho, à beira das falésias — considerada uma das provas mais cênicas do Brasil.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Conde gira em torno do surfe (especialmente em Tambaba e Arapuca), da caminhada e do treino funcional na areia das praias da Costa do Conde, e de provas de trail running que exploram as falésias e mirantes da região.',
  academias:
    'A oferta de academias é modesta e concentrada na sede e em Jacumã, complementada por profissionais que atendem em pousadas, condomínios e diretamente nas praias durante a alta temporada turística.',

  destaquesFitness: [
    'Falésias multicoloridas de até 40 metros nas praias de Coqueirinho, Tabatinga e Tambaba, cenário para treino ao ar livre.',
    'Trail running pela Costa do Conde: a 21K do Conde — Rota dos Mirantes liga Tabatinga a Coqueirinho pela beira das falésias.',
    'Distrito de Jacumã, mais urbanizado, concentra pousadas e a maior oferta local de academias e personal trainers.',
    'Forte sazonalidade turística, com pico de demanda por treino na areia e em pousadas durante férias e feriados.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 650,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Com falésias coloridas e praias como Coqueirinho, Tabatinga e Tambaba, Conde oferece um cenário natural raro para treinar ao ar livre no litoral sul da Paraíba. Um personal trainer ajuda a aproveitar a areia e as trilhas entre as falésias, respeitando o calor e a sazonalidade turística que marcam a rotina esportiva da região.',

  vizinhas: ['joao-pessoa-pb', 'cabedelo-pb', 'santa-rita-pb'],

  fontes: [
    { nome: 'IBGE Cidades — Conde', url: 'https://cidades.ibge.gov.br/brasil/pb/conde/panorama' },
    { nome: 'Prefeitura de Conde', url: 'https://conde.pb.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
