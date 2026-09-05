/**
 * Textos do motor de próximo passo.
 *
 * Módulo de DADOS: sem lógica de decisão e sem import de motor. É daqui que
 * o script de cliente lê — a regra de bundle do projeto existe porque um
 * import de motor arrasta as 982 cidades para dentro do JS de cada página.
 *
 * DUAS DECISÕES QUE VALEM REGISTRO
 *
 * 1. O texto é MONTADO DE MODELO APROVADO + VARIÁVEIS, nunca gerado na hora.
 *    Cada frase abaixo foi escrita e revisada uma vez; o motor só escolhe
 *    qual usar e preenche os buracos com o que a pessoa declarou. Isso é o
 *    que permite garantir que nenhum resultado produza uma frase que ninguém
 *    leu antes de publicar.
 *
 * 2. Variável ausente não vira buraco no texto. Cada modelo tem uma versão
 *    curta, usada quando falta a variável — em vez de "você treina {{dias}}
 *    vezes por semana" virar uma frase quebrada. Escrever as duas versões dá
 *    trabalho e é o preço de nunca mostrar template cru para quem lê.
 */

/** Variáveis que os modelos podem citar. Todas opcionais, todas não sensíveis. */
export interface VariaveisTexto {
  /** Dias por semana que a pessoa sustenta de fato. */
  dias?: number;
  /** Estrutura sugerida ("Full Body", "ABC"). */
  divisao?: string;
  /** Rótulo do gargalo, em linguagem de gente. */
  gargalo?: string;
  /** Formato de acompanhamento mais compatível. */
  formato?: string;
  /** Cidade, quando herdada de página local. */
  cidade?: string;
  /** Faixa mensal já formatada. */
  faixa?: string;
  /** Score do acompanhamento atual (0–100). */
  score?: number;
  /** Nome da ferramenta de destino. */
  ferramenta?: string;
}

export interface ModeloTexto {
  /** Versão completa; usa as variáveis listadas em `exige`. */
  completo: string;
  /** Versão sem variável nenhuma, para quando falta dado. */
  curto: string;
  /** Variáveis obrigatórias para a versão completa valer. */
  exige: (keyof VariaveisTexto)[];
}

const m = (
  completo: string,
  curto: string,
  exige: (keyof VariaveisTexto)[] = [],
): ModeloTexto => ({ completo, curto, exige });

/**
 * Preenche um modelo. Cai para a versão curta quando falta qualquer variável
 * exigida — nunca renderiza `{{buraco}}`.
 */
export function preencher(modelo: ModeloTexto, v: VariaveisTexto): string {
  const completo = modelo.exige.every((k) => {
    const x = v[k];
    return x !== undefined && x !== null && x !== '';
  });
  const base = completo ? modelo.completo : modelo.curto;
  return base.replace(/\{\{(\w+)\}\}/g, (_, k: string) => String(v[k as keyof VariaveisTexto] ?? ''));
}

/* ------------------------------------------------------------------ *
 * Rótulos dos eixos — o vocabulário comum entre as sete ferramentas
 * ------------------------------------------------------------------ */

export const EIXO_ROTULO = {
  aderencia: 'manter a sequência',
  agenda: 'fazer o treino caber na semana',
  estrutura: 'a montagem do treino',
  progressao: 'a evolução ao longo das semanas',
  supervisao: 'ter alguém acompanhando',
  orcamento: 'o quanto isso custa',
  nenhum: '',
} as const;

/* ------------------------------------------------------------------ *
 * Modelos por regra
 *
 * A chave é o id da regra do motor. Uma regra sem modelo aqui não compila
 * — é de propósito: regra nova obriga texto escrito à mão.
 * ------------------------------------------------------------------ */

export interface BlocoTexto {
  titulo: ModeloTexto;
  texto: ModeloTexto;
  rotulo: string;
  /** Por que esta ação, exibido para quem lê. Explicabilidade não é debug. */
  porque: ModeloTexto;
}

