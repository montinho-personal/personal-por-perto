/**
 * Registro central das ferramentas interativas do portal.
 *
 * É a fonte única: o hub /ferramentas/, o bloco do rodapé e o schema
 * ItemList são todos montados a partir daqui. Para publicar uma ferramenta
 * nova, acrescente a entrada (e a página). Itens com `disponivel: false`
 * aparecem no hub como "em breve", sem link — nunca como link quebrado.
 */
export interface Ferramenta {
  slug: string;
  nome: string;
  /** Nome curto para o rodapé e listas compactas. */
  nomeCurto: string;
  chamada: string;
  descricao: string;
  /** Selo curto exibido no card (ex.: "1 minuto"). */
  selo?: string;
  /** A pergunta central que a ferramenta responde — vira subtítulo no hub. */
  perguntaCentral?: string;
  /** Para quem ela é (uma frase, sem jargão). */
  paraQuem?: string;
  /** O que a pessoa leva ao terminar. Alimenta a lista do card expandido. */
  entrega?: string[];
  /** O que ela NÃO faz — transparência antes do clique. */
  naoFaz?: string;
  disponivel: boolean;
}

export const ferramentas: Ferramenta[] = [
  {
    slug: 'encontre-seu-personal-ideal',
    nome: 'Encontre seu Personal Ideal',
    nomeCurto: 'Diagnóstico Personal Ideal',
    chamada: 'Que tipo de acompanhamento combina com a sua rotina?',
    descricao:
      'Nove perguntas rápidas cruzam objetivo, experiência, disponibilidade e o seu maior obstáculo para indicar o formato de acompanhamento que faz mais sentido — presencial, online ou híbrido — e o que procurar no profissional.',
    selo: 'Cerca de 1 minuto',
    perguntaCentral: 'Preciso de personal presencial, online ou híbrido?',
    paraQuem:
      'Para quem está decidindo se contrata um personal e, principalmente, em que formato — antes de gastar dinheiro no modelo errado.',
    entrega: [
      'O formato de acompanhamento indicado para o seu caso, com a explicação de quais respostas mais pesaram',
      'Um comparador de presencial, online e híbrido calculado a partir das suas respostas',
      'Plano com os seus próximos três passos e a estrutura de treino provável para a sua rotina',
      'Checklist de perguntas para levar à conversa com qualquer profissional, mais os sinais de atenção',
    ],
    naoFaz:
      'Não prescreve treino, não faz avaliação física e não substitui a orientação de médico ou fisioterapeuta.',
    disponivel: true,
  },
  {
    slug: 'treino-para-minha-rotina',
    nome: 'Treino para Minha Rotina',
    nomeCurto: 'Treino para minha rotina',
    chamada: 'Como organizar o treino dentro da semana que você realmente tem?',
    descricao:
      'Sete perguntas sobre objetivo, dias reais, tempo por sessão, local e previsibilidade da sua semana devolvem uma estrutura de treino executável — com semana mínima viável para quando o mês aperta.',
    selo: 'Cerca de 1 minuto',
    perguntaCentral: 'Como devo dividir meu treino com os dias que tenho?',
    paraQuem:
      'Para quem já decidiu treinar e trava na organização: quantos dias, como dividir, o que fazer quando a semana não fecha.',
    entrega: [
      'A estrutura de treino que combina com os seus dias e o seu tempo, com a explicação de por que ela e não outra',
      'Sua semana ideal e, principalmente, sua semana mínima viável — a que evita recomeçar do zero',
      'Versão reduzida da sessão para os dias corridos, além do que priorizar e do que evitar',
      'Uma estrutura alternativa, porque fingir que existe uma única resposta correta seria desonesto',
    ],
    naoFaz:
      'Não monta ficha de exercícios, não define séries, repetições ou cargas e não substitui avaliação individual.',
    disponivel: true,
  },
  {
    slug: 'meu-treino-faz-sentido',
    nome: 'Meu treino faz sentido?',
    nomeCurto: 'Analisar meu treino',
    chamada: 'O treino que você já faz está organizado de forma coerente?',
    descricao:
      'Monte a sua semana de treino e receba uma auditoria da estrutura: exposição por grupo muscular, alinhamento com a sua prioridade, progressão e se o programa cabe na rotina que você tem.',
    selo: 'Cerca de 2 minutos',
    perguntaCentral: 'Meu treino está bem montado?',
    paraQuem:
      'Para quem já treina e desconfia que algo na organização do programa está travando o resultado — mas não sabe o quê.',
    entrega: [
      'A exposição declarada de cada grupo muscular na sua semana, comparada com a prioridade que você elegeu',
      'No máximo três pontos para revisar, cada um com o que significa, por que importa e o que conferir',
      'A indicação de quão confiável é cada apontamento — e uma seção fixa com o que a análise não consegue avaliar',
      'O próximo passo escolhido pelo problema principal, seja remontar a semana ou buscar acompanhamento',
    ],
    naoFaz:
      'Não diz que um treino está certo ou errado, não trata nenhuma divisão como superior, não calcula volume por grupo e não avalia dor, lesão ou execução.',
    disponivel: true,
  },
  {
    slug: 'diagnostico-da-constancia',
    nome: 'Diagnóstico da Constância',
    nomeCurto: 'Diagnóstico da constância',
    chamada: 'Por que você começa e para?',
    descricao:
      'Compara o treino que você planeja com a semana que realmente acontece e aponta o gargalo que mais pesa na sua constância — frequência, deslocamento, ausência de plano B ou carga de decisão.',
    selo: 'Cerca de 1 minuto',
    perguntaCentral: 'Por que não consigo manter uma rotina de treino?',
    paraQuem:
      'Para quem já tentou várias vezes, culpa a própria disciplina e desconfia que o problema pode ser outro.',
    entrega: [
      'O gargalo principal com nome e explicação, citando os números que você declarou',
      'Sua semana-alvo e sua semana mínima viável, com duração para cada uma',
      'Uma única mudança para fazer nesta semana — não quinze dicas',
      'O próximo passo escolhido pelo gargalo: remontar a rotina, reduzir distância ou buscar acompanhamento',
    ],
    naoFaz:
      'Não avalia personalidade nem faz diagnóstico psicológico, não culpa a sua disciplina e não inventa gargalo quando não encontra sinal claro.',
    disponivel: true,
  },
  {
    slug: 'presencial-ou-online',
    nome: 'Presencial ou online?',
    nomeCurto: 'Presencial ou online',
    chamada: 'Qual formato de acompanhamento combina com o seu momento?',
    descricao:
      'Cruza experiência, autonomia, necessidade de supervisão, aceitação de correção por vídeo e logística para indicar se personal presencial, acompanhamento online ou modelo híbrido faz mais sentido — e explica o trade-off quando os fatores apontam para lados diferentes.',
    selo: 'Cerca de 1 minuto',
    perguntaCentral: 'Personal presencial ou online: qual combina comigo?',
    paraQuem:
      'Para quem está decidindo entre pagar por presença durante o treino ou por planejamento e acompanhamento a distância.',
    entrega: [
      'O formato que melhor encaixa no seu momento, com quatro respostas possíveis — inclusive "os dois funcionam"',
      'O seu gargalo real nomeado: supervisão, planejamento, flexibilidade ou constância',
      'O trade-off explicado quando a sua necessidade e a sua rotina apontam para lados opostos',
      'Um comparador dos dois formatos que não finge que planejamento pertence só a um deles',
    ],
    naoFaz:
      'Não diz que um formato é melhor que o outro, não trata online como versão barata do presencial, não deixa o preço decidir sozinho e não muda a recomendação por causa da região que atendemos.',
    disponivel: true,
  },
  {
    slug: 'personal-score',
    nome: 'Personal Score',
    nomeCurto: 'Avaliar meu acompanhamento',
    chamada: 'O acompanhamento que você paga está entregando o que deveria?',
    descricao:
      'Avalia a estrutura do serviço que você contratou — individualização, progressão, acompanhamento da evolução e clareza — comparando com o que o seu modelo se propõe a entregar, e não com um ideal genérico.',
    selo: 'Cerca de 2 minutos',
    perguntaCentral: 'Meu personal está me acompanhando bem?',
    paraQuem:
      'Para quem já paga por acompanhamento e tem a sensação de que algo não está redondo — mas não sabe se a expectativa é justa.',
    entrega: [
      'Uma leitura de cada aspecto do serviço, avaliando só o que faz parte do modelo que você contratou',
      'No máximo três pontos que valem conversa, cada um com o que você relatou e o que aquilo pode significar',
      'De três a cinco perguntas prontas para levar à próxima conversa — o entregável mais útil da ferramenta',
      'Uma seção fixa com o que a ferramenta honestamente não consegue avaliar',
    ],
    naoFaz:
      'Não diz que um profissional é bom ou ruim, não sugere troca, não avalia competência técnica nem a adequação dos exercícios ao seu corpo, e não guarda o nome de ninguém.',
    disponivel: true,
  },
  {
    slug: 'calculadora-preco-personal',
    nome: 'Calculadora de Preço do Personal',
    nomeCurto: 'Calculadora de preço',
    chamada: 'Quanto pode custar um acompanhamento na sua cidade?',
    descricao:
      'Escolha a cidade, o formato e a frequência de treino para ver a faixa de referência por sessão e por mês — com a conta aberta e a procedência do dado declarada.',
    selo: 'Resultado na hora',
    perguntaCentral: 'Quanto custa um personal trainer na minha cidade?',
    paraQuem:
      'Para quem quer chegar à negociação sabendo qual faixa é razoável na região — e entender por que o valor muda entre cidades e formatos.',
    entrega: [
      'Faixa de referência por sessão e por mês para a cidade escolhida',
      'A conta aberta: como as 4,33 semanas do mês e a frequência entram no cálculo',
      'Aviso explícito quando o número é extrapolado, em vez de vir direto do pacote',
      'A procedência do dado declarada — é referência editorial, não coleta de preços praticados',
    ],
    naoFaz:
      'Não é tabela de preços, não é orçamento e não afirma preço médio de mercado — nenhuma dessas coisas seria verdade.',
    disponivel: true,
  },
];

