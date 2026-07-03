import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'correntina-ba',
  nome: 'Correntina',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'correntinense',
  tipo: 'cidade',

  populacao: 32457,
  populacaoAno: 2022,
  idhm: 0.603,
  idhmClasse: 'médio',
  altitudeM: 580,

  resumoEconomico:
    'No extremo oeste da Bahia, na fronteira com o cerrado do Matopiba, Correntina combina uma economia agrícola pujante com uma vocação natural ligada à água. O distrito de Rosário, a cerca de 200 km da sede, virou um dos polos de agronegócio da região, com lavouras de soja, algodão e milho que figuram entre as mais produtivas do país. Essa força agrícola coloca o município entre os de maior PIB per capita da Bahia, ainda que a riqueza gerada nas grandes fazendas conviva com desigualdade social relevante. Ao mesmo tempo, a sede do município é cortada por rios de águas cristalinas — Correntina, Arrojado, Santo Antônio, Guará e Rio do Meio — que sustentam um turismo regional crescente em torno de cachoeiras e balneários.',

  mercado:
    'O mercado de personal trainers em Correntina ainda é incipiente e concentrado em poucas academias locais, refletindo o porte de uma cidade média do interior. A renda gerada pelo agronegócio na sede e no distrito de Rosário, somada ao fluxo de visitantes atraído pelas cachoeiras e balneários, cria espaço para atendimento personalizado tanto de produtores e famílias locais quanto de quem busca treino orientado para aproveitar as atividades ao ar livre na natureza.',

  bairrosNobres: ['Centro', 'Alto da Colina', 'Portal do Sol'],
  bairrosPopulares: ['São José', 'Bairro do Ouro', 'Itamarana', 'Novo Horizonte'],

  parques: [
    {
      nome: 'Balneário Sete Ilhas',
      descricao:
        'A 1,5 km do centro, reúne sete pequenas ilhas naturais no rio, com piscinas naturais, cachoeiras, corredeiras e estrutura de bares e restaurantes — o principal ponto de lazer ao ar livre da cidade, usado também para caminhada nas margens.',
    },
    {
      nome: 'Ranchão',
      descricao:
        'Espaço erguido às margens do rio Correntina desde a década de 1960, referência histórica da cidade e palco de festividades como a Festa do Havaí; o entorno é aproveitado para caminhada e convívio à beira do rio.',
    },
    {
      nome: 'Cachoeira do Manoel Mendes',
      descricao:
        'Queda d\'água dividida por uma pequena ilha, em propriedade privada aberta à visitação; um dos destinos de trilha e passeio na zona rural do município, junto com outras cachoeiras da região, como Catolés, Remanso e Ponte Velha.',
    },
  ],
  ciclovias:
    'A cidade não dispõe de rede cicloviária estruturada; caminhada e corrida acontecem principalmente nas ruas do centro e nas margens dos rios e balneários que cortam a sede do município.',

  clima:
    'O clima é tropical, típico do cerrado, com temperatura média do mês mais frio acima de 18 °C e chuvas concentradas no verão, entre outubro e março; o período de estiagem, mais seco e com menor umidade, vai de abril a setembro.',
  climaTreino:
    'O calor constante recomenda treinar nas primeiras horas da manhã ou no fim da tarde, com boa hidratação; a fartura de rios e cachoeiras na sede é um diferencial para atividades físicas ao ar livre combinadas com banho de rio, especialmente fora dos meses mais chuvosos.',

  mobilidade:
    'O acesso rodoviário principal se dá pela BR-135, que liga Correntina a Barreiras, Santa Maria da Vitória e outros municípios do oeste baiano, corredor importante para o escoamento da produção agrícola do Matopiba. O transporte dentro da cidade é feito majoritariamente por veículos particulares e mototáxis, comuns em municípios do interior do cerrado.',

  corridas: [],
  culturaEsportiva:
    'A prática esportiva organizada mais visível é a corrida de rua informal: o grupo Guepardos reúne dezenas de corredores em treinos coletivos semanais pela cidade. Fora isso, a cultura local de atividade física está ligada sobretudo ao uso recreativo dos rios e cachoeiras — natação, caminhada e trilhas até balneários como as Sete Ilhas.',
  academias:
    'A oferta de academias é pequena e concentrada no centro da cidade, com estabelecimentos de musculação e aulas coletivas que também oferecem acompanhamento de personal trainer, dimensionados para uma cidade média do interior do oeste baiano.',

  destaquesFitness: [
    'Cinco rios de águas cristalinas cortam a sede do município, com cachoeiras e balneários como as Sete Ilhas para atividade ao ar livre.',
    'Economia puxada pelo agronegócio do distrito de Rosário, polo de soja e algodão que projeta Correntina entre os maiores PIBs per capita da Bahia.',
    'Clima de cerrado, quente o ano todo, com chuvas concentradas de outubro a março e período seco no restante do ano.',
    'Acesso pela BR-135, eixo rodoviário que liga a cidade ao corredor agrícola do Matopiba, no extremo oeste baiano.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 220,
    mensalMax: 600,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Cidade do cerrado marcada pela riqueza dos rios e pelo peso do agronegócio, Correntina oferece um cenário natural favorável ao treino ao ar livre, das margens do rio Correntina aos balneários e cachoeiras do entorno. Um personal trainer pode ajudar a organizar a rotina de treino considerando o calor típico da região e aproveitando essas águas cristalinas como parte da atividade física.',

  vizinhas: ['barreiras-ba', 'bom-jesus-da-lapa-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Correntina', url: 'https://cidades.ibge.gov.br/brasil/ba/correntina/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Correntina — Pontos Turísticos', url: 'https://www.correntina.ba.gov.br/secretarias/turismo/pontos-turisticos/' },
  ],
  atualizadoEm: '2026-07-03',
};
