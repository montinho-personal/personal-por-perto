import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'escada-pe',
  nome: 'Escada',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'escadense',
  tipo: 'cidade',

  populacao: 59891,
  populacaoAno: 2022,
  idhm: 0.632,
  idhmClasse: 'médio',
  altitudeM: 109,

  resumoEconomico:
    'Na Zona da Mata Sul de Pernambuco, a cerca de 60 km do Recife e cortada pela BR-101, Escada ficou conhecida como "Princesa dos Canaviais" e "Terra dos Barões" pela força histórica dos engenhos e usinas de cana-de-açúcar. A economia ainda gira em torno da agroindústria sucroalcooleira e do setor industrial, herança da antiga Companhia Industrial Pirapama, que fez da cidade um polo têxtil da região no século XX. Comércio e serviços completam o quadro de uma cidade média do interior nordestino.',

  mercado:
    'Como cidade média da Mata Sul, Escada tem um mercado fitness em formação, concentrado em academias de musculação e treino funcional nos bairros centrais. A procura por personal trainers tende a crescer entre quem busca orientação para treinar com o calor úmido típico da região e aproveitar as praças e o entorno do rio Ipojuca como espaço de atividade ao ar livre.',

  bairrosNobres: ['Centro', 'Vila Operária', 'Frexeiras', 'Massauassú'],
  bairrosPopulares: ['Mameluco', 'Penedo', 'Cajá', 'Tiúma'],

  parques: [
    {
      nome: 'Margens do rio Ipojuca',
      descricao:
        'O rio Ipojuca corta a cidade em dois grandes blocos e é um dos cartões-postais de Escada, marcado pela Ponte da Atalaia; suas margens e as vias do entorno servem de percurso para caminhada e corrida na área urbana.',
    },
    {
      nome: 'Praça da Matriz (Centro)',
      descricao:
        'Coração histórico da cidade, junto à Igreja Matriz de Nossa Senhora da Apresentação, a praça central concentra a vida pública e é ponto de referência para caminhadas leves no Centro.',
    },
    {
      nome: 'Vila Operária',
      descricao:
        'Bairro nascido em torno da antiga indústria têxtil, com praça, capela e tecido urbano planejado; o conjunto e as ruas largas do entorno são usados por moradores para atividade física ao ar livre.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e restrita a poucos trechos urbanos; grande parte do pedal e da corrida acontece nas vias da cidade e nas estradas vicinais que ligam o núcleo urbano às áreas de engenho.',

  clima:
    'O clima é tropical quente e úmido, característico da Zona da Mata pernambucana, com temperaturas elevadas o ano inteiro. As chuvas se concentram no outono e no inverno (de março a agosto), enquanto a primavera e o início do verão tendem a ser mais secos e quentes.',
  climaTreino:
    'O calor somado à alta umidade aumenta a sensação térmica e dificulta a dissipação do suor, o que pede treinar no começo da manhã ou no fim da tarde, com hidratação reforçada; nos dias mais abafados, ambientes climatizados são a opção mais confortável e segura.',

  mobilidade:
    'Escada é cortada pela BR-101, principal eixo rodoviário do litoral nordestino, que liga a cidade ao Recife e às demais cidades da Mata Sul. O transporte urbano é feito por ônibus e vans intermunicipais, e a malha viária histórica guarda referências do antigo ramal ferroviário ligado à indústria açucareira e têxtil.',

  corridas: [
    {
      nome: 'Corridas de rua em Escada',
      descricao:
        'A cidade recebe provas de corrida de rua organizadas no calendário esportivo local, geralmente com largada nas primeiras horas da manhã para fugir do calor, reunindo corredores da Mata Sul.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o futebol, tradicional no interior pernambucano, o uso das praças e das margens do rio Ipojuca para caminhada e corrida, e provas de rua pontuais — tudo moldado pelo calor úmido característico da Zona da Mata.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior.',

  destaquesFitness: [
    'Princesa dos Canaviais: cidade histórica da cana-de-açúcar e dos engenhos da Mata Sul.',
    'Rio Ipojuca cortando a cidade, com margens e praças usadas para caminhada e corrida.',
    'Calor úmido da Zona da Mata, que exige planejamento de horário e hidratação no treino.',
    'Herança industrial têxtil e sucroalcooleira, com a BR-101 ligando a cidade ao Recife.',
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
    'Cidade histórica da cana e da indústria têxtil, cortada pelo rio Ipojuca e marcada pelo calor úmido da Mata Sul, Escada pede um treino adaptado ao clima e que aproveite as praças e o entorno do rio. Um personal trainer ajuda a organizar a rotina respeitando o calor, definindo os melhores horários e mantendo a constância ao longo do ano.',

  vizinhas: ['jaboatao-dos-guararapes-pe', 'vitoria-de-santo-antao-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Escada', url: 'https://cidades.ibge.gov.br/brasil/pe/escada/panorama' },
    { nome: 'Prefeitura Municipal da Escada', url: 'http://escada.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
