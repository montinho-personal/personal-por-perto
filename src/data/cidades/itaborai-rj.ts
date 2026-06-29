import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itaborai-rj',
  nome: 'Itaboraí',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'itaboraiense',
  tipo: 'cidade',

  populacao: 224267,
  populacaoAno: 2022,
  idhm: 0.693,
  idhmClasse: 'médio',
  altitudeM: 61,

  resumoEconomico:
    'Município da Região Metropolitana do Rio, na porção leste, próximo à Baía de Guanabara, Itaboraí é sede do Polo GasLub (antigo Comperj), o Complexo de Energias Boaventura da Petrobras — a maior unidade de processamento de gás natural do país. A cidade vive uma inversão econômica, deixando de ser dormitório para se tornar polo regional.',

  mercado:
    'O mercado fitness está em crescimento, acompanhando a expansão urbana, com presença de redes no Centro e academias locais em vários bairros.',

  bairrosNobres: ['Centro', 'Outeiro das Pedras', 'Venda das Pedras', 'Rio Várzea'],
  bairrosPopulares: ['Manilha', 'Reta Nova', 'Joaquim de Oliveira', 'Sambaetiba'],

  parques: [
    {
      nome: 'Academias da Saúde',
      descricao:
        'Programa municipal com instalações que reúnem quadra poliesportiva, pista de caminhada e playground em vários bairros.',
    },
    {
      nome: 'Praça Marechal Floriano Peixoto (Praça da Matriz)',
      descricao:
        'No centro histórico, é espaço público usado para caminhada e ponto de eventos esportivos.',
    },
    {
      nome: 'Pontos do Projeto Transformar',
      descricao:
        'Rede de espaços públicos gratuitos de esporte e ginástica espalhados pelos bairros.',
    },
  ],
  ciclovias:
    'Uma ciclovia estruturada ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente e úmido, de baixada litorânea, com verões quentes.',
  climaTreino:
    'O calor intenso favorece os treinos cedo pela manhã ou ao entardecer, com hidratação reforçada.',

  mobilidade:
    'Itaboraí é servida pela BR-101 e pela RJ-116, eixos que conectam à Baía de Guanabara, ao Rio e à região serrana e leste fluminense.',

  corridas: [
    {
      nome: 'Ita Night Run',
      descricao:
        'Primeira corrida noturna da cidade, com milhares de inscritos e percurso de 5 km.',
    },
    {
      nome: 'Corrida e Caminhada de Aniversário da Cidade',
      descricao:
        'Evento oficial da prefeitura em celebração ao aniversário do município.',
    },
  ],
  culturaEsportiva:
    'Há uma cultura crescente de corrida de rua (a Ita Night Run reuniu mais de oito mil participantes) e forte aposta pública em esporte e saúde, via Academias da Saúde e o Projeto Transformar.',
  academias:
    'A oferta privada (redes e academias locais) é complementada por uma rede pública gratuita de Academias da Saúde com pista e quadra em vários bairros.',

  destaquesFitness: [
    'Crescimento econômico e populacional (efeito Polo GasLub), abrindo novo mercado de alunos.',
    'Rede pública gratuita de Academias da Saúde com pista e quadra em vários bairros.',
    'Redes e academias locais consolidando a oferta privada.',
    'Calendário de corridas em ascensão (Ita Night Run como destaque).',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 145,
    mensalMin: 300,
    mensalMax: 800,
    onlineMin: 150,
    onlineMax: 400,
  },

  conclusao:
    'Polo do gás natural na região leste do Rio, Itaboraí vive uma virada econômica que aquece o mercado de alunos. Um personal trainer ajuda a aproveitar a rede pública de Academias da Saúde com método, ajustando horários e hidratação ao calor da baixada.',

  vizinhas: ['sao-goncalo-rj', 'niteroi-rj', 'rio-de-janeiro-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Itaboraí', url: 'https://cidades.ibge.gov.br/brasil/rj/itaborai/panorama' },
    { nome: 'Prefeitura de Itaboraí', url: 'https://www.itaborai.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
