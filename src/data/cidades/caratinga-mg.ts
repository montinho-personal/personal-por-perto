import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'caratinga-mg',
  nome: 'Caratinga',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'caratinguense',
  tipo: 'cidade',

  populacao: 87360,
  populacaoAno: 2022,
  idhm: 0.706,
  idhmClasse: 'alto',
  altitudeM: 578,

  resumoEconomico:
    'Caratinga é um polo regional do leste de Minas, no Vale do Rio Doce, exercendo influência sobre dezenas de municípios da microrregião. A economia se apoia no comércio e nos serviços, na produção de café — historicamente uma das principais atividades da região, impulsionada desde os anos 1950 — e na educação superior, com o Centro Universitário de Caratinga (UNEC) atraindo estudantes das cidades vizinhas. Conhecida como "Cidade das Palmeiras", reúne ainda agropecuária e um setor industrial em crescimento.',

  mercado:
    'Cidade média com classe média consolidada e forte presença universitária, Caratinga tem demanda estável por academias, musculação e treino funcional. O público de estudantes e profissionais liberais, somado a uma cultura ativa de caminhada e corrida em praças e vias do centro, abre espaço para personal trainers que oferecem acompanhamento presencial e online.',

  bairrosNobres: ['Centro', 'Esplanada', 'Anita Mantuano', 'Limoeiro'],
  bairrosPopulares: ['Santa Cruz', 'Dário Grossi', 'Zacarias', 'Aparecida'],

  parques: [
    {
      nome: 'RPPN Feliciano Miguel Abdala',
      descricao:
        'Reserva Particular do Patrimônio Natural de cerca de 957 hectares de Mata Atlântica, na bacia do Rio Doce, abrigo de uma das maiores populações de muriqui-do-norte do país; referência em ecoturismo e educação ambiental na região.',
    },
    {
      nome: 'Praça Cesário Alvim',
      descricao:
        'Praça central arborizada, cercada por palmeiras imperiais centenárias e pela Catedral de São João Batista, ponto tradicional de caminhada e convívio no coração da cidade.',
    },
    {
      nome: 'Rota Turística do Muriqui',
      descricao:
        'Circuito regional de natureza criado para integrar trilhas e atrativos do leste mineiro, opção para caminhadas e atividades ao ar livre em meio à mata.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de ciclofaixas e vias compartilhadas; a extensão total da malha cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical, típico do leste mineiro, com verões quentes e chuvosos e invernos mais amenos e secos; a temperatura média anual fica em torno de 22 a 23 °C.',
  climaTreino:
    'No verão, o calor e as chuvas da tarde favorecem treinos ao ar livre no início da manhã ou no fim do dia, com atenção à hidratação; o inverno, mais ameno e seco, é a melhor janela para corrida e caminhada nas praças e vias do centro.',

  mobilidade:
    'Caratinga é cortada pela BR-116 (Rodovia Rio–Bahia), seu principal eixo de ligação, que dá acesso ao Vale do Aço e a Governador Valadares e conecta a cidade ao restante do leste de Minas; o relevo de morros marca a circulação dentro da área urbana.',

  corridas: [
    {
      nome: 'Corrida de Aniversário de Caratinga',
      descricao:
        'Prova de rua tradicional associada às comemorações do aniversário do município, com percursos para corredores e caminhantes pelas vias centrais.',
    },
    {
      nome: 'Circuito de corridas de rua do leste mineiro',
      descricao:
        'Caratinga integra o calendário de provas da região do Vale do Rio Doce, com etapas que atraem corredores das cidades vizinhas.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura futebol, caminhada e corrida de rua, com uso intenso das praças e do entorno arborizado do centro. A presença universitária da UNEC e o calendário de eventos esportivos da prefeitura ajudam a sustentar grupos de treino e práticas ao ar livre.',
  academias:
    'A oferta acompanha o porte de cidade média mineira, com academias de musculação, estúdios de treino funcional e crossfit, complementados por praças e áreas verdes usadas para caminhada e atividades em grupo.',

  destaquesFitness: [
    'Polo regional do leste de Minas, com público universitário (UNEC) e classe média ativa.',
    'Natureza preservada por perto, como a RPPN Feliciano Miguel Abdala e a Rota do Muriqui.',
    'Praças centrais arborizadas, como a Cesário Alvim, ideais para caminhada e corrida.',
    'Clima tropical do leste mineiro, com inverno ameno e seco favorável a treinos ao ar livre.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Polo do leste mineiro no Vale do Rio Doce, Caratinga combina vida universitária, natureza preservada e praças arborizadas no centro. Um personal trainer ajuda a aproveitar esse cenário com método — ajustando horários ao clima tropical e montando rotinas de corrida e caminhada que se encaixam na rotina de estudantes e profissionais da cidade.',

  vizinhas: ['governador-valadares-mg', 'ipatinga-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Caratinga', url: 'https://cidades.ibge.gov.br/brasil/mg/caratinga/panorama' },
    { nome: 'Prefeitura de Caratinga', url: 'https://caratinga.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
