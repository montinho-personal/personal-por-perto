import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'rio-do-sul-sc',
  nome: 'Rio do Sul',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'rio-sulense',
  tipo: 'cidade',

  populacao: 72587,
  populacaoAno: 2022,
  idhm: 0.802,
  idhmClasse: 'muito alto',
  altitudeM: 340,

  resumoEconomico:
    'Rio do Sul é a principal cidade e o polo regional do Alto Vale do Itajaí, em Santa Catarina, exercendo papel de referência em comércio, serviços, saúde e educação para dezenas de municípios do entorno. A economia é diversificada, com indústria, comércio forte e um setor de serviços robusto, e a cidade é sede do centro universitário UNIDAVI. O município se formou no encontro dos rios Itajaí do Sul e Itajaí do Oeste, que dão origem ao Itajaí-Açu — geografia que marca a paisagem e a história local.',

  mercado:
    'Como polo do Alto Vale, Rio do Sul concentra a maior oferta de academias e estúdios da região, com redes nacionais e nomes locais consolidados, além de espaços de musculação, funcional, crossfit e estúdios de pilates. A presença da UNIDAVI e de um grande contingente de estudantes e profissionais ajuda a sustentar a demanda por treino personalizado e acompanhamento individual.',

  bairrosNobres: ['Jardim América', 'Centro', 'Bela Aliança', 'Laranjeiras'],
  bairrosPopulares: ['Canta Galo', 'Canoas', 'Santa Rita', 'Sumaré'],

  parques: [
    {
      nome: 'Beira Rio',
      descricao:
        'A orla urbana ao longo do Itajaí-Açu, no Centro, é um dos espaços mais usados para caminhada e corrida, com calçadões e vista para o rio — ponto de encontro da vida ativa rio-sulense.',
    },
    {
      nome: 'Praça do Museu / área central',
      descricao:
        'O entorno do Museu Histórico Cultural e das praças centrais oferece percursos planos e arborizados para caminhadas leves no dia a dia.',
    },
    {
      nome: 'Morros e trilhas do entorno',
      descricao:
        'Cercada por morros do Alto Vale, a cidade tem trilhas e subidas no entorno que atraem quem busca trekking e treino em terreno inclinado.',
    },
  ],
  ciclovias:
    'Rio do Sul tem trechos de ciclovia e ciclofaixa, com destaque para o uso da orla do Itajaí-Açu por ciclistas; a malha cicloviária ainda é modesta diante do porte de polo regional da cidade.',

  clima:
    'O clima é subtropical úmido, com chuvas bem distribuídas ao longo do ano e invernos frios — não é raro registrar temperaturas baixas e geadas em dias mais rigorosos no Alto Vale. A cidade convive com um histórico expressivo de enchentes do Rio Itajaí-Açu, formado na confluência dos rios Itajaí do Sul e Itajaí do Oeste, com cheias que marcam a memória local.',
  climaTreino:
    'No inverno, o frio pede aquecimento mais cuidadoso e agasalho para o treino ao ar livre, especialmente cedo e à noite. Em períodos muito chuvosos, é importante acompanhar os alertas da Defesa Civil, já que áreas baixas e a orla do rio podem ser atingidas por cheias — ter um plano B em ambiente coberto ajuda a manter a constância.',

  mobilidade:
    'O principal eixo viário é a BR-470, que corta a região e liga Rio do Sul ao litoral (sentido Blumenau, Itajaí e Navegantes) e ao interior do estado, reforçando o papel da cidade como entroncamento do Alto Vale. O deslocamento dentro do município é feito sobretudo por carro, transporte coletivo e, em distâncias curtas, a pé ou de bicicleta.',

  corridas: [
    {
      nome: 'Corridas de rua no calendário do Alto Vale',
      descricao:
        'Rio do Sul recebe provas de corrida de rua ao longo do ano, com percursos urbanos que costumam passar pela região central e pela orla do rio, reunindo corredores da cidade e dos municípios vizinhos.',
    },
    {
      nome: 'Eventos esportivos regionais',
      descricao:
        'Como polo do Alto Vale, a cidade concentra parte da agenda esportiva regional, incluindo etapas de corrida e caminhada promovidas por clubes, assessorias e entidades locais.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva rio-sulense combina o uso da orla do Itajaí-Açu para caminhada e corrida com uma cena ativa de academias, funcional e crossfit, alimentada pelo público universitário da UNIDAVI. As trilhas e subidas do entorno acrescentam opção para quem gosta de treino ao ar livre em terreno acidentado.',
  academias:
    'A oferta reúne redes e academias locais consolidadas, estúdios de pilates, boxes de crossfit e espaços de treino funcional, complementados pela orla do rio e pelas trilhas do entorno para atividades ao ar livre.',

  destaquesFitness: [
    'Polo regional do Alto Vale, com a maior oferta de academias e estúdios da região.',
    'Orla do Itajaí-Açu (Beira Rio) usada para caminhada, corrida e pedal.',
    'Morros e trilhas no entorno para trekking e treino em terreno inclinado.',
    'Público universitário da UNIDAVI sustentando a demanda por treino personalizado.',
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
    'Como polo do Alto Vale do Itajaí, Rio do Sul reúne boa estrutura para treinar — da orla do rio às academias e estúdios bem distribuídos pela cidade. Um personal trainer ajuda a montar uma rotina consistente levando em conta o inverno frio, a geografia de morros e o histórico de cheias do Itajaí-Açu, com um plano B sempre à mão.',

  vizinhas: ['blumenau-sc', 'brusque-sc', 'itajai-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Rio do Sul', url: 'https://cidades.ibge.gov.br/brasil/sc/rio-do-sul/panorama' },
    { nome: 'Prefeitura de Rio do Sul', url: 'https://www.riodosul.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
