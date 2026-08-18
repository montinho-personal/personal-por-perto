import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'caninde-de-sao-francisco-se',
  nome: 'Canindé de São Francisco',
  uf: 'SE',
  estado: 'Sergipe',
  estadoSlug: 'sergipe',
  regiao: 'Nordeste',
  gentilico: 'canindense',
  tipo: 'cidade',

  populacao: 26834,
  populacaoAno: 2022,

  resumoEconomico:
    'No alto sertão sergipano, na divisa com Alagoas e Bahia, Canindé de São Francisco é a terra dos Cânions do Xingó — paredões de até 50 metros esculpidos pelo Velho Chico, entre os maiores conjuntos de cânions navegáveis do mundo. A Usina Hidrelétrica de Xingó, os sítios arqueológicos do Museu de Arqueologia de Xingó e as rotas do cangaço completam uma economia movida por energia, turismo e agricultura irrigada.',

  mercado:
    'O mercado de treino é enxuto e concentrado na sede, com o perfil das cidades-destino do sertão: trabalhadores da usina e da agricultura irrigada, condutores e barqueiros do turismo dos cânions e visitantes de fim de semana. O treino ao ar livre convive com o calor forte, e o acompanhamento online complementa a oferta local.',

  bairrosNobres: ['Centro', 'Vila do Xingó', 'Orla do São Francisco', 'Setor da Usina'],
  bairrosPopulares: ['Curituba', 'Assentamento Cuiabá', 'Povoados do Alto Sertão', 'Zona Rural'],

  parques: [
    {
      nome: 'Cânions do Xingó',
      descricao:
        'O lago da usina entre paredões de granito: passeios de catamarã e lancha, trilhas de mirante e o banho nas águas verdes — caminhada, sol forte e escadarias fazem parte do passeio.',
    },
    {
      nome: 'Rio São Francisco e prainhas',
      descricao:
        'As margens do Velho Chico abaixo da barragem, com prainhas fluviais, remo e travessias — a "academia aquática" do sertão.',
    },
    {
      nome: 'Trilhas do sertão e rotas do cangaço',
      descricao:
        'Caminhos de caatinga ligados à história de Lampião — a gruta de Angicos, onde o bando caiu, fica na região —, percorridos a pé e de veículo 4x4.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária urbana; as rodovias SE-230 e as estradas vicinais do entorno da usina são usadas por ciclistas nas horas frescas.',

  clima:
    'Semiárido quente e seco, com sol forte o ano inteiro, chuvas concentradas no outono-inverno e temperaturas que passam facilmente dos 35 °C.',
  climaTreino:
    'O treino ao ar livre é assunto de amanhecer e fim de tarde — no meio do dia, o sertão não negocia. Hidratação reforçada, protetor e roupas leves são regra; o lago e o rio ajudam no resfriamento pós-treino.',

  mobilidade:
    'A SE-230 liga Canindé a Aracaju (cerca de 200 km); pontes e balsas conectam às margens alagoana e baiana do São Francisco. Piranhas (AL), do outro lado do rio, fica a poucos minutos.',

  corridas: [
    {
      nome: 'Provas e eventos da região do Xingó',
      descricao:
        'O calendário local acompanha as festas da cidade e a temporada turística, com eventos esportivos e travessias ligadas ao rio.',
    },
  ],
  culturaEsportiva:
    'O esporte daqui tem cara de sertão e de rio: futebol de várzea, remo e natação no São Francisco, caminhada de caatinga com sol a pino sendo evitado por sabedoria local. O fluxo de turistas dos cânions mantém barqueiros e condutores em forma o ano todo.',
  academias:
    'A oferta é simples e concentrada na sede; parte de quem treina sério combina os espaços locais de musculação com consultoria online.',

  destaquesFitness: [
    'Cânions do Xingó: trilhas, escadarias e mirantes num dos cenários mais bonitos do país.',
    'Rio São Francisco para remo, natação e travessias.',
    'Rotas do cangaço pela caatinga como caminhada histórica.',
    'Clima seco: calor forte, mas sem a umidade que trava o treino no litoral.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 105,
    mensalMin: 240,
    mensalMax: 600,
    onlineMin: 130,
    onlineMax: 330,
  },

  conclusao:
    'Canindé treina entre o paredão e o rio: escadarias de mirante, remo no Velho Chico e caminhada de caatinga na terra de Lampião. Um personal trainer daqui constrói pernas, fôlego e resistência ao calor seco do sertão — presencial na sede ou online para quem vive do turismo do Xingó.',

  vizinhas: ['piranhas-al', 'delmiro-gouveia-al'],

  fontes: [
    { nome: 'IBGE Cidades — Canindé de São Francisco', url: 'https://cidades.ibge.gov.br/brasil/se/caninde-de-sao-francisco/panorama' },
    { nome: 'Prefeitura de Canindé de São Francisco', url: 'https://www.caninde.se.gov.br/' },
    { nome: 'Sergipe Trade Tour — Canindé', url: 'https://www.sergipetradetour.com.br/cidade/14' },
  ],
  atualizadoEm: '2026-08-18',
};
