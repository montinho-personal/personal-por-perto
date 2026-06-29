import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'vacaria-rs',
  nome: 'Vacaria',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'vacariense',
  tipo: 'cidade',

  populacao: 64197,
  populacaoAno: 2022,
  idhm: 0.721,
  idhmClasse: 'alto',
  altitudeM: 971,

  resumoEconomico:
    'Maior cidade dos Campos de Cima da Serra e conhecida como "Porteira do Rio Grande", Vacaria é o principal polo de fruticultura de clima temperado do estado, com a maçã liderando a economia local — a cidade concentra grande parte da produção e da capacidade de armazenagem e processamento do fruto no Rio Grande do Sul. A agropecuária e a tradição campeira completam o perfil econômico, coroado pelo Rodeio Crioulo Internacional e pela Festa Nacional da Maçã.',

  mercado:
    'A oferta de personal trainers acompanha uma cidade média do interior gaúcho: redes de musculação, academias de bairro e estúdios atendem a demanda, com o treino indoor ganhando força nos meses de frio intenso. Há também espaços públicos para caminhada e corrida e uma comunidade de praticantes de atividade ao ar livre que aproveita os meses mais amenos.',

  bairrosNobres: ['Centro', 'Glória', 'Altos da Glória', 'Leão XIII'],
  bairrosPopulares: ['Aeroporto', 'Diamantina', 'Cristina', 'Barcellos'],

  parques: [
    {
      nome: 'Parque do Aeroporto',
      descricao:
        'Ampla área de lazer e eventos que sedia a Festa Nacional da Maçã e o Festival de Balonismo, com espaço aberto para caminhada e atividades ao ar livre.',
    },
    {
      nome: 'Parque Linear da Ferrovia',
      descricao:
        'Extensa área de lazer junto à Casa do Povo (uma das obras de Oscar Niemeyer no estado), com percurso linear que convida à caminhada e à corrida leve no centro da cidade.',
    },
    {
      nome: 'Praça Daltro Filho',
      descricao:
        'Praça central em frente à Catedral de Pedra Nossa Senhora da Oliveira, ponto de encontro tradicional e boa referência para caminhadas urbanas.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária ainda é limitada e concentrada na área central; muitos ciclistas pedalam por vias compartilhadas e pelos acessos rurais que ligam a cidade às propriedades de fruticultura.',

  clima:
    'O clima é subtropical de altitude (a cidade fica a cerca de 970 m), com inverno rigoroso entre maio e agosto: máximas em torno de 16 °C e mínimas que frequentemente caem abaixo de zero, com geadas fortes e neve ocasional, marca registrada dos Campos de Cima da Serra.',
  climaTreino:
    'No inverno, o treino ao ar livre exige bom agasalho e atenção a geada e piso escorregadio, e as manhãs muito frias favorecem a academia ou horários de sol mais forte. Na primavera e no verão, o clima ameno e seco da serra é excelente para correr e caminhar.',

  mobilidade:
    'Vacaria é um importante entroncamento rodoviário: fica no cruzamento da BR-116 (sentido Porto Alegre–Caxias do Sul ao norte e Lages/SC ao sul) com a BR-285, que liga a serra ao planalto e ao oeste do estado. O deslocamento urbano é majoritariamente por carro e ônibus, em uma cidade de distâncias curtas.',

  corridas: [
    {
      nome: 'Corridas de rua no calendário local',
      descricao:
        'A cidade recebe provas de corrida e caminhada ao longo do ano, frequentemente associadas a datas comemorativas e a eventos da agenda municipal, reunindo a comunidade de corredores da região.',
    },
    {
      nome: 'Eventos esportivos ligados à agenda da cidade',
      descricao:
        'A movimentada agenda de Vacaria — do Rodeio Crioulo Internacional à Festa Nacional da Maçã — costuma agregar atividades físicas e recreativas que aquecem a cena esportiva local.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Vacaria é fortemente marcada pela tradição campeira: o Rodeio Crioulo Internacional, uma das maiores manifestações da tradição gaúcha, é o grande símbolo da cidade. Ao lado disso, crescem a musculação e as atividades ao ar livre, impulsionadas pela paisagem de campos e pelo clima de serra.',
  academias:
    'A rede reúne academias de musculação, estúdios e espaços de treino funcional, com a procura aumentando no inverno, quando o frio intenso torna o treino indoor a opção mais confortável.',

  destaquesFitness: [
    'Parque Linear da Ferrovia e Parque do Aeroporto: principais espaços públicos para caminhada e corrida.',
    'Clima de altitude: primavera e verão ótimos para treino ao ar livre; inverno rigoroso favorece a academia.',
    'Forte tradição campeira, com o Rodeio Crioulo Internacional como maior evento da cidade.',
    'Cidade compacta, com distâncias curtas que facilitam a rotina de treino.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 120,
    onlineMax: 330,
  },

  conclusao:
    'Capital da maçã e porteira da serra gaúcha, Vacaria combina vida do interior, tradição campeira e um clima de altitude que pede planejamento para treinar o ano todo. Um personal trainer ajuda a manter a constância — alternando o treino ao ar livre nos meses amenos com a academia nos dias de frio intenso, geada e neve ocasional.',

  vizinhas: ['caxias-do-sul-rs', 'bento-goncalves-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Vacaria', url: 'https://cidades.ibge.gov.br/brasil/rs/vacaria/panorama' },
    { nome: 'Prefeitura de Vacaria', url: 'https://www.vacaria.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
