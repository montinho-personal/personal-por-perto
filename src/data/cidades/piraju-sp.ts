import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'piraju-sp',
  nome: 'Piraju',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'pirajuense',
  tipo: 'cidade',

  populacao: 29027,
  populacaoAno: 2022,

  resumoEconomico:
    'Estância turística desde 2002, Piraju é a cidade paulista do Rio Paranapanema: são mais de 90 km do rio cortando o município, com corredeiras, represas e cachoeiras que fizeram do lugar um polo de canoagem, caiaque, rafting e pesca esportiva. A economia combina o turismo de rio, a agroindústria regional e o comércio de polo do Alto Paranapanema.',

  mercado:
    'O mercado de treino tem o tamanho de uma estância de 29 mil habitantes: academias no centro e nos bairros, demanda de quem trabalha no turismo e um público de esporte de rio — remadores, pescadores esportivos e visitantes de fim de semana — que busca condicionamento específico. O acompanhamento online complementa a oferta local.',

  bairrosNobres: ['Centro', 'Jardim Ana Maria', 'Jardim Europa', 'Vila Santo Antônio'],
  bairrosPopulares: ['Vila Campos', 'Jardim Tropical', 'Jardim Jurumirim', 'Vila Maria'],

  parques: [
    {
      nome: 'Rio Paranapanema e corredeiras',
      descricao:
        'O cartão-postal e a academia aquática da cidade: canoagem, caiaque, rafting nas corredeiras e remo nas águas calmas das represas — com o pôr do sol no rio como recompensa.',
    },
    {
      nome: 'Cachoeiras e trilhas da estância',
      descricao:
        'Quedas d\'água e caminhos de mata no entorno do Paranapanema, com trilhas de acesso que combinam caminhada e banho.',
    },
    {
      nome: 'Orla e praças do centro',
      descricao:
        'A área central junto ao rio concentra caminhada, corrida leve e o movimento do fim de tarde.',
    },
  ],
  ciclovias:
    'A malha cicloviária urbana é limitada; as estradas vicinais do entorno do rio e as rodovias regionais são usadas por ciclistas e cicloturistas.',

  clima:
    'Subtropical, com verões quentes e úmidos e invernos amenos — as manhãs de inverno pedem agasalho, e o rio suaviza as tardes de verão.',
  climaTreino:
    'Dá para treinar ao ar livre o ano quase todo: manhãs frescas no inverno, começo do dia e fim de tarde no verão. Para os esportes de rio, o segundo semestre seco oferece as águas mais previsíveis.',

  mobilidade:
    'A SP-287 e a SP-249 ligam Piraju a Ourinhos, Avaré e à região; a cidade funciona como ponto de parada natural entre o sudoeste paulista e o norte do Paraná.',

  corridas: [
    {
      nome: 'Provas e travessias da estância',
      descricao:
        'O calendário local combina corridas de rua ligadas às festas da cidade e eventos de canoagem e travessias no Paranapanema.',
    },
  ],
  culturaEsportiva:
    'O rio dita o esporte: canoagem e caiaque com tradição de décadas, rafting nas corredeiras, pesca esportiva e natação em água aberta. Em terra, futebol de bairro, corrida na orla e o fluxo de visitantes ativos da estância completam a cena.',
  academias:
    'A oferta reúne academias de musculação no centro e estúdios menores; remadores e atletas de rio costumam combinar o treino de força local com a técnica na água.',

  destaquesFitness: [
    'Mais de 90 km do Paranapanema no município: canoagem, rafting e remo na porta de casa.',
    'Estância turística com trilhas e cachoeiras para treino ao ar livre.',
    'Clima ameno que permite treinar na rua o ano quase todo.',
    'Polo natural para preparo físico de esportes de remo e pesca esportiva.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 650,
    onlineMin: 130,
    onlineMax: 340,
  },

  conclusao:
    'Piraju treina com o Paranapanema de parceiro: remo nas águas calmas, corredeira para os corajosos e trilha de cachoeira para todo mundo. Um personal trainer daqui constrói a base de força e fôlego que o rio cobra — e que a academia sozinha não entrega.',

  vizinhas: ['ourinhos-sp', 'avare-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Piraju', url: 'https://cidades.ibge.gov.br/brasil/sp/piraju/panorama' },
    { nome: 'Prefeitura da Estância Turística de Piraju', url: 'https://www.estanciadepiraju.sp.gov.br/' },
    { nome: 'Turismo SP — Piraju', url: 'https://plataforma.turismo.sp.gov.br/conheca-o-municipio-turistico-de-piraju' },
  ],
  atualizadoEm: '2026-08-18',
};
