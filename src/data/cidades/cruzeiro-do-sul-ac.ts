import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cruzeiro-do-sul-ac',
  nome: 'Cruzeiro do Sul',
  uf: 'AC',
  estado: 'Acre',
  estadoSlug: 'acre',
  regiao: 'Norte',
  gentilico: 'cruzeirense',
  tipo: 'cidade',

  populacao: 91888,
  populacaoAno: 2022,
  idhm: 0.664,
  idhmClasse: 'médio',
  altitudeM: 182,

  resumoEconomico:
    'Segunda maior cidade do Acre e principal polo do Vale do Juruá, no extremo oeste da Amazônia, Cruzeiro do Sul tem economia ancorada no comércio, nos serviços e na administração pública, com forte tradição agrícola e extrativista. A cidade é nacionalmente conhecida pela farinha de mandioca de Cruzeiro do Sul, produto de identidade regional, e organiza-se às margens do rio Juruá, que historicamente estrutura o transporte e o abastecimento do vale.',

  mercado:
    'Por ser uma cidade média e isolada no Vale do Juruá, o mercado de personal trainers é de menor escala e bastante local, concentrado em academias de bairro, no centro e em iniciativas ao ar livre. A orla do rio Juruá e as avenidas largas servem de espaço para caminhada e corrida, e há demanda crescente por acompanhamento individual à medida que a cena de corrida de rua se consolida.',

  bairrosNobres: ['Centro', 'Aeroporto Velho', 'Miritizal'],
  bairrosPopulares: ['da Glória', 'Cruzeirão', 'Nova Olinda', 'Remanso'],

  parques: [
    {
      nome: 'Orla do Rio Juruá',
      descricao:
        'Beira-rio no centro da cidade, ponto de encontro tradicional dos cruzeirenses para caminhada, lazer e contemplação do rio que dá nome ao vale.',
    },
    {
      nome: 'Floresta do Juruá',
      descricao:
        'Entorno de mata densa que cerca a cidade, com igarapés e vegetação amazônica preservada, base para trilhas e turismo de natureza na região.',
    },
    {
      nome: 'Parque Nacional da Serra do Divisor',
      descricao:
        'Unidade de conservação na fronteira com o Peru, próxima a Cruzeiro do Sul, com relevo acidentado, cachoeiras e biodiversidade exuberante — referência de ecoturismo do Vale do Juruá.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária formal é limitada, mas a bicicleta é meio de transporte muito presente no dia a dia, e as avenidas planas do centro favorecem o deslocamento ativo.',

  clima:
    'O clima é equatorial, quente e muito úmido, típico do Vale do Juruá, com temperaturas elevadas o ano inteiro e chuvas abundantes; o período mais chuvoso vai de novembro a abril, com curta estiagem por volta de julho e agosto.',
  climaTreino:
    'O calor e a umidade altíssimos quase o ano todo tornam o começo da manhã e o fim da tarde as melhores janelas para treinar ao ar livre; a hidratação constante e a atenção à exposição solar são essenciais.',

  mobilidade:
    'O acesso terrestre se dá pela BR-364, que liga Cruzeiro do Sul a Rio Branco em cerca de 630 km — uma longa distância, com trechos sujeitos às condições do tempo. Por isso, o Aeroporto Internacional de Cruzeiro do Sul tem papel central na conexão com o restante do estado e do país, e o rio Juruá segue importante para o transporte fluvial de comunidades do vale.',

  corridas: [
    {
      nome: 'Corrida do Maio Amarelo (Detran)',
      descricao:
        'Prova de rua promovida pelo Detran em parceria com a prefeitura no movimento Maio Amarelo, com largada em avenidas centrais e percursos pela cidade, reunindo corredores locais.',
    },
    {
      nome: 'Corridas de rua do Vale do Juruá',
      descricao:
        'Provas locais ligadas a datas cívicas e campanhas de saúde, parte de uma cena de corrida de rua em crescimento na segunda maior cidade do Acre.',
    },
  ],
  culturaEsportiva:
    'A vida ativa em Cruzeiro do Sul mistura o uso cotidiano da bicicleta, caminhadas na orla do rio Juruá e uma cena de corrida de rua em ascensão, impulsionada por eventos institucionais. O futebol e as festas tradicionais do vale também marcam o calendário esportivo e cultural da cidade.',
  academias:
    'A oferta é formada principalmente por academias de bairro e do centro, complementadas pelos espaços ao ar livre da orla e das avenidas, onde caminhada e corrida acontecem cedo pela manhã e ao entardecer.',

  destaquesFitness: [
    'Orla do rio Juruá como principal espaço de caminhada e corrida no centro.',
    'Cena de corrida de rua em crescimento, com provas como a do Maio Amarelo.',
    'Proximidade do Parque Nacional da Serra do Divisor para ecoturismo e trilhas.',
    'Bicicleta como meio de transporte presente no cotidiano da cidade.',
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
    'Polo do Vale do Juruá e segunda maior cidade do Acre, Cruzeiro do Sul une a força do rio, a floresta amazônica e uma cena esportiva que ganha corpo a cada ano. Um personal trainer ajuda a treinar com método e segurança no clima quente e úmido do vale, aproveitando a orla e os espaços ao ar livre da cidade.',

  vizinhas: ['rio-branco-ac'],

  fontes: [
    { nome: 'IBGE Cidades — Cruzeiro do Sul', url: 'https://cidades.ibge.gov.br/brasil/ac/cruzeiro-do-sul/panorama' },
    { nome: 'Prefeitura de Cruzeiro do Sul', url: 'https://www.cruzeirodosul.ac.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
