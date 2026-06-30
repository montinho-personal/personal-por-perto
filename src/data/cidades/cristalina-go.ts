import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cristalina-go',
  nome: 'Cristalina',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'cristalinense',
  tipo: 'cidade',

  populacao: 62337,
  populacaoAno: 2022,
  idhm: 0.699,
  idhmClasse: 'médio',
  altitudeM: 1189,

  resumoEconomico:
    'No leste goiano, dentro do Entorno do Distrito Federal e a pouco mais de 130 km de Brasília pela BR-040, Cristalina apoia a economia em dois pilares fortes. O primeiro é o agronegócio irrigado: assentada sobre o Cerrado do Planalto Central, a cidade reúne centenas de pivôs centrais e figura entre as maiores áreas irrigadas do país, com produção de soja, milho, alho, feijão e hortaliças. O segundo é a tradição mineral que dá nome ao município — sobre a Serra dos Cristais ergueu-se a "Cidade dos Cristais", de garimpo histórico de quartzo e comércio de pedras que segue ativo até hoje.',

  mercado:
    'A renda do agronegócio irrigado sustenta uma classe média com bom poder de compra e demanda crescente por saúde e desempenho. O mercado de personal trainers é menor que o das grandes cidades goianas, porém estável, atendido por academias locais e por um calendário municipal de corridas de rua que aquece a procura por treino orientado. A altitude próxima de 1.200 m e o ar seco da estação seca pedem atenção à hidratação.',

  bairrosNobres: ['Centro', 'Setor Bela Vista', 'Setor Sul', 'Jardim Califórnia'],
  bairrosPopulares: ['Setor Leste', 'Setor Norte', 'Setor Oeste', 'Vila Rica'],

  parques: [
    {
      nome: 'Parque das Pedras (Pedra Chapéu do Sol)',
      descricao:
        'A cerca de 7 km do centro, abriga a Pedra Chapéu do Sol — bloco de quartzito de aproximadamente 340 toneladas equilibrado sobre uma base mínima — com trilhas curtas no Cerrado e inscrições rupestres nas proximidades.',
    },
    {
      nome: 'Serra dos Topázios',
      descricao:
        'Reserva com cerca de 500 hectares de Cerrado nativo, cachoeiras de águas claras e trilhas de até 2,5 km, voltada à caminhada e ao contato com a natureza.',
    },
    {
      nome: 'Praças e academias ao ar livre',
      descricao:
        'A cidade distribui equipamentos de ginástica em praças do Centro e dos setores, com a Praça da Liberdade como ponto de encontro e largada de eventos esportivos.',
    },
  ],
  ciclovias:
    'A malha cicloviária é incipiente e concentrada em trechos do Centro e de avenidas dos setores; o pedal de lazer se apoia mais nas estradas vicinais do Cerrado, no entorno das áreas irrigadas.',

  clima:
    'O clima é tropical de Cerrado, com verão chuvoso e inverno seco bem marcado; a altitude próxima de 1.189 m garante noites amenas mesmo nos meses mais quentes.',
  climaTreino:
    'Na estação seca (de maio a setembro), o ar muito seco e a poeira exigem hidratação reforçada e atenção a quem tem vias respiratórias sensíveis; em compensação, as noites frescas e a altitude favorecem treinos cardiovasculares no fim da tarde.',

  mobilidade:
    'A cidade é cortada pela BR-040 (eixo Brasília–Belo Horizonte) e pela BR-050 (rumo a Catalão e ao Triângulo Mineiro), o que a coloca como entroncamento rodoviário do leste goiano e facilita o acesso ao Distrito Federal, a pouco mais de 130 km.',

  corridas: [
    {
      nome: 'Corrida de Aniversário de Cristalina',
      descricao:
        'Prova promovida pela prefeitura nas comemorações do aniversário da cidade, com percursos de 3 km, 5 km e 10 km e largada na Praça da Liberdade, no centro.',
    },
    {
      nome: 'Corrida do Trabalhador',
      descricao:
        'Realizada em 1º de maio pela Secretaria Municipal de Esporte e Lazer, com percursos de 3 km e 5 km para diferentes níveis, reforçando o calendário esportivo local.',
    },
  ],
  culturaEsportiva:
    'A corrida de rua é o esporte que mais mobiliza a população, impulsionada pelas provas municipais de aniversário e do trabalhador, com largadas a partir da Praça da Liberdade. O turismo de natureza nas serras e cachoeiras do Cerrado também alimenta o gosto por caminhadas e trilhas.',
  academias:
    'A oferta reúne academias locais e estúdios de bairro, sustentados pela renda do agronegócio irrigado, complementados pelos equipamentos públicos de ginástica em praças dos setores.',

  destaquesFitness: [
    'Polo do agronegócio irrigado, com renda estável e demanda crescente por treino orientado.',
    'Calendário municipal de corridas (Aniversário, com 3/5/10 km, e Corrida do Trabalhador).',
    'Trilhas e caminhadas no Cerrado, da Serra dos Topázios ao Parque das Pedras.',
    'Altitude próxima de 1.200 m, com noites amenas que favorecem o treino cardiovascular.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 115,
    mensalMin: 280,
    mensalMax: 700,
    onlineMin: 130,
    onlineMax: 350,
  },

  conclusao:
    'Polo do agronegócio irrigado e capital dos cristais no leste goiano, Cristalina une renda estável, um calendário ativo de corridas e um Cerrado de serras e cachoeiras feito para caminhadas. Um personal trainer ajuda a aproveitar tudo isso com método, ajustando carga e hidratação ao ar seco e à altitude da cidade.',

  vizinhas: ['luziania-go', 'brasilia-df'],

  fontes: [
    { nome: 'IBGE Cidades — Cristalina', url: 'https://cidades.ibge.gov.br/brasil/go/cristalina/panorama' },
    { nome: 'Prefeitura de Cristalina', url: 'https://cristalina.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
