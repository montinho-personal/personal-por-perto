import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'redencao-pa',
  nome: 'Redenção',
  uf: 'PA',
  estado: 'Pará',
  estadoSlug: 'para',
  regiao: 'Norte',
  tipo: 'cidade',

  populacao: 85597,
  populacaoAno: 2022,
  idhm: 0.672,
  idhmClasse: 'médio',
  pibPerCapita: 43012,
  pibPerCapitaAno: 2023,

  resumoEconomico:
    'No sudeste paraense, Redenção é a capital econômica do sul do estado: pecuária de corte em escala industrial que abastece frigoríficos da região, comércio e serviços que atendem um raio de municípios bem maior que o próprio território de 3.823 km². O PIB per capita de R$ 43 mil coloca a cidade entre as maiores do Pará, e a Expo Polo Carajás — a maior feira agropecuária do sul do estado — é o retrato anual dessa economia.',

  mercado:
    'O mercado de treino em Redenção mudou de patamar em junho de 2026, quando a Usina da Paz Iavê Araújo entregou piscina semiolímpica, quadras, dojô e sala de academia num complexo público de bairro. Antes disso, a oferta se resumia às academias particulares do Centro. O perfil do aluno é o da cidade: gente de pecuária, comércio e serviços, com jornada longa e calor o ano inteiro — o que empurra o treino para as pontas do dia e valoriza quem sabe montar sessão curta que cabe na agenda.',

  bairrosNobres: ['Centro', 'Jardim Umuarama', 'Vila Paulista', 'Jardim Europa'],
  bairrosPopulares: ['Campos Altos', 'Ariponã', 'Vale da Serra', 'Setor Oeste'],

  parques: [
    {
      nome: 'Usina da Paz Iavê Araújo',
      descricao:
        'Inaugurada em junho de 2026 na Avenida Belo Horizonte, no Jardim Europa: piscina semiolímpica, quadras poliesportiva e de areia, dojô para artes marciais, sala de academia, biblioteca e playground, com mais de 70 serviços públicos gratuitos.',
    },
    {
      nome: 'Praça Domingo Mendes de Souza',
      descricao:
        'Espaço de convivência e esporte no Campos Altos, na Rua Mogno — ponto de caminhada e encontro do bairro no fim da tarde.',
    },
    {
      nome: 'Avenidas largas do plano urbano',
      descricao:
        'Redenção foi desenhada com avenidas amplas e planas: no amanhecer e depois do pôr do sol, elas viram o circuito de quem corre e pedala na cidade.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária estruturada; o pedal acontece nas avenidas largas do plano urbano e nas vicinais do entorno, sempre nas horas de sol fraco.',

  clima:
    'Equatorial quente e úmido, com duas estações bem marcadas: o inverno amazônico de chuvas fortes (outubro a abril) e a seca do meio do ano, quando o ar fica seco e as tardes chegam perto dos 35 °C.',
  climaTreino:
    'O calor manda no horário: antes das 7h e depois das 18h são as janelas do treino ao ar livre em qualquer época do ano. Na seca, o ar seco engana e a hidratação precisa começar antes da sessão; na chuvarada de janeiro, ter um plano coberto — academia, piscina ou treino de casa — é o que impede a semana de virar zero.',

  mobilidade:
    'A BR-158 liga Redenção a Marabá (353 km) e a Belém, e segue para o Mato Grosso; a PA-287 corta a cidade rumo a Cumaru do Norte e Conceição do Araguaia, com acesso ao Tocantins. O Aeroporto Gertrudes Gomes (RDC) fica na própria PA-287, no Setor Oeste, a 6 km do centro. Dentro da cidade, o plano largo e plano torna quase tudo alcançável em poucos minutos de carro ou moto.',

  corridas: [
    {
      nome: 'Expo Polo Carajás',
      descricao:
        'A maior feira agropecuária do sul do Pará — na 29ª edição em 2026 — reúne cerca de 50 mil pessoas e traz rodeio, provas equestres (ranch sorting, laço), a Cavalgada Ruralista e a Queima do Alho.',
    },
    {
      nome: 'Programação esportiva da Usina da Paz',
      descricao:
        'O complexo do Jardim Europa concentra hoje a agenda pública de esporte e lazer da cidade: natação na piscina semiolímpica, quadras, dojô e sala de academia abertos à população.',
    },
  ],
  culturaEsportiva:
    'O corpo de quem vive em Redenção se move entre dois mundos: o do trabalho rural — montaria, lida com gado, jornada em pé — e o da cidade que cresceu rápido, com futebol amador forte, o Redenção Esporte Clube como referência histórica desde 2001 e uma cena de musculação concentrada no Centro. A entrada da Usina da Paz somou natação e artes marciais a esse cardápio, que antes praticamente não existia em espaço público.',
  academias:
    'A oferta particular se concentra no Centro e nos bairros de maior renda, com musculação e funcional; desde 2026, a sala de academia e a piscina da Usina da Paz ampliaram o acesso gratuito no Jardim Europa.',

  destaquesFitness: [
    'Usina da Paz Iavê Araújo: piscina semiolímpica, quadras, dojô e academia públicas desde junho de 2026.',
    'Plano urbano largo e plano — avenidas que funcionam como pista nas pontas do dia.',
    'Maior PIB per capita da região, com mercado de serviços consolidado.',
    'Polo regional: o aluno do entorno chega de carro, e o online resolve quem está longe demais.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 340,
  },

  conclusao:
    'Redenção tem hoje o que faltava: estrutura pública de treino além do campo de futebol, somada a um mercado de serviços que já era o mais forte do sul do Pará. O adversário continua sendo o calor — e ele perde para quem organiza a semana nas janelas certas em vez de tentar treinar no meio da tarde. É esse desenho que um acompanhamento profissional entrega, presencial na cidade ou online para quem mora no entorno.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Redenção?',
      resposta:
        'Nas academias particulares do Centro e dos bairros de maior renda, em casa e, desde 2026, no entorno da Usina da Paz Iavê Araújo, no Jardim Europa — que trouxe piscina semiolímpica, quadras, dojô e sala de academia para o lado público. Para quem mora nos municípios do entorno, o acompanhamento online é o formato que resolve a distância sem depender de estrada.',
    },
    {
      pergunta: 'Como treinar no calor equatorial de Redenção?',
      resposta:
        'Usando as pontas do dia. Antes das 7h e depois das 18h são as únicas janelas confortáveis para treino ao ar livre em Redenção, e isso vale o ano inteiro — na seca pelo sol direto, na chuva pelo abafamento. A hidratação começa antes da sessão, porque o ar seco do meio do ano dá menos sinal de sede do que deveria. E ter um plano coberto guardado para os dias de temporal é o que separa quem treina doze meses de quem para em janeiro.',
    },
    {
      pergunta: 'Há acompanhamento em Redenção para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Redenção, o formato é o acompanhamento online: treino adaptado à estrutura disponível — academia, casa, piscina da Usina da Paz —, vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura: quadro clínico pede também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['parauapebas-pa', 'maraba-pa', 'altamira-pa', 'palmas-to'],

  fontes: [
    { nome: 'IBGE Cidades — Redenção', url: 'https://cidades.ibge.gov.br/brasil/pa/redencao/panorama' },
    { nome: 'Prefeitura de Redenção', url: 'https://redencao.pa.gov.br/' },
    { nome: 'Agência Pará — Usina da Paz Redenção', url: 'https://agenciapara.com.br/pagina/2545/usina-da-paz-redencao' },
  ],
  atualizadoEm: '2026-09-09',
};
