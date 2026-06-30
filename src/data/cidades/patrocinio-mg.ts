import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'patrocinio-mg',
  nome: 'Patrocínio',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'patrocinense',
  tipo: 'cidade',

  populacao: 89826,
  populacaoAno: 2022,
  idhm: 0.729,
  idhmClasse: 'alto',
  altitudeM: 965,

  resumoEconomico:
    'No Alto Paranaíba mineiro, Patrocínio é um dos maiores produtores de café arábica do Brasil e referência do Cerrado Mineiro, com cafeicultura tecnificada, cooperativas como a Expocacer e uma cadeia agroindustrial robusta. A economia combina o agronegócio do café com pecuária, grãos, comércio e serviços, e a cidade abriga o Centro Universitário do Cerrado (UNICERP), que reforça o perfil de polo regional.',

  mercado:
    'O mercado fitness acompanha o porte de cidade média mineira, com academias de bairro, estúdios e box de treinamento funcional, além de profissionais que atendem em domicílio e condomínios. A vida universitária e a renda ligada ao café sustentam uma demanda estável por acompanhamento individual.',

  bairrosNobres: ['Centro', 'Cidade Jardim', 'Cidade Nova', 'Enéas Ferreira de Aguiar'],
  bairrosPopulares: ['Marciano Brandão', 'Dona Diva', 'Santa Luzia', 'Tabajaras'],

  parques: [
    {
      nome: 'Pista de caminhada das avenidas centrais',
      descricao:
        'Faixas de concreto no canteiro central das avenidas Dom José André Coimbra e João Alves do Nascimento, com travessias elevadas nas esquinas, formam um dos principais corredores de caminhada e corrida da cidade.',
    },
    {
      nome: 'Praças e avenidas arborizadas do Centro',
      descricao:
        'O entorno das praças centrais e das largas avenidas é bastante usado para caminhada e corrida ao amanhecer e no fim de tarde.',
    },
  ],
  ciclovias:
    'A cidade tem trechos cicláveis e canteiros largos nas avenidas centrais; a extensão oficial total de ciclovias ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude (Cwb), com verão quente e chuvoso e inverno seco e ameno; a temperatura média anual fica em torno de 20,7 °C, típica do Cerrado de altitude do Alto Paranaíba.',
  climaTreino:
    'O inverno seco e a altitude favorecem o treino ao ar livre, sobretudo cedo de manhã; no verão, vale evitar o fim de tarde por causa das chuvas e reforçar a hidratação.',

  mobilidade:
    'Patrocínio é cortada pela BR-365, principal eixo rodoviário da região, que liga o Alto Paranaíba ao Triângulo Mineiro e ao norte de Minas, com acesso a Patos de Minas, Araxá e Uberlândia.',

  corridas: [
    {
      nome: 'Corrida do Trabalhador',
      descricao:
        'Prova de rua tradicional realizada em 1º de maio, com largada na UNICERP e percurso pelas avenidas centrais da cidade.',
    },
  ],
  culturaEsportiva:
    'A cidade tem cultura ativa de caminhada e corrida de rua nas avenidas centrais, impulsionada também pela presença universitária e pelo clima de altitude, favorável à prática ao ar livre boa parte do ano.',
  academias:
    'A oferta reúne academias de bairro, estúdios e espaços de treinamento funcional, complementados pela estrutura pública das pistas de caminhada e praças do Centro.',

  destaquesFitness: [
    'Pista de caminhada nas avenidas centrais como principal corredor público de treino.',
    'Corrida do Trabalhador como evento de rua de referência, com largada na UNICERP.',
    'Clima tropical de altitude e inverno seco que favorecem o treino ao ar livre.',
    'Polo do café do Cerrado Mineiro, com renda e perfil universitário que sustentam a demanda.',
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
    'Capital do café do Cerrado Mineiro, Patrocínio combina clima de altitude favorável, avenidas com pistas de caminhada e uma vida universitária ativa. Um personal trainer ajuda a aproveitar a estrutura das avenidas centrais e a preparar provas de rua, como a Corrida do Trabalhador, com método e segurança.',

  vizinhas: ['patos-de-minas-mg', 'araxa-mg', 'araguari-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Patrocínio', url: 'https://cidades.ibge.gov.br/brasil/mg/patrocinio/panorama' },
    { nome: 'Prefeitura de Patrocínio', url: 'https://www.pmp.patrocinio.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
