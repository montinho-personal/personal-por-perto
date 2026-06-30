import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sousa-pb',
  nome: 'Sousa',
  uf: 'PB',
  estado: 'Paraíba',
  estadoSlug: 'paraiba',
  regiao: 'Nordeste',
  gentilico: 'sousense',
  tipo: 'cidade',

  populacao: 67259,
  populacaoAno: 2022,
  idhm: 0.668,
  idhmClasse: 'médio',
  altitudeM: 220,

  resumoEconomico:
    'Sousa é um dos principais polos do Alto Sertão da Paraíba, a cerca de 430 km de João Pessoa, na divisa com o Ceará. A cidade é mundialmente conhecida pelo Vale dos Dinossauros, sítio paleontológico com centenas de pegadas (icnofósseis) preservadas nos leitos do rio do Peixe. A economia combina comércio e serviços regionais com a fruticultura irrigada das Várzeas de Sousa e do Perímetro Irrigado de São Gonçalo, além de uma rede de ensino superior que inclui campi da UFCG e do IFPB.',

  mercado:
    'O mercado fitness acompanha o papel de Sousa como centro regional do Alto Sertão, com academias de bairro, estúdios e profissionais que atendem tanto o público local quanto estudantes atraídos pela UFCG e pelo IFPB. A demanda por personal trainers cresce em torno do acompanhamento individualizado e do treino adaptado ao calor intenso do semiárido.',

  bairrosNobres: ['Centro', 'Angelim', 'Jardim Sorrilândia', 'Doze Anos'],
  bairrosPopulares: ['Frei Damião', 'Gato Preto', 'Cuncas', 'Bairros Reunidos'],

  parques: [
    {
      nome: 'Monumento Natural Vale dos Dinossauros',
      descricao:
        'Unidade de conservação a poucos quilômetros do centro, no sítio Passagem das Pedras, com pegadas fossilizadas de dinossauros (icnofósseis) preservadas no leito do rio do Peixe. As passarelas revitalizadas permitem caminhadas leves em meio a um dos mais importantes sítios paleontológicos do mundo.',
    },
    {
      nome: 'Perímetro Irrigado de São Gonçalo',
      descricao:
        'Área de agricultura irrigada às margens do açude de São Gonçalo, com estradas vicinais e paisagem de várzea usadas por moradores para caminhadas e pedaladas no fim do dia.',
    },
    {
      nome: 'Praças e calçadões do Centro',
      descricao:
        'O Centro concentra praças arborizadas e calçadões que servem de ponto de encontro para caminhada e exercícios ao ar livre, especialmente no início da manhã e à noite, quando o calor cede.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária ainda é incipiente; deslocamentos de bicicleta ocorrem sobretudo em vias do Centro e nas estradas vicinais do perímetro irrigado, sem malha segregada extensa divulgada em fonte oficial.',

  clima:
    'O clima é semiárido quente e seco (tipo BSh de Köppen), típico do Alto Sertão paraibano, com temperaturas elevadas durante quase todo o ano, baixa umidade, forte evaporação e chuvas concentradas e irregulares em poucos meses.',
  climaTreino:
    'O calor intenso e a baixa umidade pedem cautela: o treino ao ar livre rende mais no início da manhã e após o pôr do sol, com hidratação reforçada. Nos horários quentes do dia, ambientes cobertos ou climatizados tendem a ser a melhor opção.',

  mobilidade:
    'O principal eixo de acesso é a BR-230 (Transamazônica), que corta a Paraíba de leste a oeste e liga Sousa a Cajazeiras e à divisa com o Ceará, além de conectar a cidade a Patos e ao restante do estado. A posição de entroncamento reforça o papel de Sousa como polo de serviços do Alto Sertão.',

  corridas: [
    {
      nome: 'Corrida do PROCON de Sousa',
      descricao:
        'Prova de rua realizada na cidade, com percursos de corrida e caminhada que reúnem participantes locais e da região do Alto Sertão.',
    },
    {
      nome: 'Provas de rua do calendário sertanejo',
      descricao:
        'Sousa integra o circuito de corridas de rua do Sertão paraibano, com eventos pontuais promovidos por grupos de corrida e parceiros locais ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o futebol, com tradição em torno do Sousa Esporte Clube, e um movimento crescente de corrida e caminhada entre moradores. O clima quente leva grande parte da prática para os horários mais frescos do dia e para ambientes cobertos.',
  academias:
    'A oferta reúne academias de bairro, estúdios e espaços de treino voltados ao público local e estudantil, com destaque para o atendimento personalizado e para o treino adaptado às condições do semiárido.',

  destaquesFitness: [
    'Polo regional do Alto Sertão da PB, com rede de ensino superior (UFCG e IFPB) que sustenta a demanda fitness.',
    'Vale dos Dinossauros e o rio do Peixe como cenário único para caminhadas leves.',
    'Fruticultura irrigada de São Gonçalo, com estradas vicinais usadas para caminhada e pedal no fim do dia.',
    'Clima semiárido que valoriza o treino orientado nos horários frescos e em ambientes cobertos.',
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
    'Centro de serviços, educação e fruticultura do Alto Sertão paraibano, Sousa une o patrimônio único do Vale dos Dinossauros a um clima semiárido que exige estratégia no treino. Um personal trainer ajuda o sousense a manter a constância respeitando os horários frescos do dia, do iniciante a quem busca participar das corridas de rua da região.',

  vizinhas: ['cajazeiras-pb', 'patos-pb'],

  fontes: [
    { nome: 'IBGE Cidades — Sousa', url: 'https://cidades.ibge.gov.br/brasil/pb/sousa/panorama' },
    { nome: 'Prefeitura de Sousa', url: 'https://www.sousa.pb.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
