import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'estrela-rs',
  nome: 'Estrela',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'estrelense',
  tipo: 'cidade',

  populacao: 32183,
  populacaoAno: 2022,
  idhm: 0.767,
  idhmClasse: 'alto',

  resumoEconomico:
    'Estrela fica no Vale do Taquari, às margens do rio Taquari, e é o mais antigo entre os chamados municípios do Alto Taquari (ao lado de Lajeado, Encantado e Arroio do Meio): o povoamento começou em 1856 com imigrantes alemães vindos sobretudo de São Leopoldo, e o município foi criado em 1876. A herança da colonização alemã aparece na arquitetura enxaimel remanescente e em festas tradicionais como o Festival do Chucrute. Na economia, o setor primário (agropecuária) responde pela maior fatia do Valor Adicionado Fiscal do município, seguido pela indústria — com destaque para móveis e metalmecânica — e pelo comércio. A cidade também tem tradição como entroncamento rodo-hidro-ferroviário, por causa do antigo Porto de Estrela e das rodovias BR-386 e RSC-453.',

  mercado:
    'Como cidade de porte médio do interior gaúcho, próxima do polo regional de Lajeado, Estrela tem um mercado fitness mais enxuto, formado por academias de bairro e profissionais de personal trainer que atendem tanto o público local quanto quem busca treino orientado para aproveitar os espaços à beira do rio Taquari, quando as condições climáticas permitem.',

  bairrosNobres: ['Centro', 'Oriental', 'Moinhos', 'Auxiliadora'],
  bairrosPopulares: ['Indústrias', 'Boa União', 'Cristo Rei', 'São José'],

  parques: [
    {
      nome: 'Parque Princesa do Vale',
      descricao:
        'Inaugurado em 1996 na Rua Júlio de Castilhos, é o principal espaço público de lazer ativo da cidade, com ciclovia, pista de caminhada, quadras de vôlei, basquete, futebol de areia e society, academia ao ar livre e dois parques infantis. É também a largada da Corrida Run More. Foi um dos espaços mais afetados pelas enchentes de 2024 e passou por obras de reconstrução.',
    },
    {
      nome: 'Orla do Rio Taquari e Escadaria "Adão e Eva"',
      descricao:
        'A escadaria histórica, inaugurada em 1924, dava acesso ao antigo Porto de Estrela e reúne duas estátuas que simbolizam a indústria e o comércio da cidade. O trecho é a primeira etapa de um projeto de revitalização da orla à beira do rio Taquari.',
    },
    {
      nome: 'Trilha Ecológica',
      descricao:
        'Liga a Escadaria da Polar ao Parque da Lagoa por uma estrutura suspensa entre árvores, com mirante para o rio Taquari e píer — opção de caminhada mais tranquila em contato com a natureza.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta, concentrada na ciclovia do Parque Princesa do Vale; a extensão total da malha na área urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido, com verões quentes e invernos frios, com geadas ocasionais. Por ficar às margens do rio Taquari, a cidade convive com cheias recorrentes: em maio de 2024 o rio registrou a maior enchente de sua história em Estrela, com nível acima de 32 metros, superando o recorde histórico de 1941.',
  climaTreino:
    'No verão, o calor pede treino no início da manhã ou no fim da tarde, com boa hidratação; no inverno, as manhãs frias favorecem horários mais quentes do dia ou o treino indoor. Nos períodos de chuva intensa, é preciso evitar as áreas mais baixas perto do rio Taquari, sujeitas a cheias, e priorizar pontos mais altos da cidade ou a academia.',

  mobilidade:
    'Estrela é cortada pela BR-386 (Rodovia da Produção), que recebeu um novo viaduto concluído no fim de 2024, e pela RSC-453, que liga a cidade a Garibaldi. Uma ponte sobre o rio Taquari conecta Estrela a Lajeado. Historicamente, a cidade também foi um entroncamento rodo-hidro-ferroviário por causa do antigo Porto de Estrela. O deslocamento urbano é feito majoritariamente por carro.',

  corridas: [
    {
      nome: 'Corrida Run More',
      descricao:
        'Considerada a maior corrida só para mulheres do Rio Grande do Sul, é realizada anualmente em março em Estrela, em parceria com a prefeitura, celebrando o mês da mulher. Tem largada no Parque Princesa do Vale, com percurso de 5 km de corrida e caminhada, e reverte parte da arrecadação para a Liga Feminina de Combate ao Câncer de Estrela.',
    },
    {
      nome: 'Provas do calendário regional do Vale do Taquari',
      descricao:
        'Por ficar a poucos minutos de Lajeado, sede da meia maratona 21K Lajeado, Estrela está inserida no calendário de corridas de rua que movimenta o Vale do Taquari ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina a herança alemã, viva em festas e associações comunitárias, com o futebol amador e a força crescente da corrida de rua, puxada pela Corrida Run More, que reúne centenas de mulheres da cidade e da região no Parque Princesa do Vale.',
  academias:
    'A oferta é formada por academias de bairro e estúdios de treinamento, com porte compatível com uma cidade média do interior, complementada pela academia ao ar livre do Parque Princesa do Vale.',

  destaquesFitness: [
    'Parque Princesa do Vale: ciclovia, pista de caminhada, quadras e academia ao ar livre — sede da Corrida Run More.',
    'Corrida Run More: maior corrida só para mulheres do Rio Grande do Sul, realizada todo ano em Estrela.',
    'Escadaria "Adão e Eva" e orla do rio Taquari em revitalização, ligando história e treino ao ar livre.',
    'Cheias recorrentes do rio Taquari, que pedem atenção a horários e a áreas seguras para o treino ao ar livre.',
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
    'Cidade histórica do Alto Taquari, com colonização alemã e economia apoiada na agropecuária, na indústria de móveis e metalmecânica e no comércio, Estrela tem no Parque Princesa do Vale e na orla do rio Taquari seus principais espaços de treino ao ar livre. Um personal trainer ajuda a organizar a rotina de treino respeitando o calendário de cheias do rio e as estações do Vale do Taquari, mantendo a constância entre o treino externo e a academia.',

  vizinhas: ['lajeado-rs', 'montenegro-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Estrela', url: 'https://cidades.ibge.gov.br/brasil/rs/estrela/panorama' },
    { nome: 'Atlas Brasil — IDHM Estrela', url: 'https://www.atlasbrasil.org.br/perfil/municipio/430780' },
    { nome: 'Prefeitura de Estrela', url: 'https://estrela.rs.gov.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
