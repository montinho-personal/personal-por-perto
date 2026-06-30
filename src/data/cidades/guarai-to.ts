import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'guarai-to',
  nome: 'Guaraí',
  uf: 'TO',
  estado: 'Tocantins',
  estadoSlug: 'tocantins',
  regiao: 'Norte',
  gentilico: 'guaraiense',
  tipo: 'cidade',

  populacao: 24775,
  populacaoAno: 2022,
  idhm: 0.741,
  idhmClasse: 'alto',
  altitudeM: 290,

  resumoEconomico:
    'Guaraí é um polo regional do centro-norte tocantinense, estrategicamente posicionada às margens da BR-153 (Belém–Brasília). Com cerca de 25 mil habitantes, a cidade reúne comércio, serviços e administração pública apoiados em uma forte base agropecuária — pecuária de corte e de leite, produção de grãos e a maior área de melancia irrigada por gotejamento do país.',

  mercado:
    'A economia guaraiense se sustenta em serviços e comércio, na administração pública e na agropecuária, com a cidade atuando como entreposto regional ao longo da BR-153. Esse perfil de centro sub-regional movimenta uma classe comercial e trabalhadora que sustenta a demanda por academias e treino personalizado, ainda em formação, mas em crescimento.',

  bairrosNobres: ['Setor Central', 'Setor Aeroporto', 'Jardim Paulista', 'Setor Universitário'],
  bairrosPopulares: ['Setor Bela Vista', 'Vila Nova', 'Setor Industrial', 'Setor Sul'],

  parques: [
    {
      nome: 'Praça central de Guaraí',
      descricao:
        'Principal praça pública da cidade, ponto de encontro da comunidade e palco de eventos, com espaço para caminhada e atividades ao ar livre no coração de Guaraí.',
    },
    {
      nome: 'Praças e áreas de lazer dos setores',
      descricao:
        'A cidade conta com praças e espaços abertos distribuídos pelos setores, usados para caminhada, alongamento e treino funcional ao ar livre, sobretudo nos horários mais frescos.',
    },
  ],
  ciclovias:
    'Com relevo plano e perfil de cidade média do interior, Guaraí favorece o deslocamento de bicicleta no dia a dia, embora a malha cicloviária estruturada ainda seja limitada.',

  clima:
    'O clima é tropical de Cerrado (Aw), típico do centro-norte do Tocantins: quente o ano todo, com temperaturas médias elevadas e uma seca marcante entre maio e setembro, quando a umidade cai bastante e os dias ficam mais secos e ensolarados.',
  climaTreino:
    'Pelo calor forte e pela seca prolongada, o treino ao ar livre rende mais no início da manhã ou no fim da tarde, com atenção redobrada à hidratação e à proteção solar — especialmente no auge da estação seca.',

  mobilidade:
    'Guaraí é cortada pela BR-153 (Belém–Brasília), o que a coloca como ponto de passagem e logística entre o norte do país e o Centro-Oeste, com a Avenida Bernardo Sayão concentrando o comércio do Setor Central. O deslocamento interno é feito principalmente por carro e moto, em uma cidade de distâncias curtas e relevo plano.',

  corridas: [
    {
      nome: 'Guará Run',
      descricao:
        'Corrida de rua realizada em Guaraí, com percursos de 5 km (corrida) e 3 km (caminhada) e largada na Avenida Bernardo Sayão, reunindo atletas amadores e profissionais da cidade e da região.',
    },
    {
      nome: 'Corridas e provas escolares',
      descricao:
        'Provas de rua e competições com foco no desporto escolar promovidas por instituições e parceiros locais, com categorias para crianças, adolescentes e adultos nas vias e praças da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva guaraiense se expressa principalmente nas corridas de rua, como a Guará Run, e nas atividades nas praças, que reúnem famílias e atletas amadores. É uma cena em crescimento, ancorada em eventos públicos e no uso dos espaços abertos da cidade.',
  academias:
    'A oferta de academias acompanha o porte de uma cidade média do Norte, concentrada no Setor Central e nas vias mais movimentadas. O treino ao ar livre nas praças complementa essa estrutura e amplia o acesso à atividade física.',

  destaquesFitness: [
    'Corrida de rua Guará Run, com percursos de 5 km e 3 km e largada na Avenida Bernardo Sayão.',
    'Praça central como principal ponto de concentração esportiva da cidade.',
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
    'Polo regional do centro-norte tocantinense às margens da BR-153, com forte base agropecuária e comercial, Guaraí tem uma cena fitness em expansão, marcada por corridas de rua e praças movimentadas. Um personal trainer ajuda o guaraiense a montar um plano sob medida e a treinar com segurança no calor e na seca marcante do Cerrado.',

  vizinhas: ['palmas-to', 'colinas-do-tocantins-to'],

  fontes: [
    {
      nome: 'IBGE Cidades — Guaraí',
      url: 'https://cidades.ibge.gov.br/brasil/to/guarai/panorama',
    },
    { nome: 'Prefeitura de Guaraí', url: 'https://guarai.to.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
