import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santo-amaro-ba',
  nome: 'Santo Amaro',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'amarense',
  tipo: 'cidade',

  populacao: 56012,
  populacaoAno: 2022,
  idhm: 0.646,
  idhmClasse: 'médio',

  resumoEconomico:
    'Às margens do rio Subaé, a cerca de 80 km de Salvador, Santo Amaro foi um dos mais ricos entrepostos açucareiros do Recôncavo Baiano entre os séculos XVI e XX, quando engenhos de cana-de-açúcar sustentaram a riqueza da região e o casario colonial que até hoje marca a cidade. Com o fim do ciclo do açúcar, a economia se reorganizou em torno do comércio, dos serviços públicos, da agricultura (mandioca, fumo, frutas) e, cada vez mais, do turismo histórico e cultural — impulsionado por ser terra natal de Caetano Veloso e Maria Bethânia.',

  mercado:
    'O mercado fitness de Santo Amaro é o de uma cidade média do interior baiano, com academias de musculação e estúdios menores concentrados no Centro e em bairros residenciais próximos. A procura por personal trainer tende a vir de quem busca acompanhamento individualizado diante da oferta mais enxuta de grandes redes, além de quem quer treinar ao ar livre aproveitando praças e o entorno do centro histórico.',

  bairrosNobres: ['Centro Histórico', 'Sinimbú', 'Derba', 'Coqueiro'],
  bairrosPopulares: ['Trapiche', 'Bonfim', "Caixa D'Água", 'Sacramento'],

  parques: [
    {
      nome: 'Praça da Purificação',
      descricao:
        'Praça central em torno da Igreja Matriz de Nossa Senhora da Purificação, cercada por casarões coloniais tombados; ponto de encontro tradicional e referência para caminhada no centro histórico.',
    },
    {
      nome: 'Praça do Rosário',
      descricao:
        'Uma das duas praças que delimitam o núcleo histórico da cidade — reúne parte dos 75 imóveis de valor arquitetônico protegidos ao longo das ruas de pedra do centro, usado também para caminhada.',
    },
    {
      nome: 'Orla e margens do rio Subaé',
      descricao:
        'O rio que corta a cidade rumo à Baía de Todos os Santos foi historicamente via de escoamento do açúcar; seu entorno e pontes oferecem trecho plano para caminhada e corrida leve.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária formal é praticamente inexistente; o ciclismo de lazer acontece nas ruas do centro histórico e em estradas vicinais e na BR-420 em direção aos distritos de Acupe e Campinhos, sobretudo nos fins de semana.',

  clima:
    'O clima é tropical quente e úmido, típico do Recôncavo Baiano, com temperaturas elevadas ao longo do ano e chuvas mais concentradas no outono e no inverno (de abril a julho); a proximidade com o mar e com o rio Subaé mantém o ar bastante úmido.',
  climaTreino:
    'O calor e a umidade constantes pedem treinar cedo pela manhã ou no fim da tarde, com hidratação reforçada; nas horas mais quentes do dia, ambientes com sombra ou climatizados são a opção mais segura.',

  mobilidade:
    'Santo Amaro é servida pela BR-420, rodovia federal que corta o Recôncavo Baiano ligando a cidade a Pojuca, Cachoeira, São Félix e Maragogipe, com acesso a partir da BR-324 que liga a região a Salvador (cerca de 80 km de distância). A cidade também conta com os distritos de Acupe, na costa da Baía de Todos os Santos, e Campinhos. O deslocamento urbano é feito majoritariamente por carro, moto e ônibus.',

  corridas: [
    {
      nome: 'Corrida e Caminhada do Rosário',
      descricao:
        'Prova de rua realizada em Santo Amaro, com caminhada e corrida abertas à comunidade, ligada a uma iniciativa paroquial de integração, saúde e solidariedade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local convive com uma agenda cultural intensa — o Samba de Roda do Recôncavo Baiano, de raízes coloniais, e o Bembé do Mercado, o maior candomblé de rua do mundo e Patrimônio Cultural do Brasil desde 2019. Corridas de rua ligadas a festividades religiosas e comunitárias vêm ganhando espaço ao lado da prática tradicional de caminhada nas praças do centro histórico.',
  academias:
    'A oferta de academias é modesta e concentrada no Centro, formada por estúdios e academias de musculação e treino funcional de porte local, compatível com uma cidade média do Recôncavo Baiano.',

  destaquesFitness: [
    'Terra natal de Caetano Veloso e Maria Bethânia, com centro histórico colonial de 75 imóveis tombados entre a Praça da Purificação e a Praça do Rosário.',
    'Sede do Bembé do Mercado, maior candomblé de rua do mundo, e berço do Samba de Roda do Recôncavo Baiano.',
    'Herança do ciclo açucareiro colonial às margens do rio Subaé, hoje sustentada por comércio, serviços e turismo histórico.',
    'Clima quente e úmido do Recôncavo Baiano, que pede planejamento de horário e hidratação no treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 230,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 330,
  },

  conclusao:
    'Berço da música de Caetano Veloso e Maria Bethânia e um dos centros históricos mais preservados do Recôncavo Baiano, Santo Amaro oferece cenário rico para caminhada e corrida entre casarões coloniais, mas pede atenção ao calor e à umidade típicos da região. Um personal trainer ajuda a montar uma rotina segura, aproveitando as praças do centro histórico e respeitando o clima ao longo do ano.',

  vizinhas: ['santo-antonio-de-jesus-ba', 'cruz-das-almas-ba', 'salvador-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Santo Amaro', url: 'https://cidades.ibge.gov.br/brasil/ba/santo-amaro/panorama' },
    { nome: 'Prefeitura de Santo Amaro', url: 'https://www.santoamaro.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/292860' },
  ],
  atualizadoEm: '2026-07-02',
};
