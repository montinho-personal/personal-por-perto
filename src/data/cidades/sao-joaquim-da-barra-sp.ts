import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-joaquim-da-barra-sp',
  nome: 'São Joaquim da Barra',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'joaquinense',
  tipo: 'cidade',

  populacao: 48558,
  populacaoAno: 2022,
  idhm: 0.762,
  idhmClasse: 'alto',
  altitudeM: 625,

  resumoEconomico:
    'No nordeste paulista, na Região de Governo de Franca e na região geográfica intermediária de Ribeirão Preto, São Joaquim da Barra ocupa 411 km² de terra plana e fértil a 625 metros de altitude. O agronegócio responde por cerca de 40% da economia e por metade dos empregos do município: a soja é a principal atividade agrícola, ao lado da cana-de-açúcar, do milho, do sorgo e do feijão. O detalhe que muda o perfil da cidade está em quem emprega. A atividade com mais postos de trabalho não é a lavoura, é a fabricação de açúcar, com cerca de 4,2 mil empregos — mais que o dobro do ensino fundamental, que vem em segundo, e quase o triplo da administração pública, em terceiro. Ou seja: é uma cidade de usina, com a rotina industrial que isso implica.',

  mercado:
    'O mercado fitness local é de porte interiorano, formado por academias de bairro, studios pequenos e profissionais que atendem em domicílio. A particularidade está na agenda dos alunos: o maior empregador da cidade opera em turnos, e boa parte da clientela em potencial troca de horário a cada poucas semanas. É a rotina mais hostil à constância que existe, porque derruba justamente o que sustenta o hábito — o horário fixo. Um treino desenhado para "toda terça e quinta às 19h" não sobrevive ao primeiro mês de turno noturno. O acompanhamento que funciona aqui é o que planeja por número de sessões na semana, não por dia da semana — e é também onde o formato online costuma render mais, porque acompanha a troca de turno sem depender de agenda presencial.',

  bairrosNobres: [],
  bairrosPopulares: [],

  parques: [
    {
      nome: 'Centro de Lazer Orlando Olivatto',
      descricao:
        'Abriga o Ginásio Municipal de Esportes João Batista de Freitas Malheiros, na Rua Hermes Duque de Farias, e concentra a estrutura esportiva pública da cidade.',
    },
    {
      nome: 'Praças e ruas planas do Centro',
      descricao:
        'O relevo praticamente sem inclinação faz da malha central o percurso natural de caminhada e corrida leve, especialmente no fim da tarde.',
    },
    {
      nome: 'Vicinais entre as lavouras',
      descricao:
        'As estradas que cortam os talhões de soja e cana oferecem percursos longos e de tráfego baixo para corrida e pedal, com a ressalva do sol aberto e da falta de sombra.',
    },
  ],
  ciclovias:
    'A cidade não tem malha cicloviária estruturada divulgada em fonte oficial. O pedal urbano acontece nas ruas planas do Centro, e o de estrada aproveita as vicinais da zona rural — terreno fácil de perna e difícil de sol.',

  clima:
    'O clima é tropical de altitude, com verão quente e chuvoso e inverno seco. A 625 metros, as noites de inverno são amenas, mas o verão no nordeste paulista é francamente quente, com tardes acima dos 30 °C com frequência.',
  climaTreino:
    'O calor do verão empurra o treino ao ar livre para o começo da manhã ou depois das 18h — e nas vicinais, onde não há sombra nenhuma, isso deixa de ser preferência e vira condição. O inverno seco é a melhor janela do ano para correr e pedalar na cidade. Em dias de pico de calor, trocar o percurso aberto por um treino coberto rende mais do que insistir e encurtar a sessão pela metade.',

  mobilidade:
    'A cidade é cortada pela Rodovia Anhanguera (SP-330), que também passa por Orlândia e liga o município a Ribeirão Preto ao sul. A SP-345 (Rodovia Fábio Talarico) cruza a SP-334 (Cândido Portinari) e dá o acesso a Franca. O deslocamento interno é curto e rodoviário.',

  corridas: [
    {
      nome: 'Etapa do Circuito Paulista de Corridas de Rua',
      descricao:
        'Prova com percursos de 5 km, 10 km e categoria kids, com largada e chegada nas vias da cidade.',
    },
    {
      nome: 'Summer Run — etapa São Joaquim da Barra',
      descricao:
        'Etapa local de circuito de corrida de rua, no calendário de verão da região.',
    },
  ],
  culturaEsportiva:
    'A cidade mantém atletismo de base com resultado fora dela: atletas joaquinenses figuram em campeonatos paulistas da categoria sub-18. Somam-se a isso o futebol e o futsal dos equipamentos municipais, as aulas públicas gratuitas oferecidas pela prefeitura e um calendário de corrida de rua que se apoia nos circuitos regionais do nordeste paulista.',
  academias:
    'A oferta reúne academias de musculação de bairro e studios de treinamento funcional, sem presença das grandes redes nacionais — cenário comum em cidades desse porte, e que costuma favorecer o atendimento individualizado.',
  academiasProximas: [
    { nome: 'Fórmula Fitness Academia', detalhe: 'na Rua Marcília Mingoni Tuzi, 175, no Residencial Espigão' },
  ],
  academiasVerificadasEm: '2026-09-22',

  destaquesFitness: [
    'Relevo plano e vicinais longas: terreno fácil para volume de corrida e pedal, com sol aberto como principal limitador.',
    'Cidade de usina, com parte relevante da população em trabalho por turnos — o maior inimigo do horário fixo de treino.',
    'Atletismo de base com representação em campeonato paulista sub-18.',
    'Sem redes nacionais de academia: o mercado é de academias de bairro e atendimento individual.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 145,
    mensalMin: 310,
    mensalMax: 820,
    onlineMin: 150,
    onlineMax: 390,
  },

  conclusao:
    'Cidade de usina no nordeste paulista, plana, quente no verão e com boa parte da população trabalhando em turnos, São Joaquim da Barra tem um mercado fitness pequeno e um desafio de constância bem específico. Um personal trainer resolve aqui menos pela escolha dos exercícios e mais pela estrutura: um plano contado em sessões por semana, e não em dias fixos, é o que sobrevive à próxima troca de turno.',

  vizinhas: ['guaira-sp', 'batatais-sp', 'franca-sp', 'ribeirao-preto-sp'],

  fontes: [
    { nome: 'IBGE Cidades — São Joaquim da Barra', url: 'https://cidades.ibge.gov.br/brasil/sp/sao-joaquim-da-barra/panorama' },
    { nome: 'Prefeitura de São Joaquim da Barra', url: 'https://www.saojoaquimdabarra.sp.gov.br/' },
    { nome: 'ABAG/RP — perfil econômico de São Joaquim da Barra', url: 'https://www.abagrp.org.br/sao-joaquim-da-barra' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-09-22',
};
