import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'imperatriz-ma',
  nome: 'Imperatriz',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'imperatrizense',
  tipo: 'cidade',

  populacao: 273110,
  populacaoAno: 2022,
  idhm: 0.731,
  idhmClasse: 'alto',
  altitudeM: 123,

  resumoEconomico:
    'Segunda maior cidade do Maranhão e principal polo do sudoeste maranhense, às margens do Rio Tocantins, Imperatriz é forte em comércio atacadista e varejista regional, serviços, agronegócio (soja e pecuária) e indústria, com presença siderúrgica no eixo. Funciona como entroncamento logístico da macrorregião, na divisa com o Tocantins e o sul do Pará.',

  mercado:
    'O mercado fitness está em expansão, acompanhando o porte de cidade-polo, com academias de bairro e redes maiores; a cultura de corrida de rua cresce e puxa a demanda por assessorias e personal trainers.',

  bairrosNobres: ['Centro', 'Nova Imperatriz', 'Maranhão Novo', 'Parque do Buriti'],
  bairrosPopulares: ['Vila Nova', 'Bom Sucesso', 'Vila Lobão', 'Santa Inês'],

  parques: [
    {
      nome: 'Beira-Rio (Orla do Rio Tocantins)',
      descricao:
        'Mais de 600 m de extensão na Av. João de Deus, com calçadão, pista de caminhada, ciclovia, quadras, lago, concha acústica e quiosques.',
    },
    {
      nome: 'Parque Ambiental Horto Arara Azul',
      descricao:
        'Cerca de 32 hectares no bairro Itamar Guará, com pista de caminhada de aproximadamente 900 m e ampla área verde.',
    },
    {
      nome: 'Praças e ginásios do entorno do Centro',
      descricao:
        'Espaços públicos próximos à Beira-Rio, de uso comum para corrida e treino funcional ao ar livre.',
    },
  ],
  ciclovias:
    'Há ciclovia na orla/Beira-Rio integrada ao calçadão; a extensão total da malha cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente e úmido, com estação seca acentuada e calor intenso ao longo do ano.',
  climaTreino:
    'Recomenda-se treinar ao ar livre no início da manhã ou no fim de tarde, com hidratação reforçada por causa do calor.',

  mobilidade:
    'Imperatriz é cortada pela BR-010 (Belém–Brasília), principal eixo que a liga ao Pará e ao centro do país, reforçando seu papel de entroncamento logístico; conta também com aeroporto e proximidade da BR-226.',

  corridas: [
    {
      nome: 'Corrida do Aniversário de Imperatriz',
      descricao:
        'Prova tradicional de aniversário da cidade (16 de julho), com percursos de 3 km, 5 km e 10 km.',
    },
    {
      nome: 'Meia Maratona de Imperatriz',
      descricao:
        'Iniciada em 2024, atraiu corredores do Maranhão e de estados vizinhos.',
    },
  ],
  culturaEsportiva:
    'A corrida de rua está em forte crescimento (com cerca de 2.000 corredores ativos e altas sucessivas no número de praticantes), consolidando a cidade como polo de eventos esportivos do sudoeste maranhense.',
  academias:
    'A oferta reúne academias de bairro e redes maiores, com demanda puxada pela corrida de rua, complementada pela orla do Tocantins e pelo novo Parque Horto Arara Azul.',

  destaquesFitness: [
    'Orla do Tocantins como principal ponto de treino ao ar livre.',
    'Cena de corrida de rua em expansão acelerada.',
    'Novo Parque Horto Arara Azul ampliando os espaços públicos.',
    'Cidade-polo com demanda regional (atrai praticantes de municípios vizinhos).',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 140,
    mensalMin: 300,
    mensalMax: 820,
    onlineMin: 150,
    onlineMax: 400,
  },

  conclusao:
    'Polo do sudoeste maranhense às margens do Tocantins, Imperatriz tem orla bem estruturada e uma cena de corrida em plena expansão. Um personal trainer ajuda a aproveitar a Beira-Rio e o Horto Arara Azul com método, ajustando horários e hidratação ao calor da região.',

  vizinhas: ['acailandia-ma', 'araguaina-to'],

  faqsExtra: [
    {
      pergunta: 'Qual o melhor horário para treinar ao ar livre em Imperatriz?',
      resposta:
        'Antes das 8h ou depois das 17h30 — o calor forte da região torna o meio do dia inviável para corrida e funcional. A Beira-Rio concentra o movimento nesses horários, com o pôr do sol sobre o Tocantins como bônus do treino da tarde. Hidratação reforçada é regra o ano inteiro, especialmente na estação seca.',
    },
    {
      pergunta: 'Onde treinar ao ar livre em Imperatriz?',
      resposta:
        'A orla do Tocantins (Beira-Rio) é o principal ponto: calçadão, ciclovia, quadras e mais de 600 m de pista na Av. João de Deus. O Parque Ambiental Horto Arara Azul soma uma pista de cerca de 900 m em meio a 32 hectares de área verde. Praças e ginásios do entorno do Centro completam o circuito de treino funcional.',
    },
    {
      pergunta: 'Personal trainer de Imperatriz atende as cidades da região?',
      resposta:
        'Sim — como polo do sudoeste maranhense, Imperatriz atrai alunos de João Lisboa, Davinópolis e municípios do Bico do Papagaio. O atendimento presencial se concentra na cidade, e a consultoria online cobre quem mora mais longe, com planilha semanal e ajustes a distância. Para quem se prepara para as provas locais, o formato misto é o mais comum.',
    },
  ],
  capaArte: {
    src: '/capas-cidade/imperatriz-ma.webp',
    w: 1200,
    h: 900,
    alt: 'Personal trainer em Imperatriz (MA) em arte que reúne a orla da Beira-Rio, o Estádio Frei Epifânio e o skyline da cidade — Personal por Perto',
    legenda: 'Treino personalizado em Imperatriz: um plano feito para o seu corpo, a sua rotina e o calor do sudoeste maranhense, do Centro à Nova Imperatriz.',
  },
  fontes: [
    { nome: 'IBGE Cidades — Imperatriz', url: 'https://cidades.ibge.gov.br/brasil/ma/imperatriz/panorama' },
    { nome: 'Prefeitura de Imperatriz', url: 'https://imperatriz.ma.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-08-13',
};
