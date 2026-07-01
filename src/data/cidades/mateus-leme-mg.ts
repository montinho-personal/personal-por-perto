import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'mateus-leme-mg',
  nome: 'Mateus Leme',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'mateus-lemense',
  tipo: 'cidade',

  populacao: 37841,
  populacaoAno: 2022,
  idhm: 0.704,
  idhmClasse: 'alto',
  altitudeM: 822,

  resumoEconomico:
    'Cidade do vetor oeste da Região Metropolitana de Belo Horizonte, Mateus Leme nasceu da mineração de ouro no século XVIII e, com o declínio do garimpo, voltou-se à agropecuária. A virada mais recente veio com o Distrito Industrial instalado às margens da MG-050, que atraiu fábricas — sobretudo do setor de autopeças, impulsionadas pela presença da Fiat em Betim. Hoje a economia combina indústria de transformação, comércio e serviços de apoio à malha metropolitana, além de uma agropecuária ainda presente na zona rural e nos distritos de Azurita e Serra Azul.',

  mercado:
    'Por estar na órbita metropolitana de Belo Horizonte, Mateus Leme tem um mercado fitness que cresce puxado pela expansão urbana e industrial, mas ainda com porte de cidade média do interior. A procura por personal trainers aparece entre trabalhadores da indústria e do comércio que buscam treino orientado para a rotina, além de moradores que se deslocam para Betim e BH e querem constância mesmo com agenda apertada.',

  bairrosNobres: ['Centro', 'Jardim Serra Azul', 'Concenza', 'Bela Vista'],
  bairrosPopulares: ['Azurita', 'Serra Azul', 'Cidade Nova', 'Novo Horizonte'],

  parques: [
    {
      nome: 'Represa de Serra Azul',
      descricao:
        'Reservatório na divisa com Juatuba, importante para o abastecimento da região metropolitana; o entorno, em área de Mata Atlântica, oferece paisagem de serra que atrai quem gosta de caminhada e pedal em meio à natureza.',
    },
    {
      nome: 'Distrito de Azurita',
      descricao:
        'Antigo distrito rural de clima ameno e relevo de serra, procurado para atividades ao ar livre e passeios; as estradas e trilhas do entorno servem de percurso para corrida e ciclismo fora do centro urbano.',
    },
    {
      nome: 'Serra Azul',
      descricao:
        'A serra que dá nome ao distrito marca o ponto mais alto do município (perto de 1.300 m); as subidas e o terreno acidentado são convite para treino de trilha e ciclismo de montanha.',
    },
  ],
  ciclovias:
    'A malha cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal acontece nas vias do município e nas estradas que ligam a sede aos distritos de Azurita e Serra Azul, além do entorno da represa.',

  clima:
    'O clima é tropical de altitude, típico do centro de Minas Gerais: verões quentes e chuvosos, de outubro a março, e invernos secos e amenos, de maio a agosto, com noites frias favorecidas pela altitude, que varia de cerca de 790 m na represa de Serra Azul a quase 1.300 m no ponto mais alto da serra.',
  climaTreino:
    'A altitude e o inverno seco tornam boa parte do ano favorável ao treino ao ar livre, especialmente de manhã cedo e no fim da tarde. No verão, as chuvas de fim de dia pedem flexibilidade de horário e atenção à hidratação; nos meses secos, o ar mais seco recomenda reforçar a ingestão de água.',

  mobilidade:
    'Mateus Leme se conecta à Região Metropolitana de Belo Horizonte principalmente pela rodovia MG-050, eixo que estrutura o Distrito Industrial e liga a cidade a Betim e à capital. O transporte urbano é feito por ônibus, com linhas metropolitanas atendendo o fluxo de trabalhadores que se deslocam para Betim, Juatuba e BH.',

  corridas: [
    {
      nome: 'Provas de rua no calendário municipal',
      descricao:
        'A cidade recebe corridas e caminhadas organizadas em datas comemorativas e por iniciativas locais, aproveitando as ruas do centro e o clima ameno de altitude para provas de curta e média distância.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o futebol de bairro e de várzea, forte tradição no interior mineiro, com o uso das ruas e estradas para caminhada e corrida e o aproveitamento da serra e da represa de Serra Azul para atividades ao ar livre.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média do vetor oeste da região metropolitana.',

  destaquesFitness: [
    'Cidade do vetor oeste da Região Metropolitana de Belo Horizonte, ligada pela MG-050.',
    'Clima tropical de altitude, com invernos secos e amenos favoráveis ao treino ao ar livre.',
    'Serra Azul e a represa homônima como cenário de trilha, pedal e caminhada.',
    'Economia de base industrial (autopeças no Distrito Industrial), comércio e agropecuária.',
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
    'Cidade de serra e clima ameno na órbita metropolitana de Belo Horizonte, Mateus Leme reúne relevo variado, represa e estradas que favorecem o treino ao ar livre, além de uma rotina marcada pelo deslocamento pela MG-050. Um personal trainer ajuda a organizar essa agenda, escolher os melhores horários ao longo das estações e manter a constância, seja na academia ou aproveitando o entorno natural.',

  vizinhas: ['betim-mg', 'igarape-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Mateus Leme', url: 'https://cidades.ibge.gov.br/brasil/mg/mateus-leme/panorama' },
    { nome: 'Prefeitura de Mateus Leme', url: 'https://www.mateusleme.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
