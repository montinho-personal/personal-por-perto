import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'jatai-go',
  nome: 'Jataí',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'jataiense',
  tipo: 'cidade',

  populacao: 105729,
  populacaoAno: 2022,
  idhm: 0.757,
  idhmClasse: 'alto',
  altitudeM: 696,

  resumoEconomico:
    'Principal cidade do sudoeste de Goiás e um dos maiores polos do agronegócio do estado, Jataí é referência em grãos (soja e milho) e leite, sendo apontada como capital goiana da produção de grãos. Tem forte agroindústria e é polo universitário com a UFJ.',

  mercado:
    'Cidade universitária (UFJ) com público jovem e renda ligada ao agro, sustenta rede consolidada de academias e boxes de crossfit — ambiente favorável a personal trainers e treino funcional.',

  bairrosNobres: ['Setor Oeste', 'Setor Aeroporto', 'Cidade Jardim', 'Residencial Hamoa'],
  bairrosPopulares: ['Vila Fátima', 'Cohab', 'Bela Vista', 'Setor Antena'],

  parques: [
    {
      nome: 'Parque Ecológico JK (Lago JK)',
      descricao:
        'Lago central com complexo esportivo, quadras e pista de skate.',
    },
    {
      nome: 'Parque Ecológico Diacuí',
      descricao:
        'Espaço urbano para caminhadas, piquenique e atividades ao ar livre.',
    },
    {
      nome: 'Lago Bom Sucesso',
      descricao:
        'A cerca de 10 km da cidade, tem áreas para esportes, pesca e prainhas.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical do cerrado, com estação chuvosa (de outubro a abril) e seca (de maio a setembro), com inverno seco e verão quente.',
  climaTreino:
    'O calor e a radiação intensos no verão e o ar muito seco no inverno recomendam treinar no início da manhã ou no fim de tarde, com hidratação reforçada.',

  mobilidade:
    'Jataí fica no cruzamento das BR-364, BR-158 e BR-060, sendo importante entroncamento do agronegócio, com anel viário recente.',

  corridas: [
    {
      nome: 'Corrida da SMT',
      descricao:
        'Prova de 6 km organizada pela prefeitura, com cunho solidário (doação de leite).',
    },
    {
      nome: 'Calendário local de corridas',
      descricao:
        'Provas de rua recorrentes que integram o calendário esportivo da cidade.',
    },
  ],
  culturaEsportiva:
    'Cidade com forte presença universitária e investimento público em complexos esportivos e parques, com corridas de rua municipais e academias e crossfit em expansão.',
  academias:
    'A oferta reúne academias e boxes de crossfit, com público jovem e universitário (UFJ), complementada pelos parques com pista e estrutura esportiva.',

  destaquesFitness: [
    'Público jovem e universitário (UFJ) somado à renda do agro.',
    'Parques com pista e estrutura esportiva (JK, Diacuí) para treino ao ar livre.',
    'Rede de academias e boxes de crossfit consolidada.',
    'Corrida de rua municipal recorrente.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 420,
  },

  conclusao:
    'Capital goiana dos grãos e cidade universitária, Jataí une renda do agro, público jovem e bons parques. Um personal trainer encontra aqui um mercado aquecido, ideal para treino presencial e online, ajustando os horários ao clima do cerrado.',

  vizinhas: ['rio-verde-go', 'goiania-go'],

  fontes: [
    { nome: 'IBGE Cidades — Jataí', url: 'https://cidades.ibge.gov.br/brasil/go/jatai/panorama' },
    { nome: 'Prefeitura de Jataí', url: 'https://www.jatai.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
