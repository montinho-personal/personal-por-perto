import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'petropolis-rj',
  nome: 'Petrópolis',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'petropolitano',
  tipo: 'cidade',

  populacao: 278881,
  populacaoAno: 2022,
  idhm: 0.745,
  idhmClasse: 'alto',
  altitudeM: 838,

  resumoEconomico:
    'A "Cidade Imperial", antiga residência de verão de D. Pedro II, vive fortemente do turismo histórico e de serra, com atrativos como o Museu Imperial e o Palácio Quitandinha. É também um relevante polo de moda e confecção e tem tradição cervejeira de herança germânica, além de um setor crescente de tecnologia e serviços. O clima frio de serra é o grande diferencial para o treino.',

  mercado:
    'Cidade de bom poder aquisitivo e perfil de bem-estar e turismo, Petrópolis valoriza academias indoor e treino funcional por causa do clima frio, com um nicho crescente em trilhas e corrida de serra. A demanda por personal trainers acompanha esse público exigente.',

  bairrosNobres: ['Valparaíso', 'Centro Histórico', 'Itaipava', 'Araras'],
  bairrosPopulares: ['Quitandinha', 'Bingen', 'Cascatinha', 'Alto da Serra'],

  parques: [
    {
      nome: 'Parque Cremerie',
      descricao:
        'Parque municipal de cerca de 47 mil m² no bairro Independência, com trilhas demarcadas, quadras, lago e muita área verde — ideal para caminhada e treino ao ar livre.',
    },
    {
      nome: 'Lago do Palácio Quitandinha',
      descricao:
        'Cenário histórico com atividades gratuitas ao ar livre (yoga e alongamento) e área para caminhada.',
    },
    {
      nome: 'Centro Histórico',
      descricao:
        'Calçadões e ruas planas junto ao Museu Imperial e ao Palácio de Cristal, usados para caminhada e corrida de rua.',
    },
  ],
  ciclovias:
    'O relevo serrano dificulta a implantação de uma rede de ciclovia urbana estruturada; o ciclismo predomina em estrada e mountain bike nos distritos.',

  clima:
    'O clima é frio e úmido de serra, com média entre 18 °C e 24 °C e invernos que ficam frequentemente em torno de 10 °C a 12 °C.',
  climaTreino:
    'O frio exige aquecimento mais longo e agasalho; em compensação, a serra é ótima para corrida e trilhas. Vale evitar treino em manhãs muito úmidas e frias sem o preparo adequado.',

  mobilidade:
    'O acesso principal é pela BR-040, que liga ao Rio de Janeiro (cerca de 40 km) e a Juiz de Fora — uma via serrana sujeita a neblina e ao tráfego turístico nos fins de semana.',

  corridas: [
    {
      nome: 'BaueRun',
      descricao:
        'Corrida de 7 km com largada no Palácio de Cristal, pelo Centro Histórico, integrada à festa Bauernfest.',
    },
    {
      nome: '15K Petrópolis x Itaipava',
      descricao:
        'Prova tradicional ligando os distritos, com chegada no Parque Municipal de Itaipava.',
    },
  ],
  culturaEsportiva:
    'Petrópolis tem cena ativa de corrida de rua e de trilhas e montanhismo, aproveitando a serra, com eventos esportivos atrelados ao calendário cultural (como o Bauernfest).',
  academias:
    'A oferta valoriza as academias indoor e o treino funcional por causa do clima frio, com um nicho crescente em trilhas e corrida de serra, atendendo um público turístico e de alto padrão.',

  destaquesFitness: [
    'Clima serrano frio que favorece corrida, trilhas e treino de resistência.',
    'Parque Cremerie, com cerca de 47 mil m² e trilhas para treino ao ar livre.',
    'Calendário forte de corridas (BaueRun e 15K Petrópolis–Itaipava).',
    'Público turístico e de alto padrão, que sustenta o nicho de bem-estar.',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 180,
    mensalMin: 400,
    mensalMax: 1050,
    onlineMin: 180,
    onlineMax: 460,
  },

  conclusao:
    'Cidade Imperial e serrana, Petrópolis é um cenário privilegiado para corrida, trilhas e treino de resistência. Um personal trainer ajuda a aproveitar o clima frio a seu favor, com aquecimento e periodização adequados, do Parque Cremerie às provas de serra.',

  vizinhas: ['rio-de-janeiro-rj', 'duque-de-caxias-rj', 'juiz-de-fora-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Petrópolis', url: 'https://cidades.ibge.gov.br/brasil/rj/petropolis/panorama' },
    { nome: 'Prefeitura de Petrópolis', url: 'https://www.petropolis.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
