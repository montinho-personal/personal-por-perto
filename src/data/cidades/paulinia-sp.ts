import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'paulinia-sp',
  nome: 'Paulínia',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'paulinense',
  tipo: 'cidade',

  populacao: 110537,
  populacaoAno: 2022,
  idhm: 0.795,
  idhmClasse: 'alto',
  altitudeM: 590,

  resumoEconomico:
    'Na Região Metropolitana de Campinas, Paulínia é um dos municípios mais ricos do país, com um dos maiores PIBs per capita. Sedia a Replan (Petrobras), a maior refinaria do Brasil, e o Polo Petroquímico de Paulínia, com alta arrecadação e renda.',

  mercado:
    'A população de alta renda ligada ao polo industrial e ao perfil corporativo gera demanda por academias de alto padrão e personal trainers, sobretudo nas áreas planejadas e condomínios.',

  bairrosNobres: ['Parque Brasil 500', 'João Aranha', 'Nova Paulínia', 'Cascata'],
  bairrosPopulares: ['Monte Alegre', 'Santa Terezinha', 'San Martin', 'Parque da Represa'],

  parques: [
    {
      nome: 'Parque Brasil 500',
      descricao:
        'Amplo complexo com sambódromo coberto, concha acústica e vias largas, usado para caminhada e corrida.',
    },
    {
      nome: 'Praças e ciclovias do entorno',
      descricao:
        'A cidade planejada tem vias largas e seguras, aproveitadas por corredores e ciclistas.',
    },
    {
      nome: 'Academias ao ar livre municipais',
      descricao:
        'Equipamentos públicos de ginástica distribuídos em praças, ampliando o acesso ao treino.',
    },
  ],
  ciclovias:
    'A cidade tem iniciativas de infraestrutura cicloviária; a extensão total ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude, típico da região de Campinas, com verões quentes e chuvosos e invernos secos e amenos.',
  climaTreino:
    'No verão, vale treinar nas manhãs ou no fim de tarde por causa do calor; a estação seca, de maio a setembro, é ótima para o treino ao ar livre.',

  mobilidade:
    'Paulínia tem acesso pelas rodovias Anhanguera (SP-330) e Bandeirantes (SP-348), eixos centrais da região metropolitana, com forte conexão a Campinas.',

  corridas: [
    {
      nome: 'Circuito Pague Menos — Etapa Paulínia',
      descricao:
        'Etapa noturna do circuito nacional de corridas realizada na cidade.',
    },
    {
      nome: 'Corrida de rua de Paulínia',
      descricao:
        'Provas de 5 km e 10 km e categorias infantis, parte do calendário esportivo local.',
    },
  ],
  culturaEsportiva:
    'A cidade tem alto investimento público e adesão crescente a corridas de rua, com grandes empresas estimulando programas de bem-estar corporativo.',
  academias:
    'A oferta inclui academias de alto padrão e estúdios, com público de renda elevada, complementada pelas vias largas e praças do município planejado.',

  destaquesFitness: [
    'Um dos maiores PIBs per capita do país — poder aquisitivo elevado para serviços premium.',
    'Polo industrial e corporativo, com oportunidade em wellness e personal para colaboradores.',
    'Bairro planejado Parque Brasil 500, com vias largas e seguras para treino outdoor.',
    'Entrada no circuito nacional de corridas, com base de corredores em expansão.',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 190,
    mensalMin: 400,
    mensalMax: 1100,
    onlineMin: 190,
    onlineMax: 470,
  },

  conclusao:
    'Cidade-refinaria de altíssima renda na RM de Campinas, Paulínia tem público premium e infraestrutura planejada. Um personal trainer ajuda a aproveitar o Parque Brasil 500 com método, com forte espaço para atendimento premium e corporativo.',

  vizinhas: ['campinas-sp', 'americana-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Paulínia', url: 'https://cidades.ibge.gov.br/brasil/sp/paulinia/panorama' },
    { nome: 'Prefeitura de Paulínia', url: 'https://www.paulinia.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
