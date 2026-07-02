import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-jose-do-barreiro-sp',
  nome: 'São José do Barreiro',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'barreirense',
  tipo: 'cidade',

  populacao: 3853,
  populacaoAno: 2022,
  idhm: 0.684,
  idhmClasse: 'médio',
  pibPerCapita: 20906.6,
  pibPerCapitaAno: 2023,
  altitudeM: 510,

  resumoEconomico:
    'No extremo leste do Vale do Paraíba paulista, aos pés da Serra da Bocaina e na divisa com o Rio de Janeiro, São José do Barreiro é uma Estância Turística desde 1998 e um dos municípios menos populosos do estado. A cidade nasceu como pouso de tropeiros em uma passagem difícil da antiga Estrada Real e viveu um período de riqueza no ciclo do café, que deixou fazendas e casarões que hoje sustentam boa parte do turismo local. A economia atual combina administração pública, serviços e turismo histórico e de natureza — a cidade é a principal porta de entrada do Parque Nacional da Serra da Bocaina — com uma agropecuária voltada sobretudo à pecuária leiteira.',

  mercado:
    'O mercado fitness de São José do Barreiro é extremamente reduzido, compatível com um município de menos de 4 mil habitantes e baixa densidade demográfica: não há redes de academia, e a estrutura formal de treino se resume a pequenos espaços locais. Parte da demanda por orientação física vem do próprio fluxo de visitantes que buscam trekking, cavalgadas e passeios às cachoeiras da Serra da Bocaina, o que abre espaço para personal trainers que atuem com preparo físico para atividades ao ar livre, tanto para moradores quanto para quem visita fazendas históricas e pousadas da região.',

  bairrosNobres: ['Centro Histórico'],
  bairrosPopulares: ['Formoso', 'Zona Rural'],

  parques: [
    {
      nome: 'Parque Nacional da Serra da Bocaina',
      descricao:
        'Criado em 1971 na divisa entre São Paulo e Rio de Janeiro, é considerado um "paraíso do trekking", com a Trilha do Ouro — travessia histórica de três a quatro dias — e cachoeiras como a do Veado, parada obrigatória de quem percorre o caminho dentro do parque. Abriga espécies ameaçadas, como a onça-pintada, e mais de 300 espécies de aves.',
    },
    {
      nome: 'Pico do Tira Chapéu',
      descricao:
        'Ponto culminante da Serra da Bocaina, com 2.088 m de altitude e entre os dez mais altos do estado de São Paulo, oferece vista de 360° sobre o Vale do Paraíba e a Serra da Mantiqueira — destino de caminhadas de longo curso para quem busca desafio físico.',
    },
    {
      nome: 'Praça da Matriz e Centro Histórico',
      descricao:
        'Núcleo urbano da cidade, reúne a Igreja Matriz, o coreto e casarões coloniais em ruas de calçamento de pedra — ponto de partida para caminhadas curtas pelo entorno da sede do município.',
    },
  ],
  ciclovias:
    'Não há estrutura cicloviária no município; boa parte do deslocamento entre a sede, o bairro de Formoso e as fazendas históricas se dá por estradas rurais não pavimentadas, também usadas para mountain bike e cavalgadas.',

  clima:
    'O relevo acidentado da Serra da Bocaina faz o clima variar bastante dentro do próprio município: a sede fica a 510 m de altitude, com temperaturas mais amenas do que o litoral próximo, enquanto o Pico do Tira Chapéu, a mais de 2 mil metros, tem clima de altitude, frio, com temperaturas bem mais baixas.',
  climaTreino:
    'A altitude moderada da sede favorece o treino ao ar livre na maior parte do ano, mas quem se aventura em trilhas mais altas, como as do Parque Nacional da Serra da Bocaina, deve se preparar para queda brusca de temperatura, neblina e piso irregular, com agasalho e hidratação adequados.',

  mobilidade:
    'O principal acesso é pela Estrada dos Tropeiros (SP-068), rodovia histórica que liga Silveiras a Bananal passando por Areias, Arapeí e São José do Barreiro. De São Paulo, o trajeto mais comum segue pela Rodovia Presidente Dutra até a saída de Queluz; do Rio de Janeiro, pela Dutra até Barra Mansa e depois pela RJ-157 via Bananal. O transporte público é limitado, com linhas de ônibus regionais de poucos horários por dia ligando o município a Guaratinguetá e Bananal.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva local gira em torno do ecoturismo e do turismo de aventura ligados à Serra da Bocaina: trekking na Trilha do Ouro e em outras trilhas do parque nacional, cavalgadas em fazendas históricas do ciclo do café, mountain bike em estradas rurais e banho em cachoeiras como a do Veado e a do Formoso (Cachoeirão). Não há tradição consolidada de provas de corrida de rua no município.',
  academias:
    'A oferta de academias é muito restrita, sem redes presentes na cidade; a estrutura se limita a pequenos espaços locais e a profissionais autônomos, o que é compatível com o porte pequeno e a vocação rural e turística do município.',

  destaquesFitness: [
    'Principal porta de entrada do Parque Nacional da Serra da Bocaina, referência nacional em trekking, com a Trilha do Ouro como travessia histórica de três a quatro dias.',
    'Pico do Tira Chapéu, com 2.088 m, entre os dez pontos mais altos do estado de São Paulo, ponto de partida para caminhadas de longo curso.',
    'Cachoeiras como a do Veado, dentro do parque, e a do Formoso (Cachoeirão), no bairro rural de Formoso, ampliam as opções de treino ao ar livre.',
    'Cavalgadas em fazendas históricas do ciclo do café, como a Fazenda São Francisco, mantêm viva uma tradição física ligada ao passado tropeiro e cafeeiro da região.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 550,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Pequena, rural e cercada pela Serra da Bocaina, São José do Barreiro tem no trekking, nas cavalgadas e nas cachoeiras seu principal cenário de atividade física. Como o mercado formal de academias praticamente não existe, um personal trainer que trabalhe com preparo físico para trilhas e treino ao ar livre tende a ser a alternativa mais prática para moradores e visitantes manterem a constância no município.',

  vizinhas: ['paraty-rj', 'guaratingueta-sp', 'resende-rj'],

  fontes: [
    { nome: 'IBGE Cidades — São José do Barreiro', url: 'https://cidades.ibge.gov.br/brasil/sp/sao-jose-do-barreiro/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura Municipal da Estância Turística de São José do Barreiro', url: 'https://saojosedobarreiro.sp.gov.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
