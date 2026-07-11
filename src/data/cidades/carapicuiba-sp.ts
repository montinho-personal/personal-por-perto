import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'carapicuiba-sp',
  nome: 'Carapicuíba',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'carapicuibano',
  tipo: 'cidade',

  populacao: 386984,
  populacaoAno: 2022,
  idhm: 0.749,
  idhmClasse: 'alto',
  altitudeM: 770,

  resumoEconomico:
    'Emancipada de Barueri em 1965, Carapicuíba é uma das cidades mais densas do Brasil: cerca de 387 mil habitantes em pouco mais de 34 km², na região oeste da Grande São Paulo. A economia é predominantemente de comércio e serviços, com forte presença de supermercados, lojas de variedades, padarias e açougues; as ocupações mais comuns entre os trabalhadores formais são operador de caixa, auxiliar de escritório e vendedor de comércio varejista. É uma cidade de perfil popular e de classe média, fortemente integrada ao mercado de trabalho de Osasco, Barueri e da capital.',
  mercado:
    'Por ser uma cidade-dormitório muito populosa e compacta, Carapicuíba oferece ao personal trainer uma base ampla de clientes que treinam cedo, antes de pegar o trem rumo a Osasco, Barueri ou São Paulo, ou no fim do dia ao voltar. Os parques municipais com academia ao ar livre e os bairros adensados favorecem o atendimento em domicílio e em pequenos grupos, com deslocamentos curtos. A faixa de preços tende a ser mais acessível do que a das cidades vizinhas de renda mais alta, o que estimula pacotes mensais e o acompanhamento online.',
  bairrosNobres: ['Vila Caldas', 'Jardim Tonato', 'Parque Jandaia', 'Vila Menck'],
  bairrosPopulares: ['Vila Dirce', 'Cidade Ariston', 'Cohab', 'Jardim Planalto'],
  parques: [
    {
      nome: 'Parque dos Paturis',
      descricao:
        'O maior parque público da cidade, à beira de um grande lago, na Vila Municipal. Conta com pista de caminhada, ciclovia, campo de grama sintética, playground e equipamentos de ginástica ao ar livre — um espaço completo para treino funcional, corrida e mobilidade. Abre diariamente, das 6h às 18h.',
    },
    {
      nome: 'Parque Estadual Gabriel Chucre',
      descricao:
        'Conhecido como Parque da Lagoa, ocupa cerca de 134 mil m² em uma antiga cava de extração de areia recuperada, inaugurada em 2012. Tem ciclovia de 1,2 km, trilhas de caminhada, equipamentos de ginástica, quadras poliesportivas, quadra de tênis e pista de skate, sendo a maior área verde para treino ao ar livre da cidade.',
    },
    {
      nome: 'Parque Planalto',
      descricao:
        'Na Vila Planalto, reúne campo de grama sintética, pista de caminhada, academia ao ar livre, playground e pista de skate. É uma boa opção de bairro para treino funcional e caminhada orientada. Funciona das 6h às 18h.',
    },
  ],
  ciclovias:
    'As principais opções para pedalar com segurança estão dentro dos parques: o Parque dos Paturis tem ciclovia junto ao lago e o Parque Estadual Gabriel Chucre conta com cerca de 1,2 km de ciclovia. Fora deles, o trânsito intenso das vias principais exige cautela para o ciclista.',
  clima:
    'Por integrar a Região Metropolitana de São Paulo, Carapicuíba tem clima subtropical de altitude, com verão chuvoso e inverno ameno e mais seco. A cidade fica a cerca de 770 m de altitude, em terreno acidentado às margens do Rio Tietê, com temperaturas médias anuais próximas de 19 °C a 20 °C.',
  climaTreino:
    'O início da manhã, sobretudo no verão, é a melhor janela para o treino ao ar livre, antes do calor e das chuvas de fim de tarde. No inverno, as manhãs frias e secas favorecem corridas mais longas nos parques. Em dias de chuva, vale alternar para academia coberta.',
  mobilidade:
    'A cidade é cortada pela Linha 8-Diamante da CPTM, com a estação Carapicuíba como principal ponto de embarque rumo a Osasco e à Estação da Luz, na capital — o que torna o trem o eixo central da rotina de quem mora na cidade e trabalha fora. A Avenida Inocêncio Seráfico é a espinha dorsal do comércio e da circulação interna, e a Rodovia Castello Branco passa logo ao norte, em Barueri, dando acesso rápido a Barueri, Santana de Parnaíba e ao interior.',
  corridas: [
    {
      nome: 'Corrida Nova Inocêncio 8k',
      descricao:
        'Prova de rua promovida pela Prefeitura, com percurso de cerca de 8 km largando no Parque da Aldeia Jesuítica e chegando ao Marco Zero, na Avenida Miriam. Reúne corredores da cidade e da região oeste da Grande SP.',
    },
    {
      nome: 'Atividades da Secretaria de Esporte e Lazer',
      descricao:
        'A Prefeitura mantém programação esportiva e de lazer nos parques e equipamentos públicos, com caminhadas orientadas e uso das academias ao ar livre — um ponto de partida acessível para quem quer começar a treinar.',
    },
  ],
  culturaEsportiva:
    'Carapicuíba tem forte tradição de esporte comunitário, com campos de várzea, quadras de bairro e arenas como a da Cidade Ariston movimentando o futebol amador. A cidade também guarda a Aldeia de Carapicuíba, sítio histórico jesuítico tombado em 1941, cujo entorno e o Parque da Aldeia servem de cenário para caminhadas, corridas e eventos esportivos populares.',
  academias:
    'A oferta combina academias de bairro e redes de baixo custo, como a Smart Fit, com as academias ao ar livre gratuitas dos parques municipais. Esse mix atende tanto quem prefere o treino indoor quanto quem busca alternativas de custo zero ao ar livre, reforçando a vocação popular da cidade.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades no Centro (Av. Governador Mário Covas), na Vila Dirce e no Parque Santa Teresa' },
    {
      nome: 'Academias ao ar livre municipais',
      detalhe: 'gratuitas, nos parques dos Paturis, Gabriel Chucre (Parque da Lagoa) e Planalto',
    },
  ],
  destaquesFitness: [
    'Cidade muito populosa e compacta (~34 km²) — base ampla de clientes e deslocamentos curtos para atendimento em domicílio.',
    'Parques com academia ao ar livre gratuita: Paturis, Gabriel Chucre (Parque da Lagoa) e Planalto.',
    'Eixo ferroviário forte: estação Carapicuíba na Linha 8-Diamante da CPTM, conectando a Osasco e à capital.',
    'Faixa de preços mais acessível que a das vizinhas de renda alta, favorecendo pacotes mensais e treino online.',
  ],
  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 350,
  },
  conclusao:
    'Carapicuíba é uma cidade densa, popular e bem conectada por trem ao coração econômico da Grande SP, o que cria uma demanda constante por treino flexível e de bom custo-benefício. Para o personal trainer, a combinação de parques públicos equipados, bairros adensados e clientes que treinam cedo ou no fim do dia abre espaço para atendimento em domicílio, grupos ao ar livre e acompanhamento online.',
  faqsExtra: [
    {
      pergunta: 'Dá para treinar com personal nos parques de Carapicuíba?',
      resposta:
        'Dá, e é um dos formatos que melhor combinam com a cidade: o Parque dos Paturis, o Gabriel Chucre (Parque da Lagoa) e o Planalto têm pista, equipamentos de ginástica e espaço para treino funcional com material portátil. Para quem quer reduzir custo, treinar em dupla ou em pequeno grupo no parque é uma alternativa comum ao atendimento individual em casa.',
    },
    {
      pergunta: 'Qual o melhor horário de treino para quem trabalha fora de Carapicuíba?',
      resposta:
        'A maioria treina cedo, antes de pegar a Linha 8-Diamante rumo a Osasco, Barueri ou São Paulo, ou no fim do dia na volta. O personal ajusta a sessão a essas janelas — treinos de 45 a 60 minutos, com plano B em casa para os dias em que a rotina aperta. O acompanhamento online também funciona bem para quem tem horário imprevisível.',
    },
    {
      pergunta: 'Existe acompanhamento para quem sente dores ou tem limitações?',
      resposta:
        'Sim. O Montinho Personal, destacado pelo portal, tem formação complementar no treino de pessoas com dores e limitações musculoesqueléticas — e a vivência de quem já treinou com desconforto. Com base na região de Alphaville, vizinha de Carapicuíba, o atendimento presencial pode ser combinado conforme agenda e local, além do online. Treino adaptado não substitui tratamento: quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['osasco-sp', 'barueri-sp', 'jandira-sp', 'cotia-sp'],
  fontes: [
    { nome: 'IBGE Cidades — Carapicuíba', url: 'https://cidades.ibge.gov.br/brasil/sp/carapicuiba/panorama' },
    { nome: 'Prefeitura de Carapicuíba', url: 'https://www.carapicuiba.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/3510609' },
  ],
  atualizadoEm: '2026-07-11',
};
