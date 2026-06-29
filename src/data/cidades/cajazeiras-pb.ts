import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cajazeiras-pb',
  nome: 'Cajazeiras',
  uf: 'PB',
  estado: 'Paraíba',
  estadoSlug: 'paraiba',
  regiao: 'Nordeste',
  gentilico: 'cajazeirense',
  tipo: 'cidade',

  populacao: 63239,
  populacaoAno: 2022,
  idhm: 0.679,
  idhmClasse: 'médio',
  altitudeM: 298,

  resumoEconomico:
    'Cajazeiras é o principal polo do Alto Sertão da Paraíba, no extremo oeste do estado, e há mais de um século exerce papel de centro regional para uma microrregião de cerca de quinze municípios. Sua tradição educacional rendeu-lhe o título de "cidade que ensinou a Paraíba a ler", herança do antigo colégio fundado pelo padre Inácio de Sousa Rolim no século XIX. Hoje a economia gira em torno do comércio, dos serviços e, sobretudo, da educação, com campus da UFCG e do IFPB, que atraem estudantes de todo o sertão e de estados vizinhos.',

  mercado:
    'O mercado fitness é o de uma cidade média do interior nordestino, sustentado pela presença universitária e pelo papel de Cajazeiras como referência de serviços para os municípios menores ao redor. A oferta combina academias de bairro, estúdios e personal trainers que atendem em domicílio e ao ar livre, com demanda crescente do público jovem ligado à UFCG e ao IFPB.',

  bairrosNobres: ['Centro', 'Jardim Oásis', 'Cristo Rei', 'São Francisco'],
  bairrosPopulares: ['Remédios', 'Vila Nova', 'Cajazeiras II', 'Tabosa'],

  parques: [
    {
      nome: 'Açude Grande',
      descricao:
        'Reservatório histórico inaugurado em 1916, cartão-postal da cidade, com entorno usado para caminhadas e atividade física ao ar livre — ponto de referência do lazer cajazeirense.',
    },
    {
      nome: 'Serra do Pinto',
      descricao:
        'Elevação que marca a paisagem da região e atrai quem busca trilhas e caminhadas em terreno mais acidentado nos arredores da cidade.',
    },
    {
      nome: 'Centro Histórico',
      descricao:
        'Conjunto de imóveis tombados no coração da cidade, com ruas e praças que servem de percurso para caminhadas e para a largada de provas de rua.',
    },
  ],
  ciclovias:
    'A cidade ainda não dispõe de malha cicloviária estruturada divulgada em fonte oficial; o deslocamento por bicicleta acontece principalmente nas vias urbanas.',

  clima:
    'O clima é semiárido quente (tipo BSh de Köppen), típico do Alto Sertão paraibano, com dias de calor intenso e baixa umidade, temperaturas médias entre cerca de 23°C e 30°C e noites mais amenas. A vegetação predominante é a caatinga e as chuvas se concentram em poucos meses do ano.',
  climaTreino:
    'O calor forte do sertão exige cuidado: o treino ao ar livre rende mais no início da manhã e no fim da tarde, com atenção redobrada à hidratação. Nas horas mais quentes, ambientes cobertos ou climatizados são a opção mais segura.',

  mobilidade:
    'O acesso principal é pela BR-230 (Transamazônica), eixo que liga Cajazeiras a Patos e ao restante do sertão paraibano e segue rumo ao Ceará. A posição no extremo oeste do estado, a cerca de 470 km de João Pessoa, consolida a cidade como entroncamento e ponto de apoio do Alto Sertão.',

  corridas: [
    {
      nome: 'Corrida da Fogueira de Cajazeiras',
      descricao:
        'Prova de rua tradicional do calendário junino, organizada pela prefeitura, com percurso de 10 km e largada na praça da Prefeitura, no centro — uma das corridas mais consolidadas do Alto Sertão.',
    },
    {
      nome: 'Provas de rua do calendário regional',
      descricao:
        'Ao longo do ano a cidade recebe corridas menores e travessias ligadas a datas locais, reunindo atletas dos municípios da microrregião.',
    },
  ],
  culturaEsportiva:
    'Cajazeiras tem uma cena de corrida de rua em crescimento, com a Corrida da Fogueira como principal vitrine, e uma cultura esportiva impulsionada pelo grande público universitário da UFCG e do IFPB.',
  academias:
    'A oferta reúne academias de bairro, estúdios e profissionais autônomos que atendem em domicílio e ao ar livre, com demanda sustentada pelo público jovem e pela função de Cajazeiras como polo de serviços regional.',

  destaquesFitness: [
    'Polo regional do Alto Sertão da Paraíba, com forte presença universitária (UFCG e IFPB).',
    'Açude Grande e Centro Histórico como espaços gratuitos para caminhada e corrida.',
    'Corrida da Fogueira: prova de rua consolidada no calendário junino.',
    'Clima semiárido quente que valoriza o planejamento do treino por horário e a orientação profissional.',
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
    'Centro educacional e de serviços do Alto Sertão paraibano, Cajazeiras combina tradição universitária, espaços como o Açude Grande e um calendário de corridas em expansão. Num clima semiárido que pede estratégia, um personal trainer ajuda a ajustar horários, intensidade e hidratação para treinar com segurança e constância, do iniciante ao corredor de rua.',

  vizinhas: ['patos-pb', 'campina-grande-pb'],

  fontes: [
    { nome: 'IBGE Cidades — Cajazeiras', url: 'https://cidades.ibge.gov.br/brasil/pb/cajazeiras/panorama' },
    { nome: 'Prefeitura de Cajazeiras', url: 'https://cajazeiras.pb.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
