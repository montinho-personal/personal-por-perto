import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-paulo-sp',
  nome: 'São Paulo',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'paulistano',

  populacao: 11451999,
  populacaoAno: 2022,
  idhm: 0.805,
  idhmClasse: 'muito alto',
  altitudeM: 760,

  resumoEconomico:
    'Principal centro financeiro da América Latina e sede da B3, a maior bolsa de valores das Américas, São Paulo tem a economia mais diversificada do país. Os eixos da Avenida Paulista, da Faria Lima e do Itaim Bibi concentram bancos, gestoras e seguradoras — um público corporativo com rotina intensa que movimenta boa parte da demanda por treino antes e depois do expediente.',

  bairrosNobres: [
    'Jardins',
    'Itaim Bibi',
    'Vila Nova Conceição',
    'Moema',
    'Vila Olímpia',
    'Pinheiros',
    'Vila Mariana',
    'Morumbi',
  ],
  bairrosPopulares: ['Capão Redondo', 'Itaquera', 'São Mateus', 'Brasilândia', 'Cidade Tiradentes'],

  parques: [
    {
      nome: 'Parque Ibirapuera',
      descricao:
        'Cartão-postal do esporte paulistano, com cerca de 1,5 milhão de m². A volta do lago tem aproximadamente 3 km planos e o entorno arborizado oferece um circuito de cooper de terra batida de cerca de 6 km, muito procurado de manhã cedo e no fim da tarde.',
    },
    {
      nome: 'Parque Villa-Lobos',
      descricao:
        'Na zona oeste, é o parque mais técnico para corredores: três pistas de cooper sinalizadas por cor — amarela (700 m), vermelha (1.400 m) e azul (2.100 m) — além de ciclovia e quadras, o que facilita montar treinos intervalados com distância controlada.',
    },
    {
      nome: 'Parque do Povo e Parque da Aclimação',
      descricao:
        'Opções menores e bem distribuídas pela cidade, úteis para quem busca treino funcional, mobilidade e caminhada perto de casa sem encarar grandes deslocamentos.',
    },
  ],
  ciclovias:
    'São Paulo tem a maior malha cicloviária do Brasil — 731 km, com meta de alcançar 1.000 km —, incluindo um trecho de 1,9 km que liga a Avenida Paulista ao Ibirapuera (dado da Prefeitura de São Paulo).',

  clima:
    'O clima é subtropical úmido, com quatro estações bem marcadas. A média anual fica em torno de 20 °C, com invernos amenos (perto de 13 °C) e verões que chegam a 29 °C. A precipitação anual é de cerca de 1.658 mm, concentrada no verão — não à toa a capital é conhecida como a "terra da garoa".',
  climaTreino:
    'O clima ameno o ano inteiro favorece o treino ao ar livre, mas o verão chuvoso e os picos de poluição em dias secos de inverno pedem flexibilidade: ter um plano B em academia ou condomínio evita que a rotina trave nos dias ruins.',

  mobilidade:
    'A capital tem a maior rede metroferroviária do país — cerca de 388 km, com 14 linhas e mais de 180 estações, somando metrô e CPTM. Muitos parques e academias ficam a poucos minutos de uma estação, o que torna viável treinar perto do trabalho mesmo morando longe.',

  corridas: [
    {
      nome: 'Corrida Internacional de São Silvestre',
      descricao:
        'A prova mais tradicional do Brasil, disputada todo 31 de dezembro: 15 km com largada e chegada na Avenida Paulista. A edição de 2025 marcou 100 anos de história e reuniu cerca de 55 mil corredores.',
    },
    {
      nome: 'Circuito de corridas de rua',
      descricao:
        'Além da São Silvestre, a cidade tem um dos calendários de corrida de rua mais intensos do país, com provas de 5 km, 10 km, 21 km e 42 km praticamente todo fim de semana.',
    },
  ],
  culturaEsportiva:
    'São Paulo tem a cultura de corrida de rua mais forte do Brasil e um público fitness exigente. A combinação de grandes parques, ampla malha cicloviária e calendário esportivo lotado cria um ambiente em que treinar faz parte da identidade da cidade.',
  academias:
    'É o mercado fitness mais maduro do país: berço da Smart Fit (fundada na capital em 2001, hoje a maior rede da América Latina), com forte presença em bairros, shoppings e estações de metrô. No segmento boutique, a Bodytech é referência, e a oferta de CrossFit e treino funcional é vasta.',

  destaquesFitness: [
    'Maior malha cicloviária do Brasil (731 km).',
    'Cultura de corrida de rua mais forte do país, simbolizada pela São Silvestre.',
    'Mercado de academias e estúdios o mais competitivo e variado do Brasil.',
    'Parques de referência (Ibirapuera e Villa-Lobos) com circuitos de cooper medidos.',
  ],

  precos: {
    avulsaMin: 80,
    avulsaMax: 200,
    mensalMin: 400,
    mensalMax: 1200,
    onlineMin: 200,
    onlineMax: 500,
  },

  vizinhas: ['guarulhos-sp', 'osasco-sp', 'santo-andre-sp', 'barueri-sp'],

  fontes: [
    { nome: 'IBGE Cidades — São Paulo', url: 'https://cidades.ibge.gov.br/brasil/sp/sao-paulo/panorama' },
    { nome: 'Prefeitura de São Paulo — Ciclovias', url: 'https://www.prefeitura.sp.gov.br/' },
    { nome: 'Corrida Internacional de São Silvestre', url: 'https://www.saosilvestre.com.br/' },
  ],
  atualizadoEm: '2026-06-28',
};
