import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'nova-odessa-sp',
  nome: 'Nova Odessa',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'novaodessense',
  tipo: 'cidade',

  populacao: 62019,
  populacaoAno: 2022,
  idhm: 0.791,
  idhmClasse: 'alto',
  altitudeM: 560,

  resumoEconomico:
    'Na Região Metropolitana de Campinas, entre Americana e Sumaré, Nova Odessa nasceu em 1905 de um núcleo colonial que recebeu imigrantes letos, além de famílias alemãs, russas e judeu-ucranianas — o nome é herança de uma visita do fundador à cidade de Odessa. De vocação agrícola inicial (algodão, cana e leite), o município se industrializou na segunda metade do século XX e hoje tem economia apoiada em indústria têxtil, metalurgia e autopeças, num eixo logístico privilegiado às margens da Rodovia Anhanguera. O comércio local e a integração com o polo de Campinas complementam a base econômica.',

  mercado:
    'Cidade de porte médio inserida numa das regiões metropolitanas mais dinâmicas do interior paulista, Nova Odessa tem um mercado fitness aquecido pela proximidade com Americana, Sumaré e Campinas. A procura por personal trainers vem de moradores que buscam acompanhamento em academias de bairro, condomínios residenciais e nos espaços verdes da cidade, com boa oferta de profissionais circulando por toda a conurbação da RM Campinas.',

  bairrosNobres: ['Jardim da Alvorada', 'Green Village', 'Jardim São Manoel', 'Centro'],
  bairrosPopulares: ['Jardim das Palmeiras', 'Residencial Klavin', 'Bosque dos Eucaliptos', 'Jardim Marajoara'],

  parques: [
    {
      nome: 'Bosque Manoel Jorge',
      descricao:
        'Principal área verde de lazer da cidade, com trilhas para caminhada e corrida, aparelhos de exercício, bebedouros e ciclovia — um dos pontos mais usados para treino ao ar livre em Nova Odessa.',
    },
    {
      nome: 'Jardim Botânico Plantarum',
      descricao:
        'Um dos maiores jardins botânicos em espécies da América Latina, com trilhas entre jardins temáticos e ampla diversidade de plantas nativas; espaço de caminhada e contato com a natureza que dá cenário a eventos esportivos da cidade.',
    },
    {
      nome: 'Bosque dos Eucaliptos',
      descricao:
        'Área arborizada em bairro residencial que serve de referência local para caminhadas e atividade ao ar livre no dia a dia dos moradores.',
    },
  ],
  ciclovias:
    'A cidade conta com trechos de ciclovia e ciclofaixa em vias urbanas e no entorno do Bosque Manoel Jorge; boa parte do pedal e da corrida acontece também nas ruas planas dos bairros residenciais.',

  clima:
    'O clima é tropical de altitude, com verões quentes e chuvosos (de outubro a março) e invernos mais amenos e secos, padrão típico da Região Metropolitana de Campinas. A cerca de 560 metros de altitude, as noites de inverno costumam ser frescas e o período seco concentra os dias de tempo firme.',
  climaTreino:
    'No verão, o calor e as chuvas de fim de tarde pedem treino nas primeiras horas da manhã ou no início da noite, com atenção à hidratação. No inverno seco e mais ameno, as condições são favoráveis para atividades ao ar livre nos bosques e nas ruas da cidade.',

  mobilidade:
    'Nova Odessa é cortada pela Rodovia Anhanguera (SP-330), que garante acesso rápido a Campinas, Americana e à capital, e se articula à Rodovia dos Astronautas (SP-133) no sentido de Paulínia. A cidade cresceu ao redor da antiga linha férrea da Companhia Paulista, e o transporte urbano e intermunicipal por ônibus liga o município ao restante da conurbação da RM Campinas.',

  corridas: [
    {
      nome: 'Nova Odessa Running',
      descricao:
        'Corrida de rua tradicional do município, com percursos de 5 km e 10 km que passam por pontos da cidade, incluindo o entorno do Jardim Botânico Plantarum, e apoio da prefeitura.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso dos bosques e áreas verdes para caminhada, corrida e pedal com uma agenda de corrida de rua consolidada. A herança da colonização leta e europeia marca a identidade da cidade, que preserva forte apego a seus espaços arborizados como lugar de convívio e atividade física.',
  academias:
    'A oferta é formada por academias de musculação e treino funcional distribuídas pelo Centro e pelos bairros residenciais, além de estúdios menores, com porte compatível com uma cidade média integrada ao polo de Campinas.',

  destaquesFitness: [
    'Bosque Manoel Jorge com trilhas, aparelhos de exercício e ciclovia para treino ao ar livre.',
    'Jardim Botânico Plantarum, um dos maiores da América Latina, como cenário de caminhada e de eventos esportivos.',
    'Nova Odessa Running: corrida de rua tradicional com provas de 5 km e 10 km.',
    'Posição na RM Campinas, às margens da Anhanguera, com fácil circulação de profissionais entre cidades vizinhas.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade arborizada e bem posicionada na Região Metropolitana de Campinas, Nova Odessa oferece bosques, ciclovias e uma agenda de corrida de rua que favorecem o treino ao ar livre ao longo do ano. Um personal trainer ajuda a aproveitar esses espaços com segurança, ajustando os horários ao verão chuvoso e mantendo a constância no inverno seco e ameno.',

  vizinhas: ['sumare-sp', 'americana-sp', 'santa-barbara-doeste-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Nova Odessa', url: 'https://cidades.ibge.gov.br/brasil/sp/nova-odessa/panorama' },
    { nome: 'Prefeitura de Nova Odessa', url: 'https://www.novaodessa.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
