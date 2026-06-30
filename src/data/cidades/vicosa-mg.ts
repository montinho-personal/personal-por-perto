import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'vicosa-mg',
  nome: 'Viçosa',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'viçosense',
  tipo: 'cidade',

  populacao: 76430,
  populacaoAno: 2022,
  idhm: 0.775,
  idhmClasse: 'alto',
  altitudeM: 649,

  resumoEconomico:
    'Cidade universitária por excelência, Viçosa tem sua economia organizada em torno da Universidade Federal de Viçosa (UFV), referência nacional em ciências agrárias. A presença de milhares de estudantes, professores e pesquisadores movimenta serviços, comércio, moradia e alimentação, dando à cidade um perfil jovem e dinâmico no coração da Zona da Mata mineira.',

  mercado:
    'O mercado fitness acompanha o perfil universitário e jovem da cidade, com academias, estúdios e profissionais que atendem alunos e moradores. A demanda por treino é alimentada pelo grande contingente estudantil e pela cultura ativa que circula pelo campus da UFV, com suas matas e trilhas.',

  bairrosNobres: ['Centro', 'Fátima', 'Ramos', 'Bom Jesus'],
  bairrosPopulares: ['João Brás', 'Nova Viçosa', 'Santa Clara', 'Silvestre'],

  parques: [
    {
      nome: 'Campus da UFV',
      descricao:
        'O campus da Universidade Federal de Viçosa é o grande espaço aberto da cidade, com vias arborizadas, gramados e estrutura usados por estudantes e moradores para caminhada e corrida.',
    },
    {
      nome: 'Mata da Biologia',
      descricao:
        'Fragmento de Mata Atlântica dentro do campus, com trilhas muito frequentadas por quem busca caminhada e contato com a natureza em meio à floresta.',
    },
    {
      nome: 'Mata do Paraíso',
      descricao:
        'Estação de pesquisa e treinamento da UFV, com trilhas em área de mata preservada, usada para caminhadas e atividades ao ar livre.',
    },
    {
      nome: 'Horto Botânico da UFV',
      descricao:
        'Área verde do circuito de espaços protegidos da universidade, com trilhas e vegetação para passeios e atividades leves ao ar livre.',
    },
  ],
  ciclovias:
    'A topografia montanhosa da Zona da Mata limita o uso da bicicleta como transporte; a extensão de ciclovias urbanas não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude (Cwa de Köppen), com verão quente e chuvoso e inverno mais ameno e seco, com temperatura média anual em torno de 19 a 20 °C.',
  climaTreino:
    'O relevo de morros torna a cidade naturalmente desafiadora para corrida e caminhada, com subidas que viram treino de força. O inverno seco e ameno favorece o ar livre; no verão, vale priorizar o início da manhã para fugir do calor e das chuvas de fim de tarde.',

  mobilidade:
    'O principal eixo de acesso é a BR-120, que corta a cidade e a liga à região; a BR-356 e estradas estaduais conectam Viçosa a Ponte Nova, Ubá e ao restante da Zona da Mata, com Juiz de Fora como referência regional.',

  corridas: [
    {
      nome: 'Meia Maratona UFV',
      descricao:
        'Prova pioneira realizada dentro de uma universidade federal, com percurso de 21 km no campus e arredores, além de distâncias menores.',
    },
    {
      nome: 'Trail running no campus e nas matas',
      descricao:
        'As trilhas da Mata da Biologia, Mata do Paraíso e do entorno do campus sustentam uma cena ativa de corrida em trilha, apoiada por projetos de extensão da UFV.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é fortemente ligada à universidade: projetos de extensão em educação física, treinos de corrida e trail abertos à comunidade e o uso intenso do campus e das matas para caminhada e atividade ao ar livre.',
  academias:
    'A oferta reúne academias, estúdios e profissionais voltados ao público universitário e aos moradores, complementada pela infraestrutura aberta do campus e das trilhas da UFV.',

  destaquesFitness: [
    'Campus da UFV como grande espaço aberto para caminhada e corrida.',
    'Trilhas da Mata da Biologia e Mata do Paraíso para trail running.',
    'Meia Maratona UFV, prova pioneira dentro de uma universidade federal.',
    'Relevo de morros que transforma o ar livre em treino naturalmente intenso.',
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
    'Cidade universitária na Zona da Mata mineira, Viçosa combina o dinamismo da UFV com matas, trilhas e um relevo que desafia o treino ao ar livre. Um personal trainer ajuda a aproveitar o campus e as trilhas com método e a encarar as subidas com segurança, da preparação para a Meia Maratona UFV à rotina do dia a dia.',

  vizinhas: ['juiz-de-fora-mg', 'uba-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Viçosa', url: 'https://cidades.ibge.gov.br/brasil/mg/vicosa/panorama' },
    { nome: 'Prefeitura de Viçosa', url: 'https://www.vicosa.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
