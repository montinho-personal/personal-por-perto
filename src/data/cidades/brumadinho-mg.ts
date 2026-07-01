import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'brumadinho-mg',
  nome: 'Brumadinho',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'brumadinhense',
  tipo: 'cidade',

  populacao: 38915,
  populacaoAno: 2022,
  idhm: 0.747,
  idhmClasse: 'alto',
  altitudeM: 880,

  resumoEconomico:
    'Na Região Metropolitana de Belo Horizonte, a cerca de 50 km da capital, Brumadinho combina uma economia historicamente ligada à mineração de ferro com um turismo em ascensão, ancorado no Instituto Inhotim — um dos maiores museus de arte contemporânea a céu aberto do mundo. A cidade também abriga cachoeiras, trilhas e a Serra da Moeda, que atraem visitantes de BH e de todo o país. Marcada pelo rompimento da barragem em 2019, a região vive um processo de reparação e de busca por diversificação econômica, com peso crescente do turismo, da gastronomia e do agronegócio.',

  mercado:
    'Por integrar a Região Metropolitana de Belo Horizonte, Brumadinho recebe influência do mercado fitness da capital, mas mantém um perfil de cidade menor, com academias locais e forte presença de atividades ao ar livre. A procura por personal trainers cresce entre moradores e por quem tem casa de campo na região, muitas vezes voltada a treino funcional, corrida em trilha e preparo para as subidas da Serra da Moeda.',

  bairrosNobres: ['Centro', 'Casa Branca', 'Retiro das Pedras', 'Condomínios da Serra da Moeda'],
  bairrosPopulares: ['Progresso', 'Grota Funda', 'Piedade do Paraopeba', 'Córrego do Feijão'],

  parques: [
    {
      nome: 'Instituto Inhotim',
      descricao:
        'Museu de arte contemporânea a céu aberto e jardim botânico, com dezenas de hectares de áreas verdes, lagos e caminhos arborizados — espaço de longas caminhadas em meio à arte e à natureza, e principal símbolo da cidade.',
    },
    {
      nome: 'Serra da Moeda / Topo do Mundo',
      descricao:
        'Encosta montanhosa que separa Brumadinho de Belo Horizonte, com o mirante Topo do Mundo em cerca de 1.500 m de altitude; ponto de voo livre, ciclismo de estrada e treino de subida com vista ampla das montanhas mineiras.',
    },
    {
      nome: 'Parque Estadual da Serra do Rola-Moça',
      descricao:
        'Uma das maiores unidades de conservação urbanas do país, no limite com a RM de BH, com trilhas de diferentes níveis, nascentes e mirantes usados por caminhantes e corredores de trilha.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária urbana é modesta, mas a região é conhecida pelo ciclismo de estrada e mountain bike, com destaque para as subidas da Serra da Moeda e as estradas rurais entre distritos como Casa Branca e Piedade do Paraopeba.',

  clima:
    'O clima é tropical de altitude, com verões chuvosos e invernos secos e mais amenos. A altitude da sede (em torno de 880 m) e das serras próximas favorece temperaturas agradáveis boa parte do ano, com manhãs frias no inverno e chuvas concentradas entre novembro e março.',
  climaTreino:
    'As temperaturas amenas e o relevo montanhoso tornam a região convidativa para treino ao ar livre, sobretudo no período seco (abril a setembro). No verão chuvoso, convém atenção à umidade e aos trechos escorregadios nas trilhas, e as subidas da Serra da Moeda pedem progressão de carga para quem está começando.',

  mobilidade:
    'A principal ligação da cidade é a rodovia MG-040, que conecta Brumadinho a Belo Horizonte e a outros municípios da Região Metropolitana. O acesso ao Inhotim e aos distritos turísticos se dá por estradas vicinais, e o transporte urbano é feito por ônibus, com forte fluxo de visitantes nos fins de semana.',

  corridas: [
    {
      nome: 'Brumadinho Trail Run',
      descricao:
        'Prova de corrida em trilha realizada na cidade, com percursos na faixa de 7 km e 14 km (além de opção de caminhada), largando na região central e explorando os caminhos naturais do entorno.',
    },
    {
      nome: 'Boi Preto Ultra',
      descricao:
        'Ultramaratona de montanha sediada no distrito de Casa Branca, com percursos que vão de distâncias curtas até dezenas de quilômetros pelas trilhas da Serra da Calçada e da Serra da Moeda, voltada a corredores de diferentes níveis.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Brumadinho é fortemente ligada à natureza: corrida em trilha, ciclismo nas serras, voo livre no Topo do Mundo e caminhadas em cachoeiras e no Inhotim. A proximidade com Belo Horizonte também aproxima a cidade do calendário de provas e da rotina de treino da capital.',
  academias:
    'A oferta é composta principalmente por academias locais de musculação e treino funcional, concentradas na área central, complementadas por estúdios menores e por profissionais que atendem em condomínios e ao ar livre nas regiões de serra.',

  destaquesFitness: [
    'Instituto Inhotim: museu a céu aberto e jardim botânico, ideal para longas caminhadas em meio à arte e à natureza.',
    'Serra da Moeda e Topo do Mundo, com subidas exigentes para corrida, ciclismo e voo livre.',
    'Trilhas do Parque Estadual da Serra do Rola-Moça e cachoeiras da região para treino ao ar livre.',
    'Cidade da RM de Belo Horizonte, com clima tropical de altitude e forte vocação para esportes de natureza.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Cidade de serra na Região Metropolitana de Belo Horizonte, Brumadinho reúne o clima ameno, a beleza do Inhotim e trilhas que convidam ao movimento. Um personal trainer ajuda a aproveitar esse cenário com segurança, montando uma rotina que respeita o relevo, prepara o corpo para as subidas da Serra da Moeda e mantém a constância ao longo do ano.',

  vizinhas: ['betim-mg', 'belo-horizonte-mg', 'nova-lima-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Brumadinho', url: 'https://cidades.ibge.gov.br/brasil/mg/brumadinho/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Brumadinho', url: 'https://www.brumadinho.mg.gov.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
