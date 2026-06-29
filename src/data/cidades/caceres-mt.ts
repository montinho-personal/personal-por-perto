import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'caceres-mt',
  nome: 'Cáceres',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'cacerense',
  tipo: 'cidade',

  populacao: 89681,
  populacaoAno: 2022,
  idhm: 0.708,
  idhmClasse: 'alto',
  altitudeM: 118,

  resumoEconomico:
    'Cáceres é um dos principais municípios do oeste de Mato Grosso, às margens do rio Paraguai e na porta de entrada do Pantanal mato-grossense. Conhecida como "Princesinha do Paraguai", tem a economia ancorada na pecuária de corte, no comércio regional e no turismo de pesca, reforçado por estar próxima à fronteira com a Bolívia. O centro histórico, com casarões coloniais tombados, e o calendário de eventos sustentam um fluxo de visitantes que movimenta o setor de serviços, incluindo o fitness.',

  mercado:
    'O mercado fitness é o de uma cidade média mato-grossense: academias concentradas no Centro e nos bairros mais consolidados, procura por treino ao ar livre na orla do rio e demanda ligada à preparação para a pesca, à pecuária e ao turismo. O personal trainer costuma atuar de forma flexível, conciliando atendimento em academia, em domicílio e ao ar livre.',

  bairrosNobres: ['Centro', 'Cavalhada', 'Jardim Padre Paulo', 'São José'],
  bairrosPopulares: ['Cavalhada 3', 'Espírito Santo', 'Marajoara', 'Vila Mariana'],

  parques: [
    {
      nome: 'Orla do Rio Paraguai',
      descricao:
        'Faixa às margens do rio Paraguai, próxima ao Porto, usada para caminhada, corrida leve e lazer ao ar livre, com vista para o rio que define a paisagem da cidade.',
    },
    {
      nome: 'Centro Histórico e Praça Barão do Rio Branco',
      descricao:
        'Conjunto de praças e ruas do casario colonial tombado, com o Marco do Jauru e a Catedral São Luiz, espaço de circulação a pé no coração da cidade.',
    },
    {
      nome: 'Praças com academia ao ar livre',
      descricao:
        'A cidade distribui equipamentos de ginástica em praças de bairro, ampliando o acesso público ao treino fora das academias.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é incipiente; a bicicleta é meio de transporte comum em uma cidade de relevo plano, mas a extensão de ciclovias não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente do Pantanal mato-grossense, com calor intenso boa parte do ano, estação chuvosa no verão e período seco no inverno, quando o nível do rio Paraguai baixa e favorece a pesca.',
  climaTreino:
    'O calor elevado e a umidade tornam recomendável treinar ao ar livre cedo de manhã ou no fim da tarde, com hidratação reforçada; no pico do dia, o ambiente climatizado da academia tende a ser mais seguro.',

  mobilidade:
    'Cáceres é o ponto final da BR-070, que liga a cidade a Cuiabá (cerca de 210 km) e segue até a fronteira com a Bolívia, em San Matías. Essa posição faz do município um corredor de integração e a porta de entrada rodoviária para o oeste do estado e o Pantanal.',

  corridas: [
    {
      nome: 'Festival Internacional de Pesca Esportiva (FIPe)',
      descricao:
        'Maior evento turístico de Mato Grosso e maior festival de pesca esportiva do Brasil, realizado anualmente no rio Paraguai; reúne competições aquáticas e mobiliza a cidade em torno do esporte e do turismo.',
    },
    {
      nome: 'Corridas de rua do calendário regional',
      descricao:
        'A cidade recebe provas de rua ligadas a datas comemorativas e a eventos esportivos do município e da região, sinalizando adesão crescente à corrida apesar do calor.',
    },
  ],
  culturaEsportiva:
    'A identidade esportiva de Cáceres gira em torno da água e do rio Paraguai, com a pesca esportiva no centro do calendário pelo FIPe, esportes náuticos e atividades de lazer na orla, complementados por provas de rua e pela prática nas academias.',
  academias:
    'A oferta de academias se concentra no Centro e nos bairros mais consolidados, complementada pela orla do rio Paraguai e pelas academias ao ar livre das praças, que ampliam as opções de treino acessível.',

  destaquesFitness: [
    'Orla do rio Paraguai como cenário para caminhada, corrida leve e treino ao ar livre.',
    'FIPe, maior festival de pesca esportiva do Brasil, no coração do calendário esportivo local.',
    'Centro histórico tombado com praças que favorecem a circulação a pé.',
    'Academias ao ar livre em praças de bairro, ampliando o acesso público ao treino.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Princesinha do Paraguai e porta de entrada do Pantanal mato-grossense, Cáceres combina pecuária, patrimônio histórico e turismo de pesca em um clima quente que pede método. Um personal trainer ajuda a organizar uma rotina que respeite o calor, aproveite a orla do rio Paraguai e prepare o corpo para a vida ativa que a cidade oferece.',

  vizinhas: ['cuiaba-mt', 'varzea-grande-mt', 'tangara-da-serra-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Cáceres', url: 'https://cidades.ibge.gov.br/brasil/mt/caceres/panorama' },
    { nome: 'Prefeitura de Cáceres', url: 'https://www.caceres.mt.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/330250' },
  ],
  atualizadoEm: '2026-06-29',
};
