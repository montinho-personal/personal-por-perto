import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'monte-alto-sp',
  nome: 'Monte Alto',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'montealtense',
  tipo: 'cidade',

  populacao: 47574,
  populacaoAno: 2022,
  idhm: 0.768,
  idhmClasse: 'alto',
  altitudeM: 735,

  resumoEconomico:
    'No centro-norte paulista, na região de Ribeirão Preto e próxima a Jaboticabal e Taquaritinga, Monte Alto é conhecida como a "Terra dos Dinossauros" por seu museu de paleontologia, e também como a cidade-berço dos Jogos Abertos do Interior, maior competição esportiva amadora da América Latina, criada ali em 1936. A economia combina a indústria de artefatos de borracha e autopeças (com empresas como Hutchinson e BMA), a indústria alimentícia — destaque para a Fugini, fabricante de conservas de frutas desde 1995 — além de agropecuária com citricultura e cana-de-açúcar.',

  mercado:
    'Como cidade média do interior paulista, Monte Alto tem um mercado fitness formado por academias de musculação e estúdios de treino funcional, além de personal trainers autônomos. A tradição esportiva ligada aos Jogos Abertos do Interior favorece a procura por acompanhamento individualizado entre quem já pratica algum esporte amador e quer evoluir com método.',

  bairrosNobres: ['Centro', 'Alvorada', 'Jardim Califórnia', 'Vila São Guilherme'],
  bairrosPopulares: ['Vila Gadim', 'São Cristóvão', 'Industrial', 'Jardim Paraíso'],

  parques: [
    {
      nome: 'Praça Central Dr. Luiz Zacharias de Lima',
      descricao:
        'Praça histórica no Centro, com jaqueiras centenárias protegidas por lei municipal e a Fonte Luminosa de Nossa Senhora de Lourdes; o entorno arborizado é usado para caminhadas e como ponto de encontro da cidade.',
    },
    {
      nome: 'Clube Recreativo Municipal',
      descricao:
        'Espaço esportivo e de lazer na Avenida Quinze de Maio, no Centro, tradicional na vida esportiva da cidade que se orgulha de ser o berço dos Jogos Abertos do Interior.',
    },
    {
      nome: 'Rota das Capelas',
      descricao:
        'Roteiro turístico e cicloturístico que percorre a zona rural até o povoado de Ibitirama, em meio a paisagens de morros e lavouras — opção para pedalar e caminhar fora do perímetro urbano.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária urbana é modesta; parte do pedal acontece na Rota das Capelas, roteiro rural que liga o Centro ao povoado de Ibitirama, além das vias dos bairros residenciais.',

  clima:
    'Monte Alto tem clima tropical de altitude (Cwa, cerca de 735 m), com verão quente e chuvoso e inverno seco e ameno, temperaturas ao longo do ano variando aproximadamente entre 13 °C e 31 °C, típico do interior paulista da região de Ribeirão Preto.',
  climaTreino:
    'No verão, calor e umidade pedem treinos no início da manhã ou fim da tarde, com boa hidratação; o inverno seco e ameno tende a ser o período mais confortável para atividades ao ar livre, com atenção à baixa umidade nos dias mais secos.',

  mobilidade:
    'Monte Alto é servida pela Rodovia SP-351, que liga a região de Bebedouro a Catanduva, com Ribeirão Preto a cerca de 80 km e a capital paulista a aproximadamente 356 km. O transporte urbano é feito por ônibus, e o deslocamento dentro da cidade depende bastante de carro, moto e bicicleta.',

  corridas: [
    {
      nome: 'Jogos Abertos do Interior (legado histórico)',
      descricao:
        'Monte Alto é a cidade-berço e primeira sede dos Jogos Abertos do Interior, criados em 1936 pelo jornalista Horácio "Baby" Barioni em parceria com a Associação Atlética Montealtense — hoje a maior competição esportiva amadora da América Latina, promovida pelo Governo do Estado de São Paulo.',
    },
    {
      nome: 'Calendário esportivo municipal',
      descricao:
        'Eventos e competições amadoras organizados ao longo do ano pela Secretaria Municipal de Esporte e Lazer, que mantêm viva a tradição esportiva da cidade.',
    },
  ],
  culturaEsportiva:
    'Ser a cidade-berço dos Jogos Abertos do Interior é um traço central da identidade montealtense, alimentando uma cultura local de valorização do esporte amador desde 1936. Essa tradição se soma ao uso da Praça Central e do Clube Recreativo Municipal como espaços de convivência e atividade física no dia a dia da cidade.',
  academias:
    'A oferta é formada por academias de musculação e estúdios de treino funcional distribuídos pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior paulista.',

  destaquesFitness: [
    'Cidade-berço dos Jogos Abertos do Interior, criados em 1936 e hoje a maior competição esportiva amadora da América Latina.',
    'Praça Central Dr. Luiz Zacharias de Lima e Clube Recreativo Municipal como espaços de caminhada e convivência no Centro.',
    'Altitude de 735 m e inverno seco e ameno, favorável ao treino ao ar livre na maior parte do ano.',
    'Economia de artefatos de borracha, autopeças e indústria alimentícia (conservas de frutas), somada à citricultura e à cana-de-açúcar da região de Ribeirão Preto.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 270,
    mensalMax: 720,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Cidade-berço dos Jogos Abertos do Interior e conhecida como Terra dos Dinossauros, Monte Alto une tradição esportiva amadora, clima ameno no inverno e o ritmo de uma cidade média do interior paulista. Um personal trainer ajuda a transformar essa herança esportiva em rotina de treino constante, ajustando os horários ao calor do verão e aproveitando os espaços públicos do Centro.',

  vizinhas: ['jaboticabal-sp', 'taquaritinga-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Monte Alto', url: 'https://cidades.ibge.gov.br/brasil/sp/monte-alto/panorama' },
    { nome: 'Prefeitura de Monte Alto', url: 'https://montealto.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
