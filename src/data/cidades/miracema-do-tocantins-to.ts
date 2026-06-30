import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'miracema-do-tocantins-to',
  nome: 'Miracema do Tocantins',
  uf: 'TO',
  estado: 'Tocantins',
  estadoSlug: 'tocantins',
  regiao: 'Norte',
  gentilico: 'miracemense',
  tipo: 'cidade',

  populacao: 18566,
  populacaoAno: 2022,
  idhm: 0.680,
  idhmClasse: 'médio',
  altitudeM: 197,

  resumoEconomico:
    'Às margens do rio Tocantins, Miracema do Tocantins guarda um lugar especial na história do estado: foi a primeira capital provisória do Tocantins, entre 1989 e 1990, antes da transferência definitiva para Palmas. A economia da cidade combina o comércio e os serviços do centro urbano, a agropecuária do entorno (com destaque para a pecuária e as lavouras do Cerrado), a pesca artesanal no rio e o movimento ligado à presença de um campus da Universidade Federal do Tocantins, que ajuda a dinamizar o município.',

  mercado:
    'Por ser uma cidade pequena do interior do Norte, o mercado fitness de Miracema é enxuto, formado por academias locais de musculação e treino funcional e pela atividade ao ar livre junto ao rio e nas praças. A procura por personal trainers tende a vir de quem quer um acompanhamento mais próximo, seja para treinar respeitando o calor do Cerrado, seja para preparar provas de corrida de rua que acontecem na região.',

  bairrosNobres: ['Setor Central', 'Setor Aeroporto'],
  bairrosPopulares: ['Setor Santa Filomena', 'Beira Rio'],

  parques: [
    {
      nome: 'Orla do Rio Tocantins',
      descricao:
        'A beira-rio é o principal espaço de lazer e atividade física da cidade, com áreas de convivência usadas para caminhada, corrida leve e treino ao ar livre, especialmente no fim da tarde.',
    },
    {
      nome: 'Praia do Funil e praias fluviais',
      descricao:
        'Na seca, o rio Tocantins forma praias de areia que viram ponto de encontro da população — entre elas a Praia do Funil e a Praia Mirassol —, com espaço para atividades ao ar livre, banho e esportes na beira do rio.',
    },
    {
      nome: 'Praça Mãe Domingas e praças centrais',
      descricao:
        'As praças do centro funcionam como pontos de largada de corridas de rua e como espaços públicos para caminhada e exercícios no início da manhã ou à noite, fugindo do sol mais forte.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta, típica de uma cidade pequena; a maior parte do pedal e da corrida acontece nas vias urbanas e na orla do rio Tocantins.',

  clima:
    'O clima é tropical de Cerrado, quente o ano todo, com duas estações bem marcadas: o período chuvoso (de novembro a abril) e a estiagem (de maio a outubro), quando o tempo fica seco, as temperaturas ficam altas e o rio baixa, formando as praias fluviais.',
  climaTreino:
    'O calor exige treinar bem cedo ou no fim da tarde, com boa hidratação; na estiagem, o ar seco e o sol intenso pedem cuidado redobrado, enquanto as praças sombreadas e os ambientes climatizados são alternativas para os horários mais quentes do dia.',

  mobilidade:
    'Miracema fica a cerca de 80 km de Palmas e se conecta à capital e a Porto Nacional por rodovias, com a TO-336 e o acesso à BR-153 (Belém-Brasília) entre as principais ligações. O deslocamento dentro da cidade é curto, feito a pé, de bicicleta, de moto e de carro, na escala de um município pequeno.',

  corridas: [
    {
      nome: 'Corrida de Santo Antônio',
      descricao:
        'Prova de corrida de rua ligada às festividades de Santo Antônio em Miracema, com largada nas áreas centrais da cidade e categorias masculina e feminina.',
    },
    {
      nome: 'Circuito Estudantil e Paralímpico de Corrida de Rua do Tocantins',
      descricao:
        'Etapa estadual realizada em Miracema, com percurso pelas ruas centrais e categorias que incluem estudantes e atletas paralímpicos, reforçando a cena de corrida na cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva miracemense gira em torno do rio Tocantins — com as praias fluviais, a pesca e os esportes na beira-rio na época da seca — e ganha força com grupos locais de corrida e provas de rua que aproveitam as praças e as vias do centro.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, em número compatível com uma cidade pequena, concentradas na área central e nos setores residenciais.',

  destaquesFitness: [
    'Primeira capital provisória do Tocantins, às margens do rio Tocantins.',
    'Praias fluviais na seca (como a Praia do Funil) e orla do rio como espaço de atividade ao ar livre.',
    'Calor de Cerrado o ano todo, que exige planejar horário e hidratação no treino.',
    'Cena de corrida de rua ativa, com grupos locais e provas que largam nas praças do centro.',
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
    'Pequena, histórica e fincada na beira do rio Tocantins, Miracema pede um treino adaptado ao calor do Cerrado e que aproveite a orla e as praias fluviais. Um personal trainer ajuda a organizar a rotina respeitando os horários de menor sol, manter a constância ao longo das estações e preparar quem quer encarar as corridas de rua da cidade.',

  vizinhas: ['palmas-to', 'porto-nacional-to'],

  fontes: [
    { nome: 'IBGE Cidades — Miracema do Tocantins', url: 'https://cidades.ibge.gov.br/brasil/to/miracema-do-tocantins/panorama' },
    { nome: 'Prefeitura de Miracema do Tocantins', url: 'https://miracema.to.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
