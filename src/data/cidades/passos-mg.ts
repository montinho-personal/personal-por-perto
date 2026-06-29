import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'passos-mg',
  nome: 'Passos',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'passense',
  tipo: 'cidade',

  populacao: 111939,
  populacaoAno: 2022,
  idhm: 0.756,
  idhmClasse: 'alto',
  altitudeM: 745,

  resumoEconomico:
    'Considerada a capital do Sudoeste mineiro, Passos combina o agronegócio do café e da pecuária com um forte polo de confecção — a famosa Avenida da Moda reúne mais de 50 lojas de fábrica em cerca de 1,5 km. A proximidade com o Lago de Furnas, o "mar de Minas", impulsiona o turismo náutico e movimenta serviços, comércio e a economia local.',

  mercado:
    'O mercado fitness é típico de cidade média mineira em crescimento, com academias de bairro, redes regionais, estúdios e boxes de treino funcional. A vocação para o turismo náutico no Lago de Furnas aproxima a cidade de esportes ao ar livre e atividades aquáticas.',

  bairrosNobres: ['Centro', 'Canjeranus', 'Colégio', 'Belo Horizonte'],
  bairrosPopulares: ['Eldorado', 'Penha', 'São José', 'Santa Casa'],

  parques: [
    {
      nome: 'Parque Municipal Dr. Emílio Piantino',
      descricao:
        'Área verde tombada pelo município, com trilhas e mata nativa; é um dos principais espaços para caminhada, contato com a natureza e atividade física ao ar livre na cidade.',
    },
    {
      nome: 'Lago Municipal',
      descricao:
        'Espelho d’água urbano com entorno arborizado, usado como ponto de encontro para caminhada, corrida leve e lazer ao ar livre.',
    },
    {
      nome: 'Lago de Furnas',
      descricao:
        'O "mar de Minas" às margens de Passos, com cânions e ampla frota de lanchas; base do turismo náutico e de esportes aquáticos da região.',
    },
  ],
  ciclovias:
    'A cidade conta com vias de pedalada e ruas de baixo tráfego usadas por ciclistas; a extensão oficial total de ciclovias não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude, com verão quente e chuvoso (dezembro a fevereiro, com máximas próximas de 29 °C) e inverno seco e ameno, típico do Sul/Sudoeste de Minas.',
  climaTreino:
    'O inverno seco e a altitude favorecem o treino ao ar livre, sobretudo no começo da manhã; no verão, vale priorizar os horários mais frescos, evitar o fim de tarde (chuvas) e reforçar a hidratação.',

  mobilidade:
    'Passos é cortada pela MG-050, principal eixo de acesso, em posição estratégica no Sudoeste mineiro — próxima de Franca (SP) e do Lago de Furnas, e a cerca de 350 km de Belo Horizonte. A cidade tem aeroporto regional próprio.',

  corridas: [
    {
      nome: 'Mini Maratona de Passos',
      descricao:
        'Prova de rua tradicional da cidade, com percurso de 7 km, premiação por categorias e grande adesão de corredores locais.',
    },
    {
      nome: 'Circuito Mirante',
      descricao:
        'Corrida de rua realizada em Passos, com premiação aos vencedores de cada categoria.',
    },
  ],
  culturaEsportiva:
    'A cidade tem calendário ativo de corridas e caminhadas, com boa adesão da comunidade e apoio da prefeitura. A cultura ao ar livre é reforçada pelo turismo náutico do Lago de Furnas, que aproxima a população de esportes aquáticos e de aventura.',
  academias:
    'A oferta reúne academias de bairro, redes regionais, estúdios e boxes de treino funcional, complementados pela estrutura pública do Parque Municipal Dr. Emílio Piantino e do Lago Municipal.',

  destaquesFitness: [
    'Parque Municipal Dr. Emílio Piantino como principal espaço público para caminhada.',
    'Lago de Furnas e turismo náutico que ampliam as opções de esporte ao ar livre.',
    'Calendário de corridas de rua, como a Mini Maratona de Passos.',
    'Inverno seco e clima de altitude favoráveis ao treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 280,
    mensalMax: 700,
    onlineMin: 130,
    onlineMax: 350,
  },

  conclusao:
    'Capital do Sudoeste mineiro e porta de entrada do Lago de Furnas, Passos une clima de altitude, parques públicos e uma cena crescente de corrida de rua. Um personal trainer ajuda a aproveitar o Parque Dr. Emílio Piantino, o Lago Municipal e a preparar provas como a Mini Maratona, com método e segurança.',

  vizinhas: ['pocos-de-caldas-mg', 'varginha-mg', 'divinopolis-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Passos', url: 'https://cidades.ibge.gov.br/brasil/mg/passos/panorama' },
    { nome: 'Prefeitura de Passos', url: 'https://www.passos.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
