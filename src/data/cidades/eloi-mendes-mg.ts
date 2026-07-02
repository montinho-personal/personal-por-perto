import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'eloi-mendes-mg',
  nome: 'Elói Mendes',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'eloiense',
  tipo: 'cidade',

  populacao: 26336,
  populacaoAno: 2022,
  idhm: 0.685,
  idhmClasse: 'médio',
  altitudeM: 889,

  resumoEconomico:
    'No Sul de Minas, entre Varginha e Alfenas, Elói Mendes é um dos polos cafeeiros da região: são mais de 9 mil hectares plantados de café, tradição que aparece até no Monumento ao Café do brasão municipal. O PIB gira em torno de R$ 706 milhões, puxado pelos serviços (39,4%), pela agropecuária (22,8%, com arroz, feijão, milho, amendoim, cana e a pecuária de leite herdada dos antigos laticínios da região) e pela administração pública (21,2%). O comércio é diversificado, com dezenas de ramos de atividade, e o Distrito Industrial reúne fábricas de tapetes, embalagens plásticas, confecções e cosméticos que complementam a economia agrícola.',

  mercado:
    'É um mercado fitness típico de cidade pequena do interior mineiro, com a Academia Power Body — próxima ao terminal rodoviário, com musculação e treino funcional — como uma das referências locais. A procura por personal trainer tende a crescer entre quem busca treino guiado para lidar com o relevo ondulado da cidade e entre participantes de campanhas municipais de saúde e atividade física, como o projeto "Mais Esporte, Mais Saúde, Mais Vida".',

  bairrosNobres: ['Centro', 'Nossa Senhora das Graças', 'Jardim Paraíso', 'Parque Bela Vista'],
  bairrosPopulares: ['São Cristóvão', 'Nossa Senhora Aparecida', 'Chapada', 'Jardim das Palmeiras'],

  parques: [
    {
      nome: 'Praça da Matriz',
      descricao:
        'A praça mais antiga e importante da cidade, com registros que remontam ao fim do século XVIII e proteção como patrimônio histórico municipal desde 2006. Reúne a Igreja Matriz do Divino Espírito Santo (1933) e é ponto de encontro e caminhada no Centro.',
    },
    {
      nome: 'Praça do Rosário',
      descricao:
        'Palco de ações municipais de esporte e saúde, como o projeto "Mais Esporte, Mais Saúde, Mais Vida", e de eventos como o Encontro de Folias de Reis durante as festividades de aniversário da cidade.',
    },
    {
      nome: 'Represa de Furnas e entorno rural',
      descricao:
        'O município é cortado pelos rios Verde, Sapucaí e São Domingos e tem acesso à Represa de Furnas, cercada de morros, usada para pesca, natação e passeios de barco. As estradas rurais em meio a fazendas de café e antigos povoados (Salto Grande, Cachoeira, Estiva, entre outros) servem de percurso para caminhada, corrida e pedal fora da área urbana.',
    },
  ],
  ciclovias:
    'Não há estrutura cicloviária relevante divulgada por fonte oficial; o pedal e a corrida acontecem nas ruas do Centro e nas estradas rurais que cortam a zona cafeeira.',

  clima:
    'O clima é tropical de altitude, com temperatura média anual de 19,6 °C (máxima média de 26,9 °C e mínima média de 14,3 °C) e chuvas concentradas de outubro a março, totalizando cerca de 1.593 mm por ano. O relevo é majoritariamente ondulado (65%) e montanhoso (25%), com apenas 10% de área plana, e a altitude varia de cerca de 793 m, perto da Represa de Furnas, a 1.084 m nos pontos mais altos. Em janeiro de 2026 a cidade registrou a maior chuva de sua história, com alagamentos em bairros como São Cristóvão e Nossa Senhora Aparecida.',
  climaTreino:
    'As temperaturas amenas de altitude favorecem o treino ao ar livre boa parte do ano, mas o relevo ondulado e montanhoso torna qualquer percurso mais exigente, pedindo preparo físico gradual. No período chuvoso (outubro a março), aguaceiros fortes e o risco de alagamento em pontos baixos da cidade recomendam horários flexíveis e alternativa coberta para o treino.',

  mobilidade:
    'O município é servido pelas rodovias BR-491, BR-267, MG-167 e BR-381, que conectam Elói Mendes a Varginha, Três Pontas e ao restante do polo cafeeiro do Sul de Minas. O terminal rodoviário fica na Praça da Bandeira, no Centro, com linhas de ônibus municipais e intermunicipais; o deslocamento interno é predominantemente feito a pé, de moto ou carro, dado o relevo de morros da cidade.',

  corridas: [
    {
      nome: 'Corrida e Trilha em Elói Mendes',
      descricao:
        'Evento de corrida e trilha realizado em outubro de 2025 para celebrar a vida e apoiar pacientes com câncer, reunindo moradores da cidade — entre eles sobreviventes da doença — em torno do esporte e da solidariedade.',
    },
  ],
  culturaEsportiva:
    'O futebol de várzea tem tradição na cidade, com times como o Bola Preta disputando o Campeonato Sul-Mineiro nas categorias de base e o Campeonato Municipal de Futebol Society movimentando o Complexo Poliesportivo do Mutucão. As festividades de aniversário do município, em agosto, incluem desfile cívico e cavalgada, e programas municipais de saúde levam caminhada e atividade física para praças como a do Rosário.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, como a Power Body, próxima ao terminal rodoviário, em porte compatível com uma cidade pequena do interior do Sul de Minas.',

  destaquesFitness: [
    'Polo cafeeiro do Sul de Minas, com mais de 9 mil hectares de café e Distrito Industrial ativo sustentando a economia local.',
    'Praça da Matriz e Praça do Rosário como espaços centrais de caminhada e de ações municipais de esporte e saúde.',
    'Relevo predominantemente ondulado (65%) e montanhoso (25%), que exige preparo físico gradual para treinos ao ar livre.',
    'Represa de Furnas e estradas rurais em meio às fazendas de café, com opções de trilha, pesca e atividade física fora da área urbana.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade cafeeira de relevo ondulado no Sul de Minas, Elói Mendes pede um treino que respeite os morros e o clima chuvoso de verão, aproveitando a Praça da Matriz, a Praça do Rosário e as estradas rurais do entorno. Um personal trainer ajuda a organizar essa rotina com segurança e constância, adaptando o treino ao relevo e às estações do ano.',

  vizinhas: ['varginha-mg', 'tres-pontas-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Elói Mendes', url: 'https://cidades.ibge.gov.br/brasil/mg/eloi-mendes/panorama' },
    { nome: 'Prefeitura de Elói Mendes', url: 'https://eloimendes.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
