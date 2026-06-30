import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'coxim-ms',
  nome: 'Coxim',
  uf: 'MS',
  estado: 'Mato Grosso do Sul',
  estadoSlug: 'mato-grosso-do-sul',
  regiao: 'Centro-Oeste',
  gentilico: 'coxinense',
  tipo: 'cidade',

  populacao: 32151,
  populacaoAno: 2022,
  idhm: 0.700,
  idhmClasse: 'alto',
  altitudeM: 285,

  resumoEconomico:
    'Conhecida como a Capital do Peixe, Coxim fica no norte de Mato Grosso do Sul, às margens do rio Taquari e na confluência com o rio Coxim, em uma das áreas de entrada do Pantanal. A economia se apoia na pecuária, no comércio regional, no setor público e no turismo de pesca, que atrai pescadores de todo o país para as águas da região. A posição às margens da BR-163, eixo que liga o norte ao sul do país, reforça o papel da cidade como polo regional de serviços, saúde e ensino.',

  mercado:
    'Por ser uma cidade média do interior, o mercado fitness de Coxim é mais enxuto que o dos grandes centros do estado, concentrado em academias locais de musculação e treino funcional. A procura por personal trainers tende a crescer entre quem busca treino orientado para lidar com o calor da região e para aproveitar a orla do rio e os espaços públicos como ambiente de atividade ao ar livre.',

  bairrosNobres: ['Centro', 'Jardim Aeroporto', 'Vila Beira Rio', 'Altos do São Pedro'],
  bairrosPopulares: ['Piracema', 'Flávio Garcia', 'Vila São Paulo', 'Nova Coxim'],

  parques: [
    {
      nome: 'Orla do Rio Taquari',
      descricao:
        'A beira do rio Taquari é o cartão-postal da cidade e o espaço mais usado para caminhada, corrida e treino ao ar livre, reunindo moradores e turistas atraídos pela pesca.',
    },
    {
      nome: 'Balneário Municipal',
      descricao:
        'Área de lazer junto à água que serve de ponto de encontro para atividades físicas, treinões de corrida e eventos esportivos da cidade.',
    },
    {
      nome: 'Entorno do Pantanal e do Cerrado',
      descricao:
        'Coxim é uma das portas de entrada do Pantanal e fica em zona de transição com o Cerrado; estradas vicinais e áreas naturais do entorno oferecem percursos para quem treina ao ar livre.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e ao longo da orla do rio Taquari.',

  clima:
    'O clima é tropical, muito quente, e Coxim figura com frequência entre as cidades mais quentes do Brasil — com registros que já passaram dos 42 °C em ondas de calor. O ano se divide entre uma estação chuvosa e abafada (de novembro a março) e uma estação seca mais amena no inverno, quando pode ocorrer a friagem, queda brusca de temperatura típica da região.',
  climaTreino:
    'O calor intenso exige treinar bem cedo ou no fim da tarde, com hidratação reforçada; nos picos de calor, ambientes climatizados são a opção mais segura, e o período de seca tende a ser mais favorável ao treino ao ar livre.',

  mobilidade:
    'Coxim está às margens da BR-163, principal eixo rodoviário que cruza o estado ligando o norte ao sul do país e escoando a produção agropecuária do Centro-Oeste. O transporte urbano é feito por ônibus e a rodovia concentra o fluxo de cargas e de passagem que movimenta o comércio e os serviços da cidade.',

  corridas: [
    {
      nome: 'Corrida de Rua de Coxim',
      descricao:
        'Prova de corrida de rua realizada na cidade, que reúne corredores locais e da região em percursos pela área urbana.',
    },
    {
      nome: 'Corrida de Rua AABB Coxim',
      descricao:
        'Evento de corrida de rua promovido na cidade, voltado tanto a corredores experientes quanto a iniciantes.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso da orla do rio Taquari e do balneário para caminhada e corrida, a forte tradição da pesca esportiva — interrompida no período da piracema — e provas de rua que movimentam a comunidade local, tudo moldado pelo calor característico da região.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelos bairros centrais e residenciais, com porte compatível com uma cidade média do interior.',

  destaquesFitness: [
    'Capital do Peixe: cidade às margens do rio Taquari, com forte tradição de pesca e a orla como espaço de treino ao ar livre.',
    'Calor extremo, que exige planejamento de horário e hidratação no treino.',
    'Posição estratégica na BR-163, eixo que liga o norte ao sul do país.',
    'Uma das portas de entrada do Pantanal, em zona de transição com o Cerrado.',
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
    'Cidade quente, ribeirinha e cercada pela natureza do Pantanal e do Cerrado, Coxim pede um treino adaptado ao clima e que aproveite a orla do rio Taquari e os espaços públicos. Um personal trainer ajuda a organizar a rotina respeitando o calor, definindo os melhores horários e mantendo a constância ao longo das estações de chuva e seca.',

  vizinhas: ['campo-grande-ms', 'aquidauana-ms'],

  fontes: [
    { nome: 'IBGE Cidades — Coxim', url: 'https://cidades.ibge.gov.br/brasil/ms/coxim/panorama' },
    { nome: 'Prefeitura de Coxim', url: 'https://coxim.ms.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
