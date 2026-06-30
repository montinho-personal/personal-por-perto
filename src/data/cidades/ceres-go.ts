import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ceres-go',
  nome: 'Ceres',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'ceresino',
  tipo: 'cidade',

  populacao: 22046,
  populacaoAno: 2022,
  idhm: 0.775,
  idhmClasse: 'alto',
  altitudeM: 564,

  resumoEconomico:
    'No coração do Vale do São Patrício, no centro-norte goiano, Ceres nasceu da Colônia Agrícola Nacional de Goiás e se firmou como cidade planejada às margens do rio das Almas. Apesar do porte pequeno, exerce forte polarização regional: é um reconhecido polo médico e de saúde, com hospitais, clínicas e serviços que atendem dezenas de municípios da região, e também um polo educacional, com instituições de ensino superior na área de saúde. A economia combina esse setor de serviços com o comércio, a agropecuária (milho, soja, arroz, abacaxi, banana e pecuária de corte) e a cadeia sucroalcooleira que se expandiu pela microrregião.',

  mercado:
    'O mercado fitness de Ceres acompanha o perfil de cidade média de serviços do interior goiano, com academias de musculação e treino funcional concentradas nos setores centrais e residenciais. A presença de profissionais e estudantes da área de saúde e o fluxo regional puxam a procura por treino orientado, e o personal trainer encontra espaço entre quem busca acompanhamento individual e quem quer aproveitar a orla do rio das Almas e as praças esportivas para treinar ao ar livre.',

  bairrosNobres: ['Centro', 'Setor Sul', 'Vila Aparecida', 'Jardim Vale do Sol'],
  bairrosPopulares: ['Setor Norte', 'Bandeirante', 'Vila Esperança', 'Setor Industrial'],

  parques: [
    {
      nome: 'Parque do Lago',
      descricao:
        'Complexo de lazer às margens do rio das Almas, com lago para esportes e recreação, pistas de caminhada, quadras e quiosques — o principal espaço público para caminhada, corrida e treino ao ar livre na cidade.',
    },
    {
      nome: 'Orla e praia artificial do rio das Almas',
      descricao:
        'O rio das Almas é o cartão-postal de Ceres, com praia artificial, áreas esportivas e calçadões que atraem moradores para atividades ao ar livre, especialmente nos fins de semana e na estação seca.',
    },
    {
      nome: 'Praça Cívica',
      descricao:
        'No setor central da cidade planejada, reúne os poderes municipais e é ponto de referência urbano; o entorno arborizado e as avenidas largas servem de percurso para caminhada no dia a dia.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta, apoiada nas avenidas largas que marcam o traçado planejado da cidade; boa parte do pedal e da corrida acontece nessas vias e no entorno do rio das Almas e do Parque do Lago.',

  clima:
    'O clima é tropical de Cerrado, com duas estações bem definidas: o verão quente e chuvoso (de outubro a abril) e o inverno seco e ameno (de maio a setembro), quando a umidade do ar cai bastante e as tardes ficam quentes, com manhãs e noites mais frescas.',
  climaTreino:
    'O calor do meio do dia e a baixa umidade no período seco pedem treino no início da manhã ou no fim da tarde, com hidratação reforçada; na estação seca, a atenção à umidade do ar é importante, enquanto o verão chuvoso favorece os horários mais frescos para atividades ao ar livre.',

  mobilidade:
    'Ceres é cortada pela BR-153 (rodovia Belém-Brasília), eixo que historicamente impulsionou a cidade e sustenta seu papel de polo médico e de serviços para o Vale do São Patrício. O rio das Almas separa Ceres de Rialma, ligada por ponte, formando uma conurbação. O deslocamento interno é curto, favorecido pelo traçado planejado e pelas avenidas largas.',

  corridas: [
    {
      nome: 'Corrida e Caminhada Ceres + Saúde',
      descricao:
        'Evento de corrida e caminhada de rua realizado na cidade, que reúne moradores da região em provas de percursos curtos, reforçando a vocação de Ceres como polo de saúde do Vale do São Patrício.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local gira em torno do rio das Almas e do Parque do Lago, usados para caminhada, corrida e lazer, e de eventos de corrida e caminhada associados ao perfil de cidade-polo de saúde — tudo dentro do ritmo de uma cidade planejada e de porte pequeno do interior goiano.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos setores residenciais, com porte compatível com uma cidade média de serviços do interior.',

  destaquesFitness: [
    'Cidade planejada do Vale do São Patrício, às margens do rio das Almas.',
    'Polo médico e educacional que atende toda a região centro-norte de Goiás.',
    'Parque do Lago e orla do rio das Almas como espaços de caminhada e corrida ao ar livre.',
    'Clima de Cerrado com inverno seco, que pede atenção à hidratação e aos horários de treino.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 115,
    onlineMax: 330,
  },

  conclusao:
    'Cidade planejada, tranquila e voltada para serviços de saúde, Ceres oferece um cenário favorável a quem quer treinar com constância, aproveitando o rio das Almas e o Parque do Lago. Um personal trainer ajuda a montar uma rotina adaptada ao clima de Cerrado, escolhendo os melhores horários e mantendo a regularidade ao longo das estações seca e chuvosa.',

  vizinhas: ['goianesia-go', 'anapolis-go'],

  fontes: [
    { nome: 'IBGE Cidades — Ceres', url: 'https://cidades.ibge.gov.br/brasil/go/ceres/panorama' },
    { nome: 'Prefeitura de Ceres', url: 'https://ceres.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
