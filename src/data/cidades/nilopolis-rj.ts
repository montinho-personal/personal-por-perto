import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'nilopolis-rj',
  nome: 'Nilópolis',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'nilopolitano',
  tipo: 'cidade',

  populacao: 146774,
  populacaoAno: 2022,
  idhm: 0.753,
  idhmClasse: 'alto',
  altitudeM: 23,

  resumoEconomico:
    'Um dos menores municípios do país em área — cerca de 19,4 km² — e o menor do estado do Rio, Nilópolis é uma cidade densíssima da Baixada Fluminense, com mais de 7,5 mil habitantes por km². A economia é predominantemente popular, baseada em comércio de rua, serviços e pequenos negócios concentrados no Centro e ao longo das avenidas próximas à ferrovia, com forte fluxo de moradores que trabalham na capital.',

  mercado:
    'O mercado fitness acompanha o perfil popular e adensado da cidade: academias de bairro espalhadas pelo Centro e por Olinda, estúdios de menor porte e atendimento domiciliar ganham espaço justamente pela alta densidade e pelos deslocamentos curtos. Com lotes pequenos e ruas movimentadas, o personal que atende em casa, em condomínio ou em praças encontra demanda de quem prefere não se deslocar para treinar.',

  bairrosNobres: ['Centro', 'Olinda', 'Manoel Reis'],
  bairrosPopulares: ['Nova Cidade', 'Cabral', 'Frigorífico', 'Anita'],

  parques: [
    {
      nome: 'Praça Paulo de Frontin',
      descricao:
        'Praça central junto à estação de trem, tradicional ponto de encontro e de manifestações públicas da cidade — espaço de circulação para caminhada e treino funcional ao ar livre no coração de Nilópolis.',
    },
    {
      nome: 'Avenida Mirandela',
      descricao:
        'Via de grande movimento próxima à ferrovia, onde a Beija-Flor realiza seu tradicional desfile pós-carnaval; eixo urbano usado por moradores para caminhadas e deslocamentos a pé.',
    },
  ],
  ciclovias:
    'Cidade muito compacta e adensada, Nilópolis tem deslocamentos curtos que favorecem o uso da bicicleta no dia a dia; a extensão consolidada de malha cicloviária não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente e úmido, característico da Baixada Fluminense, com verões quentes e chuvosos.',
  climaTreino:
    'O calor e a umidade, intensificados pela alta densidade urbana e pouca área verde, pedem treino no início da manhã ou no fim da tarde, com hidratação reforçada e atenção a horários de menor radiação solar.',

  mobilidade:
    'Nilópolis é servida pela SuperVia (Ramal Japeri), com as estações Nilópolis, no Centro, e Olinda, no bairro homônimo, ligando a cidade à capital. A pequena extensão territorial e a alta densidade tornam grande parte dos trajetos internos curtos, feitos a pé, de bicicleta ou por transporte de bairro.',

  corridas: [
    {
      nome: 'Corridas de rua na Baixada Fluminense',
      descricao:
        'Nilópolis integra o calendário regional de corridas de rua da Baixada, com provas populares de 5 km e caminhadas organizadas por clubes e pela prefeitura em vias e praças do Centro.',
    },
  ],
  culturaEsportiva:
    'A identidade esportiva e cultural de Nilópolis se mistura ao samba: a cidade é o berço do G.R.E.S. Beija-Flor de Nilópolis, uma das maiores escolas de samba do país, cuja quadra no Centro é referência de eventos e movimentação na cidade. No esporte, predominam o futebol de várzea, projetos públicos de lazer e a corrida de rua popular.',
  academias:
    'A oferta reúne academias de bairro e estúdios de menor porte distribuídos pelo Centro e por Olinda, complementados por atendimento domiciliar — formato favorecido pela densidade e pelos deslocamentos curtos da cidade.',

  destaquesFitness: [
    'Cidade densíssima e compacta: deslocamentos curtos que favorecem treino domiciliar e em condomínio.',
    'Berço do G.R.E.S. Beija-Flor de Nilópolis, com forte vida cultural no Centro.',
    'Academias de bairro no Centro e em Olinda, com acesso fácil a pé.',
    'Trem da SuperVia (estações Nilópolis e Olinda) conectando à capital.',
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
    'Pequena em área e enorme em densidade, Nilópolis é uma cidade popular e movimentada da Baixada Fluminense, marcada pelo samba da Beija-Flor e pelos deslocamentos curtos do dia a dia. Um personal trainer ajuda a estruturar o treino dentro dessa realidade — em casa, em praças ou em academias de bairro —, respeitando o clima quente e a rotina de quem se desloca para o Rio.',

  vizinhas: ['mesquita-rj', 'sao-joao-de-meriti-rj', 'nova-iguacu-rj', 'belford-roxo-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Nilópolis', url: 'https://cidades.ibge.gov.br/brasil/rj/nilopolis/panorama' },
    { nome: 'Prefeitura de Nilópolis', url: 'https://nilopolis.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
