import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'guaratuba-pr',
  nome: 'Guaratuba',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'guaratubano',
  tipo: 'cidade',

  populacao: 42062,
  populacaoAno: 2022,
  idhm: 0.717,
  idhmClasse: 'alto',
  altitudeM: 5,

  resumoEconomico:
    'No litoral sul do Paraná, Guaratuba se debruça sobre a baía de Guaratuba, a segunda maior do estado, e soma cerca de 27 km de praias. A economia gira em torno do turismo de veraneio, que multiplica a população nos meses quentes, e da pesca artesanal — a cidade é referência na produção de ostras da região do Cabaraquara e tradicional produtora de banana. O fluxo de visitantes movimenta comércio, gastronomia e serviços, com forte sazonalidade ao longo do ano.',

  mercado:
    'O mercado fitness de Guaratuba acompanha o ritmo de uma cidade litorânea: mais aquecido na temporada de verão, quando moradores e veranistas buscam treino, e mais enxuto na baixa estação. A procura por personal trainers tende a crescer entre quem quer manter a constância fora do período de férias e aproveitar a orla e a natureza como ambiente de atividade ao ar livre.',

  bairrosNobres: ['Centro', 'Caieiras', 'Cidade Balneária de Brejatuba', 'Coroados'],
  bairrosPopulares: ['Cohapar', 'Carvoeiro', 'Eliana', 'Nereidas'],

  parques: [
    {
      nome: 'Orla e Praia Central',
      descricao:
        'O calçadão e a faixa de areia da Praia Central concentram a caminhada, a corrida e o treino ao ar livre da cidade, com mar mais calmo e estrutura que atrai banhistas de todas as idades; a orla passou por obras de alargamento da faixa de areia.',
    },
    {
      nome: 'Baía de Guaratuba',
      descricao:
        'Segunda maior baía do estado, com mangues, ilhas e rios, é cenário para remo, stand-up paddle, mergulho e pesca, além de um refúgio de fauna que enquadra as atividades de quem treina junto à água.',
    },
    {
      nome: 'Praia Brava e Brejatuba',
      descricao:
        'Trechos de mar mais aberto procurados por surfistas e por quem prefere caminhadas longas na areia, com a natureza preservada do entorno servindo de pano de fundo para o treino.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária se concentra em trechos da orla e da área urbana central; boa parte do pedal e da corrida acontece junto às praias e nas avenidas próximas ao mar, com uso mais intenso na temporada.',

  clima:
    'O clima é subtropical úmido, com forte influência marítima: verões quentes e chuvosos e umidade alta o ano inteiro, típica do litoral paranaense. O vento do mar é constante e as chuvas se concentram no verão, estação que coincide com o auge do movimento turístico.',
  climaTreino:
    'A umidade elevada pede atenção à hidratação e a horários mais frescos, como o começo da manhã e o fim da tarde; o vento litorâneo influencia a corrida na orla, e o inverno ameno costuma ser uma janela confortável para o treino ao ar livre.',

  mobilidade:
    'Guaratuba se conecta a Curitiba e ao sul do país pela BR-376 e a Pontal do Paraná pela PR-412. A travessia da baía, feita historicamente pelo ferry-boat entre Caiobá e Guaratuba, ganhou em 2026 a nova Ponte de Guaratuba, que liga os dois lados por via rodoviária e altera a lógica de deslocamento do litoral. O transporte urbano é feito por ônibus.',

  corridas: [
    {
      nome: 'Maratona Internacional do Paraná',
      descricao:
        'Prova que estreou em 2026 com percurso pela nova Ponte de Guaratuba, ligando Caiobá e Guaratuba, e distâncias de 5 km, 10 km, meia maratona e maratona, reunindo milhares de corredores no litoral.',
    },
    {
      nome: 'Corridas de rua da temporada',
      descricao:
        'Ao longo do ano, especialmente no verão, a cidade recebe provas de rua de menor porte que aproveitam a orla e o calçadão, reforçando a vocação litorânea para a corrida.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso da orla para caminhada e corrida, os esportes aquáticos na baía e no mar, a pesca artesanal como tradição local e provas de rua que exploram a paisagem litorânea — tudo marcado pela sazonalidade da temporada de verão.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros próximos à orla, com porte compatível com uma cidade litorânea média e movimento que oscila entre alta e baixa temporada.',

  destaquesFitness: [
    'Cerca de 27 km de praias e orla requalificada como espaço de caminhada e corrida.',
    'Baía de Guaratuba, segunda maior do estado, palco de esportes aquáticos e contato com a natureza.',
    'Maratona Internacional do Paraná, que estreou em 2026 cruzando a nova Ponte de Guaratuba.',
    'Cidade litorânea de economia movida a turismo de veraneio e pesca artesanal, com forte sazonalidade.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade de praia, baía e clima úmido, Guaratuba oferece um cenário privilegiado para treinar ao ar livre, mas com a constância desafiada pela sazonalidade da temporada. Um personal trainer ajuda a manter a rotina ao longo do ano, ajustando horários ao calor e à umidade e aproveitando a orla, a baía e a natureza do litoral paranaense.',

  vizinhas: ['paranagua-pr', 'curitiba-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Guaratuba', url: 'https://cidades.ibge.gov.br/brasil/pr/guaratuba/panorama' },
    { nome: 'Prefeitura de Guaratuba', url: 'https://www.guaratuba.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
