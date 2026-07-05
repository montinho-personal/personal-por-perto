import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'novo-gama-go',
  nome: 'Novo Gama',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'novo-gamense',
  tipo: 'cidade',

  populacao: 107663,
  populacaoAno: 2025,
  idhm: 0.684,
  idhmClasse: 'médio',
  pibPerCapita: 13005.12,
  pibPerCapitaAno: 2023,
  altitudeM: 1000,

  resumoEconomico:
    'Novo Gama nasceu como loteamento popular — o Núcleo Residencial de Novo Gama, fundado em 1978 dentro do então município de Luziânia — batizado em referência à sua vizinhança com a cidade-satélite do Gama, no Distrito Federal. Emancipado em 1995, tornou-se um exemplo clássico de cidade-dormitório do Entorno Sul do DF: grande parte da população cruza diariamente a fronteira com Brasília para trabalhar, e a economia local gira em torno do comércio, dos serviços e de um Arranjo Produtivo Local de confecções criado em 2006. O bairro Pedregal, historicamente o centro comercial da cidade, abriga uma das maiores feiras livres do Centro-Oeste.',

  mercado:
    'O mercado fitness de Novo Gama é moldado pelo perfil de cidade-dormitório: muita gente organiza a rotina de treino em torno do deslocamento diário até o Distrito Federal, o que valoriza horários flexíveis, atendimento no fim da tarde ou à noite e o acompanhamento online para quem passa boa parte do dia fora de casa. A oferta se concentra em academias de bairro e estúdios de menor porte, com personal trainers preenchendo a lacuna de atendimento individualizado num município que ainda tem indicadores sociais abaixo da média goiana.',

  bairrosNobres: ['Alphaville Paiva', 'Jardim Lago Azul'],
  bairrosPopulares: ['Pedregal', 'Jardim Paiva', 'Jardim Tropical', 'Lunabel', 'Parada 07'],

  parques: [
    {
      nome: 'Praça do Lunabel',
      descricao:
        'Praça reformada no bairro Lunabel, com academia ao ar livre, playground infantil, área comum e paisagismo — um dos investimentos recentes da prefeitura em espaço público de lazer e atividade física.',
    },
    {
      nome: 'Complexo Esportivo Parada 07',
      descricao:
        'Reinaugurado pela gestão municipal ao lado do Ginásio de Esportes Marcelo Viana e do Ginásio do Lunabel, reúne quadras e estrutura para a prática de esportes coletivos no bairro Parada 07.',
    },
  ],
  ciclovias:
    'Novo Gama ainda não conta com uma malha cicloviária estruturada; o deslocamento de bicicleta acontece nas ruas dos loteamentos e convive com o tráfego intenso das vias de acesso à BR-040 e ao Distrito Federal.',

  clima:
    'O clima é tropical de savana (Cerrado), com altitude em torno de 1.000 m amenizando o calor típico do Planalto Central, chuvas concentradas entre novembro e março e um período seco bem marcado de maio a setembro.',
  climaTreino:
    'Dá para treinar ao ar livre o ano todo; na estação seca, a baixa umidade do Cerrado pede hidratação reforçada e cuidado redobrado com as vias respiratórias, sobretudo nos horários mais quentes do dia.',

  mobilidade:
    'Cortada pela BR-040 e por rodovias distritais como a DF-060 e a DF-020, Novo Gama faz divisa direta com o Distrito Federal (regiões administrativas do Gama e de Santa Maria) e com Luziânia e Valparaíso de Goiás. O fluxo pendular diário rumo a Brasília é intenso e pesa na escolha de horários de treino de quem mora na cidade.',

  corridas: [
    {
      nome: 'Circuito de Rua de Novo Gama',
      descricao:
        'Prova de 5 km organizada na cidade, com edições recorrentes que reúnem corredores de Novo Gama e do Entorno do DF — um dos poucos eventos de corrida de rua consolidados no calendário local.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina eventos populares, como o tradicional Rodeio Show que marca o aniversário da cidade, com o uso crescente de praças reformadas e complexos esportivos como o do Parada 07, além do Circuito de Rua que vem ganhando espaço no calendário do Entorno do DF.',
  academias:
    'A oferta é formada por academias de bairro e estúdios de musculação e treino funcional de porte modesto, concentrados no Pedregal e nos loteamentos mais populosos, complementada por personal trainers que atendem em domicílio ou online — formato que se encaixa na rotina de quem se desloca todos os dias até Brasília.',

  destaquesFitness: [
    'Cidade-dormitório do Entorno Sul do DF, com forte fluxo pendular diário rumo a Brasília pela BR-040.',
    'Praça do Lunabel e Complexo Esportivo Parada 07 entre os investimentos recentes em espaço público de lazer.',
    'Circuito de Rua de Novo Gama movimenta o calendário local de corridas.',
    'Altitude de cerca de 1.000 m no Planalto Central amplia as janelas de treino ao ar livre ao longo do ano.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 330,
  },

  conclusao:
    'Cidade-dormitório em crescimento no Entorno Sul do Distrito Federal, Novo Gama tem no comércio do Pedregal e na rotina pendular rumo a Brasília as marcas da sua economia. Um personal trainer ajuda a encaixar o treino nessa agenda apertada — em casa, online ou nos horários livres entre o trabalho e o deslocamento diário até o DF.',

  vizinhas: ['brasilia-df', 'luziania-go', 'valparaiso-de-goias-go'],

  fontes: [
    { nome: 'IBGE Cidades — Novo Gama', url: 'https://cidades.ibge.gov.br/brasil/go/novo-gama/panorama' },
    { nome: 'Prefeitura Municipal de Novo Gama — História da Cidade', url: 'https://novogama.go.gov.br/pagina/144-historia-da-cidade' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Jornal Opção Entorno — 31 anos de emancipação', url: 'https://entorno.jornalopcao.com.br/politica/novo-gama-celebra-31-anos-de-emancipacao-com-olhar-voltado-para-o-futuro-32954/' },
  ],
  atualizadoEm: '2026-07-05',
};
