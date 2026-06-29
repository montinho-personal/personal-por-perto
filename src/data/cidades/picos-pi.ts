import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'picos-pi',
  nome: 'Picos',
  uf: 'PI',
  estado: 'Piauí',
  estadoSlug: 'piaui',
  regiao: 'Nordeste',
  gentilico: 'picoense',
  tipo: 'cidade',

  populacao: 83090,
  populacaoAno: 2022,
  idhm: 0.698,
  idhmClasse: 'médio',
  altitudeM: 207,

  resumoEconomico:
    'Terceira cidade mais populosa do Piauí e principal centro do Sul do estado, Picos é cortada pelo rio Guaribas e se firmou como grande polo comercial atacadista e de serviços do semiárido piauiense. A localização privilegiada faz dela um dos maiores entroncamentos rodoviários do Nordeste, e a cidade é conhecida como "capital do mel", liderando a produção nacional segundo o IBGE.',

  mercado:
    'O mercado fitness é de porte médio, sustentado pelo comércio aquecido, pela presença da UFPI e por uma cena ativa de corrida de rua. Academias e assessorias locais aproveitam praças, a orla do rio Guaribas e os equipamentos públicos para o treino ao ar livre, sempre nos horários mais frescos por causa do calor do semiárido.',

  bairrosNobres: ['Centro', 'Junco', 'Bairro de Fátima', 'Jardim Natal'],
  bairrosPopulares: ['Pantanal', 'Aerolândia', 'Boa Sorte', 'Morada Nova'],

  parques: [
    {
      nome: 'Orla do Rio Guaribas',
      descricao:
        'Símbolo da cidade, o rio Guaribas corta a área urbana e suas margens são usadas para caminhada e lazer; as pontes na BR-316 receberam iluminação, melhorando a segurança no entorno.',
    },
    {
      nome: 'CEU (Centro de Artes e Esportes Unificado)',
      descricao:
        'Equipamento público com pista de caminhada e corrida, quadra poliesportiva coberta, pista de skate e aparelhos de ginástica — um dos hubs de treino ao ar livre da cidade.',
    },
    {
      nome: 'Parque de Exposição e praças centrais',
      descricao:
        'Áreas públicas usadas para atividades físicas e eventos, com espaço para caminhada e ponto de apoio a corridas de rua.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária da cidade ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é semiárido quente, típico do centro-sul do Piauí, com caatinga no entorno, temperaturas elevadas o ano todo, baixa umidade e chuvas concentradas no primeiro semestre — Picos é uma das cidades mais quentes do estado.',
  climaTreino:
    'Pelo calor intenso e pelo ar seco, o treino ao ar livre concentra-se no início da manhã e no fim da tarde, com hidratação reforçada e atenção redobrada à desidratação.',

  mobilidade:
    'Picos é um dos maiores entroncamentos rodoviários do Nordeste, cortada pelas BR-316 e BR-407 e próxima à BR-020, o que a consolida como polo logístico e de comércio atacadista. O terminal rodoviário conecta a cidade a Teresina e a outros estados, e o deslocamento urbano é feito por ônibus.',

  corridas: [
    {
      nome: 'Picos Pro Race',
      descricao:
        'Principal evento esportivo da cidade, reúne corrida de rua de 5 km, caminhada de 3 km e categoria PCD, atraindo atletas da região.',
    },
    {
      nome: 'Corridas de rua do calendário regional',
      descricao:
        'Provas recorrentes com percursos de 3 km, 5 km e 6 km organizadas por assessorias e clubes locais, parte do calendário esportivo do Sul do Piauí.',
    },
  ],
  culturaEsportiva:
    'Picos tem uma cena de corrida de rua em crescimento, com a Picos Pro Race como destaque, além do uso das praças, da orla do Guaribas e dos equipamentos públicos para caminhada e treino ao ar livre — atividade que respeita o calor do semiárido.',
  academias:
    'A oferta reúne academias e assessorias locais, complementadas pela estrutura do CEU, do Parque de Exposição e das praças centrais, aproveitadas para o treino ao ar livre.',

  destaquesFitness: [
    'Polo comercial atacadista e maior entroncamento rodoviário do Sul do Piauí.',
    'Orla do rio Guaribas e CEU como pontos de caminhada e treino ao ar livre.',
    'Picos Pro Race e calendário de corridas de rua em crescimento.',
    'Clima semiárido quente que exige periodização de horários e foco em hidratação.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 660,
    onlineMin: 120,
    onlineMax: 340,
  },

  conclusao:
    'Capital do mel e centro comercial do Sul do Piauí, Picos une dinamismo econômico, a presença da UFPI e uma cena de corrida em ascensão. Um personal trainer ajuda a montar uma rotina segura no calor do semiárido, ajustando horários e hidratação e aproveitando a orla do Guaribas, o CEU e as praças da cidade.',

  vizinhas: ['teresina-pi', 'parnaiba-pi'],

  fontes: [
    { nome: 'IBGE Cidades — Picos', url: 'https://cidades.ibge.gov.br/brasil/pi/picos/panorama' },
    { nome: 'Prefeitura de Picos', url: 'https://picos.pi.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
