import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'senhor-do-bonfim-ba',
  nome: 'Senhor do Bonfim',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'bonfinense',
  tipo: 'cidade',

  populacao: 74490,
  populacaoAno: 2022,
  idhm: 0.677,
  idhmClasse: 'médio',
  altitudeM: 453,

  resumoEconomico:
    'Polo regional do centro-norte da Bahia, a cerca de 375 km de Salvador, Senhor do Bonfim concentra comércio e serviços que atraem consumidores de várias cidades vizinhas. Ponto quase obrigatório na rota entre o litoral baiano e o Vale do São Francisco, firmou-se como entreposto comercial e entroncamento rodoviário, complementado por extração mineral na região e por uma forte vocação universitária.',

  mercado:
    'Cidade média e universitária, reúne academias de musculação no centro e nos bairros de classe média, com demanda sustentada pelo público estudantil de UNEB, IF Baiano e UNIVASF e pela tradição esportiva ligada ao São João e ao forró.',

  bairrosNobres: ['Centro', 'Bandeira', 'Pernambuquinho', 'Tijuca'],
  bairrosPopulares: ['Gamboa', 'Burujão', 'Várzea', 'Alto da Maravilha'],

  parques: [
    {
      nome: 'Serra de Santana',
      descricao:
        'Elevação que emoldura a cidade, com mirante e trilhas procuradas para caminhada, corrida em subida e treino de pernas com vista do casario.',
    },
    {
      nome: 'Mirante da Serra',
      descricao:
        'Ponto alto de onde se avista o centro histórico, usado como meta de subida por quem treina ao ar livre no fim de tarde.',
    },
    {
      nome: 'Praças e o eixo do centro histórico',
      descricao:
        'O conjunto de praças e ruas planas do centro funciona como circuito urbano para caminhadas e corridas leves.',
    },
  ],
  ciclovias:
    'A malha cicloviária urbana de Senhor do Bonfim ainda não é divulgada em extensão por fonte oficial; o pedal ocorre sobretudo em vias do centro e nos acessos pelas rodovias.',

  clima:
    'O clima é semiárido tropical, típico do centro-norte baiano, com calor diurno amenizado pela altitude da serra e por noites mais frescas; nos extremos já se registraram dias acima de 38 °C e madrugadas perto de 14 °C.',
  climaTreino:
    'A serra suaviza as temperaturas, mas o sol do semiárido é forte ao meio-dia: o ideal é treinar no início da manhã ou no fim da tarde, com hidratação reforçada nos meses mais secos.',

  mobilidade:
    'Senhor do Bonfim é um entroncamento rodoviário: a BR-407 liga a cidade rumo ao Vale do São Francisco e a BR-324 faz a conexão em direção a Salvador, reforçando seu papel de cruzamento entre o litoral e o sertão.',

  corridas: [
    {
      nome: 'Corrida e Caminhada do Bonfim',
      descricao:
        'Prova de rua do calendário local, com percursos de corrida e caminhada que mobilizam atletas da cidade e da região.',
    },
    {
      nome: 'Circuitos no entorno do São João',
      descricao:
        'Caminhadas e corridas leves se somam à intensa programação esportiva e cultural do período junino, quando a cidade vira a Capital Baiana do Forró.',
    },
  ],
  culturaEsportiva:
    'Reconhecida como Capital Baiana do Forró, a cidade tem no São João seu auge de movimento, com o tradicional "Forró dos Bairros" e a animação de Pernambuquinho, Bandeira e Gamboa. A energia das festas se traduz em adesão a caminhadas, corridas de rua e treino ao ar livre na serra.',
  academias:
    'A oferta reúne academias de musculação no centro e nos bairros de classe média, complementada pelos espaços a céu aberto da Serra de Santana, dos mirantes e das praças do centro histórico.',

  destaquesFitness: [
    'Serra de Santana e mirantes como academia a céu aberto, ótimos para treino de subida.',
    'Clima semiárido amenizado pela altitude, com noites mais frescas que favorecem o treino.',
    'Público universitário de UNEB, IF Baiano e UNIVASF, que amplia a base de alunos.',
    'Calendário esportivo ligado ao São João, Capital Baiana do Forró.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Polo de comércio, educação e do forró no centro-norte baiano, Senhor do Bonfim alia serra, clima ameno e vida universitária. Um personal trainer ajuda a aproveitar a Serra de Santana e o centro com método, ajustando horários e hidratação ao semiárido.',

  vizinhas: ['juazeiro-ba', 'jacobina-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Senhor do Bonfim', url: 'https://cidades.ibge.gov.br/brasil/ba/senhor-do-bonfim/panorama' },
    { nome: 'Prefeitura de Senhor do Bonfim', url: 'https://senhordobonfim.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
