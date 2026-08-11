import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itamonte-mg',
  nome: 'Itamonte',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'itamontense',
  tipo: 'cidade',

  populacao: 14786,
  populacaoAno: 2022,

  resumoEconomico:
    'Com 14.786 habitantes (Censo 2022), Itamonte é a porta mineira da parte alta do Parque Nacional do Itatiaia — cerca de 60% da área do parque fica dentro do município. A economia combina uma indústria forte no PIB local com turismo rural, ecoturismo de montanha e a criação de truta arco-íris, que encontra nas águas frias e cristalinas da Mantiqueira as condições ideais e abastece restaurantes da região, São Paulo, Rio e Belo Horizonte.',

  mercado:
    'O mercado de personal trainer é pequeno e mesclado ao turismo de montanha: além dos moradores do centro, há condutores, donos de pousada e visitantes de temporada que buscam preparo para trilha e travessia. A academia de bairro divide espaço com o treino a domicílio e com o trabalho de fôlego e pernas feito nas próprias subidas da serra.',

  bairrosNobres: ['Centro', 'Boa Vista', 'Engenho da Serra', 'Vale dos Lírios'],
  bairrosPopulares: ['Fragária', 'Campo Redondo', 'Vargem Grande', 'Capelinha'],

  parques: [
    {
      nome: 'Parque Nacional do Itatiaia — parte alta',
      descricao:
        'Cerca de 60% do parque fica em Itamonte, incluindo o acesso ao platô de altitude pela BR-354. É por aqui que se chega à base do Pico das Agulhas Negras, de 2.791 metros, um dos pontos mais altos do Brasil.',
    },
    {
      nome: 'Garganta do Registro',
      descricao:
        'Passo de montanha a 1.669 metros, na divisa com Resende (RJ), onde no período colonial se registravam as tropas e o ouro que desciam de Minas. Marca o km 0 da BR-354 e a entrada da parte alta do parque.',
    },
    {
      nome: 'Pico dos Três Estados',
      descricao:
        'Com 2.665 metros, fica exatamente sobre a tríplice divisa de Minas Gerais, São Paulo e Rio de Janeiro — travessia clássica do montanhismo na Serra da Mantiqueira.',
    },
    {
      nome: 'Cachoeira da Fragária',
      descricao:
        'Queda de quase 100 metros entre os bairros rurais de Campo Redondo e Fragária, a cerca de 33 km do centro — considerada a maior cachoeira do município.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária urbana. As estradas de terra entre os bairros rurais e as subidas de serra da BR-354 são procuradas pelo ciclismo de montanha e pelo cicloturismo de altitude.',

  clima:
    'Tropical de altitude, com verões amenos e chuvosos e invernos secos e frios — nas partes altas do município as geadas são frequentes e as madrugadas podem ficar abaixo de zero.',
  climaTreino:
    'O verão fresco torna o treino ao ar livre confortável quase o dia inteiro. No inverno, o aquecimento precisa ser mais longo e a roupa em camadas; quem sobe para treinar caminhada e corrida em altitude deve respeitar a adaptação ao ar mais rarefeito.',

  mobilidade:
    'O centro é compacto e caminhável, mas o município é extenso: os bairros rurais e os atrativos de montanha ficam a quilômetros de estrada de terra. A BR-354 corta o território e liga Itamonte à Via Dutra, por Resende, e ao sul de Minas.',

  corridas: [
    {
      nome: 'Provas de montanha da Mantiqueira',
      descricao:
        'O calendário regional de trail run explora as estradas rurais, os campos de altitude e as travessias da serra, com desnível severo e clima de montanha.',
    },
  ],
  culturaEsportiva:
    'Trilha, montanhismo e cavalgada fazem parte da rotina local — a cidade é base histórica de quem sobe para as Agulhas Negras e para as travessias de altitude. A pesca esportiva de truta e o cicloturismo completam o repertório.',
  academias:
    'A oferta formal é pequena e concentrada no centro, com espaços compactos de musculação — o que abre espaço para o atendimento individual, o treino em casa e a preparação específica para montanha.',

  destaquesFitness: [
    'Cerca de 60% do Parque Nacional do Itatiaia dentro do município.',
    'Acesso à base do Pico das Agulhas Negras, de 2.791 m, pela BR-354.',
    'Pico dos Três Estados, a 2.665 m, na tríplice divisa MG–SP–RJ.',
    'Cachoeira da Fragária, com quase 100 m de queda.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 680,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Itamonte é a base mineira do teto do Brasil sudeste: quem mora ou passa temporada aqui treina com a montanha no horizonte. Um personal trainer local prepara pernas, fôlego e força para trilha e travessia — e usa a academia do centro como alicerce nos meses frios.',

  vizinhas: ['itanhandu-mg', 'passa-quatro-mg', 'itatiaia-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Itamonte', url: 'https://www.ibge.gov.br/cidades-e-estados/mg/itamonte.html' },
    { nome: 'Visite Itamonte — portal oficial de turismo', url: 'https://visiteitamonte.mg.gov.br/' },
    { nome: 'ICMBio — Parque Nacional do Itatiaia', url: 'https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/unidade-de-conservacao/unidades-de-biomas/mata-atlantica/lista-de-ucs/parna-do-itatiaia' },
  ],
  atualizadoEm: '2026-08-11',
};
