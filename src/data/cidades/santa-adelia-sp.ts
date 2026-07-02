import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santa-adelia-sp',
  nome: 'Santa Adélia',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'santa-adeliense',
  tipo: 'cidade',

  populacao: 14018,
  populacaoAno: 2022,
  idhm: 0.760,
  idhmClasse: 'alto',
  altitudeM: 618,

  resumoEconomico:
    'Santa Adélia nasceu na fazenda Dumont, da Companhia Agrícola Santa Sofia, com terras doadas por Luiz Dumont em 1907 para o povoado que receberia o nome da filha do fazendeiro; emancipada de Taquaritinga, tornou-se município em 1916, no traçado da antiga estrada de ferro Araraquara. Cidade pequena do noroeste paulista, integra a microrregião de Catanduva e tem economia apoiada na agropecuária — com destaque para o cultivo de cana-de-açúcar, o maior empregador do município — e na citricultura, já que Santa Adélia faz parte da maior região produtora de lima ácida tahiti de São Paulo, ao lado de Itajobi, Urupês, Pindorama e Novo Horizonte, com a laranja também presente entre as culturas tradicionais. Comércio e administração pública completam a base econômica de um município cujo PIB per capita fica abaixo da média estadual.',

  mercado:
    'Por ser um município pequeno, com pouco mais de 14 mil habitantes, Santa Adélia tem um mercado fitness enxuto, formado por academias e estúdios locais — como o Studio Fenix, no Centro — e por profissionais de educação física que atendem de forma próxima e personalizada. Quem busca mais variedade de academias, provas de corrida e estrutura esportiva tende a recorrer também a Catanduva, a cerca de 25 km, polo regional de saúde e serviços.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Jardim Darcizinho', 'Vila Botelho', 'Santa Rosa', 'Ururaí'],

  parques: [
    {
      nome: 'Praça Dr. Adhemar de Barros',
      descricao:
        'Praça central, em frente à Igreja Matriz, é o principal espaço público de convivência da cidade e sedia festividades ao longo do ano, como a celebração de Nossa Senhora Aparecida em outubro — ponto de encontro também usado para caminhada.',
    },
    {
      nome: 'Estádio Municipal Orivaldo Thito Colombo',
      descricao:
        'Equipamento esportivo municipal usado para futebol e eventos, ao lado do ginásio de esportes da cidade, onde é organizada parte da agenda esportiva da Secretaria Municipal de Esportes, Turismo e Lazer.',
    },
    {
      nome: 'Estradas rurais entre pomares de laranja e limão',
      descricao:
        'A zona rural, coberta por pomares de citros e canaviais, oferece estradas vicinais de baixo tráfego usadas informalmente para caminhada, corrida e pedal por quem busca contato com a paisagem agrícola do município.',
    },
  ],
  ciclovias:
    'Não há dados oficiais consolidados sobre malha cicloviária na cidade; o ciclismo acontece principalmente pelas vias urbanas do Centro e pelas estradas rurais entre as plantações.',

  clima:
    'O clima é tropical do interior paulista, com verão quente e chuvoso e inverno seco e ameno, moderado pela altitude de cerca de 618 m da sede municipal.',
  climaTreino:
    'No verão, o calor e as chuvas de fim de tarde pedem treino nas primeiras horas da manhã e boa hidratação; o inverno seco, com dias mais amenos, costuma ser o período mais confortável para caminhar, correr ou pedalar ao ar livre pela cidade e pela zona rural.',

  mobilidade:
    'O acesso principal é pela Rodovia Washington Luís (SP-310), com entroncamento no km 364 e ligação à cidade pela Avenida Orivaldo Thito Colombo; Catanduva fica a cerca de 25 km, Jaboticabal a cerca de 58 km e a capital paulista a aproximadamente 350 km. O transporte dentro do município é feito por ônibus e o acesso aos distritos de Botelho, Santa Rosa e Ururaí se dá por estradas vicinais.',

  corridas: [
    {
      nome: 'Corridas e caminhadas do calendário municipal',
      descricao:
        'A Secretaria Municipal de Esportes, Turismo e Lazer organiza corridas de rua, caminhadas e eventos esportivos ao longo do ano, movimentando a Praça Dr. Adhemar de Barros e as vias centrais da cidade.',
    },
    {
      nome: 'Circuito regional de corridas de rua',
      descricao:
        'A proximidade com Catanduva, que sedia etapas do Circuito Sesc de Corridas e a Agro Power Run, coloca corredores de Santa Adélia na rota de provas da microrregião.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local tem forte marca rural e country: o Santa Adélia Rodeio Festival (Festa do Peão), realizado em setembro no Clube de Rodeio da cidade, é o principal evento esportivo-cultural do calendário, ao lado da tradição do futebol amador, representado por clubes como a A.D. União Santa Adélia e pelo Estádio Municipal Orivaldo Thito Colombo. A vida ao ar livre também passa pela paisagem citricultora e canavieira que cerca a sede do município.',
  academias:
    'A oferta de academias é pequena e concentrada no Centro, complementada por profissionais de educação física e personal trainers que atendem de forma próxima, dado o porte do município; moradores que buscam mais opções costumam recorrer também às academias de Catanduva.',

  destaquesFitness: [
    'Cidade pequena e citricultora, parte da maior região produtora de lima ácida tahiti de São Paulo, com estradas rurais entre pomares para caminhada, corrida e pedal.',
    'Praça Dr. Adhemar de Barros e Estádio Municipal Orivaldo Thito Colombo como principais pontos de encontro para atividade física e esporte.',
    'Santa Adélia Rodeio Festival (Festa do Peão), em setembro, como marco da tradição esportivo-cultural country da cidade.',
    'Proximidade com Catanduva (cerca de 25 km), que amplia o acesso a academias, provas de corrida e estrutura fitness da microrregião.',
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
    'Pequena cidade citricultora do noroeste paulista, Santa Adélia combina rotina tranquila, tradição rural e um mercado fitness enxuto e próximo. Um personal trainer ajuda a montar uma rotina consistente nesse cenário, aproveitando a Praça Dr. Adhemar de Barros, o Estádio Municipal e as estradas rurais entre os pomares, com atenção ao calor do verão e à agenda esportiva do calendário municipal.',

  vizinhas: ['catanduva-sp', 'jaboticabal-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Santa Adélia', url: 'https://cidades.ibge.gov.br/brasil/sp/santa-adelia/panorama' },
    { nome: 'Prefeitura de Santa Adélia', url: 'https://www.santaadelia.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
