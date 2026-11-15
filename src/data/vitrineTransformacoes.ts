/**
 * Onde a Vitrine de transformações aparece, e o texto próprio de cada página.
 *
 * ESCOPO (15/11/2026, pedido do Renato): só as páginas de SEO local de
 * Alphaville e região. Nenhuma outra página do site recebe a vitrine; uma
 * cidade nova aqui é a única forma de ela aparecer em outro lugar.
 * Fronteira (Granja Viana, Cotia, Carapicuíba, Osasco, Jandira, Itapevi):
 * incluída em 15/11/2026, com o ok do Renato.
 *
 * REGRAS DO TEXTO (não negociáveis):
 * - A introdução fala do bairro e do atendimento, nunca dos alunos: nada de
 *   dizer ou insinuar que eles moram ali.
 * - Atendimento presencial confirmado do Montinho: Arena 18, condomínios e em
 *   casa. Nenhuma outra academia é citada como local de atendimento.
 * - Todos os resultados com foto do feed são de emagrecimento — a introdução
 *   diz isso, para nenhuma página dar a entender outro tipo de resultado.
 * - Sem número, prazo ou promessa: os números são os do feed, de cada aluno.
 *
 * `destaque` é a posição, na lista do feed, da transformação que abre a
 * seção. Varia entre as páginas; se o feed tiver menos itens, dá a volta.
 */
export interface VitrinePagina {
  intro: string;
  destaque: number;
}

export const VITRINE_PAGINAS: Record<string, VitrinePagina> = {
  'alphaville-sp': {
    intro:
      'Alphaville é a base do Montinho Personal, que atende presencialmente na Arena 18, em condomínios e em casa. Abaixo estão transformações de alunos dele — todas de emagrecimento, com fotos reais e os números do próprio acompanhamento de cada um.',
    destaque: 1,
  },
  'tambore-sp': {
    intro:
      'Nos residenciais Tamboré, o atendimento presencial do Montinho é em casa ou no condomínio, além da Arena 18. Estas são transformações de alunos dele, todas de emagrecimento: cada número é o resultado de uma pessoa, não uma meta.',
    destaque: 0,
  },
  'barueri-sp': {
    intro:
      'Barueri está no raio de atendimento presencial do Montinho Personal — Arena 18, condomínios e em casa. Para quem ainda está decidindo, aqui estão resultados de alunos dele: todos de emagrecimento, cada um no próprio ritmo.',
    destaque: 2,
  },
  'santana-de-parnaiba-sp': {
    intro:
      'Em Santana de Parnaíba, o Montinho atende em casa, no condomínio ou na Arena 18, e também no modelo híbrido, com parte do acompanhamento online. As transformações abaixo são de alunos dele, todas de emagrecimento.',
    destaque: 3,
  },
  'aldeia-da-serra-sp': {
    intro:
      'Na Aldeia da Serra, o atendimento presencial do Montinho Personal é em casa ou no condomínio, além da Arena 18. Veja transformações de alunos dele — todas de emagrecimento, contadas com os números de cada um.',
    destaque: 4,
  },
  // Fronteira, incluída em 15/11/2026.
  'granja-viana-sp': {
    intro:
      'A Granja Viana, entre Cotia e Carapicuíba, está no raio de atendimento presencial do Montinho Personal: em casa, no condomínio ou na Arena 18. Abaixo, transformações de alunos dele — todas de emagrecimento, cada uma com os números do próprio acompanhamento.',
    destaque: 1,
  },
  'cotia-sp': {
    intro:
      'Cotia está no raio presencial do Montinho, com atendimento em casa, em condomínio ou na Arena 18, além do modelo híbrido. Estes são resultados de alunos dele, todos de emagrecimento: cada número é de uma pessoa, não uma promessa.',
    destaque: 2,
  },
  'carapicuiba-sp': {
    intro:
      'Para quem treina em Carapicuíba, o Montinho Personal atende presencialmente em casa, no condomínio ou na Arena 18. Veja transformações de alunos dele — todas de emagrecimento, cada uma no ritmo de quem a fez.',
    destaque: 3,
  },
  'osasco-sp': {
    intro:
      'Osasco está dentro do raio de atendimento presencial do Montinho: em casa, em condomínios ou na Arena 18. As transformações abaixo são de alunos dele, todas de emagrecimento, com fotos reais e os números de cada acompanhamento.',
    destaque: 0,
  },
  'jandira-sp': {
    intro:
      'Jandira, vizinha de Barueri, entra no atendimento presencial do Montinho Personal — em casa, no condomínio ou na Arena 18. Aqui estão resultados de alunos dele, todos de emagrecimento.',
    destaque: 1,
  },
  'itapevi-sp': {
    intro:
      'Em Itapevi, o acompanhamento com o Montinho pode ser presencial — em casa, no condomínio ou na Arena 18 — ou no modelo híbrido, com parte online. As transformações abaixo são de alunos dele, todas de emagrecimento.',
    destaque: 2,
  },
};
