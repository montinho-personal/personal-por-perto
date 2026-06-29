import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'rio-bonito-rj',
  nome: 'Rio Bonito',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'rio-bonitense',
  tipo: 'cidade',

  populacao: 56276,
  populacaoAno: 2022,
  idhm: 0.710,
  idhmClasse: 'alto',
  altitudeM: 40,

  resumoEconomico:
    'Na sub-região Leste Fluminense da Região Metropolitana do Rio, Rio Bonito é conhecida como porta de entrada da Região dos Lagos, no entroncamento entre a BR-101 e a RJ-124 (Via Lagos). A economia se apoia no comércio e nos serviços, na administração pública e em uma agropecuária tradicional, com destaque histórico para a citricultura (laranja e limão) e uma produção agrícola que superou 120 mil toneladas em anos recentes.',

  mercado:
    'O mercado fitness é o de uma cidade média do interior fluminense: redes e academias de bairro concentradas no Centro e nos loteamentos em expansão, complementadas por estúdios e profissionais autônomos que atendem condomínios e praças.',

  bairrosNobres: ['Centro', 'Green Valley', 'Parque Andrea', 'Boa Esperança'],
  bairrosPopulares: ['Cidade Nova', 'Olaria', 'Boqueirão', 'Rio Seco'],

  parques: [
    {
      nome: 'Praça do Green Valley',
      descricao:
        'Espaço de lazer com pista para atividades ao ar livre, rampa de skate, quadra de areia e área para a família, usado como ponto de encontro de corridas e eventos esportivos.',
    },
    {
      nome: 'Parque Vale Verde',
      descricao:
        'Área de contato com a natureza, com nascente e vegetação preservada, procurada para caminhadas em meio ao verde.',
    },
    {
      nome: 'Praça Fonseca Portela',
      descricao:
        'Praça central tradicional, palco de eventos da cidade e ponto de caminhada no Centro.',
    },
  ],
  ciclovias:
    'A cidade não divulga uma malha cicloviária estruturada em fonte oficial; o pedal acontece sobretudo em vias locais e estradas vicinais.',

  clima:
    'O clima é tropical quente e úmido, típico do interior fluminense em transição entre a baixada e a serra, com verões quentes e chuvosos e inverno mais ameno.',
  climaTreino:
    'O calor e a umidade do verão pedem treinos nas primeiras horas da manhã ou no fim da tarde, com hidratação reforçada; o inverno ameno abre uma boa janela ao ar livre ao longo do dia.',

  mobilidade:
    'Rio Bonito está no entroncamento da BR-101, que liga São Gonçalo a leste e Tanguá a oeste, com a RJ-124 (Via Lagos), o eixo expresso que conduz a Araruama, Saquarema e ao restante da Região dos Lagos. Essa posição faz da cidade um ponto estratégico de passagem e acesso.',

  corridas: [
    {
      nome: 'Rio Bonito Night Run',
      descricao:
        'Corrida noturna realizada em dezembro, com percursos de 5 km e 10 km e largada na região central da cidade.',
    },
    {
      nome: 'Onda Verde',
      descricao:
        'Manhã de esporte e integração no Green Valley, que reuniu mais de 500 participantes em corrida e caminhada.',
    },
  ],
  culturaEsportiva:
    'A cidade tem uma cena de corrida de rua ativa, com grupos locais de corredores e provas como a Rio Bonito Night Run e o evento Onda Verde, somadas a ações da prefeitura que levam esporte e saúde aos bairros nos fins de semana.',
  academias:
    'A oferta privada de redes e academias de bairro, concentrada no Centro e nos loteamentos, é complementada por praças públicas como o Green Valley, que funcionam como espaço de treino e ponto de encontro de corredores.',

  destaquesFitness: [
    'Posição de porta de entrada da Região dos Lagos, no cruzamento da BR-101 com a RJ-124 (Via Lagos).',
    'Praça do Green Valley como polo de treino ao ar livre, com pista, quadra de areia e área de lazer.',
    'Cena de corrida de rua ativa, com grupos de corredores e provas como a Rio Bonito Night Run.',
    'Perfil de cidade média do interior fluminense, com economia de comércio, serviços e agropecuária.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Porta de entrada da Região dos Lagos e cidade de comércio, serviços e agropecuária, Rio Bonito combina ritmo de interior com boa estrutura de praças e corrida de rua. Um personal trainer ajuda a transformar esse cenário em rotina, ajustando horários ao calor do verão e aproveitando espaços como o Green Valley com método.',

  vizinhas: ['sao-goncalo-rj', 'itaborai-rj', 'marica-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Rio Bonito', url: 'https://cidades.ibge.gov.br/brasil/rj/rio-bonito/panorama' },
    { nome: 'Prefeitura de Rio Bonito', url: 'https://riobonito.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
