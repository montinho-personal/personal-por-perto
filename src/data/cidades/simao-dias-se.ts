import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'simao-dias-se',
  nome: 'Simão Dias',
  uf: 'SE',
  estado: 'Sergipe',
  estadoSlug: 'sergipe',
  regiao: 'Nordeste',
  gentilico: 'simão-diense',
  tipo: 'cidade',

  populacao: 42578,
  populacaoAno: 2022,

  resumoEconomico:
    'No centro-sul sergipano, às margens do rio Caiçá, Simão Dias é conhecida como a "Princesinha do Sertão" e leva o nome do vaqueiro que abriu essas terras. A economia é agrícola de ponta a ponta: o milho é o carro-chefe, a ponto de ter ganhado na região o apelido de "ouro do sertão", acompanhado de mandioca, feijão, laranja e maracujá, mais pecuária de bovinos, ovinos, suínos e equinos, avicultura e mineração. O conjunto urbano harmonioso da sede contrasta com a caatinga arbórea-arbustiva do entorno.',

  mercado:
    'O mercado formal de treino é enxuto e concentrado no centro, com o perfil de cidade agrícola de porte médio: comerciantes, servidores, professores e produtores rurais. Boa parte da população já tem uma jornada física pesada na lavoura e na lida com o gado — o que muda a conversa, porque o treino aqui raramente precisa somar esforço, e quase sempre precisa organizar o que já existe. A 106 km de Aracaju, o acompanhamento online é o formato que alcança quem não vai à capital.',

  bairrosNobres: ['Centro', 'Entorno da Matriz', 'Loteamentos da saída para Lagarto', 'Bairro Bom Jesus'],
  bairrosPopulares: ['Povoados da zona rural', 'Assentamentos do entorno', 'Bairros da periferia da sede', 'Comunidades do Caiçá'],

  parques: [
    {
      nome: 'Praças e o conjunto urbano da sede',
      descricao:
        'O centro harmonioso da cidade é o circuito natural de caminhada: quarteirões planos, sombra e o movimento do fim de tarde, quando o sol do sertão finalmente cede.',
    },
    {
      nome: 'Margens do rio Caiçá',
      descricao:
        'O rio que corta o município dá o traçado dos percursos abertos de caminhada e pedal no entorno da sede.',
    },
    {
      nome: 'Estradas e vicinais da caatinga',
      descricao:
        'As vias que ligam a sede aos povoados rendem quilômetros de terreno aberto para corrida e bicicleta nas primeiras horas do dia, com a vegetação de caatinga como paisagem.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária; o pedal usa as ruas do centro e as estradas vicinais que ligam a sede aos povoados.',

  clima:
    'Seco e subúmido, de transição entre o agreste e o sertão, com vegetação predominante de caatinga arbórea-arbustiva. O verão é quente e seco; o inverno surpreende para os padrões de Sergipe, com mínimas que chegam à faixa de 14 °C a 9,5 °C.',
  climaTreino:
    'Duas estações, duas lógicas. No calor, a regra é a de todo semiárido: amanhecer e início da noite ao ar livre, hidratação começando antes da sessão, meio do dia em ambiente coberto. No inverno, o problema se inverte — as mínimas de uma dígito exigem aquecimento mais longo antes do treino, sobretudo para quem já tem queixa em joelho ou ombro.',

  mobilidade:
    'Simão Dias fica a cerca de 106 km de Aracaju, no centro-sul do estado, e se conecta por rodovia a Lagarto e Tobias Barreto, os polos regionais mais próximos. Dentro do município, a sede se liga aos povoados por estradas vicinais, e o deslocamento até a capital é viagem, não rotina diária.',

  corridas: [
    {
      nome: 'Festejos juninos de Simão Dias',
      descricao:
        'Sergipe leva o título de País do Forró e estende os festejos por cerca de 60 dias em todos os 75 municípios; em Simão Dias, o São João é o grande movimento do calendário, com meses de ensaio de quadrilha que são, na prática, temporada de condicionamento.',
    },
    {
      nome: 'Provas e caminhadas do calendário municipal',
      descricao:
        'A cena de corrida de rua na cidade é jovem e ligada a datas do município e a ações de saúde, com o centro como percurso natural de largada.',
    },
  ],
  culturaEsportiva:
    'O corpo simão-diense se move primeiro no trabalho: lavoura de milho, lida com o gado, jornada em pé. Em cima disso vem o futebol amador, paixão do interior sergipano, a caminhada no centro ao entardecer e os meses de ensaio de quadrilha junina, que exigem fôlego de verdade e quase ninguém trata como treino — mas é.',
  academias:
    'A oferta formal é pequena e concentrada no centro, com musculação e funcional de custo acessível; fora da sede, o treino acontece em casa, ao ar livre ou a distância.',

  destaquesFitness: [
    'Público de trabalho físico pesado, em que o treino serve para organizar carga, não para somar cansaço.',
    'Inverno com mínimas na faixa de 9,5 °C a 14 °C — raro em Sergipe e relevante para o aquecimento.',
    'Estradas da caatinga como pista aberta nas primeiras horas do dia.',
    'Temporada junina: meses de ensaio de quadrilha que funcionam como condicionamento coletivo.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 95,
    mensalMin: 220,
    mensalMax: 550,
    onlineMin: 110,
    onlineMax: 310,
  },

  conclusao:
    'Simão Dias treina antes de treinar: quem trabalha na roça e na lida com o gado chega ao fim do dia com a conta de esforço já aberta. O papel de um bom acompanhamento aqui é menos somar e mais organizar — carga, descanso e horário —, para que o treino devolva disposição em vez de cobrar mais dela. Presencial no centro, online para quem está nos povoados.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Simão Dias?',
      resposta:
        'Nas academias do centro, que são a base da cidade, em casa e ao ar livre nas praças e no conjunto urbano da sede, onde a caminhada do fim de tarde é hábito. Para quem mora nos povoados ou nas comunidades do Caiçá, o acompanhamento online resolve a distância: o plano vai pelo celular e o ajuste acontece sem depender de estrada de terra.',
    },
    {
      pergunta: 'Quem trabalha na roça precisa treinar do mesmo jeito que todo mundo?',
      resposta:
        'Não. Quem passa o dia na lavoura ou na lida com o gado já chega com uma conta de fadiga aberta, e repetir o mesmo padrão de esforço no fim do dia só aprofunda o buraco. O ajuste costuma ir na direção contrária do senso comum: menos volume, mais qualidade de execução, atenção a coluna, ombro e quadril, e descanso tratado como parte do plano — não como o que sobra. Dor persistente não é assunto de treino: é conversa com médico ou fisioterapeuta antes de qualquer programação.',
    },
    {
      pergunta: 'O inverno de Simão Dias muda alguma coisa no treino?',
      resposta:
        'Muda o aquecimento. As mínimas por aqui chegam à faixa de 14 °C a 9,5 °C, o que é frio para os padrões de Sergipe e o bastante para que músculo e articulação precisem de mais tempo antes da primeira série pesada. Na prática: alongar o aquecimento, começar com carga menor nas primeiras séries e evitar sair do sofá direto para o esforço máximo. Quem já tem queixa de joelho ou ombro sente essa diferença primeiro, e é justamente quem mais se beneficia do ajuste.',
    },
  ],

  vizinhas: ['lagarto-se', 'tobias-barreto-se', 'itabaiana-se', 'aracaju-se'],

  fontes: [
    { nome: 'IBGE Cidades — Simão Dias', url: 'https://cidades.ibge.gov.br/brasil/se/simao-dias/panorama' },
    { nome: 'Prefeitura de Simão Dias', url: 'https://simaodias.se.gov.br/' },
    { nome: 'Emdagro — Informações Básicas Municipais', url: 'https://emdagro.se.gov.br/' },
  ],
  atualizadoEm: '2026-09-11',
};
