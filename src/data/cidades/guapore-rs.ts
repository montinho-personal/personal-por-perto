import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'guapore-rs',
  nome: 'Guaporé',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'guaporense',
  tipo: 'cidade',

  populacao: 25268,
  populacaoAno: 2022,
  idhm: 0.770,
  idhmClasse: 'alto',
  altitudeM: 478,

  resumoEconomico:
    'Na Serra Gaúcha, Guaporé nasceu da colonização italiana formalizada em 1892, com a Colônia Guaporé, e emancipou-se como município em 1903. A economia é diversificada e de forte base industrial: a cidade é reconhecida como um dos maiores polos de joias e bijuterias folheadas do Brasil, com dezenas de empresas especializadas e exportação para outros países, além de um polo metalmecânico consolidado e uma agroindústria moveleira. A herança da imigração italiana também aparece na vitivinicultura, com vinícolas locais como Giaretta, Gheller e Scalco, e na agricultura familiar de base colonial, que soma lavouras de uva, milho e outras culturas típicas da região.',

  mercado:
    'Por ser uma cidade média da Serra Gaúcha com economia industrial diversificada — joalheria, metalmecânica, móveis e vinho —, Guaporé tem um mercado fitness concentrado em academias locais de musculação e treino funcional. A procura por personal trainers tende a vir de trabalhadores da indústria e do comércio que buscam treino orientado no tempo livre limitado, além de moradores que aproveitam o clima de serra e os espaços da cidade para caminhada e corrida.',

  bairrosNobres: ['Centro', 'Planalto'],
  bairrosPopulares: ['Conceição', 'São Cristóvão', 'Canecão'],

  parques: [
    {
      nome: 'Praça Vespasiano Corrêa',
      descricao:
        'Praça central e arborizada da cidade, cercada pela prefeitura, pela Igreja Matriz Santo Antônio e pelo Clube União; é o principal ponto de encontro de Guaporé e serve de largada e chegada de corridas de rua como a Corrida CDL em Movimento.',
    },
    {
      nome: 'Cristo Redentor de Guaporé (Morro Gallon)',
      descricao:
        'Monumento erguido no alto do Morro Gallon, com via-sacra de acesso; a subida ao mirante é usada por quem busca caminhada e treino em aclive com vista para a cidade.',
    },
    {
      nome: 'Autódromo Internacional Nelson Luiz Barro',
      descricao:
        'Complexo esportivo que recebe provas de automobilismo e também sedia corridas de rua e caminhadas noturnas da cidade, como a Guaporé Night Run.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta, como é comum em cidades de porte médio da Serra Gaúcha; boa parte do pedal e da corrida acontece nas vias urbanas e nas estradas coloniais que cortam a zona rural do município.',

  clima:
    'O clima é subtropical de altitude: o centro fica a cerca de 478 metros e o relevo do município chega a mais de 700 metros em alguns pontos, o que garante quatro estações bem marcadas, com invernos frios, geadas frequentes, neblina matinal e ocorrência ocasional de neve, além de verões amenos.',
  climaTreino:
    'O frio do inverno exige aquecimento mais cuidadoso e roupa adequada para o treino ao ar livre, enquanto primavera e outono costumam ser as estações mais confortáveis para caminhar e correr. Nos dias de geada mais intensa, ambientes fechados ajudam a manter a constância da rotina de treino.',

  mobilidade:
    'Guaporé é cortada pela RS-129 (ERS-129), eixo rodoviário que liga a cidade a Casca e à região Norte do estado, e que, seguindo por Muçum e Arroio do Meio, conecta o município à BR-386 em direção a Porto Alegre. O transporte urbano é feito por ônibus, e a cidade conta com terminal rodoviário próprio para ligações intermunicipais.',

  corridas: [
    {
      nome: 'Guaporé Night Run',
      descricao:
        'Corrida noturna realizada no Autódromo Internacional Nelson Luiz Barro, com provas para adultos e prova kids; integra o calendário do Festival Multicultural GuapoRock e já chegou à 7ª edição.',
    },
    {
      nome: 'Corrida CDL em Movimento',
      descricao:
        'Prova de rua organizada pela CDL de Guaporé, com largada na Praça Vespasiano Corrêa, no centro da cidade, reunindo corredores em diferentes distâncias e reforçando o incentivo à atividade física entre a comunidade local.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina corridas de rua organizadas no centro e no autódromo com o uso do Morro Gallon e da via-sacra do Cristo Redentor para caminhada em aclive, num ambiente marcado pela herança da colonização italiana e pelo ritmo de cidade de serra ligada à indústria.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, concentradas principalmente no Centro, em porte compatível com uma cidade média do interior da Serra Gaúcha.',

  destaquesFitness: [
    'Um dos maiores polos de joias e bijuterias folheadas do Brasil, ao lado de um consolidado parque metalmecânico e moveleiro.',
    'Vinícolas locais (Giaretta, Gheller e Scalco), herança direta da colonização italiana da região.',
    'Altitude de cerca de 478 metros, com clima subtropical de serra e quatro estações bem marcadas.',
    'Cristo Redentor no Morro Gallon e Praça Vespasiano Corrêa como pontos de caminhada e corrida ao ar livre.',
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
    'Cidade de colonização italiana na Serra Gaúcha, Guaporé combina uma economia industrial diversificada — joalheria, metalmecânica, móveis e vinho — com um clima de altitude que marca bem as estações do ano. Um personal trainer ajuda a organizar o treino considerando o frio do inverno, aproveitando o Morro Gallon e a Praça Vespasiano Corrêa nas estações mais amenas e mantendo a constância da rotina ao longo do ano.',

  vizinhas: ['nova-prata-rs', 'marau-rs', 'bento-goncalves-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Guaporé', url: 'https://cidades.ibge.gov.br/brasil/rs/guapore/panorama' },
    { nome: 'Prefeitura de Guaporé', url: 'https://www.guapore.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
