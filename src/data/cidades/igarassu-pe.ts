import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'igarassu-pe',
  nome: 'Igarassu',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'igaraçuano',
  tipo: 'cidade',

  populacao: 115196,
  populacaoAno: 2022,
  idhm: 0.665,
  idhmClasse: 'médio',
  altitudeM: 19,

  resumoEconomico:
    'Fundada em 1535, Igarassu é uma das primeiras vilas do Brasil e abriga a Igreja dos Santos Cosme e Damião, tida pelo Iphan como a igreja mais antiga ainda existente no país. Hoje integra a Região Metropolitana do Recife, no litoral norte de Pernambuco, e combina um sítio histórico tombado com forte vocação industrial — destaca-se o polo vidreiro (com a fábrica de vidros planos Vivix) e a cadeia automotiva e de bebidas que se espalha pelo eixo da BR-101 Norte. A Ilha de Itamaracá, vizinha, reforça a vocação litorânea da região.',

  mercado:
    'O mercado de personal trainer em Igarassu acompanha o crescimento metropolitano e industrial: há academias de bairro, estúdios de treino funcional e profissionais que atendem em condomínios e praças. A proximidade com o Recife amplia as opções, e o atendimento online ganhou espaço entre quem trabalha nos polos industriais e tem rotina apertada.',

  bairrosNobres: ['Centro Histórico', 'Cruz de Rebouças', 'Nova Cruz', 'Mangue Seco'],
  bairrosPopulares: ['Três Ladeiras', 'Sítio Histórico', 'Chave', 'Macaxeira'],

  parques: [
    {
      nome: 'Centro Histórico',
      descricao:
        'O conjunto tombado, com a Igreja dos Santos Cosme e Damião e o Convento de Santo Antônio, tem ladeiras e ruas de paralelepípedo que servem de cenário e de desafio para quem caminha e corre.',
    },
    {
      nome: 'Praia de Mangue Seco',
      descricao:
        'Faixa de areia com águas calmas e acesso à Coroa do Avião, banco de areia muito procurado nos fins de semana — bom ponto para caminhada e treino ao ar livre na orla.',
    },
    {
      nome: 'Praças e academias ao ar livre',
      descricao:
        'A cidade conta com praças e equipamentos públicos de ginástica distribuídos pelos bairros, usados para treino funcional e atividades em grupo.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é incipiente e concentrada em trechos urbanos e na orla; o ciclismo de lazer aproveita as vias de menor movimento e o acesso às praias, enquanto deslocamentos mais longos seguem pela BR-101.',

  clima:
    'O clima é tropical quente e úmido, típico do litoral norte de Pernambuco, com temperaturas altas o ano todo e chuvas concentradas no outono e inverno (de março a agosto).',
  climaTreino:
    'O treino ao ar livre rende mais no começo da manhã ou no fim da tarde, com hidratação reforçada por conta do calor e da umidade. A brisa litorânea ajuda no conforto térmico junto à orla.',

  mobilidade:
    'Igarassu fica a cerca de 30 km do Recife e é cortada pela BR-101, principal eixo de ligação com a capital e com o polo industrial de Goiana, ao norte. O transporte coletivo é feito por linhas metropolitanas do sistema Grande Recife; a cidade não tem estação de metrô, e o acesso à malha sobre trilhos ocorre por terminais da Região Metropolitana.',

  corridas: [
    {
      nome: 'Circuito das Cidades — Etapa Igarassu',
      descricao:
        'Provas de rua de 5 km e 10 km com percurso urbano passando por pontos históricos da cidade, reunindo corredores da Região Metropolitana do Recife.',
    },
    {
      nome: 'Corridas e caminhadas comunitárias',
      descricao:
        'Eventos esportivos promovidos por associações locais e pela prefeitura, com largadas no Centro Histórico e percursos que valorizam o patrimônio tombado.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso das praças e da orla com a paixão metropolitana por corrida de rua. O sítio histórico, com suas ladeiras, funciona como academia natural, e os equipamentos públicos de ginástica espalham o treino funcional pelos bairros.',
  academias:
    'A oferta reúne academias de bairro, estúdios de treino funcional e personais autônomos, complementados por praças com aparelhos de ginástica e pela estrutura ao ar livre da orla e do centro histórico.',

  destaquesFitness: [
    'Centro Histórico com ladeiras de paralelepípedo serve de treino natural de subida.',
    'Orla e Praia de Mangue Seco oferecem cenário para caminhada e corrida litorânea.',
    'Praças com aparelhos públicos de ginástica ampliam o treino funcional nos bairros.',
    'Proximidade com o Recife pela BR-101 amplia as opções de academias e profissionais.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Entre o casario tombado mais antigo do Brasil e a orla do litoral norte, Igarassu oferece cenários variados para treinar — das ladeiras históricas à areia de Mangue Seco. Um personal trainer ajuda a transformar essa geografia em um plano consistente, respeitando o clima quente e úmido e o seu objetivo.',

  vizinhas: ['paulista-pe', 'olinda-pe', 'recife-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Igarassu', url: 'https://cidades.ibge.gov.br/brasil/pe/igarassu/panorama' },
    { nome: 'Prefeitura de Igarassu', url: 'https://igarassu.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
