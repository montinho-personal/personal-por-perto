import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sarandi-rs',
  nome: 'Sarandi',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'sarandiense',
  tipo: 'cidade',

  populacao: 22851,
  populacaoAno: 2022,
  idhm: 0.777,
  idhmClasse: 'alto',
  altitudeM: 503,

  resumoEconomico:
    'Sarandi fica no norte do Rio Grande do Sul, na mesorregião Noroeste Rio-grandense e na microrregião de Carazinho, cortada pela BR-386 — a histórica "Rodovia da Produção" que liga a cidade a Passo Fundo, Caxias do Sul, Porto Alegre, o Noroeste gaúcho e o Oeste catarinense. A economia soma cerca de R$ 1,3 bilhão em PIB, com os serviços respondendo por 52,3% do valor adicionado, a indústria por 19,2%, a agropecuária por 15,4% e a administração pública por 13,1%. No campo, predomina a agricultura familiar de pequenas propriedades com lavouras de soja, trigo e milho; na indústria, destacam-se o frigorífico Aurora — maior empregador do município, com abate de milhares de suínos por dia — e um polo moveleiro de projeção nacional, além de fábricas de calçados e acessórios.',

  mercado:
    'O mercado de personal trainers em Sarandi é pequeno e concentrado, típico de um município do interior gaúcho com essa população. A procura tende a vir de trabalhadores da indústria e do agronegócio local que buscam treino individualizado e constância ao longo do ano, sobretudo nos meses de inverno mais rigoroso, quando o frio reduz a prática espontânea ao ar livre.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Papagaio', 'Vicentinos', 'Barreirinho', 'Vila Maria'],

  parques: [
    {
      nome: 'Parque Natural Municipal da Grápia',
      descricao:
        'Criado pela Lei Municipal nº 3.960/2010 no loteamento Parque Ipiranga, é o maior remanescente de mata urbana de Sarandi, com formação de Floresta Estacional Decidual e espécies regionalmente ameaçadas, como a grápia e a cabreúva. Conta com trilha guiada entre as árvores nativas, embora ainda não tenha visitação pública organizada — o plano de manejo segue em elaboração.',
    },
    {
      nome: 'Praça da Cidadania',
      descricao:
        'Maior complexo de equipamentos públicos urbanos do município, entre os bairros Vicentinos e Parque Ipiranga, com cerca de 12.000 m², pista de caminhada e ciclismo infantil de 90 metros, playground e uma Academia para a Terceira Idade (ATI) — um dos principais pontos de atividade física ao ar livre da cidade.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária formal é limitada, sem uma malha contínua de ciclovias pela cidade; o pedal urbano acontece sobretudo nas ruas do centro e nas estradas vicinais que levam à zona rural, e a única pista dedicada de que se tem notícia é o pequeno circuito infantil da Praça da Cidadania.',

  clima:
    'O clima é subtropical úmido, com temperaturas que já variaram de -1 °C a 41 °C e média em torno de 19 °C, chuvas bem distribuídas ao longo do ano e geadas frequentes no inverno. A altitude de 503 metros reforça o frio nas manhãs de junho e julho.',
  climaTreino:
    'De outubro a abril, as condições costumam favorecer o treino ao ar livre, com atenção à hidratação nos dias mais quentes de verão. No inverno, o frio intenso e as geadas recomendam agasalho, aquecimento cuidadoso e, em boa parte dos dias, a migração do treino para ambientes fechados.',

  mobilidade:
    'O principal eixo rodoviário é a BR-386, que atravessa o município por volta do km 135 e conecta Sarandi a Passo Fundo, Caxias do Sul, Porto Alegre, ao Noroeste do Rio Grande do Sul e ao Oeste de Santa Catarina — corredor histórico de escoamento da produção agrícola e industrial da região. A cidade conta com terminal rodoviário próprio para o transporte intermunicipal de passageiros.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva local combina o cotidiano de trabalho ligado à indústria e ao agronegócio com o uso de espaços públicos como a Praça da Cidadania, que reúne pista de caminhada e Academia para a Terceira Idade, e o ginásio de esportes do bairro Vicentinos, alvo de reformas recentes da prefeitura.',
  academias:
    'A oferta de estruturas de treino é modesta, concentrada em academias de bairro e estúdios de musculação compatíveis com o porte de um município pequeno do interior gaúcho, complementada pelo trabalho de personal trainers que atendem em domicílio, ao ar livre e em espaços parceiros.',

  destaquesFitness: [
    'BR-386, a "Rodovia da Produção", corta o município e liga Sarandi a Passo Fundo, Caxias do Sul e Porto Alegre.',
    'Frigorífico Aurora e um polo moveleiro de projeção nacional sustentam a base industrial da cidade, ao lado da agricultura familiar de soja, trigo e milho.',
    'Parque Natural Municipal da Grápia preserva o maior remanescente de mata urbana do município, com trilha entre árvores nativas.',
    'Invernos frios com geadas no norte gaúcho valorizam o acompanhamento de personal trainer e a adaptação do treino para ambientes fechados.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Cidade industrial e agrícola do norte gaúcho, Sarandi tem no frigorífico Aurora, no polo moveleiro e nas lavouras de soja, trigo e milho a base de sua economia, e na BR-386 o elo com os grandes centros do estado. Um personal trainer ajuda a manter a rotina de treino constante, aproveitando espaços como a Praça da Cidadania nos dias bons e adaptando o treino aos meses de frio e geada.',

  vizinhas: ['carazinho-rs', 'passo-fundo-rs', 'nao-me-toque-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Sarandi', url: 'https://cidades.ibge.gov.br/brasil/rs/sarandi/panorama' },
    { nome: 'Prefeitura Municipal de Sarandi/RS', url: 'https://sarandi.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
