import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santa-isabel-sp',
  nome: 'Santa Isabel',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'isabelense',
  tipo: 'cidade',

  populacao: 53174,
  populacaoAno: 2022,
  idhm: 0.738,
  idhmClasse: 'alto',
  altitudeM: 640,

  resumoEconomico:
    'Na Região Metropolitana de São Paulo e no Alto Tietê, a cerca de 60 km da capital, Santa Isabel combina uma economia de serviços e indústria com forte vocação rural e turística. Os serviços respondem pela maior fatia do PIB, seguidos da indústria e da administração pública, enquanto a agropecuária sustenta o turismo rural que rendeu à cidade o título de Município de Interesse Turístico. Grande parte do território fica em área de proteção aos mananciais, o que preserva serras, cachoeiras e a paisagem verde que atrai visitantes.',

  mercado:
    'Como cidade de porte médio integrada à metrópole paulista, Santa Isabel tem mercado fitness enxuto, formado por academias de bairro e estúdios de treino, mas próximo da estrutura de Arujá, Guarulhos e Mogi das Cruzes. A procura por personal trainers aparece entre quem quer treino orientado para aproveitar as trilhas, a Serra do Itapeti e as estradas rurais, e entre moradores que buscam acompanhamento sem depender de deslocamento para as cidades vizinhas.',

  bairrosNobres: ['Centro', 'Jardim Monte Serrat', 'Recanto Imperial', 'Parque São Benedito'],
  bairrosPopulares: ['Morro Grande', 'Cachoeira', 'Cruz do Século', 'Jardim Eldorado'],

  parques: [
    {
      nome: 'Serra do Itapeti',
      descricao:
        'Conjunto de serras cobertas por Mata Atlântica que emoldura a região de Santa Isabel e Mogi das Cruzes; suas trilhas e estradas rurais são usadas para caminhada, corrida e pedal em meio à natureza.',
    },
    {
      nome: 'Mirante do Monte Serrat',
      descricao:
        'Ponto elevado a cerca de 716 m, com capela no topo e vista ampla da cidade; o percurso de subida serve de desafio para quem treina ao ar livre e virou cartão-postal isabelense.',
    },
    {
      nome: 'Represa Jaguari e Rota Águas & Sabores',
      descricao:
        'Trecho de estrada às margens da represa, com cachoeiras e vista para as serras, muito procurado por ciclistas e por quem busca atividade ao ar livre no ambiente rural do município.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária urbana é modesta; o pedal em Santa Isabel acontece sobretudo nas estradas rurais e nos trechos junto à Represa Jaguari e à Serra do Itapeti, procurados por praticantes de mountain bike e cicloturismo.',

  clima:
    'O clima é subtropical (Cwa), com verão quente e chuvoso e inverno ameno e mais seco. A temperatura média anual gira em torno de 18 °C, com fevereiro entre os meses mais quentes (média perto de 22 °C) e julho o mais frio (média perto de 14 °C), reflexo da altitude de cerca de 640 m e do relevo de serras.',
  climaTreino:
    'A altitude e as temperaturas amenas favorecem o treino ao ar livre boa parte do ano; no verão vale priorizar o início da manhã ou o fim da tarde por causa das chuvas e do calor, e no inverno as manhãs frias pedem aquecimento reforçado antes de trilhas e subidas.',

  mobilidade:
    'Santa Isabel se conecta à capital e ao Vale do Paraíba pela Rodovia Presidente Dutra (BR-116) e fica próxima de Guarulhos e do Aeroporto Internacional de Guarulhos. O transporte intermunicipal é gerido pela EMTU, ligando a cidade a Arujá, Guararema, Guarulhos, Itaquaquecetuba, Mogi das Cruzes, Poá, Suzano e São Paulo; a extensa malha de estradas rurais dá acesso aos sítios e atrativos do interior do município.',

  corridas: [
    {
      nome: 'Circuito de corridas de rua do Alto Tietê',
      descricao:
        'A região do Alto Tietê, que inclui Santa Isabel e cidades vizinhas como Mogi das Cruzes, reúne provas de corrida de rua ao longo do ano, aproveitando o clima ameno e o relevo de serras.',
    },
    {
      nome: 'Provas e trilhas na Serra do Itapeti',
      descricao:
        'O entorno da Serra do Itapeti e as estradas rurais servem de cenário para corridas e caminhadas em meio à natureza, atraindo praticantes de trail run da metrópole paulista.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local é marcada pelo uso das serras, trilhas e estradas rurais para caminhada, corrida e pedal, somado ao turismo de aventura e ao voo livre praticado nas rampas da região. A proximidade com a metrópole aproxima os isabelenses de eventos e provas do Alto Tietê e da Grande São Paulo.',
  academias:
    'A oferta é composta principalmente por academias de musculação e estúdios de treino funcional nos bairros centrais e residenciais, com porte compatível com uma cidade média da Região Metropolitana de São Paulo.',

  destaquesFitness: [
    'Serra do Itapeti, trilhas e estradas rurais como cenário para corrida, caminhada e pedal.',
    'Clima subtropical ameno e altitude de cerca de 640 m, favoráveis ao treino ao ar livre.',
    'Município de Interesse Turístico na Região Metropolitana de São Paulo, com turismo rural e de aventura.',
    'Acesso pela Rodovia Presidente Dutra e proximidade de Guarulhos e do aeroporto internacional.',
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
    'Cidade de serras, mananciais e turismo rural na Região Metropolitana de São Paulo, Santa Isabel oferece um ambiente privilegiado para treinar ao ar livre, do Monte Serrat às estradas junto à Represa Jaguari. Um personal trainer ajuda a montar uma rotina que aproveite o clima ameno e o relevo, definindo horários e progressão para caminhadas, corridas e pedais ao longo do ano.',

  vizinhas: ['aruja-sp', 'guarulhos-sp', 'mogi-das-cruzes-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Santa Isabel', url: 'https://cidades.ibge.gov.br/brasil/sp/santa-isabel/panorama' },
    { nome: 'Prefeitura de Santa Isabel', url: 'https://site.santaisabel.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
