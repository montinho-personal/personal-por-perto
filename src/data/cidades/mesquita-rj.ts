import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'mesquita-rj',
  nome: 'Mesquita',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  estadoSlug: 'rio-de-janeiro',
  regiao: 'Sudeste',
  gentilico: 'mesquitense',
  tipo: 'cidade',

  populacao: 167128,
  populacaoAno: 2022,
  idhm: 0.737,
  idhmClasse: 'alto',
  altitudeM: 20,

  resumoEconomico:
    'Município jovem da Baixada Fluminense, Mesquita foi emancipada de Nova Iguaçu em 1999 e tem na cidade vizinha sua principal referência regional de empregos. A economia é fortemente baseada em comércio de bairro e serviços, com população urbana adensada e conurbada com Nilópolis, Nova Iguaçu e São João de Meriti. A proximidade da Rodovia Presidente Dutra (BR-116) integra a cidade ao eixo logístico da região metropolitana.',

  mercado:
    'É um mercado popular, típico de cidade adensada da Baixada: academias de bairro espalhadas pelos eixos comerciais e forte presença do personal trainer domiciliar e de praças e academias ao ar livre. A Vila Olímpica Municipal e os equipamentos públicos ampliam o acesso ao treino para quem busca alternativa de baixo custo.',

  bairrosNobres: ['Centro', 'Cosmorama', 'Vila Emil', 'Edson Passos'],
  bairrosPopulares: ['Santo Elias', 'Banco de Areia', 'Rocha Sobrinho', 'Coréia'],

  parques: [
    {
      nome: 'Vila Olímpica Municipal de Mesquita',
      descricao:
        'Complexo esportivo público em Vila Emil, na Avenida Baronesa de Mesquita, com estrutura para atividades físicas, quadras e ponto de partida de provas de rua da cidade.',
    },
    {
      nome: 'Parque Natural Municipal de Nova Iguaçu (Maciço do Mendanha)',
      descricao:
        'Área de Mata Atlântica com trilhas, cachoeiras e poços, acessada também por Mesquita pelo bairro Coréia — opção de caminhada, trilha e treino na natureza perto da cidade.',
    },
    {
      nome: 'Praças e academias ao ar livre',
      descricao:
        'Espaços públicos com equipamentos de ginástica, iluminação e sinalização, distribuídos pelos bairros para treino livre e caminhada.',
    },
  ],
  ciclovias:
    'Mesquita conta com cerca de 6,1 km de ciclovias e ciclofaixas, segundo a prefeitura, em uma malha em consolidação pela cidade.',

  clima:
    'O clima é tropical quente e úmido, típico da Baixada Fluminense, com verões abafados.',
  climaTreino:
    'O calor e a umidade pedem treino ao ar livre no início da manhã ou no fim da tarde, com hidratação reforçada — o relevo plano do núcleo urbano favorece corrida e caminhada de rua.',

  mobilidade:
    'A cidade é conurbada com Nilópolis, Nova Iguaçu e São João de Meriti, fica próxima da Rodovia Presidente Dutra (BR-116) e se apoia em ônibus e no trem da SuperVia da região para a ligação com a capital e o restante da Baixada.',

  corridas: [
    {
      nome: 'Estácio Run — Circuito Mesquita',
      descricao:
        'Corrida de rua com largada na Vila Olímpica de Mesquita, passando por bairros como Santo Elias, que arrecada alimentos para instituições parceiras.',
    },
    {
      nome: 'Mesquita Run 4K',
      descricao:
        'Prova de rua de 4 km realizada na cidade, parte de uma agenda de corrida de bairro em crescimento.',
    },
  ],
  culturaEsportiva:
    'Mesquita aposta em esporte e lazer de base comunitária, com atividades esportivas gratuitas oferecidas pela Secretaria municipal, a Vila Olímpica como centro de referência e um calendário de corridas de rua que envolve os bairros.',
  academias:
    'A oferta é dominada por academias de bairro distribuídas pelos eixos comerciais do Centro, Cosmorama e Edson Passos, complementadas por treino domiciliar, academias ao ar livre e a estrutura pública da Vila Olímpica.',

  destaquesFitness: [
    'Vila Olímpica Municipal em Vila Emil para treino e provas de rua.',
    'Cerca de 6,1 km de ciclovias e ciclofaixas pela cidade.',
    'Acesso às trilhas do Mendanha pelo bairro Coréia.',
    'Corridas de rua de bairro (Estácio Run — Circuito Mesquita, Mesquita Run 4K).',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Cidade jovem e popular da Baixada Fluminense, Mesquita combina densidade urbana, academias de bairro e equipamentos públicos como a Vila Olímpica. Um personal trainer ajuda a estruturar o treino — em casa, na praça ou na academia do bairro — respeitando o clima quente e a rotina de quem se desloca pela região metropolitana.',

  vizinhas: ['nova-iguacu-rj', 'nilopolis-rj', 'sao-joao-de-meriti-rj', 'belford-roxo-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Mesquita', url: 'https://cidades.ibge.gov.br/brasil/rj/mesquita/panorama' },
    { nome: 'Prefeitura de Mesquita', url: 'https://prefeitura.mesquita.rj.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/330285' },
  ],
  atualizadoEm: '2026-06-29',
};
