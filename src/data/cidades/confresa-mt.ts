import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'confresa-mt',
  nome: 'Confresa',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'confresense',
  tipo: 'cidade',

  populacao: 35075,
  populacaoAno: 2022,
  idhm: 0.668,
  idhmClasse: 'médio',
  pibPerCapita: 56102,
  pibPerCapitaAno: 2023,
  altitudeM: 240,

  resumoEconomico:
    'Confresa fica no nordeste de Mato Grosso, na microrregião Norte do Araguaia, e chegou a ser o povoado de Vila Tapiraguaia antes de virar distrito de Santa Terezinha em 1990 e município autônomo em 1991. É hoje o principal polo agropecuário da região: está entre os municípios do estado com maior densidade de propriedades pecuárias — mais de 2.000 —, tem uma vasta área de assentamentos de reforma agrária que reúne milhares de famílias em agricultura familiar, e combina pecuária de corte e leiteira, hortifrutigranjeiros e avicultura. O município sedia uma unidade frigorífica do grupo JBS e estruturas de armazenagem de grãos de multinacionais do agronegócio que escoam soja e milho, e tem na Expofresa — feira agropecuária que reúne exposição de máquinas, rodeio e shows — um dos eventos mais importantes do calendário do Araguaia mato-grossense.',

  mercado:
    'O mercado fitness de Confresa é o de uma cidade média do interior ligada ao agronegócio, com academias concentradas no Centro que atendem trabalhadores do comércio, da administração pública e das fazendas do entorno. A procura por personal trainer cresce entre quem busca acompanhamento individualizado para conciliar a rotina de trabalho no campo com uma prática de treino mais constante.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Jardim Planalto', 'Setor Pavilhão', 'Vila Nova'],

  parques: [
    {
      nome: 'Praças do Centro',
      descricao:
        'O conjunto de praças da área central concentra o movimento de pedestres da cidade e serve de ponto de caminhada e convivência nos horários mais frescos do dia.',
    },
    {
      nome: 'Arena Santana',
      descricao:
        'Espaço esportivo do município usado para eventos e práticas coletivas, um dos poucos equipamentos dedicados ao esporte e ao lazer ativo em Confresa.',
    },
    {
      nome: 'Zona rural e assentamentos do entorno',
      descricao:
        'As estradas que ligam a sede aos projetos de assentamento e às fazendas de pecuária e grãos no entorno oferecem percursos para caminhada e corrida para quem mora ou trabalha na zona rural do município.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária estruturada; o deslocamento de bicicleta acontece nas ruas do Centro e nas estradas vicinais de acesso à zona rural.',

  clima:
    'O clima é tropical equatorial, quente e úmido, em zona de transição entre o Cerrado e a Amazônia. A estação chuvosa se concentra entre dezembro e março, com precipitação anual que pode superar 2.000 mm, e a seca vai de junho a agosto, com ar mais seco e temperaturas elevadas ao longo de todo o ano.',
  climaTreino:
    'O calor constante recomenda treinar bem cedo pela manhã ou no fim da tarde, com hidratação reforçada; na estação seca, a poeira das estradas rurais e a baixa umidade pedem atenção redobrada, com ambientes fechados como alternativa nos horários mais quentes.',

  mobilidade:
    'O acesso a Confresa é feito por rodovias estaduais que conectam o município à BR-158 e à BR-070, num trajeto de mais de 1.100 km até Cuiabá. A cidade vizinha mais próxima é Vila Rica, e o transporte interno é predominantemente feito por veículo próprio, em um município que funciona como referência de comércio e serviços para os assentamentos e fazendas do Norte do Araguaia.',

  corridas: [],
  culturaEsportiva:
    'A vida esportiva da cidade tem na Expofresa — com rodeio, shows e a tradicional cavalgada — seu momento de maior movimentação, ao lado do uso cotidiano de praças e da Arena Santana para prática de esportes coletivos. O calendário de festas juninas e a data de aniversário do município, em dezembro, também mobilizam atividades ao ar livre.',
  academias:
    'A oferta de academias e estúdios é modesta, concentrada no Centro, compatível com uma cidade média do interior mato-grossense cujo público majoritário está ligado ao comércio, à administração pública e ao agronegócio.',

  destaquesFitness: [
    'Um dos municípios com maior densidade de propriedades pecuárias de Mato Grosso, com pecuária de corte e leiteira e forte agricultura familiar em assentamentos.',
    'Sedia unidade frigorífica do grupo JBS e estruturas de armazenagem de grãos de multinacionais do agronegócio.',
    'Expofresa é o principal evento do calendário local, com feira agropecuária, rodeio e shows.',
    'Clima quente e úmido de transição entre Cerrado e Amazônia, que exige treino nos horários mais frescos do dia.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Polo pecuário e agrícola do Norte do Araguaia mato-grossense, Confresa tem na pecuária, na agricultura familiar dos assentamentos e no frigorífico da JBS sua base econômica. Um personal trainer ajuda a manter a constância do treino diante do calor quase constante da região, aproveitando as praças do Centro e ajustando horários entre a estação chuvosa e a seca.',

  vizinhas: ['vila-rica-mt', 'santa-terezinha-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Confresa', url: 'https://cidades.ibge.gov.br/brasil/mt/confresa/panorama' },
    { nome: 'Governo de Confresa — Município', url: 'https://confresa.mt.gov.br/municipio/' },
    { nome: 'Câmara Municipal de Confresa — Economia', url: 'https://confresa.mt.leg.br/o-municipio/economia-de-confresa' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/5103353' },
  ],
  atualizadoEm: '2026-07-05',
};
