import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-miguel-do-oeste-sc',
  nome: 'São Miguel do Oeste',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'miguel-oestino',
  tipo: 'cidade',

  populacao: 44330,
  populacaoAno: 2022,
  idhm: 0.801,
  idhmClasse: 'muito alto',
  altitudeM: 720,

  resumoEconomico:
    'Conhecida como a "Capital do Extremo Oeste", São Miguel do Oeste é a cidade polo de uma região que reúne cerca de 20 municípios no canto mais ocidental de Santa Catarina, perto da fronteira com a Argentina. A economia local combina comércio diversificado, serviços e agroindústria, com forte presença da colonização italiana, alemã e de descendentes vindos do Rio Grande do Sul. A cidade concentra órgãos e instituições de saúde, segurança e educação que atendem toda a microrregião, com destaque para o Hospital Regional Terezinha Gaio Basso, referência 100% SUS que atende pacientes de dezenas de municípios do extremo oeste catarinense, e para o campus da Unoesc, universidade que também polariza o ensino superior da região.',

  mercado:
    'Como polo regional de serviços, São Miguel do Oeste tem um mercado fitness mais estruturado do que o de cidades vizinhas de menor porte, com academias de bairro, redes de musculação e profissionais de personal trainer atendendo tanto moradores locais quanto pessoas que se deslocam de municípios menores em busca de estrutura melhor. A presença da Unoesc e do público universitário também contribui para a demanda por atividade física orientada.',

  bairrosNobres: ['Centro', 'Agostini', 'São Luiz'],
  bairrosPopulares: ['Estrela', 'São Jorge', 'Salete', 'Progresso'],

  parques: [
    {
      nome: 'Praça Walnir Bottaro Daniel',
      descricao:
        'Praça central com áreas verdes, playground e bancos; ponto de encontro e de eventos culturais no coração da cidade.',
    },
    {
      nome: 'Entorno da Matriz e calçadão central',
      descricao:
        'Área verde com calçamento no centro da cidade, próxima à igreja Matriz, usada para caminhada no dia a dia.',
    },
    {
      nome: 'Trilha do Morro do Cruzeiro',
      descricao:
        'Trilha de acesso a ponto elevado com vista panorâmica da cidade, procurada por quem pratica caminhada e trekking ao ar livre.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada e concentrada em trechos pontuais da malha urbana; a maior parte dos deslocamentos ativos e do treino ao ar livre ocorre nas vias e praças do centro.',

  clima:
    'O clima é subtropical (Cfa), com verões quentes — média do mês mais quente em torno de 23 °C — e invernos frios, com ocorrência de geadas e temperatura média do mês mais frio próxima de 14 °C. A temperatura média anual fica na faixa de 18 a 19 °C, com precipitação bem distribuída ao longo do ano.',
  climaTreino:
    'No verão, o calor pede treino em horários mais frescos e hidratação reforçada; no inverno, as geadas e o frio característico do oeste catarinense favorecem ambientes fechados e aquecimento mais longo antes da atividade ao ar livre.',

  mobilidade:
    'A BR-282 é o principal eixo rodoviário, ligando São Miguel do Oeste ao restante do oeste catarinense, ao litoral do estado e à fronteira com a Argentina, consolidando a cidade como porta de entrada logística do extremo oeste. O deslocamento interno é feito majoritariamente por carro, com transporte coletivo urbano por ônibus.',

  corridas: [
    {
      nome: 'Circuito de Corrida Disauto Santa Catarina — etapa São Miguel do Oeste',
      descricao:
        'Etapa regional de um circuito estadual de corrida de rua, com provas de 5 km e 10 km, caminhada e prova infantil, realizada nas ruas da cidade.',
    },
  ],
  culturaEsportiva:
    'Por ser polo regional, a cidade recebe etapas de circuitos estaduais de corrida de rua e concentra estrutura esportiva pública e privada acima da média dos municípios vizinhos, incluindo o centro esportivo da Unoesc, com piscina, ginásio e laboratório de fisiologia do exercício.',
  academias:
    'A oferta de academias inclui redes de musculação, estúdios de treino funcional e personal trainers, concentrados sobretudo no Centro e em bairros adjacentes, refletindo o papel da cidade como referência de serviços para a microrregião do extremo oeste catarinense.',

  destaquesFitness: [
    'Cidade polo de cerca de 20 municípios do extremo oeste catarinense, com IDHM muito alto (0,801).',
    'Hospital Regional Terezinha Gaio Basso e campus da Unoesc reforçam a estrutura de saúde e educação, incluindo centro esportivo universitário.',
    'BR-282 conecta a cidade ao litoral de SC e à fronteira com a Argentina, sustentando seu papel logístico regional.',
    'Invernos frios com geadas e verões quentes exigem periodização sazonal do treino ao longo do ano.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Polo regional do extremo oeste catarinense com IDHM muito alto, São Miguel do Oeste reúne estrutura de saúde, educação e serviços acima da média das cidades vizinhas — um bom terreno para o acompanhamento fitness. Um personal trainer ajuda a adaptar o treino às estações bem marcadas da região, do calor do verão às geadas do inverno, mantendo a constância ao longo do ano.',

  vizinhas: ['chapeco-sc', 'maravilha-sc', 'xanxere-sc'],

  fontes: [
    { nome: 'IBGE Cidades — São Miguel do Oeste', url: 'https://cidades.ibge.gov.br/brasil/sc/sao-miguel-do-oeste/panorama' },
    { nome: 'Prefeitura de São Miguel do Oeste', url: 'https://www.saomiguel.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
