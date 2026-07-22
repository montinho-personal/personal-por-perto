import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'belo-horizonte-mg',
  nome: 'Belo Horizonte',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'belo-horizontino',
  tipo: 'cidade',

  populacao: 2315560,
  populacaoAno: 2022,
  idhm: 0.81,
  idhmClasse: 'muito alto',
  altitudeM: 850,

  resumoEconomico:
    'Capital de Minas Gerais e uma das maiores economias do país, Belo Horizonte fez a transição de polo industrial para um grande centro de serviços e negócios. Comércio, serviços financeiros, setor imobiliário e administração pública formam a base de uma economia fortemente terciária. A cidade é planejada, arborizada e tem uma relação histórica com a Lagoa da Pampulha — patrimônio mundial e coração esportivo da capital.',

  mercado:
    'O mercado fitness de BH é robusto e maduro. A Smart Fit tem dezenas de unidades (Savassi, Centro, Gutierrez, Horto e shoppings) e a Bodytech marca presença no segmento premium. A cultura de musculação convive com forte adesão a CrossFit, yoga e pilates, e a corrida de rua na Pampulha é uma instituição local — o que sustenta uma grande demanda por personal trainers e assessorias.',

  bairrosNobres: ['Lourdes', 'Savassi', 'Belvedere', 'Funcionários'],
  bairrosPopulares: ['Sagrada Família', 'Palmeiras', 'Cidade Nova', 'Barro Preto'],

  parques: [
    {
      nome: 'Lagoa da Pampulha',
      descricao:
        'O principal point esportivo da cidade, com cerca de 18 km de perímetro e pista para corrida, caminhada e ciclismo. É onde a comunidade de corredores de BH se encontra.',
    },
    {
      nome: 'Parque Municipal Américo Renné Giannetti',
      descricao:
        'Cerca de 182 mil m² no Centro, com pista de caminhada, aparelhos de ginástica (academia ao ar livre) e quadras — um respiro verde para treinar no coração da cidade.',
    },
    {
      nome: 'Parque Ecológico da Pampulha',
      descricao:
        'Com pista de caminhada, quadras e amplas áreas verdes, complementa a estrutura esportiva do entorno da Lagoa.',
    },
  ],
  ciclovias:
    'Belo Horizonte tem uma rede de aproximadamente 90 km de ciclovias, ciclofaixas e ciclorrotas, em processo de melhor integração entre os trechos.',

  clima:
    'O clima é tropical de altitude, ameno: invernos secos com mínimas entre 13 °C e 15 °C e verões chuvosos com máximas perto de 30 °C. A cidade fica a cerca de 850 m de altitude.',
  climaTreino:
    'O inverno seco (de junho a setembro) é uma janela excelente para o treino ao ar livre. No verão, vale atenção às chuvas de fim de tarde e à hidratação nos dias mais quentes.',

  mobilidade:
    'A cidade conta com o BRT MOVE (implantado em 2014), com corredores nas avenidas Antônio Carlos, Cristiano Machado e Pedro I, transportando centenas de milhares de passageiros por dia, além de uma linha de metrô em processo de modernização. É cortada pelo Anel Rodoviário e por rodovias federais.',

  corridas: [
    {
      nome: 'Volta Internacional da Pampulha',
      descricao:
        'Uma das maiores e mais tradicionais provas de rua do Brasil: 18 km ao redor da Lagoa da Pampulha, no início de dezembro.',
    },
    {
      nome: 'Maratona Internacional de Belo Horizonte',
      descricao:
        'Principal evento de maratona e meia maratona da capital, parte de um calendário de corrida de rua muito ativo.',
    },
  ],
  culturaEsportiva:
    'BH é uma cidade futebolística por excelência (a rivalidade Atlético-MG x Cruzeiro move multidões, no Mineirão e na Arena MRV) e tem uma cultura de corrida de rua das mais fortes do país, simbolizada pela Volta da Pampulha. Treinar faz parte do estilo de vida do belo-horizontino.',
  academias:
    'A alta densidade de unidades da Smart Fit e a presença da Bodytech no segmento premium garantem oferta para todos os perfis, complementadas por boxes de CrossFit e estúdios de funcional, yoga e pilates espalhados pela cidade.',
  academiasProximas: [
    { nome: 'Bodytech', detalhe: 'unidades premium na Savassi, no Belvedere e no Ponteio' },
    { nome: 'Smart Fit', detalhe: 'dezenas de unidades — Savassi (R. Fernandes Tourinho), Centro, Gutierrez e shoppings' },
    { nome: 'Cia Athletica', detalhe: 'unidade no Belvedere, com atendimento a toda a família' },
    { nome: 'Academia ao ar livre do Parque Municipal', detalhe: 'gratuita, no coração do Centro' },
  ],

  destaquesFitness: [
    'Lagoa da Pampulha: 18 km contínuos para corrida e ciclismo, o hub a céu aberto da cidade.',
    'Alta densidade de academias (Smart Fit) e opção premium (Bodytech) — todos os perfis.',
    'Inverno seco e ameno, ideal para treino ao ar livre boa parte do ano.',
    'Calendário forte de corridas (Volta da Pampulha e Maratona de BH).',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 180,
    mensalMin: 400,
    mensalMax: 1100,
    onlineMin: 180,
    onlineMax: 470,
  },

  conclusao:
    'Belo Horizonte combina clima ameno, uma das melhores estruturas de corrida do país e um mercado fitness completo. Com um personal trainer, fica mais fácil aproveitar a Pampulha, as academias da Savassi e os parques da cidade com método e segurança — e manter o ritmo o ano inteiro.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Belo Horizonte?',
      resposta:
        'Os polos são claros: as academias da região Centro-Sul — Savassi, Lourdes e Funcionários concentram do baixo custo ao premium —, o Belvedere, onde o atendimento em casa e na academia do prédio é comum, e a Pampulha, que funciona como um clube a céu aberto para treinos de corrida e funcional. Nos bairros residenciais, o personal que atende em domicílio resolve a rotina de quem não quer atravessar a cidade no trânsito dos horários de pico.',
    },
    {
      pergunta: 'Qual a melhor época do ano para evoluir no treino em BH?',
      resposta:
        'O inverno seco, de junho a setembro, é a janela de ouro: temperaturas amenas, quase nenhuma chuva e condições perfeitas para somar treino ao ar livre na Pampulha ou nos parques à musculação. Mas o pulo do gato é o contrário do que a maioria faz — quem começa no inverno chega ao verão com base construída, em vez de correr atrás do resultado em dezembro. No verão chuvoso, o plano migra mais para a academia e mantém o ritmo.',
    },
    {
      pergunta: 'Há acompanhamento em Belo Horizonte para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação — incluindo os desconfortos que quase todo praticante enfrenta. Para BH, o formato é o acompanhamento online: treino adaptado à estrutura disponível, vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['uberlandia-mg', 'rio-de-janeiro-rj', 'vitoria-es', 'brasilia-df'],

  fontes: [
    { nome: 'IBGE Cidades — Belo Horizonte', url: 'https://cidades.ibge.gov.br/brasil/mg/belo-horizonte/panorama' },
    { nome: 'Prefeitura de Belo Horizonte', url: 'https://prefeitura.pbh.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  capaArte: {
    src: '/capas-cidade/belo-horizonte-mg.webp',
    alt:
      'Personal trainer em Belo Horizonte (MG) orientando aluna em treino de força ao ar livre, com a Igreja de São Francisco de Assis (Igrejinha da Pampulha) e a Lagoa da Pampulha ao fundo — Personal por Perto',
    legenda:
      'Treino personalizado em Belo Horizonte: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
  atualizadoEm: '2026-07-22',
};
