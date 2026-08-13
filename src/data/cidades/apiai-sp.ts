import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'apiai-sp',
  nome: 'Apiaí',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'apiaiense',
  tipo: 'cidade',

  populacao: 24585,
  populacaoAno: 2022,

  resumoEconomico:
    'Empoleirada na serra do Alto Ribeira, a mais de 900 metros, Apiaí nasceu do ouro do Morro do Ouro no século XVII e hoje vive da agricultura (tomate e hortifrúti), da mineração de calcário e cimento e de um turismo em ascensão: é uma das portas do PETAR e aposta no título de cidade fria de São Paulo, com direito a registros históricos de neve em 1942 e 1975.',

  mercado:
    'O mercado de treino é compacto, com academias simples no centro e a demanda característica do Alto Ribeira: monitores ambientais e condutores do PETAR, trabalhadores rurais e da indústria do cimento, e um público crescente que se prepara para trilhas e cavernas. O acompanhamento online complementa a oferta local.',

  bairrosNobres: ['Centro', 'Vila Aparecida', 'Jardim Paulista', 'Pinheiros'],
  bairrosPopulares: ['Vila Palmira', 'Cristo Rei', 'Encapoeirado', 'Barra do Chapéu de Baixo'],

  parques: [
    {
      nome: 'PETAR — núcleos Caboclos e Casa de Pedra',
      descricao:
        'Apiaí é uma das portas do Parque Estadual Turístico do Alto Ribeira: o núcleo Caboclos, no alto da serra, e o acesso à monumental Casa de Pedra, caverna com o maior pórtico do mundo, saem do território apiaiense.',
    },
    {
      nome: 'Morro do Ouro',
      descricao:
        'O morro que deu origem à cidade, com o parque municipal e a capela histórica no alto — subida clássica para caminhada e vista da serra.',
    },
    {
      nome: 'Serra e cavernas do Alto Ribeira',
      descricao:
        'Centenas de cavidades, trilhas de mata atlântica e cachoeiras num raio de poucas dezenas de quilômetros, entre Apiaí e Iporanga.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária urbana; as estradas de serra, como a SP-250, são procuradas por ciclistas de estrada e cicloturistas pelo frio e pelos mirantes.',

  clima:
    'Subtropical de altitude, o município mais frio do interior paulista em muitas madrugadas: invernos com geada frequente, neblina de serra e temperaturas que já chegaram à neve em 1942 e 1975.',
  climaTreino:
    'O frio é o diferencial: aquecimento mais longo nas manhãs geladas, roupa em camadas e aproveitamento das tardes amenas. Para trilhas e cavernas, o preparo de pernas, tornozelos e coluna pesa mais que o clima.',

  mobilidade:
    'A SP-250 corta a cidade ligando Itapeva e Capão Bonito à divisa do Paraná, e a SP-165 desce a serra rumo a Iporanga e ao vale; boa parte dos acessos rurais é por estrada de terra.',

  corridas: [
    {
      nome: 'Provas de trail run do Alto Ribeira',
      descricao:
        'O calendário regional aproveita a serra, as estradas rurais e o frio de altitude, com percursos técnicos entre mata atlântica e campos de altitude.',
    },
  ],
  culturaEsportiva:
    'Caminhada de serra é rotina — para o trabalho no campo, para o turismo no PETAR e para o lazer no Morro do Ouro. Somam-se o futebol de bairro, o ciclismo de estrada nas rodovias frias e o movimento crescente de trail runners que usam Apiaí como base.',
  academias:
    'A oferta é enxuta e concentrada no centro, com academias de musculação simples; parte de quem treina sério combina a estrutura local com consultoria online.',

  destaquesFitness: [
    'Uma das cidades mais altas e frias de São Paulo: treino sem o desgaste do calor.',
    'Porta do PETAR pelos núcleos Caboclos e Casa de Pedra.',
    'Morro do Ouro como subida clássica de caminhada e corrida.',
    'Base natural para trail run e cicloturismo de serra.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 620,
    onlineMin: 130,
    onlineMax: 340,
  },

  conclusao:
    'Apiaí treina no frio que o resto de São Paulo não conhece: serra, altitude e trilhas de caverna na porta de casa. Um personal trainer daqui prepara pernas e fôlego para a vida de serra — e para quem desce ao PETAR, monta a base que as escadas de pedra e as passagens baixas cobram.',

  vizinhas: ['iporanga-sp', 'itapeva-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Apiaí', url: 'https://cidades.ibge.gov.br/brasil/sp/apiai/panorama' },
    { nome: 'Prefeitura de Apiaí', url: 'https://apiai.sp.gov.br/' },
    { nome: 'Fundação Florestal — PETAR', url: 'https://www.infraestruturameioambiente.sp.gov.br/fundacaoflorestal/pagina-inicial/parques-estaduais/parque-estadual-turistico-do-alto-ribeira/' },
  ],
  atualizadoEm: '2026-08-13',
};
