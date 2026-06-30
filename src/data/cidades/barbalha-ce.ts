import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'barbalha-ce',
  nome: 'Barbalha',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'barbalhense',
  tipo: 'cidade',

  populacao: 75033,
  populacaoAno: 2022,
  idhm: 0.683,
  idhmClasse: 'médio',
  altitudeM: 414,

  resumoEconomico:
    'Situada no Pé de Serra da Chapada do Araripe, no coração da Região do Cariri cearense, Barbalha tem economia tradicionalmente ligada ao comércio e à agricultura. O ciclo da cana-de-açúcar marcou a história da cidade — registrado no casario preservado dos séculos XVIII e XIX do centro histórico — e ainda sobrevive em engenhos de sítios e fazendas da região. O turismo religioso, impulsionado pela Festa de Santo Antônio (Pau da Bandeira), e o turismo de natureza, em torno dos balneários de águas termais da serra, completam o perfil econômico do município.',

  mercado:
    'Como cidade média do interior nordestino integrada ao polo urbano do Cariri (com Crato e Juazeiro do Norte), Barbalha tem um mercado fitness em formação, concentrado em academias locais de musculação e treino funcional. A procura por personal trainers tende a vir de quem busca acompanhamento mais individualizado e de quem aproveita o clima e os espaços naturais do pé de serra para treinar ao ar livre.',

  bairrosNobres: ['Centro', 'Bairro do Rosário', 'Bairro de Fátima', 'Cirolândia'],
  bairrosPopulares: ['Malvinas', 'Alto da Alegria', 'Cruzeiro', 'Bela Vista'],

  parques: [
    {
      nome: 'Balneário do Caldas',
      descricao:
        'Conjunto de fontes e piscinas naturais de águas termais no distrito do Caldas, na encosta da Chapada do Araripe; além do banho relaxante, o entorno arborizado serve de cenário para caminhadas e atividade ao ar livre em meio à natureza.',
    },
    {
      nome: 'Floresta Nacional do Araripe (Pé de Serra)',
      descricao:
        'Unidade de conservação criada em 1946 que se estende pela chapada e alcança o território de Barbalha; suas trilhas e estradas de acesso, em meio à mata, oferecem percursos para quem treina ao ar livre na serra.',
    },
    {
      nome: 'Distrito do Arajara',
      descricao:
        'Localizado em cota elevada da serra, o distrito reúne balneários e áreas de lazer ligados às nascentes da chapada, ponto de passeio e de atividade física em ambiente natural mais fresco que a parte baixa da cidade.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e nas estradas que sobem o pé de serra rumo aos balneários.',

  clima:
    'O clima é tropical quente, do tipo semiárido com estação chuvosa concentrada de janeiro a abril (média anual em torno de 1.160 mm). A posição no pé de serra do Araripe ameniza um pouco o calor em relação ao sertão vizinho, e as partes altas da chapada são sensivelmente mais frescas — em dias de frente fria, a região chega a registrar temperaturas baixas para os padrões nordestinos.',
  climaTreino:
    'O calor e a estação seca prolongada pedem treino bem cedo ou no fim da tarde, com hidratação reforçada; a serra e os balneários oferecem um microclima mais ameno e arborizado, alternativa agradável para atividade ao ar livre, enquanto nos picos de calor os ambientes climatizados são a opção mais segura.',

  mobilidade:
    'Barbalha conecta-se à capital, Fortaleza, pela BR-122 (cerca de 500 km) e integra o eixo urbano do Cariri com Crato e Juazeiro do Norte. As rodovias estaduais CE-060, CE-293 e CE-386 cortam o município, e o transporte interno é feito por ônibus e vans, com forte fluxo entre as três cidades do polo.',

  corridas: [
    {
      nome: 'Cortejo do Pau da Bandeira',
      descricao:
        'Tradição central da Festa de Santo Antônio, registrada como Patrimônio Cultural do Brasil pelo IPHAN: centenas de carregadores percorrem cerca de sete quilômetros do Sítio Roncador até a Praça da Matriz com o mastro nos ombros, num esforço coletivo de grande intensidade física.',
    },
    {
      nome: 'Provas de rua do calendário do Cariri',
      descricao:
        'Barbalha participa do circuito de corridas de rua que circula entre as cidades do polo do Cariri, com provas que aproveitam o relevo do pé de serra e a malha urbana da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura a forte tradição religiosa e festiva — com o esforço coletivo do cortejo do Pau da Bandeira — ao uso dos balneários e das trilhas da serra para caminhada e atividade ao ar livre, tudo marcado pelo clima quente do pé de serra do Araripe.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior do Cariri.',

  destaquesFitness: [
    'Pé de serra da Chapada do Araripe, com balneários de águas termais e mata para treino ao ar livre.',
    'Microclima mais ameno e arborizado na serra, alternativa ao calor da parte baixa da cidade.',
    'Tradição do Pau da Bandeira, esforço coletivo que mobiliza a cidade na Festa de Santo Antônio.',
    'Integração ao polo do Cariri com Crato e Juazeiro do Norte, ampliando o circuito de eventos e corridas.',
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
    'No pé de serra do Araripe e no coração do Cariri, Barbalha combina calor, tradição e uma natureza generosa de balneários e trilhas. Um personal trainer ajuda a organizar a rotina respeitando o clima, escolhendo os melhores horários e aproveitando os espaços ao ar livre da serra para manter a constância ao longo do ano.',

  vizinhas: ['crato-ce', 'juazeiro-do-norte-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Barbalha', url: 'https://cidades.ibge.gov.br/brasil/ce/barbalha/panorama' },
    { nome: 'Prefeitura de Barbalha', url: 'https://barbalha.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
