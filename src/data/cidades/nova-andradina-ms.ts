import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'nova-andradina-ms',
  nome: 'Nova Andradina',
  uf: 'MS',
  estado: 'Mato Grosso do Sul',
  estadoSlug: 'mato-grosso-do-sul',
  regiao: 'Centro-Oeste',
  gentilico: 'nova-andradinense',
  tipo: 'cidade',

  populacao: 48563,
  populacaoAno: 2022,
  idhm: 0.721,
  idhmClasse: 'alto',
  altitudeM: 380,

  resumoEconomico:
    'Conhecida como a "Capital do Vale do Ivinhema", Nova Andradina é o principal centro do leste/cone-sul de Mato Grosso do Sul. Sua economia é fortemente agropecuária, com pecuária de corte, lavouras de cana-de-açúcar ligadas a usinas sucroalcooleiras da região e produção de grãos, somadas a um comércio e a serviços que atendem os municípios vizinhos do entorno.',

  mercado:
    'Cidade média de perfil agropecuário e polo de comércio regional, Nova Andradina concentra a demanda fitness em academias de bairro e centros de musculação e funcional, complementados por treino ao ar livre na orla do rio Ivinhema e nas praças. O fluxo de quem vem das cidades menores do Vale do Ivinhema amplia o mercado de serviços e a procura por acompanhamento individual.',

  bairrosNobres: ['Centro', 'Jardim Aeroporto', 'Jardim Santa Mônica', 'Vila Alta'],
  bairrosPopulares: ['Jardim Europa', 'Vila Operária', 'Bairro Universitário', 'Jardim Paraíso'],

  parques: [
    {
      nome: 'Balneário Municipal do Rio Ivinhema',
      descricao:
        'Área de lazer à beira do rio Ivinhema, com praia de água doce, quiosques e espaço para caminhada, muito usada nos fins de semana e ponto de encontro de quem treina ao ar livre.',
    },
    {
      nome: 'Praça das Águas (Praça Geraldo Mattos Lima)',
      descricao:
        'Praça central que serve de largada e chegada de corridas de rua da cidade, com calçadas largas e área arborizada para caminhada e atividade física.',
    },
    {
      nome: 'Parque Estadual das Várzeas do Rio Ivinhema',
      descricao:
        'Grande unidade de conservação no Vale do Ivinhema, próxima à cidade, com áreas alagadas, trilhas e natureza preservada — destino de ecoturismo, pesca esportiva e contato com a natureza.',
    },
  ],
  ciclovias:
    'A cidade tem ruas e avenidas largas que favorecem o pedal de lazer; a extensão da malha cicloviária municipal ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical, característico do leste/cone-sul de Mato Grosso do Sul, com verões quentes e chuvosos e invernos mais secos e amenos.',
  climaTreino:
    'O calor e a umidade do verão pedem treino no início da manhã ou no fim da tarde, com boa hidratação; o inverno seco e ameno é a época mais confortável para correr e treinar ao ar livre.',

  mobilidade:
    'Nova Andradina é um entroncamento rodoviário do leste de MS, cortada pela BR-376 e pela BR-267, que ligam a cidade a Dourados, a Três Lagoas e ao restante do estado, reforçando seu papel de polo regional do Vale do Ivinhema.',

  corridas: [
    {
      nome: 'Corrida da ACONAR',
      descricao:
        'Prova de rua de 5 km com largada e chegada na Praça das Águas, que reúne centenas de atletas de várias cidades de MS e de outros estados.',
    },
    {
      nome: 'Corrida dos Bombeiros',
      descricao:
        'Evento promovido pelo Corpo de Bombeiros com caminhada de 3 km, corridas de 5 km e 10 km e prova kids, reunindo atletas de dezenas de municípios.',
    },
  ],
  culturaEsportiva:
    'Apoiada pela Fundação Nova-andradinense de Esporte e Lazer (FUNAEL), a cidade mantém um calendário ativo de corridas de rua e competições que movimentam a comunidade e atraem participantes da região.',
  academias:
    'A oferta reúne academias de bairro e centros de musculação e funcional, complementados pelo treino ao ar livre na orla do rio Ivinhema e nas praças centrais.',

  destaquesFitness: [
    'Orla e balneário do rio Ivinhema como espaço de caminhada e lazer ao ar livre.',
    'Calendário ativo de corridas de rua (ACONAR, Bombeiros) apoiado pela FUNAEL.',
    'Praça das Águas no centro como ponto de largada de provas e treino.',
    'Parque Estadual das Várzeas do Rio Ivinhema nas proximidades, para trilhas e ecoturismo.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Polo agropecuário e capital do Vale do Ivinhema, Nova Andradina combina rotina de cidade média com a natureza do rio Ivinhema e um calendário esportivo ativo. Um personal trainer ajuda a aproveitar a orla, o balneário e as praças com método, ajustando horários e hidratação ao calor do verão.',

  vizinhas: ['dourados-ms', 'navirai-ms', 'tres-lagoas-ms'],

  fontes: [
    { nome: 'IBGE Cidades — Nova Andradina', url: 'https://cidades.ibge.gov.br/brasil/ms/nova-andradina/panorama' },
    { nome: 'Prefeitura de Nova Andradina', url: 'https://www.pmna.ms.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
