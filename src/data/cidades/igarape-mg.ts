import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'igarape-mg',
  nome: 'Igarapé',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'igarapeense',
  tipo: 'cidade',

  populacao: 45847,
  populacaoAno: 2022,
  idhm: 0.698,
  idhmClasse: 'médio',
  altitudeM: 841,

  resumoEconomico:
    'Igarapé fica no vetor oeste da Região Metropolitana de Belo Horizonte, entre Betim e Itaúna, cortada pela MG-050 e próxima à BR-381 (Fernão Dias). A economia se apoia em serviços e comércio, na indústria e mineração ligadas ao arranjo metropolitano — com destaque histórico para o envase de água mineral e a extração mineral da região — e na administração pública. A facilidade de acesso rodoviário impulsiona um desenvolvimento imobiliário constante, sobretudo condomínios horizontais que absorvem parte da migração vinda da capital e de Betim.',

  mercado:
    'Por ser uma cidade de porte médio inserida no colar metropolitano de BH, o mercado fitness de Igarapé combina academias locais e a proximidade com a rede de serviços de Betim e Contagem. A procura por personal trainers cresce entre moradores de condomínios e de bairros residenciais que buscam treino orientado perto de casa, evitando o deslocamento diário até a capital.',

  bairrosNobres: ['Centro', 'Cidade Jardim', 'São Sebastião', 'Nossa Senhora de Fátima'],
  bairrosPopulares: ['Resplendor', 'Três Poderes', 'Brejo', 'São Joaquim de Bicas'],

  parques: [
    {
      nome: 'Praça Matriz (Centro)',
      descricao:
        'Coração da cidade, no entorno da igreja matriz, a praça central é ponto de encontro e largada de eventos esportivos locais, além de espaço para caminhada leve no dia a dia.',
    },
    {
      nome: 'Entorno da Serra do Itatiaiuçu',
      descricao:
        'A serra que faz divisa com Mateus Leme e Itatiaiuçu, com a Pedra Grande em ponto elevado, funciona como área de mananciais e oferece estradas e trilhas para quem treina ao ar livre em meio ao relevo.',
    },
    {
      nome: 'Vias e condomínios residenciais',
      descricao:
        'Boa parte da atividade física acontece nas ruas dos bairros e nas áreas internas dos condomínios horizontais, muito procurados por quem migra da capital em busca de mais espaço para caminhar e correr.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos urbanos; grande parte do pedal e da corrida acontece nas vias dos bairros e nas ligações internas do município, com atenção ao tráfego nas rodovias.',

  clima:
    'O clima é tropical de altitude, típico do Centro de Minas em municípios acima de 800 metros, com verões chuvosos e invernos secos e mais amenos. As temperaturas costumam variar aproximadamente entre 13 °C e 29 °C ao longo do ano, com noites frias no inverno e tardes quentes no verão.',
  climaTreino:
    'A altitude em torno de 840 metros suaviza o calor e favorece o treino ao ar livre boa parte do ano. No verão chuvoso vale ajustar o horário para evitar as pancadas de fim de tarde; no inverno seco, a manhã pede aquecimento reforçado por causa das temperaturas mais baixas.',

  mobilidade:
    'Igarapé se conecta à capital e ao entorno pela MG-050 e pela proximidade com a BR-381 (Rodovia Fernão Dias), eixos de operação industrial e logística da região. O transporte metropolitano é feito por linhas de ônibus que ligam a cidade a Betim, principal polo de serviços vizinho, e daí ao restante da RMBH.',

  corridas: [
    {
      nome: 'Corrida Aniversário de Igarapé',
      descricao:
        'Prova de rua ligada às comemorações do município, com largada na Praça Matriz e percursos de diferentes distâncias, incluindo provas kids — o principal evento de corrida do calendário local.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva reúne a corrida de rua ligada ao aniversário da cidade, o uso das vias dos bairros e condomínios para caminhada e pedal, e a busca por academias próximas de casa, num município de perfil residencial dentro da Grande BH.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelos bairros centrais e residenciais, complementadas pela estrutura maior disponível na vizinha Betim.',

  destaquesFitness: [
    'Cidade do vetor oeste da Região Metropolitana de Belo Horizonte, entre Betim e Itaúna.',
    'Clima tropical de altitude, em torno de 840 metros, favorável ao treino ao ar livre.',
    'Corrida Aniversário de Igarapé, com largada na Praça Matriz, como principal evento local.',
    'Perfil residencial em expansão, com condomínios horizontais que absorvem a migração da capital.',
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
    'Cidade residencial em crescimento no colar metropolitano de BH, Igarapé combina clima de altitude agradável e vida de bairro com fácil acesso à estrutura de Betim. Um personal trainer ajuda a aproveitar as ruas, praças e condomínios da cidade, organizando a rotina perto de casa e mantendo a constância ao longo das estações.',

  vizinhas: ['betim-mg', 'contagem-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Igarapé', url: 'https://cidades.ibge.gov.br/brasil/mg/igarape/panorama' },
    { nome: 'Prefeitura de Igarapé', url: 'https://www.igarape.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
