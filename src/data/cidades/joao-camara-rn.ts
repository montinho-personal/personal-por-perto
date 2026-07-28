import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'joao-camara-rn',
  nome: 'João Câmara',
  uf: 'RN',
  estado: 'Rio Grande do Norte',
  estadoSlug: 'rio-grande-do-norte',
  regiao: 'Nordeste',
  gentilico: 'camarense',
  tipo: 'cidade',

  populacao: 33290,
  populacaoAno: 2022,
  idhm: 0.595,
  idhmClasse: 'baixo',
  altitudeM: 116,

  resumoEconomico:
    'Polo da região do Mato Grande potiguar, a cerca de 80 km de Natal pela BR-406, João Câmara virou referência nacional em energia eólica: dezenas de parques e centenas de aerogeradores espalhados pelo município movimentaram a economia local e atraíram construtoras, fornecedores e novos comércios. Ao lado da geração de energia, a base econômica reúne agropecuária (com forte tradição na pecuária e na agricultura familiar), comércio e serviços que atendem toda a microrregião. A cidade é conhecida também como "Terra dos Abalos", por seu histórico de tremores de terra, e como "Baixa Verde".',

  mercado:
    'Como cidade média que concentra serviços de toda a região do Mato Grande, João Câmara tem um mercado fitness em formação, baseado em academias locais de musculação e treino funcional. A procura por personal trainers tende a vir de quem busca acompanhamento individualizado para lidar com o calor do semiárido e manter constância no treino, seja em ambiente fechado, seja ao ar livre nas primeiras horas do dia.',

  bairrosNobres: ['Centro', 'Aluízio Bezerra'],
  bairrosPopulares: ['COHAB', 'Maranhão', 'Castanhola'],

  parques: [
    {
      nome: 'Serra do Torreão',
      descricao:
        'Formação rochosa pontiaguda que se destaca na paisagem do município, com vegetação típica do semiárido e grande potencial para trilhas e caminhadas; é o principal cartão-postal natural de João Câmara para quem gosta de atividade ao ar livre.',
    },
    {
      nome: 'Praças e calçadões do Centro',
      descricao:
        'As praças e vias centrais concentram o vaivém da cidade e servem de ponto de encontro para caminhada e exercício ao ar livre, sobretudo no início da manhã e no fim da tarde, quando o calor dá trégua.',
    },
    {
      nome: 'Entorno dos parques eólicos',
      descricao:
        'As estradas e áreas abertas próximas aos parques eólicos, com os aerogeradores ao fundo, oferecem cenário marcante para corrida e pedal de longa distância em terreno plano e ventilado.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e restrita a trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e nas estradas vicinais que cortam o território, sempre com atenção ao tráfego.',

  clima:
    'O clima é semiárido quente, típico do interior potiguar, com temperaturas elevadas ao longo de quase todo o ano e baixa umidade. As chuvas se concentram em poucos meses (sobretudo no outono), e o vento constante — o mesmo que sustenta os parques eólicos — é uma marca da região.',
  climaTreino:
    'O calor forte e a baixa umidade do semiárido pedem treino nas primeiras horas da manhã ou no fim da tarde, com hidratação reforçada e proteção solar. Nos horários de pico de calor, ambientes climatizados são a opção mais segura, e o vento constante ajuda a aliviar a sensação térmica ao ar livre.',

  mobilidade:
    'A BR-406 é o principal eixo de mobilidade, ligando João Câmara a Natal e ao litoral norte e estruturando o fluxo de pessoas e cargas da região do Mato Grande. Dentro da cidade, os deslocamentos se fazem a pé, de bicicleta, de moto e por transporte rodoviário intermunicipal que conecta os municípios vizinhos.',

  corridas: [
    {
      nome: 'Corridas e caminhadas locais',
      descricao:
        'O calendário esportivo da cidade costuma incluir corridas de rua e caminhadas organizadas pela prefeitura e por grupos locais, geralmente associadas a datas comemorativas e campanhas de saúde.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva camarense gira em torno do futebol, das caminhadas e corridas em praças e vias do Centro e do uso crescente de academias de bairro. A paisagem dos aerogeradores e a Serra do Torreão dão à cidade um cenário próprio para quem gosta de treinar ao ar livre.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, concentradas no Centro e nos bairros residenciais, com porte compatível com uma cidade média que atende toda a microrregião.',

  academiasProximas: [
    { nome: 'Calçadões e praças do Centro', detalhe: 'estrutura pública usada para caminhada e treino funcional' },
    { nome: 'Academias locais', detalhe: 'musculação com bom custo-benefício no Centro' },
  ],

  destaquesFitness: [
    'Referência nacional em energia eólica, com dezenas de parques e centenas de aerogeradores no município.',
    'Serra do Torreão, formação rochosa que é o principal atrativo natural para trilhas e caminhadas.',
    'Clima semiárido quente e ventilado, que pede planejamento de horário e hidratação no treino.',
    'Polo regional do Mato Grande potiguar, ligado a Natal pela BR-406, com economia de eólica, agropecuária e comércio.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Cercada por parques eólicos e marcada pelo calor do semiárido, João Câmara pede um treino adaptado ao clima e que aproveite as praças, as estradas ventiladas e a paisagem da Serra do Torreão. Um personal trainer ajuda a organizar a rotina respeitando os horários mais frescos, reforçando a hidratação e mantendo a constância ao longo do ano.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em João Câmara?',
      resposta:
        'O treino orientado acontece nas academias de musculação do Centro, nas praças e calçadões — que concentram caminhada e funcional no fim de tarde — e em casa, formato que cresce pela praticidade. Para quem gosta de subida, a Serra do Torreão é o cenário local para treinos de resistência com orientação, aproveitando o desnível natural do Mato Grande.',
    },
    {
      pergunta: 'Como o clima do semiárido afeta o treino em João Câmara?',
      resposta:
        'O vento constante que move os parques eólicos da região ajuda na sensação térmica, mas o sol do semiárido segue forte: as janelas boas são o amanhecer e o fim de tarde, com hidratação reforçada o dia inteiro. No meio do dia, musculação em ambiente coberto. O personal monta a semana em torno dessas janelas — treino de rua cedo, força à noite — para manter a rotina o ano todo sem depender do clima.',
    },
    {
      pergunta: 'Há acompanhamento em João Câmara para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para João Câmara, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou os calçadões do Centro), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['ceara-mirim-rn', 'macau-rn'],

  fontes: [
    { nome: 'IBGE Cidades — João Câmara', url: 'https://cidades.ibge.gov.br/brasil/rn/joao-camara/panorama' },
    { nome: 'Prefeitura de João Câmara', url: 'https://www.joaocamara.rn.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-28',
};
