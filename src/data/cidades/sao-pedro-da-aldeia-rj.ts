import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-pedro-da-aldeia-rj',
  nome: 'São Pedro da Aldeia',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'aldeense',
  tipo: 'cidade',

  populacao: 104029,
  populacaoAno: 2022,
  idhm: 0.711,
  idhmClasse: 'alto',
  altitudeM: 5,

  resumoEconomico:
    'Na Região dos Lagos, São Pedro da Aldeia tem economia ligada ao turismo, ao comércio e aos serviços, com forte presença militar em torno da Base Aérea Naval — uma das maiores instalações da Aviação Naval do país. As águas calmas da Lagoa de Araruama sustentam o veraneio e a pesca, e o fluxo de visitantes infla sazonalmente o comércio e a hotelaria no verão.',

  mercado:
    'A vocação litorânea e a cultura de vida ao ar livre na orla da Lagoa de Araruama favorecem academias, estúdios e personal trainers, com demanda que cresce no verão entre moradores e veranistas. O contingente ligado à base naval também aporta um público habituado à rotina de treino.',

  bairrosNobres: ['Balneário das Conchas', 'Parque Estoril', 'Nova São Pedro', 'Centro'],
  bairrosPopulares: ['Fluminense', 'Baleia', 'Praia do Sudoeste', 'Balneário São Pedro'],

  parques: [
    {
      nome: 'Orla da Lagoa de Araruama (Praia do Centro)',
      descricao:
        'Orla urbanizada com decks de madeira à beira da Lagoa de Araruama, principal cartão-postal da cidade e ponto procurado por quem corre, caminha e pedala.',
    },
    {
      nome: 'Praia da Ponta dos Cardeiros',
      descricao:
        'Faixa tranquila de areia entre a Praia do Sudoeste e a Baleia, com casuarinas ao longo da margem, boa para caminhada e treino ao ar livre em família.',
    },
    {
      nome: 'Balneário das Conchas',
      descricao:
        'Trecho de orla na Lagoa de Araruama com águas calmas e calçadão, usado para caminhada, corrida leve e atividades à beira da água.',
    },
  ],
  ciclovias:
    'A orla da Lagoa de Araruama é bastante usada por ciclistas; a extensão oficial da malha cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é litorâneo e quente, com baixa pluviosidade — a Região dos Lagos tem um microclima notadamente mais seco que o restante do litoral fluminense, marca de cidades como São Pedro da Aldeia.',
  climaTreino:
    'Dá para treinar ao ar livre o ano todo, com a orla da lagoa como cenário; no verão, vale priorizar o início da manhã e o fim de tarde e reforçar a hidratação por causa do calor.',

  mobilidade:
    'O acesso se dá pela RJ-106 (Rodovia Amaral Peixoto) e pela Via Lagos (RJ-124), rodovia pedagiada que liga a Região dos Lagos à BR-101 e à capital; o trânsito fica intenso na alta temporada.',

  corridas: [
    {
      nome: 'Corrida Morada da Aviação Naval',
      descricao:
        'Prova rústica de 6,5 km que reúne civis e militares, com largada na Praça Dr. Plínio de Assis Tavares (Praça do Canhão) e percurso pela orla da cidade.',
    },
    {
      nome: 'Rústica Natatória de São Pedro da Aldeia',
      descricao:
        'Travessia a nado nas águas calmas da Lagoa de Araruama, evento já consolidado que mobiliza atletas e a comunidade local.',
    },
  ],
  culturaEsportiva:
    'A cidade tem forte ligação com os esportes de água e de praia na Lagoa de Araruama e uma cena de corrida de rua em crescimento, impulsionada pela orla e pelos eventos ligados à comunidade naval.',
  academias:
    'A oferta reúne academias, estúdios e personal trainers atendendo um público litorâneo, com a orla da lagoa e as praças complementando a estrutura para treino ao ar livre.',

  destaquesFitness: [
    'Orla da Lagoa de Araruama com decks e calçadão, ideal para corrida e caminhada o ano todo.',
    'Microclima mais seco da Região dos Lagos, que favorece treino ao ar livre.',
    'Esportes de água na lagoa, com travessias a nado e remo como nichos de treino.',
    'Sazonalidade turística que amplia a clientela de personal no verão.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 390,
  },

  conclusao:
    'Às margens da Lagoa de Araruama, São Pedro da Aldeia combina orla urbanizada e microclima seco da Região dos Lagos, condições que favorecem o treino ao ar livre o ano inteiro. Um personal trainer ajuda a aproveitar a orla e os esportes de água com método, ajustando horários e hidratação ao calor do verão.',

  vizinhas: ['cabo-frio-rj', 'araruama-rj', 'buzios-rj'],

  fontes: [
    { nome: 'IBGE Cidades — São Pedro da Aldeia', url: 'https://cidades.ibge.gov.br/brasil/rj/sao-pedro-da-aldeia/panorama' },
    { nome: 'Prefeitura de São Pedro da Aldeia', url: 'https://pmspa.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
