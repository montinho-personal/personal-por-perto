import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'irati-pr',
  nome: 'Irati',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'iratiense',
  tipo: 'cidade',

  populacao: 59250,
  populacaoAno: 2022,
  idhm: 0.726,
  idhmClasse: 'alto',
  altitudeM: 812,

  resumoEconomico:
    'Conhecida como a Terra dos Pinheirais, Irati fica no Centro-Sul paranaense, a cerca de 150 km de Curitiba, em uma região de araucárias e clima frio. A economia tem raízes nos ciclos da madeira e da erva-mate, ainda presentes nas serrarias e no beneficiamento do mate e do pinhão, somados à agropecuária. A cidade é polo regional de educação, com campi da UNICENTRO e do IFPR, e carrega forte herança da colonização eslava, sobretudo polonesa e ucraniana.',

  mercado:
    'Como cidade média e universitária do interior do Sul, Irati tem um mercado fitness em crescimento, impulsionado pelo público estudantil e por moradores que buscam rotina ativa apesar do frio. A procura por personal trainers tende a se concentrar em quem quer manter a constância no inverno rigoroso e adaptar o treino às temperaturas baixas e às geadas frequentes.',

  bairrosNobres: ['Centro', 'Rio Bonito', 'Vila São João', 'Lagoa'],
  bairrosPopulares: ['Itapará', 'Pinho de Baixo', 'Riozinho', 'Engenheiro Gutierrez'],

  parques: [
    {
      nome: 'Parque Aquático de Irati',
      descricao:
        'Inaugurado em 1989, é a principal área de lazer da cidade, com cerca de 79 mil m² em torno de um lago. Reúne pista de caminhada e ciclismo, academia ao ar livre, quadras e playground, sendo o espaço mais usado para treino ao ar livre e ponto de partida de corridas de rua.',
    },
    {
      nome: 'Praça Etelvina Andrade Gomes',
      descricao:
        'A praça da matriz, em frente à Igreja Nossa Senhora da Luz, no centro da cidade. Arborizada e revitalizada, tem chafariz, quadra, playground e áreas de caminhada, servindo de espaço de convívio e de atividade leve no coração de Irati.',
    },
    {
      nome: 'Áreas de araucária do entorno',
      descricao:
        'A região é marcada pela mata de araucárias, imbuia e erva-mate, com trilhas e áreas verdes que oferecem opções de caminhada e contato com a natureza típica do planalto paranaense.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece na pista do Parque Aquático e nas vias da cidade, condicionados pelo relevo e pelo frio.',

  clima:
    'O clima é subtropical de altitude (Cfb na classificação de Köppen), com verões amenos e invernos rigorosos. A cerca de 812 metros de altitude, Irati registra geadas frequentes e severas no inverno, temperatura média anual em torno de 18 °C e sem estação seca definida, com chuvas bem distribuídas ao longo do ano.',
  climaTreino:
    'O frio e as geadas pedem aquecimento mais longo e roupas adequadas para o treino ao ar livre, sobretudo nas manhãs de inverno; o fim da manhã e o início da tarde costumam ser os horários mais confortáveis, enquanto os ambientes fechados garantem regularidade nos dias mais gelados.',

  mobilidade:
    'Irati é cortada pela BR-277, que liga o Porto de Paranaguá a Foz do Iguaçu, e pela BR-153, no sentido norte-sul, posição que faz da cidade um entroncamento regional. O transporte urbano é feito por ônibus, e a antiga estrada de ferro São Paulo–Rio Grande, que deu origem ao núcleo urbano no fim do século XIX, marca a história e a malha da cidade.',

  corridas: [
    {
      nome: 'Corrida de São Cristóvão',
      descricao:
        'Prova tradicional de rua de Irati, com percursos de 5 km e 10 km e corrida kids, parte do calendário esportivo local e ponto de encontro dos corredores da região.',
    },
    {
      nome: 'Corrida das 4 Estações',
      descricao:
        'Evento de corrida de rua realizado na cidade, com distâncias variadas, que reforça o crescimento do atletismo de rua em Irati.',
    },
    {
      nome: 'Corrida da Felicidade Night Run',
      descricao:
        'Prova noturna com percursos de 2,5 km, 5 km e 10 km que reúne centenas de participantes e marca a expansão da corrida de rua no município.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso do Parque Aquático para caminhada, corrida e pedal, um calendário ativo de provas de rua e a vida universitária, tudo moldado pelo frio do planalto e pela herança das comunidades eslavas.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média e universitária do interior.',

  destaquesFitness: [
    'Terra dos Pinheirais: cidade de altitude cercada por mata de araucárias e áreas verdes.',
    'Parque Aquático de Irati como principal espaço de caminhada, corrida e ciclismo ao ar livre.',
    'Clima frio subtropical, com geadas frequentes que exigem adaptar horário e aquecimento no treino.',
    'Cidade universitária e polo regional, com economia ligada à madeira, à erva-mate e à herança eslava.',
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
    'Cidade fria de altitude, universitária e cercada por araucárias, Irati pede um treino que respeite o inverno rigoroso e aproveite o Parque Aquático e as áreas verdes. Um personal trainer ajuda a organizar a rotina, escolher os melhores horários e manter a constância mesmo nos dias de geada.',

  vizinhas: ['ponta-grossa-pr', 'guarapuava-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Irati', url: 'https://cidades.ibge.gov.br/brasil/pr/irati/panorama' },
    { nome: 'Prefeitura de Irati', url: 'https://irati.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
