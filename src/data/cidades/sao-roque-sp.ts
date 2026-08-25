import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-roque-sp',
  nome: 'São Roque',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'são-roquense',
  tipo: 'cidade',

  populacao: 79484,
  populacaoAno: 2022,

  resumoEconomico:
    'A "Terra do Vinho" paulista fica a cerca de 60 km da capital, entre a Castello Branco e a Raposo Tavares, cercada de Mata Atlântica preservada. Desde 1998 o Roteiro do Vinho — vinícolas, adegas, restaurantes e centros de lazer — transformou o enoturismo no motor da cidade, que combina o movimento de fim de semana dos turistas com uma economia local de comércio, serviços e chácaras. O Morro do Saboó, cartão-postal geológico da região, completa a paisagem.',

  mercado:
    'O mercado de personal trainer em São Roque tem duas faces: a rotina local, atendida por academias de musculação e funcional do Centro e dos bairros, e o perfil de quem trocou a capital pela vida de chácara — público que valoriza atendimento em casa e horários flexíveis. A topografia de serra dá de graça o que academia cobra caro: subidas exigentes para corrida e pedal, com o clima mais fresco da altitude ajudando o treino ao ar livre o ano quase todo.',

  bairrosNobres: ['Centro', 'Vila Nova São Roque', 'Guaçu', 'Mailasqui'],
  bairrosPopulares: ['São João Novo', 'Maylasky', 'Taboão', 'Junqueira'],

  parques: [
    {
      nome: 'Roteiro do Vinho e estradas rurais',
      descricao:
        'As estradas do enoturismo, cercadas de Mata Atlântica, viraram percurso clássico de pedal e corrida de fim de semana, com subidas de verdade e paradas gastronômicas.',
    },
    {
      nome: 'Morro do Saboó',
      descricao:
        'O cartão-postal geológico de São Roque, com trilhas e vista para toda a região — destino de caminhada e treino de subida.',
    },
    {
      nome: 'Praças e espaços públicos do Centro',
      descricao:
        'O Centro concentra as praças com academia ao ar livre e o movimento de caminhada no dia a dia.',
    },
  ],

  clima:
    'Clima subtropical de altitude, mais fresco que a média paulista: verões agradáveis com chuvas de verão e invernos secos com manhãs frias.',
  climaTreino:
    'A altitude deixa o treino ao ar livre confortável quase o ano todo. No verão, as chuvas de fim de tarde pedem plano B; no inverno, as manhãs frias favorecem quem prefere treinar no meio do dia.',

  mobilidade:
    'O acesso se dá pela Rodovia Castello Branco e pela Raposo Tavares, com a Rodovia Quintino de Lima ligando ao centro. O fluxo turístico se concentra nos fins de semana; no dia a dia, o deslocamento é rápido e o carro domina.',

  corridas: [
    {
      nome: 'Provas de rua e desafios de ciclismo da região',
      descricao:
        'O calendário regional aproveita as estradas de serra e o Roteiro do Vinho, com provas de corrida e desafios de pedal que atraem atletas da Grande São Paulo e de Sorocaba.',
    },
  ],
  culturaEsportiva:
    'São Roque mistura o esporte de fim de semana do turismo — pedal nas estradas do vinho, trilhas no Saboó — com a rotina urbana de academias e caminhada nas praças. A proximidade da capital traz um fluxo constante de ciclistas e corredores, e a cidade abraçou esse movimento.',
  academias:
    'A oferta reúne academias de musculação e funcional no Centro e nos bairros maiores, além de estúdios menores — com o atendimento em domicílio forte no perfil de chácaras e condomínios.',
  academiasProximas: [
    { nome: 'Academias do Centro', detalhe: 'musculação e funcional para a rotina local' },
    { nome: 'Estradas do Roteiro do Vinho', detalhe: 'percursos de pedal e corrida em meio à Mata Atlântica' },
    { nome: 'Trilhas do Morro do Saboó', detalhe: 'caminhada e treino de subida com vista para a região' },
  ],

  destaquesFitness: [
    'Topografia de serra: subidas naturais para corrida e pedal exigentes.',
    'Roteiro do Vinho como percurso clássico de ciclismo de fim de semana.',
    'Clima de altitude, mais fresco que a média paulista, favorece o treino ao ar livre.',
    'Perfil chácara-condomínio sustenta forte demanda por personal em domicílio.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 900,
    onlineMin: 160,
    onlineMax: 420,
  },

  conclusao:
    'Entre as subidas do Roteiro do Vinho e as trilhas do Saboó, São Roque oferece cenário de treino que muita capital invejaria. Um personal trainer transforma a topografia a favor do objetivo — dosando subida, força e recuperação — e atende bem o perfil local de casa e chácara, onde a flexibilidade vale tanto quanto o método.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em São Roque?',
      resposta:
        'Nas academias do Centro, nas praças com academia ao ar livre, e — marca registrada da cidade — em casa: o perfil de chácaras e condomínios faz do atendimento em domicílio o formato que mais cresce. Para treinos ao ar livre, as estradas do Roteiro do Vinho e as trilhas do Morro do Saboó oferecem percursos com subidas de verdade, e o personal aproveita o relevo como equipamento gratuito.',
    },
    {
      pergunta: 'Dá para treinar pedal e corrida nas estradas do vinho?',
      resposta:
        'Dá — e virou tradição regional: as estradas do enoturismo, cercadas de mata, atraem ciclistas e corredores da Grande São Paulo todo fim de semana. As subidas exigem preparo: quem está começando faz percursos parciais e evolui aos poucos, com fortalecimento de pernas em academia durante a semana. A recompensa é dupla — treino de serra e, para quem quiser, uma parada gastronômica no caminho de volta.',
    },
    {
      pergunta: 'Há acompanhamento em São Roque para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para São Roque, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, chácara, casa ou condomínio), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['sorocaba-sp', 'itu-sp', 'cotia-sp', 'ibiuna-sp'],

  fontes: [
    { nome: 'IBGE Cidades — São Roque', url: 'https://cidades.ibge.gov.br/brasil/sp/sao-roque/panorama' },
    { nome: 'Prefeitura de São Roque', url: 'https://www.saoroque.sp.gov.br/' },
  ],
  fotoCorpo: {
    src: '/montinho/cotia-sp-foto.webp',
    alt: 'Montinho Personal de costas em pose de duplo bíceps diante do espelho da academia, mostrando as costas e os ombros definidos — personal trainer destacado pelo portal para quem treina em São Roque',
    legenda:
      'Constância que aparece: o Montinho Personal, profissional destacado pelo portal, é referência de método para quem treina em São Roque.',
    w: 739,
    h: 1600,
  },
  atualizadoEm: '2026-08-25',
};
