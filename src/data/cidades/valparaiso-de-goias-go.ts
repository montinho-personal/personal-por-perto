import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'valparaiso-de-goias-go',
  nome: 'Valparaíso de Goiás',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'valparaisense',
  tipo: 'cidade',

  populacao: 198861,
  populacaoAno: 2022,
  idhm: 0.746,
  idhmClasse: 'alto',
  altitudeM: 1080,

  resumoEconomico:
    'Na divisa com o Distrito Federal, Valparaíso de Goiás é a sexta cidade mais populosa do estado e uma das que mais cresceram no país segundo o Censo 2022. Faz parte do Entorno do DF (RIDE) e funciona, em boa medida, como cidade-dormitório de Brasília: grande parte da população trabalha ou estuda na capital, deslocando-se pela BR-040. A economia local é puxada por comércio e serviços, com uma mancha urbana praticamente conurbada com o Gama (DF).',

  mercado:
    'Cidade grande e em expansão acelerada, Valparaíso tem demanda forte por bem-estar e estética, num público que muitas vezes faz a rotina dividida entre a cidade e Brasília. O mercado fitness se organiza em academias de bairro espalhadas por setores como Céu Azul e Parque Esplanada, além de espaço crescente para atendimento domiciliar e online — formato que se encaixa bem em quem enfrenta longos deslocamentos diários até o DF.',

  bairrosNobres: ['Cidade Jardins', 'Parque Rio Branco', 'Chácaras e Mansões Santa Maria', 'Jardim Oriente'],
  bairrosPopulares: ['Jardim Céu Azul', 'Parque Esplanada', 'Vila Guaíra', 'Chácaras Anhanguera'],

  parques: [
    {
      nome: 'Centro Poliesportivo Municipal José Ribamar Porfírio de Sousa',
      descricao:
        'Localizado na Praça Central do Céu Azul, é o principal equipamento esportivo público da cidade e ponto de partida de eventos como a Corrida da Independência.',
    },
    {
      nome: 'Academia pública em parque',
      descricao:
        'A cidade inaugurou sua primeira academia pública em parque, com estrutura ao ar livre e acesso gratuito, reforçando a oferta de espaços para treino na rede municipal.',
    },
    {
      nome: 'Praças de bairro',
      descricao:
        'Praças como a Central do Céu Azul e a do Pacaembu concentram caminhada, lazer e eventos, servindo de apoio para o treino ao ar livre nos setores residenciais.',
    },
  ],
  ciclovias:
    'A mobilidade ativa ainda é incipiente e convive com vias movimentadas; passarelas construídas em pontos críticos, como entre Parque Esplanada III e Parque Rio Branco, ajudam na travessia segura de pedestres.',

  clima:
    'O clima é tropical de savana, típico do Planalto Central, com temperaturas amenizadas pela altitude (cerca de 1.080 m) e chuvas concentradas entre novembro e março.',
  climaTreino:
    'Dá para treinar ao ar livre o ano todo; no período seco (maio a setembro), a baixa umidade do Centro-Oeste pede atenção redobrada à hidratação, sobretudo nos horários mais quentes.',

  mobilidade:
    'Cortada pela BR-040, Valparaíso é praticamente conurbada com o Gama (DF) e tem forte fluxo pendular com Brasília, com transporte rodoviário ligando a cidade ao Distrito Federal. O trânsito intenso na rodovia é parte da rotina de quem mora aqui e trabalha na capital.',

  corridas: [
    {
      nome: 'Corrida da Independência',
      descricao:
        'Prova de 7 km promovida pela prefeitura em outubro, com largada no Centro Poliesportivo Municipal, no Céu Azul, reunindo atletas amadores e profissionais da região.',
    },
    {
      nome: 'Corrida Pela Vida',
      descricao:
        'Evento de corrida de rua realizado na cidade, que reforça o calendário esportivo local e a adesão crescente ao running no Entorno do DF.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva cresce junto com a cidade, apoiada em corridas de rua organizadas pela prefeitura, no uso de praças e na nova academia pública em parque. A proximidade com o Distrito Federal aproxima a população de um circuito esportivo mais amplo na capital.',
  academias:
    'A oferta é dominada por academias de bairro distribuídas pelos setores residenciais, complementadas por estúdios menores e por personal trainers que atendem em casa ou online, formato útil para quem se desloca diariamente até Brasília.',

  destaquesFitness: [
    'Cidade grande e em crescimento acelerado, com demanda fitness em expansão.',
    'Corrida da Independência e outras provas no calendário da prefeitura.',
    'Academia pública em parque e praças usadas para treino ao ar livre.',
    'Perfil de cidade-dormitório do DF favorece atendimento domiciliar e online.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 680,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade-dormitório de Brasília em rápido crescimento, Valparaíso de Goiás combina rotina puxada de quem se divide com o DF e uma rede fitness de bairro em expansão. Um personal trainer ajuda a encaixar o treino nessa rotina — seja na academia do setor, em casa ou online — com um plano sob medida.',

  vizinhas: ['brasilia-df', 'goiania-go', 'aparecida-de-goiania-go'],

  fontes: [
    { nome: 'IBGE Cidades — Valparaíso de Goiás', url: 'https://cidades.ibge.gov.br/brasil/go/valparaiso-de-goias/panorama' },
    { nome: 'Prefeitura de Valparaíso de Goiás', url: 'https://valparaisodegoias.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
