import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'matinhos-pr',
  nome: 'Matinhos',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'matinhense',
  tipo: 'cidade',

  populacao: 39259,
  populacaoAno: 2022,
  idhm: 0.743,
  idhmClasse: 'alto',
  altitudeM: 3,

  resumoEconomico:
    'Matinhos é um dos principais balneários do litoral do Paraná, com mais de 17 km de praias que vão do centro da cidade ao balneário de Caiobá, na divisa com Pontal do Paraná. A economia é fortemente sazonal e gira em torno do turismo de veraneio, que movimenta o comércio, a construção civil e a rede de pousadas nos meses de verão, quando a população chega a multiplicar-se muitas vezes em relação ao número de moradores fixos. Fora do turismo, a cidade sedia o Setor Litoral da UFPR, em Caiobá, e mantém a pesca artesanal como atividade tradicional, celebrada em eventos como o Festival do Camarão.',

  mercado:
    'O mercado de personal trainers em Matinhos acompanha o ritmo sazonal da cidade: a demanda cresce na alta temporada, quando turistas e proprietários de imóveis de veraneio buscam treino na praia ou em academias locais, e se mantém mais estável fora de temporada com moradores fixos e a comunidade acadêmica ligada à UFPR Litoral. A oferta é formada principalmente por profissionais autônomos e academias de pequeno e médio porte, com forte presença de treinos ao ar livre aproveitando a orla.',

  bairrosNobres: ['Caiobá', 'Flamingo', 'Riviera', 'Centro'],
  bairrosPopulares: ['Tabuleiro', 'Coroados', 'Currais', 'Betaras'],

  parques: [
    {
      nome: 'Orla de Matinhos',
      descricao:
        'Faixa litorânea que passou por revitalização com engordamento de areia, calçadão, pista de caminhada e ciclovia entre o Morro do Boi e o balneário Flórida — o principal espaço público da cidade para caminhada, corrida e treino funcional ao ar livre.',
    },
    {
      nome: 'Praia Brava de Caiobá',
      descricao:
        'Uma das praias mais movimentadas do litoral paranaense, com ondulação regular que a tornou berço do surfe no estado; recebe corridas na areia e projetos de esportes aquáticos voltados a crianças e jovens.',
    },
    {
      nome: 'Morro do Boi',
      descricao:
        'Elevação rochosa que separa Matinhos de Caiobá, com trilha de acesso e mirante; ponto de referência para caminhadas mais intensas e vista panorâmica da orla.',
    },
  ],
  ciclovias:
    'A orla conta com ciclovia e pista de caminhada implantadas na revitalização da Avenida Beira-Mar, cobrindo trecho de mais de 6 km entre o Morro do Boi e o balneário Flórida, além da Ciclorrota da Orla, roteiro cicloturístico de cerca de 23 km que liga Matinhos a balneários vizinhos.',

  clima:
    'O clima é subtropical úmido (Cfa), sem estação seca definida, com verões quentes (janeiro é o mês mais chuvoso) e invernos amenos, raramente muito frios. A temperatura média anual gira em torno de 21 °C e a umidade é elevada durante o ano todo, característica da faixa litorânea paranaense.',
  climaTreino:
    'A combinação de calor, umidade alta e sol forte na praia recomenda treinar nas primeiras horas da manhã ou no fim da tarde, com atenção à hidratação e à proteção solar; os meses de inverno, mais amenos e com menor umidade, costumam ser mais confortáveis para treinos ao ar livre durante o dia.',

  mobilidade:
    'Matinhos fica a cerca de 110 km de Curitiba, acessada pela BR-277 até a região de Alexandra e, de lá, pela PR-407/PR-412 ou pela rodovia Alexandra-Matinhos (PR-508) até o litoral. O transporte interno é feito por ônibus municipais e o fluxo de veículos aumenta muito no verão, quando a cidade recebe grande volume de turistas vindos da capital e da região metropolitana.',

  corridas: [
    {
      nome: 'Corridas Sanepar — Etapa Matinhos',
      descricao:
        'Etapa do circuito estadual de corridas de rua da Sanepar realizada em Matinhos, reunindo atletas de diferentes idades e níveis pela orla da cidade.',
    },
    {
      nome: 'Circuito Ocean — Etapa Matinhos',
      descricao:
        'Prova de corrida de rua com percursos de diferentes distâncias disputada na orla de Matinhos, parte de um circuito que passa por balneários do litoral paranaense.',
    },
    {
      nome: 'Corrida da Virada de Matinhos',
      descricao:
        'Prova de rua realizada em 31 de dezembro, com trajeto pela Avenida Beira-Mar e balneários próximos ao Mercado do Peixe, no balneário Flamingo.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Matinhos é marcada pelo surfe — a cidade é considerada um dos berços da modalidade no Paraná, com o pico da Praia Brava de Caiobá formando atletas de projeção nacional — além de outros esportes de praia e aquáticos, como stand up paddle e treino funcional na areia. A orla revitalizada também consolidou a caminhada, a corrida e o ciclismo como práticas cotidianas de moradores e turistas.',
  academias:
    'A oferta de academias e estúdios é formada majoritariamente por negócios locais de pequeno e médio porte, concentrados no Centro e nos balneários mais movimentados, com capacidade que se ajusta à forte variação sazonal do público entre alta e baixa temporada.',

  destaquesFitness: [
    'Mais de 17 km de praias, incluindo a orla revitalizada com ciclovia e pista de caminhada entre o Morro do Boi e o balneário Flórida.',
    'Um dos berços do surfe no Paraná, com o pico da Praia Brava de Caiobá formando atletas de projeção nacional.',
    'Forte sazonalidade: demanda por treino dispara na alta temporada de veraneio e se estabiliza com moradores fixos fora dela.',
    'Presença do Setor Litoral da UFPR, em Caiobá, que agrega comunidade acadêmica ao público local de treino.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 140,
    mensalMin: 280,
    mensalMax: 800,
    onlineMin: 120,
    onlineMax: 380,
  },

  conclusao:
    'Cidade praiana de forte vocação turística, Matinhos oferece uma orla estruturada para treinar ao ar livre o ano todo, mas com uma rotina que muda bastante entre a alta e a baixa temporada. Um personal trainer ajuda a aproveitar a praia, a ciclovia e o clima do litoral para manter a constância, seja para quem mora na cidade, seja para quem passa temporadas por lá.',

  vizinhas: ['guaratuba-pr', 'paranagua-pr', 'curitiba-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Matinhos', url: 'https://cidades.ibge.gov.br/brasil/pr/matinhos/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Matinhos', url: 'https://matinhos.atende.net/' },
  ],
  atualizadoEm: '2026-07-02',
};