/** URL canônica (com barra final) de uma ferramenta. */
export const urlFerramenta = (slug: string) => `/ferramentas/${slug}/`;

/** Só as publicadas, na ordem do registro. */
export const ferramentasDisponiveis = ferramentas.filter((f) => f.disponivel);

/* ────────────────────────────────────────────────────────────────────── *
 * O CATÁLOGO — todas as ferramentas do portal, num lugar só
 *
 * O registro acima (`ferramentas`) é o das sete ferramentas da jornada,
 * e três testes e o rodapé dependem de ele conter só o que mora em
 * /ferramentas/. O catálogo é a camada de cima: junta essas sete com as
 * calculadoras de /calorias/ e é o que a Central de Ferramentas, a busca
 * do menu e o schema leem.
 *
 * Publicar uma calculadora nova de calorias = criar a página + uma entrada
 * em `CALORIAS` abaixo. O hub, a busca, o rodapé de /calorias/ e o schema
 * acompanham. Nada de editar três páginas à mão.
 *
 * A taxonomia é por NECESSIDADE, não por formato ("quiz", "calculadora"):
 * quem chega quer saber o que a ferramenta resolve, não como ela funciona.
 * Uma categoria só existe com duas ferramentas ou mais e uma necessidade
 * própria — categoria vazia para SEO não entra.
 * ────────────────────────────────────────────────────────────────────── */

