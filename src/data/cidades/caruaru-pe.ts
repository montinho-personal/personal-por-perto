import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'caruaru-pe',
  nome: 'Caruaru',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'caruaruense',
  tipo: 'cidade',

  populacao: 378048,
  populacaoAno: 2022,
  idhm: 0.677,
  idhmClasse: 'médio',
  altitudeM: 554,

  resumoEconomico:
    'Conhecida como a "Capital do Agreste", Caruaru é o principal polo comercial e de serviços do interior pernambucano. Sedia a Feira de Caruaru (uma das maiores feiras livres do Brasil, Patrimônio Imaterial) e um forte Polo de Confecções, além de ser referência cultural do forró e do maior São João do mundo. O clima de altitude, mais ameno e seco que o do litoral, favorece o treino ao ar livre.',

  mercado:
    'O mercado fitness é aquecido pela renda do polo comercial e pelo crescimento da zona norte, com grandes redes (Smart Fit, Skyfit) e academias locais relevantes oferecendo musculação, funcional, boxe e mais. A Via Parque consolidou o treino ao ar livre na cidade.',

  bairrosNobres: ['Maurício de Nassau', 'Salgado', 'Boa Vista', 'Universitário'],
  bairrosPopulares: ['Kennedy', 'Maria Auxiliadora', 'Panorama', 'Alto do Moura'],

  parques: [
    {
      nome: 'Via Parque',
      descricao:
        'Corredor urbano de cerca de 7 km por 14 bairros, com ciclovia, academia da saúde, academia da terceira idade, parques infantis e quadras poliesportivas — a principal infraestrutura de treino ao ar livre da cidade.',
    },
    {
      nome: 'Estação Criativa (antiga Estação Ferroviária)',
      descricao:
        'Complexo requalificado que ancora a Via Parque, usado para caminhada e lazer em um cenário de museu a céu aberto.',
    },
    {
      nome: 'Academias da saúde da Via Parque',
      descricao:
        'Equipamentos de ginástica ao ar livre distribuídos ao longo do corredor, de acesso livre.',
    },
  ],
  ciclovias:
    'A Via Parque inclui ciclovia integrada ao longo dos cerca de 7 km do corredor, ligando as zonas oeste e leste da cidade.',

  clima:
    'O clima é semiárido de altitude (no Planalto da Borborema), com temperaturas amenas (cerca de 17 °C a 32 °C) e ar mais seco que o do litoral.',
  climaTreino:
    'As condições são mais agradáveis para treino ao ar livre do que no litoral, mas vale atenção ao sol forte e à baixa umidade ao meio-dia — manhã e fim de tarde são as melhores janelas.',

  mobilidade:
    'O acesso é pelas BR-232 (que liga ao Recife, a cerca de 130 km) e BR-104. Caruaru é o principal hub rodoviário do interior pernambucano, sem metrô (o Metrô do Recife atende apenas a região metropolitana da capital).',

  corridas: [
    {
      nome: 'Meia Maratona 21K por Paixão',
      descricao:
        'Prova anual realizada na Sexta-feira da Paixão, com largada na cidade e percurso pelas margens da BR-104.',
    },
    {
      nome: 'Corridas na Via Parque',
      descricao:
        'Provas e treinos coletivos no corredor da Via Parque, ponto consolidado de corrida urbana na cidade.',
    },
  ],
  culturaEsportiva:
    'A inauguração da Via Parque consolidou a corrida e o ciclismo urbano em Caruaru, e o clima de altitude favorece a atividade ao ar livre, com um calendário ativo de provas no agreste.',
  academias:
    'A oferta reúne grandes redes (Smart Fit, Skyfit) e academias locais consolidadas, com musculação e funcional em alta, complementadas pela estrutura pública da Via Parque.',

  destaquesFitness: [
    'Via Parque (cerca de 7 km): principal infraestrutura de treino ao ar livre da cidade.',
    'Clima de altitude, mais ameno — vantagem para corrida e ciclismo.',
    'Forte presença de redes nacionais (Smart Fit, Skyfit) e academias locais.',
    'Meia Maratona 21K por Paixão como evento-âncora da corrida local.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 140,
    mensalMin: 300,
    mensalMax: 820,
    onlineMin: 150,
    onlineMax: 390,
  },

  conclusao:
    'Capital do Agreste e cidade de altitude, Caruaru tem na Via Parque um corredor ideal para correr e pedalar, além de um mercado de academias aquecido. Um personal trainer ajuda a aproveitar esse cenário com método, respeitando o sol forte e a baixa umidade do clima semiárido.',

  vizinhas: ['recife-pe', 'campina-grande-pb', 'olinda-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Caruaru', url: 'https://cidades.ibge.gov.br/brasil/pe/caruaru/panorama' },
    { nome: 'Prefeitura de Caruaru', url: 'https://www.caruaru.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-31',
  capaArte: {
    src: '/capas-cidade/caruaru-pe.webp',
    w: 1200,
    h: 849,
    alt: 'Arte de capa de personal trainer em Caruaru: atletas treinando com halteres em colagem com a Feira de Caruaru, o Pátio de Eventos Luiz Gonzaga, as esculturas de barro do Alto do Moura e o Morro do Bom Jesus',
    legenda: 'Treino personalizado em Caruaru: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
