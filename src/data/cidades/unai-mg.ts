import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'unai-mg',
  nome: 'Unaí',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'unaiense',
  tipo: 'cidade',

  populacao: 86619,
  populacaoAno: 2022,
  idhm: 0.736,
  idhmClasse: 'alto',
  altitudeM: 640,

  resumoEconomico:
    'Situada no Noroeste de Minas, em pleno Cerrado e a cerca de 170 km de Brasília, Unaí é um dos maiores polos do agronegócio do estado — figurando entre os municípios mineiros de maior valor de produção agropecuária. A economia gira em torno dos grãos (feijão, soja e milho), com destaque histórico para o feijão irrigado, além de café, cana-de-açúcar e pecuária de corte e de leite. A agroindústria e o comércio de insumos, máquinas e serviços rurais completam uma base econômica fortemente ligada ao campo, impulsionada pela topografia plana e pela oferta de terras favoráveis a grandes projetos irrigados.',

  mercado:
    'O mercado fitness de Unaí acompanha o porte de uma cidade média do interior mineiro, com academias de musculação e treino funcional distribuídas pelos bairros centrais e residenciais. A procura por personal trainers tende a vir de profissionais ligados ao agronegócio, comércio e serviços que buscam treino orientado para conciliar rotina intensa e clima quente de Cerrado, aproveitando as praças e vias da cidade para atividade ao ar livre.',

  bairrosNobres: ['Centro', 'Bela Vista', 'Cidade Nova', 'Mansões Sul'],
  bairrosPopulares: ['Divinéia', 'Nossa Senhora Aparecida', 'Sagrada Família', 'Cruzeiro'],

  parques: [
    {
      nome: 'Praças e área central',
      descricao:
        'O núcleo urbano plano de Unaí concentra praças e calçadões que servem de espaço para caminhada, corrida leve e treino ao ar livre, especialmente nos horários mais frescos do dia.',
    },
    {
      nome: 'Entorno do Rio Preto',
      descricao:
        'A cidade pertence à bacia do Rio São Francisco e é cortada por cursos d’água como o Rio Preto; o entorno oferece paisagem de Cerrado e trechos usados para atividade física em contato com a natureza.',
    },
    {
      nome: 'Estradas e paisagem do Cerrado',
      descricao:
        'O relevo plano e as vias que ligam a sede às áreas rurais abrem opções de pedal e corrida de longa distância em meio às lavouras e à vegetação típica do Cerrado noroeste-mineiro.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias planas da cidade e nas estradas de acesso à zona rural.',

  clima:
    'O clima é tropical de Cerrado, com inverno seco e verão chuvoso. A estação das chuvas vai de novembro a abril, enquanto a seca se estende de maio a outubro — sendo julho o mês mais seco, com baixa umidade do ar. As temperaturas variam ao longo do ano, com dias quentes e noites mais amenas favorecidas pela altitude de cerca de 640 metros na sede.',
  climaTreino:
    'O calor do meio-dia e a baixa umidade típica da seca pedem treinar cedo ou no fim da tarde, com hidratação reforçada; no período seco, a atenção à umidade e à proteção das vias respiratórias ajuda, enquanto o verão chuvoso favorece o treino ao ar livre nas janelas sem chuva.',

  mobilidade:
    'Unaí tem localização estratégica no Noroeste de Minas, ligada a Brasília pela BR-251 (a cerca de 170 km) e a Paracatu e ao restante da região pela MG-188. A proximidade com o Distrito Federal e a malha de rodovias facilitam o escoamento da produção de grãos e integram a cidade a um corredor logístico regional. O transporte urbano é feito por ônibus, e os deslocamentos internos são favorecidos pela topografia plana.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva de Unaí combina o futebol — com clube local que já disputou competições ligadas ao Distrito Federal, reflexo da proximidade com Brasília — ao uso das praças e vias planas para caminhada e corrida. O calendário da cidade é marcado por festas tradicionais e pela Exposição Agropecuária, que reúne a comunidade em torno da vocação rural da região.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelos bairros centrais e residenciais, com porte compatível com uma cidade média do interior de Minas.',

  destaquesFitness: [
    'Um dos maiores polos do agronegócio de Minas, referência em feijão, soja e milho.',
    'Clima tropical de Cerrado, com inverno seco (maio a outubro) e verão chuvoso.',
    'Topografia plana, que facilita caminhada, corrida e pedal na cidade e nas estradas rurais.',
    'Localização estratégica no Noroeste mineiro, a cerca de 170 km de Brasília pela BR-251.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Polo do agronegócio no Cerrado noroeste-mineiro e vizinha de Brasília, Unaí pede um treino que respeite o calor e a baixa umidade da seca e que aproveite o relevo plano da cidade. Um personal trainer ajuda a organizar a rotina em meio à correria do campo e do comércio, definindo os melhores horários e mantendo a constância ao longo das estações seca e chuvosa.',

  vizinhas: ['paracatu-mg', 'brasilia-df'],

  fontes: [
    { nome: 'IBGE Cidades — Unaí', url: 'https://cidades.ibge.gov.br/brasil/mg/unai/panorama' },
    { nome: 'Prefeitura de Unaí', url: 'https://www.prefeituraunai.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
