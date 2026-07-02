import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cristina-mg',
  nome: 'Cristina',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'cristinense',
  tipo: 'cidade',

  populacao: 10374,
  populacaoAno: 2022,
  idhm: 0.670,
  idhmClasse: 'médio',
  altitudeM: 1025,

  resumoEconomico:
    'No Sul de Minas, numa das ramificações da Serra da Mantiqueira conhecida como Sertão da Pedra Branca, Cristina é uma cidade histórica pequena — elevada a município em 1872 — cuja economia gira em torno da pecuária leiteira, do comércio local e, sobretudo, do café especial de altitude. Fazendas da região, cultivadas entre 950 m e 1.500 m, já venceram o Cup of Excellence, o principal concurso internacional de cafés, o que rendeu à cidade o apelido de "Pérola da Mantiqueira" e projeção no roteiro do turismo rural e gastronômico. A antiga Estrada de Ferro Sapucaí, que chegou à cidade em 1881, foi decisiva para escoar a produção agrícola antes da era rodoviária.',

  mercado:
    'Por ser uma cidade pequena e serrana, Cristina tem um mercado fitness bastante enxuto, sem redes de academia — a oferta se resume a poucos espaços de musculação e a profissionais autônomos que atendem em domicílio ou em pequenos estúdios no Centro. A vocação rural e de ecoturismo da região favorece o personal trainer que trabalha com caminhada, trilha e treino ao ar livre, aproveitando fazendas de café, cachoeiras e a Serra da Pedra Branca como cenário de treino.',

  bairrosNobres: ['Centro', 'Glória', 'Rosário', 'Barra Mansa'],
  bairrosPopulares: ['Fazendinha', 'Campo do Rosário', 'São Sebastião', 'Vila Nova'],

  parques: [
    {
      nome: 'Serra da Pedra Branca',
      descricao:
        'Formação rochosa que chega a 1.847 m de altitude, na divisa entre Cristina, Conceição das Pedras e Pedralva. É ponto de referência histórica da região (o chamado Sertão da Pedra Branca) e reduto de trilha, trekking, acampamento e escalada para quem busca treino em meio à natureza.',
    },
    {
      nome: 'Cachoeira da Gruta e Rio do Bode',
      descricao:
        'Curso d\'água que atravessa a área urbana formando quedas e poços, entre eles o Poço dos Namorados, a poucos metros da praça central — opção de caminhada leve e contato com a natureza sem sair da cidade.',
    },
    {
      nome: 'Praça Santo Antônio e Chafariz de 1869',
      descricao:
        'Praça central bem preservada, com chafariz histórico e casarões do século XIX ao redor; é o palco das festividades cívicas da cidade e ponto de partida natural para caminhadas pelo Centro.',
    },
  ],

  clima:
    'O clima é tropical de altitude, ameno por causa dos mais de 1.000 m de elevação da Serra da Mantiqueira, com verões mais chuvosos e invernos secos e frios, com manhãs geladas e possibilidade de geada nos pontos mais altos do entorno rural.',
  climaTreino:
    'O clima serrano favorece o treino ao ar livre durante boa parte do ano, mas as manhãs de inverno exigem agasalho e aquecimento mais longo; no verão, a chuva concentrada à tarde torna o período da manhã o mais indicado para caminhada, trilha ou corrida.',

  mobilidade:
    'O acesso rodoviário principal é pela MG-347, via pavimentada que liga Carmo de Minas a Piranguinho (onde encontra a BR-459), passando por Cristina e Pedralva e conectando o município a Itajubá e Pouso Alegre. A antiga estação da Estrada de Ferro Sapucaí deu lugar, em 1991, ao terminal rodoviário da cidade, hoje sede também do Museu do Trem, com locomotiva a vapor preservada.',

  corridas: [
    {
      nome: 'Aniversário da Cidade (Praça Santo Antônio)',
      descricao:
        'Festividade cívica de elevação a município (15 de julho), com desfile escolar, shows e caminhada ecológica organizada pela Prefeitura, reunindo moradores em torno da praça central.',
    },
    {
      nome: 'Caminhada do Caminho de Nhá Chica',
      descricao:
        'Cristina é um dos 14 municípios cortados pelo Caminho de Nhá Chica, rota de peregrinação de 257 km entre Inconfidentes e o Santuário de Baependi, sinalizada e percorrida por caminhantes de dificuldade média ao longo do trajeto pelo Sul de Minas.',
    },
  ],
  culturaEsportiva:
    'A cultura de atividade física em Cristina está ligada à vida ao ar livre da serra: trilhas na Serra da Pedra Branca, caminhadas por trechos do Caminho de Nhá Chica e passeios entre fazendas de café de altitude, muitas delas abertas a visitação guiada por operadores locais de ecoturismo e aventura.',
  academias:
    'A cidade não tem redes de academia; a oferta se limita a pequenos espaços de musculação e a personal trainers autônomos, compatível com o porte de uma cidade histórica de pequeno porte no interior de Minas.',

  destaquesFitness: [
    'Serra da Pedra Branca, com 1.847 m de altitude, entre trilha, trekking e escalada na divisa com Conceição das Pedras e Pedralva.',
    'Caminho de Nhá Chica: Cristina é um dos 14 municípios da rota de peregrinação de 257 km pelo Sul de Minas.',
    'Clima ameno de altitude (mais de 1.000 m), típico da Serra da Mantiqueira, favorável ao treino ao ar livre boa parte do ano.',
    'Economia de café especial premiado no Cup of Excellence e pecuária leiteira, sem redes de academia na cidade.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 100,
    mensalMin: 250,
    mensalMax: 600,
    onlineMin: 115,
    onlineMax: 320,
  },

  conclusao:
    'Cidade histórica e serrana, Cristina tem no clima ameno da Mantiqueira e nas trilhas do entorno — da Serra da Pedra Branca ao Caminho de Nhá Chica — o principal ativo para quem quer treinar ao ar livre. Como o mercado local de academias é bastante restrito, um personal trainer que atenda em domicílio ou monte treinos para os espaços naturais da região tende a ser a opção mais prática para manter a constância.',

  vizinhas: ['itajuba-mg', 'pouso-alegre-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Cristina', url: 'https://cidades.ibge.gov.br/brasil/mg/cristina/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Cristina', url: 'https://www.cristina.mg.gov.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
