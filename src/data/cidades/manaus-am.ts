import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'manaus-am',
  nome: 'Manaus',
  uf: 'AM',
  estado: 'Amazonas',
  estadoSlug: 'amazonas',
  regiao: 'Norte',
  gentilico: 'manauara',
  tipo: 'cidade',

  populacao: 2063547,
  populacaoAno: 2022,
  idhm: 0.737,
  idhmClasse: 'alto',
  altitudeM: 25,

  resumoEconomico:
    'Maior cidade da Região Norte e principal polo econômico da Amazônia, Manaus é sustentada pela Zona Franca de Manaus e pelo Polo Industrial de Manaus, com forte produção de eletroeletrônicos, motocicletas e informática. Concentra a maior parte do PIB do estado, com peso relevante de serviços e comércio, e tem na orla do Rio Negro e nos parques os seus principais palcos de vida ativa.',

  mercado:
    'O mercado fitness de Manaus está em expansão, com a Smart Fit presente em mais de dez unidades (Amazonas Shopping, Cidade Nova, Ponta Negra, Flores, entre outras) e diversas academias locais. A cultura de treino ao ar livre cresce na orla e nos parques, concentrada no início da manhã e no fim da tarde por causa do calor equatorial.',

  bairrosNobres: ['Ponta Negra', 'Adrianópolis', 'Nossa Senhora das Graças', 'Parque Dez de Novembro'],
  bairrosPopulares: ['Cidade de Deus', 'Jorge Teixeira', 'São José', 'Cidade Nova'],

  parques: [
    {
      nome: 'Parque Rio Negro (orla)',
      descricao:
        'Orla com pista de caminhada e corrida de mais de 1.700 m, quatro mirantes e academia ao ar livre, com vista para o Rio Negro — um dos points mais bonitos para treinar na cidade.',
    },
    {
      nome: 'Parque Ponte dos Bilhares',
      descricao:
        'Reformado em 2023, tem pista de cerca de 1,42 km, academias ao ar livre e quadras poliesportivas.',
    },
    {
      nome: 'Passeio do Mindú',
      descricao:
        'Com pista de cerca de 1 km, academias ao ar livre e áreas para atividades coletivas, em meio a uma reserva urbana.',
    },
  ],
  ciclovias:
    'A malha cicloviária ainda é pequena para o porte da cidade (em torno de 30 km), mas está em expansão, com novos trechos previstos.',

  clima:
    'O clima é equatorial, quente e úmido o ano inteiro, com média em torno de 27 °C, umidade perto de 80% e chuvas abundantes.',
  climaTreino:
    'O calor e a umidade altos exigem treinar de manhã bem cedo ou após o pôr do sol, com hidratação reforçada. As chuvas frequentes tornam importante ter um plano B em ambiente fechado para manter a constância.',

  mobilidade:
    'O transporte urbano é feito por ônibus, e a cidade é relativamente isolada por terra — as conexões-chave são o Aeroporto Eduardo Gomes e o transporte fluvial pelos rios Negro e Amazonas. Isso reforça a importância de treinar perto de casa ou no formato online.',

  corridas: [
    {
      nome: 'Maratona Internacional de Manaus',
      descricao:
        'A maior corrida de rua do Norte, com largada na Ponta Negra e percursos de 5 km, 10 km, 21 km e 42 km, reunindo milhares de atletas.',
    },
    {
      nome: 'Corrida Manaus em Movimento',
      descricao:
        'Prova promovida pela prefeitura, com percursos de 5 km e 10 km e largada na Ponta Negra.',
    },
  ],
  culturaEsportiva:
    'Manaus tem forte tradição em corrida de rua, com calendário ativo e várias assessorias esportivas. A orla do Rio Negro e a Ponta Negra são os principais pontos de encontro de quem treina ao ar livre, sempre respeitando o clima equatorial.',
  academias:
    'A boa presença da Smart Fit e de academias locais dá cobertura à cidade, com a orla e os parques funcionando como extensões ao ar livre — especialmente nos horários mais frescos do dia.',

  destaquesFitness: [
    'Orla e Ponta Negra como hub de corrida, caminhada e eventos, com vista para o Rio Negro.',
    'Boa presença de Smart Fit e academias locais, em expansão.',
    'Treinos preferencialmente ao amanhecer ou anoitecer por causa do calor equatorial.',
    'Parques com pistas de 1 a 1,7 km e academias ao ar livre gratuitas.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Na maior cidade da Amazônia, treinar bem é, antes de tudo, saber lidar com o calor e a umidade — e é aí que um personal trainer faz diferença, ajustando horários, intensidade e hidratação. Com a orla do Rio Negro e boas academias, Manaus oferece estrutura para quem quer evoluir com método.',

  vizinhas: ['palmas-to', 'brasilia-df'],

  fontes: [
    { nome: 'IBGE Cidades — Manaus', url: 'https://cidades.ibge.gov.br/brasil/am/manaus/panorama' },
    { nome: 'Prefeitura de Manaus', url: 'https://www.manaus.am.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
