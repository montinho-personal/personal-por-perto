import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'baia-formosa-rn',
  nome: 'Baía Formosa',
  uf: 'RN',
  estado: 'Rio Grande do Norte',
  estadoSlug: 'rio-grande-do-norte',
  regiao: 'Nordeste',
  gentilico: 'baía-formosense',
  tipo: 'cidade',

  populacao: 8825,
  populacaoAno: 2022,
  idhm: 0.609,
  idhmClasse: 'médio',

  resumoEconomico:
    'Baía Formosa é o município mais oriental do Rio Grande do Norte, na divisa com a Paraíba, e reúne um tripé econômico formado pelo turismo de praia (ainda pouco massificado se comparado a destinos como Pipa), pela pesca artesanal — com cerca de mil pescadores cadastrados — e pelo cultivo de cana-de-açúcar, impulsionado pela Usina Vale Verde (Grupo Farias), uma das maiores produtoras de açúcar e etanol do estado. O território abriga a RPPN Mata da Estrela, o maior remanescente de Mata Atlântica sobre dunas à beira-mar preservado no Rio Grande do Norte, e é a terra natal do surfista Ítalo Ferreira, campeão mundial da WSL e medalhista de ouro olímpico em Tóquio 2020.',

  mercado:
    'O mercado de personal trainer em Baía Formosa é bastante restrito, típico de um município pequeno cuja economia gira mais em torno da pesca, da cana-de-açúcar e de um turismo ainda de pequena escala. A procura tende a vir de moradores que buscam orientação para caminhada e treino de força, de praticantes de surf que treinam na Praia da Cacimba e no Pontal, e de visitantes que passam temporadas na cidade e queiram manter a rotina de atividade física durante a estada.',

  bairrosNobres: ['Centro / Praia do Porto', 'Praia da Cacimba'],
  bairrosPopulares: ['Sagi', 'Zona rural e áreas próximas aos canaviais'],

  parques: [
    {
      nome: 'RPPN Mata da Estrela',
      descricao:
        'Reserva particular com cerca de 2.040 hectares, considerada o maior remanescente de Mata Atlântica sobre dunas à beira-mar do Rio Grande do Norte. Reúne trilhas, cerca de 19 lagoas — entre elas a Lagoa Araraquara (Lagoa Coca-Cola), a Lagoa Junco e a Lagoa d\'Água — e é usada para caminhada e observação da natureza em meio à mata.',
    },
    {
      nome: 'Mirante de Baía Formosa (Praça Carlota Elisa)',
      descricao:
        'Mirante na parte alta da cidade, com vista panorâmica sobre a Praia do Porto e suas falésias avermelhadas; ponto de referência para caminhada e para eventos esportivos locais, como corridas de rua.',
    },
    {
      nome: 'Praia do Sagi',
      descricao:
        'Última praia do litoral potiguar antes da divisa com a Paraíba, junto à foz do rio Cavaçu, onde vive a comunidade pesqueira e indígena potiguara de Sagi-Trabanda; suas areias e trilhas de acesso servem à caminhada e ao contato com a natureza.',
    },
  ],
  ciclovias:
    'O município não conta com rede cicloviária estruturada; caminhada e corrida acontecem nas vias do centro, na orla das praias do Porto e da Cacimba e nas trilhas da RPPN Mata da Estrela.',

  clima:
    'O clima é tropical, quente ao longo do ano, com temperaturas médias na casa dos 25-27 °C. As chuvas se concentram no outono e início do inverno (entre abril e julho), enquanto a segunda metade do ano tende a ser mais seca e ensolarada, favorecendo o turismo de praia e as atividades ao ar livre.',
  climaTreino:
    'O calor constante e a forte incidência solar recomendam treinar ao ar livre no início da manhã ou fim da tarde, com hidratação reforçada; a água quente o ano todo favorece surf e outros esportes aquáticos na maior parte dos meses, com exceção dos períodos de chuva mais intensa entre o outono e o início do inverno.',

  mobilidade:
    'O acesso a Baía Formosa se dá pela BR-101 até as proximidades de Canguaretama, de onde parte uma rodovia estadual de cerca de 17 km até a sede do município, distante aproximadamente 72 km de Natal (cerca de 1h20 de carro). Dentro da cidade, os deslocamentos entre o centro, a Praia da Cacimba e o distrito de Sagi são feitos majoritariamente por carro, moto e vans, já que o transporte coletivo urbano é limitado.',

  corridas: [
    {
      nome: 'Corrida das Águas',
      descricao:
        'Prova de corrida de rua realizada em Baía Formosa com largada no Mirante de Baía Formosa, reunindo atletas e moradores em uma iniciativa que combina esporte, sustentabilidade e ação social, integrada à programação do Festival Internacional de Cinema de Baía Formosa (FINC).',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Baía Formosa é moldada pelo surf, praticado nos picos do Pontal e da Praia da Cacimba — favoritos do surfista local Ítalo Ferreira, campeão mundial da WSL e ouro olímpico em Tóquio 2020 —, além da pesca artesanal e das trilhas na RPPN Mata da Estrela. Eventos pontuais de corrida de rua, como a Corrida das Águas, complementam essa vocação para o esporte ao ar livre em contato com o mar e a mata.',
  academias:
    'A oferta de academias é pequena, típica de um município de poucos milhares de habitantes, concentrada no centro da cidade e voltada principalmente à musculação e ao treino funcional, tanto para moradores quanto para visitantes em temporada.',

  destaquesFitness: [
    'Terra natal de Ítalo Ferreira, campeão mundial de surf da WSL e medalhista de ouro olímpico em Tóquio 2020.',
    'Picos de surf do Pontal e da Praia da Cacimba, com ondas consistentes na maior parte do ano.',
    'RPPN Mata da Estrela, o maior remanescente de Mata Atlântica sobre dunas à beira-mar do Rio Grande do Norte, com trilhas em meio a lagoas e mata preservada.',
    'Corrida das Águas, prova de rua com largada no Mirante de Baía Formosa, com vista para a Praia do Porto e suas falésias.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 220,
    mensalMax: 600,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Pequena, litorânea e ainda pouco massificada pelo turismo, Baía Formosa oferece um cenário natural raro — entre falésias, mar aberto e o maior remanescente de Mata Atlântica sobre dunas do Rio Grande do Norte — para quem quer treinar ao ar livre. Um personal trainer ajuda a aproveitar esse ambiente com segurança, adaptando os treinos ao calor constante e à rotina de uma cidade pequena, seja para caminhada, preparo físico para o surf ou acompanhamento durante temporadas na região.',

  vizinhas: ['tibau-do-sul-rn', 'nisia-floresta-rn', 'natal-rn'],

  fontes: [
    { nome: 'IBGE Cidades — Baía Formosa', url: 'https://cidades.ibge.gov.br/brasil/rn/baia-formosa/panorama' },
    { nome: 'Atlas do Desenvolvimento Humano no Brasil — Baía Formosa', url: 'https://atlasbrasil.org.br/2013/pt/perfil_m/baia-formosa_rn' },
    { nome: 'Prefeitura Municipal de Baía Formosa — Turismo', url: 'https://baiaformosa.rn.gov.br/turismo/fazer' },
  ],
  atualizadoEm: '2026-07-02',
};
