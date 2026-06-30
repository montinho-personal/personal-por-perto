import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cordeiro-rj',
  nome: 'Cordeiro',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'cordeirense',
  tipo: 'cidade',

  populacao: 20783,
  populacaoAno: 2022,
  idhm: 0.729,
  idhmClasse: 'alto',
  altitudeM: 485,

  resumoEconomico:
    'Cordeiro fica na Região Serrana do Rio de Janeiro, no centro-norte fluminense, em terras que começaram a ser ocupadas por fazendeiros no início do século XIX. A chegada da Estrada de Ferro Leopoldina, no fim do século XIX, impulsionou o povoado e moldou a ocupação do território — a antiga estação ferroviária faz parte da memória da cidade, emancipada de Cantagalo em 1943. A economia se apoia no comércio, que atende boa parte da microrregião, na agropecuária e na tradição leiteira da serra, com queijos, requeijão e doce de leite entre os produtos típicos.',

  mercado:
    'Como cidade média do interior serrano, Cordeiro tem um mercado fitness enxuto, formado por academias locais de musculação e treino funcional e por profissionais autônomos. A procura por personal trainers cresce entre quem busca acompanhamento individual para treinar com regularidade e aproveitar o clima ameno da serra para atividades ao ar livre.',

  bairrosNobres: ['Centro', 'Manancial', 'Piazzo'],
  bairrosPopulares: ['Lavrinhas', 'Bom Sucesso', 'Retiro Poético'],

  parques: [
    {
      nome: 'Praça central (Igreja Matriz)',
      descricao:
        'A praça em torno da igreja, no Centro, com coreto, arborização e espaço de lazer, é o principal ponto de encontro da cidade e referência para caminhadas no fim do dia.',
    },
    {
      nome: 'Fazendas históricas da serra',
      descricao:
        'Propriedades como Bom Sucesso, da Torre e Santa Clara guardam casarões e trilhas no entorno rural, oferecendo percursos para caminhada e atividade ao ar livre em meio à paisagem serrana.',
    },
    {
      nome: 'Vias e ruas do Centro',
      descricao:
        'O relevo suave e o clima ameno fazem das ruas centrais e dos acessos urbanos os trechos mais usados por quem corre e caminha pela cidade.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada na área urbana; boa parte do pedal e da corrida acontece nas vias do Centro e nas estradas vicinais de relevo suave que ligam a cidade à zona rural.',

  clima:
    'O clima é ameno, típico da serra fluminense, com verões moderados e invernos frios — a menor temperatura já registrada pelo INMET na cidade chegou a 3,2 °C, e as madrugadas de inverno costumam ser bastante frias. As chuvas se concentram no verão, e a altitude de cerca de 485 metros ajuda a suavizar o calor ao longo do ano.',
  climaTreino:
    'O clima ameno favorece o treino ao ar livre na maior parte do ano; no inverno, as madrugadas e noites frias pedem aquecimento mais cuidadoso e roupas adequadas, enquanto o verão chuvoso exige flexibilidade nos horários para fugir das pancadas de chuva.',

  mobilidade:
    'O acesso ao município se dá pela RJ-116 (eixo Itaboraí–Itaperuna), uma das principais vias da Região Serrana, com ligação à RJ-160 no sentido Cordeiro–Carmo. O transporte urbano é feito por ônibus, e a malha viária conecta a cidade a Nova Friburgo e a outros municípios do centro-norte fluminense. A antiga ferrovia da Leopoldina, hoje desativada para passageiros, permanece como marco histórico da formação da cidade.',

  corridas: [
    {
      nome: 'Corrida Rústica de Cordeiro',
      descricao:
        'Prova de corrida de rua realizada na cidade, que reúne atletas locais e da região serrana em percursos pelas vias urbanas.',
    },
    {
      nome: 'Encontro de MTB de Cordeiro',
      descricao:
        'Evento de mountain bike que aproveita as estradas e trilhas rurais do entorno, reforçando a vocação da serra para o esporte ao ar livre.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso das ruas e praças do Centro para caminhada e corrida, o ciclismo nas estradas rurais e eventos como a corrida rústica e o encontro de mountain bike — tudo favorecido pelo clima ameno da serra.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior serrano.',

  destaquesFitness: [
    'Cidade da Região Serrana fluminense, com clima ameno favorável ao treino ao ar livre.',
    'Praça central e estradas rurais como espaços de caminhada, corrida e ciclismo.',
    'Acesso pela RJ-116, eixo que conecta a cidade a Nova Friburgo e à microrregião.',
    'Economia de comércio e tradição leiteira da serra, com herança da ferrovia Leopoldina.',
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
    'Cidade serrana de clima ameno e ritmo de interior, Cordeiro oferece boas condições para treinar ao ar livre na maior parte do ano. Um personal trainer ajuda a organizar a rotina, ajustar os horários ao inverno frio e ao verão chuvoso e manter a constância ao longo das estações.',

  vizinhas: ['nova-friburgo-rj', 'tres-rios-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Cordeiro', url: 'https://cidades.ibge.gov.br/brasil/rj/cordeiro/panorama' },
    { nome: 'Prefeitura de Cordeiro', url: 'https://www.cordeiro.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
