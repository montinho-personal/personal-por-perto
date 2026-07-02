import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ibicoara-ba',
  nome: 'Ibicoara',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'ibicoarense',
  tipo: 'cidade',

  populacao: 20785,
  populacaoAno: 2022,
  idhm: 0.591,
  idhmClasse: 'baixo',
  pibPerCapita: 24909.99,
  pibPerCapitaAno: 2023,
  altitudeM: 580,

  resumoEconomico:
    'Ibicoara fica no extremo sul da Chapada Diamantina, a cerca de 520 km de Salvador, e combina uma economia rural forte com um fluxo crescente de ecoturismo. Ao lado da vizinha Mucugê, o município está entre os maiores produtores de batata do Brasil em valor de produção, puxado por grandes lavouras irrigadas — a empresa Igarashi, uma das maiores do setor, mantém operação agrícola na região —, além de cultivar café especial de altitude reconhecido em concursos e já exportado para fora do país. No turismo, a cidade é ponto de acesso a atrativos como a Cachoeira do Buracão e a Cachoeira da Fumacinha, dentro do vale do Baixão de Ibicoara, o que atrai visitantes interessados em trilhas e cachoeiras do sul da Chapada, distintas das rotas mais conhecidas de Lençóis e Mucugê.',

  mercado:
    'O mercado de personal trainers em Ibicoara é pequeno, típico de um município rural do interior da Bahia, com poucas academias concentradas no Centro. A demanda tende a vir tanto de moradores que buscam musculação e condicionamento geral quanto de quem pratica trekking, mountain bike e downhill nas trilhas e serras da região, atividades que pedem preparo físico específico para terrenos técnicos.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Cascavel', 'Baixão de Ibicoara'],

  parques: [
    {
      nome: 'Cachoeira do Buracão',
      descricao:
        'Queda de cerca de 85 metros que forma um poço circundado por paredões, dentro do Parque Natural Municipal do Espalhado; o acesso é considerado tranquilo, com trilha curta de cerca de 50 minutos guiada por condutor local.',
    },
    {
      nome: 'Cachoeira da Fumacinha',
      descricao:
        'Queda d\'água de cerca de 100 metros dentro de um cânion de mais de 280 metros de altura, alcançada por uma trilha técnica de nível difícil a partir do povoado de Baixão — cerca de 18 km entre ida e volta, incluindo travessia de leito de rio.',
    },
    {
      nome: 'Sul do Parque Nacional da Chapada Diamantina',
      descricao:
        'O território de Ibicoara ocupa a porção sul da Chapada Diamantina, com serras, vales e trilhas que servem de base para caminhada, trekking e cicloturismo em meio à natureza.',
    },
  ],
  ciclovias:
    'Não há rede cicloviária estruturada na cidade; o pedal e o ciclismo de aventura acontecem nas estradas rurais e nas serras do entorno, como as da região de Campo Redondo, usadas inclusive para provas de mountain bike downhill.',

  clima:
    'Por ficar em altitude (cerca de 580 m, com áreas do município passando de 1.000 m, como o distrito de Cascavel), Ibicoara tem clima subtropical de altitude (Cfb), mais ameno que o sertão baiano, com temperatura média anual em torno de 20 °C e chuvas relativamente bem distribuídas ao longo do ano.',
  climaTreino:
    'As temperaturas amenas favorecem o treino ao ar livre em boa parte do dia, algo incomum no interior da Bahia; ainda assim, as trilhas técnicas até cachoeiras como a Fumacinha exigem preparo físico específico, e o período mais chuvoso (novembro a março) pode dificultar ou tornar mais arriscadas as atividades em trilhas e leitos de rio.',

  mobilidade:
    'O acesso rodoviário principal se dá pela BA-142, que liga Ibicoara a Mucugê, Barra da Estiva e outras cidades do sul da Chapada Diamantina, com conexão à BR-242 para quem vem de Salvador ou de Vitória da Conquista (cerca de 220 km e 3 horas de viagem por rodovia). A malha urbana é enxuta, com deslocamentos internos feitos majoritariamente a pé ou de carro, e o acesso às cachoeiras e trilhas do entorno costuma depender de veículo próprio ou de guias locais.',

  corridas: [
    {
      nome: 'Circuito Baiano de Downhill — Etapa Ibicoara',
      descricao:
        'Etapa do circuito estadual de mountain bike downhill disputada nas serras de Campo Redondo, no sul da Chapada Diamantina, reforçando a vocação do município para esportes de aventura sobre duas rodas.',
    },
    {
      nome: 'Expedição Mandacaru',
      descricao:
        'Corrida de aventura (trekking, mountain bike, canoagem e técnicas verticais) que teve três edições sediadas em Ibicoara antes de passar a ser realizada no município vizinho de Itaetê a partir de 2024.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Ibicoara gira em torno do trekking até cachoeiras técnicas como a Fumacinha e o Buracão, do mountain bike e downhill nas serras do entorno — com comunidades locais dedicadas ao trail running e ao enduro — e do trabalho físico exigido pela lavoura de batata e café, atividade que ocupa parte relevante da população.',
  academias:
    'A oferta de academias é pequena, concentrada no Centro da cidade, voltada principalmente a musculação e treino funcional; boa parte do condicionamento físico de moradores rurais e de guias de trilha segue acontecendo de forma informal, aproveitando o próprio relevo da região.',

  destaquesFitness: [
    'Altitude de cerca de 580 m e clima subtropical ameno, favorável ao treino ao ar livre na maior parte do ano.',
    'Sul da Chapada Diamantina, com trilhas técnicas até as Cachoeiras do Buracão e da Fumacinha.',
    'Sede de etapa do Circuito Baiano de Downhill, nas serras de Campo Redondo.',
    'Economia rural forte, com destaque nacional na produção de batata (ao lado de Mucugê) e café especial de altitude.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 220,
    mensalMax: 600,
    onlineMin: 100,
    onlineMax: 320,
  },

  conclusao:
    'Entre lavouras de café e batata e cachoeiras escondidas no sul da Chapada Diamantina, Ibicoara oferece clima ameno e cenário natural raro para quem treina ao ar livre, mas cobra preparo físico específico de quem encara trilhas técnicas e as serras da região. Um personal trainer pode ajudar a estruturar esse condicionamento, prevenir lesões em terrenos exigentes e manter a constância do treino no ritmo de uma cidade pequena do interior.',

  vizinhas: ['lencois-ba', 'vitoria-da-conquista-ba', 'brumado-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Ibicoara', url: 'https://cidades.ibge.gov.br/brasil/ba/ibicoara/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura Municipal de Ibicoara', url: 'https://www.ibicoara.ba.gov.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
