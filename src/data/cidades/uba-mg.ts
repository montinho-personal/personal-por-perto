import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'uba-mg',
  nome: 'Ubá',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'ubaense',
  tipo: 'cidade',

  populacao: 103365,
  populacaoAno: 2022,
  idhm: 0.724,
  idhmClasse: 'alto',
  altitudeM: 320,

  resumoEconomico:
    'No coração da Zona da Mata mineira, Ubá é conhecida como a Capital Nacional do Móvel e abriga o maior polo moveleiro de Minas Gerais, um dos maiores do país. Centenas de indústrias de móveis, em sua maioria micro e pequenas empresas, concentram-se na cidade e na região, gerando milhares de empregos e movimentando comércio, logística e serviços. Berço do compositor Ary Barroso, autor de "Aquarela do Brasil", o município reúne ainda atividade industrial diversificada e um centro comercial que serve a dezenas de cidades do entorno, sustentando uma demanda constante por serviços de bem-estar e fitness.',

  mercado:
    'O mercado de personal trainers em Ubá acompanha o ritmo de uma cidade média mineira de perfil industrial, com academias de bairro, estúdios de treinamento funcional e unidades de redes maiores no Centro e nas principais avenidas. O grande contingente de trabalhadores ligados ao setor moveleiro e ao comércio forma um público interessado em qualidade de vida, e o atendimento personalizado vem ganhando espaço como alternativa ao treino genérico.',

  bairrosNobres: ['Centro', 'San Raphael', 'Bom Pastor', 'Eldorado'],
  bairrosPopulares: ['Industrial', 'Olaria', 'Peluso', 'Bela Vista'],

  parques: [
    {
      nome: 'Parque Florestal Municipal de Ubá',
      descricao:
        'Área de mata preservada de mais de 40 hectares próxima à cidade, às margens da rodovia que liga Ubá à região, com trilhas e espaço de natureza usado para caminhada e contato com o verde da Zona da Mata.',
    },
    {
      nome: 'Praça São Januário',
      descricao:
        'Uma das principais praças do Centro, é ponto de encontro e referência urbana, aproveitada por moradores para caminhada e convívio no coração comercial da cidade.',
    },
    {
      nome: 'Praças e áreas verdes do Centro',
      descricao:
        'O núcleo urbano de Ubá reúne praças arborizadas e calçadões usados para caminhada leve e atividade ao ar livre em percursos curtos e planos.',
    },
  ],
  ciclovias:
    'A cidade dispõe de trechos de circulação e vias da malha urbana aproveitados por ciclistas; o relevo de vale, com a sede em terreno relativamente baixo, favorece pedaladas e caminhadas nos percursos mais planos do Centro.',

  clima:
    'O clima é tropical de altitude, característico da Zona da Mata mineira, com a sede do município em torno de 320 m. Os verões são quentes e chuvosos e os invernos amenos e mais secos, com noites frescas.',
  climaTreino:
    'O treino ao ar livre é viável na maior parte do ano; recomenda-se evitar o calor do meio-dia no verão, priorizar o início da manhã ou o fim da tarde e ter atenção às chuvas concentradas entre novembro e março.',

  mobilidade:
    'Ubá é um entroncamento rodoviário da Zona da Mata, cortada pela BR-120 e próxima à BR-265, o que a conecta a Juiz de Fora, à Capital e a municípios vizinhos do polo moveleiro. O deslocamento urbano é feito principalmente por ônibus e veículos próprios, com distâncias curtas dentro da cidade.',

  corridas: [
    {
      nome: 'Corridas de rua de Ubá',
      descricao:
        'A cidade tem calendário de corridas e caminhadas de rua promovidas por organizadores locais e regionais, com provas em distâncias variadas pelas ruas e avenidas centrais.',
    },
    {
      nome: 'Circuitos e eventos esportivos regionais',
      descricao:
        'Etapas de circuitos esportivos e ações ligadas a causas sociais reúnem corredores de Ubá e de municípios vizinhos do polo moveleiro ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Ubá se apoia em academias de bairro, futebol e em uma cena crescente de corrida de rua, alimentada por um público ativo ligado à indústria e ao comércio. As praças do Centro e as áreas verdes do entorno favorecem caminhada e corrida em percursos planos.',
  academias:
    'A oferta combina academias de bairro, estúdios de treinamento funcional e unidades de redes nas avenidas centrais, dando boa cobertura para musculação e aulas, com espaço para treino ao ar livre nas praças e no parque florestal.',

  destaquesFitness: [
    'Capital Nacional do Móvel, maior polo moveleiro de Minas Gerais, com forte público ligado à indústria.',
    'Berço do compositor Ary Barroso, com identidade cultural marcante na Zona da Mata.',
    'Parque Florestal Municipal e praças do Centro para caminhada e atividade ao ar livre.',
    'Posição de entroncamento na BR-120, próxima à BR-265 e a Juiz de Fora.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Capital Nacional do Móvel e principal polo moveleiro de Minas Gerais, Ubá reúne um público ativo, ligado à indústria e ao comércio, em busca de qualidade de vida. Com clima de altitude favorável, praças e o parque florestal para treinar, um personal trainer ajuda a transformar essa estrutura em resultado, com método e constância ao longo do ano.',

  vizinhas: ['juiz-de-fora-mg', 'muriae-mg', 'barbacena-mg'],

  capaArte: {
    src: '/capas-cidade/uba-mg.webp',
    w: 1200,
    h: 1200,
    alt: 'Personal trainer em Ubá (MG) em arte com a Praça São Januário, a igreja matriz e o centro da cidade, com o treino em primeiro plano — Personal por Perto',
    legenda: 'Treino personalizado em Ubá: treino perto de você, com acompanhamento profissional na Zona da Mata mineira.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Ubá', url: 'https://cidades.ibge.gov.br/brasil/mg/uba/panorama' },
    { nome: 'Prefeitura de Ubá', url: 'https://www.uba.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-01',
};
