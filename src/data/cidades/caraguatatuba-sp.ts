import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'caraguatatuba-sp',
  nome: 'Caraguatatuba',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'caraguatatubense',
  tipo: 'cidade',

  populacao: 134873,
  populacaoAno: 2022,
  idhm: 0.759,
  idhmClasse: 'alto',

  resumoEconomico:
    'Principal cidade do litoral norte paulista e a mais populosa da região, Caraguatatuba tem economia baseada em turismo de praia, com forte alta temporada de verão. Abriga a Unidade de Tratamento de Gás Monteiro Lobato (UTGCA) da Petrobras, que processa gás do pré-sal e gera royalties e uma cadeia local de fornecedores.',

  mercado:
    'A demanda é puxada pela sazonalidade do verão e pelo "corpo de praia", com público que mistura moradores, turistas e segunda residência. A orla é o grande ginásio a céu aberto, para corrida, calistenia e treino funcional na areia.',

  bairrosNobres: ['Martim de Sá', 'Indaiá', 'Tabatinga', 'Massaguaçu'],
  bairrosPopulares: ['Travessão', 'Jardim Britânia', 'Perequê-Mirim', 'Golfinhos'],

  parques: [
    {
      nome: 'Orla da Praia do Centro',
      descricao:
        'Calçadão extenso com ciclovia, pista de caminhada, rampa de skate e quadras, que recebe eventos esportivos.',
    },
    {
      nome: 'Praia Martim de Sá',
      descricao:
        'Ampla faixa de areia com espaço para esportes e movimento — o principal ponto de treino na praia.',
    },
    {
      nome: 'Orla das praias do norte e do sul',
      descricao:
        'Calçadão contínuo ligando praias como Flecheiras, Indaiá, Camaroeiro e Prainha, para corrida e caminhada.',
    },
  ],
  ciclovias:
    'Há cerca de 13 km de ciclovia ao longo da orla, ligando da Praia das Flecheiras a Martim de Sá.',

  clima:
    'O clima é tropical úmido litorâneo, quente e chuvoso, com chuvas intensas no verão por causa da Serra do Mar.',
  climaTreino:
    'O calor e a umidade altos recomendam treinar cedo ou no fim do dia, com alternativas indoor no verão chuvoso.',

  mobilidade:
    'Caraguatatuba é servida pela Rodovia dos Tamoios (SP-099), principal ligação com o Vale do Paraíba, e pela Rio-Santos (BR-101/SP-055), ao longo do litoral.',

  corridas: [
    {
      nome: 'Caraguá 21K',
      descricao:
        'Uma das maiores provas do litoral norte, com percursos de 21 km, 10 km, 5 km, kids e caminhada.',
    },
    {
      nome: 'Virada Caraguatatubense de Corrida de Rua',
      descricao:
        'Prova de réveillon (31/12) com percursos de 5 km e 15 km.',
    },
  ],
  culturaEsportiva:
    'Há forte cultura de esportes de praia e ao ar livre (surfe, beach tennis, vôlei de praia e corrida na orla), com calendário municipal robusto de corridas e o Projeto Verão na temporada.',
  academias:
    'A oferta reúne academias e estúdios, com a orla e suas praias funcionando como academia a céu aberto e a sazonalidade do verão elevando a demanda.',

  academiasProximas: [
    { nome: 'Academia Caraguá Training', detalhe: 'na Av. Prisciliana de Castilho' },
  ],
  academiasVerificadasEm: '2026-10-06',

  destaquesFitness: [
    'Orla com cerca de 13 km de ciclovia e calçadão: estrutura outdoor de primeira.',
    'Treino na areia (Martim de Sá, Centro) como diferencial de personal trainers.',
    'Calendário forte de corridas (Caraguá 21K, Virada) e esportes de praia.',
    'Sazonalidade do verão, que gera pico de demanda fitness.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 170,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Maior cidade do litoral norte paulista, Caraguatatuba — Caraguá para quem é de lá — tem orla extensa com ciclovia e uma cena de corrida forte. Um personal trainer ajuda a aproveitar a praia como academia a céu aberto, ajustando horários e hidratação ao calor úmido do litoral.',

  /*
   * Prints de 06/10: autocompletar com "caragua" (o apelido, que passou a
   * constar na conclusão), "personal caraguatatuba" e "personal caragua";
   * PAA com "quanto custa 1 mês", "3 vezes por semana", "vale a pena pagar"
   * e "um personal trainer pode me ajudar a emagrecer?" — o padrão das
   * cidades printadas (docs/seo-local-estrategia.md, seção 5), mais a de
   * emagrecer, que já tinha aparecido em Tamboré.
   */
  metaFoco: 'preco',
  faqsBusca: { precoMensal: true, instagram: true, onlineOuPresencial: true },

  faqsExtra: [
    {
      pergunta: 'Um personal trainer pode me ajudar a emagrecer em Caraguatatuba?',
      resposta:
        'Pode, na parte que cabe a ele: o treino. O personal monta a musculação que segura a massa muscular enquanto o peso cai, dosa o cardio — a orla e a ciclovia de Caraguá servem bem para isso — e mantém a constância nas semanas em que o calor e a rotina atrapalham. O que decide o déficit é a alimentação, trabalho de nutricionista. E desconfie de promessa de quilos por mês: o ritmo depende do corpo, da dieta e da rotina, não só do treino.',
    },
  ],

  // Eram São José dos Campos e Taubaté. Em 06/10/2026 entraram na frente
  // São Sebastião e Ubatuba, que fazem divisa, e Ilhabela, do litoral norte.
  vizinhas: ['sao-sebastiao-sp', 'ubatuba-sp', 'ilhabela-sp', 'sao-jose-dos-campos-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Caraguatatuba', url: 'https://cidades.ibge.gov.br/brasil/sp/caraguatatuba/panorama' },
    { nome: 'Prefeitura de Caraguatatuba', url: 'https://www.caraguatatuba.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-10-06',
};
