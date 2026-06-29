import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'rio-das-ostras-rj',
  nome: 'Rio das Ostras',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'rio-ostrense',
  tipo: 'cidade',

  populacao: 156491,
  populacaoAno: 2022,
  idhm: 0.773,
  idhmClasse: 'alto',

  resumoEconomico:
    'Na área de influência da Bacia de Campos, Rio das Ostras concentra empresas prestadoras de serviços ao setor de petróleo, com uma Zona Especial de Negócios que multiplicou o número de empresas. Teve um dos maiores crescimentos populacionais do estado, tem PIB per capita acima da média estadual e um turismo de praia forte, com cerca de 15 praias em torno de 28 km de litoral.',

  mercado:
    'A renda elevada e a cultura de praia sustentam a demanda por treino; as orlas com estrutura pública de academia ao ar livre e ciclovia favorecem o trabalho de personal trainers ao ar livre.',

  bairrosNobres: ['Costa Azul', 'Extensão Serramar', 'Praia Âncora', 'Village Rio das Ostras'],
  bairrosPopulares: ['Mar do Norte', 'Balneário das Garças', 'Cidade Praiana', 'Jardim Marileia'],

  parques: [
    {
      nome: 'Orla de Costazul',
      descricao:
        'Orla de lazer com ciclovia, academia ao ar livre, quiosques e área de restinga preservada — o principal ponto esportivo da cidade.',
    },
    {
      nome: 'Lagoa de Iriry',
      descricao:
        'Conhecida como Lagoa da Coca-Cola, tem entorno usado para corrida e caminhada e é ponto de largada de provas locais, com mirante.',
    },
    {
      nome: 'Parque Natural Municipal dos Pássaros',
      descricao:
        'Tem trilhas ecológicas para caminhada, ginástica ao ar livre, lago e mirante.',
    },
  ],
  ciclovias:
    'Há ciclovia na orla de Costazul; a extensão total da malha municipal ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical úmido, com sol em cerca de 300 dias por ano, temperaturas amenas e chuvas concentradas de dezembro a março.',
  climaTreino:
    'O calor litorâneo pede treino cedo de manhã ou no fim de tarde, com hidratação e proteção solar; o clima estável permite treinar ao ar livre quase o ano todo.',

  mobilidade:
    'O acesso se dá pela BR-101 e pela RJ-106 (Amaral Peixoto), conectando a cidade à Região dos Lagos e a Macaé.',

  corridas: [
    {
      nome: 'Rio das Ostras Run',
      descricao:
        'Largada na Lagoa de Iriry, com percursos de 6 km (corrida) e 3 km (caminhada), organizada pela prefeitura.',
    },
    {
      nome: 'Mulheres em Movimento — Uma Corrida Pela Vida',
      descricao:
        'Prova de outubro (Outubro Rosa), com 5 km de corrida e 2 km de caminhada, com largada na Lagoa de Iriry.',
    },
  ],
  culturaEsportiva:
    'A cidade tem forte ligação com esportes de praia e ao ar livre, com eventos esportivos públicos recorrentes; também sedia o tradicional Rio das Ostras Jazz & Blues.',
  academias:
    'A oferta de academias e estúdios é sustentada pela alta renda e pela cultura de praia, complementada pela orla equipada de Costazul e pela Lagoa de Iriry.',

  destaquesFitness: [
    'Orla de Costazul totalmente equipada (ciclovia e academia ao ar livre).',
    'Lagoa de Iriry como hub de corridas de rua.',
    'Trilhas e ginástica ao ar livre no Parque dos Pássaros.',
    'Clima com cerca de 300 dias de sol por ano, ideal para treino outdoor.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 175,
    mensalMin: 360,
    mensalMax: 970,
    onlineMin: 170,
    onlineMax: 440,
  },

  conclusao:
    'Cidade litorânea de alta renda na Bacia de Campos, Rio das Ostras tem orlas equipadas e sol quase o ano todo. Um personal trainer ajuda a aproveitar Costazul e a Lagoa de Iriry com método, ajustando horários e hidratação ao calor do litoral.',

  vizinhas: ['macae-rj', 'cabo-frio-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Rio das Ostras', url: 'https://cidades.ibge.gov.br/brasil/rj/rio-das-ostras/panorama' },
    { nome: 'Prefeitura de Rio das Ostras', url: 'https://www.riodasostras.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
