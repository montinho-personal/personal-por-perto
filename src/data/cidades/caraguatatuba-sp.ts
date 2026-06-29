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
    'Maior cidade do litoral norte paulista, Caraguatatuba tem orla extensa com ciclovia e uma cena de corrida forte. Um personal trainer ajuda a aproveitar a praia como academia a céu aberto, ajustando horários e hidratação ao calor úmido do litoral.',

  vizinhas: ['sao-jose-dos-campos-sp', 'taubate-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Caraguatatuba', url: 'https://cidades.ibge.gov.br/brasil/sp/caraguatatuba/panorama' },
    { nome: 'Prefeitura de Caraguatatuba', url: 'https://www.caraguatatuba.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
