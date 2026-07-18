import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'joao-pessoa-pb',
  nome: 'João Pessoa',
  uf: 'PB',
  estado: 'Paraíba',
  estadoSlug: 'paraiba',
  regiao: 'Nordeste',
  gentilico: 'pessoense',
  tipo: 'cidade',

  populacao: 833932,
  populacaoAno: 2022,
  idhm: 0.763,
  idhmClasse: 'alto',
  altitudeM: 40,

  resumoEconomico:
    'Capital da Paraíba e uma das cidades mais verdes do país, João Pessoa tem economia de serviços, comércio, turismo e administração pública, com o maior PIB do estado. O turismo de praia, em Tambaú e no Cabo Branco — ponto mais oriental das Américas —, é um vetor forte, e a orla preservada faz da vida ao ar livre parte do cotidiano pessoense.',

  mercado:
    'A forte cultura de praia, estética e vida ao ar livre sustenta uma demanda alta por academias, musculação e treino funcional na orla. Estúdios boutique e academias se concentram em Manaíra, Cabo Branco e no Altiplano, atendendo um público que valoriza tanto a performance quanto a estética.',

  bairrosNobres: ['Manaíra', 'Cabo Branco', 'Tambaú', 'Altiplano'],
  bairrosPopulares: ['Mangabeira', 'Valentina', 'Cristo Redentor', 'Bancários'],

  parques: [
    {
      nome: 'Orla de Cabo Branco, Tambaú e Manaíra',
      descricao:
        'Calçadão plano e contínuo com ciclovia, areia larga e academia ao ar livre. O trecho do Cabo Branco é fechado para carros das 5h às 8h, criando uma janela premium para corrida e caminhada.',
    },
    {
      nome: 'Parque Sólon de Lucena (Lagoa)',
      descricao:
        'No Centro, ao redor da lagoa, tem pista de corrida e caminhada plana, ciclovia, pista de skate e academias ao ar livre.',
    },
    {
      nome: 'Largo da Gameleira (Manaíra/Tambaú)',
      descricao:
        'Ponto de encontro de corredores e local tradicional de largada de provas de rua na orla.',
    },
  ],
  ciclovias:
    'Há ciclovias na orla (Cabo Branco e Manaíra) e no Parque Sólon de Lucena, integrando os principais pontos de lazer e treino da cidade.',

  clima:
    'O clima é tropical úmido, quente o ano todo, com chuvas acima de 1.800 mm anuais.',
  climaTreino:
    'O calor e a umidade pedem treino cedo — a orla do Cabo Branco fechada das 5h às 8h é a melhor janela — ou no fim da tarde, com hidratação reforçada.',

  mobilidade:
    'João Pessoa é o quilômetro zero da BR-230 e se conecta à BR-101; o Aeroporto Internacional Castro Pinto fica em Santa Rita, a cerca de 13 km. O transporte urbano é feito por ônibus.',

  corridas: [
    {
      nome: 'Meia Maratona Internacional de João Pessoa',
      descricao:
        'Prova de 5 km, 10 km e 21 km com percurso 100% plano pela orla — considerada uma das mais rápidas do Brasil.',
    },
    {
      nome: 'Maratona Internacional de João Pessoa',
      descricao:
        'Prova de 5 km, 10 km, 21 km e 42 km na orla do Cabo Branco, parte de um calendário de corrida de rua bem cheio.',
    },
  ],
  culturaEsportiva:
    'A adesão à corrida de rua é forte, favorecida pela orla plana e estruturada, e os esportes de praia — vôlei, beach tennis, calistenia e ciclismo — fazem parte da rotina. O clima ameno o ano todo ajuda a manter a constância.',
  academias:
    'A oferta reúne redes, academias de bairro e estúdios boutique nos bairros nobres (Manaíra, Cabo Branco e Altiplano), bem complementada pela orla como espaço de treino ao ar livre.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades no Manaíra Shopping, na Av. João Câncio, no Geisel e na Epitácio' },
    { nome: 'Selfit', detalhe: 'unidades no Mag Shopping (Manaíra), no Tambauzinho e em Mangabeira' },
    { nome: 'Estúdios boutique', detalhe: 'concentrados em Manaíra, Cabo Branco e Altiplano' },
    { nome: 'Academias ao ar livre', detalhe: 'gratuitas, na orla e no Parque Sólon de Lucena' },
  ],

  destaquesFitness: [
    'Orla plana e contínua, ideal para corrida, ciclismo e treino funcional.',
    'Trecho do Cabo Branco fechado para carros das 5h às 8h: janela premium matinal.',
    'Cena forte de corrida, com meia maratona e maratona internacionais.',
    'Cultura de praia e estética que sustenta o personal training nos bairros nobres.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'Com uma das orlas mais agradáveis e planas do país, João Pessoa é feita para quem gosta de treinar ao ar livre. Um personal trainer ajuda a aproveitar a janela matinal do Cabo Branco e a estrutura da cidade com um plano sob medida — respeitando o calor e o seu objetivo.',

  faqsExtra: [
    {
      pergunta: 'Por que todo mundo treina cedo em João Pessoa?',
      resposta:
        'Porque a cidade criou a melhor janela matinal de treino do Nordeste: das 5h às 8h, o trecho da orla do Cabo Branco fecha para carros e vira uma pista exclusiva para corrida, caminhada, bike e treino funcional — com o nascer do sol mais oriental das Américas de brinde. Depois das 8h, o calor e a umidade sobem rápido. O personal que atende na orla organiza a agenda em torno dessa janela; quem não é matutino migra para o fim da tarde ou para a academia climatizada.',
    },
    {
      pergunta: 'Onde o personal costuma atender em João Pessoa?',
      resposta:
        'O eixo Manaíra–Tambaú–Cabo Branco concentra tudo: o calçadão plano com ciclovia e academias ao ar livre, as academias de rede e os estúdios boutique (que se estendem ao Altiplano), e o atendimento em casa e em condomínio nos prédios da orla. No Centro, o Parque Sólon de Lucena é a alternativa pública com pista plana ao redor da lagoa. A cidade é compacta, então o deslocamento entre esses pontos raramente passa de 15 minutos.',
    },
    {
      pergunta: 'Há acompanhamento em João Pessoa para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para João Pessoa, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio, casa ou orla), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['recife-pe', 'natal-rn'],

  fontes: [
    { nome: 'IBGE Cidades — João Pessoa', url: 'https://cidades.ibge.gov.br/brasil/pb/joao-pessoa/panorama' },
    { nome: 'Prefeitura de João Pessoa', url: 'https://www.joaopessoa.pb.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-18',
};
