import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'quirinopolis-go',
  nome: 'Quirinópolis',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'quirinopolino',
  tipo: 'cidade',

  populacao: 50540,
  populacaoAno: 2022,
  idhm: 0.740,
  idhmClasse: 'alto',
  altitudeM: 540,

  resumoEconomico:
    'No sudoeste goiano, às margens do Lago de São Simão (no rio Paranaíba), Quirinópolis teve a população multiplicada nas últimas décadas com a chegada de grandes usinas de açúcar e álcool. A economia é puxada pelo setor sucroalcooleiro e pelo agronegócio — cana-de-açúcar, soja, milho e pecuária —, somados aos serviços e ao comércio que abastecem a região. O lago formado pela usina hidrelétrica de São Simão acrescenta turismo náutico e veraneio à atividade econômica local.',

  mercado:
    'Como cidade média do interior goiano em expansão, Quirinópolis tem um mercado fitness em crescimento, sustentado por academias de musculação e estúdios de treino funcional voltados a uma população jovem ligada à indústria e ao agronegócio. A procura por personal trainers aparece entre quem busca acompanhamento individual, seja para musculação, condicionamento ou para aproveitar a orla do lago como espaço de atividade ao ar livre.',

  bairrosNobres: ['Centro', 'Setor Sul', 'Jardim Goiás', 'Setor Aeroporto'],
  bairrosPopulares: ['Vila Mariana', 'Setor Industrial', 'Jardim Paraíso', 'Vila Bandeirante'],

  parques: [
    {
      nome: 'Lago do Sol Poente',
      descricao:
        'Cartão-postal urbano de Quirinópolis, o lago e seu entorno reúnem calçadões e áreas de convivência usados para caminhada e corrida, e sediam eventos esportivos e festas populares ao longo do ano.',
    },
    {
      nome: 'Orla do Lago Dourado (Lago de São Simão)',
      descricao:
        'Formado pela usina hidrelétrica de São Simão, no rio Paranaíba, o lago é procurado para lazer, descanso e esportes náuticos, com ranchos de veraneio na orla e percursos à beira-d\'água para atividade ao ar livre.',
    },
    {
      nome: 'Praças centrais',
      descricao:
        'As praças do Centro e dos setores residenciais funcionam como pontos de encontro e de atividade física leve, com caminhada e treino ao ar livre em meio à arborização típica do Cerrado.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas avenidas da cidade e nos percursos próximos ao Lago do Sol Poente e à orla do lago de São Simão.',

  clima:
    'O clima é tropical de savana, típico do Cerrado, marcado por duas estações bem definidas: a chuvosa, quente e úmida (de outubro a abril), e a seca (de maio a setembro), quando a umidade do ar cai bastante e as tardes ficam quentes e secas. As temperaturas são elevadas na maior parte do ano.',
  climaTreino:
    'No período seco, a baixa umidade e o calor da tarde pedem treino no início da manhã ou no fim do dia, com hidratação reforçada; na estação chuvosa, as pancadas de fim de tarde podem exigir flexibilidade no horário ou o uso de ambientes cobertos.',

  mobilidade:
    'Quirinópolis fica a cerca de 280 km de Goiânia e se conecta à região por rodovias estaduais e federais que cruzam o sudoeste goiano, com o transporte urbano feito por ônibus. A Ferrovia Norte-Sul passa pela região e reforça a logística do escoamento da produção agrícola e sucroalcooleira.',

  corridas: [
    {
      nome: 'Corridas no Lago do Sol Poente',
      descricao:
        'O entorno do Lago do Sol Poente costuma sediar provas de corrida de rua com percursos de 5 km e 10 km, aproveitando os calçadões e a orla como cenário para o evento.',
    },
    {
      nome: 'Provas do calendário esportivo municipal',
      descricao:
        'A agenda esportiva da cidade inclui competições e eventos de rua ligados às festas populares e às datas comemorativas, reunindo corredores locais e da região.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso da orla dos lagos para caminhada, corrida e esportes náuticos com uma agenda de eventos que mistura provas de rua, festas populares e competições — tudo marcado pelo clima quente e seco do Cerrado.',
  academias:
    'A oferta é formada por academias locais de musculação e estúdios de treino funcional, distribuídos pelo Centro e pelos setores residenciais, com porte compatível com uma cidade média do interior goiano em crescimento.',

  destaquesFitness: [
    'Lago do Sol Poente como principal espaço urbano de caminhada, corrida e eventos esportivos.',
    'Orla do Lago de São Simão (Lago Dourado) para lazer, veraneio e esportes náuticos.',
    'Clima de Cerrado, quente e com estação seca marcada, que exige planejamento de horário e hidratação no treino.',
    'Economia sucroalcooleira e do agronegócio, com população jovem e mercado fitness em expansão.',
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
    'Cidade do sudoeste goiano em crescimento, cercada pelos lagos do Paranaíba e marcada pelo clima quente do Cerrado, Quirinópolis pede um treino adaptado ao calor e à estação seca, que aproveite a orla dos lagos como espaço ao ar livre. Um personal trainer ajuda a organizar a rotina, escolher os melhores horários e manter a constância ao longo do ano.',

  vizinhas: ['itumbiara-go', 'rio-verde-go'],

  fontes: [
    { nome: 'IBGE Cidades — Quirinópolis', url: 'https://cidades.ibge.gov.br/brasil/go/quirinopolis/panorama' },
    { nome: 'Prefeitura de Quirinópolis', url: 'https://quirinopolis.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
