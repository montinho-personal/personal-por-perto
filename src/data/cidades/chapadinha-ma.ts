import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'chapadinha-ma',
  nome: 'Chapadinha',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'chapadinhense',
  tipo: 'cidade',

  populacao: 81386,
  populacaoAno: 2022,
  idhm: 0.604,
  idhmClasse: 'médio',
  altitudeM: 81,

  resumoEconomico:
    'No leste maranhense, sobre os chapadões do Baixo Parnaíba e na bacia do Rio Munim, Chapadinha é a principal cidade-polo da região. Sua economia combina o comércio e os serviços regionais, a administração pública e, sobretudo, o avanço do agronegócio de grãos — soja, milho e arroz — ligado à fronteira agrícola do MATOPIBA, que se expandiu pelos chapadões do entorno. A presença de um campus da UFMA e a função de centro de compras e serviços atraem moradores das cidades vizinhas.',

  mercado:
    'O mercado fitness tem perfil regional e popular, formado principalmente por academias de bairro e por atendimento domiciliar, com presença de opções de baixo custo. Como polo do Baixo Parnaíba, Chapadinha concentra a oferta de serviços da região, e o calor o ano todo faz a maioria preferir treinos nos horários mais frescos ou em ambiente coberto.',

  bairrosNobres: ['Centro', 'Boa Vista', 'São José', 'Aparecida'],
  bairrosPopulares: ['Cohab', 'Campo Velho', 'Areal', 'Aldeia'],

  parques: [
    {
      nome: 'Orla do Rio Munim',
      descricao:
        'A beira do principal rio da cidade, que corre no sentido norte-sul pela bacia do Munim, serve de referência para caminhadas e lazer ao ar livre, sobretudo no fim da tarde, quando o calor afrouxa.',
    },
    {
      nome: 'Praças e avenidas do Centro',
      descricao:
        'O conjunto de praças e avenidas da área central reúne os pontos de encontro da cidade e funciona como roteiro de caminhada urbana nos horários mais amenos.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada; o deslocamento de bicicleta acontece principalmente pelas vias urbanas e avenidas do entorno do centro.',

  clima:
    'O clima é tropical com estação seca (Aw na classificação de Köppen), quente o ano todo, com período chuvoso concentrado no primeiro semestre e estiagem marcada no segundo semestre. As temperaturas costumam ficar elevadas durante todo o ano, típicas dos chapadões do leste maranhense.',
  climaTreino:
    'Pelo calor intenso e pela estiagem do segundo semestre, o treino ao ar livre se concentra no início da manhã e no fim da tarde, com hidratação reforçada e atenção à desidratação, especialmente nos meses mais secos.',

  mobilidade:
    'O acesso rodoviário se dá principalmente pela BR-222, que corta o município e liga o leste maranhense ao restante do estado — é às margens da BR-222 que fica o campus da UFMA. O transporte urbano é feito por ônibus, vans e mototáxis, e a cidade funciona como entroncamento de quem vem das vizinhas do Baixo Parnaíba.',

  corridas: [
    {
      nome: 'Corridas de rua de Chapadinha',
      descricao:
        'A cidade recebe provas de corrida de rua em datas comemorativas e eventos locais, com largadas em horários mais frescos por causa do calor.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o futebol, as caminhadas na orla do Munim e nas praças do centro e os eventos ligados ao calendário da cidade. Como polo regional e cidade universitária, Chapadinha concentra atividades que atraem moradores das cidades vizinhas e o público estudantil do campus da UFMA.',
  academias:
    'A oferta é dominada por academias de bairro e por personal trainers que atendem em domicílio e em espaços ao ar livre, complementadas por opções de baixo custo voltadas ao público popular e estudantil.',

  destaquesFitness: [
    'Polo regional do Baixo Parnaíba, que concentra a oferta de serviços da região.',
    'Cidade universitária, com campus da UFMA às margens da BR-222.',
    'Orla do Rio Munim e praças do centro como espaços para caminhada.',
    'Calor o ano todo e estiagem no segundo semestre exigem treino em horários frescos e hidratação reforçada.',
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
    'Cidade-polo do Baixo Parnaíba, sobre os chapadões do leste maranhense e impulsionada pelo agronegócio do MATOPIBA e pelo campus da UFMA, Chapadinha tem um mercado fitness popular, apoiado em academias de bairro e atendimento domiciliar. Um personal trainer ajuda a montar uma rotina segura diante do calor o ano todo, ajustando horários e hidratação e aproveitando espaços como a orla do Munim e as praças do centro.',

  vizinhas: ['caxias-ma', 'codo-ma'],

  fontes: [
    { nome: 'IBGE Cidades — Chapadinha', url: 'https://cidades.ibge.gov.br/brasil/ma/chapadinha/panorama' },
    { nome: 'Prefeitura Municipal de Chapadinha', url: 'https://www.chapadinha.ma.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
