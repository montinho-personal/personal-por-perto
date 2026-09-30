import type { Cidade, FAQ } from './types';
import { faixaBRL } from './slug';
import { emCidade, emCidadeCap, deCidade } from './gramatica';

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

  // As perguntas dos prints entram logo depois da de preço (a de mês e
  // frequência) ou no fim da lista padrão (taxa e Instagram).
  const busca = faqsDaBusca(cidade);
  if (busca.precoMensal) base.splice(1, 0, busca.precoMensal);
  base.push(...busca.resto);

  return [...base, ...(cidade.faqsExtra ?? [])];
}

/**
 * Perguntas escritas a partir dos prints de busca (autocompletar e "as
 * pessoas também perguntam"), ligadas por cidade em `faqsBusca`.
 *
 * A pergunta usa as palavras da busca — "1 mês", "3 vezes por semana", "é
 * permitido cobrar taxa" — porque é assim que a pessoa pergunta. Os números
 * saem de `precos`: nenhum valor é digitado aqui.
 */
function faqsDaBusca(cidade: Cidade): { precoMensal?: FAQ; resto: FAQ[] } {
  const cfg = cidade.faqsBusca;
  const resto: FAQ[] = [];
  if (!cfg) return { resto };
  const emN = emCidade(cidade);
  const emNCap = emCidadeCap(cidade);
  const deN = deCidade(cidade);
  const p = cidade.precos;

  let precoMensal: FAQ | undefined;
  if (cfg.precoMensal) {
    // Três vezes por semana = 12 ou 13 sessões no mês.
    const somaMin = 12 * p.avulsaMin;
    const somaMax = 13 * p.avulsaMax;
    // Só afirma que o pacote sai mais barato quando a conta mostra isso.
    const pacoteMaisBarato = p.mensalMax < somaMax && p.mensalMin < somaMin;
    precoMensal = {
      pergunta: `Quanto custa 1 mês de personal trainer ${emN}, 3 vezes por semana?`,
      resposta:
        `${emNCap}, o pacote mensal presencial com 2 ou 3 sessões por semana vai de ${faixaBRL(p.mensalMin, p.mensalMax)} — quanto mais sessões, mais perto do topo da faixa. ` +
        `Três vezes por semana são 12 ou 13 sessões no mês: pagando aula avulsa, de ${faixaBRL(p.avulsaMin, p.avulsaMax)} cada, a conta iria de ${faixaBRL(somaMin, somaMax)}` +
        (pacoteMaisBarato ? ', e é por isso que o pacote costuma sair mais barato por aula. ' : '. ') +
        `A aula costuma durar de 50 minutos a 1 hora. No acompanhamento online, sem o profissional ao lado, a faixa é de ${faixaBRL(p.onlineMin, p.onlineMax)} por mês. ` +
        'São valores de mercado para referência: o preço final depende da experiência do profissional, do local e da frequência.',
    };
  }

  if (cfg.taxaPersonal) {
    const onde =
      cfg.taxaPersonal === 'condominio'
        ? `Nos residenciais ${deN}, quem decide é o regulamento de cada condomínio: antes de fechar, pergunte ao profissional se ele já é cadastrado no seu e se existe taxa — e se ela vem embutida no preço ou é cobrada à parte.`
        : `Nas academias ${deN}, a regra é de cada rede e às vezes de cada unidade: pergunte na recepção se o personal de fora é aceito e em que condições, e ao profissional se a taxa vem embutida no preço ou é cobrada à parte.`;
    resto.push({
      pergunta: `É permitido cobrar taxa de personal trainer ${emN}?`,
      resposta:
        'Não existe hoje uma regra nacional. Cada academia e cada condomínio define se aceita personal de fora e se cobra taxa dele; alguns lugares têm lei própria — o Distrito Federal, por exemplo —, há projeto no Congresso para limitar o valor, e a Justiça já decidiu dos dois jeitos. ' +
        onde,
    });
  }

  if (cfg.instagram) {
    resto.push({
      pergunta: `Como avaliar um personal trainer ${emN} pelo Instagram?`,
      resposta:
        'O perfil mostra o que a primeira conversa não mostra: o jeito de ensinar. Vale olhar se o profissional explica a execução em vez de só postar treino pronto, se aparecem alunos reais com rotinas diferentes — não só antes e depois —, se ele responde às dúvidas e há quanto tempo publica com constância. Promessa de resultado rápido e garantido é sinal contrário. ' +
        'O Montinho Personal, destacado pelo portal, mostra treinos, execução e bastidores em @montinho_personal.',
    });
  }

  return { precoMensal, resto };
}
