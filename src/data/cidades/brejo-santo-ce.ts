import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'brejo-santo-ce',
  nome: 'Brejo Santo',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'brejo-santense',
  tipo: 'cidade',

  populacao: 51090,
  populacaoAno: 2022,
  idhm: 0.647,
  idhmClasse: 'médio',
  altitudeM: 381,

  resumoEconomico:
    'No extremo sul do Ceará, na Região do Cariri e quase na divisa com Pernambuco e Paraíba, Brejo Santo funciona como polo de comércio e serviços para os municípios vizinhos do Cariri leste. A economia combina o comércio urbano, a prestação de serviços (saúde, educação e administração pública) e a agropecuária do entorno semiárido — com destaque para a produção de leite, hortaliças e a pecuária leiteira. A posição às margens da BR-116 e a passagem da ferrovia Transnordestina reforçam o papel logístico da cidade na região.',

  mercado:
    'Como cidade média do interior cearense e referência regional, Brejo Santo tem um mercado fitness em formação, concentrado em academias locais de musculação e treino funcional. A procura por personal trainers tende a crescer entre quem busca orientação para treinar no calor do semiárido e aproveitar praças e vias da cidade para atividade ao ar livre.',

  bairrosNobres: ['Centro', 'Alto da Bela Vista', 'São José', 'Frei Damião'],
  bairrosPopulares: ['Renê Lucena I', 'Renê Lucena II', 'João de Deus', 'Triângulo'],

  parques: [
    {
      nome: 'Praça Dionísio Rocha de Lucena',
      descricao:
        'Uma das principais praças da área central, revitalizada em 2024; o espaço e o entorno arborizado são usados para caminhada e encontros, servindo de ponto de partida para quem treina ao ar livre.',
    },
    {
      nome: 'Praça Padre Cícero',
      descricao:
        'Praça tradicional da cidade, ligada à devoção religiosa típica do Cariri, com calçadas e arredores aproveitados para caminhada nos horários mais amenos do dia.',
    },
    {
      nome: 'Sopé da Chapada do Araripe',
      descricao:
        'A cidade fica ao pé da Chapada do Araripe, em terras que variam de relevo; estradas e acessos rurais próximos oferecem opções de caminhada e pedal em meio à paisagem semiárida, com cuidado redobrado no calor.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e restrita a alguns trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e em acessos da zona rural, exigindo atenção ao tráfego e ao calor.',

  clima:
    'O clima é tropical quente semiárido, característico do sertão do Cariri, com temperaturas elevadas na maior parte do ano. As chuvas se concentram no primeiro semestre (de janeiro a junho), seguidas de um longo período seco e de forte insolação no segundo semestre.',
  climaTreino:
    'O calor e a baixa umidade no período seco pedem treinar bem cedo ou no fim da tarde, com hidratação reforçada e proteção solar; nos picos de calor, ambientes climatizados são a opção mais segura, e os meses de chuva tendem a deixar o ar livre mais agradável.',

  mobilidade:
    'Brejo Santo é cortada pela BR-116, principal eixo rodoviário que liga a cidade ao restante do Cariri e à divisa com Pernambuco e Paraíba, com o transporte urbano feito por ônibus e vans. A ferrovia Transnordestina atravessa o município, reforçando sua vocação logística no sul cearense.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário do Cariri',
      descricao:
        'Brejo Santo participa do circuito de provas de rua que se espalha pelo Cariri cearense, com eventos pontuais organizados por grupos de corrida e pela prefeitura ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local mistura o futebol amador, a caminhada e a corrida nas praças e vias da cidade, e a forte tradição religiosa e cultural do Cariri — tudo moldado pelo calor do semiárido.',
  academias:
    'A oferta é formada sobretudo por academias locais de musculação e treino funcional, distribuídas pela área central e pelos bairros residenciais, com porte compatível com uma cidade média e polo regional do interior nordestino.',

  destaquesFitness: [
    'Polo de comércio e serviços do Cariri leste, no extremo sul do Ceará, na divisa com Pernambuco e Paraíba.',
    'Clima quente semiárido, que exige planejamento de horário, hidratação e proteção solar no treino.',
    'Praças centrais, como a Praça Dionísio Rocha de Lucena, usadas para caminhada e atividade ao ar livre.',
    'Cidade cortada pela BR-116 e pela ferrovia Transnordestina, com economia de comércio, serviços e agropecuária leiteira.',
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
    'Cidade quente do sertão do Cariri e referência regional no extremo sul cearense, Brejo Santo pede um treino adaptado ao calor do semiárido e que aproveite as praças e vias da cidade. Um personal trainer ajuda a organizar a rotina respeitando os horários mais amenos, reforçando a hidratação e mantendo a constância ao longo das estações seca e chuvosa.',

  vizinhas: ['crato-ce', 'barbalha-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Brejo Santo', url: 'https://cidades.ibge.gov.br/brasil/ce/brejo-santo/panorama' },
    { nome: 'Prefeitura de Brejo Santo', url: 'https://www.brejosanto.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
