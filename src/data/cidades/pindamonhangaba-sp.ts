import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pindamonhangaba-sp',
  nome: 'Pindamonhangaba',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'pindamonhangabense',
  tipo: 'cidade',

  populacao: 165428,
  populacaoAno: 2022,
  idhm: 0.773,
  idhmClasse: 'alto',
  altitudeM: 560,

  resumoEconomico:
    'Conhecida como "Princesa do Norte", Pindamonhangaba fica no centro do Vale do Paraíba paulista, às margens do Rio Paraíba do Sul e cortada pela Via Dutra (BR-116), eixo entre São Paulo e Rio. A economia tem forte base industrial, com a metalurgia em destaque — siderurgia, tubos de aço e processamento e reciclagem de alumínio —, complementada por serviços e comércio.',

  mercado:
    'Cidade média e industrial do Vale, Pindamonhangaba tem mercado fitness em desenvolvimento, com academias de bairro, redes, estúdios de funcional e boxes de crossfit. Há espaço relevante para o atendimento domiciliar e em condomínios, atendendo trabalhadores das indústrias e moradores dos bairros residenciais.',

  bairrosNobres: ['Bosque', 'Santana', 'Centro', 'Mombaça'],
  bairrosPopulares: ['Moreira César', 'Cidade Nova', 'Araretama', 'Crispim'],

  parques: [
    {
      nome: 'Bosque da Princesa',
      descricao:
        'Às margens do Rio Paraíba do Sul, reúne pista de caminhada e corrida, lagos, pontes, academia ao ar livre, playground e muito verde — um dos cartões-postais da cidade.',
    },
    {
      nome: 'Parque da Cidade',
      descricao:
        'Área de lazer com pista de caminhada e corrida plana e bem sinalizada, quadras de areia, trilhas, pista de mountain bike e uma grande pump track pública para esportes radicais.',
    },
  ],
  ciclovias:
    'A cidade conta com trechos de ciclovia e ciclofaixa em avenidas e ao longo de áreas de lazer, com pedalada favorecida pelo relevo predominantemente plano da várzea do Paraíba.',

  clima:
    'O clima é tropical de altitude, com verão quente e chuvoso e inverno seco e ameno, a cerca de 560 metros de altitude no vale entre a Serra da Mantiqueira e a Serra do Mar.',
  climaTreino:
    'No verão úmido, o início da manhã e o fim de tarde são as melhores janelas para treino ao ar livre; o inverno seco e ameno favorece corridas e caminhadas ao longo do dia.',

  mobilidade:
    'Pindamonhangaba é cortada pela Rodovia Presidente Dutra (BR-116), principal ligação São Paulo–Rio, que conecta o centro ao distrito industrial e ao polo de Moreira César.',

  corridas: [
    {
      nome: 'Circuito Trilhas & Montanhas — Etapa Pindamonhangaba',
      descricao:
        'Etapa do circuito de corridas de trilha realizada na região, com percursos longo, médio e curto, além de categoria caminhada, em meio à natureza do Vale.',
    },
    {
      nome: 'Corridas de rua locais',
      descricao:
        'A cidade recebe provas pedestres ao longo do ano, com largadas em áreas centrais e percursos que aproveitam as orlas do Rio Paraíba do Sul.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso intenso das pistas do Bosque da Princesa e do Parque da Cidade com calendário de corridas de rua e de trilha, refletindo o gosto local por atividade ao ar livre no Vale do Paraíba.',
  academias:
    'A oferta reúne academias de bairro, redes, estúdios de treinamento funcional e boxes de crossfit, complementada por parques públicos gratuitos com pistas de caminhada e corrida e academias ao ar livre.',

  destaquesFitness: [
    'Bosque da Princesa, às margens do Rio Paraíba do Sul, com pista de caminhada e corrida e academia ao ar livre.',
    'Parque da Cidade, com pista plana, trilhas, mountain bike e grande pump track pública.',
    'Calendário de corridas de rua e de trilha na cidade e no entorno do Vale.',
    'Relevo plano da várzea do Paraíba, que favorece caminhada, corrida e pedalada.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Polo metalúrgico do Vale do Paraíba, a "Princesa do Norte" une orlas do Rio Paraíba do Sul, bons parques públicos e cena ativa de corrida. Um personal trainer ajuda a aproveitar o Bosque da Princesa e o Parque da Cidade com método, conciliando a rotina industrial com treino consistente ao ar livre ou em casa.',

  vizinhas: ['taubate-sp', 'sao-jose-dos-campos-sp', 'guaratingueta-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Pindamonhangaba', url: 'https://cidades.ibge.gov.br/brasil/sp/pindamonhangaba/panorama' },
    { nome: 'Prefeitura de Pindamonhangaba', url: 'https://www.pindamonhangaba.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
