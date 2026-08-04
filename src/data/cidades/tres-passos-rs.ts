import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tres-passos-rs',
  nome: 'Três Passos',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'três-passense',
  tipo: 'cidade',

  populacao: 25436,
  populacaoAno: 2022,
  idhm: 0.768,
  idhmClasse: 'alto',
  altitudeM: 448,

  resumoEconomico:
    'Polo da região Celeiro, no noroeste gaúcho, Três Passos cresceu em torno da agroindústria — a tradição frigorífica e a produção de leite e suínos seguem no centro da economia, com PIB per capita na casa dos R$ 48 mil. A cidade também é porta de entrada da região do Salto do Yucumã, o grande cartão-postal natural do noroeste do estado.',

  mercado:
    'A renda estável da agroindústria e o perfil de polo regional de serviços sustentam academias movimentadas e uma demanda crescente por treino orientado. A população cresceu 6% na última década — na contramão de boa parte do interior gaúcho —, e o mercado de bem-estar acompanha o fôlego.',

  bairrosNobres: ['Centro', 'Érico Veríssimo', 'Jardim Primavera', 'Boa Vista'],
  bairrosPopulares: ['Operária', 'São João', 'Cristo Rei', 'Industrial'],

  parques: [
    {
      nome: 'Praças centrais e ruas arborizadas',
      descricao:
        'O centro compacto concentra as caminhadas diárias e a vida comunitária, no padrão das cidades de colonização do noroeste gaúcho.',
    },
    {
      nome: 'Interior rural e linhas coloniais',
      descricao:
        'As estradas do interior, entre lavouras e mata, rendem pedais e caminhadas longas com o relevo ondulado da região como resistência natural.',
    },
    {
      nome: 'Região do Salto do Yucumã',
      descricao:
        'A cerca de meia hora, o Parque Estadual do Turvo guarda o Salto do Yucumã — a maior queda longitudinal do mundo — e trilhas de mata nativa que valem a excursão de fim de semana.',
    },
  ],
  ciclovias:
    'O pedal de estrada é forte nas rotas entre os municípios da região Celeiro; a malha cicloviária urbana ainda é limitada e sem extensão oficial divulgada.',

  clima:
    'Clima subtropical úmido, com verões quentes, invernos frios e chuvas bem distribuídas — o padrão do noroeste gaúcho.',
  climaTreino:
    'No verão, treina-se nas pontas do dia; no inverno, o meio do dia é a melhor janela — com a academia coberta segurando a constância nas semanas de frio e chuva.',

  mobilidade:
    'Três Passos se conecta pelas rodovias regionais a Santa Rosa e Ijuí, os grandes polos vizinhos do noroeste — na prática, um mercado regional integrado de serviços.',

  corridas: [
    {
      nome: 'Provas da região Celeiro e do noroeste',
      descricao:
        'O calendário regional de corridas de rua circula pelos municípios do noroeste gaúcho, com percursos de 5 km e 10 km e forte adesão comunitária.',
    },
  ],
  culturaEsportiva:
    'A vida associativa herdada da colonização — clubes, ginásios e festas comunitárias — mantém o esporte no centro da rotina, do futsal à corrida de rua.',
  academias:
    'A oferta reúne academias de musculação e personal trainers no centro e nos bairros, atendendo do produtor rural ao profissional liberal do polo de serviços.',

  destaquesFitness: [
    'Polo da região Celeiro, com renda agroindustrial estável.',
    'Relevo ondulado do noroeste como resistência natural para pedais e caminhadas.',
    'Salto do Yucumã a meia hora — trilhas e natureza para o fim de semana.',
    'População em crescimento, com mercado de treino em expansão.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Polo agroindustrial do noroeste gaúcho e porta do Salto do Yucumã, Três Passos combina renda estável, vida comunitária forte e natureza por perto. Um personal trainer transforma essa base em rotina de treino consistente — no centro, no interior ou na trilha.',

  vizinhas: ['santa-rosa-rs', 'ijui-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Três Passos', url: 'https://cidades.ibge.gov.br/brasil/rs/tres-passos/panorama' },
    { nome: 'Prefeitura de Três Passos', url: 'https://trespassos-rs.com.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-04',
};