export type CategoriaId = 'treino' | 'personal' | 'calorias';

export interface Categoria {
  id: CategoriaId;
  /** Nome curto, como aparece no filtro. */
  nome: string;
  /** Título da seção (H2). */
  titulo: string;
  /** Uma frase: para que serve o grupo. */
  descricao: string;
  /** Sub-hub, quando a categoria já tem página própria. */
  hub?: string;
  /** Quantas aparecem abertas no hub; o resto fica em "mais". */
  mostrarNoHub: number;
}

export const CATEGORIAS: Categoria[] = [
  {
    id: 'treino',
    nome: 'Treino',
    titulo: 'Organizar e avaliar o treino',
    descricao:
      'Para montar a semana que cabe na sua rotina, descobrir por que o treino não engata, conferir se o programa está bem distribuído e acertar carga e proteína.',
    mostrarNoHub: 6,
  },
  {
    id: 'personal',
    nome: 'Personal trainer',
    titulo: 'Escolher, pagar e avaliar um personal',
    descricao:
      'Para decidir se vale ter acompanhamento, em que formato, quanto ele costuma custar na sua cidade e se o que você já paga está entregando.',
    mostrarNoHub: 6,
  },
  {
    id: 'calorias',
    nome: 'Calorias',
    titulo: 'Calorias por atividade',
    descricao:
      'Estimativas de gasto energético por esporte e atividade física — cada uma com a conta aberta e a fonte de cada número citada.',
    hub: '/calorias/',
    mostrarNoHub: 6,
  },
];

export const categoria = (id: CategoriaId): Categoria => CATEGORIAS.find((c) => c.id === id)!;

export interface FerramentaCatalogo {
  slug: string;
  url: string;
  nome: string;
  nomeCurto: string;
  categoria: CategoriaId;
  /** Uma linha: o que a pessoa vai descobrir. É o texto do card. */
  resumo: string;
  /** A dúvida, como a pessoa a formula. */
  pergunta: string;
  /** Rótulo da ação no card: "Calcular preço", nunca "Ver mais". */
  acao: string;
  /** Quanto tempo leva: "≈ 1 min", "Resultado na hora". */
  tempo: string;
  /** Como as pessoas pedem esta ferramenta, para a busca por intenção. */
  aliases: string[];
  tags: string[];
  /** Slugs de ferramentas que fazem sentido depois desta. */
  relacionadas: string[];
  /** Id na jornada (só as sete do Mapa do Treino). */
  jornada?: string;
  /** Entra em "Comece por estas". Critério declarado na página. */
  destaque?: boolean;
  publicadoEm: string;
}

