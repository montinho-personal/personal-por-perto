import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'amparo-sp',
  nome: 'Amparo',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'amparense',
  tipo: 'cidade',

  populacao: 68008,
  populacaoAno: 2022,
  idhm: 0.785,
  idhmClasse: 'alto',
  altitudeM: 674,

  resumoEconomico:
    'Primeira estância hidromineral do estado de São Paulo (desde 1945) e uma das portas de entrada do Circuito das Águas Paulista, Amparo fica na Região Metropolitana de Campinas, cercada por serras e por antigas fazendas do ciclo do café. A economia é bem diversificada: a indústria responde pela maior fatia do valor adicionado, com destaque para os setores de higiene e limpeza e de alimentos, seguida por serviços, turismo histórico e rural, e uma agricultura ligada ao café e à produção agropecuária da região.',

  mercado:
    'Como cidade média inserida na Região Metropolitana de Campinas e no Circuito das Águas, Amparo combina um público urbano com quem procura a cidade pelo turismo e pela qualidade de vida no interior. O mercado fitness reúne academias locais e estúdios, e a procura por personal trainers tende a se apoiar tanto no morador que quer treino orientado quanto em quem aproveita o clima ameno e o relevo de serra para atividade ao ar livre.',

  bairrosNobres: ['Centro', 'Jardim Camboriú', 'Jardim Silvana', 'Vila Palmira'],
  bairrosPopulares: ['São Dimas', 'Parque Fabrício', 'Jardim Bela Vista', 'Bairro do Ribeirão'],

  parques: [
    {
      nome: 'Praça Pádua Salles (Centro)',
      descricao:
        'Cartão-postal do centro histórico, cercada por casarões tombados e monumentos centenários; é ponto de largada de corridas e passeios ciclísticos e um dos espaços mais usados para caminhada no coração da cidade.',
    },
    {
      nome: 'Centro histórico e casarões do café',
      descricao:
        'O conjunto de ruas históricas ladeadas por construções da época áurea do café oferece percursos planos e arborizados para caminhada e corrida leve em meio ao patrimônio da cidade.',
    },
    {
      nome: 'Serras e fazendas do entorno',
      descricao:
        'Amparo é circundada por montanhas e por antigas fazendas de café, como as que serviram de cenário para novelas e filmes de época; as estradas rurais e o relevo de serra atraem quem treina corrida, pedal e trilha ao ar livre.',
    },
  ],
  ciclovias:
    'A malha cicloviária urbana é modesta, mas a vocação de cidade turística do Circuito das Águas se reflete em passeios ciclísticos organizados e em rotas rurais pelas serras e fazendas, que concentram boa parte do pedal de lazer e de treino na região.',

  clima:
    'O clima é tropical de altitude (Cwa de Köppen), ameno pela posição em serra a cerca de 674 metros, com temperatura média anual em torno de 21 °C. O ano se divide em verão quente e chuvoso e inverno mais curto, seco e ameno, quando as noites podem ficar frias — característica típica das estâncias do Circuito das Águas.',
  climaTreino:
    'O clima ameno é um trunfo para treinar ao ar livre na maior parte do ano, com manhãs e fins de tarde agradáveis. No verão chuvoso vale acompanhar a previsão e reforçar a hidratação; no inverno, as manhãs frias pedem aquecimento mais cuidadoso antes da atividade.',

  mobilidade:
    'Amparo se conecta à Região Metropolitana de Campinas principalmente pela Rodovia Governador Doutor Adhemar Pereira de Barros (SP-095), que leva a Jaguariúna e ao entorno de Campinas, além de ligações rodoviárias com Bragança Paulista, Mogi Mirim e as demais cidades do Circuito das Águas. O transporte urbano é feito por ônibus, e o relevo de serra marca os deslocamentos dentro e fora da cidade.',

  corridas: [
    {
      nome: 'Corrida Histórica de Amparo',
      descricao:
        'Prova de rua com percursos de 5 km e 10 km que largam da Praça Pádua Salles, no centro, passando por ruas históricas e casarões tombados; celebra o patrimônio da cidade e é supervisionada pela Federação Paulista de Atletismo.',
    },
    {
      nome: 'Pedala Tour Amparo',
      descricao:
        'Passeio ciclístico de caráter não competitivo que reúne centenas de participantes com largada e chegada no centro, reforçando a cultura de atividade ao ar livre da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Amparo se apoia no centro histórico como palco de corridas e passeios ciclísticos, no clima ameno de serra que favorece o treino ao ar livre e no turismo do Circuito das Águas, que aproxima moradores e visitantes das atividades em meio à natureza e ao patrimônio da cidade.',
  academias:
    'A oferta é formada por academias de musculação e treino funcional e estúdios distribuídos pelo centro e pelos bairros residenciais, em porte compatível com uma cidade média do interior paulista integrada à Região Metropolitana de Campinas.',

  destaquesFitness: [
    'Primeira estância hidromineral de São Paulo e porta de entrada do Circuito das Águas Paulista.',
    'Clima ameno de altitude (cerca de 674 m), favorável ao treino ao ar livre na maior parte do ano.',
    'Centro histórico com casarões do café que serve de palco para corridas de rua e passeios ciclísticos.',
    'Cidade da Região Metropolitana de Campinas, com economia diversificada entre indústria, serviços e turismo.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade histórica de serra, com clima ameno e forte vocação turística no Circuito das Águas, Amparo reúne condições favoráveis para o treino ao ar livre ao longo do ano. Um personal trainer ajuda a montar uma rotina que aproveite o clima e o relevo, escolha os melhores horários entre verão chuvoso e inverno frio e mantenha a constância dentro e fora dos períodos de maior movimento turístico.',

  vizinhas: ['jaguariuna-sp', 'braganca-paulista-sp', 'mogi-mirim-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Amparo', url: 'https://cidades.ibge.gov.br/brasil/sp/amparo/panorama' },
    { nome: 'Prefeitura da Estância de Amparo', url: 'https://www.amparo.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
