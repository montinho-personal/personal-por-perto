import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'marilia-sp',
  nome: 'Marília',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'mariliense',
  tipo: 'cidade',

  populacao: 237627,
  populacaoAno: 2022,
  idhm: 0.798,
  idhmClasse: 'alto',
  altitudeM: 675,

  resumoEconomico:
    'Conhecida como a "Capital Nacional do Alimento", Marília tem forte polo industrial alimentício (biscoitos, balas e doces) que confirma sua vocação no oeste paulista. Situada entre os rios Tietê e Paranapanema, é referência regional em serviços, indústria e educação.',

  mercado:
    'Cidade de porte médio com classe média consolidada, Marília tem forte cultura de caminhada e corrida ao ar livre, com rede ativa de academias e grupos de corrida apoiados pela Secretaria de Esportes — um cenário que sustenta a demanda por personal trainers.',

  bairrosNobres: ['Jardim Aquarius', 'Fragata', 'Avenida das Esmeraldas', 'Padre Nóbrega'],
  bairrosPopulares: ['Nova Marília', 'Costa e Silva', 'Castelo Branco', 'Chico Mendes'],

  parques: [
    {
      nome: 'Bosque Municipal Rangel Pietraroia',
      descricao:
        'Pista de caminhada e corrida arborizada e asfaltada, academia ao ar livre, lago e playground, de acesso gratuito.',
    },
    {
      nome: 'Pista de Cooper da Avenida das Esmeraldas',
      descricao:
        'Pista de caminhada e corrida de mais de 3 km, a mais frequentada da cidade e palco recorrente de corridas e caminhadas.',
    },
    {
      nome: 'Lago do Jardim Aquarius',
      descricao:
        'Entorno arborizado usado para caminhada e corrida, em uma das áreas mais valorizadas da cidade.',
    },
  ],
  ciclovias:
    'Há ciclovias na cidade e na região, incluindo trechos às margens da SP-294 entre Marília e Oriente; a extensão total da malha urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude, com média anual em torno de 20 °C, verão chuvoso e inverno seco e mais ameno, com a maior parte das chuvas concentrada no verão.',
  climaTreino:
    'O inverno seco favorece o treino ao ar livre o ano todo; no verão, o calor e as chuvas concentradas pedem hidratação e horários estratégicos (manhã ou fim de tarde).',

  mobilidade:
    'O acesso principal é pela SP-294 (Rodovia Comandante João Ribeiro de Barros), eixo do oeste paulista que liga a região rumo à divisa com o Mato Grosso do Sul, com o trecho Marília–Oriente recentemente duplicado.',

  corridas: [
    {
      nome: 'Maratona da Cidade de Marília',
      descricao:
        'Realizada em 2025, com provas de 5 km, 10 km, 21 km e 42 km, além de corrida kids.',
    },
    {
      nome: 'Corrida da Amizade',
      descricao:
        'Corrida pedestre tradicional da cidade, parte de um calendário esportivo ativo.',
    },
  ],
  culturaEsportiva:
    'Marília tem forte tradição em corrida e caminhada de rua, com eventos recorrentes na Avenida das Esmeraldas e grupos apoiados pela Secretaria de Esportes; atletas marilienses participam de provas estaduais.',
  academias:
    'A oferta reúne academias e estúdios, com grupos de corrida apoiados pelo poder público, complementada pelo Bosque Municipal e pela pista de cooper das Esmeraldas.',

  destaquesFitness: [
    'Bosque Municipal Rangel Pietraroia: pista asfaltada e academia ao ar livre gratuita.',
    'Avenida das Esmeraldas: pista de cooper de mais de 3 km, hub de corrida da cidade.',
    'Inverno seco e ameno como ampla janela para treino ao ar livre.',
    'Eventos próprios (Maratona da Cidade, Corrida da Amizade) que movimentam o público corredor.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 170,
    mensalMin: 360,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Capital do Alimento e polo do oeste paulista, Marília tem clima de altitude favorável e cultura de corrida marcante. Um personal trainer ajuda a aproveitar o Bosque Municipal e a pista das Esmeraldas com método, ajustando o treino ao calor do verão.',

  vizinhas: ['bauru-sp', 'presidente-prudente-sp'],

  capaArte: {
    src: '/capas-cidade/marilia-sp.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em Marília (SP) em arte quadrada com o Zoológico Municipal, o coreto da Praça Marechal Deodoro e o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Marília: foco, disciplina e resultados com acompanhamento profissional no centro-oeste paulista.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Marília', url: 'https://cidades.ibge.gov.br/brasil/sp/marilia/panorama' },
    { nome: 'Prefeitura de Marília', url: 'https://www.marilia.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-25',
};