/** Metadados de catálogo das sete ferramentas da jornada. */
const JORNADA: Record<string, Omit<FerramentaCatalogo, 'slug' | 'url' | 'nome' | 'nomeCurto'>> = {
  'treino-para-minha-rotina': {
    categoria: 'treino',
    resumo: 'Descubra qual estrutura de treino cabe nos dias que você realmente tem — e a semana mínima para quando o mês aperta.',
    pergunta: 'Como devo dividir meu treino com os dias que tenho?',
    acao: 'Organizar meu treino',
    tempo: '≈ 1 min',
    aliases: [
      'montar minha rotina',
      'montar treino',
      'quantos dias treinar',
      'divisão de treino',
      'por onde começar',
      'quero começar a treinar',
      'estou perdido',
      'não sei o que fazer',
      'treino abc',
      'full body',
      'semana de treino',
      'falta tempo',
    ],
    tags: ['rotina', 'organizar', 'frequência', 'iniciante', 'planejamento'],
    relacionadas: ['meu-treino-faz-sentido', 'diagnostico-da-constancia'],
    jornada: 'rotina',
    destaque: true,
    publicadoEm: '2026-08-10',
  },
  'diagnostico-da-constancia': {
    categoria: 'treino',
    resumo: 'Encontre o gargalo que mais pesa na sua regularidade: frequência, deslocamento, falta de plano B ou carga de decisão.',
    pergunta: 'Por que não consigo manter uma rotina de treino?',
    acao: 'Fazer o diagnóstico',
    tempo: '≈ 1 min',
    aliases: [
      'não consigo manter academia',
      'começo e paro',
      'desisto da academia',
      'falta de constância',
      'falta de disciplina',
      'motivação para treinar',
      'não consigo manter a rotina',
      'largo o treino',
      'regularidade',
    ],
    tags: ['constância', 'aderência', 'hábito', 'regularidade'],
    relacionadas: ['treino-para-minha-rotina', 'presencial-ou-online'],
    jornada: 'constancia',
    publicadoEm: '2026-08-10',
  },
  'meu-treino-faz-sentido': {
    categoria: 'treino',
    resumo: 'Monte a sua semana e receba uma análise da estrutura: exposição por grupo muscular, prioridade, progressão e se cabe na rotina.',
    pergunta: 'Meu treino está bem montado?',
    acao: 'Analisar meu treino',
    tempo: '≈ 2 min',
    aliases: [
      'meu treino está errado',
      'meu treino está bom',
      'meu treino está mal montado',
      'analisar meu treino',
      'avaliar treino',
      'auditoria do treino',
      'volume de treino',
      'grupo muscular',
      'divisão está certa',
      'ficha de treino',
    ],
    tags: ['análise', 'estrutura', 'volume', 'progressão', 'desempenho'],
    relacionadas: ['treino-para-minha-rotina', 'encontre-seu-personal-ideal'],
    jornada: 'auditoria',
    publicadoEm: '2026-08-10',
  },
  'encontre-seu-personal-ideal': {
    categoria: 'personal',
    resumo: 'Nove perguntas cruzam objetivo, experiência e rotina para indicar o tipo de acompanhamento que faz sentido e o que procurar no profissional.',
    pergunta: 'Preciso de personal? Que tipo combina comigo?',
    acao: 'Descobrir meu personal ideal',
    tempo: '≈ 1 min',
    aliases: [
      'quero contratar um personal',
      'preciso de personal',
      'como escolher personal',
      'que personal contratar',
      'tipo de personal',
      'personal ideal',
      'teste personal',
    ],
    tags: ['escolher', 'contratar', 'acompanhamento', 'diagnóstico'],
    relacionadas: ['presencial-ou-online', 'calculadora-preco-personal'],
    jornada: 'personalIdeal',
    publicadoEm: '2026-07-20',
  },
  'presencial-ou-online': {
    categoria: 'personal',
    resumo: 'Compare pagar por presença durante o treino com pagar por planejamento a distância — e veja qual encaixa no seu momento.',
    pergunta: 'Personal presencial ou online: qual combina comigo?',
    acao: 'Descobrir meu formato',
    tempo: '≈ 1 min',
    aliases: [
      'personal online vale a pena',
      'personal online ou presencial',
      'consultoria online',
      'treino online funciona',
      'acompanhamento a distância',
      'contratar personal online',
      'híbrido',
    ],
    tags: ['formato', 'online', 'presencial', 'híbrido', 'decisão'],
    relacionadas: ['calculadora-preco-personal', 'encontre-seu-personal-ideal'],
    jornada: 'formato',
    publicadoEm: '2026-08-10',
  },
  'calculadora-preco-personal': {
    categoria: 'personal',
    resumo: 'Veja a faixa de referência por sessão e por mês na sua cidade, conforme o formato e a frequência — com a conta aberta.',
    pergunta: 'Quanto custa um personal trainer na minha cidade?',
    acao: 'Calcular preço',
    tempo: 'Resultado na hora',
    aliases: [
      'quanto custa um personal',
      'quanto cobra personal',
      'preço do personal',
      'valor do personal',
      'personal trainer preço',
      'quanto custa a hora do personal',
      'quanto custa por mês',
      'orçamento personal',
      'tabela de preço',
      'quanto pagar',
    ],
    tags: ['preço', 'custo', 'investimento', 'cidade', 'valor'],
    relacionadas: ['presencial-ou-online', 'encontre-seu-personal-ideal'],
    jornada: 'preco',
    destaque: true,
    publicadoEm: '2026-07-20',
  },
  'personal-score': {
    categoria: 'personal',
    resumo: 'Avalie o serviço que você já paga — individualização, progressão, acompanhamento e clareza — e saia com perguntas para a próxima conversa.',
    pergunta: 'Meu personal está me acompanhando bem?',
    acao: 'Avaliar meu acompanhamento',
    tempo: '≈ 2 min',
    aliases: [
      'meu personal é bom',
      'avaliar meu personal',
      'trocar de personal',
      'personal não me acompanha',
      'estou pagando e não vejo resultado',
      'acompanhamento ruim',
      'nota do personal',
    ],
    tags: ['avaliar', 'qualidade', 'acompanhamento', 'já tenho personal'],
    relacionadas: ['presencial-ou-online', 'meu-treino-faz-sentido'],
    jornada: 'score',
    publicadoEm: '2026-08-20',
  },
};

