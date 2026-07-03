import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'lagoa-grande-pe',
  nome: 'Lagoa Grande',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'lagoa-grandense',
  tipo: 'cidade',

  populacao: 24088,
  populacaoAno: 2022,
  idhm: 0.597,
  idhmClasse: 'baixo',
  altitudeM: 345,

  resumoEconomico:
    'Emancipada de Santa Maria da Boa Vista em 1995, Lagoa Grande integra a Região Administrativa Integrada de Desenvolvimento do Polo Petrolina-Juazeiro, no Vale do São Francisco. A economia gira em torno da fruticultura irrigada — uva e manga — sustentada pelas águas do Rio São Francisco, e o município é conhecido como a "capital pernambucana da uva e do vinho": concentra o maior número de vinícolas da região e, desde 2022, integra a Indicação de Procedência Vale do São Francisco, a primeira Indicação Geográfica de vinhos tropicais do mundo. A produtividade da uva no polo (cerca de 47 t/ha) supera bastante a média nacional (19,4 t/ha), e o Vale do São Francisco já é o segundo maior polo produtor de uvas e vinhos do Brasil.',

  mercado:
    'Por ser um município pequeno e de perfil rural, o mercado fitness de Lagoa Grande é modesto, concentrado em poucas academias e estúdios no Centro. Boa parte da estrutura de treino mais completa da região fica em Petrolina, a cerca de 50 km, mas a procura local por personal trainer cresce entre quem busca atendimento próximo, adaptado ao calor do semiárido e à rotina de quem trabalha na fruticultura e na vitivinicultura.',

  bairrosNobres: ['Centro', 'Alto Grande'],
  bairrosPopulares: ['Cristo Rei', 'Estátua', 'Vasco', 'Morada Nova'],

  parques: [
    {
      nome: 'Parque da Uva e do Vinho',
      descricao:
        'Espaço de 25 mil m² que sedia a VinhuvaFest, feira da uva e do vinho do município; funciona como principal área de eventos e convivência ao ar livre de Lagoa Grande.',
    },
    {
      nome: 'Praça Hermes Amorim (Praça dos Estudantes)',
      descricao:
        'Praça central requalificada pela prefeitura, ponto de encontro e caminhada no Centro da cidade.',
    },
    {
      nome: 'Estradas rurais entre os vinhedos',
      descricao:
        'A paisagem de perímetros irrigados e vinhedos que cerca a sede do município oferece um cenário verde, incomum no sertão, para quem caminha ou pedala nas vias rurais do entorno.',
    },
  ],
  ciclovias:
    'Não há estrutura cicloviária consolidada divulgada em fonte oficial; o deslocamento ativo se dá principalmente pelas vias do Centro e estradas rurais.',

  clima:
    'O clima é semiárido (tipo BSh), na Depressão Sertaneja típica do sertão nordestino. Os verões são quentes e úmidos, concentrando quase toda a chuva do ano; os invernos são mornos e secos, com mínimas próximas de 15 °C; e as primaveras são muito quentes e secas, com máximas que passam dos 40 °C.',
  climaTreino:
    'O calor forte a maior parte do ano pede treino ao ar livre no início da manhã ou fim da tarde, com hidratação reforçada; nos horários de pico de calor, ambientes cobertos ou climatizados são a opção mais segura.',

  mobilidade:
    'O município é cortado pelas rodovias BR-428 e BR-122, com a sede a cerca de 50-52 km de Petrolina. Não há aeroporto próprio: a região é atendida pelo Aeroporto de Petrolina (Senador Nilo Coelho), o principal terminal do Vale do São Francisco.',

  corridas: [],
  culturaEsportiva:
    'Sem calendário próprio de grandes corridas de rua, a cidade tem no projeto Atletismo Sem Fronteiras uma referência esportiva, atendendo mais de 400 crianças e adolescentes em Lagoa Grande, Bodocó, Ouricuri e Santa Maria da Boa Vista. No mais, o dia a dia esportivo é moldado pela rotina rural ligada à fruticultura e pelos eventos do calendário vitivinícola, como a VinhuvaFest.',
  academias:
    'A oferta local é enxuta, com poucas academias e estúdios concentrados no Centro; para estruturas maiores de musculação e crossfit, parte dos moradores recorre a Petrolina, cidade-polo da região.',

  destaquesFitness: [
    'Conhecida como a capital pernambucana da uva e do vinho, com a maior concentração de vinícolas do Vale do São Francisco.',
    'Integra a primeira Indicação Geográfica de vinhos tropicais do mundo, reconhecida em 2022.',
    'Clima semiárido com calor intenso boa parte do ano, exigindo treino nos horários mais frescos e hidratação redobrada.',
    'Município pequeno e rural, com oferta enxuta de academias — o que amplia o espaço para o personal trainer.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 200,
    mensalMax: 550,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Pequena e rural, mas com protagonismo nacional na vitivinicultura tropical, Lagoa Grande combina o calor intenso do semiárido com a paisagem verde dos vinhedos irrigados. Um personal trainer ajuda a estruturar o treino local, respeitando os horários mais frescos do dia e a rotina de quem vive entre a lavoura, as vinícolas e o comércio do Centro.',

  vizinhas: ['petrolina-pe', 'juazeiro-ba', 'salgueiro-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Lagoa Grande', url: 'https://cidades.ibge.gov.br/brasil/pe/lagoa-grande/panorama' },
    { nome: 'Prefeitura de Lagoa Grande', url: 'https://lagoagrande.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
