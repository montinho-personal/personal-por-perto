import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-jose-sc',
  nome: 'São José',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'josefense',
  tipo: 'cidade',

  populacao: 270299,
  populacaoAno: 2022,
  idhm: 0.809,
  idhmClasse: 'muito alto',

  resumoEconomico:
    'Integrante da Grande Florianópolis e totalmente conurbada à capital (e a Palhoça e Biguaçu), São José tem economia dominada por serviços, seguidos da indústria. É um polo de comércio (com o Kobrasol como coração econômico), com forte geração de empregos e uma das maiores bases empresariais de Santa Catarina.',

  mercado:
    'A densidade urbana alta e a renda elevada sustentam redes e estúdios em Campinas, Kobrasol e Barreiros; a orla revitalizada incentiva corrida e treino ao ar livre.',

  bairrosNobres: ['Kobrasol', 'Campinas', 'Praia Comprida', 'Forquilhinhas'],
  bairrosPopulares: ['Areias', 'Barreiros', 'Picadas do Sul', 'Sertão do Maruim'],

  parques: [
    {
      nome: 'Parque Beira-Mar de São José',
      descricao:
        'Cerca de 30 mil m² em Kobrasol, com pista de caminhada de 2,5 km, ciclovia, academia ao ar livre e quadras poliesportivas.',
    },
    {
      nome: 'Parque Linear de Serraria',
      descricao:
        'Tem ciclovia, pista de caminhada, academia ao ar livre e quadras, inaugurado em 2024.',
    },
    {
      nome: 'Praça Eugênio Raulino Koerich',
      descricao:
        'Em Kobrasol, com academia ao ar livre revitalizada e área de convívio.',
    },
  ],
  ciclovias:
    'Há ciclovia ao longo da Avenida Beira-Mar de São José e nos novos parques lineares; a extensão total municipal ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é subtropical litorâneo, ameno, mais frio e úmido no inverno do que o Nordeste.',
  climaTreino:
    'O treino ao ar livre é confortável boa parte do ano; o inverno pede agasalho, mas permite corrida na orla.',

  mobilidade:
    'São José é cortada de norte a sul pela BR-101 na faixa leste; o novo Contorno Viário da Grande Florianópolis aliviou o tráfego, e a conurbação com Florianópolis é total.',

  corridas: [
    {
      nome: 'Corrida Polícia Civil — São José',
      descricao:
        'Prova de rua com largada na Beira-Mar de São José.',
    },
    {
      nome: 'Corridas da Beira-Mar de São José',
      descricao:
        'Eventos organizados pela associação local de corredores (ACORSJ) ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A orla da Beira-Mar é o principal palco de caminhada, corrida e treino funcional, com uma associação local de corredores ativa e investimento público recente em academias ao ar livre.',
  academias:
    'A oferta reúne redes fortes em Campinas e Kobrasol e estúdios, com público de IDHM muito alto, complementada pela Beira-Mar e pelos novos parques lineares.',

  destaquesFitness: [
    'Beira-Mar de São José: pista de 2,5 km, ciclovia e academia ao ar livre.',
    'Redes fortes em Campinas/Kobrasol.',
    'IDHM muito alto e renda elevada, com público fitness exigente.',
    'Onda de novos parques lineares ampliando os espaços públicos de treino.',
  ],

  precos: {
    avulsaMin: 75,
    avulsaMax: 180,
    mensalMin: 380,
    mensalMax: 1000,
    onlineMin: 180,
    onlineMax: 450,
  },

  conclusao:
    'Conurbada a Florianópolis e de IDHM muito alto, São José tem na Beira-Mar uma academia a céu aberto e uma rede de parques em expansão. Um personal trainer ajuda a aproveitar a orla com método, num clima ameno boa parte do ano.',

  vizinhas: ['florianopolis-sc', 'itajai-sc'],

  fontes: [
    { nome: 'IBGE Cidades — São José', url: 'https://cidades.ibge.gov.br/brasil/sc/sao-jose/panorama' },
    { nome: 'Prefeitura de São José', url: 'https://www.saojose.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
