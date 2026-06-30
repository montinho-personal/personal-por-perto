import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'penedo-al',
  nome: 'Penedo',
  uf: 'AL',
  estado: 'Alagoas',
  estadoSlug: 'alagoas',
  regiao: 'Nordeste',
  gentilico: 'penedense',
  tipo: 'cidade',

  populacao: 58647,
  populacaoAno: 2022,
  idhm: 0.632,
  idhmClasse: 'médio',
  altitudeM: 16,

  resumoEconomico:
    'Cidade mais antiga de Alagoas, Penedo fica no extremo sul do estado, às margens do Rio São Francisco, na divisa com Sergipe. Sua economia combina turismo histórico e fluvial, comércio regional que atende todo o baixo São Francisco, serviços, pesca e agropecuária. O conjunto colonial e barroco tombado pelo IPHAN, com igrejas, sobrados e ruas de pedra, é o principal ativo da cidade, que em 2023 entrou na Rede de Cidades Criativas da UNESCO na categoria Cinema.',

  mercado:
    'O mercado de personal trainers em Penedo é típico de cidade média do interior nordestino: concentrado em academias de bairro e estúdios de musculação e funcional, com clientela formada por moradores, comerciantes e servidores públicos. A orla do Velho Chico e o calçadão do centro histórico funcionam como espaços naturais de treino ao ar livre, e a demanda tende a crescer com a movimentação turística ligada ao Velho Chico.',

  bairrosNobres: ['Centro Histórico', 'Santa Luzia', 'Dom Constantino', 'Oiteiro'],
  bairrosPopulares: ['Barro Vermelho', 'Santo Antônio', 'Senhor do Bonfim', 'Vermelho'],

  parques: [
    {
      nome: 'Orla do Barro Vermelho',
      descricao:
        'Calçadão à beira do Rio São Francisco no bairro mais antigo da cidade, com vista para os barcos de pesca ancorados no Velho Chico — espaço usado para caminhada e corrida leve.',
    },
    {
      nome: 'Orla e cais do Centro Histórico',
      descricao:
        'Passeio à margem do rio em frente aos sobrados e igrejas tombados, ponto de encontro para caminhadas no fim da tarde e cenário da vida ativa ao ar livre.',
    },
    {
      nome: 'Aterro da Lagoa do Oiteiro',
      descricao:
        'Área pública com infraestrutura esportiva de bairro, incluindo quadra, campo society e espaço de lazer, voltada à prática de atividade física da população local.',
    },
  ],
  ciclovias:
    'Penedo não dispõe de uma malha cicloviária estruturada; o deslocamento por bicicleta acontece sobretudo pelas vias do centro e pela orla, em ritmo de cidade pequena.',

  clima:
    'O clima é tropical quente (tipo Aw na classificação de Köppen), característico do baixo São Francisco alagoano, com média anual em torno de 25 °C a 26 °C e chuvas concentradas no outono e inverno.',
  climaTreino:
    'Com calor o ano todo e proximidade do rio, o treino ao ar livre rende mais no início da manhã e no fim da tarde, sempre com hidratação reforçada. A orla à beira do Velho Chico dá sombra parcial e ameniza o calor na hora do exercício.',

  mobilidade:
    'O acesso rodoviário se dá pela AL-101 (Litoral Sul), que conecta Penedo a Maceió, e pela BR-101, que corta o estado mais a oeste. Quem chega de Sergipe atravessa o Rio São Francisco pela travessia de balsa entre Penedo e Neópolis (SE). O transporte interno é feito por ônibus e mototáxis, em escala de cidade média.',

  corridas: [
    {
      nome: 'Corridas e passeios no calendário municipal',
      descricao:
        'Penedo realiza corridas e caminhadas pontuais ligadas ao calendário cívico e cultural da cidade, geralmente com largada e percurso pela orla e pelo centro histórico, às margens do São Francisco.',
    },
    {
      nome: 'Treinos de rua na orla do Velho Chico',
      descricao:
        'Grupos de corrida e caminhada se reúnem na orla e no calçadão do centro, aproveitando o trajeto plano à beira do rio nos horários mais frescos do dia.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Penedo gira em torno do futebol, da pesca e das atividades à beira do rio. A orla e o centro histórico concentram caminhadas e corridas leves, enquanto academias de bairro sustentam a musculação e o treino funcional ao longo do ano.',
  academias:
    'A cidade conta com academias de bairro e estúdios de musculação e funcional distribuídos pelo centro e pelas áreas residenciais, que se somam à orla do rio como espaço de treino ao ar livre.',

  destaquesFitness: [
    'Orla do Rio São Francisco com calçadões planos para caminhada e corrida.',
    'Clima quente e estável o ano todo, favorável ao treino ao ar livre cedo ou no fim da tarde.',
    'Centro histórico tombado que funciona como cenário para a vida ativa à beira do rio.',
    'Estrutura de academias de bairro voltada a moradores, comerciantes e servidores.',
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
    'Cidade histórica e ribeirinha, Penedo une o charme do conjunto colonial à beleza do Velho Chico, oferecendo um cenário agradável para treinar ao ar livre. Um personal trainer ajuda a transformar a orla do São Francisco e as academias de bairro em um plano consistente, ajustado ao clima quente e ao seu objetivo.',

  vizinhas: ['arapiraca-al', 'maceio-al'],

  fontes: [
    { nome: 'IBGE Cidades — Penedo', url: 'https://cidades.ibge.gov.br/brasil/al/penedo/panorama' },
    { nome: 'Prefeitura de Penedo', url: 'https://www.penedo.al.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
