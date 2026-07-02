import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'flores-da-cunha-rs',
  nome: 'Flores da Cunha',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'flores-da-cunhense',
  tipo: 'cidade',

  populacao: 30892,
  populacaoAno: 2022,
  idhm: 0.750,
  idhmClasse: 'alto',
  altitudeM: 710,

  resumoEconomico:
    'Conhecida como Terra do Galo e maior produtora de uvas e vinhos do Brasil desde 1994, Flores da Cunha fica na Serra Gaúcha, colonizada por imigrantes italianos a partir de 1876. A vitivinicultura sustenta cerca de 200 vinícolas, de pequenas cantinas rurais a grandes empresas, ao lado de forte indústria moveleira e agroindústria familiar de derivados coloniais. O PIB per capita da cidade supera a média estadual, puxado pela indústria (mais da metade do valor adicionado), com destaque para a fabricação de móveis de madeira e de vinhos entre os maiores empregadores locais.',

  mercado:
    'Cidade de renda industrial elevada e forte fluxo de enoturismo, tem oferta de academias concentrada no Centro e no bairro São José, complementada por academias ao ar livre instaladas pela prefeitura em diversas localidades, o que amplia o acesso ao treino fora da área central.',

  bairrosNobres: ['Centro', 'São José', 'Nossa Senhora Aparecida', 'São Gotardo'],
  bairrosPopulares: ['São Cristóvão', 'Loteamento Pérola', 'Primeiro', 'Otávio Rocha'],

  parques: [
    {
      nome: 'Parque Romano',
      descricao:
        'Cerca de 24 mil m² com trilhas pavimentadas, ciclofaixa, playground, quadras esportivas e áreas de convivência, bastante usado para caminhada e atividade física.',
    },
    {
      nome: 'Parque da Vindima Eloy Kunz',
      descricao:
        'Um dos principais mirantes da cidade, marcado pelo Monumento ao Galo e sede da Fenavindima; oferece área para caminhada e pôr do sol com vista panorâmica.',
    },
    {
      nome: 'Parque da Gruta',
      descricao:
        'No distrito de Otávio Rocha, reúne uma gruta natural com cascata em cenário de mata, opção de contato com a natureza fora da área central.',
    },
  ],
  ciclovias:
    'A malha estruturada é modesta, limitada pela topografia da Serra Gaúcha; o Parque Romano conta com ciclofaixa própria, e o ciclismo de estrada é praticado nas rotas rurais entre os vinhedos.',

  clima:
    'O clima é subtropical de altitude (a cerca de 710 m), com verões amenos e invernos frios, com geadas frequentes, típicos da Serra Gaúcha.',
  climaTreino:
    'O frio do inverno favorece o treino indoor em boa parte do ano; nas estações mais amenas, o Parque Romano e os roteiros rurais entre vinícolas abrem boas opções de treino ao ar livre.',

  mobilidade:
    'Flores da Cunha é servida pela RS-122 (Rodovia Synval Guazzelli), que liga o município a Caxias do Sul, a cerca de 20 km, e a Farroupilha e Bento Gonçalves, eixo importante para o transporte de cargas da vitivinicultura e da indústria moveleira.',

  corridas: [
    {
      nome: 'Meia Maratona de Flores da Cunha',
      descricao:
        'Prova com percursos de 5 km, 10 km e 21 km, criada em conexão com o aniversário do município, com largada na Avenida 25 de Julho e trecho por pontos como a Vinícola Luiz Argenta e o Eremitério Frei Salvador.',
    },
    {
      nome: 'Rústica Rotary Flores da Cunha',
      descricao:
        'Corrida e caminhada de rua organizada com apoio do Rotary e da Fenavindima, unindo esporte, saúde e turismo no calendário local.',
    },
  ],
  culturaEsportiva:
    'A vida ativa gira em torno do Parque Romano, das academias ao ar livre espalhadas pelas localidades e dos roteiros rurais entre vinícolas, com provas de rua ligadas às datas comemorativas do município e à Fenavindima.',
  academias:
    'A oferta reúne academias e estúdios concentrados no Centro e no bairro São José, complementada pelo Parque Romano e pelas academias ao ar livre instaladas em localidades como Lagoa Bela, Linha 100, Restinga e Santa Bárbara.',

  destaquesFitness: [
    'Maior produtora de uvas e vinhos do Brasil, com cerca de 200 vinícolas e forte enoturismo.',
    'Parque Romano, com trilhas pavimentadas e ciclofaixa para caminhada e corrida.',
    'Meia Maratona de Flores da Cunha, com percursos de 5, 10 e 21 km entre vinícolas.',
    'Frio serrano de altitude que impulsiona a demanda por treino indoor e personal.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Terra do Galo e maior polo vitivinícola do Brasil, Flores da Cunha une economia industrial forte, tradição italiana e boa estrutura de parques na Serra Gaúcha. Um personal trainer ajuda a manter a constância no frio de altitude, combinando treino indoor com o Parque Romano e as provas de rua do calendário local.',

  vizinhas: ['caxias-do-sul-rs', 'farroupilha-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Flores da Cunha', url: 'https://cidades.ibge.gov.br/brasil/rs/flores-da-cunha/panorama' },
    { nome: 'Prefeitura de Flores da Cunha', url: 'https://www.floresdacunha.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
