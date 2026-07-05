import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'euclides-da-cunha-ba',
  nome: 'Euclides da Cunha',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'euclidense',
  tipo: 'cidade',

  populacao: 61456,
  populacaoAno: 2022,
  idhm: 0.57,
  idhmClasse: 'baixo',
  altitudeM: 472,

  resumoEconomico:
    'Euclides da Cunha fica no sertão nordestino da Bahia, a cerca de 315 km de Salvador, dentro do chamado "Polígono das Secas". Batizada de Cumbe até 1938, quando passou a homenagear o escritor Euclides da Cunha, autor de "Os Sertões", a cidade viveu de perto a história do cangaço — foi na então vila de Cumbe que Lampião apareceu publicamente pela primeira vez na Bahia, em 1928. Hoje a economia gira em torno da caprino-ovinocultura, atividade em que o município é uma das principais referências do Nordeste, ao lado da agricultura de sequeiro (milho, feijão) adaptada ao semiárido e do comércio regional. A Exposição Especializada de Caprinos e Ovinos — a Exposertão — reúne produtores e compradores de toda a região e reforça o papel de Euclides da Cunha como polo pecuário do sertão baiano.',

  mercado:
    'O mercado fitness de Euclides da Cunha é pequeno e concentrado no Centro e em bairros como Jeremias, com academias de musculação e estúdios de treino funcional que atendem sobretudo o público jovem e os trabalhadores do comércio e do serviço público. A procura por personal trainer ainda é incipiente, mas cresce puxada por quem busca treino individualizado diante da estrutura limitada das academias locais e do calor do semiárido, que exige planejamento de horário.',

  bairrosNobres: ['Centro', 'Nova América'],
  bairrosPopulares: ['Jeremias', 'Duda Macário', 'Bela Vista', 'Dona Tereza'],

  parques: [
    {
      nome: 'Praças do Centro histórico',
      descricao:
        'O conjunto de praças da área central, erguida ainda como a antiga Cumbe, concentra o movimento de pedestres da cidade e serve de referência para caminhada nos horários mais frescos do dia.',
    },
    {
      nome: 'Bairro Jeremias e o "forródromo"',
      descricao:
        'Um dos bairros mais movimentados da cidade, sede de equipamentos como o Farol do Conhecimento e o espaço conhecido como "forródromo", ponto de eventos e concentração de pessoas em datas festivas.',
    },
    {
      nome: 'Serra e caatinga do entorno',
      descricao:
        'A paisagem de caatinga preservada nos arredores — habitat da ameaçada arara-azul-de-Lear, espécie típica da região junto com os vizinhos Canudos e Jeremoabo — oferece trilhas e estradas de terra para corrida e caminhada fora do perímetro urbano, com atenção redobrada ao calor.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária estruturada na cidade; o ciclismo de deslocamento e lazer acontece nas ruas do Centro e nas estradas que levam aos distritos rurais de Aribicé, Caimbé, Ruilândia, Carnaíba e Massacará.',

  clima:
    'O clima é tropical semiárido, típico do sertão baiano, com vegetação de caatinga, temperatura média anual em torno de 24 °C, mas com forte insolação e amplitude térmica entre o dia e a noite, e chuvas escassas e irregulares, concentradas em poucos meses do ano.',
  climaTreino:
    'O sol forte do semiárido e a baixa umidade recomendam treinar bem cedo pela manhã ou já no fim da tarde, com hidratação reforçada; nos meses de estiagem mais severa, ambientes cobertos ou com sombra são a alternativa mais segura para treinos no meio do dia.',

  mobilidade:
    'Euclides da Cunha fica a cerca de 315 km de Salvador, no eixo de rodovias estaduais que conectam o sertão baiano à BR-116, principal via de ligação com o restante do Nordeste. O deslocamento interno é feito majoritariamente por veículo próprio e moto, e a cidade funciona como referência comercial e de serviços para municípios vizinhos como Canudos, Jeremoabo e Monte Santo.',

  corridas: [
    {
      nome: 'Arara Night Run',
      descricao:
        'Corrida noturna de rua com percursos de 5 km e 10 km pelo Centro de Euclides da Cunha, criada como parte da programação do Desafio Arara de Lear.',
    },
  ],
  culturaEsportiva:
    'O principal evento esportivo da cidade é o Desafio Arara de Lear, prova de mountain bike que integra o calendário oficial de ciclismo da Bahia e já reuniu centenas de atletas de todo o estado, complementada pela Arara Night Run de corrida de rua. A caprino-ovinocultura também gera uma cultura de exposições e rodeios ligados à Exposertão, que mobilizam boa parte da cidade durante a semana do evento.',
  academias:
    'A oferta reúne academias de musculação e estúdios de treino funcional no Centro e em bairros como Jeremias, com estrutura compatível com uma cidade média do sertão baiano — em geral mais modesta que a de polos regionais maiores como Senhor do Bonfim ou Juazeiro.',

  destaquesFitness: [
    'Um dos principais polos de caprino-ovinocultura do sertão baiano, sede da Exposertão, feira especializada em caprinos e ovinos.',
    'Palco histórico do cangaço: foi na antiga vila de Cumbe que Lampião apareceu pela primeira vez na Bahia, em 1928.',
    'Sedia o Desafio Arara de Lear (mountain bike) e a Arara Night Run, corrida noturna de 5 km e 10 km pelo Centro.',
    'Clima semiárido, com sol forte e baixa umidade, que exige hidratação reforçada e treino nos horários mais frescos do dia.',
  ],

  precos: {
    avulsaMin: 40,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 620,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Terra do cangaço e polo caprino-ovino do sertão baiano, Euclides da Cunha combina história, semiárido e uma cultura esportiva que cresce em torno do ciclismo e da corrida de rua. Um personal trainer ajuda a treinar com segurança sob o sol forte da caatinga, ajustando horários e hidratação ao clima e ao objetivo de cada aluno.',

  vizinhas: ['canudos-ba', 'jeremoabo-ba', 'senhor-do-bonfim-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Euclides da Cunha', url: 'https://cidades.ibge.gov.br/brasil/ba/euclides-da-cunha/panorama' },
    { nome: 'Prefeitura de Euclides da Cunha — História', url: 'https://www.euclidesdacunha.ba.gov.br/cidade/historia' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/2910701' },
  ],
  atualizadoEm: '2026-07-05',
};
