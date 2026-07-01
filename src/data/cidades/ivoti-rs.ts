import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ivoti-rs',
  nome: 'Ivoti',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'ivotiense',
  tipo: 'cidade',

  populacao: 23216,
  populacaoAno: 2022,
  idhm: 0.780,
  idhmClasse: 'alto',
  altitudeM: 96,

  resumoEconomico:
    'Conhecida como a "Cidade das Flores", Ivoti fica no Vale do Rio dos Sinos e integra a Região Metropolitana de Porto Alegre, com forte herança da imigração alemã iniciada em 1824. A economia se apoia na indústria calçadista e de couro — tradicional em todo o Vale do Sinos —, complementada pela produção de alimentos e laticínios, pelo vestuário e por uma agropecuária de colônia. O turismo é um pilar em crescimento, movido pelo Núcleo de Casas Enxaimel, pela Ponte do Imperador e pelo calendário de festas ligado às flores e à cultura germânica.',

  mercado:
    'Por ser uma cidade pequena e de bom padrão de renda dentro da Região Metropolitana de Porto Alegre, Ivoti tem um mercado fitness em consolidação, formado por academias de bairro e estúdios de treino. A proximidade com Novo Hamburgo e São Leopoldo amplia a oferta de profissionais, e a procura por personal trainers tende a crescer entre moradores que valorizam o treino ao ar livre no relevo de vales e nas áreas verdes da cidade.',

  bairrosNobres: ['Centro', 'Concórdia', 'Bom Jardim', 'Feitoria Nova'],
  bairrosPopulares: ['Farroupilha', 'Primavera', 'São José', 'Palmeiras'],

  parques: [
    {
      nome: 'Núcleo de Casas Enxaimel',
      descricao:
        'Conjunto de casas em estilo enxaimel do período da imigração alemã, na Feitoria Nova; o entorno arborizado e as ruas tranquilas são muito usados para caminhada e passeios ao ar livre, além de sediar a Feira de Artesanato mensal.',
    },
    {
      nome: 'Ponte do Imperador',
      descricao:
        'Ponte histórica de arenito construída entre 1857 e 1864 sobre o Arroio Feitoria, tombada pelo IPHAN em 1986; o entorno junto ao arroio é um ponto de referência para caminhadas e atividades leves ao ar livre.',
    },
    {
      nome: 'Praça Concórdia',
      descricao:
        'Praça central da cidade, ponto de encontro e de eventos como a Feira das Flores; espaço aberto usado por moradores para caminhada, alongamento e treino leve no dia a dia.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias internas dos bairros e nas estradas de colônia que ligam Ivoti às localidades vizinhas, com relevo ondulado típico do Vale do Sinos.',

  clima:
    'O clima é subtropical úmido, com as quatro estações bem marcadas: verões quentes, com temperaturas que passam com frequência dos 30 °C, e invernos frios, quando as manhãs podem se aproximar de 0 °C. As chuvas se distribuem ao longo do ano, sem estação seca definida, e a umidade costuma ser elevada.',
  climaTreino:
    'A variação entre estações pede adaptação: no verão, treinar cedo ou no fim da tarde e reforçar a hidratação; no inverno, aquecimento mais longo e agasalho contra o frio e a umidade das manhãs. A primavera e o outono, amenos, tendem a ser os períodos mais confortáveis para o treino ao ar livre.',

  mobilidade:
    'Ivoti conecta-se à malha metropolitana pela RS-239, que liga a cidade a Estância Velha, Novo Hamburgo e São Leopoldo — polos do Vale do Sinos a poucos quilômetros. O transporte é feito por linhas de ônibus intermunicipais e municipais, e a proximidade com a BR-116 dá acesso ao restante da Região Metropolitana de Porto Alegre.',

  corridas: [
    {
      nome: 'Rústica Cidade das Flores',
      descricao:
        'Corrida de rua tradicional de Ivoti, ligada à identidade da "Cidade das Flores", que integra o calendário esportivo do município e reúne corredores da região do Vale do Sinos.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Ivoti mistura o hábito de caminhada e corrida em praças e ruas arborizadas com um calendário de eventos forte na cultura germânica e nas flores. A tradição associativa herdada da colonização alemã se reflete em clubes e sociedades, e a proximidade com Novo Hamburgo e São Leopoldo integra a cidade à vida esportiva do Vale do Sinos.',
  academias:
    'A oferta é formada principalmente por academias de bairro e estúdios de musculação e treino funcional, distribuídas pela área central e pelos bairros residenciais, com porte compatível com uma cidade pequena de bom padrão de renda.',

  destaquesFitness: [
    'Cidade das Flores: calendário de festas, praças arborizadas e Núcleo de Casas Enxaimel como espaços de caminhada ao ar livre.',
    'Relevo ondulado do Vale do Sinos e estradas de colônia, que favorecem corrida e pedal com variação de terreno.',
    'Clima subtropical com quatro estações, que exige adaptar horário e agasalho do treino ao longo do ano.',
    'Integração metropolitana pela RS-239 com Novo Hamburgo e São Leopoldo, ampliando a oferta de profissionais e estrutura.',
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
    'Cidade pequena, de herança alemã e boa qualidade de vida na Região Metropolitana de Porto Alegre, Ivoti oferece um ambiente agradável para treinar, entre praças, ruas arborizadas e o relevo de vales do entorno. Um personal trainer ajuda a adaptar a rotina às quatro estações do clima subtropical e a aproveitar melhor os espaços ao ar livre da Cidade das Flores.',

  vizinhas: ['novo-hamburgo-rs', 'sao-leopoldo-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Ivoti', url: 'https://cidades.ibge.gov.br/brasil/rs/ivoti/panorama' },
    { nome: 'Prefeitura de Ivoti', url: 'https://www.ivoti.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
