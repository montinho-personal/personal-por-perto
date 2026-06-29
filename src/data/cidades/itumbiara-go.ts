import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itumbiara-go',
  nome: 'Itumbiara',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'itumbiarense',
  tipo: 'cidade',

  populacao: 113838,
  populacaoAno: 2022,
  idhm: 0.752,
  idhmClasse: 'alto',
  altitudeM: 448,

  resumoEconomico:
    'Polo agroindustrial do sul goiano, na divisa de Goiás com Minas Gerais às margens do rio Paranaíba, Itumbiara concentra produção e processamento de grãos (soja e milho), usinas de biocombustíveis e indústria de biodiesel. A cidade também abriga a Usina Hidrelétrica de Itumbiara, de Furnas, no rio Paranaíba, e funciona como entreposto logístico entre os dois estados.',

  mercado:
    'A economia ligada ao agronegócio e à agroindústria sustenta uma classe média com renda estável, o que mantém demanda por academias, estúdios e acompanhamento personalizado em uma cidade média do interior goiano.',

  bairrosNobres: ['Setor Central', 'Jardim Guanabara', 'Jardim Santa Cruz', 'Parque das Nações'],
  bairrosPopulares: ['Setor Marabá', 'Bandeirante', 'Esperança', 'Promissão'],

  parques: [
    {
      nome: 'Avenida Beira Rio',
      descricao:
        'Orla urbana ao longo do rio Paranaíba, com quadras e áreas de lazer; é o principal ponto de caminhada e corrida da cidade e sede de etapas do circuito local.',
    },
    {
      nome: 'Lago de Itumbiara',
      descricao:
        'Reservatório da Usina Hidrelétrica de Itumbiara, de Furnas, no rio Paranaíba; cartão-postal da região, com prática de esportes náuticos e ecoturismo na divisa Goiás–Minas.',
    },
    {
      nome: 'Parque Sucupira',
      descricao:
        'Área verde para lazer em família, com espaço para caminhada e atividades ao ar livre.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária não é divulgada em fonte oficial; a orla da Avenida Beira Rio concentra o uso recreativo de bicicleta.',

  clima:
    'O clima é tropical de cerrado (Aw), típico do sul goiano, com verão chuvoso (de outubro a abril) e estação seca acentuada (de maio a setembro), quando a umidade do ar cai bastante.',
  climaTreino:
    'Os meses secos trazem baixa umidade e calor — atenção à hidratação e às vias respiratórias, preferindo treinos no início da manhã ou no fim da tarde; a orla do Paranaíba ameniza o calor para a corrida ao ar livre.',

  mobilidade:
    'Itumbiara é cortada pela BR-153 (eixo Norte–Sul que liga Goiânia a Uberlândia e ao Triângulo Mineiro) e fica na divisa de Goiás com Minas Gerais, ligada a Araporã (MG) pela ponte sobre o rio Paranaíba.',

  corridas: [
    {
      nome: 'Circuito Itumbiarense de Corrida de Rua',
      descricao:
        'Circuito local disputado em várias etapas ao longo do ano, com provas de 5 km e 10 km e largada e chegada na Avenida Beira Rio.',
    },
    {
      nome: 'Meia Maratona de Itumbiara',
      descricao:
        'Prova de 21 km incorporada ao calendário do circuito itumbiarense, reunindo corredores da região da divisa Goiás–Minas.',
    },
  ],
  culturaEsportiva:
    'A orla do rio Paranaíba na Avenida Beira Rio reúne caminhantes e corredores no dia a dia, e o circuito itumbiarense de corrida de rua mantém um calendário regular de provas com apoio local.',
  academias:
    'A oferta reúne academias e estúdios voltados a uma classe média ligada ao agronegócio, complementada pela orla da Beira Rio e pelo Parque Sucupira para o treino ao ar livre.',

  destaquesFitness: [
    'Avenida Beira Rio, no rio Paranaíba, como principal eixo de corrida e caminhada.',
    'Lago de Itumbiara, da usina de Furnas, para esportes náuticos e lazer ativo.',
    'Circuito itumbiarense de corrida de rua com calendário regular (5 km, 10 km e meia maratona).',
    'Renda estável do polo agroindustrial (grãos e biodiesel) sustentando o mercado fitness.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 290,
    mensalMax: 720,
    onlineMin: 140,
    onlineMax: 360,
  },

  conclusao:
    'Polo agroindustrial na divisa de Goiás com Minas Gerais, Itumbiara une renda estável do agronegócio, a orla do rio Paranaíba e um calendário ativo de corridas. Um personal trainer ajuda a aproveitar a Beira Rio e o lago com método, com atenção à hidratação na seca do cerrado.',

  vizinhas: ['goiania-go', 'rio-verde-go', 'catalao-go'],

  fontes: [
    { nome: 'IBGE Cidades — Itumbiara', url: 'https://cidades.ibge.gov.br/brasil/go/itumbiara/panorama' },
    { nome: 'Prefeitura de Itumbiara', url: 'https://itumbiara.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
