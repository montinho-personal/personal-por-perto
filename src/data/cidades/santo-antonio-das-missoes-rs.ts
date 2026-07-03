import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santo-antonio-das-missoes-rs',
  nome: 'Santo Antônio das Missões',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'santo-antoniense',
  tipo: 'cidade',

  populacao: 10300,
  populacaoAno: 2022,
  idhm: 0.686,
  idhmClasse: 'médio',
  altitudeM: 213,

  resumoEconomico:
    'Emancipada de São Borja em 1965, Santo Antônio das Missões fica no noroeste do Rio Grande do Sul, na região histórica das Missões Jesuíticas, banhada pelos rios Piratini e Icamaquã, afluentes do Uruguai. A economia é fortemente agropecuária — a agropecuária responde por cerca de dois terços do valor adicionado do município, com destaque para a criação de bovinos de corte e o cultivo de soja, além de lavouras de arroz. A cidade também abriga uma produção de laminados de zinco, atividade pouco comum para um município do seu porte. O patrimônio histórico ligado aos Sete Povos das Missões aparece na Figueira centenária, no Museu Municipal Monsenhor Estanislau Wolski — que reúne uma das maiores coleções de imaginária jesuítico-guarani do país — e na Praça da Matriz Antônio Vicente do Nascimento.',

  mercado:
    'Por ser um município pequeno do interior das Missões, com pouco mais de 10 mil habitantes, o mercado fitness de Santo Antônio das Missões é bastante enxuto, restrito a academias locais de musculação no Centro. A procura por personal trainer costuma vir de quem não encontra estrutura suficiente nessas academias e busca acompanhamento individualizado, muitas vezes alternando treino em ambiente fechado nos meses mais frios com atividade ao ar livre na praça central ou nas estradas rurais do entorno.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: [],

  parques: [
    {
      nome: 'Praça da Matriz Antônio Vicente do Nascimento',
      descricao:
        'Praça central da cidade, junto ao Santuário de Santo Antônio, principal ponto de convívio e caminhada dos moradores no dia a dia.',
    },
    {
      nome: 'Figueira histórica',
      descricao:
        'Árvore centenária tombada como patrimônio histórico do município, em frente à Câmara de Vereadores, na Avenida Florduarte José Marques — um dos pontos de referência da cidade.',
    },
    {
      nome: 'Rios Piratini e Icamaquã',
      descricao:
        'O território é banhado por esses dois afluentes do rio Uruguai, que marcam a paisagem rural do município e servem de referência para atividades ao ar livre fora do perímetro urbano.',
    },
  ],
  ciclovias:
    'Não há estrutura cicloviária formal; caminhada e pedal acontecem nas ruas do Centro e nas estradas vicinais que cortam a zona rural do município.',

  clima:
    'O clima é subtropical, típico do noroeste gaúcho, com verões quentes e invernos frios marcados por geadas frequentes.',
  climaTreino:
    'O verão quente favorece o treino bem cedo ou no fim da tarde, com hidratação reforçada, enquanto o inverno com geadas pede aquecimento cuidadoso e, em dias mais rigorosos, ambientes fechados. Um personal ajuda a manter a constância ajustando o treino às estações do ano.',

  mobilidade:
    'O acesso rodoviário à cidade se dá pela RS-535 e pela RS-344, que conectam o município a São Luiz Gonzaga e a Santo Ângelo, polo regional das Missões. Não há transporte coletivo urbano estruturado; os deslocamentos dependem de veículo próprio, e a ligação com as demais cidades da região ocorre por ônibus intermunicipal.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva do município é marcada pela tradição campeira e pelo forte vínculo com a herança histórica dos Sete Povos das Missões, com a praça central e o entorno rural servindo de espaço informal para caminhada e corrida, sem um circuito de provas de rua consolidado na cidade.',
  academias:
    'A oferta de estrutura para treino é pequena, concentrada em academias locais de musculação no Centro, típica de um município pequeno da região das Missões.',

  destaquesFitness: [
    'Herança histórica dos Sete Povos das Missões, com o Museu Monsenhor Estanislau Wolski e a Figueira centenária.',
    'Praça da Matriz, junto ao Santuário de Santo Antônio, como principal espaço de caminhada da cidade.',
    'Território banhado pelos rios Piratini e Icamaquã, afluentes do Uruguai, na zona rural do município.',
    'Clima subtropical do noroeste gaúcho, com verão quente e inverno de geadas frequentes.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 115,
    onlineMax: 320,
  },

  conclusao:
    'Pequena e marcada pela herança dos Sete Povos das Missões, Santo Antônio das Missões tem no clima subtropical e na vida simples do interior um cenário que pede planejamento para o treino ao longo das estações. Como a oferta de academias é limitada, um personal trainer é o caminho mais direto para quem busca acompanhamento individualizado na cidade.',

  vizinhas: ['sao-borja-rs', 'santo-angelo-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Santo Antônio das Missões', url: 'https://cidades.ibge.gov.br/brasil/rs/santo-antonio-das-missoes/panorama' },
    { nome: 'Prefeitura de Santo Antônio das Missões', url: 'https://www.santoantoniodasmissoes.rs.gov.br/site' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
