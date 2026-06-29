import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ceilandia-df',
  nome: 'Ceilândia',
  uf: 'DF',
  estado: 'Distrito Federal',
  estadoSlug: 'distrito-federal',
  regiao: 'Centro-Oeste',
  gentilico: 'ceilandense',
  tipo: 'regiao',
  cidadeMae: 'brasilia-df',
  contexto: 'Distrito Federal',

  resumoEconomico:
    'Ceilândia é a região administrativa (RA IX) mais populosa do Distrito Federal, com mais de 350 mil moradores — algo em torno de 16% da população do DF. Nasceu em 27 de março de 1971, quando o governador Hélio Prates lançou a pedra fundamental da nova localidade criada pela Campanha de Erradicação de Invasões (CEI), que transferiu milhares de famílias das invasões da periferia de Brasília. Do acrônimo CEI veio o nome da cidade. Tornou-se região administrativa em 1989. De perfil popular e fortemente marcada pela imigração nordestina, Ceilândia tem uma economia de bairro intensa, com comércio de rua, feiras e serviços que sustentam o dia a dia de quem mora e trabalha na própria região.',

  mercado:
    'O mercado de personal trainer em Ceilândia é movido por um público popular muito grande e por uma rotina de bairro. A demanda se divide entre academias de bairro espalhadas pelas quadras, atendimento domiciliar e treino ao ar livre em praças e parques. O personal que se adapta ao orçamento popular — com planos acessíveis, treino em dupla ou em pequenos grupos e flexibilidade de horário — encontra um terreno fértil, já que boa parte dos moradores trabalha na própria região e valoriza o profissional perto de casa. Treino em praça, no parque e em casa convive com a academia tradicional como forma de se manter ativo gastando pouco.',

  bairrosNobres: ['Ceilândia Centro', 'Ceilândia Sul', 'Ceilândia Norte', 'Guariroba'],
  bairrosPopulares: [
    'Sol Nascente / Pôr do Sol',
    'Setor O',
    'Setor P Sul',
    'Setor P Norte',
    'Expansão do Setor O',
  ],

  parques: [
    {
      nome: 'Parque Ecológico de Ceilândia (Metropolitano)',
      descricao:
        'Área verde de cerrado preservado na região mais populosa do DF, com trilhas usadas para caminhada e atividade física ao ar livre. É uma das opções gratuitas para quem quer treinar fora da academia.',
    },
    {
      nome: 'Parque Recreativo do Setor O',
      descricao:
        'Primeiro parque urbano de Ceilândia, com cerca de 10,5 hectares, inaugurado em 2018 no Setor O. Reúne quadras, campo, academia ao ar livre, área de convivência e equipamentos de lazer — ponto de encontro de famílias e de quem faz exercício na vizinhança.',
    },
    {
      nome: 'Parque da Vaquejada',
      descricao:
        'Espaço de esporte e lazer mantido pelo GDF em Ceilândia, ligado às tradições nordestinas tão presentes na região, usado para eventos e atividades ao ar livre.',
    },
  ],
  ciclovias:
    'Ceilândia vem ampliando calçadas e espaços públicos para caminhada e atividade física, com revitalização de praças e quadras esportivas em vários setores. As ciclovias e calçadas internas, somadas aos parques, dão suporte a quem caminha, corre e pedala pela região.',

  clima:
    'O clima é típico do cerrado do Planalto Central: quente e úmido no verão, com chuvas concentradas entre outubro e abril, e seco no inverno, quando a umidade do ar despenca e os dias ficam quentes e as madrugadas frescas.',
  climaTreino:
    'No verão chuvoso, o treino em ambiente coberto ou no início da manhã evita as pancadas de chuva da tarde. Já no inverno seco, com a baixa umidade característica do DF, vale priorizar horários mais frescos (início da manhã e fim de tarde) e reforçar a hidratação — um cuidado importante para quem treina em praças e parques.',

  mobilidade:
    'Ceilândia é o destino do ramal mais extenso do Metrô-DF (Linha Verde/Laranja), com as estações Ceilândia Sul, Guariroba, Ceilândia Centro, Ceilândia Norte e o Terminal Ceilândia, inauguradas em 2008. A estação Guariroba se tornou, em 2017, a primeira da América Latina a captar energia solar. O metrô liga a região ao Plano Piloto e a Taguatinga, e os terminais de ônibus complementam a rede — o que facilita tanto o deslocamento de alunos quanto o do personal que atende em diferentes pontos da cidade.',

  corridas: [
    {
      nome: 'Treino e corrida em parques e praças',
      descricao:
        'O Parque Ecológico de Ceilândia, o Parque Recreativo do Setor O e as praças revitalizadas concentram corredores e caminhantes ao longo da semana, sustentando uma cena de corrida de rua de perfil popular.',
    },
    {
      nome: 'Aniversário de Ceilândia',
      descricao:
        'As celebrações de aniversário da região, em março, costumam reunir atividades culturais e esportivas que reforçam a identidade da cidade e movimentam o lazer ao ar livre.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Ceilândia é de raiz comunitária: futebol de quadra e de campo, academias de bairro, treino em praça e atividade física ao ar livre fazem parte do cotidiano. Essa identidade se mistura à forte presença nordestina, expressa em espaços como a Casa do Cantador, projeto de Oscar Niemeyer inaugurado em 1986 para celebrar a cultura do repente e da embolada, e nas feiras que são o coração econômico e social da região.',
  academias:
    'A oferta é dominada por academias de bairro espalhadas pelas quadras, com preços acessíveis, ao lado de unidades de redes populares e de estúdios menores. Boa parte da demanda, porém, é atendida fora desse circuito: no atendimento domiciliar e no treino ao ar livre, em academias públicas, praças e parques — formatos que combinam com o orçamento popular dos moradores.',

  destaquesFitness: [
    'Maior região administrativa do DF em população, com público popular numeroso.',
    'Metrô-DF (estações Ceilândia Sul, Guariroba, Ceilândia Centro e Norte) facilita o deslocamento de alunos e personais.',
    'Parques e praças revitalizadas para treino ao ar livre, como o Parque Recreativo do Setor O e o Parque Ecológico de Ceilândia.',
    'Forte cultura de academia de bairro, treino domiciliar e atividade em espaços públicos.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Em Ceilândia, contratar um personal trainer combina com a vida de bairro: treino acessível, perto de casa e adaptado à rotina de quem mora e trabalha na maior região do DF. Com academias espalhadas pelas quadras, parques e praças para treinar ao ar livre, metrô que conecta a cidade ao restante do Distrito Federal e uma identidade cultural forte, o ambiente favorece quem quer se exercitar com método e acompanhamento sem fugir do orçamento popular.',

  vizinhas: ['brasilia-df', 'aguas-claras-df'],

  fontes: [
    { nome: 'Administração Regional de Ceilândia (GDF)', url: 'https://www.ceilandia.df.gov.br/' },
    { nome: 'Metrô-DF — Companhia do Metropolitano do DF', url: 'https://metro.df.gov.br/' },
    { nome: 'Codeplan — PDAD Ceilândia', url: 'https://www.codeplan.df.gov.br/pdad-ceilandia-2/' },
  ],
  atualizadoEm: '2026-06-29',
};
