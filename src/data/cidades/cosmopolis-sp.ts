import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cosmopolis-sp',
  nome: 'Cosmópolis',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'cosmopolense',
  tipo: 'cidade',

  populacao: 59773,
  populacaoAno: 2022,
  idhm: 0.769,
  idhmClasse: 'alto',
  pibPerCapita: 38702,
  pibPerCapitaAno: 2023,
  altitudeM: 587,

  resumoEconomico:
    'Cosmópolis fica na Região Metropolitana de Campinas e tem raízes profundas na cana-de-açúcar: a Usina Ester, constituída pela família Nogueira em 1904, moldou a economia e a formação da cidade. Hoje o município combina o setor sucroalcooleiro com indústria e serviços, favorecido pela posição no eixo dinâmico da RM Campinas e pela proximidade com o polo petroquímico de Paulínia. O rio Jaguari, em torno do qual a cidade cresceu, e a represa da Usina Ester são marcas da paisagem local.',

  mercado:
    'Como cidade média inserida em uma das regiões metropolitanas mais ricas do interior paulista, Cosmópolis tem um mercado fitness que se beneficia da renda e do estilo de vida da RM Campinas, ainda que em escala menor que a dos grandes centros vizinhos. A procura por personal trainers aparece entre quem quer treino orientado em academias locais, atendimento domiciliar e acompanhamento aproveitando praças e a orla dos rios.',

  bairrosNobres: ['Centro', 'Jardim Cosmopolita', 'Jardim Bela Vista', 'Parque Ester'],
  bairrosPopulares: ['Jardim Santana', 'Jardim Independência', 'Chico Mendes', 'Jardim Eldorado'],

  parques: [
    {
      nome: 'Represa da Usina Ester (rio Jaguari)',
      descricao:
        'Antigo point de lazer ligado à Usina Ester, às margens do rio Jaguari, o entorno da represa reúne estradas de terra e paisagem de canaviais e mata usadas para caminhada, pedal e treino ao ar livre.',
    },
    {
      nome: 'Orla e entorno do rio Jaguari',
      descricao:
        'O principal rio da cidade, em torno do qual Cosmópolis se desenvolveu, oferece trechos e trilhas às suas margens que servem de percurso para quem treina em contato com a natureza.',
    },
    {
      nome: 'Praças e vias do Centro',
      descricao:
        'As praças e o traçado plano da área central concentram grande parte das caminhadas e corridas do dia a dia, sendo o espaço mais acessível para treino urbano.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos urbanos; boa parte do pedal acontece nas vias da cidade e em estradas rurais rumo à represa e aos canaviais, muito usadas por praticantes de mountain bike.',

  clima:
    'O clima é tropical de altitude, típico do interior paulista, com verão quente e chuvoso (de novembro a março) e inverno mais seco e ameno. As temperaturas são agradáveis na maior parte do ano, com dias quentes no verão e noites mais frias no inverno.',
  climaTreino:
    'A boa parte do ano permite treino ao ar livre com conforto; no verão, o calor e as chuvas de fim de tarde pedem atenção ao horário e à hidratação, enquanto o inverno seco favorece caminhadas, corridas e pedais, especialmente cedo ou no fim do dia.',

  mobilidade:
    'Cosmópolis se conecta à região pela rodovia Professor Zeferino Vaz (SP-332), que liga Campinas, Paulínia e Cosmópolis e segue rumo a Artur Nogueira e Mogi Guaçu. Essa ligação aproxima a cidade do polo petroquímico de Paulínia e do centro de Campinas, enquanto o transporte urbano é feito por ônibus dentro do município.',

  corridas: [
    {
      nome: 'Corrida e Caminhada Cidade de Cosmópolis',
      descricao:
        'Prova de rua promovida no município, com percursos de corrida e caminhada que reúnem atletas locais e da RM Campinas.',
    },
    {
      nome: 'Run Fest Cosmópolis',
      descricao:
        'Etapa do circuito Run Fest sediada na cidade, com percursos de 5 km de corrida e caminhada, além de prova kids.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso das praças e vias do Centro para caminhada e corrida, as estradas rurais e a represa do rio Jaguari para o pedal, e provas de rua que aproximam a cidade do calendário de corridas da RM Campinas.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, distribuídas pelos bairros centrais e residenciais, com porte compatível com uma cidade média inserida na RM Campinas.',

  destaquesFitness: [
    'Cidade da Usina Ester, com economia sucroalcooleira e forte ligação com a cana-de-açúcar.',
    'Represa da Usina Ester e rio Jaguari como espaços de caminhada, pedal e treino ao ar livre.',
    'Posição na Região Metropolitana de Campinas, ligada por Paulínia e pela rodovia SP-332.',
    'Clima tropical de altitude, com boa parte do ano favorável ao treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Cidade média da RM Campinas, com raízes na cana-de-açúcar e paisagem marcada pelo rio Jaguari, Cosmópolis oferece clima ameno e boas opções para treinar ao ar livre. Um personal trainer ajuda a organizar a rotina, escolher os melhores horários ao longo das estações e manter a constância aproveitando praças, orla e estradas da região.',

  vizinhas: ['paulinia-sp', 'americana-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Cosmópolis', url: 'https://cidades.ibge.gov.br/brasil/sp/cosmopolis/panorama' },
    { nome: 'Prefeitura de Cosmópolis', url: 'https://cosmopolis.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
