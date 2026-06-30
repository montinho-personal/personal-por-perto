import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'lencois-paulista-sp',
  nome: 'Lençóis Paulista',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'lençoense',
  tipo: 'cidade',

  populacao: 66505,
  populacaoAno: 2022,
  idhm: 0.764,
  idhmClasse: 'alto',
  altitudeM: 550,

  resumoEconomico:
    'Polo industrial do centro-oeste paulista, Lençóis Paulista tem economia diversificada e forte para o porte do município. Destacam-se o setor de papel e celulose e a agroindústria da cana, com grandes empregadores como o Grupo Lwart (rerrefino de óleo e celulose) e a Zilor (açúcar, etanol, levedura e energia). A presença dessas corporações sustenta renda elevada e um público com hábitos de bem-estar acima da média de cidades vizinhas de mesmo tamanho.',

  mercado:
    'O mercado fitness atende um público de classe média industrial, com academias locais e estúdios de musculação e treinamento funcional, além de cobertura de plataformas de benefícios usadas pelas grandes empresas da cidade. A escala é de cidade média do interior: menos redes nacionais que em Bauru, mas com demanda firme por acompanhamento personalizado.',

  bairrosNobres: ['Jardim Caju', 'Jardim Europa', 'Centro', 'Jardim Carolina'],
  bairrosPopulares: ['Cecap', 'Jardim Monte Azul', 'Jardim Primavera', 'Jardim Grajaú'],

  parques: [
    {
      nome: 'Parque do Povo',
      descricao:
        'Principal complexo esportivo público da cidade, com campos de futebol e espaços para prática de esportes, muito usado por moradores no dia a dia.',
    },
    {
      nome: 'Parque do Paradão',
      descricao:
        'Área de lazer e esporte na cidade, com espaços ao ar livre que atendem a caminhada e atividades recreativas.',
    },
    {
      nome: 'Campo Society do Caju',
      descricao:
        'Equipamento esportivo do bairro Caju voltado à prática de futebol society, parte da rede de espaços de esporte de bairro do município.',
    },
  ],
  ciclovias:
    'A mobilidade ativa em Lençóis Paulista se apoia em vias e avenidas de tráfego moderado, comuns em cidades médias do interior, onde pedalar para deslocamento e lazer é viável fora dos horários de pico.',

  clima:
    'O clima é tropical de altitude, típico do centro-oeste paulista, com invernos secos e amenos e verões quentes e chuvosos (médias anuais em torno de 22 a 23 °C).',
  climaTreino:
    'O inverno seco favorece o treino ao ar livre pela manhã e no fim da tarde; no verão, vale evitar o meio do dia por causa do calor e das pancadas de chuva.',

  mobilidade:
    'Lençóis Paulista fica a cerca de 46 a 50 km de Bauru e é acessada pela Rodovia Marechal Rondon (SP-300) e pela Rodovia Osni Mateus (SP-261), que conectam o município ao principal polo regional e a outras cidades do interior. As distâncias curtas dentro da cidade tornam o deslocamento entre casa, academia e parques rápido.',

  corridas: [
    {
      nome: 'Corrida Pedestre de Lençóis Paulista',
      descricao:
        'Prova tradicional do calendário esportivo municipal, com edições que reuniram atletas de várias cidades da região e percursos de 10 km (masculino), 8 km (feminino) e categorias de base mais curtas.',
    },
    {
      nome: 'Provas e circuitos regionais',
      descricao:
        'Corredores da cidade participam de provas de rua na região de Bauru e do centro-oeste paulista, sustentando uma cena de corrida ativa para o porte do município.',
    },
  ],
  culturaEsportiva:
    'A cidade tem cultura esportiva forte para seu tamanho, com tradição em jogos regionais, futebol e corrida de rua. Os espaços públicos de esporte de bairro, como o Parque do Povo, democratizam o acesso à atividade física, enquanto o perfil industrial e de renda mais alta sustenta procura por treino orientado.',
  academias:
    'A oferta reúne academias locais e estúdios de musculação e funcional, com planos corporativos viabilizados pelas grandes indústrias da cidade. É um mercado de cidade média, com menos redes nacionais que Bauru, mas demanda constante.',

  destaquesFitness: [
    'Polo de papel e celulose (Lwart) e agroindústria da cana (Zilor) sustentando público com hábitos de bem-estar.',
    'Parque do Povo e espaços esportivos de bairro como base para atividade física pública.',
    'Corrida Pedestre de Lençóis Paulista e provas regionais movimentando a cena de corrida.',
    'Proximidade de Bauru (cerca de 46 a 50 km pela SP-300/SP-261) amplia o acesso a eventos e estrutura.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 270,
    mensalMax: 720,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Cidade industrial e de renda firme no centro-oeste paulista, Lençóis Paulista combina espaços públicos de esporte, uma cena de corrida ativa e proximidade de Bauru. Um personal trainer ajuda a transformar essa estrutura em resultado, com método na musculação, no funcional e na preparação para as provas da região.',

  vizinhas: ['bauru-sp', 'botucatu-sp', 'jau-sp'],

  fontes: [
    {
      nome: 'IBGE Cidades — Lençóis Paulista',
      url: 'https://cidades.ibge.gov.br/brasil/sp/lencois-paulista/panorama',
    },
    { nome: 'Prefeitura de Lençóis Paulista', url: 'https://www.lencoispaulista.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
