import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ceara-mirim-rn',
  nome: 'Ceará-Mirim',
  uf: 'RN',
  estado: 'Rio Grande do Norte',
  estadoSlug: 'rio-grande-do-norte',
  regiao: 'Nordeste',
  gentilico: 'ceará-miriense',
  tipo: 'cidade',

  populacao: 79115,
  populacaoAno: 2022,
  idhm: 0.616,
  idhmClasse: 'médio',
  altitudeM: 36,

  resumoEconomico:
    'Integrante da Região Metropolitana de Natal e do Polo Costa das Dunas, Ceará-Mirim guarda forte herança da economia sucroalcooleira: o histórico Vale do Ceará-Mirim foi um dos grandes produtores de cana-de-açúcar do estado, com seus antigos engenhos e casarões. Hoje a economia combina agropecuária e cana, comércio e serviços, com peso crescente do turismo de praia no litoral norte potiguar.',

  mercado:
    'O mercado fitness local é o de uma cidade média da Região Metropolitana de Natal: academias de bairro e estúdios de musculação e treinamento funcional na sede, com demanda complementar nas áreas litorâneas e nos condomínios de veraneio próximos às praias. A proximidade de Natal amplia o acesso a equipamentos e a profissionais de educação física.',

  bairrosNobres: ['Centro', 'Boa Esperança', 'Maxaranguape (área litorânea)', 'Loteamentos da orla'],
  bairrosPopulares: ['Cipó', 'Alameda', 'Massangana', 'Roseira'],

  parques: [
    {
      nome: 'Praia de Jacumã',
      descricao:
        'Uma das mais conhecidas do litoral norte potiguar, marcada pela Lagoa de Jacumã entre dunas — cenário para caminhadas na areia, corrida leve e treino ao ar livre.',
    },
    {
      nome: 'Praia de Muriú',
      descricao:
        'Vila de pescadores que mantém o charme tradicional, com águas calmas e faixa de areia ampla, boa para caminhada e atividades de praia.',
    },
    {
      nome: 'Praia de Porto Mirim',
      descricao:
        'Praia tranquila entre Jacumã e Muriú, cujo nome remete ao antigo porto de escoamento da cana — opção mais reservada para treino à beira-mar.',
    },
  ],
  ciclovias:
    'A cidade não conta com uma malha cicloviária estruturada extensa; o pedal acontece sobretudo em vias urbanas da sede e nas estradas de acesso às praias e ao Vale do Ceará-Mirim, exigindo atenção ao tráfego.',

  clima:
    'O clima é tropical quente, típico do litoral da Região Metropolitana de Natal, com temperaturas elevadas o ano todo, alta insolação e chuvas concentradas no outono e início do inverno.',
  climaTreino:
    'O calor e a radiação intensos favorecem treinos no início da manhã ou no fim da tarde, com boa hidratação e proteção solar. A brisa litorânea ameniza a sensação térmica nas praias.',

  mobilidade:
    'O deslocamento é predominantemente por carro e ônibus. A BR-406 é o principal eixo, ligando a sede a Natal e ao restante do litoral norte, com linhas metropolitanas conectando o município à capital. As praias são acessadas por estradas vicinais a partir da BR-406.',

  corridas: [
    {
      nome: 'Marista Night Run — etapa Ceará-Mirim',
      descricao:
        'Corrida noturna que reúne atletas locais com largada em via da cidade, com apoio da Secretaria Municipal de Mobilidade Urbana na organização do trânsito.',
    },
    {
      nome: 'Circuitos e corridas de rua locais',
      descricao:
        'Provas e eventos esportivos promovidos pela prefeitura e por grupos de corrida da cidade movimentam a cena de corrida de rua na sede e no entorno.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura a tradição do futebol e dos esportes de praia do litoral norte com uma cena de corrida de rua em crescimento na sede. As praias de Jacumã, Muriú e Porto Mirim funcionam como extensão natural para a atividade física ao ar livre.',
  academias:
    'A oferta concentra-se em academias de bairro e estúdios de musculação e funcional na sede, com a proximidade de Natal e de São Gonçalo do Amarante ampliando o acesso a estruturas maiores quando necessário.',

  destaquesFitness: [
    'Praias de Jacumã, Muriú e Porto Mirim para caminhada, corrida e treino ao ar livre.',
    'Cidade da Região Metropolitana de Natal, com fácil acesso à capital pela BR-406.',
    'Cena de corrida de rua local em crescimento, com provas como a Marista Night Run.',
    'Clima quente e ensolarado o ano todo, que favorece o treino litorâneo.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 240,
    mensalMax: 620,
    onlineMin: 110,
    onlineMax: 320,
  },

  conclusao:
    'Entre a herança dos engenhos do Vale do Ceará-Mirim e as praias do litoral norte potiguar, Ceará-Mirim oferece um cenário propício à vida ativa. Um personal trainer ajuda a montar uma rotina adaptada ao clima quente — da caminhada em Jacumã à musculação na sede —, aproveitando ainda a proximidade com Natal.',

  vizinhas: ['natal-rn', 'sao-goncalo-do-amarante-rn', 'macaiba-rn'],

  fontes: [
    { nome: 'IBGE Cidades — Ceará-Mirim', url: 'https://cidades.ibge.gov.br/brasil/rn/ceara-mirim/panorama' },
    { nome: 'Prefeitura de Ceará-Mirim', url: 'https://cearamirim.rn.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
