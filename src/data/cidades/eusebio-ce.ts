import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'eusebio-ce',
  nome: 'Eusébio',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'eusebiense',
  tipo: 'cidade',

  populacao: 74170,
  populacaoAno: 2022,
  idhm: 0.701,
  idhmClasse: 'alto',
  altitudeM: 28,

  resumoEconomico:
    'Município da Região Metropolitana de Fortaleza, a cerca de 24 km da capital, Eusébio se destaca por ter um dos maiores PIBs per capita do Ceará, impulsionado por comércio, serviços e um forte mercado imobiliário de alto padrão. A cidade concentra grandes condomínios fechados e loteamentos de luxo ao longo da CE-040, que a conecta à orla leste e a Fortaleza. Sedia o Autódromo Internacional Virgílio Távora e a Fiocruz Ceará, e tem na qualidade de vida e na renda elevada um diferencial frente às demais cidades da região metropolitana.',

  mercado:
    'O mercado fitness de Eusébio é puxado pelo público de alto padrão dos grandes condomínios fechados, como o complexo Cidade Alpha (Alphaville Ceará) e o Terras Alphaville, onde o atendimento domiciliar e em espaços de lazer dos próprios condomínios é muito valorizado. Com renda elevada, cultura fitness forte e calor o ano todo, há demanda consistente por personal trainers para musculação, treino funcional e acompanhamento de corrida — tanto em academias do eixo CE-040 quanto dentro de casa.',

  bairrosNobres: ['Cidade Alpha', 'Precabura', 'Parque Havaí', 'Centro'],
  bairrosPopulares: ['Mangabeira', 'Coaçu', 'Tamatanduba', 'Lagoinha'],

  parques: [
    {
      nome: 'Lagoa da Precabura',
      descricao:
        'Maior lagoa da Grande Fortaleza, entre Eusébio e a capital, em processo de proteção como unidade de conservação — espaço de natureza para caminhada, corrida e lazer ao ar livre.',
    },
    {
      nome: 'Parque Estadual do Cocó (proximidade)',
      descricao:
        'Vizinho a Fortaleza, é a grande área verde da região metropolitana, com trilhas e percursos arborizados — opção clássica de corrida em meio à natureza para quem mora no Eusébio.',
    },
    {
      nome: 'Polo de Lazer da Lagoa do Eusébio',
      descricao:
        'Área de lazer municipal junto à lagoa, usada para caminhada e atividades ao ar livre pela população local.',
    },
  ],
  ciclovias:
    'A cidade vem ampliando trechos cicláveis ao longo dos principais eixos viários, com destaque para o corredor da CE-040, mas a infraestrutura cicloviária ainda é mais concentrada do que em uma rede contínua.',

  clima:
    'O clima é tropical quente litorâneo, com temperaturas médias altas o ano inteiro (em torno de 26 °C a 27 °C), forte insolação e umidade vinda do litoral, típicas da Grande Fortaleza.',
  climaTreino:
    'Com calor e sol intensos durante todo o ano, o ideal é treinar no começo da manhã ou no fim da tarde, com hidratação reforçada e proteção UV. Treinos em horários quentes pedem mais cautela com o esforço térmico.',

  mobilidade:
    'A principal via é a CE-040, que liga Eusébio a Fortaleza e à orla leste, somada à CE-010 e ao acesso à BR-116. O município é fortemente dependente do transporte por automóvel, característico de uma cidade de condomínios e baixa densidade.',

  corridas: [
    {
      nome: 'Provas de rua na Grande Fortaleza',
      descricao:
        'Eusébio e os municípios vizinhos têm uma agenda ativa de corridas de rua de 5 km a 10 km ao longo do ano — vale conferir as datas atualizadas antes de se inscrever.',
    },
    {
      nome: 'Autódromo Internacional Virgílio Távora',
      descricao:
        'Referência esportiva da cidade, o autódromo eventualmente recebe eventos e atividades que reforçam a cultura de esporte e velocidade no município.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Eusébio combina a forte valorização da musculação e da estética típica do Ceará com o estilo de vida dos condomínios de alto padrão, onde academias internas, quadras e espaços de treino funcional fazem parte do dia a dia. O calor constante torna o treino ao ar livre, a corrida e o ciclismo parte natural da rotina.',
  academias:
    'A oferta inclui redes nacionais como a Smart Fit no eixo da CE-040, além de estúdios boutique, academias de condomínio e espaços de treino funcional voltados ao público de maior renda da cidade.',

  destaquesFitness: [
    'Condomínios de alto padrão (Cidade Alpha/Alphaville) com forte demanda por atendimento domiciliar.',
    'Um dos maiores PIBs per capita do Ceará, com público fitness exigente.',
    'Calor o ano todo favorece treino ao ar livre, com cuidado térmico.',
    'Proximidade da Lagoa da Precabura e do Parque do Cocó para corrida e caminhada.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 150,
    mensalMin: 300,
    mensalMax: 850,
    onlineMin: 150,
    onlineMax: 420,
  },

  conclusao:
    'Com renda elevada, condomínios de alto padrão e calor o ano inteiro, Eusébio é um terreno fértil para o trabalho de personal trainer, especialmente no atendimento domiciliar e em espaços de lazer dos próprios condomínios. Um acompanhamento profissional ajuda a treinar com método e segurança, respeitando o clima quente litorâneo e o seu objetivo.',

  vizinhas: ['fortaleza-ce', 'caucaia-ce', 'maracanau-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Eusébio', url: 'https://cidades.ibge.gov.br/brasil/ce/eusebio/panorama' },
    { nome: 'Prefeitura de Eusébio', url: 'https://www.eusebio.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
