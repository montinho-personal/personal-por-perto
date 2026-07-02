import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itabirito-mg',
  nome: 'Itabirito',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'itabiritense',
  tipo: 'cidade',

  populacao: 53282,
  populacaoAno: 2022,
  idhm: 0.730,
  idhmClasse: 'alto',
  altitudeM: 901,

  resumoEconomico:
    'Localizada no Quadrilátero Ferrífero, entre Belo Horizonte e Ouro Preto, Itabirito tem a mineração de ferro como principal atividade econômica, com operações de grandes empresas do setor movimentando empregos, arrecadação e a cadeia de serviços da cidade. O comércio local, a indústria de apoio à mineração e a agropecuária completam a base econômica, enquanto a paisagem de serras e cachoeiras da Região dos Inconfidentes vem ganhando espaço no turismo de natureza.',

  mercado:
    'O mercado fitness de Itabirito é o de uma cidade média do interior mineiro, com academias de bairro concentradas no Centro e nos bairros mais próximos, além de estúdios de treino funcional. O público formado por trabalhadores da mineração, que muitas vezes cumprem turnos e escalas, e por moradores que se deslocam diariamente para Belo Horizonte pela BR-356 sustenta a procura por personal trainer, que oferece flexibilidade de horário difícil de encontrar em academias convencionais.',

  bairrosNobres: ['Centro', 'Bela Vista', 'Lourdes', 'Santa Efigênia'],
  bairrosPopulares: ['São José', 'Santa Rita', 'Rosário', 'Novo Itabirito'],

  parques: [
    {
      nome: 'Cachoeira do Cruzado',
      descricao:
        'Queda d\'água de cerca de 20 metros com piscina natural de águas verdes e frias, cercada por vegetação nativa; ponto de acesso relativamente fácil, usado por quem busca trilha leve seguida de banho de cachoeira.',
    },
    {
      nome: 'Cachoeira do Cascalho',
      descricao:
        'Conjunto de quedas em formato de véu de noiva sobre paredões de pedra, com lago raso e água fria; uma das cachoeiras mais procuradas do entorno de Itabirito para caminhada e lazer ao ar livre.',
    },
    {
      nome: 'Parque Ecológico Municipal',
      descricao:
        'Área verde da cidade voltada à preservação e à convivência com a natureza, usada por moradores para caminhada e atividades ao ar livre dentro da malha urbana.',
    },
    {
      nome: 'Serra de Itabirito',
      descricao:
        'Formações da Serra do Espinhaço e do Quadrilátero Ferrífero cercam o município, com trilhas e estradas de terra que atraem praticantes de trekking e corrida de montanha em meio ao relevo ferruginoso característico da região.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária formal é limitada; o pedal e a corrida acontecem principalmente nas ruas do Centro e dos bairros, e em estradas vicinais e trilhas da zona rural para quem busca percurso fora do asfalto.',

  clima:
    'O clima é tropical de altitude, com cerca de 900 metros de elevação: verões chuvosos e temperaturas mais amenas, e invernos secos com noites frias, típicos da Região dos Inconfidentes.',
  climaTreino:
    'A altitude moderada favorece o treino ao ar livre durante boa parte do ano; nas manhãs de inverno o frio pede aquecimento mais longo, e nos meses chuvosos de verão vale atenção a trilhas e pisos escorregadios após temporais.',

  mobilidade:
    'Itabirito é cortada pela BR-356, principal ligação rodoviária com Belo Horizonte (cerca de 60 km) e Ouro Preto (cerca de 40 km), rota também usada por quem trabalha na capital e faz o trajeto diário. O transporte urbano é feito por ônibus, e o tráfego de veículos pesados ligados à mineração é parte do cotidiano das vias da cidade.',

  corridas: [
    {
      nome: 'Meia-maratona Irenice Maria Rodrigues',
      descricao:
        'Prova organizada pela Prefeitura de Itabirito, com percursos de 5 km, 10 km e 21 km, realizada tradicionalmente no segundo domingo de setembro pelas ruas da cidade.',
    },
    {
      nome: 'Corrida Farid — Etapa Itabirito',
      descricao:
        'Etapa itabiritense do circuito Corrida Farid, com provas de 5 km e 10 km e caminhada, saindo da Praça Dr. Guilherme, no Centro.',
    },
    {
      nome: 'Personal Run',
      descricao:
        'Evento com percursos de corrida de rua, trail e ultra (7 km, 22 km e 55 km) que explora estradas e trilhas do relevo montanhoso do entorno de Itabirito.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina corridas de rua no Centro, como a meia-maratona municipal e etapas de circuitos regionais, com o crescente interesse por trilhas e corrida de montanha nas serras e cachoeiras do entorno, aproveitando a paisagem do Quadrilátero Ferrífero.',
  academias:
    'A oferta é formada por academias de bairro e estúdios de treino funcional concentrados no Centro e em bairros próximos, com porte compatível com uma cidade média do interior mineiro.',

  destaquesFitness: [
    'Cidade do Quadrilátero Ferrífero, entre Belo Horizonte e Ouro Preto, com economia movida pela mineração de ferro.',
    'Cachoeiras do Cruzado e do Cascalho como opções de trilha leve e lazer ao ar livre.',
    'Altitude de cerca de 900 m, com clima ameno favorável ao treino a céu aberto na maior parte do ano.',
    'BR-356 como eixo de deslocamento diário para Belo Horizonte, o que reforça a demanda por horários flexíveis de treino.',
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
    'Cercada por serras, cachoeiras e pela paisagem ferruginosa do Quadrilátero Ferrífero, Itabirito reúne condições naturais favoráveis ao treino ao ar livre, mas a rotina de trabalho na mineração e os deslocamentos pela BR-356 até Belo Horizonte pedem flexibilidade de horário. Um personal trainer ajuda a encaixar o treino na agenda de quem trabalha em turnos ou viaja diariamente, mantendo constância ao longo do ano.',

  vizinhas: ['ouro-preto-mg', 'belo-horizonte-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Itabirito', url: 'https://cidades.ibge.gov.br/brasil/mg/itabirito/panorama' },
    { nome: 'Prefeitura de Itabirito', url: 'https://itabirito.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/3203700' },
  ],
  atualizadoEm: '2026-06-29',
};
