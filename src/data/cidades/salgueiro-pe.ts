import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'salgueiro-pe',
  nome: 'Salgueiro',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'salgueirense',
  tipo: 'cidade',

  populacao: 62732,
  populacaoAno: 2022,
  idhm: 0.669,
  idhmClasse: 'médio',
  altitudeM: 420,

  resumoEconomico:
    'Salgueiro é o principal centro urbano do Sertão Central pernambucano e um dos maiores entroncamentos rodoviários do Nordeste, no cruzamento das BR-116, BR-232 e BR-316. Essa posição estratégica fez da cidade um polo regional de comércio e serviços, que atende a uma ampla área do sertão. A economia se apoia no varejo, na prestação de serviços e na logística, reforçada pela chegada da Ferrovia Transnordestina, que tem em Salgueiro um centro operacional. O clima quente e seco do semiárido pede atenção ao horário do treino ao ar livre.',

  mercado:
    'O mercado fitness acompanha o papel de Salgueiro como polo de serviços do sertão, com academias de bairro voltadas a musculação, funcional e ginástica, além de estúdios menores de treino personalizado. A demanda é puxada por uma clientela regional que se desloca à cidade, e o personal trainer tende a atuar de forma individual ou em pequenos grupos, ajustando a rotina ao calor do semiárido.',

  bairrosNobres: ['Nossa Senhora das Graças', 'Centro', 'Planalto', 'Primavera'],
  bairrosPopulares: ['Nossa Senhora Aparecida', 'Santo Antônio', 'Imperador', 'Cohab'],

  parques: [
    {
      nome: 'Serra da Onça',
      descricao:
        'Elevação que se ergue junto à cidade, no bairro da Primavera, com acesso por uma escadaria de cerca de 348 degraus até um monumento no topo — opção de caminhada e exercício com vista para Salgueiro.',
    },
    {
      nome: 'Parque das Crianças',
      descricao:
        'Espaço público de lazer e convívio na área urbana, usado para caminhadas e atividades ao ar livre em família.',
    },
    {
      nome: 'Açude e praças centrais',
      descricao:
        'O entorno do açude e praças como a Praça da Matriz concentram caminhadas no fim da tarde, quando o calor do sertão dá trégua.',
    },
  ],
  ciclovias:
    'A cidade não dispõe de uma malha cicloviária estruturada; o pedal e a corrida acontecem sobretudo nas vias urbanas e nos espaços públicos centrais, com atenção ao tráfego dos entroncamentos rodoviários.',

  clima:
    'O clima é semiárido quente e seco, típico do Sertão Central pernambucano, com temperaturas elevadas ao longo do ano (frequentemente acima dos 30 °C), baixa umidade e chuvas concentradas em poucos meses do verão.',
  climaTreino:
    'O calor intenso e o sol forte do meio do dia tornam o início da manhã e o fim da tarde as melhores janelas para treinar ao ar livre. Hidratação reforçada e proteção solar são essenciais na rotina sob o sol do sertão.',

  mobilidade:
    'Salgueiro é um importante nó logístico do Nordeste, no entroncamento das BR-116, BR-232 e BR-316, e abriga um centro operacional da Ferrovia Transnordestina, que conectará ramais para Suape, Petrolina, Missão Velha (CE) e Eliseu Martins (PI). Recife fica a cerca de 500 km pela BR-232. O deslocamento dentro da cidade é feito principalmente por carro, moto e transporte rodoviário.',

  corridas: [
    {
      nome: 'Corrida dos Bonecos',
      descricao:
        'Prova de rua integrada à programação do Carnaval de Salgueiro, reunindo corredores locais e da região em percurso pelas vias urbanas.',
    },
    {
      nome: 'Caminhadas e treinos no Ciclo Junino',
      descricao:
        'O calendário cultural da cidade, com forte presença do forró e das festas juninas, movimenta atividades ao ar livre e treinos coletivos em praças e no entorno central.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Salgueiro é marcada pelo futebol e por uma rotina de caminhadas e corridas nas praças e vias centrais, especialmente nos horários mais frescos. A forte tradição do forró e das quadrilhas juninas, com a cidade celebrando um intenso Ciclo Junino, dá um tom festivo à vida ao ar livre no sertão.',
  academias:
    'A oferta reúne academias de bairro com musculação e funcional, ginásios e estúdios menores de treino personalizado, atendendo tanto a população local quanto quem se desloca à cidade pelo papel de polo regional.',

  destaquesFitness: [
    'Polo regional do Sertão Central, com academias de bairro e estúdios de treino personalizado.',
    'Serra da Onça e sua escadaria como desafio natural de caminhada e condicionamento.',
    'Clima semiárido quente e seco — treino concentrado no início da manhã e fim de tarde.',
    'Cidade-entroncamento (BR-116/232/316) e da Transnordestina, com forte cultura do forró e das festas juninas.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 660,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Polo de comércio e serviços do Sertão Central e grande entroncamento do Nordeste, Salgueiro combina vida urbana movimentada com o desafio do clima semiárido. Um personal trainer ajuda a montar uma rotina segura e eficiente, aproveitando praças, a Serra da Onça e os horários mais frescos do dia, com hidratação e proteção solar no centro do método.',

  vizinhas: ['serra-talhada-pe', 'petrolina-pe', 'arcoverde-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Salgueiro', url: 'https://cidades.ibge.gov.br/brasil/pe/salgueiro/panorama' },
    { nome: 'Prefeitura de Salgueiro', url: 'https://www.salgueiro.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
