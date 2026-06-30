import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'mafra-sc',
  nome: 'Mafra',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'mafrense',
  tipo: 'cidade',

  populacao: 55286,
  populacaoAno: 2022,
  idhm: 0.777,
  idhmClasse: 'alto',
  altitudeM: 793,

  resumoEconomico:
    'No Planalto Norte catarinense, na divisa com o Paraná, Mafra nasceu ligada à Guerra do Contestado e à extração de araucária e erva-mate. Hoje tem economia diversificada: forte tradição florestal (madeira, móveis e papel), agroindústria e agronegócio (grãos, aves, suínos e leite), figurando entre os maiores produtores de agronegócio de Santa Catarina. A cidade forma com Rio Negro (PR), do outro lado do rio Negro, uma conurbação conhecida como Rio-Mafra.',

  mercado:
    'A economia diversificada e a renda estável de uma cidade média do Planalto Norte sustentam academias, estúdios e profissionais autônomos. A conurbação com Rio Negro (PR) amplia o público potencial, e os espaços públicos às margens do rio Negro complementam a oferta privada de treino.',

  bairrosNobres: ['Centro (Alto de Mafra)', 'Jardim América', 'Vila Formosa', 'Bela Vista do Sul'],
  bairrosPopulares: ['Faxinal', 'Vila Nova', 'Restinga', 'Espigão do Bugre'],

  parques: [
    {
      nome: 'Parque do Passo',
      descricao:
        'Área verde às margens do rio Negro, alvo de projeto de revitalização urbanística com praças, rampas acessíveis e ciclovia — um dos principais espaços de lazer e treino ao ar livre da cidade.',
    },
    {
      nome: 'Beira-rio do rio Negro',
      descricao:
        'A orla do rio que divide Mafra de Rio Negro (PR) reúne trechos de caminhada e ciclismo, integrando as duas cidades da conurbação Rio-Mafra.',
    },
    {
      nome: 'Praças e academias ao ar livre do Centro',
      descricao:
        'O entorno do centro histórico, com a Ponte Metálica e espaços públicos, é usado para caminhada e atividade física no dia a dia.',
    },
  ],
  ciclovias:
    'O projeto de revitalização do Parque do Passo prevê ciclovia com cerca de 1.400 metros, estendendo-se até a rua José Frosch; há também trechos urbanos junto à orla do rio Negro.',

  clima:
    'O clima é subtropical de altitude (Cfb), típico do Planalto Norte catarinense: verões amenos e invernos frios, com geadas frequentes e ocorrência ocasional de neve em anos mais rigorosos.',
  climaTreino:
    'O verão ameno favorece o treino ao ar livre em quase qualquer horário. No inverno, o frio intenso e as geadas pedem aquecimento mais longo, roupas em camadas e atenção a pisos escorregadios pela manhã.',

  mobilidade:
    'Mafra é cortada pela BR-116, importante eixo rodoviário do Sul do país, e é cidade-gêmea de Rio Negro (PR), com a qual forma a conurbação Rio-Mafra, separada apenas pelo rio Negro e ligada por pontes — entre elas a histórica Ponte Metálica.',

  corridas: [
    {
      nome: 'Circuito Sesc de Caminhadas na Natureza',
      descricao:
        'Etapa realizada em Mafra com percursos para iniciantes e intermediários (entre 2 e 4 km) em trilhas de dificuldade leve a moderada no entorno rural.',
    },
    {
      nome: 'Corridas de rua regionais',
      descricao:
        'A região de Rio-Mafra recebe provas de rua ao longo do ano, integrando o calendário esportivo do Planalto Norte e a comunidade das duas cidades.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mafrense se apoia no uso dos espaços públicos junto ao rio Negro e na integração com Rio Negro (PR), que amplia a oferta de eventos. Caminhadas na natureza e corridas de rua regionais movimentam a comunidade ao longo do ano.',
  academias:
    'A oferta reúne academias, estúdios e profissionais autônomos espalhados pelo centro e pelos bairros, com público ampliado pela conurbação com Rio Negro (PR) e complementado pelos espaços públicos da orla do rio.',

  destaquesFitness: [
    'Cidade de IDHM alto, com renda estável de polo regional do Planalto Norte.',
    'Conurbação Rio-Mafra (SC/PR) amplia o público e a oferta de eventos.',
    'Espaços às margens do rio Negro e revitalização do Parque do Passo.',
    'Verão ameno favorece o treino ao ar livre; o inverno frio exige adaptação.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 130,
    onlineMax: 330,
  },

  conclusao:
    'Polo do Planalto Norte catarinense moldado pela história do Contestado, pela madeira e pelo agronegócio, Mafra une renda estável e a vantagem de formar com Rio Negro (PR) a conurbação Rio-Mafra. Um personal trainer ajuda a aproveitar os espaços às margens do rio Negro e a adaptar o treino ao inverno rigoroso da região.',

  vizinhas: ['sao-bento-do-sul-sc', 'cacador-sc', 'curitiba-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Mafra', url: 'https://cidades.ibge.gov.br/brasil/sc/mafra/panorama' },
    { nome: 'Prefeitura de Mafra', url: 'https://mafra.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
