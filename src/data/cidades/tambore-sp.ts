import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tambore-sp',
  nome: 'Tamboré',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  tipo: 'regiao',
  cidadeMae: 'santana-de-parnaiba-sp',
  contexto: 'Região de Santana de Parnaíba e Barueri',

  resumoEconomico:
    'Tamboré é uma região de altíssimo padrão vizinha — e considerada uma extensão — de Alphaville, distribuída entre Santana de Parnaíba e Barueri. Construída sobre a antiga Fazenda Tamboré, teve sua área industrial e comercial criada em 1981, seguida pelos primeiros residenciais. O Centro Empresarial Tamboré é um dos polos corporativos mais relevantes da região oeste, com lajes corporativas e galpões próximos às rodovias Castello Branco, Rodoanel e Anhanguera. Os residenciais Tamboré, de lotes amplos e segurança 24h, estão entre os endereços mais valorizados da Grande São Paulo.',

  mercado:
    'O perfil de quem busca personal trainer no Tamboré é muito parecido com o de Alphaville: moradores de condomínios fechados de alto padrão e profissionais do polo empresarial. A procura se concentra no atendimento exclusivo — dentro de casa, na academia do condomínio ou em estúdios boutique — e em programas de bem-estar para empresas. A combinação de residências com estrutura própria de treino (academia, piscina e quadras) e um grande polo corporativo cria uma demanda dupla: a do morador que quer privacidade e a da empresa que busca qualidade de vida para os funcionários.',

  bairrosNobres: [
    'Residencial Tamboré (condomínios numerados)',
    'Resort Tamboré',
    'Burle Marx',
    'Gênesis',
  ],
  bairrosPopulares: ['Centro Empresarial Tamboré', 'Aldeia da Serra', 'Centro de Barueri'],

  parques: [
    {
      nome: 'Lago de Tamboré e Parque Ecológico',
      descricao:
        'A área da represa de Tamboré integra o Parque Ecológico, com um grande lago e pista para caminhada, corrida e ciclismo — o principal espaço público de treino ao ar livre da região.',
    },
    {
      nome: 'Reserva Biológica Tamboré',
      descricao:
        'Unidade de conservação de Mata Atlântica criada por lei municipal em 2005, em Santana de Parnaíba. Mais voltada à preservação, reforça o contato da região com áreas verdes preservadas.',
    },
    {
      nome: 'Ciclovia Via Parque (compartilhada com Alphaville)',
      descricao:
        'Trecho de lazer aberto a corredores e ciclistas nos fins de semana, integrando Tamboré à malha de espaços ativos de Alphaville.',
    },
  ],
  ciclovias:
    'Tamboré compartilha a infraestrutura de ciclismo e corrida de Alphaville, tendo a Avenida Marcos Penteado de Ulhôa Rodrigues como via de referência. A nova ciclovia de cerca de 6 km prevista para 2026 (ligando Aldeia da Serra a Alphaville) também beneficia a região.',

  clima:
    'O clima é tropical de altitude, ameno, com máximas em torno de 24 °C a 28 °C, mínimas de inverno perto de 17 °C e chuvas concentradas no verão — o mesmo padrão agradável de Alphaville.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre no Parque Ecológico e nas vias de lazer. Para quem trabalha no polo empresarial, treinar antes ou depois do expediente, dentro do condomínio ou em estúdios próximos, é o que melhor encaixa na rotina.',

  mobilidade:
    'O acesso é por carro, pela Rodovia Castello Branco, com proximidade do Rodoanel e da Anhanguera pelo lado do polo empresarial. Tamboré não tem estação de trem própria — a CPTM mais próxima é a estação Barueri (Linha 8-Diamante). Como em toda a região, o deslocamento por automóvel reforça a preferência por personais que atendem no local.',

  corridas: [
    {
      nome: 'Summer Run Barueri Alphaville',
      descricao:
        'A principal corrida da região tem entrega de kits no Shopping Tamboré, conectando a prova diretamente ao bairro. É um bom termômetro da cena de corrida amadora local.',
    },
    {
      nome: 'Corrida e ciclismo no Parque Ecológico',
      descricao:
        'A pista do Parque Ecológico e a Via Parque concentram a prática de corrida e pedal de quem mora no Tamboré e arredores.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Tamboré gira em torno dos condomínios — muitos com academia, piscina e quadras — e da estrutura ao ar livre do Parque Ecológico. Com o polo empresarial ao lado, cresce também a busca por bem-estar corporativo, do treino na hora do almoço às parcerias de academia para funcionários.',
  academias:
    'Além das academias dos próprios condomínios, a região conta com a NitroGym do Shopping Tamboré, a Bluefit da Av. Tucunaré e estúdios e centros de treino no Centro Empresarial Tamboré. A maior parte da demanda, porém, é atendida por personais que treinam o aluno dentro do condomínio.',
  academiasProximas: [
    { nome: 'NitroGym Tamboré', detalhe: 'no Shopping Tamboré, na Av. Piracema: cerca de 3 mil m² com musculação, avaliação física e sauna' },
    { nome: 'Bluefit Tamboré', detalhe: 'unidade da rede na Av. Tucunaré' },
    { nome: 'Estúdios do Centro Empresarial Tamboré', detalhe: 'opções de treino junto ao polo corporativo' },
    { nome: 'Bodytech Iguatemi Alphaville', detalhe: 'academia premium no shopping vizinho, a poucos minutos' },
  ],
  academiasVerificadasEm: '2026-10-08',

  destaquesFitness: [
    'Endereços de altíssimo padrão com forte procura por personal em condomínio.',
    'Lago de Tamboré e Parque Ecológico com pista para corrida, caminhada e ciclismo.',
    'Polo empresarial que impulsiona programas de wellness corporativo.',
    'Reserva Biológica de Mata Atlântica como diferencial ambiental da região.',
  ],

  precos: {
    avulsaMin: 100,
    avulsaMax: 250,
    mensalMin: 500,
    mensalMax: 1450,
    onlineMin: 210,
    onlineMax: 540,
  },

  conclusao:
    'Em Tamboré, o personal trainer ideal é aquele que se encaixa na rotina de quem mora em condomínio de alto padrão ou trabalha no polo empresarial: atendimento exclusivo, agenda flexível e foco em resultado. Com a estrutura dos próprios condomínios e o Parque Ecológico ao lado, treinar com método e acompanhamento é mais uma questão de decisão do que de oportunidade. A região está dentro da área de atendimento presencial do Montinho Personal, o profissional destacado pelo portal, com base na vizinha Alphaville.',

  /*
   * Prints de 30/09: autocompletar "tamboré alphaville" e "tamboré barueri" (a pessoa não sabe em que cidade fica); PAA com preço por mês, taxa de personal e "um personal pode me ajudar a emagrecer?".
   * Pesquisa de palavras-chave de 08/10 (PAA, ChatGPT e Gemini): "2x por
   * semana" no PAA; "online", "emagrecimento" e "treino em casa" nos
   * prompts das duas IAs.
   * Registro completo em docs/intencoes-locais.md.
   */
  metaFoco: 'preco',
  faqsBusca: { precoMensal: true, duasVezes: true, taxaPersonal: 'condominio', onlineOuPresencial: true },

  faqsExtra: [
    {
      pergunta: 'O Tamboré fica em Barueri ou em Santana de Parnaíba?',
      resposta:
        'Nos dois. O Tamboré é uma região — considerada uma extensão de Alphaville — distribuída entre Barueri e Santana de Parnaíba, com residenciais, o Centro Empresarial Tamboré e áreas comerciais. Por isso o mesmo endereço aparece ora como Barueri, ora como Santana de Parnaíba. Para o treino com personal, a divisão não muda nada: a região inteira fica dentro da área de atendimento presencial a partir de Alphaville.',
    },
    {
      pergunta: 'Um personal trainer pode ajudar a emagrecer?',
      resposta:
        'Pode, pelo lado que é dele: o treino. O personal monta a musculação que preserva a massa muscular durante o déficit — é ela que evita que o emagrecimento leve músculo junto —, ajusta a progressão e segura a constância nas semanas em que a vontade some. A alimentação, que decide o déficit, é trabalho de nutricionista. E desconfie de quem promete um número de quilos por mês: o ritmo depende do corpo, da rotina e da dieta, não só do treino. O Montinho Personal, destacado pelo portal e com atendimento presencial no Tamboré, tem o emagrecimento como especialidade — perdeu mais de 40 kg na própria trajetória.',
    },
    {
      pergunta: 'O atendimento de personal no Tamboré acontece dentro dos residenciais?',
      resposta:
        'Sim — nos residenciais Tamboré numerados, no Resort Tamboré, no Burle Marx e no Gênesis, o formato mais procurado é o personal que atende na academia do condomínio, na área de lazer ou dentro de casa. Como Tamboré fica colado em Alphaville, o deslocamento do profissional entre os dois núcleos leva poucos minutos, o que facilita encaixar horários antes ou depois do expediente.',
    },
    {
      pergunta: 'Quais objetivos são mais comuns entre quem contrata personal no Tamboré?',
      resposta:
        'O perfil executivo e familiar da região concentra a procura em emagrecimento, recomposição corporal, condicionamento físico para rotinas de trabalho intensas e correção de dores e postura de quem passa o dia sentado. Programas de bem-estar corporativo, ligados ao polo empresarial, também movimentam a demanda por treino orientado.',
    },
    {
      pergunta: 'Dá para treinar com personal no Tamboré tendo dor nas costas ou no joelho?',
      resposta:
        'Dá — desde que o treino seja adaptado e progressivo. O Montinho Personal, destacado pelo portal na região, tem formação complementar voltada ao treino de pessoas com dores e limitações musculoesqueléticas e conhece essas barreiras também pela própria vivência na musculação. O acompanhamento prioriza execução segura e evolução gradual, sem promessa de cura: quadros clínicos pedem também avaliação de médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['alphaville-sp', 'santana-de-parnaiba-sp', 'barueri-sp', 'osasco-sp'],

  fontes: [
    { nome: 'Prefeitura de Santana de Parnaíba', url: 'https://www.santanadeparnaiba.sp.gov.br/' },
    { nome: 'Prefeitura de Barueri', url: 'https://www.barueri.sp.gov.br/' },
    { nome: 'IBGE Cidades — Santana de Parnaíba', url: 'https://cidades.ibge.gov.br/brasil/sp/santana-de-parnaiba/panorama' },
  ],
  capaArte: {
    src: '/capas-cidade/tambore-sp.webp',
    w: 1200,
    h: 686,
    alt:
      'Montinho Personal, personal trainer, de braços cruzados no Tamboré (SP), com os edifícios e as áreas verdes da região ao fundo — Personal por Perto',
    legenda:
      'Treino personalizado no Tamboré com o Montinho Personal: acompanhamento próximo, exclusivo e feito para o seu objetivo.',
  },
  atualizadoEm: '2026-10-08',
};
