import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'nova-santa-rita-rs',
  nome: 'Nova Santa Rita',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'santa-ritense',
  tipo: 'cidade',

  populacao: 29024,
  populacaoAno: 2022,
  idhm: 0.718,
  idhmClasse: 'alto',
  altitudeM: 21,

  resumoEconomico:
    'Na Região Metropolitana de Porto Alegre, entre os rios Caí, dos Sinos e Jacuí, Nova Santa Rita combina raízes rurais com um parque industrial e logístico em expansão. A orizicultura tem peso histórico — a COOPAN, cooperativa ligada a assentamento do MST, produz e industrializa arroz orgânico — e a cidade já foi conhecida como Capital do Melão. Ao longo da BR-386, que corta o município, concentram-se indústrias de cimento, alto-falantes (a antiga Selenium, hoje Harman), têxtil e alimentos, além de galpões logísticos que aproveitam a posição estratégica no eixo Canoas-interior.',

  mercado:
    'Emancipada de Canoas em 1992, Nova Santa Rita é uma cidade de porte pequeno cujo mercado fitness é enxuto e apoiado na proximidade com a estrutura da Região Metropolitana. A oferta local se concentra em academias de bairro e no trabalho de personal trainers que atendem em condomínios, na área rural e em espaços ao ar livre, muitas vezes complementando a busca por academias maiores em Canoas e Esteio.',

  bairrosNobres: ['Centro', 'Jardim Santa Rita', 'Parque Bela Vista', 'Morretes'],
  bairrosPopulares: ['Berto Círio', 'Sanga Funda', 'Pedreira', 'Califórnia'],

  parques: [
    {
      nome: 'Orla e várzeas do rio dos Sinos',
      descricao:
        'As margens do rio dos Sinos, na divisa com Canoas, marcam a paisagem de várzea onde outrora funcionavam olarias. Trechos de estradas e vias ribeirinhas servem de percurso para caminhada e pedal em contato com a natureza da baixada.',
    },
    {
      nome: 'Entorno rural e do rio Caí',
      descricao:
        'A zona rural, cortada pelos rios Caí e Jacuí, guarda estradas vicinais, lavouras de arroz e trechos de mata usados por quem prefere treinar longe do trânsito, com atenção aos períodos de cheia.',
    },
    {
      nome: 'Praças e vias do Centro',
      descricao:
        'As praças e ruas mais planas da área central e dos bairros residenciais reúnem a maior parte da caminhada urbana e das atividades ao ar livre no dia a dia da cidade.',
    },
  ],
  ciclovias:
    'A malha cicloviária é modesta e concentrada em trechos urbanos; boa parte do pedal acontece em vias de bairro e em estradas da zona rural, exigindo atenção redobrada nos acessos à BR-386.',

  clima:
    'O clima é subtropical úmido, com quatro estações bem marcadas: verões quentes, que podem passar dos 35 °C, e invernos frios, com geadas e madrugadas próximas de 0 °C. A umidade da baixada e a proximidade dos rios deixam o ar úmido durante boa parte do ano, e as chuvas se distribuem por todos os meses.',
  climaTreino:
    'A variação térmica pede planejamento: no verão, treinar cedo ou no fim da tarde e reforçar a hidratação; no inverno, aquecer bem antes de atividades ao ar livre e proteger-se do frio úmido. Nos dias de chuva e de calor mais intenso, os ambientes fechados são a alternativa mais segura para manter a constância.',

  mobilidade:
    'A BR-386, a Rodovia da Produção, atravessa Nova Santa Rita e é a espinha dorsal da mobilidade e da logística local — um novo viaduto na altura de Tabaí, liberado em 2026, melhorou o acesso entre bairros e a rodovia. A cidade se liga a Canoas e a Porto Alegre por linhas de ônibus metropolitanas, e a Trensurb, embora não passe pelo município, é acessada nas estações vizinhas de Canoas para os deslocamentos até a capital.',

  corridas: [
    {
      nome: 'Circuitos de corrida da Região Metropolitana',
      descricao:
        'Corredores de Nova Santa Rita costumam participar de provas de rua realizadas em Canoas, Esteio e Porto Alegre, aproveitando a proximidade e as linhas metropolitanas para acessar o calendário da região.',
    },
    {
      nome: 'Provas do Vale do Sinos',
      descricao:
        'O eixo do Vale do rio dos Sinos concentra corridas de rua ao longo do ano, um circuito próximo que serve de meta para quem treina na cidade e nos municípios vizinhos.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o hábito da caminhada em praças e ruas de bairro com a participação em corridas da Região Metropolitana e do Vale do Sinos. As raízes rurais e as várzeas dos rios também abrem espaço para pedal e atividades ao ar livre longe do trânsito.',
  academias:
    'A oferta é formada sobretudo por academias de bairro de musculação e treino funcional, de porte compatível com uma cidade pequena, complementada pela estrutura maior disponível em Canoas e Esteio, na vizinhança.',

  destaquesFitness: [
    'Cidade da Região Metropolitana de Porto Alegre, entre os rios Caí, dos Sinos e Jacuí.',
    'Várzeas ribeirinhas e zona rural como espaço para caminhada, pedal e treino ao ar livre.',
    'Clima subtropical de quatro estações, que exige adaptar horário e roupa ao calor do verão e ao frio úmido do inverno.',
    'Economia de arroz (arroz orgânico da COOPAN), indústria e logística ao longo da BR-386.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade de raízes rurais e indústria crescente na Região Metropolitana de Porto Alegre, Nova Santa Rita pede um treino que se ajuste às quatro estações e aproveite as várzeas dos rios e a estrutura das cidades vizinhas. Um personal trainer ajuda a organizar a rotina respeitando o clima, definindo horários e mantendo a constância ao longo do ano.',

  vizinhas: ['canoas-rs', 'esteio-rs', 'sapucaia-do-sul-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Nova Santa Rita', url: 'https://cidades.ibge.gov.br/brasil/rs/nova-santa-rita/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Nova Santa Rita', url: 'https://novasantarita.atende.net/' },
  ],
  atualizadoEm: '2026-06-29',
};
