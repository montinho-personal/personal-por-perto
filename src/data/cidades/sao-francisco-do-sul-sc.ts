import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-francisco-do-sul-sc',
  nome: 'São Francisco do Sul',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'francisquense',
  tipo: 'cidade',

  populacao: 52674,
  populacaoAno: 2022,
  idhm: 0.760,
  idhmClasse: 'alto',
  altitudeM: 9,

  resumoEconomico:
    'Considerada a terceira cidade mais antiga do Brasil, com povoamento efetivo a partir de 1658, São Francisco do Sul ocupa boa parte de uma ilha na Baía da Babitonga, no litoral norte de Santa Catarina, perto de Joinville. A economia gira em torno do Porto de São Francisco do Sul, um dos maiores portos públicos do país na movimentação de cargas gerais e granéis (soja e milho), do turismo histórico e de praia — o centro histórico é tombado pelo IPHAN — e da pesca artesanal, sobretudo de camarão, na própria baía. No verão, a população chega a multiplicar com o fluxo de turistas atraídos pelas praias da ilha.',

  mercado:
    'O mercado de treino é sazonal, como em boa parte do litoral catarinense: cresce no verão, quando a cidade recebe turistas nas praias da Enseada, Ubatuba e Prainha, e é mais enxuto no restante do ano, concentrado no Centro Histórico e nos bairros continentais de Iperoba e Vila da Glória. A procura por personal trainers tende a acompanhar esse fluxo, com destaque para treino ao ar livre na orla e preparação física para atividades náuticas e de praia.',

  bairrosNobres: ['Enseada', 'Ubatuba', 'Capri', 'Prainha'],
  bairrosPopulares: ['Centro Histórico', 'Iperoba', 'Vila da Glória', 'Itaguaçu'],

  parques: [
    {
      nome: 'Orla da Praia da Enseada',
      descricao:
        'A praia mais movimentada e estruturada da ilha, de águas calmas e rasas — ponto de referência para caminhada, corrida e treino funcional ao ar livre, com comércio e serviços por perto.',
    },
    {
      nome: 'Centro Histórico e orla do porto',
      descricao:
        'Ruas de pedra, casario preservado e o calçadão junto à Baía da Babitonga, no entorno do Mercado Público e do porto — cenário histórico usado para caminhada e passeio a pé.',
    },
    {
      nome: 'Praias de Ubatuba e Prainha',
      descricao:
        'Praias de mar mais aberto, procuradas por surfistas e por quem treina em ambiente natural; Ubatuba também recebe torneios de vôlei de praia na temporada de verão.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada e concentrada em trechos da área urbana e da orla da Enseada; não há dados oficiais consolidados sobre a extensão total da malha.',

  clima:
    'O clima é subtropical úmido (Cfa), sem estação seca definida, com verões mornos e úmidos (médias que passam de 28 °C) e invernos frescos (mínimas em torno de 14 °C). A chuva é distribuída ao longo do ano, com pico entre dezembro e janeiro.',
  climaTreino:
    'No verão, a umidade e o calor pedem treino no início da manhã ou no fim da tarde, com atenção à hidratação; o inverno ameno favorece a atividade ao ar livre na orla durante boa parte do dia.',

  mobilidade:
    'A BR-280 é o principal acesso rodoviário, ligando a ilha ao continente por um aterro e uma pequena ponte sobre o Canal do Linguado, e seguindo até Joinville (cerca de 45 km) e a BR-101. Um ferry boat também conecta o bairro continental de Vila da Glória à localidade de Laranjeiras, na ilha, cruzando a Baía da Babitonga como alternativa ao trajeto por terra.',

  corridas: [],
  culturaEsportiva:
    'A relação com o mar molda a cultura esportiva local: surfe nas praias de mar aberto de Ubatuba e Prainha, torneios de vôlei de praia na temporada, pesca artesanal na Baía da Babitonga e uma orla que funciona como espaço gratuito de treino ao ar livre, tudo emoldurado pelo cenário histórico da cidade.',
  academias:
    'A oferta reúne academias e estúdios locais, concentrados no Centro Histórico e nos bairros continentais de Iperoba e Vila da Glória, com porte compatível com uma cidade média de forte perfil turístico e sazonal.',

  destaquesFitness: [
    'Terceira cidade mais antiga do Brasil, com centro histórico tombado pelo IPHAN à beira da Baía da Babitonga.',
    'Ilha com praias de perfis distintos: mar aberto (Ubatuba, Prainha) para surfe e águas calmas (Enseada, Capri) para caminhada e natação.',
    'Economia ligada ao porto público de cargas gerais e granéis e à pesca artesanal de camarão na baía.',
    'Clima subtropical úmido (Cfa), com verão quente que pede ajuste de horário de treino e inverno ameno favorável ao ar livre.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 750,
    onlineMin: 140,
    onlineMax: 380,
  },

  conclusao:
    'Cidade histórica e insular do litoral norte catarinense, São Francisco do Sul combina praias de mar aberto e de baía, um centro tombado e uma rotina fortemente marcada pela sazonalidade do turismo. Um personal trainer ajuda a aproveitar a orla da Enseada e as praias de Ubatuba e Prainha com segurança, adaptando o treino ao calor do verão e mantendo a constância no restante do ano.',

  vizinhas: ['joinville-sc', 'barra-velha-sc'],

  fontes: [
    { nome: 'IBGE Cidades — São Francisco do Sul', url: 'https://cidades.ibge.gov.br/brasil/sc/sao-francisco-do-sul/panorama' },
    { nome: 'Prefeitura de São Francisco do Sul', url: 'https://www.saofranciscodosul.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