/** As calculadoras de calorias. Uma entrada por atividade, nome curto igual ao da atividade. */
const CALORIAS: Array<Omit<FerramentaCatalogo, 'categoria' | 'acao' | 'tempo'> & { acao?: string }> = [
  {
    slug: 'caminhada',
    url: '/calorias/caminhada/',
    nome: 'Calorias da caminhada',
    nomeCurto: 'Caminhada',
    resumo: 'Por tempo, distância, passos ou meta de calorias — com ritmo e inclinação.',
    pergunta: 'Quantas calorias a caminhada gasta?',
    aliases: ['caminhar', 'andar', 'passos', 'esteira', 'quantos passos', 'caminhada gasta'],
    tags: ['cardio', 'iniciante', 'passos'],
    relacionadas: ['corrida', 'escada'],
    destaque: true,
    publicadoEm: '2026-09-02',
  },
  {
    slug: 'corrida',
    url: '/calorias/corrida/',
    nome: 'Calorias da corrida',
    nomeCurto: 'Corrida',
    resumo: 'Por distância, tempo ou meta, com o seu pace — e a faixa, porque economia de corrida varia.',
    pergunta: 'Quantas calorias a corrida gasta?',
    aliases: ['correr', 'correndo', 'calorias correndo', 'km', '5 km', '10 km', 'maratona', 'trote', 'cooper'],
    tags: ['cardio', 'pace', 'distância'],
    relacionadas: ['calculadora-de-pace', 'caminhada'],
    publicadoEm: '2026-09-03',
  },
  {
    slug: 'bicicleta',
    url: '/calorias/bicicleta/',
    nome: 'Calorias da bicicleta',
    nomeCurto: 'Bicicleta',
    resumo: 'Na rua por velocidade, na ergométrica por watts — porque são escalas diferentes.',
    pergunta: 'Quantas calorias a bicicleta gasta?',
    aliases: ['pedalar', 'pedal', 'bike', 'ciclismo', 'spinning', 'ergométrica', 'watts'],
    tags: ['cardio', 'velocidade'],
    relacionadas: ['corrida', 'caminhada'],
    publicadoEm: '2026-09-05',
  },
  {
    slug: 'natacao',
    url: '/calorias/natacao/',
    nome: 'Calorias da natação',
    nomeCurto: 'Natação',
    resumo: 'Por estilo, distância ou tempo de piscina — descontando a borda, que é o erro da categoria.',
    pergunta: 'Quantas calorias a natação gasta?',
    aliases: ['nadar', 'nado', 'piscina', 'crawl', 'costas', 'peito', 'borboleta'],
    tags: ['piscina', 'estilo'],
    relacionadas: ['hidroginastica', 'corrida'],
    publicadoEm: '2026-09-06',
  },
  {
    slug: 'escada',
    url: '/calorias/escada/',
    nome: 'Calorias de subir escada',
    nomeCurto: 'Escada',
    resumo: 'Por andares, degraus ou máquina — a única conta do site que sai da física, e não de tabela.',
    pergunta: 'Quantas calorias subir escada gasta?',
    aliases: ['subir escada', 'degraus', 'andares', 'escada do prédio', 'stair', 'stepper'],
    tags: ['dia a dia', 'física'],
    relacionadas: ['caminhada', 'corrida'],
    publicadoEm: '2026-09-07',
  },
  {
    slug: 'corda',
    url: '/calorias/corda/',
    nome: 'Calorias de pular corda',
    nomeCurto: 'Pular corda',
    resumo: 'Por tempo, pulos ou séries — e a conta que desmonta a lenda dos 10 minutos.',
    pergunta: 'Quantas calorias pular corda gasta?',
    aliases: ['pular corda', 'corda', 'pulos', 'double under', 'jump rope'],
    tags: ['cardio', 'casa'],
    relacionadas: ['lutas', 'crossfit'],
    publicadoEm: '2026-09-08',
  },
  {
    slug: 'danca',
    url: '/calorias/danca/',
    nome: 'Calorias da dança',
    nomeCurto: 'Dança',
    resumo: 'Por estilo e por tempo de aula, com a fonte de cada número — inclusive o que ninguém mediu.',
    pergunta: 'Quantas calorias a dança gasta?',
    aliases: ['dançar', 'zumba', 'fit dance', 'dança de salão', 'forró', 'samba', 'ballet', 'aula de dança'],
    tags: ['aula', 'estilo'],
    relacionadas: ['yoga-e-pilates', 'hidroginastica'],
    publicadoEm: '2026-09-10',
  },
  {
    slug: 'yoga-e-pilates',
    url: '/calorias/yoga-e-pilates/',
    nome: 'Calorias de yoga e pilates',
    nomeCurto: 'Yoga e pilates',
    resumo: 'Por estilo — e o modo que compara o número do seu relógio com a medição de verdade.',
    pergunta: 'Quantas calorias yoga e pilates gastam?',
    aliases: ['yoga', 'ioga', 'pilates', 'hatha', 'vinyasa', 'alongamento', 'relógio erra'],
    tags: ['aula', 'baixo impacto'],
    relacionadas: ['danca', 'hidroginastica'],
    publicadoEm: '2026-09-12',
  },
  {
    slug: 'futebol',
    url: '/calorias/futebol/',
    nome: 'Calorias do futebol',
    nomeCurto: 'Futebol',
    resumo: 'Pelo tempo em campo, não pelo aluguel da quadra — na pelada, vagas ÷ gente presente.',
    pergunta: 'Quantas calorias gasta jogar futebol?',
    aliases: ['jogar bola', 'pelada', 'futsal', 'society', 'futebol de campo', 'jogar futebol'],
    tags: ['esporte', 'coletivo', 'campo'],
    relacionadas: ['basquete', 'volei'],
    destaque: true,
    publicadoEm: '2026-09-14',
  },
  {
    slug: 'lutas',
    url: '/calorias/lutas/',
    nome: 'Calorias de boxe e lutas',
    nomeCurto: 'Boxe e lutas',
    resumo: 'Por round, como quem treina conta — saco, sparring, luta e artes marciais, cada número com código.',
    pergunta: 'Quantas calorias gasta boxe, muay thai e jiu-jitsu?',
    aliases: ['boxe', 'muay thai', 'jiu-jitsu', 'jiu jitsu', 'luta', 'artes marciais', 'mma', 'saco de pancada', 'sparring', 'kickboxing', 'karatê', 'judô'],
    tags: ['esporte', 'round', 'luta'],
    relacionadas: ['corda', 'crossfit'],
    publicadoEm: '2026-09-18',
  },
  {
    slug: 'hidroginastica',
    url: '/calorias/hidroginastica/',
    nome: 'Calorias da hidroginástica',
    nomeCurto: 'Hidroginástica',
    resumo: 'Por aula, semana ou meta — com a aula medida em estudo, que gasta menos que a tabela.',
    pergunta: 'Quantas calorias gasta uma aula de hidroginástica?',
    aliases: ['hidro', 'hidroginástica', 'aula na piscina', 'ginástica na água'],
    tags: ['aula', 'piscina', 'baixo impacto'],
    relacionadas: ['natacao', 'yoga-e-pilates'],
    publicadoEm: '2026-09-19',
  },
  {
    slug: 'tenis',
    url: '/calorias/tenis/',
    nome: 'Calorias do tênis',
    nomeCurto: 'Tênis',
    resumo: 'Simples, geral ou duplas — contando a pausa entre pontos, que a medição mostra que já está na tabela.',
    pergunta: 'Quantas calorias gasta jogar tênis?',
    aliases: ['jogar tênis', 'tenis', 'raquete', 'duplas', 'simples', 'padel'],
    tags: ['esporte', 'raquete'],
    relacionadas: ['volei', 'basquete'],
    publicadoEm: '2026-09-20',
  },
  {
    slug: 'volei',
    url: '/calorias/volei/',
    nome: 'Calorias do vôlei',
    nomeCurto: 'Vôlei',
    resumo: 'Quadra ou areia, lazer ou competição — quatro linhas do Compêndio, com o código de cada uma.',
    pergunta: 'Quantas calorias gasta jogar vôlei?',
    aliases: ['jogar vôlei', 'volei', 'voleibol', 'vôlei de praia', 'areia', 'quadra'],
    tags: ['esporte', 'coletivo', 'praia'],
    relacionadas: ['basquete', 'futebol'],
    publicadoEm: '2026-09-21',
  },
  {
    slug: 'crossfit',
    url: '/calorias/crossfit/',
    nome: 'Calorias do crossfit',
    nomeCurto: 'Crossfit',
    resumo: 'Pelo WOD, não pela aula inteira — com um WOD medido como régua e o aviso de quando o oxigênio não vê tudo.',
    pergunta: 'Quantas calorias gasta uma aula de crossfit?',
    aliases: ['crossfit', 'cross fit', 'wod', 'box', 'aula de crossfit', 'cross training', 'funcional'],
    tags: ['aula', 'alta intensidade'],
    relacionadas: ['hyrox', 'corda'],
    publicadoEm: '2026-09-23',
  },
  {
    slug: 'hyrox',
    url: '/calorias/hyrox/',
    nome: 'Calorias do Hyrox',
    nomeCurto: 'Hyrox',
    resumo: 'Pelo tempo final e pelo pace: 8 km de corrida e 8 estações, cada parte com a sua fonte.',
    pergunta: 'Quantas calorias gasta uma prova de Hyrox?',
    aliases: ['hyrox', 'prova de hyrox', 'skierg', 'sled', 'wall ball', 'corrida e estações'],
    tags: ['prova', 'alta intensidade'],
    relacionadas: ['crossfit', 'corrida'],
    publicadoEm: '2026-09-23',
  },
  {
    slug: 'basquete',
    url: '/calorias/basquete/',
    nome: 'Calorias do basquete',
    nomeCurto: 'Basquete',
    resumo: 'Jogo, treino ou arremesso pela tabela — e o jogo competitivo pela medição feita em quadra.',
    pergunta: 'Quantas calorias gasta jogar basquete?',
    aliases: ['jogar basquete', 'basquete', 'basquetebol', 'arremesso', 'cesta', '3x3'],
    tags: ['esporte', 'coletivo', 'quadra'],
    relacionadas: ['volei', 'futebol'],
    publicadoEm: '2026-09-23',
  },
  {
    slug: 'ping-pong',
    url: '/calorias/ping-pong/',
    nome: 'Calorias do ping pong',
    nomeCurto: 'Ping pong',
    resumo: 'Jogo pela tabela, treino parado ou com deslocamento pela medição — porque no ping pong quem decide são as pernas.',
    pergunta: 'Quantas calorias gasta jogar ping pong?',
    aliases: ['ping pong', 'pingue-pongue', 'tênis de mesa', 'tenis de mesa', 'mesa de ping pong', 'jogar ping pong'],
    tags: ['esporte', 'raquete', 'baixo impacto'],
    relacionadas: ['tenis', 'caminhada'],
    publicadoEm: '2026-09-24',
  },
  {
    slug: 'gasto-calorico-diario',
    url: '/calorias/gasto-calorico-diario/',
    nome: 'Gasto calórico diário',
    nomeCurto: 'Gasto do dia',
    resumo: 'Metabolismo de repouso mais estilo de vida: quanto você gasta num dia inteiro, em faixa e com as fontes.',
    pergunta: 'Quantas calorias eu gasto por dia?',
    aliases: [
      'gasto calórico diário',
      'gasto calorico',
      'quantas calorias gasto por dia',
      'taxa metabólica basal',
      'tmb',
      'metabolismo basal',
      'gasto energético total',
      'calorias por dia',
      'calculadora de gasto calórico',
      'gasto calórico basal',
      'gasto calórico diário homem',
      'gasto calórico diário mulher',
      'gasto calórico médio',
      'quantas calorias uma pessoa sedentária gasta',
    ],
    tags: ['metabolismo', 'dia inteiro', 'emagrecimento'],
    relacionadas: ['caminhada', 'musculacao'],
    publicadoEm: '2026-09-24',
  },
  {
    // Mora dentro do artigo que já respondia a pergunta — uma URL nova em
    // /calorias/ disputaria a mesma busca com ele.
    slug: 'musculacao',
    url: '/emagrecimento/quantas-calorias-queima-a-musculacao/',
    nome: 'Calorias da musculação',
    nomeCurto: 'Musculação',
    resumo: 'Por tipo de treino, com o EPOC no tamanho certo e o gasto do músculo ganho em repouso.',
    pergunta: 'Quantas calorias a musculação queima?',
    aliases: ['musculação', 'academia', 'treino de força', 'levantar peso', 'epoc', 'musculação queima'],
    tags: ['academia', 'força'],
    relacionadas: ['corrida', 'caminhada'],
    destaque: true,
    publicadoEm: '2026-08-28',
  },
];

