import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'vitoria-de-santo-antao-pe',
  nome: 'Vitória de Santo Antão',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'vitoriense',
  tipo: 'cidade',

  populacao: 134084,
  populacaoAno: 2022,
  idhm: 0.64,
  idhmClasse: 'médio',
  altitudeM: 162,

  resumoEconomico:
    'Principal cidade da Zona da Mata Centro pernambucana, a cerca de 50 km a oeste do Recife pela BR-232, Vitória de Santo Antão é um polo industrial de alimentos e bebidas no corredor que liga a capital ao Agreste. Abriga a fábrica da Pitú (instalada às margens da BR-232 desde os anos 1970), maior exportadora de cachaça do país, além de unidades dos setores de alimentos, plásticos e logística. A herança canavieira dos engenhos da Mata convive com a economia industrial e de serviços que se consolidou ao longo da rodovia.',

  mercado:
    'Cidade média industrial encravada na transição entre a Mata e o Agreste, Vitória de Santo Antão tem mercado fitness puxado pela renda industrial e pelo centro comercial que atende municípios vizinhos. A oferta combina redes e academias de bairro com forte demanda por atendimento domiciliar e em condomínios. Por ser quente o ano inteiro, o treino em ambiente climatizado e o acompanhamento de personal ganham apelo, com janelas ao ar livre concentradas no início da manhã e no fim da tarde.',

  bairrosNobres: ['Centro', 'Livramento', 'Bela Vista', 'Matriz'],
  bairrosPopulares: ['Cajá', 'Redenção', 'Caiçara', 'Pinga Fogo'],

  parques: [
    {
      nome: 'Praça do Leão Coroado (antiga Estação Ferroviária)',
      descricao:
        'Espaço requalificado no Centro, usado para caminhada, lazer e ponto de largada de eventos esportivos da cidade.',
    },
    {
      nome: 'Academias da saúde',
      descricao:
        'Equipamentos públicos de ginástica ao ar livre distribuídos por praças e bairros, de acesso livre.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada e concentrada em trechos do Centro e em vias internas; boa parte do pedal de lazer e treino ocorre em ruas de bairro e em estradas vicinais rumo à zona rural e aos engenhos da Mata.',

  clima:
    'O clima é tropical quente do tipo As, na transição entre o semiárido e a Zona da Mata, com calor o ano todo, estação chuvosa no outono/inverno e tempo mais seco no verão. A altitude de cerca de 162 m suaviza pouco as temperaturas.',
  climaTreino:
    'Faz calor durante quase todo o ano, com sol forte ao meio-dia — as melhores janelas para treino ao ar livre são o início da manhã e o fim da tarde. Hidratação e proteção solar são essenciais, e o ambiente climatizado é a opção mais confortável nas horas quentes.',

  mobilidade:
    'O acesso se dá pela BR-232, principal eixo que liga o Recife (a cerca de 50 km) ao Agreste, passando dentro do município. Não há metrô (o Metrô do Recife atende apenas a região metropolitana da capital); os deslocamentos são feitos por carro, moto e transporte rodoviário.',

  corridas: [
    {
      nome: 'Corrida de Santo Antão (Movimenta Vitória)',
      descricao:
        'Prova de rua em alusão ao padroeiro Santo Antão, com percursos de corrida (cerca de 6 km) e caminhada (cerca de 3,5 km), reunindo atletas amadores e famílias no Centro.',
    },
    {
      nome: 'Corridas e desafios locais',
      descricao:
        'Calendário com provas e eventos de obstáculos promovidos por organizadores e pela prefeitura, com largadas no Centro da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é movida por corridas de rua ligadas a datas religiosas e cívicas, futebol amador e treino funcional, com forte adesão das famílias aos eventos no Centro. As celebrações dos 400 anos de povoamento reforçaram o calendário de mobilizações esportivas recentes.',
  academias:
    'A oferta reúne redes e academias de bairro com musculação, funcional e aulas coletivas, complementadas por estúdios de menor porte e pela estrutura pública das academias da saúde. O atendimento domiciliar e em condomínios é uma alternativa relevante diante do calor constante.',

  destaquesFitness: [
    'Polo industrial da BR-232 (Pitú e alimentos/bebidas) sustenta a renda e o mercado fitness local.',
    'Corrida de Santo Antão como evento-âncora de rua na cidade.',
    'Calor o ano todo favorece treino climatizado e janelas de manhã e fim de tarde ao ar livre.',
    'Demanda aquecida por personal domiciliar e em condomínios.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 680,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade média e industrial a oeste do Recife, Vitória de Santo Antão combina a economia da BR-232 com um cotidiano de calor o ano inteiro. Um personal trainer ajuda a treinar com método e segurança nesse clima, ajustando horários e ambiente — seja em academia climatizada, em casa ou nas praças e ruas do Centro.',

  vizinhas: ['recife-pe', 'caruaru-pe', 'jaboatao-dos-guararapes-pe'],

  fontes: [
    {
      nome: 'IBGE Cidades — Vitória de Santo Antão',
      url: 'https://cidades.ibge.gov.br/brasil/pe/vitoria-de-santo-antao/panorama',
    },
    {
      nome: 'Prefeitura da Vitória de Santo Antão',
      url: 'https://www.prefeituradavitoria.pe.gov.br/',
    },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
