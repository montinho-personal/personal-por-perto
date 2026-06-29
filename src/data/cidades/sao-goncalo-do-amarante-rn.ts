import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-goncalo-do-amarante-rn',
  nome: 'São Gonçalo do Amarante',
  uf: 'RN',
  estado: 'Rio Grande do Norte',
  estadoSlug: 'rio-grande-do-norte',
  regiao: 'Nordeste',
  gentilico: 'são-gonçalense',
  tipo: 'cidade',

  populacao: 115838,
  populacaoAno: 2022,
  idhm: 0.661,
  idhmClasse: 'médio',
  altitudeM: 28,

  resumoEconomico:
    'Integrante da Região Metropolitana de Natal, São Gonçalo do Amarante é um dos municípios que mais cresce no Rio Grande do Norte — a população saltou de cerca de 87,7 mil em 2010 para 115,8 mil em 2022. A economia combina vocação industrial e logística, com distritos voltados à indústria, comércio e serviços, além de abrigar o Aeroporto Internacional de Natal — Governador Aluízio Alves, em Maçaranduba, principal porta aérea do estado.',

  mercado:
    'O mercado fitness acompanha a expansão urbana e industrial da cidade, especialmente em bairros de forte adensamento como Jardins e Santo Antônio do Potengi, na divisa com Natal. A proximidade com a capital amplia o acesso a redes e estúdios, enquanto a chegada de novos moradores e trabalhadores aquece a procura por academias de bairro e personal trainers que atendem a domicílio e em condomínios.',

  bairrosNobres: ['Jardins', 'Santo Antônio do Potengi', 'Novo Amarante', 'Golandim'],
  bairrosPopulares: ['Olho d\'Água do Borges', 'Guajiru', 'Maçaranduba', 'Regomoleiro'],

  parques: [
    {
      nome: 'Parque Municipal das Nascentes do Rio Golandim',
      descricao:
        'Unidade de conservação no bairro Jardins, criada para proteger as nascentes do Rio Golandim — área verde de mata e trilhas, alternativa de contato com a natureza para caminhadas.',
    },
    {
      nome: 'Monumento dos Santos Mártires de Uruaçu',
      descricao:
        'Marco religioso e turístico no Sítio Uruaçu, com amplo espaço aberto e área de caminhada que recebe eventos esportivos e atrai visitantes e praticantes locais.',
    },
    {
      nome: 'Orla e praias do litoral norte',
      descricao:
        'Trechos de praia e faixas de areia da costa metropolitana, próximos à divisa com Extremoz, usados para caminhada, corrida e treino ao ar livre à beira-mar.',
    },
  ],
  ciclovias:
    'A malha cicloviária ainda é incipiente e concentrada em avenidas e novos loteamentos, acompanhando a expansão urbana; muitos ciclistas usam vias compartilhadas e os acostamentos dos eixos de ligação com Natal.',

  clima:
    'O clima é tropical quente e úmido, típico do litoral potiguar, com temperaturas médias em torno de 27 °C, sol durante boa parte do ano e brisa marinha vinda do litoral norte.',
  climaTreino:
    'O calor e a radiação intensos pedem treino no início da manhã ou no fim da tarde, com hidratação reforçada e proteção solar. A ventilação do litoral ameniza a sensação térmica nas áreas mais próximas à costa.',

  mobilidade:
    'O deslocamento é predominantemente por carro e ônibus. A BR-406 é o principal eixo rodoviário, conectando a cidade a Natal e ao interior, e a malha metropolitana liga os bairros à capital. A cidade sedia o Aeroporto Internacional de Natal — Governador Aluízio Alves, em Maçaranduba, a cerca de 26 km do centro de Natal.',

  corridas: [
    {
      nome: 'Corrida e Caminhada dos Mártires de Uruaçu',
      descricao:
        'Prova de rua de caráter comunitário realizada no entorno do Monumento dos Santos Mártires de Uruaçu, em geral no segundo semestre, reunindo centenas de inscritos entre corredores e caminhantes.',
    },
    {
      nome: 'Circuitos e provas metropolitanas',
      descricao:
        'Etapas e provas de rua da Região Metropolitana de Natal alcançam a cidade e seus moradores, reforçando uma cena de corrida em crescimento junto à expansão urbana.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura tradições do interior, manifestações religiosas e o estilo de vida litorâneo da Grande Natal. Corrida de rua, caminhada, futebol e esportes ao ar livre ganham espaço à medida que a cidade cresce e novos espaços públicos são incorporados.',
  academias:
    'A oferta se concentra em academias de bairro e estúdios de funcional, com reforço da proximidade às redes instaladas em Natal. Bairros adensados como Jardins e Santo Antônio do Potengi puxam a demanda, e o atendimento em condomínios e a domicílio complementa a cobertura.',

  destaquesFitness: [
    'Cidade da Região Metropolitana de Natal em forte expansão industrial e logística, com demanda fitness em alta.',
    'Sede do Aeroporto Internacional de Natal — Governador Aluízio Alves, polo de trabalho e mobilidade.',
    'Parque das Nascentes do Rio Golandim e o Monumento de Uruaçu como espaços para caminhada e corrida.',
    'Clima litorâneo quente e ensolarado que favorece o treino ao ar livre o ano todo.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 350,
  },

  conclusao:
    'Em plena expansão dentro da Região Metropolitana de Natal, São Gonçalo do Amarante combina crescimento industrial, novos bairros e um litoral quente e ensolarado que convida ao treino ao ar livre. Um personal trainer ajuda a estruturar uma rotina adaptada ao clima e à correria de quem vive e trabalha na Grande Natal — da caminhada em Uruaçu à musculação nas academias de bairro.',

  vizinhas: ['natal-rn', 'parnamirim-rn'],

  fontes: [
    {
      nome: 'IBGE Cidades — São Gonçalo do Amarante',
      url: 'https://cidades.ibge.gov.br/brasil/rn/sao-goncalo-do-amarante/panorama',
    },
    { nome: 'Prefeitura de São Gonçalo do Amarante', url: 'https://saogoncalo.rn.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
