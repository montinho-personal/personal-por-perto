import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sidrolandia-ms',
  nome: 'Sidrolândia',
  uf: 'MS',
  estado: 'Mato Grosso do Sul',
  estadoSlug: 'mato-grosso-do-sul',
  regiao: 'Centro-Oeste',
  gentilico: 'sidrolandense',
  tipo: 'cidade',

  populacao: 47118,
  populacaoAno: 2022,
  idhm: 0.652,
  idhmClasse: 'médio',
  altitudeM: 484,

  resumoEconomico:
    'Integrante da Região Metropolitana de Campo Grande e a cerca de 70 km da capital pela BR-060, Sidrolândia é uma das cidades que mais crescem em Mato Grosso do Sul. Sua economia gira em torno da agroindústria — soja, cana-de-açúcar e pecuária de corte —, com usina sucroenergética e forte presença do agronegócio no campo. O município abriga também uma das maiores populações indígenas do estado, com diversas aldeias da etnia Terena, o que dá à cidade um perfil cultural singular.',

  mercado:
    'O mercado de personal trainers acompanha o crescimento populacional e a proximidade com Campo Grande, de onde chegam tendências de treino. A oferta é formada sobretudo por academias locais de musculação e estúdios de treino funcional, com atendimento personalizado ganhando espaço entre quem busca acompanhamento próximo sem deslocar-se até a capital.',

  bairrosNobres: ['Centro', 'Jardim Petrópolis', 'Altos da Figueira', 'Jardim Paraíso'],
  bairrosPopulares: ['Cohab', 'Vila Margarida', 'Buritizinho', 'São Bento'],

  parques: [
    {
      nome: 'Praça da Liberdade',
      descricao:
        'Principal espaço público do Centro, ponto de encontro da cidade e referência para caminhadas e atividades ao ar livre no fim da tarde.',
    },
    {
      nome: 'Áreas verdes e trilhas da Rota Bioceânica',
      descricao:
        'O entorno rural e os trajetos naturais usados pela Trilha da Alvorada oferecem percursos de caminhada e corrida em meio à paisagem do Cerrado.',
    },
    {
      nome: 'Espaços esportivos municipais',
      descricao:
        'Quadras, campos e equipamentos públicos mantidos pela Fundação de Esporte, que concentram boa parte da prática esportiva comunitária.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária ainda é incipiente e concentrada em trechos do Centro e de avenidas principais, mas a bicicleta tem uso cotidiano expressivo como meio de transporte na cidade.',

  clima:
    'O clima é tropical do centro-sul de Mato Grosso do Sul, com verões quentes e úmidos e um inverno seco entre maio e setembro; as máximas passam dos 32 °C nos meses mais quentes, e a altitude de cerca de 484 m ajuda a amenizar levemente o calor.',
  climaTreino:
    'O treino ao ar livre rende mais no começo da manhã ou após as 18h, evitando o pico de calor da tarde; no período seco, a hidratação reforçada é essencial diante da baixa umidade do ar.',

  mobilidade:
    'Cidade de porte médio e malha urbana compacta, Sidrolândia não tem transporte sobre trilhos e se locomove por carro, moto, bicicleta e ônibus. A BR-060 é o eixo que liga o município a Campo Grande e à Região Metropolitana, facilitando o fluxo diário de trabalho e serviços com a capital.',

  corridas: [
    {
      nome: 'Trilha da Alvorada',
      descricao:
        'Prova de corrida e caminhada com percursos de 12 km, 6 km e 3 km por trajetos naturais do município, organizada pela Prefeitura por meio da Fundação de Esporte.',
    },
    {
      nome: 'Circuito Coração da Rota Bioceânica',
      descricao:
        'Circuito regional de corrida de rua que passa por Sidrolândia, com etapas que incluem distâncias de 5 km a 21 km e provas kids.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina futebol e práticas comunitárias com uma cena crescente de corrida de rua, impulsionada por provas como a Trilha da Alvorada e pelo Circuito Coração da Rota Bioceânica, além da musculação nas academias locais.',
  academias:
    'A oferta reúne academias de musculação e estúdios de treino funcional voltados ao público local, com atendimento personalizado em expansão; quem busca redes de maior porte costuma recorrer a Campo Grande, próxima pela BR-060.',

  destaquesFitness: [
    'Integra a Região Metropolitana de Campo Grande, com acesso rápido à capital pela BR-060.',
    'Calendário de corrida de rua próprio, com a Trilha da Alvorada e o Circuito Coração da Rota Bioceânica.',
    'Altitude de cerca de 484 m, que ameniza levemente o calor do centro-sul do estado.',
    'Perfil cultural singular, com uma das maiores populações indígenas (Terena) de Mato Grosso do Sul.',
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
    'Cidade em pleno crescimento na Região Metropolitana de Campo Grande, com economia agroindustrial forte e identidade cultural marcante, Sidrolândia oferece um ambiente cada vez mais propício à vida ativa. Um personal trainer ajuda a estruturar o treino respeitando o calor e a baixa umidade do inverno, aproveitando provas locais e a proximidade com a capital.',

  vizinhas: ['campo-grande-ms', 'aquidauana-ms'],

  fontes: [
    { nome: 'IBGE Cidades — Sidrolândia', url: 'https://cidades.ibge.gov.br/brasil/ms/sidrolandia/panorama' },
    { nome: 'Prefeitura de Sidrolândia', url: 'https://www.sidrolandia.ms.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
