import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'nisia-floresta-rn',
  nome: 'Nísia Floresta',
  uf: 'RN',
  estado: 'Rio Grande do Norte',
  estadoSlug: 'rio-grande-do-norte',
  regiao: 'Nordeste',
  gentilico: 'nísia-florestense',
  tipo: 'cidade',

  populacao: 31942,
  populacaoAno: 2022,
  idhm: 0.622,
  idhmClasse: 'médio',
  altitudeM: 24,

  resumoEconomico:
    'No litoral sul potiguar e integrada à Região Metropolitana de Natal, Nísia Floresta tem a economia apoiada no turismo, na carcinicultura (cultivo de camarão, que rendeu o apelido de "terra do camarão"), na agropecuária e na administração pública. Com quase 20 km de litoral e dezenas de lagoas, a cidade se firmou como polo de atrativos naturais, com boa oferta de pousadas e hotéis que aquece o comércio e os serviços ligados ao veraneio.',

  mercado:
    'Por ser uma cidade de porte médio muito ligada ao veraneio e à proximidade com Natal, o mercado fitness de Nísia Floresta combina a demanda dos moradores com a de veranistas e visitantes das praias e lagoas. A procura por personal trainers tende a aparecer entre quem quer aproveitar a orla e as trilhas para treino ao ar livre e entre condomínios e pousadas do litoral.',

  bairrosNobres: ['Centro', 'Búzios', 'Barra de Tabatinga', 'Pium'],
  bairrosPopulares: ['Timbó', 'Alcaçuz', 'Boa Água', 'Camurupim'],

  parques: [
    {
      nome: 'Complexo de Dunas de Búzios',
      descricao:
        'Conjunto de dunas e praia na porção norte do litoral do município; o cenário de areia e mar é usado para caminhada, corrida na areia e atividades ao ar livre, além de esportes como o passeio de bugue.',
    },
    {
      nome: 'Praia de Barra de Tabatinga',
      descricao:
        'Praia de falésias com mirante conhecido pela observação de golfinhos; o trecho de orla e os caminhos no alto das falésias servem de percurso para quem treina com vista para o mar.',
    },
    {
      nome: 'Lagoa de Arituba',
      descricao:
        'Uma das lagoas mais estruturadas da cidade, cercada de vegetação e quiosques; o entorno é usado para caminhada e lazer, e a água doce funciona como opção para natação e recreação.',
    },
    {
      nome: 'Lagoa do Bonfim',
      descricao:
        'A maior lagoa do Rio Grande do Norte, ponto de esportes náuticos e banho; as margens e o entorno rural oferecem espaço para pedal, corrida e atividades ao ar livre.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos urbanos; boa parte do pedal e da corrida acontece nas estradas vicinais entre as lagoas, nos acessos às praias e ao longo da orla.',

  clima:
    'O clima é tropical litorâneo, quente durante todo o ano, com influência dos ventos do mar que amenizam a sensação térmica. As chuvas se concentram no outono e no início do inverno (março a julho), enquanto a primavera e o verão são mais secos e ensolarados, favorecendo a alta temporada de veraneio.',
  climaTreino:
    'O calor e a umidade pedem treinar cedo ou no fim da tarde, com hidratação reforçada; a brisa marinha ajuda na orla, e o treino na areia e nas lagoas é uma boa alternativa nos dias mais quentes, evitando o sol do meio-dia.',

  mobilidade:
    'Nísia Floresta fica a cerca de 50 km de Natal e se conecta à capital pela rodovia RN-063 (Rota do Sol), que corta o litoral sul, e pela BR-101 via São José de Mipibu. O deslocamento é feito sobretudo por carro e por ônibus intermunicipais, com forte fluxo de veranistas entre a Grande Natal e as praias nos fins de semana e na alta temporada.',

  corridas: [
    {
      nome: 'Desafio dos Reis',
      descricao:
        'Prova de revezamento que combina corrida e ciclismo passando por Natal, Parnamirim e Nísia Floresta, reforçando a integração esportiva do litoral sul da Região Metropolitana.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva gira em torno do mar e das lagoas: caminhada e corrida na orla, esportes náuticos na Lagoa do Bonfim, passeios de bugue nas dunas de Búzios e o ciclismo pelas estradas entre praias e lagoas, num ambiente marcado pelo veraneio.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos núcleos do litoral, com porte compatível com uma cidade litorânea da Região Metropolitana de Natal.',

  destaquesFitness: [
    'Litoral sul potiguar com quase 20 km de praias, como Búzios, Barra de Tabatinga e Camurupim.',
    'Dezenas de lagoas, incluindo Arituba e a Lagoa do Bonfim, a maior do estado, para esportes náuticos e treino ao ar livre.',
    'Clima litorâneo quente com brisa marinha, que favorece treino cedo ou no fim da tarde.',
    'Integração à Região Metropolitana de Natal pela RN-063 (Rota do Sol), com economia de turismo e carcinicultura.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 115,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 350,
  },

  conclusao:
    'Cidade litorânea, turística e cheia de praias e lagoas, Nísia Floresta pede um treino que aproveite a orla, a areia e a água doce, sempre adaptado ao calor da costa potiguar. Um personal trainer ajuda a organizar a rotina, escolher os melhores horários com a brisa marinha e manter a constância entre a alta temporada e o dia a dia na Região Metropolitana de Natal.',

  vizinhas: ['parnamirim-rn', 'natal-rn'],

  fontes: [
    { nome: 'IBGE Cidades — Nísia Floresta', url: 'https://cidades.ibge.gov.br/brasil/rn/nisia-floresta/panorama' },
    { nome: 'Prefeitura de Nísia Floresta', url: 'https://nisiafloresta.rn.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
