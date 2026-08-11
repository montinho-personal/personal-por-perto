import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'jaguariaiva-pr',
  nome: 'Jaguariaíva',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'jaguariaivense',
  tipo: 'cidade',

  populacao: 35141,
  populacaoAno: 2022,

  resumoEconomico:
    'Com 35.141 habitantes (Censo 2022), Jaguariaíva cresceu 7,77% desde 2010 e é um dos polos industriais dos Campos Gerais do Paraná: papel, celulose, madeira, alimentos e embalagens respondem pela maior fatia do PIB local, apoiados nos extensos reflorestamentos de coníferas da região. A herança tropeira — a fazenda que deu origem à cidade foi adquirida pelo coronel Luciano Carneiro Lobo no fim do século XVIII — segue viva na Rota dos Tropeiros.',

  mercado:
    'O mercado de personal trainer é de cidade média industrial: turnos de fábrica criam demanda por horários alternativos, e as academias do Centro e da Cidade Alta concentram a oferta. O atendimento a domicílio e o treino em grupo nos parques e praças completam o quadro.',

  bairrosNobres: ['Centro', 'Cidade Alta', 'Jardim Matarazzo', 'Jardim Capivari'],
  bairrosPopulares: ['Vila Pinheiro', 'Santa Cecília', 'Lagoão', 'Primavera'],

  parques: [
    {
      nome: 'Parque Estadual do Cerrado',
      descricao:
        'Criado em 1992, com 1.830 hectares divididos entre Jaguariaíva e Sengés, protege uma das últimas manchas de cerrado do Paraná e o cânion do rio Jaguariaíva, com trilhas e mirantes sobre os paredões.',
    },
    {
      nome: 'Cânion do rio Jaguariaíva',
      descricao:
        'Cerca de 10 km de percurso encaixado entre paredões que chegam a 80 metros — cenário de rafting, canoagem e caminhadas de borda.',
    },
    {
      nome: 'Cachoeira da Lagoa Azul',
      descricao:
        'Um dos atrativos mais conhecidos do município; acima da queda, uma trilha aquática percorre um trecho de cânion com outras três cachoeiras no caminho.',
    },
    {
      nome: 'Rota dos Tropeiros',
      descricao:
        'Jaguariaíva integra a espinha dorsal do roteiro histórico que refaz os caminhos das tropas pelos Campos Gerais — pedaladas e cavalgadas percorrem os trechos rurais.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária urbana é pontual. Nos fins de semana, os grupos de pedal usam as estradas rurais da Rota dos Tropeiros e os acessos ao Parque Estadual do Cerrado.',

  clima:
    'Subtropical, com verões amenos para o padrão brasileiro e invernos frios com geadas — a cidade está no segundo planalto paranaense, em área de campos entremeados de bosques.',
  climaTreino:
    'O calor raramente impede o treino ao ar livre, e o verão pede apenas atenção aos horários de sol forte. No inverno, as manhãs geladas favorecem quem prefere treinar no fim da tarde ou em ambiente coberto.',

  mobilidade:
    'A cidade é compacta e de deslocamentos curtos, cortada pela ferrovia e pelos eixos que ligam ao restante dos Campos Gerais. Ponta Grossa, o polo regional, fica a pouco mais de uma hora de carro.',

  corridas: [
    {
      nome: 'Provas de rua e trail dos Campos Gerais',
      descricao:
        'O calendário regional combina corridas de rua nas cidades do eixo e provas de trilha que exploram cânions, campos e áreas de cerrado.',
    },
  ],
  culturaEsportiva:
    'Futebol amador, pedal de estrada rural e o ecoturismo do cânion formam a base local. O rafting e a canoagem no rio Jaguariaíva atraem praticantes de toda a região.',
  academias:
    'A oferta se concentra no Centro e na Cidade Alta, com academias de musculação de porte médio e estúdios menores — suficiente para sustentar o trabalho de personal em horários de pico.',

  destaquesFitness: [
    'Parque Estadual do Cerrado: 1.830 ha e uma das últimas manchas de cerrado do Paraná.',
    'Cânion do rio Jaguariaíva, com cerca de 10 km e paredões de até 80 m.',
    'Cachoeira da Lagoa Azul e a trilha aquática do cânion.',
    'Rota dos Tropeiros cruzando o município.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 720,
    onlineMin: 140,
    onlineMax: 380,
  },

  conclusao:
    'Jaguariaíva junta chão de fábrica, campos gerais e um cânion de 80 metros de paredão. Um personal trainer daqui trabalha com turnos e horários alternativos durante a semana — e tem no cerrado, na Lagoa Azul e na Rota dos Tropeiros o laboratório de fim de semana dos alunos.',

  vizinhas: ['tibagi-pr', 'castro-pr', 'ponta-grossa-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Jaguariaíva', url: 'https://www.ibge.gov.br/cidades-e-estados/pr/jaguariaiva.html' },
    { nome: 'Prefeitura de Jaguariaíva', url: 'https://www.jaguariaiva.pr.gov.br/' },
    { nome: 'Viaje Paraná — Jaguariaíva', url: 'https://www.viajeparana.com/Jaguariaiva' },
  ],
  atualizadoEm: '2026-08-11',
};
