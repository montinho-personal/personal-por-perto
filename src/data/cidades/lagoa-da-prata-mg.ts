import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'lagoa-da-prata-mg',
  nome: 'Lagoa da Prata',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'lago-pratense',
  tipo: 'cidade',

  populacao: 51412,
  populacaoAno: 2022,
  idhm: 0.732,
  idhmClasse: 'alto',
  altitudeM: 658,

  resumoEconomico:
    'No Centro-Oeste de Minas, na região do Alto São Francisco, Lagoa da Prata tem economia fortemente marcada pela agroindústria. O setor sucroalcooleiro é o carro-chefe, com a usina de açúcar e álcool cercada por extensos canaviais, ao lado de uma tradição consolidada em laticínios e pecuária leiteira. A indústria farmacêutica também tem peso local, e o comércio e os serviços atendem a população e o entorno rural. Fabricação de açúcar, administração pública e fabricação de laticínios estão entre as atividades que mais empregam na cidade.',

  mercado:
    'Por ser uma cidade de porte médio no interior de Minas, o mercado fitness de Lagoa da Prata é mais enxuto e concentrado em academias de bairro e estúdios locais. A procura por personal trainers cresce entre quem busca acompanhamento individualizado, seja para saúde e qualidade de vida, seja para complementar os treinos ao ar livre nas praças e vias da cidade.',

  bairrosNobres: ['Centro', 'Cidade Jardim', 'Santa Helena', 'São José'],
  bairrosPopulares: ['São Francisco', 'Sol Nascente', 'Buritis', 'Mangabeiras'],

  parques: [
    {
      nome: 'Rua do Lazer',
      descricao:
        'Espaço público voltado ao lazer e à convivência, usado para caminhada e atividades ao ar livre, e palco de eventos esportivos da cidade, como a corrida de rua local.',
    },
    {
      nome: 'Orla do rio São Francisco',
      descricao:
        'O rio São Francisco banha o município e rende à cidade o apelido de "praia de Minas"; suas margens e trechos ribeirinhos são procurados para lazer, canoagem e atividades em contato com a natureza.',
    },
    {
      nome: 'Praças e vias da área central',
      descricao:
        'As praças arborizadas e as ruas planas da parte central concentram boa parte das caminhadas e corridas do dia a dia, aproveitando o relevo suave da cidade.',
    },
  ],
  ciclovias:
    'A malha cicloviária é modesta e restrita a alguns trechos urbanos; grande parte do pedal e da corrida acontece nas vias da cidade e nas estradas vicinais que cortam a zona rural e os canaviais.',

  clima:
    'O clima é tropical de altitude, com duas estações bem definidas: um verão quente e chuvoso, de outubro a março, e um inverno frio e seco, de maio a setembro. A temperatura média anual fica em torno de 21,8 °C, com verões chegando perto dos 30 °C e noites de inverno que podem se aproximar dos 10 °C.',
  climaTreino:
    'O inverno seco favorece o treino ao ar livre, exigindo apenas atenção ao ar mais seco e às manhãs frias. No verão, o calor e as chuvas de fim de tarde pedem treinar cedo ou no começo da noite, com hidratação reforçada e um plano B em ambiente coberto nos dias de temporal.',

  mobilidade:
    'Lagoa da Prata liga-se a Belo Horizonte, a cerca de 210 a 240 km, por rotas que combinam a BR-262 (passando por Nova Serrana e Bom Despacho) e a MG-050 (via Divinópolis), além de acessos regionais como a MG-260. O transporte intermunicipal por ônibus é frequente, e a cidade tem tradição ferroviária ligada à sua origem às margens da linha férrea.',

  corridas: [
    {
      nome: 'Corrida Pharlab Bem-Estar',
      descricao:
        'Corrida de rua promovida pela indústria farmacêutica local Pharlab, com percursos de 5 km e 10 km, caminhada e corrida kids, realizada na Rua do Lazer para incentivar hábitos saudáveis na comunidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva une o uso das praças e da Rua do Lazer para caminhada e corrida, a ligação da cidade com o rio São Francisco e provas de rua que mobilizam a comunidade, num ambiente de cidade média do interior mineiro.',
  academias:
    'A oferta é formada principalmente por academias de musculação e estúdios de treino funcional espalhados pelos bairros centrais e residenciais, com porte compatível com uma cidade média do interior de Minas.',

  destaquesFitness: [
    'Cidade do Alto São Francisco, banhada pelo rio São Francisco e conhecida como a "praia de Minas".',
    'Clima tropical de altitude, com inverno seco favorável ao treino ao ar livre.',
    'Corrida Pharlab Bem-Estar, prova de rua tradicional realizada na Rua do Lazer.',
    'Economia agroindustrial forte, com setor sucroalcooleiro, laticínios e indústria farmacêutica.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade tranquila do interior mineiro, com relevo suave, clima de altitude e a presença marcante do rio São Francisco, Lagoa da Prata oferece boas condições para quem quer manter uma rotina de treino ao ar livre. Um personal trainer ajuda a definir os melhores horários ao longo das estações, aproveitar as praças e a Rua do Lazer e manter a constância com um acompanhamento próximo e individualizado.',

  vizinhas: ['bom-despacho-mg', 'divinopolis-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Lagoa da Prata', url: 'https://cidades.ibge.gov.br/brasil/mg/lagoa-da-prata/panorama' },
    { nome: 'Prefeitura de Lagoa da Prata', url: 'https://www.lagoadaprata.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
