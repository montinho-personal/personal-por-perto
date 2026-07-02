import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'galinhos-rn',
  nome: 'Galinhos',
  uf: 'RN',
  estado: 'Rio Grande do Norte',
  estadoSlug: 'rio-grande-do-norte',
  regiao: 'Nordeste',
  gentilico: 'galinhense',
  tipo: 'cidade',

  populacao: 2104,
  populacaoAno: 2022,
  idhm: 0.564,
  idhmClasse: 'baixo',

  resumoEconomico:
    'No litoral norte potiguar, Galinhos ocupa uma península estreita — em alguns pontos com menos de 500 metros de largura — entre o oceano Atlântico e o braço de mar do rio Aratuá, o que faz do município um dos acessos mais peculiares do Brasil: só se chega de barco, pela balsa que parte do Porto de Pratagil, em Guamaré, ou de buggy pelas dunas. A economia gira em torno da pesca artesanal, das salinas — as montanhas brancas de sal que marcam a paisagem local — e de um turismo de charme controlado pelo isolamento, que preserva ruas de areia sem carros. O PIB per capita é relativamente elevado para um município tão pequeno (R$ 78.741,62 em 2023, segundo o IBGE), puxado sobretudo pela indústria, que responde por mais da metade do produto — reflexo da proximidade com os campos de petróleo e gás da Bacia Potiguar, presente em boa parte do litoral norte do estado.',

  mercado:
    'Por ser uma vila de pescadores muito pequena e isolada, Galinhos praticamente não tem mercado fitness estruturado: não há indícios de rede de academias na sede, e a procura por atividade orientada se mistura ao próprio turismo náutico e de aventura, com pousadas emprestando caiaques e equipamentos de windsurf aos hóspedes. Quem busca treino individualizado tende a depender de atendimento pontual durante a temporada de turismo ou de acompanhamento online.',

  bairrosNobres: ['Centro (junto ao cais)'],
  bairrosPopulares: ['Galos', 'Ponta do Farol'],

  parques: [
    {
      nome: 'Praia e Ponta do Farol',
      descricao:
        'Na ponta da península, o Farol de Galinhos marca uma área mais afastada do centro, com paisagem semidesértica e piscinas naturais de água morna — trecho percorrido a pé, de charrete ou em passeios de cavalo pela orla.',
    },
    {
      nome: 'Dunas e salinas de Galinhos',
      descricao:
        'As dunas brancas de sal e as salinas naturais no entorno da vila formam o cenário mais característico do município, usadas para caminhadas e passeios que aproveitam a paisagem incomum, entre montanhas de sal e mar.',
    },
    {
      nome: 'Estuário do rio Aratuá',
      descricao:
        'O braço de mar que separa a vila do continente é navegado em passeios de barco pelas gamboas de mangue, com paradas em bancos de areia para banho — um dos principais espaços de contato com a água além da praia aberta.',
    },
  ],
  ciclovias:
    'Não há ciclovias nem circulação de carros dentro da vila: as ruas são de areia e o deslocamento é feito a pé, de bicicleta ou em charretes puxadas por burros (os "burro-táxi"), o que torna a caminhada parte natural da rotina de quem mora ou visita Galinhos.',

  clima:
    'O clima é tropical semiárido, quente ao longo de todo o ano, com chuvas concentradas entre o fim do verão e o outono e um período de ventos fortes e praticamente constantes de agosto a março — condição que também faz da região um destino procurado para kitesurf e windsurf.',
  climaTreino:
    'O calor e a forte insolação recomendam atividade ao ar livre no início da manhã ou no fim da tarde, com hidratação reforçada; os ventos constantes de agosto a março amenizam a sensação térmica, mas pedem atenção redobrada em esportes aquáticos e treinos na praia.',

  mobilidade:
    'O acesso a Galinhos é um dos mais restritos do litoral potiguar: carros comuns vão até o Porto de Pratagil, em Guamaré, na RN-402, e a partir dali a travessia até a vila é feita de balsa ou barco em cerca de dez minutos, ou por buggy em um trecho pelas dunas. Dentro da vila não circulam veículos motorizados comuns — o deslocamento é a pé ou em charretes puxadas por burros, reforçando o caráter isolado e preservado do município.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva de Galinhos é moldada pela água e pelo vento: kitesurf e windsurf aproveitando os ventos fortes de agosto a março, passeios a cavalo e de charrete pelos cerca de 16 km de enseada da península, mergulho de snorkel nos recifes e passeios de barco pelo estuário, além da pesca artesanal, atividade tradicional da vila.',
  academias:
    'A oferta de academias é praticamente inexistente, compatível com o porte muito pequeno e isolado do município; a atividade física estruturada tende a se apoiar em pousadas, guias de esportes náuticos e atendimento individual, num modelo mais próximo do turismo de aventura do que de uma estrutura fitness tradicional.',

  destaquesFitness: [
    'Vila isolada em península, acessível apenas por balsa a partir do Porto de Pratagil (Guamaré) ou por buggy pelas dunas.',
    'Ruas de areia sem circulação de carros, com deslocamento a pé ou em charretes puxadas por burros.',
    'Ventos fortes e constantes de agosto a março, que tornam a região destino de kitesurf e windsurf.',
    'Mercado fitness estruturado praticamente inexistente, com o treino orientado dependendo de pousadas, guias ou acompanhamento online.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 220,
    mensalMax: 580,
    onlineMin: 100,
    onlineMax: 320,
  },

  conclusao:
    'Cercada por dunas de sal, salinas e pelo braço de mar do rio Aratuá, Galinhos vive de um turismo de charme sustentado justamente pelo isolamento, sem carros e com estrutura fitness quase inexistente. Um personal trainer com atendimento pontual ou acompanhamento online ajuda moradores e visitantes de temporada a manter a rotina de treino, respeitando o calor, os ventos constantes e as limitações de acesso à vila.',

  vizinhas: ['macau-rn', 'joao-camara-rn', 'natal-rn'],

  fontes: [
    { nome: 'IBGE Cidades — Galinhos', url: 'https://cidades.ibge.gov.br/brasil/rn/galinhos/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura Municipal de Galinhos', url: 'https://www.galinhos.rn.gov.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
