import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cambara-do-sul-rs',
  nome: 'Cambará do Sul',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'cambaraense',
  tipo: 'cidade',

  populacao: 6361,
  populacaoAno: 2022,
  idhm: 0.697,
  idhmClasse: 'médio',
  altitudeM: 1031,

  resumoEconomico:
    'No planalto dos Campos de Cima da Serra, Cambará do Sul é a sede municipal mais alta do Rio Grande do Sul e a porta de entrada dos cânions Itaimbezinho e Fortaleza, dentro dos parques nacionais de Aparados da Serra e da Serra Geral. A economia combina o turismo de natureza e de trekking — hospedagem, guias, agências de ecoturismo e gastronomia voltada ao visitante — com a pecuária de corte em campos nativos e a lavoura de batata-semente, que junto à maçã movimenta a mão de obra temporária da região.',

  mercado:
    'Cidade pequena e de fluxo turístico intenso, Cambará do Sul tem um mercado fitness reduzido e concentrado no núcleo urbano, sem grandes redes de academia. A procura por personal trainer soma moradores que buscam preparo físico para lidar com o frio de altitude e o relevo das trilhas, além de visitantes que querem apoio para encarar com segurança percursos como o Rio do Boi antes ou depois do trekking pelos cânions.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Ouro Verde', 'Vila Santana', 'Vila Unidos'],

  parques: [
    {
      nome: 'Parque Nacional de Aparados da Serra (Cânion Itaimbezinho)',
      descricao:
        'Criado em 1959, abriga o Itaimbezinho, cânion com cerca de 5,8 km de extensão e paredões de até 720 metros de altura. As trilhas do Vértice (curta, com mirantes) e do Cotovelo (cerca de 6 km, plana, pela borda do cânion) são os percursos oficiais de caminhada dentro da unidade.',
    },
    {
      nome: 'Parque Nacional da Serra Geral (Cânion Fortaleza)',
      descricao:
        'Unidade vizinha ao Aparados da Serra, onde fica o Cânion Fortaleza, com paredões que chegam a cerca de 900 metros de desnível até o mar, na divisa com Santa Catarina; suas trilhas de borda atraem caminhantes em busca de mirantes e amplitude visual.',
    },
    {
      nome: 'Trilha do Rio do Boi',
      descricao:
        'Percurso técnico pelo interior do Cânion Itaimbezinho, feito no leito e nas margens do rio, com travessias e trechos de pedra; é o trekking mais desafiador da região, com acompanhamento de guia credenciado obrigatório.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária urbana estruturada; o pedal acontece nas estradas rurais e no acesso aos cânions, palco de eventos como o Pedal dos Cânions, com percursos de terra e desnível expressivo.',

  clima:
    'O clima é subtropical de altitude, um dos mais frios do Brasil: julho, o mês mais rigoroso, tem mínimas que podem ficar abaixo de zero e máximas em torno de 16 °C, com geadas frequentes no inverno e registros ocasionais de neve. O verão é mais ameno e chuvoso, e a melhor época para visitar os cânions com boa visibilidade vai de maio a setembro, quando o tempo costuma ficar mais seco.',
  climaTreino:
    'O frio intenso de altitude exige aquecimento mais longo, roupas em camadas e cuidado redobrado nas madrugadas e no início da manhã, quando as geadas são comuns; o trekking pelos cânions deve respeitar o horário de fechamento dos parques e a formação rápida de neblina, que reduz a visibilidade nas trilhas de borda.',

  mobilidade:
    'O acesso principal é pela RS-020, que liga Cambará do Sul a São Francisco de Paula e à Rota do Sol (RST-453) rumo a Caxias do Sul e à Serra Gaúcha; a ligação com São José dos Ausentes vem sendo progressivamente pavimentada. A Serra do Faxinal, estrada de terra que desce a serra até Praia Grande (SC), é outro acesso histórico, usado por quem cruza a divisa entre os dois estados. O deslocamento interno é predominantemente por carro, sem transporte coletivo urbano relevante.',

  corridas: [
    {
      nome: 'Pedal dos Cânions',
      descricao:
        'Evento de ciclismo com largada na praça central da cidade e percursos de aproximadamente 7 km, 30 km e 50 km em estradas de terra com forte desnível, passando por campos e áreas próximas aos cânions.',
    },
    {
      nome: 'Pedal Delas Terra dos Cânions',
      descricao:
        'Passeio ciclístico aberto ao público voltado ao pedal feminino, realizado em Cambará do Sul explorando estradas rurais e paisagens da Terra dos Cânions.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Cambará do Sul gira em torno do trekking pelos cânions Itaimbezinho e Fortaleza, das caminhadas guiadas pelo Rio do Boi e do ciclismo em estradas rurais de terra, atividades moldadas pelo relevo do planalto e pelo frio de altitude que marca boa parte do ano.',
  academias:
    'A oferta é bastante reduzida, própria de uma cidade pequena: academias e espaços de treino funcional de pequeno porte concentrados no Centro, sem grandes redes, o que reforça a procura por atendimento personalizado e por atividades ao ar livre.',

  destaquesFitness: [
    'Sede municipal mais alta do Rio Grande do Sul (1.031 m), porta de entrada dos cânions Itaimbezinho e Fortaleza.',
    'Trilhas oficiais dos parques nacionais de Aparados da Serra e da Serra Geral, incluindo o trekking técnico do Rio do Boi.',
    'Clima frio de altitude, com geadas frequentes e neve ocasional no inverno, exigindo adaptação do treino ao ar livre.',
    'Economia apoiada no turismo de trekking e ecoturismo, ao lado da pecuária de corte e da lavoura de batata-semente dos Campos de Cima da Serra.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 270,
    mensalMax: 760,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade pequena e de altitude, Cambará do Sul vive do turismo de trekking pelos cânions mais famosos do Brasil, num clima frio que pede preparo físico e planejamento. Um personal trainer ajuda moradores e visitantes a treinar com segurança diante do frio de altitude e a chegar em condição adequada para encarar trilhas como o Rio do Boi e os percursos de borda do Itaimbezinho e do Fortaleza.',

  vizinhas: ['sao-francisco-de-paula-rs', 'canela-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Cambará do Sul', url: 'https://cidades.ibge.gov.br/brasil/rs/cambara-do-sul/panorama' },
    { nome: 'Atlas Brasil — IDHM Cambará do Sul', url: 'https://www.atlasbrasil.org.br/perfil/municipio/430360' },
    { nome: 'ICMBio — Parque Nacional de Aparados da Serra', url: 'https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/unidade-de-conservacao/unidades-de-biomas/mata-atlantica/lista-de-ucs/parna-de-aparados-da-serra' },
  ],
  atualizadoEm: '2026-06-29',
};
