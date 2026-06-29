import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cacador-sc',
  nome: 'Caçador',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'caçadorense',
  tipo: 'cidade',

  populacao: 73720,
  populacaoAno: 2022,
  idhm: 0.735,
  idhmClasse: 'alto',
  altitudeM: 920,

  resumoEconomico:
    'Principal centro do Meio-Oeste catarinense, Caçador é um dos maiores polos madeireiros e florestais do Sul do Brasil, com forte indústria de madeira serrada, painéis (MDF), papel, celulose e móveis, sustentada por extensas florestas de pínus e eucalipto. A economia se completa com uma agroindústria diversificada e de alta tecnologia — destaque para maçã, tomate, uva e grãos —, apoiada pela presença de estações de pesquisa da Embrapa e da Epagri.',

  mercado:
    'O mercado fitness acompanha o porte de cidade média catarinense, com academias de musculação, estúdios de pilates e crossfit e profissionais de personal training atendendo a demanda local. O inverno rigoroso reforça a procura por treino indoor e por acompanhamento que mantenha a constância nos meses mais frios.',

  bairrosNobres: ['Centro', 'Reunidas', 'Champagnat', 'Berger'],
  bairrosPopulares: ['Bom Sucesso', 'Martello', 'Sorgatto', 'Bom Jesus'],

  parques: [
    {
      nome: 'Parque Central José Rossi Adami',
      descricao:
        'Principal área de lazer e esporte da cidade, com pista de caminhada e amplos espaços ao ar livre — palco recorrente de eventos como a Corrida do Bem.',
    },
    {
      nome: 'Estação Experimental da Epagri',
      descricao:
        'Estação de pesquisa agropecuária com extensa reserva florestal de araucárias, área verde de referência no entorno urbano.',
    },
    {
      nome: 'Parques e praças de bairro',
      descricao:
        'A cidade conta com praças e espaços públicos distribuídos pelos bairros, usados para caminhada e atividade física ao ar livre.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é pontual e ainda em desenvolvimento; a extensão total não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical úmido de altitude (cerca de 920 m). Caçador é uma das cidades mais frias do Brasil — registrou a menor temperatura já medida no país, -14 °C, em junho de 1952. Os invernos são rigorosos, com geadas frequentes e ocorrências de neve; os verões são amenos a quentes.',
  climaTreino:
    'No inverno, o frio intenso e as geadas pedem aquecimento prolongado, roupas adequadas e uma alternativa indoor para manter a rotina; no verão ameno, as condições ao ar livre costumam ser favoráveis ao treino.',

  mobilidade:
    'A BR-116 e as rodovias estaduais SC-451 e SC-453 conectam Caçador às demais cidades do Meio-Oeste e Planalto catarinense. O deslocamento interno é predominantemente por carro e ônibus.',

  corridas: [
    {
      nome: 'Corrida do Bem',
      descricao:
        'Prova solidária realizada no Parque Central José Rossi Adami, com percursos de 5 km e 10 km, além de caminhada e provas infantis.',
    },
    {
      nome: 'Corrida de Rua da Polícia Militar de Caçador',
      descricao:
        'Evento de corrida de rua organizado localmente, parte do calendário esportivo da cidade.',
    },
  ],
  culturaEsportiva:
    'A cena esportiva local se apoia em eventos de corrida de rua e no uso dos espaços públicos para caminhada e treino. O clima frio dá identidade própria à prática de atividade física, com forte sazonalidade ao longo do ano.',
  academias:
    'A oferta reúne academias de musculação e estúdios de pilates e crossfit, complementados por praças e pelo Parque Central para atividades ao ar livre nos meses mais amenos.',

  destaquesFitness: [
    'Cerca de 74 mil habitantes e IDHM alto (0,735) — base sólida para serviços de bem-estar.',
    'Polo madeireiro, florestal e agroindustrial (maçã, tomate), com Embrapa e Epagri.',
    'Parque Central José Rossi Adami como principal espaço de treino e eventos.',
    'Uma das cidades mais frias do Brasil — invernos rigorosos elevam a demanda por treino indoor e periodização sazonal.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Polo madeireiro e agroindustrial do Meio-Oeste catarinense, Caçador combina IDHM alto com um dos climas mais frios do país. Um personal trainer ajuda a periodizar o treino conforme as estações — do verão ameno ao inverno rigoroso, com geadas — e a aproveitar espaços como o Parque Central José Rossi Adami.',

  vizinhas: ['lages-sc', 'concordia-sc', 'chapeco-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Caçador', url: 'https://cidades.ibge.gov.br/brasil/sc/cacador/panorama' },
    { nome: 'Prefeitura de Caçador', url: 'https://cacador.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
