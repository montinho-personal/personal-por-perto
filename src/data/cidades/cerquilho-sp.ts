import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cerquilho-sp',
  nome: 'Cerquilho',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'cerquilhense',
  tipo: 'cidade',

  populacao: 44695,
  populacaoAno: 2022,
  idhm: 0.782,
  idhmClasse: 'alto',
  altitudeM: 561,

  resumoEconomico:
    'Cerquilho fica no interior paulista, na região de Sorocaba e às margens do rio Sorocaba, tendo se emancipado de Tietê em 1949. A cidade é reconhecida por seu polo têxtil e de confecção — com destaque para a fabricação de meias e de moda infantil, formado sobretudo por micro e pequenas empresas — e por um setor industrial diversificado que inclui plásticos e alimentos. Os serviços e o comércio respondem pela maior fatia do valor adicionado, e a cidade costuma aparecer entre os municípios do interior com qualidade de vida acima da média.',

  mercado:
    'Como cidade média e industrial de bom padrão socioeconômico, Cerquilho tem um mercado fitness em crescimento, ancorado em academias de musculação e estúdios de treino funcional nos bairros centrais e residenciais. A procura por personal trainers tende a vir de trabalhadores da indústria e do comércio que buscam treino orientado para saúde, postura e rotina, além de quem quer aproveitar praças e o entorno do rio para atividade ao ar livre.',

  bairrosNobres: ['Centro', 'Cidade Jardim', 'Residencial Parque das Árvores', 'Recanto da Colina'],
  bairrosPopulares: ['Vila Nova', 'Taquaral', 'Vila Pedroso', 'Jardim Nova Cerquilho'],

  parques: [
    {
      nome: 'Orla e entorno do rio Sorocaba',
      descricao:
        'O rio Sorocaba corta o território do município e é um dos principais atrativos naturais da cidade, com trechos usados para lazer, esportes de aventura e atividade ao ar livre em meio à mata ciliar.',
    },
    {
      nome: 'Praças e arborização do centro',
      descricao:
        'As praças e canteiros da região central concentram parte da caminhada e da corrida do dia a dia, servindo de ponto de encontro para quem treina cedo ou no fim da tarde.',
    },
    {
      nome: 'Condomínios e loteamentos arborizados',
      descricao:
        'Bairros planejados como o Cidade Jardim e o Residencial Parque das Árvores oferecem ruas arborizadas e tranquilas, aproveitadas por moradores para caminhada e corrida leve.',
    },
  ],
  ciclovias:
    'A malha cicloviária é modesta e concentrada em trechos urbanos; boa parte do pedal e da corrida acontece nas vias residenciais e em estradas vicinais do entorno, condicionadas ao tráfego local.',

  clima:
    'O clima é tropical de altitude, ameno para os padrões do interior paulista, com verão quente e chuvoso e inverno mais seco e fresco. A cidade fica a cerca de 560 metros de altitude, o que ajuda a suavizar o calor em boa parte do ano.',
  climaTreino:
    'As condições costumam ser favoráveis ao treino ao ar livre na maior parte do ano; no verão convém priorizar o começo da manhã ou o fim da tarde e reforçar a hidratação, enquanto o inverno seco e fresco pede aquecimento mais cuidadoso e atenção aos horários mais frios.',

  mobilidade:
    'Cerquilho se conecta à região por rodovias, com destaque para a SP-127 (Rodovia Antonio Romano Schincariol), que liga a cidade a Tietê e a Sorocaba, e para o acesso à Rodovia Castello Branco (SP-280), que a aproxima da capital. O transporte urbano é feito por ônibus, e a localização a cerca de 140 km de São Paulo favorece o fluxo logístico da indústria local.',

  corridas: [
    {
      nome: 'Level Run Cerquilho',
      descricao:
        'Prova de corrida de rua realizada em Cerquilho, com percurso pelas vias da cidade e largada na região central, reunindo corredores locais e da região de Sorocaba.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso de praças e ruas dos bairros residenciais para caminhada e corrida, o entorno do rio Sorocaba para lazer e esportes de aventura, e provas de rua que movimentam a comunidade da região de Sorocaba.',
  academias:
    'A oferta é formada por academias de musculação e estúdios de treino funcional distribuídos pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média e industrializada do interior paulista.',

  destaquesFitness: [
    'Cidade da região de Sorocaba, às margens do rio Sorocaba, com IDHM alto e qualidade de vida acima da média.',
    'Polo têxtil e de confecção (meias e moda infantil), com indústria diversificada de plásticos e alimentos.',
    'Clima tropical de altitude, ameno, que favorece o treino ao ar livre em boa parte do ano.',
    'Boa conexão rodoviária pela SP-127 e pelo acesso à Castello Branco, a cerca de 140 km da capital.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Cidade industrial de bom padrão de vida no interior paulista, Cerquilho combina clima ameno, praças e o entorno do rio Sorocaba para quem quer treinar com constância. Um personal trainer ajuda a montar uma rotina realista para a agenda de quem trabalha na indústria e no comércio, aproveitando os espaços ao ar livre e mantendo a regularidade ao longo do ano.',

  vizinhas: ['tatui-sp', 'tiete-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Cerquilho', url: 'https://cidades.ibge.gov.br/brasil/sp/cerquilho/panorama' },
    { nome: 'Prefeitura de Cerquilho', url: 'https://www.cerquilho.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
