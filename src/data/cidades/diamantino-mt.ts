import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'diamantino-mt',
  nome: 'Diamantino',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'diamantinense',
  tipo: 'cidade',

  populacao: 21941,
  populacaoAno: 2022,
  idhm: 0.718,
  idhmClasse: 'alto',
  altitudeM: 286,

  resumoEconomico:
    'No médio-norte mato-grossense, junto à Chapada dos Parecis, Diamantino nasceu como arraial de mineração no século XVIII, quando bandeirantes encontraram ouro e diamantes na região — origem que batiza a cidade. Hoje a economia é movida pelo agronegócio: a cidade está entre os grandes polos de grãos do país, com forte produção de soja e milho, além de pecuária e da estrutura de armazenagem ligada ao escoamento da safra. A posição como divisor das bacias Platina e Amazônica, com nascentes de rios importantes, dá à região destaque também no turismo de águas.',

  mercado:
    'Por ser uma cidade de porte pequeno no interior, o mercado fitness de Diamantino é enxuto e baseado em academias locais de musculação e treino funcional. A procura por personal trainers cresce entre quem busca acompanhamento individual para encaixar o treino na rotina ligada ao agronegócio e para lidar com o calor característico da região, valorizando orientação personalizada onde a oferta de grandes redes é limitada.',

  bairrosNobres: ['Centro', 'Jardim Alvorada', 'Bairro da Ponte'],
  bairrosPopulares: ['São Benedito', 'Cohab Morumbi', 'Bairro da Ponte'],

  parques: [
    {
      nome: 'Cachoeira (Bairro da Ponte)',
      descricao:
        'Área aberta ao público no Bairro da Ponte, a cerca de 8 km do centro pela estrada do Frei Manoel, onde o rio desce em várias quedas formando paredões lajeados — um dos pontos mais frequentados pelos diamantinenses para lazer e contato com a natureza.',
    },
    {
      nome: 'Região das nascentes (Circuito das Águas)',
      descricao:
        'Diamantino integra a Região Turística Circuito das Águas e é divisor das bacias Platina e Amazônica, com nascentes que alimentam rios importantes — entorno natural que oferece trilhas e percursos para quem treina ao ar livre.',
    },
    {
      nome: 'Vias e praças da área urbana',
      descricao:
        'No núcleo urbano, ruas tranquilas, praças e o entorno do centro histórico servem de espaço para caminhada e corrida no dia a dia, especialmente nos horários de menor calor.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e restrita a poucos trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e em estradas vicinais do entorno rural.',

  clima:
    'O clima é tropical com estação seca (tipo Aw de Köppen), quente, com temperatura média anual em torno de 24 a 25 °C. O ano se divide em duas estações bem marcadas: a chuvosa (de outubro a abril, com calor e umidade) e a seca (de maio a setembro, com tempo mais ameno e baixa umidade do ar).',
  climaTreino:
    'O calor e a forte radiação pedem treinar bem cedo ou no fim da tarde, com hidratação reforçada, principalmente no auge da estação chuvosa. No período seco, as manhãs mais amenas favorecem o treino ao ar livre, mas a baixa umidade exige atenção redobrada à hidratação.',

  mobilidade:
    'A cidade fica no eixo da BR-364, principal rodovia que cruza o estado e liga Diamantino a Cuiabá (cerca de 180 km) e ao restante do médio-norte — fator central para o escoamento da produção agrícola. O deslocamento interno é feito sobretudo por carro e moto, com transporte coletivo limitado, padrão comum em cidades pequenas do interior.',

  corridas: [
    {
      nome: 'Corrida do Milho (Diamantino)',
      descricao:
        'Prova de corrida de rua realizada na cidade, com percurso de 6 km e inscrição gratuita, que reforça a vocação local para eventos esportivos ligados ao calendário do agronegócio.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso das vias e praças urbanas para caminhada e corrida, o aproveitamento das cachoeiras e nascentes do entorno para lazer ativo, e eventos de corrida de rua que mobilizam a comunidade — tudo moldado pelo clima quente da região.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelos bairros centrais e residenciais, com porte compatível com uma cidade pequena do interior mato-grossense.',

  destaquesFitness: [
    'Cidade histórica do ouro e dos diamantes, hoje um dos polos de grãos de Mato Grosso.',
    'Integra o Circuito das Águas, divisor das bacias Platina e Amazônica, com nascentes e cachoeiras no entorno.',
    'Clima tropical quente, que exige planejamento de horário e hidratação no treino.',
    'Posição estratégica na BR-364, eixo de ligação com Cuiabá e o médio-norte mato-grossense.',
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
    'Cidade quente, histórica e cercada por nascentes e cachoeiras na Chapada dos Parecis, Diamantino pede um treino adaptado ao clima e que aproveite o entorno natural. Um personal trainer ajuda a organizar a rotina respeitando o calor, definindo os melhores horários e mantendo a constância entre as estações seca e chuvosa.',

  vizinhas: ['tangara-da-serra-mt', 'nova-mutum-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Diamantino', url: 'https://cidades.ibge.gov.br/brasil/mt/diamantino/panorama' },
    { nome: 'Prefeitura de Diamantino', url: 'https://www.diamantino.mt.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
