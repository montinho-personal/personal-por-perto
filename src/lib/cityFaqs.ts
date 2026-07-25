import type { Cidade, FAQ } from './types';
import { faixaBRL } from './slug';
import { emCidade, emCidadeCap } from './gramatica';

/**
 * Gera FAQs específicas da cidade no estilo GEO (resposta direta na primeira
 * frase). Cada resposta usa dados reais da cidade — nunca é só "trocar o nome".
 */
export function cityFaqs(cidade: Cidade): FAQ[] {
  const n = cidade.nome;
  const emN = emCidade(cidade); //    "em São Paulo" | "no Rio de Janeiro"
  const emNCap = emCidadeCap(cidade); // idem, para início de frase
  const primeiroParque = cidade.parques[0];
  const primeiraCorrida = cidade.corridas[0];

  const base: FAQ[] = [
    {
      pergunta: `Quanto custa um personal trainer ${emN}?`,
      resposta:
        `${emNCap}, a aula avulsa presencial costuma ficar entre ${faixaBRL(
          cidade.precos.avulsaMin,
          cidade.precos.avulsaMax,
        )}, enquanto pacotes mensais com 2 a 3 sessões por semana variam de ${faixaBRL(
          cidade.precos.mensalMin,
          cidade.precos.mensalMax,
        )}. O acompanhamento online tende a ser mais acessível, na faixa de ${faixaBRL(
          cidade.precos.onlineMin,
          cidade.precos.onlineMax,
        )} por mês. São valores médios de mercado e variam conforme experiência do profissional, local e formato.`,
    },
    {
      pergunta: `Como encontrar um bom personal trainer ${emN}?`,
      resposta:
        `Para encontrar um bom personal trainer ${emN}, comece verificando se o profissional tem registro profissional ativo, peça para conhecer a formação e a experiência com o seu objetivo e avalie se ele faz uma avaliação inicial antes de prescrever o treino. Vale considerar a localização — perto de casa, do trabalho ou de parques como o ${primeiroParque?.nome ?? 'parque mais próximo'} — e, se a rotina for apertada, o formato online.`,
    },
    {
      pergunta: `Vale a pena ter personal trainer ${emN}?`,
      resposta:
        `Vale a pena para quem busca constância, segurança na execução e um treino ajustado ao próprio objetivo. ${emNCap}, o clima também entra na equação: ${cidade.climaTreino} O acompanhamento profissional ajuda a manter a regularidade mesmo quando o ambiente muda.`,
    },
    {
      pergunta: `É possível treinar ao ar livre ${emN}?`,
      resposta: primeiroParque
        ? `Sim. ${n} tem espaços públicos como o ${primeiroParque.nome}, ${primeiroParque.descricao.charAt(0).toLowerCase()}${primeiroParque.descricao.slice(1)} Muitos personais usam esses locais para treino funcional, corrida e mobilidade.`
        : `Sim, ${n} conta com parques e espaços públicos que muitos personais usam para treino funcional, corrida e mobilidade.`,
    },
    {
      pergunta: `Personal trainer online funciona para quem mora ${emN}?`,
      resposta:
        `Sim. O acompanhamento online funciona bem para quem mora ${emN} e tem rotina apertada ou prefere treinar por conta própria com orientação profissional. O personal monta o treino, acompanha a execução a distância e ajusta a rota periodicamente — formato que costuma ser mais flexível e acessível que o presencial.`,
    },
  ];

  if (primeiraCorrida) {
    base.push({
      pergunta: `Existe cultura de corrida e atividade física ${emN}?`,
      resposta: `Sim. ${n} tem uma cena esportiva ativa — um exemplo é a ${primeiraCorrida.nome}: ${primeiraCorrida.descricao.charAt(0).toLowerCase()}${primeiraCorrida.descricao.slice(1)}`,
    });
  }

  return [...base, ...(cidade.faqsExtra ?? [])];
}
