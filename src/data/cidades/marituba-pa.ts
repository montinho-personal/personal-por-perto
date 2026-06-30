import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'marituba-pa',
  nome: 'Marituba',
  uf: 'PA',
  estado: 'Pará',
  estadoSlug: 'para',
  regiao: 'Norte',
  gentilico: 'maritubense',
  tipo: 'cidade',

  populacao: 111785,
  populacaoAno: 2022,
  idhm: 0.676,
  idhmClasse: 'médio',
  altitudeM: 18,

  resumoEconomico:
    'Município jovem, emancipado em 1994, Marituba integra a Região Metropolitana de Belém e está conurbada com a capital e com Ananindeua ao longo da BR-316. A economia é dominada por serviços, comércio e administração pública, com peso do transporte rodoviário de cargas pela posição estratégica na rodovia. Foi por muito tempo cidade-dormitório da Grande Belém e vive crescimento populacional acelerado.',

  mercado:
    'Por ser uma cidade em rápida expansão e ainda em estruturação urbana, a oferta de academias em Marituba concentra-se ao longo da BR-316 e no Centro. O personal trainer encontra demanda crescente de uma população jovem de classe média que se forma com a chegada de novos condomínios e do BRT metropolitano.',

  bairrosNobres: ['Centro', 'Almir Gabriel', 'Nova Marituba', 'Boa Vista'],
  bairrosPopulares: ['Decouville', 'Uriboca', 'Santa Lúcia', 'Canaã'],

  parques: [
    {
      nome: 'Praça do Bairro Almir Gabriel',
      descricao:
        'Espaço público revitalizado no bairro Almir Gabriel, com área de lazer e convivência usada para caminhadas e atividades comunitárias.',
    },
    {
      nome: 'Praça do Centro',
      descricao:
        'No bairro mais antigo do município, é ponto de encontro e referência para passeios e atividades ao ar livre no coração de Marituba.',
    },
    {
      nome: 'Entorno do Rio Uriboca',
      descricao:
        'Área verde junto a um dos principais cursos d’água da cidade, com vegetação remanescente e potencial para lazer ribeirinho.',
    },
  ],
  ciclovias:
    'A malha cicloviária ainda é incipiente e acompanha intervenções recentes na BR-316; não há extensão total divulgada em fonte oficial.',

  clima:
    'O clima é equatorial quente e úmido, típico da Região Metropolitana de Belém, com chuvas frequentes e temperaturas que variam em torno de 24 °C a 32 °C ao longo do ano.',
  climaTreino:
    'O calor e a alta umidade pedem treino ao ar livre logo no início da manhã ou no fim da tarde, com hidratação reforçada e atenção às pancadas de chuva, comuns mesmo fora do período mais chuvoso.',

  mobilidade:
    'Marituba é cortada pela BR-316, principal eixo de ligação com Belém e Ananindeua e com o interior do estado. A cidade é integrada ao BRT metropolitano, com terminal próprio, o que reforça a forte dependência do transporte rodoviário ao longo da rodovia.',

  corridas: [
    {
      nome: 'Corrida da SEMU',
      descricao:
        'Prova promovida pela Secretaria Municipal da Mulher, com percurso pelas ruas da cidade e incentivo à participação feminina e de pessoas com deficiência.',
    },
    {
      nome: 'Circuito metropolitano de corridas de rua',
      descricao:
        'Marituba participa do calendário esportivo da Grande Belém, com etapas e provas municipais que reúnem corredores da região metropolitana.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Marituba é jovem e em formação, ancorada em corridas de rua municipais com viés de inclusão social e na integração ao circuito esportivo da Região Metropolitana de Belém.',
  academias:
    'A oferta de academias acompanha o crescimento da cidade e se concentra ao longo da BR-316 e no Centro, complementada pelas praças revitalizadas e pelos espaços públicos dos bairros.',

  destaquesFitness: [
    'Praças revitalizadas, como a do bairro Almir Gabriel, para caminhada e treino ao ar livre.',
    'Posição na BR-316, eixo que concentra academias e serviços da cidade.',
    'Integração ao BRT metropolitano, com terminal próprio na cidade.',
    'Corridas de rua municipais com forte viés de inclusão.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Cidade jovem e em rápido crescimento da Região Metropolitana de Belém, Marituba ganha aos poucos praças, academias e eventos esportivos. Um personal trainer ajuda o morador a treinar com método nesse contexto em estruturação, aproveitando os espaços públicos e respeitando o calor equatorial.',

  vizinhas: ['belem-pa', 'ananindeua-pa', 'castanhal-pa'],

  fontes: [
    { nome: 'IBGE Cidades — Marituba', url: 'https://cidades.ibge.gov.br/brasil/pa/marituba/panorama' },
    { nome: 'Prefeitura de Marituba', url: 'https://marituba.pa.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
