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
