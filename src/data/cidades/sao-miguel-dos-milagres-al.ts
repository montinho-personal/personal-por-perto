import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-miguel-dos-milagres-al',
  nome: 'São Miguel dos Milagres',
  uf: 'AL',
  estado: 'Alagoas',
  estadoSlug: 'alagoas',
  regiao: 'Nordeste',
  gentilico: 'sammiguelense',
  tipo: 'cidade',

  populacao: 8482,
  populacaoAno: 2022,
  idhm: 0.591,
  idhmClasse: 'baixo',

  resumoEconomico:
    'São Miguel dos Milagres é o núcleo mais conhecido da Rota Ecológica dos Milagres, faixa de cerca de 27 km do litoral norte alagoano que reúne também Porto de Pedras e Passo de Camaragibe. A cidade se tornou destino de turismo de luxo acessível, com pousadas boutique de poucos quartos ou bangalôs — muitas na Praia do Toque e na Praia do Marceneiro — que combinam design sofisticado, rusticidade regional e acesso direto à praia. O atrativo central são as piscinas naturais formadas sobre recifes de coral, visitadas de jangada e mais visíveis nas marés baixas de lua cheia ou nova, cercadas por quilômetros de coqueirais e praias ainda pouco urbanizadas. Fora do eixo turístico, a pesca artesanal segue como atividade tradicional dos povoados locais.',

  mercado:
    'O mercado fitness de São Miguel dos Milagres é muito pequeno e informal, compatível com um município de cerca de 8 mil habitantes cuja economia gira em torno do turismo sazonal e da pesca. A oferta de personal trainer tende a ser pontual, voltada tanto a moradores quanto a hóspedes de pousadas boutique e proprietários de casas de temporada que buscam treino funcional ou orientado ao uso da praia durante a estada.',

  bairrosNobres: ['Praia do Toque', 'Praia do Marceneiro', 'Centro'],
  bairrosPopulares: ['Porto da Rua', 'Riacho', 'Lucrécia'],

  parques: [
    {
      nome: 'Orla da Praia do Toque',
      descricao:
        'Trecho de praia com acesso a pé, concentração de pousadas boutique e piscinas naturais próximas à costa, usado por moradores e turistas para caminhada à beira-mar.',
    },
    {
      nome: 'Praia de Porto da Rua',
      descricao:
        'Povoado e praia mais frequentados pelos moradores da região, com quiosques na areia; serve de ponto de largada de provas de corrida de rua realizadas na cidade.',
    },
    {
      nome: 'Praias do Riacho e Marceneiro',
      descricao:
        'Faixas de areia mais desertas, cercadas de coqueirais, que oferecem espaço para caminhada e corrida ao ar livre fora dos horários de maior movimento turístico.',
    },
  ],
  ciclovias:
    'A cidade não tem infraestrutura cicloviária estruturada; o deslocamento a pé e de bicicleta acontece pelas ruas do pequeno centro e pela orla, compartilhando espaço com o tráfego local.',

  clima:
    'O clima é tropical, quente e úmido, com temperaturas amenizadas pela brisa marítima. As chuvas se concentram no outono e inverno, enquanto os meses de setembro a março são mais secos, com mar mais calmo e piscinas naturais mais cristalinas — período de maior movimento turístico.',
  climaTreino:
    'O calor e a forte exposição solar na orla pedem treino nas primeiras horas da manhã ou no fim da tarde, com hidratação reforçada; a maré e o horário das piscinas naturais também influenciam quando a praia fica mais livre para caminhada ou corrida.',

  mobilidade:
    'O acesso principal é pela rodovia AL-101 Norte, que liga São Miguel dos Milagres a Maceió (cerca de 95 a 100 km, em torno de 2 horas de carro) passando por localidades litorâneas como Paripueira e Barra de Santo Antônio, e segue rumo a Maragogi e à divisa com Pernambuco. Não há transporte público estruturado; o deslocamento entre os povoados e as praias da Rota Ecológica costuma ser feito por carro, van ou mototáxi.',

  corridas: [
    {
      nome: 'Milagres Run',
      descricao:
        'Corrida de rua com percursos de 5 km, 10 km e 21 km, com concentração à beira-mar no povoado de Porto da Rua; teve sua primeira edição em 2024.',
    },
    {
      nome: 'Corrida da Emancipação de São Miguel dos Milagres',
      descricao:
        'Prova local ligada à data de emancipação política do município, já realizada em diversas edições e com resultados registrados por cronometragem esportiva.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva da cidade gira em torno do mar: stand up paddle, caiaque e mergulho livre nas piscinas naturais formadas pelos recifes de coral são atividades comuns entre moradores e turistas, ao lado de passeios de jangada e da pesca artesanal. A orla das praias também recebe corridas de rua e caminhadas, especialmente nos povoados de Porto da Rua e Toque.',
  academias:
    'A oferta de academias é muito restrita, limitada a um pequeno número de espaços de musculação e treino funcional no centro da cidade, refletindo o porte reduzido do município.',

  destaquesFitness: [
    'Piscinas naturais formadas sobre recifes de coral, ponto central do turismo e de atividades como stand up paddle e mergulho livre.',
    'Pousadas boutique de turismo de luxo acessível concentradas nas praias do Toque e do Marceneiro.',
    'Parte da Rota Ecológica dos Milagres, faixa litorânea de cerca de 27 km compartilhada com Porto de Pedras e Passo de Camaragibe.',
    'Clima tropical quente e úmido, com melhor período para atividade ao ar livre entre setembro e março.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Pequena e voltada ao turismo de luxo acessível, São Miguel dos Milagres tem no mar — piscinas naturais, praias de coqueiral e esportes como stand up paddle — o centro da vida ao ar livre. Como a oferta local de academias e profissionais é limitada, contar com um personal trainer ajuda tanto moradores quanto quem passa temporadas na cidade a manter constância no treino, aproveitando a orla e adaptando os horários ao calor e às marés.',

  vizinhas: ['maragogi-al', 'maceio-al'],

  fontes: [
    { nome: 'IBGE Cidades — São Miguel dos Milagres', url: 'https://cidades.ibge.gov.br/brasil/al/sao-miguel-dos-milagres/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Portal São Miguel dos Milagres — Rota Ecológica dos Milagres', url: 'https://portalsaomigueldosmilagres.com.br/rota-ecologica-dos-milagres-tudo-o-que-voce-precisa-saber/' },
  ],
  atualizadoEm: '2026-07-02',
};
