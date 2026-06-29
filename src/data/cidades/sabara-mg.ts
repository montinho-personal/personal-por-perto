import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sabara-mg',
  nome: 'Sabará',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'sabarense',
  tipo: 'cidade',

  populacao: 129372,
  populacaoAno: 2022,
  idhm: 0.731,
  idhmClasse: 'alto',
  altitudeM: 702,

  resumoEconomico:
    'Um dos mais antigos núcleos de povoamento de Minas Gerais, Sabará nasceu do ciclo do ouro na confluência do Rio Sabará com o Rio das Velhas e preserva um centro histórico barroco tombado, com igrejas como a Matriz de Nossa Senhora da Conceição. Integrante da Região Metropolitana de Belo Horizonte e praticamente conurbada à capital, a cidade combina tradição de mineração e siderurgia com o turismo histórico e gastronômico, em uma economia ligada de perto à dinâmica da Grande BH.',

  mercado:
    'Como cidade da Região Metropolitana de Belo Horizonte, Sabará tem um mercado de fitness baseado em academias de bairro, espalhadas pelos núcleos residenciais ao longo do vale, e crescente procura por atendimento domiciliar e treino ao ar livre. A proximidade com a capital amplia as opções de quem busca estrutura maior, mas o dia a dia local favorece o personal que vai até o aluno, em casa ou no condomínio.',

  bairrosNobres: ['Centro (Histórico)', 'Pompéu', 'Borges', 'Esplanada'],
  bairrosPopulares: ['Sabará-Açu', 'Nossa Senhora de Fátima', 'Roças Novas', 'Morro da Cruz'],

  parques: [
    {
      nome: 'Parque das Águas',
      descricao:
        'Área verde municipal com espaços para caminhada e lazer, opção para treino leve e atividades em família.',
    },
    {
      nome: 'Orla do Rio das Velhas',
      descricao:
        'Trechos às margens do Rio das Velhas e do Rio Sabará servem de cenário para caminhadas e corridas no plano do vale.',
    },
    {
      nome: 'Mirante Alto do Cristo',
      descricao:
        'Ponto mais alto da sede, com forte ganho de altitude — destino procurado por quem treina subidas e busca vista panorâmica da cidade.',
    },
  ],
  ciclovias:
    'A malha cicloviária é limitada e o relevo acidentado do vale dificulta os deslocamentos de bike; o pedal tende a se concentrar em trechos planos junto aos rios e em ligações com a vizinha Belo Horizonte.',

  clima:
    'O clima é tropical de altitude, com verões quentes e chuvosos e invernos secos e amenos, semelhante ao da Grande BH; o vale dos rios costuma deixar as temperaturas um pouco mais altas que nas áreas elevadas.',
  climaTreino:
    'As manhãs e o período de inverno (de maio a setembro) são as melhores janelas para o treino ao ar livre; no verão, vale priorizar horários mais frescos e reforçar a hidratação, sobretudo no fundo do vale.',

  mobilidade:
    'Conurbada a Belo Horizonte, Sabará é acessada principalmente pela MG-262 e pela ligação com a BR-262/Anel Rodoviário, além de linhas metropolitanas de ônibus que conectam a cidade à capital. O relevo de morros e o traçado antigo do centro histórico tornam alguns deslocamentos internos mais lentos.',

  corridas: [
    {
      nome: 'Corridas de rua na Grande BH',
      descricao:
        'A proximidade e a conurbação com Belo Horizonte dão aos sabarenses fácil acesso ao calendário de provas de rua da capital e da região metropolitana.',
    },
    {
      nome: 'Eventos esportivos no centro histórico',
      descricao:
        'O casario barroco e as ladeiras da cidade servem de cenário para caminhadas e atividades ao ar livre promovidas no entorno dos atrativos turísticos.',
    },
  ],
  culturaEsportiva:
    'A cultura de movimento em Sabará se apoia no cotidiano de uma cidade histórica e metropolitana: caminhadas pelas ruas do centro barroco, treinos de subida nos morros do vale e a participação no forte calendário esportivo da Grande BH. Eventos tradicionais como o Festival da Jabuticaba reforçam a vida ao ar livre e a circulação nas praças.',
  academias:
    'A oferta concentra-se em academias de bairro distribuídas pelos núcleos residenciais, com musculação e ginástica para o público local. Quem deseja estrutura de rede maior recorre com facilidade às unidades da vizinha Belo Horizonte, enquanto o atendimento domiciliar ganha espaço dentro da cidade.',

  destaquesFitness: [
    'Academias de bairro espalhadas pelos núcleos residenciais do vale.',
    'Treino de subidas no relevo acidentado, com o Mirante Alto do Cristo como ponto alto.',
    'Caminhadas e corridas leves às margens do Rio das Velhas e do Rio Sabará.',
    'Acesso fácil ao calendário de corridas e às redes de academia da Grande BH.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 680,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade histórica e metropolitana às margens do Rio das Velhas, Sabará une o charme do centro barroco ao ritmo da Grande BH, com academias de bairro, morros para treinar e atendimento domiciliar em alta. Um personal trainer ajuda a montar uma rotina que se encaixe no seu dia e potencialize seus resultados, seja no formato presencial, seja online.',

  vizinhas: ['belo-horizonte-mg', 'santa-luzia-mg', 'nova-lima-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Sabará', url: 'https://cidades.ibge.gov.br/brasil/mg/sabara/panorama' },
    { nome: 'Prefeitura de Sabará', url: 'https://site.sabara.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/3156700' },
  ],
  atualizadoEm: '2026-06-29',
};
