import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'jequie-ba',
  nome: 'Jequié',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'jequieense',
  tipo: 'cidade',

  populacao: 158813,
  populacaoAno: 2022,
  idhm: 0.665,
  idhmClasse: 'médio',
  altitudeM: 215,

  resumoEconomico:
    'Conhecida como "Cidade Sol" pelo calor intenso, Jequié é polo regional de saúde, educação e comércio do sudoeste baiano, às margens do Rio de Contas. A economia se apoia em serviços, comércio e na presença da UESB (Universidade Estadual do Sudoeste da Bahia), que atrai estudantes de toda a região. A posição no entroncamento da BR-116 com a BR-330 reforça seu papel de centro logístico e de serviços.',

  mercado:
    'Como polo regional do sudoeste baiano, Jequié concentra academias e serviços de saúde que atendem também as cidades do entorno, somados ao público universitário da UESB. O calor o ano todo, marca da "Cidade Sol", impulsiona o atendimento domiciliar e em horários mais frescos, ampliando a demanda por personal trainers que adaptam o treino ao clima.',

  bairrosNobres: ['Jequiezinho', 'Mandacaru', 'Centro', 'Joaquim Romão'],
  bairrosPopulares: ['Cansanção', 'Brasil Novo', 'Curral Novo', 'KM-3'],

  parques: [
    {
      nome: 'Orla do Rio de Contas',
      descricao:
        'Área às margens do principal rio da cidade, usada para caminhada e lazer ao ar livre, um dos espaços públicos mais procurados para atividade física.',
    },
    {
      nome: 'Praça da Catedral de Santo Antônio',
      descricao:
        'Ponto central da cidade e largada tradicional das corridas e caminhadas locais, articulando o calendário esportivo de rua.',
    },
    {
      nome: 'Barragem da Pedra',
      descricao:
        'Represa do Rio de Contas próxima a Jequié, opção de área aberta para passeios e atividades ao ar livre nos arredores.',
    },
  ],
  ciclovias:
    'Jequié tem trechos de ciclovia em vias urbanas, mas a extensão total da malha cicloviária não é divulgada em fonte oficial consolidada.',

  clima:
    'O clima é quente e semiárido, de transição entre a caatinga e a mata, com temperaturas elevadas o ano todo — daí o apelido de "Cidade Sol".',
  climaTreino:
    'O calor intenso e constante pede treino nas primeiras horas da manhã ou no fim da tarde, com hidratação reforçada; ambientes climatizados e o acompanhamento domiciliar ganham força nos horários mais quentes.',

  mobilidade:
    'A cidade é cortada pela BR-116 (Rio–Bahia) e pela BR-330, entroncamento que a consolida como polo logístico e de serviços do sudoeste baiano e facilita o acesso às cidades vizinhas.',

  corridas: [
    {
      nome: 'Meia Maratona, Corrida e Caminhada de Jequié',
      descricao:
        'Prova de aniversário do município, com percursos de 21 km, 10 km, 5 km e 2 km e largada em frente à Catedral de Santo Antônio.',
    },
    {
      nome: 'Corrida e Caminhada da Catedral de Jequié',
      descricao:
        'Evento ligado à Festa de Santo Antônio, com percursos pelas principais ruas do centro, reforçando o calendário de corrida de rua local.',
    },
  ],
  culturaEsportiva:
    'Jequié tem corrida de rua em ascensão, com provas anuais ligadas ao aniversário da cidade e às festas tradicionais, partindo da Catedral de Santo Antônio. O calor exige adaptação, mas a cultura esportiva é ativa, com forte participação do público universitário da UESB.',
  academias:
    'A oferta de academias acompanha o porte de polo regional e o público universitário, com unidades concentradas no centro e nos bairros mais estruturados, complementadas pelo atendimento domiciliar nos horários de calor.',

  destaquesFitness: [
    'Polo regional de saúde e educação do sudoeste baiano, com público da UESB.',
    'Calendário de corridas de rua ligado ao aniversário da cidade e às festas tradicionais.',
    'Orla do Rio de Contas como espaço público de caminhada ao ar livre.',
    'Calor o ano todo ("Cidade Sol"), que valoriza treino em horários frescos e atendimento domiciliar.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 680,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Polo regional do sudoeste baiano às margens do Rio de Contas, Jequié combina vida universitária, comércio aquecido e o calor constante da "Cidade Sol". Um personal trainer ajuda a montar uma rotina segura nos horários mais frescos e a aproveitar a orla e as corridas locais com um plano sob medida.',

  vizinhas: ['vitoria-da-conquista-ba', 'itabuna-ba', 'feira-de-santana-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Jequié', url: 'https://cidades.ibge.gov.br/brasil/ba/jequie/panorama' },
    { nome: 'Prefeitura Municipal de Jequié', url: 'https://www.jequie.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
