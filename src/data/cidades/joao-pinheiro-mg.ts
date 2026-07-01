import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'joao-pinheiro-mg',
  nome: 'João Pinheiro',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'pinheirense',
  tipo: 'cidade',

  populacao: 46801,
  populacaoAno: 2022,
  idhm: 0.697,
  idhmClasse: 'médio',
  altitudeM: 769,

  resumoEconomico:
    'No Noroeste de Minas, João Pinheiro é um dos maiores municípios do estado em área territorial, com cerca de 10,7 mil km² inteiramente no bioma Cerrado. A economia gira em torno do agronegócio: produção de grãos (com destaque para a soja), pecuária de corte e leite, florestas plantadas de eucalipto para celulose e energia, além da cana-de-açúcar irrigada ligada à produção de etanol. Solos profundos, relevo favorável e a rede de rios da bacia do Paracatu sustentam a agropecuária, enquanto a cidade se apoia no comércio e nos serviços que atendem a região.',

  mercado:
    'Por ser uma cidade média do interior mineiro apoiada no agronegócio, o mercado fitness de João Pinheiro é mais enxuto que o das grandes cidades do estado, concentrado em academias locais de musculação e treino funcional. A procura por personal trainers tende a crescer entre trabalhadores do agronegócio, do comércio e dos serviços que buscam acompanhamento individual e horários flexíveis, além de quem quer aproveitar o clima seco do Cerrado para treinar ao ar livre.',

  bairrosNobres: ['Centro', 'Caatinga', 'Canabrava', 'Veredas'],
  bairrosPopulares: ['Luizlândia do Oeste', 'Olhos d’Água do Oeste', 'Santa Luzia da Serra', 'São Sebastião'],

  parques: [
    {
      nome: 'Entorno do Rio Paracatu e afluentes',
      descricao:
        'O município é cortado por rios da bacia do Paracatu — como Prata, Verde, Caatinga, Sono e Santo Antônio, tributários que deságuam no rio São Francisco. As margens e estradas próximas servem de percurso para caminhada, corrida e pedal em contato com a paisagem do Cerrado.',
    },
    {
      nome: 'Praças e vias do Centro',
      descricao:
        'A área central concentra as praças e ruas mais usadas para caminhada no início da manhã e no fim da tarde, quando o calor do Cerrado dá trégua.',
    },
    {
      nome: 'Paisagem de Cerrado do Noroeste de Minas',
      descricao:
        'Com todo o território no bioma Cerrado, o entorno rural oferece chapadas, veredas e estradas vicinais que viram opções de treino ao ar livre para quem busca distância e desnível fora da malha urbana.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e nas estradas do entorno rural, sempre com atenção ao tráfego pesado ligado ao agronegócio.',

  clima:
    'O clima é tropical típico do Cerrado, com duas estações bem marcadas: verão quente e chuvoso (concentrando a maior parte dos cerca de 1.360 mm de chuva ao ano, entre outubro e março) e inverno seco e mais ameno (de maio a setembro), quando a umidade do ar cai bastante e as temperaturas oscilam entre noites frescas e tardes quentes. A altitude em torno de 770 m no núcleo urbano suaviza um pouco o calor.',
  climaTreino:
    'No período seco do inverno, a baixa umidade pede hidratação reforçada e atenção ao horário — treinar no início da manhã ou no fim da tarde é mais confortável. No verão chuvoso, o calor e as pancadas de chuva no fim do dia favorecem treinos mais cedo ou em ambiente coberto.',

  mobilidade:
    'João Pinheiro é cortada pela BR-040, rodovia que liga Brasília ao Rio de Janeiro passando pelo Noroeste de Minas, o que conecta a cidade a Paracatu e ao restante do estado e escoa a produção do agronegócio. O transporte urbano é feito por ônibus e pelo deslocamento rodoviário, com a sede municipal servindo de referência para os distritos espalhados pelo extenso território.',

  corridas: [
    {
      nome: 'Corridas de rua locais',
      descricao:
        'A cidade recebe provas de corrida de rua no calendário regional do Noroeste de Minas, geralmente organizadas por grupos e comércio local, reforçando o hábito de caminhada e corrida entre os moradores.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o futebol e as caminhadas em praças e vias do Centro com o uso das estradas e margens de rios do entorno para corrida e pedal. O clima seco do inverno do Cerrado é o período mais procurado para atividades ao ar livre.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pela área central e pelos bairros residenciais, com porte compatível com uma cidade média do interior de Minas.',

  destaquesFitness: [
    'Um dos maiores municípios de Minas em área, inteiramente no bioma Cerrado.',
    'Economia forte no agronegócio: grãos e soja, pecuária, eucalipto e cana irrigada.',
    'Clima de Cerrado com inverno seco, que pede hidratação e planejamento de horário no treino.',
    'Cortada pela BR-040, com rios da bacia do Paracatu no entorno para treino ao ar livre.',
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
    'Cidade extensa do Noroeste de Minas, apoiada no agronegócio e cercada pelo Cerrado, João Pinheiro pede um treino adaptado ao clima seco do inverno e que aproveite as praças do Centro e as estradas do entorno. Um personal trainer ajuda a organizar a rotina respeitando os melhores horários, mantendo a hidratação em dia e sustentando a constância ao longo das estações seca e chuvosa.',

  vizinhas: ['paracatu-mg', 'patos-de-minas-mg'],

  fontes: [
    { nome: 'IBGE Cidades — João Pinheiro', url: 'https://cidades.ibge.gov.br/brasil/mg/joao-pinheiro/panorama' },
    { nome: 'Prefeitura de João Pinheiro', url: 'https://www.joaopinheiro.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
