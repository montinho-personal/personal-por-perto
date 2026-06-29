import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-goncalo-rj',
  nome: 'São Gonçalo',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'são-gonçalense',
  tipo: 'cidade',

  populacao: 896744,
  populacaoAno: 2022,
  idhm: 0.739,
  idhmClasse: 'alto',
  altitudeM: 19,

  resumoEconomico:
    'Uma das maiores cidades do estado do Rio de Janeiro, São Gonçalo fica no leste da Região Metropolitana e tem economia de base comercial e de serviços, com mercado imobiliário em alta. O bairro de Alcântara é o maior polo comercial da cidade — à frente até do Centro — e concentra boa parte dos serviços, incluindo academias.',

  mercado:
    'A oferta privada é complementada por uma forte atuação pública: o projeto "São Gonçalo em Movimento" mantém ginástica em dezenas de núcleos e academias ao ar livre pela cidade. O Parque RJ Nosso Sonho virou o grande hub de esporte e lazer do Leste Fluminense.',

  bairrosNobres: ['Maria Paula', 'Alcântara', 'Centro', 'Estrela do Norte'],
  bairrosPopulares: ['Neves', 'Zé Garoto', 'Parada Quarenta', 'Gradim'],

  parques: [
    {
      nome: 'Parque RJ Nosso Sonho',
      descricao:
        'O antigo Piscinão de São Gonçalo, hoje o maior polo de esporte e lazer do Leste Fluminense: pista de atletismo, academia ao ar livre, skatepark e quadras.',
    },
    {
      nome: 'Praça do Zé Garoto',
      descricao:
        'Praça requalificada com urbanismo e iluminação, espaço público de lazer e ponto de encontro para caminhada no dia a dia.',
    },
    {
      nome: 'Praça do Gradim',
      descricao:
        'Incluída no programa de praças renovadas, sedia aulas gratuitas de ginástica do projeto "São Gonçalo em Movimento".',
    },
  ],
  ciclovias:
    'A cidade vem ampliando a estrutura para bicicletas; a extensão consolidada da malha cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical quente e úmido, típico da Região Metropolitana do Rio.',
  climaTreino:
    'O calor pede treino no início da manhã ou no fim da tarde, com boa hidratação — os parques e praças com academia ao ar livre ajudam a manter a rotina perto de casa.',

  mobilidade:
    'São Gonçalo não é atendida por trem e depende fortemente de ônibus, sobretudo pela Rodovia Niterói–Manilha (BR-101), em obras de ampliação, e pela ligação com Niterói; a estação de barcas mais próxima fica em Charitas, na cidade vizinha.',

  corridas: [
    {
      nome: 'Corrida e Caminhada Sest Senat',
      descricao:
        'Prova com largada na Praça Doutor Luiz Palmier, no Centro, parte do calendário esportivo da cidade.',
    },
    {
      nome: 'Corrida Rústica de Alcântara',
      descricao:
        'Provas de 6 km (corrida) e 3 km (caminhada) com largada em Alcântara, o principal polo comercial gonçalense.',
    },
  ],
  culturaEsportiva:
    'São Gonçalo aposta forte no esporte público gratuito, com o projeto "São Gonçalo em Movimento", núcleos de ginástica e praças renovadas, além de corridas de rua no Centro e em Alcântara — uma forma de democratizar a atividade física em uma cidade muito populosa.',
  academias:
    'A oferta privada se concentra em Alcântara e no Centro, complementada pela ampla rede pública de academias ao ar livre e pelo Parque RJ Nosso Sonho.',

  destaquesFitness: [
    'Parque RJ Nosso Sonho: pista de atletismo, academia ao ar livre e quadras (estrutura nova).',
    'Rede pública de núcleos de ginástica e academias ao ar livre ("São Gonçalo em Movimento").',
    'Alcântara como grande polo comercial, com concentração de serviços e academias.',
    'Corridas de rua locais (Sest Senat no Centro; Rústica de Alcântara).',
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
    'Uma das cidades mais populosas do Rio, São Gonçalo investe forte no esporte público — do Parque RJ Nosso Sonho às praças com academia ao ar livre. Um personal trainer ajuda a aproveitar essa estrutura com método, perto de casa, e a manter a constância apesar dos deslocamentos.',

  vizinhas: ['rio-de-janeiro-rj', 'niteroi-rj', 'duque-de-caxias-rj'],

  fontes: [
    { nome: 'IBGE Cidades — São Gonçalo', url: 'https://cidades.ibge.gov.br/brasil/rj/sao-goncalo/panorama' },
    { nome: 'Prefeitura de São Gonçalo', url: 'https://www.saogoncalo.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
