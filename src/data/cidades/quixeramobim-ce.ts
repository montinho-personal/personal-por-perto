import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'quixeramobim-ce',
  nome: 'Quixeramobim',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'quixeramobinense',
  tipo: 'cidade',

  populacao: 81778,
  populacaoAno: 2022,
  idhm: 0.642,
  idhmClasse: 'médio',
  altitudeM: 191,

  resumoEconomico:
    'Conhecida como o "Coração do Ceará" por abrigar o ponto de equidistância geodésica do estado, Quixeramobim é o município de maior PIB do Sertão Central cearense e um de seus principais polos de serviços e comércio. A economia se apoia na pecuária — está entre os maiores produtores de leite do Ceará —, na agricultura de sequeiro e, mais recentemente, na geração de energia eólica que avança pelos chapadões do semiárido. É a terra natal de Antônio Conselheiro, líder de Canudos, fato que dá à cidade forte identidade histórica.',

  mercado:
    'Como polo regional do Sertão Central, Quixeramobim concentra serviços, comércio e parte do funcionalismo que sustentam uma demanda crescente por academias e treino personalizado. O calor do semiárido organiza a rotina ao ar livre nos horários mais amenos, e o atendimento individualizado costuma se apoiar em academias da sede e em espaços públicos como praças e a orla do açude.',

  bairrosNobres: ['Centro', 'São José', 'Bela Vista', 'Alto da Boa Vista'],
  bairrosPopulares: ['Castelão', 'Senador Pompeu', 'Cohab', 'Conjunto Habitacional'],

  parques: [
    {
      nome: 'Praça Dias Ferreira e Obelisco do Centro Geográfico',
      descricao:
        'Praça central que abriga o obelisco que marca o ponto de equidistância geodésica do Ceará; espaço de caminhada e ponto de encontro no coração da cidade.',
    },
    {
      nome: 'Orla do Açude Fogareiro',
      descricao:
        'Principal reservatório da região, no rio Quixeramobim, com entorno usado para caminhada e lazer ao ar livre nos fins de tarde.',
    },
    {
      nome: 'Margens do Rio Quixeramobim',
      descricao:
        'O rio que corta a cidade e dá nome ao município oferece trechos de orla e avenidas marginais aproveitados para caminhada e corrida.',
    },
  ],
  ciclovias:
    'A bicicleta é meio de transporte comum no interior, mas a cidade ainda dispõe de pouca infraestrutura cicloviária dedicada.',

  clima:
    'O clima é semiárido quente e seco, típico do Sertão Central cearense, com temperaturas elevadas o ano todo e chuvas concentradas e irregulares entre fevereiro e maio (média em torno de 700 mm anuais). O restante do ano é marcado por estiagem prolongada.',
  climaTreino:
    'O calor forte recomenda treino ao ar livre no início da manhã ou no fim da tarde, com hidratação reforçada e proteção solar; nos meses secos, a baixa umidade pede atenção extra ao esforço.',

  mobilidade:
    'O acesso se dá principalmente pela BR-122 e pela CE-060, que ligam Quixeramobim a Fortaleza (cerca de 200 km) e às demais cidades do Sertão Central, como Quixadá. Por ser sede regional, concentra fluxo de comércio e serviços, mas o trânsito interno é leve.',

  corridas: [
    {
      nome: 'Corrida de Santo Antônio',
      descricao:
        'Prova tradicional da cidade, realizada em junho com largada na praça da Prefeitura e percurso de cerca de 8 km, em uma das edições mais consolidadas do calendário local.',
    },
    {
      nome: 'Circuito Sesc de Corridas — Etapa Quixeramobim',
      descricao:
        'Etapa local do circuito promovido pelo Sesc, que leva corrida de rua a cidades do interior do Ceará.',
    },
  ],
  culturaEsportiva:
    'A corrida de rua tem presença firme no calendário, com a Corrida de Santo Antônio e etapas de circuitos regionais reunindo participantes da cidade e do entorno. O custo de vida acessível e o trânsito tranquilo favorecem a prática ao ar livre.',
  academias:
    'A oferta de academias acompanha o papel de Quixeramobim como polo de serviços do Sertão Central, complementada por praças, pela orla do açude Fogareiro e pelas margens do rio Quixeramobim como espaços de treino gratuito.',

  destaquesFitness: [
    'Orla do açude Fogareiro como principal espaço ao ar livre para caminhada e corrida.',
    'Praça central e obelisco do centro geográfico do Ceará como ponto de encontro de praticantes.',
    'Corrida de Santo Antônio como prova-símbolo do calendário esportivo local.',
    'Demanda sustentada pelo papel da cidade como polo de serviços e comércio do Sertão Central.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Coração geográfico do Ceará e polo do Sertão Central, Quixeramobim une tradição pecuária, energia eólica e uma cena esportiva em crescimento. Para treinar bem no semiárido, vale ajustar horários ao calor e aproveitar a orla do açude, as praças e as margens do rio — um personal trainer ajuda a montar uma rotina segura e adaptada ao clima.',

  vizinhas: ['quixada-ce', 'fortaleza-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Quixeramobim', url: 'https://cidades.ibge.gov.br/brasil/ce/quixeramobim/panorama' },
    { nome: 'Prefeitura de Quixeramobim', url: 'https://www.quixeramobim.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
