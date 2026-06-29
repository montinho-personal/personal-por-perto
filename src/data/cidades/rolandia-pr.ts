import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'rolandia-pr',
  nome: 'Rolândia',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'rolandense',
  tipo: 'cidade',

  populacao: 71670,
  populacaoAno: 2022,
  idhm: 0.739,
  idhmClasse: 'alto',
  altitudeM: 610,

  resumoEconomico:
    'No Norte do Paraná e integrada à Região Metropolitana de Londrina, Rolândia nasceu na década de 1930 da colonização promovida pela Paraná Plantation, que atraiu imigrantes alemães e europeus para a Gleba Roland. Berço da cultura cafeeira que rendeu o apelido de "Pequena Londres", hoje a cidade diversificou a base agrícola para soja, milho, trigo, cana e laranja, com agroindústria relevante e uma economia urbana cada vez mais ligada à conurbação com Londrina.',

  mercado:
    'Cidade de porte médio na Região Metropolitana de Londrina, Rolândia combina musculação em academias locais e redes de fitness com a procura crescente por treino funcional e corrida de rua. A proximidade com Londrina amplia a oferta de profissionais e a circulação de assessorias esportivas, e o atendimento personalizado encontra espaço em academias de bairro, condomínios e nos espaços públicos da cidade.',

  bairrosNobres: ['Centro', 'Jardim do Café', 'Jardim Nobre', 'Jardim Caviúna'],
  bairrosPopulares: ['Jardim Kasato Maru', 'Jardim Novo Horizonte', 'Jardim Costa do Sol', 'Conjunto Habitacional'],

  parques: [
    {
      nome: 'Praças e academias ao ar livre do Centro',
      descricao:
        'As praças centrais de Rolândia concentram pista de caminhada, bancos e equipamentos de academia ao ar livre, sendo o ponto de encontro de quem treina ao amanhecer e no fim de tarde na área urbana.',
    },
    {
      nome: 'Trilha do Saracura',
      descricao:
        'Atrativo de natureza no município, com percurso em meio à mata indicado para caminhada e trail leve — boa opção para treino fora do asfalto.',
    },
    {
      nome: 'Caminhada Ecológica de Rolândia',
      descricao:
        'Roteiro de caminhada em ambiente natural promovido na cidade, que reforça a cultura de atividade ao ar livre e a integração com a paisagem rural do entorno.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de ciclovia e ciclofaixa em avenidas urbanas, e o ciclismo ganha força em roteiros como o Passeio Ciclístico San José, no entorno rural do município.',

  clima:
    'O clima é subtropical, típico do Norte do Paraná, com estações bem definidas: verões quentes e chuvosos e invernos amenos, com geadas ocasionais e a neblina matinal frequente associada à altitude de cerca de 610 metros.',
  climaTreino:
    'O treino ao ar livre é confortável na maior parte do ano. No verão, vale priorizar o início da manhã e evitar o fim de tarde, quando se concentram calor e pancadas de chuva; no inverno, as manhãs ensolaradas são as mais agradáveis.',

  mobilidade:
    'Rolândia é cortada pela BR-369, que liga a cidade a Londrina, Arapongas e Apucarana, e integra a Região Metropolitana de Londrina, com forte fluxo pendular entre os municípios. O transporte é feito por ônibus urbano e intermunicipal, e a malha viária plana facilita deslocamentos a pé e de bicicleta na área central.',

  corridas: [
    {
      nome: 'Corrida do Dia Internacional da Mulher',
      descricao:
        'Prova de rua tradicional em março, com percurso adulto de cerca de 6 km e categoria kids, largada na região do Ginásio de Esportes Emílio Gomes e apoio da comunidade esportiva local.',
    },
    {
      nome: 'Provas de rua dos Tucanos',
      descricao:
        'A Associação de Corredores de Rua de Rolândia (Os Tucanos) movimenta o calendário local com provas e treinos coletivos, reunindo corredores da cidade e da região metropolitana.',
    },
  ],
  culturaEsportiva:
    'Rolândia tem cultura esportiva ativa para uma cidade de seu porte, com corrida de rua organizada em torno da associação Os Tucanos, ciclismo de estrada e caminhadas ecológicas. A proximidade com Londrina amplia o acesso a provas e grupos de treino na Região Metropolitana.',
  academias:
    'A oferta reúne academias locais de musculação e redes de fitness, além de estúdios de treino funcional, complementadas pela ampla estrutura disponível na vizinha Londrina para quem busca variedade de modalidades.',

  destaquesFitness: [
    'Cidade plana e arborizada, favorável a caminhada, corrida e ciclismo no dia a dia.',
    'Corrida de rua organizada pela associação Os Tucanos, com calendário de provas e treinos.',
    'Integração à Região Metropolitana de Londrina, ampliando provas, grupos e profissionais.',
    'Praças centrais com academia ao ar livre e atrativos de natureza como a Trilha do Saracura.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade de colonização europeia, raízes no café e cotidiano integrado à Região Metropolitana de Londrina, Rolândia une clima subtropical agradável, relevo plano e cultura de corrida em crescimento. Um personal trainer ajuda a transformar essa estrutura — das praças centrais às trilhas e à malha da região — em um plano de treino consistente e ajustado à sua rotina.',

  vizinhas: ['londrina-pr', 'arapongas-pr', 'maringa-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Rolândia', url: 'https://cidades.ibge.gov.br/brasil/pr/rolandia/panorama' },
    { nome: 'Prefeitura de Rolândia', url: 'https://www.rolandia.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
