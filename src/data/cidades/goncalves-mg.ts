import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'goncalves-mg',
  nome: 'Gonçalves',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'gonçalvense',
  tipo: 'cidade',

  populacao: 4727,
  populacaoAno: 2022,

  resumoEconomico:
    'Encravada na Serra da Mantiqueira, no sul de Minas, Gonçalves tem 4.727 habitantes (Censo 2022) e altitudes que vão de 900 a 2.120 metros dentro do próprio município. A economia gira em torno do ecoturismo — a cidade integra o circuito Serras Verdes do Sul de Minas e já soma mais de 1.200 leitos em hospedagem e cerca de 38 bares e restaurantes —, ao lado da agricultura familiar e do artesanato.',

  mercado:
    'O mercado de personal trainer é pequeno e de relação direta: poucos profissionais atendendo moradores, produtores e o pessoal que vive do turismo — condutores e guias que passam o dia em trilha de montanha. A academia do centro divide espaço com o atendimento a domicílio e com o treino ao ar livre, que aqui é quase inevitável.',

  bairrosNobres: ['Centro', 'Vila Alterosa', 'Cantagalo', 'Chácaras'],
  bairrosPopulares: ['Sertãozinho', 'Bairro dos Costas', 'Vila Nova', 'Zona Rural'],

  parques: [
    {
      nome: 'Pedra do Forno',
      descricao:
        'O principal atrativo da cidade, a 1.970 metros de altitude. A trilha tem cerca de 3,4 km, subida íngreme de dificuldade moderada e um trecho final com escada de ferro fixada na rocha — no topo, vista de 360 graus da Mantiqueira.',
    },
    {
      nome: 'Cachoeiras do município',
      descricao:
        'A Fazendinha, a da Neca, a do Retiro, a do Simão, a das Andorinhas e a do Cruzeiro formam o circuito de caminhada e banho da cidade, distribuídas pelas estradas rurais.',
    },
    {
      nome: 'Serra da Mantiqueira',
      descricao:
        'Picos rochosos, matas de araucária e vales cortados por rios definem o relevo do município, com desnível constante em praticamente qualquer percurso.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária urbana. As estradas de terra entre os bairros rurais formam o circuito de cicloturismo e mountain bike, com subidas longas garantidas pelo relevo de serra.',

  clima:
    'Tropical de altitude, com verão chuvoso e inverno seco e frio — nas partes mais altas do município, as mínimas do inverno chegam perto de zero e a geada é comum.',
  climaTreino:
    'A altitude deixa o treino ao ar livre confortável quase o ano inteiro, com manhãs frescas mesmo no verão. No inverno, o frio pede aquecimento mais longo e roupa em camadas; é também a melhor época para as trilhas, com céu limpo e trechos secos.',

  mobilidade:
    'A cidade é pequena e caminhável no centro, mas o município é espalhado: os bairros rurais e os acessos às trilhas ficam a quilômetros de estrada de terra. A ligação regional se faz por Camanducaia e pela Mantiqueira paulista.',

  corridas: [
    {
      nome: 'Provas de montanha da Mantiqueira',
      descricao:
        'O calendário regional reúne corridas de trail e travessias que exploram o desnível da serra, com percursos técnicos e subidas longas.',
    },
  ],
  culturaEsportiva:
    'Caminhar e subir serra fazem parte da rotina de quem vive do turismo e do campo. Trilha, mountain bike e escalada estruturam o calendário local, e o futebol amador ocupa o fim de semana.',
  academias:
    'A oferta formal é pequena e concentrada no centro, com espaços compactos de musculação — o que abre espaço para o atendimento individual e para o treino em casa.',

  destaquesFitness: [
    'Pedra do Forno, a 1.970 m, com trilha de 3,4 km e subida íngreme.',
    'Altitudes de 900 a 2.120 m dentro do próprio município.',
    'Seis cachoeiras principais ligadas por estradas rurais de desnível constante.',
    'Clima de altitude, com manhãs frescas mesmo no verão.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 650,
    onlineMin: 130,
    onlineMax: 350,
  },

  conclusao:
    'Gonçalves é pequena no censo e enorme no desnível. Um personal trainer daqui prepara perna e fôlego para a serra — e usa a academia como base de força para que a trilha do fim de semana não cobre a conta na segunda-feira.',

  vizinhas: ['camanducaia-mg', 'sao-bento-do-sapucai-sp', 'itajuba-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Gonçalves', url: 'https://www.ibge.gov.br/cidades-e-estados/mg/goncalves.html' },
    { nome: 'Prefeitura de Gonçalves', url: 'https://www.goncalves.mg.gov.br/' },
    { nome: 'Minas Gerais — Destino Gonçalves', url: 'https://www.minasgerais.com.br/pt/destinos/goncalves' },
  ],
  atualizadoEm: '2026-08-10',
};
