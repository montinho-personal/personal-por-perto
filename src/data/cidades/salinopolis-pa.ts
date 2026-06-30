import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'salinopolis-pa',
  nome: 'Salinópolis',
  uf: 'PA',
  estado: 'Pará',
  estadoSlug: 'para',
  regiao: 'Norte',
  gentilico: 'salinopolitano',
  tipo: 'cidade',

  populacao: 44772,
  populacaoAno: 2022,
  idhm: 0.65,
  idhmClasse: 'médio',
  altitudeM: 13,

  resumoEconomico:
    'Carinhosamente chamada de "Salinas", Salinópolis fica no litoral nordeste do Pará, a cerca de 216 km de Belém, e é o principal destino de veraneio dos paraenses. A economia gira em torno do turismo de praia, que explode em julho e nos feriados prolongados, da rede de hospedagem, bares e restaurantes, da pesca artesanal e do comércio que atende moradores e veranistas. Praias de mar aberto como o Atalaia, o Farol Velho e o balneário do Maçarico são o coração da cidade e de sua identidade.',

  mercado:
    'O mercado de personal trainers em Salinópolis é influenciado pela sazonalidade do veraneio: a procura cresce na alta temporada, quando a cidade recebe milhares de visitantes, e se mantém ao longo do ano com o público local. A oferta se concentra no Centro e no entorno da orla do Maçarico, onde estão academias e estúdios, e parte do treino acontece ao ar livre, na faixa de areia e nos calçadões.',

  bairrosNobres: ['Centro', 'Farol Velho', 'Maçarico', 'Atalaia'],
  bairrosPopulares: ['São Tomé', 'Açaiteua', 'Caranã', 'Vila Nova'],

  parques: [
    {
      nome: 'Praia do Atalaia',
      descricao:
        'Na Ilha do Atalaia, é a praia mais famosa e extensa de Salinópolis, com longa faixa de areia clara e dunas — cenário amplo para caminhada, corrida e treino funcional ao ar livre, sobretudo na maré baixa, quando a areia firme se estende por centenas de metros.',
    },
    {
      nome: 'Orla do Maçarico',
      descricao:
        'Balneário urbano com calçadão à beira-mar, concentrando bares e restaurantes — principal espaço público de caminhada no fim de tarde e ponto de partida para atividades na faixa de areia.',
    },
    {
      nome: 'Praia do Farol Velho',
      descricao:
        'Vizinha ao Atalaia, forma com ela uma longa extensão de praia. Mais residencial e tranquila, oferece areia firme para caminhada e corrida com a brisa do mar.',
    },
  ],
  ciclovias:
    'A cidade não dispõe de malha cicloviária estruturada divulgada em fonte oficial; a bicicleta é meio de transporte e lazer comum no dia a dia, especialmente nos trechos planos do Centro e das orlas, e o uso recreativo se concentra na beira-mar do Maçarico.',

  clima:
    'O clima é equatorial úmido, quente o ano inteiro, típico do litoral nordeste paraense: período chuvoso intenso no primeiro semestre e estiagem mais marcada no segundo, quando a cidade vive a alta temporada de veraneio.',
  climaTreino:
    'O calor e a umidade elevados pedem hidratação reforçada e treino nos horários mais amenos (início da manhã e fim de tarde); a brisa constante do mar nas praias do Atalaia, Farol Velho e Maçarico ajuda a tornar a atividade ao ar livre mais tolerável.',

  mobilidade:
    'O acesso principal é pela rodovia PA-124, que liga Salinópolis a Santa Maria do Pará e à BR-316, eixo rodoviário rumo a Belém. Dentro da cidade, os deslocamentos são curtos e concentrados entre o Centro, a orla do Maçarico e a Ilha do Atalaia, com forte presença de carros de veranistas na temporada, além de motos e bicicletas no cotidiano.',

  corridas: [
    {
      nome: 'Corridas de rua no calendário municipal',
      descricao:
        'Provas de rua organizadas em datas esportivas e na temporada de veraneio costumam usar o Centro e a orla do Maçarico como percurso, reunindo corredores locais e visitantes.',
    },
    {
      nome: 'Atividades esportivas na alta temporada',
      descricao:
        'O período de férias de julho movimenta as praias com eventos esportivos, treinos coletivos e atividades ao ar livre na faixa de areia do Atalaia e do Maçarico.',
    },
  ],
  culturaEsportiva:
    'A cultura de movimento em Salinópolis é indissociável do mar: caminhada e corrida na areia firme do Atalaia e do Farol Velho, banho e esportes de praia, além do uso intenso do calçadão do Maçarico no fim de tarde. O ritmo da cidade acompanha o veraneio, com pico de atividades ao ar livre na temporada.',
  academias:
    'A oferta de academias se concentra no Centro e no entorno da orla do Maçarico, complementada por treino ao ar livre nas praias do Atalaia, Farol Velho e Maçarico e nos calçadões da beira-mar.',

  destaquesFitness: [
    'Praia do Atalaia, com areia firme na maré baixa, para corrida e treino funcional.',
    'Orla do Maçarico como principal calçadão urbano de caminhada à beira-mar.',
    'Praia do Farol Velho, mais tranquila, para corrida com a brisa do mar.',
    'Cultura de praia intensa no veraneio, com atividades ao ar livre na temporada.',
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
    'Principal balneário do Pará, Salinópolis oferece quilômetros de praia de mar aberto como cenário natural para treinar, do Atalaia ao Maçarico. Um personal trainer ajuda a montar uma rotina que respeite o calor equatorial e a sazonalidade do veraneio, aproveitando a areia firme e a brisa do mar com segurança e regularidade.',

  vizinhas: ['castanhal-pa', 'braganca-pa', 'belem-pa'],

  fontes: [
    { nome: 'IBGE Cidades — Salinópolis', url: 'https://cidades.ibge.gov.br/brasil/pa/salinopolis/panorama' },
    { nome: 'Prefeitura de Salinópolis', url: 'https://salinopolis.pa.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
