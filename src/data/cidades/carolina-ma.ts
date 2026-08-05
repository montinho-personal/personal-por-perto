import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'carolina-ma',
  nome: 'Carolina',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'carolinense',
  tipo: 'cidade',

  populacao: 24062,
  populacaoAno: 2022,
  idhm: 0.634,
  idhmClasse: 'médio',
  altitudeM: 193,

  resumoEconomico:
    'Conhecida como a Pérola do Maranhão, Carolina tem 24.062 habitantes (Censo 2022), território inteiramente de Cerrado e uma posição privilegiada: fica às margens do rio Tocantins, na divisa com o estado vizinho, e é o principal portão de entrada do Parque Nacional da Chapada das Mesas. O turismo de natureza virou o motor econômico da cidade, ao lado do comércio regional e da pecuária.',

  mercado:
    'O mercado de personal trainer aqui é pequeno em número e amplo em função: o profissional atende o morador que quer saúde, o trabalhador do turismo que precisa de resistência para conduzir trilhas e o visitante que quer chegar preparado para as travessias. A academia do centro divide espaço com o atendimento a domicílio e com o treino ao ar livre, que na Chapada é praticamente inevitável.',

  bairrosNobres: ['Centro', 'Alto da Boa Vista', 'Vila Nova', 'Beira Rio'],
  bairrosPopulares: ['São José', 'Aeroporto', 'Santo Antônio', 'Cohab'],

  parques: [
    {
      nome: 'Parque Nacional da Chapada das Mesas',
      descricao:
        'A unidade se estende pelos municípios de Carolina, Riachão e Estreito e reúne 89 cachoeiras catalogadas, 22 rios perenes e mais de 400 nascentes — um dos conjuntos de água doce mais ricos do país.',
    },
    {
      nome: 'Complexo da Pedra Caída',
      descricao:
        'A cerca de 35 km do centro, reúne três grandes quedas d’água, entre elas a Gruta do Amor, com queda de 46 metros, além de tirolesa e trilhas de acesso com desnível.',
    },
    {
      nome: 'Cachoeira do Itapecuru',
      descricao:
        'Uma das mais visitadas da região, com queda larga em degraus e poço de água transparente — parada obrigatória de quem percorre a Chapada a partir de Carolina.',
    },
    {
      nome: 'Orla do Rio Tocantins',
      descricao:
        'A frente d’água da cidade é o espaço de convivência e caminhada dos moradores, especialmente no fim da tarde, quando o calor do Cerrado cede.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária estruturada; a bicicleta circula como transporte cotidiano no traçado plano da área central, e o cicloturismo aproveita as estradas de acesso à Chapada.',

  clima:
    'Tropical de Cerrado, com estação chuvosa de novembro a abril e uma seca marcada no meio do ano, quando o céu limpa e as temperaturas do meio-dia sobem.',
  climaTreino:
    'O calor concentra o treino ao ar livre no começo da manhã e no fim da tarde. A seca é a alta temporada das trilhas e cachoeiras; no período das chuvas, o volume de água aumenta e alguns acessos ficam mais exigentes.',

  mobilidade:
    'A cidade é compacta e caminhável no miolo. O acesso regional se faz pela BR-230 e pela ponte sobre o Tocantins, que liga Carolina ao estado vizinho — e as principais cachoeiras ficam a distâncias de 20 a 40 km por estradas de acesso.',

  corridas: [
    {
      nome: 'Provas do calendário da Chapada das Mesas',
      descricao:
        'A região recebe corridas e travessias associadas ao turismo de aventura, com percursos de estrada de terra, trilha e desnível de cerrado.',
    },
  ],
  culturaEsportiva:
    'Caminhar, nadar e subir trilha fazem parte do cotidiano de quem vive do turismo — e o futebol de campo e as festas de rio completam o calendário. O condicionamento aqui é ferramenta de trabalho para guias e condutores.',
  academias:
    'A oferta formal se concentra no centro, em unidades compactas de musculação, complementadas por profissionais que atendem a domicílio e em pousadas que recebem grupos de turismo ativo.',

  destaquesFitness: [
    '89 cachoeiras catalogadas no Parque Nacional da Chapada das Mesas.',
    'Gruta do Amor, na Pedra Caída, com queda de 46 metros.',
    'Trilhas de acesso com desnível real — subida de alto gasto energético.',
    'Orla do Tocantins como pista de caminhada natural da cidade.',
  ],

  precos: {
    avulsaMin: 40,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 580,
    onlineMin: 110,
    onlineMax: 310,
  },

  conclusao:
    'Carolina é a porta da Chapada das Mesas e uma cidade que treina ao ar livre por vocação. Um personal trainer daqui prepara pernas e fôlego para trilha e cachoeira — e usa a academia como base de força para que o passeio de domingo não vire lesão na segunda.',

  vizinhas: ['imperatriz-ma', 'balsas-ma', 'tocantinopolis-to'],

  fontes: [
    { nome: 'IBGE Cidades — Carolina', url: 'https://www.ibge.gov.br/cidades-e-estados/ma/carolina.html' },
    { nome: 'ICMBio — Parque Nacional da Chapada das Mesas', url: 'https://www.gov.br/icmbio/' },
    { nome: 'Prefeitura de Carolina', url: 'https://www.carolina.ma.gov.br/' },
  ],
  atualizadoEm: '2026-08-05',
};
