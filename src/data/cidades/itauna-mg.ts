import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itauna-mg',
  nome: 'Itaúna',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'itaunense',
  tipo: 'cidade',

  populacao: 97669,
  populacaoAno: 2022,
  idhm: 0.758,
  idhmClasse: 'alto',
  altitudeM: 857,

  resumoEconomico:
    'No Centro-Oeste mineiro, a cerca de 80 km de Belo Horizonte, Itaúna é um dos principais polos de fundição e metalurgia do país, integrando o arranjo produtivo das fundições do Centro-Oeste ao lado de Divinópolis e Cláudio. A cidade reúne indústrias de peças e arames (com presença de empresas como Belgo Bekaert, Saint-Gobain, Santanense e do setor automotivo) e tem forte vocação educacional graças à Universidade de Itaúna (UIT).',

  mercado:
    'O mercado fitness é típico de cidade média mineira em crescimento: academias de bairro, redes de porte médio, estúdios e boxes de treino funcional, com demanda puxada pela população universitária e pelos trabalhadores da indústria. O clima de altitude e o inverno seco favorecem o treino ao ar livre boa parte do ano.',

  bairrosNobres: ['Centro', 'Lourdes', 'Belvedere', 'Cerâmica'],
  bairrosPopulares: ['Morada Nova', 'Padre Eustáquio', 'Santanense', 'Vila Tavares'],

  parques: [
    {
      nome: 'Parque Ecológico Geração do Futuro',
      descricao:
        'Área verde no bairro Morada Nova, com espaços para caminhada e lazer ao ar livre, reaberta à comunidade após revitalização.',
    },
    {
      nome: 'Parque Ecológico Maria Ivolina Gonçalves',
      descricao:
        'Parque municipal no bairro Três Marias, com trilhas e espaço arborizado para caminhada e atividades em meio à natureza.',
    },
    {
      nome: 'Orla do Rio São João',
      descricao:
        'O Rio São João corta a cidade e seu entorno urbano oferece trechos usados para caminhada e corrida leve no dia a dia.',
    },
  ],
  ciclovias:
    'A cidade tem trechos cicláveis em vias urbanas; a extensão oficial total da malha cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude (Cwb na classificação de Köppen), com verão quente e chuvoso e inverno ameno e seco.',
  climaTreino:
    'O inverno seco e a altitude favorecem o treino ao ar livre, especialmente no início da manhã; no verão, vale evitar o fim de tarde por causa das chuvas e reforçar a hidratação.',

  mobilidade:
    'Itaúna é servida pela MG-050, principal eixo que liga a região a Belo Horizonte e a Divinópolis, em posição estratégica no Centro-Oeste mineiro, próxima a Pará de Minas e à área metropolitana da capital.',

  corridas: [
    {
      nome: 'Itaúna Runners',
      descricao:
        'Evento local de corrida de rua com provas de 5 km e caminhada de 3 km, além de percursos infantis, organizado por grupos de corrida da cidade.',
    },
    {
      nome: 'Circuitos e provas de rua regionais',
      descricao:
        'A cidade recebe etapas de circuitos de corrida do Centro-Oeste mineiro, com largadas em vias centrais e participação de grupos de corredores locais.',
    },
  ],
  culturaEsportiva:
    'Itaúna combina a energia da população universitária da UIT com grupos de corrida e treino funcional ativos; o uso dos parques ecológicos e da orla do Rio São João sustenta uma cultura crescente de atividade física ao ar livre.',
  academias:
    'A oferta reúne academias de bairro, redes de porte médio, estúdios e boxes de treino funcional, atendendo tanto estudantes quanto trabalhadores da indústria de fundição e metalurgia.',

  destaquesFitness: [
    'Polo industrial e universitário (UIT) que sustenta demanda constante por treino.',
    'Parques ecológicos municipais e orla do Rio São João para treino ao ar livre.',
    'Inverno seco e clima de altitude favoráveis à corrida e à caminhada.',
    'Cena local de corrida de rua e treino funcional em crescimento.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 280,
    mensalMax: 720,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Polo de fundição e metalurgia e cidade universitária do Centro-Oeste mineiro, Itaúna tem clima de altitude favorável e boa base de parques e academias. Um personal trainer ajuda a aproveitar os parques ecológicos e a orla do Rio São João e a estruturar treinos com método, da rotina semanal à preparação para provas de rua.',

  vizinhas: ['divinopolis-mg', 'para-de-minas-mg', 'belo-horizonte-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Itaúna', url: 'https://cidades.ibge.gov.br/brasil/mg/itauna/panorama' },
    { nome: 'Prefeitura de Itaúna', url: 'https://www.itauna.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/3133808' },
  ],
  atualizadoEm: '2026-06-29',
};
