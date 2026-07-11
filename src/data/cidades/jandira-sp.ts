import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'jandira-sp',
  nome: 'Jandira',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'jandirense',
  tipo: 'cidade',
  populacao: 118045,
  populacaoAno: 2022,
  idhm: 0.76,
  idhmClasse: 'alto',
  altitudeM: 720,

  resumoEconomico:
    'Jandira é um município compacto e densamente povoado da região oeste da Grande São Paulo, cortado pela Rodovia Presidente Castello Branco (SP-280). Sua economia tem forte base industrial ligada a materiais de construção e química de alto desempenho — a cidade é berço da operação da Saint-Gobain no Brasil e abriga o Polo Industrial Jandira II, além de empresas de logística e serviços. Apesar da intensa atividade fabril, a renda média do trabalhador local é mais modesta que a das vizinhas Barueri e Santana de Parnaíba, o que define um mercado de bairro, voltado ao público popular.',

  mercado:
    'O mercado de personal trainer em Jandira é de perfil popular e de proximidade, sustentado por uma população grande concentrada num território pequeno (cerca de 118 mil habitantes em apenas 17,5 km²). A procura se organiza em torno do Centro e dos bairros residenciais, com forte presença de academias de bairro e atendimento que leva o profissional até a casa ou a praça mais próxima do cliente. A integração diária com São Paulo pela CPTM também aproxima personais que circulam por toda a Linha 8-Diamante.',

  bairrosNobres: ['Centro', 'Jardim Sagrado Coração'],
  bairrosPopulares: ['Vila Eunice', 'Jardim Alvorada', 'Jardim Santa Cecília', 'Jardim das Acácias'],

  parques: [
    {
      nome: 'Praça do Figueirão',
      descricao:
        'Espaço público de referência para a prática de exercícios ao ar livre em Jandira, requalificado pela Prefeitura para receber uma academia ao ar livre com dez estações de equipamentos, duas delas adaptadas para cadeirantes. É um ponto natural para treinos funcionais e em grupo no espaço público.',
    },
    {
      nome: 'Área de Lazer do Trabalhador',
      descricao:
        'Polo esportivo municipal onde funciona a Secretaria de Esportes e onde são feitas as inscrições das atividades públicas. Concentra parte da estrutura de treino comunitário da cidade, com modalidades que vão de futsal e atletismo a ginástica e pilates.',
    },
  ],
  ciclovias:
    'Jandira não dispõe de uma malha cicloviária extensa típica de cidades maiores; o pedal e a caminhada acontecem sobretudo nas vias locais e nos espaços públicos requalificados, como a Praça do Figueirão e a Área de Lazer do Trabalhador. Por ser um município pequeno e plano em boa parte da mancha urbana, os deslocamentos curtos a pé ou de bicicleta são viáveis no dia a dia.',

  clima:
    'O clima de Jandira é o tropical de altitude da Grande São Paulo, com inverno mais seco e ameno e verão quente e chuvoso. A cidade fica a cerca de 720 metros de altitude, o que ajuda a moderar as temperaturas ao longo do ano.',
  climaTreino:
    'O verão chuvoso favorece treinos ao ar livre nas primeiras horas da manhã, antes das pancadas de chuva do fim de tarde. No inverno seco e fresco, a janela para correr e treinar nas praças se amplia, embora as academias cubram bem os dias instáveis.',

  mobilidade:
    'A Estação Jandira, da CPTM Linha 8-Diamante (operada pela ViaMobilidade), fica no Centro e conecta a cidade a Itapevi, Barueri, Carapicuíba, Osasco e à capital, num eixo que movimenta cerca de 500 mil passageiros por dia. No rodoviário, a Rodovia Presidente Castello Branco (SP-280) liga Jandira a São Paulo sem pedágio no trecho urbano, o que facilita a circulação de quem atende clientes em mais de uma cidade da região oeste.',

  corridas: [
    {
      nome: 'Provas de rua da região oeste (Linha 8-Diamante)',
      descricao:
        'Jandira não tem hoje uma corrida de rua de grande porte consolidada como marca própria; os corredores locais costumam disputar provas no eixo metropolitano oeste — em Barueri, Osasco, Carapicuíba e Itapevi — facilmente acessíveis pela CPTM e pela Castello Branco.',
    },
    {
      nome: 'Atividades de atletismo da Secretaria de Esportes',
      descricao:
        'O município oferece atletismo e condicionamento físico dentro do programa público de esportes, com inscrições na Área de Lazer do Trabalhador — uma porta de entrada para quem quer começar a correr de forma orientada na cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Jandira é comunitária e ancorada no programa público da Secretaria de Esportes, que mantém modalidades como futsal, futebol, ginástica artística, judô, vôlei, natação, hidroginástica, pilates, capoeira, xadrez, atletismo e condicionamento físico. O calendário de grandes eventos da cidade é puxado pela tradicional Festa do Peão de Jandira, realizada na Praça de Eventos, que mobiliza público e comércio local.',
  academias:
    'A oferta de treino em Jandira é dominada por academias de bairro e estúdios menores, distribuídos pelo Centro e pelas zonas residenciais. Esse perfil, somado à academia ao ar livre da Praça do Figueirão e às atividades públicas, abre espaço para o personal trainer que combina acompanhamento individual com treino em casa, na academia do cliente ou nas praças.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades no Centro e no Jardim Ouro Verde' },
    {
      nome: 'Academia ao ar livre da Praça do Figueirão',
      detalhe: 'gratuita, com dez estações de equipamentos — duas adaptadas para cadeirantes',
    },
    {
      nome: 'Área de Lazer do Trabalhador',
      detalhe: 'polo esportivo público, com inscrições para as modalidades da Secretaria de Esportes',
    },
  ],

  destaquesFitness: [
    'Cidade compacta e densa: cerca de 118 mil habitantes em apenas 17,5 km², o que aproxima cliente e profissional.',
    'Academia ao ar livre na Praça do Figueirão, com estações inclusivas para cadeirantes.',
    'Programa público de esportes amplo, da natação ao atletismo, gerido pela Área de Lazer do Trabalhador.',
    'Estação Jandira da CPTM Linha 8-Diamante no Centro, integrando o profissional a toda a região oeste.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 120,
    mensalMin: 280,
    mensalMax: 650,
    onlineMin: 130,
    onlineMax: 350,
  },

  conclusao:
    'Jandira é um mercado de personal trainer popular e de proximidade: território pequeno, população grande e forte vocação de bairro. Quem trabalha bem o atendimento próximo ao cliente — em casa, em academias de bairro ou na academia ao ar livre da Praça do Figueirão — e aproveita a integração da Linha 8-Diamante para circular pela região oeste encontra demanda constante e pouca distância entre um atendimento e outro.',

  faqsExtra: [
    {
      pergunta: 'Como costuma funcionar o atendimento de personal em Jandira?',
      resposta:
        'Pela escala da cidade — 118 mil habitantes em 17,5 km² —, o formato dominante é o atendimento de proximidade: o personal vai até a casa do cliente, treina com ele na academia de bairro ou monta sessões funcionais na Praça do Figueirão, que tem academia ao ar livre com dez estações (duas adaptadas para cadeirantes). Os deslocamentos internos são curtos, o que ajuda a encaixar horários mesmo em rotinas apertadas.',
    },
    {
      pergunta: 'Treinar com personal em Jandira cabe no bolso?',
      resposta:
        'Jandira tem uma das faixas de preço mais acessíveis da região oeste: aulas avulsas costumam ficar entre R$ 60 e R$ 120, e pacotes mensais diluem esse valor. Treinar em dupla ou em pequeno grupo na praça reduz ainda mais o custo por pessoa, e o acompanhamento online é a alternativa mais econômica para quem já treina sozinho e precisa principalmente de planilha e ajustes.',
    },
    {
      pergunta: 'Quem sente dores ou tem limitações encontra acompanhamento em Jandira?',
      resposta:
        'Encontra. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas e já conviveu com dores comuns da musculação na própria trajetória. Com base na região de Alphaville, a poucos quilômetros pela Castello Branco, o atendimento presencial em Jandira pode ser combinado conforme agenda e local, além do online. Treino adaptado não substitui tratamento: quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['itapevi-sp', 'barueri-sp', 'carapicuiba-sp', 'osasco-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Jandira', url: 'https://cidades.ibge.gov.br/brasil/sp/jandira/panorama' },
    { nome: 'Prefeitura de Jandira', url: 'https://www.jandira.sp.gov.br/' },
    { nome: 'Atlas Brasil — Jandira (SP)', url: 'http://www.atlasbrasil.org.br/perfil/municipio/3525003' },
  ],
  atualizadoEm: '2026-07-11',
};
