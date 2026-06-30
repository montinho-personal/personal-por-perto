import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'esperanca-pb',
  nome: 'Esperança',
  uf: 'PB',
  estado: 'Paraíba',
  estadoSlug: 'paraiba',
  regiao: 'Nordeste',
  gentilico: 'esperancense',
  tipo: 'cidade',

  populacao: 31231,
  populacaoAno: 2022,
  idhm: 0.623,
  idhmClasse: 'médio',
  altitudeM: 631,

  resumoEconomico:
    'Situada no Brejo paraibano, a cerca de 26 km de Campina Grande, Esperança é conhecida como a "Suíça Paraibana" pelo clima ameno de altitude. A economia se apoia na agricultura familiar — a região é uma das mais fortes do estado na produção de fava, além de banana, hortaliças e outras culturas — e no comércio e nos serviços ligados à feira livre, tradicional ponto de escoamento da produção rural. O artesanato, em especial a renda, e o turismo de eventos completam a base econômica do município.',

  mercado:
    'Como cidade de porte médio do interior nordestino, Esperança tem um mercado fitness mais enxuto, formado por academias locais de musculação e treino funcional. A procura por personal trainers tende a vir de quem busca acompanhamento individualizado e de quem aproveita o clima ameno e as áreas abertas da cidade para treinar ao ar livre, com a proximidade de Campina Grande ampliando o acesso a profissionais e estrutura.',

  bairrosNobres: ['Centro', 'Distrito Industrial', 'Salgado', 'Cuités'],
  bairrosPopulares: ['Massabielle', 'São Miguel', 'Pintado', 'Bela Vista'],

  parques: [
    {
      nome: 'Praças do Centro',
      descricao:
        'O núcleo central reúne as praças mais movimentadas da cidade, usadas para caminhada, encontros e atividades ao ar livre, especialmente no fim da tarde, quando o clima ameno do brejo favorece o exercício.',
    },
    {
      nome: 'Feira livre e entorno',
      descricao:
        'Tradicional na rotina esperancense, a feira movimenta o centro e o comércio; as vias do entorno e os trajetos da área urbana servem de percurso para quem caminha e corre pela cidade.',
    },
    {
      nome: 'Entorno rural do brejo',
      descricao:
        'A zona rural e as estradas vicinais em meio às áreas de cultivo e à vegetação de transição do brejo oferecem percursos de caminhada, corrida e pedal em contato com a natureza e o relevo de altitude.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta, típica de uma cidade do interior; boa parte do pedal e da corrida acontece nas vias urbanas e nas estradas vicinais que cortam a zona rural do brejo.',

  clima:
    'Por estar a cerca de 631 metros de altitude, no Brejo paraibano, Esperança tem clima mais ameno que o do agreste seco em volta — o que rendeu o apelido de "Suíça Paraibana". As médias térmicas são amenas para o Nordeste, com temperaturas mais frescas no inverno (de meados do ano), quando é comum o tempo nublado e úmido, e calor moderado no verão.',
  climaTreino:
    'O clima ameno de altitude é um trunfo para treinar ao ar livre boa parte do ano, com manhãs e fins de tarde agradáveis. Nos meses mais úmidos e nublados, vale ter alternativa coberta para os dias de chuva; no restante do ano, as temperaturas mais frescas tornam a corrida e a caminhada confortáveis.',

  mobilidade:
    'A cidade se conecta a Campina Grande e à capital, João Pessoa, principalmente pela BR-104, eixo rodoviário que liga o agreste e o brejo paraibanos. A curta distância de Campina Grande facilita o deslocamento para estudo, trabalho e acesso a serviços, e o transporte intermunicipal é feito sobretudo por ônibus e vans.',

  corridas: [
    {
      nome: 'Corridas de rua locais',
      descricao:
        'Esperança recebe provas de corrida de rua ligadas a campanhas e datas comemorativas, que reúnem atletas da cidade e da região e reforçam o hábito da corrida no clima ameno do brejo.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva esperancense combina o uso das praças centrais para caminhada, a corrida pelas vias da cidade e pelas estradas do brejo, e o calendário de festas populares — com forte tradição de São João — que movimenta a vida ao ar livre. O clima ameno é um convite natural para a atividade física.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior paraibano.',

  destaquesFitness: [
    'Conhecida como a "Suíça Paraibana", com clima ameno de altitude (cerca de 631 m) favorável ao treino ao ar livre.',
    'Praças do centro e estradas do brejo como espaços de caminhada, corrida e pedal.',
    'Proximidade de Campina Grande (cerca de 26 km, pela BR-104), que amplia o acesso a estrutura e profissionais.',
    'Economia de base rural, com agricultura familiar forte e a feira livre como ponto central da cidade.',
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
    'Cidade de clima ameno no Brejo paraibano, Esperança reúne praças, ruas tranquilas e o entorno rural como cenário para o treino ao ar livre. Um personal trainer ajuda a aproveitar o clima favorável, organizar a rotina e manter a constância — seja na musculação, no funcional ou na corrida pela "Suíça Paraibana".',

  vizinhas: ['campina-grande-pb', 'guarabira-pb'],

  fontes: [
    { nome: 'IBGE Cidades — Esperança', url: 'https://cidades.ibge.gov.br/brasil/pb/esperanca/panorama' },
    { nome: 'Prefeitura de Esperança', url: 'https://www.esperanca.pb.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
