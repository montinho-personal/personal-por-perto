import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'senador-canedo-go',
  nome: 'Senador Canedo',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'canedense',
  tipo: 'cidade',

  populacao: 155635,
  populacaoAno: 2022,
  idhm: 0.703,
  idhmClasse: 'alto',
  altitudeM: 785,

  resumoEconomico:
    'Conurbada com a capital, Senador Canedo integra a Região Metropolitana de Goiânia e foi a cidade que mais cresceu em população no país entre 2010 e 2022, segundo o Censo do IBGE. A economia tem forte peso logístico e de distribuição de combustíveis — a cidade concentra um terminal da Transpetro e bases de distribuição de derivados de petróleo e GLP —, além de comércio, serviços e indústria. Esse crescimento acelerado e a proximidade de Goiânia, um dos maiores polos de musculação do país, sustentam um mercado fitness em expansão.',

  mercado:
    'O mercado fitness acompanha o ritmo de crescimento da cidade: academias de bairro, redes populares e estúdios de funcional e crossfit se multiplicam à medida que novos loteamentos e condomínios são entregues, com a proximidade de Goiânia ampliando referências e opções de treino.',

  bairrosNobres: ['Setor Central', 'Jardim das Oliveiras', 'Vila Galvão', 'Jardim Canedo'],
  bairrosPopulares: ['Jardim Maria Inês', 'Residencial Alice Barbosa', 'Setor Vila Bonsucesso', 'Parque das Laranjeiras'],

  parques: [
    {
      nome: 'Parque da Família',
      descricao:
        'Revitalizado com playground, academia ao ar livre, quadra esportiva e espaço pet, é um dos principais pontos de lazer e treino ao ar livre da cidade.',
    },
    {
      nome: 'Pista de caminhada da Avenida Dom Emanuel',
      descricao:
        'Com academia ao ar livre, virou referência de bem-estar nos fins de tarde, reunindo caminhantes e corredores amadores.',
    },
    {
      nome: 'Avenida Pedro Miranda',
      descricao:
        'Recebe treinos gratuitos de corrida promovidos pela prefeitura, integrando a estrutura de atividade física aberta à comunidade.',
    },
  ],
  ciclovias:
    'A mobilidade ativa avança junto com a urbanização recente, com vias e avenidas largas que abrigam pistas de caminhada e espaços para exercício ao ar livre.',

  clima:
    'O clima é tropical de savana (Cerrado), com média em torno de 22 °C, verão chuvoso entre outubro e março e estação seca marcante de maio a setembro.',
  climaTreino:
    'Dá para treinar ao ar livre o ano todo; na estação seca, a baixa umidade e o calor do meio-dia pedem atenção à hidratação e preferência por treinos no início da manhã ou no fim da tarde.',

  mobilidade:
    'Vizinha de Goiânia e a poucos quilômetros do centro da capital, Senador Canedo é integrada à Região Metropolitana de Goiânia e servida por acessos pavimentados como a GO-403, o que facilita o deslocamento diário entre as duas cidades.',

  corridas: [
    {
      nome: 'Corrida de Rua de Aniversário de Senador Canedo',
      descricao:
        'Promovida pela prefeitura para celebrar a emancipação do município, com percurso de 5 km que mobiliza corredores locais.',
    },
    {
      nome: 'Corrida Ecológica de Senador Canedo',
      descricao:
        'Evento já consolidado no calendário, une corrida de rua e consciência ambiental.',
    },
  ],
  culturaEsportiva:
    'A cidade tem adesão crescente a corridas de rua, treinos gratuitos abertos à comunidade e uso de pistas de caminhada e academias ao ar livre, integrada ao circuito esportivo da Região Metropolitana de Goiânia — uma das praças de musculação mais fortes do país.',
  academias:
    'A oferta reúne academias de bairro, redes populares e estúdios de funcional e crossfit, em expansão acompanhando o crescimento urbano e com a proximidade de Goiânia ampliando opções.',

  destaquesFitness: [
    'Cidade que mais cresceu em população no país entre 2010 e 2022 (Censo IBGE).',
    'Parques e pistas de caminhada com academia ao ar livre.',
    'Treinos gratuitos de corrida promovidos pela prefeitura.',
    'Conurbação com Goiânia, que amplia mercado e cultura de musculação.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 290,
    mensalMax: 720,
    onlineMin: 140,
    onlineMax: 380,
  },

  conclusao:
    'Em pleno crescimento e colada a uma das capitais mais "fitness" do Brasil, Senador Canedo combina mercado em expansão com estrutura crescente de parques e pistas de caminhada. Um personal trainer ajuda a aproveitar esse ambiente — e a proximidade de Goiânia — com um plano de treino sob medida.',

  vizinhas: ['goiania-go', 'aparecida-de-goiania-go', 'anapolis-go'],

  fontes: [
    { nome: 'IBGE Cidades — Senador Canedo', url: 'https://cidades.ibge.gov.br/brasil/go/senador-canedo/panorama' },
    { nome: 'Prefeitura de Senador Canedo', url: 'https://senadorcanedo.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
