import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'nova-venecia-es', nome: 'Nova Venécia', uf: 'ES', estado: 'Espírito Santo', estadoSlug: 'espirito-santo', regiao: 'Sudeste', gentilico: 'veneciano', tipo: 'cidade',
  populacao: 49065, populacaoAno: 2022, idhm: 0.712, idhmClasse: 'médio', altitudeM: 65,

  resumoEconomico:
    'Nova Venécia é um dos principais municípios do noroeste capixaba e é conhecida como a "capital do granito", apoiada na extração e no beneficiamento de rochas ornamentais que movimentam a economia local e abastecem o mercado nacional. A cidade nasceu da colonização italiana, com famílias vindas do Vêneto a partir do fim do século XIX, e mantém forte vocação agropecuária, com destaque para a produção de café e de leite. A combinação entre o polo de granito, o agronegócio e o comércio que atende a região faz dela uma referência de serviços no entorno.',

  mercado:
    'O mercado de personal trainers em Nova Venécia acompanha o porte de uma cidade média que concentra serviços para os municípios vizinhos do noroeste capixaba. A demanda se distribui entre academias e estúdios no Centro e o atendimento domiciliar, formato bem-vindo no calor da região, em que treinar em casa ou em horários mais frescos é uma escolha comum.',

  bairrosNobres: ['Centro', 'São Marcos', 'Vila Nova'],
  bairrosPopulares: ['Cohab', 'Margareth', 'Aviso'],

  parques: [
    {
      nome: 'Pedra do Elefante (APA Pedra do Elefante)',
      descricao:
        'Maciço de granito que lembra a cabeça de um elefante, símbolo de Nova Venécia e protegido por uma Área de Proteção Ambiental. Suas trilhas atraem praticantes de caminhada e ciclismo que buscam contato com a natureza e relevo desafiador nos arredores da cidade.',
    },
    {
      nome: 'Pedra da Caveira',
      descricao:
        'Outra formação rochosa típica da paisagem veneciana, que compõe o conjunto de pedras da região e serve de destino para quem gosta de trilhas e atividade ao ar livre em meio à Mata Atlântica.',
    },
    {
      nome: 'Praça Cohab e espaços públicos do Centro',
      descricao:
        'As praças revitalizadas e os trechos arborizados próximos ao Centro funcionam como pontos de encontro para caminhada e treino funcional ao ar livre nos horários mais amenos do dia.',
    },
  ],
  ciclovias:
    'O terreno do vale do rio Cricaré e as estradas em direção à Pedra do Elefante são os percursos mais procurados por ciclistas e corredores que buscam pedalar e treinar nos arredores da cidade.',

  clima:
    'O clima é tropical quente, característico do noroeste capixaba, com temperaturas elevadas durante boa parte do ano e dias bastante abafados no verão. A baixa altitude da sede, em torno de 65 metros, reforça a sensação de calor.',
  climaTreino:
    'Com o calor típico da região, o início da manhã e o fim da tarde são as melhores janelas para treinar ao ar livre, sempre com hidratação reforçada. Nos horários centrais do dia, o treino domiciliar ou em academia climatizada costuma ser a alternativa mais prática.',

  mobilidade:
    'Nova Venécia é cortada pela BR-381, eixo que liga o município à região e dá acesso aos centros maiores do noroeste capixaba e de Minas Gerais. Dentro da cidade, o deslocamento se dá sobretudo por carro e motocicleta, comuns no interior, e o vale do rio Cricaré organiza a ocupação urbana.',

  corridas: [
    {
      nome: 'Copa Norte de Corrida de Rua Capixaba',
      descricao:
        'Nova Venécia já sediou etapas da Copa Norte de Corrida de Rua Capixaba, com percursos de 5 km e 10 km largando e chegando próximo ao Ginásio de Esportes, no Centro, reunindo atletas amadores e profissionais da região.',
    },
    {
      nome: 'Calendário esportivo do noroeste capixaba',
      descricao:
        'A cidade integra o circuito de provas de rua e eventos esportivos do norte e noroeste do Espírito Santo, que movimentam corredores das cidades vizinhas ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Nova Venécia mistura a rotina de academias e boxes no Centro com a vocação para atividades ao ar livre em meio às pedras e trilhas da região. Caminhada e corrida ganham espaço sobretudo nos horários mais frescos, quando o calor cede.',
  academias:
    'A cidade reúne academias e estúdios que atendem também moradores dos municípios do entorno, complementados pelo treino domiciliar com personal trainer, opção valorizada nos dias mais quentes.',

  destaquesFitness: [
    'Pedra do Elefante e Pedra da Caveira como cenário para trilhas e atividade ao ar livre.',
    'Polo regional do noroeste capixaba, com oferta concentrada de academias no Centro.',
    'Calor intenso favorece treino domiciliar e horários amenos.',
    'Etapas da Copa Norte de Corrida de Rua Capixaba realizadas na cidade.',
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
    'Entre as pedras de granito, o vale do rio Cricaré e o calor do noroeste capixaba, Nova Venécia pede um treino bem planejado — no horário certo e no ambiente certo. Capital do granito e cidade de raízes italianas, oferece academias, boxes e personal trainers que ajudam a manter a constância, seja nas trilhas dos arredores, seja em casa nos dias mais quentes.',

  vizinhas: ['colatina-es', 'sao-mateus-es', 'linhares-es'],

  fontes: [
    { nome: 'IBGE Cidades — Nova Venécia', url: 'https://cidades.ibge.gov.br/brasil/es/nova-venecia/panorama' },
    { nome: 'Prefeitura Municipal de Nova Venécia', url: 'https://www.novavenecia.es.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
