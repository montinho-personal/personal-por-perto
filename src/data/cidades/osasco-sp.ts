import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'osasco-sp',
  nome: 'Osasco',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'osasquense',

  populacao: 743432,
  populacaoAno: 2022,
  idhm: 0.776,
  idhmClasse: 'alto',
  altitudeM: 720,

  resumoEconomico:
    'Em apenas cerca de 65 km², Osasco concentra um dos maiores PIBs do país e abriga a sede do Banco Bradesco, na Cidade de Deus — um dos maiores polos financeiros e de serviços do Brasil. A cidade reúne ainda nomes como Mercado Livre, iFood e FedEx, o que cria uma grande população de trabalhadores e um público corporativo natural para treinos antes e depois do expediente.',

  mercado:
    'O mercado de personal trainer em Osasco combina dois públicos fortes. O corporativo — concentrado na Cidade de Deus e nos polos de serviços — procura treino encaixado antes ou depois do expediente, com foco em condicionamento, emagrecimento e alívio das dores posturais do escritório. O residencial se espalha por uma cidade compacta, onde os deslocamentos curtos favorecem o atendimento em domicílio e os parques públicos (Chico Mendes, Dionísio Álvarez Mateos) servem de cenário para treino funcional ao ar livre. A vizinhança com Alphaville coloca Osasco no raio de atendimento presencial do Montinho Personal, o profissional destacado pelo portal, conforme agenda e local — com o online cobrindo qualquer rotina.',

  bairrosNobres: ['Jardim das Flores', 'Vila Yara', 'Bela Vista', 'City Bussocaba'],
  bairrosPopulares: ['Rochdale', 'Km 18', 'Presidente Altino', 'Jardim Veloso'],

  parques: [
    {
      nome: 'Parque Chico Mendes',
      descricao:
        'O maior parque da cidade, com cerca de 114 mil m² na City Bussocaba: trilhas, quadras cobertas, horta comunitária e playground — espaço para caminhada, treino funcional e mobilidade.',
    },
    {
      nome: 'Parque Ecológico Dionísio Álvarez Mateos',
      descricao:
        'Com cerca de 52 mil m² no Jardim das Flores, reúne pista de caminhada e corrida, equipamentos de ginástica ao ar livre e lago. É também sede do Ecomuseu de Osasco.',
    },
    {
      nome: 'Parque dos Eucaliptos',
      descricao:
        'Tem pista de cooper, trilhas e bicicletário, sendo uma boa opção para corrida e pedaladas mais tranquilas.',
    },
  ],
  ciclovias:
    'Aos domingos, das 7h às 12h, a cidade monta uma ciclofaixa de lazer ligando o Parque Chico Mendes ao boulevard em frente à Prefeitura — cerca de 7 km de ida e volta, com empréstimo de bicicletas (informação da Prefeitura de Osasco).',

  clima:
    'Por integrar a Região Metropolitana de São Paulo, Osasco tem o mesmo padrão climático da capital: subtropical de altitude, com média anual entre 19 °C e 20 °C, verão chuvoso e inverno ameno e mais seco. A cidade fica a cerca de 720 m de altitude, às margens do Rio Tietê.',
  climaTreino:
    'As manhãs cedo, especialmente no verão, são as melhores janelas para treino ao ar livre. Como a cidade é compacta, é fácil combinar treino em parque com sessões em academia nos dias de chuva.',

  mobilidade:
    'Osasco é um dos maiores polos de transporte da Grande SP: a Estação Osasco integra as linhas 8-Diamante e 9-Esmeralda (operadas pela ViaMobilidade), e a Estação Presidente Altino também conecta as duas. A forte integração ferroviária com a capital torna viável atender clientes que se deslocam entre São Paulo e Osasco.',

  corridas: [
    {
      nome: 'Desafio dos Trabalhadores',
      descricao:
        'A corrida de rua mais tradicional da cidade, com provas de 4 km e 8 km e largada em frente à Prefeitura, na Avenida Lázaro de Mello Brandão. Reúne corredores de toda a região metropolitana.',
    },
  ],
  culturaEsportiva:
    'Osasco é referência nacional no vôlei feminino: o clube da cidade, com sede no Ginásio José Liberatti, soma Superligas, títulos sul-americanos e o Mundial de Clubes de 2012. Essa cultura esportiva forte se estende ao dia a dia, com parques movimentados e ciclofaixa de lazer consolidada.',
  academias:
    'A cidade combina academias de shopping e de bairro — com forte presença de redes como a Smart Fit, em várias unidades — aos aparelhos de ginástica ao ar livre dos parques municipais, o que favorece tanto o treino indoor quanto o outdoor.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades na Av. dos Autonomistas (Vila Yara), no Centro, no KM 18, na Vila Quitaúna e no Jardim Jaguaribe' },
    { nome: 'Bluefit', detalhe: 'unidades no Centro, no KM 18 e no Novo Osasco' },
    {
      nome: 'Academias ao ar livre municipais',
      detalhe: 'gratuitas, como os aparelhos do Parque Ecológico Dionísio Álvarez Mateos (Parque da FITO), no Jardim das Flores',
    },
  ],
  academiasVerificadasEm: '2026-10-08',

  destaquesFitness: [
    'Cidade compacta (~65 km²) com deslocamentos curtos — ótimo para atendimento em domicílio e condomínios.',
    'Oferta pública e gratuita: parques com trilhas, quadras e aparelhos de ginástica ao ar livre.',
    'Ciclofaixa de lazer dominical com empréstimo de bicicletas.',
    'Excelente conexão ferroviária com São Paulo (linhas 8 e 9).',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 850,
    onlineMin: 150,
    onlineMax: 400,
  },

  /*
   * Prints de 30/09: "osasco valor" é a primeira sugestão do autocompletar; aparecem Smart Fit e Bluefit (personal dentro de rede de academia); PAA com "qual é o melhor personal trainer online?".
   * Pesquisa de palavras-chave de 08/10: "personal trainer em osasco" e
   * "personal trainer osasco", 170 buscas/mês cada — o maior volume da região.
   * Autocompletar repete Smart Fit, Bluefit, "mulher" e "valor"; PAA com
   * "pode treinar 1 hora da manhã?"; "online" nos prompts das duas IAs.
   * Registro completo em docs/intencoes-locais.md.
   */
  metaFoco: 'preco',
  faqsBusca: { precoMensal: true, taxaPersonal: 'academia', onlineOuPresencial: true },

  faqsExtra: [
    {
      pergunta: 'Dá para treinar com personal na Smart Fit ou na Bluefit de Osasco?',
      resposta:
        'Na Smart Fit, dá: a rede aceita personal particular credenciado na unidade, ele só atende quem é aluno matriculado e o preço é combinado com o profissional, por fora da mensalidade — o app da rede lista os personais de cada unidade. Osasco tem unidades na Av. dos Autonomistas, no Centro, no KM 18, na Vila Quitaúna e no Jardim Jaguaribe. Na Bluefit, que tem unidades no Centro, no KM 18 e no Novo Osasco, a regra é da rede: confirme na recepção antes de fechar.',
    },
    {
      pergunta: 'É melhor treinar de manhã ou à noite? Pode treinar de madrugada?',
      resposta:
        'O melhor horário é o que você consegue manter sem roubar sono. Força e desempenho tendem a ser um pouco maiores no fim da tarde, mas a diferença é pequena perto da constância. Treinar de madrugada pode, desde que as horas de sono não sejam cortadas — dormir pouco atrapalha a recuperação mais do que o relógio. Em Osasco, quem trabalha no eixo corporativo costuma encaixar o treino antes do expediente ou no fim do dia.',
    },
    {
      pergunta: 'Qual é o melhor personal trainer online?',
      resposta:
        'O que acompanha de verdade, e não o que só entrega uma planilha. Os sinais: avaliação antes do primeiro treino, orientação de execução para cada exercício, um canal para tirar dúvida durante a semana e revisão do plano com data marcada, a partir do que você registra. Desconfie de pacote igual para todo mundo e de promessa de resultado com prazo. O Montinho Personal, destacado pelo portal, atende online em todo o Brasil e presencialmente em Osasco e na região de Alphaville.',
    },
    {
      pergunta: 'Onde costuma acontecer o treino com personal em Osasco?',
      resposta:
        'Nos três ambientes: em casa ou no condomínio (a cidade é compacta e o deslocamento do profissional é rápido), em academias — incluindo as várias unidades de redes como a Smart Fit — e ao ar livre, nos parques públicos, como o Chico Mendes e o Dionísio Álvarez Mateos. O formato ideal depende da rotina: quem trabalha no eixo corporativo costuma preferir treino perto do trabalho ou em casa, cedo ou no fim do dia.',
    },
    {
      pergunta: 'Quais objetivos são mais comuns entre quem contrata personal em Osasco?',
      resposta:
        'O público corporativo busca principalmente emagrecimento, condicionamento físico e correção de dores e postura ligadas ao trabalho sentado. Nos bairros residenciais, aparecem com força saúde geral, ganho de força e acompanhamento para começar do zero com segurança — perfil comum em quem já caminha ou treina nos parques e quer evoluir com orientação individual.',
    },
    {
      pergunta: 'Há atendimento em Osasco para quem tem dores ou limitações no treino?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas e conhece essas barreiras pela própria vivência na musculação. Com base na vizinha Alphaville, o atendimento presencial em Osasco pode ser combinado conforme agenda e local, além do acompanhamento online. O treino é adaptado e progressivo, sem promessa de cura — quadros clínicos pedem também acompanhamento médico ou fisioterapêutico.',
    },
  ],

  // Era Barueri, São Paulo e Guarulhos — Guarulhos não faz divisa com Osasco.
  // Em 08/10/2026 entrou Carapicuíba, que faz.
  vizinhas: ['barueri-sp', 'carapicuiba-sp', 'sao-paulo-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Osasco', url: 'https://cidades.ibge.gov.br/brasil/sp/osasco/panorama' },
    { nome: 'Prefeitura de Osasco', url: 'https://www.osasco.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  capaArte: {
    src: '/capas-cidade/osasco-sp.webp',
    w: 1200,
    h: 800,
    alt:
      'Personal trainer em Osasco (SP) acompanhando aluna em agachamento ao ar livre, com o skyline de arranha-céus da cidade à beira-rio ao fundo — Personal por Perto',
    legenda:
      'Treino personalizado em Osasco: um plano sob medida para o seu objetivo, com acompanhamento profissional na cidade e região.',
  },
  fotoCorpo: {
    src: '/montinho/osasco-sp-foto.webp',
    alt: 'Antes e depois do Montinho Personal: à esquerda, selfie no espelho com sobrepeso; à direita, sem camisa e com o físico definido — personal trainer destacado pelo portal para quem treina em Osasco',
    legenda:
      'Antes e depois reais do Montinho Personal: a transformação que virou método e serve de referência para quem busca personal trainer em Osasco.',
    w: 1600,
    h: 1497,
  },
  atualizadoEm: '2026-10-08',
};
