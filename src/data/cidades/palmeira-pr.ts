import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'palmeira-pr',
  nome: 'Palmeira',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'palmeirense',
  tipo: 'cidade',

  populacao: 33855,
  populacaoAno: 2022,
  idhm: 0.718,
  idhmClasse: 'alto',
  altitudeM: 865,

  resumoEconomico:
    'Município dos Campos Gerais paranaenses, na microrregião de Ponta Grossa e a cerca de 80 km de Curitiba, Palmeira tem origem na rota dos tropeiros que cruzava a região rumo a São Paulo. A economia é fortemente ligada à agropecuária, com destaque para a pecuária leiteira, a produção de grãos (soja e milho) e a avicultura e suinocultura. A tradição de imigração — alemães do Volga e a Colônia Witmarsum, fundada por menonitas em 1951 — consolidou uma forte cadeia de laticínios, com queijos que receberam selo de indicação geográfica. Indústria e comércio completam o quadro de uma cidade média do interior do Sul.',

  mercado:
    'O mercado fitness de Palmeira tem o porte de uma cidade média do interior, concentrado em academias locais de musculação e treino funcional, estúdios e profissionais autônomos. A procura por personal trainers cresce entre quem busca acompanhamento individualizado para treinar com constância apesar do inverno rigoroso e do estilo de vida ligado ao campo e às colônias rurais.',

  bairrosNobres: ['Centro', 'Colônia Witmarsum'],
  bairrosPopulares: ['Papagaios Novos', 'Colônia Quero-Quero', 'Capão da Anta'],

  parques: [
    {
      nome: 'Praça Marechal Floriano Peixoto',
      descricao:
        'Praça central de Palmeira, ponto de encontro tradicional cercado pelo casario e pela história da imigração europeia — espaço usado para caminhada leve e atividades ao ar livre no coração da cidade.',
    },
    {
      nome: 'Lago da Colônia Witmarsum',
      descricao:
        'Lago artificial na região central da Colônia Witmarsum, cercado por amplo gramado e arborização, acessível pela BR-277; cenário procurado para caminhada e corrida em meio à paisagem rural e germânica.',
    },
    {
      nome: 'Represa e Rio do Salto',
      descricao:
        'Área natural a cerca de 19 km da sede, com acesso pela BR-277, que reúne natureza e represa — opção para quem busca atividade ao ar livre e contato com o entorno rural dos Campos Gerais.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária urbana é modesta, típica de cidade média do interior; boa parte do pedal e da corrida acontece nas vias da área central e nas estradas rurais que ligam a sede às colônias e ao distrito de Papagaios Novos.',

  clima:
    'Palmeira fica a cerca de 865 m de altitude e tem clima subtropical de altitude (Cfb), com verões amenos e invernos frios. As temperaturas oscilam bastante ao longo do ano e o inverno traz geadas frequentes, com mínimas que se aproximam de 0 °C — a cidade é conhecida pelo clima ameno e seco que marca a região dos Campos Gerais.',
  climaTreino:
    'O frio do inverno, com geadas e manhãs muito geladas, pede aquecimento mais longo e roupa em camadas para o treino ao ar livre, além de cuidado nos horários de menor temperatura. Os dias amenos da primavera e do verão são os mais favoráveis às atividades externas, enquanto ambientes fechados garantem constância nos meses mais rigorosos.',

  mobilidade:
    'Palmeira é cortada pela BR-277, principal eixo que liga Curitiba ao oeste do estado, e conta ainda com acesso pela BR-376 e pela PR-151. Essa posição estratégica nos Campos Gerais facilita o deslocamento até Ponta Grossa e à capital, enquanto o transporte interno é feito por ônibus e pelas vias que conectam a sede aos distritos e colônias rurais.',

  corridas: [
    {
      nome: 'Rota dos Tropeiros',
      descricao:
        'Roteiro turístico e de cavalgadas que passa por Palmeira e pela região dos Campos Gerais, resgatando o caminho histórico dos tropeiros — referência para quem gosta de trilhas, caminhadas e atividades ao ar livre em meio à natureza.',
    },
    {
      nome: 'Provas regionais dos Campos Gerais',
      descricao:
        'Palmeira integra o circuito de corridas de rua e provas rústicas promovidas em cidades da região, como Ponta Grossa, que atraem corredores locais e do entorno ao longo do calendário.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Palmeira combina a herança rural e tropeira com o uso das praças e estradas das colônias para caminhada, corrida e ciclismo. A forte presença das comunidades de imigrantes, sobretudo a Colônia Witmarsum, agrega tradições de vida ativa ligadas ao campo e ao convívio comunitário.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional e por estúdios distribuídos pela área central e nos bairros residenciais, com porte compatível com uma cidade média do interior paranaense.',

  destaquesFitness: [
    'Cidade dos Campos Gerais paranaenses, na rota histórica dos tropeiros e a cerca de 80 km de Curitiba.',
    'Clima subtropical de altitude (865 m), com inverno frio e geadas que pedem treino adaptado.',
    'Colônia Witmarsum e tradição leiteira: paisagem rural e germânica como cenário para atividade ao ar livre.',
    'BR-277 e acesso por BR-376 e PR-151, que conectam a cidade a Ponta Grossa e à capital.',
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
    'Cidade de clima frio, raízes tropeiras e forte vocação rural, Palmeira pede um treino que respeite o inverno rigoroso e aproveite as praças, lagos e estradas das colônias. Um personal trainer ajuda a montar uma rotina constante, ajustando horários ao frio e mantendo a motivação ao longo das estações nos Campos Gerais.',

  vizinhas: ['ponta-grossa-pr', 'irati-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Palmeira', url: 'https://cidades.ibge.gov.br/brasil/pr/palmeira/panorama' },
    { nome: 'Prefeitura de Palmeira', url: 'https://palmeira.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
