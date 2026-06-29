import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'lagoa-santa-mg',
  nome: 'Lagoa Santa',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'lagoa-santense',
  tipo: 'cidade',

  populacao: 75145,
  populacaoAno: 2022,
  idhm: 0.777,
  idhmClasse: 'alto',
  altitudeM: 759,

  resumoEconomico:
    'Integrante da Região Metropolitana de Belo Horizonte, Lagoa Santa fica a cerca de 35 km da capital e abriga, junto com a vizinha Confins, o Aeroporto Internacional de Belo Horizonte (Tancredo Neves). A cidade combina serviços ligados ao polo aeroportuário e logístico, comércio, turismo e um forte movimento imobiliário de condomínios fechados, atraindo um público afluente que busca qualidade de vida fora da capital. O clima ameno e estável e o patrimônio natural e arqueológico — a região é o berço dos estudos do naturalista Peter Lund — completam o perfil do município.',

  mercado:
    'O mercado de personal trainers em Lagoa Santa é puxado por um público afluente concentrado em condomínios fechados (como Gran Royalle, Reserva Real e Ecovillage), onde o atendimento personalizado em casa ou nas áreas de lazer dos próprios empreendimentos é comum. A orla da Lagoa Central, com sua avenida arborizada, virou o principal palco do treino ao ar livre — caminhada, corrida e treino funcional — e concentra parte da demanda por acompanhamento individual. A proximidade com Confins e o perfil familiar reforçam a procura por treino presencial premium e por planos online para quem viaja a trabalho.',

  bairrosNobres: ['Lagoa Central', 'Condomínio Gran Royalle', 'Condomínio Reserva Real', 'Recanto da Lagoa'],
  bairrosPopulares: ['Várzea', 'Lundcéia', 'Joá', 'Bom Jesus'],

  parques: [
    {
      nome: 'Orla da Lagoa Central',
      descricao:
        'Cartão-postal da cidade, na Avenida Getúlio Vargas, com calçadão arborizado à beira da lagoa — ponto de encontro para caminhada, corrida e treino funcional ao ar livre, frequentado por fauna local como capivaras e aves.',
    },
    {
      nome: 'Parque Estadual do Sumidouro (PESU)',
      descricao:
        'Unidade de conservação de cerca de 2.004 hectares entre Lagoa Santa e Pedro Leopoldo, com trilhas (Circuito Lapinha, Travessia e Sumidouro), mirantes e ecoturismo no carste da APA Carste de Lagoa Santa.',
    },
    {
      nome: 'Gruta da Lapinha',
      descricao:
        'Caverna de cerca de 511 metros de extensão dentro do Parque Estadual do Sumidouro, descoberta por Peter Lund em 1835 — atração turística e de caminhada leve que faz parte do patrimônio arqueológico da região.',
    },
  ],
  ciclovias:
    'O entorno da Lagoa Central e a Avenida Getúlio Vargas são as vias mais usadas por ciclistas e caminhantes; a malha cicloviária estruturada ainda é limitada, e parte do pedal de lazer acontece nas estradas vicinais e no acesso à região do Sumidouro.',

  clima:
    'O clima é tropical de altitude, ensolarado e estável, com verões chuvosos e invernos secos e amenos — condições reconhecidamente favoráveis ao exercício ao ar livre durante boa parte do ano.',
  climaTreino:
    'As manhãs e o fim de tarde são as melhores janelas para o treino externo; o inverno seco (de maio a setembro) é especialmente convidativo para a orla, enquanto no verão vale reforçar a hidratação e evitar o sol forte do meio do dia.',

  mobilidade:
    'O acesso principal a partir de Belo Horizonte é pela Linha Verde, seguindo pela MG-010, eixo que conecta a cidade à capital e ao Aeroporto Internacional de Confins. A presença do aeroporto e o papel metropolitano facilitam deslocamentos regionais, embora o transporte interno dependa bastante do carro.',

  corridas: [
    {
      nome: 'Circuito das Cidades — Etapa Lagoa Santa',
      descricao:
        'Prova de corrida e caminhada com largada na orla da Lagoa Central (Avenida Getúlio Vargas), incluindo percurso de 6 km e corrida kids.',
    },
    {
      nome: 'Corrida Toca Raul Lagoa Santa',
      descricao:
        'Evento de rua realizado na região da Lagoa Central, junto à feira de artesanato, que movimenta corredores locais e da Grande BH.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Lagoa Santa gira em torno da lagoa e da natureza: a orla concentra caminhada, corrida e treino funcional, e o calendário de corridas de rua tem etapas recorrentes na cidade. O turismo de aventura no Parque do Sumidouro — trilhas e ecoturismo — complementa um estilo de vida ativo e ao ar livre.',
  academias:
    'A oferta inclui redes e academias de bairro, estúdios de pilates e funcional, somados às áreas de lazer dos condomínios e ao treino na orla da Lagoa Central — combinação que abre espaço para o atendimento personalizado presencial e domiciliar.',

  destaquesFitness: [
    'Orla da Lagoa Central como principal ponto de treino ao ar livre da cidade.',
    'Parque Estadual do Sumidouro e Gruta da Lapinha para trilhas e ecoturismo.',
    'Público afluente em condomínios fechados (Gran Royalle, Reserva Real, Ecovillage).',
    'Etapas de corrida de rua, como o Circuito das Cidades, com largada na orla.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 160,
    onlineMax: 450,
  },

  conclusao:
    'Com clima estável, orla convidativa e um público afluente em condomínios, Lagoa Santa é um terreno fértil para o treino personalizado — do funcional à beira da Lagoa Central às trilhas do Sumidouro. Um personal trainer ajuda a transformar esse cenário em uma rotina consistente e segura, no formato presencial, domiciliar ou online.',

  vizinhas: ['belo-horizonte-mg', 'sete-lagoas-mg', 'nova-lima-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Lagoa Santa', url: 'https://cidades.ibge.gov.br/brasil/mg/lagoa-santa/panorama' },
    { nome: 'Prefeitura Municipal de Lagoa Santa', url: 'https://www.lagoasanta.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
