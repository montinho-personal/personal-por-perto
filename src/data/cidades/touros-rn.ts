import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'touros-rn',
  nome: 'Touros',
  uf: 'RN',
  estado: 'Rio Grande do Norte',
  estadoSlug: 'rio-grande-do-norte',
  regiao: 'Nordeste',
  gentilico: 'tourense',
  tipo: 'cidade',

  populacao: 33035,
  populacaoAno: 2022,
  idhm: 0.570,
  idhmClasse: 'baixo',
  altitudeM: 32,

  resumoEconomico:
    'Conhecida como a "esquina do Brasil", Touros fica no ponto em que o litoral muda de direção e o país chega mais perto da Europa e da África — marco reforçado pelo Farol do Calcanhar, o maior farol do Brasil, erguido na virada do litoral norte para o litoral leste potiguar. A cerca de 85 km de Natal, a economia local combina pesca artesanal em vilas como Perobas, Cajueiro e Carnaubinha, carcinicultura (criação de camarão em viveiros costeiros), turismo de praia e histórico ligado ao Marco de Touros, além de parques de energia eólica que aproveitam os ventos constantes da região, como o complexo eólico instalado nas imediações do município.',

  mercado:
    'O mercado fitness de Touros é o de uma cidade pequena de vocação turística e pesqueira: academias de bairro concentradas no Centro atendem a população fixa, enquanto o fluxo de visitantes nas praias e pousadas ao longo do ano gera demanda pontual por acompanhamento personalizado. A procura por personal trainer tende a vir de quem busca treino ao ar livre aproveitando a orla, ou de quem precisa adaptar a rotina ao calor e à vida na temporada de turismo.',

  bairrosNobres: ['Centro', 'Orla da Praia de Touros'],
  bairrosPopulares: ['Santa Luzia', 'Perobas', 'Carnaubinha'],

  parques: [
    {
      nome: 'Farol do Calcanhar',
      descricao:
        'Erguido no ponto onde o litoral brasileiro faz a curva entre o Atlântico Norte e o Leste, é o maior farol do Brasil, inaugurado em 1943. O entorno, junto à Ponta do Calcanhar, é destino de caminhada e passeio a pé com vista para o mar.',
    },
    {
      nome: 'Praia de Perobas',
      descricao:
        'Vila de pescadores cercada de coqueiros, com jangadas na areia e parrachos (piscinas naturais) a poucos quilômetros da costa — cenário de caminhada tranquila à beira-mar.',
    },
    {
      nome: 'Praia de Carnaubinha',
      descricao:
        'Faixa de areia com águas calmas e mornas, ladeada por coqueiros, usada tanto para banho de mar quanto para caminhada e treino leve ao ar livre.',
    },
  ],
  ciclovias:
    'Touros não tem malha cicloviária estruturada; o pedal e a corrida acontecem nas vias do Centro e nas estradas de acesso às praias e vilas de pescadores, que exigem atenção pela ausência de acostamento.',

  clima:
    'O clima é tropical quente, com temperaturas elevadas o ano todo e ventos alísios constantes típicos do litoral norte potiguar — os mesmos que sustentam os parques eólicos da região. O território do município mescla vegetação de Mata Atlântica no litoral com trechos de Caatinga no interior, e as chuvas se concentram no outono e início do inverno.',
  climaTreino:
    'O calor e a forte radiação solar pedem treino nas primeiras horas da manhã ou no fim da tarde, com hidratação reforçada e protetor solar; a brisa marítima constante ajuda a amenizar a sensação térmica nas praias, mas não substitui o cuidado com a exposição ao sol.',

  mobilidade:
    'O acesso a Touros a partir de Natal, a cerca de 85 km, é feito pela BR-101 e por rodovias estaduais do litoral norte, como a RN-023, a RN-064 e a RN-221, em cerca de 1h15 de carro ou ônibus intermunicipal. Dentro do município, o deslocamento entre o Centro e as vilas de praia é feito majoritariamente por carro, moto ou transporte alternativo, já que grande parte da população vive na área rural e litorânea.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva de Touros gira em torno do mar: a pesca artesanal com jangadas é tradição em vilas como Perobas e Cajueiro, e os ventos constantes fazem da Ponta do Santo Cristo um ponto valorizado para kitesurf e windsurf, com eventos como o Sertões Kitesurf promovidos pela prefeitura. A caminhada na orla e nas praias completa o dia a dia de quem busca atividade física ao ar livre.',
  academias:
    'A oferta de academias é pequena e concentrada no Centro, com estúdios locais de musculação e treino funcional; opções maiores e mais variadas ficam em Natal, a cerca de 85 km de distância.',

  destaquesFitness: [
    'Farol do Calcanhar: o maior farol do Brasil, erguido no ponto mais próximo da Europa e da África.',
    'Praias e vilas de pescadores como Perobas e Carnaubinha, com águas calmas para caminhada e banho de mar.',
    'Ventos constantes que atraem praticantes de kitesurf e windsurf na Ponta do Santo Cristo e sustentam parques eólicos na região.',
    'Cidade litorânea de pesca, carcinicultura e turismo, cujo calor pede planejamento de horário para o treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 600,
    onlineMin: 100,
    onlineMax: 320,
  },

  conclusao:
    'Entre o Farol do Calcanhar, as vilas de pescadores e o vento constante que atrai praticantes de esportes náuticos, Touros oferece um cenário litorâneo propício à vida ativa, ainda que com oferta de academias limitada. Um personal trainer ajuda a organizar o treino considerando o calor, os horários mais frescos do dia e a possibilidade de treinar ao ar livre na orla ou nas praias do entorno.',

  vizinhas: ['joao-camara-rn', 'ceara-mirim-rn', 'natal-rn'],

  fontes: [
    { nome: 'IBGE Cidades — Touros', url: 'https://cidades.ibge.gov.br/brasil/rn/touros/panorama' },
    { nome: 'Prefeitura de Touros', url: 'https://touros.rn.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
