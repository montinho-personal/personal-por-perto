import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cangucu-rs',
  nome: 'Canguçu',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'canguçuense',
  tipo: 'cidade',

  populacao: 49680,
  populacaoAno: 2022,
  idhm: 0.650,
  idhmClasse: 'médio',
  altitudeM: 386,

  resumoEconomico:
    'Conhecida como a "Terra do Doce de Leite" e reconhecida por lei federal como Capital Nacional da Agricultura Familiar, Canguçu fica no planalto da Serra do Sudeste gaúcha, entre Pelotas e a Campanha. É o município com o maior número de pequenas propriedades rurais do Brasil — cerca de 14 mil, a maioria com 5 a 25 hectares —, com economia apoiada na agricultura familiar (fumo, uva, laranja, soja), na pecuária de ovinos e suínos e na produção artesanal de leite e doce de leite. A colonização alemã e pomerana marcou fortemente os costumes locais, celebrados anualmente na Festa Estudantil da Cultura Alemã e Pomerana (Festcap).',

  mercado:
    'O mercado de personal trainers de Canguçu é o de uma cidade média do interior, com academias de bairro, estúdios de musculação e alguns centros de treinamento funcional cadastrados junto à Prefeitura. A rotina de trabalho rural pesada de boa parte da população convive com uma procura crescente por treino orientado, tanto entre quem já é fisicamente ativo pela lida do campo quanto entre o público urbano que busca estrutura e acompanhamento.',

  bairrosNobres: ['Centro', 'Triângulo', 'Uruguai'],
  bairrosPopulares: ['Vila do Prado', 'Vila Nova', 'Vila Izabel', 'Vila Fonseca'],

  parques: [
    {
      nome: 'Parque Turístico Nossa Senhora da Conceição',
      descricao:
        'Situado em um dos pontos mais altos da Serra dos Tapes, a cerca de 500 m de altitude, com acesso pela BR-392 (km 120), reúne mirante com vista panorâmica da cidade, praça e uma caminhada ecológica por mata nativa — um dos poucos trechos de trilha estruturada da região.',
    },
    {
      nome: 'Praça Dr. Francisco Carlos dos Santos',
      descricao:
        'Principal praça do Centro, com calçamento e arborização que a tornam ponto de encontro e caminhada leve no coração da cidade.',
    },
    {
      nome: 'Centro Esportivo Municipal Conrado Ernani Bento',
      descricao:
        'Estrutura esportiva pública na Vila do Prado, referência para atividades físicas organizadas pela Secretaria Municipal de Esporte e Educação, incluindo a programação da Semana do Município.',
    },
  ],
  ciclovias:
    'Canguçu não conta com ciclovias estruturadas; o relevo de coxilhas suaves a moderadas da Serra do Sudeste, no entanto, faz das estradas vicinais e da RS-265 (rumo a Piratini) rotas procuradas por ciclistas de estrada, inclusive em passagens de eventos regionais de cicloturismo como o Pedal Rio Grande.',

  clima:
    'O clima é subtropical (Cfa/Cfb), típico do planalto da Serra do Sudeste: a altitude de quase 400 m ameniza o calor no verão, com poucos dias acima de 30 °C, enquanto os invernos são frios, com geadas frequentes e temperaturas que costumam ficar próximas ou abaixo de zero nas madrugadas de junho e julho.',
  climaTreino:
    'O verão ameno em relação às terras baixas da região favorece o treino ao ar livre durante boa parte do dia, com atenção normal à hidratação. No inverno, o frio intenso e as geadas recorrentes pedem aquecimento mais longo, agasalho adequado e, com frequência, a opção por ambientes fechados nas primeiras horas da manhã.',

  mobilidade:
    'O acesso principal é feito pela BR-392, que liga Canguçu a Pelotas (onde encontra a BR-116) e segue rumo a Sanga do Iguaçu, além da RS-265, que conecta o município a Piratini. O transporte é predominantemente rodoviário, com rodoviária que atende linhas regionais, e o relevo ondulado das coxilhas marca o deslocamento tanto na área urbana quanto nas extensas estradas do interior, por onde passa grande parte da vida econômica ligada à agricultura familiar.',

  corridas: [
    {
      nome: 'Rústica da Semana do Município',
      descricao:
        'Tradicional prova pedestre e ciclística realizada no Altar da Pátria durante a Semana do Município de Canguçu, em junho, organizada pela Secretaria Municipal de Esporte e Educação como parte das comemorações da emancipação da cidade.',
    },
    {
      nome: 'Pedal Rio Grande (etapa Canguçu)',
      descricao:
        'Evento cicloturístico regional que já passou pelas estradas de Canguçu, aproveitando o cenário de coxilhas e o patrimônio da colonização alemã e pomerana da Serra do Sudeste.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina o vigor físico do trabalho no campo — marca de um município com milhares de pequenas propriedades familiares — com eventos ligados às tradições germânicas e pomeranas, como a Festcap, e a programação esportiva da Semana do Município, que inclui prova de rua e ciclismo no Altar da Pátria.',
  academias:
    'A oferta reúne academias de bairro e estúdios de musculação e treino funcional, concentrados no Centro e em bairros como Triângulo, muitos deles cadastrados no canal de serviços da Prefeitura de Canguçu, além do trabalho de personal trainers que atendem de forma particular.',

  destaquesFitness: [
    'Capital Nacional da Agricultura Familiar e Terra do Doce de Leite, cercada por coxilhas da Serra do Sudeste.',
    'Altitude de quase 400 m, que ameniza o calor do verão e favorece o treino ao ar livre.',
    'Parque Turístico Nossa Senhora da Conceição, mirante e trilha ecológica na Serra dos Tapes.',
    'Invernos rigorosos com geadas frequentes, que pedem planejamento de horário e aquecimento no treino.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 100,
    mensalMin: 250,
    mensalMax: 600,
    onlineMin: 115,
    onlineMax: 300,
  },

  conclusao:
    'Cidade da agricultura familiar e do doce de leite, cercada pelas coxilhas da Serra do Sudeste, Canguçu tem no relevo e nas mudanças bruscas entre o verão ameno e o inverno de geadas um convite ao treino orientado. Um personal trainer ajuda a aproveitar os dias bons ao ar livre, na praça central ou no mirante da Nossa Senhora da Conceição, e a manter a constância quando o frio da Serra aperta.',

  vizinhas: ['pelotas-rs', 'bage-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Canguçu', url: 'https://cidades.ibge.gov.br/brasil/rs/cangucu/panorama' },
    { nome: 'Prefeitura Municipal de Canguçu', url: 'https://www.cangucu.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
