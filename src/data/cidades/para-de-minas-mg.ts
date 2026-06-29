import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'para-de-minas-mg',
  nome: 'Pará de Minas',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'paraminense',
  tipo: 'cidade',

  populacao: 97139,
  populacaoAno: 2022,
  idhm: 0.725,
  idhmClasse: 'alto',
  altitudeM: 732,

  resumoEconomico:
    'Polo industrial do centro-oeste mineiro, Pará de Minas é conhecida como a "Capital do Frango": a avicultura e o abate de aves são atividades-âncora da economia, ao lado da produção de ração animal, do setor moveleiro e de uma indústria diversificada ligada ao agronegócio. Os serviços respondem pela maior fatia do PIB, sustentando uma cidade média com renda e comércio fortes.',

  mercado:
    'Com renda industrial consolidada e perfil de cidade média, Pará de Minas tem demanda fitness estabelecida; a proximidade com Belo Horizonte e a oferta de praças e academias ao ar livre reforçam uma cultura de atividade física no dia a dia dos moradores.',

  bairrosNobres: ['Centro', 'Cidade Nova', 'Senador Valadares', 'Jardim Santa Rita'],
  bairrosPopulares: ['Padre Libério', 'Recanto da Lagoa', 'Cores de Minas', 'São José'],

  parques: [
    {
      nome: 'Praça da Bíblia (Recanto da Lagoa)',
      descricao:
        'Ponto de concentração de eventos esportivos da cidade e espaço de uso familiar para caminhada e treino ao ar livre no entorno da lagoa.',
    },
    {
      nome: 'Praça Afonso Pena (Centro)',
      descricao:
        'Praça central e cartão-postal da cidade, usada para caminhada e encontros, no coração administrativo de Pará de Minas.',
    },
    {
      nome: 'Academias ao ar livre em praças',
      descricao:
        'A cidade mantém equipamentos de ginástica instalados em praças de bairros como apoio à prática popular de atividade física.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária não é amplamente divulgada em fonte oficial; o uso esportivo se concentra mais em praças, ruas de bairro e nas academias ao ar livre.',

  clima:
    'O clima é tropical de altitude, com verões quentes e chuvosos e invernos mais secos e amenos, típicos do centro-oeste mineiro.',
  climaTreino:
    'O inverno seco e ameno favorece o treino ao ar livre; no verão, calor e chuvas concentradas no fim da tarde pedem atenção ao horário e à hidratação.',

  mobilidade:
    'Pará de Minas é acessada principalmente pela rodovia MG-050, que a conecta a Belo Horizonte (cerca de 85 km, aproximadamente 1h30) e ao restante da região, posição que reforça seu papel de polo regional.',

  corridas: [
    {
      nome: 'Circuito Conheça Pará de Minas Correndo',
      descricao:
        'Circuito municipal de corrida de rua em etapas, com percursos que passam por bairros como Recanto da Lagoa, CAIC e Cores de Minas, levando a prova a diferentes regiões da cidade.',
    },
    {
      nome: 'Provas de rua do calendário regional',
      descricao:
        'Pará de Minas integra o calendário de corridas do centro-oeste mineiro, com adesão crescente de corredores amadores e assessorias esportivas.',
    },
  ],
  culturaEsportiva:
    'A cidade tem cultura esportiva ativa, com circuito municipal de corrida de rua percorrendo diferentes bairros, academias ao ar livre em praças e a influência da vizinha Belo Horizonte no movimento de corrida e treino funcional.',
  academias:
    'A oferta combina academias e estúdios sustentados pela renda industrial do município, com destaque para os equipamentos públicos de ginástica instalados em praças de bairros.',

  destaquesFitness: [
    'Circuito Conheça Pará de Minas Correndo percorrendo vários bairros.',
    'Academias ao ar livre em praças como apoio à prática popular.',
    'Clima tropical de altitude favorável ao treino ao ar livre no inverno.',
    'Proximidade com Belo Horizonte (MG-050) e sua cena de corrida.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 280,
    mensalMax: 720,
    onlineMin: 140,
    onlineMax: 360,
  },

  conclusao:
    'Capital do Frango e polo industrial do centro-oeste mineiro, Pará de Minas alia renda consolidada, praças com academias ao ar livre e um circuito de corrida que percorre seus bairros. Um personal trainer ajuda a aproveitar esses espaços com método, ajustando os horários ao clima tropical de altitude.',

  vizinhas: ['belo-horizonte-mg', 'contagem-mg', 'divinopolis-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Pará de Minas', url: 'https://cidades.ibge.gov.br/brasil/mg/para-de-minas/panorama' },
    { nome: 'Prefeitura de Pará de Minas', url: 'https://portal-novo.parademinas.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
