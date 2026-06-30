import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'nova-mutum-mt',
  nome: 'Nova Mutum',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'nova-mutuense',
  tipo: 'cidade',

  populacao: 55839,
  populacaoAno: 2022,
  idhm: 0.758,
  idhmClasse: 'alto',
  altitudeM: 460,

  resumoEconomico:
    'Cidade planejada do médio-norte de Mato Grosso, às margens da BR-163, Nova Mutum é um polo agroindustrial moderno. Além de grande produtora de soja, milho e algodão, a cidade verticaliza a produção transformando grãos em proteína animal, com frigoríficos de aves e suínos de porte nacional, fábricas de ração e ampla cadeia de integrados.',

  mercado:
    'Cidade de renda elevada e em crescimento, sustentada pelo agronegócio e pela agroindústria, com população jovem e perfil consumidor que mantém demanda firme por academias, personal training e eventos esportivos.',

  bairrosNobres: ['Cidade Bela', 'Residencial dos Ipês', 'Jardim das Orquídeas', 'Alto da Colina'],
  bairrosPopulares: ['Cidade Nova', 'Flor do Cerrado', 'Bela Vista', 'Jardim América'],

  parques: [
    {
      nome: 'Parque do Sol',
      descricao:
        'Parque urbano com trilhas para caminhada e corrida, área de lazer e infraestrutura esportiva — ponto de encontro dos moradores.',
    },
    {
      nome: 'Lagoa do Sapo',
      descricao:
        'Área verde em torno de lagoa, com trilhas para caminhada e ciclismo, voltada ao contato com a natureza.',
    },
    {
      nome: 'Praça dos Ipês',
      descricao:
        'Praça com estrutura de lazer, playground, área verde e passeio para caminhada.',
    },
  ],
  ciclovias:
    'Como cidade planejada de ruas largas, Nova Mutum tem trechos de ciclovia e ciclofaixa em avenidas principais, complementados por trilhas em parques como o Parque do Sol e a Lagoa do Sapo.',

  clima:
    'O clima é tropical de Cerrado em transição, quente o ano todo, com estação chuvosa no verão e estação seca bem definida no inverno (maio a setembro), quando o ar fica seco e as tardes esquentam.',
  climaTreino:
    'O calor do Cerrado e o ar seco do inverno pedem treino em horários mais frescos (manhã cedo ou fim de tarde) e atenção redobrada à hidratação.',

  mobilidade:
    'Nova Mutum é cortada pela BR-163 (eixo Cuiabá–Sinop–Pará, principal corredor logístico da soja), o que organiza o acesso à cidade e conecta o polo agroindustrial aos demais municípios da região.',

  corridas: [
    {
      nome: 'Corrida de Rua de Nova Mutum',
      descricao:
        'Prova de rua realizada no município com apoio de parceiros locais, reunindo corredores amadores e mais experientes.',
    },
    {
      nome: 'Corrida da Mulher — Troque o Salto pelo Tênis',
      descricao:
        'Corrida e caminhada feminina, com forte apelo de incentivo à atividade física e à saúde.',
    },
  ],
  culturaEsportiva:
    'O esporte amador cresce em Nova Mutum, com corridas de rua ganhando adeptos e propostas no poder público para ampliar provas e criar um calendário esportivo, somadas à boa oferta de parques e praças para treino ao ar livre.',
  academias:
    'A oferta de academias e estúdios acompanha a renda do agro e o público jovem, complementada por parques e praças com trilhas, pista de caminhada e áreas de lazer.',

  destaquesFitness: [
    'Polo agroindustrial moderno (soja, milho, algodão, aves e suínos) — renda elevada e em crescimento.',
    'Cidade planejada, de ruas largas e um dos melhores IDHM de Mato Grosso.',
    'Corridas de rua em expansão, com proposta de calendário esportivo municipal.',
    'Boa estrutura ao ar livre: Parque do Sol, Lagoa do Sapo e praças com pista de caminhada.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade planejada e polo agroindustrial do médio-norte mato-grossense, Nova Mutum une alto IDHM, renda crescente e público jovem. Um personal trainer encontra aqui um mercado promissor, bem servido por parques e praças, ajustando os treinos ao calor do Cerrado e à estação seca.',

  vizinhas: ['lucas-do-rio-verde-mt', 'sorriso-mt', 'sinop-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Nova Mutum', url: 'https://cidades.ibge.gov.br/brasil/mt/nova-mutum/panorama' },
    { nome: 'Prefeitura de Nova Mutum', url: 'https://www.novamutum.mt.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
