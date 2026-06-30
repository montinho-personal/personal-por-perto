import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'oeiras-pi',
  nome: 'Oeiras',
  uf: 'PI',
  estado: 'Piauí',
  estadoSlug: 'piaui',
  regiao: 'Nordeste',
  gentilico: 'oeirense',
  tipo: 'cidade',

  populacao: 38161,
  populacaoAno: 2022,
  idhm: 0.634,
  idhmClasse: 'médio',
  altitudeM: 145,

  resumoEconomico:
    'Primeira capital do Piauí e conhecida como a Capital da Fé, Oeiras é uma cidade histórica no vale do rio Canindé, no Centro-Sul do estado. A economia é puxada pelos serviços e pelo comércio — a cidade é o principal polo comercial do vale do Canindé —, seguidos pela administração pública, pela agropecuária e por uma indústria de menor porte. O patrimônio colonial tombado e o calendário religioso, com destaque para a Semana Santa, movimentam o turismo ao longo do ano.',

  mercado:
    'Por ser uma cidade média do interior nordestino, o mercado fitness de Oeiras é enxuto, formado por academias locais de musculação e treino funcional. A procura por personal trainers tende a crescer entre quem busca acompanhamento individualizado para treinar com segurança no calor forte e aproveitar as praças e os morros do centro histórico como espaços de atividade ao ar livre.',

  bairrosNobres: ['Centro', 'Soizão', 'Floresta', 'Rosário'],
  bairrosPopulares: ['Fomento (Beira-Rio)', 'Canela', 'Pedrinhas', 'Bomba'],

  parques: [
    {
      nome: 'Praça Nossa Senhora das Vitórias',
      descricao:
        'Núcleo do centro histórico, onde fica a Igreja Matriz de Nossa Senhora da Vitória (1733), a mais antiga do Piauí. A praça e o casario colonial em volta concentram o vaivém da cidade e servem de ponto de caminhada e encontro ao ar livre.',
    },
    {
      nome: 'Morro da Cruz e Morro do Leme',
      descricao:
        'Mirantes elevados com vista para a cidade e o vale do rio Canindé. As ladeiras e os acessos a esses morros são usados por quem treina ao ar livre em busca de subidas e de paisagem.',
    },
    {
      nome: 'Orla do rio Canindé (Beira-Rio)',
      descricao:
        'A parte baixa da cidade, junto ao rio Canindé no bairro Fomento, oferece trechos planos para caminhada e corrida leve, contrastando com o relevo de morros do centro.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e restrita a poucos trechos da área urbana; boa parte do pedal e da corrida acontece nas vias do centro histórico e nos acessos da parte baixa, junto ao rio.',

  clima:
    'O clima é tropical semiárido, quente o ano inteiro, com temperaturas que podem passar dos 40 °C nos meses mais quentes. As chuvas se concentram entre outubro e abril, enquanto o restante do ano é marcado por tempo seco e baixa umidade.',
  climaTreino:
    'O calor forte e a baixa umidade na estação seca pedem treino bem cedo ou no fim da tarde, com hidratação reforçada; nos horários de pico de sol, ambientes climatizados são a opção mais segura, e o relevo de morros do centro histórico ajuda a variar a intensidade.',

  mobilidade:
    'Oeiras é cortada nas proximidades pela BR-230 (Transamazônica), que tangencia a cidade ao sul e a liga às demais cidades da região, além de rodovias estaduais que conectam o vale do Canindé. O transporte interno é feito sobretudo por veículos próprios, motos e ônibus, e o entorno da rodovia concentra comércio e serviços ligados ao tráfego.',

  corridas: [
    {
      nome: 'Corridas do calendário esportivo municipal',
      descricao:
        'A cidade recebe provas de corrida de rua organizadas em datas comemorativas e em parceria com o poder público e grupos de corredores locais, aproveitando as ruas do centro histórico.',
    },
    {
      nome: 'Circuito regional do Centro-Sul do Piauí',
      descricao:
        'Oeiras integra o movimento de corrida de rua que cresce em cidades vizinhas como Picos e Floriano, com corredores oeirenses participando de provas regionais ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso das praças e dos morros do centro histórico para caminhada e corrida, o futebol e o convívio em torno do calendário religioso e das festas tradicionais — tudo moldado pelo calor característico do semiárido piauiense.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média do interior do Piauí.',

  destaquesFitness: [
    'Primeira capital do Piauí e Capital da Fé, com centro histórico tombado para caminhada ao ar livre.',
    'Praça Nossa Senhora das Vitórias e morros da Cruz e do Leme como espaços de atividade e subidas.',
    'Calor semiárido, com temperaturas acima de 40 °C, que exige planejamento de horário e hidratação.',
    'Polo comercial do vale do rio Canindé, cortado pela BR-230 (Transamazônica).',
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
    'Cidade histórica, quente e cercada de morros no vale do Canindé, Oeiras pede um treino adaptado ao clima semiárido e que aproveite as praças e ladeiras do centro. Um personal trainer ajuda a organizar a rotina respeitando o calor, definindo os melhores horários e mantendo a constância ao longo das estações seca e chuvosa.',

  vizinhas: ['picos-pi', 'floriano-pi'],

  fontes: [
    { nome: 'IBGE Cidades — Oeiras', url: 'https://cidades.ibge.gov.br/brasil/pi/oeiras/panorama' },
    { nome: 'Prefeitura de Oeiras', url: 'https://oeiras.pi.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
