import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'guajara-mirim-ro',
  nome: 'Guajará-Mirim',
  uf: 'RO',
  estado: 'Rondônia',
  estadoSlug: 'rondonia',
  regiao: 'Norte',
  gentilico: 'guajará-mirense',
  tipo: 'cidade',

  populacao: 39387,
  populacaoAno: 2022,
  idhm: 0.657,
  idhmClasse: 'médio',

  resumoEconomico:
    'Guajará-Mirim fica no extremo oeste de Rondônia, na fronteira com a Bolívia, separada da cidade boliviana de Guayaramerín pelo rio Mamoré. É o segundo maior município do estado em extensão territorial e concentra a maior população indígena de Rondônia. A economia gira em torno do comércio de fronteira — o Brasil exporta para o lado boliviano itens como arroz, carne, frango e material de construção, enquanto brasileiros atravessam o rio para comprar vestuário e eletrônicos mais baratos em Guayaramerín —, além de serviços públicos, agropecuária e do legado histórico da Estrada de Ferro Madeira-Mamoré (EFMM), construída no ciclo da borracha. A travessia hoje é feita por balsas e lanchas, mas está em construção uma ponte binacional sobre o rio Mamoré, obra federal que deve mudar a logística da região.',

  mercado:
    'Por ser uma cidade média e isolada no extremo oeste do estado, distante cerca de 330 km de Porto Velho pela BR-425, o mercado fitness de Guajará-Mirim é enxuto, formado por academias de bairro e estúdios de treino funcional. A procura por personal trainer tende a se concentrar em quem busca treino adaptado ao calor amazônico constante e em quem usa a orla do rio Mamoré e os espaços públicos revitalizados como opção de atividade ao ar livre.',

  bairrosNobres: ['Centro', 'Triângulo', 'Liberdade', 'Planalto'],
  bairrosPopulares: ['Santa Luzia', 'Jardim das Esmeraldas', 'Tamandaré', 'Cascalheira'],

  parques: [
    {
      nome: 'Museu Histórico Municipal de Guajará-Mirim',
      descricao:
        'Instalado no prédio da antiga estação ferroviária, ponto final (km 366) da Estrada de Ferro Madeira-Mamoré, guarda o acervo do trem que ligava Porto Velho a Guajará-Mirim durante o ciclo da borracha; o complexo ferroviário passa por obras de restauração.',
    },
    {
      nome: 'Orla do rio Mamoré',
      descricao:
        'Faixa à beira-rio na altura do Centro, de frente para a cidade boliviana de Guayaramerín, é o principal espaço público para caminhada e convivência ao ar livre, com vista para a travessia de balsas e lanchas entre os dois países.',
    },
    {
      nome: 'Entorno da Reserva Biológica do Guaporé',
      descricao:
        'A REBIO do Guaporé, uma das maiores unidades de conservação de categoria biológica do país e sítio Ramsar, fica na área de influência do polo turístico que reúne Guajará-Mirim a outros municípios da bacia do rio Guaporé; por ser reserva biológica, não tem visitação pública regular, mas marca a vocação de ecoturismo da região.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária formal é limitada; caminhada e corrida acontecem principalmente na orla do rio Mamoré e nas avenidas do Centro e de bairros próximos, como Triângulo e Liberdade.',

  clima:
    'O clima é equatorial úmido, quente o ano todo, com temperatura média em torno de 26 °C e chuvas concentradas entre outubro e abril.',
  climaTreino:
    'O calor e a umidade constantes recomendam treinar bem cedo pela manhã ou ao entardecer, com hidratação reforçada; nos meses mais chuvosos, ambientes cobertos ou climatizados são alternativa mais segura para manter a rotina.',

  mobilidade:
    'O acesso terrestre a Guajará-Mirim é feito pela BR-425, que liga o município a Porto Velho em cerca de 330 km. A fronteira com a Bolívia é cruzada por balsas e lanchas que atravessam o rio Mamoré até Guayaramerín; está autorizada a construção de uma ponte binacional sobre o rio, com financiamento federal, que deve ampliar a integração logística entre os dois países. O transporte urbano local é feito por ônibus e mototáxis.',

  corridas: [
    {
      nome: 'Corrida Mulher Maravilha',
      descricao:
        'Prova de rua realizada em Guajará-Mirim com apoio de emenda parlamentar, voltada à integração comunitária e ao incentivo à prática esportiva; já teve pelo menos duas edições.',
    },
    {
      nome: 'Corrida Detran em Movimento',
      descricao:
        'Evento local que une corrida de rua, promoção da saúde e conscientização no trânsito, realizado em parceria com o Detran-RO.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina eventos comunitários de corrida de rua com o motocross, que tem Guajará-Mirim como sede de etapas do campeonato regional norte, além do uso cotidiano da orla do Mamoré para caminhada.',
  academias:
    'A oferta é formada por academias de bairro e estúdios de treino funcional, como opções de musculação tradicional e treino funcional distribuídas principalmente pelo Centro e por bairros próximos.',

  destaquesFitness: [
    'Cidade de fronteira com a Bolívia, separada de Guayaramerín pelo rio Mamoré, com travessia por balsas e lanchas.',
    'Legado histórico da Estrada de Ferro Madeira-Mamoré, com museu na antiga estação final da ferrovia.',
    'Orla do rio Mamoré como principal espaço público de caminhada ao ar livre.',
    'Clima equatorial quente o ano todo, que exige treino em horários mais amenos e hidratação constante.',
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
    'Cidade de fronteira marcada pelo rio Mamoré e pela história da Estrada de Ferro Madeira-Mamoré, Guajará-Mirim pede um treino ajustado ao calor equatorial constante. Um personal trainer ajuda a definir os melhores horários, aproveitar a orla do rio como espaço de treino ao ar livre e manter a constância apesar da oferta mais enxuta de academias.',

  vizinhas: ['porto-velho-ro'],

  fontes: [
    { nome: 'IBGE Cidades — Guajará-Mirim', url: 'https://cidades.ibge.gov.br/brasil/ro/guajara-mirim/panorama' },
    { nome: 'Prefeitura de Guajará-Mirim', url: 'https://guajaramirim.ro.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
