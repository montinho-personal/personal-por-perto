import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'seropedica-rj',
  nome: 'Seropédica',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'seropedicense',
  tipo: 'cidade',

  populacao: 80596,
  populacaoAno: 2022,
  idhm: 0.713,
  idhmClasse: 'alto',
  altitudeM: 26,

  resumoEconomico:
    'Na Baixada Fluminense e integrada à Região Metropolitana do Rio de Janeiro, Seropédica é reconhecida como polo de ensino e pesquisa agropecuária. Abriga o campus principal da Universidade Federal Rural do Rio de Janeiro (UFRRJ) e a Embrapa Agrobiologia, que dão à cidade um perfil universitário e rural. A economia combina serviços, comércio, atividade agropecuária e a presença de logística ao longo da BR-465 (antiga Rio-São Paulo) e do Arco Metropolitano.',

  mercado:
    'O mercado fitness de Seropédica é de porte municipal, concentrado no Centro e ao longo da BR-465, com academias locais e a vida esportiva alimentada pela presença universitária da UFRRJ. A cena de corrida de rua aparece sobretudo em eventos ligados ao campus e a iniciativas comunitárias, abrindo espaço para o atendimento de personal trainers que atendem estudantes, servidores e moradores.',

  bairrosNobres: ['Centro', 'Jardim Maracanã', 'Parque Fluminense', 'Boa Esperança'],
  bairrosPopulares: ['Santa Sofia', 'São Miguel', 'Santa Alice', 'Fazenda Caxias'],

  parques: [
    {
      nome: 'Floresta Nacional Mário Xavier',
      descricao:
        'Unidade de conservação federal com mais de 490 hectares, reunindo os mais expressivos fragmentos de vegetação nativa do município. Oferece ambiente arborizado e ar mais fresco para caminhada e treino ao ar livre.',
    },
    {
      nome: 'Campus da UFRRJ',
      descricao:
        'O extenso campus da Universidade Federal Rural do Rio de Janeiro, com áreas verdes, alamedas e vias internas, é referência para caminhada, corrida e atividade física na cidade.',
    },
    {
      nome: 'Embrapa Agrobiologia',
      descricao:
        'Unidade de pesquisa agropecuária no bairro Ecologia, junto à BR-465, que reforça o caráter verde e rural do entorno onde os moradores treinam.',
    },
  ],
  ciclovias:
    'A cidade tem perfil rodoviário ao longo da BR-465 e vias internas do campus da UFRRJ; a extensão consolidada de uma malha cicloviária urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente e úmido, típico da Baixada Fluminense e da Região Metropolitana do Rio, com verões quentes e chuvosos.',
  climaTreino:
    'O calor e a umidade pedem treino ao ar livre no início da manhã ou no fim da tarde, com hidratação reforçada — a Floresta Nacional Mário Xavier e o campus da UFRRJ oferecem sombra e ambiente mais fresco para correr e caminhar.',

  mobilidade:
    'Seropédica é cortada pela BR-465 (antiga Rodovia Rio-São Paulo), que estrutura o acesso ao campus da UFRRJ, e pelo Arco Metropolitano do Rio de Janeiro, que conecta a cidade ao restante da Baixada e à malha logística metropolitana. O trem da SuperVia (Ramal Japeri) atende o entorno, complementando a ligação com a capital.',

  corridas: [
    {
      nome: 'Circuito Rural de Corrida de Rua',
      descricao:
        'Prova organizada no ambiente da UFRRJ, com largada no campus, reunindo estudantes e moradores em uma cena de corrida ligada à universidade.',
    },
    {
      nome: 'Corrida e Caminhada do Servidor (UFRRJ)',
      descricao:
        'Evento tradicional da Universidade Rural com opções de corrida de 5 km e caminhada de 3 km, voltado à saúde e à integração da comunidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Seropédica é marcada pela presença da UFRRJ, que organiza corridas, caminhadas e atividades físicas no campus, e pelo uso das áreas verdes do município. O perfil universitário e rural favorece o treino ao ar livre e a prática esportiva comunitária.',
  academias:
    'A oferta reúne academias locais concentradas no Centro e ao longo da BR-465, complementadas pelo campus da UFRRJ e pela Floresta Nacional Mário Xavier como espaços para treino ao ar livre.',

  destaquesFitness: [
    'Floresta Nacional Mário Xavier: área verde federal para caminhada e treino ao ar livre.',
    'Campus da UFRRJ, com alamedas e áreas verdes usadas para corrida e caminhada.',
    'Polo de ensino e pesquisa agropecuária (UFRRJ e Embrapa Agrobiologia).',
    'Cena de corrida de rua ligada à universidade (Circuito Rural, Corrida do Servidor).',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade universitária e rural da Baixada Fluminense, Seropédica combina a Floresta Nacional Mário Xavier e o campus verde da UFRRJ com o perfil de polo de pesquisa agropecuária. Um personal trainer ajuda a aproveitar essas áreas ao ar livre com método, respeitando o clima quente e úmido e a rotina de quem se desloca pela BR-465 e pelo Arco Metropolitano.',

  vizinhas: ['itaguai-rj', 'nova-iguacu-rj', 'rio-de-janeiro-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Seropédica', url: 'https://cidades.ibge.gov.br/brasil/rj/seropedica/panorama' },
    { nome: 'Prefeitura de Seropédica', url: 'https://www.seropedica.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
