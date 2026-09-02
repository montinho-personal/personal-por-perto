/**
 * Mensagens da sticky bar, por tópico.
 *
 * Configuração central: acrescentar tópico, trocar copy ou mudar destino
 * acontece aqui, sem tocar no componente nem no motor. É o mesmo arranjo
 * de ctaCampanhas.ts — dado separado de decisão.
 *
 * Cada regra traz três variantes da MESMA mensagem, para teste A/B:
 *
 *   pergunta   — "Seu treino faz sentido?"
 *   beneficio  — "Descubra se seu treino está bem montado"
 *   problema   — "Treina, mas não sabe se está no caminho?"
 *
 * Só o texto muda entre as variantes. Rótulo do botão e destino são fixos
 * por regra, de propósito: teste com duas variáveis não diz qual delas
 * moveu o resultado.
 *
 * Limites de copy (respeitados por teste automatizado):
 *   mensagem — até 60 caracteres
 *   rótulo   — 2 a 4 palavras
 *
 * Vocabulário proibido: "compre agora", "não perca", "última chance",
 * "oferta", "garantido", "transforme seu corpo". O teste também barra
 * promessa de cura e superlativo de resultado.
 */
import { rotas } from '../lib/links';
import type { Topico } from '../lib/ctaTaxonomia';
import type { Feature } from './features';

/** Qual das três formulações está sendo exibida. */
export type VarianteSticky = 'pergunta' | 'beneficio' | 'problema';

export const VARIANTES: VarianteSticky[] = ['pergunta', 'beneficio', 'problema'];

/**
 * Rótulo curto de cada variante para o analytics.
 *
 * O nome semântico diz o que está sendo testado; a letra é o que cabe num
 * relatório do GA sem quebrar a coluna. Os dois vão no evento.
 */
export const LETRA_VARIANTE: Record<VarianteSticky, 'A' | 'B' | 'C'> = {
  pergunta: 'A',
  beneficio: 'B',
  problema: 'C',
};

export interface RegraSticky {
  /** Identificador estável — vai para o analytics, não muda com a copy. */
  id: string;
  /** As três formulações. */
  mensagem: Record<VarianteSticky, string>;
  rotulo: string;
  destino: string;
  /** Ferramenta exigida; sem a flag, o motor cai para o mapa. */
  requer?: Feature;
  /**
   * Ressalva obrigatória exibida abaixo da mensagem. Existe só para
   * conteúdo sensível, onde o silêncio seria a escolha errada.
   */
  ressalva?: string;
}

/**
 * Regras por tópico da taxonomia. Tópicos ausentes caem no fallback do
 * motor — nunca em CTA vazio.
 *
 * Ausências deliberadas:
 *   humor         — regra editorial do projeto: humor não carrega CTA
 *                   comercial no corpo, e a sticky é corpo.
 *   institucional — política, privacidade, sobre e a própria página do
 *                   Montinho. Numa página que já é a oferta, uma barra
 *                   apontando para a oferta é ruído.
 */
