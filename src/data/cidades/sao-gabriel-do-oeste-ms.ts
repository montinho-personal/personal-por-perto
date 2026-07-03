import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-gabriel-do-oeste-ms',
  nome: 'São Gabriel do Oeste',
  uf: 'MS',
  estado: 'Mato Grosso do Sul',
  estadoSlug: 'mato-grosso-do-sul',
  regiao: 'Centro-Oeste',
  gentilico: 'gabrielense',
  tipo: 'cidade',

  populacao: 29579,
  populacaoAno: 2022,
  idhm: 0.729,
  idhmClasse: 'alto',
  pibPerCapita: 97496.54,
  pibPerCapitaAno: 2023,
  altitudeM: 658,

  resumoEconomico:
    'Emancipada de Camapuã em 1980, São Gabriel do Oeste fica no Cerrado do centro-norte de Mato Grosso do Sul, às margens da BR-163. A economia é puxada pela agropecuária: a cidade é sede da SAGA Agroindustrial, primeira indústria de leite longa vida do estado, que reúne cerca de 2.700 produtores rurais e processa em torno de 250 mil litros de leite por dia, consolidando o município como um dos polos leiteiros de referência do Centro-Oeste. Somam-se a isso a lavoura de soja e milho e o abate de suínos — a Aurora Alimentos é a maior empregadora local, com cerca de 3 mil funcionários. Esse arranjo produtivo coloca o PIB per capita da cidade bem acima da média estadual.',

  mercado:
    'O mercado de personal trainers é enxuto e proporcional ao porte de uma cidade média do interior, concentrado em academias e estúdios locais de musculação e treino funcional. O alto PIB per capita, puxado pelo agronegócio e pela indústria de laticínios e suínos, sustenta uma procura por atendimento personalizado entre produtores rurais, executivos do setor e famílias que buscam treino sob medida sem precisar se deslocar até Campo Grande.',

  bairrosNobres: ['Centro', 'Cidade Jardim', 'Alto da Boa Vista', 'Esplanada'],
  bairrosPopulares: ['Jardim Gramado', 'Amabile Mafisson', 'Primo Mafisson', 'Santa Lúzia'],

  parques: [
    {
      nome: 'Parque Ecológico Águas do Guarani',
      descricao:
        'Principal área de lazer da cidade, com trilhas, espaços de convivência e vegetação nativa do Cerrado — ponto de referência para caminhada e atividade ao ar livre, reformado e reaberto ao público no fim de 2022.',
    },
    {
      nome: 'Clube AABB São Gabriel do Oeste',
      descricao:
        'Clube social e esportivo tradicional do município, com estrutura para prática de esportes e atividades físicas em ambiente de convivência.',
    },
    {
      nome: 'Praças e entorno rural do Cerrado',
      descricao:
        'As praças do Centro concentram parte da caminhada urbana, enquanto as estradas vicinais entre as lavouras e pastagens do entorno rural servem de percurso para quem treina em contato com a paisagem do Cerrado.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos das principais avenidas; boa parte dos deslocamentos de bicicleta e da corrida acontece nas vias do Centro e dos bairros residenciais.',

  clima:
    'O clima é tropical de altitude do Cerrado sul-mato-grossense, com os cerca de 658 m de altitude da sede amenizando um pouco o calor típico da região. O ano se divide entre um verão chuvoso e quente (outubro a março) e um inverno seco, de umidade baixa e amplitude térmica maior entre dia e noite (abril a setembro).',
  climaTreino:
    'Nos meses mais quentes e úmidos, o ideal é treinar ao ar livre nas primeiras horas da manhã ou no fim da tarde, com hidratação reforçada; no inverno seco, a baixa umidade pede atenção redobrada à hidratação mesmo com temperaturas mais amenas.',

  mobilidade:
    'São Gabriel do Oeste está às margens da BR-163, principal eixo rodoviário que liga Campo Grande a Cuiabá e escoa a produção agropecuária do Centro-Oeste — a capital fica a cerca de 140 km ao sul. O transporte urbano é feito majoritariamente por carro, moto e ônibus, com a rodovia concentrando o intenso fluxo de cargas do agronegócio que atravessa a cidade.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva local gira em torno das academias e estúdios de treino funcional, do Clube AABB como espaço de convivência esportiva e do uso do Parque Ecológico Águas do Guarani e das praças do Centro para caminhada e corrida, em uma cidade cujo dia a dia é fortemente marcado pela rotina do agronegócio.',
  academias:
    'A oferta reúne academias de musculação e estúdios de treino funcional e personal training distribuídos pelo Centro e bairros residenciais, com porte compatível com uma cidade média do interior de alta renda agropecuária.',

  destaquesFitness: [
    'Polo leiteiro de referência no Centro-Oeste, sede da SAGA Agroindustrial e de uma extensa base de produtores rurais.',
    'PIB per capita muito acima da média estadual, puxado pelo agronegócio (soja, milho) e pela agroindústria de leite e suínos.',
    'Parque Ecológico Águas do Guarani como principal espaço público de caminhada e atividade ao ar livre.',
    'Localização estratégica na BR-163, a cerca de 140 km de Campo Grande, no coração do Cerrado sul-mato-grossense.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade agroindustrial de alta renda per capita cercada pelo Cerrado, São Gabriel do Oeste tem no calor e na rotina do agronegócio os principais fatores a considerar no treino. Um personal trainer ajuda a organizar a rotina de quem trabalha no campo ou na indústria local, aproveitando as janelas de horário mais amenas e os espaços públicos como o Parque Águas do Guarani.',

  vizinhas: ['coxim-ms', 'campo-grande-ms', 'sidrolandia-ms'],

  fontes: [
    { nome: 'IBGE Cidades — São Gabriel do Oeste', url: 'https://cidades.ibge.gov.br/brasil/ms/sao-gabriel-do-oeste/panorama' },
    { nome: 'Prefeitura de São Gabriel do Oeste', url: 'https://saogabriel.ms.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
