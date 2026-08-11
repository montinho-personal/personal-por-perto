import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tibagi-pr',
  nome: 'Tibagi',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'tibagiano',
  tipo: 'cidade',

  populacao: 19961,
  populacaoAno: 2022,
  idhm: 0.664,
  idhmClasse: 'médio',

  resumoEconomico:
    'Fundada em 1872 nos Campos Gerais, a 200 km de Curitiba, Tibagi tem 19.961 habitantes (Censo 2022) e uma economia apoiada em dois pilares: a agricultura de larga escala — o município é referência nacional na produção de trigo — e o turismo de natureza, puxado pelo Cânion do Guartelá, um dos maiores do país.',

  mercado:
    'O mercado de personal trainer é pequeno e de relação direta: poucos profissionais atendendo moradores, produtores rurais e o pessoal ligado ao turismo de aventura. A academia do centro divide espaço com o atendimento a domicílio e com o treino ao ar livre, que numa cidade de cânion e campo é praticamente gratuito.',

  bairrosNobres: ['Centro', 'Alto da Boa Vista', 'Vila Nova', 'Chácaras'],
  bairrosPopulares: ['Cohab', 'São Sebastião', 'Vila Isabel', 'Zona Rural'],

  parques: [
    {
      nome: 'Parque Estadual do Guartelá',
      descricao:
        'Com 798,97 hectares, protege o Cânion do Guartelá — um dos maiores do Brasil — e abriga a cachoeira Ponte de Pedra, com cerca de 180 metros de queda.',
    },
    {
      nome: 'Cânion do Guartelá',
      descricao:
        'Esculpido pelo rio Iapó nos arenitos dos Campos Gerais, reúne mirantes, trilhas de dificuldade variada e paredões usados para escalada e rapel.',
    },
    {
      nome: 'Campos Gerais',
      descricao:
        'O relevo de campos naturais e matas de araucária define o entorno da cidade, com estradas rurais de desnível constante para caminhada, corrida e pedal.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária urbana. As estradas rurais entre o centro e os acessos ao cânion formam o circuito de cicloturismo e mountain bike da região.',

  clima:
    'Subtropical, com verão ameno e inverno frio — geadas são comuns nos Campos Gerais, e as noites são frescas boa parte do ano.',
  climaTreino:
    'O clima permite treinar ao ar livre quase o ano inteiro, com verão bem mais tolerável que o de outras regiões do país. No inverno, o frio pede aquecimento mais longo e roupa em camadas — e é a melhor época para as trilhas do cânion, com trechos secos.',

  mobilidade:
    'A cidade é compacta e caminhável no centro. O acesso regional se faz pela PR-340, com Ponta Grossa e Castro como referências próximas, e o parque estadual fica a algumas dezenas de quilômetros da sede.',

  corridas: [
    {
      nome: 'Provas de trail dos Campos Gerais',
      descricao:
        'O calendário regional reúne corridas de montanha e travessias que exploram o relevo do cânion e as estradas rurais, com terreno técnico e desnível.',
    },
  ],
  culturaEsportiva:
    'O turismo de aventura trouxe escalada, rapel e trilha para a rotina local, ao lado do futebol amador e das cavalgadas. Caminhar e subir trilha fazem parte do trabalho de quem vive do turismo do cânion.',
  academias:
    'A oferta formal é compacta e concentrada no centro, com espaços pequenos de musculação — o que abre espaço para o atendimento individual e para o treino em casa.',

  destaquesFitness: [
    'Cânion do Guartelá, um dos maiores do Brasil, com trilhas e mirantes.',
    'Cachoeira Ponte de Pedra, com cerca de 180 m de queda.',
    'Parque Estadual do Guartelá, com 798,97 hectares protegidos.',
    'Estradas rurais dos Campos Gerais, com desnível constante.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 620,
    onlineMin: 120,
    onlineMax: 330,
  },

  conclusao:
    'Tibagi junta trigo e cânion no mesmo município. Um personal trainer daqui prepara perna e fôlego para as trilhas do Guartelá — e usa a academia como base de força para que o passeio do fim de semana não cobre a conta na segunda.',

  vizinhas: ['ponta-grossa-pr', 'castro-pr', 'telemaco-borba-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Tibagi', url: 'https://cidades.ibge.gov.br/brasil/pr/tibagi/panorama' },
    { nome: 'Prefeitura de Tibagi', url: 'https://www.tibagi.pr.gov.br/' },
    { nome: 'Instituto Água e Terra — Parque Estadual do Guartelá', url: 'https://www.iat.pr.gov.br/' },
  ],
  atualizadoEm: '2026-08-11',
};
