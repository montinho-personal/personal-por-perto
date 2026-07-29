import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'serra-es',
  nome: 'Serra',
  uf: 'ES',
  estado: 'Espírito Santo',
  estadoSlug: 'espirito-santo',
  regiao: 'Sudeste',
  gentilico: 'serrano',
  tipo: 'cidade',

  populacao: 520653,
  populacaoAno: 2022,
  idhm: 0.739,
  idhmClasse: 'alto',

  resumoEconomico:
    'Serra é o polo industrial e logístico da Grande Vitória, sede do Polo Industrial de Tubarão e de grandes indústrias, com economia diversificada entre indústria pesada, comércio, serviços e turismo de praia. Foi um dos municípios que mais cresceram no país e tem 23 km de litoral, de Manguinhos a Nova Almeida — combinação de dinamismo econômico e vida à beira-mar.',

  mercado:
    'O extenso litoral sustenta uma cultura de praia e musculação na Serra, e as revitalizações de orla vêm incluindo academias ao ar livre. Some-se a isso o grande contingente de trabalhadores do polo industrial, e tem-se uma demanda crescente por personal trainers, do treino na orla ao acompanhamento que se encaixa nos turnos de trabalho.',

  bairrosNobres: ['Parque Residencial Laranjeiras', 'Morada de Laranjeiras', 'Valparaíso', 'Manguinhos'],
  bairrosPopulares: ['Planalto Serrano', 'Feu Rosa', 'Carapina', 'Jacaraípe'],

  parques: [
    {
      nome: 'Parque da Cidade',
      descricao:
        'Aberto das 6h às 22h, tem quadras poliesportivas e de tênis, campo de futsal, pista de skate, academia adulto e infantil, área de calistenia e ciclovia — uma das estruturas públicas de treino mais completas da Grande Vitória.',
    },
    {
      nome: 'Orla de Jacaraípe',
      descricao:
        'Em revitalização, recebeu academias ao ar livre em inox, ciclovia nivelada ao calçadão, bicicletários e mirante — ponto forte para caminhada e corrida à beira-mar.',
    },
    {
      nome: 'Praia de Manguinhos',
      descricao:
        'Orla para caminhada e corrida em ambiente mais rústico e arborizado, uma alternativa tranquila ao agito das praias centrais.',
    },
  ],
  ciclovias:
    'As ciclovias da Serra integram a malha de mais de 220 km da Grande Vitória, com destaque para a orla de Jacaraípe, cuja ciclovia foi integrada ao calçadão na revitalização recente.',

  clima:
    'O clima é tropical litorâneo, quente e úmido, propício ao treino ao ar livre o ano inteiro.',
  climaTreino:
    'Dá para treinar fora o ano todo, com atenção ao calor nas horas centrais do dia e hidratação reforçada. A orla revitalizada e o Parque da Cidade dão boas opções em diferentes horários.',

  mobilidade:
    'A Serra é integrada à Grande Vitória pelo sistema Transcol, com forte malha rodoviária e logística ligada ao polo industrial, e bicicletários nos terminais. O deslocamento dentro do município é predominantemente por carro e ônibus.',

  corridas: [
    {
      nome: 'Meia Maratona dos Reis Magos',
      descricao:
        'Percursos de 21 km e 5 km pela orla de Jacaraípe e pelas falésias de Nova Almeida, com chegada na histórica Igreja dos Reis Magos (de 1615) — o principal evento de corrida do município.',
    },
    {
      nome: 'Calendário de corridas da Grande Vitória',
      descricao:
        'A Serra participa do movimentado calendário esportivo da região, com provas que aproveitam os 23 km de litoral.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva da Serra gira em torno dos seus 23 km de litoral — caminhada, corrida e esportes de praia — e de parques com boa infraestrutura. O número de eventos esportivos cresce junto com a cidade.',
  academias:
    'A oferta de academias acompanha o porte e o crescimento do município, complementada pelas academias ao ar livre dos parques e das orlas revitalizadas, como a de Jacaraípe.',

  destaquesFitness: [
    'Parque da Cidade com pista de skate, calistenia, academias e ciclovia.',
    'Orla de Jacaraípe revitalizada, com academias ao ar livre e ciclovia.',
    '23 km de litoral para treino de praia e corrida.',
    'Meia Maratona dos Reis Magos como evento-âncora da cidade.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Entre o dinamismo do polo industrial e os 23 km de litoral, a Serra oferece bons cenários para treinar — do Parque da Cidade à orla de Jacaraípe. Um personal trainer ajuda a encaixar o treino na rotina de trabalho e a aproveitar a estrutura da cidade com método e segurança.',

  vizinhas: ['vitoria-es', 'vila-velha-es'],

  fontes: [
    { nome: 'IBGE Cidades — Serra', url: 'https://cidades.ibge.gov.br/brasil/es/serra/panorama' },
    { nome: 'Prefeitura da Serra', url: 'https://www.serra.es.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-29',
  capaArte: {
    src: '/capas-cidade/serra-es.webp',
    w: 1200,
    h: 675,
    alt:
      'Personal trainer em Serra (ES) em arte que une treino de força e o cartão-postal real do município — o monte Mestre Álvaro dominando o horizonte, com os bairros e o litoral aos seus pés — Personal por Perto',
    legenda:
      'Treino personalizado em Serra: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
