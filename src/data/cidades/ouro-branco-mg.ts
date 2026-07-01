import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ouro-branco-mg',
  nome: 'Ouro Branco',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'ouro-branquense',
  tipo: 'cidade',

  populacao: 38724,
  populacaoAno: 2022,
  idhm: 0.764,
  idhmClasse: 'alto',
  altitudeM: 1048,

  resumoEconomico:
    'No alto do Paraopeba, na divisa entre a região Metropolitana de Belo Horizonte e o Campo das Vertentes, Ouro Branco tem uma economia marcadamente industrial. A instalação da estatal Aço Minas Gerais S.A. (Açominas) em 1976, hoje usina da Gerdau Açominas, inaugurou o ciclo siderúrgico e transformou o antigo vilarejo histórico em polo do aço. A grande planta industrial concentra empregos e renda e movimenta uma cadeia de prestadores de serviço, transporte e comércio, enquanto o casario colonial e a Igreja Matriz de Santo Antônio preservam a memória da antiga povoação de ouro.',

  mercado:
    'A combinação de renda industrial relativamente alta e cidade de porte médio sustenta um mercado fitness ativo em relação ao tamanho da população. A rotina de turnos da siderurgia e do comércio faz muita gente buscar horários flexíveis de treino, e o clima ameno de altitude favorece a procura por acompanhamento ao ar livre. Personal trainers encontram demanda tanto entre trabalhadores da indústria quanto entre quem quer explorar a Serra de Ouro Branco para caminhada, corrida e trilha.',

  bairrosNobres: ['Centro', 'Cidade Jardim', 'Belvedere', 'Bela Vista'],
  bairrosPopulares: ['Água Limpa', 'Bandeirantes', 'Inconfidentes', 'Alto do Chalé'],

  parques: [
    {
      nome: 'Parque Estadual da Serra de Ouro Branco',
      descricao:
        'Unidade de conservação criada em 2009 e administrada pelo IEF, protege milhares de hectares de campos rupestres entre Ouro Branco e Ouro Preto, com altitudes que vão de cerca de 1.250 a 1.568 metros. As trilhas e a subida da serra, de acesso gratuito, são o principal cenário para caminhada, corrida em trilha e treino ao ar livre da região.',
    },
    {
      nome: 'Serra de Ouro Branco',
      descricao:
        'Muralha de escarpas que parece abraçar a cidade, é o cartão-postal ouro-branquense e ponto de partida de percursos que sobem ao platô. Os trechos de acesso e as estradas de terra do entorno servem de treino para quem busca ganho de altimetria e vistas amplas do alto Paraopeba.',
    },
    {
      nome: 'Casario histórico e entorno da Matriz de Santo Antônio',
      descricao:
        'O núcleo colonial, com a Igreja Matriz de Santo Antônio entre as mais antigas de Minas, tem ladeiras e vias tranquilas usadas para caminhadas e corridas leves na parte urbana, unindo atividade física e patrimônio.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e restrita a poucos trechos urbanos; grande parte do pedal e da corrida acontece nas avenidas da cidade e nas estradas de acesso à serra, que exigem atenção ao relevo acidentado.',

  clima:
    'O clima é tropical de altitude, com verão quente e chuvoso e inverno seco de noites frias — a temperatura média costuma oscilar entre 19 e 26 °C, mas madrugadas de inverno já registraram mínimas próximas de 5 °C na estação do INMET. A cidade fica a cerca de 1.000 metros de altitude, e a serra ultrapassa 1.500 metros, o que ameniza o calor em boa parte do ano.',
  climaTreino:
    'O clima ameno de altitude é favorável ao treino ao ar livre na maior parte do ano; no inverno, as manhãs muito frias pedem aquecimento reforçado e camadas de roupa, e o verão chuvoso concentra as pancadas à tarde, favorecendo treinar cedo. A altimetria da serra torna os percursos exigentes, o que recomenda progressão gradual de carga.',

  mobilidade:
    'Ouro Branco fica a cerca de 100 km de Belo Horizonte e é servida pela BR-040 no eixo Rio–BH, além de rodovias estaduais que a ligam a Congonhas e Conselheiro Lafaiete. O transporte urbano é feito por ônibus, e a logística pesada gira em torno da usina siderúrgica, com forte fluxo de cargas e trabalhadores entre a planta industrial e a área urbana.',

  corridas: [
    {
      nome: 'Meia Maratona Estrada Real',
      descricao:
        'Prova de rua tradicional de Ouro Branco, com percursos de 10 km e 21 km ligados ao traçado histórico da Estrada Real, reunindo corredores da região do alto Paraopeba e do Campo das Vertentes.',
    },
    {
      nome: 'Trilhas e subida da Serra de Ouro Branco',
      descricao:
        'Os percursos do parque estadual e a subida da serra são referência para corrida em trilha e caminhada de altimetria, atraindo praticantes que buscam desafio técnico em meio aos campos rupestres.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina a vocação para corrida de rua e trilha, favorecida pela Serra de Ouro Branco e pelo clima de altitude, com a rotina de treino de quem trabalha na indústria e no comércio. O patrimônio colonial e as paisagens de montanha reforçam o uso dos espaços ao ar livre para atividade física.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional distribuídas pelos bairros centrais e residenciais, com porte compatível com uma cidade média industrial do interior mineiro.',

  destaquesFitness: [
    'Serra de Ouro Branco e parque estadual como palco de trilha, corrida e caminhada de altimetria.',
    'Clima tropical de altitude, ameno, com inverno de noites frias que favorece o treino ao ar livre.',
    'Meia Maratona Estrada Real, prova de rua tradicional com percursos de 10 km e 21 km.',
    'Economia industrial em torno da usina siderúrgica da Gerdau Açominas, com renda e rotina de turnos.',
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
    'Cidade de montanha e de aço, Ouro Branco une clima ameno de altitude, patrimônio colonial e a imponente Serra de Ouro Branco a uma economia industrial que dita o ritmo da rotina. Um personal trainer ajuda a encaixar o treino nos turnos de trabalho, a aproveitar as trilhas e a subida da serra com segurança e a manter a constância ao longo das estações.',

  vizinhas: ['congonhas-mg', 'conselheiro-lafaiete-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Ouro Branco', url: 'https://cidades.ibge.gov.br/brasil/mg/ouro-branco/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/3145901' },
    { nome: 'IEF — Parque Estadual Serra do Ouro Branco', url: 'https://www.ief.mg.gov.br/w/parque-estadual-serra-do-ouro-branco' },
  ],
  atualizadoEm: '2026-06-29',
};
