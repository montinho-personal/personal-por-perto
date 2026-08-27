import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'avare-sp',
  nome: 'Avaré',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'avareense',
  tipo: 'cidade',

  populacao: 92805,
  populacaoAno: 2022,
  idhm: 0.767,
  idhmClasse: 'alto',
  altitudeM: 766,

  resumoEconomico:
    'Estância turística do sudoeste paulista, Avaré tem na Represa de Jurumirim — a maior do estado de São Paulo, com cerca de 100 km de extensão — seu principal cartão-postal e motor econômico. O turismo náutico, a pesca esportiva e o lazer lacustre convivem com uma base de agropecuária, comércio e serviços que atende a toda a microrregião.',

  mercado:
    'A vocação turística e o fluxo de visitantes ao longo do ano sustentam uma demanda local por atividade física e bem-estar, somada a moradores que buscam treino para aproveitar a orla da represa, as praias de água doce e o calendário de eventos esportivos da cidade.',

  bairrosNobres: ['Centro', 'Brabância', 'Jardim Europa', 'Costa Azul'],
  bairrosPopulares: ['Camargo', 'Brasil Novo', 'Jardim Paineiras', 'Bairro Alto'],

  parques: [
    {
      nome: 'Represa de Jurumirim',
      descricao:
        'Maior represa do estado de São Paulo, a cerca de 20 km do centro, com praias de água doce, ilhas e infraestrutura para esportes náuticos, caminhada e ciclismo na orla.',
    },
    {
      nome: 'Largo São João',
      descricao:
        'Praça arborizada no centro, com coreto e monumentos, usada para caminhadas, encontros e eventos ao ar livre.',
    },
    {
      nome: 'Camping Municipal Costa Azul',
      descricao:
        'Área de lazer às margens da represa, com cerca de 1 km de praia, espaço para caminhada e contato com a natureza, administrada pelo município.',
    },
  ],
  ciclovias:
    'A cidade conta com trechos de ciclovia e ciclofaixa, com destaque para os percursos junto à orla da represa; a extensão total da malha não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude (cerca de 766 m), com verões quentes e chuvosos e invernos amenos e mais secos.',
  climaTreino:
    'As manhãs e o fim de tarde são as melhores janelas para o treino ao ar livre; o verão chuvoso pede atenção ao horário e a hidratação, e o inverno seco favorece corrida e caminhada na orla.',

  mobilidade:
    'Avaré é cortada pela Rodovia Presidente Castello Branco (SP-280), principal eixo de ligação com Sorocaba e a capital, o que facilita o acesso de visitantes e o deslocamento na região.',

  corridas: [
    {
      nome: 'Corrida e Caminhada da AREA',
      descricao:
        'Prova de rua tradicional organizada na cidade com percursos de corrida e caminhada e participação da comunidade local.',
    },
    {
      nome: 'Provas de rua do calendário municipal',
      descricao:
        'Avaré recebe corridas e caminhadas ao longo do ano, frequentemente associadas a datas e eventos da estância turística.',
    },
  ],
  culturaEsportiva:
    'A relação com a água é central: a Represa de Jurumirim consolida Avaré como polo de turismo náutico e pesca esportiva, e a orla serve de cenário para corrida, caminhada e ciclismo. As provas de rua locais reúnem uma comunidade de praticantes ativa.',
  academias:
    'A oferta reúne academias e estúdios no centro e nos bairros, complementada pelos espaços ao ar livre da orla da represa, do Largo São João e do Camping Municipal Costa Azul.',

  academiasProximas: [
    { nome: 'Smart Fit Avaré', detalhe: 'na Av. Prefeito Paulo Novais, no Centro' },
    { nome: 'Ph.D Sports Avaré', detalhe: 'no Jardim Brabância' },
    { nome: 'Arena Academia', detalhe: 'na Rua Lineu Prestes, na Vila Maria' },
  ],
  academiasVerificadasEm: '2026-08-27',

  destaquesFitness: [
    'Orla da Represa de Jurumirim, com praias de água doce e cenário para treino outdoor.',
    'Vocação náutica e de pesca esportiva, que atrai público para atividades ao ar livre.',
    'Clima tropical de altitude, com manhãs e fins de tarde agradáveis para correr.',
    'Acesso direto pela Rodovia Castello Branco (SP-280), facilitando o fluxo de visitantes.',
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
    'Estância turística às margens da maior represa de São Paulo, Avaré une um cenário privilegiado de água doce a um clima de altitude favorável ao treino. Um personal trainer ajuda morador e visitante a aproveitar a orla de Jurumirim e os espaços da cidade com método e segurança.',

  vizinhas: ['botucatu-sp', 'itapetininga-sp', 'marilia-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Avaré', url: 'https://cidades.ibge.gov.br/brasil/sp/avare/panorama' },
    { nome: 'Prefeitura da Estância Turística de Avaré', url: 'https://www.avare.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/3504503' },
  ],
  atualizadoEm: '2026-08-27',
  capaArte: {
    src: '/capas-cidade/avare-sp.webp',
    w: 1200,
    h: 849,
    alt:
      'Personal trainer em Avaré (SP) em arte de treino de força com halteres, no clima urbano da Estância Turística paulista — Personal por Perto',
    legenda:
      'Treino personalizado em Avaré: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
};
