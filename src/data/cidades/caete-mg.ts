import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'caete-mg',
  nome: 'Caeté',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'caeteense',
  tipo: 'cidade',

  populacao: 38776,
  populacaoAno: 2022,
  idhm: 0.728,
  idhmClasse: 'alto',
  altitudeM: 872,

  resumoEconomico:
    'Cidade histórica do Ciclo do Ouro na Região Metropolitana de Belo Horizonte, aos pés da Serra da Piedade, Caeté combina mineração, turismo religioso e a proximidade com a capital. A extração e o beneficiamento mineral (com destaque para metais preciosos e ferro no Quadrilátero Ferrífero) pesam na economia, ao lado do comércio, dos serviços e do fluxo de romeiros e visitantes atraídos pelo Santuário Basílica de Nossa Senhora da Piedade. A ligação pela MG-435 até a BR-381 mantém a cidade integrada à dinâmica econômica da Grande BH.',

  mercado:
    'Como cidade de porte médio-pequeno na órbita de Belo Horizonte, o mercado fitness de Caeté é formado por academias locais de musculação e treino funcional, e parte da população treina ou frequenta estúdios na capital e em Sabará. A procura por personal trainers tende a crescer entre quem quer aproveitar o relevo acidentado e as trilhas da Serra da Piedade para treino ao ar livre, além de quem busca acompanhamento individual sem depender do deslocamento até a Grande BH.',

  bairrosNobres: ['Centro', 'Nossa Senhora do Carmo', 'Vila Ferreira', 'Bela Vista'],
  bairrosPopulares: ['Antônio Ferreira', 'Roças Novas', 'Morro Vermelho', 'Padre Eustáquio'],

  parques: [
    {
      nome: 'Serra da Piedade',
      descricao:
        'Marco da cidade e uma das áreas de maior altitude da Região Metropolitana de BH, com o Pico da Piedade acima dos 1.700 metros. A subida entre a cidade e o Santuário é percurso clássico para caminhada, pedal e corrida em montanha, com vista panorâmica sobre a Grande BH.',
    },
    {
      nome: 'Santuário Basílica de Nossa Senhora da Piedade',
      descricao:
        'No alto da serra, o conjunto religioso e o entorno reúnem romeiros e visitantes; a estrada de acesso e as trilhas de subida servem de percurso para quem treina ao ar livre em meio à Mata Atlântica e ao cerrado.',
    },
    {
      nome: 'Centro Histórico de Caeté',
      descricao:
        'O casario colonial, as igrejas e as ladeiras do centro compõem um circuito de caminhada urbana em terreno inclinado, que exige preparo físico e favorece o treino de subidas na própria cidade.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária urbana é modesta; grande parte do pedal e da corrida acontece nas vias da cidade e, sobretudo, na subida da Serra da Piedade, percurso muito procurado por ciclistas da região metropolitana em desafios de montanha.',

  clima:
    'O clima é tropical de altitude, com temperatura média anual em torno de 22 °C, verões chuvosos e invernos mais secos e amenos. A altitude e o relevo montanhoso deixam as noites e as madrugadas mais frias que na média da região, especialmente no inverno, entre maio e agosto, quando predomina o tempo seco.',
  climaTreino:
    'A altitude e o clima ameno favorecem o treino ao ar livre boa parte do ano, com destaque para as subidas da serra. No verão chuvoso convém planejar o horário para evitar as pancadas de chuva do fim da tarde; no inverno seco, o ar mais frio pela manhã pede aquecimento cuidadoso antes das atividades de maior intensidade.',

  mobilidade:
    'Caeté fica a cerca de 50 km de Belo Horizonte e se conecta à capital principalmente pela MG-435, que dá acesso à BR-381 (Fernão Dias / Rodovia da Morte). O transporte urbano e intermunicipal é feito por ônibus, com linhas ligando a cidade a Sabará e à Grande BH; o relevo acidentado marca os deslocamentos internos.',

  corridas: [
    {
      nome: 'Desafios de subida da Serra da Piedade',
      descricao:
        'A subida entre Caeté e o Santuário é palco recorrente de eventos de ciclismo e cicloturismo de montanha (uphill), que exploram o ganho de altitude e a paisagem da serra.',
    },
    {
      nome: 'Provas de rua da região metropolitana',
      descricao:
        'Corredores de Caeté costumam participar de provas de rua e de trilha realizadas na Grande BH e em cidades vizinhas, aproveitando a proximidade com o calendário esportivo da capital.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Caeté é marcada pelo uso da Serra da Piedade para caminhada, pedal e corrida de montanha, pela peregrinação a pé até o Santuário e pelo relevo acidentado que torna o próprio dia a dia um treino de subidas. A proximidade com Belo Horizonte amplia o acesso a provas e eventos da região metropolitana.',
  academias:
    'A oferta é composta principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média da Região Metropolitana de Belo Horizonte.',

  destaquesFitness: [
    'Serra da Piedade: subida clássica de montanha e um dos pontos mais altos da Grande BH, com o Pico da Piedade acima dos 1.700 metros.',
    'Clima tropical de altitude, ameno, que favorece o treino ao ar livre boa parte do ano.',
    'Relevo acidentado e centro histórico em ladeira, ideais para treino de subidas na própria cidade.',
    'Cidade da Região Metropolitana de Belo Horizonte, com economia de mineração e turismo religioso e fácil acesso pela MG-435 e BR-381.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade histórica de altitude na Região Metropolitana de Belo Horizonte, Caeté oferece um cenário raro para treinar: a Serra da Piedade, o clima ameno e o relevo de subidas na porta de casa. Um personal trainer ajuda a aproveitar esse terreno com segurança, organizando a rotina, ajustando a intensidade nas subidas e mantendo a constância ao longo das estações.',

  vizinhas: ['sabara-mg', 'santa-luzia-mg', 'belo-horizonte-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Caeté', url: 'https://cidades.ibge.gov.br/brasil/mg/caete/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Minas 300 Anos — Turismo religioso em Caeté', url: 'https://www.minas300anos.mg.gov.br/noticias-e-artigos/caete-se-destaca-como-importante-local-para-o-turismo-religioso/' },
  ],
  atualizadoEm: '2026-06-29',
};
