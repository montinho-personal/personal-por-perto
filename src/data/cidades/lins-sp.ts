import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'lins-sp',
  nome: 'Lins',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'linense',
  tipo: 'cidade',

  populacao: 74068,
  populacaoAno: 2022,
  idhm: 0.786,
  idhmClasse: 'alto',
  altitudeM: 437,

  resumoEconomico:
    'Cidade média do centro-oeste paulista, Lins combina agroindústria, comércio regional e um forte polo de ensino superior. A economia tem peso do setor sucroenergético, com a Usina Lins e a Lins Agroindustrial movimentando a cana-de-açúcar, o açúcar e o etanol da região, além de um comércio diversificado que atende municípios vizinhos. O termalismo (com as águas termais descobertas na cidade) também ajuda a sustentar serviços e turismo.',

  mercado:
    'O mercado fitness acompanha o perfil de cidade média do interior: redes nacionais e academias de bairro convivem com estúdios menores e professores autônomos, em uma cidade com grande presença de casas e bairros bem definidos. O público universitário, ligado a UNILINS, FATEC e Unisalesiano, ajuda a manter uma demanda constante por treino e bem-estar.',

  bairrosNobres: ['Junqueira', 'Jardim Bela Vista', 'Vila Hípica', 'Centro'],
  bairrosPopulares: ['Lins V', 'Lins VI', 'Vila Cardim', 'Vila Clélia'],

  parques: [
    {
      nome: 'Orla do Rio Dourado',
      descricao:
        'Área de lazer às margens do Rio Dourado, com amplo espaço ao ar livre usado para caminhadas e atividades em família, um dos principais pontos de convívio da cidade.',
    },
    {
      nome: 'Praças e áreas verdes do Centro',
      descricao:
        'Praças arborizadas na região central concentram caminhada e atividade física no dia a dia, em uma cidade com bairros de baixa densidade e muitas casas.',
    },
  ],
  ciclovias:
    'Lins tem trechos de ciclovia e vias arborizadas que favorecem o deslocamento ativo, em uma cidade plana e de porte médio, fácil de percorrer a pé ou de bicicleta.',

  clima:
    'O clima é tropical com estação seca (tipo Aw), com inverno seco e ameno e verão quente e chuvoso, típico do centro-oeste paulista.',
  climaTreino:
    'O inverno seco favorece o treino ao ar livre; no verão, vale evitar o meio do dia por causa do calor e das pancadas de chuva no fim da tarde.',

  mobilidade:
    'Lins é um entroncamento do centro-oeste paulista, servida pela Rodovia Marechal Rondon (SP-300), que liga a cidade a Bauru e a outros municípios da região. As distâncias curtas e o trânsito tranquilo de cidade média facilitam encaixar o treino na rotina.',

  corridas: [
    {
      nome: 'Corridas de rua de Lins',
      descricao:
        'A cidade recebe provas de rua de calendário regional, com percursos de caminhada e corrida que reúnem corredores locais e de municípios vizinhos.',
    },
    {
      nome: 'Pistas de caminhada e corrida',
      descricao:
        'Resorts e clubes da região, ligados ao termalismo local, mantêm pistas de caminhada e corrida que complementam os espaços públicos da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva linense se apoia em caminhada, corrida de rua e nas academias de bairro, com forte presença do público universitário. O ritmo de cidade média, com bairros tranquilos e muitas casas, torna a atividade física ao ar livre parte natural da rotina.',
  academias:
    'A oferta reúne redes nacionais, academias de bairro e estúdios menores, além de professores autônomos, sustentados por um polo de ensino superior (UNILINS, FATEC e Unisalesiano) e por um comércio regional ativo.',

  destaquesFitness: [
    'Polo de ensino superior (UNILINS, FATEC, Unisalesiano) sustentando público voltado a bem-estar.',
    'Orla do Rio Dourado como principal espaço de lazer ao ar livre.',
    'Cidade plana e de porte médio, fácil de percorrer a pé ou de bicicleta.',
    'Tradição de termalismo e turismo de saúde na região.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 270,
    mensalMax: 720,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Cidade média com polo universitário, agroindústria e tradição de termalismo, Lins tem ritmo tranquilo e bons espaços ao ar livre para treinar, da orla do Rio Dourado às praças do Centro. Um personal trainer ajuda a aproveitar essa estrutura com método, da musculação à preparação para as corridas da região.',

  vizinhas: ['bauru-sp', 'aracatuba-sp', 'marilia-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Lins', url: 'https://cidades.ibge.gov.br/brasil/sp/lins/panorama' },
    { nome: 'Prefeitura de Lins', url: 'https://www.lins.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
