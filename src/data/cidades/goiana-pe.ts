import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'goiana-pe',
  nome: 'Goiana',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'goianense',
  tipo: 'cidade',

  populacao: 81055,
  populacaoAno: 2022,
  idhm: 0.651,
  idhmClasse: 'médio',
  altitudeM: 13,

  resumoEconomico:
    'Localizada na Zona da Mata Norte de Pernambuco, na divisa com a Paraíba, Goiana combina um centro histórico colonial — com igrejas barrocas tombadas pelo Iphan — e um dos parques industriais mais dinâmicos do Nordeste. A cidade abriga o Polo Automotivo da Stellantis (fábrica Jeep/Fiat/Ram, inaugurada em 2015), além de polos farmacoquímico (Hemobrás) e vidreiro, o que elevou Goiana a uma das maiores economias do estado e atraiu trabalhadores de toda a região. A orla litorânea, com cerca de 18 km e praias como Pontas de Pedra, Carne de Vaca e Atapuz, completa o cenário.',

  mercado:
    'O mercado de personal trainers acompanha o crescimento econômico e populacional puxado pelos polos industriais: há academias no centro e nos bairros, além de uma cultura forte de treino ao ar livre na orla e nas praias. A demanda mistura trabalhadores da indústria, famílias da sede e moradores dos distritos litorâneos.',

  bairrosNobres: ['Centro', 'Carmo', 'Ponta de Pedras', 'Alto do Cajueiro'],
  bairrosPopulares: ['Macaxeira', 'Maturi', 'Tejucupapo', 'Carne de Vaca'],

  parques: [
    {
      nome: 'Orla de Pontas de Pedra',
      descricao:
        'Vila de pescadores no ponto mais oriental de Pernambuco (Ponta do Funil), com faixa de areia firme e calçada à beira-mar usadas para caminhada e corrida leve.',
    },
    {
      nome: 'Praia de Carne de Vaca',
      descricao:
        'Primeira praia do litoral pernambucano para quem chega da Paraíba, com extensa área de coqueiros e areia compacta na maré baixa — boa para treinos de corrida e funcional.',
    },
    {
      nome: 'Centro Histórico de Goiana',
      descricao:
        'Conjunto colonial tombado em 1938, com igrejas e casario do período português — cenário para caminhadas urbanas e treino em ruas de paralelepípedo.',
    },
  ],
  ciclovias:
    'A cidade tem uso crescente da bicicleta, sobretudo nos deslocamentos entre a sede e os distritos litorâneos por vias planas; a infraestrutura cicloviária ainda é pontual, e parte do pedal acontece em acostamentos e estradas vicinais.',

  clima:
    'O clima é tropical quente e úmido, típico do litoral norte de Pernambuco, com temperaturas elevadas o ano todo e chuvas concentradas no outono e inverno (de abril a julho).',
  climaTreino:
    'O calor e a umidade pedem treino ao ar livre nas primeiras horas da manhã ou no fim de tarde, com hidratação reforçada — a brisa marítima da orla ameniza a sensação térmica.',

  mobilidade:
    'A BR-101 corta o município e é o principal eixo de mobilidade, ligando Goiana ao Recife (cerca de 60 km ao sul) e à Paraíba ao norte, já que a cidade fica na divisa estadual. O acesso à orla e aos distritos é feito por rodovias estaduais; não há metrô, e o transporte depende de ônibus intermunicipais e carros.',

  corridas: [
    {
      nome: 'Corridas de rua no centro histórico',
      descricao:
        'Provas e circuitos promovidos no calendário esportivo municipal aproveitam o casario colonial e as ruas planas da sede para percursos de caminhada e corrida.',
    },
    {
      nome: 'Treinos e eventos na orla',
      descricao:
        'As praias de Pontas de Pedra e Carne de Vaca concentram grupos de corrida e treino funcional, com largadas e percursos à beira-mar em areia firme.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva goianense divide-se entre a orla — palco natural de corrida, caminhada e treino funcional — e a sede, onde academias e o programa esportivo municipal atendem a uma população em crescimento. O futebol amador e as atividades nas quadras e ginásios públicos também mobilizam os bairros e distritos.',
  academias:
    'A oferta reúne academias no centro e nos bairros, estúdios de treino funcional e a estrutura ao ar livre das praias, atendendo tanto os moradores da sede quanto os trabalhadores dos polos industriais.',

  destaquesFitness: [
    'Orla de 18 km com praias de areia firme (Pontas de Pedra, Carne de Vaca, Atapuz) para corrida e funcional.',
    'Centro histórico colonial como cenário para caminhadas urbanas e treino em ladeiras de paralelepípedo.',
    'Crescimento populacional puxado pelos polos automotivo e farmacoquímico aquece a demanda por treino.',
    'Brisa marítima ameniza o calor litorâneo e favorece o treino ao ar livre cedo ou no fim de tarde.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Entre o casario colonial da sede e as praias do litoral norte, Goiana oferece cenários variados para treinar, em uma cidade que cresce no ritmo dos seus polos industriais. Um personal trainer ajuda a montar um plano consistente, respeitando o clima quente e úmido e o seu objetivo.',

  vizinhas: ['paulista-pe', 'olinda-pe', 'recife-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Goiana', url: 'https://cidades.ibge.gov.br/brasil/pe/goiana/panorama' },
    { nome: 'Prefeitura de Goiana', url: 'https://goiana.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
