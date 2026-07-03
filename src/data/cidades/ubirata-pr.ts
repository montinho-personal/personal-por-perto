import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ubirata-pr',
  nome: 'Ubiratã',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'ubiratense',
  tipo: 'cidade',

  populacao: 24749,
  populacaoAno: 2022,
  idhm: 0.739,
  idhmClasse: 'alto',

  resumoEconomico:
    'Ubiratã fica no Centro-Oeste do Paraná, na microrregião de Campo Mourão, em área colonizada a partir de 1954 pela Sociedade Imobiliária Noroeste do Paraná (Sinop) sobre a antiga Gleba Rio Verde. A economia é puxada pela agropecuária — soja, milho e pecuária de corte — e pela agroindústria: o município concentra a Unitá, unidade industrial de abate e processamento de frango formada pelas cooperativas Copacol, Coagru e Cooperflora, que gera milhares de empregos diretos e projeta Ubiratã para fora da região. Em 2023 a cidade teve o maior Valor Bruto da Produção agropecuária da regional de Campo Mourão, e o PIB per capita local supera com folga as médias estadual e nacional, reflexo direto do peso do agronegócio na economia municipal.',

  mercado:
    'Como cidade média do interior com economia girando em torno do agronegócio e da agroindústria, o mercado de personal trainers em Ubiratã é enxuto e concentrado no Centro, onde ficam as academias locais. A demanda tende a vir de quem trabalha em jornadas longas ligadas à lavoura e à indústria de processamento de frango e busca treino de força e condicionamento, além de moradores que usam os parques e praças da cidade para caminhada e corrida.',

  bairrosNobres: ['Centro', 'Vila Yolanda'],
  bairrosPopulares: ['Vila Esperança', 'Vila São Joaquim', 'Vila Recife'],

  parques: [
    {
      nome: 'Parque dos Ipês',
      descricao:
        'O maior espaço de lazer público da cidade, próximo à Avenida Botelho de Souza, é ponto de encontro tradicional com mais de duas décadas de história, usado tanto para lazer quanto para caminhada ao ar livre.',
    },
    {
      nome: 'Parque Ecológico da Lagoa Xambrê',
      descricao:
        'Área de preservação ambiental com uma grande lagoa, trilhas para caminhada e espaço para piquenique, funcionando como opção de treino em contato com a natureza.',
    },
    {
      nome: 'Praça dos Pioneiros',
      descricao:
        'Abriga o Monumento ao Tropeiro, homenagem aos desbravadores da região; Ubiratã se destaca por ter proporcionalmente um dos maiores números de praças da região, muitas delas usadas para caminhada e atividade ao ar livre.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária formal é limitada, comum em cidades de porte médio do interior; o deslocamento de bicicleta e a corrida ao ar livre acontecem principalmente nas vias do Centro e no entorno dos parques e praças da cidade.',

  clima:
    'O clima é subtropical úmido mesotérmico (Cfa), com verões quentes e temperatura média superior a 22 °C, chuvas concentradas no verão, e invernos com geadas pouco frequentes e temperatura média inferior a 18 °C, sem estação seca definida.',
  climaTreino:
    'O calor e a umidade do verão pedem treinos nas pontas do dia e hidratação reforçada, enquanto as manhãs mais frias do inverno, com geadas ocasionais, favorecem aquecimento adequado antes de atividades ao ar livre.',

  mobilidade:
    'A BR-369 corta o município e liga Ubiratã a Juranda, Corbélia e Cascavel, sendo o principal eixo rodoviário de acesso e escoamento da produção agrícola e industrial da região; o deslocamento dentro da cidade é predominantemente feito por carro e moto, dado o porte compacto do núcleo urbano.',

  corridas: [
    {
      nome: 'Ubiratã Night Run',
      descricao:
        'Corrida de rua noturna sediada em Ubiratã que já teve pelo menos duas edições, reunindo cerca de 350 atletas da cidade e de municípios vizinhos como Goioerê, reforçando o calendário regional de corridas do Centro-Oeste paranaense.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina o uso das numerosas praças da cidade para caminhada e corrida, a tradição histórica ligada aos tropeiros que passaram pela região, e a participação em competições regionais, como etapa dos Jogos Abertos do Paraná (JAPS) sediada no município e o Campeonato Paranaense de Cross Country, que já reuniu atletas de mais de 25 cidades.',
  academias:
    'A oferta de academias é modesta e concentrada no Centro, com estabelecimentos locais de musculação e treino funcional, compatível com o porte de uma cidade média do interior paranaense.',

  destaquesFitness: [
    'Cidade com proporcionalmente um dos maiores números de praças da região, muitas delas aproveitadas para caminhada e corrida.',
    'Sede da Unitá, unidade industrial de abate de aves das cooperativas Copacol, Coagru e Cooperflora, um dos maiores empregadores da região e motor da economia local.',
    'Parque dos Ipês e Parque Ecológico da Lagoa Xambrê como principais espaços naturais para atividade ao ar livre.',
    'Palco de corridas de rua e de etapas de competições estaduais, como a Ubiratã Night Run e os Jogos Abertos do Paraná (JAPS).',
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
    'Cidade do agronegócio no Centro-Oeste paranaense, Ubiratã oferece praças em abundância e parques naturais como a Lagoa Xambrê para quem quer treinar ao ar livre, além de uma rotina marcada pelo ritmo da lavoura e da agroindústria. Um personal trainer ajuda a encaixar o treino em jornadas de trabalho longas, aproveitando os espaços públicos da cidade e respeitando as variações de calor e frio ao longo do ano.',

  vizinhas: ['campo-mourao-pr', 'umuarama-pr', 'cianorte-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Ubiratã', url: 'https://cidades.ibge.gov.br/brasil/pr/ubirata/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Ubiratã', url: 'https://www.ubirata.pr.gov.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
