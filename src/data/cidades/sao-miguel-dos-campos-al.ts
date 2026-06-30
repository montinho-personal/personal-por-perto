import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-miguel-dos-campos-al',
  nome: 'São Miguel dos Campos',
  uf: 'AL',
  estado: 'Alagoas',
  estadoSlug: 'alagoas',
  regiao: 'Nordeste',
  gentilico: 'são-miguelense',
  tipo: 'cidade',

  populacao: 51990,
  populacaoAno: 2022,
  idhm: 0.620,
  idhmClasse: 'médio',
  altitudeM: 102,

  resumoEconomico:
    'No sul de Alagoas, a cerca de 40 km de Maceió e cortada pela BR-101, São Miguel dos Campos tem uma economia historicamente ligada à cana-de-açúcar e ao setor sucroalcooleiro, reforçado a partir do Proálcool. À tradição agroindustrial somam-se a exploração de petróleo e gás natural — a cidade está sobre a porção terrestre da Bacia de Alagoas, com campo e estação de produção na região — além da indústria de cimento e de um comércio de referência para os municípios vizinhos do sul do estado.',

  mercado:
    'Como cidade média do interior alagoano, São Miguel dos Campos tem um mercado fitness concentrado em academias locais de musculação e treino funcional, com porte compatível com a economia regional. A procura por personal trainers tende a vir de quem busca acompanhamento mais próximo e de quem quer adaptar o treino ao calor úmido do clima litorâneo, aproveitando praças e vias da área central para atividade ao ar livre.',

  bairrosNobres: ['Centro', 'Paraíso', 'Bela Vista', 'Lourdes'],
  bairrosPopulares: ['Fátima', 'Coité', 'Hélio Jatobá', 'Humberto Alves'],

  parques: [
    {
      nome: 'Praça do Relógio',
      descricao:
        'Ponto de encontro tradicional na área central, junto à Rua Dr. Rômulo de Almeida; é referência de largada de eventos de corrida na cidade e espaço de uso cotidiano para caminhada no entorno.',
    },
    {
      nome: 'Praça Padre Júlio Albuquerque',
      descricao:
        'Praça do Centro que organiza a convivência urbana e serve de apoio para caminhadas leves e encontros, em meio ao comércio e aos serviços da parte central.',
    },
    {
      nome: 'Praça Nossa Senhora das Graças',
      descricao:
        'Largo no bairro de Fátima que funciona como espaço de lazer de bairro, com uso para caminhada e atividade ao ar livre próxima das residências.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e descontínua, típica de uma cidade média do interior; boa parte do pedal e da corrida acontece nas vias urbanas e em deslocamentos pela área central e bairros residenciais.',

  clima:
    'O clima é tropical litorâneo, quente e úmido, característico do leste alagoano. As temperaturas se mantêm altas ao longo do ano, com pouca variação, e o regime de chuvas se concentra no outono e no inverno (em torno de abril a julho), quando os meses costumam ser os mais chuvosos; o verão é mais seco e quente.',
  climaTreino:
    'O calor e a umidade pedem treinar de manhã cedo ou no fim da tarde, com hidratação reforçada e roupas leves. Na temporada de chuvas do meio do ano, convém ter um plano alternativo em ambiente coberto, enquanto os meses mais secos favorecem a atividade ao ar livre.',

  mobilidade:
    'A BR-101 corta o município e é o principal eixo de ligação, conectando São Miguel dos Campos a Maceió, ao Sul de Alagoas e ao restante do Nordeste; o transporte urbano é feito por ônibus e vans, e a posição na rodovia sustenta o papel de polo comercial e logístico da região.',

  corridas: [
    {
      nome: 'Corrida Caetés',
      descricao:
        'Prova de rua promovida na cidade com percursos de 5 km e 10 km e modalidade de caminhada, com largada na área central e trajeto pelas principais ruas do município.',
    },
    {
      nome: 'Corrida de Rua da Advocacia',
      descricao:
        'Evento de corrida de rua organizado pela classe da advocacia local, com percurso urbano voltado a incentivar a prática de atividade física na cidade.',
    },
    {
      nome: 'Forcefit Run',
      descricao:
        'Corrida de rua realizada em São Miguel dos Campos com distâncias de 5 km e 10 km, reunindo corredores da cidade e da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso das praças e vias centrais para caminhada e corrida com provas de rua que movimentam a cidade, tudo condicionado ao calor úmido do clima litorâneo e ao perfil de uma cidade média ligada à cana e ao comércio regional.',
  academias:
    'A oferta é formada sobretudo por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, em número compatível com uma cidade média do interior alagoano.',

  destaquesFitness: [
    'Cidade-polo do sul de Alagoas, cortada pela BR-101 e a cerca de 40 km de Maceió.',
    'Praça do Relógio e demais praças centrais como espaços de caminhada e ponto de eventos de corrida.',
    'Clima tropical litorâneo, quente e úmido, que exige cuidado com horário e hidratação no treino.',
    'Economia ligada ao setor sucroalcooleiro e à exploração de petróleo e gás natural.',
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
    'Cidade média e quente do sul de Alagoas, São Miguel dos Campos pede um treino adaptado ao clima litorâneo úmido e que aproveite as praças e vias centrais. Um personal trainer ajuda a organizar a rotina, escolher os melhores horários para fugir do calor e manter a constância ao longo do ano.',

  vizinhas: ['maceio-al', 'marechal-deodoro-al'],

  fontes: [
    { nome: 'IBGE Cidades — São Miguel dos Campos', url: 'https://cidades.ibge.gov.br/brasil/al/sao-miguel-dos-campos/panorama' },
    { nome: 'Prefeitura de São Miguel dos Campos', url: 'https://saomigueldoscampos.al.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
