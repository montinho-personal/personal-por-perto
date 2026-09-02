import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ipatinga-mg',
  nome: 'Ipatinga',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'ipatinguense',
  tipo: 'cidade',

  populacao: 227731,
  populacaoAno: 2022,
  idhm: 0.771,
  idhmClasse: 'alto',
  altitudeM: 250,

  resumoEconomico:
    'Coração do Vale do Aço, Ipatinga é uma cidade industrial estruturada em torno da Usiminas (siderurgia de aços planos), sua maior empregadora e referência econômica. Comércio e serviços fortes atendem toda a região metropolitana do Vale do Aço (Coronel Fabriciano, Timóteo e Santana do Paraíso).',

  mercado:
    'A alta concentração populacional urbana e a renda industrial sustentam forte demanda por academias e estúdios; o Parque Ipanema é referência regional para treino ao ar livre e corrida. A cultura industrial favorece programas de bem-estar e esporte.',

  bairrosNobres: ['Cidade Nobre', 'Cariru', 'Veneza', 'Bethânia'],
  bairrosPopulares: ['Bom Retiro', 'Esperança', 'Canaã', 'Imbaúbas'],

  parques: [
    {
      nome: 'Parque Ipanema',
      descricao:
        'Um dos maiores parques urbanos de Minas (cerca de 1 milhão de m²), com pista de atletismo e caminhada, ciclovia, quadras e campos — estrutura completa para treino.',
    },
    {
      nome: 'Trilhas e ciclovias do Parque Ipanema',
      descricao:
        'Caminhos internos arborizados que conectam áreas verdes a bairros vizinhos, muito usados para caminhada e corrida.',
    },
    {
      nome: 'Área esportiva da Usipa',
      descricao:
        'Espaço esportivo tradicional ligado à Usiminas, com ampla estrutura para atividade física na cidade.',
    },
  ],
  ciclovias:
    'Há ciclovia consolidada dentro do Parque Ipanema, integrando áreas verdes e bairros vizinhos; a extensão total da malha urbana ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente, típico do vale do Rio Doce, quente e úmido boa parte do ano.',
  climaTreino:
    'O calor recomenda priorizar o treino ao ar livre no início da manhã ou no fim de tarde e reforçar a hidratação.',

  mobilidade:
    'Ipatinga é cortada pela BR-381 (ligação Belo Horizonte–Vitória pelo trecho leste) e pela BR-458, com bom acesso rodoviário à região metropolitana do Vale do Aço.',

  corridas: [
    {
      nome: 'Corrida do Aço',
      descricao:
        'Patrocinada pela Usiminas, com percursos de 5 km e 10 km partindo do entorno da usina; uma das maiores provas do interior de Minas.',
    },
    {
      nome: 'Circuitos de corrida do Vale do Aço',
      descricao:
        'Provas regionais que compõem um calendário ativo de corrida de rua na região metropolitana.',
    },
  ],
  culturaEsportiva:
    'Ipatinga tem forte tradição em corrida de rua e futebol; o Parque Ipanema é o polo de atividade física da população, e a cultura industrial favorece programas de esporte patrocinados pela Usiminas.',
  academias:
    'A oferta acompanha o porte urbano e a renda industrial, com academias e estúdios, e tem no Parque Ipanema o principal hub de treino ao ar livre da região.',

  destaquesFitness: [
    'Parque Ipanema como principal hub de treino ao ar livre da região.',
    'Corrida do Aço como evento-âncora anual.',
    'Bairros nobres (Cidade Nobre, Cariru) com público de maior poder aquisitivo.',
    'Demanda regional que vai além de Ipatinga (atende todo o Vale do Aço).',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 155,
    mensalMin: 340,
    mensalMax: 920,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Coração do Vale do Aço, Ipatinga tem no Parque Ipanema um dos maiores parques urbanos de Minas e uma cena de corrida forte. Um personal trainer ajuda a aproveitar essa estrutura com método, ajustando horários e hidratação ao calor do vale do Rio Doce.',

  vizinhas: ['governador-valadares-mg', 'belo-horizonte-mg'],

  capaArte: {
    src: '/capas-cidade/ipatinga-mg.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em Ipatinga (MG) em arte com a ponte em arco sobre o rio Doce, o skyline do vale e a serra ao fundo, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Ipatinga: disciplina, constância e resultados no Vale do Aço mineiro.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Ipatinga', url: 'https://cidades.ibge.gov.br/brasil/mg/ipatinga/panorama' },
    { nome: 'Prefeitura de Ipatinga', url: 'https://www.ipatinga.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-01',
};