/**
 * Ferramentas de treino fora da jornada do Mapa do Treino. A primeira é a de
 * 1RM (25/09/2026): o mapa de ferramentas nos artigos mostrou que os 107
 * artigos de musculação não tinham nenhuma calculadora que conversasse com
 * eles. Os aliases são as formas como a pergunta chega na busca.
 */
const TREINO: FerramentaCatalogo[] = [
  {
    slug: 'calculadora-1rm',
    url: '/ferramentas/calculadora-1rm/',
    nome: 'Calculadora de 1RM',
    nomeCurto: 'Calculadora de 1RM',
    categoria: 'treino',
    resumo: 'Estime a sua carga máxima pela série que você já faz e veja o peso para 5, 8, 10 ou 12 repetições — com a faixa de sete fórmulas.',
    pergunta: 'Qual é a minha carga máxima, e que peso usar em cada série?',
    acao: 'Calcular meu 1RM',
    tempo: 'Resultado na hora',
    aliases: [
      '1rm',
      '1 rm',
      'calculadora 1rm',
      'calcular 1rm',
      'repetição máxima',
      'uma repetição máxima',
      'carga máxima',
      'teste de carga máxima',
      'teste de 1rm',
      'rm',
      '10rm',
      'porcentagem do 1rm',
      'tabela de porcentagem',
      'quanto peso usar',
      'que carga usar',
      'peso para hipertrofia',
      'carga para hipertrofia',
      'fórmula de brzycki',
      'fórmula de epley',
      'repetições na reserva',
      'rir',
      'rpe',
      '1rm supino',
      '1rm agachamento',
      '1rm terra',
      '1rm leg press',
    ],
    tags: ['força', 'carga', 'musculação', 'progressão'],
    relacionadas: ['descanso-entre-series', 'meu-treino-faz-sentido'],
    publicadoEm: '2026-09-25',
  },
  {
    // Nasceu do mesmo mapa: 28 artigos falam de proteína — 8 no cluster de
    // Mounjaro — e nenhum dizia quanto.
    slug: 'calculadora-de-proteina',
    url: '/ferramentas/calculadora-de-proteina/',
    nome: 'Calculadora de proteína',
    nomeCurto: 'Calculadora de proteína',
    categoria: 'treino',
    resumo: 'Quantos gramas por dia para ganhar músculo, emagrecer, usando Mounjaro ou depois dos 65 — a faixa de cada diretriz, com a fonte e por refeição.',
    pergunta: 'Quanto de proteína eu preciso comer por dia?',
    acao: 'Calcular minha proteína',
    tempo: 'Resultado na hora',
    aliases: [
      'proteína',
      'proteina',
      'calculadora de proteína',
      'quanto de proteína por dia',
      'quantas gramas de proteína',
      'gramas de proteína por kg',
      'proteína por kg',
      'proteína para hipertrofia',
      'proteína para ganhar massa',
      'proteína para emagrecer',
      'proteína na definição',
      'proteína cutting',
      'proteína mounjaro',
      'proteína ozempic',
      'proteína glp-1',
      'proteína idoso',
      'proteína hormônio',
      'proteína anabolizante',
      'proteína por refeição',
      'excesso de proteína',
    ],
    tags: ['nutrição', 'massa muscular', 'emagrecimento', 'mounjaro'],
    relacionadas: ['calculadora-de-whey', 'gasto-calorico-diario', 'calculadora-1rm'],
    publicadoEm: '2026-09-25',
  },
  {
    // Prints do Google de 01/10/2026: "calculadora de whey" tem duas
    // perguntas por trás — quanto tomar (por peso, por dia, scoops) e se o
    // pote vale o preço (custo-benefício, "whey bom"). A de proteína fica
    // dona de "quantos gramas de proteína"; esta, de tudo que é "whey".
    slug: 'calculadora-de-whey',
    url: '/ferramentas/calculadora-de-whey/',
    nome: 'Calculadora de whey',
    nomeCurto: 'Calculadora de whey',
    categoria: 'treino',
    resumo: 'Quantas doses de whey por dia faltam para a sua meta de proteína, e quanto custa cada grama de proteína do pote — para saber se vale o preço.',
    pergunta: 'Quanto de whey eu devo tomar por dia?',
    acao: 'Calcular minhas doses de whey',
    tempo: 'Resultado na hora',
    aliases: [
      'whey',
      'whey protein',
      'calculadora de whey',
      'calculadora de whey protein',
      'quanto whey tomar',
      'quanto whey por dia',
      'quanto de whey tomar por dia',
      'whey quanto tomar',
      'quantos scoops de whey',
      'scoop',
      'dose de whey',
      '1 dose de whey quantas gramas',
      'quantas gramas de whey por kg',
      'whey por peso',
      'whey para emagrecer',
      'whey para ganhar massa',
      'whey mounjaro',
      'whey custo benefício',
      'whey bom',
      'whey vale a pena',
      'preço por grama de proteína',
      'concentração de proteína',
      'whey engorda',
      'quantas vezes tomar whey',
      'como medir 30 g de whey',
    ],
    tags: ['nutrição', 'suplemento', 'massa muscular', 'custo'],
    relacionadas: ['calculadora-de-proteina', 'gasto-calorico-diario'],
    publicadoEm: '2026-10-01',
  },
  {
    // Mora dentro do artigo que já respondia a pergunta (05/10/2026): uma URL
    // em /ferramentas/ disputaria "quanto tempo descansar entre séries" com
    // ele. Decisão e crítica ao briefing em docs/calculadora-descanso.md.
    slug: 'descanso-entre-series',
    url: '/musculacao/descanso-entre-series/',
    nome: 'Calculadora de descanso entre séries',
    nomeCurto: 'Descanso entre séries',
    categoria: 'treino',
    resumo: 'Uma faixa de descanso pelo exercício, repetições e esforço — e um timer que ajusta o tempo pela série seguinte.',
    pergunta: 'Quanto tempo devo descansar entre uma série e outra?',
    acao: 'Calcular meu descanso',
    tempo: 'Resultado na hora',
    aliases: [
      'descanso entre séries',
      'quanto descansar entre séries',
      'quanto tempo descansar entre séries',
      'tempo de descanso',
      'intervalo entre séries',
      'intervalo de descanso',
      'descanso musculação',
      'tempo entre séries',
      'descanso para hipertrofia',
      'descanso para força',
      'quanto descansar no supino',
      'quanto descansar no agachamento',
      'descanso entre exercícios',
      'timer academia',
      'cronômetro academia',
      'cronômetro musculação',
      'timer de descanso',
      '1 minuto de descanso',
      '2 minutos de descanso',
      '3 minutos de descanso',
      '30 segundos de descanso',
      'descanso ideal entre séries',
      'descanso entre séries para emagrecer',
      'descanso entre séries de flexão',
      'descanso entre séries de abdominal',
      'descanso entre séries para ganhar massa',
    ],
    tags: ['musculação', 'treino', 'hipertrofia', 'força', 'timer'],
    relacionadas: ['calculadora-1rm', 'meu-treino-faz-sentido'],
    publicadoEm: '2026-10-05',
  },
  {
    slug: 'calculadora-de-pace',
    url: '/ferramentas/calculadora-de-pace/',
    nome: 'Calculadora de pace',
    nomeCurto: 'Calculadora de pace',
    categoria: 'treino',
    resumo: 'Pace, tempo de prova, distância e velocidade da esteira — com o ritmo para a sua meta e as parciais por quilômetro.',
    pergunta: 'Em que ritmo eu corro, e que pace preciso para a minha meta?',
    acao: 'Calcular meu pace',
    tempo: 'Resultado na hora',
    aliases: [
      'pace',
      'calculadora de pace',
      'calcular pace',
      'ritmo de corrida',
      'ritmo por km',
      'minutos por km',
      'min/km',
      'pace por km',
      'pace para km/h',
      'converter pace',
      'km/h para pace',
      'velocidade da esteira',
      'pace na esteira',
      'tabela de pace',
      'tempo de prova',
      'pace 5 km',
      'pace 10 km',
      'pace meia maratona',
      'pace maratona',
      '10 km em 1 hora',
      '5 km em 30 minutos',
      'parciais',
      'tempo de 400 metros',
      'negative split',
      'pace por milha',
      'calculadora de pace corrida',
      'calculadora de pace online',
      'pace e distância',
      'pace natação',
      'pace por 100 metros',
      'pace bike',
      'pace strava',
      'tempo run',
      'pace esteira x rua',
      'quanto tempo é 1 km na esteira',
      'tabela pace km/h',
      'pace 5 km iniciante',
      'pace ideal 5 km',
      'pace ideal 10 km',
      'pace meia maratona sub 2',
      'pace meia maratona 1h30',
      'pace de 7',
    ],
    tags: ['corrida', 'pace', 'esteira', 'prova'],
    relacionadas: ['corrida', 'caminhada'],
    publicadoEm: '2026-10-06',
  },
];

