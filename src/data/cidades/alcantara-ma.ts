import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'alcantara-ma',
  nome: 'Alcântara',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'alcantarense',
  tipo: 'cidade',

  populacao: 18467,
  populacaoAno: 2022,

  resumoEconomico:
    'Do outro lado da baía de São Marcos, em frente a São Luís, Alcântara guarda um dos conjuntos coloniais mais impressionantes do Brasil — ruas de pedra, casarões azulejados e as ruínas da Igreja de São Matias, tudo tombado — e, a poucos quilômetros, o Centro de Lançamento de Alcântara, base espacial brasileira. A economia combina turismo histórico, pesca, agricultura familiar das dezenas de comunidades quilombolas e o movimento ligado à base.',

  mercado:
    'O mercado de treino é pequeno e concentrado na sede, com o perfil de cidade histórica e territorial: trabalhadores do turismo e da pesca, servidores da base espacial e uma população quilombola espalhada por vilas rurais. O acompanhamento online e o treino ao ar livre no casario e na orla dominam a prática.',

  bairrosNobres: ['Centro Histórico', 'Praça da Matriz', 'Camboa', 'Baronesa'],
  bairrosPopulares: ['Itapera', 'Mamuna', 'Canelatiua', 'Raimundo Sú'],

  parques: [
    {
      nome: 'Centro histórico e ladeiras de pedra',
      descricao:
        'O conjunto tombado — Praça da Matriz, ruínas de São Matias, casarões e ladeiras — é a "pista" natural da cidade: subidas curtas e fortes de pedra irregular, entre o porto e o alto da colina.',
    },
    {
      nome: 'Praias e orla da baía de São Marcos',
      descricao:
        'Faixas de areia como a praia da Baronesa e as praias das comunidades, usadas para caminhada e banho conforme a maré — o vaivém da maré muda o cenário duas vezes por dia.',
    },
    {
      nome: 'Comunidades quilombolas e caminhos rurais',
      descricao:
        'Mais de uma centena de comunidades, como Mamuna e Canelatiua, ligadas por caminhos de terra entre babaçuais — território de caminhada longa como modo de vida.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária; as ruas de pedra do centro histórico e as estradas de terra das comunidades são o terreno de quem pedala.',

  clima:
    'Tropical quente e úmido, com chuvas fortes de janeiro a junho e estiagem de julho a dezembro, sempre com a brisa da baía amenizando o fim de tarde.',
  climaTreino:
    'Cedo de manhã e fim de tarde são as janelas de treino ao ar livre; as ladeiras de pedra pedem tornozelo firme e atenção ao piso irregular, e a hidratação é regra o ano todo.',

  mobilidade:
    'O acesso clássico é de barco: cerca de uma hora de travessia da rampa do Cais da Praia Grande, em São Luís, cruzando a baía de São Marcos. Por terra, a rota contorna a baía por Pinheiro — mais de 200 km. Dentro do município, estradas de terra ligam a sede às comunidades.',

  corridas: [
    {
      nome: 'Provas e festivais esportivos da Festa do Divino',
      descricao:
        'O calendário local gira em torno das festas tradicionais, como a Festa do Divino Espírito Santo, que movimentam a cidade com atividades culturais e esportivas.',
    },
  ],
  culturaEsportiva:
    'O corpo alcantarense treina no cotidiano: ladeiras de pedra no centro, caminhada longa entre comunidades, pesca e trabalho na roça. Somam-se o futebol das vilas, o Tambor de Crioula como expressão de resistência (e de resistência física) e o movimento dos visitantes que sobem as ruínas.',
  academias:
    'A oferta formal é mínima e concentrada na sede; o treino de força acontece em espaços simples, em casa ou com acompanhamento a distância.',

  destaquesFitness: [
    'Ladeiras de pedra do centro histórico: subidas curtas e fortes como treino natural.',
    'Caminhada longa como modo de vida nas comunidades quilombolas.',
    'Orla e praias da baía de São Marcos para treino ao ar livre com brisa.',
    'A uma travessia de barco de São Luís — dá para combinar personal e consultoria online.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 620,
    onlineMin: 130,
    onlineMax: 330,
  },

  conclusao:
    'Alcântara treina subindo ladeira de pedra entre casarões do século XVIII, com a baía de São Marcos no horizonte e foguetes do outro lado do município. Um personal trainer daqui trabalha pernas, equilíbrio e fôlego para o piso irregular e o calor — presencialmente na sede ou a distância para as comunidades.',

  vizinhas: ['sao-luis-ma', 'sao-jose-de-ribamar-ma'],

  fontes: [
    { nome: 'IBGE Cidades — Alcântara', url: 'https://cidades.ibge.gov.br/brasil/ma/alcantara/panorama' },
    { nome: 'Prefeitura de Alcântara', url: 'https://alcantara.ma.gov.br/' },
    { nome: 'IPHAN — Alcântara', url: 'http://portal.iphan.gov.br/pagina/detalhes/121' },
  ],
  atualizadoEm: '2026-08-13',
};
