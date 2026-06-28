import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'guarulhos-sp',
  nome: 'Guarulhos',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'guarulhense',

  populacao: 1291771,
  populacaoAno: 2022,
  idhm: 0.763,
  idhmClasse: 'alto',
  altitudeM: 759,

  resumoEconomico:
    'Segunda cidade mais populosa do estado de São Paulo, Guarulhos é um grande polo logístico e de distribuição, lar do Aeroporto Internacional de São Paulo/Guarulhos (GRU) — o maior da América Latina e o maior terminal de cargas do Brasil. Localizada no entroncamento de rodovias que ligam São Paulo ao Rio de Janeiro e a Minas, tem parque industrial diversificado e forte contraste social entre regiões como o Distrito Maia e bairros como Pimentas e Cumbica.',

  bairrosNobres: ['Jardim Maia', 'Cidade Maia', 'Parque Renato Maia', 'Vila Galvão'],
  bairrosPopulares: ['Pimentas', 'Bonsucesso', 'Cumbica', 'Cecap', 'Taboão'],

  parques: [
    {
      nome: 'Bosque Maia (Parque Municipal)',
      descricao:
        'O maior parque da cidade, com cerca de 170 mil m². Tem pista de 3 km para corrida e caminhada (piso de concreto, plano), trilhas na mata, quadras poliesportivas, pista de skate, academia ao ar livre e lago. Aos domingos, a Avenida Paulo Faccini, no entorno, recebe ciclofaixa de lazer.',
    },
    {
      nome: 'Lago dos Patos',
      descricao:
        'Com cerca de 52 mil m², reúne equipamentos de ginástica e pista para cooper e caminhada — uma alternativa de bairro para quem não quer se deslocar até o Bosque Maia.',
    },
  ],
  ciclovias:
    'A cidade conta com a ciclovia da Avenida Ministro Evandro Lins e Silva, no Parque Cecap, e a ciclovia da Vila Galvão, que vai do Lago dos Patos até as proximidades da Rua São Miguel do Araguaia.',

  clima:
    'Guarulhos tem clima tropical de altitude semelhante ao da Região Metropolitana de São Paulo: verões quentes e úmidos e invernos amenos e secos. Por estar a cerca de 759 m de altitude, as manhãs costumam ser mais frescas.',
  climaTreino:
    'O padrão de verão chuvoso favorece treinos ao ar livre pela manhã. Para quem encara o trânsito intenso das rodovias, treinar perto de casa ou contar com atendimento em domicílio economiza um tempo precioso no dia.',

  mobilidade:
    'A Linha 13-Jade da CPTM liga a Estação Aeroporto-Guarulhos a Engenheiro Goulart, com conexão à Linha 12-Safira em direção a Tatuapé, Brás e Luz — Guarulhos foi o primeiro grande aeroporto da América do Sul com ligação ferroviária direta. Ainda assim, a cidade depende muito das rodovias (Dutra, Fernão Dias e Ayrton Senna), e o trânsito é um fator real no planejamento dos treinos.',

  corridas: [
    {
      nome: 'Calendário de corridas de rua',
      descricao:
        'A cidade mantém um calendário de corridas de rua ao longo do ano. Vale acompanhar a agenda local, já que algumas provas tradicionais mudaram de formato recentemente — confirmar datas e percursos antes de se inscrever é sempre recomendável.',
    },
    {
      nome: 'Ciclofaixa de lazer dominical',
      descricao:
        'Aos domingos, o entorno do Bosque Maia, na Avenida Paulo Faccini, vira espaço de lazer ativo para caminhada, corrida e pedal.',
    },
  ],
  culturaEsportiva:
    'Cidade grande e de perfil predominantemente residencial, Guarulhos concentra boa parte da prática esportiva pública no Bosque Maia, que funciona como o grande ponto de encontro de quem treina ao ar livre. A demanda por personal trainers cresce junto com a população e a busca por qualidade de vida.',
  academias:
    'A oferta de academias acompanha o tamanho da cidade, com redes populares espalhadas pelos bairros e estúdios de treino funcional surgindo nas regiões de maior renda, como o Distrito Maia.',

  destaquesFitness: [
    'Bosque Maia: pista plana de 3 km, academia ao ar livre e ciclofaixa de lazer aos domingos.',
    'Segunda maior população do estado — mercado em expansão para personal trainers.',
    'Conexão ferroviária inédita via aeroporto (Linha 13-Jade da CPTM).',
    'Contraste social que abre espaço para atendimento em diferentes faixas de preço.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 140,
    mensalMin: 300,
    mensalMax: 800,
    onlineMin: 150,
    onlineMax: 400,
  },

  vizinhas: ['sao-paulo-sp', 'osasco-sp', 'santo-andre-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Guarulhos', url: 'https://cidades.ibge.gov.br/brasil/sp/guarulhos/panorama' },
    { nome: 'Prefeitura de Guarulhos', url: 'https://www.guarulhos.sp.gov.br/' },
  ],
  atualizadoEm: '2026-06-28',
};
