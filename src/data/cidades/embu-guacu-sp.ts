import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'embu-guacu-sp',
  nome: 'Embu-Guaçu',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'embuguaçuense',
  tipo: 'cidade',

  populacao: 63129,
  populacaoAno: 2022,
  idhm: 0.749,
  idhmClasse: 'alto',
  altitudeM: 808,

  resumoEconomico:
    'Embu-Guaçu fica no extremo sudoeste da Região Metropolitana de São Paulo e tem a totalidade do seu território dentro de Área de Proteção aos Mananciais, integrando o cinturão verde da Grande São Paulo e a Reserva da Biosfera da Mata Atlântica. O rio Embu-Guaçu abastece a represa Guarapiranga, o que impõe restrições à ocupação e preserva grandes áreas rurais e de vegetação. A economia combina atividade rural (produção de hortaliças, mandioca, batata-doce e frutas), comércio e serviços locais, e um forte perfil de cidade-dormitório, com muitos moradores que trabalham em municípios vizinhos e na capital. O turismo rural, as chácaras e as paisagens de mata e represa complementam a vocação econômica.',

  mercado:
    'O mercado fitness de Embu-Guaçu é de porte pequeno e voltado ao atendimento local, concentrado no Centro e nos bairros mais adensados, com academias de musculação e treino funcional de bairro. Por ser cidade-dormitório, boa parte da rotina de treino da população acontece em horários alternativos e nos fins de semana, o que abre espaço para personal trainers que atuam com atendimento domiciliar, em condomínios e chácaras, e com acompanhamento online para quem trabalha fora do município.',

  bairrosNobres: ['Centro', 'Chácara Flórida', 'Santa Fé', 'Recanto da Lagoa Grande'],
  bairrosPopulares: ['Cipó-Guaçu', 'Congonhal', 'Lagoa Grande', 'Santa Terezinha'],

  parques: [
    {
      nome: 'Entorno da represa Guarapiranga',
      descricao:
        'O território é banhado por braços e afluentes que alimentam a represa Guarapiranga; as estradas rurais e margens em área de mananciais são usadas para caminhada, pedal e corrida em meio a paisagens de mata e água.',
    },
    {
      nome: 'Área rural e chácaras do cinturão verde',
      descricao:
        'A zona rural, com estradas de terra, plantações e trechos de Mata Atlântica preservada, oferece percursos de baixo tráfego procurados por corredores e ciclistas que buscam contato com a natureza.',
    },
    {
      nome: 'Praças e vias do Centro',
      descricao:
        'A região central, em torno da praça Ivan Braga e das avenidas principais, concentra os espaços urbanos mais usados para caminhada e atividade física do dia a dia.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária urbana é limitada; grande parte do pedal acontece em estradas rurais e vias de bairro de menor movimento, favorecidas pela paisagem de mananciais e pela ocupação menos adensada.',

  clima:
    'O clima é subtropical de altitude, ameno em relação à capital por conta dos cerca de 800 metros de altitude e da grande cobertura vegetal. Os verões são quentes e chuvosos e os invernos são frescos, com noites frias; a umidade é alta durante boa parte do ano, influenciada pela mata e pela proximidade da represa.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre na maior parte do ano, com atenção às chuvas concentradas no verão e às manhãs frias e úmidas do inverno. Início da manhã e fim da tarde são horários confortáveis; em dias chuvosos, ambientes cobertos garantem a constância.',

  mobilidade:
    'A ligação de Embu-Guaçu com a Região Metropolitana se dá principalmente pela rodovia SP-234 (Estrada da Ligação / Salvador Leone) em direção a Itapecerica da Serra, com acesso à rodovia Régis Bittencourt (BR-116) rumo à capital e ao Sul do país. O transporte público é feito por linhas de ônibus municipais e intermunicipais da EMTU que conectam a cidade aos municípios vizinhos, sustentando o forte fluxo pendular de cidade-dormitório.',

  corridas: [
    {
      nome: 'Embu-Guaçu Run',
      descricao:
        'Prova de corrida de rua realizada no município, com percursos que passam pela área central e reúnem corredores locais e da região sudoeste da Grande São Paulo.',
    },
    {
      nome: 'Corrida da Independência de Embu-Guaçu',
      descricao:
        'Evento associado às comemorações de 7 de setembro, com percursos de 5 km e 10 km e caminhada pelas ruas do centro da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva une a prática urbana de caminhada e corrida no Centro ao uso das estradas rurais e do entorno da represa para pedal e atividades ao ar livre, num cenário marcado pela Mata Atlântica e pela vida de cidade-dormitório, com muita gente treinando cedo ou nos fins de semana.',
  academias:
    'A oferta é formada por academias de bairro de musculação e treino funcional, concentradas no Centro e nas áreas residenciais mais adensadas, com porte compatível com um município de perfil interiorano dentro da metrópole.',

  destaquesFitness: [
    'Território 100% em Área de Proteção aos Mananciais, no cinturão verde da Grande São Paulo, com clima ameno de altitude.',
    'Estradas rurais e entorno da represa Guarapiranga como espaço para corrida e pedal em meio à Mata Atlântica.',
    'Perfil de cidade-dormitório da RM de São Paulo, com forte demanda por horários alternativos e atendimento domiciliar e online.',
    'Provas de rua locais, como a Embu-Guaçu Run e a Corrida da Independência, movimentando a comunidade de corredores.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade de clima ameno, cercada por mata e mananciais e com rotina típica de cidade-dormitório, Embu-Guaçu pede um treino que se encaixe em horários flexíveis e aproveite as estradas rurais e a paisagem da represa. Um personal trainer ajuda a organizar essa rotina, escolher os melhores horários e manter a constância entre o deslocamento para a capital e a vida no município.',

  vizinhas: ['itapecerica-da-serra-sp', 'embu-das-artes-sp', 'cotia-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Embu-Guaçu', url: 'https://cidades.ibge.gov.br/brasil/sp/embu-guacu/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Embu-Guaçu', url: 'https://www.embuguacu.sp.gov.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
