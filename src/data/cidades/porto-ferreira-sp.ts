import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'porto-ferreira-sp',
  nome: 'Porto Ferreira',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'porto-ferreirense',
  tipo: 'cidade',

  populacao: 52649,
  populacaoAno: 2022,
  idhm: 0.751,
  idhmClasse: 'alto',

  resumoEconomico:
    'Conhecida como Capital Nacional da Cerâmica Artística e da Decoração, Porto Ferreira nasceu do porto fluvial no Rio Mogi Guaçu e cresceu ao longo da Rodovia Anhanguera, no eixo entre Ribeirão Preto e Campinas. A indústria cerâmica segue sendo a identidade econômica — com lojas que atraem compradores de todo o estado —, ao lado da agroindústria da cana e dos serviços de uma cidade média paulista bem localizada.',

  mercado:
    'O mercado de personal trainer em Porto Ferreira é o de cidade média do interior paulista: academias de musculação e funcional no Centro e nos bairros, caminhada na beira do Mogi Guaçu e nas praças, e um público de comerciantes e trabalhadores da cerâmica com horários variados. A vizinhança de polos maiores pela Anhanguera amplia as referências, mas o treino do dia a dia acontece perto de casa — presencial ou no formato online.',

  bairrosNobres: ['Centro', 'Jardim Aeroporto', 'Vila Sant Ana', 'Residencial Porto Seguro'],
  bairrosPopulares: ['Jardim Anésia', 'Vila Rica', 'São José', 'Porto Real'],

  parques: [
    {
      nome: 'Beira-rio do Mogi Guaçu',
      descricao:
        'A orla do rio que deu origem à cidade rende percursos planos de caminhada e corrida, com o pôr do sol ribeirinho como cenário.',
    },
    {
      nome: 'Lago Municipal e áreas de lazer',
      descricao:
        'As áreas públicas de lazer concentram caminhada, pesca esportiva e o movimento das famílias nos fins de semana.',
    },
    {
      nome: 'Praças com academia ao ar livre',
      descricao:
        'A estrutura pública dos bairros sustenta exercícios gratuitos e a caminhada do fim de tarde.',
    },
  ],

  clima:
    'Clima tropical de altitude do interior paulista: verões quentes e chuvosos, inverno seco e ameno com manhãs frias ocasionais.',
  climaTreino:
    'No verão, o treino ao ar livre rende no início da manhã e no fim de tarde, com as chuvas pedindo plano B. No inverno seco, o dia quase todo é janela — só a manhã fria pede aquecimento mais longo.',

  mobilidade:
    'A Rodovia Anhanguera (SP-330) corta o município e o liga a Ribeirão Preto, Campinas e à capital; a SP-215 conecta a São Carlos e Descalvado. O deslocamento urbano é rápido, típico de cidade compacta.',

  corridas: [
    {
      nome: 'Provas de rua do calendário regional',
      descricao:
        'O eixo Anhanguera concentra provas o ano todo nas cidades vizinhas, e Porto Ferreira mantém corridas locais ligadas ao aniversário da cidade e a eventos esportivos.',
    },
  ],
  culturaEsportiva:
    'O esporte porto-ferreirense combina o futebol de bairro, a caminhada na beira-rio e nas praças e uma cena de musculação consolidada no Centro. A localização na Anhanguera coloca o calendário esportivo regional — provas e pedais — a poucos minutos de casa.',
  academias:
    'A oferta reúne academias de musculação e funcional no Centro e nos bairros, com bom custo-benefício e horários que atendem o comércio e a indústria cerâmica.',
  academiasProximas: [
    { nome: 'Academias do Centro e bairros', detalhe: 'musculação e funcional para a rotina local' },
    { nome: 'Beira-rio do Mogi Guaçu', detalhe: 'percurso plano de caminhada e corrida' },
    { nome: 'Praças com academia ao ar livre', detalhe: 'estrutura pública gratuita nos bairros' },
  ],

  destaquesFitness: [
    'Beira-rio do Mogi Guaçu como percurso natural de treino.',
    'Posição na Anhanguera: calendário esportivo regional a minutos de casa.',
    'IDHM alto (0,751) e perfil de cidade compacta que facilita a constância.',
    'Horários do comércio cerâmico moldam a agenda de treino.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 300,
    mensalMax: 750,
    onlineMin: 140,
    onlineMax: 380,
  },

  conclusao:
    'Porto Ferreira tem o pacote da cidade média paulista que funciona: academias acessíveis, beira-rio para o treino ao ar livre e tudo perto. Com um plano que respeite os horários do comércio e aproveite o clima generoso do interior, a constância vira questão de método — exatamente o que o treino orientado entrega.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Porto Ferreira?',
      resposta:
        'Nas academias de musculação do Centro e dos bairros, na beira-rio do Mogi Guaçu — o percurso plano preferido para caminhada e corrida —, nas praças com academia ao ar livre e em casa. A cidade compacta joga a favor: qualquer estrutura fica a poucos minutos, o que facilita encaixar o treino antes ou depois do expediente no comércio e na indústria cerâmica.',
    },
    {
      pergunta: 'Como aproveitar o clima do interior paulista para treinar?',
      resposta:
        'Porto Ferreira tem um dos regimes mais amigáveis do estado: o inverno seco e ameno abre janelas de treino o dia quase todo, e o verão pede apenas a lógica clássica — início da manhã ou fim de tarde, com plano B coberto para os dias de chuva. Quem treina orientado transforma esse calendário em progressão contínua, sem os buracos de rotina que derrubam resultados.',
    },
    {
      pergunta: 'Há acompanhamento em Porto Ferreira para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Porto Ferreira, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou a beira-rio), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['pirassununga-sp', 'sao-carlos-sp', 'araraquara-sp', 'ribeirao-preto-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Porto Ferreira', url: 'https://cidades.ibge.gov.br/brasil/sp/porto-ferreira/panorama' },
    { nome: 'Prefeitura de Porto Ferreira', url: 'https://www.portoferreira.sp.gov.br/' },
  ],
  atualizadoEm: '2026-07-28',
};
