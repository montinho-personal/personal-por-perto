import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'camboriu-sc',
  nome: 'Camboriú',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'camboriuense',
  tipo: 'cidade',

  populacao: 103074,
  populacaoAno: 2022,
  idhm: 0.726,
  idhmClasse: 'alto',
  altitudeM: 8,

  resumoEconomico:
    'Vizinha e conurbada a Balneário Camboriú, Camboriú é uma das cidades que mais cresceu em Santa Catarina: o Censo 2022 registrou 103.074 habitantes, alta de mais de 65% em relação a 2010, o que a tornou o 14º município mais populoso do estado. A economia é puxada por comércio, serviços e construção civil, impulsionada pela expansão imobiliária que transbordou de Balneário Camboriú, somada a raízes históricas na agricultura e na extração de granito e mármore. Com IDHM alto (0,726, Atlas 2010), a cidade reúne bairros residenciais valorizados, sobretudo na divisa e ao longo da BR-101.',

  mercado:
    'O mercado de personal training em Camboriú é fortemente influenciado pela proximidade com Balneário Camboriú, polo de musculação e estética do Sul do país. A cidade mistura bairros residenciais em ascensão — Tabuleiro e Monte Alegre, na faixa próxima à divisa — com áreas mais populares e de periferia que avançam sobre o tecido urbano de BC. Esse mix sustenta demanda tanto em academias de bairro quanto em atendimento domiciliar e em condomínios, atendendo desde moradores fixos até quem trabalha ou frequenta a vizinha BC.',

  bairrosNobres: ['Tabuleiro (Monte Alegre)', 'Monte Alegre', 'Cidade Nova', 'Santa Regina'],
  bairrosPopulares: ['Areias', 'Lídia Duarte', 'Várzea do Ranchinho', 'Rio Pequeno'],

  parques: [
    {
      nome: 'Orla do Rio Camboriú',
      descricao:
        'O Rio Camboriú corta o município e dá nome à cidade ("rio dos robalos"). Suas margens e o entorno servem de cenário para caminhadas e treinos ao ar livre, com áreas planas e arborizadas próximas ao Centro.',
    },
    {
      nome: 'Praias da divisa (Amores, Taquaras e Laranjeiras)',
      descricao:
        'Na divisa com Balneário Camboriú ficam as praias agrestes da Praia dos Amores, Taquaras e Laranjeiras, com trechos de Mata Atlântica, ciclistas e corredores aproveitando os acessos e a Rodovia Interpraias.',
    },
    {
      nome: 'Morros e trilhas da Mata Atlântica',
      descricao:
        'O relevo do município inclui morros cobertos por Mata Atlântica, com pontos de mais de 700 m de altitude, que oferecem trilhas e treinos de elevação para quem busca terreno natural fora do plano da orla.',
    },
  ],
  ciclovias:
    'A malha cicloviária ainda é limitada e concentrada em vias urbanas e acessos próximos à divisa com Balneário Camboriú; muitos ciclistas usam a Rodovia Interpraias e as ligações pela BR-101 para pedalar.',

  clima:
    'O clima é subtropical úmido (Cfa), com verões quentes e invernos amenos, sem estação seca definida e chuvas bem distribuídas ao longo do ano.',
  climaTreino:
    'Dá para treinar ao ar livre o ano todo. No verão, quente e úmido, o começo da manhã e o fim da tarde são os horários mais confortáveis; no inverno, ameno, as temperaturas podem cair abaixo de 10 °C nas noites mais frias, favorecendo treinos diurnos.',

  mobilidade:
    'Camboriú é cortada pela BR-101, principal eixo do litoral catarinense, que estrutura o acesso à cidade e a conurbação com Balneário Camboriú. O deslocamento entre os dois municípios é intenso e cotidiano, feito por carro e por ônibus, com bairros como Tabuleiro e Monte Alegre servindo de porta de entrada.',

  corridas: [
    {
      nome: 'Provas regionais na conurbação BC–Camboriú',
      descricao:
        'A região concentra um calendário forte de corridas de rua. A Meia Maratona Internacional de Balneário Camboriú, por exemplo, atrai milhares de atletas e tem entre os inscritos grande participação de moradores de Camboriú e do entorno.',
    },
    {
      nome: 'Circuitos e corridas locais',
      descricao:
        'Eventos esportivos municipais e provas de rua menores integram o calendário de Camboriú, aproveitando vias urbanas e a proximidade com a orla da vizinha BC.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Camboriú é puxada pela vizinhança com Balneário Camboriú, referência nacional em musculação e culto ao corpo. Muitos moradores treinam, correm e pedalam aproveitando a estrutura compartilhada da conurbação, das academias às praias da divisa.',
  academias:
    'A oferta combina academias de bairro e estúdios em Camboriú com fácil acesso às academias de alto padrão de Balneário Camboriú, a poucos minutos pela BR-101. O atendimento domiciliar e em condomínios cresce junto com os novos empreendimentos residenciais.',

  destaquesFitness: [
    'Conurbação com Balneário Camboriú, polo de musculação e estética do Sul do país, a poucos minutos pela BR-101.',
    'Crescimento populacional acelerado (mais de 65% entre 2010 e 2022), com bairros residenciais em expansão.',
    'Praias agrestes da divisa (Amores, Taquaras e Laranjeiras) e Rodovia Interpraias para corrida e ciclismo.',
    'Mix de academias de bairro e forte demanda por personal domiciliar em novos condomínios.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 150,
    onlineMax: 420,
  },

  conclusao:
    'Camboriú combina o ritmo de uma cidade em crescimento acelerado com a vizinhança de um dos maiores polos fitness do país. Para quem mora nos bairros residenciais ou circula entre Camboriú e Balneário Camboriú, contar com um personal trainer é a forma mais eficiente de treinar com constância — em academia, em casa ou ao ar livre, das margens do Rio Camboriú às praias da divisa.',

  vizinhas: ['balneario-camboriu-sc', 'itajai-sc', 'itapema-sc', 'brusque-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Camboriú', url: 'https://cidades.ibge.gov.br/brasil/sc/camboriu/panorama' },
    { nome: 'Prefeitura de Camboriú', url: 'https://camboriu.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
