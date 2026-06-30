import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pontes-e-lacerda-mt',
  nome: 'Pontes e Lacerda',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'lacerdense',
  tipo: 'cidade',

  populacao: 52018,
  populacaoAno: 2022,
  idhm: 0.703,
  idhmClasse: 'alto',
  altitudeM: 254,

  resumoEconomico:
    'Pontes e Lacerda é o principal município do sudoeste de Mato Grosso e polo regional do Vale do Guaporé, próximo à fronteira com a Bolívia. A economia se apoia na pecuária de corte, no comércio e nos serviços que atendem a microrregião, e historicamente na mineração de ouro, atividade que marcou a ocupação local e ainda movimenta garimpos na área rural. A posição de entroncamento, ligando o vale a Cuiabá e a Vila Bela da Santíssima Trindade, reforça o papel da cidade como centro de apoio para os municípios vizinhos.',

  mercado:
    'O mercado fitness é o de uma cidade média mato-grossense em crescimento: academias concentradas no Centro e nos bairros mais movimentados, demanda por treino ao ar livre nas horas mais amenas e procura ligada à rotina da pecuária, do comércio e do serviço público regional. O personal trainer tende a atuar de forma flexível, combinando atendimento em academia, em domicílio e ao ar livre.',

  bairrosNobres: ['Centro', 'Jardim Alvorada', 'Flor da Serra', 'Vila Operária'],
  bairrosPopulares: ['6 de Abril', 'Cantão', 'Pioneiros', 'Nova Conquista'],

  parques: [
    {
      nome: 'Orla e margens do rio Guaporé',
      descricao:
        'As margens do rio Guaporé, que dão identidade à região, oferecem trechos usados para caminhada, lazer e atividade ao ar livre, em contato com a paisagem que define o Vale do Guaporé.',
    },
    {
      nome: 'Praças centrais',
      descricao:
        'O conjunto de praças do Centro concentra a circulação a pé e o convívio urbano, servindo de ponto de partida para caminhadas e corridas leves no núcleo da cidade.',
    },
    {
      nome: 'Espaços públicos com academia ao ar livre',
      descricao:
        'A cidade distribui equipamentos de ginástica em praças e áreas de bairro, ampliando o acesso público ao treino fora das academias.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é incipiente; a bicicleta é meio de transporte comum em uma cidade de relevo relativamente plano, mas a extensão de ciclovias não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente do sudoeste mato-grossense, com calor intenso na maior parte do ano, estação chuvosa no verão e período seco no inverno. A proximidade da fronteira com a Bolívia e do Vale do Guaporé reforça as temperaturas elevadas e a baixa umidade no auge da seca.',
  climaTreino:
    'O calor forte recomenda treinar ao ar livre no começo da manhã ou no fim da tarde, com hidratação reforçada e proteção solar; no pico do calor do dia, o ambiente climatizado da academia tende a ser mais seguro e confortável.',

  mobilidade:
    'Pontes e Lacerda é cortada pela BR-174, principal eixo rodoviário que liga a cidade ao restante do sudoeste de Mato Grosso e segue em direção a Vila Bela da Santíssima Trindade e à fronteira com a Bolívia. Essa posição faz do município um entroncamento de apoio para os deslocamentos do Vale do Guaporé. O Real Forte Príncipe da Beira, marco histórico do período colonial, fica na região, do outro lado do rio Guaporé, já em Rondônia.',

  corridas: [
    {
      nome: 'Volta do Guaporé',
      descricao:
        'Prova de ciclismo tradicional da região, realizada em diferentes edições ao longo dos anos, que mobiliza atletas e a comunidade local em torno do esporte e da identidade do Vale do Guaporé.',
    },
    {
      nome: 'Corridas de rua do calendário regional',
      descricao:
        'A cidade recebe provas de rua ligadas a datas comemorativas e a eventos esportivos do município e da microrregião, sinalizando adesão crescente à corrida apesar do calor.',
    },
  ],
  culturaEsportiva:
    'A identidade esportiva lacerdense combina o futebol e as atividades de lazer típicas do interior mato-grossense com o ciclismo, tradicional na região por meio da Volta do Guaporé, e com provas de rua do calendário local, complementados pela prática nas academias.',
  academias:
    'A oferta de academias se concentra no Centro e nos bairros mais movimentados, complementada pelas margens do rio Guaporé e pelos equipamentos de ginástica em praças e áreas públicas, que ampliam as opções de treino acessível.',

  destaquesFitness: [
    'Margens do rio Guaporé como cenário para caminhada e atividade ao ar livre.',
    'Volta do Guaporé, prova de ciclismo tradicional da região, no calendário esportivo local.',
    'Praças centrais e academias ao ar livre que favorecem a circulação a pé e o treino público.',
    'Posição de polo do Vale do Guaporé, que atrai moradores da microrregião para serviços, incluindo o fitness.',
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
    'Polo do Vale do Guaporé no sudoeste de Mato Grosso, Pontes e Lacerda reúne pecuária, comércio regional e uma história ligada ao ouro em um clima quente que pede método. Um personal trainer ajuda a organizar uma rotina que respeite o calor, aproveite as margens do rio Guaporé e os espaços públicos e prepare o corpo para a vida ativa que a cidade oferece.',

  vizinhas: ['caceres-mt', 'tangara-da-serra-mt'],

  fontes: [
    {
      nome: 'IBGE Cidades — Pontes e Lacerda',
      url: 'https://cidades.ibge.gov.br/brasil/mt/pontes-e-lacerda/panorama',
    },
    { nome: 'Prefeitura de Pontes e Lacerda', url: 'https://www.ponteselacerda.mt.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/5106752' },
  ],
  atualizadoEm: '2026-06-29',
};
