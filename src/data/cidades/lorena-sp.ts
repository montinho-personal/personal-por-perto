import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'lorena-sp',
  nome: 'Lorena',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'lorenense',
  tipo: 'cidade',

  populacao: 84855,
  populacaoAno: 2022,
  idhm: 0.766,
  idhmClasse: 'alto',
  altitudeM: 524,

  resumoEconomico:
    'Cidade média do Vale do Paraíba paulista, às margens do Rio Paraíba do Sul e cortada pela Via Dutra (BR-116), Lorena é um polo de ensino superior da região, com a Escola de Engenharia de Lorena da USP (EEL-USP) e as Faculdades Integradas Teresa D\'Ávila (FATEA). A economia combina educação, comércio, serviços e turismo religioso, favorecido pela proximidade de Aparecida.',

  mercado:
    'O mercado fitness é o de uma cidade média universitária do Vale: a presença de estudantes e servidores das faculdades sustenta academias de bairro, estúdios de treinamento funcional e atendimento domiciliar, com personal trainers atuando tanto em academias quanto no formato em casa e ao ar livre.',

  bairrosNobres: ['Centro', 'Vila Nunes', 'Vila Hepacaré', 'Olaria'],
  bairrosPopulares: ['Vila Passos', 'Cabelinha', 'Cruz', 'Santo Antônio'],

  parques: [
    {
      nome: 'Orla do Rio Paraíba do Sul',
      descricao:
        'Faixa às margens do principal rio do Vale, usada para caminhada e corrida leve, com vista para o rio que corta a cidade.',
    },
    {
      nome: 'Praças e centros esportivos de bairro',
      descricao:
        'A Prefeitura mantém polos esportivos espalhados pelos bairros, como a Quadra Mário Covas, na Vila Passos, com modalidades gratuitas para a população.',
    },
  ],
  ciclovias:
    'A malha cicloviária é pontual, concentrada em trechos urbanos; muitos ciclistas e corredores usam vias de menor movimento e a orla do Rio Paraíba do Sul.',

  clima:
    'O clima é tropical de altitude, típico do Vale do Paraíba (cidade a cerca de 524 m), com verão quente e chuvoso e inverno mais seco e ameno, influenciado pela proximidade das serras do Mar e da Mantiqueira.',
  climaTreino:
    'No verão chuvoso, o treino ao ar livre rende mais cedo de manhã ou no fim de tarde; o inverno seco e ameno abre boas janelas para correr ao longo do dia.',

  mobilidade:
    'Lorena é cortada pela Rodovia Presidente Dutra (BR-116), eixo São Paulo–Rio, o que facilita o acesso a cidades vizinhas como Guaratinguetá e a Aparecida; dentro do município, os deslocamentos são curtos, típicos de cidade média.',

  corridas: [
    {
      nome: 'Volta USP de Lorena',
      descricao:
        'Etapa do Circuito USP de Corrida e Caminhada (CUCCa) realizada no campus e no entorno da EEL-USP em Lorena, reunindo comunidade acadêmica e moradores.',
    },
    {
      nome: 'Provas de rua do calendário regional',
      descricao:
        'A cidade recebe e participa de corridas de rua do Vale do Paraíba, aproveitando o circuito esportivo da região e a proximidade de Aparecida e Guaratinguetá.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é apoiada pelos programas municipais, que oferecem dezenas de modalidades em polos esportivos nos bairros, e ganha reforço da presença universitária, que movimenta corrida e atividades ao ar livre.',
  academias:
    'A oferta reúne academias de bairro, estúdios de treinamento funcional e musculação, complementados por praças e centros esportivos públicos com atividades gratuitas.',

  academiasProximas: [
    { nome: 'Academias locais', detalhe: 'musculação e funcional no Centro e bairros' },
    { nome: 'Orla do Rio Paraíba do Sul', detalhe: 'percurso plano tradicional de caminhada e corrida' },
    { nome: 'Centros esportivos de bairro', detalhe: 'estrutura pública para treino orientado' },
  ],

  destaquesFitness: [
    'Polo universitário do Vale (EEL-USP e FATEA) que movimenta corrida e treino ao ar livre.',
    'Orla do Rio Paraíba do Sul como espaço para caminhada e corrida leve.',
    'Volta USP de Lorena, etapa do circuito de corrida da USP na cidade.',
    'Polos esportivos municipais gratuitos espalhados pelos bairros.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 270,
    mensalMax: 740,
    onlineMin: 130,
    onlineMax: 370,
  },

  conclusao:
    'Cidade média universitária do Vale do Paraíba, Lorena alia a presença da EEL-USP e da FATEA, a orla do Rio Paraíba do Sul e a proximidade de Aparecida a um mercado fitness de academias e atendimento domiciliar. Um personal trainer ajuda a estruturar o treino, seja em casa, em academia ou ao ar livre, respeitando o clima de altitude do Vale.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Lorena?',
      resposta:
        'A orla do Rio Paraíba do Sul é o percurso clássico — plano, contínuo e agradável para corrida e caminhada —, complementada pelas academias do Centro, pelos centros esportivos de bairro e pelo atendimento em casa. A Volta USP de Lorena, tradicional prova universitária, mantém a cena de corrida viva e dá alvo ao calendário de quem treina orientado no Vale do Paraíba.',
    },
    {
      pergunta: 'Dá para treinar corrida com personal em Lorena?',
      resposta:
        'Dá — e com vantagem geográfica: a orla do Paraíba oferece rodagem plana para base aeróbica, e a posição de Lorena no Vale permite incluir subidas de verdade nos treinos mais fortes, rumo à Serra da Mantiqueira. A Volta USP é a porta de entrada clássica; dali muitos avançam para provas maiores do Vale. A preparação combina corrida na orla, força em academia e progressão de volume calibrada — o papel do personal é exatamente segurar o ritmo dessa evolução.',
    },
    {
      pergunta: 'Há acompanhamento em Lorena para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Lorena, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, casa ou a orla do Paraíba), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['guaratingueta-sp', 'pindamonhangaba-sp', 'taubate-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Lorena', url: 'https://cidades.ibge.gov.br/brasil/sp/lorena/panorama' },
    { nome: 'Prefeitura de Lorena', url: 'https://www.lorena.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/352720' },
  ],
  atualizadoEm: '2026-07-28',
};
