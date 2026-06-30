import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'colinas-do-tocantins-to',
  nome: 'Colinas do Tocantins',
  uf: 'TO',
  estado: 'Tocantins',
  estadoSlug: 'tocantins',
  regiao: 'Norte',
  gentilico: 'colinense',
  tipo: 'cidade',

  populacao: 34233,
  populacaoAno: 2022,
  idhm: 0.701,
  idhmClasse: 'alto',
  altitudeM: 227,

  resumoEconomico:
    'Conhecida como a "Capital do Norte" tocantinense, Colinas do Tocantins é um polo agropecuário e comercial estratégico no norte do estado, às margens da BR-153 (Belém–Brasília). Com pouco mais de 34 mil habitantes, a cidade concentra serviços, comércio e logística que atendem toda a região, apoiados em uma forte base de pecuária de corte e agricultura.',

  mercado:
    'A economia colinense se apoia em serviços, administração pública, comércio e agropecuária, com a cidade funcionando como entreposto regional ao longo da BR-153. Esse perfil de centro sub-regional sustenta uma classe trabalhadora e comercial que movimenta a demanda por academias e treino personalizado, ainda em formação, mas crescente.',

  bairrosNobres: ['Centro', 'Jardim América', 'Setor Sul', 'Setor Aeroporto'],
  bairrosPopulares: ['Santa Rosa', 'Santa Maria', 'Vila São João', 'Setor Oeste'],

  parques: [
    {
      nome: 'Praça 7 de Setembro',
      descricao:
        'Principal praça pública da cidade, ponto de encontro e palco de eventos esportivos como as corridas de rua, com espaço para caminhada e atividades ao ar livre no coração de Colinas.',
    },
    {
      nome: 'Praças e áreas de lazer dos setores',
      descricao:
        'A cidade conta com praças e espaços abertos distribuídos pelos setores, usados para caminhada, alongamento e treino funcional ao ar livre, sobretudo nos horários mais frescos.',
    },
  ],
  ciclovias:
    'A cidade tem perfil de cidade média do interior, com ruas planas que favorecem o deslocamento de bicicleta no dia a dia, embora a malha cicloviária estruturada ainda seja limitada.',

  clima:
    'O clima é tropical de Cerrado (Aw), típico do norte do Tocantins: quente o ano todo, com temperaturas médias elevadas e uma seca marcante entre maio e setembro, quando a umidade cai bastante e os dias ficam mais secos e ensolarados.',
  climaTreino:
    'Pelo calor forte e pela seca prolongada, o treino ao ar livre rende mais no início da manhã ou no fim da tarde, com atenção redobrada à hidratação e à proteção solar — especialmente no auge da estação seca.',

  mobilidade:
    'Colinas é cortada pela BR-153 (Belém–Brasília), o que a coloca como ponto de passagem e logística entre o norte do país e o Centro-Oeste. O deslocamento interno é feito principalmente por carro e moto, em uma cidade de distâncias curtas e relevo plano.',

  corridas: [
    {
      nome: 'Corrida de Aniversário de Colinas',
      descricao:
        'Prova de rua realizada em alusão ao aniversário do município, com percurso de cerca de 7 km e largada na Praça 7 de Setembro, reunindo atletas locais e de cidades vizinhas.',
    },
    {
      nome: 'Corrida Sou + Fit',
      descricao:
        'Evento de corrida de rua apoiado pela Secretaria de Esportes, com categorias para crianças, adolescentes e adultos e distâncias variadas, com largada na Praça 7 de Setembro.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva colinense se expressa principalmente nas corridas de rua promovidas pela prefeitura e nas atividades nas praças, que reúnem famílias e atletas amadores. É uma cena em crescimento, ancorada em eventos públicos e no uso dos espaços abertos da cidade.',
  academias:
    'A oferta de academias acompanha o porte de uma cidade média do Norte, concentrada no Centro e nos setores mais movimentados. O treino ao ar livre nas praças complementa essa estrutura e amplia o acesso à atividade física.',

  destaquesFitness: [
    'Corridas de rua organizadas pela prefeitura, como a Corrida de Aniversário (7 km) e a Sou + Fit.',
    'Praça 7 de Setembro como principal ponto de concentração esportiva da cidade.',
    'Relevo plano e distâncias curtas, favoráveis a caminhada, corrida e bicicleta.',
    'Cena fitness em crescimento, com treino ao ar livre nos horários mais frescos por causa do calor de Cerrado.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 660,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Capital do Norte tocantinense e polo agropecuário e comercial às margens da BR-153, Colinas do Tocantins tem uma cena fitness em expansão, com corridas de rua e praças movimentadas. Um personal trainer ajuda o colinense a montar um plano sob medida e a treinar com segurança no calor e na seca marcante do Cerrado.',

  vizinhas: ['araguaina-to', 'palmas-to'],

  fontes: [
    {
      nome: 'IBGE Cidades — Colinas do Tocantins',
      url: 'https://cidades.ibge.gov.br/brasil/to/colinas-do-tocantins/panorama',
    },
    { nome: 'Prefeitura de Colinas do Tocantins', url: 'https://colinas.to.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
