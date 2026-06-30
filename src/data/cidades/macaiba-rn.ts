import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'macaiba-rn',
  nome: 'Macaíba',
  uf: 'RN',
  estado: 'Rio Grande do Norte',
  estadoSlug: 'rio-grande-do-norte',
  regiao: 'Nordeste',
  gentilico: 'macaibense',
  tipo: 'cidade',

  populacao: 82249,
  populacaoAno: 2022,
  idhm: 0.64,
  idhmClasse: 'médio',
  altitudeM: 41,

  resumoEconomico:
    'Integrante da Região Metropolitana de Natal, Macaíba se firmou como um dos principais polos industriais e logísticos do Rio Grande do Norte. Cortada pelas BR-304 e BR-226 e a poucos quilômetros do Aeroporto Internacional Aluízio Alves, a cidade abriga distritos industriais com dezenas de empresas instaladas e a Zona de Processamento de Exportação (ZPE), além de forte presença do agronegócio. O município também sedia a Escola Agrícola de Jundiaí (EAJ/UFRN), campus de ciências agrárias da Universidade Federal do Rio Grande do Norte.',

  mercado:
    'A proximidade com Natal e o crescimento populacional impulsionam aos poucos o mercado fitness macaibense. A musculação é atendida por academias de bairro e redes de baixo custo ao longo dos principais eixos, e a procura por personal trainers cresce entre quem busca acompanhamento mais próximo de casa, sem o deslocamento até a capital. O perfil ainda é o de uma cidade-dormitório e industrial, o que abre espaço para atendimentos em domicílio e em condomínios.',

  bairrosNobres: ['Centro', 'Bela Macaíba', 'Mangabeira', 'Tavares de Lira'],
  bairrosPopulares: ['Campo das Mangueiras', 'Cana Brava', 'Alto da Raiz', 'Castanheira'],

  parques: [
    {
      nome: 'Orla do Rio Jundiaí',
      descricao:
        'O rio Jundiaí corta a cidade e dá nome ao seu cartão-postal histórico. Suas margens, no entorno do centro, funcionam como área de caminhada e ponto de encontro, com requalificação e dragagem em curso para ampliar o uso público.',
    },
    {
      nome: 'Campus da EAJ/UFRN (Jundiaí)',
      descricao:
        'A Escola Agrícola de Jundiaí ocupa uma ampla área verde no distrito de Jundiaí, com vegetação preservada e vias arborizadas — espaço naturalmente procurado para caminhada e corrida ao ar livre.',
    },
    {
      nome: 'Praças e áreas verdes do Centro',
      descricao:
        'As praças do centro histórico e os espaços públicos junto ao rio servem de apoio para treino funcional, alongamento e atividades em grupo ao ar livre, especialmente no início da manhã e no fim da tarde.',
    },
  ],
  ciclovias:
    'A malha cicloviária estruturada ainda é incipiente; o pedal acontece principalmente por vias urbanas e pelas estradas vicinais entre os distritos, exigindo atenção ao tráfego nos eixos das BR-304 e BR-226.',

  clima:
    'O clima é tropical quente e semiúmido, típico da Região Metropolitana de Natal, com médias em torno de 27 °C, sol abundante e chuvas concentradas entre março e julho.',
  climaTreino:
    'O calor e a forte radiação pedem treino no início da manhã ou no fim da tarde, com boa hidratação e proteção solar. Nos horários centrais do dia, ambientes cobertos e ventilados são a opção mais segura.',

  mobilidade:
    'O deslocamento é predominantemente por carro e ônibus, apoiado nas BR-304 e BR-226 e na RN-160, com ligação rápida a Natal, Parnamirim e São Gonçalo do Amarante. A proximidade do Aeroporto Internacional Aluízio Alves reforça o papel logístico da cidade. Não há metrô urbano.',

  corridas: [
    {
      nome: 'Corridas do aniversário de Macaíba',
      descricao:
        'Em outubro, as comemorações do aniversário da cidade costumam reunir provas e atividades esportivas de rua, movimentando corredores e caminhantes locais.',
    },
    {
      nome: 'Provas da Região Metropolitana de Natal',
      descricao:
        'A proximidade com a capital aproxima os macaibenses de um calendário ativo de corridas de rua na grande Natal, com percursos de 5 km e 10 km ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o futebol amador e as festas populares com uma cena crescente de caminhada e corrida de rua, favorecida pela influência da vizinha Natal. O perfil interiorano e o calor estável fazem do treino ao ar livre, cedo ou no fim do dia, parte da rotina de quem se exercita.',
  academias:
    'A oferta se concentra em academias de bairro e estúdios de funcional no centro e nos eixos mais movimentados, complementada pela facilidade de acesso às redes maiores em Natal e Parnamirim, a poucos minutos de carro.',

  destaquesFitness: [
    'Polo industrial e logístico da Região Metropolitana de Natal, com demanda crescente por atendimento próximo de casa.',
    'Orla do rio Jundiaí e áreas verdes do campus da EAJ/UFRN como espaços para corrida e caminhada.',
    'Clima quente e ensolarado o ano todo, favorecendo o treino ao ar livre cedo ou no fim da tarde.',
    'Proximidade de Natal, que amplia o acesso a academias, provas de rua e profissionais.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 350,
  },

  conclusao:
    'Em pleno crescimento dentro da Região Metropolitana de Natal, Macaíba combina vocação industrial e logística com áreas verdes como a orla do rio Jundiaí e o campus da EAJ/UFRN. Para quem mora ou trabalha na cidade, um personal trainer ajuda a montar uma rotina adaptada ao calor e à correria do dia a dia, sem depender do deslocamento até a capital.',

  vizinhas: ['natal-rn', 'parnamirim-rn', 'sao-goncalo-do-amarante-rn'],

  fontes: [
    { nome: 'IBGE Cidades — Macaíba', url: 'https://cidades.ibge.gov.br/brasil/rn/macaiba/panorama' },
    { nome: 'Prefeitura de Macaíba', url: 'https://macaiba.rn.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
