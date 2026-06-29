import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'codo-ma',
  nome: 'Codó',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'codoense',
  tipo: 'cidade',

  populacao: 114269,
  populacaoAno: 2022,
  idhm: 0.595,
  idhmClasse: 'baixo',
  altitudeM: 47,

  resumoEconomico:
    'Codó é um dos maiores municípios do Leste Maranhense, no vale do Rio Itapecuru, a cerca de 300 km de São Luís e 170 km de Teresina (PI). A economia se apoia no comércio varejista que abastece os municípios vizinhos, na administração pública e na agropecuária — com produção de arroz, mandioca, cana-de-açúcar, milho e o avanço recente da soja —, além do extrativismo do babaçu, marcado pela presença histórica das quebradeiras de coco. A cidade carrega ainda forte identidade afro-brasileira, sendo conhecida pela grande concentração de terreiros e pela religiosidade do terecô.',

  mercado:
    'O mercado de personal trainers em Codó é incipiente e de perfil popular, próprio de uma cidade média do interior maranhense. A oferta se concentra em academias de bairro e no atendimento domiciliar, com clientela sensível a preço. O calor o ano inteiro pesa na rotina e valoriza o profissional que organiza horários, ajusta a carga e reforça a hidratação, aproveitando as primeiras horas da manhã e o fim da tarde.',

  bairrosNobres: ['Centro', 'Codó Novo', 'São Vicente Palloti', 'Santo Antônio'],
  bairrosPopulares: ['Trizidela', 'São Benedito', 'São Sebastião', 'Vila Verde'],

  parques: [
    {
      nome: 'Orla do Rio Itapecuru',
      descricao:
        'O Rio Itapecuru corta a cidade e separa bairros como Trizidela e São Benedito, ligados por ponte. Suas margens e as vias de beira-rio servem de espaço para caminhada e corrida nos horários mais frescos do dia.',
    },
    {
      nome: 'Praças do Centro',
      descricao:
        'As praças centrais reúnem caminhada, alongamento e treinos funcionais ao ar livre no comecinho da manhã e no fim da tarde, funcionando como pontos de apoio para personal e grupos.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada; a bicicleta é meio de transporte comum no dia a dia, mas o ciclismo se apoia sobretudo em vias compartilhadas dentro da cidade.',

  clima:
    'O clima é tropical quente do Leste Maranhense, com estação chuvosa e estiagem bem definidas. O calor é intenso na maior parte do ano, com temperaturas que passam dos 35 °C nos meses mais secos e umidade alta no período das chuvas.',
  climaTreino:
    'O calor forte concentra o treino ao ar livre no início da manhã e no fim da tarde, com hidratação reforçada e atenção à desidratação; nas horas centrais, ambientes cobertos e ventilados são a opção mais segura.',

  mobilidade:
    'O acesso principal se dá pela BR-316, que cruza o Maranhão de leste a oeste e liga Codó a Caxias, Timon e Teresina. A cidade também é cortada pela ferrovia São Luís–Teresina, eixo histórico de escoamento de cargas como combustíveis, cimento e gusa. O deslocamento interno é feito sobretudo por ônibus, mototáxi e bicicleta.',

  corridas: [
    {
      nome: 'Corridas de rua locais',
      descricao:
        'A cidade tem provas e ações de corrida de rua promovidas pelo poder público e por grupos esportivos, normalmente em datas comemorativas e com largadas cedo por causa do calor.',
    },
    {
      nome: 'Calendário regional',
      descricao:
        'Pela proximidade com Caxias, Timon e Teresina, muitos corredores codoenses complementam a agenda participando de provas de rua realizadas nessas cidades vizinhas.',
    },
  ],
  culturaEsportiva:
    'A cultura de movimento em Codó combina o futebol e as caminhadas em praças e na beira do Itapecuru com a forte tradição cultural afro-brasileira: o tambor de crioula, batido em datas como o 13 de maio, e a Festa do Divino mobilizam a cidade. Essa vivência de corpo, ritmo e resistência convive com o crescente interesse por academias e treino orientado.',
  academias:
    'A oferta é formada principalmente por academias de bairro e estúdios menores, complementada pelo atendimento domiciliar, atendendo uma demanda em crescimento numa cidade de perfil popular.',

  destaquesFitness: [
    'Cidade média do Leste Maranhense às margens do Rio Itapecuru, polo de comércio regional.',
    'Orla do Itapecuru e praças do Centro como principais espaços de treino ao ar livre.',
    'Mercado de academias de bairro e atendimento domiciliar, com clientela sensível a preço.',
    'Calor intenso o ano todo exige periodização de horários e foco em hidratação.',
  ],

  precos: {
    avulsaMin: 40,
    avulsaMax: 90,
    mensalMin: 220,
    mensalMax: 600,
    onlineMin: 100,
    onlineMax: 320,
  },

  conclusao:
    'Polo de comércio do Leste Maranhense às margens do Itapecuru, Codó tem um mercado fitness de perfil popular, apoiado em academias de bairro, atendimento domiciliar e nos espaços abertos da cidade. Num clima quente o ano inteiro, um personal trainer faz diferença para organizar horários, ajustar a carga e a hidratação e ajudar o morador a manter uma rotina de treino segura e constante.',

  vizinhas: ['caxias-ma', 'timon-ma', 'teresina-pi'],

  fontes: [
    { nome: 'IBGE Cidades — Codó', url: 'https://cidades.ibge.gov.br/brasil/ma/codo/panorama' },
    { nome: 'Prefeitura de Codó', url: 'https://www.codo.ma.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/411520' },
  ],
  atualizadoEm: '2026-06-29',
};
