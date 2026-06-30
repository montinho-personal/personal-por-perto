import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'floriano-pi',
  nome: 'Floriano',
  uf: 'PI',
  estado: 'Piauí',
  estadoSlug: 'piaui',
  regiao: 'Nordeste',
  gentilico: 'florianense',
  tipo: 'cidade',

  populacao: 62036,
  populacaoAno: 2022,
  idhm: 0.7,
  idhmClasse: 'alto',
  altitudeM: 140,

  resumoEconomico:
    'Localizada no centro-sul do Piauí, à margem direita do rio Parnaíba e em frente à cidade maranhense de Barão de Grajaú — sua cidade-gêmea —, Floriano é o segundo maior polo regional do estado. A economia se apoia em comércio, serviços, saúde e educação superior, atendendo a uma vasta região do Médio Parnaíba que cruza a divisa com o Maranhão.',

  mercado:
    'O mercado fitness acompanha o porte de polo regional: há academias locais e estúdios no Centro e nos bairros de maior renda, além de boa procura por treino ao ar livre na orla do rio Parnaíba. A presença de universidades (UESPI e IFPI) e a vocação de saúde da cidade ajudam a sustentar a demanda por personal trainers e acompanhamento individualizado.',

  bairrosNobres: ['Centro', 'Manguinha', 'Irapuã', 'Tabuleta'],
  bairrosPopulares: ['Sambaíba Velha', 'Irapuã II', 'Princesa do Sul', 'Caixa d\'Água'],

  parques: [
    {
      nome: 'Orla do Rio Parnaíba',
      descricao:
        'A beira-rio urbana é o principal espaço de lazer ativo de Floriano: usada para caminhada e corrida ao entardecer, com mirante voltado para o rio e para a cidade-gêmea de Barão de Grajaú, no Maranhão.',
    },
    {
      nome: 'Praças e calçadões do Centro',
      descricao:
        'O Centro concentra praças e calçadões que servem de ponto de encontro para caminhadas matinais e atividades ao ar livre nos horários mais frescos.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada e concentra-se em trechos da orla e de avenidas centrais; boa parte do ciclismo urbano divide o espaço com o tráfego.',

  clima:
    'O clima é tropical quente do centro-sul piauiense, com características semiáridas: temperaturas altas o ano todo, estação chuvosa concentrada no verão e período seco prolongado no segundo semestre.',
  climaTreino:
    'Pelo calor intenso, o treino ao ar livre se concentra no início da manhã e no fim da tarde, com hidratação reforçada e atenção à exposição solar — a orla do Parnaíba é especialmente procurada no fim do dia.',

  mobilidade:
    'O acesso rodoviário principal é pela BR-230 (Transamazônica), que liga Floriano a Teresina e ao interior, complementada por estradas estaduais. A travessia do rio Parnaíba conecta a cidade a Barão de Grajaú (MA). O transporte urbano é feito por ônibus, mototáxis e aplicativos.',

  corridas: [
    {
      nome: 'Floriano Run',
      descricao:
        'Corrida de rua local com percursos de 5 km e 10 km que cresceu a cada edição, reunindo atletas de dezenas de cidades do Piauí, Maranhão e outros estados — referência da corrida de rua no Médio Parnaíba.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva gira em torno do uso da orla do rio Parnaíba para caminhada e corrida e de provas de rua como a Floriano Run, que atraem participantes de toda a região e da cidade-gêmea de Barão de Grajaú.',
  academias:
    'A oferta é formada por academias e estúdios locais, distribuídos pelo Centro e pelos bairros de maior renda, complementados pelo uso intenso da orla e das praças para treino ao ar livre.',

  destaquesFitness: [
    'Segundo polo regional do Piauí, com comércio, saúde e universidades (UESPI e IFPI).',
    'Orla do rio Parnaíba como principal espaço de caminhada e corrida.',
    'Floriano Run consolidando a corrida de rua no Médio Parnaíba.',
    'Calor do centro-sul piauiense exige treinar nos horários mais frescos e reforçar a hidratação.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Polo regional do centro-sul do Piauí à beira do rio Parnaíba, Floriano combina estrutura de comércio, saúde e ensino superior com a orla fluvial como cenário para treinar. Um personal trainer ajuda a montar uma rotina segura e adaptada ao calor, ajustando horários e hidratação e aproveitando ao máximo a orla, as praças e as academias da cidade.',

  vizinhas: ['teresina-pi', 'picos-pi'],

  fontes: [
    { nome: 'IBGE Cidades — Floriano', url: 'https://cidades.ibge.gov.br/brasil/pi/floriano/panorama' },
    { nome: 'Prefeitura de Floriano', url: 'https://www.floriano.pi.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
