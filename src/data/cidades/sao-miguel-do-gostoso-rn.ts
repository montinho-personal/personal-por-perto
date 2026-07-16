import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-miguel-do-gostoso-rn',
  nome: 'São Miguel do Gostoso',
  uf: 'RN',
  estado: 'Rio Grande do Norte',
  estadoSlug: 'rio-grande-do-norte',
  regiao: 'Nordeste',
  gentilico: 'gostosense',
  tipo: 'cidade',

  populacao: 10221,
  populacaoAno: 2022,
  idhm: 0.591,
  idhmClasse: 'baixo',

  resumoEconomico:
    'Antiga vila de pescadores fundada no fim do século XIX, São Miguel do Gostoso vive hoje da combinação entre pesca artesanal, agricultura (com destaque para o cultivo de coco) e um turismo internacional que decolou a partir dos anos 2000. Os ventos constantes do litoral norte potiguar transformaram o município em point mundial de kitesurf e windsurf, atraindo praticantes e investidores estrangeiros que abriram pousadas, restaurantes e imóveis de temporada — um boom imobiliário que segue moldando a paisagem urbana e convive com a vocação pesqueira original, símbolo da Praia de Maceió.',

  mercado:
    'O mercado de personal trainer em São Miguel do Gostoso é pequeno e concentrado no centro da vila, refletindo o porte do município. A demanda mistura moradores locais, o público estrangeiro fixado na cidade e turistas de longa temporada que praticam kitesurf, windsurf e outros esportes náuticos e buscam preparo físico específico — força de core, mobilidade de ombros e condicionamento cardiovascular — para aproveitar melhor os dias de vento.',

  bairrosNobres: ['Centro (Xêpa)', 'Praia de Maceió'],
  bairrosPopulares: ['Zona Rural', 'Entorno do Centro'],

  parques: [
    {
      nome: 'Praia de Tourinhos',
      descricao:
        'A cerca de 8 km do centro, é considerada uma das praias mais bonitas do litoral potiguar, com águas calmas protegidas por recifes e dunas petrificadas esculpidas pelo vento — cenário usado para caminhada na areia e treino ao ar livre.',
    },
    {
      nome: 'Praia de Maceió',
      descricao:
        'Praia central e núcleo histórico da vila de pescadores, ponto de encontro de barcos e redes de pesca, com faixa de areia usada por moradores e visitantes para caminhada e corrida.',
    },
    {
      nome: 'Praia da Xêpa e Lagoa do Cardeiro',
      descricao:
        'Trecho central da orla, próximo ao comércio e às pousadas, que concentra parte do movimento de kitesurfistas e windsurfistas e serve de referência para atividades físicas à beira-mar.',
    },
  ],
  ciclovias:
    'São Miguel do Gostoso não tem rede cicloviária estruturada; o deslocamento e o treino ao ar livre acontecem nas ruas do centro, na orla das praias e nas estradas de acesso às praias mais afastadas, como Tourinhos.',

  clima:
    'O clima é tropical, quente durante todo o ano, com temperaturas raramente abaixo de 24 °C e máximas próximas de 30 °C. A alta temporada, de agosto a fevereiro, coincide com o período mais seco e mais ventoso, quando os ventos alísios sopram de forma constante, entre 16 e 30 nós, tornando o município um dos destinos mais procurados do mundo para kitesurf e windsurf nesses meses.',
  climaTreino:
    'O calor constante e o vento forte característico da região pedem treinos ao ar livre nas primeiras horas da manhã ou no fim da tarde, com atenção redobrada à hidratação; a água do mar aquecida o ano todo e o vento praticamente garantido na alta temporada favorecem treinos funcionais na praia e a prática regular de esportes náuticos.',

  mobilidade:
    'O acesso a São Miguel do Gostoso é feito pela BR-101 até João Câmara e, de lá, pela RN-221, rodovia asfaltada que atravessa a área urbana do município — trajeto que leva entre 2h e 2h30 a partir de Natal, distante cerca de 100 km. Dentro da vila, os deslocamentos são feitos majoritariamente a pé, de bicicleta, moto ou carro, já que o transporte coletivo urbano é limitado e o centro tem escala pequena.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva do município é dominada pelos esportes náuticos ligados ao vento: kitesurf e windsurf são a referência internacional da cidade, complementados por surf, stand up paddle e caminhada nas praias de Tourinhos e Maceió. Escolas e centros especializados recebem praticantes de todos os níveis, atraindo atletas e turistas esportivos do Brasil e do exterior durante boa parte do ano.',
  academias:
    'A oferta de academias é pequena e concentrada no centro da vila, com estúdios de musculação e treino funcional voltados tanto a moradores quanto ao público estrangeiro e aos turistas de temporada que buscam complementar a prática de kitesurf e windsurf com treino de força e condicionamento.',

  destaquesFitness: [
    'Referência internacional em kitesurf e windsurf, com ventos alísios constantes entre agosto e fevereiro.',
    'Praia de Tourinhos, com dunas petrificadas e águas calmas, usada para caminhada e treino ao ar livre.',
    'Presença de comunidade estrangeira fixada na cidade, que amplia a procura por treino físico voltado a esportes náuticos.',
    'Calor constante o ano todo, que exige planejamento de horário e hidratação no treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 150,
    mensalMin: 280,
    mensalMax: 800,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Moldada pelos ventos que a tornaram point mundial de kitesurf e windsurf, São Miguel do Gostoso favorece um treino que aproveite a praia e a preparação física específica para esportes náuticos. Um personal trainer ajuda a organizar a rotina respeitando o calor constante, os melhores horários para treinar ao ar livre e as necessidades de quem pratica kite e windsurf com regularidade.',

  vizinhas: ['joao-camara-rn', 'ceara-mirim-rn', 'natal-rn'],

  fontes: [
    { nome: 'IBGE Cidades — São Miguel do Gostoso', url: 'https://cidades.ibge.gov.br/brasil/rn/sao-miguel-do-gostoso/panorama' },
    { nome: 'Atlas do Desenvolvimento Humano no Brasil — São Miguel do Gostoso', url: 'https://atlasbrasil.org.br/2013/pt/perfil_m/sao-miguel-do-gostoso_rn' },
    { nome: 'Prefeitura Municipal de São Miguel do Gostoso — Histórico', url: 'https://site.saomigueldogostoso.rn.gov.br/pages/historico' },
  ],
  atualizadoEm: '2026-07-02',
};
