import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'erechim-rs', nome: 'Erechim', uf: 'RS', estado: 'Rio Grande do Sul', estadoSlug: 'rio-grande-do-sul', regiao: 'Sul', gentilico: 'erechinense', tipo: 'cidade',
  populacao: 105705, populacaoAno: 2022, idhm: 0.776, idhmClasse: 'alto', altitudeM: 783,

  resumoEconomico:
    'Principal polo regional do norte gaúcho, no Alto Uruguai, Erechim foi uma das primeiras cidades brasileiras com traçado urbano planejado — uma malha em xadrez cortada por avenidas diagonais largas que convergem para pontos da cidade. De colonização sobretudo italiana (também polonesa, alemã e judaica), reúne forte agroindústria, comércio e serviços que atendem dezenas de municípios da região, com indicadores de qualidade de vida acima da média do interior.',

  mercado:
    'Como polo regional do norte gaúcho, Erechim concentra a oferta de academias e serviços de saúde de toda a microrregião, com redes nacionais e estúdios locais nos bairros centrais. O personal trainer atua tanto em academia quanto no atendimento domiciliar e em condomínios — uma alternativa valorizada no inverno frio, quando treinar em casa ou em ambiente fechado é mais confortável.',

  bairrosNobres: ['Centro', 'Bela Vista', 'Cristo Rei', 'Atlântico'],
  bairrosPopulares: ['Aldo Moro', 'Progresso', 'Três Vendas', 'Koller'],

  parques: [
    {
      nome: 'Parque Longines Malinowski',
      descricao:
        'Principal área verde da cidade, com lago, trilhas e caminhos para caminhada, espaços de lazer e piquenique — o cartão-postal natural de Erechim e ponto de encontro para atividade ao ar livre.',
    },
    {
      nome: 'Castelo (Centro de Eventos e área cultural)',
      descricao:
        'Conjunto histórico em estilo de castelo, em área arborizada usada para eventos e passeios, com entorno agradável para caminhada leve no Centro.',
    },
    {
      nome: 'Avenidas diagonais e perimetral',
      descricao:
        'As largas avenidas do traçado planejado, com canteiros e calçadas amplas, são muito usadas por quem caminha e corre no dia a dia, sobretudo nas primeiras horas da manhã.',
    },
  ],
  ciclovias:
    'A cidade tem trechos cicláveis ao longo de avenidas largas do traçado planejado, com expansão prevista; o relevo e as vias amplas favorecem o deslocamento de bicicleta.',

  clima:
    'O clima é subtropical, com quatro estações bem marcadas e inverno frio (de junho a agosto), quando são comuns temperaturas baixas, neblina e geadas devido à altitude próxima de 780 metros.',
  climaTreino:
    'No inverno, as manhãs muito frias e a geada pedem agasalho e atenção ao piso escorregadio — período em que o treino indoor e o atendimento domiciliar ganham espaço. Na primavera e no outono, o clima ameno é ideal para correr e caminhar nas avenidas e no Parque Longines Malinowski.',

  mobilidade:
    'Erechim é um entroncamento do norte gaúcho, cortada pela BR-153 e pela ERS-135, com acesso à BR-480, ligando-se a Passo Fundo e a outros municípios da região. Os deslocamentos urbanos são facilitados pelo traçado planejado de avenidas largas; o transporte coletivo é por ônibus.',

  corridas: [
    {
      nome: 'Corridas e caminhadas de rua',
      descricao:
        'A cidade recebe corridas e caminhadas ao longo do ano, organizadas por entidades locais e pelo Sesc, aproveitando as avenidas largas do traçado planejado.',
    },
    {
      nome: 'Rally de Erechim',
      descricao:
        'Tradicional prova de automobilismo de longa data na região; embora não seja corrida de rua, é o maior evento esportivo do calendário e mobiliza a cidade.',
    },
  ],
  culturaEsportiva:
    'Há uma comunidade ativa de corredores e caminhantes que usa as avenidas largas e o Parque Longines Malinowski, além de tradição em musculação. A presença da UFFS (Universidade Federal da Fronteira Sul) e da URI (Universidade Regional Integrada) traz um público jovem e universitário que movimenta a procura por treino e atividade física.',
  academias:
    'A oferta concentra redes nacionais e estúdios locais nos bairros centrais, atendendo também a moradores da região. A musculação ganha ainda mais força no inverno, quando o treino em ambiente fechado é a opção mais confortável.',

  destaquesFitness: [
    'Parque Longines Malinowski: principal espaço para caminhada e corrida, com lago e trilhas.',
    'Avenidas largas do traçado planejado: ótimas para correr e caminhar no dia a dia.',
    'Polo regional com boa malha de academias (redes nacionais e estúdios locais).',
    'Público universitário (UFFS e URI) que aquece a demanda por treino e atividade física.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Polo regional do norte gaúcho com qualidade de vida acima da média do interior, Erechim une avenidas largas do traçado planejado, o Parque Longines Malinowski e uma boa oferta de academias. Um personal trainer ajuda a manter a constância o ano todo — alternando o treino ao ar livre com a academia ou o atendimento domiciliar nos dias de frio rigoroso.',

  vizinhas: ['passo-fundo-rs', 'caxias-do-sul-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Erechim', url: 'https://cidades.ibge.gov.br/brasil/rs/erechim/panorama' },
    { nome: 'Prefeitura de Erechim', url: 'https://www.pmerechim.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
