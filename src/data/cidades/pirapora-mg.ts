import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pirapora-mg',
  nome: 'Pirapora',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'piraporense',
  tipo: 'cidade',

  populacao: 55606,
  populacaoAno: 2022,
  idhm: 0.731,
  idhmClasse: 'alto',
  altitudeM: 481,

  resumoEconomico:
    'Situada no norte de Minas, às margens do rio São Francisco, Pirapora é um polo industrial de destaque na região. A economia tem forte peso da indústria — com produção de ferro-silício, silício metálico e do setor têxtil —, complementada por serviços, comércio e administração pública. A posição às margens do Velho Chico e a tradição da navegação fluvial, simbolizada pelo histórico vapor Benjamim Guimarães, fazem do turismo e da cultura ribeirinha parte da identidade da cidade.',

  mercado:
    'Como cidade média do interior mineiro, Pirapora tem um mercado fitness concentrado em academias locais de musculação e treino funcional, somado a estúdios menores. A procura por personal trainers tende a crescer entre quem busca acompanhamento individual e quem quer aproveitar a Orla Fluvial do rio São Francisco como espaço de treino ao ar livre, sempre considerando o calor característico do norte de Minas.',

  bairrosNobres: ['Centro', 'Cidade Jardim', 'Santo Antônio', 'Nova Pirapora'],
  bairrosPopulares: ['Sagrada Família', 'Industrial', 'Bom Jesus', 'São João'],

  parques: [
    {
      nome: 'Orla Fluvial do Rio São Francisco',
      descricao:
        'O principal cartão-postal da cidade reúne calçadão, Praça de Eventos, quiosques e a Praia do Areião às margens do Velho Chico — o trecho mais usado para caminhada, corrida e treino ao ar livre, além de sediar eventos esportivos e culturais.',
    },
    {
      nome: 'Porto do Vapor Benjamim Guimarães',
      descricao:
        'Junto à orla, o porto do histórico vapor de 1913 — restaurado e reinaugurado em 2025 — é ponto de referência para passeios à beira-rio e para quem caminha aproveitando a paisagem do São Francisco.',
    },
    {
      nome: 'Praças e calçadões do Centro',
      descricao:
        'A área central, alvo de projetos de revitalização, concentra praças e calçadões que servem de apoio para caminhada leve e atividade ao ar livre no dia a dia da cidade.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em poucos trechos urbanos; grande parte do pedal e da corrida acontece nas avenidas da cidade e ao longo da Orla Fluvial.',

  clima:
    'O clima é tropical quente e semiúmido, típico do norte de Minas, com duas estações bem marcadas: o verão chuvoso (de novembro a março) e o inverno seco. As temperaturas são elevadas boa parte do ano, com forte radiação solar e dias quentes ao longo das tardes.',
  climaTreino:
    'O calor e a radiação intensa pedem treinar bem cedo ou no fim da tarde, com hidratação reforçada e proteção solar; nos picos de calor e na estação seca, ambientes climatizados são a opção mais segura, e as primeiras horas da manhã tendem a ser as mais favoráveis ao treino na orla.',

  mobilidade:
    'Pirapora é entroncamento rodoviário do norte de Minas, conectada por rodovias federais e estaduais que ligam a cidade a Montes Claros, Curvelo e ao restante do estado. O transporte urbano é feito por ônibus, e a histórica navegação no rio São Francisco marca a vocação fluvial do município.',

  corridas: [
    {
      nome: 'Corrida e Caminhada dos Jogos de Verão',
      descricao:
        'Promovida pela prefeitura na programação dos Jogos de Verão, abre o calendário esportivo com percursos de corrida e caminhada na cidade.',
    },
    {
      nome: 'Corrida Rústica Street Runners',
      descricao:
        'Organizada pelo grupo de corrida Street Runners de Pirapora, com apoio da prefeitura, a prova acontece na Orla Fluvial e reúne corredores locais.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva gira em torno da Orla Fluvial do rio São Francisco, usada para caminhada, corrida e eventos, e de grupos de corrida de rua locais que aproveitam o calçadão à beira-rio. A vida ribeirinha e a paisagem do Velho Chico moldam a relação da cidade com a atividade ao ar livre.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelos bairros centrais e residenciais, com porte compatível com uma cidade média do interior de Minas.',

  destaquesFitness: [
    'Orla Fluvial do rio São Francisco e Praia do Areião como espaço de caminhada e corrida ao ar livre.',
    'Calor e radiação intensos do norte de Minas, que exigem planejamento de horário e hidratação no treino.',
    'Polo industrial do norte mineiro, com produção de ferro-silício, silício metálico e têxtil.',
    'Tradição ribeirinha às margens do Velho Chico, simbolizada pelo histórico vapor Benjamim Guimarães.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Cidade quente do norte de Minas, às margens do São Francisco, Pirapora pede um treino adaptado ao clima e que aproveite a Orla Fluvial e o entorno do rio. Um personal trainer ajuda a organizar a rotina respeitando o calor, definindo os melhores horários e mantendo a constância ao longo das estações seca e chuvosa.',

  vizinhas: ['montes-claros-mg', 'curvelo-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Pirapora', url: 'https://cidades.ibge.gov.br/brasil/mg/pirapora/panorama' },
    { nome: 'Prefeitura de Pirapora', url: 'https://www.pirapora.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
