import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'campo-grande-ms',
  nome: 'Campo Grande',
  uf: 'MS',
  estado: 'Mato Grosso do Sul',
  estadoSlug: 'mato-grosso-do-sul',
  regiao: 'Centro-Oeste',
  gentilico: 'campo-grandense',
  tipo: 'cidade',

  populacao: 962883,
  populacaoAno: 2022,
  idhm: 0.784,
  idhmClasse: 'alto',
  altitudeM: 430,

  resumoEconomico:
    'Capital de Mato Grosso do Sul, Campo Grande é um forte polo do agronegócio (ligado à pecuária de corte) e do setor de serviços, além de importante centro universitário. Conhecida como "Cidade Morena", é planejada, muito arborizada e tem boa qualidade de vida, o que atrai migração de outros estados e sustenta uma população jovem e ativa.',

  mercado:
    'O mercado fitness está em expansão, com redes nacionais (Smart Fit, Allp Fit) e marcas premium de musculação — a Ironberg, referência nacional, abriu centro de treinamento na cidade —, além de academias locais consolidadas. A cultura de musculação e de treino premium é forte, impulsionada pelo público universitário.',

  bairrosNobres: ['Cidade Jardim', 'Jardim dos Estados', 'Chácara Cachoeira', 'Carandá Bosque'],
  bairrosPopulares: ['Vila Bandeirante', 'Aero Rancho', 'Coophavila', 'Vila Vilas Boas'],

  parques: [
    {
      nome: 'Parque das Nações Indígenas',
      descricao:
        'Um dos maiores parques urbanos do Brasil, com pistas de caminhada e corrida, lagos e amplas áreas abertas — palco da tradicional prova Volta das Nações.',
    },
    {
      nome: 'Parque Ecológico do Sóter',
      descricao:
        'Com cerca de 22 hectares, tem pista de cooper, ciclismo, quadras poliesportivas e pista de skate e patinação.',
    },
    {
      nome: 'Horto Florestal',
      descricao:
        'Bosque municipal urbano com trilhas e pista de caminhada em meio ao Cerrado, opção arborizada para treino mais tranquilo.',
    },
  ],
  ciclovias:
    'Campo Grande tem cerca de 90 km de estrutura cicloviária — uma das melhores marcas por habitante entre as capitais —, com destaque nas avenidas Afonso Pena e Gury Marques e nos parques lineares.',

  clima:
    'O clima é tropical quente, com médias que chegam a cerca de 31 °C e um inverno (de maio a setembro) muito seco; a altitude de cerca de 430 m ameniza um pouco o calor.',
  climaTreino:
    'O treino ao ar livre rende mais bem cedo (antes das 7h) ou após as 18h30, com hidratação reforçada no período seco, quando a umidade do ar cai bastante.',

  mobilidade:
    'Cidade radial e planejada, com avenidas largas, Campo Grande não tem metrô ou VLT — o transporte é feito por ônibus. Fica no cruzamento das BR-163 e BR-262, importante entroncamento logístico do Centro-Oeste.',

  corridas: [
    {
      nome: 'Volta das Nações',
      descricao:
        'Prova tradicional disputada no Parque das Nações Indígenas, símbolo da cena de corrida de rua da cidade.',
    },
    {
      nome: 'Meia Maratona de Campo Grande',
      descricao:
        'A prova de maior distância da capital, parte de um calendário que inclui também circuitos de corrida nos bairros.',
    },
  ],
  culturaEsportiva:
    'Campo Grande tem cultura ativa de corrida e ciclismo, favorecida pelas ciclovias e pelos grandes parques, e uma cena de musculação e treino funcional em alta, puxada por um público jovem e universitário.',
  academias:
    'A oferta reúne redes nacionais (Smart Fit, Allp Fit), a chegada de marcas premium como a Ironberg e academias locais consolidadas, com boa cobertura de plataformas de benefícios.',

  destaquesFitness: [
    'Rede premium de musculação (Ironberg) escolheu a cidade pela demanda crescente.',
    'Forte malha cicloviária (cerca de 90 km), uma das melhores entre as capitais.',
    'Grandes parques urbanos com academia ao ar livre e pista de cooper.',
    'Altitude de cerca de 430 m, que ameniza o calor frente ao restante do estado.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Cidade jovem, arborizada e com cultura de musculação em ascensão, Campo Grande oferece boa estrutura para quem quer treinar — dos parques às academias premium. Um personal trainer ajuda a aproveitar tudo isso com método, respeitando o calor e a baixa umidade do inverno.',

  vizinhas: ['cuiaba-mt', 'goiania-go', 'brasilia-df'],

  fontes: [
    { nome: 'IBGE Cidades — Campo Grande', url: 'https://cidades.ibge.gov.br/brasil/ms/campo-grande/panorama' },
    { nome: 'Prefeitura de Campo Grande', url: 'https://www.campogrande.ms.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
