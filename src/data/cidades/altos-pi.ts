import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'altos-pi',
  nome: 'Altos',
  uf: 'PI',
  estado: 'Piauí',
  estadoSlug: 'piaui',
  regiao: 'Nordeste',
  gentilico: 'altoense',
  tipo: 'cidade',

  populacao: 47453,
  populacaoAno: 2022,

  resumoEconomico:
    'Na Grande Teresina, a cerca de 40 km da capital, Altos combina o papel de cidade-dormitório com identidade própria — o futebol profissional do Altos, o "Jacarezão", projetou o nome do município no cenário nordestino. A economia se apoia no comércio, nos serviços e na agricultura familiar, com a proximidade da capital moldando a rotina de quem trabalha ou estuda em Teresina e vive o dia a dia altoense.',

  mercado:
    'O mercado de personal trainer em Altos é o da órbita metropolitana: quem trabalha em Teresina busca treino perto de casa, cedo ou no fim do dia, e as academias do Centro atendem essa demanda com bom custo-benefício. A caminhada nas praças e avenidas é hábito consolidado no fim de tarde, e o calor piauiense define as janelas — amanhecer e noite mandam no calendário do treino.',

  bairrosNobres: ['Centro', 'Bacurizeiro', 'São José', 'Alto Alegre'],
  bairrosPopulares: ['Sambaíba', 'Movelândia', 'Boa Vista', 'Independência'],

  parques: [
    {
      nome: 'Praças e avenidas do Centro',
      descricao:
        'O circuito da caminhada altoense: as praças centrais e as avenidas concentram o movimento do fim de tarde, quando o calor cede.',
    },
    {
      nome: 'Estádio Felipão e entorno',
      descricao:
        'A casa do Jacarezão é o marco esportivo da cidade, com o entorno servindo de referência para treinos de corrida.',
    },
    {
      nome: 'Quadras e espaços públicos dos bairros',
      descricao:
        'A estrutura pública sustenta o esporte comunitário e os treinos funcionais ao ar livre.',
    },
  ],

  clima:
    'Clima tropical quente do centro-norte piauiense: temperaturas altas o ano todo, com estação chuvosa no verão e um período seco de sol intenso.',
  climaTreino:
    'O calor de Teresina vale para Altos: treino ao ar livre no amanhecer ou à noite, hidratação reforçada o ano inteiro e o meio do dia reservado à academia coberta.',

  mobilidade:
    'A BR-343 liga Altos a Teresina em cerca de 40 minutos — o eixo diário de quem trabalha na capital. O deslocamento urbano é simples, com a cidade compacta favorecendo o treino perto de casa.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário local e da Grande Teresina',
      descricao:
        'Provas locais se somam ao calendário movimentado da capital, a uma BR de distância, ampliando as opções de quem corre.',
    },
  ],
  culturaEsportiva:
    'Altos respira futebol — o Jacarezão colocou a cidade no mapa esportivo do Nordeste — e essa paixão transborda para o esporte comunitário nas quadras e campos de bairro. A caminhada nas avenidas ao entardecer e a musculação no Centro completam a cena ativa da cidade.',
  academias:
    'A oferta se concentra em academias de musculação do Centro, com bom custo-benefício, atendendo quem treina antes ou depois do expediente na capital.',
  academiasProximas: [
    { nome: 'Academias do Centro', detalhe: 'musculação e funcional com horários de quem trabalha em Teresina' },
    { nome: 'Praças e avenidas centrais', detalhe: 'o circuito de caminhada do fim de tarde' },
    { nome: 'Quadras públicas dos bairros', detalhe: 'esporte comunitário e treino ao ar livre' },
  ],

  destaquesFitness: [
    'Grande Teresina: treino perto de casa para quem trabalha na capital.',
    'Cultura de futebol do Jacarezão que movimenta o esporte local.',
    'Caminhada de fim de tarde nas avenidas como hábito coletivo.',
    'Calor piauiense: janelas de treino no amanhecer e à noite.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 95,
    mensalMin: 210,
    mensalMax: 550,
    onlineMin: 110,
    onlineMax: 300,
  },

  conclusao:
    'Altos une o melhor dos dois mundos da Grande Teresina: a rotina tranquila de cidade média e a estrutura da capital a 40 minutos. Para quem vive esse vaivém, o treino perto de casa — nas janelas certas contra o calor — é o que sustenta a constância. Um personal trainer monta esse encaixe, presencial ou online.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Altos?',
      resposta:
        'Nas academias de musculação do Centro — com horários pensados para quem trabalha em Teresina —, nas praças e avenidas da caminhada de fim de tarde, nas quadras públicas dos bairros e em casa. O formato online também cresce: para quem passa o dia na capital, receber o plano no celular e treinar onde estiver elimina a desculpa da logística.',
    },
    {
      pergunta: 'Como treinar no calor de Altos?',
      resposta:
        'Com a mesma regra da capital vizinha, um dos climas mais quentes do país: amanhecer e noite são as janelas do treino ao ar livre, a hidratação começa antes da sessão e o meio do dia fica para a academia coberta. Na estação seca o sol aperta ainda mais — roupas leves e ritmo progressivo. Com as janelas respeitadas, treina-se bem o ano inteiro; contra o sol das 13h, não há motivação que resista.',
    },
    {
      pergunta: 'Há acompanhamento em Altos para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Altos, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou as praças), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['teresina-pi', 'timon-ma', 'campo-maior-pi'],

  fontes: [
    { nome: 'IBGE Cidades — Altos', url: 'https://cidades.ibge.gov.br/brasil/pi/altos/panorama' },
    { nome: 'Prefeitura de Altos', url: 'https://altos.pi.gov.br/' },
  ],
  atualizadoEm: '2026-07-28',
};
