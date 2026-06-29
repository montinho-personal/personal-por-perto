import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cornelio-procopio-pr',
  nome: 'Cornélio Procópio',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'procopense',
  tipo: 'cidade',

  populacao: 45206,
  populacaoAno: 2022,
  idhm: 0.759,
  idhmClasse: 'alto',
  altitudeM: 658,

  resumoEconomico:
    'Conhecida como capital do Norte Pioneiro do Paraná, Cornélio Procópio nasceu da cultura do café e hoje sustenta sua economia na agroindústria — com forte presença do processamento de grãos e da cana-de-açúcar — somada a comércio, serviços e um expressivo polo educacional. A cidade concentra indústrias do setor sucroalcooleiro, metalmecânico e de alimentos, funcionando como referência regional para um conjunto de municípios vizinhos.',

  mercado:
    'Polo universitário do Norte Pioneiro com campi da UENP e da UTFPR, Cornélio Procópio tem público jovem e ativo que movimenta academias e estúdios. A oferta reúne redes e academias locais de musculação, estúdios de treino funcional e crossfit, com a Lagoa Seca como principal ponto de treino ao ar livre e a tradicional Prova Pedestre XV de Fevereiro mantendo viva a cultura de corrida na cidade.',

  bairrosNobres: ['Centro', 'Jardim Panorama', 'Vila Nova', 'Jardim Petrópolis'],
  bairrosPopulares: ['Vila Cardoso', 'Jardim Itália', 'Conjunto Governador Bento Munhoz', 'Vila Botânica'],

  parques: [
    {
      nome: 'Lagoa Seca',
      descricao:
        'Cartão-postal de Cornélio Procópio, a área da Lagoa Seca foi revitalizada e oferece ampla pista para caminhada e corrida, área de lazer e ambiente arborizado. É o principal espaço de treino ao ar livre da cidade.',
    },
    {
      nome: 'Praça Botafogo',
      descricao:
        'Praça central que serve de largada e chegada da tradicional Prova Pedestre XV de Fevereiro. Ponto de encontro de quem treina corrida no centro, com entorno plano e bom para tiros de ritmo.',
    },
    {
      nome: 'Bosque Municipal',
      descricao:
        'Área verde da cidade com caminhos sombreados, indicada para caminhadas leves e treino de baixo impacto longe do trânsito.',
    },
  ],
  ciclovias:
    'A cidade possui trechos de ciclovias e ciclofaixas em avenidas, com o entorno da Lagoa Seca concentrando o uso de bicicleta para lazer e mobilidade ativa em um traçado relativamente plano.',

  clima:
    'O clima do Norte Pioneiro é subtropical, com estações bem definidas: verões quentes e chuvosos, que podem passar de 30 °C, e invernos amenos e mais secos, com geadas ocasionais.',
  climaTreino:
    'O treino ao ar livre é confortável na maior parte do ano. No verão, o ideal é evitar o início da tarde por causa do calor e das chuvas e, no inverno, aproveitar as manhãs ensolaradas.',

  mobilidade:
    'Cornélio Procópio é cortada pela BR-369, eixo rodoviário que liga a cidade a Londrina, ao oeste paranaense e ao interior de São Paulo, reforçando seu papel de polo regional. O deslocamento interno é facilitado pelo porte médio da cidade e por avenidas de bom fluxo, com transporte rodoviário intermunicipal ativo.',

  corridas: [
    {
      nome: 'Prova Pedestre XV de Fevereiro',
      descricao:
        'Corrida mais tradicional da cidade, realizada anualmente em fevereiro com largada na Praça Botafogo, em homenagem à emancipação do município. Tem percursos de 5 km e 10 km e a Quinzinha, prova voltada ao público jovem.',
    },
    {
      nome: 'Circuito Sesc de Corridas — Etapa Cornélio Procópio',
      descricao:
        'Etapa procopense do circuito do Sesc-PR, com provas de 5 km e 10 km que reúnem corredores da cidade e de toda a região do Norte Pioneiro.',
    },
  ],
  culturaEsportiva:
    'A corrida de rua tem tradição firme em Cornélio Procópio, ancorada na Prova Pedestre XV de Fevereiro e na etapa local do Circuito Sesc. O público universitário da UENP e da UTFPR reforça uma cultura ativa de musculação, treino funcional e atividades ao ar livre na Lagoa Seca.',
  academias:
    'A oferta inclui academias locais de musculação, estúdios de treino funcional e crossfit, atendendo tanto o público universitário quanto famílias da cidade e de municípios vizinhos que buscam estrutura no polo regional.',

  destaquesFitness: [
    'Lagoa Seca revitalizada como principal espaço de caminhada e corrida ao ar livre.',
    'Prova Pedestre XV de Fevereiro, uma das corridas mais tradicionais do Norte Pioneiro.',
    'Polo universitário (UENP e UTFPR) com público jovem e ativo.',
    'Cidade de porte médio e plana, favorável a treinos de rua e ciclismo.',
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
    'Capital do Norte Pioneiro, jovem e movida pela agroindústria e pelas universidades, Cornélio Procópio tem na Lagoa Seca e na Prova XV de Fevereiro o seu coração esportivo. Um personal trainer ajuda a transformar essa estrutura em um plano de treino consistente, ajustado ao seu objetivo e à sua rotina.',

  vizinhas: ['londrina-pr', 'rolandia-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Cornélio Procópio', url: 'https://cidades.ibge.gov.br/brasil/pr/cornelio-procopio/panorama' },
    { nome: 'Prefeitura de Cornélio Procópio', url: 'https://prefeitura.cp.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
