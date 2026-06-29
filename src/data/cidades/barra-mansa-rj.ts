import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'barra-mansa-rj',
  nome: 'Barra Mansa',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'barra-mansense',
  tipo: 'cidade',

  populacao: 169899,
  populacaoAno: 2022,
  idhm: 0.730,
  idhmClasse: 'alto',
  altitudeM: 381,

  resumoEconomico:
    'No Sul Fluminense, na região do Médio Paraíba (vale do Rio Paraíba do Sul) e vizinha de Volta Redonda, Barra Mansa tem tradição siderúrgica — a Usina Barra Mansa, de aços longos —, com presença industrial relevante. Hoje a economia também se apoia fortemente em comércio e serviços.',

  mercado:
    'Cidade de médio porte, tem mercado consolidado de academias e equipamentos, sustentado por uma população de cerca de 170 mil habitantes e por uma cultura de corrida de rua organizada em circuitos.',

  bairrosNobres: ['Centro', 'Ano Bom', 'Santa Rosa', 'Jardim Boa Vista'],
  bairrosPopulares: ['Cotiara', 'Roma', 'São Silvestre', 'Floriano'],

  parques: [
    {
      nome: 'Parque da Cidade',
      descricao:
        'No centro, tem pista de caminhada, pista de skate, quadra, campo de grama, lago e anfiteatro, às margens do Rio Paraíba do Sul.',
    },
    {
      nome: 'Quadra de Areia Sérgio Coelho dos Santos',
      descricao:
        'No bairro Roberto Silveira, é espaço esportivo às margens do Rio Paraíba do Sul.',
    },
    {
      nome: 'Margens do Rio Paraíba do Sul',
      descricao:
        'Área de lazer junto ao rio, integrada ao Parque da Cidade, para caminhada e atividade ao ar livre.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical úmido com influência de altitude e da Serra do Mar, com média anual em torno de 23 °C, verão quente e chuvoso.',
  climaTreino:
    'Os verões quentes pedem treino cedo ou no fim do dia; o inverno ameno favorece a atividade ao ar livre.',

  mobilidade:
    'O eixo central é a Via Dutra (BR-116), que corta a área urbana, com obras de reconfiguração do trecho urbano previstas para os próximos anos.',

  corridas: [
    {
      nome: 'Circuito Economize Run — Etapa Barra Mansa',
      descricao:
        'Corrida de rua de 5 km pelas vias principais da cidade.',
    },
    {
      nome: 'Circuito Rural de Corridas e Caminhadas',
      descricao:
        'Circuito de várias etapas nos distritos rurais, reunindo centenas de atletas por prova.',
    },
  ],
  culturaEsportiva:
    'A cidade tem tradição em corrida de rua, com circuitos urbano e rural organizados pela prefeitura, e esportes de quadra; o Parque da Cidade é o principal polo de lazer e atividade física.',
  academias:
    'A oferta reúne academias e estúdios consolidados, complementada pelo Parque da Cidade e pelas margens do Rio Paraíba do Sul.',

  destaquesFitness: [
    'Parque da Cidade — pista de caminhada, skate, quadra e campo às margens do Paraíba do Sul.',
    'Cena ativa de corrida de rua (Circuito Economize Run, Circuito Rural).',
    'Margens do Rio Paraíba do Sul como eixo de lazer e atividade física.',
    'Cidade de médio porte com mercado de academias consolidado.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 155,
    mensalMin: 330,
    mensalMax: 900,
    onlineMin: 160,
    onlineMax: 420,
  },

  conclusao:
    'Polo siderúrgico do Médio Paraíba, Barra Mansa tem no Parque da Cidade e nas margens do Paraíba do Sul seus principais espaços de treino. Um personal trainer ajuda a aproveitá-los com método, com uma cena de corrida de rua ativa para se inspirar.',

  vizinhas: ['volta-redonda-rj', 'resende-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Barra Mansa', url: 'https://cidades.ibge.gov.br/brasil/rj/barra-mansa/panorama' },
    { nome: 'Prefeitura de Barra Mansa', url: 'https://www.barramansa.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
