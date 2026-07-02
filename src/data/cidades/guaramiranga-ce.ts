import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'guaramiranga-ce',
  nome: 'Guaramiranga',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'guaramiranguense',
  tipo: 'cidade',

  populacao: 5654,
  populacaoAno: 2022,
  idhm: 0.637,
  idhmClasse: 'médio',
  altitudeM: 865,

  resumoEconomico:
    'Conhecida como "Suíça Cearense", Guaramiranga fica no Maciço de Baturité, a cerca de 100 a 110 km de Fortaleza, e é um dos municípios menos populosos do Ceará. A economia gira em torno do turismo de montanha — favorecido pelo clima ameno de altitude, pelas pousadas do Centro e por eventos como o Festival Jazz & Blues, realizado no Carnaval desde 2000 — e da produção de café de altitude, integrada à Rota Verde do Café, que une Guaramiranga a Pacoti, Mulungu e Baturité em um circuito de agroturismo dentro da Área de Proteção Ambiental (APA) da Serra de Baturité.',

  mercado:
    'Por ser um município muito pequeno e de vocação turística, o mercado fitness de Guaramiranga é bastante restrito, sem uma rede consolidada de academias. A procura por personal trainer tende a vir tanto de moradores locais quanto do público que visita a cidade a trabalho ou lazer e busca aproveitar o clima fresco de serra para caminhada, trilha e treino ao ar livre.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Pernambuquinho', 'Linha da Serra', 'Forquilha'],

  parques: [
    {
      nome: 'Pico Alto',
      descricao:
        'Mirante a 1.115 m de altitude na localidade de Pernambuquinho, a cerca de 13 km do Centro, é o ponto culminante do Maciço de Baturité e o segundo mais alto do Ceará. O acesso pode ser feito por trilha ecológica ou por estrada asfaltada, com vista de 360 graus para a serra e o sertão.',
    },
    {
      nome: 'Mirante Linha da Serra',
      descricao:
        'Localizado a cerca de 950 m de altitude, reúne trilha de acesso e vista panorâmica da serra, sendo ponto de caminhada e observação bastante procurado na região.',
    },
    {
      nome: 'Trilhas da Mata Atlântica de altitude',
      descricao:
        'A cidade está inserida na Área de Proteção Ambiental (APA) da Serra de Baturité, remanescente de Mata Atlântica de altitude, com trilhas ecológicas entre cachoeiras e sítios de café que ligam Guaramiranga a Pacoti e Mulungu.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária estruturada divulgada em fonte oficial; o ciclismo de montanha e o pedal acontecem nas estradas de serra que ligam Guaramiranga aos municípios vizinhos do Maciço de Baturité, em relevo acidentado.',

  clima:
    'A cerca de 865 m de altitude, Guaramiranga tem clima tropical de altitude, mais frio e úmido do que o restante do Ceará, o que rendeu à cidade o apelido de "Suíça Cearense". As temperaturas médias variam entre 16 °C e 25 °C ao longo do ano, com mínimas que podem chegar a 10-12 °C nas noites de junho e julho; a menor temperatura já registrada pelo INMET na cidade foi de 10 °C, em 1963.',
  climaTreino:
    'O clima ameno permite treinar ao ar livre em qualquer horário do dia, algo raro no Ceará; nas manhãs e noites mais frias de junho a agosto vale um aquecimento mais longo, e a estação chuvosa (janeiro a julho) pede atenção a trilhas escorregadias na serra.',

  mobilidade:
    'O acesso a Guaramiranga a partir de Fortaleza se dá pela CE-060 em direção a Pacoti e, de lá, até a cidade, ou pela CE-065, que passa por Maranguape e Palmácia; ambas as rotas cruzam trechos de serra e já registraram bloqueios temporários após chuvas fortes. O transporte interno é feito a pé ou por veículo particular, dado o pequeno porte do município.',

  corridas: [
    {
      nome: 'Guaramiranga Fest Run',
      descricao:
        'Prova de corrida realizada na cidade combinando turismo e esporte, com percursos em diferentes distâncias pelas ruas e estradas de serra do município.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local está ligada à natureza de montanha: trilhas até o Pico Alto e outros mirantes, ciclismo de estrada em relevo de serra e caminhada como parte do dia a dia de moradores e turistas. O Festival Jazz & Blues, realizado no Carnaval, também inclui ações ambientais como mutirões de limpeza no Pico Alto.',
  academias:
    'A oferta de academias é muito reduzida, compatível com um município de pequeno porte; parte da estrutura de treino é buscada em cidades maiores da região ou substituída por atividades ao ar livre, aproveitando o clima fresco da serra.',

  destaquesFitness: [
    'Clima de altitude mais frio e úmido do que o restante do Ceará, favorável ao treino ao ar livre a qualquer hora do dia.',
    'Pico Alto, a 1.115 m, e outros mirantes da Serra de Baturité oferecendo trilhas com vista panorâmica.',
    'Rota Verde do Café e Mata Atlântica de altitude integrando agroturismo e ecoturismo à paisagem de treino.',
    'Festival Jazz & Blues no Carnaval, com ações ambientais que reforçam o vínculo entre esporte, cultura e natureza.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 250,
    mensalMax: 680,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Pequena, serrana e com o clima mais ameno do Ceará, Guaramiranga oferece um cenário raro no estado para treinar ao ar livre em qualquer horário, entre trilhas, mirantes e a paisagem da Rota Verde do Café. Um personal trainer ajuda a aproveitar esse relevo de montanha com segurança e progressão adequada, seja para quem mora na cidade, seja para quem a visita a trabalho ou lazer.',

  vizinhas: ['maranguape-ce', 'guaiuba-ce', 'fortaleza-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Guaramiranga', url: 'https://cidades.ibge.gov.br/brasil/ce/guaramiranga/panorama' },
    { nome: 'Prefeitura de Guaramiranga', url: 'https://www.guaramiranga.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
