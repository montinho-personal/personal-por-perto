/**
 * Title e description das páginas de cidade.
 *
 * POR QUE ESTE ARQUIVO EXISTE
 *
 * Até 11/09/2026 as 985 páginas de cidade usavam duas frases fixas:
 *
 *   title:       `Personal Trainer {cidade} ({UF}): guia completo e quanto custa`
 *   description: `Como escolher um personal trainer {cidade} ({UF}), quanto custa
 *                 ({faixa} a aula), onde treinar e dicas por objetivo. Guia
 *                 editorial independente, atualizado.`
 *
 * Três problemas, todos medidos e nenhum de opinião:
 *
 * 1. COMPRIMENTO. O sufixo fixo tem 31 caracteres. Somado a nomes compridos
 *    ("São Sebastião do Paraíso", "São Miguel dos Milagres"), estourava a
 *    largura da SERP em 153 títulos e 168 descrições — 234 deles em cidades.
 *
 * 2. DUPLICAÇÃO. Title e description são os dois campos que mais pesam na
 *    deduplicação do Google, e 985 páginas repetiam a mesma frase com o nome
 *    trocado. O relatório de cobertura de 11/09/2026 mostra 43 páginas
 *    classificadas como "Cópia, o Google e o usuário selecionaram uma página
 *    canônica diferente" — 45 das 46 da amostra anterior eram páginas de
 *    cidade. O Google estava dizendo, em números, que elas se parecem demais.
 *
 * 3. A REGRA EDITORIAL. A rotina da pauta proíbe explicitamente replicar
 *    "guia completo e quanto custa" de forma automática. A página de cidade
 *    fazia exatamente isso, 985 vezes.
 *
 * COMO ESTE MÓDULO RESOLVE
 *
 * A variação não é de sinônimo, é de INFORMAÇÃO: cada página passa a anunciar
 * um dado que só ela tem — o parque onde a cidade treina, a academia
 * confirmada, o bairro, a corrida local —, escolhido entre o que aquela
 * cidade de fato publica. Trocar palavra de lugar não resolveria nada; trocar
 * o fato anunciado, sim.
 *
 * A escolha é determinística (derivada do slug), então o mesmo build sempre
 * produz o mesmo texto e a mudança não vira ruído entre deploys.
 *
 * E o comprimento é respeitado por construção: monta-se a versão mais
 * informativa que cabe no orçamento, e cai-se para a próxima quando não cabe.
 * Cidade de nome comprido recebe sufixo curto em vez de título cortado.
 */
import type { Cidade } from './types';
import { emCidade } from './gramatica';
import { faixaBRL } from './slug';

/** Limites de caractere. Os ideais; o gerador nunca deve passar deles. */
const TITLE_MAX = 60;
const DESC_MAX = 160;
/**
 * Piso da faixa PREFERIDA, não do aceitável.
 *
 * Com o piso em 110 os degraus curtos entravam na disputa e o sorteio puxava
 * 398 cidades para a casa dos 120 caracteres — todas dentro do limite e todas
 * gastando menos espaço do que a SERP dá. O piso alto faz o gerador preferir
 * sempre a versão que informa mais, e só descer quando nenhuma couber.
 */
const DESC_MIN = 135;

/**
 * Hash estável de string para inteiro não negativo.
 * Serve só para escolher variante — não precisa ser criptográfico, precisa ser
 * o mesmo em todo build.
 */
function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

/**
 * Sufixos de título, do mais informativo ao mais curto.
 *
 * A ordem importa: o gerador percorre os que CABEM no orçamento daquela cidade
 * e sorteia entre eles pelo hash do slug. Cidade de nome curto tem muitas
 * opções; cidade de nome longo tem poucas ou nenhuma — e nesse caso o título
 * fica só com "Personal Trainer em X (UF)", que é completo e honesto.
 */
const SUFIXOS_TITULO = [
  'preços, locais e como escolher',
  'quanto custa e onde treinar',
  'o que custa e onde se treina',
  'preços e como escolher',
  'preços e onde treinar',
  'quanto custa a aula',
  'preços e formatos',
  'onde treinar',
  'preços',
];

