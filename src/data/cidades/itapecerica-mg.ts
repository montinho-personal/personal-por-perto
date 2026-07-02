import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itapecerica-mg',
  nome: 'Itapecerica',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'itapecericano',
  tipo: 'cidade',

  populacao: 21046,
  populacaoAno: 2022,
  idhm: 0.713,
  idhmClasse: 'alto',
  altitudeM: 853,

  resumoEconomico:
    'Itapecerica fica no Centro-Oeste de Minas Gerais, na Região Geográfica Imediata de Divinópolis, cidade histórica erguida em torno de casario colonial preservado. O PIB municipal gira em torno de R$ 629 milhões, puxado pelos serviços (36,8%), pela indústria (29,6%), pela administração pública (17,7%) e pela agropecuária (15,8%). A indústria local tem peso na fabricação de calçados esportivos — caso da Calçados Addan, no bairro Bom Jesus, próxima do polo calçadista de Nova Serrana — e na mineração de grafite, com a Nacional de Grafite (maior produtora do país) operando mina e centro de pesquisa no município. O comércio e a agropecuária completam a base econômica de uma cidade cercada por extensa zona rural, com cerca de setenta povoados.',

  mercado:
    'Por ser uma cidade pequena do interior mineiro, o mercado fitness de Itapecerica é bastante enxuto, restrito a academias locais de musculação no Centro. A procura por personal trainer tende a vir de quem mora nos distritos e na zona rural (com acesso mais difícil a estruturas de treino) e de quem busca treino orientado para provas de corrida do calendário local ou para aproveitar a Praça de Esportes municipal.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Bom Jesus', 'Lamounier', 'Marilândia', 'Neolândia'],

  parques: [
    {
      nome: 'Praça de Esportes',
      descricao:
        'Complexo público reformado no Centro, com piscina, quadras poliesportivas, pista de skate, campo de futsal, pista de atletismo, aparelhos de ginástica ao ar livre e vestiários — o principal espaço da cidade para caminhada, corrida e treino ao ar livre.',
    },
    {
      nome: 'Praça do Coreto',
      descricao:
        'A pracinha central, com coreto, fonte luminosa e arborização, é ponto de encontro da cidade e serve de largada e chegada da Corrida de Itapecerica, além de sediar festas populares como o Festival de Gastronomia Rural e a Festa de Inverno.',
    },
    {
      nome: 'Rio Itapecerica',
      descricao:
        'Formado pelo encontro do Rio Vermelho com o Rio Santo Antônio, dá nome à cidade e marca a paisagem rural do entorno, cenário de pesca e de estradas vicinais usadas por quem pedala ou caminha fora do perímetro urbano.',
    },
  ],
  ciclovias:
    'Itapecerica não tem malha cicloviária estruturada; o pedal e a corrida acontecem nas ruas de baixo movimento do Centro e nas estradas rurais que ligam a sede aos distritos, como reforça o evento local "Pedala ou Corre Itapecerica".',

  clima:
    'O clima é tropical de altitude, com verões amenos e úmidos (novembro a março, mínimas e máximas entre 17 °C e 28 °C) e invernos frios e secos (abril a setembro, entre 5 °C e 21 °C); a altitude de 853 metros já registrou mínima de 7,2 °C e máxima de 37 °C.',
  climaTreino:
    'O inverno seco favorece o treino ao ar livre, sobretudo pela manhã, mas exige aquecimento nos dias mais frios de madrugada. No verão chuvoso, o ideal é treinar cedo e evitar o fim de tarde, quando as chuvas são mais frequentes.',

  mobilidade:
    'O acesso a Itapecerica se dá pelas rodovias estaduais MG-164 e MG-260, que ligam a sede aos distritos de Lamounier, Marilândia e Neolândia e à região de Divinópolis, a cerca de 62 km. A cidade integra o eixo do Centro-Oeste mineiro cortado pela MG-050, cerca de 184 km a sudoeste de Belo Horizonte e 41 km de Formiga; o transporte coletivo é local, com forte dependência de veículo próprio e de ônibus intermunicipal para chegar a Divinópolis e Nova Serrana.',

  corridas: [
    {
      nome: 'Corrida de Itapecerica',
      descricao:
        'Prova de rua homologada pela Federação Mineira de Atletismo, com percursos de 4 km e 8 km e largada e chegada na Praça do Coreto; já chegou à 6ª edição, reunindo corredores da cidade e da região.',
    },
    {
      nome: 'Pedala ou Corre Itapecerica',
      descricao:
        'Evento esportivo municipal que combina corrida a pé e ciclismo, com largada na Praça da Igreja de São Francisco, reforçando o hábito de treinar nas ruas do Centro.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local gira em torno da Praça de Esportes, com sua pista de atletismo e piscina, e do calendário de corridas de rua homologadas pela Federação Mineira de Atletismo, com largada na tradicional Praça do Coreto. A extensa zona rural do município também molda o dia a dia de quem caminha, pedala ou cavalga nas estradas vicinais entre a sede e os distritos.',
  academias:
    'A oferta é pequena e concentrada no Centro, com academias locais de musculação; boa parte do treino ao ar livre acontece na Praça de Esportes municipal, que reúne pista de atletismo, piscina e aparelhos de ginástica.',

  destaquesFitness: [
    'Praça de Esportes no Centro, com piscina, pista de atletismo, quadras e aparelhos ao ar livre.',
    'Corrida de Itapecerica, prova homologada pela Federação Mineira de Atletismo com largada na Praça do Coreto.',
    'Clima tropical de altitude (853 m), com inverno seco favorável ao treino ao ar livre.',
    'Cidade histórica cercada por extensa zona rural (cerca de 70 povoados) e economia de calçados, grafite e agropecuária.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 100,
    mensalMin: 250,
    mensalMax: 600,
    onlineMin: 115,
    onlineMax: 300,
  },

  conclusao:
    'Cidade histórica e pequena do Centro-Oeste mineiro, Itapecerica tem mercado fitness enxuto, mas conta com a Praça de Esportes e um calendário de corridas de rua homologadas como pontos de apoio. Um personal trainer ajuda a organizar o treino considerando o clima de altitude, a distância até os distritos rurais e a rotina de quem trabalha no comércio, na indústria calçadista ou na agropecuária local.',

  vizinhas: ['divinopolis-mg', 'formiga-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Itapecerica', url: 'https://cidades.ibge.gov.br/brasil/mg/itapecerica/panorama' },
    { nome: 'Prefeitura de Itapecerica', url: 'https://itapecerica.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
