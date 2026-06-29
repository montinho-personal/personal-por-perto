import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'braganca-pa',
  nome: 'Bragança',
  uf: 'PA',
  estado: 'Pará',
  estadoSlug: 'para',
  regiao: 'Norte',
  gentilico: 'bragantino',
  tipo: 'cidade',

  populacao: 123082,
  populacaoAno: 2022,
  idhm: 0.6,
  idhmClasse: 'médio',
  altitudeM: 19,

  resumoEconomico:
    'Conhecida como a "Pérola do Caeté", Bragança fica no litoral nordeste do Pará, na margem esquerda do rio Caeté, e é uma das cidades mais antigas da Amazônia. A economia se apoia na pesca artesanal e no extrativismo do manguezal (caranguejo), no comércio que atende a microrregião bragantina, no funcionalismo e na agricultura familiar. O turismo cresce em torno da Praia de Ajuruteua e da tradição religiosa de São Benedito, que move a cidade em dezembro.',

  mercado:
    'O mercado de personal trainers em Bragança ainda é incipiente e concentrado no Centro, onde estão as principais academias e estúdios. A demanda é puxada por quem busca treino direcionado e por moradores que aproveitam a orla do Caeté e as praças para atividade física, perfil típico de cidade média do interior paraense.',

  bairrosNobres: ['Centro', 'Aldeia', 'Vila Sinhá', 'Padre Luiz'],
  bairrosPopulares: ['Riozinho', 'Perpétuo Socorro', 'Vila Nova', 'Alegre'],

  parques: [
    {
      nome: 'Orla do Rio Caeté',
      descricao:
        'Beira-rio no coração da cidade, com calçadão e movimento intenso no fim de tarde — principal espaço público para caminhada e corrida leve, e palco da Marujada em dezembro.',
    },
    {
      nome: 'Praia de Ajuruteua',
      descricao:
        'A cerca de 36 km do centro, é uma praia de mar aberto cercada de manguezais e dunas, com longas faixas de areia que servem para caminhada, corrida e treino funcional ao ar livre.',
    },
    {
      nome: 'Praças do Centro histórico',
      descricao:
        'O Centro de Bragança reúne praças e o casario histórico em torno da Catedral, formando um circuito plano e arborizado para caminhada urbana.',
    },
  ],
  ciclovias:
    'A cidade não dispõe de malha cicloviária estruturada divulgada em fonte oficial; a bicicleta é meio de transporte comum no dia a dia, e a orla do Caeté concentra o uso recreativo para pedal e caminhada.',

  clima:
    'O clima é equatorial úmido, quente o ano inteiro, com forte influência do litoral nordeste paraense: período chuvoso intenso no primeiro semestre e estiagem mais marcada no segundo.',
  climaTreino:
    'O calor e a umidade elevados pedem hidratação reforçada e treino nos horários mais amenos (início da manhã e fim de tarde); a brisa do rio e da orla de Ajuruteua ajuda a tornar a atividade ao ar livre mais tolerável.',

  mobilidade:
    'O acesso rodoviário principal é pela PA-242, que liga Bragança à região e à BR-316 rumo a Belém; a Praia de Ajuruteua é alcançada pela PA-458, a "Rodovia Bragança-Ajuruteua", que cruza o manguezal por cerca de 36 km. Dentro da cidade, os deslocamentos são curtos, com forte presença de bicicletas e motos.',

  corridas: [
    {
      nome: 'Corridas de rua no calendário municipal',
      descricao:
        'Provas de rua organizadas em datas cívicas e esportivas costumam usar o Centro e a orla do Caeté como percurso, reunindo corredores locais.',
    },
    {
      nome: 'Atividades esportivas da Marujada de São Benedito',
      descricao:
        'O período da festa, em dezembro, concentra grande movimentação na orla — incluindo a procissão do Círio, de cerca de 6,7 km, que mobiliza milhares de pessoas em caminhada pela cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura de movimento em Bragança é fortemente ligada ao rio e ao mar: caminhada na orla do Caeté, banho e atividades na Praia de Ajuruteua e o ritmo das festas tradicionais, com a Marujada de São Benedito como maior expressão coletiva da cidade.',
  academias:
    'A oferta de academias se concentra no Centro, complementada por treino ao ar livre na orla do Caeté, nas praças do centro histórico e na faixa de areia de Ajuruteua.',

  destaquesFitness: [
    'Orla do Rio Caeté como principal espaço urbano de caminhada e corrida.',
    'Praia de Ajuruteua, com areia firme e manguezais, para treino ao ar livre.',
    'Centro histórico plano e arborizado, bom para caminhada urbana.',
    'Cultura de rua intensa em dezembro, no entorno da Marujada de São Benedito.',
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
    'Cidade histórica e litorânea do nordeste paraense, Bragança combina o rio Caeté, os manguezais e a Praia de Ajuruteua como cenários naturais para treinar. Um personal trainer ajuda a montar uma rotina que respeite o calor equatorial e aproveite a orla e a praia com segurança e regularidade.',

  vizinhas: ['belem-pa', 'castanhal-pa'],

  fontes: [
    { nome: 'IBGE Cidades — Bragança', url: 'https://cidades.ibge.gov.br/brasil/pa/braganca/panorama' },
    { nome: 'Prefeitura de Bragança', url: 'https://braganca.pa.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
