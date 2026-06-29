import type { Estado } from '../lib/types';

/**
 * Estados (hubs regionais). Arquitetura preparada para os 26 estados + DF.
 * Populados conforme as cidades vão sendo publicadas.
 */
export const estados: Estado[] = [
  {
    slug: 'sao-paulo',
    nome: 'São Paulo',
    uf: 'SP',
    regiao: 'Sudeste',
    capital: 'São Paulo',
    descricao:
      'O estado mais populoso e economicamente forte do Brasil concentra o mercado de personal training mais maduro do país, das grandes redes de academia da capital aos polos corporativos de Alphaville e ao Vale do Silício brasileiro, em Campinas.',
    atualizadoEm: '2026-06-28',
  },
  {
    slug: 'rio-de-janeiro',
    nome: 'Rio de Janeiro',
    uf: 'RJ',
    regiao: 'Sudeste',
    capital: 'Rio de Janeiro',
    descricao:
      'Com a cidade que tem a maior quantidade de academias do país e uma cultura de praia, corrida e estética que move a rotina dos cariocas, o Rio de Janeiro é uma das praças mais fortes do Brasil para quem busca treino e acompanhamento profissional.',
    atualizadoEm: '2026-06-29',
  },
  {
    slug: 'minas-gerais',
    nome: 'Minas Gerais',
    uf: 'MG',
    regiao: 'Sudeste',
    capital: 'Belo Horizonte',
    descricao:
      'Segundo estado do país em número de academias, Minas Gerais tem em Belo Horizonte um mercado fitness consolidado e, no Triângulo Mineiro, polos de interior como Uberlândia com forte cultura de treino.',
    atualizadoEm: '2026-06-29',
  },
  {
    slug: 'espirito-santo',
    nome: 'Espírito Santo',
    uf: 'ES',
    regiao: 'Sudeste',
    capital: 'Vitória',
    descricao:
      'Lar de Vitória, a capital líder nacional em prática de atividade física, o Espírito Santo combina orla, alta qualidade de vida e uma população que leva o treino a sério.',
    atualizadoEm: '2026-06-29',
  },
  {
    slug: 'parana',
    nome: 'Paraná',
    uf: 'PR',
    regiao: 'Sul',
    capital: 'Curitiba',
    descricao:
      'Referência nacional em planejamento urbano e qualidade de vida, o Paraná tem na capital, Curitiba, uma das culturas de parques e corrida de rua mais consolidadas do Sul do Brasil.',
    atualizadoEm: '2026-06-28',
  },
  {
    slug: 'rio-grande-do-sul',
    nome: 'Rio Grande do Sul',
    uf: 'RS',
    regiao: 'Sul',
    capital: 'Porto Alegre',
    descricao:
      'Entre os estados com mais academias do país, o Rio Grande do Sul tem em Porto Alegre uma capital de alta renda e escolaridade, com público exigente e forte adesão à musculação e à corrida.',
    atualizadoEm: '2026-06-29',
  },
  {
    slug: 'santa-catarina',
    nome: 'Santa Catarina',
    uf: 'SC',
    regiao: 'Sul',
    capital: 'Florianópolis',
    descricao:
      'Santa Catarina reúne algumas das praças mais fortes em musculação e estética do Brasil: Florianópolis, com grandes centros de treino, e Balneário Camboriú, epicentro de um mercado fitness premium.',
    atualizadoEm: '2026-06-29',
  },
  {
    slug: 'distrito-federal',
    nome: 'Distrito Federal',
    uf: 'DF',
    regiao: 'Centro-Oeste',
    capital: 'Brasília',
    descricao:
      'Brasília reúne a maior renda per capita entre as unidades da federação e alta escolaridade — combinação que se traduz em forte demanda por consultoria personalizada e acompanhamento online.',
    atualizadoEm: '2026-06-29',
  },
  {
    slug: 'goias',
    nome: 'Goiás',
    uf: 'GO',
    regiao: 'Centro-Oeste',
    capital: 'Goiânia',
    descricao:
      'Goiás tem em Goiânia um polo nacional de fisiculturismo e musculação, com forte federação, campeonatos de alto nível e uma cultura de treino que vai muito além do esperado para o porte da cidade.',
    atualizadoEm: '2026-06-29',
  },
  {
    slug: 'ceara',
    nome: 'Ceará',
    uf: 'CE',
    regiao: 'Nordeste',
    capital: 'Fortaleza',
    descricao:
      'Com Fortaleza, uma das maiores cidades do país, o Ceará une cultura de praia, calçadões movimentados e um mercado fitness em franca expansão.',
    atualizadoEm: '2026-06-29',
  },
  {
    slug: 'bahia',
    nome: 'Bahia',
    uf: 'BA',
    regiao: 'Nordeste',
    capital: 'Salvador',
    descricao:
      'Quarto estado do país em número de academias, a Bahia tem em Salvador uma capital de grande audiência, cultura de corpo e praia e demanda crescente por treino personalizado.',
    atualizadoEm: '2026-06-29',
  },
  {
    slug: 'pernambuco',
    nome: 'Pernambuco',
    uf: 'PE',
    regiao: 'Nordeste',
    capital: 'Recife',
    descricao:
      'Recife lidera o mercado fitness pernambucano, com forte cultura litorânea, calçadões para corrida e uma demanda urbana aquecida por personal trainers e consultoria online.',
    atualizadoEm: '2026-06-29',
  },
  {
    slug: 'sergipe',
    nome: 'Sergipe',
    uf: 'SE',
    regiao: 'Nordeste',
    capital: 'Aracaju',
    descricao:
      'Aracaju se destaca pela alta adesão à atividade física e por uma orla planejada que convida ao treino ao ar livre — uma das capitais mais ativas do Nordeste.',
    atualizadoEm: '2026-06-29',
  },
  {
    slug: 'paraiba',
    nome: 'Paraíba',
    uf: 'PB',
    regiao: 'Nordeste',
    capital: 'João Pessoa',
    descricao:
      'João Pessoa une qualidade de vida, orla preservada e clima favorável o ano inteiro, formando um cenário propício para a prática de exercícios e o trabalho de personal trainers.',
    atualizadoEm: '2026-06-29',
  },
  {
    slug: 'rio-grande-do-norte',
    nome: 'Rio Grande do Norte',
    uf: 'RN',
    regiao: 'Nordeste',
    capital: 'Natal',
    descricao:
      'Natal combina praias, dunas e calçadões com uma cultura de corpo e estética típica do litoral nordestino, sustentando um mercado fitness ativo.',
    atualizadoEm: '2026-06-29',
  },
  {
    slug: 'amazonas',
    nome: 'Amazonas',
    uf: 'AM',
    regiao: 'Norte',
    capital: 'Manaus',
    descricao:
      'Manaus, a maior cidade do Norte, vive a expansão do seu mercado fitness, com uma grande audiência urbana e demanda crescente por treino orientado.',
    atualizadoEm: '2026-06-29',
  },
  {
    slug: 'tocantins',
    nome: 'Tocantins',
    uf: 'TO',
    regiao: 'Norte',
    capital: 'Palmas',
    descricao:
      'Capital planejada e jovem, Palmas surpreende pela altíssima adesão à atividade física — é destaque nacional na prática entre mulheres — e por uma malha generosa de espaços públicos para treino.',
    atualizadoEm: '2026-06-29',
  },
];
