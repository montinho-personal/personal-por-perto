import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-simao-go',
  nome: 'São Simão',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'canalense',
  tipo: 'cidade',

  populacao: 17020,
  populacaoAno: 2022,
  idhm: 0.720,
  idhmClasse: 'alto',
  altitudeM: 523,

  resumoEconomico:
    'No extremo sul do sudoeste goiano, na divisa com Minas Gerais às margens do rio Paranaíba, São Simão foi reconstruída em novo sítio urbano após a formação do lago da Usina Hidrelétrica de São Simão, inaugurada em 1978 e com 1.710 MW de capacidade instalada — uma das maiores do país. O reservatório, batizado de Lago Azul, sustenta um polo de turismo náutico e pesca esportiva, enquanto o rio Paranaíba também funciona como via de escoamento de grãos do sul de Goiás. A economia soma ainda agropecuária (soja, milho e pecuária) e comércio e serviços locais; o PIB per capita elevado reflete o peso da geração de energia na base econômica de um município pequeno.',

  mercado:
    'Em uma cidade pequena como São Simão, o mercado fitness é enxuto, concentrado em poucas academias e estúdios de treino, com procura puxada tanto pelos moradores ligados à usina e ao comércio local quanto pelo fluxo de turistas de pesca e passeios náuticos que buscam a orla do Lago Azul. A demanda por personal trainer tende a aparecer entre quem quer treino individualizado para complementar as atividades ao ar livre oferecidas pelo lago.',

  bairrosNobres: ['Centro', 'Praia do Lago Azul', 'Recanto da Mata', 'Residencial Viverde'],
  bairrosPopulares: ['Setor Mutirão', 'Setor Colombo', 'Vila Aeroporto', 'Jardim Liberdade'],

  parques: [
    {
      nome: 'Praia e orla do Lago Azul',
      descricao:
        'Balneário formado pelo reservatório da Usina Hidrelétrica de São Simão, com mais de 1 km de faixa de areia e calçadão; é o principal espaço de caminhada, corrida e esportes náuticos da cidade, além de sediar a corrida de rua local.',
    },
    {
      nome: 'Cataratas do Itaguaçu',
      descricao:
        'Queda d\'água na região, um dos atrativos naturais do município, procurada para passeios e ecoturismo em meio à vegetação do entorno.',
    },
    {
      nome: 'Corredeiras do Rio Claro',
      descricao:
        'Trecho de corredeiras usado para pesca esportiva e atividades de aventura, complementando a oferta de turismo ao ar livre do município.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta, típica de um município pequeno; o pedal e a corrida se concentram nas vias do Centro e na orla do Lago Azul.',

  clima:
    'O clima é tropical (Aw, savana), com verão chuvoso e quente de outubro a abril e estação seca bem marcada de maio a setembro, quando a umidade do ar cai bastante. A altitude moderada, de 523 m, não evita as temperaturas elevadas típicas do sul goiano.',
  climaTreino:
    'No período seco, o calor da tarde e a baixa umidade pedem treino no início da manhã ou no fim do dia, com hidratação reforçada; a proximidade do Lago Azul ajuda a amenizar as sensações térmicas para quem treina ao ar livre na orla.',

  mobilidade:
    'São Simão fica a cerca de 365 km de Goiânia e se conecta à região pela GO-206, que liga o município a Itumbiara e Cachoeira Dourada ao norte e a Quirinópolis ao sul. O transporte urbano é limitado, típico de cidade pequena, e o rio Paranaíba também funciona como via de escoamento de cargas pelo porto graneleiro local.',

  corridas: [
    {
      nome: 'Corrida de Rua de São Simão',
      descricao:
        'Prova organizada pela Prefeitura com apoio da equipe Corre São Simão, com percursos de 6 km e 10 km e largada na orla do Lago Azul; a 2ª edição, em novembro de 2023, reuniu mais de 160 participantes.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local gira em torno do Lago Azul: pesca esportiva (tucunaré, pacu e piranha), passeios de barco e stand up paddle, com a cidade integrando o Circuito Goiano de Pesca Esportiva. A corrida de rua na orla e a caminhada no calçadão completam a rotina de quem treina ao ar livre.',
  academias:
    'A oferta é pequena e concentrada no Centro, com academias de musculação e treino funcional e a presença de personal trainers atuando em estúdio próprio, compatível com o porte de um município de cerca de 17 mil habitantes.',

  destaquesFitness: [
    'Orla e praia do Lago Azul, formado pela Usina Hidrelétrica de São Simão, como principal espaço de treino ao ar livre.',
    'Usina de São Simão (1.710 MW), uma das maiores hidrelétricas do país, moldando a economia e a paisagem do município.',
    'Pesca esportiva e turismo náutico, com a cidade integrando o Circuito Goiano de Pesca Esportiva.',
    'Corrida de Rua de São Simão, prova local de 6 km e 10 km disputada na orla do lago.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 600,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Cidade pequena reconstruída às margens do Lago Azul, São Simão tem no rio Paranaíba e na usina hidrelétrica sua marca econômica e paisagística. Um personal trainer ajuda a aproveitar a orla do lago para o treino ao ar livre, respeitando o calor da estação seca e a rotina de quem concilia trabalho, pesca e vida na beira do lago.',

  vizinhas: ['itumbiara-go', 'quirinopolis-go', 'rio-verde-go'],

  fontes: [
    { nome: 'IBGE Cidades — São Simão', url: 'https://cidades.ibge.gov.br/brasil/go/sao-simao/panorama' },
    { nome: 'Prefeitura Municipal de São Simão e Itaguaçu', url: 'https://saosimao.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
