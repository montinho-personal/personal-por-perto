import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'campo-maior-pi',
  nome: 'Campo Maior',
  uf: 'PI',
  estado: 'Piauí',
  estadoSlug: 'piaui',
  regiao: 'Nordeste',
  gentilico: 'campomaiorense',
  tipo: 'cidade',

  populacao: 45793,
  populacaoAno: 2022,
  idhm: 0.656,
  idhmClasse: 'médio',
  altitudeM: 125,

  resumoEconomico:
    'Cidade do norte do Piauí, a cerca de 80 km de Teresina, Campo Maior é o principal polo do chamado Território dos Carnaubais e ficou marcada na história pela Batalha do Jenipapo, em 1823, episódio decisivo da luta pela independência no Nordeste. A economia gira em torno da extração e do beneficiamento da cera e do pó de carnaúba — atividade tradicional que emprega muita gente na região —, da apicultura e da produção de mel, da agropecuária e de um comércio e setor de serviços que atendem aos municípios vizinhos. A carne de sol é um dos cartões de visita gastronômicos da cidade.',

  mercado:
    'Por ser uma cidade média do interior nordestino, o mercado fitness de Campo Maior é mais enxuto que o da capital, concentrado em academias locais de musculação e treino funcional. A procura por personal trainers tende a vir de quem busca acompanhamento individualizado para lidar com o calor forte e para aproveitar os espaços ao ar livre, como o entorno do Açude Grande, na rotina de treino.',

  bairrosNobres: ['Centro', 'Nossa Senhora de Fátima', 'São João', 'São Luís'],
  bairrosPopulares: ['Tabuleta', 'Bona Primo', 'Mutirão', 'Aroeiras'],

  parques: [
    {
      nome: 'Açude Grande',
      descricao:
        'Principal cartão-postal de Campo Maior, o reservatório fica na parte central da cidade, junto à BR-343, cercado por carnaubais. O entorno é o trecho mais usado para caminhada e corrida ao ar livre, e as águas recebem passeios de pedalinho e a sede do Iate Clube local.',
    },
    {
      nome: 'Lagoa de Nossa Senhora',
      descricao:
        'Espelho-d’água tradicional da paisagem campomaiorense, associado à religiosidade e à identidade da cidade; o entorno serve de espaço para caminhada e atividade ao ar livre nos horários mais amenos do dia.',
    },
    {
      nome: 'Praça Bona Primo',
      descricao:
        'Praça do centro histórico, cercada por construções de arquitetura colonial e imperial; é ponto de encontro e referência urbana, com calçadas usadas para caminhada leve e convívio ao fim da tarde.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em poucos trechos da área urbana; boa parte do pedal e da corrida acontece nas vias do centro e ao longo do Açude Grande, espaço mais procurado para atividade ao ar livre.',

  clima:
    'O clima é quente o ano inteiro, com forte influência semiárida — Campo Maior figura entre as cidades mais quentes do Brasil. O ano se divide em uma estação chuvosa concentrada no verão (de novembro a abril, com chuvas irregulares) e uma estação seca prolongada, de céu aberto e baixa umidade, em que as temperaturas seguem altas durante o dia.',
  climaTreino:
    'O calor intenso e a baixa umidade na estação seca exigem treinar bem cedo ou no fim da tarde, com hidratação reforçada; nos picos de calor, ambientes climatizados são a opção mais segura, e a atenção à reposição de líquidos deve ser constante ao longo do ano.',

  mobilidade:
    'Campo Maior é cortada pela BR-343, rodovia que liga a cidade a Teresina e a Parnaíba e estrutura boa parte do fluxo de pessoas e cargas da região dos carnaubais. O deslocamento interno é feito sobretudo por carro, moto e transporte por ônibus, e a posição às margens da BR reforça o papel da cidade como polo de comércio e serviços do norte do estado.',

  corridas: [
    {
      nome: 'Corridas de rua em Campo Maior',
      descricao:
        'A cidade recebe provas de corrida de rua com percursos de caminhada e disputas de 5 km e 10 km, organizadas por assessorias esportivas locais e voltadas a corredores da região dos carnaubais.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso do entorno do Açude Grande para caminhada e corrida, as provas de rua organizadas por assessorias locais e a forte tradição histórica e religiosa da cidade — tudo moldado pelo clima quente característico do norte do Piauí.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior nordestino.',

  destaquesFitness: [
    'Açude Grande, no coração da cidade, como espaço de caminhada e corrida ao ar livre cercado por carnaubais.',
    'Clima quente, de forte influência semiárida, que exige planejamento de horário e hidratação reforçada no treino.',
    'Cidade histórica, palco da Batalha do Jenipapo (1823) e principal polo do Território dos Carnaubais.',
    'Economia ligada à cera de carnaúba, ao mel, à agropecuária e ao comércio que atende toda a região.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Cidade quente, histórica e ligada à tradição dos carnaubais, Campo Maior pede um treino adaptado ao calor e que aproveite os espaços ao ar livre, como o entorno do Açude Grande. Um personal trainer ajuda a organizar a rotina respeitando o clima, escolhendo os melhores horários e mantendo a constância ao longo das estações chuvosa e seca.',

  vizinhas: ['teresina-pi', 'parnaiba-pi'],

  fontes: [
    { nome: 'IBGE Cidades — Campo Maior', url: 'https://cidades.ibge.gov.br/brasil/pi/campo-maior/panorama' },
    { nome: 'Prefeitura de Campo Maior', url: 'https://www.campomaior.pi.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
