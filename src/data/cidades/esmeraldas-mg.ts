import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'esmeraldas-mg',
  nome: 'Esmeraldas',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'esmeraldense',
  tipo: 'cidade',

  populacao: 85594,
  populacaoAno: 2022,
  idhm: 0.652,
  idhmClasse: 'médio',
  altitudeM: 754,

  resumoEconomico:
    'Esmeraldas fica no vetor oeste/noroeste da Região Metropolitana de Belo Horizonte, a cerca de 50 km da capital, com um dos maiores territórios da RMBH e forte perfil de cidade-dormitório: boa parte da população trabalha ou estuda em Belo Horizonte, Contagem e Ribeirão das Neves. A economia local se apoia em serviços e administração pública, com peso ainda relevante da agropecuária — o município já foi uma das grandes bacias leiteiras da região e mantém áreas rurais extensas —, além da histórica extração de areia. É uma das cidades com menor arrecadação por habitante do estado, o que se reflete na infraestrutura urbana.',

  mercado:
    'Como cidade-dormitório de porte médio na órbita de Belo Horizonte, o mercado fitness de Esmeraldas é enxuto e concentrado nos núcleos urbanos mais adensados, como o Centro e a região de Melo Viana. A demanda por personal trainers tende a vir de moradores que preferem treinar perto de casa para fugir do deslocamento diário até a capital, além de quem busca orientação para aproveitar as áreas verdes e o relevo do entorno.',

  bairrosNobres: ['Centro', 'Melo Viana', 'Retiro das Esmeraldas', 'Recanto Verde'],
  bairrosPopulares: ['Bandeirantes', 'Nova Esmeraldas', 'Andiroba', 'Vera Cruz'],

  parques: [
    {
      nome: 'Entorno do rio Paraopeba',
      descricao:
        'O rio Paraopeba corta a região metropolitana no entorno de Esmeraldas; suas margens e estradas vicinais servem de percurso para caminhada, corrida e pedal em meio à paisagem rural do município.',
    },
    {
      nome: 'Áreas rurais e trilhas do município',
      descricao:
        'Com um dos maiores territórios da RMBH e predomínio de vegetação de Cerrado, Esmeraldas tem estradas de terra, morros e trilhas que atraem praticantes de mountain bike, corrida em trilha e caminhada ao ar livre.',
    },
    {
      nome: 'Núcleo urbano de Melo Viana',
      descricao:
        'Distrito mais populoso e urbanizado do município, concentra praças e vias residenciais usadas no dia a dia por moradores para caminhada e atividade física perto de casa.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é limitada e a cidade tem perfil interiorano; grande parte do pedal acontece nas vias urbanas dos distritos e, sobretudo, nas estradas rurais e de terra que ligam os bairros espalhados pelo amplo território.',

  clima:
    'O clima é tropical de altitude, típico da porção central de Minas Gerais, com verão quente e chuvoso (de outubro a março) e inverno ameno e seco (de abril a setembro). A cerca de 750 metros de altitude e com predomínio do bioma Cerrado, a cidade tem baixa umidade no período seco e amplitude térmica marcada entre o dia e a noite.',
  climaTreino:
    'O verão chuvoso pede atenção às pancadas de fim de tarde e à hidratação no calor; o inverno seco favorece o treino ao ar livre pela manhã, mas a baixa umidade exige reforço na ingestão de água. As manhãs mais frescas e o fim da tarde são as melhores janelas para treinar nas ruas e trilhas.',

  mobilidade:
    'Esmeraldas se conecta a Belo Horizonte e ao restante da RMBH principalmente pelas rodovias estaduais MG-431 e MG-432, que canalizam o intenso fluxo pendular de quem trabalha na capital, em Contagem e em Ribeirão das Neves. O transporte é feito por linhas metropolitanas de ônibus, e a dispersão dos bairros pelo grande território torna o deslocamento interno dependente do carro e das estradas vicinais.',

  corridas: [
    {
      nome: 'Trilha das Esmeraldas',
      descricao:
        'Um dos maiores eventos esportivos do município, organizado pela prefeitura, com percursos de mountain bike e provas de corrida e caminhada em trilha que exploram a paisagem rural e o relevo da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local mistura o futebol de bairro, comum às cidades da RMBH, com o gosto crescente por atividades ao ar livre que aproveitam o território rural — trilhas de corrida e mountain bike, caminhadas e pedaladas nas estradas de terra. Eventos como a Trilha das Esmeraldas reforçam essa vocação para o esporte em contato com a natureza.',
  academias:
    'A oferta é formada por academias de musculação e treino funcional distribuídas pelos núcleos urbanos, com destaque para o Centro e a região de Melo Viana, em porte compatível com uma cidade-dormitório de médio porte na região metropolitana.',

  destaquesFitness: [
    'Cidade-dormitório da RMBH no vetor oeste/noroeste, a cerca de 50 km de Belo Horizonte pela MG-431/MG-432.',
    'Território amplo e rural, com estradas de terra e trilhas para corrida e mountain bike.',
    'Entorno do rio Paraopeba e paisagem de Cerrado como cenário para treino ao ar livre.',
    'Trilha das Esmeraldas: evento de MTB e corrida que movimenta o calendário esportivo local.',
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
    'Cidade-dormitório de grande território na Região Metropolitana de Belo Horizonte, Esmeraldas combina rotina puxada de deslocamento até a capital com um entorno rural convidativo para o treino ao ar livre. Um personal trainer ajuda a encaixar a atividade física na agenda apertada, escolher os melhores horários no clima tropical de altitude e aproveitar trilhas, estradas e o entorno do rio Paraopeba com segurança e constância.',

  vizinhas: ['contagem-mg', 'ribeirao-das-neves-mg', 'belo-horizonte-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Esmeraldas', url: 'https://cidades.ibge.gov.br/brasil/mg/esmeraldas/panorama' },
    { nome: 'Prefeitura de Esmeraldas', url: 'https://www.esmeraldas.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
