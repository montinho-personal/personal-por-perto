import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-lourenco-do-sul-rs',
  nome: 'São Lourenço do Sul',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'lourenciano',
  tipo: 'cidade',

  populacao: 41989,
  populacaoAno: 2022,

  resumoEconomico:
    'Na Costa Doce gaúcha, às margens da Laguna dos Patos, São Lourenço do Sul é o balneário de água doce mais charmoso do sul do estado — praias calmas, orla urbanizada e um verão que multiplica a população. A herança pomerana e alemã marca a cultura e o campo, com agricultura familiar forte, e o turismo náutico e de veraneio completa uma economia que cresce, como aponta o próprio Censo, acima da média regional.',

  mercado:
    'O mercado de personal trainer em São Lourenço do Sul tem duas estações: no verão, a orla lota e o treino ao ar livre vira estilo de vida, com veranistas mantendo rotinas na praia; no inverno, o movimento migra para as academias do Centro e o vento da Laguna testa a constância de qualquer um. O perfil de cidade tranquila com qualidade de vida atrai aposentados ativos e famílias — públicos que valorizam o treino orientado e seguro.',

  bairrosNobres: ['Centro', 'Praia', 'Nova Esperança', 'Lomba'],
  bairrosPopulares: ['Barrinha', 'Navegantes', 'Santa Teresinha', 'Medianeira'],

  parques: [
    {
      nome: 'Orla da Laguna dos Patos',
      descricao:
        'O cartão-postal da Costa Doce: praias de água doce com orla urbanizada, calçadão e o vai e vem de caminhada, corrida e esportes náuticos.',
    },
    {
      nome: 'Praças e espaços públicos do Centro',
      descricao:
        'As praças centrais concentram a caminhada diária e a estrutura pública de exercício da rotina urbana.',
    },
    {
      nome: 'Interior pomerano e estradas rurais',
      descricao:
        'O campo lourenciano, de colonização pomerana, rende percursos de pedal entre lavouras e propriedades familiares.',
    },
  ],

  clima:
    'Clima subtropical da Costa Doce: verões agradáveis à beira da Laguna, invernos frios e ventosos com mínimas de um dígito e chuvas distribuídas o ano todo.',
  climaTreino:
    'O verão é o presente local — treino na orla a qualquer hora com a brisa da Laguna. No inverno, o vento frio pede agasalho técnico e aquecimento longo, com a academia coberta segurando o plano nos dias mais duros.',

  mobilidade:
    'A BR-116 liga São Lourenço do Sul a Pelotas e Camaquã, no eixo Porto Alegre–Rio Grande. O deslocamento urbano é tranquilo, com a bicicleta presente na rotina; no verão, o fluxo de veranistas movimenta a orla.',

  corridas: [
    {
      nome: 'Provas de verão da Costa Doce',
      descricao:
        'O calendário aproveita a temporada: corridas e eventos esportivos na orla movimentam o verão lourenciano, com provas regionais completando o ano.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva lourenciana gira em torno da Laguna: natação, vela, SUP e a caminhada na orla urbanizada, somadas ao pedal no interior pomerano e às academias do Centro. O verão transforma a cidade num polo ativo da Costa Doce, e a cultura de qualidade de vida sustenta o movimento o ano todo.',
  academias:
    'A oferta reúne academias de musculação e funcional no Centro, com bom custo-benefício, complementadas pela estrutura natural da orla.',
  academiasProximas: [
    { nome: 'Academias do Centro', detalhe: 'musculação e funcional para a rotina urbana' },
    { nome: 'Orla da Laguna dos Patos', detalhe: 'calçadão e praias de água doce para treino ao ar livre' },
    { nome: 'Praças com estrutura pública', detalhe: 'caminhada e exercícios gratuitos no Centro' },
  ],

  destaquesFitness: [
    'Orla da Laguna dos Patos: praia de água doce como pista de treino.',
    'Verão de balneário que multiplica a cena ativa da cidade.',
    'Interior pomerano com percursos de pedal entre lavouras.',
    'Perfil de qualidade de vida que atrai aposentados ativos e famílias.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 680,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'São Lourenço do Sul oferece o que pouca cidade gaúcha tem: praia de água doce na porta de casa e um ritmo que convida ao movimento. O desafio é o inverno ventoso da Laguna — e é aí que o treino orientado paga a conta, mantendo no frio a rotina que o verão constrói com facilidade.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em São Lourenço do Sul?',
      resposta:
        'Na orla da Laguna dos Patos — calçadão e praias de água doce que concentram caminhada, corrida e funcional —, nas academias do Centro, nas praças públicas e em casa. No verão, o treino na praia vira regra, incluindo veranistas que mantêm a rotina nas férias; no inverno, as academias assumem o protagonismo e a orla fica para os dias de tempo firme.',
    },
    {
      pergunta: 'Dá para manter o treino no inverno ventoso da Costa Doce?',
      resposta:
        'Dá — com estratégia. O vento frio da Laguna derruba a sensação térmica e exige agasalho técnico em camadas, aquecimento mais longo e horários espertos: o meio da tarde costuma ser a janela mais amiga. O plano B em academia coberta já nasce combinado para os dias de chuva e vento forte. Quem treina orientado atravessa junho a agosto sem interromper — e chega ao verão pronto para a orla, não recomeçando do zero.',
    },
    {
      pergunta: 'Há acompanhamento em São Lourenço do Sul para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para São Lourenço do Sul, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou a orla), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['pelotas-rs', 'camaqua-rs', 'rio-grande-rs'],

  fontes: [
    { nome: 'IBGE Cidades — São Lourenço do Sul', url: 'https://cidades.ibge.gov.br/brasil/rs/sao-lourenco-do-sul/panorama' },
    { nome: 'Prefeitura de São Lourenço do Sul', url: 'https://www.saolourencodosul.rs.gov.br/' },
  ],
  atualizadoEm: '2026-07-28',
};
