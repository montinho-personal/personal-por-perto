import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itacoatiara-am', nome: 'Itacoatiara', uf: 'AM', estado: 'Amazonas', estadoSlug: 'amazonas', regiao: 'Norte', gentilico: 'itacoatiarense', tipo: 'cidade',
  populacao: 103598, populacaoAno: 2022, idhm: 0.644, idhmClasse: 'médio', altitudeM: 28,

  resumoEconomico:
    'Às margens do Rio Amazonas e a cerca de 270 km de Manaus pela rodovia AM-010, Itacoatiara é a terceira maior cidade do Amazonas e um polo do Médio Amazonas. Sua economia se apoia no porto graneleiro — importante terminal de exportação de soja e grãos do Centro-Oeste pelo chamado Arco Norte —, além do comércio, dos serviços, da administração pública e das atividades de pesca, agricultura e extrativismo da região.',

  mercado:
    'O mercado fitness de Itacoatiara é local e de porte médio, formado por academias de bairro e por personal trainers que atendem em estúdios, condomínios e domicílio. O calor e a umidade equatorial concentram os treinos no início da manhã e no fim da tarde, e o atendimento online complementa quem busca acompanhamento mais flexível no interior amazonense.',

  bairrosNobres: ['Centro', 'São Cristóvão', 'Jardim Adriana'],
  bairrosPopulares: ['Jauari', 'Colônia', 'Mamoud Amed', 'Iraci'],

  parques: [
    {
      nome: 'Orla de Itacoatiara',
      descricao:
        'Beira-rio às margens do Amazonas, construída em 2008, que funciona como principal ponto de caminhada, corrida leve e encontros ao entardecer, com vista para o rio — o cartão-postal da cidade para quem treina ao ar livre.',
    },
    {
      nome: 'Praia da Ponta das Pedras',
      descricao:
        'A praia fluvial mais conhecida da cidade, a poucos minutos do Centro, com quiosques e estrutura de banho durante o verão amazônico, quando o rio baixa e revela faixas de areia branca.',
    },
    {
      nome: 'Balneário do Jordão',
      descricao:
        'Área de lazer natural no km 25 da rodovia AM-010, com banho de rio, restaurante e estrutura familiar — opção de descanso e atividade ao ar livre para moradores e visitantes.',
    },
  ],
  ciclovias:
    'A cidade é compacta e relativamente plana, o que favorece deslocamentos a pé e de bicicleta, mas a infraestrutura de ciclovias é limitada — o uso da bike acontece principalmente nas vias do Centro e na orla.',

  clima:
    'O clima é equatorial, quente e úmido o ano inteiro, com temperaturas médias em torno de 27 °C, umidade alta e chuvas abundantes, típicas da Amazônia.',
  climaTreino:
    'O calor e a umidade altos pedem treinos no amanhecer ou após o pôr do sol, com hidratação reforçada. As chuvas frequentes tornam útil ter uma alternativa coberta para manter a regularidade ao longo do ano.',

  mobilidade:
    'Itacoatiara é uma das poucas cidades do interior do Amazonas com ligação rodoviária a Manaus, pela AM-010 (cerca de 270 km). O transporte fluvial pelo Rio Amazonas segue essencial, e a cidade abriga um porto graneleiro de exportação de grãos. No perímetro urbano os deslocamentos são curtos, feitos a pé, de bicicleta, moto e mototáxi — o que reforça o valor de treinar perto de casa ou no formato online.',

  corridas: [
    {
      nome: 'Corrida de Rua Tiradentes',
      descricao:
        'Prova realizada em abril, organizada por iniciativa local com percursos de 5 km e 10 km, que incentiva a prática esportiva e reúne atletas da cidade e da região.',
    },
    {
      nome: 'Corrida Pedestre de Aniversário de Itacoatiara',
      descricao:
        'Corrida comemorativa pela fundação do município, com largada na Avenida Parque, integrando o calendário esportivo e cívico da cidade.',
    },
    {
      nome: 'Circuito Sesc de Corridas — Etapa Itacoatiara',
      descricao:
        'Etapa local do circuito do Sesc Amazonas, com percurso urbano de 5 km e prova infantil, largada e chegada na unidade do Sesc.',
    },
  ],
  culturaEsportiva:
    'A vida ativa em Itacoatiara gira em torno da orla do Amazonas, das praias fluviais no verão amazônico e das corridas de rua que marcam o calendário da cidade. Caminhada e corrida leve ao entardecer são hábitos comuns, sempre respeitando o calor equatorial.',
  academias:
    'A cobertura é dada por academias locais de bairro e por estúdios menores, complementados por personal trainers que atendem em casa e em condomínios. A orla, as praias e os espaços públicos funcionam como extensão ao ar livre nos horários mais frescos.',

  academiasProximas: [
    { nome: 'Estrutura pública da Orla', detalhe: 'espaço de caminhada e treino com vista para o Amazonas' },
    { nome: 'Academias locais', detalhe: 'musculação no Centro e bairros próximos' },
  ],

  destaquesFitness: [
    'Orla do Rio Amazonas como principal ponto de caminhada e corrida leve, ao amanhecer e ao entardecer.',
    'Praias fluviais como a Ponta das Pedras e balneários na AM-010, que ampliam as opções ao ar livre no verão amazônico.',
    'Calendário de corridas de rua com a Tiradentes, a corrida de aniversário da cidade e o Circuito Sesc.',
    'Academias de bairro e atendimento domiciliar, com apoio do online numa cidade média do interior amazonense.',
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
    'Terceira maior cidade do Amazonas e polo do Médio Amazonas, Itacoatiara combina vida ribeirinha, clima equatorial e um calendário esportivo crescente. Treinar bem por aqui é saber ajustar horários, intensidade e hidratação ao calor — e é aí que um personal trainer faz diferença. Com a orla do Amazonas, praias fluviais, academias de bairro e o acompanhamento online, a cidade oferece caminhos para quem quer evoluir com método mesmo longe dos grandes centros.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Itacoatiara?',
      resposta:
        'A Orla de Itacoatiara é o coração do treino ao ar livre — caminhada, corrida e funcional com o Amazonas ao lado, principalmente no amanhecer e no fim de tarde. As academias de musculação do Centro atendem quem prefere estrutura coberta (essencial no calor da tarde), e o atendimento em casa cresce pela praticidade. Nos fins de semana, a Ponta das Pedras e o Balneário do Jordão viram extensão do treino.',
    },
    {
      pergunta: 'Como treinar no calor amazônico de Itacoatiara?',
      resposta:
        'Umidade alta e calor o ano inteiro mudam a lógica do treino: as sessões ao ar livre funcionam no amanhecer ou depois do pôr do sol, a hidratação começa horas antes, e a intensidade sobe devagar — o corpo gasta mais para se resfriar na Amazônia. No meio do dia, musculação em ambiente coberto é o caminho. Um personal calibra volume e horário à estação: no inverno amazônico, das chuvas, o plano B indoor já fica combinado.',
    },
    {
      pergunta: 'Há acompanhamento em Itacoatiara para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Itacoatiara, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou a orla), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['manaus-am', 'parintins-am'],

  fontes: [
    { nome: 'IBGE Cidades — Itacoatiara', url: 'https://cidades.ibge.gov.br/brasil/am/itacoatiara/panorama' },
    { nome: 'Prefeitura de Itacoatiara', url: 'https://itacoatiara.am.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-28',
};
