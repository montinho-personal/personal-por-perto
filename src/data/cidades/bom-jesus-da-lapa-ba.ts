import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'bom-jesus-da-lapa-ba',
  nome: 'Bom Jesus da Lapa',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'lapense',
  tipo: 'cidade',

  populacao: 65550,
  populacaoAno: 2022,
  idhm: 0.633,
  idhmClasse: 'médio',
  altitudeM: 436,

  resumoEconomico:
    'No oeste da Bahia, às margens do rio São Francisco, Bom Jesus da Lapa é conhecida como a "Capital Baiana da Fé" — abriga o santuário esculpido na gruta do morro de calcário, destino de uma das maiores romarias do país. A economia combina o turismo religioso, que move o comércio e a hotelaria, com a fruticultura irrigada do Perímetro Formoso (a cidade é uma das maiores produtoras de banana do Brasil, além de manga, mamão e melancia) e a agropecuária. O rio São Francisco e as rodovias BR-430 e BR-349 sustentam a logística e o fluxo de visitantes da região.',

  mercado:
    'Por ser uma cidade média do interior nordestino, o mercado fitness de Bom Jesus da Lapa é mais enxuto que o das grandes capitais, concentrado em academias locais de musculação e treino funcional. A procura por personal trainers tende a crescer entre quem busca orientação para treinar no calor do semiárido e aproveitar a orla do rio e as áreas de lazer da cidade.',

  bairrosNobres: ['Centro', 'São Geraldo', 'Bandeirante', 'Nova Lapa'],
  bairrosPopulares: ['Caatinga', 'Mangal', 'Vila Brasil', 'São Vicente'],

  parques: [
    {
      nome: 'Morro da Gruta (Santuário)',
      descricao:
        'Maciço de calcário de cerca de 90 metros que abriga o santuário e dezenas de grutas, com vista para o rio São Francisco. As duas trilhas de subida, em pedras irregulares, são percurso desafiador para quem tem bom condicionamento e procura treino ao ar livre com paisagem.',
    },
    {
      nome: 'Orla e Prainha do Rio São Francisco',
      descricao:
        'A faixa às margens do "Velho Chico", incluindo a coroa/prainha que aparece na época de seca, é um dos espaços mais usados para caminhada e atividade ao ar livre, com a paisagem ribeirinha como cenário.',
    },
    {
      nome: 'Largo da Esplanada',
      descricao:
        'Praça ampla junto ao santuário e à beira do rio, ponto de encontro de romeiros e moradores; o espaço aberto serve de área para caminhada e largada de eventos esportivos da cidade.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e nos acessos próximos à orla do rio São Francisco.',

  clima:
    'O clima é quente e semiárido, típico do sertão às margens do rio São Francisco, com temperaturas elevadas durante boa parte do ano e baixa umidade. As chuvas se concentram entre novembro e março, enquanto o período seco, mais longo, traz dias de calor forte e sol intenso.',
  climaTreino:
    'O calor e a baixa umidade do semiárido pedem treinar bem cedo ou no fim da tarde, com hidratação reforçada e proteção solar; nos picos de calor, ambientes climatizados são a opção mais segura, e o início da manhã costuma ser o melhor horário para o treino ao ar livre.',

  mobilidade:
    'A cidade se conecta ao restante do estado pelas rodovias BR-430 e BR-349 e tem no rio São Francisco uma via histórica de transporte e abastecimento. O deslocamento urbano é feito sobretudo por carro, moto e ônibus, e o fluxo de romeiros nas grandes festas movimenta o transporte rodoviário regional.',

  corridas: [
    {
      nome: 'Meia Maratona da Capital Baiana da Fé (Corrida do Bom Jesus)',
      descricao:
        'Prova de rua ligada ao santuário, com percursos de 5 km, 10 km e 21 km e largada na esplanada, que une fé, saúde e esporte e reúne centenas de atletas na cidade.',
    },
    {
      nome: 'Corrida de Santa Bárbara',
      descricao:
        'Corrida de rua organizada pela Secretaria de Esporte e Lazer do município, integrada ao calendário esportivo local.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso da orla do rio São Francisco para caminhada e corrida, a subida ao morro da gruta como desafio físico e provas de rua ligadas à identidade religiosa da cidade — tudo moldado pelo calor do semiárido.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior baiano.',

  destaquesFitness: [
    'Capital Baiana da Fé: santuário na gruta do morro de calcário e uma das maiores romarias do país.',
    'Orla do rio São Francisco e o Largo da Esplanada como espaços de caminhada e corrida ao ar livre.',
    'Calor do semiárido, que exige planejamento de horário, hidratação e proteção solar no treino.',
    'Economia de fruticultura irrigada (uma das maiores produções de banana do Brasil) e turismo religioso.',
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
    'Cidade quente, ribeirinha e marcada pela fé, Bom Jesus da Lapa pede um treino adaptado ao clima do semiárido e que aproveite a orla do rio e o entorno natural. Um personal trainer ajuda a organizar a rotina respeitando o calor, definindo os melhores horários e mantendo a constância ao longo do ano.',

  vizinhas: ['barreiras-ba', 'guanambi-ba'],

  fontes: [
    {
      nome: 'IBGE Cidades — Bom Jesus da Lapa',
      url: 'https://cidades.ibge.gov.br/brasil/ba/bom-jesus-da-lapa/panorama',
    },
    { nome: 'Prefeitura de Bom Jesus da Lapa', url: 'https://www.bomjesusdalapa.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
