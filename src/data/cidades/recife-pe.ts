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

  vizinhas: ['joao-pessoa-pb', 'natal-rn', 'salvador-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Recife', url: 'https://cidades.ibge.gov.br/brasil/pe/recife/panorama' },
    { nome: 'Prefeitura do Recife', url: 'https://www2.recife.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
