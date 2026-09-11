/**
 * Os 101 bairros que têm página própria.
 *
 * Fonte única: cada entrada carrega o slug, o nome do bairro, a locução já
 * flexionada ("no Batel", "na Aldeota", "nos Jardins" — em português a
 * preposição muda com o gênero e o número, e concatenar "em" na mão erra
 * na maioria dos casos) e a cidade-mãe.
 *
 * Os dados foram extraídos dos breadcrumbs das próprias páginas e conferidos
 * contra o mapa que existia antes: as 93 linhas originais bateram sem
 * divergência. As quatro de Belo Horizonte acrescentadas em 09/09/2026
 * (Barreiro, Belvedere, Cidade Nova e Pampulha) nasceram já com a linha aqui.
 *
 * Alguns bairros repetem nome em cidades diferentes — Petrópolis (Natal e
 * Porto Alegre), Barra (Salvador, ao lado da Barra da Tijuca e da Barra Sul)
 * e Brotas (Salvador) —, por isso o slug carrega a cidade e o nome exibido,
 * não. Quem mostra a lista sempre a mostra dentro da página da cidade, então
 * não há ambiguidade para o leitor.
 *
 * Ao publicar um bairro novo, acrescente a linha aqui. Sem isso ele fica
 * órfão: nenhuma página do site aponta para ele, e o Google chega a
 * descobrir a URL pelo sitemap mas não gasta rastreio nela.
 */
export interface Bairro {
  /** Slug da página, que também é o caminho: /personal-trainer-batel/. */
  slug: string;
  nome: string;
  /** Locução flexionada, para uso em texto corrido. */
  locucao: string;
  /** Slug da cidade-mãe. */
  cidade: string;

  /**
   * Zona ou região administrativa REAL do bairro dentro da cidade — Zona Sul,
   * Centro-Sul, Plano Piloto, Barreiro. É o único critério automático de
   * "bairros relacionados" que este projeto aceita.
   *
   * O motivo é explícito: pertencer ao mesmo estado, ou até à mesma cidade,
   * não torna dois bairros vizinhos. Sem `zona` preenchida, o bairro
   * simplesmente não recebe bloco de relacionados — silêncio é melhor que
   * proximidade inventada.
   */
  zona?: string;

  /**
   * Frase curta e específica para o card na página da cidade. Sem ela, a
   * cidade cai na pílula só com o nome (comportamento antigo). Escrever uma
   * descrição genérica é pior que não escrever: o card existe para o leitor
   * escolher entre bairros, e "guia completo do bairro" não ajuda a escolher.
   */
  descricao?: string;

  /**
   * Relações declaradas à mão, com o motivo escrito. Servem para os casos que
   * a zona não cobre e que ainda assim são úteis ao leitor — a comparação
   * entre Tijuca e Barra da Tijuca, por exemplo, que são bairros opostos
   * constantemente confundidos.
   *
   * `motivo` não é decorativo: ele vira o texto do link na página, o que
   * obriga quem acrescenta uma relação a justificá-la por escrito.
   */
  relacionados?: { slug: string; motivo: string }[];

  /** Prioridade editorial: bairros marcados aparecem primeiro nos hubs. */
  prioridade?: number;
}

