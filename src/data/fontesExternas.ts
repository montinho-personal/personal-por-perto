/**
 * Fontes externas de alta autoridade (EEAT). Usadas apenas onde aumentam a
 * credibilidade do conteúdo — nunca por link em si. Todas são entidades oficiais
 * ou reconhecidas. Links dofollow (sinais de confiança).
 */
export interface FonteExterna {
  chave: string;
  nome: string;
  url: string;
  /** Como apresentar o link no texto (contexto editorial). */
  contexto: string;
}

export const fontesExternas: Record<string, FonteExterna> = {
  oms: {
    chave: 'oms',
    nome: 'Organização Mundial da Saúde (OMS)',
    url: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity',
    contexto: 'diretrizes globais de atividade física para a saúde',
  },
  ministerioSaude: {
    chave: 'ministerioSaude',
    nome: 'Ministério da Saúde',
    url: 'https://www.gov.br/saude/pt-br',
    contexto: 'orientações oficiais de saúde e atividade física no Brasil',
  },
  acsm: {
    chave: 'acsm',
    nome: 'American College of Sports Medicine (ACSM)',
    url: 'https://www.acsm.org/',
    contexto: 'referência internacional em diretrizes de prescrição de exercício',
  },
  nsca: {
    chave: 'nsca',
    nome: 'National Strength and Conditioning Association (NSCA)',
    url: 'https://www.nsca.com/',
    contexto: 'referência em treinamento de força e condicionamento',
  },
  sbme: {
    chave: 'sbme',
    nome: 'Sociedade Brasileira de Medicina do Exercício e do Esporte',
    url: 'https://www.medicinadoesporte.org.br/',
    contexto: 'entidade médica de referência em exercício e esporte no Brasil',
  },
};
