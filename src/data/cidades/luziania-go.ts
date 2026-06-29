import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'luziania-go',
  nome: 'Luziânia',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'luzianiense',
  tipo: 'cidade',

  populacao: 209129,
  populacaoAno: 2022,
  idhm: 0.701,
  idhmClasse: 'médio',
  altitudeM: 948,

  resumoEconomico:
    'Uma das maiores cidades do Entorno do DF e polo do Entorno Sul, Luziânia foi fundada em 1746 como antigo arraial minerador de Santa Luzia e guarda um dos mais importantes centros históricos coloniais de Goiás. Cortada pela BR-040 (eixo Brasília–Belo Horizonte), tem economia diversificada entre comércio, serviços, agropecuária e forte vínculo com o mercado de trabalho do Distrito Federal, do qual é cidade-dormitório para boa parte da população — caso do distrito do Jardim Ingá, o mais populoso da cidade.',

  mercado:
    'Cidade grande do Entorno do DF e de perfil popular, Luziânia tem mercado fitness apoiado em academias de bairro espalhadas pelo centro e pelo Jardim Ingá, com forte espaço para o personal domiciliar e o atendimento em condomínios. A proximidade de Brasília influencia preços e referências de treino, mas o poder de compra médio-popular mantém os valores acessíveis.',

  bairrosNobres: ['Setor Central', 'Jardim Ingá', 'Mingone', 'Setor Sul'],
  bairrosPopulares: ['Jardim Ingá', 'Parque JK', 'Vila Esperança', 'Setor Leste'],

  parques: [
    {
      nome: 'Centro Histórico Colonial',
      descricao:
        'Ruas antigas, casarões e praças arborizadas em torno da Igreja Matriz de Santa Luzia formam um circuito agradável para caminhadas e treinos leves a pé.',
    },
    {
      nome: 'Praças e quadras de bairro',
      descricao:
        'As praças do Setor Central e do Jardim Ingá, com áreas livres e quadras, são usadas para caminhada, treino funcional ao ar livre e atividades em grupo.',
    },
    {
      nome: 'Academias ao ar livre',
      descricao:
        'Equipamentos públicos de ginástica distribuídos em praças e espaços comunitários ampliam o acesso gratuito ao treino nos bairros.',
    },
  ],
  ciclovias:
    'A malha cicloviária ainda é incipiente e concentrada em trechos de vias principais; o deslocamento de bike convive com o tráfego intenso da BR-040 e das avenidas de ligação ao DF.',

  clima:
    'O clima é tropical de altitude, com inverno seco e verão chuvoso, e a cidade fica a cerca de 948 m de altitude.',
  climaTreino:
    'O ar seco do inverno pede hidratação reforçada e atenção nos horários de pico de calor; as manhãs e o fim de tarde são as melhores janelas para treinar ao ar livre, com temperaturas amenas típicas do Cerrado de altitude.',

  mobilidade:
    'Luziânia é cortada pela BR-040, principal eixo de ligação com Brasília ao norte e com Minas Gerais ao sul, o que sustenta seu papel de polo do Entorno Sul do DF. O grande fluxo pendular para o Distrito Federal marca a rotina, sobretudo no distrito do Jardim Ingá.',

  corridas: [
    {
      nome: 'Corrida de Santa Luzia',
      descricao:
        'Prova promovida pela prefeitura dentro das comemorações do aniversário da cidade, em 13 de dezembro, data da padroeira Santa Luzia.',
    },
    {
      nome: 'Treinos no Centro e no Jardim Ingá',
      descricao:
        'Grupos de corrida e caminhada usam as avenidas do Setor Central e do Jardim Ingá como circuito de rua no dia a dia.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura a tradição religiosa e histórica — com a Corrida de Santa Luzia ligada ao aniversário da cidade — e a rotina de academias de bairro e treinos de rua. A proximidade com Brasília aproxima os praticantes locais do calendário de provas da capital.',
  academias:
    'A oferta é formada sobretudo por academias de bairro no centro e no Jardim Ingá, complementada por estúdios menores, atendimento domiciliar e equipamentos públicos de ginástica nas praças.',

  destaquesFitness: [
    'Cidade grande do Entorno do DF, com espaço amplo para personal domiciliar e em condomínios.',
    'Centro histórico colonial em torno da Igreja Matriz de Santa Luzia, bom para caminhadas e treinos leves.',
    'Corrida de Santa Luzia no calendário de aniversário da cidade (13 de dezembro).',
    'Clima de altitude do Cerrado, com inverno seco que pede atenção à hidratação.',
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
    'Histórica e estratégica no Entorno Sul do DF, Luziânia une um centro colonial charmoso à dinâmica de cidade-dormitório de Brasília. Para quem treina, o personal trainer faz a diferença ao montar uma rotina viável entre academias de bairro, treino em casa e os espaços públicos, ajustando o esforço ao clima seco de altitude.',

  vizinhas: ['valparaiso-de-goias-go', 'brasilia-df', 'aparecida-de-goiania-go'],

  fontes: [
    { nome: 'IBGE Cidades — Luziânia', url: 'https://cidades.ibge.gov.br/brasil/go/luziania/panorama' },
    { nome: 'Prefeitura de Luziânia', url: 'https://www.luziania.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
