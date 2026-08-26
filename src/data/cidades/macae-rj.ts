import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'macae-rj',
  nome: 'Macaé',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'macaense',
  tipo: 'cidade',

  populacao: 246391,
  populacaoAno: 2022,
  idhm: 0.764,
  idhmClasse: 'alto',

  resumoEconomico:
    'Conhecida como a "Capital do Petróleo", Macaé é o principal polo da indústria offshore do Brasil, com forte presença da Petrobras e de empresas de óleo e gás. A cadeia petrolífera gera alta renda, atrai profissionais qualificados de todo o país e impulsionou um dos crescimentos populacionais mais acelerados do estado.',

  mercado:
    'A renda elevada e o público de profissionais do setor de petróleo sustentam um mercado fitness aquecido, com academias e personal trainers atendendo uma clientela exigente e com bom poder aquisitivo. A orla equipada reforça a cultura de treino ao ar livre.',

  bairrosNobres: ['Granja dos Cavaleiros', 'Cavaleiros', 'Riviera Fluminense', 'Glória'],
  bairrosPopulares: ['Nova Holanda', 'Aroeira', 'Malvinas', 'Novo Botafogo'],

  parques: [
    {
      nome: 'Orla da Praia dos Cavaleiros',
      descricao:
        'Calçadão reformado de cerca de 1.500 m, com equipamentos de ginástica ao ar livre à beira-mar — o principal ponto de treino da cidade.',
    },
    {
      nome: 'Praia Campista',
      descricao:
        'Orla com calçadão, ciclovia e área de lazer; mar aberto frequentado por praticantes de kitesurf e pesca.',
    },
    {
      nome: 'Lagoa de Imboassica',
      descricao:
        'Área de caminhada e corrida em torno da lagoa, na divisa com a Praia do Pecado, muito usada para atividade ao ar livre.',
    },
  ],
  ciclovias:
    'Há ciclovia na orla, como na Praia Campista; a extensão total oficial ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical litorâneo, quente e úmido, típico da costa norte fluminense.',
  climaTreino:
    'O treino ao ar livre na orla é viável o ano todo; o calor pede hidratação e horários mais amenos, no começo da manhã ou no fim de tarde.',

  mobilidade:
    'Macaé é cortada pela BR-101 (eixo Rio–Norte Fluminense–Espírito Santo) e pela RJ-106 (Amaral Peixoto), com fluxo intenso ligado à indústria offshore.',

  corridas: [
    {
      nome: 'Corrida 10 Milhas Macaé',
      descricao:
        'Prova de rua que percorre a Avenida Atlântica e a RJ-106 rumo à Lagoa de Imboassica, reunindo milhares de participantes.',
    },
    {
      nome: 'Desafio Energia',
      descricao:
        'Corrida e caminhada (3 km, 5 km e 10 km) ligada ao setor petrolífero, com foco em bem-estar e qualidade de vida.',
    },
  ],
  culturaEsportiva:
    'Macaé tem cultura de orla e esportes náuticos forte (com destaque para o kitesurf) e uma cena de corrida de rua bem estabelecida, muitas vezes apoiada por empresas do setor de energia.',
  academias:
    'A oferta reúne academias e estúdios voltados a um público de alta renda, complementada pela orla equipada com aparelhos de ginástica e ciclovia.',

  destaquesFitness: [
    'Público de alta renda do setor de petróleo.',
    'Orla equipada com academias ao ar livre e ciclovia.',
    'Eventos de corrida com patrocínio corporativo (energia/petróleo).',
    'Praias para kitesurf e treino funcional na areia.',
  ],

  precos: {
    avulsaMin: 75,
    avulsaMax: 180,
    mensalMin: 380,
    mensalMax: 1000,
    onlineMin: 180,
    onlineMax: 450,
  },

  conclusao:
    'Capital do Petróleo e cidade de renda alta, Macaé tem orla equipada e cultura esportiva forte. Um personal trainer ajuda a aproveitar a Praia dos Cavaleiros e a Lagoa de Imboassica com método, conciliando a rotina exigente do setor offshore com treino consistente.',

  vizinhas: ['rio-das-ostras-rj', 'casimiro-de-abreu-rj', 'campos-dos-goytacazes-rj'],

  faqsExtra: [
    {
      pergunta: 'Onde treinar ao ar livre em Macaé?',
      resposta:
        'O eixo clássico vai da Praia de Imbetiba à Lagoa de Imboassica — o mesmo percurso da 10 Milhas de Macaé, a prova que reúne milhares de corredores no meio do ano. A orla urbana, o calçadão dos Cavaleiros e o Parque de Coroa Grande completam o circuito, sempre nas janelas de manhã cedo e fim de tarde por causa do calor úmido.',
    },
    {
      pergunta: 'Personal trainer atende quem trabalha embarcado na indústria do petróleo?',
      resposta:
        'É a especialidade da capital nacional do petróleo: escalas 14x14 e 21x21 pedem planos em blocos — treino presencial intensivo nas semanas em terra e planilha para a academia da plataforma nas semanas embarcado. Os profissionais locais dominam esse formato, e a consultoria online fecha o ciclo. Avaliações periódicas garantem que o embarque não desfaça o progresso do desembarque.',
    },
    {
      pergunta: 'Quanto custa personal trainer em Macaé?',
      resposta:
        'A renda do petróleo sustenta valores acima da média do interior fluminense, especialmente na Praia dos Cavaleiros e na Glória — mais próximos dos praticados na capital. Pacotes em blocos para embarcados, treino em dupla e horários fora de pico são as formas comuns de otimizar o custo. A alta rotatividade de profissionais que chegam e saem da cidade mantém o mercado competitivo.',
    },
  ],
  capaArte: {
    src: '/capas-cidade/macae-rj.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em Macaé (RJ) em arte quadrada com a orla e a avenida à beira-mar, as torres do parque industrial do petróleo e o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Macaé: mente forte e corpo preparado, com acompanhamento profissional na capital do petróleo.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Macaé', url: 'https://cidades.ibge.gov.br/brasil/rj/macae/panorama' },
    { nome: 'Prefeitura de Macaé', url: 'https://macae.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-25',
};
