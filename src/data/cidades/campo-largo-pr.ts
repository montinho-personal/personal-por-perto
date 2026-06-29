import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'campo-largo-pr', nome: 'Campo Largo', uf: 'PR', estado: 'Paraná', estadoSlug: 'parana', regiao: 'Sul', gentilico: 'campo-larguense', tipo: 'cidade',
  populacao: 136327, populacaoAno: 2022, idhm: 0.745, idhmClasse: 'alto', altitudeM: 956,
  resumoEconomico:
    'Município da Região Metropolitana de Curitiba, Campo Largo é conhecido como a "Capital da Louça" (ou Capital da Porcelana) pela tradição na fabricação de louças, porcelanas e cerâmicas, com indústrias históricas como Incepa, Porcelana Schmidt e Germer. A economia combina esse polo cerâmico, a abundância de matéria-prima mineral e a logística da BR-277, principal eixo de acesso à cidade.',
  mercado:
    'Cidade média da Grande Curitiba, com base industrial diversificada e população acima de 130 mil habitantes, Campo Largo reúne rede de academias no Centro e nos bairros e demanda crescente por atendimento domiciliar, perfil típico de município metropolitano que combina trabalho presencial em academia com personal trainer indo até a casa do aluno.',
  bairrosNobres: ['Centro', 'Vila Bancária', 'Jardim Brasília', 'Vila Solene'],
  bairrosPopulares: ['Itaqui', 'Botiatuva', 'Jardim Graciosa', 'Bateias'],
  parques: [
    {
      nome: 'Parque Municipal Cambuí (Newton Puppi)',
      descricao:
        'Principal área verde da cidade, com pista de caminhada e corrida, trilhas, lago, academia ao ar livre e quadras — o espaço mais usado para treino outdoor em Campo Largo.',
    },
    {
      nome: 'Parque do Mineral — Estância Hidromineral Ouro Fino',
      descricao:
        'Em Bateias, reúne trilhas ecológicas, mata nativa, fontes de água mineral e cachoeiras, opção para caminhadas e atividades ao ar livre nos arredores.',
    },
    {
      nome: 'Praças com academia ao ar livre',
      descricao:
        'Praças e áreas de lazer municipais equipadas com aparelhos de ginástica, ampliando o acesso ao treino gratuito nos bairros.',
    },
  ],
  ciclovias:
    'A cidade tem trechos cicláveis e ciclofaixas em vias urbanas; a extensão total da rede ainda não é divulgada em fonte oficial consolidada.',
  clima:
    'O clima é subtropical úmido de altitude (Cfb de Köppen), com invernos frios e geadas, típico do planalto curitibano, e verões amenos.',
  climaTreino:
    'O frio do planalto favorece o treino indoor boa parte do ano; nas estações mais amenas, o Parque Cambuí concentra as atividades de corrida e caminhada ao ar livre.',
  mobilidade:
    'Campo Largo é cortada pela BR-277, principal ligação rodoviária com Curitiba e o litoral, e tem cinco distritos (sede, Bateias, Três Córregos, São Silvestre e Ferraria), o que distribui a demanda entre a área urbana e localidades mais afastadas.',
  corridas: [
    {
      nome: 'Trail run de Bateias (Salto Boa Vista)',
      descricao:
        'Prova de trail running pelos arredores rurais de Bateias, com percurso que passa pela cachoeira Salto Boa Vista, atraindo corredores de toda a região.',
    },
    {
      nome: 'Corridas de rua do calendário municipal',
      descricao:
        'Provas urbanas ligadas a datas da cidade e a eventos da região metropolitana, com largadas no entorno do Centro e do Parque Cambuí.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura corridas de rua urbanas com o trail running aproveitando o relevo e as cachoeiras dos distritos rurais, além do uso intenso do Parque Cambuí para caminhada e treino funcional.',
  academias:
    'A oferta reúne academias e estúdios no Centro e nos bairros, complementada pelo Parque Cambuí, pelas praças com academia ao ar livre e pela proximidade de Curitiba, que amplia o mercado de serviços fitness.',
  destaquesFitness: [
    '"Capital da Louça/Porcelana" — polo industrial cerâmico na Grande Curitiba.',
    'Parque Municipal Cambuí como principal espaço de corrida, caminhada e treino ao ar livre.',
    'Trail running nos distritos rurais, com cachoeiras como a do Salto Boa Vista em Bateias.',
    'Acesso direto pela BR-277 e proximidade de Curitiba, que ampliam o mercado.',
  ],
  precos: { avulsaMin: 55, avulsaMax: 125, mensalMin: 270, mensalMax: 720, onlineMin: 120, onlineMax: 360 },
  conclusao:
    'Cidade média e industrial da Grande Curitiba, a "Capital da Louça" tem no Parque Cambuí e nas trilhas dos distritos seus principais cenários de treino. Um personal trainer ajuda a aproveitá-los com método, equilibrando outdoor e indoor conforme o frio do planalto e atendendo tanto em academia quanto em domicílio.',
  vizinhas: ['curitiba-pr', 'araucaria-pr', 'ponta-grossa-pr'],
  fontes: [
    { nome: 'IBGE Cidades — Campo Largo', url: 'https://cidades.ibge.gov.br/brasil/pr/campo-largo/panorama' },
    { nome: 'Prefeitura de Campo Largo', url: 'https://campolargo.atende.net/cidadao' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ], atualizadoEm: '2026-06-29',
};
