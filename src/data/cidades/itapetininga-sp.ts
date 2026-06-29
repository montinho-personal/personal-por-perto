import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itapetininga-sp',
  nome: 'Itapetininga',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'itapetiningano',
  tipo: 'cidade',

  populacao: 157790,
  populacaoAno: 2022,
  idhm: 0.763,
  idhmClasse: 'alto',
  altitudeM: 670,

  resumoEconomico:
    'Polo do sudoeste paulista, Itapetininga tem economia diversificada, com peso dos serviços e da indústria (autopeças, têxtil, moveleira e alimentícia) e forte vocação agropecuária — é referência nacional em produtividade no cultivo de soja, com destaque também para grãos e pecuária. A cidade é tradicional centro de ensino e tem presença marcante da educação cívico-militar na região.',

  mercado:
    'Cidade média e regional, Itapetininga concentra a demanda fitness em academias de bairro e no atendimento domiciliar. O personal training cresce apoiado no público de servidores, profissionais ligados ao agronegócio e ao comércio, e numa cultura local de caminhada e corrida nos parques. É um mercado de cidade do interior, com preços acessíveis e relação próxima entre aluno e profissional.',

  bairrosNobres: ['Centro', 'Jardim Marabá', 'Vila Barth', 'Jardim Fogaça'],
  bairrosPopulares: ['Vila Aparecida', 'Vila Belo Horizonte', 'Tupi', 'Jardim Itália'],

  parques: [
    {
      nome: 'Parque Ecológico Municipal',
      descricao:
        'Principal área verde de lazer da cidade, com pista de caminhada e ciclovia, ideal para treino ao ar livre e corrida em ambiente arborizado.',
    },
    {
      nome: 'Parque Ecológico Municipal "Pé no mato, Pé na mata"',
      descricao:
        'Espaço para trilha e contato com a natureza, indicado para caminhadas, atividades leves ao ar livre e descanso.',
    },
  ],
  ciclovias:
    'A cidade conta com ciclovia e pista de caminhada no Parque Ecológico, e vias com trechos cicláveis que atendem deslocamentos e treinos de pedal e corrida no plano urbano.',

  clima:
    'O clima é subtropical úmido / tropical de altitude, com média anual em torno de 20 a 21 °C, verões quentes e chuvosos e invernos amenos e secos, com possibilidade de geadas fracas.',
  climaTreino:
    'O treino ao ar livre é viável o ano todo. No verão, vale priorizar manhã e fim de tarde por causa do calor e das pancadas de chuva; no inverno, a janela é excelente, com atenção apenas às frentes frias e geadas pontuais no início da manhã.',

  mobilidade:
    'Itapetininga é cortada pela Rodovia Raposo Tavares (SP-270), eixo que a liga a Sorocaba e à capital paulista. A localização no sudoeste paulista faz da cidade um entroncamento regional, com deslocamentos urbanos curtos típicos de cidade média.',

  corridas: [
    {
      nome: 'Corridas de rua de Itapetininga',
      descricao:
        'A cidade tem uma comunidade ativa de corredores, reunida em grupos locais, com provas e treinos coletivos que usam o Parque Ecológico e as principais avenidas como percurso.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina a tradição de futebol e de ensino com uma cena crescente de corrida e caminhada nos parques. A forte presença da educação cívico-militar na região reforça o hábito de atividade física e treino regular entre o público local.',
  academias:
    'A rede é formada principalmente por academias de bairro e estúdios de funcional e musculação, complementados pelo atendimento domiciliar do personal trainer — formato bem adaptado a uma cidade de porte médio com bairros espalhados.',

  destaquesFitness: [
    'Referência nacional em produtividade de soja, com economia regional aquecida pelo agronegócio.',
    'Parque Ecológico Municipal com pista de caminhada e ciclovia para treino ao ar livre.',
    'Comunidade local de corrida de rua ativa, com grupos e treinos coletivos.',
    'Mercado de cidade média: academias de bairro e personal domiciliar com preços acessíveis.',
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
    'Cidade média do sudoeste paulista, com economia forte no agronegócio e na indústria e tradição em ensino, Itapetininga oferece um mercado de personal training próximo e acessível. Um profissional ajuda a transformar os parques, as ciclovias e o treino em casa num plano consistente — da corrida no Parque Ecológico à musculação com método.',

  vizinhas: ['sorocaba-sp', 'itu-sp', 'sao-paulo-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Itapetininga', url: 'https://www.ibge.gov.br/cidades-e-estados/sp/itapetininga.html' },
    { nome: 'Prefeitura de Itapetininga', url: 'https://www.itapetininga.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