export const REGRAS: Partial<Record<Topico, RegraSticky>> = {
  emagrecimento: {
    id: 'emagrecimento',
    mensagem: {
      pergunta: 'Seu treino ajuda mesmo a emagrecer?',
      beneficio: 'Veja se seu treino sustenta o emagrecimento',
      problema: 'Treina, come bem e o peso não desce?',
    },
    rotulo: 'Analisar meu treino',
    destino: rotas.ferramentaAuditoria,
    requer: 'auditoriaTreino',
  },

  hipertrofia: {
    id: 'hipertrofia',
    mensagem: {
      pergunta: 'Seu treino faz sentido?',
      beneficio: 'Descubra se seu treino está bem montado',
      problema: 'Treina há meses e travou no mesmo lugar?',
    },
    rotulo: 'Analisar meu treino',
    destino: rotas.ferramentaAuditoria,
    requer: 'auditoriaTreino',
  },

  'execucao-exercicio': {
    id: 'execucao',
    mensagem: {
      pergunta: 'E o resto do seu treino, faz sentido?',
      beneficio: 'Veja se o treino inteiro está bem montado',
      problema: 'Sabe o exercício, mas não o treino todo?',
    },
    rotulo: 'Analisar meu treino',
    destino: rotas.ferramentaAuditoria,
    requer: 'auditoriaTreino',
  },

  /*
   * Rotina — as três copies em teste.
   *
   * A do slot `problema` é a que já estava no ar; as outras duas entraram
   * para o teste A/B. Registro de honestidade: "Seu treino não cabe na sua
   * rotina?" também é uma formulação de problema, não de benefício. Ficou
   * no slot do benefício porque foi pedida, mas na hora de ler o resultado
   * vale lembrar que este teste compara duas formulações de problema
   * contra uma pergunta neutra — e não os três enquadramentos.
   */
  'rotina-tempo': {
    id: 'rotina',
    mensagem: {
      pergunta: 'Quantos dias você realmente consegue treinar?',
      beneficio: 'Seu treino não cabe na sua rotina?',
      problema: 'A semana aperta e o treino é o que cai?',
    },
    rotulo: 'Montar minha rotina',
    destino: rotas.ferramentaRotina,
    requer: 'rotinaTreino',
  },

  'constancia-aderencia': {
    id: 'constancia',
    mensagem: {
      pergunta: 'Por que você para de treinar?',
      beneficio: 'Descubra o que derruba a sua constância',
      problema: 'Começa animado e para na terceira semana?',
    },
    rotulo: 'Fazer o diagnóstico',
    destino: rotas.ferramentaConstancia,
    requer: 'diagnosticoConstancia',
  },

  iniciantes: {
    id: 'iniciantes',
    mensagem: {
      pergunta: 'Por onde começar sem se perder?',
      beneficio: 'Monte a primeira semana de treino',
      problema: 'Quer começar e não sabe por onde?',
    },
    rotulo: 'Montar minha rotina',
    destino: rotas.ferramentaRotina,
    requer: 'rotinaTreino',
  },

  'preco-contratacao': {
    id: 'preco',
    mensagem: {
      pergunta: 'Quanto deveria custar um personal?',
      beneficio: 'Veja a faixa de preço na sua cidade',
      problema: 'Recebeu um orçamento e não sabe avaliar?',
    },
    rotulo: 'Calcular a faixa',
    destino: rotas.ferramentaPreco,
    requer: 'calculadoraPreco',
  },

  'formato-acompanhamento': {
    id: 'formato',
    mensagem: {
      pergunta: 'Presencial ou online, no seu caso?',
      beneficio: 'Descubra qual formato combina com você',
      problema: 'Na dúvida entre presencial e online?',
    },
    rotulo: 'Descobrir o formato',
    destino: rotas.ferramentaFormato,
    requer: 'formatoAcompanhamento',
  },

  'avaliacao-acompanhamento': {
    id: 'acompanhamento',
    mensagem: {
      pergunta: 'O acompanhamento que você tem está de pé?',
      beneficio: 'Avalie a estrutura do seu acompanhamento',
      problema: 'Paga por acompanhamento e sente que falta algo?',
    },
    rotulo: 'Avaliar agora',
    destino: rotas.ferramentaScore,
    requer: 'personalScore',
  },

  'escolha-decisao': {
    id: 'escolha',
    mensagem: {
      pergunta: 'Que tipo de personal combina com você?',
      beneficio: 'Descubra o acompanhamento certo para seu caso',
      problema: 'Sem saber que tipo de personal procurar?',
    },
    rotulo: 'Fazer o teste',
    destino: rotas.ferramentaMatch,
    requer: 'personalMatch',
  },

  'publico-especifico': {
    id: 'publico',
    mensagem: {
      pergunta: 'Que acompanhamento serve para o seu caso?',
      beneficio: 'Descubra o formato certo para a sua situação',
      problema: 'Seu caso pede um acompanhamento diferente?',
    },
    rotulo: 'Fazer o teste',
    destino: rotas.ferramentaMatch,
    requer: 'personalMatch',
  },

  'nutricao-suplementos': {
    id: 'nutricao',
    mensagem: {
      pergunta: 'E o treino, está acompanhando?',
      beneficio: 'Veja se o treino sustenta o que você ajustou',
      problema: 'Ajustou a dieta e o treino ficou para trás?',
    },
    rotulo: 'Analisar meu treino',
    destino: rotas.ferramentaAuditoria,
    requer: 'auditoriaTreino',
  },

  /*
   * Emagrecimento acelerado (Mounjaro e similares). Nenhuma alegação
   * médica, nenhuma promessa: a pergunta é sobre o treino, que é a única
   * coisa sobre a qual o portal tem o que dizer.
   */
  farmacologico: {
    id: 'farmacologico',
    mensagem: {
      pergunta: 'Está emagrecendo. E a massa muscular?',
      beneficio: 'Veja se seu treino protege a massa muscular',
      problema: 'Emagrecendo rápido e com medo de perder massa?',
    },
    rotulo: 'Analisar meu treino',
    destino: rotas.ferramentaAuditoria,
    requer: 'auditoriaTreino',
    ressalva: 'Não substitui seu médico.',
  },

  /*
   * Dor, lesão e limitação.
   *
   * O prompt pedia um "teste de mobilidade" — ferramenta que o portal não
   * tem. Inventar destino aqui seria prometer o que não existe, então a
   * barra faz o que o conteúdo sensível permite: aponta para o guia de
   * escolha de profissional, com a ressalva clínica visível. Se um dia
   * houver teste de mobilidade, troca-se o destino nesta linha.
   */
  'dor-saude': {
    id: 'dorSaude',
    mensagem: {
      pergunta: 'Treinar com limitação: por onde começar?',
      beneficio: 'Veja o que procurar em quem vai te acompanhar',
      problema: 'Quer voltar a treinar sem piorar a dor?',
    },
    rotulo: 'Ver o guia',
    destino: rotas.comoEscolher,
    ressalva: 'Quem libera é seu médico ou fisioterapeuta.',
  },
};

