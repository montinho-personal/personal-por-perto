import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'maracaju-ms',
  nome: 'Maracaju',
  uf: 'MS',
  estado: 'Mato Grosso do Sul',
  estadoSlug: 'mato-grosso-do-sul',
  regiao: 'Centro-Oeste',
  gentilico: 'maracajuense',
  tipo: 'cidade',

  populacao: 45047,
  populacaoAno: 2022,
  idhm: 0.736,
  idhmClasse: 'alto',
  altitudeM: 384,

  resumoEconomico:
    'Maracaju é um dos maiores polos de grãos de Mato Grosso do Sul, figurando entre os líderes estaduais na produção de soja e milho, cultivados em sucessão ao longo do ano. A força do agronegócio sustenta uma agroindústria em expansão e um comércio e setor de serviços aquecidos para uma cidade média do sul do estado. A região é também ponto da Rede Brasileira de Monitoramento Contínuo (RBMC) do IBGE, com uma estação geodésica instalada no município.',

  mercado:
    'O dinamismo do agronegócio dá a Maracaju um público com renda e rotina puxada, que busca treino para saúde, controle do estresse e desempenho. A oferta se concentra em academias de bairro e estúdios, com procura crescente por acompanhamento individualizado e por treino ao ar livre nas praças e pistas da cidade.',

  bairrosNobres: ['Centro', 'Vista Alegre', 'Alto das Palmeiras', 'Jardim Universitário'],
  bairrosPopulares: ['Cambará', 'Dom Bosco', 'Fortaleza', 'Alto San Rafael'],

  parques: [
    {
      nome: 'Praça Central (Praça Antônio João)',
      descricao:
        'Coração da cidade, na área central, é ponto de encontro e ponto de partida de boa parte dos eventos esportivos e corridas de rua de Maracaju.',
    },
    {
      nome: 'Praça Árvore do Cerrado',
      descricao:
        'Espaço de bairro com praça e quadra de esportes, usado para caminhada, recreação e atividades comunitárias.',
    },
    {
      nome: 'Serra de Maracaju',
      descricao:
        'Conjunto de relevo que dá nome ao município e onde nasce o Rio Santa Maria; molda a paisagem regional e oferece terreno ondulado para quem busca treinos com inclinação fora do perímetro urbano.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de vias com ciclismo de uso recreativo e de deslocamento, mas a extensão total da malha cicloviária não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical, típico do sul de Mato Grosso do Sul, com verões quentes e chuvosos e invernos mais secos e amenos.',
  climaTreino:
    'O calor e a umidade do verão pedem treino no início da manhã ou no fim da tarde, com boa hidratação; os meses secos de inverno são os mais confortáveis para correr e treinar ao ar livre.',

  mobilidade:
    'Maracaju é cortada pela BR-267 — eixo do Corredor Bioceânico que liga o leste do estado a Porto Murtinho — e fica próxima da BR-163, principais rotas do escoamento de grãos da região. Os deslocamentos urbanos são curtos, o que facilita combinar treino e rotina.',

  corridas: [
    {
      nome: 'Corrida Sicredi Cidade de Maracaju',
      descricao:
        'Prova de rua com edições anuais que reúne corredores locais e da região, com largada na área central da cidade.',
    },
    {
      nome: 'Extreme Running Maracaju',
      descricao:
        'Competição de corrida com obstáculos realizada no município, que mobiliza centenas de atletas a cada edição.',
    },
  ],
  culturaEsportiva:
    'A cena esportiva é animada pelas corridas de rua promovidas por clubes de serviço e entidades locais, com largadas frequentes na Praça Central, e por uma cultura de atividade ao ar livre favorecida pela escala da cidade.',
  academias:
    'A oferta reúne academias de bairro e estúdios de musculação e funcional, complementada por praças e quadras públicas usadas para caminhada e treino livre.',

  destaquesFitness: [
    'Um dos maiores polos de soja e milho de MS, com público de renda puxada pelo agronegócio.',
    'Praça Central como ponto de partida das corridas de rua da cidade.',
    'Serra de Maracaju, com relevo ondulado para treinos com inclinação na região.',
    'Calendário de corridas de rua (Corrida Sicredi e Extreme Running).',
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
    'Cidade do agronegócio no coração do sul de Mato Grosso do Sul, Maracaju combina rotina puxada, praças ativas e o relevo da Serra que leva seu nome. Um personal trainer ajuda a transformar essa estrutura em método — ajustando horários e hidratação ao calor do verão e aproveitando os meses secos para o treino ao ar livre.',

  vizinhas: ['dourados-ms', 'campo-grande-ms', 'sidrolandia-ms'],

  fontes: [
    { nome: 'IBGE Cidades — Maracaju', url: 'https://cidades.ibge.gov.br/brasil/ms/maracaju/panorama' },
    { nome: 'Prefeitura de Maracaju', url: 'https://www.maracaju.ms.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
