import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'imbe-rs',
  nome: 'Imbé',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'imbeense',
  tipo: 'cidade',

  populacao: 26824,
  populacaoAno: 2022,
  idhm: 0.760,
  idhmClasse: 'alto',
  altitudeM: 2,

  resumoEconomico:
    'Emancipada de Tramandaí em 1988 e separada dela pelo Rio Tramandaí, Imbé é um dos balneários do Litoral Norte gaúcho e uma das cidades que mais cresceram proporcionalmente na região: o Censo 2022 registrou 26.824 habitantes, um salto de mais de 50% frente aos 17.670 moradores de 2010. A economia gira em torno do turismo de veraneio, da construção civil e do comércio de apoio à temporada, com forte sazonalidade — a população efetiva se multiplica no verão, quando a cidade recebe veranistas de Porto Alegre, a cerca de 120 km. O IDHM é alto (0,760, Atlas Brasil).',

  mercado:
    'O mercado de personal trainer em Imbé segue o ritmo sazonal do litoral. No verão, com a orla cheia de veranistas, cresce a procura por treino ao ar livre na praia, aulas funcionais na areia e acompanhamento de quem quer manter a rotina durante as férias. No restante do ano, a demanda se concentra nos moradores fixos, atendidos em academias locais e em atendimento individual. Por ser vizinha e menor que Tramandaí, a cidade tende a compartilhar público e profissionais com o outro lado da ponte.',

  bairrosNobres: ['Centro', 'Barra', 'Marisul', 'Riviera'],
  bairrosPopulares: ['Nordeste', 'Ipiranga', 'Presidente', 'Encademar'],

  parques: [
    {
      nome: 'Orla e calçadão da Praia da Barra',
      descricao:
        'Trecho central da orla de Imbé, com a melhor estrutura turística da cidade e calçadão à beira-mar — o principal espaço para caminhada, corrida e treino ao ar livre, com uso intenso na temporada de verão.',
    },
    {
      nome: 'Lago do Braço Morto',
      descricao:
        'Lago tranquilo ligado ao sistema lagunar do Rio Tramandaí, usado para pedalinho, caiaque e passeios; um dos cartões-postais da cidade e alternativa à orla marítima para atividade ao ar livre.',
    },
    {
      nome: 'Praia de Imara e as dunas',
      descricao:
        'Extremo norte da orla, na divisa com Osório, com dunas de areia branca e fofa que servem de cenário para o sandboard e para caminhadas mais isoladas na faixa de praia.',
    },
  ],
  ciclovias:
    'O calçadão da orla é o principal eixo para caminhar, correr e pedalar à beira-mar, com maior movimento na temporada de verão; a malha cicloviária estruturada fora da faixa litorânea ainda é limitada.',

  clima:
    'O clima é subtropical úmido, com verões quentes — temporada de banhos de mar entre a segunda metade de dezembro e meados de março — e invernos frios e ventosos, típicos do litoral norte gaúcho.',
  climaTreino:
    'O verão concentra o movimento de treino ao ar livre na orla, e o início da manhã ou o fim da tarde ajudam a evitar o calor e a multidão de veranistas. No inverno, o frio e os ventos fortes do litoral tornam os ambientes cobertos a opção mais confortável para manter a constância.',

  mobilidade:
    'O acesso principal se dá pela RS-030 (Osório–Tramandaí) e pela Estrada do Mar (RS-389), que ligam Imbé aos demais balneários do Litoral Norte e a Porto Alegre, a cerca de 120 km. A ligação com Tramandaí é feita pelo conjunto de pontes Giuseppe Garibaldi, sobre o Rio Tramandaí, estrutura antiga e com congestionamentos frequentes no verão — motivo pelo qual está em andamento o projeto de uma nova ponte suspensa entre as duas cidades. O deslocamento interno é feito por vias paralelas à orla e por ônibus.',

  corridas: [
    {
      nome: 'Imbé Night Run',
      descricao:
        'Corrida noturna realizada na orla da Praia da Barra, com edições recorrentes em janeiro e percursos de cerca de 5 km, além de categoria kangoo e prova infantil — um dos eventos que marcam o calendário esportivo de verão da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é voltada à praia: caminhada e corrida na orla, surfe nas proximidades dos molhes, esportes náuticos e passeios de barco no Rio Tramandaí, e sandboard nas dunas da Praia de Imara. O Museu de Ciências Naturais do Ceclimar, às margens da Lagoa Tramandaí, também atrai quem caminha pela região.',
  academias:
    'A oferta de academias é formada por estúdios e academias de porte pequeno a médio, concentrados no Centro e na orla, voltados tanto a moradores fixos quanto a veranistas na alta temporada.',

  destaquesFitness: [
    'Uma das cidades que mais cresceram no Litoral Norte gaúcho, com 26.824 habitantes no Censo 2022 (+51,8% frente a 2010).',
    'Orla e calçadão da Praia da Barra como principal espaço de caminhada e corrida ao ar livre.',
    'Separada de Tramandaí pelo Rio Tramandaí e ligada por pontes, com forte sazonalidade de veraneio.',
    'Imbé Night Run, corrida noturna anual na orla, e dunas da Praia de Imara para sandboard.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 240,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Em Imbé, o treino segue o ritmo da orla e da temporada de veraneio, com a Praia da Barra funcionando como uma academia a céu aberto boa parte do ano. Um personal trainer ajuda a equilibrar o atendimento a veranistas no pico do verão e a moradores fixos no restante do calendário, aproveitando a praia, as dunas e o entorno do Rio Tramandaí como cenário de treino.',

  vizinhas: ['tramandai-rs', 'osorio-rs', 'capao-da-canoa-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Imbé', url: 'https://cidades.ibge.gov.br/brasil/rs/imbe/panorama' },
    { nome: 'Prefeitura de Imbé', url: 'https://www.imbe.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
