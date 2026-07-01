import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'nova-petropolis-rs',
  nome: 'Nova Petrópolis',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'novo-petropolitano',
  tipo: 'cidade',

  populacao: 23300,
  populacaoAno: 2022,
  idhm: 0.780,
  idhmClasse: 'alto',
  altitudeM: 580,

  resumoEconomico:
    'Conhecida como o "Jardim da Serra Gaúcha" e como Capital Nacional do Cooperativismo — onde funcionou a primeira cooperativa de crédito da América Latina —, Nova Petrópolis foi fundada em 1858 por imigrantes alemães e preserva forte cultura germânica. A economia se apoia no turismo (que se intensifica no inverno frio da serra), na indústria de malhas e confecções de inverno, e na agricultura familiar voltada à horticultura e à produção de leite. A Rota Romântica e atrativos como o Labirinto Verde e o Parque Aldeia do Imigrante sustentam o fluxo de visitantes.',

  mercado:
    'Cidade pequena e de perfil turístico, Nova Petrópolis tem um mercado fitness enxuto, formado por academias locais e estúdios distribuídos pela área central e pelos bairros residenciais. A procura por personal trainers aparece entre moradores que buscam constância apesar do frio da serra e entre quem quer aproveitar parques, praças e trilhas da região para treinar ao ar livre nos períodos mais amenos.',

  bairrosNobres: ['Centro', 'Pousada da Neve', 'Piá'],
  bairrosPopulares: ['Bela Vista', 'Vila Germânia', 'São Cristóvão', 'Lajeadinho'],

  parques: [
    {
      nome: 'Parque Aldeia do Imigrante',
      descricao:
        'Parque temático que retrata a história da imigração alemã, com vila histórica, construções em enxaimel e amplas áreas verdes — espaço arborizado usado para caminhada e atividade ao ar livre em meio à natureza da serra.',
    },
    {
      nome: 'Labirinto Verde',
      descricao:
        'Um dos maiores labirintos vivos da América Latina, formado por cercas-vivas de ciprestes, na área central junto à Praça das Flores; o entorno ajardinado é ponto tradicional de caminhada e lazer ao ar livre, com entrada gratuita.',
    },
    {
      nome: 'Ninho das Águias',
      descricao:
        'Mirante em ponto alto do município, com vista para os vales da serra; o acesso e as estradas de morro do entorno servem de percurso para quem gosta de pedalar e correr em terreno com desnível.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área central; boa parte do pedal e da corrida acontece nas ruas da cidade e nas estradas do interior, que combinam paisagem de serra com trechos de subida.',

  clima:
    'O clima é subtropical úmido, com as quatro estações bem definidas e forte influência da altitude de cerca de 580 metros. O verão é ameno e o inverno é rigoroso para os padrões brasileiros: as temperaturas costumam ficar entre 8 °C e 20 °C, mas frentes frias podem levar os termômetros para perto de 0 °C, com geadas frequentes e, em anos excepcionais, registros de neve.',
  climaTreino:
    'O frio da serra é o fator que mais pesa no treino: nos dias de geada, o aquecimento precisa ser mais longo e a roupa em camadas ajuda a manter a temperatura no início da atividade. O verão ameno e as manhãs de sol na primavera e no outono são os melhores momentos para treinar ao ar livre nos parques e nas estradas do interior.',

  mobilidade:
    'Nova Petrópolis é cortada pela BR-116 e articulada pela RS-235, eixos que a integram à Rota Romântica e conectam a cidade a Caxias do Sul e a Gramado (ambas a cerca de 35 km) e a Porto Alegre (a cerca de 90 km). O deslocamento urbano é curto e boa parte do centro se resolve a pé, enquanto o transporte intermunicipal por rodovia responde pelo fluxo turístico e de trabalho.',

  corridas: [
    {
      nome: 'Rústica de Verão de Nova Petrópolis',
      descricao:
        'Corrida de rua tradicional organizada pelo Sesc, com largada na pista de atletismo Frederico Michaelsen e percurso pelo centro da cidade em distâncias como 5 km e 10 km.',
    },
    {
      nome: 'Audax Trail Tour — Nova Petrópolis',
      descricao:
        'Etapa de corrida de trilha realizada no município, com percursos que exploram as trilhas e o relevo da serra em distâncias variadas.',
    },
    {
      nome: 'Desafio dos Imigrantes',
      descricao:
        'Prova de corrida em trilha integrada ao calendário esportivo local, que aproveita os caminhos do interior e a paisagem da imigração alemã.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva une o gosto pela vida ao ar livre da serra, o uso de praças e parques para caminhada e a tradição de provas de rua e de trilha que exploram o relevo e as paisagens do interior — sempre condicionadas ao ritmo das estações e ao frio característico da região.',
  academias:
    'A oferta é formada por academias de musculação e estúdios de treino funcional de pequeno e médio porte, concentrados na área central e nos bairros residenciais, em escala compatível com uma cidade pequena de perfil turístico.',

  destaquesFitness: [
    'Jardim da Serra Gaúcha, com parques, praças e trilhas para treino ao ar livre.',
    'Inverno rigoroso e altitude de cerca de 580 m, que pedem aquecimento reforçado e roupa em camadas.',
    'Tradição em provas de rua e de trilha, como a Rústica de Verão e etapas de trail na serra.',
    'Cidade pequena de forte cultura alemã e economia ligada a turismo, malhas e agricultura familiar.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 135,
    mensalMin: 280,
    mensalMax: 800,
    onlineMin: 130,
    onlineMax: 390,
  },

  conclusao:
    'Cidade de serra, fria e de vida tranquila, Nova Petrópolis pede um treino que respeite o clima e aproveite os parques, praças e trilhas da região. Um personal trainer ajuda a ajustar horários e aquecimento ao frio do inverno, a manter a constância ao longo das estações e a explorar com segurança o relevo característico do Jardim da Serra Gaúcha.',

  vizinhas: ['gramado-rs', 'caxias-do-sul-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Nova Petrópolis', url: 'https://cidades.ibge.gov.br/brasil/rs/nova-petropolis/panorama' },
    { nome: 'Prefeitura de Nova Petrópolis', url: 'https://www.novapetropolis.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
