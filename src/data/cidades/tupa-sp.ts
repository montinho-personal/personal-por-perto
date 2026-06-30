import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tupa-sp',
  nome: 'Tupã',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'tupãense',
  tipo: 'cidade',

  populacao: 63928,
  populacaoAno: 2022,
  idhm: 0.771,
  idhmClasse: 'alto',
  altitudeM: 451,

  resumoEconomico:
    'Estância Turística no oeste paulista, Tupã firmou-se como polo regional do agronegócio e da agroindústria, com destaque nacional na cadeia produtiva do amendoim — a região concentra parte expressiva da produção e da exportação do grão. A economia combina agricultura, agroindústria, comércio e serviços, com peso regional em saúde, educação e cultura, simbolizado pelo Museu Histórico e Pedagógico Índia Vanuíre.',

  mercado:
    'Cidade média do interior paulista, Tupã reúne classe média consolidada e perfil de polo de serviços para os municípios vizinhos. A presença de academias, do estádio municipal e das pistas de caminhada e ciclovias inauguradas pela prefeitura sustenta a procura por treino orientado e por personal trainers.',

  bairrosNobres: ['Jardim América', 'Jardim Cybelle', 'Jardim Unesp', 'Centro'],
  bairrosPopulares: ['Nova Tupã', 'Parque das Nações', 'Parque Dom Bosco', 'Núcleo Habitacional Augusto Rosin'],

  parques: [
    {
      nome: 'Parque Linear da Rua Estados Unidos',
      descricao:
        'Eixo de lazer da zona norte com pista de caminhada e ciclovia/ciclofaixa implantadas pela prefeitura, de acesso livre, voltado a caminhada, corrida e pedal.',
    },
    {
      nome: 'Estádio Municipal Alonso Carvalho Braga',
      descricao:
        'O "Alonsão", casa do Tupã Futebol Clube, é referência esportiva da cidade e ponto de encontro da comunidade ligada ao esporte.',
    },
    {
      nome: 'Museu Histórico e Pedagógico Índia Vanuíre',
      descricao:
        'Espaço cultural de referência no oeste paulista, com um dos acervos etnográficos indígenas mais importantes do país e entorno usado para passeio e caminhada.',
    },
  ],
  ciclovias:
    'A prefeitura implantou ciclovias, ciclofaixas e pistas de caminhada, com destaque para o conjunto da zona norte ligado ao parque linear; somados, os trechos chegam a alguns quilômetros de infraestrutura para pedal e caminhada na malha urbana.',

  clima:
    'O clima é tropical com verão úmido e inverno seco (Cwa na classificação de Köppen), típico do oeste paulista: verões quentes e chuvosos e invernos amenos e secos.',
  climaTreino:
    'O inverno seco e ameno abre uma janela ampla para o treino ao ar livre; no verão, o calor e as chuvas concentradas pedem hidratação reforçada e horários estratégicos, como o começo da manhã e o fim da tarde.',

  mobilidade:
    'O acesso principal é pela SP-294 (Rodovia Comandante João Ribeiro de Barros), eixo do oeste paulista que liga Tupã a Marília, Bauru e à divisa com o Mato Grosso do Sul; a cidade conta ainda com aeroporto municipal.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário esportivo municipal',
      descricao:
        'A cidade recebe provas de corrida e caminhada organizadas pela Secretaria de Esportes e por entidades locais, aproveitando as pistas e ciclovias da malha urbana.',
    },
    {
      nome: 'Caminhadas e pedais comunitários',
      descricao:
        'Grupos de caminhada e ciclismo usam o parque linear e os trechos de ciclovia para encontros regulares ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'Tupã tem tradição esportiva ancorada no futebol, com o Tupã Futebol Clube e o Estádio Alonso Carvalho Braga, e vem ampliando o espaço para corrida, caminhada e ciclismo com a nova infraestrutura de pistas e ciclovias mantida pelo poder público.',
  academias:
    'A oferta reúne academias e estúdios distribuídos pelos bairros, complementada pelas pistas de caminhada, ciclovias e equipamentos de lazer ao ar livre instalados pela prefeitura.',

  destaquesFitness: [
    'Parque linear e ciclovias da zona norte para caminhada, corrida e pedal de acesso livre.',
    'Inverno seco e ameno como ampla janela para treino ao ar livre.',
    'Estádio Alonso Carvalho Braga como polo da cultura esportiva local.',
    'Estrutura de cidade média: rede de academias e equipamentos públicos de lazer.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Estância Turística e polo do amendoim no oeste paulista, Tupã combina cultura, agroindústria e uma infraestrutura crescente de pistas e ciclovias. Um personal trainer ajuda a aproveitar o parque linear e os equipamentos públicos com método, ajustando o treino ao calor do verão e à janela seca do inverno.',

  vizinhas: ['marilia-sp', 'lins-sp', 'bauru-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Tupã', url: 'https://cidades.ibge.gov.br/brasil/sp/tupa/panorama' },
    { nome: 'Prefeitura da Estância Turística de Tupã', url: 'https://www.tupa.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
