import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santa-barbara-doeste-sp',
  nome: "Santa Bárbara d'Oeste",
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'barbarense',
  tipo: 'cidade',

  populacao: 183347,
  populacaoAno: 2022,
  idhm: 0.781,
  idhmClasse: 'alto',
  altitudeM: 570,

  resumoEconomico:
    'Santa Bárbara d\'Oeste é uma cidade média da Região Metropolitana de Campinas, conurbada com Americana e ligada à tradição sucroalcooleira (já apelidada de "Pérola do Açúcar") e à indústria têxtil, com forte presença da tecelagem de algodão entre os setores que mais empregam. O município carrega ainda uma herança singular: a imigração de confederados norte-americanos a partir de 1866, que deixou marcas culturais como o Cemitério do Campo (Cemitério dos Americanos) e a Festa Confederada.',

  mercado:
    'Como cidade média industrial e residencial colada a Americana, o mercado fitness se organiza em torno de academias de bairro e de condomínios, com demanda estável de moradores que trabalham na indústria e no comércio regional. É um cenário favorável a personal trainers que atendem em estúdios de bairro, atendimento domiciliar e treino ao ar livre nos parques municipais.',

  bairrosNobres: ['Jardim Pérola', 'Vila Linópolis', 'Jardim Europa', 'Jardim Aurora'],
  bairrosPopulares: ['Conjunto dos Trabalhadores', 'Planalto do Sol', 'Jardim Itamaraty', 'Vila Mollon'],

  parques: [
    {
      nome: 'Parque dos Jacarandás',
      descricao:
        'Conta com pista de caminhada de cerca de 1.150 m e ciclovia de aproximadamente 860 m, além de academia ao ar livre, playground e equipamentos esportivos.',
    },
    {
      nome: 'Parque das Paineiras',
      descricao:
        'Parque linear de cerca de 80 mil m² no bairro Planalto do Sol, com pista de caminhada de aproximadamente 1 km, ciclovia, quadras, playground e academia ao ar livre com equipamentos adaptados.',
    },
    {
      nome: 'Parque Araçariguama',
      descricao:
        'Área de cerca de 70 mil m² com lago de aproximadamente 12 mil m², no Jardim Itamaraty, com pista de caminhada, quiosques e espaço para alongamento.',
    },
    {
      nome: 'Parque dos Ipês',
      descricao:
        'Parque revitalizado com pista de caminhada, área de calistenia, quadras e playground, conhecido pelas esculturas temáticas de dinossauros.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária aparece sobretudo dentro dos parques, como a ciclovia de cerca de 860 m do Parque dos Jacarandás e o trecho do Parque das Paineiras; a extensão total da malha urbana não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical com estação seca (tipo Aw/Cwa), com verão quente e chuvoso e inverno ameno e seco, em altitude de cerca de 570 m no interior paulista.',
  climaTreino:
    'No verão, o ideal é treinar ao ar livre no início da manhã ou no fim de tarde, evitando o calor do meio do dia; o inverno seco e ameno é o período mais confortável para corrida e atividades externas.',

  mobilidade:
    'A cidade tem acesso pela Rodovia Luís de Queiroz (SP-304) e fica próxima do eixo da Rodovia Anhanguera (SP-330), em forte integração viária com Americana e com o restante da Região Metropolitana de Campinas.',

  corridas: [
    {
      nome: 'Corrida do Trabalhador SBO',
      descricao:
        'Prova pedestre de rua com edições anuais em maio, com largada na região central e apoio da Secretaria Municipal de Esportes.',
    },
    {
      nome: 'Corrida de Aniversário de Santa Bárbara',
      descricao:
        'Corrida de rua que celebra o aniversário do município, com percursos para corredores e caminhantes.',
    },
    {
      nome: 'Jurassic Ultramarathon',
      descricao:
        'Prova de longa duração realizada na cidade com apoio da Secretaria Municipal de Esportes, voltada a corredores de resistência.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso intenso dos parques municipais bem equipados com um calendário recorrente de corridas de rua. A herança da imigração confederada/americana, celebrada na Festa Confederada e preservada no Cemitério do Campo, dá identidade própria à cidade.',
  academias:
    'A oferta é dominada por academias de bairro e estúdios próximos a condomínios residenciais, complementada pelos parques municipais com academias ao ar livre de acesso gratuito.',

  destaquesFitness: [
    'Quatro parques municipais bem equipados (Jacarandás, Paineiras, Araçariguama e Ipês), com pistas e academias ao ar livre gratuitas.',
    'Mercado de academias de bairro e de condomínios, adequado a atendimento domiciliar e em estúdio.',
    'Calendário recorrente de corridas de rua (Corrida do Trabalhador, Corrida de Aniversário e ultramaratona).',
    'Inverno seco e ameno favorável ao treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade média industrial da Região Metropolitana de Campinas, Santa Bárbara d\'Oeste reúne boa rede de parques e mercado de academias de bairro e de condomínios. Um personal trainer ajuda a aproveitar o Parque dos Jacarandás e o Parque das Paineiras com método, ajustando os horários ao calor do verão paulista.',

  vizinhas: ['americana-sp', 'limeira-sp', 'piracicaba-sp', 'sumare-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Santa Bárbara d\'Oeste', url: 'https://cidades.ibge.gov.br/brasil/sp/santa-barbara-doeste/panorama' },
    { nome: 'Prefeitura de Santa Bárbara d\'Oeste', url: 'https://www.santabarbara.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/354580' },
  ],
  atualizadoEm: '2026-06-29',
};
