import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'bezerros-pe',
  nome: 'Bezerros',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'bezerrense',
  tipo: 'cidade',

  populacao: 61694,
  populacaoAno: 2022,
  idhm: 0.606,
  idhmClasse: 'médio',
  altitudeM: 470,

  resumoEconomico:
    'No Agreste pernambucano, a cerca de 100 km de Recife, Bezerros é conhecida como a Terra dos Papangus — os foliões mascarados do carnaval — e como um dos polos de artesanato mais fortes do estado. A xilogravura tem ali uma de suas maiores referências nacionais na obra de J. Borges, e o artesanato em couro, madeira e papel sustenta ateliês, museus e o comércio ligado ao turismo. A economia se completa com o comércio local, a agropecuária e o fluxo de visitantes atraídos pela cultura e pela Serra Negra.',

  mercado:
    'O mercado fitness de Bezerros tem porte de cidade média do interior nordestino, concentrado em academias de bairro e em treino funcional, com uma rede mais enxuta do que a de Caruaru, o grande centro do Agreste vizinho. A procura por personal trainers cresce entre quem busca acompanhamento individual para emagrecimento, saúde e preparo, aproveitando o clima ameno da região e os percursos ao ar livre rumo à Serra Negra.',

  bairrosNobres: ['Centro', 'São Sebastião', 'Boas Novas', 'Sítio dos Remédios'],
  bairrosPopulares: ['Areias', 'Cajazeiras', 'Encruzilhada de São João', 'Sapucarana'],

  parques: [
    {
      nome: 'Parque Ecológico da Serra Negra',
      descricao:
        'A cerca de 10 km do centro, a Serra Negra é o principal atrativo natural de Bezerros, com trilhas, mirantes acima de 900 m de altitude e mata preservada — o destino preferido de quem combina caminhada, corrida e contato com a natureza.',
    },
    {
      nome: 'Mirante da Serra Negra',
      descricao:
        'Em um dos pontos mais altos da serra, o mirante dá vista para a vila de Serra Negra, trechos de Bezerros e a região de Gravatá, e funciona como meta para quem treina subidas e percursos em meio ao relevo.',
    },
    {
      nome: 'Centro histórico e Estação da Cultura',
      descricao:
        'O núcleo urbano reúne praças, o comércio e equipamentos culturais ligados aos papangus e à xilogravura, formando o trecho mais plano e movimentado para caminhadas leves no dia a dia.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada na área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e nas estradas de acesso à Serra Negra, que oferecem percursos com relevo para quem busca desafio.',

  clima:
    'O clima é de Agreste, na transição entre a Zona da Mata e o Sertão, mais ameno do que o semiárido por causa da altitude em torno de 470 m. Os verões são longos e quentes e os invernos, mais curtos, frescos e úmidos, com a estação chuvosa concentrada do outono ao inverno; a Serra Negra, mais alta, tem temperaturas ainda mais agradáveis.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre em boa parte do ano, especialmente cedo e no fim da tarde; nos dias mais quentes do verão, vale reforçar a hidratação, e a altitude da serra torna os percursos da Serra Negra uma opção fresca para correr e caminhar.',

  mobilidade:
    'Bezerros é cortada pela BR-232, principal eixo que liga Recife ao interior de Pernambuco, o que facilita o acesso à cidade e a viagem rumo a Caruaru e ao restante do Agreste. O transporte urbano é feito por ônibus e vans, e a rodovia concentra parte do comércio e dos serviços às margens da via.',

  corridas: [
    {
      nome: 'Corrida JF na Serra Negra',
      descricao:
        'Prova com largada na região da Serra Negra e percursos de 6 km e 10 km, que aproveita o relevo e o clima da serra para atrair corredores da cidade e do entorno.',
    },
    {
      nome: 'Circuito Pernambucano de Corrida e Caminhada das Mulheres',
      descricao:
        'Etapa do circuito estadual realizada em Bezerros, voltada à participação feminina e ao incentivo da corrida de rua no Agreste.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso das praças e do centro para caminhada com os percursos da Serra Negra para corrida e trilha, somados a uma forte identidade cultural ligada aos papangus, ao carnaval e ao artesanato, que movimentam a cidade ao longo do ano.',
  academias:
    'A oferta é formada sobretudo por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior pernambucano.',

  destaquesFitness: [
    'Terra dos Papangus, com forte identidade cultural ligada ao carnaval e ao artesanato.',
    'Serra Negra, com trilhas e mirantes acima de 900 m, como espaço de corrida e caminhada na natureza.',
    'Clima de Agreste mais ameno pela altitude, favorável ao treino ao ar livre boa parte do ano.',
    'Polo de xilogravura referenciado pela obra de J. Borges, às margens da BR-232 rumo a Caruaru.',
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
    'Cidade cultural do Agreste, com clima ameno e a Serra Negra como cenário natural, Bezerros oferece boas condições para treinar ao ar livre durante quase todo o ano. Um personal trainer ajuda a montar uma rotina que aproveite os percursos da serra e a defina os melhores horários, mantendo a constância e o cuidado com a saúde.',

  vizinhas: ['caruaru-pe', 'gravata-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Bezerros', url: 'https://cidades.ibge.gov.br/brasil/pe/bezerros/panorama' },
    { nome: 'Prefeitura de Bezerros', url: 'https://www.bezerros.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
