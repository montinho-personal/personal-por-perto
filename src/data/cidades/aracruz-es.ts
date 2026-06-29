import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'aracruz-es',
  nome: 'Aracruz',
  uf: 'ES',
  estado: 'Espírito Santo',
  estadoSlug: 'espirito-santo',
  regiao: 'Sudeste',
  gentilico: 'aracruzense',
  tipo: 'cidade',

  populacao: 94765,
  populacaoAno: 2022,
  idhm: 0.752,
  idhmClasse: 'alto',
  altitudeM: 50,

  resumoEconomico:
    'Aracruz fica no litoral norte capixaba e tem na celulose o seu principal motor: o município sedia uma das maiores fábricas de celulose do mundo, da Suzano (a antiga Aracruz Celulose), com terminal próprio no porto de Portocel, em Barra do Riacho. A economia se completa com o setor de petróleo e gás, a silvicultura do eucalipto e o turismo das praias. Aracruz é também o único município do Espírito Santo com aldeias indígenas, das etnias Tupinikim e Guarani.',

  mercado:
    'O mercado de personal trainers em Aracruz combina o perfil de cidade industrial litorânea com a vida à beira-mar. De um lado, o grande contingente de trabalhadores da indústria de celulose e do polo de petróleo e gás, que buscam treino encaixado nos turnos; de outro, a orla das praias de Coqueiral, Santa Cruz e Barra do Sahy, que sustenta uma cultura de treino ao ar livre. A demanda se distribui entre academias, atendimento domiciliar e treino na orla.',

  bairrosNobres: ['Centro', 'Jardins', 'Coqueiral', 'Bela Vista'],
  bairrosPopulares: ['Vila do Riacho', 'Barra do Riacho', 'Jequitibá', 'Nova Colatina'],

  parques: [
    {
      nome: 'Orla de Coqueiral',
      descricao:
        'Praia de águas calmas às margens da ES-010, com extenso calçadão arborizado por coqueiros — um dos principais cenários para caminhada, corrida e esportes de areia no município.',
    },
    {
      nome: 'Praia de Santa Cruz',
      descricao:
        'No distrito histórico onde o rio Piraquê-açú encontra o mar, reúne orla, falésias e mirantes — ambiente para caminhada e treino ao ar livre com vista para o encontro de rio e mar.',
    },
    {
      nome: 'Praia de Barra do Sahy',
      descricao:
        'Orla mais tranquila e familiar, com avenida beira-mar usada para corrida e caminhada, palco de provas e atividades de praia da região.',
    },
  ],
  ciclovias:
    'O Projeto Orla da prefeitura prevê requalificação das frentes de praia do município, com calçadões e estrutura de lazer ao longo da costa, que servem de apoio para caminhada e pedaladas na orla.',

  clima:
    'O clima é tropical litorâneo, quente e úmido, com verões quentes e influência da brisa marítima na faixa de praia.',
  climaTreino:
    'Dá para treinar ao ar livre o ano todo, com atenção ao calor e à umidade nas horas centrais do dia. As primeiras horas da manhã e o fim de tarde na orla são as janelas mais confortáveis, com hidratação reforçada.',

  mobilidade:
    'Aracruz é cortada pela ES-010 (rota litorânea que liga as praias) e pela ES-456, que conecta a sede à BR-101 e à Grande Vitória. O deslocamento dentro do município é predominantemente por carro e ônibus, com distâncias relevantes entre a sede e os distritos litorâneos como Barra do Riacho e Santa Cruz.',

  corridas: [
    {
      nome: 'Corridas de rua da orla',
      descricao:
        'O calendário esportivo local inclui provas de rua na faixa litorânea, como as corridas realizadas em Coqueiral e na avenida beira-mar de Barra do Sahy, com percursos curtos abertos à comunidade.',
    },
    {
      nome: 'Programação esportiva de praia',
      descricao:
        'A agenda municipal de esportes contempla futevôlei, vôlei e futebol de areia, beach tennis, handebol e canoa havaiana, aproveitando a extensa orla aracruzense.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Aracruz é fortemente ligada ao litoral e às modalidades de areia — do futevôlei ao beach tennis e à canoa havaiana — somadas às corridas de rua na orla. As praias funcionam como academia ao ar livre durante boa parte do ano.',
  academias:
    'A oferta de academias acompanha o porte do município e concentra-se na sede e nos núcleos de praia, complementada pelo treino na orla e pelo atendimento domiciliar, formato bastante procurado pela rotina de trabalho da cidade industrial.',

  destaquesFitness: [
    'Orla de Coqueiral com calçadão para caminhada, corrida e esportes de areia.',
    'Praia de Santa Cruz, no encontro do rio Piraquê-açú com o mar, para treino ao ar livre.',
    'Forte cultura de esportes de praia: futevôlei, beach tennis e canoa havaiana.',
    'Corridas de rua na faixa litorânea, em Coqueiral e Barra do Sahy.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Entre a rotina da cidade industrial da celulose e a vida à beira-mar, Aracruz oferece bons cenários para treinar — da orla de Coqueiral às praias de Santa Cruz e Barra do Sahy. Um personal trainer ajuda a encaixar o treino nos turnos de trabalho e a aproveitar o litoral capixaba com método e segurança, na academia, em casa ou na areia.',

  vizinhas: ['linhares-es', 'serra-es', 'vitoria-es'],

  fontes: [
    { nome: 'IBGE Cidades — Aracruz', url: 'https://cidades.ibge.gov.br/brasil/es/aracruz/panorama' },
    { nome: 'Prefeitura Municipal de Aracruz', url: 'https://www.aracruz.es.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
