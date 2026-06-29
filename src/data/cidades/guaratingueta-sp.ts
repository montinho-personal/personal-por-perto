import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'guaratingueta-sp',
  nome: 'Guaratinguetá',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'guaratinguetaense',
  tipo: 'cidade',

  populacao: 118044,
  populacaoAno: 2022,
  idhm: 0.798,
  idhmClasse: 'alto',
  altitudeM: 530,

  resumoEconomico:
    'Cidade média do lado paulista do Vale do Paraíba, às margens do Rio Paraíba do Sul e cortada pela Via Dutra (BR-116), Guaratinguetá tem economia diversificada, com indústria, comércio e serviços. O destaque é o setor químico, com o complexo da BASF instalado no município, e a cidade concentra saúde, educação e comércio que atendem também municípios vizinhos do Vale.',

  mercado:
    'O mercado fitness é típico de cidade média do interior paulista: academias de bairro, estúdios de treinamento funcional e personal trainers atuando em academia e em atendimento domiciliar. A presença militar (Escola de Especialistas de Aeronáutica) e a tradição esportiva reforçam a demanda por preparo físico e treino orientado.',

  bairrosNobres: ['Pedregulho', 'Campo do Galvão', 'Vila Paraíba'],
  bairrosPopulares: ['Jardim do Vale', 'Pingo de Ouro', 'Gomeral'],

  parques: [
    {
      nome: 'Orla do Rio Paraíba do Sul',
      descricao:
        'Margens do principal rio do Vale do Paraíba, com áreas para caminhada e atividade ao ar livre em meio ao cenário fluvial que corta a cidade.',
    },
    {
      nome: 'Praça Conselheiro Rodrigues Alves',
      descricao:
        'Praça central arborizada no Centro histórico, ponto tradicional de encontro e de caminhada leve no coração da cidade.',
    },
    {
      nome: 'Santuário de Frei Galvão',
      descricao:
        'Entorno do santuário dedicado a Santo Antônio de Sant’Anna Galvão, primeiro santo nascido no Brasil, natural de Guaratinguetá, atrativo religioso e área de caminhada contemplativa.',
    },
  ],
  ciclovias:
    'A cidade tem trechos cicláveis e vias planas no entorno do Centro e da orla do Rio Paraíba do Sul, mais voltados ao deslocamento e ao lazer do que a uma malha cicloviária extensa.',

  clima:
    'O clima é tropical de altitude (cerca de 530 m), com verão quente e chuvoso e inverno ameno e mais seco; as temperaturas no ano costumam variar de cerca de 12 °C a 31 °C.',
  climaTreino:
    'No verão chuvoso, vale priorizar o treino ao ar livre no início da manhã ou no fim de tarde; o inverno seco e ameno abre boas janelas para correr e caminhar na orla.',

  mobilidade:
    'Guaratinguetá é cortada pela Rodovia Presidente Dutra (BR-116), eixo São Paulo–Rio, e fica próxima de Aparecida; o relevo plano no entorno do rio favorece caminhadas e pedaladas de deslocamento.',

  corridas: [
    {
      nome: 'Corrida 9 de Julho',
      descricao:
        'Prova de rua tradicional da cidade, com percursos de cerca de 10 km e 5 km, parte do calendário esportivo municipal.',
    },
    {
      nome: 'Provas de rua no Vale do Paraíba',
      descricao:
        'A cidade participa do circuito regional de corridas de rua do Vale, com etapas e provas pedestres realizadas ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é influenciada pela forte presença militar — a Escola de Especialistas de Aeronáutica (EEAR), em Guaratinguetá, é um dos maiores complexos de ensino técnico-militar da América do Sul — e pela proximidade da AMAN (Academia Militar das Agulhas Negras), em Resende, na mesma região do Vale, ambiente que valoriza preparo físico, corrida e disciplina de treino.',
  academias:
    'A oferta reúne academias de bairro, estúdios de treinamento funcional e personal trainers, complementada por espaços públicos gratuitos como a orla do Rio Paraíba do Sul e as praças do Centro para caminhada e corrida.',

  destaquesFitness: [
    'Orla do Rio Paraíba do Sul para caminhada e corrida ao ar livre.',
    'Forte cultura militar e esportiva (EEAR na cidade; AMAN na região do Vale).',
    'Calendário de corridas de rua, como a tradicional Corrida 9 de Julho.',
    'Relevo plano no entorno do rio, favorável a caminhada e pedalada.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade média e histórica do Vale do Paraíba, terra de Frei Galvão e marcada pela tradição militar, Guaratinguetá une orla do Rio Paraíba do Sul, praças centrais e cena de corrida de rua. Um personal trainer ajuda a aproveitar a orla e os espaços públicos com método, em academia ou em atendimento domiciliar, conciliando rotina e treino consistente.',

  vizinhas: ['taubate-sp', 'sao-jose-dos-campos-sp', 'pindamonhangaba-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Guaratinguetá', url: 'https://cidades.ibge.gov.br/brasil/sp/guaratingueta/panorama' },
    { nome: 'Prefeitura da Estância Turística de Guaratinguetá', url: 'https://guaratingueta.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
