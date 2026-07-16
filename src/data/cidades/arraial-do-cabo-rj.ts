import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'arraial-do-cabo-rj',
  nome: 'Arraial do Cabo',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'arraialense',
  tipo: 'cidade',

  populacao: 30986,
  populacaoAno: 2022,
  idhm: 0.700,
  idhmClasse: 'alto',
  altitudeM: 4,

  resumoEconomico:
    'Conhecida como a "Capital do Mergulho" e apelidada de Caribe brasileiro pelas águas transparentes, Arraial do Cabo integra a Região dos Lagos fluminense. A economia gira em torno do turismo de sol e mar e do mergulho — favorecido pela ressurgência, fenômeno que traz à superfície águas frias e ricas em nutrientes vindas de até 350 metros de profundidade —, além da pesca artesanal, historicamente central para a cidade, e da produção de sal em salinas na região. A cidade também abrange uma reserva extrativista marinha e mantém parceria de pesquisa e conservação ambiental com a Petrobras.',

  mercado:
    'O mercado fitness de Arraial do Cabo é o de uma cidade litorânea de porte pequeno, com academias e boxes de crosstraining concentrados em bairros como Praia Grande e Centro. A forte vocação para esportes aquáticos — mergulho, natação, stand up paddle — e para a corrida ao ar livre nas orlas movimenta a procura por personal trainers, tanto entre moradores quanto entre visitantes que buscam manter a rotina de treino durante temporadas na cidade.',

  bairrosNobres: ['Praia dos Anjos', 'Praia Grande', 'Centro'],
  bairrosPopulares: ['Monte Alto', 'São Vicente de Paulo', 'Caiçara', 'Morro do Cantagalo'],

  parques: [
    {
      nome: 'Praia dos Anjos',
      descricao:
        'Praia central de onde partem os passeios de barco e mergulho, cercada por quiosques e restaurantes; funciona como ponto de encontro e também de atividade física ao ar livre pela manhã.',
    },
    {
      nome: 'Praia Grande e Orla Flávia Alessandra',
      descricao:
        'Extensa faixa de areia com calçadão que recebe as principais corridas de rua da cidade e é o principal espaço para caminhada, corrida e treino funcional ao ar livre.',
    },
    {
      nome: 'Praia do Farol e Ilha de Cabo Frio',
      descricao:
        'Trecho de areia branca e mar turquesa considerado um dos mais bonitos do Brasil, acessível por trilha ou barco; a trilha até o mirante é usada como treino de resistência com vista para o Atlântico.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é limitada, e boa parte dos deslocamentos ativos e do treino ao ar livre acontece nos calçadões e orlas das praias urbanas, como Praia Grande e Praia dos Anjos.',

  clima:
    'Arraial do Cabo tem o microclima mais seco do litoral fluminense, com clima tropical litorâneo, ventos constantes (o "vento de Arraial") e volume de chuvas baixo para os padrões do estado, em torno de 800 mm anuais. As temperaturas são amenizadas pela brisa marítima e pela ressurgência de águas frias, o que deixa o mar mais fresco que em outras praias da Região dos Lagos.',
  climaTreino:
    'Os ventos constantes tornam o treino ao ar livre agradável mesmo em dias quentes, mas exigem atenção à radiação solar e à hidratação nas praias e trilhas; o mar mais frio pede aquecimento adequado antes de atividades aquáticas como natação e mergulho.',

  mobilidade:
    'O acesso rodoviário principal se dá pela Rodovia Amaral Peixoto (RJ-106), que liga a cidade a Cabo Frio e ao restante da Região dos Lagos, e pela RJ-140. O transporte interno é feito por ônibus municipais e intermunicipais, além de táxis e aplicativos; distâncias curtas entre bairros e praias favorecem deslocamentos a pé ou de bicicleta.',

  corridas: [
    {
      nome: 'Meia Maratona Região dos Lagos',
      descricao:
        'Prova de 21 km (além de percurso de 5 km) com largada na Praia Grande, em Arraial do Cabo, e percurso que liga a cidade a Cabo Frio.',
    },
    {
      nome: 'Summer Night Run Arraial do Cabo',
      descricao:
        'Corrida noturna de 6 km com percurso plano na Orla Flávia Alessandra, na Praia Grande, voltada tanto a corredores experientes quanto a iniciantes.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local é fortemente marcada pelo mar: mergulho autônomo e livre, natação em águas abertas, stand up paddle e pesca esportiva convivem com a corrida de rua e o trail running nas orlas e trilhas costeiras, aproveitando a visibilidade da água e as paisagens da Região dos Lagos.',
  academias:
    'A oferta reúne academias de musculação e boxes de crosstraining de pequeno e médio porte, concentrados principalmente nos bairros Praia Grande e Centro, além de estúdios de pilates e escolas de mergulho e esportes aquáticos que também oferecem preparo físico.',

  destaquesFitness: [
    'Capital do Mergulho: águas claras e ressurgência que atraem praticantes de mergulho e natação em águas abertas de todo o país.',
    'Orlas de Praia Grande e Praia dos Anjos como principais espaços de caminhada, corrida e treino funcional ao ar livre.',
    'Ventos constantes e baixo índice de chuvas, que tornam o treino ao ar livre viável na maior parte do ano.',
    'Economia apoiada em turismo, pesca artesanal e produção de sal, com forte sazonalidade entre alta e baixa temporada.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 140,
    mensalMin: 280,
    mensalMax: 800,
    onlineMin: 120,
    onlineMax: 380,
  },

  conclusao:
    'Cidade litorânea de vocação turística e esportiva, Arraial do Cabo oferece cenário natural raro para treinar ao ar livre, das orlas urbanas às trilhas com vista para o mar. Um personal trainer ajuda a aproveitar esse potencial com segurança, equilibrando atividades aquáticas, corrida e musculação conforme a rotina de moradores e a sazonalidade do turismo.',

  vizinhas: ['cabo-frio-rj', 'sao-pedro-da-aldeia-rj', 'araruama-rj', 'buzios-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Arraial do Cabo', url: 'https://cidades.ibge.gov.br/brasil/rj/arraial-do-cabo/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/3300258' },
    { nome: 'Prefeitura de Arraial do Cabo', url: 'https://www.arraial.rj.gov.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
