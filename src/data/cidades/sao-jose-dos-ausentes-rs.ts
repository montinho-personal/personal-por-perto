import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-jose-dos-ausentes-rs',
  nome: 'São José dos Ausentes',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'ausentense',
  tipo: 'cidade',

  populacao: 4172,
  populacaoAno: 2022,
  idhm: 0.663,
  idhmClasse: 'médio',
  altitudeM: 1200,

  resumoEconomico:
    'Com 4.172 habitantes (Censo 2022) e altitude média de 1.200 metros, São José dos Ausentes é o município mais alto do Rio Grande do Sul — o Pico do Monte Negro, com 1.403 metros, é o ponto culminante do estado. Território 100% de Mata Atlântica, a cidade integra a rota dos Campos de Cima da Serra e vive de pecuária, agricultura familiar e de um ecoturismo que cresce em torno dos seus oito cânions.',

  mercado:
    'O mercado de personal trainer é pequeno e de relação direta: poucos profissionais atendendo moradores, produtores e o pessoal do turismo — condutores e guias que passam o dia em trilha e cavalgada. A academia do centro divide espaço com o atendimento a domicílio e com o treino ao ar livre.',

  bairrosNobres: ['Centro', 'Vila Nova', 'Bela Vista', 'Chácaras'],
  bairrosPopulares: ['Rincão dos Kroeff', 'Silveira', 'Cohab', 'Zona Rural'],

  parques: [
    {
      nome: 'Pico do Monte Negro',
      descricao:
        'A 1.403 metros, é o ponto mais alto do Rio Grande do Sul, na borda do cânion de mesmo nome. A trilha é quase toda plana, com cerca de 200 metros de subida íngreme para quem quiser alcançar o cume.',
    },
    {
      nome: 'Cânion Amola Faca',
      descricao:
        'Considerado o mais bonito do município, abriga a cachoeira Amola Faca, com cerca de 241 metros de queda entre paredões de basalto.',
    },
    {
      nome: 'Cachoeirão dos Rodrigues e Desnível dos Rios',
      descricao:
        'Dois dos atrativos mais procurados fora dos cânions principais, alcançados por estradas rurais e trilhas de dificuldade variada.',
    },
    {
      nome: 'Campos de altitude e araucárias',
      descricao:
        'Os campos nativos entremeados de araucárias formam o cenário das cavalgadas e das trilhas longas — a paisagem que define os Campos de Cima da Serra.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária urbana. As estradas de terra entre as fazendas e os acessos aos cânions servem ao cicloturismo, ao mountain bike e aos passeios de 4x4.',

  clima:
    'Subtropical de altitude, o mais frio do estado: invernos rigorosos com geadas frequentes e neve ocasional, e verões amenos mesmo no auge da estação.',
  climaTreino:
    'A altitude torna o verão excepcionalmente confortável para treinar ao ar livre — vantagem rara no Brasil. O inverno exige aquecimento bem mais longo, roupa em camadas e atenção ao vento; nos dias severos, o ambiente coberto assume.',

  mobilidade:
    'A cidade é pequena e caminhável no centro, mas o município é espalhado: os cânions e as fazendas ficam a quilômetros de estrada de terra. A ligação regional se faz por Bom Jesus e pelo eixo dos Campos de Cima da Serra.',

  corridas: [
    {
      nome: 'Travessias e provas de montanha dos Campos de Cima da Serra',
      descricao:
        'O calendário regional reúne travessias e corridas que exploram os campos de altitude e as bordas de cânion, com desnível severo e terreno técnico.',
    },
  ],
  culturaEsportiva:
    'A cavalgada é parte da identidade local e da economia do turismo, ao lado de trilha, mountain bike e passeios de 4x4. Caminhar em campo aberto e em borda de cânion faz parte da rotina de quem trabalha com o ecoturismo.',
  academias:
    'A oferta formal é pequena e concentrada no centro, com espaços compactos de musculação — o que abre espaço para o atendimento individual e para o treino em casa.',

  destaquesFitness: [
    'Pico do Monte Negro, a 1.403 m — o ponto mais alto do Rio Grande do Sul.',
    'Oito cânions no município, com trilhas de dificuldade variada.',
    'Cachoeira Amola Faca, com cerca de 241 m de queda.',
    'Altitude média de 1.200 m, que torna o verão confortável para treinar fora.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 650,
    onlineMin: 130,
    onlineMax: 350,
  },

  conclusao:
    'São José dos Ausentes é o teto do Rio Grande do Sul, e treina como tal. Um personal trainer daqui prepara perna e fôlego para trilha, cavalgada e borda de cânion — e usa a academia como base de força que sustenta tudo isso durante o inverno mais duro do estado.',

  vizinhas: ['cambara-do-sul-rs', 'vacaria-rs', 'sao-francisco-de-paula-rs'],

  fontes: [
    { nome: 'IBGE Cidades — São José dos Ausentes', url: 'https://www.ibge.gov.br/cidades-e-estados/rs/sao-jose-dos-ausentes.html' },
    { nome: 'Prefeitura de São José dos Ausentes', url: 'https://www.saojosedosausentes.rs.gov.br/' },
    { nome: 'Prefeitura — Trilhas do município', url: 'https://www.saojosedosausentes.rs.gov.br/turismo/trilhas/' },
  ],
  atualizadoEm: '2026-08-11',
};
