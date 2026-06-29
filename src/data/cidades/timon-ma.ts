import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'timon-ma',
  nome: 'Timon',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'timonense',
  tipo: 'cidade',

  populacao: 174465,
  populacaoAno: 2022,
  idhm: 0.649,
  idhmClasse: 'médio',
  altitudeM: 69,

  resumoEconomico:
    'Quarta cidade mais populosa do Maranhão, Timon fica na margem esquerda do Rio Parnaíba, conurbada com Teresina (PI) e integrante da RIDE Grande Teresina. A economia é puxada por comércio e serviços, com destaque industrial para cerâmica e móveis, mas a cidade vive em forte dependência de Teresina, do outro lado do rio: boa parte dos moradores estuda, trabalha e busca serviços na capital piauiense, atravessando as pontes diariamente.',

  mercado:
    'Por ser uma cidade grande colada a Teresina, o mercado fitness de Timon combina academias de bairro e atendimento domiciliar com a proximidade da estrutura maior da capital vizinha. O calor o ano todo empurra o treino para os horários mais frescos e valoriza o personal que ajusta carga e hidratação. A clientela é predominantemente popular e de classe média, sensível a preço, o que favorece pacotes acessíveis e o trabalho em casa ou em praças.',

  bairrosNobres: ['Centro', 'Parque Alvorada', 'Cidade Nova', 'Bela Vista'],
  bairrosPopulares: ['Mutirão', 'São Benedito', 'Parque Piauí', 'Formosa', 'Centro Operário'],

  parques: [
    {
      nome: 'Orla do Rio Parnaíba',
      descricao:
        'A faixa às margens do Rio Parnaíba, de frente para Teresina, é o principal espaço de lazer ativo da cidade, usada para caminhada, corrida e encontros ao entardecer, quando o calor afrouxa.',
    },
    {
      nome: 'Praças do Centro',
      descricao:
        'As praças centrais concentram caminhada, alongamento e treinos funcionais ao ar livre nos horários mais amenos, servindo de ponto de apoio para personal e grupos.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada; o ciclismo urbano se apoia em vias compartilhadas e na ligação com Teresina pelas pontes sobre o Parnaíba.',

  clima:
    'O clima é tropical quente, com chuvas e estiagem bem definidas. As temperaturas passam de 40 °C nos períodos mais quentes e raramente caem abaixo de 22 °C — calor intenso praticamente o ano inteiro.',
  climaTreino:
    'Pelo calor forte, o treino ao ar livre se concentra no comecinho da manhã e no fim da tarde, com hidratação reforçada e atenção à desidratação; nas horas centrais, ambientes climatizados são a escolha mais segura.',

  mobilidade:
    'O acesso principal é pela BR-316, que cruza a cidade e segue para o interior do Maranhão, e pelas pontes sobre o Rio Parnaíba — como a Ponte João Luís Ferreira e a Ponte Engenheiro Antônio Noronha — que ligam Timon a Teresina e sustentam o fluxo diário entre as duas cidades. O transporte urbano é feito por ônibus, integrado de fato ao cotidiano da capital vizinha.',

  corridas: [
    {
      nome: 'Corridas de rua locais',
      descricao:
        'A cidade tem provas e ações de corrida de rua promovidas pelo poder público e por grupos esportivos, geralmente em datas comemorativas e com largadas cedo por causa do calor.',
    },
    {
      nome: 'Calendário da Grande Teresina',
      descricao:
        'A proximidade com Teresina amplia as opções, e muitos timonenses participam das provas de rua realizadas na capital, do outro lado do Parnaíba.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso da orla do Parnaíba e das praças para caminhada e corrida com a forte ligação à cena de Teresina, onde os moradores encontram mais eventos e estrutura. O calor define os hábitos: treina-se cedo ou no fim do dia.',
  academias:
    'A oferta é formada principalmente por academias de bairro e estúdios menores, complementada pelo atendimento domiciliar e pela proximidade das redes e equipamentos de Teresina, a poucos minutos pelas pontes.',

  destaquesFitness: [
    'Cidade grande conurbada a Teresina, com forte dependência da estrutura da capital vizinha.',
    'Orla do Rio Parnaíba e praças do Centro como espaços de treino ao ar livre.',
    'Mercado de academias de bairro e atendimento domiciliar, com clientela sensível a preço.',
    'Calor intenso o ano todo exige periodização de horários e foco em hidratação.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Colada a Teresina pelo Rio Parnaíba, Timon oferece um mercado fitness de perfil popular, apoiado em academias de bairro, atendimento domiciliar e na orla do rio. Num clima quente o ano inteiro, um personal trainer faz diferença para organizar horários, ajustar a hidratação e aproveitar bem os espaços da cidade e a estrutura próxima da capital vizinha.',

  vizinhas: ['sao-luis-ma', 'imperatriz-ma'],

  fontes: [
    { nome: 'IBGE Cidades — Timon', url: 'https://cidades.ibge.gov.br/brasil/ma/timon/panorama' },
    { nome: 'Prefeitura de Timon', url: 'https://timon.ma.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/211220' },
  ],
  atualizadoEm: '2026-06-29',
};
