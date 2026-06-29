import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'blumenau-sc',
  nome: 'Blumenau',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'blumenauense',
  tipo: 'cidade',

  populacao: 361261,
  populacaoAno: 2022,
  idhm: 0.806,
  idhmClasse: 'muito alto',
  altitudeM: 21,

  resumoEconomico:
    'No coração do Vale do Itajaí, Blumenau é a terceira maior cidade de Santa Catarina e uma de suas maiores economias, tradicional polo têxtil e, hoje, também forte em tecnologia e software. De herança germânica marcante, é a casa da Oktoberfest, no Parque Vila Germânica — uma cidade de alto IDHM e qualidade de vida elevada.',

  mercado:
    'A cultura de academias é consolidada, com redes nacionais (Smart Fit, Bodytech na Avenida Brasil) e academias locais tradicionais, mercado aquecido por planos corporativos das indústrias e empresas de tecnologia. A musculação convive com forte cultura de corrida e ciclismo.',

  bairrosNobres: ['Jardim Blumenau', 'Ponta Aguda', 'Vila Formosa', 'Velha'],
  bairrosPopulares: ['Glória', 'Ribeirão Fresco', 'Progresso', 'Vila Itoupava'],

  parques: [
    {
      nome: 'Parque Ramiro Ruediger',
      descricao:
        'No centro, com cerca de 40 mil m², tem pista de aproximadamente 700 m, academia ao ar livre, quadras, pista de skate, lago e ciclovia — o principal espaço de treino urbano da cidade.',
    },
    {
      nome: 'Parque Natural Municipal São Francisco de Assis',
      descricao:
        'Cerca de 23 hectares de Mata Atlântica, com trilhas (como a do Caminho das Águas, de cerca de 1.432 m) para caminhada e contato com a natureza.',
    },
    {
      nome: 'Parque Vila Germânica',
      descricao:
        'Grande complexo de eventos no bairro Velha, cujos calçadões são usados para caminhada e atividades ao ar livre.',
    },
  ],
  ciclovias:
    'Blumenau tem uma das melhores infraestruturas de ciclismo de Santa Catarina, com cerca de 147 km de ciclovias, em expansão.',

  clima:
    'O clima é subtropical úmido, com chuvas bem distribuídas e invernos amenos. Vale lembrar o histórico de enchentes do Rio Itajaí-Açu em períodos muito chuvosos.',
  climaTreino:
    'O treino ao ar livre é confortável boa parte do ano; em períodos de chuva intensa, é importante acompanhar os alertas da Defesa Civil, já que parques e áreas baixas podem ser afetados. Um plano B em academia ajuda na constância.',

  mobilidade:
    'O transporte coletivo conta com corredores de ônibus, e o principal eixo é a BR-470 (em duplicação), que liga Blumenau ao litoral (Itajaí e Navegantes) e ao interior do estado.',

  corridas: [
    {
      nome: 'Maratona Internacional de Blumenau',
      descricao:
        'Uma das mais antigas do estado, com provas de maratona e meia maratona — tradição no calendário catarinense.',
    },
    {
      nome: 'Corrida do Bem (etapa Blumenau)',
      descricao:
        'Provas de 5 km e 10 km, além de "maratoninha", reunindo mais de mil atletas e reforçando a cena de corrida da cidade.',
    },
  ],
  culturaEsportiva:
    'Blumenau tem forte cultura de corrida de rua e ciclismo, favorecida pela malha cicloviária, além da tradição dos clubes germânicos (tiro, bolão e ginástica). A vida ativa é parte da identidade local.',
  academias:
    'A oferta reúne redes nacionais (Smart Fit, Bodytech) e academias locais consolidadas, complementadas pelos parques com pista, academia ao ar livre e trilhas.',

  destaquesFitness: [
    'Boa rede de academias (Smart Fit, Bodytech) e nomes locais consolidados.',
    'Cerca de 147 km de ciclovias, das melhores infraestruturas de SC.',
    'Parques com pista, academia ao ar livre e trilhas (Ramiro Ruediger, São Francisco de Assis).',
    'Calendário de corridas forte (Maratona Internacional, Corrida do Bem).',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 180,
    mensalMin: 400,
    mensalMax: 1050,
    onlineMin: 180,
    onlineMax: 460,
  },

  conclusao:
    'Cidade de alto IDHM e forte cultura de corrida e ciclismo, Blumenau oferece boa estrutura para treinar — dos parques às academias bem equipadas. Um personal trainer ajuda a aproveitar tudo isso com método, levando em conta o clima úmido e a rotina de quem mora no Vale do Itajaí.',

  vizinhas: ['joinville-sc', 'florianopolis-sc', 'balneario-camboriu-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Blumenau', url: 'https://cidades.ibge.gov.br/brasil/sc/blumenau/panorama' },
    { nome: 'Prefeitura de Blumenau', url: 'https://www.blumenau.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
