import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'paco-do-lumiar-ma',
  nome: 'Paço do Lumiar',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'lumiarense',
  tipo: 'cidade',

  populacao: 145643,
  populacaoAno: 2022,
  idhm: 0.724,
  idhmClasse: 'alto',
  altitudeM: 8,

  resumoEconomico:
    'Município da Região Metropolitana da Grande São Luís, na Ilha de São Luís, Paço do Lumiar é uma cidade predominantemente residencial, conurbada com a capital e com São José de Ribamar. Boa parte da população trabalha em São Luís, e a economia local gira em torno do comércio de bairro, dos serviços e da prestação de serviços públicos, tendo no Conjunto Maiobão seu maior polo populacional. A vida ativa acontece sobretudo nos bairros e nas áreas de orla voltadas para os estreitos da ilha.',

  mercado:
    'O mercado fitness é de bairro, atendendo principalmente moradores que treinam perto de casa antes ou depois do deslocamento para São Luís. A oferta combina academias de bairro, estúdios de funcional e a presença de redes na vizinha capital, que fica a poucos quilômetros pela MA-201. O treino ao ar livre é comum nas vias residenciais do Maiobão e nas áreas próximas à orla de Iguaíba.',

  bairrosNobres: ['Iguaíba', 'Maioba', 'Vila Mercês', 'Paranã'],
  bairrosPopulares: ['Maiobão', 'Mocajituba', 'Santa Maria', 'Cidade Operária (entorno)'],

  parques: [
    {
      nome: 'Orla de Iguaíba',
      descricao:
        'Área de orla voltada para os estreitos da ilha, com calçadão e ponto de encontro para caminhada e corrida leve à beira-mar, especialmente no fim de tarde.',
    },
    {
      nome: 'Conjunto Maiobão',
      descricao:
        'Maior conjunto residencial do município, com avenidas largas e praças que viram extensão de treino ao ar livre para caminhada, corrida e exercícios funcionais.',
    },
    {
      nome: 'Praia do Meio',
      descricao:
        'Uma das praias do município, frequentada por praticantes de esportes náuticos como jet ski, com faixa de areia usada também para caminhadas.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é incipiente; o uso da bicicleta acontece sobretudo nas vias internas dos bairros residenciais e na ligação cotidiana com São Luís.',

  clima:
    'O clima é equatorial úmido, típico da Região Metropolitana de São Luís: quente o ano todo (médias em torno de 27 °C), com umidade alta e chuvas concentradas entre janeiro e junho.',
  climaTreino:
    'O treino ao ar livre rende mais no início da manhã ou no fim da tarde, com atenção redobrada à hidratação; a proximidade da orla ajuda no conforto térmico nas horas mais quentes.',

  mobilidade:
    'A mobilidade é definida pela conurbação com São Luís e São José de Ribamar: o principal eixo é a MA-201 (Estrada de Ribamar), que liga o bairro do Anil, em São Luís, à região. O deslocamento se dá majoritariamente por ônibus metropolitanos e carro, com fluxo intenso nos horários de pico.',

  corridas: [
    {
      nome: 'Corridas da Região Metropolitana da Grande São Luís',
      descricao:
        'Moradores costumam participar de provas de rua sediadas em São Luís e nos municípios vizinhos, acessíveis pela curta distância e pela MA-201.',
    },
    {
      nome: 'Caminhadas e circuitos comunitários nos bairros',
      descricao:
        'Ações de caminhada e corrida leve organizadas em bairros como o Maiobão, voltadas à saúde e ao convívio da comunidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é de base comunitária, com forte presença do futebol de bairro e de campo — o Luminense, clube local, marcou presença no futebol maranhense. A corrida e a caminhada ganham espaço nas vias residenciais e na orla, e muitos moradores integram o circuito esportivo metropolitano da Grande São Luís.',
  academias:
    'A oferta é formada por academias de bairro e estúdios de funcional próximos às áreas residenciais, complementada pela rede consolidada de São Luís, a poucos quilômetros pela MA-201.',

  destaquesFitness: [
    'Cidade residencial da RM da Grande São Luís, com treino de bairro próximo de casa.',
    'Orla de Iguaíba e Praia do Meio como cenários ao ar livre voltados para os estreitos da ilha.',
    'Conjunto Maiobão, maior polo populacional, com avenidas e praças usadas para caminhada e corrida.',
    'Proximidade de São Luís pela MA-201, ampliando o acesso a redes e provas de rua.',
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
    'Entre os bairros residenciais e a orla voltada para os estreitos da ilha, Paço do Lumiar oferece um treino de proximidade, com São Luís a poucos minutos pela MA-201. Um personal trainer ajuda a montar uma rotina que respeite o calor e a umidade equatoriais e a aproveitar tanto a estrutura local quanto a da capital metropolitana.',

  vizinhas: ['sao-luis-ma', 'sao-jose-de-ribamar-ma'],

  fontes: [
    { nome: 'IBGE Cidades — Paço do Lumiar', url: 'https://cidades.ibge.gov.br/brasil/ma/paco-do-lumiar/panorama' },
    { nome: 'Prefeitura de Paço do Lumiar', url: 'https://pacodolumiar.ma.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
