import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'macau-rn',
  nome: 'Macau',
  uf: 'RN',
  estado: 'Rio Grande do Norte',
  estadoSlug: 'rio-grande-do-norte',
  regiao: 'Nordeste',
  gentilico: 'macauense',
  tipo: 'cidade',

  populacao: 27369,
  populacaoAno: 2022,
  idhm: 0.665,
  idhmClasse: 'médio',
  altitudeM: 25,

  resumoEconomico:
    'No litoral norte potiguar, à beira da foz do rio Piranhas-Açu, Macau tem a economia ancorada na produção de sal marinho — junto com Mossoró, a região responde pela maior parte do sal produzido no Brasil — e na extração de petróleo, em terra e offshore, na Bacia Potiguar. A energia eólica, a pesca artesanal nas vilas do estuário e um turismo voltado às salinas, às dunas e às praias completam a base econômica do município.',

  mercado:
    'O mercado de personal trainers é o de uma cidade média do litoral semiárido nordestino, sustentado pelo comércio, pelos serviços e pelos profissionais ligados ao sal, ao petróleo e à energia eólica. O calor e os ventos constantes concentram o treino ao ar livre nos horários mais amenos, e a oferta de academias atende o centro e os bairros residenciais.',

  bairrosNobres: ['Centro', 'Ilha de Santana', 'Bela Vista', 'Aeroporto'],
  bairrosPopulares: ['Junco', 'Soledade', 'Diogo Lopes', 'Barreiras'],

  parques: [
    {
      nome: 'Orla e praia de Camapum',
      descricao:
        'A praia mais próxima do centro é referência para caminhada e lazer à beira-mar, aproveitando o vento e as áreas mais frescas do litoral.',
    },
    {
      nome: 'Salinas e dunas do estuário',
      descricao:
        'As salinas e os campos de dunas em torno da foz do rio Piranhas-Açu formam uma paisagem singular do litoral norte potiguar, procurada para caminhadas, passeios e contato com a natureza.',
    },
    {
      nome: 'Praças e avenidas do Centro',
      descricao:
        'As praças e avenidas centrais funcionam como espaços de uso público para caminhada e exercício, sobretudo no fim da tarde, quando o calor cede.',
    },
  ],
  ciclovias:
    'A bicicleta é meio de transporte comum no município, mas a cidade ainda tem poucos trechos de ciclovia dedicada.',

  clima:
    'O clima é semiárido quente, do tipo BSh, atípico para uma cidade litorânea: quente e seco ao longo do ano, com chuvas escassas e irregulares e ventos fortes e constantes, que sustentam a produção de sal e a geração eólica.',
  climaTreino:
    'O calor e a forte insolação recomendam o treino ao ar livre no início da manhã ou à noite, com atenção redobrada à hidratação e à proteção solar; o vento constante ajuda na sensação térmica, mas exige cautela em atividades à beira-mar.',

  mobilidade:
    'O acesso se dá pela RN-221, que liga Macau ao interior e à BR-110, principal eixo rodoviário que estrutura o deslocamento pelo litoral norte e em direção a Mossoró. O trânsito interno é leve, característico de cidade de pequeno porte do litoral potiguar.',

  corridas: [
    {
      nome: 'Corridas e caminhadas promovidas pela prefeitura',
      descricao:
        'O calendário municipal inclui corridas e caminhadas em datas comemorativas e de saúde, com largadas pelas avenidas centrais e pela orla.',
    },
    {
      nome: 'Provas escolares e comunitárias',
      descricao:
        'O público estudantil e as comunidades pesqueiras ajudam a movimentar atividades esportivas e de corrida ao longo do ano na cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o futebol, tradicional no litoral potiguar, com uma adesão crescente à caminhada e à corrida de rua, favorecida pelo trânsito leve, pela orla e pelo custo de vida acessível.',
  academias:
    'A oferta de academias acompanha o porte de cidade de pequeno a médio porte, complementada pelas praças e avenidas do centro e pela orla de Camapum para o treino ao ar livre.',

  destaquesFitness: [
    'Orla e praia de Camapum como espaço natural para caminhada e treino ao ar livre à beira-mar.',
    'Salinas e dunas do estuário do rio Piranhas-Açu como paisagem singular para caminhadas e passeios.',
    'Ventos constantes do litoral, que amenizam a sensação térmica no treino ao ar livre.',
    'Praças e avenidas centrais como rotas naturais para caminhada e corrida no fim da tarde.',
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
    'Maior polo de sal marinho do litoral norte potiguar, marcada pelas salinas, pelo petróleo, pela energia eólica e pela pesca, Macau reúne boas rotas ao ar livre — da praia de Camapum às avenidas do centro e às paisagens do estuário — desde que se respeite o calor e o sol do litoral semiárido. Um personal trainer ajuda a montar uma rotina segura, com horários e hidratação ajustados à realidade da cidade.',

  vizinhas: ['mossoro-rn', 'acu-rn'],

  fontes: [
    { nome: 'IBGE Cidades — Macau', url: 'https://cidades.ibge.gov.br/brasil/rn/macau/panorama' },
    { nome: 'Prefeitura Municipal de Macau', url: 'https://macau.rn.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
