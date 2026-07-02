import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itanhandu-mg',
  nome: 'Itanhandu',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'itanhanduense',
  tipo: 'cidade',

  populacao: 15236,
  populacaoAno: 2022,
  idhm: 0.740,
  idhmClasse: 'alto',
  altitudeM: 898,

  resumoEconomico:
    'Itanhandu fica no Sul de Minas, na Serra da Mantiqueira, na microrregião de São Lourenço, fazendo divisa com Passa Quatro, Itamonte, Pouso Alto, São Sebastião do Rio Verde e Virgínia. A cidade integra o Circuito Turístico Terras Altas da Mantiqueira e o Caminho Velho da Estrada Real, com boa parte do território dentro da Área de Proteção Ambiental (APA) da Serra da Mantiqueira. A economia local tem forte base agropecuária, puxada pela pecuária leiteira — o município abriga uma das maiores granjas leiteiras da América Latina — e pela produção de queijos artesanais, reconhecidos com o selo ARTE e divulgados pelo roteiro dos "Caminhos do Queijo". Comércio diversificado, serviços e turismo rural e de natureza completam o perfil econômico da cidade.',

  mercado:
    'Por ser uma cidade pequena do interior mineiro, o mercado fitness de Itanhandu é enxuto, formado por academias locais de musculação e treino funcional. A procura por personal trainers tende a se concentrar em quem busca acompanhamento individualizado e em quem quer aproveitar o clima ameno de altitude e o entorno de serra para treinar ao ar livre, seja na rotina do dia a dia, seja durante visitas ligadas ao turismo rural e gastronômico da região.',

  bairrosNobres: ['Centro', 'Jardim Alzira', 'Vila Carneiro', 'Bairro do Jardim'],
  bairrosPopulares: ['João Paulo II', 'Portal', 'Sítio Paecara'],

  parques: [
    {
      nome: 'Praça Prefeito Amador Guedes',
      descricao:
        'Praça central da cidade, em frente à Igreja Matriz, com formato estilizado de violão e um chafariz na parte que representa a boca do instrumento. É o principal ponto de encontro do Centro e serve de referência para caminhadas curtas pelas ruas ao redor.',
    },
    {
      nome: 'Cachoeira da Usina',
      descricao:
        'Cachoeira e corredeira formadas junto a uma antiga usina no Bairro do Jardim, a cerca de 14 km do Centro, usada para lazer e ecoturismo — um dos pontos naturais mais procurados para quem quer sair da rotina de treino indoor.',
    },
    {
      nome: 'Trilhas e poços do rio Verde',
      descricao:
        'O relevo da Serra da Mantiqueira, com altitudes que vão de cerca de 900 a mais de 2.600 metros no entorno do município, abre trilhas como Barrocada, Condado e Estiva, além de poços naturais no rio Verde, como o Pinicão e o Poço do Cipó, usados para caminhada, cavalgada, mountain bike e banho.',
    },
  ],
  ciclovias:
    'A cidade não tem estrutura cicloviária ampla; o pedal urbano acontece nas ruas do Centro e bairros próximos, enquanto o ciclismo mais esportivo se desloca para as estradas de terra e serra da região, incluindo trechos da Rota CRER das Águas, que liga Itanhandu a Passa Quatro, Itamonte, São Sebastião do Rio Verde, Pouso Alto e São Lourenço.',

  clima:
    'O clima é tropical de altitude, com verões quentes e chuvosos e invernos frios e secos. Janeiro, o mês mais quente, tem média de 22,2 °C, com máximas que passam de 35 °C; julho, o mês mais frio, tem média de 15,3 °C e mínimas que podem chegar a cerca de 3 °C. O período de abril a setembro é o mais seco, e fevereiro costuma ser o mês mais chuvoso.',
  climaTreino:
    'O clima ameno de altitude favorece o treino ao ar livre em boa parte do ano, com manhãs frescas mesmo no verão. Nas madrugadas e primeiras horas do inverno, o frio intenso pede aquecimento mais cuidadoso e roupas adequadas; nos dias mais quentes do verão, vale evitar o sol forte do meio-dia e se hidratar bem.',

  mobilidade:
    'O acesso rodoviário principal é feito pela BR-354, que corta o Sul de Minas e liga a região a Três Corações, São Lourenço e Caxambu, com entroncamento para a MG-158, estrada que passa por Itanhandu e Passa Quatro até a divisa com São Paulo, em Cruzeiro. O deslocamento interno é feito majoritariamente a pé e de carro, já que a cidade é pequena, e o transporte intermunicipal conta com uma rodoviária no Centro.',

  corridas: [
    {
      nome: 'Terras Altas Trail Run',
      descricao:
        'Prova de trail running em montanha realizada na vizinha Itamonte, com provas de 7 a 55 km, que reúne corredores de toda a Serra da Mantiqueira, incluindo o Circuito Turístico Terras Altas da Mantiqueira do qual Itanhandu faz parte.',
    },
    {
      nome: 'Rota CRER das Águas',
      descricao:
        'Roteiro de mountain bike que passa por Itanhandu e liga pequenas cidades da Mantiqueira — Passa Quatro, Itamonte, São Sebastião do Rio Verde, Pouso Alto e São Lourenço — em meio a paisagens de serra e cachoeiras.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local está ligada ao uso das trilhas, estradas de serra e poços do rio Verde para caminhada, cavalgada, mountain bike e banho, além de atividades como montanhismo e passeios de jipe favorecidas pelo relevo acidentado da APA da Serra da Mantiqueira. Eventos de trail run e rotas cicloturísticas realizados na região reforçam essa vocação para o esporte ao ar livre em meio à natureza.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, de porte compatível com uma cidade pequena do interior, concentradas no Centro e em bairros próximos.',

  destaquesFitness: [
    'Clima tropical de altitude, com verões amenos e invernos frios, favorável ao treino ao ar livre na maior parte do ano.',
    'Cachoeiras e poços naturais do rio Verde, como a Cachoeira da Usina, o Pinicão e o Poço do Cipó, para atividade ao ar livre e lazer.',
    'Trilhas da Serra da Mantiqueira e a Rota CRER das Águas, usadas para caminhada, cavalgada e mountain bike.',
    'Economia de base agropecuária e turismo rural, ligada à pecuária leiteira e aos queijos artesanais com selo ARTE.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 115,
    onlineMax: 330,
  },

  conclusao:
    'Pequena e cercada pela Serra da Mantiqueira, Itanhandu combina clima ameno de altitude, cachoeiras e trilhas com uma economia rural que molda o ritmo da cidade. Um personal trainer ajuda a aproveitar esse cenário natural na rotina de treino, adaptando os horários às estações do ano e mantendo a constância mesmo em uma cidade pequena com oferta fitness enxuta.',

  vizinhas: ['itajuba-mg', 'sao-lourenco-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Itanhandu', url: 'https://cidades.ibge.gov.br/brasil/mg/itanhandu/panorama' },
    { nome: 'Prefeitura de Itanhandu', url: 'https://www.itanhandu.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
