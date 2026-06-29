import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'dourados-ms',
  nome: 'Dourados',
  uf: 'MS',
  estado: 'Mato Grosso do Sul',
  estadoSlug: 'mato-grosso-do-sul',
  regiao: 'Centro-Oeste',
  gentilico: 'douradense',
  tipo: 'cidade',

  populacao: 243367,
  populacaoAno: 2022,
  idhm: 0.747,
  idhmClasse: 'alto',
  altitudeM: 430,

  resumoEconomico:
    'Segunda maior cidade e segunda maior economia de Mato Grosso do Sul, Dourados é um polo do agronegócio do sul do estado — um dos maiores produtores de soja e milho do país — com forte comércio e serviços. É também uma cidade universitária, com a UFGD e a UEMS somando cerca de 25 mil estudantes, que dinamizam a vida cultural e o mercado de serviços.',

  mercado:
    'Cidade jovem e universitária, Dourados tem demanda fitness aquecida, com academias de bairro e redes, além de uma procura crescente por treino ao ar livre nos parques bem equipados. O perfil estudantil sustenta a cena de musculação e funcional.',

  bairrosNobres: ['Jardim Europa', 'Vila Tonani', 'Parque do Lago', 'Jardim Flórida'],
  bairrosPopulares: ['Greenville', 'Cidade Jardim', 'Jardim Novo Horizonte', 'Parque das Nações'],

  parques: [
    {
      nome: 'Parque dos Ipês',
      descricao:
        'Tem pista de caminhada, academia ao ar livre, quadras (vôlei de areia, basquete, futsal e peteca) e playground — um dos espaços públicos mais completos para treino.',
    },
    {
      nome: 'Parque Antenor Martins',
      descricao:
        'Com cerca de 7.700 m², tem pista de caminhada revitalizada ao redor do lago, quadras poliesportivas e de areia e anfiteatro, sendo ponto de partida de eventos de ciclismo e corrida.',
    },
    {
      nome: 'Lagoa Maior',
      descricao:
        'Cartão-postal da cidade, com pista de caminhada, ciclovia e quiosques à beira d’água.',
    },
  ],
  ciclovias:
    'Há ciclovia na orla da Lagoa Maior; a extensão total da malha cicloviária da cidade ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical úmido, com verões quentes e chuvosos e invernos secos (a cidade já registrou 40 °C e até geadas).',
  climaTreino:
    'O calor e a umidade do verão pedem treino no início da manhã ou no fim da tarde, com boa hidratação; o inverno seco é mais confortável para correr.',

  mobilidade:
    'Dourados é cortada pela Rodovia Guaicurus (BR-463) e fica próxima da BR-163, sendo conhecida como "Portal do Mercosul" pela proximidade com o Paraguai.',

  corridas: [
    {
      nome: 'Meia Maratona do Fogo',
      descricao:
        'Promovida pela prefeitura e pelo Corpo de Bombeiros, com percursos de 21 km, 10 km e prova kids.',
    },
    {
      nome: 'Projeto "Parque em Movimento"',
      descricao:
        'Programa público de atividades físicas nos parques da cidade, que amplia o acesso gratuito ao treino.',
    },
  ],
  culturaEsportiva:
    'Dourados tem forte vínculo com o ciclismo e as corridas de rua, impulsionado pela grande população jovem e universitária e por parques bem equipados.',
  academias:
    'A oferta reúne academias de bairro e redes, com demanda puxada pelo público universitário, complementada pelos três parques com academia ao ar livre.',

  destaquesFitness: [
    'Três parques com academia ao ar livre e pistas (Ipês, Antenor Martins e Lagoa Maior).',
    'Público universitário numeroso (cerca de 25 mil) que sustenta a demanda fitness.',
    'Ciclovia na orla da Lagoa Maior e cultura de ciclismo ativa.',
    'Calendário de corridas de rua (Meia Maratona do Fogo).',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'Cidade jovem e agroindustrial do sul de MS, Dourados tem ótimos parques e uma cultura de ciclismo ativa. Um personal trainer ajuda a aproveitar a Lagoa Maior e o Parque dos Ipês com método, ajustando horários e hidratação ao calor do verão.',

  vizinhas: ['campo-grande-ms', 'cuiaba-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Dourados', url: 'https://cidades.ibge.gov.br/brasil/ms/dourados/panorama' },
    { nome: 'Prefeitura de Dourados', url: 'https://www.dourados.ms.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
