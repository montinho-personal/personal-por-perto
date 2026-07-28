import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'aguas-claras-df',
  nome: 'Águas Claras',
  uf: 'DF',
  estado: 'Distrito Federal',
  estadoSlug: 'distrito-federal',
  regiao: 'Centro-Oeste',
  gentilico: 'aguasclarense',
  tipo: 'regiao',
  cidadeMae: 'brasilia-df',
  contexto: 'Distrito Federal',

  resumoEconomico:
    'Águas Claras é uma região administrativa do Distrito Federal marcada pela verticalização: planejada em torno do eixo do metrô, tornou-se um dos maiores adensamentos de prédios do Brasil. É um polo residencial de classe média-alta, com população majoritariamente de servidores públicos e profissionais de ensino superior, alta renda per capita e forte cultura de qualidade de vida — perfil que sustenta uma demanda consistente por serviços de saúde, bem-estar e treino físico.',

  mercado:
    'O mercado fitness em Águas Claras é alimentado pela densidade de moradores em condomínios verticais, muitos deles com academia, salão de ginástica e espaço de funcional dentro do próprio prédio. Isso favorece três frentes complementares: o personal que atende na academia do condomínio, o atendimento domiciliar entre prédios vizinhos e o treino ao ar livre no Parque Ecológico de Águas Claras. O público de média-alta renda valoriza acompanhamento personalizado e está disposto a pagar por estúdios boutique, assessorias de corrida e planos individuais.',

  bairrosNobres: ['Areal', 'Águas Claras Sul (vertical)', 'Águas Claras Norte'],
  bairrosPopulares: ['Arniqueiras', 'Setor Habitacional Arniqueiras'],

  parques: [
    {
      nome: 'Parque Ecológico de Águas Claras',
      descricao:
        'Principal área verde da região, com cerca de 113 hectares e lagos formados pelo córrego que deu nome à cidade. Tem pista de caminhada pavimentada ao redor do lago, circuito completo de aproximadamente 6,5 km com trechos em aclive e um circuito de ciclismo de cerca de 3,5 km, além de bebedouros, banheiros e áreas sombreadas. É o grande ponto de treino gratuito ao ar livre dos moradores.',
    },
    {
      nome: 'Avenida das Araucárias',
      descricao:
        'Eixo central e mais movimentado de Águas Claras, com largos canteiros, calçadas e arborização que recebem caminhantes e corredores no início da manhã e no fim da tarde, concentrando também comércio, academias e estúdios.',
    },
  ],
  ciclovias:
    'Águas Claras é conectada à malha cicloviária do Distrito Federal, uma das maiores do país, com ciclovias e ciclofaixas ligando a região às áreas vizinhas e ao eixo do metrô — além do circuito de ciclismo dentro do Parque Ecológico.',

  clima:
    'O clima é típico do cerrado: tropical de altitude, com verão quente e chuvoso e inverno seco de maio a setembro, quando a umidade do ar cai a níveis muito baixos no Distrito Federal.',
  climaTreino:
    'O clima ameno permite treinar ao ar livre o ano todo, mas no auge da seca a baixa umidade exige cuidado redobrado: reforço de hidratação, atenção às vias respiratórias e preferência pelo início da manhã ou fim da tarde, evitando o sol forte do meio do dia.',

  mobilidade:
    'Águas Claras é uma das regiões mais bem servidas de metrô do DF: é atravessada pelo Metrô-DF com as estações Águas Claras, Arniqueiras e Concessionárias (Linhas Verde e Laranja), o que facilita o deslocamento de moradores e profissionais. A região é compacta e adensada, com distâncias curtas a pé entre prédios — o que valoriza tanto o atendimento domiciliar quanto o treino no parque, próximo de casa.',

  corridas: [
    {
      nome: 'Treinos e provas de rua no eixo Águas Claras–Taguatinga',
      descricao:
        'A proximidade com o Parque Ecológico e as longas avenidas planas faz da região um ponto de encontro de grupos de corrida e assessorias, que aproveitam o circuito do parque e os eixos da cidade para treinos coletivos e preparação para provas do calendário do DF.',
    },
  ],
  culturaEsportiva:
    'Águas Claras tem cultura fitness forte e visível: muitos prédios com academia própria, grande oferta de estúdios e redes ao longo da Avenida das Araucárias, e moradores que usam o Parque Ecológico para caminhada, corrida e ciclismo. O perfil de alta renda e ensino superior se traduz em busca por acompanhamento profissional e constância nos treinos.',
  academias:
    'A oferta é densa para o tamanho da região: redes e estúdios boutique concentrados na Avenida das Araucárias e nas quadras centrais, somados às academias internas dos condomínios verticais, que ampliam o espaço de atuação do personal trainer.',

  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'seis unidades espalhadas pelo bairro, das Pitangueiras às Castanheiras' },
    { nome: 'Estúdios e boxes verticais', detalhe: 'funcional, cross e pilates na densidade dos eixos comerciais' },
    { nome: 'Parque Ecológico de Águas Claras', detalhe: 'pista de corrida e estrutura pública gratuita' },
  ],

  destaquesFitness: [
    'Bairro vertical e adensado: muitos prédios com academia própria, ideal para atendimento no condomínio.',
    'Parque Ecológico de Águas Claras: lago, pista de caminhada e circuito de cerca de 6,5 km para treino gratuito.',
    'Metrô-DF com três estações na região (Águas Claras, Arniqueiras, Concessionárias) facilita o deslocamento.',
    'Público de média-alta renda e alta escolaridade, disposto a investir em treino personalizado.',
    'Clima de cerrado: inverno seco exige reforço de hidratação no treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 190,
    mensalMin: 420,
    mensalMax: 1200,
    onlineMin: 180,
    onlineMax: 500,
  },

  conclusao:
    'Águas Claras combina densidade de moradores, alto poder aquisitivo e infraestrutura de sobra para treinar: academias no próprio prédio, o Parque Ecológico a poucos minutos e metrô para encurtar distâncias. Com um personal trainer alinhado ao seu objetivo, fica fácil manter a constância — seja na academia do condomínio, em casa ou no parque — mesmo no auge da seca do cerrado.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Águas Claras?',
      resposta:
        'O bairro mais vertical do DF tem treino em três camadas: o Parque Ecológico — pulmão local com pista de corrida —, a densidade rara de academias (só de Smart Fit são seis unidades, mais estúdios e boxes nos eixos comerciais) e as academias dos próprios condomínios, onde o personal atende sem o aluno sair do prédio: o formato que mais cresce entre executivos e famílias do bairro.',
    },
    {
      pergunta: 'Como treinar na seca de Águas Claras?',
      resposta:
        'De junho a setembro a umidade do DF despenca, e o treino precisa se adaptar: sessões ao ar livre no Parque Ecológico rendem mais no início da manhã, quando o ar ainda segura alguma umidade; hidratação vira protagonista o dia todo; e nos picos da seca a academia climatizada assume o plano principal. A vantagem de Águas Claras é justamente a oferta indoor — com seis Smart Fit e dezenas de estúdios, o plano B fica a uma quadra de casa.',
    },
    {
      pergunta: 'Há acompanhamento em Águas Claras para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Águas Claras, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia do condomínio, estúdio, casa ou o parque), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['brasilia-df'],

  fontes: [
    {
      nome: 'Administração de Águas Claras — Governo do DF',
      url: 'https://www.aguasclaras.df.gov.br/',
    },
    {
      nome: 'Companhia do Metropolitano do Distrito Federal (Metrô-DF)',
      url: 'https://metro.df.gov.br/',
    },
    {
      nome: 'Codeplan — PDAD Águas Claras',
      url: 'https://www.codeplan.df.gov.br/',
    },
  ],
  atualizadoEm: '2026-07-28',
};
