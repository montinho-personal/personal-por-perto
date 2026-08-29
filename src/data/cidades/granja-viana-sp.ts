import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'granja-viana-sp',
  nome: 'Granja Viana',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  tipo: 'regiao',
  cidadeMae: 'cotia-sp',
  contexto: 'Região entre Cotia, Carapicuíba, Jandira, Osasco e Embu das Artes',

  resumoEconomico:
    'A Granja Viana é uma das regiões de alto padrão mais conhecidas da zona oeste da Grande São Paulo — e uma das poucas que atravessam fronteiras municipais. A sede administrativa fica em Cotia, mas o território se estende também por Carapicuíba, Jandira, Osasco e Embu das Artes, o que explica por que o mesmo "bairro" aparece com endereços de municípios diferentes. O eixo é a Rodovia Raposo Tavares (SP-270), entre os quilômetros 21 e 25, onde se concentram os centros comerciais, os shoppings e o acesso aos condomínios fechados que definem o perfil da região: casas amplas, ruas arborizadas e uma população de renda alta que mistura executivos que trabalham na capital com quem trocou São Paulo por espaço e verde.',

  mercado:
    'Poucas regiões da Grande São Paulo têm um mercado de personal trainer tão consolidado quanto a Granja Viana — e tão concentrado em um formato só. O atendimento dominante é o personal que vai até o cliente: treina na academia do condomínio, na área de lazer ou dentro de casa. A lógica é simples e vale para quase todo morador: quem escolheu morar em condomínio fechado com estrutura própria não quer sair dele para treinar, e o trânsito da Raposo nos horários de pico reforça essa conta. Ao redor desse núcleo existe uma oferta indoor real, com redes no eixo da rodovia e estúdios boutique de treino personalizado, além de uma cultura ativa de corrida de rua. Para quem contrata, isso significa que a pergunta relevante raramente é "onde treinar", e sim "quem vem até aqui" — a Granja Viana está dentro do raio de atendimento presencial do Montinho Personal, o profissional destacado pelo portal, com base em Alphaville.',

  bairrosNobres: [
    'Jardim Passárgada',
    'São Camilo',
    'Jardim da Glória',
    'Chácara Santo Antônio',
  ],
  bairrosPopulares: ['Lageadinho', 'Jardim Torres de São José', 'Vila Santo Antônio'],

  parques: [
    {
      nome: 'Parque Teresa Maia',
      descricao:
        'O parque de referência da região, com cerca de 23 mil m²: academia ao ar livre, trilha, playground, lago e nascente, com iluminação e horário estendido. É o ponto onde o treino funcional ao ar livre acontece de fato na Granja Viana.',
    },
    {
      nome: 'Ruas e praças dos condomínios',
      descricao:
        'Boa parte do volume de corrida e caminhada da região não acontece em parque público, e sim dentro dos próprios condomínios fechados — ruas arborizadas, com pouco tráfego e segurança, que funcionam como circuito natural para trabalho aeróbio.',
    },
    {
      nome: 'Parque Cemucam',
      descricao:
        'Grande área verde de Cotia, a poucos minutos pelo eixo da Raposo, usada para caminhada e atividade ao ar livre quando se quer mais espaço do que o Teresa Maia oferece.',
    },
  ],
  ciclovias:
    'A região é servida pelo eixo da Raposo Tavares, onde está em implantação a ciclovia do projeto Nova Raposo. Enquanto ela não fica pronta, o pedal e a corrida de rua acontecem principalmente nas vias internas dos condomínios e nas estradas vicinais de menor movimento, no começo da manhã.',

  clima:
    'O clima é tropical de altitude, ameno, típico do planalto da zona oeste paulistana: verões chuvosos, invernos secos e amplitude térmica maior do que na capital por causa da cobertura vegetal e da altitude.',
  climaTreino:
    'A quantidade de área verde deixa as manhãs sensivelmente mais frias do que em São Paulo — o que é ótimo para correr e desconfortável para quem treina ao ar livre sem aquecimento adequado. O clima favorece o outdoor quase o ano inteiro, com as chuvas de fim de tarde no verão como principal motivo para ter um plano B coberto.',

  mobilidade:
    'O acesso é feito quase inteiramente por carro, pela Rodovia Raposo Tavares (SP-270), com ligação à Castello Branco (SP-280) pelo Rodoanel. Não há estação de trem na região, e a distância entre um condomínio e outro costuma ser grande demais para se resolver a pé. Essa dependência do carro é justamente o que torna o atendimento em domicílio o formato mais eficiente: economiza o deslocamento do morador, não do profissional.',

  corridas: [
    {
      nome: 'Track&Field Experience Running — Granja Viana',
      descricao:
        'Corrida de rua com percursos de 5 km e 10 km e largada na própria Granja Viana — a prova que melhor representa a cena de corrida amadora da região.',
    },
    {
      nome: 'Grupos de corrida dos condomínios',
      descricao:
        'Boa parte da cultura de corrida local se organiza em grupos internos dos residenciais, com treinos em horários fixos nas vias do próprio condomínio. É um canal comum de entrada para quem busca acompanhamento individual depois.',
    },
  ],
  culturaEsportiva:
    'A Granja Viana tem uma cultura de bem-estar consolidada, sustentada por alto poder aquisitivo, condomínios com academia e quadras, e uma comunidade ativa de corrida e ciclismo. Treinar com acompanhamento profissional faz parte da rotina de boa parte dos moradores, e o boca a boca dentro dos residenciais é o principal canal de indicação de personal trainers na região.',
  academias:
    'A oferta indoor se concentra no eixo da Raposo Tavares, entre os quilômetros 21 e 25, com redes de grande porte e estúdios boutique de treino personalizado. Ainda assim, uma parte relevante da demanda é atendida dentro dos próprios condomínios, na academia do residencial.',
  academiasProximas: [
    {
      nome: 'Smart Fit Granja Viana Km 21',
      detalhe: 'na Rodovia Raposo Tavares, 21350, no Lageadinho (Cotia)',
    },
    {
      nome: 'Smart Fit Granja Viana Km 25',
      detalhe: 'na Rua Mesopotâmia, 109, no Jardim Passárgada (Cotia)',
    },
    {
      nome: 'Smart Fit Granja Viana São Camilo',
      detalhe: 'unidade da região com endereço em Carapicuíba — exemplo de como a Granja Viana atravessa municípios',
    },
    {
      nome: 'Bluefit Granja Viana',
      detalhe: 'na Avenida São Camilo, 1066, em Cotia',
    },
    {
      nome: 'Academia ao ar livre do Parque Teresa Maia',
      detalhe: 'gratuita, junto à trilha e ao lago do parque',
    },
    {
      nome: 'Academias dos condomínios e estúdios boutique',
      detalhe: 'estrutura privada dos residenciais e casas de treino personalizado no eixo da Raposo',
    },
  ],
  academiasVerificadasEm: '2026-08-29',

  destaquesFitness: [
    'Atendimento em condomínio como formato dominante — a região foi desenhada em torno dele.',
    'Parque Teresa Maia com academia ao ar livre, trilha e lago para treino funcional.',
    'Cultura de corrida de rua consolidada, com prova própria (Track&Field Experience Running).',
    'Eixo da Raposo Tavares concentrando redes de academia entre os km 21 e 25.',
  ],

  precos: {
    avulsaMin: 100,
    avulsaMax: 220,
    mensalMin: 500,
    mensalMax: 1300,
    onlineMin: 200,
    onlineMax: 500,
  },

  conclusao:
    'Na Granja Viana, contratar um personal trainer é quase sempre levar o treino para dentro de casa ou do condomínio — com a privacidade e a flexibilidade de agenda que o público da região espera, e sem depender do trânsito da Raposo. A estrutura ajuda: parque com academia ao ar livre, ruas internas seguras para corrida, redes no eixo da rodovia e residenciais com academia própria. A região está dentro do raio de atendimento presencial do Montinho Personal, com base em Alphaville, que também atende no formato online.',

  faqsExtra: [
    {
      pergunta: 'A Granja Viana fica em Cotia ou em Carapicuíba?',
      resposta:
        'Nas duas — e em mais três. A sede administrativa da região é em Cotia, mas o território se estende também por Carapicuíba, Jandira, Osasco e Embu das Artes. É por isso que endereços da Granja Viana aparecem com municípios diferentes: a Smart Fit da São Camilo, por exemplo, tem endereço em Carapicuíba, enquanto as unidades do km 21 e do km 25 ficam em Cotia. Para quem contrata personal, isso não muda nada na prática — muda apenas o CEP.',
    },
    {
      pergunta: 'O personal trainer atende dentro dos condomínios da Granja Viana?',
      resposta:
        'Sim, e esse é o formato mais comum da região. O atendimento acontece na academia do próprio residencial, na área de lazer ou dentro de casa. Como a Granja Viana é uma região de condomínios fechados e deslocamento por carro, treinar sem sair de casa costuma ser o que mais economiza tempo — e é o que sustenta a rotina no longo prazo. Vale confirmar com antecedência as regras do condomínio para entrada de profissional externo, que variam bastante de um residencial para outro.',
    },
    {
      pergunta: 'Quanto custa um personal trainer na Granja Viana?',
      resposta:
        'A faixa da região fica entre R$ 100 e R$ 220 pela aula avulsa e entre R$ 500 e R$ 1.300 pelo pacote mensal com 2 a 3 sessões por semana — acima da média de Cotia como um todo, porque o atendimento em domicílio e em condomínio, dominante aqui, embute o deslocamento do profissional. O acompanhamento online fica entre R$ 200 e R$ 500 mensais. São faixas de referência editorial, não tabela: o valor final depende de frequência, duração e local.',
    },
    {
      pergunta: 'Dá para treinar ao ar livre na Granja Viana?',
      resposta:
        'Dá, e a região é privilegiada nisso. O Parque Teresa Maia tem academia ao ar livre, trilha e lago em cerca de 23 mil m², e as ruas internas dos condomínios — arborizadas, com pouco tráfego — funcionam como circuito natural de corrida e caminhada. O clima ameno de planalto favorece o outdoor quase o ano todo; as chuvas de fim de tarde no verão são o principal motivo para manter uma alternativa coberta.',
    },
    {
      pergunta: 'Quem tem dores ou limitações consegue treinar com acompanhamento na Granja Viana?',
      resposta:
        'Consegue. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas e já enfrentou dores comuns da musculação na própria trajetória. Com base em Alphaville, o atendimento presencial na Granja Viana pode ser combinado conforme agenda e local, além do acompanhamento online. O treino é individualizado e progressivo, com foco em segurança e sem promessa de cura — quadros clínicos pedem também acompanhamento de médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['cotia-sp', 'carapicuiba-sp', 'osasco-sp', 'barueri-sp'],

  fontes: [
    { nome: 'Prefeitura de Cotia', url: 'https://www.cotia.sp.gov.br/' },
    { nome: 'IBGE Cidades — Cotia', url: 'https://cidades.ibge.gov.br/brasil/sp/cotia/panorama' },
    { nome: 'Prefeitura de Carapicuíba', url: 'https://www.carapicuiba.sp.gov.br/' },
  ],
  atualizadoEm: '2026-08-29',
};
