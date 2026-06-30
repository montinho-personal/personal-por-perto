import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'balsas-ma',
  nome: 'Balsas',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'balsense',
  tipo: 'cidade',

  populacao: 101767,
  populacaoAno: 2022,
  idhm: 0.687,
  idhmClasse: 'médio',
  altitudeM: 283,

  resumoEconomico:
    'Principal cidade do sul do Maranhão e capital do agronegócio regional, Balsas é o maior produtor de soja do estado e um dos maiores produtores de grãos do MATOPIBA, a fronteira agrícola que reúne porções do Maranhão, Tocantins, Piauí e Bahia. Movida pela agricultura mecanizada no cerrado, abriga grandes tradings e agroindústrias e figura entre os maiores PIBs do Maranhão, atrás de São Luís e Imperatriz.',

  mercado:
    'O mercado fitness acompanha o porte de polo do agronegócio, com academias de bairro e estúdios atendendo a uma população urbana com renda ligada ao agro; a corrida de rua vem ganhando espaço e aquece a procura por personal trainers e assessorias.',

  bairrosNobres: ['Centro', 'Potosí', 'Cidade Nova', 'Açucena'],
  bairrosPopulares: ['São Félix', 'Vassoural', 'Brasília', 'Boa Esperança'],

  parques: [
    {
      nome: 'Praia do Caju (balneário do rio Balsas)',
      descricao:
        'Balneário de água doce nas margens do rio Balsas, com estrutura de quiosques, piscinas naturais e área de esportes; ponto de lazer muito procurado, sobretudo em julho.',
    },
    {
      nome: 'Orla e margens do rio Balsas',
      descricao:
        'Trechos às margens do rio que corta a cidade, usados para caminhada e atividades ao ar livre nos fins de tarde.',
    },
    {
      nome: 'Praças e espaços públicos do Centro',
      descricao:
        'Praças e áreas abertas na região central, de uso comum para caminhada e treino funcional ao ar livre.',
    },
  ],
  ciclovias:
    'A cidade tem vias de uso por ciclistas no eixo central e nos bairros, mas a extensão total de malha cicloviária não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de cerrado (Aw, na classificação de Köppen), com duas estações bem definidas: período chuvoso, concentrado entre o fim do ano e o início do ano seguinte, e estação seca acentuada no segundo semestre, típica do sul maranhense e do MATOPIBA.',
  climaTreino:
    'Recomenda-se treinar ao ar livre no início da manhã ou no fim de tarde, com hidratação reforçada por causa do calor; na estação seca, atenção ao ar mais ressecado e à poeira.',

  mobilidade:
    'Balsas é cortada pela BR-230 (Transamazônica), eixo que a liga ao restante do sul do Maranhão e às demais regiões do país, reforçando seu papel logístico no escoamento de grãos; conta também com aeroporto regional.',

  corridas: [
    {
      nome: 'Corrida de Aniversário da Cidade de Balsas',
      descricao:
        'Prova que celebra o aniversário do município, reunindo corredores locais e da região do sul maranhense.',
    },
    {
      nome: 'Corrida de aniversário do BLS Runners',
      descricao:
        'Evento promovido pelo grupo de corrida BLS Runners, aberto a praticantes e entusiastas de vida saudável da cidade.',
    },
  ],
  culturaEsportiva:
    'A corrida de rua vem crescendo, impulsionada por grupos locais como o BLS Runners e por provas de calendário; o município chegou a instituir o Dia Municipal da Corrida de Prado, mostrando a presença do esporte na cultura local.',
  academias:
    'A oferta reúne academias de bairro e estúdios, com demanda puxada pelo público urbano ligado ao agronegócio e pela cena de corrida em expansão, complementada pelas margens do rio Balsas e pela Praia do Caju como espaços ao ar livre.',

  destaquesFitness: [
    'Capital do agronegócio do sul maranhense, polo do MATOPIBA.',
    'Praia do Caju e margens do rio Balsas como pontos de treino e lazer ao ar livre.',
    'Cena de corrida de rua em crescimento, com grupos locais ativos.',
    'Clima de cerrado com estação seca marcada, exigindo ajuste de horário e hidratação.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 660,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Capital do agronegócio do sul do Maranhão e polo do MATOPIBA, Balsas combina uma economia pujante ligada à soja com pontos de lazer às margens do rio Balsas. Um personal trainer ajuda a aproveitar a Praia do Caju e as praças da cidade com método, ajustando horários e hidratação ao clima de cerrado, de estação seca acentuada.',

  vizinhas: ['imperatriz-ma', 'caxias-ma'],

  fontes: [
    { nome: 'IBGE Cidades — Balsas', url: 'https://cidades.ibge.gov.br/brasil/ma/balsas/panorama' },
    { nome: 'Prefeitura de Balsas', url: 'https://www.balsas.ma.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
