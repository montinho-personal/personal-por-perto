import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'lima-duarte-mg',
  nome: 'Lima Duarte',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'limaduartino',
  tipo: 'cidade',

  populacao: 17221,
  populacaoAno: 2022,
  idhm: 0.710,
  idhmClasse: 'alto',
  pibPerCapita: 25114,
  pibPerCapitaAno: 2023,
  altitudeM: 860,

  resumoEconomico:
    'No Sul da Zona da Mata mineira, a cerca de 68 km de Juiz de Fora, Lima Duarte é a cidade-sede do Parque Estadual do Ibitipoca, um dos destinos de ecoturismo mais procurados de Minas Gerais. O PIB municipal gira em torno de R$ 339,7 milhões, com os serviços respondendo pela maior fatia do valor adicionado (45,9%), seguidos por administração pública (25,9%), agropecuária (17,3%) e indústria (10,8%). Entre as atividades que mais empregam estão a administração pública, a fabricação de laticínios e a pecuária leiteira — caso da Sabor da Serra, laticínio fundado em 1993 que processa cerca de 35 mil litros de leite por dia, a maior parte comprada de pequenos produtores rurais da região. O turismo ligado ao parque, com pousadas, restaurantes e serviços em Conceição do Ibitipoca, completa a base econômica do município.',

  mercado:
    'O mercado fitness de Lima Duarte é pequeno, típico de um município de pouco mais de 17 mil habitantes, com poucas academias de bairro concentradas na sede urbana. Parte da procura por personal trainer vem de moradores que buscam treino individualizado onde a oferta de estúdios e modalidades é limitada, e parte é puxada pelo fluxo de visitantes e proprietários de pousadas e casas de temporada ligados ao Parque Estadual do Ibitipoca, que buscam preparo físico para trilhas, escalada e passeios de longa duração no parque.',

  bairrosNobres: ['Centro', 'São Francisco', 'Santa Terezinha'],
  bairrosPopulares: ['Poço da Pedra', 'Barreira', 'Batatal', 'Vila Belmira'],

  parques: [
    {
      nome: 'Parque Estadual do Ibitipoca',
      descricao:
        'Criado em 1973 e administrado pelo Instituto Estadual de Florestas, é um dos parques estaduais mais visitados de Minas Gerais, no divisor de águas entre as bacias do Rio Grande e do Rio Paraíba do Sul. Reúne grutas, picos rochosos, piscinas naturais e trilhas com diferentes níveis de dificuldade, entre elas os atrativos Janela do Céu, Gruta dos Três Arcos e Ponte de Pedra.',
    },
    {
      nome: 'Pico do Pião',
      descricao:
        'A cerca de 1.720 m de altitude, é um dos pontos mais altos do parque e destino de trilha de longa duração (cerca de 9 km ida e volta), que passa por grutas como a do Monjolinho e a dos Viajantes — roteiro de referência para quem treina trekking na região.',
    },
    {
      nome: 'Vila de Conceição do Ibitipoca',
      descricao:
        'Distrito de Lima Duarte a poucos quilômetros da entrada do parque, com ruas de pedra e casario colonial; é a base de apoio a caminhantes e ciclistas que exploram as trilhas do Ibitipoca e o entorno rural do município.',
    },
  ],
  ciclovias:
    'O município não tem estrutura cicloviária urbana; o pedal e a caminhada ao ar livre acontecem nas ruas do Centro histórico e, sobretudo, nas estradas rurais e trilhas de acesso ao Parque Estadual do Ibitipoca.',

  clima:
    'O clima é tropical de altitude (Cwb, segundo Köppen), com temperatura média anual de cerca de 20,1 °C, invernos secos e frios — com ocorrência de geadas em pontos mais altos — e verões chuvosos e amenos. A altitude varia bastante no território, da sede a 860 m até o Morro do Pião, a 1.721 m.',
  climaTreino:
    'O clima ameno de altitude favorece o treino ao ar livre em boa parte do ano, mas as manhãs e noites de inverno exigem agasalho por causa do frio e das geadas. Nas trilhas do parque, o piso rochoso e irregular pede atenção redobrada, especialmente nos dias chuvosos de verão.',

  mobilidade:
    'O principal acesso a Lima Duarte é pela BR-267, que se conecta à BR-040 nas proximidades de Juiz de Fora, a cerca de 68 km da cidade. Dentro do município, o trajeto da sede até o distrito de Conceição do Ibitipoca soma cerca de 27 km, boa parte em estrada de terra, seguidos de mais alguns quilômetros até a portaria do parque. Os deslocamentos internos são feitos majoritariamente de carro, com transporte coletivo limitado entre a sede e os distritos rurais.',

  corridas: [
    {
      nome: 'Ibiti Run',
      descricao:
        'Única corrida realizada dentro do Parque Estadual do Ibitipoca, com edições desde 2014. Reúne modalidades como o trail run de 11 km, a meia maratona "Janela do Céu" (passando por atrativos do parque), uma prova noturna de 5 km e formatos por etapas.',
    },
    {
      nome: 'Ibitipoca Eco Run',
      descricao:
        'Prova de corrida e caminhada realizada nas imediações de Lima Duarte, com percursos de 3 km, 6,5 km e 14 km, com largada próxima à Prainha da Conga, na estrada de acesso ao Ibitipoca.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Lima Duarte gira em torno do Parque Estadual do Ibitipoca: trekking até picos como o do Pião, espeleologia nas diversas grutas do parque (Três Arcos, Monjolinho, dos Viajantes), rapel em paredões rochosos e banho em piscinas naturais. Esse cenário atrai tanto moradores quanto visitantes, e sustenta provas de corrida de trilha organizadas dentro e no entorno do parque.',
  academias:
    'A oferta de academias é pequena e concentrada na sede urbana, com estúdios e academias de bairro como a Estação do Corpo e a Villa Fitness Academia, no Centro, oferecendo musculação e treino funcional — porte compatível com um município pequeno do interior.',

  destaquesFitness: [
    'Sede do Parque Estadual do Ibitipoca, um dos parques estaduais mais visitados de Minas Gerais, com grutas, picos e a icônica Janela do Céu.',
    'Altitude média de 860 m e clima tropical de altitude ameno, favorável ao treino ao ar livre na maior parte do ano.',
    'Ibiti Run, única corrida disputada dentro do parque desde 2014, com trail run e meia maratona "Janela do Céu".',
    'Economia de base agropecuária e de laticínios somada ao ecoturismo, o que molda um mercado fitness pequeno e voltado a trekking e atividades ao ar livre.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 100,
    mensalMin: 240,
    mensalMax: 600,
    onlineMin: 110,
    onlineMax: 320,
  },

  conclusao:
    'Cidade pequena e cercada pela Serra do Ibitipoca, Lima Duarte tem no parque estadual o centro da vida ao ar livre, com trilhas, grutas e picos que pedem preparo físico específico para trekking e travessias. Como o mercado local de academias é enxuto, um personal trainer que trabalhe caminhada, resistência e treino funcional adaptado ao terreno é o caminho mais direto para treinar com segurança e constância na região.',

  vizinhas: ['juiz-de-fora-mg', 'barbacena-mg', 'santos-dumont-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Lima Duarte', url: 'https://cidades.ibge.gov.br/brasil/mg/lima-duarte/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Lima Duarte', url: 'https://limaduarte.mg.gov.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
