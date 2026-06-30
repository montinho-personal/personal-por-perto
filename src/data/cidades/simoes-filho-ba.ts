import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'simoes-filho-ba',
  nome: 'Simões Filho',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'simões-filhense',
  tipo: 'cidade',

  populacao: 114441,
  populacaoAno: 2022,
  idhm: 0.675,
  idhmClasse: 'médio',
  altitudeM: 52,

  resumoEconomico:
    'Município da Região Metropolitana de Salvador conurbado com a capital, Simões Filho tem na indústria sua principal vocação econômica. Abriga boa parte do Centro Industrial de Aratu (CIA), complexo multissetorial criado em 1967 e compartilhado com Candeias, que reúne cerca de 400 empresas dos ramos químico, metalmecânico, alimentício, plástico e logístico, com milhares de empregos diretos e o Porto de Aratu na orla da Baía de Todos-os-Santos. A renda do trabalho industrial e o fluxo pendular com Salvador moldam o perfil da cidade.',

  mercado:
    'O mercado fitness é puxado pela renda do trabalho industrial do CIA e pela proximidade com Salvador, que amplia a oferta de serviços e a circulação de profissionais. A demanda se concentra em academias de bairro e no atendimento personalizado, com espaço para personal trainers que atendam tanto a sede quanto trabalhadores que vivem na cidade e cruzam a fronteira com a capital.',

  bairrosNobres: ['Centro', 'Pitanguinha', 'Cia Sul', 'Jardim Bahia'],
  bairrosPopulares: ['Mapele', 'Cassange', 'Palmares', 'Jardim Califórnia'],

  parques: [
    {
      nome: 'APA Joanes-Ipitanga',
      descricao:
        'Área de Proteção Ambiental que abrange parte do município e guarda um dos maiores remanescentes de Mata Atlântica da Região Metropolitana de Salvador, com represas que ajudam a abastecer a região — espaço para caminhadas e contato com a natureza.',
    },
    {
      nome: 'Entorno do Rio Ipitanga',
      descricao:
        'Bacia que corta o município dentro da APA Joanes-Ipitanga, com áreas verdes preservadas que servem de referência para atividades ao ar livre longe do ruído industrial.',
    },
    {
      nome: 'Praças e calçadões do Centro',
      descricao:
        'Os espaços públicos da sede concentram a vida ao ar livre da cidade, usados para caminhada, alongamento e treino funcional no começo e no fim do dia.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária ainda é limitada e se concentra em trechos da sede; boa parte do deslocamento por bicicleta acontece em vias compartilhadas, condicionado pelo intenso tráfego de carga ligado ao CIA.',

  clima:
    'O clima é tropical quente e úmido, típico da Região Metropolitana de Salvador, com calor o ano todo e chuvas mais concentradas no outono e no inverno.',
  climaTreino:
    'O calor e a umidade pedem treinos nos horários mais frescos, no começo da manhã e no fim da tarde, com atenção redobrada à hidratação ao longo de todo o ano.',

  mobilidade:
    'A cidade é cortada pela BR-324, principal eixo de ligação com Salvador (a cerca de 25 km) e com Feira de Santana, e está conurbada com a capital. O trânsito tem forte componente de carga por causa do Centro Industrial de Aratu e do Porto de Aratu, e o transporte público é marcado por intenso fluxo pendular de trabalhadores entre a sede e a região metropolitana.',

  corridas: [
    {
      nome: 'Circuito baiano de corridas de rua',
      descricao:
        'Simões Filho se conecta ao calendário de corridas de rua da Região Metropolitana de Salvador, com atletas locais participando de provas na cidade e na capital.',
    },
    {
      nome: 'Provas e caminhadas comunitárias',
      descricao:
        'Eventos esportivos e caminhadas promovidos no município e em datas cívicas reúnem corredores amadores nas vias da sede.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o futebol de bairro com uma cena de corrida de rua em crescimento, fortemente influenciada pela proximidade de Salvador e pelo circuito metropolitano de provas. O esporte de lazer ganha espaço nas praças e nas áreas verdes ligadas à APA Joanes-Ipitanga.',
  academias:
    'A oferta de academias se distribui pela sede e pelos bairros, em geral atendendo o público trabalhador do entorno do CIA. A procura por personal trainers cresce com a busca por treino orientado, e a vizinhança de Salvador amplia o acesso a profissionais e a modalidades.',

  destaquesFitness: [
    'Renda do trabalho industrial do Centro Industrial de Aratu (CIA) sustentando a demanda fitness.',
    'Conurbação com Salvador, ampliando o acesso a profissionais e a modalidades.',
    'APA Joanes-Ipitanga e o entorno do Rio Ipitanga para atividades ao ar livre em meio à Mata Atlântica.',
    'Clima quente e úmido o ano todo, favorecendo treino ao ar livre nos horários mais frescos.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 350,
  },

  conclusao:
    'Polo industrial da Região Metropolitana de Salvador e vizinha imediata da capital, Simões Filho combina renda do trabalho do Centro Industrial de Aratu com áreas verdes preservadas da APA Joanes-Ipitanga. Um personal trainer ajuda a estruturar a rotina de treino respeitando o clima quente e úmido e a logística de quem vive entre a cidade e Salvador.',

  vizinhas: ['salvador-ba', 'lauro-de-freitas-ba', 'camacari-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Simões Filho', url: 'https://cidades.ibge.gov.br/brasil/ba/simoes-filho/panorama' },
    { nome: 'Prefeitura de Simões Filho', url: 'https://www.simoesfilho.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
