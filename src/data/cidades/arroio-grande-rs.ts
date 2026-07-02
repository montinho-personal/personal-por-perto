import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'arroio-grande-rs',
  nome: 'Arroio Grande',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'arroio-grandense',
  tipo: 'cidade',

  populacao: 17558,
  populacaoAno: 2022,
  idhm: 0.660,
  idhmClasse: 'médio',
  altitudeM: 22,

  resumoEconomico:
    'No extremo sul gaúcho, às margens da Lagoa Mirim e a poucos quilômetros da fronteira com o Uruguai (via Jaguarão), Arroio Grande nasceu de uma capela erguida em 1815 e foi elevada à condição de vila em 1873. A economia é essencialmente agropecuária: o município figura entre os grandes produtores de arroz irrigado do Rio Grande do Sul, beneficiado pela fartura de água das lagoas Mirim e Mangueira, ao lado da pecuária de corte e da ovinocultura típicas da Campanha gaúcha. O comércio local, os serviços públicos e a proximidade com Pelotas e Jaguarão completam a base econômica de um município extenso (mais de 2.500 km²) e de baixa densidade demográfica.',

  mercado:
    'O mercado de treino personalizado em Arroio Grande é pequeno e informal, típico de uma cidade do interior com pouco mais de 17 mil habitantes. A oferta se concentra em academias locais como a Academia Camerini e a Academia Ferromania, além de estúdios que combinam personal training e fisioterapia, caso do Studio Personal Trainer e Fisioterapia — um modelo comum em municípios pequenos, onde o profissional atende tanto o treino quanto a reabilitação.',

  bairrosNobres: ['Centro', 'Zona Norte (Hospital Santa Casa)'],
  bairrosPopulares: ['Promorar (Zona Sul)', 'São José (Zona Leste)'],

  parques: [
    {
      nome: 'Praia do Pontal (Lagoa Mirim)',
      descricao:
        'Balneário de água doce às margens da Lagoa Mirim, funcionamento sazonal e concentrado no verão, quando recebe banhistas de Arroio Grande e da região — também palco de corridas rústicas locais.',
    },
    {
      nome: 'Farol da Lagoa Mirim (ruínas)',
      descricao:
        'Antigo farol que sinalizava embarcações na lagoa, desativado desde 1964 e hoje em ruínas; marco histórico na orla que compõe o cenário de caminhadas junto à água.',
    },
    {
      nome: 'Praça Central e entorno da Igreja Matriz',
      descricao:
        'Praça em frente à Igreja Matriz Nossa Senhora da Graça, construção de arquitetura neoclássica do século XIX que é o marco do centro histórico — ponto de encontro e caminhada no núcleo urbano.',
    },
  ],
  ciclovias:
    'Não há uma malha cicloviária estruturada; o pedal e a corrida acontecem nas ruas do centro, plano, e nas estradas rurais que cortam lavouras de arroz e campos de pecuária no extenso território do município.',

  clima:
    'O clima é subtropical, com temperatura média anual em torno de 17,5 °C. Os verões são quentes, os invernos frios e ventosos, com ocorrência de geadas — reflexo da Campanha gaúcha e da proximidade com o Pampa, região marcada por vento praticamente constante entre setembro e junho.',
  climaTreino:
    'A primavera e o outono oferecem as melhores condições para treinar ao ar livre; no inverno, o frio, a umidade e o vento pedem agasalho e cuidado com as articulações, enquanto no verão o calor e a exposição ao sol nos campos recomendam treinar cedo ou usar a Praia do Pontal para se refrescar.',

  mobilidade:
    'A cidade é cortada pela BR-471, que liga Pelotas (a cerca de 67 km) a Jaguarão (a cerca de 47 km) e à fronteira com o Uruguai pela ponte internacional Barão de Mauá — um dos corredores rodoviários do extremo sul gaúcho. O transporte urbano é limitado, com deslocamentos intermunicipais feitos por ônibus regulares na rota Pelotas–Arroio Grande–Jaguarão, enquanto a extensa zona rural depende de estradas vicinais.',

  corridas: [
    {
      nome: 'Rústica Arroio Grande',
      descricao:
        'Corrida de rua tradicional realizada em torno do aniversário de emancipação da cidade (24 de março), com percurso de 5 km pelas ruas do centro; edições recentes, como a de 151 anos, tiveram inscrições esgotadas.',
    },
    {
      nome: 'Rústica de Verão – Praia do Pontal',
      descricao:
        'Etapa de verão disputada às margens da Lagoa Mirim, na Praia do Pontal, reunindo corredores de Arroio Grande e da região em uma das provas ligadas ao calendário local de eventos.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura a corrida de rua — impulsionada pela Rústica Arroio Grande — com as tradições campeiras da Campanha gaúcha, como encontros de ginetes e atividades ligadas ao CTG, além do uso da Lagoa Mirim para caminhada e esportes de vento (vela, kitesurf) aproveitando o vento constante da região.',
  academias:
    'A oferta reúne academias de porte pequeno, como Academia Camerini e Academia Ferromania, com aulas de musculação e atividades como jump e step, complementadas por estúdios que aliam personal training e fisioterapia — modelo característico de cidades do interior gaúcho.',

  destaquesFitness: [
    'Lagoa Mirim e a Praia do Pontal como espaço de caminhada e esportes de vento, aproveitando os ventos constantes da Campanha gaúcha.',
    'Rústica Arroio Grande, corrida de rua tradicional ligada ao aniversário da cidade, com edições de inscrições esgotadas.',
    'Economia de arroz irrigado e pecuária de corte, moldando um cotidiano rural com forte presença das tradições campeiras (gineteada, CTG).',
    'Cidade plana no extremo sul gaúcho, cercada por estradas rurais entre lavouras e campos, propícia à corrida e ao pedal fora dos horários de vento e frio mais intensos.',
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
    'Cercada pela Lagoa Mirim e pelos campos da Campanha gaúcha, Arroio Grande pede um treino adaptado ao vento e ao frio do extremo sul — e recompensa com a Praia do Pontal e as estradas rurais como cenário. Em uma cidade pequena, um personal trainer ajuda a manter a constância, aproveitando a janela de clima mais favorável entre a primavera e o outono e mantendo o corpo em movimento nos meses mais frios.',

  vizinhas: ['pelotas-rs', 'jaguarao-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Arroio Grande', url: 'https://cidades.ibge.gov.br/brasil/rs/arroio-grande/panorama' },
    { nome: 'Prefeitura de Arroio Grande', url: 'https://www.arroiogrande.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
