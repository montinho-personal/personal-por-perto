/**
 * Os 93 bairros que têm página própria.
 *
 * Fonte única: cada entrada carrega o slug, o nome do bairro, a locução já
 * flexionada ("no Batel", "na Aldeota", "nos Jardins" — em português a
 * preposição muda com o gênero e o número, e concatenar "em" na mão erra
 * na maioria dos casos) e a cidade-mãe.
 *
 * Os dados foram extraídos dos breadcrumbs das próprias páginas e conferidos
 * contra o mapa que existia antes: as 93 linhas bateram sem divergência.
 *
 * Dois bairros repetem nome em cidades diferentes (Petrópolis, em Natal e em
 * Porto Alegre), por isso o slug carrega a cidade e o nome exibido, não. Quem
 * mostra a lista sempre a mostra dentro da página da cidade, então não há
 * ambiguidade para o leitor.
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
}

export const bairros: Bairro[] = [
  { slug: 'personal-trainer-13-de-julho', nome: '13 de Julho', locucao: 'no 13 de Julho', cidade: 'aracaju-se' },
  { slug: 'personal-trainer-adrianopolis', nome: 'Adrianópolis', locucao: 'em Adrianópolis', cidade: 'manaus-am' },
  { slug: 'personal-trainer-agua-verde', nome: 'Água Verde', locucao: 'no Água Verde', cidade: 'curitiba-pr' },
  { slug: 'personal-trainer-aldeota', nome: 'Aldeota', locucao: 'na Aldeota', cidade: 'fortaleza-ce' },
  { slug: 'personal-trainer-altiplano-cabo-branco', nome: 'Altiplano Cabo Branco', locucao: 'no Altiplano Cabo Branco', cidade: 'joao-pessoa-pb' },
  { slug: 'personal-trainer-asa-sul', nome: 'Asa Sul', locucao: 'na Asa Sul', cidade: 'brasilia-df' },
  { slug: 'personal-trainer-atalaia', nome: 'Atalaia', locucao: 'na Atalaia', cidade: 'aracaju-se' },
  { slug: 'personal-trainer-barra-da-tijuca', nome: 'Barra da Tijuca', locucao: 'na Barra da Tijuca', cidade: 'rio-de-janeiro-rj' },
  { slug: 'personal-trainer-barra-sul', nome: 'Barra Sul', locucao: 'na Barra Sul', cidade: 'balneario-camboriu-sc' },
  { slug: 'personal-trainer-batel', nome: 'Batel', locucao: 'no Batel', cidade: 'curitiba-pr' },
  { slug: 'personal-trainer-batista-campos', nome: 'Batista Campos', locucao: 'no Batista Campos', cidade: 'belem-pa' },
  { slug: 'personal-trainer-beira-mar-norte', nome: 'Beira-Mar Norte', locucao: 'na Beira-Mar Norte', cidade: 'florianopolis-sc' },
  { slug: 'personal-trainer-bela-vista', nome: 'Bela Vista', locucao: 'no Bela Vista', cidade: 'porto-alegre-rs' },
  { slug: 'personal-trainer-bigorrilho', nome: 'Bigorrilho', locucao: 'no Bigorrilho', cidade: 'curitiba-pr' },
  { slug: 'personal-trainer-boa-viagem', nome: 'Boa Viagem', locucao: 'em Boa Viagem', cidade: 'recife-pe' },
  { slug: 'personal-trainer-botafogo', nome: 'Botafogo', locucao: 'em Botafogo', cidade: 'rio-de-janeiro-rj' },
  { slug: 'personal-trainer-brooklin', nome: 'Brooklin', locucao: 'no Brooklin', cidade: 'sao-paulo-sp' },
  { slug: 'personal-trainer-buritis', nome: 'Buritis', locucao: 'no Buritis', cidade: 'belo-horizonte-mg' },
  { slug: 'personal-trainer-cabo-branco', nome: 'Cabo Branco', locucao: 'no Cabo Branco', cidade: 'joao-pessoa-pb' },
  { slug: 'personal-trainer-cabral', nome: 'Cabral', locucao: 'no Cabral', cidade: 'curitiba-pr' },
  { slug: 'personal-trainer-calhau', nome: 'Calhau', locucao: 'no Calhau', cidade: 'sao-luis-ma' },
  { slug: 'personal-trainer-cambui', nome: 'Cambuí', locucao: 'no Cambuí', cidade: 'campinas-sp' },
  { slug: 'personal-trainer-caminho-das-arvores', nome: 'Caminho das Árvores', locucao: 'no Caminho das Árvores', cidade: 'salvador-ba' },
  { slug: 'personal-trainer-campeche', nome: 'Campeche', locucao: 'no Campeche', cidade: 'florianopolis-sc' },
  { slug: 'personal-trainer-casa-forte', nome: 'Casa Forte', locucao: 'em Casa Forte', cidade: 'recife-pe' },
  { slug: 'personal-trainer-chacara-cachoeira', nome: 'Chácara Cachoeira', locucao: 'na Chácara Cachoeira', cidade: 'campo-grande-ms' },
  { slug: 'personal-trainer-cidade-maia', nome: 'Cidade Maia', locucao: 'na Cidade Maia', cidade: 'guarulhos-sp' },
  { slug: 'personal-trainer-coco-fortaleza', nome: 'Cocó', locucao: 'no Cocó', cidade: 'fortaleza-ce' },
  { slug: 'personal-trainer-copacabana', nome: 'Copacabana', locucao: 'em Copacabana', cidade: 'rio-de-janeiro-rj' },
  { slug: 'personal-trainer-ecoville', nome: 'Ecoville', locucao: 'no Ecoville', cidade: 'curitiba-pr' },
  { slug: 'personal-trainer-fatima-teresina', nome: 'Fátima', locucao: 'no Fátima', cidade: 'teresina-pi' },
  { slug: 'personal-trainer-gleba-palhano', nome: 'Gleba Palhano', locucao: 'na Gleba Palhano', cidade: 'londrina-pr' },
  { slug: 'personal-trainer-goiabeiras', nome: 'Goiabeiras', locucao: 'em Goiabeiras', cidade: 'cuiaba-mt' },
  { slug: 'personal-trainer-gonzaga', nome: 'Gonzaga', locucao: 'no Gonzaga', cidade: 'santos-sp' },
  { slug: 'personal-trainer-gracas', nome: 'Graças', locucao: 'nas Graças', cidade: 'recife-pe' },
  { slug: 'personal-trainer-grageru', nome: 'Grageru', locucao: 'no Grageru', cidade: 'aracaju-se' },
  { slug: 'personal-trainer-higienopolis', nome: 'Higienópolis', locucao: 'em Higienópolis', cidade: 'sao-paulo-sp' },
  { slug: 'personal-trainer-horto-florestal', nome: 'Horto Florestal', locucao: 'no Horto Florestal', cidade: 'salvador-ba' },
  { slug: 'personal-trainer-icarai', nome: 'Icaraí', locucao: 'em Icaraí', cidade: 'niteroi-rj' },
  { slug: 'personal-trainer-ipanema', nome: 'Ipanema', locucao: 'em Ipanema', cidade: 'rio-de-janeiro-rj' },
  { slug: 'personal-trainer-itaigara', nome: 'Itaigara', locucao: 'no Itaigara', cidade: 'salvador-ba' },
  { slug: 'personal-trainer-itaim-bibi', nome: 'Itaim Bibi', locucao: 'no Itaim Bibi', cidade: 'sao-paulo-sp' },
  { slug: 'personal-trainer-jardim-aquarius', nome: 'Jardim Aquarius', locucao: 'no Jardim Aquarius', cidade: 'sao-jose-dos-campos-sp' },
  { slug: 'personal-trainer-jardim-camburi', nome: 'Jardim Camburi', locucao: 'em Jardim Camburi', cidade: 'vitoria-es' },
  { slug: 'personal-trainer-jardim-da-penha', nome: 'Jardim da Penha', locucao: 'em Jardim da Penha', cidade: 'vitoria-es' },
  { slug: 'personal-trainer-jardim-das-americas', nome: 'Jardim das Américas', locucao: 'no Jardim das Américas', cidade: 'cuiaba-mt' },
  { slug: 'personal-trainer-jardim-das-flores', nome: 'Jardim das Flores', locucao: 'no Jardim das Flores', cidade: 'osasco-sp' },
  { slug: 'personal-trainer-jardim-dos-estados', nome: 'Jardim dos Estados', locucao: 'no Jardim dos Estados', cidade: 'campo-grande-ms' },
  { slug: 'personal-trainer-jardim-goias', nome: 'Jardim Goiás', locucao: 'no Jardim Goiás', cidade: 'goiania-go' },
  { slug: 'personal-trainer-jardins', nome: 'Jardins', locucao: 'nos Jardins', cidade: 'sao-paulo-sp' },
  { slug: 'personal-trainer-jatiuca', nome: 'Jatiúca', locucao: 'na Jatiúca', cidade: 'maceio-al' },
  { slug: 'personal-trainer-joquei', nome: 'Jóquei', locucao: 'no Jóquei', cidade: 'teresina-pi' },
  { slug: 'personal-trainer-jurere-internacional', nome: 'Jurerê Internacional', locucao: 'em Jurerê Internacional', cidade: 'florianopolis-sc' },
  { slug: 'personal-trainer-lago-sul', nome: 'Lago Sul', locucao: 'no Lago Sul', cidade: 'brasilia-df' },
  { slug: 'personal-trainer-lagoa-da-conceicao', nome: 'Lagoa da Conceição', locucao: 'na Lagoa da Conceição', cidade: 'florianopolis-sc' },
  { slug: 'personal-trainer-lagoa-nova', nome: 'Lagoa Nova', locucao: 'na Lagoa Nova', cidade: 'natal-rn' },
  { slug: 'personal-trainer-leblon', nome: 'Leblon', locucao: 'no Leblon', cidade: 'rio-de-janeiro-rj' },
  { slug: 'personal-trainer-lourdes', nome: 'Lourdes', locucao: 'no Lourdes', cidade: 'belo-horizonte-mg' },
  { slug: 'personal-trainer-manaira', nome: 'Manaíra', locucao: 'em Manaíra', cidade: 'joao-pessoa-pb' },
  { slug: 'personal-trainer-meireles', nome: 'Meireles', locucao: 'no Meireles', cidade: 'fortaleza-ce' },
  { slug: 'personal-trainer-miramar', nome: 'Miramar', locucao: 'no Miramar', cidade: 'joao-pessoa-pb' },
  { slug: 'personal-trainer-moema', nome: 'Moema', locucao: 'em Moema', cidade: 'sao-paulo-sp' },
  { slug: 'personal-trainer-moinhos-de-vento', nome: 'Moinhos de Vento', locucao: 'no Moinhos de Vento', cidade: 'porto-alegre-rs' },
  { slug: 'personal-trainer-morada-da-colina', nome: 'Morada da Colina', locucao: 'na Morada da Colina', cidade: 'uberlandia-mg' },
  { slug: 'personal-trainer-nazare-belem', nome: 'Nazaré', locucao: 'em Nazaré', cidade: 'belem-pa' },
  { slug: 'personal-trainer-perdizes', nome: 'Perdizes', locucao: 'em Perdizes', cidade: 'sao-paulo-sp' },
  { slug: 'personal-trainer-petropolis-natal', nome: 'Petrópolis', locucao: 'em Petrópolis', cidade: 'natal-rn' },
  { slug: 'personal-trainer-petropolis-porto-alegre', nome: 'Petrópolis', locucao: 'no Petrópolis', cidade: 'porto-alegre-rs' },
  { slug: 'personal-trainer-pinheiros', nome: 'Pinheiros', locucao: 'em Pinheiros', cidade: 'sao-paulo-sp' },
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
  { slug: 'personal-trainer-savassi', nome: 'Savassi', locucao: 'na Savassi', cidade: 'belo-horizonte-mg' },
  { slug: 'personal-trainer-setor-bueno', nome: 'Setor Bueno', locucao: 'no Setor Bueno', cidade: 'goiania-go' },
  { slug: 'personal-trainer-setor-marista', nome: 'Setor Marista', locucao: 'no Setor Marista', cidade: 'goiania-go' },
  { slug: 'personal-trainer-sion', nome: 'Sion', locucao: 'no Sion', cidade: 'belo-horizonte-mg' },
  { slug: 'personal-trainer-sudoeste', nome: 'Sudoeste', locucao: 'no Sudoeste', cidade: 'brasilia-df' },
  { slug: 'personal-trainer-tijuca', nome: 'Tijuca', locucao: 'na Tijuca', cidade: 'rio-de-janeiro-rj' },
  { slug: 'personal-trainer-tirol', nome: 'Tirol', locucao: 'no Tirol', cidade: 'natal-rn' },
  { slug: 'personal-trainer-tres-figueiras', nome: 'Três Figueiras', locucao: 'no Três Figueiras', cidade: 'porto-alegre-rs' },
  { slug: 'personal-trainer-umarizal', nome: 'Umarizal', locucao: 'no Umarizal', cidade: 'belem-pa' },
  { slug: 'personal-trainer-vieiralves', nome: 'Vieiralves', locucao: 'no Vieiralves', cidade: 'manaus-am' },
  { slug: 'personal-trainer-vila-galvao', nome: 'Vila Galvão', locucao: 'na Vila Galvão', cidade: 'guarulhos-sp' },
  { slug: 'personal-trainer-vila-madalena', nome: 'Vila Madalena', locucao: 'na Vila Madalena', cidade: 'sao-paulo-sp' },
  { slug: 'personal-trainer-vila-mariana', nome: 'Vila Mariana', locucao: 'na Vila Mariana', cidade: 'sao-paulo-sp' },
  { slug: 'personal-trainer-vila-nova-conceicao', nome: 'Vila Nova Conceição', locucao: 'na Vila Nova Conceição', cidade: 'sao-paulo-sp' },
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
