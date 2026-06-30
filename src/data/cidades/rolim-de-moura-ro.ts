import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'rolim-de-moura-ro',
  nome: 'Rolim de Moura',
  uf: 'RO',
  estado: 'Rondônia',
  estadoSlug: 'rondonia',
  regiao: 'Norte',
  gentilico: 'rolimourense',
  tipo: 'cidade',

  populacao: 56406,
  populacaoAno: 2022,
  idhm: 0.700,
  idhmClasse: 'alto',
  altitudeM: 257,

  resumoEconomico:
    'No coração da Zona da Mata rondoniense, no sul do estado, Rolim de Moura nasceu de um projeto de colonização da Amazônia no fim dos anos 1970 e cresceu até se tornar um dos principais polos comerciais e de serviços do interior de Rondônia. A economia se apoia na agropecuária — com forte produção de leite, café, grãos e criação de gado e suínos — e em um comércio diversificado que atende toda a microrregião. A presença de um campus da UNIR (Universidade Federal de Rondônia) reforça o papel da cidade como centro regional de educação e serviços.',

  mercado:
    'Como cidade média e polo regional, Rolim de Moura tem um mercado fitness em crescimento, sustentado pela população universitária, pelo comércio aquecido e por uma classe de profissionais liberais. A procura por personal trainers cresce entre quem busca acompanhamento individual para musculação, emagrecimento e condicionamento, além de quem quer treinar ao ar livre aproveitando o traçado plano e arborizado da cidade.',

  bairrosNobres: ['Centro', 'Planalto', 'Cidade Alta', 'Olímpico'],
  bairrosPopulares: ['Beira Rio', 'Boa Esperança', 'Centenário', 'São Cristóvão'],

  parques: [
    {
      nome: 'Praça Central (Praça da Matriz)',
      descricao:
        'O principal ponto de encontro da cidade, no Centro, concentra caminhadas, atividade física ao ar livre e serve de largada e chegada de provas de rua locais.',
    },
    {
      nome: 'Entorno do Rio Rolim de Moura',
      descricao:
        'O curso d’água que dá nome à cidade corta a área urbana e, no bairro Beira Rio, define percursos e áreas verdes usados para caminhada e pedal.',
    },
    {
      nome: 'Avenidas largas e arborizadas',
      descricao:
        'O traçado planejado da colonização deixou avenidas amplas e canteiros centrais que funcionam como corredores naturais para corrida e caminhada no fim do dia.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária ainda é modesta, concentrada em alguns trechos das avenidas centrais; boa parte do pedal acontece nas vias largas do traçado planejado e nas estradas vicinais que ligam a cidade à zona rural.',

  clima:
    'O clima é equatorial quente e úmido, com temperaturas elevadas o ano todo e duas estações bem marcadas: o período chuvoso, de outubro a abril, com chuvas fortes e umidade alta, e a estação seca, de maio a setembro, mais amena. Entre os meses secos pode ocorrer a friagem, queda repentina de temperatura provocada por massas de ar frio que avançam pelo sul da Amazônia.',
  climaTreino:
    'O calor e a umidade pedem treinar bem cedo ou no fim da tarde, com hidratação reforçada, sobretudo no período chuvoso. A estação seca, mais amena, é a janela mais confortável para o treino ao ar livre, enquanto nos picos de calor os ambientes climatizados são a opção mais segura.',

  mobilidade:
    'Rolim de Moura se conecta à malha estadual pela RO-383, que a liga a Cacoal e ao eixo da BR-364, principal rota de Rondônia. O transporte urbano é feito por ônibus e, em grande medida, por carros e motocicletas, com a cidade funcionando como entroncamento de serviços para os municípios vizinhos da Zona da Mata rondoniense.',

  corridas: [
    {
      nome: 'Meia Maratona Cidade de Rolim de Moura',
      descricao:
        'Prova de rua tradicional do calendário local, com percursos pela área urbana que reúne corredores da cidade e de toda a microrregião.',
    },
    {
      nome: 'Desafio contra a Paralisia Infantil (Rotary Club)',
      descricao:
        'Evento beneficente que combina ciclismo e atletismo, organizado pelo Rotary Club de Rolim de Moura para mobilizar a comunidade esportiva da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso da praça central e das avenidas largas para caminhada e corrida, um calendário ativo de provas de rua e ciclismo, e o ambiente universitário e comercial que movimenta a procura por atividade física na cidade.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional espalhadas pelos bairros centrais e residenciais, com porte compatível com uma cidade média que funciona como polo de serviços da região.',

  destaquesFitness: [
    'Polo regional da Zona da Mata rondoniense, com comércio diversificado e campus da UNIR.',
    'Traçado planejado, com avenidas largas e arborizadas que favorecem corrida e caminhada.',
    'Clima equatorial quente e úmido, que exige planejar horário e hidratação no treino.',
    'Calendário ativo de provas de rua, como a Meia Maratona Cidade de Rolim de Moura.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Polo comercial e universitário do sul de Rondônia, Rolim de Moura combina uma cidade plana e arborizada com um clima equatorial que pede treino bem planejado. Um personal trainer ajuda a organizar a rotina respeitando o calor e a umidade, escolhendo os melhores horários e mantendo a constância ao longo das estações chuvosa e seca.',

  vizinhas: ['cacoal-ro', 'ji-parana-ro'],

  fontes: [
    { nome: 'IBGE Cidades — Rolim de Moura', url: 'https://cidades.ibge.gov.br/brasil/ro/rolim-de-moura/panorama' },
    { nome: 'Prefeitura de Rolim de Moura', url: 'https://rolimdemoura.ro.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