/** O título da página de cidade. Nunca passa de TITLE_MAX. */
export function tituloCidade(cidade: Cidade): string {
  const base = `Personal Trainer ${emCidade(cidade)} (${cidade.uf})`;
  const cabem = SUFIXOS_TITULO.filter((s) => base.length + 2 + s.length <= TITLE_MAX);
  if (cabem.length === 0) return base;
  /**
   * Entre os que cabem, sorteia só nos TRÊS MAIS LONGOS.
   *
   * Sortear entre todos parecia mais variado e produzia o contrário: ": preços"
   * cabe em quase toda cidade, então caía em 252 das 985 e deixava 127 títulos
   * abaixo de 45 caracteres — curtos demais para dizer o que a página entrega.
   * Restringir ao topo da lista mantém a variedade onde ela informa e gasta o
   * orçamento de largura com informação, não com espaço vazio.
   */
  const candidatos = cabem.slice(0, 3);
  return `${base}: ${candidatos[hash(cidade.slug) % candidatos.length]}`;
}

/** Primeiro item não vazio de uma lista, ou undefined. */
function primeiro<T>(lista: T[] | undefined): T | undefined {
  return lista && lista.length > 0 ? lista[0] : undefined;
}

/**
 * A description da página de cidade.
 *
 * Monta candidatas usando o que AQUELA cidade publica e devolve a primeira que
 * couber no orçamento. Toda candidata carrega a faixa de preço, que é o dado
 * mais procurado e está impresso na página; o que varia é o segundo fato.
 */
export function descricaoCidade(cidade: Cidade): string {
  const emN = emCidade(cidade);
  const preco = faixaBRL(cidade.precos.avulsaMin, cidade.precos.avulsaMax);
  const parque = primeiro(cidade.parques)?.nome;
  const academia = primeiro(cidade.academiasProximas)?.nome;
  const bairro = primeiro(cidade.bairrosNobres);
  const corrida = primeiro(cidade.corridas)?.nome;

  const candidatas: string[] = [];

  if (parque) {
    candidatas.push(
      `Personal trainer ${emN}: a aula de ${preco}, onde a cidade treina — ${parque} e as academias do centro — e o que olhar antes de fechar.`,
    );
  }
  if (academia) {
    candidatas.push(
      `Personal trainer ${emN}: a aula de ${preco}, as academias da cidade (${academia}), os formatos de atendimento e como escolher o profissional.`,
    );
  }
  if (corrida) {
    candidatas.push(
      `Personal trainer ${emN}: a aula de ${preco}, onde treinar ao ar livre, o calendário de corrida (${corrida}) e os critérios para escolher.`,
    );
  }
  /**
   * Nada aqui põe artigo antes de nome próprio.
   *
   * "o treino no Orla da Praia do Toque" e "do Vila Mariana" são o que sai
   * quando o gabarito assume gênero masculino para um nome que vem dos dados.
   * Aposição entre travessões e parênteses resolve sem tabela de gênero: o
   * nome entra como está escrito na fonte.
   */
  if (bairro) {
    candidatas.push(
      `Personal trainer ${emN}: a aula de ${preco}, onde se treina na cidade — de ${bairro} aos parques públicos — e como escolher o profissional.`,
    );
  }
  if (parque) {
    candidatas.push(
      `Personal trainer ${emN}: a aula de ${preco}, onde treinar ao ar livre (${parque}), os formatos de atendimento e como escolher.`,
    );
  }
  candidatas.push(
    `Personal trainer ${emN}: a aula de ${preco}, onde treinar na cidade, os formatos de atendimento e os critérios para escolher o profissional.`,
  );
  /**
   * Degraus intermediários. Sem eles, cidade de nome comprido caía direto do
   * texto completo para o mínimo e ficava com 122 caracteres — dentro do
   * limite, mas gastando menos espaço do que a SERP oferece.
   */
  candidatas.push(
    `Personal trainer ${emN}: a aula de ${preco}, onde treinar na cidade e os critérios para escolher o profissional certo.`,
  );
  candidatas.push(
    `Personal trainer ${emN}: a aula de ${preco}, onde treinar, os formatos de atendimento e como escolher.`,
  );
  candidatas.push(`Personal trainer ${emN}: a aula de ${preco}, onde treinar e como escolher o profissional certo.`);

  const ordem = hash(cidade.slug + 'd');
  const validas = candidatas.filter((c) => c.length <= DESC_MAX && c.length >= DESC_MIN);
  if (validas.length > 0) return validas[ordem % validas.length];

  // Nenhuma candidata caiu na faixa ideal: devolve a MAIS LONGA que não estoura
  // — o objetivo é aproveitar o espaço, não economizá-lo.
  const cabem = candidatas.filter((c) => c.length <= DESC_MAX);
  if (cabem.length > 0) return cabem.reduce((a, b) => (b.length > a.length ? b : a));

  // Último recurso, para cidade de nome muito longo: o mínimo que é verdade.
  return `Personal trainer ${emN}: a aula de ${preco}, onde treinar e como escolher.`;
}