export const TEXTOS = {
  /* --- Já paga por acompanhamento: avaliar o que tem vem antes de tudo --- */
  jaTemPersonal: {
    titulo: m('Antes de mudar, vale avaliar o que você já paga', 'Antes de mudar, vale avaliar o que você já paga'),
    texto: m(
      'Você já tem acompanhamento. Trocar de treino ou de profissional sem antes olhar o que o serviço atual entrega costuma repetir o mesmo problema em outro lugar.',
      'Você já tem acompanhamento. Trocar de treino ou de profissional sem antes olhar o que o serviço atual entrega costuma repetir o mesmo problema em outro lugar.',
    ),
    rotulo: 'Avaliar meu acompanhamento',
    porque: m(
      'Você indicou que já treina com alguém.',
      'Você indicou que já treina com alguém.',
    ),
  },

  /* --- O eixo do problema aponta a ferramenta que o resolve --- */
  eixoAderencia: {
    titulo: m('O seu gargalo é manter a sequência', 'O seu gargalo é manter a sequência'),
    texto: m(
      'Quem começa e para raramente tem problema de vontade — costuma ter um plano que pede mais dias ou mais tempo do que a semana real entrega. Dá para descobrir qual é o ponto exato.',
      'Quem começa e para raramente tem problema de vontade — costuma ter um plano que pede mais dias ou mais tempo do que a semana real entrega. Dá para descobrir qual é o ponto exato.',
    ),
    rotulo: 'Descobrir meu principal gargalo',
    porque: m(
      'O resultado apontou {{gargalo}} como o ponto mais frágil.',
      'O resultado apontou a constância como o ponto mais frágil.',
      ['gargalo'],
    ),
  },

  eixoAgenda: {
    titulo: m('O problema é a semana, não o treino', 'O problema é a semana, não o treino'),
    texto: m(
      'Antes de mexer em exercício, vale desenhar uma estrutura que caiba nos {{dias}} dias que você realmente tem — com uma versão mínima para as semanas ruins.',
      'Antes de mexer em exercício, vale desenhar uma estrutura que caiba nos dias que você realmente tem — com uma versão mínima para as semanas ruins.',
      ['dias'],
    ),
    rotulo: 'Montar treino para minha rotina',
    porque: m(
      'O que apertou no seu resultado foi a agenda, não o conteúdo do treino.',
      'O que apertou no seu resultado foi a agenda, não o conteúdo do treino.',
    ),
  },

  eixoEstrutura: {
    titulo: m('Vale olhar como o treino está montado', 'Vale olhar como o treino está montado'),
    texto: m(
      'Distribuição por grupo muscular, frequência e coerência com a sua prioridade são coisas que dá para verificar sem chute — e é onde aparecem os desequilíbrios mais comuns.',
      'Distribuição por grupo muscular, frequência e coerência com a sua prioridade são coisas que dá para verificar sem chute — e é onde aparecem os desequilíbrios mais comuns.',
    ),
    rotulo: 'Analisar meu treino',
    porque: m(
      'O ponto principal do seu resultado foi a montagem do treino.',
      'O ponto principal do seu resultado foi a montagem do treino.',
    ),
  },

  eixoProgressao: {
    titulo: m('O que trava é a evolução, não o começo', 'O que trava é a evolução, não o começo'),
    texto: m(
      'Treino que não muda ao longo das semanas para de render em algum momento. A análise mostra se existe progressão declarada no que você faz hoje e onde ela some.',
      'Treino que não muda ao longo das semanas para de render em algum momento. A análise mostra se existe progressão declarada no que você faz hoje e onde ela some.',
    ),
    rotulo: 'Analisar meu treino',
    porque: m(
      'O seu resultado apontou a progressão como o ponto mais frágil.',
      'O seu resultado apontou a progressão como o ponto mais frágil.',
    ),
  },

  eixoSupervisao: {
    titulo: m('A dúvida agora é se vale ter alguém junto', 'A dúvida agora é se vale ter alguém junto'),
    texto: m(
      'O diagnóstico cruza objetivo, experiência e disponibilidade para dizer que tipo de acompanhamento faria diferença no seu caso — inclusive quando a resposta honesta é nenhum.',
      'O diagnóstico cruza objetivo, experiência e disponibilidade para dizer que tipo de acompanhamento faria diferença no seu caso — inclusive quando a resposta honesta é nenhum.',
    ),
    rotulo: 'Descobrir se preciso de acompanhamento',
    porque: m(
      'As suas respostas indicaram necessidade de supervisão mais próxima.',
      'As suas respostas indicaram necessidade de supervisão mais próxima.',
    ),
  },

  eixoOrcamento: {
    titulo: m('Saber a faixa antes de negociar muda a conversa', 'Saber a faixa antes de negociar muda a conversa'),
    texto: m(
      'A calculadora mostra a faixa por sessão e por mês em {{cidade}}, com a conta aberta e a procedência do dado declarada.',
      'A calculadora mostra a faixa por sessão e por mês na sua região, com a conta aberta e a procedência do dado declarada.',
      ['cidade'],
    ),
    rotulo: 'Ver quanto pode custar',
    porque: m(
      'O orçamento apareceu como fator decisivo nas suas respostas.',
      'O orçamento apareceu como fator decisivo nas suas respostas.',
    ),
  },

  /* --- Conteúdo: quando a ferramenta que resolveria o eixo já foi feita --- */
  conteudo: {
    titulo: m('Uma leitura que ataca esse ponto', 'Uma leitura que ataca esse ponto'),
    texto: m(
      'Você já passou pelas ferramentas que olham {{gargalo}}. O que rende agora é aprofundar em texto e executar.',
      'Você já passou pelas ferramentas que olham esse ponto. O que rende agora é aprofundar em texto e executar.',
      ['gargalo'],
    ),
    rotulo: 'Ler o artigo',
    porque: m(
      'As ferramentas relevantes para o seu caso já foram respondidas.',
      'As ferramentas relevantes para o seu caso já foram respondidas.',
    ),
  },

  /* --- Consultoria: só com necessidade E intenção altas, nunca antes --- */
  consultoria: {
    titulo: m('Talvez faça sentido não resolver isso sozinho', 'Talvez faça sentido não resolver isso sozinho'),
    texto: m(
      'Você já percorreu as ferramentas de decisão e o formato mais compatível com você é {{formato}}. Se quiser conversar sobre acompanhamento, dá para começar por aí.',
      'Você já percorreu as ferramentas de decisão e o quadro está montado. Se quiser conversar sobre acompanhamento, dá para começar por aí.',
      ['formato'],
    ),
    rotulo: 'Ver como funciona o acompanhamento',
    porque: m(
      'Você concluiu as etapas de decisão e sinalizou intenção de contratar.',
      'Você concluiu as etapas de decisão e sinalizou intenção de contratar.',
    ),
  },
} as const satisfies Record<string, BlocoTexto>;

