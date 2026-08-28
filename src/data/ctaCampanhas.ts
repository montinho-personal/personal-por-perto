/**
 * Biblioteca de campanhas de CTA.
 *
 * Cada campanha é um "próximo passo" possível. O motor escolhe uma; este
 * arquivo define o que ela diz e para onde leva. Trocar copy, destino ou
 * nível de uma campanha muda o site inteiro sem tocar em nenhuma página.
 *
 * Três níveis de compromisso, do mais leve ao mais direto:
 *   educacional — continua a leitura, não pede nada;
 *   diagnostico — leva a uma ferramenta que entrega valor antes de vender;
 *   comercial   — apresenta o serviço do Montinho.
 *
 * Regra de ouro do funil: quando existir ferramenta relevante, prefira
 * artigo -> ferramenta -> resultado -> Montinho, em vez de artigo -> venda.
 */
import type { Feature } from './features';

export type NivelCta = 'educacional' | 'diagnostico' | 'comercial';

/** Como o cartão é renderizado. */
export type VarianteCta = 'subtle' | 'standard' | 'featured' | 'local' | 'endArticle';

/** Quem desenha o bloco: cartão próprio ou a caixa de WhatsApp existente. */
export type RenderCta = 'card' | 'whatsapp';

export interface Campanha {
  id: string;
  nivel: NivelCta;
  render: RenderCta;
  /** Ferramenta necessária; sem a flag ligada, o motor descarta a campanha. */
  requer?: Feature;
  /** Rótulo pequeno acima do título (ex.: "Seu próximo passo"). */
  eyebrow: string;
  /** Título — pode ser função para usar a cidade sem virar template. */
  titulo: string | ((ctx: CampanhaCtx) => string);
  texto: string | ((ctx: CampanhaCtx) => string);
  /** Texto do botão principal. Verbo na primeira pessoa converte melhor. */
  rotulo: string;
  /** Destino interno (com barra final) ou 'whatsapp' / 'montinho'. */
  destino: string;
  /** Microcopy de redução de fricção — só quando for verdade. */
  microcopy?: string;
  secundario?: { rotulo: string; destino: string };
  /** Tema da caixa de WhatsApp quando render === 'whatsapp'. */
  temaWhats?: 'cidade' | 'emagrecimento' | 'hipertrofia' | 'iniciantes' | 'dores' | 'alimentacao' | 'geral';
}

export interface CampanhaCtx {
  cidadeNome?: string;
  /** Locução já flexionada: "em Campinas", "no Rio de Janeiro". */
  localidade?: string;
}

const FERRAMENTA_MATCH = '/ferramentas/encontre-seu-personal-ideal/';
const FERRAMENTA_PRECO = '/ferramentas/calculadora-preco-personal/';
const FERRAMENTA_AUDITORIA = '/ferramentas/meu-treino-faz-sentido/';
const FERRAMENTA_CONSTANCIA = '/ferramentas/diagnostico-da-constancia/';

