import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'recife-pe',
  nome: 'Recife',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'recifense',
  tipo: 'cidade',

  populacao: 1488920,
  populacaoAno: 2022,
  idhm: 0.772,
  idhmClasse: 'alto',
  altitudeM: 4,

  resumoEconomico:
    'Capital de Pernambuco e uma das maiores cidades do Nordeste, Recife tem economia de serviços, comércio e saúde, com destaque para o Porto Digital — um dos maiores parques tecnológicos do país, que reúne centenas de empresas e milhares de profissionais de tecnologia. Cortada por rios e pontes, a "Veneza Brasileira" tem na orla de Boa Viagem o seu grande corredor de atividade física.',

  mercado:
    'O mercado fitness recifense é movido pela forte cultura de orla — Boa Viagem concentra corrida e ciclismo — e pela presença de redes como Smart Fit (Torre, Shopping Recife) e Bodytech (Shopping Recife, em Boa Viagem). O apelo de estética e praia, típico do litoral nordestino, somado ao público de classe média do polo tecnológico, sustenta uma demanda consistente por personal trainers.',

  bairrosNobres: ['Boa Viagem', 'Casa Forte', 'Jaqueira', 'Espinheiro'],
  bairrosPopulares: ['Casa Amarela', 'Afogados', 'Ibura', 'Várzea'],

  parques: [
    {
      nome: 'Orla de Boa Viagem',
      descricao:
        'Cerca de 7 km de orla atlântica com calçadão arborizado por coqueiros, usado o dia inteiro para caminhada, corrida e ciclismo — o principal corredor de treino da cidade.',
    },
    {
      nome: 'Parque da Jaqueira',
      descricao:
        'Cerca de 7 hectares de área verde com pista, ciclovia e trilhas — um clássico para corrida e treino arborizado, fugindo do sol mais forte.',
    },
    {
      nome: 'Parque Dona Lindu (Boa Viagem)',
      descricao:
        'Espaço público à beira-mar projetado por Oscar Niemeyer, usado para atividades físicas e culturais.',
    },
  ],
  ciclovias:
    'A ciclovia da Avenida Boa Viagem tem cerca de 8 km, ligando Pina, Boa Viagem e Piedade, complementada por ciclofaixas de lazer aos domingos.',

  clima:
    'O clima é tropical, quente e úmido, com forte estação chuvosa no outono e no inverno e temperaturas entre 23 °C e 29 °C.',
  climaTreino:
    'A umidade alta e as chuvas pedem flexibilidade de horários; a orla, mais ventilada, ajuda no conforto térmico. Início da manhã e fim de tarde seguem como as melhores janelas para o treino ao ar livre.',

  mobilidade:
    'O Metrô do Recife (Metrorec) atende Boa Viagem e outras regiões, complementado por uma ampla rede de ônibus. As rodovias BR-101 e BR-232 são os principais acessos, e o trânsito na orla costuma ser intenso.',

  corridas: [
    {
      nome: 'Corrida das Pontes do Recife',
      descricao:
        'Uma das provas mais icônicas de Pernambuco, cruzando as pontes históricas do Recife Antigo — tradição no calendário da cidade.',
    },
    {
      nome: 'Circuito Pernambuco Running',
      descricao:
        'Provas regulares de 5 km a 21 km, incluindo corridas noturnas no Recife Antigo, sustentando uma cena de corrida consolidada.',
    },
  ],
  culturaEsportiva:
    'Recife une tradição de futebol e cultura local (do frevo ao Recife Antigo) a uma cena de corrida de rua consolidada, com a Corrida das Pontes como símbolo, e a uma forte cultura de orla em Boa Viagem.',
  academias:
    'A oferta reúne redes como Smart Fit e Bodytech, bem instaladas em shoppings e bairros nobres, além de estúdios de funcional e crossfit que atendem o público de Boa Viagem, Casa Forte e do entorno do Porto Digital.',
  academiasProximas: [
    { nome: 'Bodytech', detalhe: 'no Shopping Recife, em Boa Viagem' },
    { nome: 'Smart Fit', detalhe: 'unidades na Torre, no Shopping Recife e em outros bairros' },
    { nome: 'Estúdios de funcional e crossfit', detalhe: 'concentrados em Boa Viagem e Casa Forte' },
    { nome: 'Estrutura pública do Parque da Jaqueira', detalhe: 'pista e ciclovia gratuitas e arborizadas' },
  ],

  destaquesFitness: [
    'Orla de Boa Viagem (cerca de 7 km): o principal corredor de treino da cidade.',
    'Ciclovia de cerca de 8 km favorece ciclismo e corrida com segurança.',
    'Parques urbanos arborizados (Jaqueira, Dona Lindu) para treino fora do sol forte.',
    'Polo tecnológico (Porto Digital) sustenta público de classe média com demanda por personal.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 170,
    mensalMin: 360,
    mensalMax: 980,
    onlineMin: 180,
    onlineMax: 450,
  },

  conclusao:
    'Da orla de Boa Viagem aos parques arborizados, Recife oferece bons cenários para treinar mesmo com o calor. Um personal trainer ajuda a montar uma rotina que respeite o clima e o seu objetivo — seja na corrida à beira-mar, seja na musculação com ar-condicionado nos dias mais abafados.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender no Recife?',
      resposta:
        'Os polos são: a orla de Boa Viagem, com seus 7 km de calçadão e a ciclovia, para treinos de corrida e funcional; as academias e estúdios de Boa Viagem, Casa Forte e Espinheiro; o atendimento em casa e em condomínio, forte nos prédios da orla; e um nicho crescente de treino corporativo ligado ao Porto Digital, com sessões antes ou depois do expediente. O Parque da Jaqueira é a alternativa arborizada para fugir do sol forte.',
    },
    {
      pergunta: 'Como manter o treino na estação chuvosa do Recife?',
      resposta:
        'De abril a julho, as chuvas do inverno pernambucano derrubam qualquer plano que dependa só da orla. A solução é ter a semana montada em dois cenários desde o início: sessões ao ar livre nas janelas de tempo firme e treino em academia ou em casa nos dias de chuva — mesmo estímulo, local diferente. Quem treina com personal não decide na hora; o plano B já existe, e a constância atravessa o inverno sem buraco.',
    },
    {
      pergunta: 'Há acompanhamento no Recife para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para o Recife, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio, casa ou orla), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['joao-pessoa-pb', 'natal-rn', 'salvador-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Recife', url: 'https://cidades.ibge.gov.br/brasil/pe/recife/panorama' },
    { nome: 'Prefeitura do Recife', url: 'https://www2.recife.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  capaArte: {
    src: '/capas-cidade/recife-pe.webp',
    alt:
      'Personal trainer no Recife (PE) em arte que une treino de força e cartões-postais reais da cidade — as esculturas da Oficina Francisco Brennand, o Marco Zero do Recife Antigo e a orla de arranha-céus de Boa Viagem — Personal por Perto',
    legenda:
      'Treino personalizado no Recife: um plano feito para o seu corpo e a sua rotina, com acompanhamento profissional na cidade e região.',
  },
  atualizadoEm: '2026-07-24',
};
