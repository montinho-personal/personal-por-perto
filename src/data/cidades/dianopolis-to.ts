import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'dianopolis-to',
  nome: 'Dianópolis',
  uf: 'TO',
  estado: 'Tocantins',
  estadoSlug: 'tocantins',
  regiao: 'Norte',
  gentilico: 'dianopolino',
  tipo: 'cidade',

  populacao: 17739,
  populacaoAno: 2022,
  idhm: 0.701,
  idhmClasse: 'alto',
  altitudeM: 693,

  resumoEconomico:
    'No sudeste do Tocantins, ao pé da Serra Geral e em pleno Cerrado, Dianópolis é uma das cidades mais antigas do estado e seu berço histórico, nascida no século XVIII no antigo arraial de São José do Duro, em região de minas de ouro — origem do nome "Duro", de "D\'ouro". Hoje a economia é puxada pela agropecuária, que responde por boa parte do valor adicionado do município, seguida por serviços, administração pública e indústria. Como sede de uma das regiões administrativas do estado, a cidade concentra um comércio regional que atende municípios vizinhos das Serras Gerais.',

  mercado:
    'Por ser uma cidade pequena do interior do Tocantins, o mercado fitness de Dianópolis é enxuto, formado por academias locais de musculação e treino funcional. A procura por personal trainers aparece sobretudo entre quem busca acompanhamento individualizado para conviver com o calor do Cerrado e para aproveitar o relevo de serra em caminhadas, corridas e trilhas.',

  bairrosNobres: ['Centro', 'Setor Aeroporto', 'Vila Nova', 'Setor Sul'],
  bairrosPopulares: ['Setor Industrial', 'Vila São José', 'Setor Universitário', 'Loteamento Bela Vista'],

  parques: [
    {
      nome: 'Serra Geral do Tocantins',
      descricao:
        'O platô da Serra Geral, com cânions, mirantes e trilhas no Cerrado, emoldura a cidade e oferece percursos para caminhada, corrida em terreno acidentado e atividade ao ar livre em meio à natureza.',
    },
    {
      nome: 'Cachoeiras da região (Escorrega Macaco e Fumaça)',
      descricao:
        'Quedas d\'água no entorno de Dianópolis, como a Escorrega Macaco e a Cachoeira da Fumaça, são destinos de banho e trilha que viram parte da rotina de quem gosta de treinar combinando esforço físico e contato com o Cerrado.',
    },
    {
      nome: 'Praças e vias do Centro histórico',
      descricao:
        'O casario antigo e as praças da área central, ligadas à história do arraial de São José do Duro, formam o circuito mais usado para caminhada e corrida leve dentro da malha urbana.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta, típica de uma cidade pequena; o pedal e a corrida acontecem majoritariamente nas vias urbanas e nas estradas vicinais de acesso à serra e às propriedades rurais do entorno.',

  clima:
    'O clima é tropical de Cerrado, quente, com duas estações bem marcadas: o período chuvoso (verão, de outubro/novembro a abril) e a seca (inverno), quando o ar fica muito seco e as temperaturas oscilam bastante entre o dia quente e a madrugada amena, favorecida pela altitude de cerca de 690 metros na Serra Geral.',
  climaTreino:
    'O calor do Cerrado e o sol forte pedem treino bem cedo ou no fim da tarde, com hidratação reforçada — atenção redobrada na estação seca, quando a baixa umidade aumenta o desgaste. Nos horários de pico de calor, ambientes climatizados são a opção mais segura.',

  mobilidade:
    'Dianópolis é cortada pela rodovia TO-040, principal ligação com Palmas e com a região das Serras Gerais, e se conecta ao eixo da BR-235; o transporte interno é feito por circulação local em uma malha urbana compacta, em que boa parte dos deslocamentos é curta.',

  corridas: [
    {
      nome: 'Corridas e caminhadas do calendário municipal',
      descricao:
        'Provas e caminhadas promovidas em datas comemorativas e festas tradicionais da cidade, como a Festa de São José, reúnem a comunidade local em percursos pelas ruas do Centro.',
    },
    {
      nome: 'Calendário de corridas de rua do Tocantins',
      descricao:
        'Corredores da cidade costumam complementar a agenda em provas realizadas em outros municípios do estado, integrando o movimento de corrida de rua do Tocantins.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso das praças e ruas do Centro histórico para caminhada e corrida, as trilhas e cachoeiras da Serra Geral e a tradição de festas populares — tudo moldado pelo clima quente e seco do Cerrado.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pela área central e pelos setores residenciais, com porte compatível com uma cidade pequena do interior do Tocantins.',

  destaquesFitness: [
    'Berço histórico do Tocantins, ligado ao antigo arraial de São José do Duro e à mineração de ouro.',
    'Serra Geral com cânions, mirantes, trilhas e cachoeiras para treino ao ar livre no Cerrado.',
    'Clima quente e seco que exige planejamento de horário e hidratação reforçada.',
    'Economia de agropecuária e comércio regional, como sede de região administrativa no sudeste do estado.',
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
    'Cidade histórica e quente, encravada na Serra Geral e no Cerrado, Dianópolis pede um treino adaptado ao clima e que aproveite o relevo de serra e as trilhas do entorno. Um personal trainer ajuda a organizar a rotina respeitando o calor e a baixa umidade, escolhendo os melhores horários e mantendo a constância ao longo das estações chuvosa e seca.',

  vizinhas: ['gurupi-to', 'porto-nacional-to'],

  fontes: [
    { nome: 'IBGE Cidades — Dianópolis', url: 'https://cidades.ibge.gov.br/brasil/to/dianopolis/panorama' },
    { nome: 'Prefeitura de Dianópolis', url: 'https://www.dianopolis.to.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
