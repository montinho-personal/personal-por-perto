import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'catalao-go',
  nome: 'Catalão',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'catalano',
  tipo: 'cidade',

  populacao: 114427,
  populacaoAno: 2022,
  idhm: 0.766,
  idhmClasse: 'alto',
  altitudeM: 840,

  resumoEconomico:
    'Polo industrial e de mineração do sudeste de Goiás e uma das cidades mais ricas do estado, Catalão tem forte indústria automotiva no distrito mineroindustrial (com a HPE Automotores e a John Deere) e mineração de nióbio e fosfato. É também importante polo universitário, com a UFCAT.',

  mercado:
    'A renda industrial elevada e a grande população universitária jovem sustentam demanda por academias e estúdios, com público de poder aquisitivo acima da média goiana.',

  bairrosNobres: ['Setor Central', 'Setor Universitário', 'Residencial Veredas dos Buritis', 'Castelo Branco'],
  bairrosPopulares: ['Santo Antônio', 'São Francisco', 'Nossa Senhora de Fátima', 'Pio Gomes'],

  parques: [
    {
      nome: 'Morro da Saudade',
      descricao:
        'Conhecido como Morro das Três Cruzes, tem quadra de esportes coberta e pista de corrida.',
    },
    {
      nome: 'Parque Veredas dos Buritis',
      descricao:
        'Área de cerrado preservado para caminhadas e atividades ao ar livre.',
    },
    {
      nome: 'Praças do Centro',
      descricao:
        'Praças arborizadas para caminhada e lazer, com a Lagoa do Pirapitinga como cartão-postal urbano.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude, com estação chuvosa (de outubro a abril) e seca acentuada (de maio a setembro).',
  climaTreino:
    'O período seco traz baixa umidade — atenção à hidratação e às vias respiratórias; o clima de altitude favorece o treino ao ar livre boa parte do ano.',

  mobilidade:
    'Catalão é servida pela BR-050 (ligação com Uberlândia e Brasília) e pela GO-330, em duplicação.',

  corridas: [
    {
      nome: 'Run Duo Catalão',
      descricao:
        'Corrida de rua com apoio da prefeitura, reunindo iniciantes e experientes.',
    },
    {
      nome: 'Corridas da UFCAT',
      descricao:
        'Provas de 5 km no calendário local, organizadas pela universidade e por operadoras de corrida.',
    },
  ],
  culturaEsportiva:
    'Cidade jovem e universitária, Catalão tem movimentação regular de corrida de rua com apoio municipal e da UFCAT, e incentivo público ao esporte.',
  academias:
    'A oferta reúne academias e estúdios, com renda industrial e grande público universitário, complementada pelo Morro da Saudade e pelo Parque Veredas dos Buritis.',

  destaquesFitness: [
    'Renda industrial e grande público universitário (UFCAT) — mercado fitness aquecido.',
    'Morro da Saudade, com pista de corrida e quadra coberta (treino mesmo na chuva).',
    'Parque Veredas dos Buritis para corrida e caminhada no cerrado.',
    'Calendário regular de corridas de rua (Run Duo, UFCAT).',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 155,
    mensalMin: 340,
    mensalMax: 920,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Polo industrial e universitário do sudeste goiano, Catalão une renda alta, público jovem e clima de altitude favorável. Um personal trainer ajuda a aproveitar o Morro da Saudade e os parques com método, com atenção à hidratação na seca do cerrado.',

  vizinhas: ['goiania-go', 'uberlandia-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Catalão', url: 'https://cidades.ibge.gov.br/brasil/go/catalao/panorama' },
    { nome: 'Prefeitura de Catalão', url: 'https://www.catalao.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
