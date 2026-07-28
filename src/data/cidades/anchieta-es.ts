import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'anchieta-es',
  nome: 'Anchieta',
  uf: 'ES',
  estado: 'Espírito Santo',
  estadoSlug: 'espirito-santo',
  regiao: 'Sudeste',
  gentilico: 'anchietense',
  tipo: 'cidade',

  populacao: 29984,
  populacaoAno: 2022,
  idhm: 0.730,
  idhmClasse: 'alto',
  altitudeM: 2,

  resumoEconomico:
    'No litoral sul do Espírito Santo, a cerca de 80 km de Vitória, Anchieta foi fundada em 1561 pelo padre jesuíta José de Anchieta como a antiga vila de Reritiba, o que faz da cidade um polo de turismo histórico e religioso, com destaque para o Santuário Nacional de São José de Anchieta e seu museu. A economia também é sustentada pelo turismo de praia (Iriri, Castelhanos, Ubu e Parati), pela pesca artesanal e pelo complexo industrial da Samarco, com usina de pelotização de minério de ferro e o Porto de Ubu, responsável por parte relevante da arrecadação municipal.',

  mercado:
    'O mercado fitness de Anchieta é de porte pequeno a médio, concentrado no Centro e reforçado no verão pelo aumento sazonal de população nas vilas de praia. A procura por personal trainers tende a combinar treino em academia com atividade ao ar livre nas orlas e nas áreas de mata da região, aproveitando o clima predominantemente quente.',

  bairrosNobres: ['Iriri', 'Castelhanos', 'Ubu', 'Parati'],
  bairrosPopulares: ['Centro', 'Marobá', 'Alto Pongal', 'Jabaquara'],

  parques: [
    {
      nome: 'Praia de Castelhanos',
      descricao:
        'A cerca de 5 km do Centro, no caminho para Ubu, reúne trilhas, prática de esportes náuticos, surf, vôlei e caminhada, além de comunidades de pesca artesanal na Praia da Areia Preta, ao lado.',
    },
    {
      nome: 'Orla de Iriri',
      descricao:
        'Principal vila balneária do município, com a maior infraestrutura hoteleira de Anchieta; a orla concentra o movimento de caminhada e corrida entre moradores e turistas.',
    },
    {
      nome: 'Ubu e Parati',
      descricao:
        'Vilas de pescadores vizinhas na costa sul, com projeto de requalificação da orla em andamento; praias como Praia do Além e Praia de Santa Helena, na região, são procuradas por surfistas.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada e concentrada em trechos pontuais das vilas de praia; a maior parte da caminhada e da corrida ainda acontece nas calçadas e orlas sem ciclovia contínua.',

  clima:
    'O clima é tropical quente e superúmido (Aw, na classificação de Köppen), com temperatura média anual em torno de 24 °C, chuvas concentradas no verão e estiagem relativa no inverno. Fevereiro costuma ser o mês mais quente, com média próxima de 27 °C, e julho o mais ameno, com média por volta de 21 °C.',
  climaTreino:
    'O calor e a umidade elevados favorecem treinos no início da manhã ou no fim da tarde, com atenção à hidratação; nos meses de verão, o horário de pico de sol pede ambientes cobertos ou sombreados.',

  mobilidade:
    'O principal acesso é pela Rodovia do Sol (ES-060), que liga Vitória a Anchieta passando por Vila Velha e Guarapari, com viagem de aproximadamente 1h30 a partir da capital. A cidade não tem transporte sobre trilhos para passageiros; a movimentação de minério da Samarco é feita por mineroduto e ferrovia de carga até o Porto de Ubu.',

  corridas: [
    {
      nome: 'Desafio de Corrida de Rua da GCMA',
      descricao:
        'Prova anual organizada pela Guarda Civil Municipal de Anchieta, com percurso de 7 km, largada e chegada na Vila Olímpica; a inscrição costuma ser feita com doação de alimentos.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local gira em torno das praias: surf em pontos como Praia do Além e Praia de Santa Helena, esportes náuticos em Castelhanos, caminhada nas orlas das vilas balneárias e uma forte tradição de pesca artesanal, especialmente em torno da Areia Preta.',
  academias:
    'A oferta de academias é modesta e concentrada no Centro, com estúdios e espaços de musculação, treino funcional e modalidades como zumba e pilates atendendo a demanda local.',

  academiasProximas: [
    { nome: 'Estrutura pública das orlas', detalhe: 'calçadões de Iriri, Ubu e Castelhanos para treino ao ar livre' },
    { nome: 'Academias locais', detalhe: 'musculação no Centro e em Iriri' },
  ],

  destaquesFitness: [
    'Berço do turismo religioso do padre José de Anchieta, com o Santuário Nacional e seu museu.',
    'Praias como Iriri, Castelhanos, Ubu e Parati, com pontos de surf em Praia do Além e Santa Helena.',
    'Complexo industrial da Samarco (usina de pelotização e Porto de Ubu), motor econômico da região.',
    'Tradição de pesca artesanal e piscinas naturais formadas nos recifes na maré baixa.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 320,
  },

  conclusao:
    'Cidade histórica e litorânea, Anchieta combina o legado jesuíta de seu fundador com vilas de praia como Iriri, Castelhanos e Ubu, além da presença industrial da Samarco. Um personal trainer ajuda a estruturar o treino considerando o calor constante, aproveitando as orlas das praias como espaço de atividade ao ar livre e mantendo a constância nos meses de maior movimento turístico.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Anchieta?',
      resposta:
        'Nas praias — Castelhanos para funcional na areia, Iriri e Ubu para corrida na orla —, nas academias do Centro e de Iriri e em casa, com forte procura nas casas de veraneio durante o verão. A cidade compacta facilita a logística do personal, que costuma alternar entre a orla de manhã e a academia no fim do dia.',
    },
    {
      pergunta: 'O verão muda a rotina de treino em Anchieta?',
      resposta:
        'Muda — para melhor e para mais cedo. Na alta temporada, o calor e o movimento das praias empurram o treino para o início da manhã, quando Castelhanos e Iriri estão vazias e a temperatura coopera. Veranistas aproveitam para trocar a academia pelo funcional na areia sem perder o ritmo, e o Desafio de Corrida da GCMA mantém a cena local ativa. Hidratação reforçada e protetor solar são parte do treino no litoral capixaba.',
    },
    {
      pergunta: 'Há acompanhamento em Anchieta para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Anchieta, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa de veraneio ou a praia), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['guarapari-es', 'marataizes-es', 'vila-velha-es'],

  fontes: [
    { nome: 'IBGE Cidades — Anchieta', url: 'https://cidades.ibge.gov.br/brasil/es/anchieta/panorama' },
    { nome: 'Prefeitura de Anchieta', url: 'https://www.anchieta.es.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-28',
};
