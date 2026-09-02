/**
 * Mensagens do slide-in contextual.
 *
 * Poucos modelos muito bons + regras de aplicação — e não uma mensagem por
 * artigo. O que muda entre 32 páginas do piloto é qual das duas ferramentas
 * de treino faz mais sentido ali, não o texto de cada uma.
 *
 * TESTE A/B: só o TÍTULO varia entre as três variantes. Descrição, botão e
 * destino são fixos por regra, de propósito — mudar duas coisas ao mesmo
 * tempo transforma o teste em adivinhação sobre qual delas moveu o número.
 *
 *   pergunta   — "Seu treino cabe na sua semana?"
 *   problema   — "O treino é o primeiro a sair da agenda?"
 *   resultado  — "Descubra uma divisão que caiba na sua semana."
 */
import { rotas } from '../lib/links';
import type { Feature } from './features';

export type VarianteSlide = 'pergunta' | 'problema' | 'resultado';

export const VARIANTES_SLIDE: VarianteSlide[] = ['pergunta', 'problema', 'resultado'];

/** Letra curta para o relatório do GA. */
export const LETRA_SLIDE: Record<VarianteSlide, 'A' | 'B' | 'C'> = {
  pergunta: 'A',
  problema: 'B',
  resultado: 'C',
};

/** Sorteia a variante. Mora nos dados pelo mesmo motivo da sticky bar. */
export function sortearVarianteSlide(): VarianteSlide {
  return VARIANTES_SLIDE[Math.floor(Math.random() * VARIANTES_SLIDE.length)];
}

export interface RegraSlide {
  id: string;
  /** Rótulo pequeno acima do título. */
  rotulo: string;
  titulo: Record<VarianteSlide, string>;
  /** Uma frase. Não duas. */
  descricao: string;
  botao: string;
  destino: string;
  requer?: Feature;
}

/**
 * Limites de copy, verificados por teste.
 *
 * O slide-in tem mais espaço que a sticky bar, mas não é um artigo: quem
 * está lendo outra coisa lê isto de relance.
 */
export const LIMITE_TITULO = 52;
export const LIMITE_DESCRICAO = 110;

/**
 * As duas regras do piloto.
 *
 * São as duas ferramentas de treino do portal, e elas se complementam: uma
 * organiza a semana, a outra audita o que já é feito. Qual das duas o
 * slide-in oferece depende do que a página JÁ está oferecendo nos outros
 * componentes — ver a lógica em lib/slideIn.ts.
 */
export const REGRAS_SLIDE: Record<'rotina' | 'auditoria', RegraSlide> = {
  rotina: {
    id: 'rotina',
    rotulo: 'Próximo passo',
    titulo: {
      pergunta: 'Seu treino cabe na sua semana?',
      problema: 'O treino é o primeiro a sair da agenda?',
      resultado: 'Uma divisão que cabe na sua semana',
    },
    descricao:
      'Uma estrutura de treino montada a partir dos dias que você realmente consegue treinar.',
    botao: 'Montar minha rotina',
    destino: rotas.ferramentaRotina,
    requer: 'rotinaTreino',
  },

  auditoria: {
    id: 'auditoria',
    rotulo: 'Próximo passo',
    titulo: {
      pergunta: 'Seu treino faz sentido para o seu objetivo?',
      problema: 'Treina há meses e não sabe se está certo?',
      resultado: 'Onde a estrutura do seu treino pode melhorar',
    },
    descricao:
      'Uma análise rápida de volume, frequência e progressão do treino que você já faz.',
    botao: 'Analisar meu treino',
    destino: rotas.ferramentaAuditoria,
    requer: 'auditoriaTreino',
  },
};

/**
 * BLOCOS.
 *
 * O slide-in é a quinta superfície de conversão do portal — depois do CTA
 * no corpo, do bloco do Montinho, da sticky bar e do botão de WhatsApp.
 * Ligar isso nas 1.262 páginas de uma vez seria transformar o portal
 * exatamente na sequência de anúncios que não se quer.
 *
 * Por isso a lista abaixo é a única porta de entrada: página fora dela não
 * recebe slide-in, e ponto. Abrir um bloco novo é acrescentar uma linha
 * aqui — depois de medir o anterior.
 *
 * BLOCO 1 (piloto, ativo): organização e estrutura de treino em
 * /musculacao/ — 32 artigos. Escolhido porque é o único cluster em que as
 * DUAS ferramentas de treino do portal fazem sentido, o que permite ao
 * slide-in oferecer sempre a que os outros componentes não estão
 * oferecendo.
 *
 * Blocos 2 a 8 (cidade, emagrecimento, preço, GLP-1, mobilidade…) seguem
 * fechados de propósito. Dois deles dependem de ferramentas que o portal
 * não tem: o briefing pedia "Calculadora de Volume" e "Teste de
 * Mobilidade", e nenhuma das duas existe. Abrir esses blocos exigiria ou
 * construir as ferramentas, ou apontar para outra coisa — e apontar para
 * outra coisa é a definição de slide-in irrelevante.
 */
export interface Bloco {
  id: string;
  /** Prefixo da seção. */
  secao: string;
  /** Tópicos da taxonomia que entram no bloco. */
  topicos: string[];
  ativo: boolean;
}

export const BLOCOS: Bloco[] = [
  {
    id: 'musculacao-estrutura',
    secao: 'musculacao',
    topicos: ['rotina-tempo', 'hipertrofia'],
    ativo: true,
  },
];
