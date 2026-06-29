import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'valinhos-sp',
  nome: 'Valinhos',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'valinhense',
  tipo: 'cidade',

  populacao: 126373,
  populacaoAno: 2022,
  idhm: 0.819,
  idhmClasse: 'muito alto',
  altitudeM: 660,

  resumoEconomico:
    'Integrante da Região Metropolitana de Campinas, Valinhos tem alta renda per capita e forte presença de condomínios horizontais de alto padrão. É a "Capital Nacional do Figo Roxo", com centenas de chácaras produtoras e liderança também em goiaba, somando produção agrícola de alto valor a um parque industrial diversificado.',

  mercado:
    'O público de alta renda concentrado em condomínios e no eixo do Jardim Paiquerê sustenta academias premium, estúdios e personal training, com perfil favorável a treino personalizado e domiciliar.',

  bairrosNobres: ['Jardim Paiquerê', 'Parque Terranova', 'Castelo', 'Village Sans Souci'],
  bairrosPopulares: ['Macuco', 'Reforma Agrária', 'Capivari', 'Jardim do Lago'],

  parques: [
    {
      nome: 'Parque da Cidade',
      descricao:
        'Tem pistas revitalizadas de caminhada, corrida e ciclismo, em ampla área de lazer.',
    },
    {
      nome: 'Parque dos Lagos',
      descricao:
        'Ampla área verde com pista de caminhada.',
    },
    {
      nome: 'Parque Monsenhor Bruno Nardini',
      descricao:
        'Sede de corridas de rua da cidade, com a cidade somando sete academias ao ar livre em parques e praças.',
    },
  ],
  ciclovias:
    'Há trilhas de ciclismo no Parque da Cidade; a extensão da malha cicloviária urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical de altitude, com média em torno de 20,6 °C, noites frescas, inverno seco e verão chuvoso.',
  climaTreino:
    'As condições são excelentes para o treino ao ar livre quase o ano todo; o verão exige hidratação e horários mais frescos.',

  mobilidade:
    'Valinhos é cortada pela Rodovia Anhanguera (SP-330) e pela Rodovia Dom Pedro I (SP-65), com fácil acesso a Campinas e ao Aeroporto de Viracopos.',

  corridas: [
    {
      nome: 'Circuito Cidades Paulistas — Etapa Valinhos',
      descricao:
        'Corrida e caminhada de 5 km e 10 km no Parque Monsenhor Bruno Nardini.',
    },
    {
      nome: 'Circuito Transformar — Etapa Valinhos',
      descricao:
        'Provas de 5 km e 10 km no mesmo parque, com cunho solidário.',
    },
  ],
  culturaEsportiva:
    'A prefeitura declara a cidade polo de corridas de rua, e a tradição de clubes reforça a cultura de esporte e bem-estar entre o público de alta renda.',
  academias:
    'A oferta é premium — academias, estúdios e personal training —, complementada por uma rede de sete academias ao ar livre distribuídas pela cidade.',

  destaquesFitness: [
    'Público premium e condomínios de alto padrão, que favorecem personal training particular e domiciliar.',
    'Calendário ativo de corridas de rua gratuitas e solidárias.',
    'Rede de sete academias ao ar livre distribuídas em vários bairros.',
    'Clima de altitude com noites frescas, ideal para treino outdoor.',
  ],

  precos: {
    avulsaMin: 90,
    avulsaMax: 220,
    mensalMin: 450,
    mensalMax: 1300,
    onlineMin: 200,
    onlineMax: 520,
  },

  conclusao:
    'Uma das cidades de maior IDHM e renda da RM de Campinas, Valinhos tem público premium e ótima estrutura para treino. Um personal trainer encontra aqui forte demanda por atendimento personalizado e domiciliar, num clima de altitude favorável.',

  vizinhas: ['campinas-sp', 'vinhedo-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Valinhos', url: 'https://cidades.ibge.gov.br/brasil/sp/valinhos/panorama' },
    { nome: 'Prefeitura de Valinhos', url: 'https://www.valinhos.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
