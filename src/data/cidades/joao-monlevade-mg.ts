import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'joao-monlevade-mg',
  nome: 'João Monlevade',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'monlevadense',
  tipo: 'cidade',

  populacao: 80187,
  populacaoAno: 2022,
  idhm: 0.758,
  idhmClasse: 'alto',
  altitudeM: 580,

  resumoEconomico:
    'Na região central de Minas, no Médio Piracicaba, João Monlevade nasceu e cresceu em torno da siderurgia. A cidade abriga uma das principais usinas da ArcelorMittal (herdeira da antiga Belgo-Mineira), atividade que estrutura a economia, o emprego e o perfil urbano local. O rio Piracicaba corta o município e marca a paisagem.',

  mercado:
    'Cidade de porte médio com renda industrial relativamente estável puxada pela siderurgia, sustenta uma rede de academias e estúdios concentrada no eixo comercial de Carneirinhos, com oferta crescente de acompanhamento online.',

  bairrosNobres: ['Centro', 'Carneirinhos', 'Loanda', 'Cruzeiro Celeste'],
  bairrosPopulares: ['Cidade Industrial', 'Bela Vista', 'Vila Tanque', 'Baú'],

  parques: [
    {
      nome: 'Praça do Povo',
      descricao:
        'Praça central e principal ponto de encontro da cidade, com área verde, pista de caminhada e espaço para eventos.',
    },
    {
      nome: 'Orla do Rio Piracicaba',
      descricao:
        'Margens do rio que cortam o município, usadas como área de lazer e caminhada nos fins de semana.',
    },
    {
      nome: 'Parque do Cruzeiro',
      descricao:
        'Mirante com cruzeiro, trilha e vista da cidade, ponto de caminhada e treino de subida.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude, ameno, com invernos secos e verões chuvosos.',
  climaTreino:
    'A altitude (cerca de 580 m) e o clima ameno favorecem o treino ao ar livre boa parte do ano, com atenção às chuvas concentradas no verão.',

  mobilidade:
    'O acesso principal é pela BR-381, eixo que liga Belo Horizonte ao Vale do Aço e segue rumo ao Espírito Santo. O município também é atendido pela Estrada de Ferro Vitória a Minas (EFVM), uma das poucas ferrovias do país com trem regular de passageiros, ligando Belo Horizonte a Vitória.',

  corridas: [
    {
      nome: 'Provas de rua do calendário municipal',
      descricao:
        'A cidade recebe corridas de rua promovidas pela prefeitura e por grupos locais, com largadas em áreas centrais.',
    },
    {
      nome: 'Eventos esportivos do Viva Monlevade',
      descricao:
        'Programação cultural e esportiva da cidade que reúne atividades físicas e atrações em espaços públicos.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva tem raiz na siderurgia, com clubes e associações ligados historicamente à usina, além de grupos de corrida e caminhada que usam as áreas centrais e a orla do rio Piracicaba.',
  academias:
    'A oferta reúne academias e estúdios concentrados no eixo comercial de Carneirinhos e no Centro, complementada por espaços públicos como a Praça do Povo e as margens do rio para treino ao ar livre.',

  destaquesFitness: [
    'Renda industrial estável da siderurgia (ArcelorMittal), que sustenta o mercado fitness local.',
    'Clima tropical de altitude ameno, bom para treino outdoor boa parte do ano.',
    'Orla do rio Piracicaba e praças centrais como espaços para caminhada e corrida.',
    'Eixo comercial de Carneirinhos com academias e estúdios concentrados.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 290,
    mensalMax: 760,
    onlineMin: 140,
    onlineMax: 380,
  },

  conclusao:
    'Cidade siderúrgica do Médio Piracicaba, João Monlevade combina renda industrial estável, clima de altitude e a paisagem do rio Piracicaba. Um personal trainer ajuda a aproveitar as praças centrais e a orla do rio com método, num clima favorável ao treino boa parte do ano.',

  vizinhas: ['belo-horizonte-mg', 'itabira-mg', 'ipatinga-mg'],

  fontes: [
    { nome: 'IBGE Cidades — João Monlevade', url: 'https://cidades.ibge.gov.br/brasil/mg/joao-monlevade/panorama' },
    { nome: 'Prefeitura de João Monlevade', url: 'https://www.pmjm.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
