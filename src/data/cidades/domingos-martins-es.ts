import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'domingos-martins-es',
  nome: 'Domingos Martins',
  uf: 'ES',
  estado: 'Espírito Santo',
  estadoSlug: 'espirito-santo',
  regiao: 'Sudeste',
  gentilico: 'martinense',
  tipo: 'cidade',

  populacao: 35416,
  populacaoAno: 2022,
  idhm: 0.747,
  idhmClasse: 'alto',
  altitudeM: 542,

  resumoEconomico:
    'Domingos Martins fica na Região das Montanhas Capixabas, a cerca de 42 km de Vitória pela BR-262, e é um dos principais símbolos da imigração europeia no Espírito Santo — colonizada a partir de 1847 por alemães, pomeranos e italianos, herança que marca a arquitetura, a gastronomia e a cultura local. A sede, conhecida como Campinho, mantém o casario de inspiração germânica, e o distrito de Aracê abriga Pedra Azul, formação rochosa de 1.822 m que é o grande cartão-postal da serra. A economia combina agricultura familiar de montanha (café, hortaliças, flores) com um forte setor de turismo: agroturismo em propriedades rurais, ecoturismo, turismo de aventura e o turismo de montanha em torno da Pedra Azul.',

  mercado:
    'Em uma cidade média de serra com vocação turística, a demanda por personal trainers concentra-se na sede (Campinho) e nas áreas de hospedagem da região de Pedra Azul, ligada a academias, pousadas e a quem busca acompanhamento individual. O clima ameno de altitude favorece o treino ao ar livre, e o relevo montanhoso atrai quem gosta de caminhada, corrida e ciclismo em subidas. O acompanhamento online amplia o alcance para os distritos do interior, distantes da sede.',

  bairrosNobres: ['Centro (Campinho)', 'Pedra Azul', 'Aracê'],
  bairrosPopulares: ['Paraju', 'Melgaço', 'Santa Isabel', 'Ponto Alto'],

  parques: [
    {
      nome: 'Parque Estadual da Pedra Azul',
      descricao:
        'Unidade de conservação no distrito de Aracê, criada para proteger a Pedra Azul, formação de granito que chega a 1.822 m e é o cartão-postal da serra capixaba. Tem a Trilha da Pedra Azul (nível fácil, cerca de 1.900 m ida e volta) e a Trilha das Piscinas Naturais (mais exigente, com trecho de corda), sempre acompanhadas por guia ou monitor.',
    },
    {
      nome: 'Região de Pedra Azul e Aracê',
      descricao:
        'No alto da serra, concentra pousadas, propriedades de agroturismo e mirantes para a Pedra Azul, com caminhos e estradas de montanha procurados por quem combina caminhada, contemplação e treino ao ar livre em altitude.',
    },
    {
      nome: 'Sede histórica (Campinho)',
      descricao:
        'O centro de inspiração germânica reúne praças e ruas tranquilas usadas para caminhada e corrida leve, ponto de partida para percursos no entorno serrano da cidade.',
    },
  ],
  ciclovias:
    'A cidade não tem uma malha cicloviária estruturada; o ciclismo acontece principalmente nas estradas vicinais e na BR-262, em percursos de montanha procurados por ciclistas de estrada e mountain bike que exploram as subidas da serra.',

  clima:
    'O clima é ameno de altitude, típico da serra capixaba: na sede, a cerca de 542 m, e ainda mais fresco nas partes altas como Pedra Azul, as temperaturas são bem mais baixas que no litoral, com noites frias no inverno e dias agradáveis na maior parte do ano — o que rendeu à região a fama de refúgio para quem gosta do frio.',
  climaTreino:
    'O clima de montanha favorece treinar ao ar livre com conforto térmico boa parte do ano, sobretudo de manhã e no fim da tarde. No inverno, o frio das partes altas pede aquecimento mais longo e roupa adequada; o relevo de subidas é um aliado natural para trabalho de força e resistência.',

  mobilidade:
    'O acesso principal a partir da Grande Vitória se dá pela BR-262, que corta o município e liga a sede (Campinho) à região de Pedra Azul e Aracê rumo ao interior do estado. O deslocamento é predominantemente por carro, e os distritos dependem de estradas vicinais — o que torna a localização do treino na sede ou na área de Pedra Azul um fator prático.',

  corridas: [
    {
      nome: 'Corridas de rua e de montanha na serra',
      descricao:
        'O calendário esportivo local inclui provas de corrida de rua e de trilha que aproveitam o relevo montanhoso e o clima ameno, atraindo participantes da Região das Montanhas Capixabas.',
    },
    {
      nome: 'Trilhas e cicloturismo de altitude',
      descricao:
        'As trilhas do Parque Estadual da Pedra Azul e as estradas da serra recebem caminhantes e ciclistas que exploram as subidas e as paisagens do agroturismo, em meio à mata atlântica de altitude.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é marcada pelo ambiente de montanha: caminhadas, trilhas, corrida e ciclismo em subidas fazem parte da rotina de quem treina ao ar livre. A identidade alemã, pomerana e italiana e o agroturismo dão um cenário particular, com eventos culturais e turísticos que movimentam a cidade ao longo do ano.',
  academias:
    'A oferta de academias se concentra na sede do município, atendendo quem busca musculação e treino funcional, complementada pelas opções de treino ao ar livre que o relevo e o clima da serra proporcionam, inclusive na região de hospedagem de Pedra Azul.',

  destaquesFitness: [
    'Clima ameno de altitude, confortável para treinar ao ar livre boa parte do ano e fresco nas partes altas.',
    'Trilhas e mirantes no Parque Estadual da Pedra Azul, cartão-postal da serra capixaba.',
    'Relevo de montanha que favorece corrida, caminhada e ciclismo em subidas.',
    'Cenário de agroturismo e colonização alemã, pomerana e italiana, com turismo de montanha em Pedra Azul e Aracê.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Domingos Martins une a herança alemã, pomerana e italiana, o agroturismo e o clima ameno da serra capixaba a um relevo que é convite natural ao treino ao ar livre. Das trilhas do Parque Estadual da Pedra Azul às subidas das estradas de montanha, um personal trainer ajuda a aproveitar esse cenário com método, segurança e progressão adequada.',

  vizinhas: ['santa-maria-de-jetiba-es', 'cariacica-es', 'vitoria-es'],

  fontes: [
    { nome: 'IBGE Cidades — Domingos Martins', url: 'https://cidades.ibge.gov.br/brasil/es/domingos-martins/panorama' },
    { nome: 'Prefeitura de Domingos Martins', url: 'https://www.domingosmartins.es.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
