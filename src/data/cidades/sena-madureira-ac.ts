import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sena-madureira-ac',
  nome: 'Sena Madureira',
  uf: 'AC',
  estado: 'Acre',
  estadoSlug: 'acre',
  regiao: 'Norte',
  gentilico: 'sena-madureirense',
  tipo: 'cidade',

  populacao: 41343,
  populacaoAno: 2022,
  idhm: 0.603,
  idhmClasse: 'médio',
  altitudeM: 150,

  resumoEconomico:
    'No vale do rio Iaco, no interior do Acre, Sena Madureira foi importante no ciclo da borracha e hoje é reconhecida como Capital Nacional da Castanha do Brasil. A economia combina extrativismo (com destaque para a castanha, além de látex e madeira manejada), agropecuária e o comércio que atende a um vasto território rural de comunidades ribeirinhas espalhadas pelos rios Iaco, Macauã, Caeté e Purus. A cidade funciona como polo de coleta, beneficiamento e escoamento dos produtos da floresta.',

  mercado:
    'Por ser uma cidade do interior amazônico, relativamente distante da capital, o mercado fitness de Sena Madureira é enxuto e concentrado em academias locais de musculação e treino funcional. A procura por personal trainers aparece sobretudo entre quem busca acompanhamento mais próximo para manter constância e treinar com segurança no calor e na umidade típicos da região.',

  bairrosNobres: ['Centro', 'Cristo Libertador', 'Bosque', 'Jardim Primavera'],
  bairrosPopulares: ['Bom Sucesso', 'São Francisco (2º Distrito)', 'Eldorado', 'Praça da Bandeira'],

  parques: [
    {
      nome: 'Margens do Rio Iaco',
      descricao:
        'O rio Iaco corta a cidade e separa a sede do 2º Distrito; suas margens e a área da Carnaubeira são os espaços mais usados para caminhada e treino ao ar livre, com debate local sobre a criação de uma orla estruturada.',
    },
    {
      nome: 'Encontro dos rios Iaco e Macauã',
      descricao:
        'Perto da zona urbana, a confluência do Iaco com afluentes como o Macauã e o Caeté marca a paisagem ribeirinha da cidade e o ritmo de cheias e vazantes que organiza a vida na beira-rio.',
    },
    {
      nome: 'Praças e vias centrais',
      descricao:
        'Na ausência de grandes parques urbanos, as praças e as ruas pavimentadas do Centro concentram a caminhada e a atividade física ao ar livre, sobretudo no começo da manhã e no fim da tarde.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é praticamente inexistente; o pedal e a corrida acontecem nas próprias vias urbanas, especialmente nas ruas pavimentadas da área central e nos acessos ligados à BR-364.',

  clima:
    'O clima é equatorial, quente e úmido o ano todo, com temperaturas médias em torno de 26 °C e umidade do ar elevada. O ano se divide entre uma estação chuvosa intensa (o inverno amazônico, de novembro a abril) e um período mais seco no meio do ano, quando pode ocorrer a friagem, queda passageira de temperatura provocada por massas de ar frio vindas do Sul.',
  climaTreino:
    'O calor somado à alta umidade torna o esforço mais cansativo e a transpiração menos eficiente, o que pede treino bem cedo ou no fim da tarde, hidratação reforçada e atenção ao ritmo. Nos períodos de chuva forte, ambientes cobertos são a opção mais previsível, e os meses mais secos favorecem as atividades ao ar livre.',

  mobilidade:
    'Sena Madureira liga-se a Rio Branco pela BR-364 (cerca de 143 km a leste), eixo que estrutura o acesso à capital e o escoamento da produção. Internamente, o deslocamento é feito sobretudo por motos, carros e transporte fluvial, com o rio Iaco conectando a sede ao 2º Distrito e às comunidades ribeirinhas do interior.',

  corridas: [
    {
      nome: 'Eventos esportivos municipais',
      descricao:
        'A cidade realiza atividades esportivas pontuais ligadas a datas comemorativas e a instituições locais, como torneios e ações em escolas e no campus do IFAC.',
    },
    {
      nome: 'Caminhadas e práticas comunitárias',
      descricao:
        'Caminhadas e atividades ao ar livre acontecem de forma informal nas vias centrais e nas margens do rio, refletindo uma cultura esportiva mais comunitária do que voltada a grandes provas.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é marcada pelo futebol, pelas caminhadas nas vias centrais e pelo uso das margens do rio Iaco para lazer e atividade física, em sintonia com o ritmo de uma cidade do interior amazônico cercada pela floresta.',
  academias:
    'A oferta se resume a academias locais de musculação e treino funcional, distribuídas pela área central e pelos bairros residenciais, com porte compatível com uma cidade pequena do interior do Norte.',

  destaquesFitness: [
    'Capital Nacional da Castanha do Brasil, no vale do rio Iaco, no interior do Acre.',
    'Margens do rio Iaco como principal espaço para caminhada e treino ao ar livre.',
    'Clima equatorial quente e úmido, que exige cuidado com horário e hidratação no treino.',
    'Cidade ligada a Rio Branco pela BR-364, com economia de extrativismo, agropecuária e comércio.',
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
    'Cidade ribeirinha e quente do interior acreano, Sena Madureira pede um treino adaptado ao calor e à umidade, que aproveite as margens do rio e as vias centrais como espaço de atividade. Um personal trainer ajuda a definir os melhores horários, ajustar a intensidade ao clima equatorial e manter a constância ao longo das estações de chuva e de estiagem.',

  vizinhas: ['rio-branco-ac', 'cruzeiro-do-sul-ac'],

  fontes: [
    { nome: 'IBGE Cidades — Sena Madureira', url: 'https://cidades.ibge.gov.br/brasil/ac/sena-madureira/panorama' },
    { nome: 'Prefeitura de Sena Madureira', url: 'https://www.senamadureira.ac.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
