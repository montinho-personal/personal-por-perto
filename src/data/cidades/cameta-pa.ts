import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cameta-pa',
  nome: 'Cametá',
  uf: 'PA',
  estado: 'Pará',
  estadoSlug: 'para',
  regiao: 'Norte',
  gentilico: 'cametaense',
  tipo: 'cidade',

  populacao: 134184,
  populacaoAno: 2022,
  idhm: 0.577,
  idhmClasse: 'baixo',
  altitudeM: 24,

  resumoEconomico:
    'Cidade histórica do Baixo Tocantins, fundada em 1635 e uma das mais antigas da Amazônia, Cametá se estende pela margem esquerda do rio Tocantins, no nordeste paraense. A economia é fortemente ribeirinha: extrativismo do açaí (o município está entre os maiores produtores do estado), pesca artesanal — com destaque para o mapará — e comércio, atividades que estruturam a vida nas ilhas e nas comunidades às margens do rio.',

  mercado:
    'O mercado de personal trainers é incipiente e típico de cidade média do interior paraense, concentrado em academias do centro e no atendimento individualizado. A vida ativa acontece muito ao ar livre, na orla do Tocantins e nas praias de rio, o que abre espaço para acompanhamento de caminhada, corrida e treino funcional além das paredes da academia.',

  bairrosNobres: ['Centro', 'São Benedito', 'Pedreira', 'Aldeia'],
  bairrosPopulares: ['Bela Vista', 'Cidade Nova', 'Brasília', 'Santa Clara'],

  parques: [
    {
      nome: 'Orla do Tocantins',
      descricao:
        'A beira-rio é o principal espaço de vida ativa da cidade: usada para caminhada e corrida no fim da tarde, com vista para o Tocantins e para as ilhas, e movimento de barcos e ribeirinhos.',
    },
    {
      nome: 'Praia do Carmo e praias de rio',
      descricao:
        'No verão amazônico (estiagem), bancos de areia formam praias fluviais como a do Carmo, do Roque e da Aldeia — pontos de lazer e atividade ao ar livre à beira do Tocantins.',
    },
    {
      nome: 'Centro histórico',
      descricao:
        'O conjunto de ruas e praças coloniais, herança dos mais de três séculos da cidade, oferece percursos planos e arborizados para caminhada nas primeiras horas do dia.',
    },
  ],
  ciclovias:
    'Cametá não dispõe de malha cicloviária estruturada; o deslocamento por bicicleta acontece pelas vias do centro e pela orla, e o transporte fluvial complementa a circulação entre as ilhas e comunidades.',

  clima:
    'O clima é equatorial úmido, característico do nordeste paraense: quente o ano todo, com temperaturas médias elevadas, umidade alta e duas estações marcadas — o inverno chuvoso (de dezembro a maio) e o verão de estiagem (de junho a novembro), quando surgem as praias de rio.',
  climaTreino:
    'O calor e a umidade pedem cautela: o treino ao ar livre rende mais no início da manhã ou no fim da tarde, com hidratação reforçada. Na estação chuvosa, vale ter um plano B em ambiente coberto.',

  mobilidade:
    'O acesso rodoviário se dá pela PA-156, que liga Cametá a Tucuruí e à malha estadual, com travessia de balsa no trecho fluvial (Cametá–Carapajó). O transporte de passageiros e de carga depende fortemente da rede fluvial do Tocantins — barcos e lanchas conectam a sede às ilhas, às comunidades ribeirinhas e a Belém.',

  corridas: [
    {
      nome: 'Corridas e caminhadas na orla do Tocantins',
      descricao:
        'A beira-rio concentra a prática de corrida e caminhada da cidade, especialmente no fim da tarde, quando o calor afrouxa e o movimento da orla aumenta.',
    },
    {
      nome: 'Atividades no calendário cultural',
      descricao:
        'Festas tradicionais como o Carnaval de Cametá e celebrações religiosas mobilizam a cidade e, com elas, costumam surgir caminhadas e atividades esportivas comunitárias.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é ribeirinha e comunitária: futebol de campo e de várzea, futsal e esportes aquáticos ligados ao rio convivem com a forte identidade cultural local, do carimbó e do banguê ao Carnaval. A vida ativa se faz, sobretudo, ao ar livre, nos horários mais frescos do dia.',
  academias:
    'A oferta reúne academias de bairro e do centro, voltadas à musculação e à ginástica, complementadas pela estrutura natural da orla e das praias de rio para treino ao ar livre.',

  destaquesFitness: [
    'Orla do Tocantins como principal espaço de caminhada e corrida.',
    'Praias de rio (do Carmo, do Roque, da Aldeia) no verão amazônico de estiagem.',
    'Cidade histórica e plana, com centro propício à caminhada matinal.',
    'Treino ao ar livre o ano todo, condicionado ao calor e à umidade equatoriais.',
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
    'Cidade histórica do Baixo Tocantins, marcada pelo açaí, pela pesca e pela cultura ribeirinha, Cametá oferece da orla do rio às praias de areia do verão amazônico. Um personal trainer ajuda a montar uma rotina que respeite o calor equatorial e aproveite os espaços ao ar livre — da caminhada na beira-rio ao treino funcional nos horários mais frescos do dia.',

  vizinhas: ['abaetetuba-pa', 'belem-pa', 'tucurui-pa'],

  fontes: [
    { nome: 'IBGE Cidades — Cametá', url: 'https://cidades.ibge.gov.br/brasil/pa/cameta/panorama' },
    { nome: 'Prefeitura de Cametá', url: 'https://prefeituradecameta.pa.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
