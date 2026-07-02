import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'prado-ba',
  nome: 'Prado',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'pradense',
  tipo: 'cidade',

  populacao: 35003,
  populacaoAno: 2022,
  idhm: 0.621,
  idhmClasse: 'médio',
  altitudeM: 4,

  resumoEconomico:
    'No extremo sul da Bahia, Prado é considerada a capital informal da Costa das Baleias, faixa de litoral que vai de Cumuruxatiba a Caravelas. A economia combina turismo de praia e ecoturismo (com destaque para a observação de baleias-jubarte, entre junho e novembro), pesca artesanal e agropecuária, incluindo a cultura do cacau característica do extremo sul baiano. O município reúne mais de 80 km de praias, do centro urbano ao distrito de Cumuruxatiba, e é apontado como um dos acessos mais fáceis da região, por rodovias asfaltadas a partir da BR-101.',

  mercado:
    'O mercado fitness de Prado é pequeno e concentrado no centro e no bairro Novo Prado, moldado pela sazonalidade do turismo — que cresce no verão e na temporada de observação de baleias-jubarte, entre junho e novembro. A procura por personal trainer tende a vir tanto de moradores quanto de visitantes de temporada, muitas vezes ligada a atividades ao ar livre na praia.',

  bairrosNobres: ['Centro', 'Novo Prado'],
  bairrosPopulares: ['Basevi'],

  parques: [
    {
      nome: 'Orla Central e Praia do Coqueiral',
      descricao:
        'Faixa de praia urbana com coqueiros, quiosques e infraestrutura de apoio, que concentra caminhada, corrida e atividades na areia junto ao centro e ao bairro Novo Prado.',
    },
    {
      nome: 'Praia de Guaratiba',
      descricao:
        'A cerca de 10 km do centro, entre Prado e Alcobaça, é a praia mais procurada por surfistas da região, com mar de ondas mais fortes.',
    },
    {
      nome: 'Rodovia costeira até Cumuruxatiba',
      descricao:
        'Trecho de cerca de 32 km que liga a sede ao distrito de Cumuruxatiba, margeando praias isoladas; é usado por quem pedala ou percorre a costa de carro entre paradas na areia.',
    },
  ],
  ciclovias:
    'Não há estrutura cicloviária urbana com extensão divulgada em fonte oficial; o deslocamento de bicicleta acontece nas vias locais e na rodovia costeira em direção a Cumuruxatiba.',

  clima:
    'O clima é tropical, com temperatura média anual de 24,7 °C. O verão (dezembro a março) é mais quente, com máximas acima de 30 °C — podendo passar de 36 °C —, enquanto o inverno é mais ameno. As chuvas ficam por volta de 1.125 mm ao ano e se distribuem sem estação seca bem definida, com o menor volume em agosto (cerca de 60 mm) e o maior em novembro (em torno de 158 mm).',
  climaTreino:
    'O calor pede treinos no início da manhã ou no fim da tarde, com hidratação reforçada; como as chuvas não se concentram em um período único do ano, vale ter sempre uma alternativa coberta para os dias de pancada.',

  mobilidade:
    'O acesso rodoviário principal é pela BR-101 até Itamaraju, de onde partem cerca de 47 km de estrada asfaltada até Prado. A BA-001 segue pelo litoral até o distrito de Cumuruxatiba, a cerca de 32 km, com transporte público diário ligando os dois núcleos. Dentro da cidade, o deslocamento é feito a pé, de bicicleta ou por transporte local, já que a área urbana é compacta.',

  corridas: [],
  culturaEsportiva:
    'A vida esportiva da cidade gira em torno do mar: o surf tem na praia de Guaratiba seu principal point, entre Prado e Alcobaça, e os passeios de barco para observação de baleias-jubarte, entre junho e novembro, movimentam o turismo náutico a partir de Prado, Cumuruxatiba e Corumbau. A pesca artesanal segue como tradição, e as praias extensas favorecem caminhada, corrida na areia e outras atividades ao ar livre.',
  academias:
    'A oferta de academias e estúdios é pequena, concentrada no centro e no bairro Novo Prado, atendendo tanto moradores quanto o público turístico que passa temporadas na cidade.',

  destaquesFitness: [
    'Mais de 80 km de praias na Costa das Baleias, do centro de Prado ao distrito de Cumuruxatiba.',
    'Temporada de observação de baleias-jubarte, entre junho e novembro, com saídas de barco de Prado, Cumuruxatiba e Corumbau.',
    'Praia de Guaratiba como principal point de surf da região, entre Prado e Alcobaça.',
    'Clima tropical quente o ano todo, favorável ao treino ao ar livre na praia, com chuvas distribuídas sem estação seca marcada.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 220,
    mensalMax: 600,
    onlineMin: 110,
    onlineMax: 320,
  },

  conclusao:
    'Com praias extensas e a Costa das Baleias como cenário, Prado oferece um ambiente natural favorável ao treino ao ar livre, do surf de Guaratiba às caminhadas na orla do centro. Um personal trainer ajuda a organizar essa rotina com método, respeitando o calor e a sazonalidade turística que marcam a cidade.',

  vizinhas: ['porto-seguro-ba', 'eunapolis-ba', 'teixeira-de-freitas-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Prado', url: 'https://cidades.ibge.gov.br/brasil/ba/prado/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Prado', url: 'https://prado.ba.gov.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
