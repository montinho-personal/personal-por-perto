import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'frederico-westphalen-rs',
  nome: 'Frederico Westphalen',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'westphalense',
  tipo: 'cidade',

  populacao: 32627,
  populacaoAno: 2022,
  idhm: 0.760,
  idhmClasse: 'alto',
  altitudeM: 566,

  resumoEconomico:
    'Conhecida como "Princesa do Médio Alto Uruguai", Frederico Westphalen é o principal polo regional dessa área do norte gaúcho, reunindo hoje sete instituições de ensino superior — com destaque para o campus da URI (Universidade Regional Integrada) — o que a coloca entre as cidades brasileiras com maior concentração de universitários por habitante. A economia combina comércio e serviços que atendem dezenas de municípios vizinhos, indústrias de móveis, metalurgia, laticínios e frigoríficos de aves, além de uma agricultura de base familiar voltada a soja, milho, feijão, avicultura, suinocultura e, mais recentemente, à bovinocultura de leite, que vem superando soja e milho como principal geradora de renda no campo.',

  mercado:
    'Como referência regional em educação e serviços do Médio Alto Uruguai, Frederico Westphalen concentra a oferta de academias e estúdios de treino que atende também moradores de municípios vizinhos menores, sem estrutura própria. O público universitário ligado à URI e às demais faculdades da cidade aquece a procura por acompanhamento personalizado, com personal trainers atuando em academias, estúdios e também no atendimento domiciliar.',

  bairrosNobres: ['Centro', 'Fátima', 'Aparecida', 'São Cristóvão'],
  bairrosPopulares: ['Barril', 'Barrilense', 'Panosso', 'Distrito Industrial'],

  parques: [
    {
      nome: 'Praça Getúlio Vargas (Centro)',
      descricao:
        'Principal praça da cidade, no coração do Centro, é ponto de encontro e caminhada para quem circula pela região comercial e universitária.',
    },
    {
      nome: 'Campus da URI',
      descricao:
        'O campus universitário reúne áreas abertas e estrutura esportiva utilizadas por estudantes e pela comunidade local para caminhada e atividade física.',
    },
    {
      nome: 'Entorno rural e trilhas do Alto Uruguai',
      descricao:
        'A paisagem de relevo ondulado que cerca a cidade, típica do Médio Alto Uruguai, oferece estradas rurais usadas por quem pedala ou caminha nos arredores.',
    },
  ],
  ciclovias:
    'A cidade não tem uma malha cicloviária extensa divulgada em fonte oficial; os deslocamentos de bicicleta acontecem principalmente pelas vias do Centro e no entorno do campus universitário.',

  clima:
    'O clima é subtropical, com verão (outubro a abril) e inverno (maio a setembro) bem definidos. A altitude de cerca de 566 metros contribui para invernos frios, com geadas frequentes, enquanto os verões são quentes e chuvosos.',
  climaTreino:
    'O inverno rigoroso, com geadas e mínimas baixas, favorece o treino indoor e em academia, enquanto primavera e outono trazem condições mais agradáveis para caminhar e correr ao ar livre. Um personal trainer ajuda a adaptar os horários e a intensidade do treino às oscilações de temperatura ao longo do ano.',

  mobilidade:
    'Frederico Westphalen é servida pela BR-158/386 e pelas rodovias estaduais RS-150 e RS-591, que conectam a cidade aos municípios vizinhos do Médio Alto Uruguai e ao restante do estado. O transporte urbano é feito por ônibus, com terminal rodoviário no bairro Ipiranga que atende linhas regionais e intermunicipais; os deslocamentos no dia a dia dependem principalmente de carro e ônibus.',

  corridas: [
    {
      nome: 'Rústica Natalina',
      descricao:
        'Corrida de rua realizada em dezembro, em clima natalino, que já chegou a edições anuais e reúne centenas de corredores e famílias no calendário esportivo da cidade.',
    },
    {
      nome: 'Fred West Trail Run',
      descricao:
        'Primeira prova de trail running realizada no município, com percursos de 5 km e 12 km, reunindo atletas em trechos rurais e naturais do entorno da cidade.',
    },
  ],
  culturaEsportiva:
    'A cidade tem um calendário de corridas de rua e rústicas ativo, muitas vezes ligado a entidades como Sesc e hospitais locais, além da recente chegada do trail running explorando o relevo do Médio Alto Uruguai. O público universitário da URI e das demais faculdades também movimenta academias e práticas esportivas ao longo do ano.',
  academias:
    'A oferta de academias e estúdios de personal training está concentrada no Centro e nos bairros próximos ao campus universitário, atendendo tanto moradores da cidade quanto de municípios vizinhos sem estrutura própria.',

  destaquesFitness: [
    'Polo universitário do Médio Alto Uruguai, com sete instituições de ensino superior e forte presença da URI.',
    'Praça Getúlio Vargas e o campus da URI como principais espaços de caminhada e convívio ao ar livre.',
    'Inverno frio com geadas, que pede planejamento entre treino indoor e ao ar livre ao longo do ano.',
    'Calendário local de corridas de rua e rústicas, com chegada recente do trail running na região.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 680,
    onlineMin: 115,
    onlineMax: 340,
  },

  conclusao:
    'Polo universitário e de serviços do Médio Alto Uruguai, Frederico Westphalen combina vida acadêmica, economia agrícola familiar e um inverno frio que marca a rotina de treino. Um personal trainer ajuda a manter a constância ao longo do ano, equilibrando o treino ao ar livre nas estações mais amenas com o ambiente fechado nos meses de geada.',

  vizinhas: ['santo-angelo-rs', 'cruz-alta-rs', 'erechim-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Frederico Westphalen', url: 'https://cidades.ibge.gov.br/brasil/rs/frederico-westphalen/panorama' },
    { nome: 'Prefeitura de Frederico Westphalen', url: 'https://www.fredericowestphalen-rs.com.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
