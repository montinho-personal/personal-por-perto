import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'presidente-figueiredo-am',
  nome: 'Presidente Figueiredo',
  uf: 'AM',
  estado: 'Amazonas',
  estadoSlug: 'amazonas',
  regiao: 'Norte',
  gentilico: 'figueiredense',
  tipo: 'cidade',

  populacao: 30668,
  populacaoAno: 2022,
  idhm: 0.650,
  idhmClasse: 'médio',
  altitudeM: 120,

  resumoEconomico:
    'Conhecida como a Terra das Cachoeiras, Presidente Figueiredo fica cerca de 120 km ao norte de Manaus pela BR-174, no caminho para Roraima, e reúne mais de cem quedas d\'água catalogadas em seu território. A economia combina o ecoturismo — cachoeiras, grutas e cavernas que atraem visitantes da capital e de fora do estado —, a mineração de cassiterita (minério de estanho) explorada pela Mineração Taboca nas bacias dos rios Alalaú e Jatapú, a agricultura, com destaque para o cultivo de cana-de-açúcar, e a administração pública, um dos maiores empregadores do município.',

  mercado:
    'O mercado fitness de Presidente Figueiredo é pequeno e concentrado em academias locais de musculação e treino funcional, típico de um município do interior do Amazonas com forte vocação turística. A procura por personal trainers tende a vir tanto de moradores quanto de guias e condutores de turismo de aventura, que precisam de preparo físico para trilhas, travessias e visitas às cavernas, além de quem busca treino orientado para lidar com o calor e a umidade constantes da floresta amazônica.',

  bairrosNobres: ['Centro', 'Vila C'],
  bairrosPopulares: ['Honório Roldão', 'Morada do Sol'],

  parques: [
    {
      nome: 'Iracema Falls (Cachoeira de Iracema e Cachoeira das Araras)',
      descricao:
        'Parque ecológico às margens da BR-174, a cerca de 8 km da sede, que reúne a Cachoeira de Iracema — queda d\'água de 8 metros em cenário preservado —, a Cachoeira das Araras, grutas e trilhas na mata, um dos pontos mais visitados do município.',
    },
    {
      nome: 'Santuário Ecológico Presidente Figueiredo',
      descricao:
        'Reserva Particular do Patrimônio Natural (RPPN) organizada em torno da Cachoeira do Santuário, com trilhas e infraestrutura voltadas à visitação e à caminhada em meio à floresta amazônica.',
    },
    {
      nome: 'APA Caverna do Maroaga',
      descricao:
        'Área de Proteção Ambiental de 374,7 mil hectares que abriga a Caverna do Maroaga, com cerca de 800 metros de extensão e batizada em homenagem a um chefe Waimiri-Atroari, e a Gruta da Judéia, na estrada de Balbina (AM-240) — destino de trekking e espeleologia guiada.',
    },
  ],
  ciclovias:
    'Não há estrutura cicloviária relevante na sede; os deslocamentos urbanos a pé e de bicicleta acontecem nas vias do Centro, enquanto o treino ao ar livre mais buscado por moradores e visitantes está nas trilhas de acesso às cachoeiras e cavernas do entorno.',

  clima:
    'O clima é equatorial, quente e úmido o ano inteiro (tipo Af de Köppen), com temperatura média de cerca de 25,5 °C e variação entre 23 °C e 31 °C. As chuvas são abundantes durante todo o ano, com pico em abril (média de 416 mm) e o período mais seco entre agosto e novembro (mínima em torno de 125 mm em agosto).',
  climaTreino:
    'A combinação de calor, umidade elevada e chuvas frequentes pede treinos no início da manhã ou no fim da tarde, com hidratação reforçada; nas trilhas até cachoeiras e cavernas, o piso pode ficar escorregadio na temporada mais chuvosa, o que exige atenção redobrada e calçado adequado.',

  mobilidade:
    'O acesso principal é pela BR-174, rodovia federal que liga Manaus a Presidente Figueiredo e segue rumo a Boa Vista (RR); a viagem desde a capital leva cerca de 1h40 de carro ou ônibus. A partir da sede, a AM-240 (estrada de Balbina) dá acesso a atrativos como a Gruta da Judéia e a Usina Hidrelétrica de Balbina. Dentro da cidade, o deslocamento é feito a pé, de moto, mototáxi e carro, e boa parte do turismo de aventura depende de vans, guias e veículos próprios para chegar às cachoeiras e cavernas espalhadas pelo território.',

  corridas: [
    {
      nome: 'Corrida dos Trabalhadores',
      descricao:
        'Prova de 5 km organizada pela Prefeitura de Presidente Figueiredo em 1º de maio, Dia do Trabalhador, com categorias geral e PCD; a inscrição é feita com doação de alimentos não perecíveis para instituições beneficentes do município.',
    },
  ],
  culturaEsportiva:
    'A vida ativa da cidade gira em torno do ecoturismo: trekking até as cachoeiras, espeleologia guiada nas grutas e cavernas da região e passeios de flutuação nos rios movimentam moradores e visitantes o ano todo. A isso se somam eventos pontuais como a Corrida dos Trabalhadores e a participação de atletas do município em jogos escolares e campeonatos regionais de atletismo, sempre condicionados ao calor e à umidade típicos da Amazônia.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, concentradas no Centro e nos bairros mais próximos, com porte compatível com um município pequeno do interior do Amazonas — sem redes de grande porte, mas com procura crescente ligada ao público do turismo de aventura.',

  destaquesFitness: [
    'Terra das Cachoeiras: mais de cem quedas d\'água catalogadas, incluindo a Cachoeira de Iracema e a Cachoeira das Araras.',
    'Grutas e cavernas da APA Caverna do Maroaga, como a Caverna do Maroaga e a Gruta da Judéia, que movimentam trekking e espeleologia guiada.',
    'Clima equatorial quente e úmido, com chuvas intensas o ano todo, que exige planejamento de horário para o treino ao ar livre.',
    'Cidade ligada a Manaus pela BR-174, com economia apoiada na mineração de cassiterita, na agricultura e no ecoturismo.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Cercada por cachoeiras, grutas e floresta, Presidente Figueiredo tem no ecoturismo o centro de sua identidade e de sua rotina esportiva. Treinar na cidade significa lidar com o calor e a umidade equatoriais e aproveitar as trilhas do entorno com preparo físico adequado — é aí que um personal trainer faz diferença, ajudando a organizar horários, hidratação e condicionamento para quem vive ou visita a Terra das Cachoeiras.',

  vizinhas: ['manaus-am', 'itacoatiara-am'],

  fontes: [
    { nome: 'IBGE Cidades — Presidente Figueiredo', url: 'https://cidades.ibge.gov.br/brasil/am/presidente-figueiredo/panorama' },
    { nome: 'Prefeitura de Presidente Figueiredo', url: 'https://www.presidentefigueiredo.am.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
