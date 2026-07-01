import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'benevides-pa',
  nome: 'Benevides',
  uf: 'PA',
  estado: 'Pará',
  estadoSlug: 'para',
  regiao: 'Norte',
  gentilico: 'benevidense',
  tipo: 'cidade',

  populacao: 63567,
  populacaoAno: 2022,
  idhm: 0.667,
  idhmClasse: 'médio',
  altitudeM: 28,

  resumoEconomico:
    'Integrante da Região Metropolitana de Belém, Benevides cresceu mais de 20% entre os Censos de 2010 e 2022 e se firmou como um dos polos industriais e logísticos do estado. A economia combina indústria e agroindústria — com destaque para o Ecoparque da Natura, complexo que reúne fornecedores ligados à sociobiodiversidade amazônica e a milhares de famílias agroextrativistas — comércio, serviços e produção agrícola, incluindo a cadeia do dendê. A posição às margens da BR-316 e a proximidade com Belém sustentam o fluxo de cargas e o adensamento urbano.',

  mercado:
    'Como cidade em expansão dentro da Grande Belém, o mercado fitness de Benevides ainda é mais enxuto que o da capital, apoiado em academias de bairro e em profissionais que atendem tanto o município quanto os vizinhos da região metropolitana. A procura por personal trainers tende a crescer com a chegada de novos loteamentos e condomínios e com quem busca treino orientado para lidar com o calor e a umidade equatoriais.',

  bairrosNobres: ['Centro', 'Maguari', 'Benfica', 'Murinin'],
  bairrosPopulares: ['Novo Brasil', 'Duque de Caxias', 'Liberdade', 'Santos Dumont'],

  parques: [
    {
      nome: 'APA da Região Metropolitana de Belém',
      descricao:
        'Área de Proteção Ambiental que abrange trechos de Benevides e municípios vizinhos, resguardando mananciais e floresta que abastecem a Grande Belém; o entorno oferece contato com a natureza para caminhadas e atividades ao ar livre.',
    },
    {
      nome: 'Igarapés e área de Benfica',
      descricao:
        'A região de Benfica, na divisa com Ananindeua, é cortada por igarapés e cursos d’água típicos da paisagem amazônica, com balneários e espaços de lazer que também servem de cenário para atividade física ao ar livre.',
    },
    {
      nome: 'Praças e vias do Centro',
      descricao:
        'As praças e ruas arborizadas da área central concentram parte da caminhada e corrida do dia a dia, especialmente nos horários mais frescos da manhã e do fim de tarde.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é limitada e concentrada em trechos urbanos; boa parte do pedal e da corrida acontece nas vias do Centro e ao longo dos acessos que ligam os bairros à BR-316, exigindo atenção ao tráfego.',

  clima:
    'O clima é equatorial, quente e úmido o ano todo, com temperaturas médias elevadas e alta umidade típicas da Amazônia. O ano se divide entre um período chuvoso (o “inverno amazônico”, mais intenso de janeiro a maio) e um período mais seco (de junho a novembro), com chuvas de fim de tarde frequentes mesmo fora da estação úmida.',
  climaTreino:
    'O calor constante e a umidade alta pedem treinar bem cedo ou no fim da tarde, com hidratação reforçada e roupas leves; nos picos de chuva e de calor, ambientes climatizados são a opção mais confortável, e vale planejar os treinos ao ar livre em torno das pancadas de chuva vespertinas.',

  mobilidade:
    'Benevides se conecta a Belém, Ananindeua e Marituba pela BR-316, principal corredor de entrada e saída da região metropolitana, com intenso fluxo diário de veículos, cargas e transporte coletivo. O município passou a integrar o sistema BRT Metropolitano de Belém, com linhas alimentadoras a partir dos terminais da região, reorganizando o deslocamento de quem vive na cidade e trabalha na Grande Belém.',

  corridas: [
    {
      nome: 'Calendário de corridas da Grande Belém',
      descricao:
        'Corredores de Benevides costumam participar das provas de rua realizadas na Região Metropolitana de Belém, que reúnem atletas dos municípios vizinhos ao longo do ano.',
    },
    {
      nome: 'Provas e caminhadas municipais',
      descricao:
        'Ações esportivas e caminhadas promovidas no município, ligadas a datas comemorativas e a projetos comunitários, movimentam a prática de corrida entre os moradores.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o futebol de várzea e comunitário, a caminhada e a corrida nas vias urbanas e o lazer junto aos igarapés e balneários da região — tudo marcado pelo clima quente e úmido da Amazônia e pela integração com a vida esportiva da Grande Belém.',
  academias:
    'A oferta é formada principalmente por academias de musculação e treino funcional distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade em crescimento dentro da região metropolitana.',

  destaquesFitness: [
    'Cidade em expansão na Região Metropolitana de Belém, integrada à capital pela BR-316 e pelo BRT Metropolitano.',
    'Clima equatorial quente e úmido, que exige planejamento de horário e hidratação no treino.',
    'Igarapés, balneários e a APA da Grande Belém como cenário de atividade ao ar livre.',
    'Polo industrial e agroindustrial, com o Ecoparque da Natura e a cadeia do dendê entre os destaques da economia local.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 660,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Cidade quente, úmida e em plena expansão na Grande Belém, Benevides pede um treino adaptado ao clima equatorial e que aproveite os espaços ao ar livre nos horários mais frescos. Um personal trainer ajuda a organizar a rotina respeitando o calor e a umidade, definindo os melhores horários e mantendo a constância mesmo no período chuvoso.',

  vizinhas: ['ananindeua-pa', 'marituba-pa'],

  fontes: [
    { nome: 'IBGE Cidades — Benevides', url: 'https://cidades.ibge.gov.br/brasil/pa/benevides/panorama' },
    { nome: 'Prefeitura de Benevides', url: 'https://www.benevides.pa.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
