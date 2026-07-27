import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'belem-pa',
  nome: 'Belém',
  uf: 'PA',
  estado: 'Pará',
  estadoSlug: 'para',
  regiao: 'Norte',
  gentilico: 'belenense',
  tipo: 'cidade',

  populacao: 1303403,
  populacaoAno: 2022,
  idhm: 0.746,
  idhmClasse: 'alto',
  altitudeM: 10,

  resumoEconomico:
    'Capital do Pará e principal porta de entrada da Amazônia, Belém tem forte vocação portuária e comercial (açaí, castanha, pescado e cacau) e é o polo de serviços e logística do Norte. Sediou a COP30 em 2025, o que impulsionou obras de infraestrutura e mobilidade — e colocou a cidade em evidência mundial.',

  mercado:
    'O mercado fitness é consolidado, com grandes redes (Smart Fit em vários shoppings e a Bodytech em Nazaré) e academias locais. A cultura de treino ao ar livre é forte nas orlas e parques, ainda que condicionada ao calor e à umidade equatoriais.',

  bairrosNobres: ['Nazaré', 'Batista Campos', 'Umarizal', 'Reduto'],
  bairrosPopulares: ['Guamá', 'Terra Firme', 'Jurunas', 'Sacramenta'],

  parques: [
    {
      nome: 'Parque Estadual do Utinga "Camillo Vianna"',
      descricao:
        'O parque mais visitado do Norte, com pista pavimentada de cerca de 4 km (ida), faixas separadas para pedestres e ciclistas e pontos de hidratação — o principal hub de corrida e ciclismo da cidade.',
    },
    {
      nome: 'Mangal das Garças',
      descricao:
        'Parque zoobotânico com trilhas e caminhada e vista da orla, de entrada gratuita — uma opção arborizada para treino leve.',
    },
    {
      nome: 'Portal da Amazônia e Estação das Docas',
      descricao:
        'Orlas urbanas revitalizadas à beira-rio, usadas para caminhada e corrida com vista para a Baía do Guajará.',
    },
  ],
  ciclovias:
    'Belém tem uma malha de cerca de 163 km de ciclovias, entre as dez maiores do país, ampliada no contexto das obras recentes da cidade.',

  clima:
    'O clima é equatorial úmido, quente o ano todo (máximas de 31 °C a 33 °C, umidade perto de 84% e chuvas abundantes — cerca de 3.000 mm por ano).',
  climaTreino:
    'O calor e a umidade pedem cautela: o treino ao ar livre rende mais no início da manhã ou no fim da tarde, com hidratação reforçada. As chuvas frequentes tornam útil um plano B em ambiente fechado.',

  mobilidade:
    'A cidade conta com um sistema BRT (Icoaraci–São Brás, com canaleta exclusiva na Avenida Almirante Barroso) e acesso rodoviário pela BR-316 e pela BR-010 (Belém–Brasília). O transporte é complementado por ônibus.',

  corridas: [
    {
      nome: 'Corrida do Círio',
      descricao:
        'A maior corrida de rua da Amazônia, com provas de 5 km e 10 km e mais de 9 mil atletas, integrada ao Círio de Nazaré, em outubro.',
    },
    {
      nome: 'Meia Maratona da Amazônia',
      descricao:
        'Prova de 21 km com foco em sustentabilidade, criada no contexto da agenda ambiental da cidade.',
    },
  ],
  culturaEsportiva:
    'Belém tem forte tradição de corrida de rua, muito ligada ao Círio de Nazaré, além do futebol regional (a rivalidade Remo x Paysandu) e de um público crescente de corrida e ciclismo nas orlas. A vida ativa acontece, sobretudo, nos horários mais frescos do dia.',
  academias:
    'A oferta reúne grandes redes (Smart Fit, Bodytech) nos bairros nobres e academias locais, complementadas pela estrutura ao ar livre do Parque do Utinga e das orlas.',
  academiasProximas: [
    { nome: 'Bodytech', detalhe: 'unidade premium em Nazaré' },
    { nome: 'Smart Fit', detalhe: 'unidades em shoppings e bairros da cidade' },
    { nome: 'Academias locais', detalhe: 'boa cobertura no Umarizal, em Batista Campos e no Reduto' },
    { nome: 'Estrutura do Parque do Utinga', detalhe: 'pista de cerca de 4 km, gratuita, para corrida e bike' },
  ],

  destaquesFitness: [
    'Parque do Utinga como principal hub de corrida e ciclismo (pista de cerca de 4 km).',
    'Redes consagradas (Smart Fit, Bodytech) nos bairros nobres.',
    'Malha cicloviária ampla (cerca de 163 km), entre as maiores do Brasil.',
    'Treino ao ar livre o ano todo, condicionado ao calor e à umidade equatoriais.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Porta de entrada da Amazônia e cidade em plena transformação, Belém oferece do Parque do Utinga às orlas revitalizadas. Um personal trainer ajuda a montar uma rotina que respeite o calor equatorial e potencialize seus resultados — da corrida ao ar livre à musculação climatizada nos dias mais abafados.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Belém?',
      resposta:
        'Os polos são claros: o Parque do Utinga — com pista de cerca de 4 km e faixas separadas para corrida e bike —, as orlas revitalizadas (Portal da Amazônia, Estação das Docas), as academias dos bairros nobres (Bodytech em Nazaré, Smart Fit e academias locais no Umarizal e em Batista Campos) e o atendimento em casa e em condomínio, comum nos edifícios do Umarizal e do Reduto. A malha cicloviária de cerca de 163 km ainda abre espaço para treinos de bike orientados.',
    },
    {
      pergunta: 'Como manter a rotina de treino com a chuva diária de Belém?',
      resposta:
        'Em uma cidade onde a chuva da tarde é quase compromisso de agenda, o treino se organiza em volta dela: sessões ao ar livre de manhã cedo — antes do calor e da água —, plano B permanente em academia climatizada e flexibilidade para inverter o treino do dia quando o céu decide primeiro. Quem treina com acompanhamento não perde sessão por chuva: muda o local e mantém o estímulo, porque o plano já nasce com as duas versões.',
    },
    {
      pergunta: 'Há acompanhamento em Belém para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Belém, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio ou casa), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['sao-luis-ma', 'manaus-am'],

  fontes: [
    { nome: 'IBGE Cidades — Belém', url: 'https://cidades.ibge.gov.br/brasil/pa/belem/panorama' },
    { nome: 'Prefeitura de Belém', url: 'https://www.belem.pa.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  capaArte: {
    src: '/capas-cidade/belem-pa.webp',
    w: 1200,
    h: 675,
    alt:
      'Personal trainer em Belém (PA) em arte que une treino de força e cartões-postais reais da cidade — a Estação das Docas, o Ver-o-Peso e o Mangal das Garças ao fundo — Personal por Perto',
    legenda:
      'Treino personalizado em Belém: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
  atualizadoEm: '2026-07-25',
};
