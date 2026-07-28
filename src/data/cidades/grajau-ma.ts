import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'grajau-ma',
  nome: 'Grajaú',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'grajauense',
  tipo: 'cidade',

  populacao: 73872,
  populacaoAno: 2022,

  resumoEconomico:
    'Polo do centro-sul maranhense, Grajaú se espalha por um território de quase 8,9 mil km² cortado pelo rio que dá nome à cidade. A economia combina pecuária, agricultura — com o arroz tradicional e a soja avançando na região — e o comércio que abastece um vasto entorno rural: quase metade da população vive no campo. O rio Grajaú é o eixo da vida local, do abastecimento ao lazer nos balneários de época.',

  mercado:
    'O mercado de personal trainer em Grajaú é o de polo regional do interior: academias de musculação concentradas no Centro, caminhada nas praças e na beira-rio, e uma demanda crescente por treino orientado entre comerciantes, servidores e produtores. Com metade da população na zona rural e distâncias grandes, o acompanhamento online tem espaço natural — o aluno treina onde está, com o plano chegando pelo celular.',

  bairrosNobres: ['Centro', 'Canoeiro', 'Aparecida', 'Vila Nova'],
  bairrosPopulares: ['Bom Jesus', 'Mutirão', 'Alto Bonito', 'Vila Sá'],

  parques: [
    {
      nome: 'Beira-rio do Grajaú',
      descricao:
        'O rio que batiza a cidade rende caminhada e corrida na sua orla urbana, além dos balneários que movimentam o verão grajauense.',
    },
    {
      nome: 'Praças do Centro',
      descricao:
        'As praças centrais concentram a caminhada do fim de tarde e a estrutura pública de exercício da rotina urbana.',
    },
    {
      nome: 'Estradas e chapadas do entorno',
      descricao:
        'O cerrado do centro-sul maranhense oferece percursos abertos para pedal e corrida nas primeiras horas do dia.',
    },
  ],

  clima:
    'Clima tropical do centro-sul maranhense: quente o ano todo, com estação chuvosa no verão e um período seco marcado, de temperaturas altas e sol forte.',
  climaTreino:
    'O calor manda: treino ao ar livre no amanhecer ou no fim de tarde, com hidratação reforçada — especialmente na estação seca. No meio do dia, musculação em ambiente coberto é o caminho.',

  mobilidade:
    'A BR-226 corta o município e liga Grajaú a Barra do Corda e ao eixo Teresina–Imperatriz; a cidade funciona como entroncamento do centro-sul do estado. O deslocamento urbano é simples; as distâncias regionais reforçam o papel de polo.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário local',
      descricao:
        'Provas ligadas ao aniversário da cidade e a eventos regionais movimentam a cena de corrida grajauense ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'O esporte em Grajaú mistura o futebol de bairro, forte como em todo o interior maranhense, com a caminhada nas praças, o movimento da beira-rio e uma cena de musculação em crescimento no Centro. Os balneários do rio são o point ativo do verão.',
  academias:
    'A oferta se concentra em academias de musculação do Centro, com bom custo-benefício, atendendo também quem vem da zona rural nos dias de cidade.',
  academiasProximas: [
    { nome: 'Academias do Centro', detalhe: 'musculação e funcional para a rotina urbana e o público regional' },
    { nome: 'Beira-rio do Grajaú', detalhe: 'caminhada e corrida na orla urbana do rio' },
    { nome: 'Praças com estrutura pública', detalhe: 'caminhada e exercícios ao ar livre no fim de tarde' },
  ],

  destaquesFitness: [
    'Polo do centro-sul maranhense: atrai público de todo o entorno rural.',
    'Beira-rio e balneários do Grajaú como espaços ativos da cidade.',
    'Quase metade da população rural: acompanhamento online com espaço natural.',
    'Calor tropical: janelas de treino no amanhecer e entardecer.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 580,
    onlineMin: 110,
    onlineMax: 320,
  },

  conclusao:
    'Grajaú tem a estrutura essencial — academias no Centro, beira-rio para o treino ao ar livre e praças movimentadas — e o desafio clássico do interior quente: transformar disposição em constância. Com as janelas certas de horário e um plano que acompanhe a rotina (na cidade ou no campo), o resultado aparece; é exatamente esse desenho que o treino orientado entrega.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Grajaú?',
      resposta:
        'Nas academias de musculação do Centro, na beira-rio do Grajaú — o percurso natural de caminhada e corrida da cidade —, nas praças com estrutura pública e em casa. Como Grajaú é polo de uma vasta região rural, o acompanhamento online cresce forte: o produtor ou morador do interior treina onde está, com plano e ajustes chegando pelo celular.',
    },
    {
      pergunta: 'Como treinar no calor do centro-sul maranhense?',
      resposta:
        'A lógica é a das janelas: amanhecer e fim de tarde para o treino ao ar livre, meio do dia para a academia coberta. Na estação seca, quando o sol aperta e o ar fica mais quente, a hidratação começa antes da sessão e o ritmo sobe devagar. Na estação chuvosa, o plano B indoor já fica combinado — assim a chuva não abre buraco na rotina. Quem treina orientado atravessa as duas estações sem parar.',
    },
    {
      pergunta: 'Há acompanhamento em Grajaú para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Grajaú, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou a beira-rio), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['barra-do-corda-ma', 'imperatriz-ma', 'balsas-ma'],

  fontes: [
    { nome: 'IBGE Cidades — Grajaú', url: 'https://cidades.ibge.gov.br/brasil/ma/grajau/panorama' },
    { nome: 'Prefeitura de Grajaú', url: 'https://www.grajau.ma.gov.br/' },
  ],
  atualizadoEm: '2026-07-28',
};
