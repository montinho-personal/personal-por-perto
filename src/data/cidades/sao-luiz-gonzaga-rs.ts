import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-luiz-gonzaga-rs',
  nome: 'São Luiz Gonzaga',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'são-luizense',
  tipo: 'cidade',

  populacao: 34752,
  populacaoAno: 2022,
  idhm: 0.741,
  idhmClasse: 'alto',
  altitudeM: 231,

  resumoEconomico:
    'Conhecida como a Capital das Missões e declarada por lei estadual a Capital Estadual da Música Missioneira, São Luiz Gonzaga nasceu em 1687 como uma das reduções jesuítico-guarani dos Sete Povos das Missões, integrando a Republiqueta Jesuítico-Guarani até a expulsão promovida após o Tratado de Madrid, em 1756. A economia atual gira em torno do agronegócio, com lavouras de soja, trigo e milho e pecuária de corte, além da suinocultura e do comércio atacadista de grãos, que figuram entre as maiores atividades empregadoras do município. O setor de serviços responde pela maior fatia do PIB local, seguido de perto pela agropecuária.',

  mercado:
    'Como polo regional de porte médio na região das Missões, São Luiz Gonzaga tem um mercado fitness concentrado em academias locais de musculação e treino funcional, sem grandes redes nacionais. A demanda por personal trainers cresce entre quem busca acompanhamento individualizado e entre o público que aderiu ao movimento local de corrida de rua, que ganhou força nos últimos anos com etapas sazonais na cidade.',

  bairrosNobres: ['Centro', 'Agrícola', 'Jauri'],
  bairrosPopulares: ['Presidente Vargas', 'Vila Paz', 'Duque de Caxias'],

  parques: [
    {
      nome: 'Praça da Matriz',
      descricao:
        'Praça central em frente à Igreja Matriz, é o principal ponto de convívio da cidade e serve de referência para caminhadas no coração do Centro.',
    },
    {
      nome: 'Pista San Marcos',
      descricao:
        'Estrutura pública inaugurada em 1987 com espaço de atletismo e quadras de futebol, basquete e vôlei, aberta à comunidade para corrida e caminhada.',
    },
    {
      nome: 'Sítio Arqueológico de São Lourenço Mártir',
      descricao:
        'Ruínas de uma redução jesuítica tombada como patrimônio histórico nacional, no distrito de São Lourenço das Missões, a cerca de 30 km do centro — atrativo histórico que também motiva caminhadas ao ar livre pela região.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas ruas do Centro e no entorno da Pista San Marcos.',

  clima:
    'O clima é subtropical úmido (Cfa), com verões quentes e invernos frios marcados por geadas — em julho as mínimas costumam ficar na casa dos 3 °C a 9 °C — e chuvas bem distribuídas ao longo do ano.',
  climaTreino:
    'O frio e as geadas do inverno favorecem o treino indoor em horários mais quentes do dia, enquanto o verão exige hidratação reforçada e treinos ao ar livre no início da manhã ou fim de tarde. Um personal ajuda a ajustar a rotina às variações de temperatura entre as estações.',

  mobilidade:
    'A BR-285 corta o município, ligando São Luiz Gonzaga a Ijuí e Passo Fundo a leste e a São Borja, na fronteira com a Argentina, a oeste; Santo Ângelo fica a cerca de 78 km. A cidade conta com estação rodoviária e o transporte urbano é feito por ônibus, com deslocamentos também comuns de carro e bicicleta.',

  corridas: [
    {
      nome: 'Circuito das Estações de Corrida de Rua',
      descricao:
        'Etapas sazonais (Verão, Outono, Inverno e Primavera) organizadas na cidade pelo movimento local "Corre São Luiz", com provas de 2,5 km e 5 km e corrida infantil; a etapa Inverno de 2025 reuniu 306 inscritos, recorde de público para uma corrida de rua no município.',
    },
    {
      nome: 'Circuito Sesc de Corridas',
      descricao:
        'São Luiz Gonzaga recebe uma etapa deste circuito regional do Sesc-RS, que passa por municípios do Sul do país com provas infantis de 1 km e 2 km e provas adultas de 3 km, 5 km e 10 km.',
    },
  ],
  culturaEsportiva:
    'A cidade vive um momento de crescimento da corrida de rua, puxado pelo movimento "Corre São Luiz" e pelas etapas sazonais que atraem corredores da região das Missões, somado à estrutura da Pista San Marcos para atletismo e à tradição gaúcha de eventos no Parque de Exposições do Sindicato Rural.',
  academias:
    'A oferta reúne academias locais como a Academia Movimento e a Berti Fit, além da unidade do Sesc São Luiz Gonzaga, concentradas no Centro e no bairro Jauri, com serviços de musculação, treino funcional, natação e aulas coletivas.',

  destaquesFitness: [
    'Capital Estadual da Música Missioneira e polo turístico das Missões Jesuíticas, com o Sítio Arqueológico de São Lourenço Mártir a 30 km do centro.',
    'Pista San Marcos, estrutura pública de atletismo aberta à comunidade para corrida e caminhada desde 1987.',
    'Movimento local "Corre São Luiz" e o Circuito das Estações de Corrida de Rua, com etapas que já reuniram mais de 300 inscritos.',
    'Economia agroindustrial (soja, trigo, milho e suinocultura) e clima subtropical de inverno frio, que pede planejamento de horário no treino.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 320,
  },

  conclusao:
    'Histórica e ligada à herança jesuítico-guarani das Missões, São Luiz Gonzaga combina economia agroindustrial, tradição gaúcha e um movimento crescente de corrida de rua. Um personal trainer ajuda o morador a manter a constância no treino ao longo do inverno frio e do verão quente, aproveitando espaços como a Pista San Marcos e o Centro da cidade.',

  vizinhas: ['santo-angelo-rs', 'sao-borja-rs', 'ijui-rs'],

  fontes: [
    { nome: 'IBGE Cidades — São Luiz Gonzaga', url: 'https://cidades.ibge.gov.br/brasil/rs/sao-luiz-gonzaga/panorama' },
    { nome: 'Prefeitura de São Luiz Gonzaga', url: 'https://www.saoluizgonzaga.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
