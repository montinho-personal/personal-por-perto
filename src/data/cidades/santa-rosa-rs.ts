import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santa-rosa-rs',
  nome: 'Santa Rosa',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'santa-rosense',
  tipo: 'cidade',

  populacao: 76963,
  populacaoAno: 2022,
  idhm: 0.769,
  idhmClasse: 'alto',
  altitudeM: 277,

  resumoEconomico:
    'No Noroeste gaúcho, Santa Rosa é reconhecida como o "Berço Nacional da Soja" — título oficializado por lei federal em 2022 —, por ter sido um dos pontos de partida do cultivo comercial da leguminosa no país. A economia gira em torno do agronegócio (soja, milho, leite e suinocultura, com uma das maiores bacias leiteiras do estado) e de um forte polo metalmecânico voltado a máquinas e implementos agrícolas, que abriga grandes fabricantes do setor. O comércio e os serviços regionais reforçam o papel da cidade como referência do extremo noroeste do Rio Grande do Sul.',

  mercado:
    'Como polo regional do Noroeste gaúcho, Santa Rosa concentra a oferta fitness de uma área que atende várias cidades vizinhas menores. O mercado é formado por academias de musculação e treino funcional e por profissionais autônomos, com procura por personal trainers ligada à rotina de quem trabalha na agroindústria e no comércio e busca treino orientado para saúde, emagrecimento e qualidade de vida.',

  bairrosNobres: ['Centro', 'Auxiliadora', 'Glória', 'Cruzeiro'],
  bairrosPopulares: ['Sulina', 'Timbaúva', 'Planalto', 'Pippi'],

  parques: [
    {
      nome: 'Parque Municipal de Exposições Alfredo Leandro Carlson',
      descricao:
        'Um dos maiores parques de eventos do interior do estado, com cerca de 47 hectares, palco da FENASOJA e do Museu da Soja; as amplas áreas abertas, pavilhões e pistas servem de espaço para caminhada, corrida e atividades ao ar livre fora dos períodos de feira.',
    },
    {
      nome: 'Praças e áreas verdes do Centro',
      descricao:
        'O entorno da área central reúne praças arborizadas e calçadões usados no dia a dia para caminhada e encontros, formando os pontos mais acessíveis para quem treina perto de casa na malha urbana.',
    },
    {
      nome: 'Bosques e arredores rurais',
      descricao:
        'Cercada por lavouras e propriedades rurais, a cidade tem estradas vicinais e trechos arborizados nos arredores que viram opção para corrida de longa distância e pedal em meio à paisagem agrícola típica da região.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é pontual, concentrada em avenidas e trechos da área urbana, e a bicicleta tem uso cotidiano como meio de transporte. Boa parte do pedal e da corrida de rua acontece nas vias da cidade e nas estradas do entorno rural.',

  clima:
    'O clima é subtropical úmido, com verões quentes (frequentemente entre 30 °C e mais nos picos) e invernos amenos a frios, podendo registrar temperaturas baixas e geadas. As chuvas se distribuem ao longo do ano e a umidade é característica da região, favorecendo a vocação agrícola que deu fama à cidade.',
  climaTreino:
    'No verão, o ideal é treinar cedo ou no fim da tarde, com boa hidratação para enfrentar calor e umidade; no inverno, o frio pede aquecimento mais longo e agasalho adequado para o treino ao ar livre. A variação entre estações torna útil alternar atividades externas e ambientes cobertos ao longo do ano.',

  mobilidade:
    'Santa Rosa é cortada pela BR-472 e conectada à malha estadual pela ERS-344, eixos que ligam a cidade às vizinhas do Noroeste e à fronteira com a Argentina. O transporte urbano é feito por ônibus, e o Aeroporto Municipal Luís Alberto Lehr atende a aviação regional, reforçando o papel da cidade como entroncamento logístico do extremo noroeste gaúcho.',

  corridas: [
    {
      nome: 'Corridas de rua de Santa Rosa',
      descricao:
        'A cidade integra o calendário de provas de rua do Noroeste gaúcho, com eventos organizados ao longo do ano que reúnem corredores locais e da região em percursos pela malha urbana.',
    },
    {
      nome: 'Provas regionais do Noroeste',
      descricao:
        'Como polo regional, Santa Rosa serve de base para corredores que participam de provas em cidades vizinhas, alimentando uma comunidade ativa de corrida e caminhada.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso das praças e do parque de exposições para caminhada e corrida, a forte tradição de eventos ligados ao agronegócio (com a FENASOJA como marca da cidade) e uma comunidade de corredores que aproveita as vias urbanas e as estradas do entorno rural.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional distribuídas pelo Centro e pelos bairros, com porte compatível com uma cidade média que funciona como referência de serviços para toda a microrregião.',

  destaquesFitness: [
    'Berço Nacional da Soja: cidade-referência do agronegócio e sede da FENASOJA.',
    'Parque Municipal de Exposições Alfredo Leandro Carlson como grande espaço aberto para atividade física.',
    'Clima subtropical com verões quentes e invernos frios, que pede ajuste de horário e roupa no treino.',
    'Polo metalmecânico e logístico do Noroeste gaúcho, conectado pela BR-472 e pela ERS-344.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Polo do Noroeste gaúcho e berço da soja no país, Santa Rosa combina rotina urbana ativa, amplos espaços ao ar livre e um clima de estações bem marcadas. Um personal trainer ajuda a organizar o treino respeitando o calor do verão e o frio do inverno, aproveitando praças, o parque de exposições e as estradas do entorno para manter a constância ao longo do ano.',

  vizinhas: ['santo-angelo-rs', 'ijui-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Santa Rosa', url: 'https://cidades.ibge.gov.br/brasil/rs/santa-rosa/panorama' },
    { nome: 'Prefeitura de Santa Rosa', url: 'https://prefeitura.santarosa.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
