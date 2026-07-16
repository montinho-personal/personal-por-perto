import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'luis-eduardo-magalhaes-ba',
  nome: 'Luís Eduardo Magalhães',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'luiseduardense',
  tipo: 'cidade',

  populacao: 107909,
  populacaoAno: 2022,
  idhm: 0.716,
  idhmClasse: 'alto',
  altitudeM: 720,
  pibPerCapita: 107118,
  pibPerCapitaAno: 2023,

  resumoEconomico:
    'Luís Eduardo Magalhães nasceu como Posto Mimoso, um povoado formado a partir da década de 1980 no entroncamento das rodovias BR-020 e BR-242, e só se emancipou de Barreiras em 2000/2001. Em poucas décadas se tornou um dos maiores polos do agronegócio do Brasil, na região conhecida como MATOPIBA, com forte produção de soja, milho e algodão — é a maior exportadora do estado nesse setor. O crescimento acelerado do agro levou a cidade a figurar entre as maiores economias do interior baiano, com renda per capita entre as mais altas do estado.',

  mercado:
    'O alto poder aquisitivo ligado ao agronegócio sustenta um mercado fitness mais aquecido do que o de cidades de porte semelhante, com academias de rede, boxes de crossfit e personal trainers anunciados em plataformas como Wellhub. A demanda vem tanto de produtores e executivos do agro quanto da população jovem atraída pelo crescimento econômico da cidade.',

  bairrosNobres: ['Centro', 'Jardim Paraíso', 'Florais Léa', 'Cidade Universitária'],
  bairrosPopulares: ['Mimoso do Oeste', 'Parque São José', 'Novo Horizonte', 'Residencial 90'],

  parques: [
    {
      nome: 'Parque dos Buritis',
      descricao:
        'Área verde na região central da cidade, com trilhas, espaços para piquenique e playground — um dos poucos points de contato com a natureza dentro da malha urbana.',
    },
    {
      nome: 'Praça do Avião',
      descricao:
        'Um dos principais pontos de encontro da cidade, cercada por comércio e usada por quem caminha ou corre no entorno em horários mais frescos.',
    },
    {
      nome: 'Praça dos Três Poderes',
      descricao:
        'Praça central que reúne prefeitura, câmara municipal e fórum; funciona também como espaço de convivência e caminhada no coração da cidade.',
    },
  ],
  ciclovias:
    'Não há, em fonte oficial, dados consolidados sobre a extensão da malha cicloviária da cidade; parte do deslocamento de bicicleta e da corrida acontece nas avenidas centrais e no entorno do Parque dos Buritis e das praças.',

  clima:
    'O clima é tropical, típico do Cerrado, com duas estações bem marcadas: a chuvosa, de outubro a abril, e a seca, de maio a setembro. A estação meteorológica automática do INMET na cidade já registrou mínima de 8,1 °C (julho de 2006) e máxima de 38,4 °C (outubro de 2015); a altitude de cerca de 720 m ajuda a amenizar um pouco o calor típico do interior baiano.',
  climaTreino:
    'A estação seca traz baixa umidade e amplitude térmica maior, o que pede hidratação reforçada e proteção solar; treinar ao ar livre nas primeiras horas da manhã ou no fim da tarde tende a ser mais confortável do que nos horários de sol forte.',

  mobilidade:
    'A cidade surgiu no entroncamento das rodovias BR-020 e BR-242, que ainda hoje estruturam sua vocação logística para o escoamento da produção agrícola do Oeste baiano. O deslocamento interno é feito majoritariamente por transporte próprio e por ônibus urbano, em uma malha viária que acompanhou o crescimento acelerado da cidade nas últimas décadas.',

  corridas: [
    {
      nome: 'LEM Run',
      descricao:
        'Corrida de rua com percursos de 5 km e 10 km, além de categorias kids, juvenil e PCD, com concentração na Praça do Jardim Paraíso; integra a programação de aniversário de emancipação do município.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é jovem e crescente, puxada pela LEM Run e por corridas organizadas por grupos locais, além do uso das praças centrais para caminhada e atividade ao ar livre. O bom momento econômico ligado ao agronegócio tem impulsionado o interesse por academias e acompanhamento profissional de treino.',
  academias:
    'A oferta inclui academias de bairro como Academia Life e Sporttime Academia, além de estúdios de treino funcional e boxes de crossfit, listados em plataformas como Wellhub — um mercado proporcionalmente maior do que o de cidades de população semelhante, reflexo da renda elevada trazida pelo agronegócio.',

  destaquesFitness: [
    'Um dos maiores polos do agronegócio do Brasil (MATOPIBA), com renda per capita entre as mais altas da Bahia.',
    'LEM Run, corrida de rua que integra a programação de aniversário de emancipação da cidade.',
    'Cidade nascida no entroncamento das BR-020 e BR-242, eixo logístico que ainda define sua malha urbana.',
    'Clima de Cerrado com estação seca marcada, que exige atenção a horário de treino, hidratação e proteção solar.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 450,
  },

  conclusao:
    'Cidade jovem, planejada às pressas pelo boom do agronegócio, Luís Eduardo Magalhães combina renda elevada, crescimento acelerado e um clima de Cerrado que impõe cuidados específicos no treino. Um personal trainer ajuda a estruturar uma rotina consistente, respeitando os horários mais amenos do dia e aproveitando o mercado fitness em expansão da cidade.',

  vizinhas: ['barreiras-ba', 'salvador-ba', 'vitoria-da-conquista-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Luís Eduardo Magalhães', url: 'https://cidades.ibge.gov.br/brasil/ba/luis-eduardo-magalhaes/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/2919553' },
    { nome: 'Prefeitura de Luís Eduardo Magalhães', url: 'https://www.luiseduardomagalhaes.ba.gov.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
