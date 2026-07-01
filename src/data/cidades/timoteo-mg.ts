import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'timoteo-mg',
  nome: 'Timóteo',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'timotense',
  tipo: 'cidade',

  populacao: 81579,
  populacaoAno: 2022,
  idhm: 0.770,
  idhmClasse: 'alto',
  altitudeM: 300,

  resumoEconomico:
    'Conhecida como a Capital do Inox, Timóteo integra a Região Metropolitana do Vale do Aço, no Leste de Minas, conurbada com Coronel Fabriciano e Ipatinga. A economia gira em torno da siderurgia: a cidade abriga a Aperam South America (antiga Acesita), uma das principais produtoras de aço inoxidável das Américas, que sustenta milhares de empregos diretos e movimenta uma cadeia de fornecedores e serviços na região. Ao redor da indústria, desenvolveram-se comércio e serviços que atendem à população local e às cidades vizinhas.',

  mercado:
    'Como cidade média industrial e parte de um aglomerado urbano de porte, Timóteo tem um mercado fitness alimentado pela rotina dos trabalhadores da siderurgia e do comércio, além da forte cultura de corrida de rua no Vale do Aço. A procura por personal trainers aparece entre quem quer conciliar treino com jornadas de turno, melhorar condicionamento para as provas da região e aproveitar o clima ameno e as áreas verdes para atividade ao ar livre.',

  bairrosNobres: ['Centro-Norte', 'Alphaville', 'Recanto Verde', 'Jardim Vitória'],
  bairrosPopulares: ['Centro-Sul', 'Limoeiro', 'Macuco', 'Licuri'],

  parques: [
    {
      nome: 'Parque Estadual do Rio Doce',
      descricao:
        'Maior reserva de Mata Atlântica de Minas Gerais, o parque ocupa parte expressiva do território do município e reúne dezenas de lagoas — com destaque para a Lagoa Dom Helvécio. Trilhas e a área de visitação oferecem um cenário de natureza preservada para caminhada e contato com o verde.',
    },
    {
      nome: 'Ilha dos Araújos e orla do Rio Piracicaba',
      descricao:
        'As margens dos cursos d’água que cortam a cidade e as praças e calçadões da área urbana concentram parte da caminhada e da corrida do dia a dia, aproveitando o clima ameno do Vale do Aço.',
    },
    {
      nome: 'Praças e calçadões do Centro',
      descricao:
        'Espaços como a Praça 1º de Maio, no Centro, servem de ponto de encontro e largada de eventos esportivos, além de área de treino ao ar livre para moradores dos bairros centrais.',
    },
  ],
  ciclovias:
    'A malha cicloviária é parcial e concentrada em avenidas e trechos da área urbana; boa parte do pedal e da corrida acontece nas vias dos bairros e nas ligações com as cidades vizinhas do Vale do Aço.',

  clima:
    'O clima é tropical de altitude (Cwa na classificação de Köppen), com verão quente e chuvoso e inverno mais seco e ameno. As temperaturas costumam ser agradáveis boa parte do ano, com chuvas concentradas entre novembro e março e um período mais seco no inverno.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre durante quase todo o ano; no verão, o calor e as chuvas de fim de tarde pedem atenção ao horário e à hidratação, enquanto o inverno seco é bastante convidativo para caminhada e corrida ao ar livre.',

  mobilidade:
    'Timóteo se conecta às vizinhas Coronel Fabriciano e Ipatinga formando um contínuo urbano, com deslocamentos diários entre as três cidades. O transporte é feito por ônibus municipais e intermunicipais, e a região é servida pela BR-458 e por rodovias estaduais, além do Aeroporto de Ipatinga, nas proximidades, e da ferrovia ligada ao escoamento da produção siderúrgica.',

  corridas: [
    {
      nome: 'Circuito Vale do Aço de Corrida de Rua',
      descricao:
        'Circuito regional que reúne etapas nas cidades do Vale do Aço, com provas de 5 e 10 km em Timóteo que costumam mobilizar centenas de corredores amadores e profissionais.',
    },
    {
      nome: 'Circuito da Inconfidência — Etapa Timóteo',
      descricao:
        'Etapa do circuito estadual sediada na cidade, com formato de corrida noturna (night run) e percursos de caminhada e provas de 5 e 10 km partindo da região central.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Timóteo tem na corrida de rua um dos seus pilares, com circuitos regionais que passam pela cidade e forte adesão dos moradores. Somam-se a isso o uso das praças e das áreas verdes para caminhada e o contato com a natureza preservada do Parque Estadual do Rio Doce.',
  academias:
    'A oferta é formada por academias de musculação e treino funcional distribuídas pelos bairros centrais e residenciais, com estúdios menores atendendo a demanda por acompanhamento mais próximo, em porte compatível com uma cidade média industrial do Vale do Aço.',

  destaquesFitness: [
    'Parque Estadual do Rio Doce, maior reserva de Mata Atlântica de Minas Gerais, com dezenas de lagoas.',
    'Forte cultura de corrida de rua, com circuitos regionais do Vale do Aço passando pela cidade.',
    'Clima tropical de altitude, ameno boa parte do ano e favorável ao treino ao ar livre.',
    'Cidade da siderurgia (Aperam/aço inox), conurbada com Coronel Fabriciano e Ipatinga.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Cidade industrial de clima ameno e cercada por natureza preservada, Timóteo reúne condições favoráveis ao treino: praças, áreas verdes e uma cultura de corrida bem viva no Vale do Aço. Um personal trainer ajuda a encaixar a atividade física na rotina de turnos da siderurgia, a preparar para as provas da região e a manter a constância aproveitando o melhor de cada estação.',

  vizinhas: ['coronel-fabriciano-mg', 'ipatinga-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Timóteo', url: 'https://cidades.ibge.gov.br/brasil/mg/timoteo/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Timóteo', url: 'https://www.timoteo.mg.gov.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
