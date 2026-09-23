/**
 * buscaFerramentas — a busca por intenção da Central de Ferramentas.
 *
 * A pessoa não sabe o nome da ferramenta. Ela digita a dúvida: "quanto
 * cobra personal", "não consigo manter academia", "calorias correndo". A
 * busca casa o que ela escreveu com nome, aliases, pergunta e tags de cada
 * entrada do catálogo, e devolve as ferramentas em ordem de aderência.
 *
 * Função pura: sem DOM, sem fetch. O cliente da página só desenha o que
 * sai daqui, e o teste varre as personas do brief sem navegador.
 *
 * Como pontua: cada palavra da consulta (tirando as vazias, como "de" e
 * "um") procura um casamento em cada campo; o campo mais forte em que ela
 * aparece dá os pontos. Nome vale mais que alias, alias mais que pergunta,
 * pergunta mais que tag. A consulta inteira contida num alias ganha bônus,
 * e quem casa mais palavras vence o empate.
 */
import type { FerramentaCatalogo } from '../data/ferramentas';
import { categoria } from '../data/ferramentas';

const VAZIAS = new Set([
  'a', 'o', 'e', 'de', 'do', 'da', 'dos', 'das', 'um', 'uma', 'em', 'no', 'na', 'nos', 'nas',
  'para', 'pra', 'por', 'com', 'sem', 'que', 'se', 'meu', 'minha', 'meus', 'minhas', 'eu',
  'me', 'mais', 'muito', 'ao', 'aos', 'as', 'os', 'qual', 'quais', 'como', 'ser', 'esta',
  'este', 'isso', 'ja', 'so', 'quero', 'saber', 'consigo', 'nao', 'gostaria', 'preciso',
]);

/** Minúsculas, sem acento, sem pontuação: "Vôlei de praia!" → "volei de praia". */
export function normaliza(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const tokens = (s: string): string[] => normaliza(s).split(' ').filter((t) => t && !VAZIAS.has(t));

/**
 * Uma palavra da consulta casa com uma palavra do campo quando são iguais,
 * quando uma é prefixo da outra (com pelo menos 4 letras — "corr" pega
 * "corrida" e "correndo", mas "de" não pega nada) ou, para palavras longas,
 * quando compartilham as 5 primeiras letras (flexões: "treinar"/"treino").
 */
function casa(q: string, campo: string): boolean {
  if (q === campo) return true;
  if (q.length >= 4 && campo.startsWith(q)) return true;
  if (campo.length >= 4 && q.startsWith(campo)) return true;
  return q.length >= 6 && campo.length >= 6 && q.slice(0, 5) === campo.slice(0, 5);
}

const PESO = { nome: 5, alias: 4, pergunta: 3, tag: 2, resumo: 1, categoria: 1 } as const;

interface Indexada {
  ferramenta: FerramentaCatalogo;
  campos: Array<{ peso: number; palavras: string[] }>;
  /** Aliases normalizados inteiros, para o bônus de frase. */
  frases: string[];
}

export function indexar(catalogo: FerramentaCatalogo[]): Indexada[] {
  return catalogo.map((f) => ({
    ferramenta: f,
    campos: [
      { peso: PESO.nome, palavras: tokens(`${f.nome} ${f.nomeCurto}`) },
      { peso: PESO.alias, palavras: tokens(f.aliases.join(' ')) },
      { peso: PESO.pergunta, palavras: tokens(f.pergunta) },
      { peso: PESO.tag, palavras: tokens(f.tags.join(' ')) },
      { peso: PESO.resumo, palavras: tokens(f.resumo) },
      { peso: PESO.categoria, palavras: tokens(categoria(f.categoria).nome) },
    ],
    frases: [normaliza(f.nome), normaliza(f.nomeCurto), ...f.aliases.map(normaliza), normaliza(f.pergunta)],
  }));
}

export interface Resultado {
  ferramenta: FerramentaCatalogo;
  pontos: number;
  /** Quantas palavras da consulta encontraram casamento. */
  casadas: number;
}

export function buscar(consulta: string, indice: Indexada[], limite = 8): Resultado[] {
  const q = tokens(consulta);
  const frase = normaliza(consulta);
  if (!q.length) return [];

  const out: Resultado[] = [];
  for (const item of indice) {
    let pontos = 0;
    let casadas = 0;
    for (const palavra of q) {
      let melhor = 0;
      for (const campo of item.campos) {
        if (campo.peso > melhor && campo.palavras.some((p) => casa(palavra, p))) melhor = campo.peso;
      }
      if (melhor) {
        pontos += melhor;
        casadas += 1;
      }
    }
    if (!casadas) continue;
    // A consulta inteira dentro de um alias: é exatamente como a pessoa pediu.
    if (frase.length >= 4 && item.frases.some((fr) => fr.includes(frase))) pontos += 6;
    out.push({ ferramenta: item.ferramenta, pontos, casadas });
  }

  out.sort((a, b) => b.casadas - a.casadas || b.pontos - a.pontos);

  // Uma palavra só casando por tag ou categoria dá resultado fraco demais
  // para mostrar sozinho — mas se é tudo o que há, é melhor que nada.
  return out.slice(0, limite);
}
