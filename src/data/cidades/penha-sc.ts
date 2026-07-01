import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'penha-sc',
  nome: 'Penha',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'penhense',
  tipo: 'cidade',

  populacao: 33663,
  populacaoAno: 2022,
  idhm: 0.743,
  idhmClasse: 'alto',
  altitudeM: 5,

  resumoEconomico:
    'No litoral norte catarinense, na região turística Costa Verde & Mar, Penha reúne herança açoriana, pesca artesanal e maricultura — é reconhecida como a capital nacional do marisco, com um dos maiores parques produtores de mexilhão do país, concentrado na enseada da Armação do Itapocoroy. A economia ganhou outra escala com o Beto Carrero World, inaugurado em 1991 e apontado como o maior parque temático da América Latina, que se tornou o principal gerador de empregos diretos e indiretos da cidade. Turismo, comércio e frutos do mar sustentam o dia a dia de uma cidade que multiplica sua população na alta temporada de verão.',

  mercado:
    'O mercado fitness de Penha acompanha o perfil turístico e sazonal da cidade: a procura por personal trainers cresce no verão, com a chegada de veranistas e famílias, e se apoia no público local ao longo do ano. As praias, os calçadões da orla e os espaços ao ar livre favorecem o treino funcional e a corrida, enquanto a proximidade com Balneário Camboriú e Itajaí amplia as referências de serviço da região.',

  bairrosNobres: ['Centro', 'Armação', 'Praia Alegre', 'Gravatá'],
  bairrosPopulares: ['São Cristóvão', 'Praia Grande', 'Barreiros', 'São Miguel'],

  parques: [
    {
      nome: 'Praia Grande e orla da Armação',
      descricao:
        'As faixas de areia mais movimentadas da cidade concentram calçadões e trechos de orla usados para caminhada, corrida e treino ao ar livre, com estrutura reforçada na temporada de verão.',
    },
    {
      nome: 'Enseada da Armação do Itapocoroy',
      descricao:
        'Baía protegida onde ficam o trapiche, os ranchos de pesca e os cultivos de mexilhão; o entorno tranquilo é procurado para caminhadas à beira-mar e atividades leves ao ar livre.',
    },
    {
      nome: 'Praias mais reservadas (Vermelha, Quilombo e Paciência)',
      descricao:
        'Praias menores e menos urbanizadas, com acesso por trilhas e costões, servem de percurso para quem busca corrida e caminhada em cenário natural longe da agitação central.',
    },
  ],
  ciclovias:
    'A malha cicloviária é pontual e concentrada em trechos da área urbana e da orla; boa parte do pedal e da corrida acontece nas vias litorâneas e nos calçadões das praias mais movimentadas.',

  clima:
    'O clima é subtropical úmido, com verões quentes e chuvosos e invernos amenos, típico do litoral catarinense. A brisa marítima ameniza o calor, mas a alta temporada (dezembro a março) combina temperaturas elevadas, umidade e forte incidência solar, enquanto o inverno é mais fresco e seco.',
  climaTreino:
    'No verão, o ideal é treinar cedo ou no fim da tarde, com hidratação e proteção solar reforçadas, aproveitando a brisa do mar; o outono e o inverno, mais amenos, ampliam a janela de conforto para atividades ao ar livre ao longo do dia.',

  mobilidade:
    'O acesso principal a Penha se dá pela BR-101, eixo que liga a cidade a Balneário Camboriú, Itajaí, Navegantes e ao restante do litoral catarinense, com forte aumento de fluxo na temporada. O transporte urbano é feito por ônibus, e o aeroporto de Navegantes, próximo, atende a demanda turística da região.',

  corridas: [
    {
      nome: 'Corrida de Verão de Penha',
      descricao:
        'Prova de rua realizada na temporada de verão, que explora a orla e as praias da cidade e reforça a vocação de Penha para atividades ao ar livre no litoral.',
    },
    {
      nome: 'Desafio Beto Carrero',
      descricao:
        'Corrida sediada no parque Beto Carrero World, com percursos variados que passam pela área temática, reunindo corredores da região em torno do principal cartão-postal da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso das praias e da orla para caminhada e corrida, a tradição da pesca e da maricultura açoriana e o movimento turístico puxado pelo Beto Carrero World — tudo marcado pela sazonalidade do verão litorâneo.',
  academias:
    'A oferta reúne academias locais de musculação e treino funcional distribuídas pelo Centro e pelos bairros próximos às praias, com porte compatível com uma cidade litorânea de médio movimento que amplia a demanda na alta temporada.',

  destaquesFitness: [
    'Sede do Beto Carrero World, apontado como o maior parque temático da América Latina.',
    'Litoral norte catarinense com praias e orla usadas para caminhada, corrida e treino ao ar livre.',
    'Capital nacional do marisco, com forte tradição de pesca artesanal e maricultura na Armação do Itapocoroy.',
    'Clima subtropical litorâneo e alta temporada de verão, que pedem treino em horários mais frescos e boa hidratação.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade litorânea, turística e marcada pela sazonalidade do verão, Penha pede um treino que aproveite as praias e a orla e que se ajuste ao calor e à umidade da alta temporada. Um personal trainer ajuda a organizar a rotina, escolher os melhores horários e manter a constância durante todo o ano, dentro e fora da temporada.',

  vizinhas: ['balneario-camboriu-sc', 'itajai-sc', 'navegantes-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Penha', url: 'https://cidades.ibge.gov.br/brasil/sc/penha/panorama' },
    { nome: 'Prefeitura de Penha', url: 'https://www.penha.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
