import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'parobe-rs',
  nome: 'Parobé',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'parobeense',
  tipo: 'cidade',

  populacao: 52058,
  populacaoAno: 2022,
  idhm: 0.703,
  idhmClasse: 'alto',
  altitudeM: 54,

  resumoEconomico:
    'Parobé fica no Vale do Paranhana, na Região Metropolitana de Porto Alegre, a cerca de 70 km da capital e às margens do rio Paranhana, afluente da bacia do rio dos Sinos. A economia é fortemente ligada à indústria calçadista e coureiro-moveleira: o município integra o polo do Paranhana, uma das regiões de maior tradição na produção de calçados do país, com muitas fábricas e ateliês de facção que empregam boa parte da população. O comércio e os serviços ao longo da RS-239 completam a base econômica, num tecido de micro e pequenas empresas ligadas à cadeia do couro e do calçado.',

  mercado:
    'Como cidade de porte médio e perfil industrial, Parobé tem um mercado fitness mais enxuto que o das grandes cidades da região metropolitana, concentrado em academias de bairro e estúdios de treino. A procura por personal trainers costuma vir de quem trabalha em turnos de fábrica e busca orientação para conciliar o treino com a rotina, além de quem quer aproveitar as margens do Paranhana e as praças para atividade ao ar livre.',

  bairrosNobres: ['Centro', 'Nova Parobé', 'Santa Cristina', 'Palmeiras'],
  bairrosPopulares: ['Alto Recreio', 'Formação', 'Pega Fogo', 'São José'],

  parques: [
    {
      nome: 'Margens do Rio Paranhana',
      descricao:
        'O rio Paranhana corta o município e suas margens e vias próximas servem de percurso para caminhada e corrida, num cenário de várzea típico do Vale.',
    },
    {
      nome: 'Praças e vias centrais',
      descricao:
        'As praças e o calçadão do Centro concentram parte da atividade física ao ar livre da cidade, usados para caminhada e treino leve no fim de tarde.',
    },
    {
      nome: 'Entorno do Vale do Paranhana',
      descricao:
        'A cidade é porta para o Vale do Paranhana, região de relevo ondulado e clima ameno na direção da serra, com estradas e trechos rurais procurados por quem pedala e corre.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos urbanos; boa parte do pedal e da corrida acontece nas vias da cidade e nas estradas de acesso aos municípios vizinhos do Vale.',

  clima:
    'O clima é subtropical úmido, com quatro estações bem marcadas: verões quentes e invernos frios, com chuvas distribuídas ao longo do ano. A proximidade da serra deixa as noites de inverno mais frias, e episódios de chuva forte podem elevar o nível do rio Paranhana e dos arroios da bacia do rio dos Sinos.',
  climaTreino:
    'A variação entre estações pede adaptação: no verão, treinar cedo ou no fim da tarde evita o calor e a umidade; no inverno, o frio recomenda bom aquecimento e agasalho nas atividades ao ar livre. Em dias de chuva intensa, ambientes cobertos são a alternativa mais segura.',

  mobilidade:
    'Parobé é atravessada pela ERS-239, principal eixo do Vale do Paranhana, que liga a cidade a Taquara, Sapiranga e Novo Hamburgo e concentra o fluxo de indústrias e trabalhadores da região. O transporte urbano é feito por ônibus, e a rodovia — em processo de concessão e com obras de duplicação e passagens previstas para o trecho do Vale — é o principal vetor de deslocamento pendular para trabalho e estudo.',

  corridas: [
    {
      nome: 'Corridas de rua no Vale do Paranhana',
      descricao:
        'O calendário regional reúne provas de corrida de rua e caminhadas em cidades vizinhas como Taquara, Igrejinha e Três Coroas, que atraem corredores de Parobé.',
    },
    {
      nome: 'Circuitos de caminhada e corrida locais',
      descricao:
        'Ações pontuais de corrida e caminhada organizadas na cidade movimentam praticantes ao longo das vias urbanas e das margens do Paranhana.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o futebol e o futsal de bairro, tradicionais no Vale, com o uso das praças e das margens do rio para caminhada e corrida, num município de rotina marcada pelos turnos da indústria calçadista.',
  academias:
    'A oferta é formada sobretudo por academias de bairro e estúdios de musculação e treino funcional, distribuídos pelo Centro e pelas áreas residenciais, com porte compatível com uma cidade média do interior gaúcho.',

  destaquesFitness: [
    'Cidade do Vale do Paranhana, polo calçadista tradicional na Região Metropolitana de Porto Alegre.',
    'Margens do rio Paranhana e praças centrais como espaço de caminhada e corrida ao ar livre.',
    'Clima subtropical úmido, com quatro estações que exigem adaptar o treino ao calor do verão e ao frio do inverno.',
    'Rotina marcada pelos turnos da indústria e pelo deslocamento pela ERS-239, que pede treino planejado dentro da agenda.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade industrial do Vale do Paranhana, Parobé combina a rotina intensa das fábricas de calçado com um clima de quatro estações e a paisagem do rio Paranhana. Um personal trainer ajuda a encaixar o treino entre os turnos de trabalho, a definir os melhores horários conforme a estação e a manter a constância aproveitando as praças e as margens do rio.',

  vizinhas: ['taquara-rs', 'novo-hamburgo-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Parobé', url: 'https://cidades.ibge.gov.br/brasil/rs/parobe/panorama' },
    { nome: 'Prefeitura de Parobé', url: 'https://parobe.atende.net/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
