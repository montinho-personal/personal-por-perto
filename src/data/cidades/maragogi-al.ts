import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'maragogi-al',
  nome: 'Maragogi',
  uf: 'AL',
  estado: 'Alagoas',
  estadoSlug: 'alagoas',
  regiao: 'Nordeste',
  gentilico: 'maragogiense',
  tipo: 'cidade',

  populacao: 32174,
  populacaoAno: 2022,
  idhm: 0.574,
  idhmClasse: 'baixo',

  resumoEconomico:
    'Maragogi fica no litoral norte de Alagoas, dentro da Área de Proteção Ambiental Costa dos Corais, a maior unidade de conservação marinha federal do litoral brasileiro. Apelidada de "Caribe Brasileiro" por suas piscinas naturais de água turquesa formadas sobre os recifes de coral (as Galés), a cidade recebe cerca de 260 mil visitantes por ano e é a única do estado com classificação categoria A no Mapa do Turismo Brasileiro. Além do turismo, que movimenta pousadas, passeios náuticos e gastronomia, a economia local se apoia na pesca artesanal e na agricultura familiar, com produção voltada ao consumo interno e ao comércio de rua da cidade.',

  mercado:
    'O mercado fitness de Maragogi é pequeno e concentrado em poucas academias, refletindo o porte de uma cidade litorânea de porte médio-pequeno cuja economia gira em torno do turismo sazonal. A procura por personal trainer tende a vir tanto de moradores que buscam treino regular quanto de turistas e proprietários de pousadas que passam temporadas na cidade, muitas vezes combinando o exercício com o uso da praia e das piscinas naturais como cenário de treino ao ar livre.',

  bairrosNobres: ['Centro', 'Barra Grande', 'Peroba'],
  bairrosPopulares: ['São Bento', 'Colônia', 'Litorâneo'],

  parques: [
    {
      nome: 'Praça de Eventos (Avenida Senador Rui Palmeira)',
      descricao:
        'Principal espaço público do centro de Maragogi, ponto de largada de corridas de rua e caminhadas locais, além de palco de eventos da cidade.',
    },
    {
      nome: 'Orla das praias do litoral norte',
      descricao:
        'A faixa de praias que vai de Burgalhau e Barra Grande até Antunes, Xaréu e Peroba forma um cenário natural para caminhada e corrida à beira-mar, sempre condicionado às marés.',
    },
    {
      nome: 'Praia de São Bento e Camacho',
      descricao:
        'No trecho sul da cidade, praias mais tranquilas que também servem de espaço para atividade física ao ar livre fora da alta temporada turística.',
    },
  ],
  ciclovias:
    'Maragogi não conta com infraestrutura cicloviária consolidada; o deslocamento a pé e de bicicleta acontece principalmente pela orla e pelas ruas do centro, compartilhando espaço com o tráfego de veículos.',

  clima:
    'O clima é tropical, quente e úmido, com temperatura média em torno de 25 °C e variação anual entre 22 °C e 31 °C. As chuvas se concentram no outono e inverno (de abril a agosto), enquanto os meses de primavera e verão são mais secos e concentram a alta temporada turística.',
  climaTreino:
    'O calor e a umidade constantes pedem treino ao ar livre nas primeiras horas da manhã ou no fim da tarde, com hidratação reforçada; a exposição solar intensa na orla exige proteção extra em treinos na praia.',

  mobilidade:
    'O acesso principal a Maragogi é pela rodovia AL-101 Norte, que liga a cidade a Maceió e, ao norte, faz fronteira com Pernambuco pela PE-060, sendo o trajeto mais usado por quem vem de Recife. Está em andamento um projeto de duplicação da AL-101 Norte, com nova via de acesso que deve tirar o tráfego pesado do centro da cidade. O transporte urbano é feito por ônibus e vans, e há um aeroporto regional anunciado para operação de aeronaves de pequeno e médio porte.',

  corridas: [
    {
      nome: 'Corrida da Gente',
      descricao:
        'Evento promovido pela Prefeitura de Maragogi com percurso de 5 km, saindo da Praça de Eventos, com inscrição solidária em alimentos.',
    },
    {
      nome: 'Guardiões da Costa dos Corais',
      descricao:
        'Corrida organizada pelo 6º Batalhão da Polícia Militar em Maragogi, com percursos de 5 km e 10 km, reunindo centenas de atletas na região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Maragogi é marcada pelo uso da orla e da Praça de Eventos para corridas e caminhadas, pelo turismo náutico ligado às piscinas naturais e pela realização de provas de corrida de rua promovidas pela prefeitura e por instituições locais, em uma cidade cujo cotidiano é fortemente ligado ao mar.',
  academias:
    'A oferta de academias é limitada a poucos estabelecimentos de musculação e treino funcional no centro e em bairros próximos, compatível com uma cidade de porte pequeno-médio cuja estrutura urbana ainda se desenvolve em torno do turismo.',

  destaquesFitness: [
    'Piscinas naturais das Galés e litoral de águas turquesa, conhecido como "Caribe Brasileiro".',
    'Orla de praias como Barra Grande, Peroba e São Bento, usada para caminhada e corrida ao ar livre.',
    'Clima tropical quente e úmido, que exige treino nos horários mais amenos do dia.',
    'Mercado fitness pequeno, ligado ao turismo sazonal e à vida litorânea da cidade.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 220,
    mensalMax: 600,
    onlineMin: 110,
    onlineMax: 320,
  },

  conclusao:
    'Cidade litorânea que vive do turismo das piscinas naturais e da vida à beira-mar, Maragogi oferece um cenário natural privilegiado para treinar ao ar livre, desde que respeitado o calor típico do litoral norte alagoano. Um personal trainer ajuda a organizar os horários de treino em torno do clima e da rotina de quem mora ou passa temporadas na cidade, aproveitando a orla como espaço de atividade física.',

  vizinhas: ['maceio-al'],

  fontes: [
    { nome: 'IBGE Cidades — Maragogi', url: 'https://cidades.ibge.gov.br/brasil/al/maragogi/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Maragogi', url: 'https://maragogi.al.gov.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
