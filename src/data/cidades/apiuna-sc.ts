import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'apiuna-sc',
  nome: 'Apiúna',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'apiunense',
  tipo: 'cidade',

  populacao: 9909,
  populacaoAno: 2022,
  idhm: 0.71,
  idhmClasse: 'alto',
  altitudeM: 80,

  resumoEconomico:
    'Emancipada em 1988, Apiúna ocupa 492 km² do Médio Vale do Itajaí com pouco menos de 10 mil habitantes e uma densidade de cerca de 20 hab/km² — colonização alemã e italiana, economia de agricultura, comércio e indústria. O que colocou a cidade no mapa, porém, foi o rio: o trecho do Itajaí-Açu que corta o município é considerado o melhor do Brasil para rafting, com corredeiras de classe II a V e acesso direto pela BR-470.',

  mercado:
    'Numa cidade desse porte, o personal trainer é figura próxima e multifuncional: atende na academia, vai à casa do aluno e trabalha com um público que vai do trabalhador da indústria ao guia de rafting que precisa de força e resistência para a temporada. O atendimento em dupla e em pequenos grupos é comum, e o boca a boca vale mais que qualquer anúncio.',

  bairrosNobres: ['Centro', 'Vila Nova', 'Bairro Progresso', 'Barra do Ribeirão'],
  bairrosPopulares: ['Subida', 'Aterrado', 'Rio Branco', 'Nova Trento'],

  parques: [
    {
      nome: 'Corredeiras do Rio Itajaí-Açu',
      descricao:
        'O trecho apiunense do rio forma um cânion cercado de mata preservada e reúne corredeiras de classe II a V — base do rafting comercial catarinense, com operação às margens da BR-470.',
    },
    {
      nome: 'Cachoeira do Salão',
      descricao:
        'A cerca de 23 km do centro, pode ser vista do mirante ou alcançada pela base por um acesso íngreme, que pede acompanhamento de guia — subida forte e ótima para condicionamento.',
    },
    {
      nome: 'Estradas rurais do interior',
      descricao:
        'As estradas de terra entre as comunidades rurais são o circuito informal de caminhada, corrida e mountain bike da cidade, com desnível constante e mata de araucária e Mata Atlântica ao redor.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária urbana, mas o cicloturismo e o mountain bike aproveitam as estradas do interior e os acessos ao vale — o relevo garante desnível sem esforço de planejamento.',

  clima:
    'Subtropical úmido, com verões quentes e chuvosos — que também são a alta temporada do rafting — e invernos frios, típicos do Vale do Itajaí.',
  climaTreino:
    'O verão úmido pede as pontas do dia para o treino ao ar livre; o inverno ameno libera o dia inteiro e é a melhor época para as trilhas e as estradas rurais. Nas semanas de chuva forte, o ambiente coberto sustenta a constância.',

  mobilidade:
    'A BR-470 atravessa o município e é sua espinha dorsal: liga Apiúna a Indaial e Blumenau de um lado e a Rio do Sul do outro, o que coloca a cidade a menos de uma hora de dois polos regionais.',

  corridas: [
    {
      nome: 'Provas de trail e rústicas do Vale do Itajaí',
      descricao:
        'O calendário regional reúne rústicas e corridas de montanha que exploram o relevo do vale, com percursos mistos de asfalto e estrada de terra.',
    },
  ],
  culturaEsportiva:
    'O esporte de aventura é a identidade local: rafting, canyoning, rapel e montanhismo movimentam a cidade e criam uma cultura de preparo físico ligada ao rio e à serra. O futebol amador e as festas de comunidade completam o calendário.',
  academias:
    'A oferta formal é compacta e concentrada no centro, com academias de musculação de porte pequeno e médio — o que dá espaço para o atendimento personalizado e o treino a domicílio.',

  destaquesFitness: [
    'Corredeiras classe II a V no Itajaí-Açu, referência nacional de rafting.',
    'Cachoeira do Salão e seu acesso íngreme, subida de alto gasto energético.',
    'Estradas rurais com desnível constante para corrida e mountain bike.',
    'Proximidade de Indaial, Blumenau e Rio do Sul pela BR-470.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 620,
    onlineMin: 120,
    onlineMax: 330,
  },

  conclusao:
    'Apiúna é pequena no censo e grande no relevo. Um personal trainer daqui trabalha com o que a cidade oferece de graça — subida, mata e rio — e usa a academia como base de força para que a aventura do fim de semana não vire lesão na segunda-feira.',

  vizinhas: ['indaial-sc', 'blumenau-sc', 'rio-do-sul-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Apiúna', url: 'https://cidades.ibge.gov.br/brasil/sc/apiuna/panorama' },
    { nome: 'Portal do Turismo de Apiúna', url: 'https://turismo.apiuna.sc.gov.br/' },
    { nome: 'Prefeitura de Apiúna', url: 'https://www.apiuna.sc.gov.br/' },
  ],
  atualizadoEm: '2026-08-05',
};
