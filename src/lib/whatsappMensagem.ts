/**
 * Gerador de mensagem contextual do WhatsApp.
 *
 * Uma função em vez de mensagens escritas à mão em centenas de páginas.
 * A mensagem diz de onde a pessoa veio e o que ela provavelmente quer —
 * o que muda completamente a qualidade da primeira resposta do Montinho.
 *
 * Nunca gera "Oi, quero saber mais".
 */
import type { Topico } from './ctaTaxonomia';

export interface EntradaMensagem {
  /** Campanha que originou o clique. */
  campanha: string;
  topico: Topico;
  /** Título do conteúdo de origem, quando fizer sentido citar. */
  assunto?: string;
  cidadeNome?: string;
  uf?: string;
  /** Locução flexionada ("no Rio de Janeiro"); cai em "em {cidade}". */
  localidade?: string;
}

/** Frase de interesse por tópico — o "o que eu quero" da mensagem. */
const INTERESSE: Record<Topico, string> = {
  'local-comercial': 'queria entender como funciona o seu acompanhamento.',
  'preco-contratacao': 'queria entender o que está incluído no acompanhamento e como funcionam os formatos.',
  'escolha-decisao': 'queria entender qual formato de acompanhamento faria mais sentido no meu caso.',
  'formato-acompanhamento':
    'estou decidindo entre acompanhamento presencial e online e queria entender como cada formato funciona no seu trabalho.',
  'avaliacao-acompanhamento':
    'já treino com acompanhamento e queria entender como você organiza planejamento, progressão e revisão do treino.',
  emagrecimento: 'meu objetivo é emagrecer e queria entender como funcionaria um acompanhamento para a minha rotina.',
  hipertrofia: 'quero organizar melhor meu treino para ganhar massa e queria entender como você trabalha isso.',
  'execucao-exercicio': 'queria entender como funciona ter o treino inteiro planejado, e não só um exercício.',
  'dor-saude': 'estou retomando os treinos com algumas limitações e queria entender como você adapta o planejamento.',
  iniciantes: 'sou iniciante e queria entender como começar com orientação.',
  'rotina-tempo': 'minha rotina é corrida e queria entender como funcionaria um treino pensado no tempo que eu tenho.',
  'constancia-aderencia':
    'já comecei e parei algumas vezes e queria entender como manter uma rotina que sobreviva às semanas ruins.',
  'publico-especifico': 'queria entender como funcionaria um acompanhamento para o meu caso.',
  farmacologico:
    'estou em processo de emagrecimento e queria entender como estruturar o treino para preservar massa muscular.',
  'nutricao-suplementos': 'queria entender como alinhar treino e alimentação dentro da minha rotina.',
  humor: 'queria entender como funciona o seu acompanhamento.',
  institucional: 'queria entender como funciona o seu acompanhamento.',
};

/** Abertura conforme a origem: página local, artigo ou navegação geral. */
function abertura(e: EntradaMensagem): string {
  if (e.cidadeNome) {
    const onde = e.localidade ?? `em ${e.cidadeNome}`;
    return `Oi, Montinho! Cheguei pelo guia de personal trainer ${onde} no Personal por Perto.`;
  }
  if (e.assunto) {
    return `Oi, Montinho! Vim pelo artigo "${e.assunto}" no Personal por Perto.`;
  }
  return 'Oi, Montinho! Vim pelo Personal por Perto.';
}

/** Frase específica quando a campanha é presencial ou explicitamente online. */
function complemento(e: EntradaMensagem): string {
  if (e.campanha === 'localPresencial') {
    const onde = e.localidade ?? (e.cidadeNome ? `em ${e.cidadeNome}` : 'na região');
    return `Vi que você atende presencialmente ${onde} e queria entender como funciona.`;
  }
  if (e.campanha === 'localPresencialCondicional') {
    const onde = e.localidade ?? (e.cidadeNome ? `em ${e.cidadeNome}` : 'na minha região');
    return `Queria saber se o atendimento presencial alcança a minha região (${onde.replace(/^(em|no|na|nos|nas) /, '')}) e, se não alcançar, como funciona o acompanhamento online.`;
  }
  if (e.campanha === 'onlineCoaching') {
    return 'Vi a opção de acompanhamento online e queria entender como funciona.';
  }
  return INTERESSE[e.topico];
}

/** Primeira letra maiúscula — os complementos começam em minúscula. */
const capitalizar = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** Monta a mensagem final, em duas frases curtas e naturais. */
export function montarMensagemWhatsapp(e: EntradaMensagem): string {
  return `${abertura(e)} ${capitalizar(complemento(e))}`;
}
