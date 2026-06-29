import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'paranavai-pr',
  nome: 'Paranavaí',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'paranavaiense',
  tipo: 'cidade',

  populacao: 92001,
  populacaoAno: 2022,
  idhm: 0.763,
  idhmClasse: 'alto',
  altitudeM: 425,

  resumoEconomico:
    'Paranavaí é o principal polo regional do Noroeste paranaense, com economia ancorada na agropecuária — destaque para a produção de laranja, cana-de-açúcar, mandioca e na pecuária de corte —, além de comércio, serviços, agroindústria e educação. A cidade concentra a sede da reitoria da Unespar (Universidade Estadual do Paraná) e funciona como referência de saúde, ensino e consumo para os municípios do entorno.',

  mercado:
    'Por ser o centro de serviços de uma ampla região agropecuária e abrigar campus universitário, Paranavaí reúne uma oferta consistente de academias de musculação, estúdios de funcional e box de crossfit, com presença de plataformas de benefícios corporativos. A demanda por personal trainer é puxada por um público de classe média, universitário e por adeptos da corrida de rua.',

  bairrosNobres: ['Centro', 'Jardim Ipê', 'Jardim Santos Dumont', 'Jardim São Jorge'],
  bairrosPopulares: ['Vila Operária', 'Jardim Maria Luiza', 'Jardim Ouro Branco', 'Jardim Iguaçu'],

  parques: [
    {
      nome: 'Praça dos Pioneiros',
      descricao:
        'A maior praça da cidade, com áreas para prática de esportes, parque infantil e amplo espaço arborizado — ponto de encontro para caminhada, treino ao ar livre e palco da tradicional Feira da Lua às sextas-feiras.',
    },
    {
      nome: 'Praças e canteiros do Centro',
      descricao:
        'O miolo urbano de Paranavaí concentra praças bem cuidadas e avenidas largas que servem de circuito para caminhada e corrida leve no começo e no fim do dia.',
    },
    {
      nome: 'Bosque e áreas verdes urbanas',
      descricao:
        'Espaços arborizados distribuídos pela cidade oferecem sombra e ar mais ameno, valorizados no clima quente do Noroeste para o treino externo.',
    },
  ],
  ciclovias:
    'Paranavaí conta com trechos de ciclovia e ciclofaixa ligando bairros ao Centro, em uma cidade de relevo suave e avenidas largas que favorecem o deslocamento de bicicleta e o uso recreativo.',

  clima:
    'O clima é tropical de altitude (Cwa), com verões quentes e invernos secos e amenos. A temperatura média anual gira em torno de 20 a 22 °C e o índice pluviométrico fica perto de 1.300 mm ao ano. Por estar no Noroeste, é uma das porções mais quentes do Paraná.',
  climaTreino:
    'O calor mais forte do Noroeste pede atenção à hidratação e à escolha do horário no verão: as manhãs cedo e o fim de tarde são os períodos mais confortáveis para treinar ao ar livre. No inverno seco, as condições são excelentes o dia todo.',

  mobilidade:
    'Paranavaí é um entroncamento rodoviário do Noroeste, cortada pela BR-376 e por rodovias estaduais que a conectam a Maringá, Umuarama e ao interior do estado. A malha urbana plana e de avenidas largas facilita a circulação a pé e de bicicleta.',

  corridas: [
    {
      nome: 'Corridas de rua municipais',
      descricao:
        'A cidade recebe provas de corrida de rua ao longo do ano, normalmente com percursos de 5 km e 10 km pelas avenidas centrais, integrando o calendário esportivo do Noroeste paranaense.',
    },
    {
      nome: 'Provas e circuitos regionais',
      descricao:
        'Como polo da região, Paranavaí atrai corredores dos municípios vizinhos para eventos esportivos, o que estimula a procura por assessorias e treinamento de corrida.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o hábito da musculação e do funcional com uma cena de corrida de rua em crescimento, apoiada nas avenidas largas e nas praças do Centro. A presença universitária e o perfil de cidade-polo ajudam a sustentar a procura por treino orientado.',
  academias:
    'A oferta reúne academias de musculação, estúdios de treinamento funcional e box de crossfit, atendendo tanto o público universitário quanto famílias e trabalhadores do comércio e do agronegócio local.',

  destaquesFitness: [
    'Praça dos Pioneiros como principal espaço público para caminhada e treino ao ar livre.',
    'Cidade-polo do Noroeste, com oferta de academias e estúdios acima da média de municípios do mesmo porte.',
    'Cena de corrida de rua em crescimento, com provas pelas avenidas centrais.',
    'Relevo plano e avenidas largas, favoráveis a corrida, caminhada e ciclismo urbano.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Como centro do Noroeste paranaense, Paranavaí oferece estrutura de cidade média para quem quer treinar com método — das praças e avenidas do Centro às academias e estúdios espalhados pelos bairros. Um personal trainer ajuda a contornar o calor da região com horários e cargas bem planejados e a manter a constância, seja na musculação, seja na preparação para as corridas locais.',

  vizinhas: ['maringa-pr', 'umuarama-pr', 'londrina-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Paranavaí', url: 'https://cidades.ibge.gov.br/brasil/pr/paranavai/panorama' },
    { nome: 'Prefeitura de Paranavaí', url: 'https://www.paranavai.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
