import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tabatinga-am',
  nome: 'Tabatinga',
  uf: 'AM',
  estado: 'Amazonas',
  estadoSlug: 'amazonas',
  regiao: 'Norte',
  gentilico: 'tabatinguense',
  tipo: 'cidade',

  populacao: 66764,
  populacaoAno: 2022,
  idhm: 0.620,
  idhmClasse: 'médio',
  altitudeM: 65,

  resumoEconomico:
    'No extremo oeste do Amazonas, na região do Alto Solimões, Tabatinga fica na tríplice fronteira Brasil-Colômbia-Peru, conurbada com a colombiana Letícia e próxima do povoado peruano de Santa Rosa, do outro lado do rio. A economia gira em torno do comércio de fronteira, da pesca comercial no rio Solimões — Tabatinga é uma das maiores referências pesqueiras da Amazônia, com forte fluxo internacional de pescado — e dos serviços públicos e militares ligados à posição estratégica na fronteira. A população tem grande presença indígena, com destaque para o povo Ticuna, nas aldeias de Umariaçu.',

  mercado:
    'Cidade isolada por terra e abastecida sobretudo pelo rio e pelo ar, Tabatinga tem um mercado fitness enxuto, formado por academias locais de musculação e treino funcional. A procura por personal trainers aparece entre quem busca treino orientado para enfrentar o calor e a umidade constantes e para manter constância em uma rotina marcada pela vida de fronteira e pelo ritmo ribeirinho.',

  bairrosNobres: ['Centro', 'Comara', 'Vila Verde', 'Ibirapuera'],
  bairrosPopulares: ['Tancredo Neves', 'Guadalupe', 'Nova Esperança', 'Santa Rosa'],

  parques: [
    {
      nome: 'Orla do rio Solimões',
      descricao:
        'A beira-rio concentra a vida da cidade, com o porto, o comércio e o vai e vem de embarcações da tríplice fronteira; os trechos abertos junto à água servem de espaço para caminhada e treino ao ar livre, sempre condicionados ao ciclo de cheia e seca do rio.',
    },
    {
      nome: 'Bairro Comara e entorno do aeroporto',
      descricao:
        'Próximo ao Aeroporto Internacional de Tabatinga, o bairro Comara tem vista para o rio e a floresta peruana e é ponto de acesso às aldeias Ticuna de Umariaçu I e II, com vias e áreas abertas usadas para atividade física.',
    },
    {
      nome: 'Fronteira com Letícia',
      descricao:
        'A conurbação com a cidade colombiana de Letícia, separada apenas por uma avenida, cria um espaço urbano contínuo cujas ruas e praças integradas são usadas no dia a dia para caminhada e deslocamento a pé entre os dois países.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é mínima; o pedal e a corrida acontecem nas vias da área urbana, na orla e ao longo da avenida que liga Tabatinga a Letícia, onde o trânsito de fronteira é intenso.',

  clima:
    'O clima é equatorial quente e úmido, com temperaturas médias elevadas o ano todo (em geral entre 24 °C e 32 °C) e umidade frequentemente acima de 85%. As chuvas são abundantes e o ano é marcado pelo ciclo do rio Solimões, com a cheia e a vazante moldando a paisagem e a rotina da cidade.',
  climaTreino:
    'O calor e a umidade altos pedem treinar nas primeiras horas da manhã ou no fim da tarde, com hidratação reforçada e atenção ao esforço; nos períodos mais abafados, ambientes climatizados são a opção mais confortável e segura.',

  mobilidade:
    'Tabatinga não tem ligação rodoviária com o resto do país: o acesso é feito pelo rio Solimões, em barcos e lanchas que ligam a cidade a Manaus e às comunidades do Alto Solimões, e pelo ar, pelo Aeroporto Internacional de Tabatinga, um dos mais movimentados do estado. Dentro do tecido urbano, a circulação se mistura com a da vizinha Letícia, na Colômbia.',

  corridas: [
    {
      nome: 'Corridas e caminhadas na orla e na fronteira',
      descricao:
        'As atividades de corrida e caminhada se concentram na orla do rio Solimões e nas vias integradas com Letícia, em iniciativas locais que aproveitam o espaço urbano da fronteira.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Tabatinga mistura o uso da orla do rio para caminhada e corrida, o futebol e o convívio esportivo que atravessa a fronteira com Letícia, e a forte presença das comunidades indígenas Ticuna na vida local.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, distribuídas pela área central e pelos bairros residenciais, com porte compatível com uma cidade de fronteira do interior do Norte.',

  destaquesFitness: [
    'Tríplice fronteira Brasil-Colômbia-Peru, conurbada com a colombiana Letícia.',
    'Orla do rio Solimões como principal espaço de caminhada e corrida ao ar livre.',
    'Clima equatorial quente e úmido, que exige planejamento de horário e hidratação no treino.',
    'Cidade sem acesso rodoviário, conectada por rio e pelo Aeroporto Internacional de Tabatinga.',
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
    'Cidade de fronteira no coração do Alto Solimões, Tabatinga pede um treino adaptado ao calor e à umidade constantes e que aproveite a orla do rio e o espaço urbano integrado com Letícia. Um personal trainer ajuda a organizar a rotina respeitando o clima equatorial, definindo os melhores horários e mantendo a constância no ritmo ribeirinho da tríplice fronteira.',

  vizinhas: ['tefe-am', 'coari-am'],

  fontes: [
    { nome: 'IBGE Cidades — Tabatinga', url: 'https://cidades.ibge.gov.br/brasil/am/tabatinga/panorama' },
    { nome: 'Prefeitura de Tabatinga', url: 'https://tabatinga.am.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
