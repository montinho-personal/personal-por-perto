import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'torres-rs',
  nome: 'Torres',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'torrense',
  tipo: 'cidade',

  populacao: 41751,
  populacaoAno: 2022,
  idhm: 0.762,
  idhmClasse: 'alto',
  altitudeM: 9,

  resumoEconomico:
    'Torres é o município mais setentrional do litoral gaúcho, na divisa com Santa Catarina, e reúne 41.751 habitantes no Censo 2022 — crescimento de cerca de 20% em relação a 2010. A cidade é conhecida pelo único trecho de falésias do litoral do Rio Grande do Sul e por sediar o tradicional Festival Internacional de Balonismo, que lhe rendeu o título de Capital Nacional do Balonismo. A economia gira em torno do turismo de veraneio, do comércio, dos serviços e da construção civil, com forte sazonalidade: a população efetiva se multiplica na temporada de verão, quando a cidade recebe veranistas do Rio Grande do Sul e de Santa Catarina. O IDHM é alto (0,762, Atlas Brasil).',

  mercado:
    'O mercado de personal trainer em Torres é marcado por uma sazonalidade intensa. No verão, com a cidade cheia de veranistas, cresce a procura por treino ao ar livre na orla, aulas funcionais na areia e acompanhamento de quem quer manter a rotina nas férias. Fora da temporada, a base de moradores fixos sustenta a demanda em academias e atendimento individual. O profissional que combina atendimento a veranistas no pico de verão e fidelização de moradores no restante do ano encontra um nicho promissor à beira-mar, entre falésias, morros e praias.',

  bairrosNobres: ['Praia Grande', 'Centro', 'Prainha', 'Praia da Cal'],
  bairrosPopulares: ['Igra Sul', 'São Jorge', 'Curtume', 'Getúlio Vargas'],

  parques: [
    {
      nome: 'Parque Estadual da Guarita',
      descricao:
        'Unidade de conservação que abriga o cartão-postal de Torres: as falésias, formações rochosas e dunas que formam o único trecho de costões e penhascos do litoral gaúcho. Possui trilhas, mirantes e a Praia da Guarita, sendo um cenário privilegiado para caminhada, corrida leve e contemplação.',
    },
    {
      nome: 'Morro do Farol',
      descricao:
        'Promontório no centro da orla, entre a Prainha e a Praia Grande, com farol histórico e mirante. As escadarias e o entorno são procurados para caminhadas com vista para o mar e para a foz do rio Mampituba.',
    },
    {
      nome: 'Praia Grande',
      descricao:
        'Principal praia urbana de Torres, com cerca de dois quilômetros de extensão, calçadão, quiosques e ampla faixa de areia. É o grande palco de atividade física da cidade, com circulação intensa no verão e estrutura para corrida, caminhada e treino ao ar livre o ano todo.',
    },
  ],
  ciclovias:
    'O calçadão e a orla da Praia Grande formam o principal eixo para pedalar e correr à beira-mar, muito utilizado por moradores e veranistas. A circulação de bicicletas se intensifica no verão ao longo da faixa litorânea da cidade.',

  clima:
    'O clima é subtropical úmido, característico do litoral norte gaúcho, com verões quentes e invernos frios e ventosos.',
  climaTreino:
    'O verão é a melhor época para treino ao ar livre na orla e nas trilhas das falésias, com dias longos e clima quente — início da manhã e fim de tarde escapam do pico de calor e da multidão. No inverno, o frio e os ventos fortes do litoral pedem agasalho ou ambiente coberto, deslocando parte do treino para academias.',

  mobilidade:
    'O acesso principal é pela BR-101, que cruza o município e o conecta a Porto Alegre, ao sul, e a Santa Catarina, ao norte, já que Torres fica na divisa entre os dois estados. O deslocamento interno é feito por vias paralelas à orla e por ônibus, com tráfego que aumenta muito na temporada de verão.',

  corridas: [
    {
      nome: 'Maratona de Torres',
      descricao:
        'Prova de rua realizada na cidade com percursos que incluem 5 km, 10 km, 21 km e 42 km, atraindo corredores da região e cenário à beira-mar e junto às falésias.',
    },
    {
      nome: 'Corridas de rua de verão em Torres',
      descricao:
        'A temporada e o calendário esportivo municipal concentram provas de rua com percursos de 3 km, 5 km e 10 km, aproveitando o calçadão e a faixa de areia da Praia Grande como cenário.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é fortemente ligada à praia e à sazonalidade do verão: corrida e caminhada na orla, ciclismo no calçadão, beach tennis, vôlei de praia e futevôlei. As falésias e trilhas do Parque da Guarita ampliam as opções ao ar livre, e o Festival Internacional de Balonismo reforça a vocação da cidade para atividades a céu aberto.',
  academias:
    'A cidade conta com academias e estúdios voltados a moradores fixos e veranistas, com oferta que se intensifica na temporada. Para quem prefere o ar livre, a orla da Praia Grande e as trilhas das falésias são o complemento natural ao treino de musculação e funcional.',

  destaquesFitness: [
    'Único trecho de falésias do litoral gaúcho, no Parque Estadual da Guarita, com trilhas e mirantes.',
    'Orla da Praia Grande com calçadão para corrida, caminhada e ciclismo à beira-mar.',
    'Forte sazonalidade de verão, com pico de demanda por treino ao ar livre e atendimento a veranistas.',
    'Sede do Festival Internacional de Balonismo, que reforça a cultura de atividades a céu aberto.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 270,
    mensalMax: 720,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Em Torres, treinar à beira-mar é parte do estilo de vida — e a forte sazonalidade do verão cria oportunidades para quem atende tanto veranistas quanto moradores. Com a orla da Praia Grande como academia a céu aberto, as falésias do Parque da Guarita e os morros do centro, um personal trainer encontra na cidade um cenário único para treino ao ar livre o ano todo.',

  vizinhas: ['capao-da-canoa-rs', 'xangri-la-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Torres', url: 'https://cidades.ibge.gov.br/brasil/rs/torres/panorama' },
    { nome: 'Prefeitura de Torres', url: 'https://torres.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
