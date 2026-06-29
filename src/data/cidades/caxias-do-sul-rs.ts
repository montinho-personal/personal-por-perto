import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'caxias-do-sul-rs',
  nome: 'Caxias do Sul',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'caxiense',
  tipo: 'cidade',

  populacao: 463501,
  populacaoAno: 2022,
  idhm: 0.782,
  idhmClasse: 'alto',
  altitudeM: 817,

  resumoEconomico:
    'Maior cidade do interior do Rio Grande do Sul e segundo maior polo metalmecânico do Brasil, Caxias do Sul é sede de grandes indústrias e um centro econômico forte da Serra Gaúcha. De colonização italiana, é a "Capital do Vinho" e a casa da Festa Nacional da Uva, unindo pujança econômica e qualidade de vida em clima de serra.',

  mercado:
    'A cultura de musculação é forte, com boa oferta de academias — redes nacionais (Smart Fit) e estúdios locais. O clima frio favorece o treino indoor em boa parte do ano, mas a cidade também tem parques estruturados para caminhada e corrida, e uma comunidade de corredores ativa.',

  bairrosNobres: ['Exposição', 'Panazzolo', 'Colina Sorriso', 'São Pelegrino'],
  bairrosPopulares: ['Desvio Rizzo', 'Rio Branco', 'Santa Catarina', 'São Leopoldo'],

  parques: [
    {
      nome: 'Parque Getúlio Vargas (dos Macaquinhos)',
      descricao:
        'Central e seguro, tem pista com marcações de distância, academia ao ar livre (inclusive equipamentos adaptados) e quadras — o melhor espaço público para corrida e caminhada da cidade.',
    },
    {
      nome: 'Parque Cinquentenário',
      descricao:
        'Tem circuito de caminhada pavimentado, espaços para exercícios e quadras, em uma área verde agradável.',
    },
    {
      nome: 'Parque Mato Sartori',
      descricao:
        'Área de preservação com trilha ecológica guiada (cerca de 1 km) e mirante — boa opção para trilha e caminhada em meio à natureza (visita agendada).',
    },
  ],
  ciclovias:
    'A rede cicloviária está em expansão, prevista no Plano de Mobilidade da cidade, integrando bairros e parques aos poucos.',

  clima:
    'O clima é subtropical de serra, com inverno rigoroso (de junho a agosto, entre cerca de 5 °C e 16 °C, com mínimas que chegam abaixo de zero, neblina e geadas).',
  climaTreino:
    'No inverno, o treino ao ar livre exige agasalho e atenção a geada e piso escorregadio; as manhãs frias favorecem o indoor ou horários mais quentes. No restante do ano, o clima de serra é excelente para correr.',

  mobilidade:
    'A cerca de 130 km de Porto Alegre, Caxias é acessada pela BR-116, pela RS-122 e pela RSC-453 (Rota do Sol), ligando-se à Região Metropolitana e ao Litoral Norte. O transporte urbano é por ônibus.',

  corridas: [
    {
      nome: 'Meia Maratona de Caxias do Sul',
      descricao:
        'Principal corrida da cidade, que reúne milhares de atletas de mais de uma centena de cidades — uma das maiores da serra.',
    },
    {
      nome: 'Maratona de Caxias do Sul',
      descricao:
        'Evento de rua que amplia o calendário local, consolidando a cidade no circuito de corrida do estado.',
    },
  ],
  culturaEsportiva:
    'Caxias do Sul tem forte tradição em corrida de rua, com clube de corredores ativo, e em musculação. O Juventude, no futebol, é um símbolo esportivo da cidade, e a comunidade de corrida cresce a cada ano.',
  academias:
    'A oferta reúne redes nacionais (Smart Fit) e estúdios locais, com a musculação ganhando ainda mais força no inverno, quando o treino indoor é a opção mais confortável.',

  destaquesFitness: [
    'Parque dos Macaquinhos: melhor espaço público para corrida, com pista marcada e academia ao ar livre gratuita.',
    'Calendário de corridas consolidado (Meia Maratona com milhares de inscritos).',
    'Boa malha de academias (redes nacionais e estúdios locais).',
    'Clima de serra: ótimo para correr boa parte do ano, com cuidado redobrado com a geada no inverno.',
  ],

  precos: {
    avulsaMin: 75,
    avulsaMax: 170,
    mensalMin: 380,
    mensalMax: 1000,
    onlineMin: 175,
    onlineMax: 440,
  },

  conclusao:
    'Maior cidade do interior gaúcho e polo industrial da serra, Caxias do Sul combina cultura de musculação e uma cena de corrida em ascensão. Um personal trainer ajuda a manter a constância o ano todo — alternando o treino ao ar livre com a academia nos dias de frio rigoroso.',

  vizinhas: ['porto-alegre-rs', 'florianopolis-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Caxias do Sul', url: 'https://cidades.ibge.gov.br/brasil/rs/caxias-do-sul/panorama' },
    { nome: 'Prefeitura de Caxias do Sul', url: 'https://www.caxias.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
