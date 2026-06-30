import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'morrinhos-go',
  nome: 'Morrinhos',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'morrinhense',
  tipo: 'cidade',

  populacao: 51351,
  populacaoAno: 2022,
  idhm: 0.733,
  idhmClasse: 'alto',
  altitudeM: 771,

  resumoEconomico:
    'No sul goiano, às margens da BR-153 e a cerca de 128 km de Goiânia, Morrinhos é um polo agroindustrial reconhecido pela cadeia do tomate industrial e pela indústria de alimentos. O agronegócio (grãos, pecuária e horticultura) sustenta a economia local, complementado por unidades de processamento e por uma forte vocação educacional ligada ao campo, com o IF Goiano (Campus Morrinhos) entre as principais referências de ensino técnico e superior da região.',

  mercado:
    'Cidade média de renda agroindustrial estável, Morrinhos tem mercado fitness em consolidação, com academias de bairro, estúdios e a presença de profissionais formados pelo ensino técnico e superior local. O calor do Cerrado e a estação seca prolongada são os principais fatores a considerar no planejamento dos treinos ao ar livre.',

  bairrosNobres: ['Centro', 'Jardim Esmeralda', 'Bandeirantes', 'Sebastião Xavier'],
  bairrosPopulares: ['Buritis', 'Pampulha', 'São Geraldo', 'Vila Nova'],

  parques: [
    {
      nome: 'Parque Ecológico Jatobá Centenário',
      descricao:
        'Mantido pela prefeitura nos arredores da cidade, reúne cerca de 2.100 metros de trilhas em meio ao Cerrado, com pequena cachoeira e árvores nativas identificadas — espaço para caminhada, trekking leve e treino funcional ao ar livre.',
    },
    {
      nome: 'Praças e academias ao ar livre',
      descricao:
        'A cidade distribui equipamentos de ginástica em praças e áreas públicas, ampliando o acesso popular à atividade física de baixo impacto.',
    },
    {
      nome: 'Entorno do Rio Meia Ponte',
      descricao:
        'O Rio Meia Ponte corta a microrregião e dá nome a ela, oferecendo trechos de natureza usados para caminhada e lazer ativo nos arredores do município.',
    },
  ],
  ciclovias:
    'A malha cicloviária de Morrinhos é modesta e concentrada em avenidas centrais; boa parte do pedal de lazer acontece em vias urbanas e nas saídas rurais de baixo movimento.',

  clima:
    'O clima é tropical de Cerrado, com duas estações bem marcadas: verão quente e chuvoso e inverno seco, com baixa umidade relativa do ar e dias ensolarados. A cidade está a cerca de 771 m de altitude no sul goiano.',
  climaTreino:
    'O calor diurno e a estação seca pedem treinos ao ar livre nas primeiras horas da manhã ou no fim da tarde, com hidratação reforçada — sobretudo de junho a setembro, quando a umidade despenca.',

  mobilidade:
    'Morrinhos fica às margens da BR-153, principal eixo rodoviário norte-sul de Goiás, com boa conexão a Goiânia (cerca de 128 km) e a Itumbiara, ao sul. Está a cerca de 56 km de Caldas Novas, na Região das Águas Quentes, polo de turismo termal do estado.',

  corridas: [
    {
      nome: 'Corridas de rua municipais',
      descricao:
        'O calendário esportivo local inclui provas de rua organizadas pela prefeitura e por grupos de corrida, geralmente em datas comemorativas e cívicas da cidade.',
    },
    {
      nome: 'Treinos de assessorias e grupos de corredores',
      descricao:
        'Grupos de corrida e assessorias locais mantêm treinos coletivos em vias e praças da cidade, sustentando a base da corrida de rua morrinhense.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Morrinhos mistura a tradição do futebol amador com o crescimento da corrida de rua e do treino ao ar livre. O IF Goiano e suas estruturas reforçam o ambiente de prática física na cidade.',
  academias:
    'A oferta reúne academias de bairro, estúdios de treino e personal trainers, sustentados pela renda agroindustrial e pelo público estudantil ligado ao IF Goiano e às instituições de ensino superior locais.',

  destaquesFitness: [
    'Polo agroindustrial do tomate e da indústria de alimentos, com renda estável.',
    'Parque Ecológico Jatobá Centenário, com cerca de 2,1 km de trilhas no Cerrado.',
    'Presença do IF Goiano (Campus Morrinhos), que fomenta o ambiente de prática física.',
    'Localização na BR-153, a cerca de 56 km de Caldas Novas e do turismo termal.',
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
    'Polo agroindustrial do sul goiano às margens da BR-153, Morrinhos combina renda estável, ambiente educacional forte e áreas verdes como o Parque Jatobá Centenário. Um personal trainer ajuda a treinar com método no clima de Cerrado, ajustando horários e hidratação à estação seca para resultados consistentes ao longo do ano.',

  vizinhas: ['goiania-go', 'itumbiara-go'],

  fontes: [
    { nome: 'IBGE Cidades — Morrinhos', url: 'https://cidades.ibge.gov.br/brasil/go/morrinhos/panorama' },
    { nome: 'Prefeitura de Morrinhos', url: 'https://morrinhos.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
