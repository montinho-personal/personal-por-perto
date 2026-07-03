import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'vera-cruz-rs',
  nome: 'Vera Cruz',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'vera-cruzense',
  tipo: 'cidade',

  populacao: 26710,
  populacaoAno: 2022,
  idhm: 0.737,
  idhmClasse: 'alto',
  altitudeM: 68,

  resumoEconomico:
    'Colonizada por imigrantes alemães a partir de 1854, quando as primeiras famílias se fixaram no antigo Faxinal de Dona Josefa, Vera Cruz integra o Vale do Rio Pardo, região considerada o maior polo fumageiro do mundo. O tabaco responde por cerca de 73% da produção primária do município: em um universo de aproximadamente 2,4 mil propriedades rurais, 95% têm no fumo sua principal atividade, cultivado majoritariamente em regime de agricultura familiar. A cidade também abriga empresas processadoras de tabaco, caso da B2B Tabacos do Brasil, e promove anualmente a Feira da Produção, evento que celebra a diversificação da agricultura local — fumo, leite, hortifrúti — e reúne dezenas de milhares de visitantes.',

  mercado:
    'Como cidade pequena do interior gaúcho, o mercado fitness de Vera Cruz é enxuto, formado por academias de musculação e estúdios de treino funcional concentrados no Centro. A procura por personal trainer tende a vir de quem busca acompanhamento individualizado, seja para compensar a rotina de trabalho ligada à lavoura de fumo e à indústria processadora, seja para aproveitar os espaços públicos da cidade fora dos picos de calor do verão.',

  bairrosNobres: ['Centro', 'Boa Vista'],
  bairrosPopulares: ['Cipriano de Oliveira', 'Arco-Íris', 'São Francisco'],

  parques: [
    {
      nome: 'Praça José Bonifácio',
      descricao:
        'Praça central demarcada ainda no século XIX, reúne ampla área verde, playground, estrutura para a prática esportiva e um quiosque de informações turísticas. É o principal ponto de encontro da cidade e sedia eventos como a Feira da Produção e provas de corrida e caminhada.',
    },
    {
      nome: 'Parque de Eventos de Vera Cruz',
      descricao:
        'Espaço que concentra o Ginásio Poliesportivo do município e serve de sede para a Feira da Produção e outros eventos de grande público, funcionando também como ponto de referência para atividades físicas coletivas.',
    },
    {
      nome: 'Ginásio Segefredo Werner (Guidão)',
      descricao:
        'Ginásio esportivo modernizado por meio do programa estadual Avançar+ Esporte, usado para modalidades coletivas e treinos indoor, importante nos dias de frio mais intenso do inverno.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária formal é limitada; caminhada e pedal acontecem principalmente nas ruas do Centro, no entorno da Praça José Bonifácio e nas estradas vicinais que ligam a sede aos distritos rurais produtores de fumo.',

  clima:
    'O clima é subtropical úmido (Cfa, na classificação de Köppen), com chuvas bem distribuídas ao longo do ano, sem estação seca definida. Os verões são quentes, e os invernos, mais frios para os padrões locais, com ocorrência de geadas em dias de massa de ar polar — a região do Vale do Rio Pardo já registrou mínimas próximas de 1°C em ondas de frio intenso.',
  climaTreino:
    'O calor do verão pede treinos nos horários mais amenos, de manhã cedo ou no fim da tarde, com atenção reforçada à hidratação; já os dias de geada e frio mais intenso do inverno favorecem o treino indoor ou os horários mais quentes do dia, com aquecimento adequado antes do esforço.',

  mobilidade:
    'O acesso principal se dá pela rodovia estadual ERS-409, que liga Vera Cruz a Santa Cruz do Sul (cerca de 9 km) e, já em Santa Cruz do Sul, entronca com a rodovia federal BR-471 — eixo que corta o Vale do Rio Pardo e segue rumo a Porto Alegre, distante cerca de 166 km. No perímetro urbano, o trecho da ERS-409 recebe os nomes de ruas Roberto Gruendling, Cláudio Manoel e Intendente Koelzer. O transporte coletivo é limitado, e o deslocamento entre a sede e os distritos rurais — onde vive parte da população ligada à lavoura de fumo — depende majoritariamente de veículo próprio.',

  corridas: [
    {
      nome: 'Corrida e Caminhada da Mulher',
      descricao:
        'Prova organizada pelo Conselho Municipal dos Direitos da Mulher em parceria com a Prefeitura de Vera Cruz, realizada em torno do Dia Internacional da Mulher, com largada na Praça José Bonifácio e percursos de 3 km de caminhada e de 3 km e 6 km de corrida.',
    },
    {
      nome: 'Corrida Solidária ADAE',
      descricao:
        'Prova de rua com fins solidários realizada em Vera Cruz, já com edições consecutivas, organizada com apoio de empresas especializadas em eventos esportivos do Vale do Rio Pardo.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Vera Cruz gira em torno da Praça José Bonifácio e do Parque de Eventos, que concentra o Ginásio Poliesportivo e sedia a Feira da Produção, além de provas de rua como a Corrida e Caminhada da Mulher e a Corrida Solidária ADAE, que mobilizam a comunidade ao longo do ano.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e estúdios de treino funcional concentrados no Centro, com porte compatível com uma cidade pequena do interior gaúcho.',

  destaquesFitness: [
    'Parte do Vale do Rio Pardo, considerado o maior polo fumageiro do mundo, com o tabaco respondendo por cerca de 73% da produção primária cultivada majoritariamente pela agricultura familiar.',
    'Praça José Bonifácio e Parque de Eventos como principais espaços públicos de caminhada, convívio e eventos ao ar livre.',
    'Clima subtropical (Cfa), com verões quentes e invernos frios sujeitos a geadas, exigindo ajuste sazonal do treino.',
    'Colonização alemã iniciada em 1854, acesso pela ERS-409 até a BR-471 e proximidade de cerca de 9 km com Santa Cruz do Sul.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Marcada pela colonização alemã e por integrar o maior polo fumageiro do mundo, Vera Cruz oferece um ritmo de treino que pode aproveitar a Praça José Bonifácio e o Parque de Eventos como espaços públicos, respeitando o calor do verão e o frio das geadas de inverno. Um personal trainer ajuda a manter a constância em uma cidade onde a oferta de academias é enxuta, adaptando os treinos à rotina de quem vive entre a lavoura de fumo, a indústria processadora e o comércio local.',

  vizinhas: ['santa-cruz-do-sul-rs', 'candelaria-rs', 'venancio-aires-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Vera Cruz', url: 'https://cidades.ibge.gov.br/brasil/rs/vera-cruz/panorama' },
    { nome: 'Prefeitura Municipal de Vera Cruz', url: 'https://www.veracruz.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
