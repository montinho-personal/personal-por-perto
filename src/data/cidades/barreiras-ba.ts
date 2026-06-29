import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'barreiras-ba',
  nome: 'Barreiras',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'barreirense',
  tipo: 'cidade',

  populacao: 159734,
  populacaoAno: 2022,
  idhm: 0.721,
  idhmClasse: 'alto',
  altitudeM: 435,

  resumoEconomico:
    'Principal polo do agronegócio do oeste da Bahia e da região do MATOPIBA, Barreiras produz soja, milho e algodão em larga escala. Tem crescimento populacional e econômico acelerado, integrando o corredor de expansão do oeste baiano, às margens do Rio Grande.',

  mercado:
    'O mercado é diversificado e em crescimento, acompanhando a expansão da cidade, com redes nacionais e boxes de crossfit, parte deles próximos à universidade.',

  bairrosNobres: ['Morada Nobre', 'Vila Brasil', 'Sandra Regina', 'Centro'],
  bairrosPopulares: ['Santa Luzia', 'Vila Dulce', 'São Pedro', 'Barreirinhas'],

  parques: [
    {
      nome: 'Parque Natural Engenheiro Geraldo Rocha',
      descricao:
        'Às margens do Rio Grande, tem pistas de corrida e caminhada, ciclovia, academia ao ar livre, rampa de skate e quadras poliesportivas.',
    },
    {
      nome: 'Praças com Academia',
      descricao:
        'Programa municipal de praças com academias ao ar livre, espalhadas pelos bairros.',
    },
    {
      nome: 'Orla do Rio Grande',
      descricao:
        'Área de lazer ribeirinha, junto ao antigo porto, usada para caminhada e atividade ao ar livre.',
    },
  ],
  ciclovias:
    'O bairro planejado Morada Nobre e o Parque Natural Eng. Geraldo Rocha têm ciclovias; a extensão total da malha ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical com estação seca marcada (do cerrado/planalto), quente o ano todo, com período chuvoso úmido.',
  climaTreino:
    'A baixa umidade na seca exige hidratação constante; vale treinar cedo ou à noite por causa do calor.',

  mobilidade:
    'Barreiras é um importante entroncamento rodoviário, servida pela BR-242 (principal eixo, que liga a Salvador), pela BR-135 e pela BR-020.',

  corridas: [
    {
      nome: 'Circuito Sesc de Corridas — Etapa Barreiras',
      descricao:
        'Provas de 5 km e 10 km e caminhada, com concentração na Praça Gov. João Durval Carneiro.',
    },
    {
      nome: 'Campeonato de Futebol de Bairros',
      descricao:
        'Torneio municipal entre times de bairros, parte do calendário esportivo local.',
    },
  ],
  culturaEsportiva:
    'A cidade tem forte tradição de futebol de bairros e uma cena crescente de corrida e caminhada, com investimentos públicos em parques e academias ao ar livre.',
  academias:
    'A oferta inclui redes nacionais e boxes de crossfit, em uma cidade em expansão, complementada pelo Parque Natural Eng. Geraldo Rocha e pelo programa de praças com academia.',

  destaquesFitness: [
    'Parque Natural Eng. Geraldo Rocha como principal polo de treino ao ar livre (pista, ciclovia e academia).',
    'Cidade nova e em expansão, com redes fitness e boxes de crossfit.',
    'Programa municipal de "Praças com Academia" ampliando os espaços públicos.',
    'Clima seco de planalto, que pede atenção à hidratação e à proteção solar.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 420,
  },

  conclusao:
    'Capital do agro do oeste baiano, Barreiras une renda em expansão e o Parque às margens do Rio Grande. Um personal trainer ajuda a aproveitar esse cenário com método, com atenção à hidratação no clima seco do planalto.',

  vizinhas: ['salvador-ba', 'vitoria-da-conquista-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Barreiras', url: 'https://cidades.ibge.gov.br/brasil/ba/barreiras/panorama' },
    { nome: 'Prefeitura de Barreiras', url: 'https://www.barreiras.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
