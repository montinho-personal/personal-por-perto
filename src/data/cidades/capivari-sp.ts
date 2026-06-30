import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'capivari-sp',
  nome: 'Capivari',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'capivariano',
  tipo: 'cidade',

  populacao: 50068,
  populacaoAno: 2022,
  idhm: 0.733,
  idhmClasse: 'alto',
  altitudeM: 636,

  resumoEconomico:
    'Cidade do interior paulista na microrregião de Piracicaba, Capivari nasceu às margens do rio que lhe dá o nome e cresceu ligada à cana-de-açúcar. Hoje a economia combina a agroindústria canavieira com um parque industrial diversificado — destacam-se a fabricação de tecidos de malha e de produtos de higiene descartáveis —, além de comércio e serviços que respondem pela maior parte do valor adicionado. A administração pública figura entre as atividades que mais empregam no município.',

  mercado:
    'Como cidade média do interior paulista, Capivari tem um mercado fitness em consolidação, apoiado em academias locais de musculação e treino funcional e em estúdios menores. A procura por personal trainers tende a crescer entre quem busca acompanhamento mais individualizado e aproveita as praças e o espaço urbano para treino ao ar livre.',

  bairrosNobres: ['Centro', 'Jardim Santa Maria', 'Jardim Santa Terezinha', 'Vila Cordenonsi'],
  bairrosPopulares: ['Jardim Santa Cruz', 'Jardim Maracanã', 'Jardim Hípica Pinheiro', 'Vila Nova'],

  parques: [
    {
      nome: 'Praça Rodrigues de Abreu',
      descricao:
        'Uma das praças centrais mais arborizadas da cidade, com fontes, coreto e bastante vegetação; ponto tradicional de encontro e caminhada na área central de Capivari.',
    },
    {
      nome: 'Praça Dr. Cesário Motta',
      descricao:
        'Praça histórica do Centro, rica em árvores e paisagem, abriga o obelisco inaugurado em 1932 pelo centenário da cidade — espaço bastante usado para caminhada e atividade leve ao ar livre.',
    },
    {
      nome: 'Praça Central',
      descricao:
        'Largo central que reúne grupos de corrida e caminhada da cidade; serve de ponto de partida para treinos coletivos e para a prova de rua local.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em alguns trechos da área urbana; boa parte do pedal e da corrida acontece nas vias do entorno do Centro e em estradas vicinais da zona rural canavieira.',

  clima:
    'O clima é tropical de altitude, característico do interior paulista, com verão quente e chuvoso (de outubro a março) e inverno mais ameno e seco. A cerca de 636 metros de altitude, a cidade tem noites mais frescas no inverno e amplitude térmica marcante entre as estações.',
  climaTreino:
    'No verão, o calor e as chuvas de fim de tarde pedem treinar cedo ou aproveitar janelas mais frescas, com hidratação reforçada; o inverno seco e ameno tende a ser a época mais confortável para correr e treinar ao ar livre.',

  mobilidade:
    'Capivari fica a cerca de 108 km da capital e se conecta à região por rodovias estaduais, com destaque para a SP-308 (Rodovia Comendador Mário Dedini, a Rodovia do Açúcar), que liga o município ao eixo de Piracicaba e Rio Claro. O transporte urbano é feito por ônibus, e a posição na microrregião de Piracicaba facilita o acesso a centros maiores do interior.',

  corridas: [
    {
      nome: 'Vamos Correr 5K',
      descricao:
        'Corrida de rua de 5 km largada na região central da cidade, que reuniu centenas de participantes em sua edição inaugural e entrou para o calendário esportivo local.',
    },
    {
      nome: 'Projeto Vamos Correr',
      descricao:
        'Iniciativa de treinos coletivos gratuitos de corrida realizados na Praça Central, que reúne corredores amadores da cidade ao longo da semana.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local mistura o uso das praças centrais para caminhada e corrida, os grupos de corredores amadores e provas de rua que vêm ganhando espaço no calendário — tudo favorecido pelo clima ameno do interior paulista boa parte do ano.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional e por estúdios menores, distribuídos pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior.',

  destaquesFitness: [
    'Praças centrais arborizadas, como a Rodrigues de Abreu e a Cesário Motta, usadas para caminhada e treino ao ar livre.',
    'Clima tropical de altitude, com inverno ameno e seco favorável à corrida ao ar livre.',
    'Cena de corrida em crescimento, com treinos coletivos e prova de rua na região central.',
    'Cidade da agroindústria canavieira e do parque têxtil e de descartáveis, na microrregião de Piracicaba.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Cidade média do interior paulista, com clima ameno boa parte do ano e praças arborizadas no coração urbano, Capivari oferece um cenário convidativo para treinar ao ar livre. Um personal trainer ajuda a organizar a rotina, aproveitar os melhores horários conforme a estação e manter a constância, seja na musculação, no funcional ou na corrida.',

  vizinhas: ['piracicaba-sp', 'rio-claro-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Capivari', url: 'https://cidades.ibge.gov.br/brasil/sp/capivari/panorama' },
    { nome: 'Prefeitura de Capivari', url: 'https://capivari.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
