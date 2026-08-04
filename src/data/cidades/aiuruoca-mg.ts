import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'aiuruoca-mg',
  nome: 'Aiuruoca',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'aiuruoquense',
  tipo: 'cidade',

  populacao: 6233,
  populacaoAno: 2022,
  idhm: 0.67,
  idhmClasse: 'médio',
  altitudeM: 970,

  resumoEconomico:
    'Nas Terras Altas da Mantiqueira, Aiuruoca vive entre a tradição rural mineira e o turismo de montanha: o município abriga parte do Parque Estadual da Serra do Papagaio e o Vale do Matutu, refúgio que atrai caminhantes, artistas e buscadores de vida simples do país inteiro. Queijo, café e hospitalidade completam a economia serrana.',

  mercado:
    'O mercado formal de treino é o de cidade pequena — próximo e pessoal —, mas a demanda por condicionamento é real: as trilhas do Papagaio e as subidas do Matutu não perdoam sedentarismo, e o turismo de montanha movimenta guias e pousadas o ano inteiro.',

  bairrosNobres: ['Centro', 'Matutu', 'Barranco Alto', 'Campo Redondo'],
  bairrosPopulares: ['Rosário', 'Ponte Nova', 'Cachoeirinha', 'Vargem Grande'],

  parques: [
    {
      nome: 'Parque Estadual da Serra do Papagaio',
      descricao:
        'A unidade de conservação protege campos de altitude, matas e nascentes — e o Pico do Papagaio, com seus 2.293 metros, é a travessia clássica da região, exigente e recompensadora.',
    },
    {
      nome: 'Vale do Matutu',
      descricao:
        'O vale mais famoso da Mantiqueira mineira reúne cachoeiras, trilhas e uma comunidade dedicada à vida simples — caminhadas para todos os níveis em meio à mata.',
    },
    {
      nome: 'Estradas rurais das Terras Altas',
      descricao:
        'As estradas de terra entre serras e fazendas rendem pedais e caminhadas longas com o perfil ondulado da Mantiqueira.',
    },
  ],
  ciclovias:
    'O pedal de montanha é forte nas estradas de terra do circuito Terras Altas da Mantiqueira; não há malha cicloviária urbana.',

  clima:
    'Clima tropical de altitude: verões amenos e chuvosos, invernos secos e frios — com madrugadas que beiram a geada nos pontos altos.',
  climaTreino:
    'O ano inteiro é treinável ao ar livre: o verão pede atenção às chuvas da tarde, e o inverno seco é a alta temporada das travessias.',

  mobilidade:
    'Aiuruoca se conecta pelas rodovias da região a Caxambu, São Lourenço e ao circuito das águas — cerca de quatro horas separam o vale de São Paulo e do Rio.',

  corridas: [
    {
      nome: 'Travessias e trail runs da Mantiqueira',
      descricao:
        'A região das Terras Altas recebe travessias e corridas de montanha que cruzam os campos de altitude — com o Pico do Papagaio como desafio máximo local.',
    },
  ],
  culturaEsportiva:
    'Caminhar é o esporte oficial: moradores e visitantes dividem as trilhas do Matutu e do Papagaio, e a vida rural mantém o corpo em movimento por ofício.',
  academias:
    'A oferta formal é compacta — treino orientado próximo e pessoal —, com a montanha como academia principal e as pousadas somando espaços de bem-estar.',

  destaquesFitness: [
    'Pico do Papagaio (2.293 m): a travessia clássica da Mantiqueira mineira.',
    'Vale do Matutu, refúgio de trilhas e cachoeiras para todos os níveis.',
    'Altitude de 970 m no centro, com clima ameno o ano todo.',
    'Circuito Terras Altas da Mantiqueira para pedais de montanha.',
  ],

  precos: {
    avulsaMin: 40,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 600,
    onlineMin: 100,
    onlineMax: 320,
  },

  conclusao:
    'Entre o Pico do Papagaio e o Vale do Matutu, Aiuruoca é a Mantiqueira em estado puro. Um personal trainer prepara pernas e fôlego para as travessias — e transforma a vida de montanha em condicionamento que dura o ano inteiro.',

  vizinhas: ['sao-lourenco-mg', 'tres-coracoes-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Aiuruoca', url: 'https://cidades.ibge.gov.br/brasil/mg/aiuruoca/panorama' },
    { nome: 'Prefeitura de Aiuruoca', url: 'https://www.aiuruoca.mg.gov.br/' },
    { nome: 'IEF — Parque Estadual da Serra do Papagaio', url: 'http://www.ief.mg.gov.br/' },
  ],
  atualizadoEm: '2026-08-04',
};
