import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'icapui-ce',
  nome: 'Icapuí',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'icapuiense',
  tipo: 'cidade',

  populacao: 21433,
  populacaoAno: 2022,
  idhm: 0.616,
  idhmClasse: 'médio',
  altitudeM: 16,

  resumoEconomico:
    'Separada de Aracati e elevada a município em 1985, Icapuí é a cidade mais oriental do litoral cearense, na divisa com o Rio Grande do Norte. A economia é sustentada pela pesca artesanal — com destaque para a captura de lagosta, camarão e peixes por cerca de 1.500 embarcações e milhares de pescadores cadastrados na Colônia Z-17 —, pela aquicultura e por um turismo ainda tranquilo, apoiado nos 65 km de litoral, nas falésias multicoloridas e nas dunas da Área de Proteção Ambiental de Ponta Grossa. A tradição da carpintaria naval de jangadas, praticada há mais de seis décadas, também marca a identidade local.',

  mercado:
    'Por ser um município pequeno e afastado dos grandes centros, o mercado fitness de Icapuí é enxuto, com poucas academias concentradas na sede e no distrito de Redonda. A procura por personal trainer tende a vir de quem busca treino funcional adaptado à areia e ao calor, de moradores ligados ao turismo e de visitantes de pousadas que frequentam as praias de Ponta Grossa e Redonda.',

  bairrosNobres: ['Centro', 'Redonda', 'Ponta Grossa'],
  bairrosPopulares: ['Retiro Grande', 'Peroba', 'Picos', 'Ibicuitaba'],

  parques: [
    {
      nome: 'APA da Praia de Ponta Grossa',
      descricao:
        'Unidade de conservação que abriga o maior conjunto de falésias da América do Sul, com formações multicoloridas, e a duna móvel mais alta do Ceará — cenário para caminhadas e trilhas na areia com vista para o mar.',
    },
    {
      nome: 'Praia da Redonda',
      descricao:
        'Faixa de areia cercada por falésias cobertas de vegetação e coqueiros, um dos points mais conhecidos do município para caminhada à beira-mar e banho de mar.',
    },
    {
      nome: 'Praias de Peroba, Picos e Requenguela',
      descricao:
        'Trecho de praias mais tranquilas e menos turísticas do litoral icapuiense, com faixa de areia extensa para caminhada e corrida longe do movimento da sede.',
    },
  ],
  ciclovias:
    'Não há infraestrutura cicloviária estruturada; a bicicleta é usada no dia a dia entre a sede e os distritos, e caminhadas e corridas acontecem principalmente na orla e nas vias locais.',

  clima:
    'O clima é tropical, quente o ano todo, com temperatura média em torno de 27 °C e baixa amplitude térmica entre as estações. As chuvas se concentram no primeiro semestre (com pico em abril) e o segundo semestre é bem mais seco, com forte insolação e ventos alísios constantes característicos do litoral leste cearense.',
  climaTreino:
    'O calor constante e a alta exposição solar pedem treinos no início da manhã ou fim de tarde, com atenção redobrada à hidratação e à proteção contra o sol. O vento litorâneo ajuda a amenizar a sensação térmica durante atividades na praia e nas falésias.',

  mobilidade:
    'O acesso a Icapuí é feito pela rodovia CE-261, que liga o município a Aracati e à rede rodoviária do estado — de Fortaleza, o trajeto passa pela CE-040/BR-304 até a CE-261. Dentro do município, os deslocamentos entre a sede e os distritos de Ibicuitaba e Manibu dependem do transporte rodoviário e de veículos próprios, já que o transporte coletivo é limitado.',

  corridas: [],
  culturaEsportiva:
    'A vida ativa em Icapuí gira em torno do mar: caminhada e corrida na areia das praias de Ponta Grossa, Redonda e Peroba, trilhas nas falésias da APA de Ponta Grossa e a rotina física ligada à pesca artesanal e à lida com jangadas e embarcações. É um cotidiano moldado pelo litoral, mais do que por uma agenda formal de provas esportivas.',
  academias:
    'A oferta de academias é pequena, concentrada na sede (Centro) e no distrito de Redonda, com estrutura voltada à musculação e ao treino funcional, compatível com o porte de um município pequeno do litoral leste.',

  destaquesFitness: [
    'Maior conjunto de falésias da América do Sul, na APA da Praia de Ponta Grossa, com trilhas e dunas para treino ao ar livre.',
    '65 km de litoral e 16 praias, com destaque para Ponta Grossa, Redonda, Peroba e Picos para caminhada e corrida na areia.',
    'Clima tropical quente o ano todo, com ventos alísios que pedem treino nos horários mais frescos do dia.',
    'Economia apoiada na pesca artesanal da lagosta e no turismo de praia, moldando uma rotina naturalmente ativa e ligada ao mar.',
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
    'No extremo leste do litoral cearense, Icapuí oferece um cenário raro de falésias, dunas e praias tranquilas para quem quer treinar ao ar livre. Um personal trainer ajuda a aproveitar esse ambiente com segurança, ajustando o treino ao calor constante e à rotina de quem vive entre a pesca, o turismo e o mar.',

  vizinhas: ['aracati-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Icapuí', url: 'https://cidades.ibge.gov.br/brasil/ce/icapui/panorama' },
    { nome: 'Prefeitura de Icapuí', url: 'https://www.icapui.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
