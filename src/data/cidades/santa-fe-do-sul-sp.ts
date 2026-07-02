import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santa-fe-do-sul-sp',
  nome: 'Santa Fé do Sul',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'santa-fé-sulense',
  tipo: 'cidade',

  populacao: 34794,
  populacaoAno: 2022,
  idhm: 0.784,
  idhmClasse: 'alto',
  altitudeM: 370,

  resumoEconomico:
    'Conhecida como a "Capital dos Grandes Lagos" do noroeste paulista, Santa Fé do Sul fica às margens da represa de Ilha Solteira, na região formada pelo encontro dos rios Paraná, Grande, Paranaíba e Tietê. A economia combina piscicultura (o município figura entre os maiores produtores de peixe da América Latina), pesca esportiva do tucunaré, agroturismo e turismo rural, além de indústria de autopeças, comércio e serviços que atendem toda a microrregião. Elevada à categoria de Estância Turística em 2003, a cidade vive boa parte do ano do fluxo de turistas atraídos pela orla e pelos ranchos à beira do lago.',

  mercado:
    'O mercado fitness de Santa Fé do Sul é o de uma cidade média do interior, com academias locais como a Skyfit e estúdios de treino funcional concentrados no Centro e em bairros próximos. A vocação turística e a cultura da pesca esportiva e do agroturismo criam demanda por preparo físico específico — de quem passa o dia em ranchos e barcos a quem participa das corridas de rua tradicionais da cidade —, sustentando a procura por personal trainers tanto para moradores fixos quanto para veranistas.',

  bairrosNobres: ['Centro', 'Residencial Monte Líbano', 'Residencial Monte Carlo', 'Jardim Alvorada'],
  bairrosPopulares: ['Cohab Beira Rio', 'Jardim Mangará', 'São Francisco', 'Vila Rute'],

  parques: [
    {
      nome: 'Parque Ecoturístico das Águas Claras',
      descricao:
        'Principal espaço de lazer da cidade, a cerca de 9 km do Centro, à beira de um braço da represa de Ilha Solteira. Reúne pequena praia, quiosques, área de camping e estrutura para pesca esportiva e passeios náuticos, sendo também usado para caminhada e atividade ao ar livre.',
    },
    {
      nome: 'Orla e ranchos da represa de Ilha Solteira',
      descricao:
        'A orla do lago concentra centenas de ranchos, muitos deles alugados por turistas, além de embarcações para pesca do tucunaré — o símbolo esportivo da cidade. O calçadão e os trechos planos à beira-lago são aproveitados para caminhada e corrida.',
    },
    {
      nome: 'Parque Ecológico Governador Mário Covas',
      descricao:
        'Área verde urbana com trilha e vegetação preservada, uma das opções de contato com a natureza dentro da malha da cidade, complementando os espaços à beira da represa para quem busca treinar ao ar livre.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta, concentrada em trechos de avenidas centrais e no acesso à orla; boa parte do pedal e da corrida acontece nas vias planas do Centro e nos arredores do Parque das Águas Claras, sobretudo no evento anual "Pedalando Santa Fé".',

  clima:
    'O clima é tropical, com verões muito quentes e úmidos e invernos mais secos, característico do extremo noroeste paulista. As temperaturas máximas costumam ultrapassar os 35 °C em diversos dias do ano, entre os índices mais altos do estado de São Paulo.',
  climaTreino:
    'O calor forte pede treino nos horários mais amenos — início da manhã ou fim de tarde — e hidratação reforçada; nos dias mais quentes, ambientes climatizados ou o treino à beira da represa nas primeiras horas do dia são as opções mais seguras.',

  mobilidade:
    'O principal acesso rodoviário é pela Rodovia Euclides da Cunha (SP-320), que liga o município à região de São José do Rio Preto e ao restante do estado. O transporte interno é feito majoritariamente por carro, moto e ônibus urbano, com uma rodoviária que atende linhas regionais e intermunicipais para o entorno dos Grandes Lagos.',

  corridas: [
    {
      nome: 'Corrida Pedestre do Trabalhador',
      descricao:
        'Tradicional prova de 5 km realizada todo dia 1º de maio, com largada e chegada na Avenida Paulo Nunes da Silva. Organizada pela Prefeitura por meio da Secretaria de Esportes e Lazer, já reuniu cerca de 350 atletas da cidade e da região em suas edições mais recentes.',
    },
    {
      nome: 'Santa Fé do Sul Running',
      descricao:
        'Prova de rua mais recente do calendário local, com primeira edição realizada em dezembro, ampliando as opções de corrida organizada na cidade ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva da cidade gira em torno da represa: pesca esportiva do tucunaré, passeios náuticos e caminhada na orla dividem espaço com o calendário de corridas de rua, como a Corrida do Trabalhador e o passeio ciclístico "Pedalando Santa Fé", realizados no feriado de 1º de maio.',
  academias:
    'A oferta de academias é compatível com uma cidade média do interior, com unidades de rede como a Skyfit e academias locais de musculação e treino funcional espalhadas pelo Centro e bairros vizinhos.',

  destaquesFitness: [
    '"Capital dos Grandes Lagos": orla da represa de Ilha Solteira como espaço natural de caminhada e corrida.',
    'Economia ligada à piscicultura e à pesca esportiva do tucunaré, que atrai turistas o ano todo.',
    'Calor intenso, entre os mais altos do estado de São Paulo, exigindo planejamento de horário e hidratação no treino.',
    'Calendário esportivo tradicional, com a Corrida do Trabalhador e o passeio ciclístico de 1º de maio.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Cidade turística às margens da represa de Ilha Solteira, Santa Fé do Sul combina calor intenso, orla movimentada e uma rotina marcada pela pesca esportiva e pelo agroturismo. Um personal trainer ajuda a organizar o treino em torno desse ritmo, aproveitando a orla e os horários mais frescos do dia para manter a constância apesar do calor.',

  vizinhas: ['votuporanga-sp', 'fernandopolis-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Santa Fé do Sul', url: 'https://cidades.ibge.gov.br/brasil/sp/santa-fe-do-sul/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura da Estância Turística de Santa Fé do Sul', url: 'https://www.santafedosul.sp.gov.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
