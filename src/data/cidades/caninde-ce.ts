import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'caninde-ce',
  nome: 'Canindé',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'canindeense',
  tipo: 'cidade',

  populacao: 74174,
  populacaoAno: 2022,
  idhm: 0.612,
  idhmClasse: 'médio',
  altitudeM: 148,

  resumoEconomico:
    'No Sertão Central do Ceará, a cerca de 110 km de Fortaleza, Canindé é um dos maiores centros de turismo religioso do Brasil. A cidade abriga a Basílica de São Francisco das Chagas, maior santuário franciscano das Américas, que reúne todos os anos a Romaria de São Francisco — uma das maiores manifestações franciscanas do mundo, com peregrinos vindos de todo o país. A economia gira em torno do comércio regional e dos serviços ligados ao fluxo de romeiros, complementados por agropecuária e pelo setor público.',

  mercado:
    'O mercado de personal trainers é típico de cidade média do interior cearense, ainda em formação, ligado ao comércio regional, ao funcionalismo e ao público que busca academias no Centro. O calor do semiárido concentra o treino ao ar livre nos horários mais amenos do dia.',

  bairrosNobres: ['Centro', 'Bela Vista', 'Nossa Senhora das Graças', 'Boa Vista'],
  bairrosPopulares: ['São Francisco', 'Santa Luzia', 'Palestina', 'São Mateus'],

  parques: [
    {
      nome: 'Entorno da Basílica e Praça dos Romeiros',
      descricao:
        'O conjunto em torno da Basílica de São Francisco das Chagas e da Praça dos Romeiros, no Centro, é o principal espaço público de caminhada e convívio, revitalizado para receber o grande fluxo de visitantes.',
    },
    {
      nome: 'Corredor do Romeiro',
      descricao:
        'Trajeto urbano ligado à chegada dos peregrinos ao santuário, usado também para caminhadas no dia a dia.',
    },
  ],
  ciclovias:
    'A bicicleta é meio de transporte comum no interior, mas a cidade ainda tem pouca malha cicloviária dedicada.',

  clima:
    'O clima é semiárido quente e seco (classificação tropical com estação seca), com temperaturas elevadas — máximas em torno de 33 °C — e chuvas concentradas entre janeiro e abril; o restante do ano é predominantemente seco.',
  climaTreino:
    'O calor e a baixa umidade exigem treino ao ar livre no início da manhã ou ao fim da tarde, com atenção redobrada à hidratação e à proteção solar.',

  mobilidade:
    'O acesso principal é pela BR-020, que liga Canindé a Fortaleza (cerca de 110 km) e segue rumo ao interior em direção ao Piauí. O trânsito interno é leve na maior parte do ano, ficando intenso no período da Romaria de São Francisco, quando a cidade recebe grande volume de visitantes.',

  corridas: [
    {
      nome: 'Corrida de São Francisco',
      descricao:
        'Prova de rua associada às festividades do padroeiro, com largada nas imediações da Basílica, que mobiliza a cidade dentro do calendário da romaria.',
    },
    {
      nome: 'Corrida Feirão do Lar',
      descricao:
        'Evento de corrida de rua promovido na cidade, exemplo da cena esportiva local em formação.',
    },
  ],
  culturaEsportiva:
    'A vida coletiva de Canindé é fortemente marcada pela religiosidade e pela romaria, que também se traduz em caminhadas e provas de rua ligadas ao calendário de São Francisco. A cena de corrida é incipiente, mas o trânsito leve e o custo de vida acessível favorecem a prática de atividade física.',
  academias:
    'A oferta de academias se concentra no Centro e atende sobretudo o comércio, o funcionalismo e o público local, complementada pelos espaços públicos do entorno da Basílica e da Praça dos Romeiros.',

  destaquesFitness: [
    'Entorno da Basílica de São Francisco das Chagas e Praça dos Romeiros como principal espaço público de caminhada.',
    'Calendário esportivo ligado à Romaria de São Francisco, com provas como a Corrida de São Francisco.',
    'Demanda sustentada pelo comércio regional, pelo funcionalismo e pelo fluxo de romeiros.',
    'Necessidade de adaptar o treino ao calor e à secura do semiárido do Sertão Central.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Capital do turismo religioso franciscano no Brasil, Canindé combina a força da romaria com a rotina de uma cidade média do Sertão Central cearense. Quem busca treinar na cidade encontra espaços públicos no entorno da Basílica e uma cena esportiva em formação — e um personal trainer ajuda a montar uma rotina segura, ajustada ao calor e à secura do semiárido.',

  vizinhas: ['fortaleza-ce', 'quixada-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Canindé', url: 'https://cidades.ibge.gov.br/brasil/ce/caninde/panorama' },
    { nome: 'Prefeitura de Canindé', url: 'https://www.caninde.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
