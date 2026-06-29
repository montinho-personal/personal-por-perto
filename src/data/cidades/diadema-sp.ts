import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'diadema-sp',
  nome: 'Diadema',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'diademense',
  tipo: 'cidade',

  populacao: 393237,
  populacaoAno: 2022,
  idhm: 0.757,
  idhmClasse: 'alto',
  altitudeM: 770,

  resumoEconomico:
    'Cidade industrial do ABC paulista e uma das mais densas do país, Diadema é reconhecida como a capital nacional do setor de Higiene Pessoal, Perfumaria e Cosméticos, com mais de 120 indústrias do ramo, além de um robusto parque metalúrgico e de autopeças. A localização entre a capital e o Porto de Santos, com acesso às rodovias Imigrantes e Anchieta, reforça seu peso logístico.',

  mercado:
    'Com a segunda maior densidade demográfica do país, Diadema tem um mercado urbano em que as academias de bairro atendem uma grande população trabalhadora, e os parques públicos com aulas gratuitas ampliam o acesso ao treino. A proximidade do atendimento — perto de casa ou do trabalho — é um diferencial valorizado.',

  bairrosNobres: ['Centro', 'Serraria', 'Canhema', 'Taboão'],
  bairrosPopulares: ['Eldorado', 'Jardim Inamar', 'Vila Conceição', 'Piraporinha'],

  parques: [
    {
      nome: 'Parque do Paço',
      descricao:
        'Com cerca de 33,5 mil m², é o mais frequentado da cidade: tem lago, pista de caminhada, quadras, playground e aulas gratuitas de zumba, capoeira e tai chi chuan.',
    },
    {
      nome: 'Parque Vereador Antônio de Lucca Filho (Parque Takebe)',
      descricao:
        'Com mais de 10 mil m², tem quadras esportivas e academia ao ar livre, sendo um polo de treino de bairro.',
    },
    {
      nome: 'Parque Ecológico do Eldorado',
      descricao:
        'Com cerca de 15 mil m², é uma área verde para caminhada e atividades ao ar livre em uma das regiões mais populosas da cidade.',
    },
  ],
  ciclovias:
    'A cidade tem estrutura cicloviária em expansão, com projeto de interligação entre o Parque do Paço e outras áreas verdes; a extensão total não é consolidada em fonte oficial.',

  clima:
    'O clima é subtropical de altitude do planalto paulista, com verões chuvosos e invernos mais secos.',
  climaTreino:
    'O treino ao ar livre é confortável no inverno; no verão, atenção às chuvas. Por ser uma cidade muito densa, treinar em parques próximos ou contar com atendimento em casa economiza tempo.',

  mobilidade:
    'Diadema tem acesso direto às rodovias Anchieta e Imigrantes e proximidade do Porto de Santos e dos aeroportos de Congonhas e Guarulhos; a integração com a Grande São Paulo é feita por terminais de ônibus (o metrô mais próximo fica em São Paulo e São Bernardo).',

  corridas: [
    {
      nome: 'Mazza Run (Diadema)',
      descricao:
        'Corrida de rua local, com edições que movimentam a cena esportiva da cidade.',
    },
    {
      nome: 'Programação esportiva municipal',
      descricao:
        'Provas e atividades promovidas pela prefeitura, além de etapas de circuitos regionais do ABC.',
    },
  ],
  culturaEsportiva:
    'Diadema tem tradição esportiva comunitária forte, com parques públicos ativos — aulas gratuitas no Parque do Paço — e equipes representativas municipais. O esporte de bairro é parte importante da vida da cidade.',
  academias:
    'A oferta é dominada por academias de bairro que atendem a população densa e trabalhadora, complementadas pela boa malha de parques (Paço, Takebe e Ecológico do Eldorado) com áreas de treino.',

  destaquesFitness: [
    'Parque do Paço com aulas gratuitas (zumba, capoeira, tai chi) e pista de caminhada.',
    'Academia ao ar livre no Parque Takebe.',
    'Cidade muito densa, com alta demanda por atendimento próximo.',
    'Boa malha de parques verdes (Paço, Takebe e Ecológico do Eldorado).',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Cidade densa e industrial do ABC, Diadema tem boa rede de parques públicos e forte cultura de esporte comunitário. Um personal trainer ajuda a aproveitar o Parque do Paço e as academias de bairro com método — perto de casa, do trabalho ou no formato online.',

  vizinhas: ['sao-bernardo-do-campo-sp', 'santo-andre-sp', 'sao-paulo-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Diadema', url: 'https://cidades.ibge.gov.br/brasil/sp/diadema/panorama' },
    { nome: 'Prefeitura de Diadema', url: 'https://www.diadema.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
