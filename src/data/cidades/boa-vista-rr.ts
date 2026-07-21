import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'boa-vista-rr',
  nome: 'Boa Vista',
  uf: 'RR',
  estado: 'Roraima',
  estadoSlug: 'roraima',
  regiao: 'Norte',
  gentilico: 'boa-vistense',
  tipo: 'cidade',

  populacao: 413486,
  populacaoAno: 2022,
  idhm: 0.752,
  idhmClasse: 'alto',
  altitudeM: 90,

  resumoEconomico:
    'Capital de Roraima e a cidade mais ao norte do país, Boa Vista é uma capital planejada, com traçado urbano radial — avenidas que partem do centro cívico em formato de leque. A economia se baseia em comércio, serviços e administração pública, com peso crescente do agronegócio no entorno. É um centro urbano organizado, com boa oferta de espaços públicos para atividade física.',

  mercado:
    'O mercado fitness conta com redes nacionais (Smart Fit no Roraima Garden Shopping) e centros de treino locais, além de academias de bairro. A prefeitura mantém o programa gratuito "Academia Aberta" em praças, e o calor favorece a cultura de treino ao ar livre nos parques e na orla.',

  bairrosNobres: ['Caçari', 'Paraviana', 'Mecejana', 'Centro'],
  bairrosPopulares: ['Aparecida', '13 de Setembro', 'Dos Estados', 'Senador Hélio Campos'],

  parques: [
    {
      nome: 'Parque Anauá',
      descricao:
        'O principal parque urbano da cidade, com pistas de caminhada e corrida, áreas verdes, lago e quadras; aberto diariamente das 6h30 às 22h, com entrada gratuita.',
    },
    {
      nome: 'Orla Taumanan (Parque do Rio Branco)',
      descricao:
        'Complexo às margens do Rio Branco com calçadões, ciclovia, mirante, quadras e praia — um cartão-postal usado para caminhada e corrida.',
    },
    {
      nome: 'Programa Academia Aberta',
      descricao:
        'Rede de polos em praças e espaços públicos com aulas gratuitas de ginástica, alongamento e dança, ampliando o acesso ao exercício pela cidade.',
    },
  ],
  ciclovias:
    'Boa Vista tem mais de 40 km de ciclovias, considerada a maior rede da Região Norte, ligando bairros como Senador Hélio Campos ao Caçari, com revitalizações recentes.',

  clima:
    'O clima é equatorial, quente o ano todo (frequentemente acima de 30 °C), com estação seca de outubro a março e chuvosa de abril a setembro.',
  climaTreino:
    'O treino ao ar livre rende mais cedo pela manhã ou após o pôr do sol, com hidratação reforçada e proteção solar — o calor equatorial é o principal fator a administrar.',

  mobilidade:
    'O traçado radial facilita os deslocamentos, e o acesso terrestre principal é pela BR-174 (sentido Manaus). O transporte é por ônibus municipal, complementado por uma boa malha cicloviária.',

  corridas: [
    {
      nome: 'Circuito Sesc de Corridas (etapa Boa Vista)',
      descricao:
        'Prova de 5 km com corridinha kids, parte de um circuito nacional que movimenta a cena de corrida local.',
    },
    {
      nome: 'Corridas e treinões no Parque Anauá',
      descricao:
        'O Parque Anauá serve de base para circuitos e treinões de rua ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'Boa Vista tem forte adesão à corrida de rua e ao ciclismo, favorecido pela maior malha de ciclovias do Norte. Programas públicos gratuitos em praças ampliam a base de praticantes e tornam o exercício acessível.',
  academias:
    'A oferta reúne a Smart Fit e centros de treino locais, academias de bairro e o programa público "Academia Aberta", cobrindo musculação e treino funcional em diferentes perfis.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'no Roraima Garden Shopping' },
    { nome: 'Centros de treino locais e academias de bairro', detalhe: 'musculação e funcional em vários perfis' },
    { nome: 'Programa Academia Aberta', detalhe: 'aulas públicas gratuitas em praças da cidade' },
    { nome: 'Estrutura do Parque Anauá', detalhe: 'pistas e quadras gratuitas, das 6h30 às 22h' },
  ],

  destaquesFitness: [
    'Maior rede de ciclovias do Norte — cidade amigável ao deslocamento ativo.',
    'Parque Anauá como hub de corrida, caminhada e treino funcional.',
    'Programa gratuito "Academia Aberta" em diversos polos.',
    'Smart Fit e centros de treino locais cobrindo musculação e funcional.',
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
    'Capital planejada e amigável à bike, Boa Vista oferece do Parque Anauá à orla do Rio Branco um ambiente bom para treinar. Um personal trainer ajuda a aproveitar essa estrutura com método, ajustando horários e intensidade ao calor equatorial.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Boa Vista?',
      resposta:
        'O Parque Anauá — aberto das 6h30 às 22h, com pistas, lago e quadras — e a Orla Taumanan, às margens do Rio Branco, são os grandes palcos do treino ao ar livre. Nas academias, a Smart Fit do Roraima Garden e os centros de treino locais cobrem musculação e funcional, e o atendimento em casa é comum no Caçari, no Paraviana e na Mecejana. O traçado radial e a maior malha de ciclovias do Norte facilitam chegar a qualquer cenário.',
    },
    {
      pergunta: 'Se o Academia Aberta é gratuito, quando faz sentido contratar personal em Boa Vista?',
      resposta:
        'Os dois se complementam. O programa da prefeitura é uma excelente porta de entrada — aulas coletivas gratuitas de ginástica e alongamento nas praças, ótimas para sair do sedentarismo. O personal entra quando o objetivo pede individualização: plano progressivo desenhado para você, correção de execução, periodização para emagrecimento ou hipertrofia e constância cobrada semana a semana. Muita gente combina: a aula coletiva como atividade extra e as sessões individuais como motor do resultado.',
    },
    {
      pergunta: 'Há acompanhamento em Boa Vista para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Boa Vista, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou parque), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['manaus-am', 'macapa-ap'],

  fontes: [
    { nome: 'IBGE Cidades — Boa Vista', url: 'https://cidades.ibge.gov.br/brasil/rr/boa-vista/panorama' },
    { nome: 'Prefeitura de Boa Vista', url: 'https://www.boavista.rr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-19',
};
