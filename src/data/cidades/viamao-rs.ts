import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'viamao-rs',
  nome: 'Viamão',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'viamonense',
  tipo: 'cidade',

  populacao: 224116,
  populacaoAno: 2022,
  idhm: 0.717,
  idhmClasse: 'médio',
  altitudeM: 111,

  resumoEconomico:
    'Um dos maiores municípios em área da Região Metropolitana de Porto Alegre, Viamão combina extensa zona rural com bairros urbanos conurbados à capital. A economia se apoia em comércio e serviços de bairro, no funcionalismo, na agropecuária da zona rural (com tradição do Caminho do Viamão e da pecuária) e no turismo de natureza ligado ao Parque Estadual de Itapuã. Boa parte da população trabalha em Porto Alegre, dando à cidade forte perfil de município dormitório.',

  mercado:
    'Cidade grande e populosa, mas de renda médio-popular e perfil dormitório, Viamão concentra a demanda fitness em academias de bairro e no atendimento domiciliar e em condomínios. O personal trainer encontra espaço atendendo quem prefere treinar perto de casa, em vez de se deslocar até a capital, e aproveitando os parques e a zona urbana mais adensada.',

  bairrosNobres: ['Tarumã', 'Cecília', 'Augusta', 'Centro'],
  bairrosPopulares: ['Santa Isabel', 'Jardim Krahe', 'Viamópolis', 'Vila Augusta'],

  parques: [
    {
      nome: "Parque Saint'Hilaire",
      descricao:
        'Um dos maiores parques abertos à visitação da Região Metropolitana de Porto Alegre, com cerca de 1.148 hectares de mata, trilhas, lagos e áreas para caminhada e atividades ao ar livre.',
    },
    {
      nome: 'Parque Estadual de Itapuã',
      descricao:
        'Unidade de conservação com cerca de 5.566 hectares preservando a última amostra dos ecossistemas originais da região metropolitana, com praias, trilhas, morros, dunas e o Farol de Itapuã (1860); ótimo para caminhadas e trekking.',
    },
    {
      nome: 'Lagoa Negra',
      descricao:
        'Grande lagoa em meio a área natural de Viamão, ponto de parada de aves migratórias, que compõe a paisagem de campos e banhados em torno da cidade.',
    },
  ],
  ciclovias:
    'A cidade tem ciclofaixas urbanas em trechos do Centro e ao longo de eixos viários; a extensão total ainda não é divulgada em fonte oficial. Os parques e a zona rural oferecem rotas para pedal de lazer.',

  clima:
    'O clima é subtropical úmido, com verões quentes e invernos frios e úmidos, em que as mínimas podem se aproximar de zero.',
  climaTreino:
    'O frio e a umidade do inverno favorecem academias indoor e treino em casa; nos verões quentes, vale treinar cedo ou ao entardecer, com boa hidratação, aproveitando os parques nas horas mais amenas.',

  mobilidade:
    'Viamão é cortada pela RS-040, principal ligação com Porto Alegre e com o litoral, e tem a zona urbana conurbada à capital. A dependência de ônibus e do deslocamento pendular para a capital marca o cotidiano de boa parte dos moradores.',

  corridas: [
    {
      nome: 'Corrida das Cavalhadas',
      descricao:
        'Evento de corrida de rua associado à tradição gaúcha e às Cavalhadas, com participação de CTGs e da comunidade local.',
    },
    {
      nome: 'Provas de rua municipais',
      descricao:
        'A cidade recebe corridas e caminhadas comunitárias promovidas pela prefeitura e por grupos locais, em datas comemorativas e cívicas.',
    },
  ],
  culturaEsportiva:
    'Viamão tem forte identidade gaúcha, com Centros de Tradições Gaúchas (CTGs) ativos, cavalgadas e as Cavalhadas, além do hábito do chimarrão e da vida no campo na zona rural. O esporte ao ar livre se beneficia da natureza preservada dos parques.',
  academias:
    'A oferta é dominada por academias de bairro distribuídas pela zona urbana, complementadas pelo atendimento domiciliar e em condomínios, além do treino ao ar livre nos parques e praças.',

  destaquesFitness: [
    "Parque Saint'Hilaire: trilhas e áreas verdes para caminhada e treino ao ar livre.",
    'Parque Estadual de Itapuã: trekking e caminhadas em meio a praias, morros e dunas.',
    'Forte cultura gaúcha, com cavalgadas e Cavalhadas.',
    'Perfil dormitório que valoriza o personal de bairro e o atendimento domiciliar.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade grande, rural e urbana ao mesmo tempo, com perfil dormitório da Grande Porto Alegre, Viamão guarda natureza de sobra entre o Saint\'Hilaire e o Parque Estadual de Itapuã. Um personal trainer ajuda o viamonense a treinar perto de casa, alternando academia de bairro, atendimento domiciliar e o treino ao ar livre nos parques, sem depender do deslocamento até a capital.',

  vizinhas: ['porto-alegre-rs', 'gravatai-rs', 'canoas-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Viamão', url: 'https://cidades.ibge.gov.br/brasil/rs/viamao/panorama' },
    { nome: 'Prefeitura de Viamão', url: 'https://www.viamao.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/3203700' },
  ],
  atualizadoEm: '2026-06-29',
};
