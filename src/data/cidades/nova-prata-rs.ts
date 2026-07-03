import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'nova-prata-rs',
  nome: 'Nova Prata',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'nova-pratense',
  tipo: 'cidade',

  populacao: 25692,
  populacaoAno: 2022,
  idhm: 0.770,
  idhmClasse: 'alto',
  altitudeM: 820,

  resumoEconomico:
    'Na Serra Gaúcha, Nova Prata nasceu da colonização italiana iniciada em 1876, quando uma comissão de engenheiros passou pela região traçando a estrada entre Montenegro e Lagoa Vermelha. A economia é diversificada: destaca-se na produção de mudas e porta-enxertos de videira, que abastecem parte da cadeia vitivinícola do Rio Grande do Sul, e soma a isso uma agroindústria moveleira, um polo metalmecânico (com centro de formação profissional do Senai que atende várias cidades da região) e berçários industriais que reúnem dezenas de pequenas empresas de setores variados. A agricultura de base familiar, típica da colônia italiana, e o turismo ligado às águas termais completam a matriz econômica local.',

  mercado:
    'Por ser uma cidade média da Serra Gaúcha, com economia industrial diversificada, Nova Prata tem um mercado fitness ainda concentrado em academias locais de musculação e treino funcional. A procura por personal trainers tende a vir de trabalhadores da indústria e do comércio que buscam treino orientado no pouco tempo livre, além de moradores que aproveitam o clima de serra e os espaços naturais do município para caminhada, corrida e trilha.',

  bairrosNobres: ['Centro', 'São Peregrino', 'Rio Branco', 'Jardim de São Brás'],
  bairrosPopulares: ['São Cristóvão', 'Santa Cruz', 'Basalto', 'Industrial'],

  parques: [
    {
      nome: 'Praça da Bandeira',
      descricao:
        'No centro da cidade, reúne árvores centenárias, jardins floridos, parquinho infantil e painéis em basalto que retratam a história da imigração italiana. É o principal ponto de encontro da cidade e serve de largada e chegada para corridas de rua locais.',
    },
    {
      nome: 'Parque da Cascata da Usina / Caldas de Prata',
      descricao:
        'A cerca de 12 km do centro, na divisa com Antônio Prado e às margens do rio da Prata, reúne uma cachoeira de 45 metros, complexo de águas termais, paredões de pedra e trilhas em meio à mata nativa — opção de caminhada e contato com a natureza fora da área urbana.',
    },
    {
      nome: 'Trilha das Bromélias',
      descricao:
        'Trilha circular dentro do parque da Cascata da Usina, que atravessa o rio por uma pinguela com cabos de aço; percurso natural usado por quem busca caminhada mais longa em meio à vegetação da serra.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta, como é comum em cidades de porte médio da Serra Gaúcha; boa parte do pedal e da corrida acontece nas vias urbanas e nas estradas coloniais que cortam a zona rural do município.',

  clima:
    'O clima é subtropical de altitude: a cerca de 820 metros, Nova Prata tem as quatro estações bem marcadas, com invernos frios, geadas frequentes e ocorrência rara de neve, e verões amenos a quentes. A altitude deixa as noites mais frescas mesmo nos meses mais quentes do ano.',
  climaTreino:
    'O frio do inverno exige aquecimento mais cuidadoso e roupa adequada para o treino ao ar livre, enquanto primavera e outono costumam ser as estações mais confortáveis para caminhar e correr. Nos dias de geada mais intensa, ambientes fechados ajudam a manter a constância da rotina de treino.',

  mobilidade:
    'Nova Prata é cortada pela RS-122 (ERS-122), rodovia que liga a cidade a outros municípios da Serra Gaúcha, como Bento Gonçalves e Caxias do Sul, e conta ainda com a ERS-324 no acesso à região de Passo Fundo. O transporte urbano é feito por ônibus, e a cidade tem terminal rodoviário próprio para ligações intermunicipais e regionais.',

  corridas: [
    {
      nome: 'Corrida do Basalto',
      descricao:
        'Prova de rua realizada em Nova Prata em parceria com o Sesc, com percursos de 4 km e 8 km para adultos e provas infantis de 200 m a 800 m, com largada e chegada na Praça da Bandeira. Chegou à 3ª edição em agosto de 2025.',
    },
    {
      nome: 'Corrida Rotary Nova Prata',
      descricao:
        'Prova organizada pelo Rotary, com percursos de 3 km e 6 km para adultos e corrida kids em diferentes distâncias, integrada ao calendário de corridas de rua da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina as corridas de rua organizadas na cidade com o uso das estradas coloniais e das trilhas do parque da Cascata da Usina para caminhada e atividade ao ar livre, num ambiente marcado pela herança da colonização italiana e pelo ritmo de cidade de serra.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, concentradas principalmente no Centro, em porte compatível com uma cidade média do interior da Serra Gaúcha.',

  destaquesFitness: [
    'Colonização italiana iniciada em 1876, no coração da Serra Gaúcha, com forte ligação à produção de mudas de videira para a cadeia vitivinícola do estado.',
    'Altitude de 820 metros e clima subtropical de altitude, com quatro estações bem marcadas.',
    'Praça da Bandeira e Parque da Cascata da Usina como espaços de caminhada, trilha e corrida ao ar livre.',
    'Economia industrial diversificada, com agroindústria moveleira, polo metalmecânico e berçários industriais.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 760,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade de colonização italiana na Serra Gaúcha, Nova Prata combina economia industrial diversificada, clima de altitude bem definido em estações e espaços naturais como a Cascata da Usina. Um personal trainer ajuda a organizar o treino considerando o frio do inverno, aproveitando as janelas de clima mais ameno e mantendo a constância da rotina ao longo do ano.',

  vizinhas: ['bento-goncalves-rs', 'veranopolis-rs', 'garibaldi-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Nova Prata', url: 'https://cidades.ibge.gov.br/brasil/rs/nova-prata/panorama' },
    { nome: 'Prefeitura de Nova Prata', url: 'https://www.novaprata.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
