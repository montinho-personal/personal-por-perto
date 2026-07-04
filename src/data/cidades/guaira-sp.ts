import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'guaira-sp',
  nome: 'Guaíra',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'guairense',
  tipo: 'cidade',

  populacao: 39279,
  populacaoAno: 2022,
  idhm: 0.753,
  idhmClasse: 'alto',
  altitudeM: 517,

  resumoEconomico:
    'Guaíra fica no nordeste do estado de São Paulo, na divisa com Minas Gerais, banhada pelo Rio Grande. A economia é dominada pelo complexo sucroalcooleiro: cultivo de cana-de-açúcar, fabricação de açúcar e produção de álcool respondem pelas atividades que mais empregam no município, sustentadas pela Usina Mandu (grupo Tereos) e pela Usina Açucareira Guaíra (UAG), fundada nos anos 1970 e com mais de 1.700 empregados. O PIB municipal soma cerca de R$ 2,7 bilhões, com os serviços respondendo por 42% do valor adicionado, a indústria por 37,8%, a agropecuária por 10,9% e a administração pública por 9,3% — uma renda per capita acima da média da região de Ribeirão Preto e Barretos.',

  mercado:
    'O mercado de personal trainer em Guaíra tem uma base de renda relativamente alta para o porte da cidade, puxada pelo setor sucroalcooleiro, o que sustenta uma procura constante por treino de força, emagrecimento e condicionamento físico entre profissionais da indústria e do agronegócio. O Parque Maracá, com suas academias ao ar livre, é ponto de referência tanto para quem treina por conta própria quanto para atendimentos de personal trainer ao ar livre.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Vila Aparecida', 'Jardim Alvorada'],

  parques: [
    {
      nome: 'Parque Maracá',
      descricao:
        'Principal complexo de lazer e esporte da cidade, com campo de futebol, pista de skate, academias ao ar livre, pista de caminhada e ciclovia, área de pesca e quadras de areia onde acontecem torneios de vôlei de praia de relevância regional no interior paulista.',
    },
    {
      nome: 'Praça São Sebastião',
      descricao:
        'Marco fundacional da cidade, ao lado da Igreja Matriz, com um jardim japonês em homenagem aos imigrantes japoneses — lago ornamental, peixes e réplica do Monte Fuji — e espaço de caminhada no centro histórico.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária está concentrada no entorno do Parque Maracá, que já integra pista de caminhada e ciclovia, com obras de expansão da malha nessa área previstas pela prefeitura — ainda não forma uma rede cicloviária ampla cobrindo toda a cidade.',

  clima:
    'O clima é tropical com inverno seco (Köppen Aw), no domínio do bioma Cerrado, com temperatura média anual entre 24°C e 25°C. No verão as máximas podem chegar a 40°C, enquanto no inverno as mínimas caem a cerca de 6°C em noites mais frias.',
  climaTreino:
    'No verão, o calor intenso e a umidade pedem treino nos horários mais frescos do dia e reforço de hidratação. No inverno, o ar seco típico do Cerrado favorece o treino ao ar livre, mas as manhãs mais frias pedem aquecimento antes de correr ou pedalar.',

  mobilidade:
    'A cidade é servida pela SP-345 (Rodovia Fábio Talarico) e pela SP-425, com acesso a partir da capital paulista pela Rodovia Anhanguera (SP-330). Ribeirão Preto fica a cerca de 123 km e Franca a pouco mais de 100 km de distância.',

  corridas: [],
  culturaEsportiva:
    'A Associação Atlética Guairense, fundada em 1969, é o clube amador mais tradicional da cidade, com forte cultura de "futebol suíço" — modalidade amadora mais barata e acessível, praticada em campeonatos municipais. O vilarejo de Guaritá, incorporado à malha urbana, mantém um torneio de futebol tradicionalmente disputado no Natal. A colônia japonesa local se reflete na Kai-Kan, associação de artes marciais que também promove um festival de yakisoba, e as quadras de areia do Parque Maracá recebem torneios de vôlei de praia de projeção regional.',
  academias:
    'A oferta de academias e estúdios acompanha o porte médio da cidade e a renda puxada pelo setor sucroalcooleiro, com estruturas de musculação e treino funcional concentradas principalmente na região central, complementadas pelas academias ao ar livre do Parque Maracá.',

  destaquesFitness: [
    'Guaíra tem uma das maiores rendas per capita da região por causa do complexo sucroalcooleiro, com destaque para a Usina Mandu (Tereos) e a Usina Açucareira Guaíra.',
    'O Parque Maracá reúne pista de caminhada, ciclovia, academias ao ar livre e quadras de vôlei de praia de relevância regional.',
    'A Praça São Sebastião guarda um jardim japonês com réplica do Monte Fuji, herança da colônia japonesa local.',
    'A Associação Atlética Guairense, fundada em 1969, sustenta a tradição do futebol amador na cidade.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 140,
    mensalMin: 300,
    mensalMax: 800,
    onlineMin: 140,
    onlineMax: 380,
  },

  conclusao:
    'Sustentada pela renda do complexo sucroalcooleiro, Guaíra tem no Parque Maracá o coração da vida esportiva da cidade — de treino funcional a torneios de vôlei de praia — e na Associação Atlética Guairense a tradição do futebol amador. Um personal trainer ajuda a aproveitar essa estrutura com constância, adaptando o treino ao calor do verão e ao ar seco do inverno típicos do Cerrado paulista.',

  vizinhas: ['miguelopolis-sp', 'orlandia-sp', 'morro-agudo-sp', 'sao-joaquim-da-barra-sp', 'ipua-sp', 'barretos-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Guaíra', url: 'https://cidades.ibge.gov.br/brasil/sp/guaira/panorama' },
    { nome: 'Prefeitura Municipal de Guaíra/SP', url: 'https://www.guaira.sp.gov.br/' },
    { nome: 'Caravela — Economia de Guaíra/SP', url: 'https://www.caravela.info/en/regional/gua%C3%ADra---sp' },
  ],
  atualizadoEm: '2026-07-04',
};
