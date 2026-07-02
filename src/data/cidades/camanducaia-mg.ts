import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'camanducaia-mg',
  nome: 'Camanducaia',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'camanducaiense',
  tipo: 'cidade',

  populacao: 26097,
  populacaoAno: 2022,
  idhm: 0.689,
  idhmClasse: 'médio',
  altitudeM: 1015,

  resumoEconomico:
    'No extremo sul de Minas Gerais, às margens da Rodovia Fernão Dias (BR-381), Camanducaia é conhecida principalmente por abrigar o distrito de Monte Verde, a cerca de 1.550 m de altitude na Serra da Mantiqueira, um dos destinos de turismo de montanha mais procurados do país. O turismo — hospedagem, gastronomia, passeios de aventura e compras — é o motor econômico do município, ao lado da agricultura de clima frio (como a olericultura) e da pecuária leiteira nas áreas rurais. A proximidade com São Paulo e a facilidade de acesso pela Fernão Dias sustentam o fluxo constante de visitantes, sobretudo em fins de semana e feriados.',

  mercado:
    'O mercado fitness de Camanducaia é pequeno e concentrado na sede do município, com academias de bairro voltadas à musculação e a modalidades como muay thai e jiu-jítsu. Em Monte Verde, o público oscila entre moradores fixos e o forte fluxo de turistas, que buscam trilhas, cavalgadas e passeios de aventura em vez de estúdios convencionais. A procura por personal trainer tende a vir de quem mora na região e quer treino orientado ao ar livre, aproveitando o clima de altitude, e de visitantes que quiserem manter a rotina de treinos durante a estada.',

  bairrosNobres: ['Monte Verde', 'Centro', 'Ponte Nova', 'Cachoeira'],
  bairrosPopulares: ['Vila Rica', 'São José', 'Bairro da Estação', 'Fundão'],

  parques: [
    {
      nome: 'Trilha da Pedra Redonda',
      descricao:
        'Uma das trilhas mais conhecidas do entorno de Monte Verde, com trecho de caminhada em meio à mata da Mantiqueira até um mirante rochoso com vista para a serra.',
    },
    {
      nome: 'Trilha do Pico da Onça',
      descricao:
        'Percurso de caminhada de dificuldade moderada a difícil, com acesso sinalizado e trechos sombreados, um dos passeios mais procurados por quem visita a região a pé.',
    },
    {
      nome: 'Serra da Mantiqueira (entorno rural)',
      descricao:
        'O relevo montanhoso que cerca a sede e o distrito de Monte Verde oferece estradas de terra, mirantes e trilhas usados para caminhada, corrida de montanha, cavalgada e mountain bike.',
    },
  ],
  ciclovias:
    'Não há estrutura cicloviária formal relevante; o ciclismo na região acontece nas estradas de serra e em trilhas de mountain bike, incluindo o Circuito Serras Verdes de Cicloturismo, que passa por Camanducaia e outros municípios da Mantiqueira.',

  clima:
    'Camanducaia tem clima tropical de altitude, com invernos frios e verões amenos. Na sede, a 1.015 m, e sobretudo em Monte Verde, a 1.550 m, as temperaturas caem bastante à noite e no inverno, quando não é raro registrar geadas — um dos climas mais frios entre os municípios do país.',
  climaTreino:
    'O frio de altitude pede aquecimento mais longo e roupas em camadas antes do treino ao ar livre, principalmente pela manhã e à noite no inverno; em compensação, o calor extremo é raro, o que favorece caminhadas e corridas em horários mais amplos durante o resto do ano.',

  mobilidade:
    'O principal acesso é pela Rodovia Fernão Dias (BR-381), que corta o município e liga a região a Belo Horizonte e São Paulo; a saída para a sede fica no Km 918/919. Dali, uma estrada estadual toda asfaltada de cerca de 30 km sobe a serra até o distrito de Monte Verde, trajeto de aproximadamente 40 minutos. A cidade não conta com transporte público estruturado, e o deslocamento interno é feito majoritariamente de carro ou moto, com uma linha regular de ônibus intermunicipal até a sede.',

  corridas: [
    {
      nome: 'Corrida Rústica e Corrida de Montanha de Monte Verde',
      descricao:
        'Prova organizada pela MOVE (Agência de Desenvolvimento de Monte Verde e Região) em parceria com a Haka Race, com percurso rústico de cerca de 10 km em estrada de terra e uma etapa de corrida de montanha de aproximadamente 17 km, com forte ganho de altitude e trechos técnicos de trilha; já teve diversas edições no distrito.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Camanducaia gira em torno do turismo de aventura de Monte Verde: trekking e caminhadas em trilhas da Mantiqueira, cavalgadas em fazendas e operadoras locais, mountain bike em trilhas e no Circuito Serras Verdes de Cicloturismo, além de provas de corrida de montanha que atraem atletas de fora da região. O calendário de esportes de montanha do distrito, com desafios de corrida e mountain bike no início do ano, reforça essa vocação.',
  academias:
    'A oferta é formada por academias de pequeno porte na sede do município, com musculação e modalidades como muay thai e jiu-jítsu; em Monte Verde, a estrutura voltada a exercício é mais limitada, concentrada em atividades de aventura ao ar livre oferecidas por agências e pousadas locais.',

  destaquesFitness: [
    'Sede do distrito turístico de Monte Verde, a 1.550 m de altitude na Serra da Mantiqueira, um dos polos de turismo de montanha do Brasil.',
    'Trilhas como as da Pedra Redonda e do Pico da Onça, usadas para caminhada e corrida de montanha em meio à Mantiqueira.',
    'Clima de altitude com invernos frios e geadas frequentes, que exige aquecimento e roupas adequadas para o treino ao ar livre.',
    'Acesso direto pela Rodovia Fernão Dias (BR-381), ligando a região a São Paulo e Belo Horizonte.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 140,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Serrana, fria e marcada pelo turismo de Monte Verde, Camanducaia oferece um cenário natural rico para caminhada, trilha e treino ao ar livre, mas com uma oferta de academias enxuta. Um personal trainer ajuda a aproveitar as trilhas e estradas de serra com segurança, adaptando a rotina de treino ao clima de altitude e ao fluxo de moradores e turistas da região.',

  vizinhas: ['cambui-mg', 'sao-jose-dos-campos-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Camanducaia', url: 'https://cidades.ibge.gov.br/brasil/mg/camanducaia/panorama' },
    { nome: 'Prefeitura de Camanducaia', url: 'https://www.camanducaia.mg.gov.br/' },
    { nome: 'Portal de Monte Verde', url: 'https://monteverde.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
