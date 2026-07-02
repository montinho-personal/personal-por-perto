import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itamaraca-pe',
  nome: 'Itamaracá',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'itamaracaense',
  tipo: 'cidade',

  populacao: 24540,
  populacaoAno: 2022,
  idhm: 0.653,
  idhmClasse: 'médio',
  pibPerCapita: 12155.46,
  pibPerCapitaAno: 2023,

  resumoEconomico:
    'Oficialmente Ilha de Itamaracá, o município ocupa uma ilha separada do continente pelo Canal de Santa Cruz, a cerca de 40 km de Recife. Depois do ciclo histórico da cana-de-açúcar em engenhos e da cultura do coco, a economia hoje gira em torno do turismo de praia, da pesca artesanal e do comércio local, com Pilar — sede do município e antiga vila de pescadores — concentrando serviços, bares e restaurantes. A ilha é um dos destinos de fim de semana mais procurados pela Região Metropolitana do Recife, puxado pelo Forte Orange (fortificação holandesa do século XVII) e por praias como Pilar, Jaguaribe e Sossego.',

  mercado:
    'O mercado de personal trainer em Itamaracá é pequeno e sazonal, acompanhando o fluxo de turistas e de moradores de segunda residência que enchem a ilha em fins de semana, feriados e alta temporada. A procura tende a se concentrar em treino funcional ao ar livre e em preparo físico para atividades aquáticas, com poucas academias fixas voltadas majoritariamente à população residente.',

  bairrosNobres: ['Praia do Forte', 'Bairro Novo', 'Sossego', 'Enseada dos Golfinhos'],
  bairrosPopulares: ['Pilar', 'Jaguaribe', 'Vila Velha', 'Forte Orange'],

  parques: [
    {
      nome: 'Orla de Pilar',
      descricao:
        'Faixa de praia mais movimentada da ilha, com calçadão e comércio na sede do município — ponto de encontro para caminhada e corrida junto ao mar, mais cheio em fins de semana.',
    },
    {
      nome: 'Praia de Jaguaribe',
      descricao:
        'Praia de areia branca e mar calmo com barreira de corais que aparece na maré baixa, boa opção para caminhada na faixa de areia e para atividades na água em dias de maré favorável.',
    },
    {
      nome: 'Entorno do Forte Orange',
      descricao:
        'Fortificação holandesa do século XVII na ponta sul da ilha; a orla ao redor, próxima também ao Centro de Preservação e Pesquisa do Peixe-Boi Marinho, serve de cenário para caminhada com vista para o Canal de Santa Cruz.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é praticamente inexistente; o deslocamento e o treino ao ar livre acontecem nas vias estreitas da ilha e nas faixas de areia das praias, sem estrutura dedicada.',

  clima:
    'O clima é tropical quente e úmido, com temperatura média anual em torno de 26 °C e pouca variação entre estações. As chuvas se concentram no outono e inverno (de março a agosto), enquanto a primavera e o verão são mais secos.',
  climaTreino:
    'O calor e a umidade constantes favorecem treinos ao ar livre no início da manhã ou no fim da tarde, com hidratação reforçada; a brisa litorânea ajuda no conforto térmico junto à orla, mas o sol forte no meio do dia pede cautela.',

  mobilidade:
    'O acesso à ilha é feito pela PE-01, que atravessa a ponte sobre o Canal de Santa Cruz a partir de Itapissuma, conectando Itamaracá ao restante da Região Metropolitana do Recife — a capital fica a cerca de 40 km de distância. O transporte é dominado por veículos particulares e vans/ônibus intermunicipais; dentro da ilha, os deslocamentos entre Pilar, Jaguaribe e as demais praias são curtos, mas as vias internas são simples.',

  corridas: [],
  culturaEsportiva:
    'A vida esportiva da ilha gira em torno da praia: caminhada e corrida na orla de Pilar e Jaguaribe, natação e outros esportes aquáticos aproveitando o mar calmo e os recifes, além da pesca artesanal, atividade tradicional entre os moradores. Praças e espaços públicos com aparelhos de ginástica são pontuais, concentrados na sede do município.',
  academias:
    'A oferta de academias é reduzida e concentrada em Pilar, com estúdios pequenos de musculação e treino funcional; parte da demanda por atividade física é atendida por aulas ao ar livre na praia e por profissionais autônomos que atendem moradores e visitantes.',

  destaquesFitness: [
    'Ilha cercada por praias como Pilar, Jaguaribe e Sossego, propícias a caminhada, corrida e esportes aquáticos.',
    'Forte Orange e o Canal de Santa Cruz emolduram treinos ao ar livre na ponta sul da ilha.',
    'Destino de fim de semana da Região Metropolitana do Recife, com mercado fitness pequeno e sazonal.',
    'Acesso único pela ponte da PE-01 a partir de Itapissuma, a cerca de 40 km de Recife.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 220,
    mensalMax: 600,
    onlineMin: 110,
    onlineMax: 330,
  },

  conclusao:
    'Cercada de praias e com o Forte Orange como cartão-postal, Itamaracá pede um treino que aproveite a orla e o clima tropical o ano todo, respeitando o calor e a rotina sazonal de uma ilha vivida entre a pesca, o turismo e os fins de semana da Região Metropolitana do Recife. Um personal trainer ajuda a organizar essa rotina com segurança, seja para moradores fixos, seja para quem passa temporadas na ilha.',

  vizinhas: ['igarassu-pe', 'goiana-pe', 'abreu-e-lima-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Ilha de Itamaracá', url: 'https://cidades.ibge.gov.br/brasil/pe/ilha-de-itamaraca/panorama' },
    { nome: 'Prefeitura Municipal da Ilha de Itamaracá', url: 'https://ilhadeitamaraca.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
