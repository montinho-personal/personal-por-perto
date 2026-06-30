import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'manhuacu-mg',
  nome: 'Manhuaçu',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'manhuaçuense',
  tipo: 'cidade',

  populacao: 91886,
  populacaoAno: 2022,
  idhm: 0.689,
  idhmClasse: 'médio',
  altitudeM: 635,

  resumoEconomico:
    'Polo regional da Zona da Mata mineira, Manhuaçu é uma das principais praças de café de montanha do Brasil, no coração da região das Matas de Minas. A economia se apoia na produção e no comércio do café cultivado nas serras do entorno, atividade que gera emprego e movimenta a cidade, somada a um setor de serviços, comércio e saúde que atende municípios vizinhos. A posição no entroncamento das rodovias BR-262 (Belo Horizonte–Vitória) e BR-116 (Rio–Bahia) reforça o papel de Manhuaçu como centro de referência do leste mineiro.',

  mercado:
    'Como cidade média que concentra serviços para toda a microrregião, Manhuaçu tem um mercado fitness em crescimento, formado por academias locais de musculação e treino funcional. A procura por personal trainers aparece entre quem busca acompanhamento personalizado e entre praticantes de corrida e caminhada, que aproveitam as praças e o relevo montanhoso da cidade para treinar ao ar livre.',

  bairrosNobres: ['Centro', 'Coqueiro', 'Bom Pastor', 'São Pedro'],
  bairrosPopulares: ['Santa Luzia', 'Todos os Santos', 'Sagrada Família', 'Vila Maria'],

  parques: [
    {
      nome: 'Praça Cordovil Pinto Coelho',
      descricao:
        'A praça central da cidade, no Centro junto à Igreja Matriz, é ponto de encontro e referência urbana, usada para caminhadas leves e atividades ao ar livre no coração de Manhuaçu.',
    },
    {
      nome: 'Parque da Ponte',
      descricao:
        'Espaço às margens do Rio Manhuaçu, com vista para a cidade, procurado para caminhadas e momentos de lazer em meio à área verde junto ao rio.',
    },
    {
      nome: 'Parque Ecológico São Francisco de Assis',
      descricao:
        'Área de natureza preservada no município, opção para contato com a vegetação típica da Mata Atlântica e para atividades ao ar livre em ambiente arborizado.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e o relevo montanhoso impõe ladeiras a quem pedala; boa parte da corrida e da caminhada acontece nas praças, ruas da área central e vias dos bairros residenciais.',

  clima:
    'O clima é subtropical de altitude (Cwb), marcado por invernos secos e amenos e verões mais quentes e chuvosos, sob influência da Mata Atlântica. As temperaturas costumam variar de cerca de 16 °C a 28 °C ao longo do ano, com chuvas concentradas no verão e tempo mais seco no inverno.',
  climaTreino:
    'A altitude de mais de 600 metros e os invernos amenos tornam o clima geralmente favorável ao treino ao ar livre boa parte do ano. No verão, manhãs e fins de tarde são os melhores horários para fugir do calor e da chuva da tarde; no inverno seco, vale reforçar a hidratação mesmo com temperaturas mais baixas.',

  mobilidade:
    'Manhuaçu fica no entroncamento das rodovias BR-262, que liga Belo Horizonte a Vitória, e BR-116 (Rio–Bahia), o que faz da cidade um ponto logístico estratégico do leste mineiro. O deslocamento urbano é feito principalmente por ônibus e veículos próprios, e a cidade serve de referência de comércio e serviços para os municípios vizinhos.',

  corridas: [
    {
      nome: 'Corrida do Café de Manhuaçu',
      descricao:
        'Prova de rua tradicional da cidade, organizada pela associação local de corredores, que celebra a vocação cafeeira da região e reúne atletas amadores em percursos pela área urbana.',
    },
    {
      nome: 'Corrida Flor de Manacá',
      descricao:
        'Evento de corrida de rua realizado em Manhuaçu, com largada na região central, que movimenta a comunidade de corredores do município e do entorno.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina a corrida de rua, com provas ligadas à identidade cafeeira da cidade, ao uso das praças centrais para caminhada e às academias dos bairros. O relevo montanhoso da Zona da Mata e a proximidade da Serra do Caparaó estimulam atividades ao ar livre e contato com a natureza.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média que é polo regional de serviços.',

  destaquesFitness: [
    'Polo do café de montanha da Zona da Mata, no coração das Matas de Minas.',
    'Clima subtropical de altitude, com invernos amenos favoráveis ao treino ao ar livre.',
    'Praças centrais e o Parque da Ponte, às margens do Rio Manhuaçu, como espaços de caminhada e corrida.',
    'Entroncamento das rodovias BR-262 e BR-116, que faz da cidade um centro regional do leste mineiro.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Cidade serrana e cafeeira, polo regional da Zona da Mata mineira, Manhuaçu reúne um clima de altitude favorável e praças e áreas verdes que convidam ao treino ao ar livre. Um personal trainer ajuda a aproveitar o relevo e os espaços públicos da cidade, organizando a rotina e mantendo a constância ao longo das estações.',

  vizinhas: ['caratinga-mg', 'muriae-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Manhuaçu', url: 'https://cidades.ibge.gov.br/brasil/mg/manhuacu/panorama' },
    { nome: 'Prefeitura de Manhuaçu', url: 'https://www.manhuacu.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
