import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'camaragibe-pe',
  nome: 'Camaragibe',
  uf: 'PE',
  estado: 'Pernambuco',
  estadoSlug: 'pernambuco',
  regiao: 'Nordeste',
  gentilico: 'camaragibense',
  tipo: 'cidade',

  populacao: 147771,
  populacaoAno: 2022,
  idhm: 0.692,
  idhmClasse: 'médio',
  altitudeM: 55,

  resumoEconomico:
    'Município da Região Metropolitana do Recife, Camaragibe tem economia ligada ao comércio, aos serviços e à forte dinâmica metropolitana — boa parte da população trabalha na capital e nas cidades vizinhas. O destaque ambiental e turístico é a região de Aldeia, na parte alta do município, com fragmentos de Mata Atlântica e clima mais ameno, que atrai quem busca natureza e atividade física ao ar livre.',

  mercado:
    'O mercado fitness combina academias de bairro, estúdios e a oferta de personal trainers que atendem em condomínios e nas áreas verdes de Aldeia. A proximidade com o Recife amplia as opções, e a região de Aldeia se firmou como polo de eventos esportivos e ecológicos, puxando a procura por treino ao ar livre.',

  bairrosNobres: ['Aldeia dos Camarás', 'Bairro dos Estados', 'Santana', 'Timbi'],
  bairrosPopulares: ['Vera Cruz', 'Santa Mônica', 'Bairro do Viana', 'João Paulo II'],

  parques: [
    {
      nome: 'APA Aldeia-Beberibe',
      descricao:
        'Área de Proteção Ambiental com remanescentes de Mata Atlântica na região de Aldeia — referência para corridas ecológicas, caminhadas e treino em meio à natureza.',
    },
    {
      nome: 'Parque Açude do Timbi',
      descricao:
        'Espaço público em torno do açude, com pista de caminhada e área de lazer usada pela comunidade para atividade física no dia a dia.',
    },
    {
      nome: 'Praça da Gruta de Nossa Senhora de Lourdes',
      descricao:
        'Praça tradicional que já recebeu corridas ambientais da cidade, ponto de encontro para caminhada e exercícios ao ar livre.',
    },
  ],
  ciclovias:
    'A malha cicloviária ainda é limitada, mas as estradas e ruas mais tranquilas da região de Aldeia são bastante usadas por ciclistas de lazer e treino, com relevo ondulado que favorece o ciclismo de subida.',

  clima:
    'O clima é tropical, quente e úmido, típico da Zona da Mata pernambucana, com chuvas concentradas no outono e no inverno. A região de Aldeia, mais alta, costuma ter temperaturas um pouco mais amenas.',
  climaTreino:
    'O treino ao ar livre rende mais cedo pela manhã ou no fim de tarde, com hidratação reforçada por causa da umidade. Em Aldeia, a sombra da mata e o ar mais fresco tornam o exercício mais confortável.',

  mobilidade:
    'Camaragibe é cortada pela BR-408, principal eixo de ligação com o Recife e a Região Metropolitana. O Terminal Integrado de Camaragibe articula linhas de ônibus do sistema metropolitano do Grande Recife, facilitando o deslocamento para a capital e cidades vizinhas.',

  corridas: [
    {
      nome: 'EcoRun de Aldeia',
      descricao:
        'Corrida ecológica realizada na região de Aldeia, em meio à Mata Atlântica da APA Aldeia-Beberibe, com forte apelo de conscientização ambiental.',
    },
    {
      nome: 'EcoRunning / Corrida Ambiental de Camaragibe',
      descricao:
        'Prova de rua com foco em meio ambiente e sustentabilidade, com largada na região da Praça da Gruta de Nossa Senhora de Lourdes.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Camaragibe tem na região de Aldeia o seu maior símbolo: trilhas, estradas arborizadas e eventos ecológicos atraem corredores e ciclistas de toda a Região Metropolitana do Recife. Nos bairros, praças e o parque do açude concentram o treino do dia a dia.',
  academias:
    'A oferta reúne academias de bairro, estúdios de treino funcional e personal trainers que atendem em condomínios e nas áreas verdes de Aldeia, complementada pelas opções da capital, a poucos quilômetros.',

  destaquesFitness: [
    'Região de Aldeia com Mata Atlântica é cenário de corridas ecológicas e trilhas.',
    'Relevo ondulado favorece treino de subida na corrida e no ciclismo.',
    'Parque do Açude do Timbi e praças concentram caminhada e exercícios de bairro.',
    'Integração pela BR-408 amplia o acesso à estrutura fitness do Grande Recife.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 260,
    mensalMax: 680,
    onlineMin: 120,
    onlineMax: 340,
  },

  conclusao:
    'Entre a Mata Atlântica de Aldeia e as praças dos bairros, Camaragibe oferece cenários variados para treinar, do relevo desafiador às pistas tranquilas. Um personal trainer ajuda a transformar essa geografia em um plano consistente, respeitando o clima quente e úmido e o seu objetivo.',

  vizinhas: ['recife-pe', 'jaboatao-dos-guararapes-pe', 'olinda-pe'],

  fontes: [
    { nome: 'IBGE Cidades — Camaragibe', url: 'https://cidades.ibge.gov.br/brasil/pe/camaragibe/panorama' },
    { nome: 'Prefeitura de Camaragibe', url: 'https://camaragibe.pe.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
