import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'veranopolis-rs',
  nome: 'Veranópolis',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'veranense',
  tipo: 'cidade',

  populacao: 24021,
  populacaoAno: 2022,
  idhm: 0.773,
  idhmClasse: 'alto',
  altitudeM: 705,

  resumoEconomico:
    'Na Serra Gaúcha, a cerca de 170 km de Porto Alegre, Veranópolis nasceu da colonização italiana e ficou nacionalmente conhecida como a "Terra da Longevidade", graças à alta expectativa de vida de seus moradores e aos estudos de envelhecimento conduzidos na cidade há décadas. A economia é diversificada: vitivinicultura e fruticultura (é o "Berço Nacional da Maçã", celebrado na Femaçã), somadas a um polo metalmecânico e a indústrias variadas que sustentam um dos melhores índices socioeconômicos do estado. O vinho, a cultura italiana e a vida ativa fazem parte da identidade local.',

  mercado:
    'Por ser uma cidade de porte pequeno, mas com renda elevada e forte cultura de qualidade de vida, Veranópolis tem um mercado fitness proporcionalmente ativo. A fama de "Terra da Longevidade" reforça o interesse por atividade física orientada, e a procura por personal trainers aparece tanto entre adultos que buscam saúde e desempenho quanto entre o público mais velho, atraído por treino seguro e acompanhamento individual.',

  bairrosNobres: ['Centro', 'São Pelegrino', 'Sagrado Coração de Jesus', 'Santo Antônio'],
  bairrosPopulares: ['Medianeira', 'Santa Lúcia', 'Santa Rita', 'São Francisco'],

  parques: [
    {
      nome: 'Praça XV de Novembro',
      descricao:
        'No coração da cidade, ao fim da Avenida Júlio de Castilhos e junto à igreja matriz, a praça reúne jardins, parreirais, bancos e área de lazer — ponto tradicional para caminhada e encontro ao ar livre no centro.',
    },
    {
      nome: 'Portal Monumento da Longevidade',
      descricao:
        'Marco simbólico da "Terra da Longevidade", inaugurado nos festejos da imigração italiana; o entorno e as avenidas próximas servem de referência para caminhadas e passeios na cidade.',
    },
    {
      nome: 'Praças e parreirais do entorno',
      descricao:
        'Espalhadas pelos bairros e pelas saídas rurais, praças arborizadas e os pomares e parreirais da zona colonial oferecem trajetos agradáveis para caminhada e pedal em meio à paisagem da serra.',
    },
  ],
  ciclovias:
    'A malha cicloviária é modesta, típica de cidade pequena; boa parte do pedal e da corrida acontece nas vias urbanas e nas estradas vicinais que cortam os vinhedos e pomares do interior do município.',

  clima:
    'O clima é subtropical de serra, com as quatro estações bem marcadas: verões amenos a quentes e invernos frios, com geadas frequentes e, em alguns anos, registros raros de neve. A altitude em torno de 700 metros deixa as noites mais frescas mesmo no verão.',
  climaTreino:
    'O frio do inverno pede aquecimento mais cuidadoso e roupa adequada para treino ao ar livre, enquanto a primavera e o outono são as estações mais confortáveis para correr e caminhar. Nos dias de geada, ambientes fechados garantem a constância da rotina.',

  mobilidade:
    'Veranópolis é cortada pela RS-470, principal eixo que liga a cidade a Bento Gonçalves e à BR-470 em direção a Vacaria e ao restante da serra. O transporte urbano é feito por ônibus e o porte compacto da cidade favorece deslocamentos curtos, inclusive a pé e de bicicleta.',

  corridas: [
    {
      nome: 'Circuitos e corridas de rua locais',
      descricao:
        'A cidade recebe provas de corrida de rua e caminhadas ao longo do ano, integradas ao calendário esportivo regional da Serra Gaúcha.',
    },
    {
      nome: 'Caminhadas e eventos da longevidade',
      descricao:
        'Atividades ligadas ao tema da vida ativa e do envelhecimento saudável, marca da cidade, reúnem participantes de todas as idades em caminhadas e passeios organizados.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva veranense é fortemente associada à imagem de "Terra da Longevidade": caminhar, manter-se ativo e cuidar da saúde fazem parte do cotidiano, num ambiente de serra que valoriza a vida ao ar livre, a alimentação ligada à colônia e o vinho como tradição local.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional e por estúdios menores, distribuídos pelo centro e pelos bairros residenciais, em escala compatível com uma cidade pequena de boa renda.',

  destaquesFitness: [
    'Conhecida como a "Terra da Longevidade", com estudos pioneiros sobre envelhecimento saudável.',
    'Cidade da Serra Gaúcha de colonização italiana, com clima de quatro estações bem marcadas.',
    '"Berço Nacional da Maçã" e parte da Região da Uva e do Vinho, com forte vocação para a vida ativa.',
    'Economia diversificada, unindo vitivinicultura, fruticultura e polo metalmecânico.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 760,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade serrana de colonização italiana e fama de longevidade, Veranópolis une qualidade de vida, natureza e uma cultura de movimento que atravessa as gerações. Um personal trainer ajuda a aproveitar esse ambiente com treino seguro e constante, adaptado ao clima de serra e aos objetivos de cada pessoa — do desempenho ao envelhecimento ativo.',

  vizinhas: ['bento-goncalves-rs', 'vacaria-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Veranópolis', url: 'https://cidades.ibge.gov.br/brasil/rs/veranopolis/panorama' },
    { nome: 'Prefeitura de Veranópolis', url: 'https://www.veranopolis.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
