import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ipojuca-pe',
  nome: 'Ipojuca',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'ipojucano',
  tipo: 'cidade',

  populacao: 98932,
  populacaoAno: 2022,
  idhm: 0.619,
  idhmClasse: 'médio',
  pibPerCapita: 181663,
  pibPerCapitaAno: 2023,
  altitudeM: 15,

  resumoEconomico:
    'No litoral sul da Região Metropolitana do Recife, Ipojuca tem uma economia dupla e pouco comum: de um lado, o Complexo Industrial Portuário de Suape, com cerca de 40% de sua área dentro do município, abrigando a Refinaria Abreu e Lima e os estaleiros Atlântico Sul e VARD Promar; de outro, o turismo de Porto de Galinhas, praia eleita várias vezes a melhor do Brasil por publicações do setor. Essa combinação coloca o município entre os de maior PIB per capita de Pernambuco, puxado pela indústria de petróleo, gás e construção naval, enquanto o turismo movimenta hotelaria, gastronomia e serviços ao longo do ano.',

  mercado:
    'O mercado fitness de Ipojuca reflete esse duplo perfil: em Porto de Galinhas e Muro Alto, concentrados em resorts, pousadas e vilas de veraneio, há academias e estúdios voltados a turistas e moradores de segunda residência, com procura por treino de curta duração e condicionamento para atividades aquáticas; já na Sede, em Camela e em Nossa Senhora do Ó, a oferta é mais simples, formada por academias de bairro que atendem trabalhadores do comércio, do turismo e do complexo de Suape.',

  bairrosNobres: ['Porto de Galinhas', 'Muro Alto', 'Maracaípe', 'Cupe'],
  bairrosPopulares: ['Sede (Centro de Ipojuca)', 'Nossa Senhora do Ó', 'Camela', 'São Miguel'],

  parques: [
    {
      nome: 'Piscinas naturais de Porto de Galinhas',
      descricao:
        'Formadas pelos recifes de arenito próximos à praia, são acessadas de jangada em maré baixa e reúnem águas claras e rasas, boas para nado leve e treino aquático recreativo.',
    },
    {
      nome: 'Praia de Muro Alto',
      descricao:
        'Uma barreira de recifes protege toda a enseada e forma uma das maiores piscinas naturais da América Latina, com faixa de areia extensa e firme para caminhada e corrida.',
    },
    {
      nome: 'Pontal de Maracaípe',
      descricao:
        'Ponto onde o rio Maracaípe encontra o mar, cercado por manguezal; a praia adjacente tem ondas mais fortes, procuradas por surfistas, e é palco de etapas de campeonatos.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada e concentrada em trechos de acesso a resorts e ao entorno de Porto de Galinhas; boa parte do pedal e da corrida ainda depende da orla e das vias internas dos balneários, sem rede cicloviária contínua.',

  clima:
    'O clima é tropical quente, com temperaturas do ar e do mar oscilando em torno de 26 °C a 28 °C durante o ano todo. Há duas estações bem marcadas: a seca, de setembro a abril, com muitos dias de sol, e a chuvosa, de maio a julho, quando as chuvas costumam ser fortes e passageiras.',
  climaTreino:
    'O calor e a umidade elevados o ano inteiro favorecem treinos no início da manhã ou no fim da tarde, com boa hidratação; a água morna do mar e as piscinas naturais funcionam como opção de treino aeróbico de baixo impacto nas horas mais quentes.',

  mobilidade:
    'O acesso principal se dá pela PE-060, rodovia que liga o litoral sul à Região Metropolitana do Recife, distante cerca de 43 km da sede de Ipojuca; a BR-101 e a PE-009 completam as ligações internas até Porto de Galinhas e Nossa Senhora do Ó. O Porto de Suape fica a cerca de 18 km de Porto de Galinhas, e o deslocamento local é feito por ônibus intermunicipais, vans e mototáxi, já que o transporte público interno aos balneários é limitado.',

  corridas: [
    {
      nome: '21K de Porto de Galinhas',
      descricao:
        'Prova anual disputada em Porto de Galinhas, com percurso que mistura trechos de asfalto, areia compacta e vias urbanas junto à orla.',
    },
    {
      nome: 'Projeto Vem Pra Rua',
      descricao:
        'Iniciativa da Associação de Desportos Rural de Ipojuca (ADRI), com apoio da Prefeitura, que promove treinos gratuitos semanais e etapas de corrida de rua em diferentes distritos do município.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local gira em torno do mar: passeios de jangada até as piscinas naturais, surfe em Maracaípe e no Pontal do Cupe, standup paddle e mergulho fazem parte da rotina de moradores e turistas. A esse repertório aquático soma-se um calendário de corrida de rua em crescimento, puxado pela 21K de Porto de Galinhas e pelos treinos comunitários do projeto Vem Pra Rua.',
  academias:
    'A oferta de academias é formada por estúdios e boxes de treino funcional voltados ao público turístico em Porto de Galinhas e Nossa Senhora do Ó, além de academias de musculação de bairro na Sede e em Camela, num mercado ainda pequeno se comparado ao porte econômico do município.',

  destaquesFitness: [
    'Porto de Galinhas, eleita várias vezes a melhor praia do Brasil, com piscinas naturais que servem de espaço de treino aquático.',
    'Muro Alto: barreira de recifes que forma uma das maiores piscinas naturais da América Latina.',
    'Complexo Industrial Portuário de Suape (refinaria Abreu e Lima e estaleiros) como motor econômico e público em potencial para treino corporativo.',
    '21K de Porto de Galinhas e o projeto Vem Pra Rua (ADRI) fortalecendo a cultura de corrida de rua no município.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 900,
    onlineMin: 180,
    onlineMax: 450,
  },

  conclusao:
    'Entre a indústria pesada de Suape e as piscinas naturais de Porto de Galinhas, Ipojuca tem uma rotina de treino marcada pelo calor, pela água do mar e por horários de trabalho pouco convencionais. Um personal trainer ajuda a organizar a semana em torno dessas variáveis, aproveitando a orla e as piscinas naturais como aliadas do condicionamento físico.',

  vizinhas: ['cabo-de-santo-agostinho-pe', 'escada-pe', 'recife-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Ipojuca', url: 'https://cidades.ibge.gov.br/brasil/pe/ipojuca/panorama' },
    { nome: 'Complexo Industrial Portuário de Suape', url: 'https://www.suape.pe.gov.br/' },
    { nome: 'Prefeitura de Ipojuca', url: 'https://ipojuca.pe.gov.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
