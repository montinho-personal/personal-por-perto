import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itanhaem-sp',
  nome: 'Itanhaém',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'itanhaense',
  tipo: 'cidade',

  populacao: 112476,
  populacaoAno: 2022,
  idhm: 0.745,
  idhmClasse: 'alto',
  altitudeM: 5,

  resumoEconomico:
    'No litoral sul paulista, integrada à Baixada Santista, Itanhaém é uma das cidades mais antigas do Brasil (fundada em 1532) e reúne cerca de 26 km de praias com a Serra do Mar preservada ao fundo. A economia gira em torno do turismo de veraneio, do comércio e dos serviços, com forte sazonalidade nos meses de verão. A orla extensa e tranquila é o eixo da vida ativa local.',

  mercado:
    'A população permanente vem crescendo de forma acelerada — incluindo aposentados e famílias que trocam a capital pelo litoral — e isso amplia a demanda por treino ao longo do ano, e não só na alta temporada. A oferta combina academias de rua, estúdios e a própria orla, com seus calçadões e equipamentos, formando um cenário favorável ao trabalho de personal trainers.',

  bairrosNobres: ['Centro', 'Cibratel', 'Parque Balneário', 'Jardim Suarão'],
  bairrosPopulares: ['Campos Elíseos', 'Belas Artes', 'Gaivota', 'Jamaica'],

  parques: [
    {
      nome: 'Orla do Praião (Praia de Itanhaém)',
      descricao:
        'Faixa de cerca de 11,5 km que vai da foz do Rio Itanhaém ao limite com Mongaguá, com calçadão e ciclovia que permitem caminhada, corrida, skate e patins de frente para o mar — a maior extensão contínua de orla da cidade.',
    },
    {
      nome: 'Praia dos Pescadores',
      descricao:
        'Praia tradicional junto ao centro histórico, ponto de partida dos pescadores artesanais e área de escolas de surfe, com clima de vila caiçara e fácil acesso a pé.',
    },
    {
      nome: 'Praia de Cibratel e Convento de N. Sra. da Conceição',
      descricao:
        'Cibratel tem orla pavimentada com ciclovia e estrutura esportiva; nas proximidades, o Convento de Nossa Senhora da Conceição (1639), no Morro do Itaguaçu, é cartão-postal e referência para subidas e treinos com vista para o mar.',
    },
  ],
  ciclovias:
    'A orla concentra a maior parte da malha cicloviária: o calçadão do Praião acompanha a praia com ciclovia ao longo de boa parte dos seus 11,5 km, e a Praia de Cibratel também tem trecho pavimentado com ciclovia, favorecendo pedal e treino de longa distância à beira-mar.',

  clima:
    'O clima é litorâneo úmido, quente e chuvoso no verão e ameno no inverno, com a umidade do mar e a Serra do Mar ao fundo marcando o tempo o ano todo.',
  climaTreino:
    'A orla extensa permite treinar ao ar livre em qualquer estação; no verão, atenção ao calor, à umidade e às chuvas de fim de tarde, priorizando manhã e começo da noite e cuidando da hidratação.',

  mobilidade:
    'O acesso rodoviário se dá principalmente pela Rodovia Padre Manoel da Nóbrega (SP-055), que liga Itanhaém às demais cidades da Baixada Santista e à Praia Grande e São Vicente; dentro da cidade, a orla plana e arejada torna a bike e a caminhada opções reais de deslocamento.',

  corridas: [
    {
      nome: 'Meia Maratona Sand Run',
      descricao:
        'Prova com percursos de 21 km, 10 km e 5 km que aproveita as paisagens da orla itanhaense, integrada ao Festival da Corte, um dos maiores eventos de rua do litoral paulista.',
    },
    {
      nome: 'Corridas e caminhadas na orla',
      descricao:
        'O calçadão do Praião e a faixa de areia firme atraem corredores e caminhantes o ano todo e servem de palco para provas e eventos esportivos do calendário local.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva de Itanhaém gira em torno do mar e da orla: surfe nas praias dos Pescadores e do Cibratel, pedal e corrida no calçadão do Praião e caminhadas à beira-mar fazem parte da rotina de moradores e veranistas.',
  academias:
    'A oferta reúne academias de bairro, estúdios e espaços de treino funcional, complementados pelos calçadões e equipamentos da orla, que funcionam como uma grande extensão de treino ao ar livre.',

  destaquesFitness: [
    'Cerca de 26 km de praias no litoral sul paulista, com a Serra do Mar preservada ao fundo.',
    'Calçadão e ciclovia do Praião ao longo de boa parte de seus 11,5 km de orla.',
    'Praia dos Pescadores e Cibratel como polos de surfe e vida ativa à beira-mar.',
    'Calendário de corridas na orla, com a Meia Maratona Sand Run integrada ao Festival da Corte.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 760,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Com cerca de 26 km de praias tranquilas, orla plana e clima litorâneo, Itanhaém é um cenário convidativo para treinar ao ar livre durante todo o ano. Um personal trainer ajuda a transformar o calçadão do Praião e as praias da cidade em um plano consistente, do iniciante a quem busca encarar a meia maratona.',

  vizinhas: ['praia-grande-sp', 'sao-vicente-sp', 'santos-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Itanhaém', url: 'https://cidades.ibge.gov.br/brasil/sp/itanhaem/panorama' },
    { nome: 'Prefeitura de Itanhaém', url: 'https://www.itanhaem.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
