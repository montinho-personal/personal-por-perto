import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'urubici-sc',
  nome: 'Urubici',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'urubiciense',
  tipo: 'cidade',

  populacao: 10834,
  populacaoAno: 2022,
  idhm: 0.694,
  idhmClasse: 'médio',
  altitudeM: 915,

  resumoEconomico:
    'No coração da Serra Catarinense, Urubici é conhecida como a "Terra das Hortaliças" e figura entre os maiores produtores de hortifrutigranjeiros de Santa Catarina, com destaque também para o cultivo de morango e maçã. Ao lado da agropecuária, o turismo de montanha se consolidou como pilar da economia local, puxado pelo Morro da Igreja e pela Pedra Furada, pela Serra do Corvo Branco — dona do maior corte de rocha do Brasil — e pelos cânions da Serra Geral, como o Espraiado. O clima frio, com geadas frequentes e neve quase todo inverno, virou marca registrada da cidade e atrai visitantes o ano inteiro.',

  mercado:
    'Por ser um município pequeno e de vocação rural e turística, o mercado fitness de Urubici é enxuto, concentrado em poucas academias locais de musculação. A procura por personal trainers tende a vir de moradores que buscam orientação para treinar com segurança no frio intenso da serra e de quem quer aproveitar trilhas, cânions e estradas de montanha para caminhada, corrida e pedal, além do público sazonal ligado ao turismo de inverno.',

  bairrosNobres: ['Centro', 'Santa Tereza', 'São José', 'Águas Brancas'],
  bairrosPopulares: ['Rio dos Bugres', 'Vacas Gordas', 'Canudo', 'Brasília'],

  parques: [
    {
      nome: 'Morro da Igreja e Parque Nacional de São Joaquim',
      descricao:
        'A 1.822 metros de altitude, é um dos pontos mais altos do Sul do Brasil e abriga a Pedra Furada, mirante que expõe os cânions da Serra Geral. Está dentro dos limites do Parque Nacional de São Joaquim e o acesso ao topo é controlado pelo ICMBio, mediante agendamento prévio.',
    },
    {
      nome: 'Serra do Corvo Branco',
      descricao:
        'Estrada de montanha a cerca de 1.470 metros de altitude, esculpida no maior corte de rocha do Brasil, com paredões de até 90 metros de profundidade. É rota procurada para trekking, contemplação e cicloturismo entre os paredões da Serra Geral.',
    },
    {
      nome: 'Cânion Espraiado',
      descricao:
        'A cerca de 40 km do centro, entre a Serra do Corvo Branco e o Campo dos Padres, é um dos cânions mais imponentes da Serra Geral, com paredões e cachoeiras esculpidos pela erosão. O acesso é por propriedade privada, mediante autorização, e reúne trilhas de trekking de um dia e roteiros de bikepacking.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária urbana é praticamente inexistente, compatível com o porte do município; o pedal acontece nas estradas rurais e de montanha do entorno, com roteiros de cicloturismo e bikepacking rumo à Serra do Corvo Branco e ao Cânion Espraiado.',

  clima:
    'Urubici tem clima subtropical de altitude e é uma das localidades mais frias do Brasil: geadas são comuns no inverno e a neve costuma aparecer quase todo ano nos pontos mais altos, sobretudo entre julho e agosto. No Morro da Igreja já foi registrada, em 1996, uma temperatura de -17,8 °C, a mais baixa já observada em território brasileiro (registro não oficial, mas incorporado à identidade da cidade). Os verões são amenos, com boa amplitude térmica entre dia e noite ao longo do ano.',
  climaTreino:
    'O frio intenso é o principal condicionante do treino: pede aquecimento mais longo, roupas em camadas e cautela em dias de geada ou neve, quando pistas e trilhas ficam escorregadias. Nos períodos mais rigorosos do inverno, ambientes fechados e aquecidos são a opção mais segura, enquanto os dias amenos favorecem caminhadas, corridas e trilhas ao ar livre na serra.',

  mobilidade:
    'O acesso a Urubici a partir de Florianópolis é feito pela BR-282 sentido Lages e, depois de Bom Retiro, pela SC-110. A SC-370 liga o município a Rio Rufino e Urupema a oeste, e a Grão Pará e à região de Tubarão a leste, cruzando a Serra do Corvo Branco. O transporte urbano é feito por ônibus, e trechos de estrada de terra e montanha podem amanhecer com gelo nos dias mais frios do inverno.',

  corridas: [
    {
      nome: 'DesaFRIO Urubici',
      descricao:
        'Prova de trail running realizada em agosto com largada no Morro da Igreja, com percursos de 50 km, 24 km e 10 km por estradas de terra, trilhas e paisagens de altitude marcadas pelo frio intenso da serra.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Urubici gira em torno do uso das trilhas, cânions e estradas de montanha para trekking, corrida e cicloturismo, com o DesaFRIO reunindo atletas de trail running todos os anos. O frio rigoroso e o turismo de inverno moldam o calendário, tornando a cidade um destino de referência para quem busca esporte ao ar livre em meio à natureza da Serra Catarinense.',
  academias:
    'A oferta é restrita a poucas academias locais de musculação, concentradas no Centro, com porte compatível com um município pequeno de economia rural e turística.',

  destaquesFitness: [
    'Uma das localidades mais frias do Brasil, com recorde de -17,8 °C no Morro da Igreja e neve quase todo inverno.',
    '"Terra das Hortaliças" e um dos maiores produtores de hortifrutigranjeiros de Santa Catarina, com cultivo também de morango e maçã.',
    'Cânions da Serra Geral, como o Espraiado, e a Serra do Corvo Branco, com o maior corte de rocha do Brasil, atraindo trekking e cicloturismo.',
    'Sede do DesaFRIO Urubici, prova de trail running de até 50 km com largada no Morro da Igreja.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Cidade de altitude e frio marcante, Urubici pede um treino adaptado ao clima e que saiba aproveitar as trilhas, cânions e estradas da serra nos dias amenos. Um personal trainer ajuda a organizar a rotina respeitando o frio, cuidando do aquecimento e dos horários adequados e mantendo a constância ao longo do inverno serrano.',

  vizinhas: ['sao-joaquim-sc', 'lages-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Urubici', url: 'https://cidades.ibge.gov.br/brasil/sc/urubici/panorama' },
    { nome: 'Prefeitura de Urubici', url: 'https://www.urubici.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
