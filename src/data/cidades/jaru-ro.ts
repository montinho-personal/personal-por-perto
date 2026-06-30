import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'jaru-ro',
  nome: 'Jaru',
  uf: 'RO',
  estado: 'Rondônia',
  estadoSlug: 'rondonia',
  regiao: 'Norte',
  gentilico: 'jaruense',
  tipo: 'cidade',

  populacao: 50591,
  populacaoAno: 2022,
  idhm: 0.689,
  idhmClasse: 'médio',
  altitudeM: 124,

  resumoEconomico:
    'Cidade do centro-leste de Rondônia, cortada pela BR-364 e cortada também pelo rio Jaru, afluente da bacia do Machado, que divide a área urbana em duas partes ligadas por ponte. Surgida a partir de um posto telegráfico da Comissão Rondon e da colonização do Incra nos anos 1970, Jaru tem a economia ancorada na agropecuária — é referência em bacia leiteira e pecuária de corte, com frigorífico voltado à exportação — além da produção de café, de outras lavouras e de um comércio que atende toda a região no eixo entre Ariquemes e Ji-Paraná.',

  mercado:
    'O mercado fitness de Jaru tem o porte de uma cidade média do interior do Norte, formado por academias locais de musculação e treino funcional. A procura por personal trainers cresce entre quem busca orientação individual para lidar com o calor úmido o ano inteiro e para manter constância, seja na academia climatizada, seja em treinos ao ar livre nas primeiras horas do dia.',

  bairrosNobres: ['Centro', 'Setor 01', 'Setor 02', 'Setor 03'],
  bairrosPopulares: ['Setor 04', 'Setor 05', 'Setor 06', 'Jardim dos Estados'],

  parques: [
    {
      nome: 'Orla do Rio Jaru',
      descricao:
        'O rio que dá nome à cidade divide a área urbana em duas partes e marca a paisagem; o entorno e a travessia da ponte servem de referência para caminhadas e passeios ao ar livre.',
    },
    {
      nome: 'Praças e vias do Centro',
      descricao:
        'As praças centrais e o calçadão concentram parte da atividade física ao ar livre da cidade, com gente caminhando e correndo no início da manhã e no fim da tarde.',
    },
    {
      nome: 'Distritos rurais (Tarilândia e entorno)',
      descricao:
        'As estradas vicinais e os distritos agrícolas, ligados à produção de café e leite, oferecem percursos para quem prefere pedalar ou correr em meio à zona rural.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em alguns trechos da área urbana; boa parte do pedal e da corrida acontece nas avenidas da cidade e nas vicinais que ligam Jaru aos distritos rurais.',

  clima:
    'O clima é equatorial, quente e úmido o ano todo, com duas estações bem definidas: a chuvosa (verão amazônico, aproximadamente de outubro a abril) e a seca (inverno, de maio a setembro), quando pode ocorrer a friagem — queda passageira de temperatura provocada por massas de ar frio vindas do sul. As temperaturas costumam ficar elevadas, com máximas próximas dos 35 °C nos dias mais quentes.',
  climaTreino:
    'O calor e a umidade altos pedem treinar bem cedo ou no fim da tarde, com hidratação reforçada; nos horários de pico de calor, a academia climatizada é a opção mais confortável, e os dias de friagem, no inverno, tendem a ser os mais agradáveis para o treino ao ar livre.',

  mobilidade:
    'Jaru fica sobre a BR-364, principal eixo rodoviário de Rondônia, que escoa a produção agropecuária da região e conecta a cidade a Ariquemes, Ji-Paraná e Porto Velho. A rodovia atravessa o perímetro urbano e passa por obras de melhoria e por nova ponte sobre o rio Jaru; dentro da cidade, o deslocamento é feito sobretudo por carro e moto.',

  corridas: [
    {
      nome: 'Corrida do Trabalhador',
      descricao:
        'Prova de rua promovida pela prefeitura no entorno do Dia do Trabalhador, com percurso de cerca de 5 km que reúne atletas e praticantes amadores da cidade.',
    },
    {
      nome: 'Jogos Intermunicipais de Rondônia',
      descricao:
        'Jaru recebe etapas das competições estaduais, com modalidades como atletismo e ciclismo, reforçando o calendário esportivo do município.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o futebol e o futsal típicos do interior com a corrida de rua em crescimento, impulsionada por provas da prefeitura, e o uso das praças e avenidas para caminhada nos horários mais frescos do dia.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos setores residenciais, com porte compatível com uma cidade média do interior de Rondônia.',

  destaquesFitness: [
    'Cidade cortada pela BR-364, no eixo entre Ariquemes e Ji-Paraná.',
    'Rio Jaru divide a área urbana e marca a paisagem para atividade ao ar livre.',
    'Clima equatorial quente e úmido, que exige planejar horário e hidratação no treino.',
    'Economia de agropecuária, com bacia leiteira, pecuária de corte e produção de café.',
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
    'Cidade quente e úmida no coração agropecuário de Rondônia, Jaru pede um treino adaptado ao clima equatorial e que aproveite as primeiras horas do dia ou a academia climatizada nos picos de calor. Um personal trainer ajuda a organizar a rotina respeitando a umidade, definindo os melhores horários e mantendo a constância ao longo das estações chuvosa e seca.',

  vizinhas: ['ji-parana-ro', 'ariquemes-ro'],

  fontes: [
    { nome: 'IBGE Cidades — Jaru', url: 'https://cidades.ibge.gov.br/brasil/ro/jaru/panorama' },
    { nome: 'Prefeitura de Jaru', url: 'https://jaru.ro.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
