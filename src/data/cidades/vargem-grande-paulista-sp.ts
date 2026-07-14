import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'vargem-grande-paulista-sp',
  nome: 'Vargem Grande Paulista',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'vargem-grandense',
  tipo: 'cidade',

  populacao: 50333,
  populacaoAno: 2022,
  idhm: 0.77,
  idhmClasse: 'alto',
  altitudeM: 875,

  resumoEconomico:
    'Vargem Grande Paulista é um dos menores municípios em área da Região Metropolitana de São Paulo, no extremo oeste da metrópole, espremido às margens da Rodovia Raposo Tavares entre os quilômetros 39 e 47 e vizinho de Cotia e Itapevi. Emancipada de Cotia apenas em 1981, é uma cidade jovem que cresceu rápido: passou de cerca de 43 mil para 50.333 habitantes entre os Censos de 2010 e 2022. A economia é puxada por serviços (perto de 60% do valor adicionado) e por uma indústria diversificada distribuída em parques industriais ao longo da Raposo, mas a cidade ainda guarda o caráter de "cinturão verde" paulistano, com chácaras, floricultura e horticultura. O relevo de morros, a cerca de 875 m de altitude, e a proximidade da Reserva Florestal do Morro Grande dão à cidade um clima ameno e uma vocação para o contato com a natureza.',

  mercado:
    'O mercado de personal trainers em Vargem Grande Paulista é fortemente moldado pela divisão entre condomínios horizontais e bairros residenciais. De um lado, os condomínios e loteamentos fechados espalhados pelos dois lados da Raposo Tavares — como o conjunto Paysage, no Residencial San Diego, o Terras de Santa Adélia e os condomínios do Jardim Europa (Residencial América, Village Club, Vita Vert) — concentram famílias que buscam atendimento domiciliar, dentro de casa ou na estrutura de lazer do próprio condomínio. De outro, no Centro e em bairros como Jardim Europa e Caucaia do Alto, o foco é o treino em academias de bairro, com boa relação custo-benefício. Como a cidade é pequena e pouco verticalizada, o personal que se desloca entre chácaras e condomínios — somando atendimento em domicílio à parceria com academias locais — costuma atender bem a essa demanda dispersa.',

  bairrosNobres: ['Residencial San Diego', 'Terras de Santa Adélia', 'Jardim Europa', 'Caucaia do Alto'],
  bairrosPopulares: ['Centro', 'Jardim Vitória', 'Jardim Real', 'Recanto Caucaia'],

  parques: [
    {
      nome: 'Reserva Florestal do Morro Grande',
      descricao:
        'Grande remanescente de Mata Atlântica entre Vargem Grande Paulista, Cotia e Ibiúna, protegido como área de manancial. É um refúgio de fauna e flora no entorno da cidade, com trilhas e mata fechada que reforçam a vocação de contato com a natureza da região.',
    },
    {
      nome: 'Estádio Municipal José dos Santos',
      descricao:
        'Principal praça esportiva pública do município, usada para futebol e atividades comunitárias. Junto com as quadras poliesportivas espalhadas pelos bairros, forma a base da estrutura municipal para esporte e treino.',
    },
  ],
  ciclovias:
    'Por ser uma cidade pequena e cortada pela Rodovia Raposo Tavares, Vargem Grande Paulista não tem uma malha cicloviária estruturada como a de municípios maiores da região oeste. O pedal acontece sobretudo dentro dos condomínios horizontais e em vias internas mais tranquilas dos bairros, além das estradas rurais de chácaras de Caucaia do Alto, que atraem ciclistas de fim de semana.',

  clima:
    'O clima é subtropical de altitude, com a sede a cerca de 875 m acima do nível do mar, morros no entorno que passam dos 1.000 m e chuvas concentradas no verão. A proximidade da Reserva Florestal do Morro Grande e do cinturão verde ajuda a manter as temperaturas amenas e o ar mais úmido.',
  climaTreino:
    'As manhãs amenas, típicas das cidades altas da região oeste, são ótimas janelas para treino ao ar livre, especialmente fora do verão. No verão chuvoso, vale priorizar o início do dia para correr ou treinar na rua e ter um plano B em academia ou na estrutura do condomínio.',

  mobilidade:
    'A mobilidade gira em torno da Rodovia Raposo Tavares, que corta a cidade entre os km 39 e 47 e é o principal eixo de ligação com Cotia, Itapevi e a capital. Vargem Grande Paulista não tem estação ferroviária própria, e o transporte é predominantemente por carro e por linhas de ônibus municipais e intermunicipais. Essa dependência do automóvel, somada à dispersão entre condomínios e chácaras, valoriza o personal que atende em domicílio ou no condomínio, poupando o cliente de deslocamentos pela rodovia.',

  corridas: [
    {
      nome: 'Circuito Turístico CONISUD',
      descricao:
        'Vargem Grande Paulista integra o circuito turístico do Consórcio Intermunicipal da Região Sudoeste da Grande São Paulo (CONISUD), que valoriza trilhas, áreas verdes e turismo ativo nos municípios do eixo da Raposo Tavares.',
    },
    {
      nome: 'Provas de rua regionais do eixo oeste',
      descricao:
        'A cidade e o entorno recebem provas de corrida de rua de calendário regional, com largadas em áreas centrais e percursos de 5 km e 10 km que aproveitam o relevo ondulado característico da região.',
    },
  ],
  culturaEsportiva:
    'Com IDHM alto (0,770) e forte presença de condomínios horizontais, a cultura esportiva de Vargem Grande Paulista mistura o treino dentro de casa e dos clubes de condomínio com o uso das quadras públicas dos bairros e do Estádio Municipal José dos Santos. O relevo de morros e a proximidade da Mata Atlântica favorecem caminhada, corrida e pedal ao ar livre, sobretudo nas estradas rurais de Caucaia do Alto.',
  academias:
    'A oferta de academias é típica de cidade pequena: predominam academias de bairro com bom custo-benefício no Centro e nos bairros residenciais, além de estúdios menores e espaços de treino funcional. Muitos moradores de condomínios complementam a rotina com a estrutura de lazer e quadras do próprio condomínio, o que abre espaço para o personal que leva o treino até em casa.',
  academiasProximas: [
    { nome: 'Academia Gaviões 24h', detalhe: 'unidades no Centro, com musculação 24 horas' },
    { nome: 'Skyfit', detalhe: 'rede de baixo custo com unidade na cidade' },
    { nome: 'Academia PHI', detalhe: 'estrutura ampla, com musculação, pilates e natação' },
    { nome: 'CrossFit Saúde', detalhe: 'box com unidade em Vargem Grande Paulista' },
  ],

  destaquesFitness: [
    'IDHM alto (0,770) e crescimento populacional acelerado entre 2010 e 2022.',
    'Forte presença de condomínios horizontais ao longo da Raposo Tavares, com demanda por atendimento domiciliar.',
    'Clima ameno de cidade alta (cerca de 875 m), bom para treino ao ar livre nas manhãs.',
    'Entorno de Mata Atlântica e estradas rurais de Caucaia do Alto, atrativos para corrida e pedal.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 900,
    onlineMin: 150,
    onlineMax: 420,
  },

  conclusao:
    'Treinar com um personal trainer em Vargem Grande Paulista costuma combinar o melhor de dois mundos: a tranquilidade de uma cidade pequena e arborizada do oeste paulista e a praticidade do atendimento em casa ou no condomínio. Seja em um loteamento fechado às margens da Raposo Tavares, em uma academia de bairro no Centro ou nas estradas rurais de Caucaia do Alto, o que faz diferença é escolher um profissional alinhado ao seu objetivo e à sua rotina — e o clima ameno e o verde da cidade dão poucos motivos para não começar.',

  faqsExtra: [
    {
      pergunta: 'O personal atende dentro dos condomínios de Vargem Grande Paulista?',
      resposta:
        'Sim — é o formato mais procurado da cidade. Nos loteamentos e condomínios ao longo da Raposo Tavares, como o Residencial San Diego (conjunto Paysage), o Terras de Santa Adélia e os condomínios do Jardim Europa, o treino acontece em casa ou na estrutura de lazer do próprio residencial, poupando o morador de encarar a rodovia. O personal leva o material necessário e adapta a sessão ao espaço disponível.',
    },
    {
      pergunta: 'O que muda entre treinar no Centro e nos condomínios da cidade?',
      resposta:
        'No Centro e em bairros como Jardim Vitória, o comum é treinar em academia — a cidade tem opções com musculação 24 horas e boxes de treino funcional — com preços de cidade pequena. Nos condomínios, prevalece o atendimento domiciliar, com privacidade e agenda flexível. Nos dois casos, o clima ameno de cidade alta e as estradas rurais de Caucaia do Alto rendem caminhada, corrida e pedal ao ar livre boa parte do ano.',
    },
    {
      pergunta: 'Quem tem dores ou limitações consegue treinar com acompanhamento na cidade?',
      resposta:
        'Consegue. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treino de pessoas com dores e limitações musculoesqueléticas e a experiência de quem já enfrentou as dores comuns da musculação. Partindo da base na região de Alphaville, o atendimento presencial em Vargem Grande Paulista — pelo eixo Castello/Raposo — pode ser combinado conforme agenda e local, além do acompanhamento online. O treino é progressivo e sem promessa de cura; quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['cotia-sp', 'itapevi-sp', 'sao-paulo-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Vargem Grande Paulista', url: 'https://cidades.ibge.gov.br/brasil/sp/vargem-grande-paulista/panorama' },
    { nome: 'Prefeitura de Vargem Grande Paulista', url: 'https://www.vargemgrandepaulista.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-14',
};
