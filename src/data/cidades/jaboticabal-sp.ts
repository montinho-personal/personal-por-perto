import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'jaboticabal-sp',
  nome: 'Jaboticabal',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'jaboticabalense',
  tipo: 'cidade',

  populacao: 71821,
  populacaoAno: 2022,
  idhm: 0.778,
  idhmClasse: 'alto',
  altitudeM: 607,

  resumoEconomico:
    'Conhecida como a "Terra das Rosas", Jaboticabal é um polo agroindustrial do interior paulista, na região de Ribeirão Preto. A economia gira em torno do agronegócio, com destaque para a cana-de-açúcar e o setor sucroenergético, a citricultura e a pecuária, além de forte tradição em pesquisa e ensino superior, ancorada no campus da Unesp.',

  mercado:
    'A presença do campus da Unesp, com cursos de Ciências Agrárias e Medicina Veterinária, sustenta uma população universitária e qualificada atenta à saúde. Em uma cidade média do interior, o mercado fitness combina academias, estúdios e personal trainers, com atendimento que tende a ser próximo e personalizado.',

  bairrosNobres: ['Jardim Nova Aparecida', 'Jardim São Marcos', 'Jardim Santa Rita', 'Recreio dos Bandeirantes'],
  bairrosPopulares: ['Jardim Paraíso', 'Jardim Kennedy', 'Jardim Guanabara', 'Vila Serra'],

  parques: [
    {
      nome: 'Bosque Municipal Francisco Buck',
      descricao:
        'Área verde de Mata Atlântica com mais de 70 mil m² de vegetação preservada, trilhas e ambiente arborizado, procurada para caminhadas e contato com a natureza no centro da cidade.',
    },
    {
      nome: 'Lago Municipal Carlos Rodrigues Serra',
      descricao:
        'Refúgio tranquilo no coração de Jaboticabal, com entorno usado para caminhadas, piqueniques e atividades ao ar livre junto à água.',
    },
    {
      nome: 'Campus da Unesp (FCAV)',
      descricao:
        'Ampla área verde da Faculdade de Ciências Agrárias e Veterinárias, com vias arborizadas e espaços abertos usados por estudantes e moradores para caminhada e corrida.',
    },
  ],
  ciclovias:
    'A cidade conta com trechos de ciclovia e ciclofaixa em algumas vias urbanas; a extensão total da malha cicloviária não é divulgada em fonte oficial consolidada.',

  clima:
    'Jaboticabal tem clima tropical de altitude (em torno de 607 m), com verões quentes e chuvosos e invernos secos e amenos, típico do interior paulista da região de Ribeirão Preto.',
  climaTreino:
    'O calor e a umidade do verão pedem hidratação e horários estratégicos, como o início da manhã e o fim da tarde; o período seco de inverno, mais ameno, é o mais confortável para treino ao ar livre.',

  mobilidade:
    'Jaboticabal é cortada pela Rodovia Carlos Tonanni (SP-333) e fica próxima à Rodovia Brigadeiro Faria Lima (SP-326), com Ribeirão Preto a cerca de 70 km e a capital paulista a aproximadamente 350 km.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário municipal',
      descricao:
        'Provas pedestres e caminhadas organizadas ao longo do ano com apoio da prefeitura, integrando o calendário esportivo da cidade.',
    },
    {
      nome: 'Eventos esportivos universitários',
      descricao:
        'Atividades e competições ligadas à comunidade da Unesp movimentam corredores e praticantes no campus e no entorno.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva jaboticabalense é marcada pela presença universitária da Unesp, que reúne jovens praticantes, e por uma tradição de atividades comunitárias em praças, no Bosque Municipal e no entorno do Lago Municipal.',
  academias:
    'A oferta reúne academias de bairro, estúdios e personal trainers, complementada por áreas públicas como o Bosque Municipal Francisco Buck e o entorno do Lago Municipal para treino ao ar livre.',

  destaquesFitness: [
    'Bosque Municipal Francisco Buck e Lago Municipal como espaços públicos para caminhada e corrida.',
    'Campus arborizado da Unesp, usado por estudantes e moradores para atividades ao ar livre.',
    'Cidade média do interior, com atendimento de personal trainer tipicamente próximo e personalizado.',
    'Inverno seco e ameno favorável ao treino ao ar livre na maior parte do ano.',
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
    'Terra das Rosas e polo agro do interior paulista, Jaboticabal une tradição universitária, áreas verdes e a tranquilidade de uma cidade média. Um personal trainer ajuda a aproveitar espaços como o Bosque Municipal e o entorno do Lago com método, ajustando os horários ao calor do verão.',

  vizinhas: ['ribeirao-preto-sp', 'araraquara-sp', 'sertaozinho-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Jaboticabal', url: 'https://cidades.ibge.gov.br/brasil/sp/jaboticabal/panorama' },
    { nome: 'Prefeitura de Jaboticabal', url: 'https://www.jaboticabal.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
