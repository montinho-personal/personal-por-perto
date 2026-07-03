import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'costa-rica-ms',
  nome: 'Costa Rica',
  uf: 'MS',
  estado: 'Mato Grosso do Sul',
  estadoSlug: 'mato-grosso-do-sul',
  regiao: 'Centro-Oeste',
  gentilico: 'costa-riquense',
  tipo: 'cidade',

  populacao: 26037,
  populacaoAno: 2022,
  idhm: 0.710,
  idhmClasse: 'alto',
  altitudeM: 638,

  resumoEconomico:
    'Costa Rica é um dos polos do agronegócio no norte de Mato Grosso do Sul, em uma região de Cerrado dedicada à produção de grãos e à pecuária de corte. O município nasceu do loteamento da antiga Fazenda Imbirussú e hoje figura entre os mais ricos do estado em valor de produção agropecuária: ocupou a 6ª colocação no ranking estadual do agronegócio em 2023 e chegou à 2ª posição em produtividade de soja de Mato Grosso do Sul, com médias acima de 76 sacas por hectare. Além da soja, milho e algodão puxam a safra, ao lado da criação de gado de corte, movimentando o comércio e os serviços da cidade.',

  mercado:
    'Por ser uma cidade média do interior, com a economia girando em torno da safra e da pecuária, o mercado fitness de Costa Rica é mais enxuto do que o dos grandes centros do estado, concentrado em academias locais que oferecem musculação, treino funcional e modalidades como CrossFit. A renda do agronegócio e a cultura de esportes de aventura da cidade tendem a alimentar a procura por personal trainers, tanto para treino presencial quanto para preparo físico voltado a corridas, pedaladas e provas de aventura realizadas no município.',

  bairrosNobres: ['Centro', 'Jardim Imbirussu', 'Santos Dumont', 'Residencial Figueira'],
  bairrosPopulares: ['Sonho Meu', 'Jardim Afonso', 'Vila Nunes', 'Parque Industrial'],

  parques: [
    {
      nome: 'Parque Natural Municipal Salto do Sucuriú',
      descricao:
        'A cerca de 2 km do centro, reúne uma queda d\'água de 64 metros no rio Sucuriú, piscinas naturais, trilhas autoguiadas e estruturas de arvorismo, rapel e tirolesa em meio à vegetação nativa do Cerrado — um dos pontos de treino ao ar livre e de turismo de aventura da cidade.',
    },
    {
      nome: 'Centro de Eventos Ramez Tebet',
      descricao:
        'Principal equipamento esportivo do município, recebe corridas de rua, provas de mountain bike, futsal, vôlei e já sediou etapa do Rally dos Sertões, funcionando como ponto de encontro da comunidade esportiva local.',
    },
    {
      nome: 'Chapada dos Baús',
      descricao:
        'Formação que chega a 890 metros de altitude, o ponto mais alto do município, e marca a paisagem de Cerrado do entorno — parte do relevo que sustenta a vocação de Costa Rica para os esportes de aventura.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária formal é limitada, e boa parte do pedal acontece nas vias urbanas e nas estradas rurais que cortam as fazendas do entorno — cenário reforçado pela tradição da cidade em provas de mountain bike.',

  clima:
    'O clima é tropical, típico do Cerrado, com temperatura média anual em torno de 29 °C. O ano se divide entre uma estação chuvosa, de setembro a maio, e uma estação seca, de junho a setembro; a altitude da sede (638 m), que sobe até 890 m na Chapada dos Baús, ameniza um pouco o calor em comparação com cidades mais baixas do estado.',
  climaTreino:
    'O calor e a forte insolação do Cerrado pedem treino nas primeiras horas da manhã ou no fim da tarde, com hidratação reforçada; a estação seca costuma ser mais confortável para atividades ao ar livre, enquanto a estação chuvosa exige atenção a temporais e trilhas escorregadias.',

  mobilidade:
    'O acesso a Costa Rica a partir de Campo Grande, a cerca de 339 km, é feito pela BR-163 até a BR-060, com entrada no município pela MS-306 (via Chapadão do Sul) ou pela MS-316 (via Paraíso das Águas). O transporte urbano é por ônibus e veículos particulares, e as rodovias da região concentram o escoamento da soja, do milho e do algodão produzidos nas fazendas do entorno.',

  corridas: [
    {
      nome: 'Circuito Movimente-se Tour',
      descricao:
        'Prova de corrida de rua realizada no Centro de Eventos Ramez Tebet, com percurso de 6,3 km dividido em categorias por idade; costuma acontecer junto com etapas de mountain bike da Copa Ed Adventure.',
    },
  ],
  culturaEsportiva:
    'Costa Rica é conhecida regionalmente como a Capital Estadual do Algodão e dos Esportes de Aventura, título ligado à sua paisagem de Cerrado e à tradição em provas de mountain bike, corrida de rua e turismo de aventura no Parque do Salto do Sucuriú. A cidade também já recebeu etapa do Rally dos Sertões e sedia competições de futsal e vôlei no Centro de Eventos Ramez Tebet, formando um calendário esportivo ativo para uma cidade de porte médio.',
  academias:
    'A oferta é formada por academias locais, com destaque para redes como o Espaço Fitness, que mantém duas unidades na cidade oferecendo musculação, treino funcional, CrossFit, jump e zumba — porte de mercado compatível com um município de cerca de 26 mil habitantes.',

  destaquesFitness: [
    'Polo do agronegócio no Cerrado: 6º município mais rico em agronegócio de Mato Grosso do Sul e 2º em produtividade de soja do estado.',
    'Conhecida como Capital Estadual do Algodão e dos Esportes de Aventura, com tradição em provas de mountain bike e corrida.',
    'Parque Natural Municipal Salto do Sucuriú, com cachoeira de 64 m e trilhas em meio ao Cerrado, a poucos km do centro.',
    'Clima de Cerrado com estação seca (jun.–set.) e chuvosa (set.–mai.), e altitude que varia de 638 m na sede a 890 m na Chapada dos Baús.',
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
    'Cidade de Cerrado movida pelo agronegócio, Costa Rica combina o ritmo da safra com uma cultura esportiva surpreendente para o seu tamanho, apoiada no Parque do Salto do Sucuriú, no Centro de Eventos Ramez Tebet e nas provas de corrida e mountain bike do calendário local. Um personal trainer ajuda a estruturar o treino considerando o calor do Cerrado, os melhores horários do dia e a preparação física para as provas de rua e de aventura da região.',

  vizinhas: ['campo-grande-ms', 'coxim-ms', 'paranaiba-ms'],

  fontes: [
    { nome: 'IBGE Cidades — Costa Rica', url: 'https://cidades.ibge.gov.br/brasil/ms/costa-rica/panorama' },
    { nome: 'Prefeitura de Costa Rica — MS', url: 'https://www.costarica.ms.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
