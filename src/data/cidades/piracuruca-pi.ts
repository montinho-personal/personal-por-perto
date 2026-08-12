import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'piracuruca-pi',
  nome: 'Piracuruca',
  uf: 'PI',
  estado: 'Piauí',
  estadoSlug: 'piaui',
  regiao: 'Nordeste',
  gentilico: 'piracuruquense',
  tipo: 'cidade',

  populacao: 28453,
  populacaoAno: 2022,

  resumoEconomico:
    'Com 28.453 habitantes (Censo 2022), um crescimento de 4,07% desde 2010, Piracuruca é a porta de entrada do Parque Nacional de Sete Cidades — cerca de 74% dos 7.700 hectares do parque ficam no município. A economia combina comércio e serviços do centro urbano, agropecuária e um turismo que gira em torno das formações rochosas e das inscrições rupestres do parque.',

  mercado:
    'O mercado de personal trainer é o de uma cidade média do interior nordestino: poucas academias no centro, atendimento a domicílio e treino ao ar livre nas praças e no entorno. O turismo do parque acrescenta uma demanda sazonal por preparo para trilha e caminhada em calor forte.',

  bairrosNobres: ['Centro', 'Aeroporto', 'Bela Vista', 'São José'],
  bairrosPopulares: ['Alto da Boa Vista', 'Pedrinhas', 'Vila Nova', 'Mutirão'],

  parques: [
    {
      nome: 'Parque Nacional de Sete Cidades',
      descricao:
        'Criado em 1961 e com 7.700 hectares, o parque protege formações rochosas que lembram ruínas de cidades e um dos maiores conjuntos de pinturas rupestres do Piauí. As trilhas ligam os sete "conjuntos" e são percorridas a pé ou de bicicleta.',
    },
    {
      nome: 'Trilhas e mirantes do parque',
      descricao:
        'Os percursos internos variam de caminhadas curtas entre formações a trilhas mais longas com subida até mirantes — treino natural de perna e fôlego no calor do cerrado piauiense.',
    },
    {
      nome: 'Praças e calçadões do centro',
      descricao:
        'As praças centrais concentram a caminhada e o encontro dos grupos de treino no fim da tarde, quando o sol perde força.',
    },
  ],
  ciclovias:
    'A cidade não tem malha cicloviária estruturada divulgada em fonte oficial. A bicicleta é meio de transporte comum no dia a dia e também percorre as estradas de acesso ao parque.',

  clima:
    'Tropical semiárido quente, com estação chuvosa concentrada no primeiro semestre e um segundo semestre seco e muito quente.',
  climaTreino:
    'O calor manda no horário: treino ao ar livre rende no começo da manhã e depois das 17h, com hidratação reforçada. Na estação seca, a trilha do parque exige água em quantidade e proteção solar — sombra é escassa entre as formações rochosas.',

  mobilidade:
    'Piracuruca fica no eixo da BR-343, que liga Teresina a Parnaíba, e a cerca de 190 km da capital. O acesso ao Parque Nacional de Sete Cidades se faz por estrada vicinal a partir da rodovia.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário municipal',
      descricao:
        'As provas locais acontecem em datas comemorativas e reúnem corredores da região norte do Piauí, com percursos curtos pelas avenidas centrais.',
    },
    {
      nome: 'Eventos esportivos no entorno do parque',
      descricao:
        'O turismo do Sete Cidades atrai caminhadas organizadas e provas de trilha, aproveitando o cenário das formações rochosas.',
    },
  ],
  culturaEsportiva:
    'O futebol amador domina o calendário, ao lado do ciclismo de estrada e das caminhadas em grupo no fim da tarde. O parque nacional é o grande diferencial: coloca trilha e terreno irregular ao alcance de quem mora na cidade.',
  academias:
    'A oferta se concentra no centro, com academias de musculação de porte pequeno e médio. O atendimento a domicílio e o treino em praça completam o quadro, especialmente nos bairros mais afastados.',

  destaquesFitness: [
    'Parque Nacional de Sete Cidades: 7.700 ha, com 74% dentro do município.',
    'Trilhas entre formações rochosas e pinturas rupestres milenares.',
    'Praças centrais como ponto de caminhada no fim da tarde.',
    'Posição no eixo Teresina–Parnaíba, a cerca de 190 km da capital.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 620,
    onlineMin: 130,
    onlineMax: 340,
  },

  conclusao:
    'Piracuruca tem um parque nacional no quintal e um calor que organiza a rotina de quem treina. Um personal trainer daqui monta o programa em volta dessas duas realidades: força na academia ou em casa nas horas quentes, caminhada e trilha no Sete Cidades quando o sol dá trégua.',

  vizinhas: ['piripiri-pi', 'parnaiba-pi', 'pedro-ii-pi'],

  fontes: [
    { nome: 'IBGE Cidades — Piracuruca', url: 'https://www.ibge.gov.br/cidades-e-estados/pi/piracuruca.html' },
    { nome: 'ICMBio — Parque Nacional de Sete Cidades', url: 'https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/unidade-de-conservacao/unidades-de-biomas/caatinga/lista-de-ucs/parna-de-sete-cidades' },
    { nome: 'Prefeitura de Piracuruca', url: 'https://www.piracuruca.pi.gov.br/' },
  ],
  atualizadoEm: '2026-08-12',
};
