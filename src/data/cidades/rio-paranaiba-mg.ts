import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'rio-paranaiba-mg',
  nome: 'Rio Paranaíba',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  tipo: 'cidade',

  populacao: 14532,
  populacaoAno: 2022,
  idhm: 0.709,
  idhmClasse: 'médio',
  pibPerCapita: 73400,
  altitudeM: 1076,

  resumoEconomico:
    'No Alto Paranaíba mineiro, a 320 km de Belo Horizonte, Rio Paranaíba tem economia apoiada no agronegócio de irrigação, no comércio e nos serviços. O município é um dos núcleos do PADAP — o Programa de Assentamento Dirigido do Alto Paranaíba, criado em 1970 —, que transformou o cerrado da região em área de lavoura tecnificada: batata, cebola, alho, cenoura, café, milho, soja, trigo e abacate saem dos pivôs centrais que marcam a paisagem. O PIB per capita, de cerca de R$ 73,4 mil, fica acima da média do estado. Desde 2006 a cidade abriga um campus da Universidade Federal de Viçosa, o que a tornou o menor município do país com campus de universidade federal — um detalhe que muda o perfil de quem mora aqui.',

  mercado:
    'O mercado fitness é pequeno em número e menos previsível do que o porte sugere, porque a cidade tem dois públicos distintos: o do agronegócio — produtores, técnicos agrícolas e funcionários das lavouras irrigadas, com jornadas longas e sazonais — e o universitário do campus da UFV, que chega e vai embora no ritmo do calendário acadêmico. A oferta se concentra em academias locais e em profissionais que atendem em domicílio, e o atendimento online cobre bem quem não encontra na cidade a especialidade que procura.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Novo Rio'],

  parques: [
    {
      nome: 'Praças do Centro',
      descricao:
        'O conjunto de praças e ruas planas do Centro concentra a caminhada urbana da cidade, especialmente no fim da tarde, quando a temperatura de altitude cai.',
    },
    {
      nome: 'Ginásio poliesportivo do Novo Rio',
      descricao:
        'Espaço público de esporte coletivo no bairro Novo Rio, usado sobretudo para vôlei e futsal, e ponto de encontro de quem pratica esporte na cidade.',
    },
    {
      nome: 'Estradas rurais entre os pivôs',
      descricao:
        'As vias vicinais que cortam as lavouras irrigadas do PADAP são o percurso natural de corrida e pedal de longa distância, com relevo suave e pouco tráfego.',
    },
  ],
  ciclovias:
    'A cidade não tem malha cicloviária estruturada; o pedal urbano acontece nas ruas do Centro e do Novo Rio, e o pedal de estrada aproveita as vicinais entre as lavouras.',

  clima:
    'A 1.076 metros de altitude, Rio Paranaíba tem clima tropical de altitude, com regime bem marcado de estação chuvosa e estação seca — mais de 80% da chuva do ano se concentra no verão — e temperaturas médias entre 19 °C e 26 °C.',
  climaTreino:
    'A altitude deixa o treino ao ar livre confortável quase o ano inteiro, com manhãs frias no inverno seco, que pedem aquecimento mais longo e agasalho. No verão, a chuva concentrada é o fator que mais atrapalha a constância: vale ter um plano coberto para os dias de temporal.',

  mobilidade:
    'O acesso principal é pela BR-354, entre São Gotardo e Carmo do Paranaíba, com mais cerca de 10 km pela MG-230 até a sede. A cidade fica a 320 km de Belo Horizonte, e o deslocamento interno é curto e rodoviário, como é comum em município desse porte.',

  corridas: [
    {
      nome: 'Provas e caminhadas do calendário municipal',
      descricao:
        'A cidade recebe corridas e caminhadas ligadas a datas comemorativas e a campanhas de saúde, com percursos pelas vias centrais.',
    },
    {
      nome: 'Circuito de provas do Alto Paranaíba',
      descricao:
        'A proximidade de São Gotardo, Carmo do Paranaíba e Patos de Minas dá acesso a um calendário regional de corrida de rua sem exigir viagem longa.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva gira em torno do futebol e dos esportes coletivos nos espaços públicos, com o Estádio Municipal Jaime Silva como referência local. A presença do campus da UFV acrescenta um público jovem que movimenta corrida, esportes e atividade ao ar livre fora do calendário tradicional da cidade.',
  academias:
    'A oferta reúne academias locais de musculação e a estrutura da AABB, que soma musculação a modalidades coletivas como futsal, vôlei, natação e basquete, complementadas por profissionais que atendem em domicílio.',

  destaquesFitness: [
    'Menor município do país com campus de universidade federal (UFV), o que sustenta um público jovem constante.',
    'Clima de altitude confortável para treino ao ar livre quase o ano todo.',
    'Estradas vicinais entre as lavouras irrigadas, boas para corrida e pedal de longa distância.',
    'Proximidade de São Gotardo, Carmo do Paranaíba e Patos de Minas amplia o calendário de provas.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 690,
    onlineMin: 115,
    onlineMax: 345,
  },

  conclusao:
    'Núcleo do PADAP no Alto Paranaíba e a menor cidade do Brasil com campus de universidade federal, Rio Paranaíba junta o público do agronegócio ao universitário num mercado fitness pequeno e de oferta concentrada. Um personal trainer ajuda a estruturar o treino em torno de jornadas sazonais e do calendário acadêmico, aproveitando o clima de altitude e as estradas entre as lavouras.',

  vizinhas: ['sao-gotardo-mg', 'carmo-do-paranaiba-mg', 'ibia-mg', 'serra-do-salitre-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Rio Paranaíba', url: 'https://cidades.ibge.gov.br/brasil/mg/rio-paranaiba/panorama' },
    { nome: 'Prefeitura de Rio Paranaíba', url: 'https://rioparanaiba.mg.gov.br/o-municipio/' },
    { nome: 'Câmara Municipal de Rio Paranaíba', url: 'https://camararioparanaiba.mg.gov.br/nossa-cidade.html' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-18',
};
