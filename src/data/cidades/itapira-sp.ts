import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itapira-sp',
  nome: 'Itapira',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'itapirense',
  tipo: 'cidade',

  populacao: 72022,
  populacaoAno: 2022,
  idhm: 0.762,
  idhmClasse: 'alto',
  altitudeM: 643,

  resumoEconomico:
    'No nordeste paulista, próxima a Mogi-Guaçu e Mogi-Mirim e à região metropolitana de Campinas, Itapira tem economia puxada pela indústria, que responde pela maior fatia do valor adicionado do município. O destaque é o polo farmacêutico e de biotecnologia, com plantas do Cristália e da Libbs instaladas na cidade, ao lado de agroindústria ligada à cana e ao café, comércio diversificado e prestação de serviços. A posição estratégica junto a rodovias que ligam o interior a Campinas sustenta o fluxo logístico.',

  mercado:
    'Como cidade de porte médio do interior paulista em uma região industrializada, Itapira tem um mercado fitness que combina academias de bairro e estúdios de treino com a procura por acompanhamento individualizado. A renda ligada ao polo industrial e a valorização de hábitos saudáveis ampliam o espaço para o personal trainer, que atende tanto quem treina em academia quanto quem prefere ao ar livre ou em casa.',

  bairrosNobres: ['Centro', 'Jardim Paulista', 'Vila Bianchi', 'Maria Beatriz'],
  bairrosPopulares: ['Cubatão', 'Vila Penha do Rio do Peixe', 'Jardim Getúlio Vargas', 'Vila Esperança'],

  parques: [
    {
      nome: 'Parque Juca Mulato',
      descricao:
        'Um dos principais espaços verdes da cidade, com área arborizada e a Casa da Cultura no entorno; é ponto de encontro para caminhada, corrida e atividades ao ar livre, e já serviu de largada e retirada de kits de provas de rua.',
    },
    {
      nome: 'Morro do Cruzeiro',
      descricao:
        'Elevação que domina a paisagem itapirense e reúne trilhas e subidas usadas por quem treina ao ar livre; o alto oferece vista da cidade e é ponto tradicional de caminhadas e desafios de subida.',
    },
    {
      nome: 'Parque Linear Dra. Kátia Stevanatto Sampaio',
      descricao:
        'Área linear de lazer que virou opção para caminhada e corrida no dia a dia e já sediou provas de rua e caminhadas organizadas pela Secretaria de Esportes e Lazer.',
    },
  ],
  ciclovias:
    'A malha cicloviária é pontual, concentrada em avenidas e trechos da área urbana; boa parte do pedal e da corrida acontece em vias do núcleo urbano e nos parques da cidade.',

  clima:
    'Itapira tem clima tropical de altitude, influenciado pelos cerca de 640 metros de altitude, com verões quentes e chuvosos e invernos mais amenos e secos. O índice de chuvas fica em torno de 1.600 mm ao ano, concentrado no período mais quente.',
  climaTreino:
    'O clima de altitude deixa as manhãs e noites mais agradáveis para treinar, sobretudo no inverno seco; no verão, o calor e as chuvas de fim de tarde pedem atenção ao horário e à hidratação, favorecendo treinos cedo pela manhã.',

  mobilidade:
    'Itapira se conecta à região por rodovias como a SP-147, que liga a cidade a Mogi-Mirim e ao entroncamento com a SP-340 (Campinas–Mogi-Guaçu), integrando o município ao eixo de Campinas. O transporte urbano é feito por ônibus, e a proximidade com Mogi-Mirim e Mogi-Guaçu movimenta o deslocamento diário para trabalho e serviços.',

  corridas: [
    {
      nome: 'Corrida e Caminhada Soberano Grill',
      descricao:
        'Prova rústica realizada em Itapira, com percursos de corrida e caminhada e retirada de kits no Parque Juca Mulato, reunindo corredores da cidade e da região.',
    },
    {
      nome: 'Corrida e Caminhada Parque Linear',
      descricao:
        'Evento promovido pela Secretaria de Esportes e Lazer no entorno do parque linear, com percursos de corrida e caminhada abertos à comunidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva itapirense aproveita os parques e o Morro do Cruzeiro para caminhadas, corridas e subidas, com provas de rua organizadas pela prefeitura e por iniciativas locais, tudo favorecido pelo clima de altitude.',
  academias:
    'A oferta é formada por academias de musculação e treino funcional e estúdios espalhados pelos bairros centrais e residenciais, em porte compatível com uma cidade média do interior paulista.',

  destaquesFitness: [
    'Clima tropical de altitude, com cerca de 640 m que amenizam as temperaturas e favorecem o treino ao ar livre.',
    'Parque Juca Mulato e Parque Linear como espaços de caminhada e corrida no dia a dia.',
    'Morro do Cruzeiro, com trilhas e subidas para quem busca desafio ao ar livre.',
    'Polo farmacêutico e de biotecnologia (Cristália e Libbs) que sustenta a economia e a renda local.',
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
    'Com clima de altitude, parques bem aproveitados e o Morro do Cruzeiro como cenário de treino ao ar livre, Itapira oferece boas condições para quem quer manter a rotina em movimento. Um personal trainer ajuda a organizar os treinos aproveitando os melhores horários do clima local e a manter a constância ao longo do ano.',

  vizinhas: ['mogi-mirim-sp', 'mogi-guacu-sp', 'sao-joao-da-boa-vista-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Itapira', url: 'https://cidades.ibge.gov.br/brasil/sp/itapira/panorama' },
    { nome: 'Prefeitura de Itapira', url: 'https://itapira.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
