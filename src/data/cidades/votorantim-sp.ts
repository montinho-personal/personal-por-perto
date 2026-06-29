import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'votorantim-sp', nome: 'Votorantim', uf: 'SP', estado: 'São Paulo', estadoSlug: 'sao-paulo', regiao: 'Sudeste', gentilico: 'votorantinense', tipo: 'cidade',
  populacao: 127923, populacaoAno: 2022, idhm: 0.767, idhmClasse: 'alto', altitudeM: 570,

  resumoEconomico:
    'Conurbada a Sorocaba e integrante da Região Metropolitana de Sorocaba, Votorantim tem origem e identidade ligadas à indústria: foi ali, junto à cachoeira que os indígenas chamavam de "Boturantim", às margens do Rio Sorocaba, que nasceu em 1891 a Fábrica de Tecidos Votorantim, embrião do futuro Grupo Votorantim, estruturado em 1918-1919 com atuação em têxtil, cal e cimento. A produção cimenteira foi tão expressiva que a cidade chegou a ser apontada como "Capital do Cimento". Hoje a economia segue de base industrial, somada ao comércio e aos serviços puxados pela conurbação com Sorocaba.',

  mercado:
    'O mercado fitness é o de uma cidade média fortemente integrada a Sorocaba: muitos moradores treinam dos dois lados da conurbação, o que amplia a oferta de academias e estúdios. Há boa presença de redes e academias de bairro, e o atendimento domiciliar e em condomínios é um caminho natural para o personal trainer, especialmente nos bairros residenciais e na demanda de quem prefere treinar perto de casa.',

  bairrosNobres: ['Vossoroca', 'Jardim Santa Helena', 'Parque Bela Vista', 'Jardim Bandeirantes'],
  bairrosPopulares: ['Vila Garcia', 'Jardim Icatu', 'Rio Acima', 'Vila Nova Votorantim'],

  parques: [
    {
      nome: 'Parque Ecológico do Matão',
      descricao:
        'Área de cerca de 63 mil m² na região do Parque Bela Vista, com trilhas em meio à vegetação nativa e orquidário — bom para caminhada tranquila e contato com a natureza.',
    },
    {
      nome: 'Serra de São Francisco',
      descricao:
        'Área de proteção ambiental com cachoeiras e relevo acidentado, ponto de encontro de ciclistas e corredores de trilha que buscam treino em terreno natural.',
    },
    {
      nome: 'Praça de Eventos Lecy de Campos',
      descricao:
        'Espaço público com pista para caminhada e corrida, academia ao ar livre, área de skate e playground — opção prática para treino no dia a dia.',
    },
  ],
  ciclovias:
    'A cidade tem trechos cicloviários e se beneficia da proximidade com Sorocaba, referência nacional em mobilidade por bicicleta, cuja malha de ciclovias chega à divisa entre os dois municípios.',

  clima:
    'O clima é subtropical, com média anual em torno de 20 °C, verões quentes e chuvosos e invernos amenos e mais secos.',
  climaTreino:
    'O treino ao ar livre é viável o ano todo. No verão, vale priorizar o começo da manhã e o fim da tarde por causa do calor e das pancadas de chuva; no inverno, as manhãs frias pedem aquecimento, mas a janela para treinar é excelente.',

  mobilidade:
    'Votorantim é fisicamente conurbada a Sorocaba, com deslocamento contínuo entre as duas cidades, e fica próxima das rodovias Castello Branco (SP-280) e Raposo Tavares (SP-270), que ligam a região à capital, a cerca de 100 km.',

  corridas: [
    {
      nome: 'Provas de rua municipais',
      descricao:
        'A cidade recebe corridas de rua locais e datas comemorativas, com largadas em áreas públicas como a Praça de Eventos Lecy de Campos.',
    },
    {
      nome: 'Circuitos da conurbação com Sorocaba',
      descricao:
        'Pela proximidade, votorantinenses participam com frequência do calendário de corridas de rua de Sorocaba, com provas recorrentes ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso dos espaços naturais — trilhas e cachoeiras da Serra de São Francisco, ciclismo e corrida de trilha — com a forte influência de Sorocaba, vizinha referência em mobilidade ativa e provas de rua. Caminhada, corrida e bicicleta fazem parte do cotidiano.',
  academias:
    'Há academias de rede e estúdios de bairro, complementados pela ampla oferta da conurbada Sorocaba, a poucos minutos. Os parques e praças funcionam como extensão natural para o treino ao ar livre.',

  destaquesFitness: [
    'Cidade média conurbada a Sorocaba, na Região Metropolitana de Sorocaba, com oferta fitness integrada.',
    'Espaços naturais para treino: Serra de São Francisco, Cachoeira da Chave e Parque Ecológico do Matão.',
    'Praça de Eventos Lecy de Campos com pista, academia ao ar livre e área de skate.',
    'Tradição industrial (têxtil e cimento) e proximidade com Sorocaba sustentam academias e o atendimento domiciliar.',
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
    'Conurbada a Sorocaba e cercada por natureza — da Cachoeira da Chave à Serra de São Francisco —, Votorantim oferece um cenário versátil para treinar. Um personal trainer ajuda a aproveitar tanto as academias da região quanto os espaços ao ar livre, transformando trilhas, praças e treino em casa em um plano consistente.',

  vizinhas: ['sorocaba-sp', 'itu-sp', 'itapetininga-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Votorantim', url: 'https://cidades.ibge.gov.br/brasil/sp/votorantim/panorama' },
    { nome: 'Prefeitura de Votorantim', url: 'https://www.votorantim.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
