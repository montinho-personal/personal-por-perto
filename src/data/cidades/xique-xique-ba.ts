import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'xique-xique-ba',
  nome: 'Xique-Xique',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'xique-xiquense',
  tipo: 'cidade',

  populacao: 44757,
  populacaoAno: 2022,
  idhm: 0.59,
  idhmClasse: 'baixo',
  pibPerCapita: 9904,
  pibPerCapitaAno: 2021,
  altitudeM: 405,

  resumoEconomico:
    'Na margem direita do São Francisco, a cerca de 580 km de Salvador, Xique-Xique é o centro urbano de uma faixa de caatinga que vive do rio. A pesca artesanal organizada desde a colônia fundada em 1953, a agricultura irrigada e o comércio regional sustentam os 44.757 moradores contados pelo Censo 2022 — e o município abriga um dos maiores projetos de irrigação da América Latina, em Boa Vista de Santo Antônio, com canal de 42 km captando água do Velho Chico.',

  mercado:
    'O mercado de personal trainer aqui é enxuto e pessoal: poucos profissionais atendendo uma clientela que se conhece. Quem trabalha na cidade divide a agenda entre a academia do centro, o atendimento em casa e o treino ao ar livre na beira do rio — e costuma acumular alunos de perfis muito diferentes, do adolescente que quer ganhar massa ao aposentado que precisa manter autonomia.',

  bairrosNobres: ['Centro', 'Bela Vista', 'Alto do Cruzeiro', 'Nova Xique-Xique'],
  bairrosPopulares: ['Bomba', 'Vila Nova', 'Santo Antônio', 'Beira Rio'],

  parques: [
    {
      nome: 'Orla do Rio São Francisco',
      descricao:
        'A frente d’água é o principal espaço de convivência e exercício da cidade: caminhada no fim da tarde, quando o calor cede, com o rio de um lado e o comércio do outro.',
    },
    {
      nome: 'Lagoa de Itaparica',
      descricao:
        'A maior lagoa marginal do São Francisco, com cerca de 24 km de extensão entre Xique-Xique e Gentio do Ouro — berçário natural de peixes e principal referência ambiental da região.',
    },
    {
      nome: 'APA Dunas e Veredas do Baixo Médio São Francisco',
      descricao:
        'Área de proteção ambiental com dunas de areia branca e veredas às margens do rio, cenário incomum no semiárido e destino de passeios de barco e caminhadas.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária estruturada, mas a bicicleta é meio de transporte cotidiano e o terreno plano da área urbana favorece o pedal como base aeróbica.',

  clima:
    'Semiárido quente, com chuvas concentradas no verão e longos períodos de seca — a temperatura passa fácil dos 32 °C no meio do dia durante boa parte do ano.',
  climaTreino:
    'O calor manda no horário: treino ao ar livre antes das 8h ou depois das 17h, com hidratação levada a sério. No miolo do dia, o trabalho é em ambiente coberto, e a sombra da orla é aliada nos meses mais quentes.',

  mobilidade:
    'A cidade é compacta e plana, o que torna o deslocamento a pé e de bicicleta viável na área central. O acesso regional se faz pela BA-052 e pela travessia do São Francisco, que liga o município à margem oposta.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário municipal',
      descricao:
        'As provas locais costumam ser amarradas às festas da cidade e à agenda esportiva do município, com percursos curtos pela área urbana e pela orla.',
    },
    {
      nome: 'Regatas e travessias no São Francisco',
      descricao:
        'A cultura ribeirinha rende regatas ecológicas e travessias que mobilizam pescadores e remadores da região — um esporte de base fluvial, raro no interior baiano.',
    },
  ],
  culturaEsportiva:
    'O futebol de campo e de areia domina o fim de semana, e a vida ribeirinha coloca remo, natação e caminhada na orla no cotidiano de quem mora perto do rio. A musculação cresceu na última década junto com a chegada de academias no centro.',
  academias:
    'A oferta se concentra na área central, em unidades de porte médio que cobrem musculação e aulas coletivas, complementadas por espaços menores nos bairros e por profissionais que atendem a domicílio.',

  destaquesFitness: [
    'Orla do São Francisco como pista de caminhada natural da cidade.',
    'Lagoa de Itaparica, a maior lagoa marginal do Velho Chico, com 24 km.',
    'Dunas e veredas da APA, cenário de caminhada em areia — estímulo pesado para pernas.',
    'Terreno urbano plano, que favorece bicicleta e corrida de rua.',
  ],

  precos: {
    avulsaMin: 35,
    avulsaMax: 90,
    mensalMin: 200,
    mensalMax: 550,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Xique-Xique treina com o rio por perto e o sol como adversário. Um personal trainer que conhece a cidade sabe usar as duas coisas: a orla nas pontas do dia, o ambiente coberto no calor do meio-dia e um plano que respeite a rotina de quem vive da pesca, da lavoura e do comércio.',

  vizinhas: ['irece-ba', 'bom-jesus-da-lapa-ba', 'juazeiro-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Xique-Xique', url: 'https://cidades.ibge.gov.br/brasil/ba/xique-xique/panorama' },
    { nome: 'Prefeitura de Xique-Xique', url: 'https://xiquexique.ba.gov.br/' },
    { nome: 'Inema — APA Lagoa de Itaparica', url: 'http://www.inema.ba.gov.br/gestao-2/unidades-de-conservacao/apa/apa-lagoa-de-itaparica/' },
  ],
  atualizadoEm: '2026-08-05',
};
