import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'jaragua-go',
  nome: 'Jaraguá',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'jaraguense',
  tipo: 'cidade',

  populacao: 45223,
  populacaoAno: 2022,

  resumoEconomico:
    'Capital das Confecções e maior polo de moda do Centro-Oeste, Jaraguá vive do jeans e das facções que abastecem lojistas de todo o Brasil — o comércio de vestuário atrai caravanas de compradores semanalmente. A cidade histórica, uma das mais antigas de Goiás, fica aos pés da Serra de Jaraguá, cujo parque ecológico é o marco natural do município, no eixo da BR-153 entre Goiânia e Ceres.',

  mercado:
    'O mercado de personal trainer em Jaraguá segue o ritmo das confecções: jornadas longas de costura e vendas criam demanda por treinos curtos e eficientes, cedo ou no fim do dia, e as dores de coluna e ombro do trabalho repetitivo são queixa comum — campo perfeito para o treino de fortalecimento orientado. As academias do Centro e a subida da Serra de Jaraguá completam a estrutura local.',

  bairrosNobres: ['Centro', 'Jaraguá II', 'Setor Oeste', 'Vila Bandeirante'],
  bairrosPopulares: ['Vila Sossego', 'Setor Aeroporto', 'Cidade Nova', 'Itaguaru'],

  parques: [
    {
      nome: 'Parque Ecológico da Serra de Jaraguá',
      descricao:
        'O marco natural do município: a serra oferece trilhas e subidas exigentes, com vista para a cidade histórica e o cerrado — treino de montanha na porta de casa.',
    },
    {
      nome: 'Praças do centro histórico',
      descricao:
        'Uma das cidades mais antigas de Goiás concentra nas praças centrais a caminhada do fim de tarde e a estrutura pública de exercício.',
    },
    {
      nome: 'Margens do Rio das Almas',
      descricao:
        'O rio da região rende percursos de caminhada e lazer nos arredores da cidade.',
    },
  ],

  clima:
    'Clima tropical do cerrado goiano: quente o ano todo, com verão chuvoso e inverno seco de umidade baixa e sol forte.',
  climaTreino:
    'No período seco, a umidade despenca: treino ao ar livre no início da manhã, hidratação reforçada e academia climatizada nos picos da tarde. No verão chuvoso, o plano B coberto mantém a rotina de pé.',

  mobilidade:
    'A BR-153 (Belém–Brasília) corta o município e o liga a Goiânia, Anápolis e Ceres — o fluxo de compradores das confecções chega por ela. O deslocamento urbano é simples e rápido.',

  corridas: [
    {
      nome: 'Provas de rua e trilhas da Serra',
      descricao:
        'O calendário local combina corridas de rua ligadas às festas da cidade com subidas e trilhas na Serra de Jaraguá, que atraem atletas da região.',
    },
  ],
  culturaEsportiva:
    'O esporte jaraguense equilibra o futebol de bairro, a caminhada nas praças do centro histórico e a relação com a Serra — trilha, subida e contemplação. O ritmo intenso das confecções faz do treino um contraponto necessário à jornada de trabalho.',
  academias:
    'A oferta se concentra em academias de musculação e funcional no Centro, com horários que atendem a jornada das confecções.',
  academiasProximas: [
    { nome: 'Academias do Centro', detalhe: 'musculação e funcional com horários flexíveis para o comércio' },
    { nome: 'Serra de Jaraguá', detalhe: 'trilhas e subidas do parque ecológico para treino outdoor' },
    { nome: 'Praças do centro histórico', detalhe: 'caminhada e estrutura pública no coração da cidade' },
  ],

  destaquesFitness: [
    'Serra de Jaraguá: treino de subida e trilha na porta de casa.',
    'Capital das Confecções: demanda por treinos eficientes na jornada longa.',
    'Dores posturais do trabalho de costura como campo do fortalecimento orientado.',
    'Centro histórico compacto que facilita a rotina de treino.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 120,
    onlineMax: 340,
  },

  conclusao:
    'Em Jaraguá, o desafio não é estrutura — é agenda: a jornada das confecções engole o dia de quem produz a moda do Centro-Oeste. O treino orientado devolve esse tempo com juros: sessões curtas e eficientes, fortalecimento contra as dores da costura e a Serra como recompensa de fim de semana. Constância cabe até na semana mais cheia, quando o plano é feito para ela.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Jaraguá?',
      resposta:
        'Nas academias do Centro — com horários que acompanham a jornada das confecções —, nas praças do centro histórico, em casa e na Serra de Jaraguá, cujas trilhas viram treino de subida nos fins de semana. Para quem vive o pico de produção e vendas, sessões curtas e bem planejadas perto do trabalho são o formato que funciona.',
    },
    {
      pergunta: 'Musculação ajuda nas dores de quem trabalha na costura?',
      resposta:
        'Ajuda — e é uma das maiores demandas locais. Horas de costura e expedição cobram do corpo em pontos conhecidos: lombar, ombros, pescoço e punhos. O fortalecimento orientado trabalha exatamente essas regiões, com exercícios de tronco, mobilidade e postura que aliviam a carga do trabalho repetitivo. O treino é progressivo e sem promessa de cura: dores persistentes pedem também avaliação de médico ou fisioterapeuta.',
    },
    {
      pergunta: 'Há acompanhamento em Jaraguá para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Jaraguá, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou as praças), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['anapolis-go', 'goiania-go', 'ceres-go'],

  fontes: [
    { nome: 'IBGE Cidades — Jaraguá', url: 'https://cidades.ibge.gov.br/brasil/go/jaragua/panorama' },
    { nome: 'Prefeitura de Jaraguá', url: 'https://jaragua.go.gov.br/' },
  ],
  atualizadoEm: '2026-07-28',
};
