import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-borja-rs',
  nome: 'São Borja',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'são-borjense',
  tipo: 'cidade',

  populacao: 59676,
  populacaoAno: 2022,
  idhm: 0.736,
  idhmClasse: 'alto',
  altitudeM: 96,

  resumoEconomico:
    'Cidade mais antiga do Rio Grande do Sul, fundada em 1682 como a primeira dos Sete Povos das Missões, São Borja fica na Fronteira Oeste, às margens do rio Uruguai, na divisa com a Argentina. Conhecida como a "Terra dos Presidentes" por ser berço de Getúlio Vargas e João Goulart, tem a economia ancorada na agropecuária — com destaque para a lavoura de arroz irrigado e para a pecuária de corte. O comércio e a logística de fronteira ganharam força com a Ponte Internacional da Integração, que liga a cidade a Santo Tomé, na Argentina.',

  mercado:
    'Por ser uma cidade média do interior gaúcho, o mercado fitness de São Borja é concentrado em academias locais de musculação e treino funcional, sem grandes redes nacionais. A procura por personal trainers tende a vir de quem busca acompanhamento individualizado e de praticantes que aproveitam as praças e a orla do rio Uruguai para treinar ao ar livre, especialmente nos meses de clima mais ameno.',

  bairrosNobres: ['Centro', 'Passo', 'Nossa Senhora das Graças', 'Aparício Mariense'],
  bairrosPopulares: ['Bettim', 'Pirahy', 'Itacherê', 'Tomazetti'],

  parques: [
    {
      nome: 'Cais do Porto (bairro do Passo)',
      descricao:
        'Espaço de lazer às margens do rio Uruguai, no bairro do Passo, conhecido pelo nascer e pôr do sol e pelos bares à beira-rio — trecho usado para caminhada e treino ao ar livre com vista para a água.',
    },
    {
      nome: 'Praça Getúlio Vargas (antiga Praça XV de Novembro)',
      descricao:
        'Praça central e ponto de encontro tradicional da cidade, cercada pelo casario histórico; o entorno arborizado serve de apoio para caminhadas e atividades leves no dia a dia.',
    },
    {
      nome: 'Orla do rio Uruguai',
      descricao:
        'A faixa junto ao rio que define a fronteira com a Argentina reúne áreas verdes e calçadões usados para caminhada e corrida, condicionados aos ciclos de cheia do Uruguai.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas avenidas centrais e nas vias próximas à orla do rio Uruguai.',

  clima:
    'O clima é subtropical, com verões quentes e úmidos e invernos curtos e frescos. A temperatura costuma variar ao longo do ano de cerca de 11 °C a 33 °C, com ondas de calor no verão e geadas ocasionais no inverno; a proximidade do rio Uruguai deixa o ar mais úmido.',
  climaTreino:
    'No verão quente e úmido, o ideal é treinar bem cedo ou no fim da tarde, com hidratação reforçada; o inverno frio favorece atividades ao ar livre, mas exige aquecimento cuidadoso. Nos picos de calor, ambientes climatizados são a alternativa mais confortável.',

  mobilidade:
    'Cidade de fronteira, São Borja se conecta a Santo Tomé, na Argentina, pela Ponte Internacional da Integração sobre o rio Uruguai. O acesso rodoviário se dá principalmente pela BR-287, que liga a cidade ao centro do estado, com ligações também pela BR-472; o transporte urbano é feito por ônibus.',

  corridas: [
    {
      nome: 'Rústica e Meia Maratona Internacional Cidade de São Borja/Santo Tomé',
      descricao:
        'Prova de corrida de rua de caráter internacional, realizada de forma recorrente em parceria com Santo Tomé (Argentina), com percursos que vão da rústica curta à meia maratona (21 km), reforçando a vocação fronteiriça da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso das praças centrais e da orla do rio Uruguai para caminhada e corrida, a tradição gaúcha e as provas de rua que aproximam São Borja da vizinha Santo Tomé, na Argentina.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média da Fronteira Oeste gaúcha.',

  destaquesFitness: [
    'Terra dos Presidentes (Getúlio Vargas e João Goulart) e a mais antiga cidade do Rio Grande do Sul, primeira dos Sete Povos das Missões.',
    'Orla do rio Uruguai e Cais do Porto como espaços de caminhada e corrida ao ar livre.',
    'Cidade de fronteira ligada a Santo Tomé (Argentina) pela Ponte Internacional da Integração.',
    'Clima subtropical, com verão quente e úmido e inverno frio, que pede planejamento de horário no treino.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Histórica, fronteiriça e cercada pela paisagem do rio Uruguai, São Borja combina tradição gaúcha, vida ao ar livre e o clima subtropical da Fronteira Oeste. Um personal trainer ajuda a organizar a rotina respeitando o calor do verão e o frio do inverno, aproveitando as praças e a orla do rio para manter a constância ao longo do ano.',

  vizinhas: ['uruguaiana-rs', 'santo-angelo-rs'],

  fontes: [
    { nome: 'IBGE Cidades — São Borja', url: 'https://cidades.ibge.gov.br/brasil/rs/sao-borja/panorama' },
    { nome: 'Prefeitura de São Borja', url: 'https://www.saoborja.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
