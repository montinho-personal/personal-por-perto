import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'garca-sp',
  nome: 'Garça',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'garcense',
  tipo: 'cidade',

  populacao: 42110,
  populacaoAno: 2022,
  idhm: 0.769,
  idhmClasse: 'alto',
  altitudeM: 683,

  resumoEconomico:
    'Garça fica no centro-oeste paulista, na região de Marília (Alta Paulista/Média Sorocabana), a cerca de 415 km da capital. É reconhecida regionalmente como polo da indústria eletroeletrônica, com fabricantes de motores elétricos e máquinas que abastecem o mercado interno e exportam para dezenas de países. A economia também se apoia nos serviços, no comércio e na cafeicultura: a cidade é referência de uma região de 15 municípios que conquistou Indicação Geográfica para cafés especiais, tradição que remonta a mais de um século de colonização ligada ao café.',

  mercado:
    'Cidade de porte médio do interior paulista, Garça tem um mercado fitness mais concentrado que o das grandes cidades da região, formado por academias e estúdios locais de musculação e treino funcional. A rotina de trabalho na indústria e no comércio, somada ao calendário esportivo movimentado pela Secretaria de Esportes, sustenta a procura por personal trainers entre quem busca treino individualizado fora do horário comercial.',

  bairrosNobres: ['Centro', 'Vila Williams', 'Jardim Europa', 'Jardim Paulista'],
  bairrosPopulares: ['Ferrarópolis', 'Nova Garça', 'Jardim Morada do Sol', 'Distrito Industrial'],

  parques: [
    {
      nome: 'Bosque Municipal Dr. Belírio Guimarães Brandão',
      descricao:
        'Reserva de Mata Atlântica nativa de 18,5 hectares, uma das maiores remanescentes dentro de uma área urbana no país. Tem trilhas, minizoológico, playground e área de piquenique, usada para caminhada e contato com a natureza.',
    },
    {
      nome: 'Lago Artificial Prof. J. K. Williams e Bosque das Cerejeiras',
      descricao:
        'Espelho d\'água na Vila Williams cercado por cerca de mil cerejeiras plantadas desde 1979, palco anual do Cerejeiras Festival. O entorno é a principal área de lazer e caminhada ao ar livre da cidade.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária de Garça é modesta e concentrada em avenidas do perímetro urbano; a maior parte do treino ao ar livre acontece nas calçadas do Centro e no entorno do Lago Artificial.',

  clima:
    'O clima é tropical de altitude (Cwa), com verão chuvoso e quente e inverno seco e mais ameno; a altitude de cerca de 683 m suaviza o calor típico do interior paulista, com temperaturas médias entre 18 °C e 28 °C ao longo do ano.',
  climaTreino:
    'O inverno seco e ameno é a janela mais confortável para treinar ao ar livre o dia todo; no verão, o calor e as chuvas concentradas à tarde pedem treinos pela manhã ou no fim de tarde, com atenção à hidratação.',

  mobilidade:
    'O acesso principal é pela Rodovia Comandante João Ribeiro de Barros (SP-294), eixo do oeste paulista que corta o perímetro urbano de Garça e liga a cidade a Marília (cerca de 34 km) e, mais adiante, a Bauru e Ourinhos (cerca de 107 km); o transporte urbano é feito por ônibus municipal.',

  corridas: [
    {
      nome: 'Corrida Caveiras Running',
      descricao:
        'Prova de rua organizada pela Equipe Caveiras de Garça, com largada no Lago Artificial e percurso de 6 km; a 2ª edição, em maio de 2025, reuniu cerca de 650 atletas da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local gira em torno do Lago Artificial, ponto de encontro de corredores e caminhantes, e do calendário de campeonatos amadores de futebol e futsal apoiados pela Secretaria de Esportes; a Equipe Caveiras reúne corredores de Garça e cidades vizinhas para treinos e provas na região.',
  academias:
    'A oferta é formada principalmente por academias e estúdios locais de musculação e treino funcional, concentrados no Centro e nos bairros residenciais, em porte compatível com uma cidade média do interior paulista.',

  destaquesFitness: [
    'Polo regional da indústria eletroeletrônica e de cafés especiais com Indicação Geográfica, com rotina de trabalho que valoriza o treino programado.',
    'Bosque Municipal Dr. Belírio Guimarães Brandão: reserva de Mata Atlântica de 18,5 hectares com trilhas para caminhada.',
    'Lago Artificial J. K. Williams e Bosque das Cerejeiras: principal área de caminhada e corrida ao ar livre da cidade.',
    'Inverno seco e ameno, favorecido pela altitude de cerca de 683 m, como a melhor janela para treinar ao ar livre.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 110,
    mensalMin: 260,
    mensalMax: 650,
    onlineMin: 120,
    onlineMax: 340,
  },

  conclusao:
    'Polo eletroeletrônico e cafeeiro do centro-oeste paulista, Garça combina rotina de trabalho intensa com um entorno natural raro para uma cidade de seu porte, entre o Bosque Municipal e o Lago Artificial. Um personal trainer ajuda a encaixar o treino na agenda da semana e a aproveitar o inverno seco e ameno como janela livre para atividade ao ar livre.',

  vizinhas: ['marilia-sp', 'ourinhos-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Garça', url: 'https://cidades.ibge.gov.br/brasil/sp/garca/panorama' },
    { nome: 'Prefeitura de Garça', url: 'https://www.garca.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
