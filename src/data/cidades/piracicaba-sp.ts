import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'piracicaba-sp',
  nome: 'Piracicaba',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'piracicabano',
  tipo: 'cidade',

  populacao: 423323,
  populacaoAno: 2022,
  idhm: 0.785,
  idhmClasse: 'alto',
  altitudeM: 547,

  resumoEconomico:
    'Piracicaba é um dos maiores polos sucroalcooleiros e de agroindústria do mundo, com forte indústria de equipamentos para o setor e presença automotiva e metalmecânica. É também um centro de educação e pesquisa de referência, graças à ESALQ-USP. A orla do Rio Piracicaba, com o histórico Engenho Central, dá à cidade um cenário único para a vida ao ar livre.',

  mercado:
    'A malha de academias é boa, com a Smart Fit há mais de uma década na cidade (Shopping Piracicaba e Avenida 31 de Março) e academias locais bem avaliadas. A cultura de corrida de rua é forte, muito ligada à orla do Rio Piracicaba, e o público universitário da ESALQ aquece a demanda por treino.',

  bairrosNobres: ['Nova Piracicaba', 'Terras do Engenho', 'Jardim Europa', 'Cidade Jardim'],
  bairrosPopulares: ['Vila Rezende', 'Paulicéia', 'Jupiá', 'Vila Sônia'],

  parques: [
    {
      nome: 'Parque do Piracicamirim',
      descricao:
        'Com cerca de 100 mil m², tem pista de caminhada, ciclovia interna, academia ao ar livre e playground — uma estrutura completa para treino no dia a dia.',
    },
    {
      nome: 'Parque da Rua do Porto (João Herrmann Neto)',
      descricao:
        'Com cerca de 200 mil m² na orla do rio, tem pista de caminhada e lago, sendo ponto de largada das principais corridas da cidade.',
    },
    {
      nome: 'Engenho Central (Barão de Rezende)',
      descricao:
        'Antigo engenho de 1881, hoje patrimônio histórico, com amplo espaço para caminhada às margens do Rio Piracicaba.',
    },
  ],
  ciclovias:
    'A cidade tem ciclovias e ciclofaixas, com destaque para os trechos da orla e da Rua do Porto, integrando o rio à rotina de quem treina ao ar livre.',

  clima:
    'O clima é tropical de altitude, com verões quentes e chuvosos e invernos amenos e secos (média anual entre 22 °C e 24 °C).',
  climaTreino:
    'O inverno seco é ótimo para treino ao ar livre; no verão, vale priorizar a manhã ou o fim de tarde para fugir do calor e das chuvas.',

  mobilidade:
    'A cerca de 150 km da capital, Piracicaba tem acesso pelas rodovias Anhanguera (SP-330) e dos Bandeirantes (SP-348), além da Rodovia do Açúcar e da Luiz de Queiroz, em uma região de forte malha viária.',

  corridas: [
    {
      nome: 'Meia Maratona de Piracicaba',
      descricao:
        'Provas de 5 km, 10 km e 21 km com largada no Parque da Rua do Porto, reunindo mais de 5 mil atletas.',
    },
    {
      nome: 'Maratona Internacional de Piracicaba',
      descricao:
        'Prova de rua de nível internacional sediada na cidade, reforçando a forte cena local de corrida.',
    },
  ],
  culturaEsportiva:
    'Piracicaba tem tradição forte de corrida de rua aproveitando a orla histórica do rio, e eventos universitários da ESALQ-USP reforçam a cena esportiva. Treinar à beira do Piracicaba é parte da identidade da cidade.',
  academias:
    'A oferta reúne a Smart Fit, consolidada como referência local, e academias e estúdios de bairro, com a orla funcionando como grande espaço de treino ao ar livre.',

  destaquesFitness: [
    'Orla do Rio Piracicaba (Rua do Porto e Engenho Central) como principal corredor de treino.',
    'Polo universitário ESALQ-USP, que gera público jovem e ativo.',
    'Smart Fit consolidada como rede de referência local.',
    'Parque do Piracicamirim com pista e academia ao ar livre.',
  ],

  precos: {
    avulsaMin: 75,
    avulsaMax: 170,
    mensalMin: 380,
    mensalMax: 1000,
    onlineMin: 175,
    onlineMax: 440,
  },

  conclusao:
    'Cidade de agroindústria forte e tradição universitária, Piracicaba tem na orla do rio o seu cartão-postal esportivo. Um personal trainer ajuda a transformar a Rua do Porto e os parques da cidade em um plano de treino consistente, do iniciante ao corredor de maratona.',

  vizinhas: ['campinas-sp', 'jundiai-sp', 'sorocaba-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Piracicaba', url: 'https://cidades.ibge.gov.br/brasil/sp/piracicaba/panorama' },
    { nome: 'Prefeitura de Piracicaba', url: 'https://www.piracicaba.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
