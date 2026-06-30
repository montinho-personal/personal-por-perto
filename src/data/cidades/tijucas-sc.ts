import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tijucas-sc',
  nome: 'Tijucas',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'tijuquense',
  tipo: 'cidade',

  populacao: 51592,
  populacaoAno: 2022,
  idhm: 0.76,
  idhmClasse: 'alto',
  altitudeM: 5,

  resumoEconomico:
    'Às margens do rio Tijucas e cortada pela BR-101, entre a Grande Florianópolis e o Vale do Itajaí, Tijucas é um polo industrial da cerâmica catarinense, sede da Portobello, uma das maiores fabricantes de revestimentos cerâmicos do país. A indústria de revestimentos e construção, somada ao comércio e à agricultura, sustenta uma economia que cresceu fortemente na última década, com a população avançando de cerca de 31 mil habitantes em 2010 para 51,6 mil no Censo de 2022.',

  mercado:
    'O mercado fitness acompanha o crescimento populacional da cidade, com academias de bairro, estúdios de treino funcional e personal trainers que atendem tanto em academias quanto no atendimento individual. A proximidade com Florianópolis, Itajaí e Brusque aproxima Tijucas das tendências do litoral catarinense, e o perfil de cidade média ainda mantém preços mais acessíveis que os dos grandes centros vizinhos.',

  bairrosNobres: ['Centro', 'Universitário', 'Praça', 'Santa Luzia'],
  bairrosPopulares: ['Joaia', 'Areias', 'Sul do Rio', 'Pernambuco'],

  parques: [
    {
      nome: 'Orla e margens do rio Tijucas',
      descricao:
        'As margens do rio que dá nome à cidade formam o corredor mais natural para caminhada, corrida e treino ao ar livre no Centro.',
    },
    {
      nome: 'Praças e espaços públicos do Centro',
      descricao:
        'As praças centrais concentram a vida ao ar livre da cidade e servem de ponto de encontro para caminhadas e atividades em grupo.',
    },
    {
      nome: 'Foz do rio Tijucas e praias próximas',
      descricao:
        'A faixa litorânea junto à foz do rio e as praias do entorno ampliam as opções de treino ao ar livre nos fins de semana.',
    },
  ],
  ciclovias:
    'A cidade tem trechos cicláveis ao longo de vias centrais e das margens do rio, em um traçado plano que favorece o pedal e o deslocamento ativo.',

  clima:
    'O clima é subtropical úmido, típico do litoral da Grande Florianópolis, com verões quentes e úmidos e invernos amenos, sem estação seca definida.',
  climaTreino:
    'O clima ameno permite treinar ao ar livre o ano todo; no verão, o ideal é priorizar o início da manhã ou o fim da tarde e reforçar a hidratação por causa da umidade do litoral.',

  mobilidade:
    'A BR-101 corta Tijucas e é o principal eixo de mobilidade, posicionando a cidade a cerca de 50 km de Florianópolis e a aproximadamente 40 km de Itajaí, com Brusque acessível pelo Vale do Itajaí. O relevo plano facilita os deslocamentos a pé e de bicicleta dentro da cidade.',

  corridas: [
    {
      nome: 'Corrida de Rua + Sustentável (Portobello)',
      descricao:
        'Prova local com percursos de caminhada de 4 km, corrida de 4 km e corrida de 7 km, com viés solidário e ambiental, reunindo mais de 300 atletas em sua primeira edição.',
    },
    {
      nome: 'Calendário esportivo municipal',
      descricao:
        'A Fundação Municipal de Esportes organiza ao longo do ano eventos de corrida e atividades físicas que movimentam praticantes da cidade e da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é típica de cidade média catarinense, com forte presença do futebol amador, futsal e atividades organizadas pela Fundação Municipal de Esportes. A corrida de rua vem ganhando público, impulsionada por eventos locais e pela proximidade com o calendário esportivo do litoral.',
  academias:
    'A oferta reúne academias de bairro, estúdios de treino funcional e musculação, distribuídos pelo Centro e pelos bairros em crescimento, atendendo a uma população que se expandiu rapidamente.',

  destaquesFitness: [
    'Margens do rio Tijucas: corredor natural para corrida, caminhada e treino funcional.',
    'Relevo plano que favorece pedal, corrida e deslocamento ativo.',
    'Polo industrial da cerâmica (Portobello) com população em forte crescimento e demanda fitness em expansão.',
    'Proximidade com Florianópolis, Itajaí e Brusque, conectando a cidade às tendências do litoral catarinense.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Polo da cerâmica entre a Grande Florianópolis e o Vale do Itajaí, Tijucas une crescimento acelerado, relevo plano e as margens do rio que dá nome à cidade. Um personal trainer ajuda a transformar a orla do rio e os espaços públicos do Centro em um plano consistente, da caminhada à preparação para as corridas de rua da cidade.',

  vizinhas: ['florianopolis-sc', 'itajai-sc', 'brusque-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Tijucas', url: 'https://cidades.ibge.gov.br/brasil/sc/tijucas/panorama' },
    { nome: 'Prefeitura de Tijucas', url: 'https://www.tijucas.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/4218004' },
  ],
  atualizadoEm: '2026-06-29',
};
