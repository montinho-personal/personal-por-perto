import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'paracatu-mg',
  nome: 'Paracatu',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'paracatuense',
  tipo: 'cidade',

  populacao: 94023,
  populacaoAno: 2022,
  idhm: 0.744,
  idhmClasse: 'alto',
  altitudeM: 707,

  resumoEconomico:
    'No noroeste mineiro, às margens da BR-040 e a cerca de 220 km de Brasília, Paracatu nasceu da corrida do ouro no século XVIII e mantém essa vocação: abriga a Mina Morro do Ouro, operada pela canadense Kinross, uma das maiores minas de ouro a céu aberto do país. Em torno da mineração, a cidade firmou-se como polo regional de agronegócio — com forte produção de grãos no Cerrado irrigado — e de comércio e serviços que atendem a toda a microrregião. O Centro Histórico, tombado pelo IPHAN, convive com bairros novos e uma economia diversificada que sustenta poder de compra acima da média do interior.',

  mercado:
    'O mercado fitness em Paracatu é o de uma cidade média mineira em expansão: academias de bairro e algumas unidades maiores no entorno do centro atendem a um público fortalecido pela renda da mineração e do agronegócio. A demanda por personal trainer cresce entre profissionais da Kinross e do setor de serviços, além de quem busca acompanhamento mais individualizado do que o oferecido em rede.',

  bairrosNobres: ['Bela Vista', 'Cidade Jardim', 'JK', 'Vista Alegre'],
  bairrosPopulares: ['Paracatuzinho', 'Santana dos Alegres', 'Alto da Colina', 'Amoreiras'],

  parques: [
    {
      nome: 'Centro Histórico',
      descricao:
        'Conjunto urbano tombado pelo IPHAN, com cerca de 230 imóveis preservados dos séculos XVIII e XIX. Suas ruas e largos formam o trajeto preferido para caminhadas e treinos leves ao amanhecer, combinando atividade física com o patrimônio colonial da cidade.',
    },
    {
      nome: 'Parque Natural Municipal Santuário dos Buritis',
      descricao:
        'Área natural de Cerrado preservada no perímetro urbano, com veredas e buritis, voltada à conservação e ao contato com a vegetação típica da região — opção de ambiente verde para caminhada e lazer ao ar livre.',
    },
    {
      nome: 'Praças e espaços de lazer dos bairros',
      descricao:
        'A cidade vem ampliando praças com academias ao ar livre e pistas de caminhada em bairros como Paracatuzinho, Bela Vista, Vista Alegre e Cidade Jardim, criando pontos gratuitos de treino próximos das residências.',
    },
  ],
  ciclovias:
    'A malha cicloviária ainda é incipiente e concentrada em trechos de avenidas principais; a maior parte do ciclismo e da corrida acontece em vias urbanas de tráfego mais calmo e nas praças de bairro.',

  clima:
    'O clima é tropical com estações bem marcadas, típico do Cerrado: verão quente e chuvoso (de outubro a março) e inverno seco, com baixa umidade e amplitude térmica entre dia e noite. A cidade fica a cerca de 707 m de altitude.',
  climaTreino:
    'O treino ao ar livre é viável o ano todo, mas a estação seca (de maio a setembro) exige atenção à baixa umidade e à poeira, com reforço de hidratação. No verão, o calor pede priorizar o início da manhã ou o fim da tarde.',

  mobilidade:
    'A cidade é cortada pela BR-040, eixo que liga Brasília a Belo Horizonte e explica boa parte de sua logística e do fluxo regional. Por estar a cerca de 220 km do Distrito Federal, Paracatu tem forte integração com o mercado do Centro-Oeste. O deslocamento interno é predominantemente por carro e moto, com distâncias curtas entre os bairros.',

  corridas: [
    {
      nome: 'Etapa Paracatu — Circuito Distrital de Corridas e Mountainbike',
      descricao:
        'Etapa local de um circuito regional que reúne provas de corrida de rua e mountain bike, movimentando a comunidade esportiva da cidade e do noroeste mineiro.',
    },
    {
      nome: 'Corridas de rua promovidas no calendário municipal',
      descricao:
        'Provas pontuais organizadas na cidade para incentivar o esporte e o estilo de vida saudável, com percursos urbanos que passam por avenidas e pelo entorno do Centro Histórico.',
    },
  ],
  culturaEsportiva:
    'Paracatu tem uma cultura esportiva ligada à vida de cidade média: caminhadas matinais no Centro Histórico, grupos de corrida e ciclismo e eventos regionais como o circuito distrital. A combinação de relevo suave, clima de Cerrado e ruas tranquilas favorece o treino ao ar livre durante boa parte do ano.',
  academias:
    'A oferta concentra academias de bairro e unidades de musculação no entorno do centro, complementadas por estúdios e profissionais de treino funcional e personalizado que atendem a um público em crescimento.',

  destaquesFitness: [
    'Centro Histórico tombado pelo IPHAN como cenário para caminhadas e treinos leves ao amanhecer.',
    'Praças de bairro com academias ao ar livre ampliando os pontos gratuitos de treino.',
    'Renda da mineração (Kinross) e do agronegócio sustenta demanda por acompanhamento individualizado.',
    'Clima de Cerrado e relevo suave favorecem corrida e ciclismo na maior parte do ano.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Entre o Centro Histórico tombado, as praças de bairro e um clima de Cerrado favorável ao ar livre, Paracatu oferece um bom ambiente para treinar com orientação. Um personal trainer ajuda quem vive a rotina da mineração e do agronegócio a manter constância, ajustando o treino ao clima local e aos espaços disponíveis na cidade.',

  vizinhas: ['patos-de-minas-mg', 'uberlandia-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Paracatu', url: 'https://cidades.ibge.gov.br/brasil/mg/paracatu/panorama' },
    { nome: 'Prefeitura de Paracatu', url: 'https://www.paracatu.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
