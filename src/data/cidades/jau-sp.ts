import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'jau-sp',
  nome: 'Jaú',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'jauense',
  tipo: 'cidade',

  populacao: 133497,
  populacaoAno: 2022,
  idhm: 0.778,
  idhmClasse: 'alto',
  altitudeM: 522,

  resumoEconomico:
    'Cidade média do centro-oeste paulista, Jaú já foi grande exportadora de café e hoje é reconhecida oficialmente como Capital do Calçado Feminino, título estadual concedido em 2021. O polo calçadista reúne mais de 130 empresas, gera milhares de empregos e responde por boa parte da economia local, ao lado da agroindústria canavieira. Esse perfil industrial e de serviços sustenta um público trabalhador, com rotinas que pedem orientação para conciliar treino e vida agitada.',

  mercado:
    'O mercado fitness acompanha o porte de uma cidade média e industrial: redes e academias de bairro espalhadas pelos vários setores residenciais, somadas a uma forte presença de personal trainers que atendem em domicílio e em condomínios. A operária e empreendedora ligada ao setor de calçados convive com horários puxados, o que valoriza o acompanhamento individual e flexível.',

  bairrosNobres: ['Jardim Maria Luiza', 'Chácara Bela Vista', 'Vila Nova Jaú', 'Jardim Olímpia'],
  bairrosPopulares: ['Jardim Pedro Ometto', 'Chácara Águas de Jaú', 'Jardim Netinho Prado', 'Vila Assis'],

  parques: [
    {
      nome: 'Parque do Rio Jaú',
      descricao:
        'Área verde às margens do Rio Jaú, com pista de caminhada, lago e espaços de lazer — um dos principais pontos da cidade para atividade física ao ar livre.',
    },
    {
      nome: 'Parque Linear do Rio Jaú',
      descricao:
        'Faixa de parque acompanhando o curso do rio, prevista no sistema de áreas verdes municipal e usada para caminhada e convívio.',
    },
    {
      nome: 'Bosque Campos do Prado',
      descricao:
        'Área arborizada que integra o sistema de parques de Jaú, indicada para caminhadas leves e lazer em meio ao verde.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de ciclovia e vias arborizadas que conectam bairros aos parques às margens do Rio Jaú, favorecendo o deslocamento ativo no dia a dia.',

  clima:
    'O clima é tropical de altitude, com verões quentes e chuvosos e invernos mais secos e amenos, típico do centro-oeste paulista.',
  climaTreino:
    'O inverno seco e ameno favorece treinos ao ar livre; no verão, o ideal é treinar cedo ou no fim da tarde para escapar do calor e das pancadas de chuva.',

  mobilidade:
    'Jaú fica a cerca de 290 km da capital e é cortada pela Rodovia Marechal Rondon (SP-300), principal eixo que conecta o município a Bauru e a outras cidades da região central do estado.',

  corridas: [
    {
      nome: 'Corridas de rua em Jaú',
      descricao:
        'A cidade recebe provas de rua organizadas por grupos locais e pela administração municipal, com percursos que passam por avenidas e pela orla do Rio Jaú.',
    },
    {
      nome: 'Circuitos e caminhadas comunitárias',
      descricao:
        'Eventos de caminhada e corrida ligados a datas e campanhas de saúde movimentam praças e parques ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Jaú combina tradição no futebol com uma cena crescente de corrida e caminhada nos parques às margens do rio. Os espaços públicos ao ar livre e as academias de bairro democratizam o acesso, e o atendimento domiciliar atende bem quem trabalha no polo calçadista.',
  academias:
    'A oferta reúne academias de bairro distribuídas pelos setores residenciais e uma presença marcante de personal trainers que atendem em casa e em condomínios, formato que se encaixa nas rotinas puxadas da cidade industrial.',

  destaquesFitness: [
    'Parques às margens do Rio Jaú como principais espaços públicos para treino ao ar livre.',
    'Academias de bairro espalhadas pelos setores residenciais.',
    'Forte presença de personal trainers em atendimento domiciliar e em condomínios.',
    'Cidade média industrial (Capital do Calçado Feminino) com público trabalhador e rotinas que pedem flexibilidade.',
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
    'Cidade média e industrial, Jaú oferece boa base para treinar — dos parques às margens do Rio Jaú às academias de bairro e ao atendimento em domicílio. Um personal trainer ajuda a encaixar o exercício na rotina de quem vive a Capital do Calçado Feminino, com método e constância.',

  vizinhas: ['bauru-sp', 'botucatu-sp', 'araraquara-sp'],

  capaArte: {
    src: '/capas-cidade/jau-sp.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em Jaú (SP) em arte com a catedral e os prédios históricos do centro, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Jaú: foco, disciplina e resultados no centro-oeste paulista.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Jaú', url: 'https://cidades.ibge.gov.br/brasil/sp/jau/panorama' },
    { nome: 'Prefeitura da Estância Turística de Jaú', url: 'https://www.jau.sp.gov.br/sobre-jahu' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-01',
};
