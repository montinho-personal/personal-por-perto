import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sarandi-pr',
  nome: 'Sarandi',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'sarandiense',
  tipo: 'cidade',

  populacao: 118455,
  populacaoAno: 2022,
  idhm: 0.695,
  idhmClasse: 'médio',
  altitudeM: 592,

  resumoEconomico:
    'Integrante da Região Metropolitana de Maringá e praticamente conurbada à capital regional, Sarandi é uma das cidades de crescimento mais acelerado do Noroeste paranaense. A economia se apoia em serviços e comércio (mais da metade do valor adicionado), administração pública, indústria — com forte presença de confecções e moveleiras — e agropecuária no entorno, num perfil de cidade jovem e em expansão constante.',

  mercado:
    'O mercado fitness é jovem e em expansão, acompanhando o crescimento populacional e a proximidade com Maringá, que amplia o leque de opções. Predominam academias de musculação de bairro e estúdios de funcional, com a cultura de musculação bem enraizada e demanda crescente por acompanhamento personalizado.',

  bairrosNobres: ['Centro', 'Jardim Independência', 'Conjunto Cidade Alta', 'Jardim Alphaville'],
  bairrosPopulares: ['Jardim Califórnia', 'Conjunto Floresta', 'Conjunto Residencial Mauá', 'Jardim Aurora'],

  parques: [
    {
      nome: 'Praça dos Pioneiros',
      descricao:
        'Um dos espaços públicos mais movimentados da cidade ao fim da tarde e à noite, com áreas para caminhada e convívio — ponto de referência para quem treina ao ar livre no centro.',
    },
    {
      nome: 'Praças e academias ao ar livre dos bairros',
      descricao:
        'A cidade conta com praças e academias da terceira idade distribuídas pelos conjuntos e jardins, usadas para caminhada e exercícios de baixo custo perto de casa.',
    },
    {
      nome: 'Estrutura esportiva municipal',
      descricao:
        'Ginásios e quadras públicas mantidos pela Secretaria de Esporte e Lazer sediam atividades comunitárias e eventos, complementando a oferta de espaços para prática física.',
    },
  ],
  ciclovias:
    'A malha cicloviária ainda é incipiente e segue acompanhando a expansão urbana, mas a integração com a estrutura de mobilidade ativa de Maringá, vizinha de mancha urbana, amplia as opções para quem pedala na região.',

  clima:
    'O clima é subtropical úmido, típico do Noroeste do Paraná, com média anual em torno de 22 °C, verões quentes e úmidos e invernos amenos e secos.',
  climaTreino:
    'As condições para treino ao ar livre são favoráveis na maior parte do ano. No verão, vale priorizar o início da manhã ou o fim da tarde para escapar do calor e das pancadas de chuva, comuns entre outubro e março.',

  mobilidade:
    'Sarandi é cortada pela BR-376, que separa as regiões Norte e Sul da cidade e funciona como principal eixo de ligação com Maringá, com a qual compartilha a mesma mancha urbana. Viadutos sobre a rodovia melhoraram a conexão entre os dois lados, num cotidiano marcado pelo intenso fluxo metropolitano entre as duas cidades.',

  corridas: [
    {
      nome: 'Corrida 12 de Outubro de Sarandi',
      descricao:
        'Prova de rua organizada pela prefeitura, com percurso principal de cerca de 7 km para adultos e categorias menores para crianças e adolescentes, reunindo a comunidade no calendário esportivo local.',
    },
    {
      nome: 'Provas de rua da Região Metropolitana de Maringá',
      descricao:
        'A proximidade com Maringá dá aos corredores de Sarandi acesso a um calendário metropolitano de corridas de 5 km, 10 km e 21 km em ascensão.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva sarandiense gira em torno da musculação de bairro, do futebol e das caminhadas em praças, com a corrida de rua ganhando espaço, impulsionada por eventos municipais e pela cena metropolitana de Maringá.',
  academias:
    'A oferta é formada principalmente por academias de musculação de bairro e estúdios de funcional, em número crescente. A vizinhança com Maringá amplia o acesso a redes e estúdios especializados a poucos minutos de distância.',

  destaquesFitness: [
    'Cidade jovem e em crescimento acelerado, com demanda fitness em expansão.',
    'Conurbação com Maringá, que multiplica as opções de treino e assessorias na região.',
    'Corrida 12 de Outubro e calendário metropolitano aquecem a procura por treino de corrida.',
    'Clima do Noroeste paranaense favorável a treino ao ar livre na maior parte do ano.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 260,
    mensalMax: 680,
    onlineMin: 120,
    onlineMax: 340,
  },

  conclusao:
    'Em plena expansão e colada a Maringá, Sarandi combina o ritmo de uma cidade jovem com o acesso à estrutura fitness de toda a região metropolitana. Um personal trainer ajuda a transformar essa proximidade em resultado, com método e constância — seja na musculação de bairro, seja na preparação para as corridas de rua.',

  vizinhas: ['maringa-pr', 'londrina-pr', 'paranavai-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Sarandi', url: 'https://cidades.ibge.gov.br/brasil/pr/sarandi/panorama' },
    { nome: 'Prefeitura de Sarandi', url: 'https://www.sarandi.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
