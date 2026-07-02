import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tiradentes-mg',
  nome: 'Tiradentes',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'tiradentino',
  tipo: 'cidade',

  populacao: 7744,
  populacaoAno: 2022,
  idhm: 0.740,
  idhmClasse: 'alto',
  altitudeM: 927,

  resumoEconomico:
    'Tiradentes é um dos conjuntos coloniais mais bem preservados de Minas Gerais, erguido a partir do ciclo do ouro do século XVIII aos pés da Serra de São José e tombado como patrimônio histórico nacional. A economia atual gira quase toda em torno do turismo histórico e gastronômico: pousadas, restaurantes, ateliês de artesanato e comércio especializado respondem pela maior parte dos empregos e do PIB municipal, no qual os serviços têm participação amplamente majoritária. O calendário de festivais reforça esse perfil, com destaque para a Mostra de Cinema de Tiradentes, em janeiro, e o Festival de Cultura e Gastronomia de Tiradentes, em agosto, um dos maiores encontros gastronômicos do país. As igrejas barrocas do centro, entre elas a Matriz de Santo Antônio, com talha atribuída a Aleijadinho, e o distrito de Bichinho, conhecido pelo artesanato e pelos alambiques de cachaça, completam o quadro de uma cidade pequena com forte vocação cultural.',

  mercado:
    'Com pouco mais de 7 mil habitantes, Tiradentes tem um mercado fitness bastante enxuto, típico de cidade histórica de porte reduzido: a oferta de academias é pequena e concentrada, voltada principalmente aos moradores. O fluxo constante de visitantes hospedados em pousadas, muitas de padrão elevado, sustenta parte da procura por personal trainer, sobretudo entre quem busca acompanhamento individualizado, treino funcional ou orientação para caminhadas e trilhas na Serra de São José durante a estadia.',

  bairrosNobres: ['Centro Histórico', 'Quinta Imperial', 'Terra dos Cuiabás', 'Parque dos Bandeirantes'],
  bairrosPopulares: ['Cascalho', 'Alto da Torre', 'Mococa', 'Várzea de Baixo'],

  parques: [
    {
      nome: 'Serra de São José',
      descricao:
        'Visível de qualquer ponto da cidade, reúne trilhas como a do Carteiro — que segue por trecho de calçamento colonial conhecido como Calçada dos Escravos até um mirante e cachoeira — e a travessia completa de cerca de 12 km entre vegetação de Mata Atlântica e Cerrado, procurada para trekking e corrida de montanha.',
    },
    {
      nome: 'Trilha do Mangue e Trilha da Biquinha',
      descricao:
        'Percursos de acesso mais fácil na Serra de São José, com trecho de mata densa e úmida até cachoeiras próximas à área urbana, opção mais curta para caminhada e contato com a natureza.',
    },
    {
      nome: 'Largo das Forras',
      descricao:
        'Principal praça da cidade, ponto de partida das charretes turísticas e espaço plano de convívio no meio do centro histórico, usado para caminhada leve entre o casario colonial.',
    },
  ],
  ciclovias:
    'Não há infraestrutura cicloviária dedicada; as ruas de pedra do centro histórico dificultam o pedal urbano, e o cicloturismo crescente na região acontece mais nas estradas rurais em direção a Bichinho e ao entorno da Serra de São José.',

  clima:
    'O clima é tropical de altitude, com os cerca de 927 metros acima do nível do mar suavizando as temperaturas: dias amenos e noites com friozinho característico de serra ao longo do ano, mais acentuado no inverno seco, enquanto o verão concentra as chuvas.',
  climaTreino:
    'O clima ameno de altitude favorece o treino ao ar livre na maior parte do ano, com boas condições tanto pela manhã quanto no fim da tarde. Nas noites e madrugadas de inverno o frio pede aquecimento mais cuidadoso, e nas tardes chuvosas de verão vale ter alternativa coberta para não perder a rotina.',

  mobilidade:
    'O acesso principal se dá pela BR-265, a cerca de 12 a 16 km de São João del-Rei, complementada por vias estaduais que ligam a cidade à BR-383. Ônibus intermunicipais fazem o trajeto entre as duas cidades em cerca de 20 a 30 minutos. Um dos maiores atrativos de mobilidade é o trem turístico Maria-Fumaça, da antiga Estrada de Ferro Oeste de Minas, uma das ferrovias mais antigas do país em operação, que liga a Praça da Estação de Tiradentes à estação de São João del-Rei, com circulação normalmente de sexta a domingo e paradas eventuais por causa de chuvas. Dentro do centro histórico, marcado por ladeiras e calçamento de pedra, o deslocamento é sobretudo a pé, complementado pelas tradicionais charretes turísticas que partem do Largo das Forras — atualmente em processo de substituição por veículos elétricos, iniciado em 2026.',

  corridas: [
    {
      nome: 'Corrida de Tiradentes',
      descricao:
        'Prova de rua tradicional da cidade, com percursos de 5 km e 10 km, já em edições que ultrapassam a vigésima realização.',
    },
    {
      nome: 'Cross Country de Tiradentes',
      descricao:
        'Evento com percurso de 10 km de corrida e 7,5 km de caminhada, em edições anuais que já passam da décima, aproveitando o terreno do entorno da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina o trekking e a corrida de montanha nas trilhas da Serra de São José com tradições como as cavalgadas, que resgatam usos e costumes da região, além de provas de rua e cross country que fazem parte do calendário anual. As charretes, hoje em transição para modelos elétricos, seguem como atividade leve e turística ligada à identidade da cidade.',
  academias:
    'A oferta de academias é pequena, compatível com uma cidade histórica de porte reduzido, concentrada no centro e em bairros próximos, com espaço também para atendimento particular e ao ar livre voltado a moradores e visitantes de temporada.',

  destaquesFitness: [
    'Trilhas da Serra de São José, como a do Carteiro e a travessia de 12 km, para trekking e corrida de montanha.',
    'Maria-Fumaça da antiga Estrada de Ferro Oeste de Minas, ligando Tiradentes a São João del-Rei desde 1881.',
    'Centro histórico tombado, de ruas e ladeiras de pedra, ideal para caminhada com atenção ao piso irregular.',
    'Clima ameno de altitude (cerca de 927 m), favorável ao treino ao ar livre na maior parte do ano.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 750,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Pequena, histórica e emoldurada pela Serra de São José, Tiradentes oferece um cenário raro para treinar entre trilhas de montanha e ruas de pedra do período colonial. Um personal trainer ajuda a aproveitar esse ambiente com segurança, adaptando o treino ao piso irregular do centro, ao clima ameno de altitude e à rotina de moradores e visitantes que passam temporadas na cidade.',

  vizinhas: ['sao-joao-del-rei-mg', 'barbacena-mg', 'ouro-preto-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Tiradentes', url: 'https://cidades.ibge.gov.br/brasil/mg/tiradentes/panorama' },
    { nome: 'Prefeitura de Tiradentes', url: 'https://www.tiradentes.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
