import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cascavel-ce',
  nome: 'Cascavel',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'cascavelense',
  tipo: 'cidade',

  populacao: 72720,
  populacaoAno: 2022,
  idhm: 0.646,
  idhmClasse: 'médio',
  altitudeM: 27,

  resumoEconomico:
    'No litoral leste cearense e integrada à Região Metropolitana de Fortaleza, Cascavel combina a tradição pesqueira do seu litoral com a agropecuária do interior e um comércio que serve à sede e aos distritos. A pesca artesanal tem peso histórico, sobretudo no núcleo da Caponga, principal porto de jangadas do município. O beneficiamento de castanha de caju e a chegada de empresas de processamento de alimentos ajudaram a diversificar uma economia que por muito tempo foi essencialmente agrícola, enquanto o turismo de praia movimenta a orla nas temporadas.',

  mercado:
    'Como cidade média de uma região metropolitana, Cascavel tem um mercado fitness em formação, apoiado na proximidade com Fortaleza e na rotina de quem vive entre a sede e os distritos litorâneos. A procura por personal trainers aparece entre moradores que buscam treino orientado para o clima quente do litoral e para aproveitar a orla e as praias como espaço de atividade ao ar livre, além de quem prefere acompanhamento individual ao formato tradicional de academia.',

  bairrosNobres: ['Centro', 'Caponga', 'Croatá', 'Cidade Nova'],
  bairrosPopulares: ['Pitombeiras', 'Cristais', 'Guanacés', 'Jacarecoara'],

  parques: [
    {
      nome: 'Orla da Caponga',
      descricao:
        'Principal núcleo pesqueiro do município, a Caponga reúne calçadão, barracas e a faixa de areia mais movimentada da cidade — o trecho mais usado para caminhada, corrida e treino ao ar livre, palco também das tradicionais regatas de jangadas.',
    },
    {
      nome: 'Praia de Águas Belas',
      descricao:
        'Onde o rio Mal Cozinhado encontra o mar, formando piscinas naturais de águas mornas na maré baixa; o cenário tranquilo e as dunas do entorno servem de espaço para atividades ao ar livre longe da agitação urbana.',
    },
    {
      nome: 'Faixa de praias do litoral leste',
      descricao:
        'A extensa orla do município, voltada para o oceano Atlântico, oferece areias firmes e ventos constantes que favorecem caminhada, corrida e esportes de praia ao longo de boa parte do ano.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana e da orla; boa parte do pedal e da corrida acontece nas vias da sede e nos acessos aos distritos litorâneos.',

  clima:
    'O clima é tropical quente, típico do litoral cearense, com temperaturas elevadas o ano inteiro e brisa marítima constante. Há duas estações bem marcadas: a chuvosa, concentrada no primeiro semestre, e a seca, no segundo semestre, quando os ventos ficam mais fortes na orla.',
  climaTreino:
    'O calor e a forte insolação pedem treinar bem cedo ou no fim da tarde, com hidratação reforçada e proteção solar; a brisa do mar ameniza a sensação térmica na orla, e ambientes climatizados são a opção mais segura nos horários de pico de calor.',

  mobilidade:
    'Cascavel se liga a Fortaleza, a cerca de 60 km, principalmente pela CE-040, a rodovia que dá acesso às praias do litoral leste, e pela BR-116, que corta a porção interior do município. O transporte urbano e intermunicipal é feito por ônibus, com linhas que conectam a sede à capital e a municípios vizinhos da região metropolitana.',

  corridas: [
    {
      nome: 'Corrida Zero Açúcar',
      descricao:
        'Prova de rua já tradicional em Cascavel, realizada no primeiro semestre, com percursos de diferentes distâncias e grande adesão de corredores da cidade e da região.',
    },
    {
      nome: 'Cascavel Run',
      descricao:
        'Corrida de rua associada às comemorações de aniversário do município, com percursos variados e forte participação de corredores e caminhantes locais.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso da orla da Caponga e das praias do litoral leste para caminhada e corrida, a tradição pesqueira das jangadas e provas de rua que reúnem a comunidade — tudo moldado pelo clima quente e ventoso do litoral cearense.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pela sede e por pontos dos distritos litorâneos, com porte compatível com uma cidade média da região metropolitana.',

  destaquesFitness: [
    'Litoral leste cearense, com a Caponga e Águas Belas como espaços de caminhada e corrida ao ar livre.',
    'Clima quente e ventoso o ano inteiro, que exige planejamento de horário, hidratação e proteção solar no treino.',
    'Tradição pesqueira das jangadas e provas de rua que mobilizam a comunidade local.',
    'Integração à Região Metropolitana de Fortaleza pela CE-040, com economia de pesca, agropecuária e comércio.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 660,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Cidade litorânea, quente e ventosa da Região Metropolitana de Fortaleza, Cascavel pede um treino adaptado ao clima e que aproveite a orla e as praias do litoral leste. Um personal trainer ajuda a organizar a rotina respeitando o calor, definindo os melhores horários e mantendo a constância ao longo das estações chuvosa e seca.',

  vizinhas: ['fortaleza-ce', 'aquiraz-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Cascavel', url: 'https://cidades.ibge.gov.br/brasil/ce/cascavel/panorama' },
    { nome: 'Prefeitura de Cascavel', url: 'https://www.cascavel.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
