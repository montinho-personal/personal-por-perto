import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'morada-nova-ce',
  nome: 'Morada Nova',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'moradanovense',
  tipo: 'cidade',

  populacao: 62065,
  populacaoAno: 2022,
  idhm: 0.610,
  idhmClasse: 'médio',
  altitudeM: 52,

  resumoEconomico:
    'No Vale do Jaguaribe, no sertão central cearense, Morada Nova é um dos maiores municípios do estado em território e tem na terra e na água as bases da economia. A agropecuária pesa muito — a região figura entre as principais bacias leiteiras do Ceará — e a agricultura irrigada é marca da cidade: o Perímetro Irrigado de Morada Nova, implantado pelo DNOCS a partir do fim dos anos 1960, foi pioneiro no Nordeste e ainda reúne centenas de irrigantes que cultivam arroz, feijão e outras culturas com água do rio Banabuiú. Comércio e serviços da sede atendem a uma ampla zona rural e aos distritos, como São João do Aruaru e Uiraponga.',

  mercado:
    'Como cidade média do interior cearense, Morada Nova tem um mercado fitness enxuto, formado sobretudo por academias locais de musculação e treino funcional na área central. A procura por personal trainers cresce entre quem quer treino orientado para conviver com o calor do semiárido e aproveitar as primeiras horas da manhã e o fim de tarde, quando o clima fica mais ameno.',

  bairrosNobres: ['Centro', 'Alto São Manoel', 'Conjunto Frei Antônio', 'Planalto'],
  bairrosPopulares: ['Cohab', 'Salesianos', 'Mutirão', 'São Vicente'],

  parques: [
    {
      nome: 'Margens do Rio Banabuiú',
      descricao:
        'O Banabuiú corta o município e abastece o perímetro irrigado; os trechos urbanos e as estradas vicinais à beira do rio servem de percurso para quem caminha, corre ou pedala no fim do dia.',
    },
    {
      nome: 'Perímetro Irrigado de Morada Nova',
      descricao:
        'A malha de canais, lotes agrícolas e estradas do perímetro implantado pelo DNOCS desenha um cenário plano e arejado, usado informalmente para caminhada e ciclismo no campo.',
    },
    {
      nome: 'Praças e calçadões do Centro',
      descricao:
        'As praças e o entorno do Centro concentram a vida ao ar livre da cidade, com espaços de convivência que recebem caminhadas e atividades físicas leves nos horários mais frescos.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é modesta e restrita a trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da sede e nas estradas rurais planas que cortam o perímetro irrigado e o entorno do rio Banabuiú.',

  clima:
    'O clima é quente, do tipo semiárido típico do sertão cearense, com temperaturas elevadas durante quase todo o ano e baixa amplitude térmica. A chuva se concentra no primeiro semestre (a quadra chuvosa, de fevereiro a maio), enquanto o segundo semestre é marcadamente seco, com sol forte e ar seco.',
  climaTreino:
    'O calor constante e o ar seco do semiárido pedem treino bem cedo ou já no fim da tarde, com hidratação reforçada e atenção à exposição ao sol; nos horários de pico de calor, ambientes climatizados são a opção mais segura e confortável.',

  mobilidade:
    'Morada Nova fica a cerca de 162 km de Fortaleza e se articula com a capital e com o Vale do Jaguaribe pela rede rodoviária regional, com ligação à BR-116 — principal eixo norte-sul do estado. Os deslocamentos internos se dão por vias urbanas e por uma extensa malha de estradas que conectam a sede aos distritos e à zona rural.',

  corridas: [
    {
      nome: 'Corridas de rua locais',
      descricao:
        'A cidade recebe pontualmente provas de corrida de rua organizadas por grupos e pela rede esportiva municipal, aproveitando as ruas da sede e os horários mais frescos do dia.',
    },
    {
      nome: 'Circuito de corridas do Vale do Jaguaribe',
      descricao:
        'Corredores moradanovenses costumam participar de provas em municípios vizinhos do Vale do Jaguaribe, como Limoeiro do Norte e Russas, que mantêm um calendário ativo de corridas de rua na região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o futebol e as atividades de comunidade com a caminhada e a corrida nos horários mais amenos, além do uso das estradas planas do perímetro irrigado e das margens do Banabuiú para pedalar e treinar ao ar livre.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, concentradas no Centro e nos bairros residenciais da sede, com porte compatível com uma cidade média do interior nordestino.',

  destaquesFitness: [
    'Cidade do Vale do Jaguaribe, no sertão central cearense, com forte vocação para agropecuária e agricultura irrigada.',
    'Perímetro Irrigado de Morada Nova, pioneiro no Nordeste, e as margens do rio Banabuiú como espaços de treino ao ar livre.',
    'Clima quente e semiárido, que exige planejar horário e hidratação no treino.',
    'Ligação com Fortaleza e o Vale do Jaguaribe pela rede rodoviária regional e pela BR-116.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Quente, plana e marcada pela água da irrigação no meio do sertão, Morada Nova pede um treino adaptado ao calor do semiárido e que aproveite as margens do Banabuiú e as estradas do perímetro irrigado. Um personal trainer ajuda a organizar a rotina respeitando o clima, escolhendo os melhores horários e mantendo a constância ao longo do ano.',

  vizinhas: ['limoeiro-do-norte-ce', 'russas-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Morada Nova', url: 'https://cidades.ibge.gov.br/brasil/ce/morada-nova/panorama' },
    { nome: 'Prefeitura de Morada Nova', url: 'https://www.moradanova.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
