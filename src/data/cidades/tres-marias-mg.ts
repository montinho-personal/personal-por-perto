import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tres-marias-mg',
  nome: 'Três Marias',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'trimariense',
  tipo: 'cidade',

  populacao: 28895,
  populacaoAno: 2022,
  idhm: 0.752,
  idhmClasse: 'alto',
  altitudeM: 570,

  resumoEconomico:
    'Na Região Central Mineira, às margens do rio São Francisco, Três Marias nasceu com a construção da usina hidrelétrica e da represa que levam o nome do município — o chamado "mar de Minas". A economia se apoia em três pilares: a geração de energia da UHE de Três Marias (barragem Bernardo Mascarenhas, da Cemig), a metalurgia do zinco (a cidade abriga uma das maiores unidades de refino de zinco do país, operada pela Nexa) e a atividade ligada ao lago — pesca esportiva, aquicultura, turismo e serviços. O reservatório, um dos maiores do Brasil, é o eixo em torno do qual gira boa parte da vida local.',

  mercado:
    'Como cidade de pequeno porte com forte presença industrial, o mercado fitness de Três Marias é enxuto e concentrado em academias locais de musculação e treino funcional. A rotina de trabalhadores da indústria e do setor de serviços, somada ao apelo do lago e da orla para atividades ao ar livre, cria espaço para o personal trainer que organiza treino orientado e ajuda a manter constância fora dos horários de expediente.',

  bairrosNobres: ['Centro', 'Bairro Comercial'],
  bairrosPopulares: ['Andrequicé', 'Vila do Contorno', 'Barreiro'],

  parques: [
    {
      nome: 'Terminal Turístico Praia Mar de Minas',
      descricao:
        'A "prainha" da cidade, uma praia de água doce formada no reservatório do rio São Francisco. Reúne quiosques, quadras de areia, playground e área de eventos junto à água — o espaço mais usado para caminhada, corrida leve e lazer ao ar livre à beira do lago.',
    },
    {
      nome: 'Orla da represa de Três Marias',
      descricao:
        'As margens do grande lago artificial oferecem trechos de calçada e estradas de acesso usados para caminhada e pedal, com o pôr do sol sobre a água como cenário. É também o palco de provas de corrida que percorrem a beira do reservatório.',
    },
    {
      nome: 'Entorno da UHE e do rio São Francisco',
      descricao:
        'A área da usina hidrelétrica e o curso do rio São Francisco a jusante da barragem compõem o cenário natural da cidade, ponto de referência para atividades ao ar livre e para a pesca esportiva que caracteriza a região.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta, típica de cidade pequena; grande parte do pedal e da corrida acontece nas vias urbanas, nos acessos ao lago e nos trechos junto à orla da represa.',

  clima:
    'O clima é tropical de savana (Aw), com verão chuvoso e inverno seco. O sol é intenso boa parte do ano, com temperaturas que costumam passar dos 30 °C nos dias mais quentes e umidade baixa no período de estiagem, entre maio e setembro. A proximidade do grande lago ameniza um pouco as tardes na orla.',
  climaTreino:
    'O calor e a baixa umidade no inverno seco pedem treino cedo ou no fim da tarde, com hidratação reforçada; a orla do lago é uma opção mais agradável nos horários de sol forte. Na estação chuvosa, ambientes cobertos ajudam a manter a rotina.',

  mobilidade:
    'Três Marias é cortada pela BR-040, eixo que liga o Rio de Janeiro a Brasília e conecta a cidade a Belo Horizonte (cerca de 260 km ao sul) e ao Norte de Minas. O deslocamento urbano é feito principalmente por carro, moto e a pé, com transporte rodoviário ligando o município às cidades vizinhas da Região Central.',

  corridas: [
    {
      nome: 'Circuito Mar de Minas',
      descricao:
        'Corrida de rua e de trilha realizada em Três Marias com percurso às margens da represa, saindo do Terminal Turístico Praia Mar de Minas; inclui provas de trilha à beira do lago e prova kids, reforçando a vocação da cidade para eventos esportivos junto à água.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva gira em torno do lago: pesca esportiva (a represa é um dos principais destinos de pesca de Minas), esportes náuticos, caminhada e corrida na orla e provas que percorrem as margens do reservatório, tudo marcado pelo clima quente e pelo cenário do "mar de Minas".',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, distribuídas pela área central e pelos bairros residenciais, com porte compatível com uma cidade pequena do interior mineiro.',

  destaquesFitness: [
    'O "mar de Minas": represa e Terminal Turístico Praia Mar de Minas como espaço de caminhada, corrida e lazer à beira da água.',
    'Represa de Três Marias entre os principais destinos de pesca esportiva de Minas Gerais.',
    'Clima tropical quente com inverno seco, que pede planejamento de horário e hidratação no treino.',
    'Cidade cortada pela BR-040, com economia de hidrelétrica (UHE de Três Marias) e metalurgia do zinco.',
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
    'Cidade quente e ribeirinha, moldada pela represa e pela indústria, Três Marias pede um treino adaptado ao clima e que aproveite a orla e o lago como cenário. Um personal trainer ajuda a definir os melhores horários, respeitar o calor e o inverno seco e manter a constância ao longo do ano, seja na academia ou às margens do "mar de Minas".',

  vizinhas: ['curvelo-mg', 'pirapora-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Três Marias', url: 'https://cidades.ibge.gov.br/brasil/mg/tres-marias/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Três Marias', url: 'https://www.tresmarias.mg.gov.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
