import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tocantinopolis-to',
  nome: 'Tocantinópolis',
  uf: 'TO',
  estado: 'Tocantins',
  estadoSlug: 'tocantins',
  regiao: 'Norte',
  gentilico: 'tocantinopolino',
  tipo: 'cidade',

  populacao: 22615,
  populacaoAno: 2022,
  idhm: 0.681,
  idhmClasse: 'médio',
  altitudeM: 157,

  resumoEconomico:
    'No extremo norte do Tocantins, à margem esquerda do rio Tocantins e bem próxima de Imperatriz (MA), Tocantinópolis é um polo regional histórico do Bico do Papagaio. A economia se apoia no comércio que atende a cidade e os municípios vizinhos, na agropecuária e no extrativismo do babaçu, com forte presença do setor público e educacional — a cidade abriga um campus da Universidade Federal do Norte do Tocantins (UFNT), antiga unidade da UFT. A região tem ainda presença significativa do povo indígena Apinajé, cujas terras ficam no entorno do município.',

  mercado:
    'Por ser uma cidade pequena do interior do Norte, o mercado fitness de Tocantinópolis é enxuto, formado por academias de bairro e alguns estúdios de treino. A presença do campus universitário e de uma população jovem ajuda a sustentar a procura por orientação, e o personal trainer costuma ser buscado por quem quer treino individualizado adaptado ao calor e à rotina do interior.',

  bairrosNobres: ['Setor Central', 'Setor Aeroporto', 'Beira Rio', 'Céu Azul'],
  bairrosPopulares: ['Vila Matilde', 'Vila Santa Rita', 'Bairro São João', 'Setor Sul'],

  parques: [
    {
      nome: 'Orla do rio Tocantins',
      descricao:
        'A faixa às margens do rio Tocantins é o principal espaço ao ar livre da cidade, usada para caminhada, corrida e encontros no fim de tarde, com vista para o rio e para a divisa com o Maranhão.',
    },
    {
      nome: 'Praça da Igreja Matriz',
      descricao:
        'Ponto central de convivência da cidade, a praça e seu entorno servem de referência para caminhadas urbanas e concentram eventos esportivos, como a corrida de aniversário do município.',
    },
    {
      nome: 'Entorno de Cerrado',
      descricao:
        'A cidade está cercada por paisagem de Cerrado com transição para a Amazônia, e as estradas vicinais e áreas rurais próximas oferecem percursos para pedal e corrida em meio à natureza, sempre condicionados ao calor da região.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é modesta e restrita a poucos trechos urbanos; boa parte do pedal e da corrida acontece nas ruas planas da cidade e na orla do rio.',

  clima:
    'O clima é tropical quente, típico do Cerrado em transição para a Amazônia, com duas estações bem marcadas: um período chuvoso (em geral de novembro a abril) e uma estiagem prolongada (de maio a outubro), quando o ar fica mais seco e a baixa umidade se acentua. As temperaturas são altas o ano todo, com calor especialmente forte no fim da seca.',
  climaTreino:
    'O calor intenso e a baixa umidade no período seco pedem treino logo cedo ou no fim da tarde, com hidratação reforçada; nos picos de calor, ambientes climatizados são a opção mais segura, e o cuidado com a desidratação vale o ano inteiro.',

  mobilidade:
    'Tocantinópolis se conecta ao restante do estado pela BR-153 (Belém–Brasília), eixo que passa pela região e liga a cidade a Araguaína, e tem acesso ao Maranhão pela travessia do rio Tocantins em direção a Porto Franco e Imperatriz. O deslocamento dentro da cidade é curto e feito sobretudo a pé, de moto e de carro, com terreno plano que facilita caminhada e pedal.',

  corridas: [
    {
      nome: 'Corrida de Aniversário de Tocantinópolis',
      descricao:
        'Prova de rua associada às comemorações de aniversário da cidade, com percurso pelas ruas centrais a partir da região da praça da Igreja Matriz, reunindo corredores locais e da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso da orla do rio Tocantins e das praças para caminhada e corrida, a tradição do futebol e a movimentação ligada ao campus universitário, com provas de rua marcando o calendário em datas comemorativas.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelos setores centrais e residenciais, com porte compatível com uma cidade pequena do interior do Norte.',

  destaquesFitness: [
    'Cidade às margens do rio Tocantins, com orla usada para caminhada e corrida ao ar livre.',
    'Calor forte de Cerrado e estiagem prolongada, que exigem cuidado com horário e hidratação no treino.',
    'Polo regional do Bico do Papagaio, com campus da UFNT e população jovem que aquece a procura por treino.',
    'Terreno plano e ligação pela BR-153 e pela travessia do rio rumo a Imperatriz (MA).',
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
    'Cidade quente do extremo norte do Tocantins, à beira do rio e cercada pelo Cerrado, Tocantinópolis pede um treino adaptado ao calor e à estiagem, que aproveite a orla e as ruas planas. Um personal trainer ajuda a organizar a rotina escolhendo os melhores horários, reforçando a hidratação e mantendo a constância ao longo das estações de chuva e seca.',

  vizinhas: ['araguaina-to', 'colinas-do-tocantins-to'],

  fontes: [
    { nome: 'IBGE Cidades — Tocantinópolis', url: 'https://cidades.ibge.gov.br/brasil/to/tocantinopolis/panorama' },
    { nome: 'Prefeitura de Tocantinópolis', url: 'https://www.tocantinopolis.to.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
