import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tatui-sp',
  nome: 'Tatuí',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'tatuiano',
  tipo: 'cidade',

  populacao: 123942,
  populacaoAno: 2022,
  idhm: 0.752,
  idhmClasse: 'alto',
  altitudeM: 645,

  resumoEconomico:
    'Conhecida como a "Capital da Música", Tatuí abriga o Conservatório de Tatuí, considerado a maior escola de música e teatro da América Latina, que atrai estudantes de todo o Brasil e do exterior. Integrada à Região Metropolitana de Sorocaba, a cidade combina indústria, comércio e agricultura, e tem na cultura e no turismo um forte eixo de identidade e geração de renda.',

  mercado:
    'O mercado de personal trainers em Tatuí tem o perfil de uma cidade média do interior paulista: academias de bairro bem distribuídas, estúdios de treinamento funcional e uma demanda crescente por atendimento domiciliar e em condomínios. A renda local sustenta um público fiel, e o ritmo mais tranquilo da cidade favorece a relação de longo prazo entre aluno e profissional.',

  bairrosNobres: ['Centro', 'Jardim Santa Cruz', 'Vila Esperança', 'Jardim Lucila'],
  bairrosPopulares: ['Bairro dos Fragas', 'Vila Santa Emília', 'São Judas Tadeu', 'Jardim Nossa Senhora de Fátima'],

  parques: [
    {
      nome: 'Parque Ecológico Municipal Maria Tuca',
      descricao:
        'Com mais de 253 mil m² no Bairro dos Fragas, tem lago, trilha ecológica, prainha, quadras de areia e uma avenida arborizada para caminhada, corrida e bicicleta. Aberto ao público nos fins de semana e feriados, é o principal espaço verde para treino ao ar livre da cidade.',
    },
    {
      nome: 'Praça da Matriz',
      descricao:
        'Cartão-postal no coração de Tatuí, é ponto de encontro e largada da corrida de rua da cidade, servindo de base para treinos leves, caminhadas e aquecimentos no Centro.',
    },
  ],
  ciclovias:
    'A malha cicloviária é modesta, típica de cidade média, mas as vias mais tranquilas dos bairros e a avenida interna do Parque Maria Tuca oferecem boas opções para pedalar e treinar com segurança.',

  clima:
    'O clima é subtropical úmido, com verões quentes e chuvosos e invernos amenos e mais secos, na altitude de cerca de 645 metros.',
  climaTreino:
    'O treino ao ar livre é viável o ano todo. No verão, vale priorizar o início da manhã e o fim da tarde por causa do calor e das pancadas de chuva; no inverno, as manhãs frias pedem aquecimento, mas a janela para treinar é excelente.',

  mobilidade:
    'Tatuí é cortada pela Rodovia SP-127 (Antônio Romano Schincariol) e fica próxima do eixo da Rodovia Castello Branco (SP-280), com fácil ligação a Sorocaba e à capital. O deslocamento urbano é curto e simples, o que facilita o atendimento domiciliar pelo personal trainer.',

  corridas: [
    {
      nome: 'Corrida de Rua de Tatuí',
      descricao:
        'Prova de 5 km pelas ruas da cidade, com largada na Praça da Matriz, organizada pela prefeitura em torno das comemorações de aniversário do município — evento popular que reúne corredores locais.',
    },
    {
      nome: 'Treinos no Parque Maria Tuca',
      descricao:
        'A avenida arborizada do parque ecológico funciona como circuito informal para grupos de corrida e caminhada nos fins de semana, sendo palco recorrente de atividades de lazer e esporte.',
    },
  ],
  culturaEsportiva:
    'Além da forte tradição musical, Tatuí cultiva uma cultura esportiva de bairro, com futebol, corrida de rua e atividades em praças e no parque ecológico. O calendário do município inclui a corrida de aniversário, que ajuda a movimentar a comunidade de corredores.',
  academias:
    'A cidade conta com academias de bairro, estúdios de treinamento funcional e personal trainers que atuam em domicílio e condomínios, oferecendo boa cobertura para quem busca acompanhamento individualizado.',

  destaquesFitness: [
    'Parque Ecológico Municipal Maria Tuca (mais de 253 mil m²) com pista, lago e prainha.',
    'Corrida de Rua de Tatuí, de 5 km, com largada na Praça da Matriz.',
    'Cidade média com academias de bairro e forte demanda por treino domiciliar.',
    'Acesso fácil pela SP-127 e proximidade da Rodovia Castello Branco.',
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
    'A "Capital da Música" tem o tamanho ideal para uma rotina de treino consistente e sem stress: deslocamentos curtos, o Parque Maria Tuca para o ar livre e academias de bairro espalhadas. Um personal trainer transforma essa estrutura em um plano sob medida, seja em casa, em condomínio ou na musculação, com a constância que faz a diferença.',

  vizinhas: ['sorocaba-sp', 'itapetininga-sp', 'botucatu-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Tatuí', url: 'https://cidades.ibge.gov.br/brasil/sp/tatui/panorama' },
    { nome: 'Prefeitura de Tatuí', url: 'https://portal.tatui.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
