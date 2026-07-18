import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'porto-alegre-rs',
  nome: 'Porto Alegre',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'porto-alegrense',
  tipo: 'cidade',

  populacao: 1332845,
  populacaoAno: 2022,
  idhm: 0.805,
  idhmClasse: 'muito alto',
  altitudeM: 10,

  resumoEconomico:
    'Capital do Rio Grande do Sul e núcleo de uma das maiores regiões metropolitanas do país, Porto Alegre tem economia fortemente terciária: comércio, saúde, educação, tecnologia e administração pública respondem por cerca de 79% do valor agregado. A indústria é diversificada (alimentos, metalurgia, petroquímica e tecnologia), e a cidade tem público de alta renda e escolaridade, exigente em saúde e bem-estar.',

  mercado:
    'O mercado fitness de Porto Alegre é forte e variado, com ampla rede de academias de musculação, boxes de funcional e CrossFit e estúdios de alto padrão, além de plataformas de benefícios como o Wellhub. A cultura de orla e parques sustenta a procura por corrida, treino funcional e estética, e o público gaúcho valoriza acompanhamento profissional sério.',

  bairrosNobres: ["Moinhos de Vento", 'Petrópolis', 'Bela Vista', "Mont'Serrat"],
  bairrosPopulares: ['Restinga', 'Lomba do Pinheiro', 'Rubem Berta', 'Mário Quintana'],

  parques: [
    {
      nome: 'Parque Farroupilha (Redenção)',
      descricao:
        'O parque central da cidade, arborizado, com volta de cerca de 2,5 km em terra batida — ideal para corrida e caminhada, e ponto de encontro dos porto-alegrenses nos fins de semana.',
    },
    {
      nome: 'Orla do Guaíba (Orla Moacyr Scliar)',
      descricao:
        'Orla revitalizada, com pistas largas e planas à beira do Guaíba — um dos points preferidos para corrida e para acompanhar o famoso pôr do sol.',
    },
    {
      nome: 'Parque Marinha do Brasil',
      descricao:
        'Com mais de 70 hectares, tem pistas de corrida e caminhada, quadras e aparelhos de ginástica ao ar livre, e costuma sediar provas de 5 km e 10 km.',
    },
  ],
  ciclovias:
    'A rede cicloviária está em expansão, com destaque para a orla revitalizada do Guaíba, que conecta lazer e mobilidade ativa à beira-rio.',

  clima:
    'O clima é subtropical úmido, com verões quentes e invernos frios — uma das poucas capitais com frio de verdade.',
  climaTreino:
    'Há uma boa janela para o treino ao ar livre na maior parte do ano, mas o frio, o vento e a chuva do inverno pedem adaptação: roupa adequada, horários mais quentes do dia ou um plano B em academia.',

  mobilidade:
    'A BR-116 corta a cidade no sentido norte-sul, e o metrô Trensurb (cerca de 44 km e 22 estações) liga a capital à região metropolitana, com Aeromóvel até o aeroporto. A rede de ônibus complementa o deslocamento.',

  corridas: [
    {
      nome: 'Maratona Internacional de Porto Alegre',
      descricao:
        'A maratona mais antiga do Brasil, no início de junho, com percurso plano e rápido pela orla e pelo Centro Histórico.',
    },
    {
      nome: 'Circuito municipal de corridas',
      descricao:
        'A cidade tem provas recorrentes e uma comunidade de corrida tradicional, com clubes de corredores que existem há décadas.',
    },
  ],
  culturaEsportiva:
    'Porto Alegre é apaixonada por futebol (o Grenal entre Grêmio e Internacional move a cidade) e tem forte cultura de corrida de rua e vida ativa na orla e nos parques. A Maratona Internacional, a mais antiga do país, simboliza essa tradição.',
  academias:
    'A oferta reúne grandes redes de musculação, boxes de CrossFit e treinamento funcional e estúdios de alto padrão, bem distribuídos pelos bairros nobres e centrais.',
  academiasProximas: [
    { nome: 'Bodytech', detalhe: 'unidade premium no Iguatemi Porto Alegre' },
    { nome: 'Smart Fit', detalhe: 'unidades no Centro e em vários bairros da cidade' },
    { nome: 'Moinhos Fitness', detalhe: 'maior rede local da região metropolitana, com várias unidades' },
    { nome: 'Academias ao ar livre dos parques', detalhe: 'gratuitas, na Redenção e no Marinha do Brasil' },
  ],

  destaquesFitness: [
    'Orla do Guaíba revitalizada: pistas planas e seguras à beira-rio.',
    'Grandes parques urbanos (Redenção e Marinha do Brasil) com academias ao ar livre.',
    'Maratona Internacional de Porto Alegre, a mais antiga do Brasil.',
    'Público de alta renda e escolaridade, com cena diversificada de musculação e funcional.',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 190,
    mensalMin: 400,
    mensalMax: 1150,
    onlineMin: 190,
    onlineMax: 480,
  },

  conclusao:
    'Porto Alegre une uma orla revitalizada, parques tradicionais e uma comunidade de corrida histórica. Com um personal trainer, você aproveita melhor essa estrutura — e ganha a constância necessária para treinar bem inclusive nos meses mais frios, quando muita gente desiste.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Porto Alegre?',
      resposta:
        'O mapa é claro: a orla do Guaíba e a Redenção para treinos ao ar livre — as pistas revitalizadas da Orla Moacyr Scliar viraram o principal palco fitness da cidade —, as academias e estúdios do eixo Moinhos de Vento–Petrópolis–Bela Vista, e o atendimento em casa e em condomínio, comum nos bairros de maior renda. O Parque Marinha do Brasil soma quadras e equipamentos gratuitos para sessões funcionais.',
    },
    {
      pergunta: 'Como não parar de treinar no inverno de Porto Alegre?',
      resposta:
        'O inverno gaúcho — frio, vento minuano e chuva — é o grande filtro da constância na capital: quem depende de motivação para na primeira semana de junho. O antídoto é estrutura: migrar as sessões para academia ou estúdio nos meses frios, aproveitar as janelas de sol nos dias amenos e tratar o treino como compromisso de agenda, não de clima. Com acompanhamento, o plano muda de cenário sem mudar de ritmo — e setembro chega sem recomeço do zero.',
    },
    {
      pergunta: 'Há acompanhamento em Porto Alegre para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Porto Alegre, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio ou casa), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['florianopolis-sc', 'balneario-camboriu-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Porto Alegre', url: 'https://cidades.ibge.gov.br/brasil/rs/porto-alegre/panorama' },
    { nome: 'Prefeitura de Porto Alegre', url: 'https://prefeitura.poa.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-18',
};