/**
 * Páginas locais (cidade e bairro).
 *
 * Duas situações diferentes, e tratá-las igual seria erro dos grandes:
 *
 * DENTRO da área de atendimento presencial, empurrar "veja a opção online"
 * é jogar contra a própria oferta — ali o presencial existe de verdade.
 *
 * FORA dela, comparar os formatos é o passo honesto. O portal não finge
 * atender presencialmente onde não atende.
 *
 * O nome da cidade entra por função, não por template de string, para que
 * a regência saia certa ("em Recife", "no Rio de Janeiro") e o limite de
 * caracteres seja verificável no teste.
 */
export interface RegraLocal {
  id: string;
  mensagem: Record<VarianteSticky, (local: string) => string>;
  rotulo: string;
  destino: string;
  requer?: Feature;
}

/**
 * Limite de caracteres da mensagem.
 *
 * Não é gosto, é medida: com 60 caracteres a maior mensagem local quebrava
 * em cinco linhas num iPhone SE (97px de barra). Em 52 o pior caso cabe em
 * três linhas e a barra fica em 65px. Cidade de nome comprido demais perde
 * a personalização e recebe a mensagem genérica — melhor que uma barra
 * deformada. O teste varre as 1.074 páginas locais contra este número.
 */
export const LIMITE_MENSAGEM = 52;

export const LOCAL_FORA: RegraLocal = {
  id: 'localFora',
  mensagem: {
    pergunta: (l) => `Presencial ou online ${l}?`,
    beneficio: (l) => `Compare os formatos ${l}`,
    problema: (l) => `Presencial ${l} saiu caro?`,
  },
  rotulo: 'Comparar formatos',
  destino: rotas.ferramentaFormato,
  requer: 'formatoAcompanhamento',
};

export const LOCAL_ATENDE: RegraLocal = {
  id: 'localAtende',
  mensagem: {
    pergunta: (l) => `Que personal procurar ${l}?`,
    beneficio: (l) => `O acompanhamento certo ${l}`,
    problema: (l) => `Sem saber quem chamar ${l}?`,
  },
  rotulo: 'Fazer o teste',
  destino: rotas.ferramentaMatch,
  requer: 'personalMatch',
};

/**
 * Fallback e entradas amplas (home, hubs de seção).
 *
 * Quem está aqui ainda não nomeou o problema. Mandar essa pessoa para uma
 * ferramenta específica é adivinhar a dor dela; o mapa começa perguntando
 * exatamente isso. Mesma lógica da regra ENTRADA_AMPLA do motor de CTA.
 */
export const PADRAO: RegraSticky = {
  id: 'mapa',
  mensagem: {
    pergunta: 'Qual é o próximo passo no seu treino?',
    beneficio: 'Monte o seu caminho, um passo por vez',
    problema: 'Perdido sobre o que resolver primeiro?',
  },
  rotulo: 'Montar meu caminho',
  destino: rotas.ferramentas,
};