export const campanhas: Record<string, Campanha> = {
  /* ---------------------------- DIAGNÓSTICO ---------------------------- */

  personalMatch: {
    id: 'personalMatch',
    nivel: 'diagnostico',
    render: 'card',
    requer: 'personalMatch',
    eyebrow: 'Seu próximo passo',
    titulo: 'Não sabe que tipo de acompanhamento combina com você?',
    texto:
      'Responda algumas perguntas sobre seu objetivo, sua experiência e os dias que você realmente tem — e receba uma recomendação de formato: presencial, online ou híbrido.',
    rotulo: 'Encontrar meu personal ideal',
    destino: FERRAMENTA_MATCH,
    microcopy: 'Leva cerca de 1 minuto. Você vê o resultado antes de falar com alguém.',
  },

  rotinaTreino: {
    id: 'rotinaTreino',
    nivel: 'diagnostico',
    render: 'card',
    requer: 'rotinaTreino',
    eyebrow: 'Seu próximo passo',
    titulo: 'Quantos dias por semana você consegue treinar?',
    texto:
      'Descubra uma estrutura de treino baseada no tempo que você realmente tem, e não na semana ideal que quase ninguém cumpre.',
    rotulo: 'Montar treino para minha rotina',
    destino: '/ferramentas/treino-para-minha-rotina/',
    microcopy: 'Leva cerca de 1 minuto.',
  },

  constanciaDiagnostico: {
    id: 'constanciaDiagnostico',
    nivel: 'diagnostico',
    render: 'card',
    requer: 'diagnosticoConstancia',
    eyebrow: 'Seu próximo passo',
    titulo: 'Começar de novo é fácil. O difícil é não parar na terceira semana',
    texto:
      'Quem começa e para raramente tem problema de vontade: costuma ter um plano que pede mais dias, mais tempo ou mais deslocamento do que a semana real entrega. Dá para descobrir qual é o seu gargalo.',
    rotulo: 'Descobrir meu principal gargalo',
    destino: FERRAMENTA_CONSTANCIA,
    microcopy: 'Cerca de 1 minuto. Sem cadastro para ver o resultado.',
  },

  emagrecimentoEstrategia: {
    id: 'emagrecimentoEstrategia',
    nivel: 'diagnostico',
    render: 'card',
    requer: 'personalMatch',
    eyebrow: 'Seu próximo passo',
    titulo: 'Saber o que fazer é diferente de conseguir manter',
    texto:
      'Se o seu desafio maior é transformar informação em uma rotina que você consiga repetir semana após semana, o formato de acompanhamento faz mais diferença do que a escolha dos exercícios.',
    rotulo: 'Descobrir o que faz sentido para mim',
    destino: FERRAMENTA_MATCH,
    microcopy: 'Leva cerca de 1 minuto. Sem cadastro para ver o resultado.',
  },

  hipertrofiaEstrutura: {
    id: 'hipertrofiaEstrutura',
    nivel: 'diagnostico',
    render: 'card',
    // Quem lê sobre estrutura de hipertrofia quase sempre já treina — e a
    // pergunta prática costuma ser sobre o próprio programa, não sobre
    // contratar alguém. Por isso o destino aqui é a auditoria.
    requer: 'auditoriaTreino',
    eyebrow: 'Seu próximo passo',
    titulo: 'Treinar mais não significa necessariamente progredir mais',
    texto:
      'Volume, frequência e progressão precisam conversar entre si dentro da sua semana. Vale conferir se o treino que você já faz está distribuído de forma coerente com o seu objetivo.',
    rotulo: 'Analisar meu treino',
    destino: FERRAMENTA_AUDITORIA,
    microcopy: 'Cerca de 2 minutos. Sem cadastro para ver a análise.',
  },

  execucaoProximoPasso: {
    id: 'execucaoProximoPasso',
    nivel: 'diagnostico',
    render: 'card',
    requer: 'personalMatch',
    eyebrow: 'Depois da execução',
    titulo: 'Saber fazer o exercício é só uma parte',
    texto:
      'Carga, volume, frequência, progressão e a escolha dos exercícios também precisam fazer sentido dentro do seu treino — e isso depende da sua rotina, não do exercício isolado.',
    rotulo: 'Ver como estruturar meu treino',
    destino: FERRAMENTA_MATCH,
    microcopy: 'Leva cerca de 1 minuto.',
  },

  inicianteComecar: {
    id: 'inicianteComecar',
    nivel: 'diagnostico',
    render: 'card',
    requer: 'personalMatch',
    eyebrow: 'Seu próximo passo',
    titulo: 'Não sabe por onde começar?',
    texto:
      'Você não precisa treinar todos os dias nem decorar dezenas de exercícios. Precisa de uma estrutura simples que caiba na sua semana — e de alguém que ajude no começo, se fizer sentido para você.',
    rotulo: 'Descobrir uma estrutura para começar',
    destino: FERRAMENTA_MATCH,
    microcopy: 'Leva cerca de 1 minuto. Sem cadastro.',
  },

  precoComparacao: {
    id: 'precoComparacao',
    nivel: 'diagnostico',
    render: 'card',
    requer: 'calculadoraPreco',
    eyebrow: 'Antes de comparar preço',
    titulo: 'Quanto custa um personal na sua cidade?',
    texto:
      'A calculadora cruza cidade, formato e frequência e mostra a faixa de referência por sessão e por mês — com a conta aberta e a procedência do dado declarada.',
    rotulo: 'Calcular o preço na minha cidade',
    destino: FERRAMENTA_PRECO,
    microcopy: 'Resultado na hora, sem cadastro.',
    secundario: { rotulo: 'Descobrir qual formato combina comigo', destino: FERRAMENTA_MATCH },
  },

  farmacologicoMassa: {
    id: 'farmacologicoMassa',
    nivel: 'diagnostico',
    render: 'card',
    requer: 'personalMatch',
    eyebrow: 'Seu próximo passo',
    titulo: 'Perder peso rápido cobra um preço em massa muscular',
    texto:
      'Quando o emagrecimento é acelerado, treino de força e acompanhamento deixam de ser detalhe e passam a ser o que preserva músculo pelo caminho. O formato certo depende da sua rotina.',
    rotulo: 'Descobrir o acompanhamento que faz sentido',
    destino: FERRAMENTA_MATCH,
    microcopy: 'Orientação sobre treino. Questões de medicação são com o seu médico.',
  },

  /* ---------------------------- EDUCACIONAL ---------------------------- */

  retomadaSegura: {
    id: 'retomadaSegura',
    nivel: 'educacional',
    render: 'card',
    eyebrow: 'Se você está voltando',
    titulo: 'Voltando ao treino depois de uma limitação?',
    texto:
      'Um planejamento individual consegue considerar suas limitações, seu histórico e o ritmo possível de retomada. A liberação para treinar, no entanto, é sempre do seu médico ou fisioterapeuta.',
    rotulo: 'Ver como funciona um planejamento individual',
    destino: '/guias/como-escolher-personal-trainer/',
  },

  conteudoRelacionado: {
    id: 'conteudoRelacionado',
    nivel: 'educacional',
    render: 'card',
    eyebrow: 'Continue por aqui',
    titulo: 'Quer entender melhor o que procurar em um profissional?',
    texto:
      'O guia de contratação reúne os critérios objetivos para avaliar um personal antes de fechar qualquer pacote.',
    rotulo: 'Ver o guia de como escolher',
    destino: '/guias/como-escolher-personal-trainer/',
  },

  /* ----------------------------- COMERCIAL ----------------------------- */

  localPresencial: {
    id: 'localPresencial',
    nivel: 'comercial',
    render: 'card',
    eyebrow: 'Atendimento na sua região',
    titulo: (c) => `Procurando acompanhamento presencial ${c.localidade ?? `em ${c.cidadeNome}`}?`,
    texto:
      'O Montinho atende presencialmente nesta região, com treino planejado para o seu objetivo, a sua rotina e a academia onde você treina. Se preferir, o acompanhamento online também está disponível.',
    rotulo: 'Conhecer o atendimento presencial',
    destino: 'whatsapp',
    microcopy: 'Abre no WhatsApp, com a mensagem já escrita. Sem compromisso.',
    secundario: { rotulo: 'Descobrir qual acompanhamento combina comigo', destino: FERRAMENTA_MATCH },
  },

  /**
   * Cobertura condicional (capital, deslocamento maior): o presencial existe,
   * mas depende de combinar região e horário. Prometer disponibilidade total
   * aqui seria mentira — e a primeira conversa começaria com uma frustração.
   */
  localPresencialCondicional: {
    id: 'localPresencialCondicional',
    nivel: 'comercial',
    render: 'card',
    eyebrow: 'Atendimento na sua região',
    titulo: (c) => `Procurando acompanhamento ${c.localidade ?? `em ${c.cidadeNome}`}?`,
    texto:
      'A base de atendimento presencial do Montinho é Alphaville, em Barueri. Daqui, o presencial na sua região é possível dependendo do bairro e do horário — vale combinar antes. O acompanhamento online, esse funciona de qualquer lugar.',
    rotulo: 'Verificar disponibilidade na minha região',
    destino: 'whatsapp',
    microcopy: 'Abre no WhatsApp, com a mensagem já escrita. Sem compromisso.',
    secundario: { rotulo: 'Descobrir qual acompanhamento combina comigo', destino: FERRAMENTA_MATCH },
  },

  onlineCoaching: {
    id: 'onlineCoaching',
    nivel: 'comercial',
    render: 'card',
    eyebrow: 'Sem depender da sua cidade',
    titulo: 'Você não precisa morar perto para ter acompanhamento',
    texto: (c) =>
      c.cidadeNome
        ? `Mora ${c.localidade ?? `em ${c.cidadeNome}`} e prefere não depender de agenda presencial? Com acompanhamento online, o treino é planejado e ajustado à sua rotina mesmo a distância.`
        : 'Com acompanhamento online, o treino é planejado para a sua rotina e ajustado ao longo do caminho, mesmo a distância.',
    rotulo: 'Entender como funciona o online',
    destino: 'whatsapp',
    microcopy: 'Abre no WhatsApp. Sem compromisso.',
    secundario: { rotulo: 'Encontrar meu personal ideal', destino: FERRAMENTA_MATCH },
  },

  /**
   * Caixa de WhatsApp completa (foto, bullets). Reservada às páginas de maior
   * intenção comercial — nas demais, o cartão contextual comunica melhor sem
   * transformar o portal no site pessoal do Montinho.
   */
  whatsappConsulta: {
    id: 'whatsappConsulta',
    nivel: 'comercial',
    render: 'whatsapp',
    eyebrow: 'Acompanhamento',
    titulo: 'Falar com o Montinho',
    texto: '',
    rotulo: 'Falar no WhatsApp',
    destino: 'whatsapp',
    temaWhats: 'geral',
  },
};

export type CampanhaId = keyof typeof campanhas;
