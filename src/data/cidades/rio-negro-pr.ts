import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'rio-negro-pr',
  nome: 'Rio Negro',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'rio-negrense',
  tipo: 'cidade',

  populacao: 31324,
  populacaoAno: 2022,
  idhm: 0.760,
  idhmClasse: 'alto',
  altitudeM: 780,

  resumoEconomico:
    'No extremo sul do Paraná, às margens do rio Negro e na divisa com Santa Catarina, Rio Negro forma com a vizinha Mafra (SC) uma aglomeração urbana das duas margens do rio. A cidade nasceu como ponto da antiga Estrada da Mata, que ligava São Paulo ao Rio Grande do Sul, e foi marcada pela chegada de imigrantes alemães e bucovinos no século XIX. A economia combina a indústria, o trabalho com a madeira herdado da Mata das Araucárias, o comércio e os serviços que atendem toda a região de fronteira entre os dois estados.',

  mercado:
    'Por ser uma cidade de porte pequeno e conurbada com Mafra, o mercado fitness de Rio Negro funciona muito integrado ao da cidade vizinha, somando a procura das duas margens do rio. A oferta se concentra em academias locais de musculação e treino funcional, e a busca por personal trainers tende a crescer entre quem quer manter constância apesar do inverno rigoroso e aproveitar os espaços ao ar livre nos meses mais amenos.',

  bairrosNobres: ['Centro', 'Bom Jesus', 'Vila Militar', 'Estação Nova'],
  bairrosPopulares: ['Passa Três', 'Campo do Gado', 'Lençol', 'Volta Grande'],

  parques: [
    {
      nome: 'Parque Ecoturístico Municipal São Luís de Tolosa',
      descricao:
        'Área de lazer em meio à Mata das Araucárias, com cerca de quatro mil metros de trilhas ecológicas — um dos principais espaços da cidade para caminhada e atividade ao ar livre em contato com a natureza.',
    },
    {
      nome: 'Praça João Pessoa',
      descricao:
        'Praça central da cidade, com caminhos arborizados, jardins e elementos históricos preservados; ponto tradicional para caminhada leve e encontro no coração de Rio Negro.',
    },
    {
      nome: 'Orla e entorno do rio Negro',
      descricao:
        'O rio que dá nome à cidade e a separa de Mafra (SC) tem em seu entorno espaços usados para caminhada e lazer, reforçando a ligação histórica entre as duas margens, antes movimentada pela navegação de madeira e erva-mate.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta, com trechos pela área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e na ligação com Mafra, do outro lado do rio.',

  clima:
    'O clima é subtropical de altitude (cerca de 780 m), com verões amenos e invernos rigorosos. A região está entre as mais frias do Paraná: o inverno traz geadas frequentes — em geral de 10 a 15 dias por ano — e ocorrências de temperatura abaixo de zero não são raras nas madrugadas mais frias.',
  climaTreino:
    'O frio intenso do inverno pede aquecimento mais longo, roupas em camadas e atenção às madrugadas de geada, quando o treino ao ar livre fica mais exigente; nesses meses, ambientes fechados ganham espaço. A primavera e o verão, mais amenos, são o melhor período para correr e treinar ao ar livre.',

  mobilidade:
    'Rio Negro é atravessada pelo principal corredor de transporte do Sul: a BR-116, eixo rodoviário que liga a região ao restante do país, e a ferrovia que corta a cidade. A ligação com Mafra (SC), pelas pontes sobre o rio Negro, integra o transporte e o dia a dia das duas cidades, que funcionam como um único polo urbano de fronteira entre Paraná e Santa Catarina.',

  corridas: [
    {
      nome: 'Meia Maratona de Rio Negro',
      descricao:
        'Principal prova de rua da cidade, com percursos que costumam incluir distâncias como 6 km e 21 km, passando por bairros como Estação Nova, Passa Três, Bom Jesus e Campo do Gado.',
    },
    {
      nome: 'Provas de rua da região Rio Negro–Mafra',
      descricao:
        'O calendário regional reúne, ao longo do ano, diversas corridas de rua em Rio Negro, Mafra e cidades próximas, com formatos para atletas, amadores e iniciantes.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é fortalecida pela integração com Mafra: as provas de rua das duas margens do rio movimentam corredores da região, e a caminhada nas praças, no parque ecoturístico e no entorno do rio Negro faz parte da rotina de quem treina ao ar livre, sempre moldada pelo frio característico do sul paranaense.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade pequena do interior do Sul e integrada ao mercado de Mafra.',

  destaquesFitness: [
    'Cidade-irmã de Mafra (SC), formando uma aglomeração urbana das duas margens do rio Negro.',
    'Inverno rigoroso, com geadas frequentes que pedem treino adaptado ao frio.',
    'Parque Ecoturístico São Luís de Tolosa e praças como espaços de caminhada e atividade ao ar livre.',
    'Meia Maratona de Rio Negro e calendário regional de corridas de rua com Mafra.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade fria, histórica e integrada a Mafra na divisa entre Paraná e Santa Catarina, Rio Negro pede um treino que respeite o inverno rigoroso e aproveite as praças, o parque ecoturístico e o entorno do rio nos meses mais amenos. Um personal trainer ajuda a organizar a rotina, ajustar os horários ao frio e manter a constância ao longo do ano.',

  vizinhas: ['mafra-sc', 'sao-bento-do-sul-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Rio Negro', url: 'https://cidades.ibge.gov.br/brasil/pr/rio-negro/panorama' },
    { nome: 'Prefeitura de Rio Negro', url: 'https://rionegro.atende.net/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
