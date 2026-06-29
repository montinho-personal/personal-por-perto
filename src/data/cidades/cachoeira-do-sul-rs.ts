import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cachoeira-do-sul-rs',
  nome: 'Cachoeira do Sul',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'cachoeirense',
  tipo: 'cidade',

  populacao: 80070,
  populacaoAno: 2022,
  idhm: 0.742,
  idhmClasse: 'alto',
  altitudeM: 26,

  resumoEconomico:
    'Conhecida como "Capital Nacional do Arroz", Cachoeira do Sul fica na Depressão Central gaúcha, às margens do rio Jacuí. A economia gira em torno da agropecuária — com forte produção de arroz irrigado e expressivo cultivo de noz-pecã — somada ao comércio, aos serviços e à educação. A presença de campi universitários, como o da UFSM e da ULBRA, ajuda a movimentar a vida da cidade.',

  mercado:
    'Cidade média do centro do estado, Cachoeira do Sul tem oferta de academias e estúdios concentrada no Centro e nos bairros de maior movimento, atendendo tanto o público local quanto os estudantes dos campi universitários. O personal trainer encontra demanda entre quem busca acompanhamento individualizado fora do formato tradicional de academia.',

  bairrosNobres: ['Centro', 'Santo Antônio', 'Bom Retiro', 'Universitário'],
  bairrosPopulares: ['Barro Vermelho', 'Passo da Areia', 'Fátima', 'Soares'],

  parques: [
    {
      nome: 'Parque da Fenarroz',
      descricao:
        'Amplo parque de exposições que sedia a Fenarroz; fora das feiras, suas áreas e vias são usadas para caminhada, corrida e treino ao ar livre.',
    },
    {
      nome: 'Orla do rio Jacuí',
      descricao:
        'A faixa às margens do rio Jacuí, principal referência geográfica da cidade, é um espaço natural procurado para caminhadas e atividades ao ar livre.',
    },
    {
      nome: 'Praças e logradouros do Centro',
      descricao:
        'As praças arborizadas da área central oferecem espaços abertos para caminhada e exercícios no dia a dia.',
    },
  ],
  ciclovias:
    'A extensão da rede cicloviária urbana não é divulgada em fonte oficial; o relevo plano da Depressão Central favorece o uso de bicicleta nos deslocamentos.',

  clima:
    'O clima é subtropical, característico da Depressão Central gaúcha, com verões quentes e invernos frios típicos do Rio Grande do Sul.',
  climaTreino:
    'O calor do verão pede treinos nos horários mais frescos da manhã e do fim de tarde, enquanto o frio do inverno favorece o treino indoor. Primavera e outono são as melhores estações para atividades ao ar livre.',

  mobilidade:
    'Cachoeira do Sul fica às margens da BR-153 (Transbrasiliana), que ao sul conecta com a BR-290 (entre Uruguaiana e Porto Alegre) e ao norte com a rota em direção a Santa Maria e Santa Cruz do Sul. A capital, Porto Alegre, está a cerca de 196 km. Não há sistema de trens urbanos.',

  corridas: [
    {
      nome: 'Circuito de Corridas de Cachoeira do Sul',
      descricao:
        'Circuito com etapas ao longo do ano, incluindo prova no campus da UFSM em Cachoeira do Sul, que reúne corredores da cidade e da região.',
    },
    {
      nome: 'Corridas rústicas locais',
      descricao:
        'Provas rústicas realizadas com regularidade pelas ruas da cidade e no Parque da Fenarroz, parte da rotina de quem corre na região.',
    },
  ],
  culturaEsportiva:
    'A cidade tem uma cena de corrida de rua ativa, com circuitos e provas rústicas ao longo do ano, e conta com o público universitário dos campi locais para movimentar a vida esportiva.',
  academias:
    'A oferta reúne academias e estúdios no Centro e nos bairros de maior movimento, com o Parque da Fenarroz e a orla do rio Jacuí como espaços ao ar livre para treinar.',

  destaquesFitness: [
    'Parque da Fenarroz: amplo espaço para caminhada, corrida e treino ao ar livre.',
    'Orla do rio Jacuí: cenário natural para caminhadas e atividades ao ar livre.',
    'Público universitário dos campi da UFSM e da ULBRA.',
    'Circuito de corridas e provas rústicas ao longo do ano.',
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
    'Capital Nacional do Arroz na Depressão Central gaúcha, Cachoeira do Sul une o cenário do rio Jacuí, o Parque da Fenarroz e um público universitário ativo. Um personal trainer ajuda a manter a constância o ano todo, ajustando o treino ao calor do verão e ao frio do inverno gaúcho.',

  vizinhas: ['santa-maria-rs', 'santa-cruz-do-sul-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Cachoeira do Sul', url: 'https://cidades.ibge.gov.br/brasil/rs/cachoeira-do-sul/panorama' },
    { nome: 'Prefeitura de Cachoeira do Sul', url: 'https://www.cachoeiradosul.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
