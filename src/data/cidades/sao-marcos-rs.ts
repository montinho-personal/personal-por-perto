import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-marcos-rs',
  nome: 'São Marcos',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'são-marquense',
  tipo: 'cidade',

  populacao: 21084,
  populacaoAno: 2022,
  idhm: 0.768,
  idhmClasse: 'alto',
  altitudeM: 746,

  resumoEconomico:
    'Emancipada de Caxias do Sul em 1963, São Marcos nasceu em 1885 como um dos núcleos de colonização italiana da Serra Gaúcha, na encosta superior do nordeste do estado. A economia combina agroindústria — com destaque para os setores metalmecânico e moveleiro, historicamente puxados pela vocação técnica dos descendentes de imigrantes — e uma agricultura relevante em escala estadual e nacional: o município figura entre os maiores produtores de alho do Rio Grande do Sul e entre os dez maiores produtores de uva do Brasil, com vinícolas e cantinas coloniais que também alimentam o enoturismo local. O PIB per capita, de cerca de R$ 70,6 mil (2023), reflete essa base industrial e agrícola.',

  mercado:
    'Cidade pequena e de renda relativamente elevada para o interior gaúcho, São Marcos tem um mercado fitness enxuto, concentrado em academias com estrutura de musculação, treino funcional e modalidades como jiu-jítsu e pilates. A procura por personal trainer tende a vir do público ligado à indústria metalmecânica e moveleira e às famílias produtoras rurais, que buscam treino que se encaixe em rotinas de trabalho físico, além de moradores mais velhos interessados em manutenção da saúde.',

  bairrosNobres: ['Centro', 'Santini', 'São Roque', 'Pio X'],
  bairrosPopulares: ['São José', 'Industrial', 'Colina Sorriso', 'Michelon'],

  parques: [
    {
      nome: 'Praça Dante Marcucci',
      descricao:
        'No centro da cidade, é o ponto de partida tradicional da Rústica do Padroeiro e de outras corridas locais, além de espaço de convivência e caminhada no coração de São Marcos.',
    },
    {
      nome: 'Morro do Calvário',
      descricao:
        'Ponto mais alto da cidade, com o monumento do Cristo Crucificado e um caminho ladeado por 14 capelas em pedra basalto que reproduzem a Via Sacra — trajeto usado por quem busca caminhada com subida e vista panorâmica.',
    },
    {
      nome: 'Vale do Rio das Antas',
      descricao:
        'Paisagem rural na rota da BR-116, com vinhedos e cantinas da colônia; as estradas vicinais do entorno servem de percurso para caminhada e ciclismo em meio à natureza.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária formal é modesta, típica de um município pequeno da Serra Gaúcha; o pedal e a corrida acontecem principalmente nas vias urbanas e nas estradas rurais que cortam parreirais e propriedades coloniais.',

  clima:
    'O clima é subtropical de altitude, com os cerca de 746 metros de altitude deixando os invernos frios, com geadas frequentes, e os verões amenos se comparados ao das terras baixas do estado.',
  climaTreino:
    'O frio do inverno favorece o treino em ambientes fechados por boa parte do ano, enquanto primavera e outono tendem a ser as estações mais agradáveis para caminhar e correr ao ar livre, inclusive no entorno do Morro do Calvário e da Praça Dante Marcucci.',

  mobilidade:
    'São Marcos é cortada em toda a sua extensão pela BR-116, principal via de acesso da cidade, que liga o município a Caxias do Sul (cerca de 36 km) e, mais distante, à região metropolitana de Porto Alegre (cerca de 165 km) e ao planalto em direção a Vacaria. O transporte urbano é feito por ônibus, com linhas que atendem os bairros e o centro.',

  corridas: [
    {
      nome: 'Rústica do Padroeiro',
      descricao:
        'Prova de rua de 5 km organizada pela Secretaria Municipal de Cultura, Esporte e Turismo em celebração a São Marcos Evangelista, padroeiro da cidade, com largada e chegada na Praça Dante Marcucci em 25 de abril.',
    },
    {
      nome: 'Corrida do Fogo',
      descricao:
        'Prova de 5 km promovida pela Prefeitura em parceria com o Corpo de Bombeiros, com largada e chegada na Praça Dante Marcucci e trajeto passando em frente ao quartel dos bombeiros.',
    },
  ],
  culturaEsportiva:
    'A vida ativa em São Marcos gira em torno da Praça Dante Marcucci, do Morro do Calvário e de corridas de rua ligadas ao calendário religioso e institucional da cidade, num ambiente marcado pela tradição italiana, pelo trabalho rural e industrial e pelo clima frio de altitude da Serra Gaúcha.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional concentradas no Centro, complementada por academias ao ar livre instaladas pela prefeitura em bairros como Colina Sorriso e Industrial, ampliando o acesso ao treino fora da área central.',

  destaquesFitness: [
    'Colonização italiana desde 1885, com forte tradição de agroindústria metalmecânica e moveleira.',
    'Entre os maiores produtores de alho do Rio Grande do Sul e um dos dez maiores produtores de uva do Brasil.',
    'Clima subtropical de altitude (746 m), com invernos frios que empurram boa parte do treino para ambientes fechados.',
    'Praça Dante Marcucci e Morro do Calvário como referências para caminhada, corrida e provas de rua locais.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Pequena e industrial, marcada pela colonização italiana e pela agricultura de altitude, São Marcos tem um cotidiano fitness mais simples, apoiado em poucas academias e em espaços como a Praça Dante Marcucci e o Morro do Calvário. Um personal trainer ajuda a organizar o treino em torno do frio de inverno e da rotina de trabalho industrial e rural, mantendo a constância ao longo do ano.',

  vizinhas: ['caxias-do-sul-rs', 'flores-da-cunha-rs', 'bento-goncalves-rs'],

  fontes: [
    { nome: 'IBGE Cidades — São Marcos', url: 'https://cidades.ibge.gov.br/brasil/rs/sao-marcos/panorama' },
    { nome: 'Prefeitura de São Marcos', url: 'https://www.saomarcos.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