export type RegraTexto = keyof typeof TEXTOS;

/* ------------------------------------------------------------------ *
 * Fechamentos — o que aparece quando a resposta certa é NÃO oferecer nada
 * ------------------------------------------------------------------ */

/**
 * Nenhum CTA é melhor do que CTA irrelevante. Mas "nada" não pode virar uma
 * tela que acaba no vazio: o fechamento reconhece o resultado e encerra.
 */
export const FECHAMENTOS = {
  resultadoBom:
    'O seu resultado não apontou nada que peça correção agora. O melhor próximo passo é executar o que já está montado e revisar daqui a algumas semanas.',
  jornadaCompleta:
    'Você percorreu todas as etapas do mapa. Daqui em diante, o que rende é executar e revisar de tempos em tempos.',
  semAcaoUtil:
    'Nada que o portal ofereça agora acrescentaria ao que você já tem em mãos.',
} as const;

export type FechamentoId = keyof typeof FECHAMENTOS;

/**
 * Ressalva de saúde. Entra sempre que a pessoa declarou limitação, dor ou
 * condição — e substitui qualquer oferta comercial, nunca convive com ela.
 */
export const RESSALVA_SAUDE =
  'Você declarou uma limitação ou condição de saúde. Nada aqui substitui a avaliação de um médico ou fisioterapeuta — leve o resultado para quem acompanha o seu caso antes de mudar o treino.';
