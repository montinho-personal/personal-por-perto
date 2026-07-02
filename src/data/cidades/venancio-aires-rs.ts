import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'venancio-aires-rs',
  nome: 'Venâncio Aires',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'venâncio-airense',
  tipo: 'cidade',

  populacao: 68653,
  populacaoAno: 2022,
  idhm: 0.710,
  idhmClasse: 'alto',
  altitudeM: 210,

  resumoEconomico:
    'Venâncio Aires fica no Vale do Rio Pardo, na transição para o Vale do Taquari, e é oficialmente reconhecida por lei estadual como a Capital Nacional do Chimarrão, título que celebra a importância histórica e econômica da erva-mate para o município. A cidade é o segundo maior produtor de fumo do Brasil e uma das maiores exportadoras de erva-mate do Rio Grande do Sul, com cerca de 800 famílias envolvidas no cultivo. Nas últimas décadas a economia se diversificou: hoje reúne mais de quatro mil empresas, com destaque para os setores metal-mecânico, de vestuário e de móveis, além do comércio e dos serviços, sobre uma base marcada pela colonização alemã.',

  mercado:
    'Como cidade média do interior gaúcho, Venâncio Aires tem um mercado fitness modesto, concentrado em academias de musculação e estúdios de treino funcional distribuídos entre o Centro e bairros como Cidade Alta. A procura por personal trainer cresce entre quem busca atendimento mais próximo e horários flexíveis, num município onde grande parte da rotina ainda gira em torno do trabalho na indústria, no comércio e nas propriedades rurais produtoras de fumo e erva-mate.',

  bairrosNobres: ['Centro', 'Gressler', 'Cidade Alta', 'Leopoldina'],
  bairrosPopulares: ['Coronel Brito', 'Macedo', 'União', 'Cidade Nova'],

  parques: [
    {
      nome: 'Parque Municipal do Chimarrão',
      descricao:
        'Com cerca de 26,45 hectares próximos ao acesso principal da cidade, é o maior espaço de lazer do município: reúne ginásio poliesportivo, pavilhão de exposições, pista para caminhada, área de camping, playgrounds e churrasqueiras. Recebe a Fenachim (Festa Nacional do Chimarrão) e costuma reunir mais de mil pessoas nos fins de semana.',
    },
    {
      nome: 'Complexo Esportivo do Parcão',
      descricao:
        'Localizado no bairro Aviação, é um dos pontos indicados pela Secretaria de Planejamento e Urbanismo do município para caminhada e corrida ao ar livre.',
    },
    {
      nome: 'Pista de caminhada do Acesso Dona Leopoldina e Acesso Grão-Pará',
      descricao:
        'Trechos de via na entrada da cidade adaptados para caminhada e pedalada, também citados pela prefeitura entre os principais espaços públicos de atividade física ao ar livre.',
    },
  ],
  ciclovias:
    'A malha cicloviária é modesta: a Avenida Ruperti Filho tem ciclofaixa sinalizada e é o trecho de maior fluxo de ciclistas, enquanto a Estrada Velha, na Linha Hansel, funciona como ciclovia com separação física da via.',

  clima:
    'O clima é subtropical, com as quatro estações bem definidas: verões quentes, com temperaturas que passam dos 30 °C, e invernos frios, que podem chegar perto dos 4 °C. A localização entre o Vale do Rio Pardo e o Vale do Taquari, na encosta da Serra Geral, contribui para amenizar o calor em boa parte do ano.',
  climaTreino:
    'O inverno rigoroso favorece o treino indoor em academias e estúdios, enquanto primavera, verão e outono oferecem boas condições para aproveitar o Parque do Chimarrão e os trechos de caminhada indicados pela cidade. Um personal trainer ajuda a manter a constância nas mudanças bruscas de temperatura típicas do interior gaúcho.',

  mobilidade:
    'A cidade é cortada pela rodovia RSC-287, principal via de acesso, que a liga a Porto Alegre, distante cerca de 130 km. O deslocamento urbano é feito por ônibus municipais e veículos particulares, sem sistema de trens urbanos. O rio Taquari, que banha o município, já foi navegável na região — havia o antigo porto de Mariante —, mas hoje não tem papel relevante na mobilidade cotidiana.',

  corridas: [
    {
      nome: 'Circuito dos Vales — etapa Venâncio Aires',
      descricao:
        'A maior corrida de rua já realizada no município, com largada na Praça da Matriz durante a Fenachim. Reúne provas de 3 km, 5 km e 10 km, além de caminhada e corridinha kids, com cerca de 2,3 mil participantes na edição mais recente.',
    },
    {
      nome: 'Fenachim — Festa Nacional do Chimarrão',
      descricao:
        'Realizada no Parque Municipal do Chimarrão, é uma das maiores festas culturais do Rio Grande do Sul e costuma agregar atividades esportivas e de lazer ao seu entorno, incluindo o Circuito dos Vales.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local se organiza em torno do Parque Municipal do Chimarrão e de pontos de caminhada e corrida indicados pela própria prefeitura, como o Parcão, o Acesso Dona Leopoldina e o Acesso Grão-Pará. O Circuito dos Vales, disputado durante a Fenachim, é o evento de corrida de rua mais expressivo da cidade.',
  academias:
    'A oferta é formada por academias de musculação e estúdios de treino funcional no Centro e em bairros como Cidade Alta, compatível com o porte de uma cidade média do interior gaúcho.',

  destaquesFitness: [
    'Capital Nacional do Chimarrão, com o Parque Municipal do Chimarrão (26,45 hectares) como principal espaço de lazer e caminhada.',
    'Pontos de caminhada e corrida indicados pela cidade: Complexo do Parcão, Acesso Dona Leopoldina e Acesso Grão-Pará.',
    'Circuito dos Vales, a maior corrida de rua do município, disputado durante a Fenachim.',
    'Economia diversificada entre fumo, erva-mate e indústria, com forte herança da colonização alemã.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Capital Nacional do Chimarrão e polo do Vale do Rio Pardo, Venâncio Aires combina uma economia diversificada entre fumo, erva-mate e indústria com um mercado fitness ainda enxuto, mas com espaços públicos de qualidade, como o Parque Municipal do Chimarrão. Um personal trainer ajuda a manter a constância do treino diante do inverno rigoroso e da rotina de trabalho da cidade, aproveitando também eventos como o Circuito dos Vales.',

  vizinhas: ['santa-cruz-do-sul-rs', 'lajeado-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Venâncio Aires', url: 'https://cidades.ibge.gov.br/brasil/rs/venancio-aires/panorama' },
    { nome: 'Prefeitura de Venâncio Aires', url: 'https://www.venancioaires.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
