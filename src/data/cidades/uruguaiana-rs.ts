import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'uruguaiana-rs',
  nome: 'Uruguaiana',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'uruguaianense',
  tipo: 'cidade',

  populacao: 117210,
  populacaoAno: 2022,
  idhm: 0.74,
  idhmClasse: 'alto',
  altitudeM: 66,

  resumoEconomico:
    'Maior cidade da Fronteira Oeste gaúcha, Uruguaiana fica às margens do Rio Uruguai, na divisa com a Argentina e próxima ao Uruguai. Abriga o maior porto seco da América Latina, com aduana e intenso fluxo de cargas pela ponte internacional que liga a cidade a Paso de los Libres (Argentina). A economia se apoia no comércio exterior e na logística, somados a um agronegócio forte em arroz irrigado e pecuária de corte.',

  mercado:
    'Como polo regional da Fronteira Oeste, a cidade concentra a oferta de serviços fitness da região, com academias e estúdios no centro e nos bairros, complementados pelo atendimento domiciliar e ao ar livre. O perfil de renda ligado ao agronegócio e ao comércio de fronteira sustenta uma demanda estável por treino personalizado.',

  bairrosNobres: ['Centro', 'Cabo Luiz Quevedo', 'São Marcos', 'Nova Esperança'],
  bairrosPopulares: ['Promorar', 'São José', 'Bela União', 'Industrial'],

  parques: [
    {
      nome: 'Orla do Rio Uruguai',
      descricao:
        'A beira do Rio Uruguai é o cartão-postal da cidade e ponto natural para caminhadas e corridas ao entardecer, com vista para a fronteira.',
    },
    {
      nome: 'Parque Cyro Ferreira',
      descricao:
        'Tradicional espaço público de lazer da cidade, usado para atividades ao ar livre e eventos.',
    },
  ],
  ciclovias:
    'O terreno plano da cidade favorece o deslocamento de bicicleta; a extensão da rede cicloviária urbana não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical, com verões quentes — comuns no oeste gaúcho — e invernos frios.',
  climaTreino:
    'O calor intenso do verão pede treinos no início da manhã ou no fim da tarde, quando a orla do Rio Uruguai fica mais agradável; o frio do inverno favorece o treino indoor. Outono e primavera oferecem as melhores condições ao ar livre.',

  mobilidade:
    'Uruguaiana é cortada pela BR-290, importante eixo rodoviário do estado, e funciona como porta de entrada terrestre do Brasil pelo Mercosul, com a ponte internacional para Paso de los Libres. A cidade tem aeroporto e o grande porto seco rodoferroviário. Não há sistema de trens urbanos de passageiros.',

  corridas: [
    {
      nome: 'Corridas de rua da ACORU',
      descricao:
        'A Associação dos Corredores de Rua de Uruguaiana (ACORU) organiza e apoia provas de rua ao longo do ano, reunindo a comunidade de corredores da fronteira.',
    },
    {
      nome: 'Provas da Fronteira Oeste',
      descricao:
        'Como polo da região, a cidade recebe corridas e eventos esportivos que atraem participantes das cidades vizinhas e do outro lado da fronteira.',
    },
  ],
  culturaEsportiva:
    'A cultura local mistura o esporte com a forte tradição gaúcha: a cidade é berço da Califórnia da Canção Nativa e tem CTGs ativos, cavalgadas e rodeios que mantêm viva a lida campeira. Esse perfil ativo, somado às corridas de rua, sustenta o interesse por treino e condicionamento.',
  academias:
    'A oferta reúne academias e estúdios no centro e nos bairros residenciais, atendendo o público da maior cidade da Fronteira Oeste, com a orla do Rio Uruguai como principal espaço de treino ao ar livre.',

  destaquesFitness: [
    'Orla do Rio Uruguai: caminhada e corrida com vista para a fronteira.',
    'Corridas de rua organizadas pela ACORU ao longo do ano.',
    'Terreno plano que favorece corrida e ciclismo.',
    'Tradição gaúcha (CTGs, cavalgadas e rodeios) que valoriza a vida ativa.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Maior centro da Fronteira Oeste, com o porto seco, o agronegócio do arroz e da pecuária e uma forte identidade gaúcha, Uruguaiana tem na orla do Rio Uruguai e nas corridas de rua bons pontos de partida para quem quer treinar. Um personal trainer ajuda a manter a constância o ano todo, ajustando o treino ao calor do verão e ao frio do inverno da fronteira.',

  vizinhas: ['santa-maria-rs', 'porto-alegre-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Uruguaiana', url: 'https://cidades.ibge.gov.br/brasil/rs/uruguaiana/panorama' },
    { nome: 'Prefeitura de Uruguaiana', url: 'https://www.uruguaiana.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/432240' },
  ],
  atualizadoEm: '2026-06-29',
};
