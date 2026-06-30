import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-raimundo-nonato-pi',
  nome: 'São Raimundo Nonato',
  uf: 'PI',
  estado: 'Piauí',
  estadoSlug: 'piaui',
  regiao: 'Nordeste',
  gentilico: 'são-raimundense',
  tipo: 'cidade',

  populacao: 38934,
  populacaoAno: 2022,
  idhm: 0.66,
  idhmClasse: 'médio',
  altitudeM: 405,

  resumoEconomico:
    'No sudeste do Piauí, em pleno semiárido, São Raimundo Nonato é conhecida como a porta de entrada do Parque Nacional Serra da Capivara, patrimônio mundial da UNESCO com mais de mil sítios arqueológicos e pinturas rupestres milenares. A cidade abriga a Fundação Museu do Homem Americano (FUMDHAM) e o Museu do Homem Americano, e tem na economia o turismo arqueológico e cultural como motor de destaque, somado ao comércio e aos serviços que atendem a região e à agropecuária adaptada ao clima seco. Como maior centro urbano próximo ao parque, concentra a estrutura de visitação e os serviços da microrregião.',

  mercado:
    'Por ser uma cidade de pequeno porte do interior nordestino, o mercado fitness de São Raimundo Nonato é enxuto, formado por academias locais de musculação e treino funcional. A procura por personal trainers aparece principalmente entre quem busca orientação para treinar com segurança sob o calor do semiárido e entre moradores e visitantes interessados em caminhadas e trilhas no entorno do Parque Nacional Serra da Capivara.',

  bairrosNobres: ['Centro', 'Aldeia', 'Alto do Cruzeiro', 'Paraíso das Aves'],
  bairrosPopulares: ['Barro Vermelho', 'Portelinha', 'Cipó', 'Barreiro do Chuchu'],

  parques: [
    {
      nome: 'Parque Nacional Serra da Capivara',
      descricao:
        'Patrimônio mundial da UNESCO e um dos maiores conjuntos de arte rupestre do planeta, o parque oferece trilhas e circuitos guiados por cânions e mirantes — opção de atividade ao ar livre em meio à caatinga, sempre com visitação acompanhada.',
    },
    {
      nome: 'Alto do Cruzeiro',
      descricao:
        'Ponto elevado e mirante da cidade, com via sacra em escadaria, é um dos lugares mais usados por moradores para subidas, caminhada e treino ao ar livre, com vista para a área urbana e o sertão.',
    },
    {
      nome: 'Entorno do Museu do Homem Americano',
      descricao:
        'Área da FUMDHAM e do Museu do Homem Americano, na saída para o parque, reúne espaços abertos e vias que servem de percurso para caminhada e corrida leve perto do centro.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e restrita a poucos trechos da área urbana; grande parte do pedal e da corrida acontece nas vias da cidade e nas estradas de acesso ao Parque Nacional Serra da Capivara.',

  clima:
    'O clima é semiárido quente, típico do sertão nordestino, com estação seca longa — chove pouco entre maio e outubro, e as chuvas se concentram de novembro a abril. As temperaturas são altas durante boa parte do ano, a umidade do ar é baixa e a média de chuvas anual fica em torno de 650 mm.',
  climaTreino:
    'O calor forte e o ar seco do semiárido pedem treinar bem cedo ou no fim da tarde, com hidratação reforçada e atenção à exposição ao sol; nos picos de calor, ambientes climatizados são a opção mais segura, e os meses chuvosos tendem a amenizar o treino ao ar livre.',

  mobilidade:
    'A cidade fica distante da capital, Teresina, e se conecta à região por rodovias como a BR-020 e a PI-140, eixos usados no acesso a Floriano, Picos e ao Parque Nacional Serra da Capivara. O deslocamento urbano é feito sobretudo por automóvel, moto e transporte rodoviário, e o aeroporto local atende voos ligados ao turismo arqueológico.',

  corridas: [
    {
      nome: 'Corrida Rastro do Sertão',
      descricao:
        'Prova de corrida de rua realizada na cidade, com largada no Alto do Cruzeiro, que estimula a prática esportiva e a valorização da saúde na região de São Raimundo Nonato.',
    },
    {
      nome: 'Trail na Serra da Capivara',
      descricao:
        'Os circuitos e trilhas do Parque Nacional Serra da Capivara, como Serra Branca e Serra Vermelha, atraem praticantes de trail run e caminhada em percursos pela caatinga e pelos cânions, sempre em visitação guiada.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina caminhadas e corridas nas vias urbanas e no Alto do Cruzeiro com o uso das trilhas do Parque Nacional Serra da Capivara, tudo marcado pelo calor e pelo ar seco do semiárido, que exigem planejamento de horário e hidratação.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, concentradas no centro e nos bairros residenciais, com porte compatível com uma cidade pequena do interior do Piauí.',

  destaquesFitness: [
    'Porta de entrada do Parque Nacional Serra da Capivara, patrimônio mundial da UNESCO.',
    'Alto do Cruzeiro como mirante e ponto de subidas e treino ao ar livre.',
    'Clima semiárido quente e seco, que exige planejamento de horário e hidratação no treino.',
    'Trilhas e circuitos de trail na caatinga, em meio aos sítios arqueológicos da região.',
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
    'Cercada pelo semiárido e pela história milenar da Serra da Capivara, São Raimundo Nonato pede um treino adaptado ao calor e ao ar seco, que aproveite as subidas do Alto do Cruzeiro e as trilhas do entorno. Um personal trainer ajuda a organizar a rotina respeitando o clima, definindo os melhores horários e mantendo a constância ao longo da longa estação seca.',

  vizinhas: ['picos-pi', 'floriano-pi'],

  fontes: [
    { nome: 'IBGE Cidades — São Raimundo Nonato', url: 'https://cidades.ibge.gov.br/brasil/pi/sao-raimundo-nonato/panorama' },
    { nome: 'Prefeitura de São Raimundo Nonato', url: 'https://www.saoraimundononato.pi.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
