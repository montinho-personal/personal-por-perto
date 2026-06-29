import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-mateus-es',
  nome: 'São Mateus',
  uf: 'ES',
  estado: 'Espírito Santo',
  estadoSlug: 'espirito-santo',
  regiao: 'Sudeste',
  gentilico: 'mateense',
  tipo: 'cidade',

  populacao: 123752,
  populacaoAno: 2022,
  idhm: 0.735,
  idhmClasse: 'alto',
  altitudeM: 26,

  resumoEconomico:
    'Segunda cidade mais antiga do Espírito Santo, fundada em 1544 às margens do rio Cricaré, São Mateus é polo regional do norte capixaba e um dos municípios mais populosos do estado. Sua economia combina a produção de petróleo e gás onshore com forte agronegócio — café conilon, pimenta-do-reino e outras lavouras —, além de comércio e serviços que atendem a toda a região. O litoral, com o balneário de Guriri, agrega turismo e veraneio à dinâmica local.',

  mercado:
    'Cidade média e em crescimento, com renda vinda do petróleo e do agronegócio, São Mateus reúne academias e estúdios no Centro e nos bairros centrais, além de oferta sazonal voltada ao verão em Guriri. O público inclui famílias, comerciantes, trabalhadores da indústria e veranistas.',

  bairrosNobres: ['Sernamby', 'Ideal', 'Boa Vista', 'Centro'],
  bairrosPopulares: ['Inocoop', 'Guriri', 'Vila Nova', 'Pedra D\'Água'],

  parques: [
    {
      nome: 'Orla de Guriri',
      descricao:
        'Calçadão à beira-mar no balneário de Guriri, usado para caminhada, corrida e ciclismo, com a praia disponível para treino funcional e atividades ao ar livre.',
    },
    {
      nome: 'Sítio Histórico Porto de São Mateus',
      descricao:
        'Conjunto histórico colonial às margens do rio Cricaré, com ruas e largos arborizados que servem de cenário para caminhadas no Centro.',
    },
    {
      nome: 'Áreas verdes e praças do Centro',
      descricao:
        'Praças e espaços públicos no perímetro urbano usados para caminhada e atividade física leve.',
    },
  ],
  ciclovias:
    'A orla de Guriri é muito usada para pedaladas; a extensão oficial da malha cicloviária do município não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical litorâneo, quente o ano todo, com umidade elevada típica do norte capixaba e influência da brisa marítima em Guriri.',
  climaTreino:
    'Pelo calor e pela umidade altos, convém concentrar os treinos no começo da manhã e no fim da tarde, com hidratação constante e atenção à exposição solar na orla.',

  mobilidade:
    'São Mateus é cortada pela BR-101, principal eixo rodoviário norte-sul do estado, que liga a cidade a Linhares e à Grande Vitória ao sul e à divisa com a Bahia ao norte; a ES-315 conecta o Centro ao balneário de Guriri.',

  corridas: [
    {
      nome: 'Corrida Rústica de São Mateus',
      descricao:
        'Prova de rua tradicional associada às comemorações do aniversário da cidade, em 21 de setembro.',
    },
    {
      nome: 'Copa Norte Capixaba de Mountain Bike',
      descricao:
        'Circuito regional de mountain bike com etapas disputadas no município e na região norte do estado.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o futebol — com o tradicional Estádio Sernamby — à corrida de rua ligada às festas da cidade e a esportes ao ar livre na orla de Guriri, do ciclismo às atividades de praia.',
  academias:
    'A oferta reúne academias e estúdios no Centro e nos bairros centrais, com a orla de Guriri funcionando como espaço natural de treino, sobretudo no verão.',

  destaquesFitness: [
    'Orla de Guriri, com calçadão à beira-mar para corrida, caminhada e ciclismo.',
    'Praia de Guriri disponível para treino funcional e atividades ao ar livre.',
    'Centro histórico às margens do rio Cricaré, com ruas e largos para caminhada.',
    'Calendário esportivo regional ativo (Corrida Rústica e Copa Norte Capixaba de MTB).',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 280,
    mensalMax: 720,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Segunda cidade mais antiga do Espírito Santo e polo do norte capixaba, São Mateus une história, petróleo e agro ao litoral de Guriri. Um personal trainer ajuda a aproveitar a orla e os espaços do Centro com método, ajustando horários e hidratação ao clima quente e úmido da região.',

  vizinhas: ['linhares-es', 'aracruz-es', 'colatina-es'],

  fontes: [
    { nome: 'IBGE Cidades — São Mateus', url: 'https://cidades.ibge.gov.br/brasil/es/sao-mateus/panorama' },
    { nome: 'Prefeitura de São Mateus', url: 'https://www.saomateus.es.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
