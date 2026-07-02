import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'borda-da-mata-mg',
  nome: 'Borda da Mata',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'borda-matense',
  tipo: 'cidade',

  populacao: 17404,
  populacaoAno: 2022,
  idhm: 0.730,
  idhmClasse: 'alto',
  altitudeM: 892,

  resumoEconomico:
    'No Sul de Minas, na Serra da Mantiqueira e a curta distância de Camanducaia e do distrito de Monte Verde, Borda da Mata é conhecida como polo têxtil regional: quase 200 empresas do setor produzem pijamas, moda íntima, cama-mesa-banho e roupas, vendidas em lojas às margens da rodovia MG-290, dentro da chamada Rota da Moda. A economia soma ainda serviços, comércio e agropecuária, com destaque para a cafeicultura (cerca de 900 toneladas de café por ano), milho, feijão e pecuária de corte, além do turismo religioso — a cidade integra os caminhos do Caminho da Fé, do Caminho da Prece e do Caminho de Nhá Chica — e do turismo de aventura pelas estradas rurais do entorno serrano.',

  mercado:
    'Cidade pequena e de perfil têxtil e agropecuário, o mercado fitness de Borda da Mata é formado por academias de bairro, com musculação e treino funcional, complementadas por profissionais autônomos. A procura por personal trainer tende a vir de quem busca treino orientado no clima frio de altitude típico da Mantiqueira e de trabalhadores do setor têxtil e do comércio que buscam rotina de exercícios compatível com jornadas de fábrica e loja.',

  bairrosNobres: ['Centro', 'Nossa Senhora de Fátima', 'Santo Antônio', 'Nova Borda'],
  bairrosPopulares: ['São Judas Tadeu', 'São Benedito', 'Santa Cruz', 'Santa Rita'],

  parques: [
    {
      nome: 'Praça Antônio Megale',
      descricao:
        'Praça central e núcleo histórico da cidade, ponto de referência do Centro e de eventos locais, usada para caminhada entre o comércio e os casarios do entorno.',
    },
    {
      nome: 'Praça Nossa Senhora do Carmo',
      descricao:
        'Ao lado da Praça Antônio Megale, forma com ela o núcleo original do povoado; espaço de convivência e caminhada no Centro da cidade.',
    },
    {
      nome: 'Estradas rurais e trilhas do entorno serrano',
      descricao:
        'Os quase 30 bairros rurais do município, entre eles Bocaina, Serrinha e Morcego, dão acesso a estradas de terra e trilhas na Serra da Mantiqueira, usadas para caminhada, corrida e ciclismo de estrada rumo a Camanducaia e Monte Verde.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária urbana estruturada; o relevo montanhoso e as estradas rurais que sobem em direção à Serra da Mantiqueira são o principal espaço usado por ciclistas de estrada, enquanto a caminhada e a corrida se concentram nas ruas do Centro e nas praças históricas.',

  clima:
    'Localizada na Serra da Mantiqueira, a cerca de 892 m de altitude na sede, Borda da Mata tem clima tropical de altitude, com verões amenos e invernos frios, marcados por geadas e mínimas próximas de 0 °C — típicos da região que também abriga Monte Verde e Camanducaia, um dos trechos mais frios de Minas Gerais.',
  climaTreino:
    'O clima frio de altitude pede aquecimento mais cuidadoso e roupas adequadas para treinar ao ar livre nas manhãs e noites de inverno, mas favorece a corrida e a caminhada durante o dia, sem os riscos de calor extremo comuns a cidades de baixada.',

  mobilidade:
    'A cidade fica próxima à Rodovia Fernão Dias (BR-381), principal ligação entre Belo Horizonte e São Paulo, e é servida pela rodovia estadual MG-290, eixo da Rota da Moda que conecta Borda da Mata a Cambuí, Ouro Fino e outras cidades do Circuito das Malhas. A BR-459 liga a região a Pouso Alegre e Poços de Caldas. O deslocamento interno é feito majoritariamente a pé ou de carro, dado o porte compacto da área urbana.',

  corridas: [
    {
      nome: 'Desafio da Porteira do Céu',
      descricao:
        'Prova de percurso rural com cerca de 17 km em estradas de terra e subidas no entorno serrano de Borda da Mata, voltada a corredores que buscam desafio em contato com a natureza.',
    },
    {
      nome: 'Trail Jacutinga–Borda da Mata',
      descricao:
        'Prova de trail running com largada em Jacutinga e chegada em Borda da Mata, com percursos longos (na casa dos 65 km e 29 km) que atravessam estradas rurais e trechos de serra da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina corridas rurais e de trail que aproveitam o relevo da Serra da Mantiqueira, caminhadas nas praças históricas do Centro e o uso das estradas vicinais por ciclistas de estrada rumo a Camanducaia e Monte Verde, num cenário moldado pelo clima frio de altitude.',
  academias:
    'A oferta reúne academias de bairro de pequeno e médio porte, com musculação, aulas coletivas e treino funcional, compatível com o porte de uma cidade pequena do Sul de Minas de perfil têxtil e agropecuário.',

  destaquesFitness: [
    'Clima frio de altitude na Serra da Mantiqueira, com geadas no inverno e verões amenos, exigindo aquecimento adequado para o treino ao ar livre.',
    'Estradas rurais e trilhas do entorno serrano, usadas para corrida, caminhada e ciclismo rumo a Camanducaia e Monte Verde.',
    'Polo têxtil regional (Rota da Moda), com rotina de trabalho em fábricas e lojas que molda a demanda por horários de treino.',
    'Acesso pela BR-381 (Fernão Dias) e pela MG-290, conectando a cidade ao Circuito das Malhas e ao Sul de Minas.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 260,
    mensalMax: 680,
    onlineMin: 120,
    onlineMax: 340,
  },

  conclusao:
    'Pequena, serrana e de clima frio de altitude, Borda da Mata combina economia têxtil e agropecuária com paisagem de Serra da Mantiqueira. Um personal trainer ajuda a adaptar o treino às baixas temperaturas do inverno e a aproveitar as estradas rurais e as praças do Centro, mantendo a constância ao longo do ano.',

  vizinhas: ['pouso-alegre-mg', 'cambui-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Borda da Mata', url: 'https://cidades.ibge.gov.br/brasil/mg/borda-da-mata/panorama' },
    { nome: 'Prefeitura de Borda da Mata', url: 'https://bordadamata.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
