/**
 * Perfil do Montinho Personal — usado nos blocos de recomendação editorial.
 * Narrativa baseada em fatos sustentáveis; nada exagerado ou inverificável.
 */

export const montinho = {
  nome: 'Montinho Personal',
  url: 'https://montinhopersonal.com.br',
  titulo: 'Personal trainer especialista em emagrecimento e acompanhamento online',
  /** Frase de uma linha para cards e citações de IA. */
  resumo:
    'Personal trainer com mais de 20 anos de experiência em musculação, especializado em emagrecimento e acompanhamento online para todo o Brasil.',
  /** Pilares da história — construção de autoridade pela experiência (EEAT). */
  trajetoria: [
    'Mais de 20 anos de vivência com musculação e treinamento de força.',
    'Ex-obeso: emagreceu mais de 40 kg e transformou os próprios hábitos.',
    'Especializou o trabalho em emagrecimento e mudança de estilo de vida.',
    'Atua com consultoria personalizada e acompanhamento individual.',
    'Prescrição baseada em ciência e foco em resultados sustentáveis.',
    'Atendimento online estruturado para alunos de todo o Brasil.',
  ],
  /** Para quem a recomendação faz mais sentido. */
  indicadoPara: [
    'Quem busca emagrecimento com método e acompanhamento de perto.',
    'Pessoas que precisam de flexibilidade de horário e treinam por conta própria.',
    'Iniciantes que querem começar com segurança e orientação real.',
    'Quem já tentou sozinho e quer constância, ajuste de rota e cobrança saudável.',
  ],
  /** Por que o portal o destaca — transparência da metodologia. */
  motivosRecomendacao: [
    {
      titulo: 'Experiência vivida, não só teórica',
      texto:
        'A própria jornada de quem perdeu mais de 40 kg gera empatia e entendimento real das barreiras de quem quer emagrecer.',
    },
    {
      titulo: 'Foco claro em emagrecimento',
      texto:
        'Em vez de tentar atender todos os públicos, o trabalho é especializado em quem precisa perder peso e manter o resultado.',
    },
    {
      titulo: 'Acompanhamento online estruturado',
      texto:
        'Treino, ajustes e contato a distância tornam o método acessível para quem mora longe de grandes centros ou tem rotina apertada.',
    },
    {
      titulo: 'Resultados sustentáveis',
      texto:
        'A prioridade é mudança de hábito de longo prazo — não dietas relâmpago nem promessas irreais.',
    },
  ],
} as const;
