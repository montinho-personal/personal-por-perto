import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cabo-frio-rj',
  nome: 'Cabo Frio',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'cabo-friense',
  tipo: 'cidade',

  populacao: 222161,
  populacaoAno: 2022,
  idhm: 0.735,
  idhmClasse: 'alto',
  altitudeM: 4,

  resumoEconomico:
    'Coração turístico da Região dos Lagos, Cabo Frio tem economia movida por praias, veraneio e serviços, com grande fluxo de turistas no verão e nos feriados que infla sazonalmente comércio, hotelaria e gastronomia. A cidade também guarda tradição em salinas e pesca, herança da sua história à beira do Canal Itajuru.',

  mercado:
    'A forte cultura de praia e o culto à estética corporal sustentam academias, estúdios e personal trainers, com demanda sazonal elevada no verão e um público que mistura moradores e turistas. A orla plana e extensa funciona como academia a céu aberto o ano inteiro.',

  bairrosNobres: ['Braga', 'Palmeiras', 'Ogiva', 'Portinho'],
  bairrosPopulares: ['Jacaré', 'Jardim Esperança', 'Unamar', 'Porto do Carro'],

  parques: [
    {
      nome: 'Praia do Forte',
      descricao:
        'Orla extensa com avenida beira-mar e calçadão, ideal para corrida e caminhada com vista para o mar a qualquer hora do dia.',
    },
    {
      nome: 'Orla da Praia do Peró',
      descricao:
        'Praia de Bandeira Azul cercada por dunas, com longa faixa de areia que vira pista natural para corrida e treino funcional.',
    },
    {
      nome: 'Orla do Canal Itajuru (Portinho)',
      descricao:
        'Calçadões à beira do canal, no centro, usados para caminhada e ponto de encontro de quem treina ao ar livre.',
    },
  ],
  ciclovias:
    'Há vias para bicicleta na orla; a extensão oficial da malha cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical litorâneo, quente e com baixa pluviosidade — a Região dos Lagos tem um microclima notadamente mais seco que o restante do litoral fluminense.',
  climaTreino:
    'Dá para treinar ao ar livre o ano todo, com forte apelo de praia; no verão, vale priorizar o início da manhã e o fim de tarde e caprichar na hidratação por causa do calor.',

  mobilidade:
    'O acesso principal é pela RJ-106 (Rodovia Amaral Peixoto), com ligação a Búzios e Arraial do Cabo e conexão à BR-101 pelo interior; o trânsito fica intenso na alta temporada.',

  corridas: [
    {
      nome: 'Meia Maratona Internacional de Cabo Frio',
      descricao:
        'Maior evento de corrida da Região dos Lagos, com provas de 21 km, 10 km e 5 km à beira-mar, com largada na orla.',
    },
    {
      nome: 'Corrida da Virada',
      descricao:
        'Prova de fim de ano já consolidada no calendário esportivo local, com clima de confraternização.',
    },
  ],
  culturaEsportiva:
    'Cabo Frio tem forte ligação com os esportes de praia — vôlei, futevôlei e atividades aquáticas — e uma cena de corrida de rua em crescimento, puxada pela orla.',
  academias:
    'A oferta reúne academias, estúdios e personal trainers atendendo um público estético-praiano, com a orla e as praças complementando a estrutura para treino ao ar livre.',

  destaquesFitness: [
    'Orla longa e plana, ideal para corrida e caminhada o ano todo.',
    'Público estético-praiano que sustenta alta demanda por personal.',
    'Sazonalidade turística que amplia a clientela no verão.',
    'Esportes de areia (futevôlei e vôlei) como nicho de treino funcional.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 170,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Capital da Região dos Lagos, Cabo Frio tem orla generosa e cultura de praia que favorecem o treino ao ar livre o ano inteiro. Um personal trainer ajuda a aproveitar a Praia do Forte e o Peró com método, ajustando horários e hidratação ao calor do verão.',

  vizinhas: ['macae-rj', 'rio-de-janeiro-rj', 'niteroi-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Cabo Frio', url: 'https://cidades.ibge.gov.br/brasil/rj/cabo-frio/panorama' },
    { nome: 'Prefeitura de Cabo Frio', url: 'https://cabofrio.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
