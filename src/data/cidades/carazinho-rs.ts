import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'carazinho-rs',
  nome: 'Carazinho',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'carazinhense',
  tipo: 'cidade',

  populacao: 61804,
  populacaoAno: 2022,
  idhm: 0.766,
  idhmClasse: 'alto',
  altitudeM: 603,

  resumoEconomico:
    'Situada no Planalto Médio gaúcho, no norte do Rio Grande do Sul, Carazinho é um polo regional de comércio, serviços e agronegócio. A economia gira em torno do agro — soja, trigo e milho — e da agroindústria ligada a sementes, cereais e implementos, alimentada pela posição estratégica da cidade no escoamento da produção do norte do estado.',

  mercado:
    'O mercado de personal training em Carazinho é o de uma cidade média do interior gaúcho: musculação consolidada, academias de bairro e profissionais que atendem em estúdio, em casa e ao ar livre. A demanda é puxada pelo público adulto economicamente ativo e por quem busca acompanhamento individual e constância no treino ao longo do ano, especialmente nos meses frios.',

  bairrosNobres: ['Centro', 'Floresta', 'Sommer', 'Borghetti'],
  bairrosPopulares: ['Oriental', 'Conceição', 'Glória', 'São Lucas'],

  parques: [
    {
      nome: 'Parque Municipal João Xavier da Cruz',
      descricao:
        'Área de preservação de mais de 200 hectares às margens da antiga estrada Carazinho–Passo Fundo, com uma das maiores reservas de araucária reflorestada da região — bom espaço para caminhada e contato com a natureza.',
    },
    {
      nome: 'Parque de Exposições Vali Albrecht',
      descricao:
        'Amplo parque às margens da BR-386, palco da Expocar e de eventos do agronegócio, com áreas abertas usadas para caminhadas e atividades durante as feiras e exposições.',
    },
    {
      nome: 'Praças e avenidas do centro',
      descricao:
        'Praças arborizadas e avenidas largas no núcleo urbano servem de ponto de encontro para caminhada leve e treino ao ar livre no dia a dia da cidade.',
    },
  ],
  ciclovias:
    'Carazinho conta com ciclofaixas pontuais em avenidas do entorno do centro. O relevo suave do Planalto Médio e as estradas vicinais nas saídas da cidade favorecem pedais mais longos pela zona rural.',

  clima:
    'O clima é subtropical, típico do Planalto Médio gaúcho: verões quentes e invernos frios, com geadas frequentes e temperaturas que podem se aproximar de zero nas manhãs mais rigorosas de junho e julho. A altitude em torno de 600 metros reforça a sensação de frio no inverno.',
  climaTreino:
    'De outubro a abril, as condições para treino ao ar livre são boas, exigindo atenção à hidratação nos dias mais quentes de verão. No inverno, o frio intenso e as geadas pedem agasalho, aquecimento cuidadoso e, em muitos dias, a migração do treino para ambientes fechados.',

  mobilidade:
    'Carazinho é um importante entroncamento rodoviário do norte gaúcho, marcado pelo cruzamento da BR-285 com a BR-386. Essa posição liga a cidade a Passo Fundo, à região das Missões e ao escoamento da produção agrícola, e faz dela um polo de comércio e serviços para os municípios vizinhos.',

  corridas: [
    {
      nome: 'Corrida Rústica Cidade de Carazinho',
      descricao:
        'Prova de rua organizada na cidade, com percursos pelas ruas e avenidas centrais reunindo corredores locais e da região do Planalto Médio.',
    },
    {
      nome: 'Provas de rua regionais',
      descricao:
        'Calendário de corridas e rústicas promovidas por entidades e grupos de treino do norte do estado, com etapas que passam por Carazinho e cidades próximas.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Carazinho combina a tradição gaúcha do interior com uma cena crescente de corrida de rua e musculação. Grupos de treino circulam pelas avenidas e praças, e o futebol amador e o ciclismo completam o cotidiano esportivo da cidade.',
  academias:
    'A oferta reúne academias de bairro, estúdios de musculação e centros de treino funcional distribuídos entre o centro e os bairros residenciais, complementados pelo trabalho de personais que atendem em casa, ao ar livre e em espaços parceiros.',

  destaquesFitness: [
    'Parque João Xavier da Cruz: reserva de araucária e área verde para caminhada.',
    'Cruzamento da BR-285 com a BR-386, que faz de Carazinho um polo regional do norte gaúcho.',
    'Relevo suave do Planalto Médio, favorável a ciclismo e caminhadas pelas estradas vicinais.',
    'Invernos frios com geadas que valorizam o acompanhamento de personal e o treino indoor.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 255,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Polo de comércio e agronegócio no cruzamento das BR-285 e BR-386, Carazinho tem o clima de extremos do Planalto Médio — verões quentes e invernos frios com geadas — que tornam o acompanhamento profissional ainda mais útil. Um personal trainer ajuda a manter a constância: aproveitando os parques e as avenidas nos dias bons e organizando o treino indoor quando o frio aperta.',

  vizinhas: ['passo-fundo-rs', 'ijui-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Carazinho', url: 'https://cidades.ibge.gov.br/brasil/rs/carazinho/panorama' },
    { nome: 'Prefeitura de Carazinho', url: 'https://www.carazinho.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