/** O catálogo inteiro: as sete da jornada, as de treino e, depois, as calculadoras de calorias. */
export const catalogo: FerramentaCatalogo[] = [
  ...ferramentasDisponiveis.map((f) => ({
    slug: f.slug,
    url: urlFerramenta(f.slug),
    nome: f.nome,
    nomeCurto: f.nomeCurto,
    ...JORNADA[f.slug],
  })),
  ...TREINO,
  ...CALORIAS.map((c) => ({
    categoria: 'calorias' as const,
    acao: 'Calcular calorias',
    tempo: 'Resultado na hora',
    ...c,
  })),
];

export const ferramentaDoCatalogo = (slug: string): FerramentaCatalogo | undefined =>
  catalogo.find((f) => f.slug === slug);

export const porCategoria = (id: CategoriaId): FerramentaCatalogo[] =>
  catalogo.filter((f) => f.categoria === id);

/** As de "Comece por estas", na ordem do catálogo. */
export const destaques = (): FerramentaCatalogo[] => catalogo.filter((f) => f.destaque);

/**
 * As que ganham o selo "Novo": publicadas há menos de 30 dias E entre as
 * três mais recentes. Só a janela de 30 dias marcaria 14 dos 17 cards de
 * calorias — o cluster inteiro é de setembro — e selo em tudo é selo em nada.
 */
export const NOVAS_MAXIMO = 3;
export const novas = (hoje: string): FerramentaCatalogo[] => {
  const limite = new Date(hoje).getTime();
  return catalogo
    .filter((f) => {
      const ms = limite - new Date(f.publicadoEm).getTime();
      return Number.isFinite(ms) && ms >= 0 && ms < 30 * 86_400_000;
    })
    .sort((a, b) => b.publicadoEm.localeCompare(a.publicadoEm))
    .slice(0, NOVAS_MAXIMO);
};
export const ehNova = (f: FerramentaCatalogo, hoje: string): boolean => novas(hoje).some((n) => n.slug === f.slug);
