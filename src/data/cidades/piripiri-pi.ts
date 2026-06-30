import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'piripiri-pi',
  nome: 'Piripiri',
  uf: 'PI',
  estado: 'Piauí',
  estadoSlug: 'piaui',
  regiao: 'Nordeste',
  gentilico: 'piripiriense',
  tipo: 'cidade',

  populacao: 65538,
  populacaoAno: 2022,
  idhm: 0.635,
  idhmClasse: 'médio',
  altitudeM: 167,

  resumoEconomico:
    'No norte do Piauí, entre Teresina e a divisa com o Ceará, Piripiri é a quarta cidade mais populosa do estado e um polo de comércio e serviços para os municípios vizinhos. A economia se apoia no comércio urbano, na agropecuária — com destaque para a produção de caju, melancia e para a criação de suínos, em que está entre as maiores do estado — e em pequenas indústrias e agroindústrias. A posição às margens da BR-343 e da BR-222 reforça o papel da cidade como entroncamento logístico e porta de entrada do Parque Nacional de Sete Cidades.',

  mercado:
    'Como cidade média do interior nordestino, Piripiri tem um mercado fitness em formação, concentrado em academias de bairro e em treinos ao ar livre nas praças e avenidas. A procura por personal trainers cresce entre quem busca orientação para treinar com segurança no calor e entre corredores que participam das provas de rua locais.',

  bairrosNobres: ['Centro', 'Aroeiras', 'Monte Verde', 'Parque Brasil'],
  bairrosPopulares: ['Mutirão', 'Nossa Senhora de Fátima', 'Pedrinhas', 'São Sebastião'],

  parques: [
    {
      nome: 'Parque Nacional de Sete Cidades',
      descricao:
        'Uma das mais antigas unidades de conservação do país, com formações rochosas e trilhas que se estendem por Piripiri, Brasileira e Piracuruca — destino de quem combina ecoturismo e caminhadas em meio à natureza, com acesso principal pela cidade.',
    },
    {
      nome: 'Praças e avenidas centrais',
      descricao:
        'As praças e as avenidas mais largas do centro concentram a movimentação de caminhada e corrida no início da manhã e no fim da tarde, quando o calor dá trégua.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e restrita a trechos da área urbana; boa parte do pedal e da corrida acontece nas avenidas e vias da cidade, além das estradas de acesso ao entorno rural.',

  clima:
    'O clima é tropical quente e semiúmido, marcado por duas estações bem definidas: a chuvosa, concentrada de dezembro a abril, e a seca, no restante do ano. As temperaturas são elevadas durante quase todo o ano, com máximas que já passaram dos 40 °C, típicas do norte do Piauí.',
  climaTreino:
    'O calor forte recomenda treinar bem cedo ou já no fim da tarde, com hidratação reforçada e roupas leves; nos horários mais quentes do dia, ambientes climatizados são a opção mais segura, e o período de seca tende a favorecer o treino ao ar livre.',

  mobilidade:
    'Piripiri é um entroncamento rodoviário do norte do estado: fica às margens da BR-343, que liga a cidade a Teresina (cerca de 165 km), e da BR-222, que segue rumo ao Ceará e ao Maranhão. O deslocamento dentro da cidade é feito sobretudo por transporte individual, motos e ônibus, em uma malha urbana de porte compatível com uma cidade média do interior.',

  corridas: [
    {
      nome: 'Piripiri Running',
      descricao:
        'Corrida de rua já consolidada no calendário local, com percursos de 5 km e 10 km e largada nas avenidas centrais da cidade, reunindo corredores de Piripiri e da região.',
    },
    {
      nome: 'Grande Corrida da Tilápia',
      descricao:
        'Prova de rua com programação cultural que reúne centenas de atletas de várias cidades do Piauí, reforçando a vocação esportiva da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura as provas de rua que mobilizam a comunidade, o uso das praças e avenidas para caminhada e corrida e o ecoturismo no Parque Nacional de Sete Cidades — tudo condicionado pelo calor característico do norte do Piauí.',
  academias:
    'A oferta é formada principalmente por academias de musculação e treino funcional espalhadas pelos bairros centrais e residenciais, com porte típico de uma cidade média do interior nordestino.',

  destaquesFitness: [
    'Porta de entrada do Parque Nacional de Sete Cidades, com trilhas e ecoturismo no entorno.',
    'Provas de rua consolidadas, como a Piripiri Running, que movimentam a comunidade de corredores.',
    'Calor intenso o ano todo, que exige planejamento de horário e hidratação no treino.',
    'Entroncamento da BR-343 e da BR-222, com economia de comércio, agropecuária e agroindústria.',
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
    'Cidade quente, comercial e cercada pela natureza de Sete Cidades, Piripiri pede um treino adaptado ao clima e que aproveite as praças, avenidas e trilhas do entorno. Um personal trainer ajuda a organizar a rotina respeitando o calor, escolhendo os melhores horários e mantendo a constância entre a estação chuvosa e a seca.',

  vizinhas: ['campo-maior-pi', 'teresina-pi'],

  fontes: [
    { nome: 'IBGE Cidades — Piripiri', url: 'https://cidades.ibge.gov.br/brasil/pi/piripiri/panorama' },
    { nome: 'Prefeitura de Piripiri', url: 'https://www.piripiri.pi.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
