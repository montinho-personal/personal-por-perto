import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'monte-carmelo-mg',
  nome: 'Monte Carmelo',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'carmelitano',
  tipo: 'cidade',

  populacao: 49354,
  populacaoAno: 2024,
  idhm: 0.73,
  idhmClasse: 'alto',
  altitudeM: 870,

  resumoEconomico:
    'Monte Carmelo fica no Alto Paranaíba, dentro da região do Cerrado Mineiro — a primeira do Brasil a conquistar Indicação Geográfica e, depois, Denominação de Origem para o café. Ao lado de Araguari, Uberaba e Patrocínio, forma um dos eixos mais importantes de cafeicultura de exportação do país, com cooperativas como a Cooxupé (unidade local com capacidade para 1,5 milhão de sacas) e a monteCCer sustentando a cadeia produtiva. A cidade também é conhecida como polo cerâmico — fabricação de telhas, tijolos e artefatos de barro —, além de curtume e embalagens. Eventos como a Feira do Cerrado (cafeicultura) e a Expomonte (agropecuária, com rodeio e shows) movimentam a economia local todos os anos. Desde 2011, Monte Carmelo sedia um campus da Universidade Federal de Uberlândia (UFU), com cursos como Agronomia, Engenharia Florestal e Geologia — o que atrai população jovem e universitária à cidade.',

  mercado:
    'O mercado de personal trainer em Monte Carmelo atende um público que combina produtores rurais e profissionais ligados ao agronegócio cafeeiro com uma população universitária crescente por causa do campus da UFU. A procura tende a se concentrar em treino de força, emagrecimento e preparo físico geral, com boa parte dos atendimentos acontecendo em academias de bairro, estúdios pequenos e, cada vez mais, no formato online para quem mora na zona rural ou tem rotina de safra.',

  bairrosNobres: ['Jardim Zeny', 'Virgílio Rosa', 'Golden Park'],
  bairrosPopulares: ['Tamboril', 'Buritis', 'Celso Bueno', 'Progresso'],

  parques: [
    {
      nome: 'Parque Municipal',
      descricao:
        'Um dos principais pontos de encontro de quem treina ao ar livre em Monte Carmelo, com áreas de piquenique, trilhas leves e um lago — ambiente usado para caminhada e corrida, especialmente no fim de tarde.',
    },
    {
      nome: 'Praça dos Imigrantes',
      descricao:
        'Espaço de convivência e lazer no centro da cidade, com movimento de caminhada e ponto de encontro para atividades ao ar livre fora dos horários de calor mais forte.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e pontual: a prefeitura tem projeto de pavimentação de ciclovia registrado oficialmente, mas não há uma malha contínua e extensa pela cidade — o deslocamento de bicicleta ainda depende principalmente do compartilhamento de vias com o tráfego comum.',

  clima:
    'O clima é tropical de altitude, típico do Cerrado do Alto Paranaíba, com estações bem definidas: um período seco e ensolarado e outro chuvoso e mais nublado. As temperaturas variam tipicamente entre 14°C e 29°C ao longo do ano, com poucos extremos.',
  climaTreino:
    'Na estação seca, o ar fica mais ressecado e a amplitude térmica entre manhã e tarde é maior, favorecendo o treino ao ar livre nos horários mais amenos do dia. Na estação chuvosa, pancadas de chuva à tarde tornam recomendável treinar pela manhã ou ter uma alternativa em ambiente coberto.',

  mobilidade:
    'O acesso à cidade é feito principalmente pela MG-190, entre os trevos de Abadia dos Dourados e Estrela do Sul, com ligação também à BR-365 e à MG-223. Belo Horizonte fica a cerca de 494 km de distância, o que reforça o papel de Monte Carmelo como polo regional dentro do Alto Paranaíba.',

  corridas: [
    {
      nome: 'Corrida do Café',
      descricao:
        'Prova de rua realizada anualmente em Monte Carmelo em referência à vocação cafeeira da região, reunindo corredores locais e de cidades vizinhas do Cerrado Mineiro.',
    },
  ],
  culturaEsportiva:
    'O Ginásio Poliesportivo Presidente Tancredo Neves, com capacidade para 12 mil pessoas, é o principal equipamento multiesportivo da cidade e sedia jogos e eventos da Superintendência Regional de Ensino de Monte Carmelo nos Jogos Escolares de Minas Gerais (JEMG). A cultura esportiva também tem forte componente agropecuário, com rodeio, cavalgada e provas de laço integrando a tradicional Expomonte.',
  academias:
    'A cidade tem uma oferta diversificada para o porte populacional, incluindo academia afiliada à rede CrossFit, estúdios de pilates, academias de musculação de bairro e espaços que combinam yoga, pilates e musculação no centro — reflexo também da presença de uma população universitária ligada ao campus da UFU.',

  destaquesFitness: [
    'Monte Carmelo integra o Cerrado Mineiro, primeira região do Brasil com Indicação Geográfica e Denominação de Origem para café.',
    'Campus da UFU desde 2011 traz população universitária jovem e amplia a demanda por academias e estúdios.',
    'Ginásio Poliesportivo Presidente Tancredo Neves, com 12 mil lugares, é o principal palco esportivo da cidade.',
    'Parque Municipal e Praça dos Imigrantes são os pontos de referência para caminhada e corrida ao ar livre.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 125,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Monte Carmelo une a força do café especial do Cerrado Mineiro a uma população universitária em crescimento por causa do campus da UFU, o que diversifica a demanda por treino — do produtor rural ao estudante recém-chegado à cidade. Um personal trainer ajuda a adaptar a rotina de treino às duas estações bem marcadas do Cerrado, aproveitando o Parque Municipal e o Ginásio Poliesportivo como referências locais.',

  vizinhas: ['patrocinio-mg', 'coromandel-mg', 'estrela-do-sul-mg', 'romaria-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Monte Carmelo', url: 'https://cidades.ibge.gov.br/brasil/mg/monte-carmelo' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/3143104' },
    { nome: 'Prefeitura Municipal de Monte Carmelo/MG', url: 'https://www.montecarmelo.mg.gov.br/' },
    { nome: 'UFU — Campus Monte Carmelo', url: 'https://ufu.br/campi/campus-monte-carmelo' },
  ],
  atualizadoEm: '2026-07-04',
};
