import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'corrente-pi',
  nome: 'Corrente',
  uf: 'PI',
  estado: 'Piauí',
  estadoSlug: 'piaui',
  regiao: 'Nordeste',
  gentilico: 'correntino',
  tipo: 'cidade',

  populacao: 27278,
  populacaoAno: 2022,
  idhm: 0.642,
  idhmClasse: 'médio',
  altitudeM: 438,
  pibPerCapita: 28016.04,
  pibPerCapitaAno: 2023,

  resumoEconomico:
    'No extremo sul do Piauí, próxima da divisa com a Bahia e com o município de Formosa do Rio Preto, Corrente é um dos principais centros regionais do sul piauiense e parte da fronteira agrícola do Matopiba. A área de cerrado do entorno, com relevo favorável à mecanização, impulsionou o avanço da soja e de outros grãos nas últimas décadas, o que ajuda a explicar um PIB per capita superior à média do estado. A cidade é banhada pelos rios Corrente e Paraim, e conta com campus da Universidade Estadual do Piauí (UESPI) e aeroporto regional, reforçando seu papel de polo de serviços, comércio e educação para os municípios vizinhos do sul do estado.',

  mercado:
    'O mercado de personal trainers em Corrente é pequeno, mas impulsionado pela renda do agronegócio local — produtores rurais e famílias ligadas à cadeia da soja e dos grãos formam uma parcela relevante da demanda por acompanhamento individualizado, ao lado de servidores públicos e da comunidade acadêmica do campus da UESPI.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Nova Corrente'],

  parques: [
    {
      nome: 'Centro de Corrente',
      descricao:
        'Área central da cidade, onde se concentram comércio, praças e o principal fluxo de pedestres; é o espaço mais usado para caminhada no dia a dia.',
    },
    {
      nome: 'Margens do Rio Corrente',
      descricao:
        'O rio que dá nome ao município corta a região e, junto com o rio Paraim, forma a base hidrográfica local, usada informalmente para caminhada e lazer nas áreas de acesso mais próximas à cidade.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária estruturada na cidade; o ciclismo urbano ocorre nas ruas do Centro e nas estradas rurais que dão acesso às fazendas de soja e grãos do entorno.',

  clima:
    'O clima é tropical de cerrado, com uma estação chuvosa e outra seca bem definidas, temperatura média em torno de 25 °C — podendo passar de 34 °C nos períodos mais quentes do semiárido do sul do estado — e pluviosidade média anual próxima de 1.500 mm, concentrada sobretudo entre o fim do ano e o início do ano seguinte.',
  climaTreino:
    'O calor intenso, especialmente na estação seca, recomenda treinar nas primeiras horas da manhã ou no fim da tarde, com hidratação reforçada; ambientes cobertos ou climatizados são a alternativa mais segura nos dias de temperatura mais extrema, comuns no sul do Piauí.',

  mobilidade:
    'Corrente é cortada pela BR-135, importante ligação rodoviária entre o Piauí e a Bahia, da qual partem rodovias estaduais como a PI-255 (rumo a Parnaguá, Curimatá e Avelino Lopes) e a PI-257. O município fica a poucos quilômetros de Formosa do Rio Preto (BA) e conta com aeroporto regional; o deslocamento interno é feito majoritariamente por veículos particulares.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva local está ligada ao cotidiano de uma cidade-polo agrícola: caminhada e corrida informais pelo Centro, uso das margens dos rios Corrente e Paraim nos horários mais frescos, e a vida universitária do campus da UESPI, que ajuda a movimentar a demanda por atividade física entre os mais jovens.',
  academias:
    'A oferta de academias é pequena e concentrada no Centro, com estabelecimentos de musculação e treino funcional dimensionados para uma cidade média do sul do Piauí, atendendo também produtores rurais e famílias ligadas ao agronegócio.',

  destaquesFitness: [
    'Polo regional do sul do Piauí na fronteira agrícola do Matopiba, com PIB per capita puxado pela soja e outros grãos.',
    'Cortada pela BR-135, principal ligação rodoviária entre o Piauí e a Bahia, próxima da divisa com Formosa do Rio Preto (BA).',
    'Campus da UESPI e aeroporto regional reforçam o papel de Corrente como centro de serviços do sul piauiense.',
    'Clima de cerrado, com estação seca marcada e calor intenso, que exige planejamento de horário e hidratação no treino.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 330,
  },

  conclusao:
    'Polo agrícola do sul do Piauí na fronteira do Matopiba, Corrente combina a renda do agronegócio de grãos com uma estrutura urbana enxuta em torno do Centro e dos rios Corrente e Paraim. Um personal trainer ajuda a organizar uma rotina de treino segura no calor do cerrado, aproveitando os horários mais frescos do dia.',

  vizinhas: ['formosa-do-rio-preto-ba', 'bom-jesus-pi'],

  fontes: [
    { nome: 'IBGE Cidades — Corrente', url: 'https://cidades.ibge.gov.br/brasil/pi/corrente/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Governo Municipal de Corrente', url: 'https://corrente.pi.gov.br/' },
  ],
  atualizadoEm: '2026-07-05',
};