export const bairros: Bairro[] = [
  { slug: 'personal-trainer-13-de-julho', nome: '13 de Julho', locucao: 'no 13 de Julho', cidade: 'aracaju-se' },
  { slug: 'personal-trainer-adrianopolis', nome: 'Adrianópolis', locucao: 'em Adrianópolis', cidade: 'manaus-am' },
  { slug: 'personal-trainer-agua-verde', nome: 'Água Verde', locucao: 'no Água Verde', cidade: 'curitiba-pr' },
  { slug: 'personal-trainer-aldeota', nome: 'Aldeota', locucao: 'na Aldeota', cidade: 'fortaleza-ce' },
  { slug: 'personal-trainer-altiplano-cabo-branco', nome: 'Altiplano Cabo Branco', locucao: 'no Altiplano Cabo Branco', cidade: 'joao-pessoa-pb' },
  { slug: 'personal-trainer-asa-sul', nome: 'Asa Sul', locucao: 'na Asa Sul', cidade: 'brasilia-df', zona: 'Plano Piloto', prioridade: 1,
    descricao: 'As quadras de Lucio Costa: entrequadras arborizadas e distâncias que só o carro resolve.',
  },
  { slug: 'personal-trainer-atalaia', nome: 'Atalaia', locucao: 'na Atalaia', cidade: 'aracaju-se' },
  { slug: 'personal-trainer-barra-da-tijuca', nome: 'Barra da Tijuca', locucao: 'na Barra da Tijuca', cidade: 'rio-de-janeiro-rj', zona: 'Zona Oeste', prioridade: 1,
    descricao: 'Bairro-cidade da Zona Oeste: distâncias longas, condomínios com academia própria e orla de ponta a ponta.',
    relacionados: [{ slug: 'personal-trainer-tijuca', motivo: 'o outro "Tijuca" do Rio, na Zona Norte — perfis opostos' }],
  },
  { slug: 'personal-trainer-barra-salvador', nome: 'Barra', locucao: 'na Barra', cidade: 'salvador-ba' },
  { slug: 'personal-trainer-barra-sul', nome: 'Barra Sul', locucao: 'na Barra Sul', cidade: 'balneario-camboriu-sc' },
  { slug: 'personal-trainer-barreiro', nome: 'Barreiro', locucao: 'no Barreiro', cidade: 'belo-horizonte-mg', zona: 'Barreiro',
    descricao: 'A maior regional de BH: 54 bairros e 53,6 km², com estrutura própria e deslocamento longo.',
  },
  { slug: 'personal-trainer-batel', nome: 'Batel', locucao: 'no Batel', cidade: 'curitiba-pr' },
  { slug: 'personal-trainer-batista-campos', nome: 'Batista Campos', locucao: 'no Batista Campos', cidade: 'belem-pa' },
  { slug: 'personal-trainer-beira-mar-norte', nome: 'Beira-Mar Norte', locucao: 'na Beira-Mar Norte', cidade: 'florianopolis-sc' },
  { slug: 'personal-trainer-bela-vista', nome: 'Bela Vista', locucao: 'no Bela Vista', cidade: 'porto-alegre-rs' },
  { slug: 'personal-trainer-belvedere', nome: 'Belvedere', locucao: 'no Belvedere', cidade: 'belo-horizonte-mg', zona: 'Centro-Sul',
    descricao: 'Alto padrão vertical na divisa com Nova Lima, onde quase todo prédio já tem academia.',
  },
  { slug: 'personal-trainer-bigorrilho', nome: 'Bigorrilho', locucao: 'no Bigorrilho', cidade: 'curitiba-pr' },
  { slug: 'personal-trainer-boa-viagem', nome: 'Boa Viagem', locucao: 'em Boa Viagem', cidade: 'recife-pe', zona: 'Zona Sul', prioridade: 1,
    descricao: 'A orla mais movimentada do Recife, com calçadão de ponta a ponta e oferta densa de academias.',
    relacionados: [{ slug: 'personal-trainer-casa-forte', motivo: 'o polo residencial da Zona Norte — o contraponto de Boa Viagem no Recife' }],
  },
  { slug: 'personal-trainer-botafogo', nome: 'Botafogo', locucao: 'em Botafogo', cidade: 'rio-de-janeiro-rj', zona: 'Zona Sul',
    descricao: 'Enseada, Aterro e ladeiras: o bairro da Zona Sul onde o treino ao ar livre tem relevo de verdade.',
  },
  { slug: 'personal-trainer-brooklin', nome: 'Brooklin', locucao: 'no Brooklin', cidade: 'sao-paulo-sp', zona: 'Zona Sul', prioridade: 1,
    descricao: 'Corredor corporativo da Berrini somado a ruas residenciais — treino encaixado entre reuniões.',
  },
  { slug: 'personal-trainer-brotas-salvador', nome: 'Brotas', locucao: 'em Brotas', cidade: 'salvador-ba' },
  { slug: 'personal-trainer-buritis', nome: 'Buritis', locucao: 'no Buritis', cidade: 'belo-horizonte-mg', zona: 'Oeste',
    descricao: 'Região Oeste em três altitudes, com o Parque Aggeo Pio Sobrinho e muita ladeira.',
  },
  { slug: 'personal-trainer-cabo-branco', nome: 'Cabo Branco', locucao: 'no Cabo Branco', cidade: 'joao-pessoa-pb' },
  { slug: 'personal-trainer-cabral', nome: 'Cabral', locucao: 'no Cabral', cidade: 'curitiba-pr' },
  { slug: 'personal-trainer-calhau', nome: 'Calhau', locucao: 'no Calhau', cidade: 'sao-luis-ma' },
  { slug: 'personal-trainer-cambui', nome: 'Cambuí', locucao: 'no Cambuí', cidade: 'campinas-sp' },
  { slug: 'personal-trainer-caminho-das-arvores', nome: 'Caminho das Árvores', locucao: 'no Caminho das Árvores', cidade: 'salvador-ba' },
  { slug: 'personal-trainer-campeche', nome: 'Campeche', locucao: 'no Campeche', cidade: 'florianopolis-sc' },
  { slug: 'personal-trainer-casa-forte', nome: 'Casa Forte', locucao: 'em Casa Forte', cidade: 'recife-pe', zona: 'Zona Norte',
    descricao: 'Praça de Casa Forte e casario histórico: o bairro mais verde da Zona Norte do Recife.',
  },
  { slug: 'personal-trainer-chacara-cachoeira', nome: 'Chácara Cachoeira', locucao: 'na Chácara Cachoeira', cidade: 'campo-grande-ms' },
  { slug: 'personal-trainer-cidade-baixa', nome: 'Cidade Baixa', locucao: 'na Cidade Baixa', cidade: 'porto-alegre-rs' },
  { slug: 'personal-trainer-cidade-maia', nome: 'Cidade Maia', locucao: 'na Cidade Maia', cidade: 'guarulhos-sp' },
  { slug: 'personal-trainer-cidade-nova-bh', nome: 'Cidade Nova', locucao: 'no Cidade Nova', cidade: 'belo-horizonte-mg', zona: 'Nordeste',
    descricao: 'Classe média na região Nordeste, com preços bem distantes dos praticados na Zona Sul.',
  },
  { slug: 'personal-trainer-coco-fortaleza', nome: 'Cocó', locucao: 'no Cocó', cidade: 'fortaleza-ce' },
  { slug: 'personal-trainer-copacabana', nome: 'Copacabana', locucao: 'em Copacabana', cidade: 'rio-de-janeiro-rj', zona: 'Zona Sul',
    descricao: 'O bairro mais denso da Zona Sul, com calçadão de 4 km e a maior oferta de academias por quarteirão do Rio.',
  },
  { slug: 'personal-trainer-ecoville', nome: 'Ecoville', locucao: 'no Ecoville', cidade: 'curitiba-pr' },
  { slug: 'personal-trainer-fatima-teresina', nome: 'Fátima', locucao: 'no Fátima', cidade: 'teresina-pi' },
  { slug: 'personal-trainer-gleba-palhano', nome: 'Gleba Palhano', locucao: 'na Gleba Palhano', cidade: 'londrina-pr', zona: 'Zona Oeste', prioridade: 1,
    descricao: 'O bairro que verticalizou em dez anos, com academias de condomínio em quase todo lançamento.',
  },
  { slug: 'personal-trainer-goiabeiras', nome: 'Goiabeiras', locucao: 'em Goiabeiras', cidade: 'cuiaba-mt' },
  { slug: 'personal-trainer-gonzaga', nome: 'Gonzaga', locucao: 'no Gonzaga', cidade: 'santos-sp' },
  { slug: 'personal-trainer-gracas', nome: 'Graças', locucao: 'nas Graças', cidade: 'recife-pe', zona: 'Zona Norte',
    descricao: 'Zona Norte nobre, arborizada e vertical, a poucos minutos do Centro.',
  },
  { slug: 'personal-trainer-grageru', nome: 'Grageru', locucao: 'no Grageru', cidade: 'aracaju-se' },
  { slug: 'personal-trainer-higienopolis', nome: 'Higienópolis', locucao: 'em Higienópolis', cidade: 'sao-paulo-sp', zona: 'Centro-Oeste',
    descricao: 'Tradicional e verticalizado junto à Consolação, com público de todas as gerações no mesmo prédio.',
  },
  { slug: 'personal-trainer-horto-florestal', nome: 'Horto Florestal', locucao: 'no Horto Florestal', cidade: 'salvador-ba' },
  { slug: 'personal-trainer-icarai', nome: 'Icaraí', locucao: 'em Icaraí', cidade: 'niteroi-rj', zona: 'Zona Sul', prioridade: 1,
    descricao: 'A orla de Icaraí de frente para o Pão de Açúcar — o cartão-postal onde Niterói treina.',
  },
  { slug: 'personal-trainer-ipanema', nome: 'Ipanema', locucao: 'em Ipanema', cidade: 'rio-de-janeiro-rj', zona: 'Zona Sul',
    descricao: 'Entre a orla e a Lagoa Rodrigo de Freitas, com o circuito de treino ao ar livre mais disputado da Zona Sul.',
  },
  { slug: 'personal-trainer-itaigara', nome: 'Itaigara', locucao: 'no Itaigara', cidade: 'salvador-ba' },
  { slug: 'personal-trainer-itaim-bibi', nome: 'Itaim Bibi', locucao: 'no Itaim Bibi', cidade: 'sao-paulo-sp', zona: 'Zona Sul',
    descricao: 'O bairro mais valorizado de São Paulo, com studios de alto padrão e agenda de executivo.',
  },
  { slug: 'personal-trainer-jardim-aquarius', nome: 'Jardim Aquarius', locucao: 'no Jardim Aquarius', cidade: 'sao-jose-dos-campos-sp' },
  { slug: 'personal-trainer-jardim-camburi', nome: 'Jardim Camburi', locucao: 'em Jardim Camburi', cidade: 'vitoria-es' },
  { slug: 'personal-trainer-jardim-da-penha', nome: 'Jardim da Penha', locucao: 'em Jardim da Penha', cidade: 'vitoria-es' },
  { slug: 'personal-trainer-jardim-das-americas', nome: 'Jardim das Américas', locucao: 'no Jardim das Américas', cidade: 'cuiaba-mt' },
  { slug: 'personal-trainer-jardim-das-flores', nome: 'Jardim das Flores', locucao: 'no Jardim das Flores', cidade: 'osasco-sp' },
  { slug: 'personal-trainer-jardim-dos-estados', nome: 'Jardim dos Estados', locucao: 'no Jardim dos Estados', cidade: 'campo-grande-ms' },
  { slug: 'personal-trainer-jardim-goias', nome: 'Jardim Goiás', locucao: 'no Jardim Goiás', cidade: 'goiania-go' },
  { slug: 'personal-trainer-jardins', nome: 'Jardins', locucao: 'nos Jardins', cidade: 'sao-paulo-sp', zona: 'Centro-Oeste',
    descricao: 'Quatro Jardins entre a Paulista e o Itaim: arborizado, caro e com oferta de studio para todo gosto.',
  },
  { slug: 'personal-trainer-jatiuca', nome: 'Jatiúca', locucao: 'na Jatiúca', cidade: 'maceio-al' },
  { slug: 'personal-trainer-joquei', nome: 'Jóquei', locucao: 'no Jóquei', cidade: 'teresina-pi' },
  { slug: 'personal-trainer-jurere-internacional', nome: 'Jurerê Internacional', locucao: 'em Jurerê Internacional', cidade: 'florianopolis-sc' },
  { slug: 'personal-trainer-lago-sul', nome: 'Lago Sul', locucao: 'no Lago Sul', cidade: 'brasilia-df', zona: 'Lago Sul',
    descricao: 'Mansões horizontais do outro lado do lago, onde o atendimento a domicílio é regra.',
    relacionados: [{ slug: 'personal-trainer-asa-sul', motivo: 'o vizinho do Plano Piloto, com rotina de treino bem diferente' }],
  },
  { slug: 'personal-trainer-lagoa-da-conceicao', nome: 'Lagoa da Conceição', locucao: 'na Lagoa da Conceição', cidade: 'florianopolis-sc' },
  { slug: 'personal-trainer-lagoa-nova', nome: 'Lagoa Nova', locucao: 'na Lagoa Nova', cidade: 'natal-rn' },
  { slug: 'personal-trainer-leblon', nome: 'Leblon', locucao: 'no Leblon', cidade: 'rio-de-janeiro-rj', zona: 'Zona Sul', prioridade: 1,
    descricao: 'O metro quadrado mais caro do país, com a Lagoa de um lado e a praia do outro.',
  },
  { slug: 'personal-trainer-lourdes', nome: 'Lourdes', locucao: 'no Lourdes', cidade: 'belo-horizonte-mg', zona: 'Centro-Sul',
    descricao: 'Vizinho residencial da Savassi, de ruas arborizadas e casarões — treino em casa e no prédio.',
  },
  { slug: 'personal-trainer-manaira', nome: 'Manaíra', locucao: 'em Manaíra', cidade: 'joao-pessoa-pb' },
  { slug: 'personal-trainer-meireles', nome: 'Meireles', locucao: 'no Meireles', cidade: 'fortaleza-ce' },
  { slug: 'personal-trainer-menino-deus', nome: 'Menino Deus', locucao: 'no Menino Deus', cidade: 'porto-alegre-rs' },
  { slug: 'personal-trainer-miramar', nome: 'Miramar', locucao: 'no Miramar', cidade: 'joao-pessoa-pb' },
  { slug: 'personal-trainer-moema', nome: 'Moema', locucao: 'em Moema', cidade: 'sao-paulo-sp', zona: 'Zona Sul', prioridade: 1,
    descricao: 'O Ibirapuera na porta e a maior concentração de studios da Zona Sul paulistana.',
  },
  { slug: 'personal-trainer-moinhos-de-vento', nome: 'Moinhos de Vento', locucao: 'no Moinhos de Vento', cidade: 'porto-alegre-rs' },
  { slug: 'personal-trainer-morada-da-colina', nome: 'Morada da Colina', locucao: 'na Morada da Colina', cidade: 'uberlandia-mg' },
  { slug: 'personal-trainer-nazare-belem', nome: 'Nazaré', locucao: 'em Nazaré', cidade: 'belem-pa' },
  { slug: 'personal-trainer-pampulha', nome: 'Pampulha', locucao: 'na Pampulha', cidade: 'belo-horizonte-mg', zona: 'Pampulha',
    descricao: 'Os 18 km de orla da lagoa — a melhor estrutura pública de corrida da capital.',
  },
  { slug: 'personal-trainer-perdizes', nome: 'Perdizes', locucao: 'em Perdizes', cidade: 'sao-paulo-sp', zona: 'Centro-Oeste',
    descricao: 'Bairro de ladeiras junto ao Pacaembu, com a ciclovia da Sumaré como pista natural.',
  },
  { slug: 'personal-trainer-petropolis-natal', nome: 'Petrópolis', locucao: 'em Petrópolis', cidade: 'natal-rn' },
  { slug: 'personal-trainer-petropolis-porto-alegre', nome: 'Petrópolis', locucao: 'no Petrópolis', cidade: 'porto-alegre-rs' },
  { slug: 'personal-trainer-pinheiros', nome: 'Pinheiros', locucao: 'em Pinheiros', cidade: 'sao-paulo-sp', zona: 'Centro-Oeste',
    descricao: 'Denso, jovem e bem servido de metrô, com o Parque Villa-Lobos e o Rio Pinheiros a poucos minutos.',
  },
  { slug: 'personal-trainer-pituba', nome: 'Pituba', locucao: 'na Pituba', cidade: 'salvador-ba' },
  { slug: 'personal-trainer-ponta-d-areia', nome: "Ponta d'Areia", locucao: "na Ponta d'Areia", cidade: 'sao-luis-ma' },
  { slug: 'personal-trainer-ponta-da-praia', nome: 'Ponta da Praia', locucao: 'na Ponta da Praia', cidade: 'santos-sp' },
  { slug: 'personal-trainer-ponta-negra', nome: 'Ponta Negra', locucao: 'na Ponta Negra', cidade: 'manaus-am' },
  { slug: 'personal-trainer-ponta-verde', nome: 'Ponta Verde', locucao: 'na Ponta Verde', cidade: 'maceio-al' },
  { slug: 'personal-trainer-praia-do-canto', nome: 'Praia do Canto', locucao: 'na Praia do Canto', cidade: 'vitoria-es' },
  { slug: 'personal-trainer-renascenca', nome: 'Renascença', locucao: 'no Renascença', cidade: 'sao-luis-ma' },
  { slug: 'personal-trainer-rio-vermelho', nome: 'Rio Vermelho', locucao: 'no Rio Vermelho', cidade: 'salvador-ba' },
  { slug: 'personal-trainer-santa-felicidade', nome: 'Santa Felicidade', locucao: 'em Santa Felicidade', cidade: 'curitiba-pr' },
  { slug: 'personal-trainer-santa-monica', nome: 'Santa Mônica', locucao: 'no Santa Mônica', cidade: 'uberlandia-mg' },
  { slug: 'personal-trainer-savassi', nome: 'Savassi', locucao: 'na Savassi', cidade: 'belo-horizonte-mg', zona: 'Centro-Sul', prioridade: 1,
    descricao: 'O quadrilátero urbano de BH: studios, academias e sessões encaixadas a pé entre compromissos.',
    relacionados: [{ slug: 'personal-trainer-lourdes', motivo: 'o vizinho residencial do outro lado da divisa, com perfil de treino diferente' }],
  },
  { slug: 'personal-trainer-setor-bueno', nome: 'Setor Bueno', locucao: 'no Setor Bueno', cidade: 'goiania-go' },
  { slug: 'personal-trainer-setor-marista', nome: 'Setor Marista', locucao: 'no Setor Marista', cidade: 'goiania-go' },
  { slug: 'personal-trainer-sion', nome: 'Sion', locucao: 'no Sion', cidade: 'belo-horizonte-mg', zona: 'Centro-Sul',
    descricao: 'Bairro-jardim debruçado na Serra do Curral, com as rampas das Mangabeiras como estímulo.',
  },
  { slug: 'personal-trainer-sudoeste', nome: 'Sudoeste', locucao: 'no Sudoeste', cidade: 'brasilia-df', zona: 'Plano Piloto',
    descricao: 'Setor planejado a oeste do Eixo, compacto e caminhável, com o Parque da Cidade ao lado.',
  },
  { slug: 'personal-trainer-tijuca', nome: 'Tijuca', locucao: 'na Tijuca', cidade: 'rio-de-janeiro-rj', zona: 'Zona Norte', prioridade: 1,
    descricao: 'O maior bairro residencial da Zona Norte, no pé do Maciço da Tijuca — e o que mais confunde quem procura a Barra.',
    relacionados: [{ slug: 'personal-trainer-barra-da-tijuca', motivo: 'o bairro de nome parecido, do outro lado da cidade — a comparação que evita confusão' }],
  },
  { slug: 'personal-trainer-tirol', nome: 'Tirol', locucao: 'no Tirol', cidade: 'natal-rn' },
  { slug: 'personal-trainer-tres-figueiras', nome: 'Três Figueiras', locucao: 'no Três Figueiras', cidade: 'porto-alegre-rs' },
  { slug: 'personal-trainer-umarizal', nome: 'Umarizal', locucao: 'no Umarizal', cidade: 'belem-pa' },
  { slug: 'personal-trainer-vieiralves', nome: 'Vieiralves', locucao: 'no Vieiralves', cidade: 'manaus-am' },
  { slug: 'personal-trainer-vila-galvao', nome: 'Vila Galvão', locucao: 'na Vila Galvão', cidade: 'guarulhos-sp' },
  { slug: 'personal-trainer-vila-madalena', nome: 'Vila Madalena', locucao: 'na Vila Madalena', cidade: 'sao-paulo-sp', zona: 'Centro-Oeste',
    descricao: 'Boêmio e muito mais inclinado do que o mapa sugere — as ladeiras são parte do treino.',
  },
  { slug: 'personal-trainer-vila-mariana', nome: 'Vila Mariana', locucao: 'na Vila Mariana', cidade: 'sao-paulo-sp', zona: 'Zona Sul',
    descricao: 'Bairro de famílias e universitários entre o Ibirapuera e a Paulista, com metrô em quase toda esquina.',
  },
  { slug: 'personal-trainer-vila-nova-conceicao', nome: 'Vila Nova Conceição', locucao: 'na Vila Nova Conceição', cidade: 'sao-paulo-sp', zona: 'Zona Sul',
    descricao: 'Pequeno, horizontal e caríssimo, colado no Ibirapuera — domicílio e studio dominam.',
  },
];

/** Bairros de uma cidade, em ordem alfabética. */
export const bairrosPorCidade: Record<string, Bairro[]> = bairros.reduce(
  (acc, b) => {
    (acc[b.cidade] ??= []).push(b);
    return acc;
  },
  {} as Record<string, Bairro[]>,
);

/**
 * Mapa bairro -> cidade-mãe. O motor de CTA usa isto para responder a única
 * pergunta que importa nessas páginas: o atendimento presencial do Montinho
 * alcança esta região? Bairro ausente é tratado como fora da área, que é o
 * comportamento seguro (nunca promete presencial).
 */
export const cidadePorBairro: Record<string, string> = Object.fromEntries(
  bairros.map((b) => [b.slug, b.cidade]),
);
