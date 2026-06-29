import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'nova-iguacu-rj',
  nome: 'Nova Iguaçu',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'nova-iguaçuano',
  tipo: 'cidade',

  populacao: 785867,
  populacaoAno: 2022,
  idhm: 0.713,
  idhmClasse: 'alto',
  altitudeM: 25,

  resumoEconomico:
    'Principal polo econômico da Baixada Fluminense, Nova Iguaçu é um grande centro regional de comércio, serviços e indústria, funcionando como hub de empregos para toda a região. O eixo da Via Light concentra comércio e serviços — incluindo boa parte da oferta fitness — e a cidade atrai investimento imobiliário crescente.',

  mercado:
    'A presença de redes é consolidada, com a Smart Fit em unidades como a da Via Light, eixo que reúne academias e comércio fitness. A cena de corrida de rua está em expansão, e a Vila Olímpica municipal amplia o acesso público ao treino.',

  bairrosNobres: ['Centro', 'Caonze', 'Comendador Soares', 'Jardim Nossa Senhora das Graças'],
  bairrosPopulares: ['Bairro da Luz', 'Santa Rita', 'Cabuçu', 'Austin'],

  parques: [
    {
      nome: 'Parque Natural Municipal de Nova Iguaçu (Mendanha)',
      descricao:
        'No Maciço do Mendanha, reúne cerca de 1.100 hectares de Mata Atlântica, com trilhas, cachoeiras e poços — ideal para caminhada, trail e treino na natureza.',
    },
    {
      nome: 'Vila Olímpica de Nova Iguaçu',
      descricao:
        'Complexo esportivo municipal com pista e estrutura para corrida, ponto de partida de várias provas de rua da cidade.',
    },
    {
      nome: 'Eixo da Via Light',
      descricao:
        'Corredor que concentra academias e comércio fitness e serve de palco para corridas de rua na cidade.',
    },
  ],
  ciclovias:
    'A cidade vem ampliando sua estrutura para bicicletas; a extensão consolidada da malha cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente e úmido, típico da Baixada Fluminense.',
  climaTreino:
    'O calor e a umidade pedem treino ao ar livre no início da manhã ou no fim da tarde, com hidratação reforçada — as trilhas do Mendanha oferecem sombra e ar mais fresco.',

  mobilidade:
    'Nova Iguaçu é servida pelo trem da SuperVia (Ramal Japeri) e pelas vias Dutra (BR-116) e Via Light, com forte ligação à capital e ao restante da Baixada.',

  corridas: [
    {
      nome: 'Iguaçu Run',
      descricao:
        'Corrida de rua com provas de 5 km e caminhada de 3 km, realizada na Via Light — parte de uma cena de corrida em expansão.',
    },
    {
      nome: 'Etapa Nova Iguaçu do Circuito Rio Antigo',
      descricao:
        'Prova de rua que integra a cidade a um circuito regional, com largada em pontos centrais.',
    },
  ],
  culturaEsportiva:
    'Nova Iguaçu tem um calendário de corridas de rua cada vez mais ativo e projetos públicos da Secretaria de Esporte e Lazer, com a Vila Olímpica e o Mendanha como pontos de referência para quem treina.',
  academias:
    'A oferta reúne a Smart Fit e academias locais, concentradas no eixo da Via Light e no Centro, complementadas pela Vila Olímpica e pelas trilhas do Mendanha.',

  destaquesFitness: [
    'Trilhas e cachoeiras do Parque Natural do Mendanha para treino ao ar livre.',
    'Eixo Via Light: academias (Smart Fit) e palco de corridas.',
    'Vila Olímpica municipal com infraestrutura esportiva.',
    'Cena de corrida de rua em expansão (Iguaçu Run, Circuito Rio Antigo).',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 410,
  },

  conclusao:
    'Maior cidade da Baixada Fluminense, Nova Iguaçu combina a Mata Atlântica do Mendanha com a estrutura urbana da Via Light. Um personal trainer ajuda a aproveitar trilhas, parques e academias com método, respeitando o clima quente e a rotina de quem se desloca para a capital.',

  vizinhas: ['rio-de-janeiro-rj', 'duque-de-caxias-rj', 'sao-goncalo-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Nova Iguaçu', url: 'https://cidades.ibge.gov.br/brasil/rj/nova-iguacu/panorama' },
    { nome: 'Prefeitura de Nova Iguaçu', url: 'https://www.novaiguacu.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
