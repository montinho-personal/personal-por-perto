import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'linhares-es',
  nome: 'Linhares',
  uf: 'ES',
  estado: 'Espírito Santo',
  estadoSlug: 'espirito-santo',
  regiao: 'Sudeste',
  gentilico: 'linharense',
  tipo: 'cidade',

  populacao: 166786,
  populacaoAno: 2022,
  idhm: 0.724,
  idhmClasse: 'alto',
  altitudeM: 29,

  resumoEconomico:
    'Maior município do Espírito Santo em área e o mais populoso do norte do estado, Linhares é polo industrial e logístico cortado pela BR-101 (com nomes como WEG e Imetame). É forte no agronegócio — maior exportador brasileiro de mamão e grande produtor de café —, na produção de petróleo e gás onshore, e abriga a Lagoa Juparanã, a maior lagoa de água doce em volume do Brasil.',

  mercado:
    'Cidade em crescimento acelerado, com renda industrial e bairros planejados, tem boa densidade de academias e estúdios (inclusive crossfit junto à orla), com público de operários da indústria, famílias e classe média alta.',

  bairrosNobres: ['Centro', 'Três Barras', 'Colina', 'Araçá'],
  bairrosPopulares: ['Aviso', 'Interlagos', 'Movelar', 'Nova Esperança'],

  parques: [
    {
      nome: 'Linha Verde (orla da Lagoa do Meio)',
      descricao:
        'Pista de caminhada e corrida sinalizada a cada 100 m, com percurso total de cerca de 2.200 m, usada para corrida, ciclismo e treino funcional.',
    },
    {
      nome: 'Orla da Lagoa Juparanã',
      descricao:
        'Margens arborizadas para caminhada e esportes aquáticos como remo, stand-up paddle e caiaque.',
    },
    {
      nome: 'Parque Horto e áreas verdes urbanas',
      descricao:
        'Espaços para caminhada e lazer ao ar livre no perímetro urbano.',
    },
  ],
  ciclovias:
    'A Linha Verde é muito usada para ciclismo; a extensão oficial da malha cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente e úmido, com calor e umidade elevados na maior parte do ano.',
  climaTreino:
    'Vale priorizar os treinos no início da manhã e no fim de tarde, com atenção redobrada à hidratação.',

  mobilidade:
    'Linhares é cortada pela BR-101, eixo principal norte-sul que atravessa a cidade e conecta ao porto e ao litoral.',

  corridas: [
    {
      nome: 'Meia Maratona do Verde e das Águas',
      descricao:
        'Prova realizada na Reserva Natural Vale, com percursos de 7 km, 21 km e kids.',
    },
    {
      nome: 'Corridas da ACML',
      descricao:
        'A Associação de Corredores do Município de Linhares organiza e apoia o calendário local de corrida de rua.',
    },
  ],
  culturaEsportiva:
    'A "cidade das águas" tem forte vínculo com esportes ao ar livre ligados à Lagoa Juparanã (remo, SUP e caiaque) e uma cena de corrida de rua organizada.',
  academias:
    'A oferta reúne academias e estúdios, com a Linha Verde e a Lagoa Juparanã funcionando como espaços naturais de treino.',

  destaquesFitness: [
    'Linha Verde com pista sinalizada (marcos de 100 m até 2,2 km) — referência para corredores.',
    'Lagoa Juparanã, que viabiliza esportes aquáticos e treino outdoor.',
    'Bairros novos planejados (Três Barras) com academias ao ar livre.',
    'Cena de corrida de rua ativa (ACML e Meia Maratona do Verde e das Águas).',
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
    'Maior município do ES e cidade das águas, Linhares une indústria, agro e a Lagoa Juparanã. Um personal trainer ajuda a aproveitar a Linha Verde e a lagoa com método, ajustando horários e hidratação ao calor úmido do norte capixaba.',

  vizinhas: ['vitoria-es', 'serra-es', 'cariacica-es'],

  fontes: [
    { nome: 'IBGE Cidades — Linhares', url: 'https://cidades.ibge.gov.br/brasil/es/linhares/panorama' },
    { nome: 'Prefeitura de Linhares', url: 'https://www.linhares.es.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
