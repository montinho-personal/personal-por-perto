import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itacare-ba',
  nome: 'Itacaré',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'itacareense',
  tipo: 'cidade',

  populacao: 27704,
  populacaoAno: 2022,
  idhm: 0.583,
  idhmClasse: 'baixo',

  resumoEconomico:
    'Na Costa do Cacau, litoral sul da Bahia, Itacaré nasceu de uma capela erguida em 1720 na foz do Rio de Contas e viveu, no século XIX e início do XX, da exportação de cacau por seu porto. A crise da lavoura, agravada pela praga da vassoura-de-bruxa nos anos 1980, empobreceu a região e reduziu a cidade a um vilarejo de pescadores — até surfistas descobrirem as ondas locais. A criação da APA Itacaré-Serra Grande em 1993 e o asfaltamento da rodovia BA-001 (ligação de 75 km com Ilhéus) em 1998 abriram caminho para o turismo, hoje a principal atividade econômica do município, apoiada em mais de 20 praias e numa extensa reserva de Mata Atlântica.',

  mercado:
    'O mercado fitness de Itacaré é pequeno e fortemente moldado pelo turismo: academias e estúdios funcionais concentrados perto da Praia da Concha atendem tanto moradores quanto visitantes de longa estada, muitas vezes combinando musculação com preparo físico para o surf e para trilhas na Mata Atlântica. A procura por personal trainer tende a acompanhar a sazonalidade turística e o interesse crescente por atividades ao ar livre.',

  bairrosNobres: ['Centro', 'Pontal'],
  bairrosPopulares: ['Porto de Trás', 'Passagem'],

  parques: [
    {
      nome: 'Praia da Concha',
      descricao:
        'Principal praia urbana, de águas calmas e sem ondas fortes, é ponto concentrado de bares, pousadas e academias à beira-mar, usado para caminhada, corrida e stand-up paddle.',
    },
    {
      nome: 'Praia da Tiririca',
      descricao:
        'Point de surf mais conhecido da cidade, com ondas constantes o ano todo e sede de campeonatos, ligado à Concha pelo Caminho das Praias.',
    },
    {
      nome: 'APA Itacaré-Serra Grande',
      descricao:
        'Área de Proteção Ambiental criada em 1993 ao longo de uma faixa costeira de Mata Atlântica, com trilhas que conectam praias urbanas e selvagens do município.',
    },
    {
      nome: 'Parque Estadual da Serra do Conduru',
      descricao:
        'Unidade de conservação de altíssima biodiversidade compartilhada com Ilhéus e Uruçuca, criada em 1997 como compensação pela BA-001, com trilhas de Mata Atlântica.',
    },
  ],
  ciclovias:
    'A BA-001 (Estrada-Parque Ilhéus–Itacaré) tem trechos com ciclovia ao longo do litoral; a malha cicloviária urbana de Itacaré não tem extensão divulgada em fonte oficial.',

  clima:
    'O clima é tropical úmido (Af, sem estação seca definida, segundo Köppen), quente durante todo o ano e com chuvas mais concentradas no outono e inverno — padrão típico do litoral sul da Bahia, diferente do regime de chuvas de verão comum no restante do Nordeste.',
  climaTreino:
    'O calor e a umidade elevados recomendam treinar nas primeiras horas da manhã ou no fim da tarde, com hidratação reforçada; nos meses de mais chuva, vale ter alternativa coberta para não depender só da praia ou da trilha.',

  mobilidade:
    'O acesso terrestre se dá pela BA-001, rodovia asfaltada desde 1998 que liga Itacaré a Ilhéus (cerca de 75 km) e ao Aeroporto de Ilhéus/Jorge Amado, o mais próximo da cidade. O deslocamento interno é feito a pé, de bicicleta ou por transporte local, já que o núcleo urbano é compacto e as principais praias se conectam pelo Caminho das Praias.',

  corridas: [
    {
      nome: 'Itacaré Run',
      descricao:
        'Corrida de rua de 7 km com prova kids e categoria PCD, criada para unir esporte, turismo e sustentabilidade; a edição de 2025 reuniu cerca de 700 atletas.',
    },
    {
      nome: 'M Trail Itacaré',
      descricao:
        'Prova de corrida de trilha disputada em praias e matas da região, com percursos de 5 km, 10 km e 15 km.',
    },
  ],
  culturaEsportiva:
    'O surf é a marca esportiva da cidade, com a Tiririca como palco de campeonatos, ao lado de um ecoturismo intenso de trilhas, cachoeiras e passeios de caiaque e canoa pela Mata Atlântica. Corridas de rua e de trilha, como a Itacaré Run e a M Trail, reforçam a vocação recente da cidade para o esporte ao ar livre.',
  academias:
    'A oferta é pequena e concentrada perto da Praia da Concha e do Centro, com academias de musculação e estúdios funcionais que também atendem surfistas e turistas de longa estada.',

  destaquesFitness: [
    'Mais de 20 praias urbanas e selvagens cercadas por Mata Atlântica, ligadas pelo Caminho das Praias.',
    'Praia da Tiririca como point de surf reconhecido, com ondas constantes o ano todo.',
    'APA Itacaré-Serra Grande e Parque Estadual da Serra do Conduru, com trilhas de Mata Atlântica para corrida e caminhada.',
    'Calendário de corridas com a Itacaré Run (7 km) e a M Trail Itacaré, disputadas em praias e trilhas.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Entre o surf, a Mata Atlântica e o legado do cacau, Itacaré oferece um cenário raro para treinar ao ar livre, das praias urbanas às trilhas da APA Itacaré-Serra Grande. Um personal trainer ajuda a organizar esse potencial em rotina — ajustando horários ao calor úmido e equilibrando o preparo físico entre surf, trilha e musculação.',

  vizinhas: ['ilheus-ba', 'itabuna-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Itacaré', url: 'https://cidades.ibge.gov.br/brasil/ba/itacare/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Itacaré', url: 'https://itacare.ba.gov.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
