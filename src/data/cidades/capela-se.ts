import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'capela-se',
  nome: 'Capela',
  uf: 'SE',
  estado: 'Sergipe',
  estadoSlug: 'sergipe',
  regiao: 'Nordeste',
  gentilico: 'capelense',
  tipo: 'cidade',

  populacao: 31645,
  populacaoAno: 2022,
  idhm: 0.620,
  idhmClasse: 'médio',
  altitudeM: 162,

  resumoEconomico:
    'No leste sergipano, na microrregião do Cotinguiba, Capela tem na sua história a marca da cana-de-açúcar e do antigo parque de usinas e engenhos que deram fama e riqueza à cidade no século XX. Hoje a economia se apoia na agropecuária (com a cana ainda presente no campo), no comércio e nos serviços que atendem a população urbana e os povoados do entorno, além da movimentação ligada à tradicional festa do Bom Jesus dos Navegantes, que reúne romeiros e visitantes na cidade.',

  mercado:
    'Como cidade média do interior nordestino, Capela tem um mercado fitness enxuto, concentrado em academias de musculação e treino funcional na área central e nos bairros residenciais. A procura por personal trainers cresce aos poucos entre quem busca acompanhamento individualizado, seja para emagrecimento, condicionamento ou treino adaptado ao calor da região.',

  bairrosNobres: ['Centro', 'São José', 'Alto da Boa Vista'],
  bairrosPopulares: ['Cabo Mendonça', 'Bairro Vermelho', 'Olho d\'Água', 'Cohab'],

  parques: [
    {
      nome: 'Praça da Matriz (Centro)',
      descricao:
        'Coração da cidade, em torno da igreja matriz, é ponto de encontro e de caminhada leve no fim da tarde, especialmente movimentado no período da festa do Bom Jesus dos Navegantes.',
    },
    {
      nome: 'Praças e calçadões do Centro',
      descricao:
        'As praças e ruas centrais concentram o vaivém da cidade e servem de espaço para caminhada e atividade ao ar livre em horários mais amenos.',
    },
    {
      nome: 'Vias e estradas dos povoados',
      descricao:
        'O entorno rural, com povoados e estradas vicinais em meio a canaviais e áreas de pasto, oferece percursos planos usados por quem corre e pedala fora da malha urbana.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é modesta e típica de cidade do interior; boa parte do pedal e da corrida acontece nas vias urbanas e nas estradas que ligam a sede aos povoados.',

  clima:
    'O clima é tropical quente, característico do leste sergipano, com temperaturas elevadas durante boa parte do ano. As chuvas se concentram no outono e no inverno (entre abril e agosto), enquanto a primavera e o verão tendem a ser mais secos e quentes.',
  climaTreino:
    'Com o calor predominante, o ideal é treinar ao ar livre no começo da manhã ou no fim da tarde, com hidratação reforçada; nos horários e dias mais quentes, ambientes climatizados são a opção mais confortável e segura.',

  mobilidade:
    'A mobilidade de Capela é essencialmente rodoviária. A cidade se conecta à capital Aracaju e a municípios vizinhos por rodovias estaduais que cortam o leste sergipano, com transporte intermunicipal por ônibus e vans, enquanto o deslocamento interno é feito a pé, de bicicleta e por veículos particulares.',

  corridas: [
    {
      nome: 'Corridas de rua do calendário sergipano',
      descricao:
        'Capelenses participam de provas espalhadas pelo estado, como as corridas e meias-maratonas realizadas em Aracaju e em cidades do interior, que aquecem a cena do atletismo de rua em Sergipe.',
    },
    {
      nome: 'Atividades esportivas ligadas à festa',
      descricao:
        'O calendário da cidade, marcado pela festa do Bom Jesus dos Navegantes, costuma reunir eventos e atividades que mobilizam a comunidade em torno do esporte e do lazer.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o futebol e a caminhada nas praças com a forte identidade religiosa e festiva da cidade, que se volta para a romaria do Bom Jesus dos Navegantes — momento de maior movimento do ano em Capela.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pela área central e pelos bairros residenciais, com porte compatível com uma cidade média do interior.',

  destaquesFitness: [
    'Tradição da festa do Bom Jesus dos Navegantes, maior evento e marca cultural da cidade.',
    'Praças centrais usadas para caminhada e atividade ao ar livre nos horários mais amenos.',
    'Clima tropical quente, que pede planejamento de horário e hidratação no treino.',
    'Economia de raízes sucroalcooleiras, hoje ligada à agropecuária, ao comércio e aos serviços.',
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
    'Cidade quente e de forte tradição cultural no leste sergipano, Capela pede um treino adaptado ao clima e que aproveite as praças e as estradas do entorno. Um personal trainer ajuda a organizar a rotina respeitando o calor, escolhendo os melhores horários e mantendo a constância ao longo do ano.',

  vizinhas: ['aracaju-se', 'nossa-senhora-do-socorro-se'],

  fontes: [
    { nome: 'IBGE Cidades — Capela', url: 'https://cidades.ibge.gov.br/brasil/se/capela/panorama' },
    { nome: 'Prefeitura de Capela', url: 'https://www.capela.se.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
