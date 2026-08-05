import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'petrolina-pe',
  nome: 'Petrolina',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'petrolinense',
  tipo: 'cidade',

  populacao: 386791,
  populacaoAno: 2022,
  idhm: 0.697,
  idhmClasse: 'médio',
  altitudeM: 376,

  resumoEconomico:
    'Terceira maior cidade de Pernambuco e maior do interior, Petrolina é polo da fruticultura irrigada (uva e manga) e dos vinhos do Vale do São Francisco, com forte agroindústria de exportação. Forma conurbação com Juazeiro-BA, do outro lado do rio, e é centro regional de comércio, saúde e ensino (com a UNIVASF).',

  mercado:
    'Cidade em expansão imobiliária e populacional, Petrolina tem rede crescente de academias e boxes de crossfit; o clima quente favorece o treino ao ar livre na orla pela manhã e no fim de tarde.',

  bairrosNobres: ['Orla', 'Alto do Capiberibe', 'Areia Branca', 'Jardim Petrópolis'],
  bairrosPopulares: ['Dom Avelar', 'João de Deus', 'Cosme e Damião', 'Vila Mocó'],

  parques: [
    {
      nome: 'Orla do Rio São Francisco',
      descricao:
        'Calçadão para caminhada, corrida e ciclismo, com vista para Juazeiro-BA — a principal academia a céu aberto da cidade.',
    },
    {
      nome: 'Parque Municipal Josepha Coelho',
      descricao:
        'Área verde de lazer próxima à orla e à UNIVASF, usada para caminhada e atividade ao ar livre.',
    },
    {
      nome: 'Praças e calçadões do Centro',
      descricao:
        'Espaços públicos com acesso à orla, usados para treino e caminhada no dia a dia.',
    },
  ],
  ciclovias:
    'Há trecho de ciclovia/ciclofaixa junto à orla; a extensão total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é semiárido quente, com sol o ano todo (a "Cidade do Sol") e temperaturas altas, na margem do Rio São Francisco.',
  climaTreino:
    'O treino ao ar livre é mais indicado no início da manhã ou após o pôr do sol, com atenção redobrada à hidratação por causa do calor.',

  mobilidade:
    'Petrolina é cortada pelas BR-407, BR-122 e BR-235; a ponte Presidente Dutra liga a cidade a Juazeiro-BA, e o Aeroporto Senador Nilo Coelho atende a região.',

  corridas: [
    {
      nome: 'Meia Maratona da Fruticultura Irrigada',
      descricao:
        'Prova tradicional realizada no Projeto Senador Nilo Coelho, já em diversas edições.',
    },
    {
      nome: 'Meia Maratona River Shopping',
      descricao:
        'Etapa do Campeonato Brasileiro de Corridas de Rua (com selo da CBAt), realizada em Petrolina.',
    },
  ],
  culturaEsportiva:
    'A comunidade de corrida de rua é ativa, com clubes e assessorias que classificam atletas para campeonatos nacionais; o futebol regional também é forte.',
  academias:
    'A oferta reúne academias e boxes de crossfit em expansão, com a orla do São Francisco funcionando como hub público de treino ao ar livre.',

  destaquesFitness: [
    'Orla do São Francisco como academia a céu aberto.',
    'Calendário consistente de corridas de rua com chancela da CBAt.',
    'Clima de sol o ano todo (treino outdoor matinal).',
    'Polo universitário (UNIVASF) com demanda jovem.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 145,
    mensalMin: 300,
    mensalMax: 820,
    onlineMin: 150,
    onlineMax: 400,
  },

  conclusao:
    'Capital da fruticultura irrigada e dos vinhos do São Francisco, Petrolina tem orla privilegiada e calendário de corridas forte. Um personal trainer ajuda a aproveitar a orla com método, ajustando horários e hidratação ao sol do semiárido.',

  vizinhas: ['recife-pe', 'caruaru-pe', 'juazeiro-do-norte-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Petrolina', url: 'https://cidades.ibge.gov.br/brasil/pe/petrolina/panorama' },
    { nome: 'Prefeitura de Petrolina', url: 'https://petrolina.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-05',

  capaArte: {
    src: '/capas-cidade/petrolina-pe.webp',
    w: 1200,
    h: 849,
    alt:
      'Personal trainer em Petrolina (PE) em arte que reúne treino com halteres, a orla do Rio São Francisco com a Ponte Presidente Dutra e o letreiro Eu Amo Petrolina — Personal por Perto',
    legenda:
      'Treino personalizado em Petrolina: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
