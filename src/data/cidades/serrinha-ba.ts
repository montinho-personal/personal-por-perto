import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'serrinha-ba',
  nome: 'Serrinha',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'serrinhense',
  tipo: 'cidade',

  populacao: 80435,
  populacaoAno: 2022,
  idhm: 0.634,
  idhmClasse: 'médio',
  altitudeM: 360,

  resumoEconomico:
    'Município mais populoso do Território do Sisal, no nordeste da Bahia, Serrinha é um polo regional de comércio, serviços, saúde e educação. Funciona como entroncamento rodoferroviário — cortada pela BR-116 e pela Ferrovia Centro-Atlântica (FCA) — e concentra órgãos estaduais, comércio forte de móveis e materiais de construção e o agronegócio da pecuária e do sisal.',

  mercado:
    'Como polo do Sisal, a cidade reúne academias de bairro, estúdios de funcional e redes regionais, concentradas no Centro e nos bairros de classe média como Cidade Nova e Rodoviária. A presença da UNEB e dos serviços públicos sustenta uma demanda de estudantes e trabalhadores, e a cultura de corrida de rua vem crescendo com provas locais.',

  bairrosNobres: ['Cidade Nova', 'Rodoviária', 'Centro', 'Recreio'],
  bairrosPopulares: ['Urbis I', 'Urbis II', 'Novo Horizonte', 'Cruzeiro'],

  parques: [
    {
      nome: 'Praça da Matriz (Centro)',
      descricao:
        'Praça central tradicional, ponto de encontro e caminhada no coração da cidade, com calçadas e áreas de convivência usadas para atividade física no início e no fim do dia.',
    },
    {
      nome: 'Estádio Municipal e entorno',
      descricao:
        'Área esportiva da cidade que serve de referência para treinos de corrida e atividades coletivas, com espaço aberto no entorno do campo.',
    },
    {
      nome: 'Avenidas da Cidade Nova',
      descricao:
        'Eixos como a Avenida Cidade de Araci e a Avenida ACM concentram fluxo de caminhantes e corredores nos horários mais frescos, com calçadas largas na zona de expansão leste.',
    },
  ],
  ciclovias:
    'A malha cicloviária ainda é limitada e concentrada em trechos de avenidas mais largas; o ciclismo de lazer e o deslocamento por bicicleta usam sobretudo as vias da Cidade Nova e o entorno do Centro.',

  clima:
    'O clima é semiárido, típico do nordeste baiano e do Território do Sisal, com vegetação de caatinga, temperaturas elevadas o ano todo, baixa umidade e chuvas escassas e concentradas em poucos meses.',
  climaTreino:
    'O calor e a baixa umidade pedem treino no início da manhã ou no fim da tarde, com hidratação reforçada e atenção ao sol forte — nos dias de estiagem mais intensa, vale priorizar horários e sombra.',

  mobilidade:
    'Serrinha é um entroncamento regional: a BR-116 corta a cidade e a liga ao restante do Nordeste, somada à BA-409 (Estrada do Sisal) e à Ferrovia Centro-Atlântica (FCA). O transporte interno é por ônibus e o terminal rodoviário articula as cidades do Sisal.',

  corridas: [
    {
      nome: 'Corrida Serrinha 150 Anos',
      descricao:
        'Prova de rua promovida pela prefeitura na programação de aniversário de emancipação do município, reunindo corredores da cidade e da região.',
    },
    {
      nome: 'Corrida Serrinha Mais',
      descricao:
        'Evento de corrida de rua do calendário local, com participação crescente de atletas amadores do Território do Sisal.',
    },
  ],
  culturaEsportiva:
    'A cidade tem forte tradição no futebol amador e de campo e uma cena de corrida de rua em ascensão, impulsionada por provas comemorativas e pelo público universitário da UNEB. O treino funcional e as academias de bairro completam o cenário esportivo local.',
  academias:
    'A oferta de academias e estúdios é compatível com uma cidade média do interior baiano, concentrada no Centro, na Cidade Nova e na Rodoviária, atendendo também moradores das cidades vizinhas do Sisal que buscam serviços em Serrinha.',

  destaquesFitness: [
    'Polo do Território do Sisal, com oferta de academias e estúdios para toda a região.',
    'Cena de corrida de rua em crescimento (Corrida Serrinha 150 Anos, Serrinha Mais).',
    'Público universitário da UNEB que movimenta a demanda por treino e atividade física.',
    'Clima semiárido quente e seco, que exige planejamento de horário e hidratação no treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Maior cidade do Território do Sisal e entroncamento rodoferroviário do nordeste baiano, Serrinha reúne comércio, serviços e uma cultura esportiva em expansão. Um personal trainer ajuda a treinar com método respeitando o clima semiárido — calor, sol forte e baixa umidade — e o seu objetivo, dentro e fora das academias da cidade.',

  vizinhas: ['feira-de-santana-ba', 'alagoinhas-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Serrinha', url: 'https://cidades.ibge.gov.br/brasil/ba/serrinha/panorama' },
    { nome: 'Prefeitura Municipal de Serrinha', url: 'https://www.serrinha.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/2930501' },
  ],
  atualizadoEm: '2026-06-29',
};
