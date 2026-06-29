import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'birigui-sp',
  nome: 'Birigui',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'biriguiense',
  tipo: 'cidade',

  populacao: 118612,
  populacaoAno: 2022,
  idhm: 0.78,
  idhmClasse: 'alto',
  altitudeM: 400,

  resumoEconomico:
    'Birigui é conhecida como a "Capital do Calçado Infantil", respondendo por cerca de metade da produção nacional de sapatos infantis. O polo calçadista, formado por centenas de fábricas e fornecedores, emprega parcela expressiva da população e sustenta uma economia industrial robusta no noroeste paulista. Esse perfil de cidade média trabalhadora, com renda distribuída entre operários e empresários do setor, molda uma demanda fitness ligada ao dia a dia dos bairros.',

  mercado:
    'Por ser uma cidade média industrial, o mercado de personal trainers em Birigui se apoia em academias de bairro e no atendimento domiciliar, formato prático para quem cumpre jornada nas fábricas e indústrias. A oferta combina academias locais e redes, com personais que circulam entre estúdios, condomínios e residências.',

  bairrosNobres: ['Jardim Morumbi', 'Jardim Califórnia', 'Vila Negrão', 'Jardim Europa'],
  bairrosPopulares: ['Vila Moimaz', 'Nações Unidas', 'Jardim Itália', 'Conjunto Habitacional Pedro Mantovani'],

  parques: [
    {
      nome: 'Parque do Povo',
      descricao:
        'Tido como o coração verde de Birigui, é um refúgio urbano com amplas áreas de lazer, pistas de caminhada e ciclismo bem aproveitadas por quem treina ao ar livre na cidade.',
    },
    {
      nome: 'Parque das Paineiras',
      descricao:
        'Um dos cartões-postais do município, reúne gramados para piquenique, playground e trilhas leves ideais para caminhadas e atividades ao ar livre.',
    },
    {
      nome: 'Pista de Atletismo Belchior Bernardes Gomes',
      descricao:
        'Complexo municipal de atletismo na Vila Moimaz, sede de competições regionais e base do trabalho de formação esportiva da cidade.',
    },
  ],
  ciclovias:
    'O Parque do Povo concentra pistas de caminhada e ciclismo usadas no dia a dia, e a malha urbana plana facilita os deslocamentos a pé e de bicicleta pelos bairros.',

  clima:
    'O clima é tropical com estação seca (tipo Aw), de verões quentes e chuvosos e invernos secos e amenos, característico do planalto ocidental paulista.',
  climaTreino:
    'O inverno seco favorece treinos ao ar livre, enquanto no verão convém evitar o início da tarde por causa do calor intenso e das pancadas de chuva típicas do noroeste paulista.',

  mobilidade:
    'Birigui fica no noroeste paulista, às margens da Rodovia Marechal Rondon (SP-300), principal eixo que liga a cidade a Araçatuba e ao restante da região. A cidade é compacta e plana, o que torna os deslocamentos curtos e o treino domiciliar uma opção prática.',

  corridas: [
    {
      nome: 'Circuito de corridas de rua (B3 Eventos Esportivos)',
      descricao:
        'Provas de corrida e caminhada realizadas em Birigui por organizadoras regionais, com percursos urbanos que movimentam corredores da cidade e do entorno.',
    },
    {
      nome: 'Competições de atletismo (SESI-SP e Jogos Regionais)',
      descricao:
        'A cidade tem tradição no atletismo, com a base do SESI-SP e participações de destaque nos Jogos Regionais, sustentando uma cena esportiva ativa.',
    },
  ],
  culturaEsportiva:
    'Birigui tem forte tradição no atletismo, impulsionada pela base do SESI-SP e por bons resultados em competições regionais. Some-se a isso uma cena de corrida de rua em crescimento e parques públicos bem usados, e o resultado é uma população acostumada a atividade física no dia a dia.',
  academias:
    'A oferta reúne academias de bairro e estúdios locais espalhados pela cidade, complementados pelo atendimento domiciliar de personais, formato que combina com a rotina de uma cidade média industrial.',

  destaquesFitness: [
    'Parque do Povo como principal espaço público para caminhada e ciclismo.',
    'Tradição no atletismo com base do SESI-SP e destaque em Jogos Regionais.',
    'Atendimento domiciliar e academias de bairro como base do mercado fitness.',
    'Malha urbana plana e compacta, favorável a treino ao ar livre e mobilidade ativa.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Cidade média industrial com tradição esportiva, Birigui oferece boa estrutura para treinar — do Parque do Povo às academias de bairro. Um personal trainer ajuda a transformar essa rotina em resultado, com método tanto no estúdio quanto no atendimento domiciliar.',

  vizinhas: ['aracatuba-sp', 'bauru-sp', 'sao-jose-do-rio-preto-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Birigui', url: 'https://cidades.ibge.gov.br/brasil/sp/birigui/panorama' },
    { nome: 'Prefeitura de Birigui', url: 'http://www.birigui.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
