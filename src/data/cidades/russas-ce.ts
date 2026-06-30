import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'russas-ce',
  nome: 'Russas',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'russano',
  tipo: 'cidade',

  populacao: 72928,
  populacaoAno: 2022,
  idhm: 0.674,
  idhmClasse: 'médio',
  altitudeM: 20,

  resumoEconomico:
    'No Vale do Jaguaribe, no leste cearense, Russas é o principal polo de cerâmica vermelha do estado: concentra dezenas de cerâmicas que produzem telhas e tijolos e respondem por parcela expressiva da produção do Ceará. À indústria soma-se a fruticultura irrigada do Perímetro Irrigado Tabuleiro de Russas, um dos maiores do Nordeste, com destaque para a laranja e demais frutas. A cidade ganhou reforço no setor de serviços e na qualificação com o campus da Universidade Federal do Ceará (UFC), instalado em 2014, que oferece cursos de engenharia e ciência da computação.',

  mercado:
    'O mercado de personal trainers acompanha o crescimento do setor de serviços, o público universitário do campus da UFC e os profissionais ligados às cerâmicas e ao agronegócio irrigado. A oferta se concentra no Centro e nos bairros mais consolidados, e o calor do semiárido empurra o treino ao ar livre para as primeiras horas da manhã e o fim da tarde.',

  bairrosNobres: ['Centro', 'Jardim Guanabara', 'São Miguel', 'Parque Santa Cruz'],
  bairrosPopulares: ['Cohab', 'Planalto', 'Bela Vista', 'Santo Antônio'],

  parques: [
    {
      nome: 'Parque Ecológico de Russas',
      descricao:
        'Um dos principais pontos de encontro da cidade, com mata preservada, trilhas, lagos e áreas de lazer usadas para caminhada e atividade física ao ar livre.',
    },
    {
      nome: 'Margens do rio Jaguaribe',
      descricao:
        'O rio que dá nome ao vale corta a região e oferece áreas de lazer e percursos para caminhada e corrida à beira d’água nas proximidades da cidade.',
    },
    {
      nome: 'Avenidas e praças do Centro',
      descricao:
        'Os corredores arborizados e as praças centrais funcionam como rotas espontâneas de caminhada e corrida nos horários mais amenos.',
    },
  ],
  ciclovias:
    'A bicicleta é meio de transporte comum no dia a dia da cidade, mas Russas ainda tem poucos trechos de ciclovia dedicada, e boa parte do pedal acontece nas vias compartilhadas.',

  clima:
    'O clima é semiárido quente, típico do Vale do Jaguaribe e do leste cearense, com temperaturas elevadas ao longo do ano e chuvas concentradas no primeiro semestre, sobretudo entre fevereiro e maio.',
  climaTreino:
    'O calor intenso recomenda treino ao ar livre no início da manhã ou no fim da tarde, com atenção constante à hidratação e à proteção solar; nos horários de pico de sol, o ambiente coberto é a opção mais segura.',

  mobilidade:
    'O acesso principal é pela BR-116 (rodovia Santos Dumont), que liga Russas a Fortaleza (cerca de 160 km) e ao sul do estado, complementada pela CE-356; o trânsito interno é leve e as distâncias urbanas são curtas, o que facilita o deslocamento a pé ou de bicicleta para treinar.',

  corridas: [
    {
      nome: 'Corridas de rua municipais',
      descricao:
        'A cidade recebe provas de rua promovidas pela prefeitura e por grupos locais, com largadas em pontos centrais e percursos curtos voltados a corredores de todos os níveis.',
    },
    {
      nome: 'Eventos esportivos do calendário local',
      descricao:
        'Festividades e datas comemorativas costumam incluir caminhadas e corridas que reúnem moradores e movimentam a cena esportiva da cidade.',
    },
  ],
  culturaEsportiva:
    'A cena esportiva de Russas é movida por grupos de corrida e caminhada e pelo público do campus da UFC, com o Parque Ecológico e as vias centrais como pontos de encontro; o custo de vida acessível e as distâncias curtas favorecem a adesão à atividade física.',
  academias:
    'A oferta de academias se concentra no Centro e nos bairros mais consolidados, atendendo ao público universitário e aos profissionais ligados às cerâmicas e ao agronegócio, e é complementada pelo Parque Ecológico de Russas e pelas avenidas centrais.',

  destaquesFitness: [
    'Parque Ecológico de Russas como principal espaço público gratuito para treino ao ar livre.',
    'Demanda sustentada pelo campus da UFC e pelo setor de serviços em expansão.',
    'Distâncias urbanas curtas e trânsito leve, que facilitam o deslocamento para treinar.',
    'Clima semiárido quente que organiza a rotina de treino em torno da manhã e do fim da tarde.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Polo de cerâmica vermelha e de fruticultura irrigada no Vale do Jaguaribe, Russas combina interior produtivo, campus universitário e custo de vida acessível. Para treinar bem no calor do semiárido, um personal trainer ajuda a ajustar horários, hidratação e intensidade, aproveitando o Parque Ecológico e as vias centrais da cidade.',

  vizinhas: ['fortaleza-ce', 'aracati-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Russas', url: 'https://cidades.ibge.gov.br/brasil/ce/russas/panorama' },
    { nome: 'Prefeitura de Russas', url: 'https://russas.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
