import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cavalcante-go',
  nome: 'Cavalcante',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'cavalcantense',
  tipo: 'cidade',

  populacao: 9583,
  populacaoAno: 2022,
  idhm: 0.584,
  idhmClasse: 'baixo',
  altitudeM: 800,

  resumoEconomico:
    'Na porção norte da Chapada dos Veadeiros, Cavalcante guarda dois patrimônios que definem sua economia e sua identidade: as cachoeiras monumentais do cerrado — com a Santa Bárbara, de águas azul-turquesa, como cartão-postal — e o território Kalunga, o maior sítio histórico quilombola do país, com mais de 230 mil hectares. Segundo o Censo 2022, 57% da população do município é quilombola, e o turismo de base comunitária cresce como vetor de renda.',

  mercado:
    'O turismo de natureza dita o ritmo: as trilhas até as cachoeiras exigem preparo real, e guias, condutores e pousadeiros vivem do próprio condicionamento. O mercado formal de treino é pequeno e próximo — e a natureza, com desníveis de serra e travessias de cerrado, é a academia principal.',

  bairrosNobres: ['Centro', 'Vila Maravilha', 'Alto da Boa Vista', 'Setor Aeroporto'],
  bairrosPopulares: ['Rua do Meio', 'Vila São José', 'Morro Encantado', 'Limoeiro'],

  parques: [
    {
      nome: 'Cachoeira Santa Bárbara e o território Kalunga',
      descricao:
        'No coração do Sítio Histórico Kalunga, a partir da comunidade Engenho II, a trilha até as águas azul-turquesa da Santa Bárbara é feita com condutores locais — turismo de base comunitária no seu melhor.',
    },
    {
      nome: 'Cachoeiras do cerrado norte',
      descricao:
        'Capivara, Candaru e dezenas de outras quedas pontuam o município — trilhas de sol aberto e desnível que pedem fôlego e pernas treinadas.',
    },
    {
      nome: 'Serras da Chapada dos Veadeiros',
      descricao:
        'O norte da chapada guarda travessias e mirantes menos visitados que os de Alto Paraíso — cenário de caminhadas longas em estado bruto.',
    },
  ],
  ciclovias:
    'O pedal acontece nas estradas de terra do cerrado e nas rotas entre as comunidades; não há malha cicloviária urbana.',

  clima:
    'Clima tropical de altitude do cerrado: seca longa e ensolarada no inverno — a alta temporada das trilhas — e chuvas de verão que enchem as cachoeiras.',
  climaTreino:
    'Na seca, treina-se ao ar livre o dia quase todo; nas águas, as manhãs são a janela segura — e as trilhas pedem atenção redobrada ao tempo.',

  mobilidade:
    'Cavalcante fica a cerca de 100 km de Alto Paraíso e a 320 km de Brasília, por estradas que misturam asfalto e terra — o isolamento relativo preservou o cerrado e a cultura Kalunga.',

  corridas: [
    {
      nome: 'Travessias e provas do cerrado',
      descricao:
        'A região da Chapada dos Veadeiros recebe travessias, trail runs e desafios de montanha que passam pelas serras e comunidades do território.',
    },
  ],
  culturaEsportiva:
    'Andar é cultura em Cavalcante: as distâncias do território Kalunga sempre se venceram a pé, e hoje o trekking das cachoeiras une visitantes e condutores locais na mesma trilha.',
  academias:
    'A oferta formal é pequena — academias locais e treino orientado próximo —, e o condicionamento real se constrói nas trilhas, nas serras e no dia a dia do cerrado.',

  destaquesFitness: [
    'Cachoeira Santa Bárbara e o turismo de base comunitária Kalunga.',
    'Trilhas de cerrado com desnível real — preparo físico como bilhete de entrada.',
    'Norte da Chapada dos Veadeiros, menos visitado e mais selvagem.',
    'Seca de inverno com sol garantido para treinos ao ar livre.',
  ],

  precos: {
    avulsaMin: 40,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 600,
    onlineMin: 100,
    onlineMax: 320,
  },

  conclusao:
    'Guardiã do território Kalunga e das águas azuis da Santa Bárbara, Cavalcante é o lado selvagem da Chapada dos Veadeiros. Um personal trainer prepara o corpo para as trilhas do cerrado — e transforma a natureza monumental do município em treino com propósito.',

  vizinhas: ['formosa-go'],

  fontes: [
    { nome: 'IBGE Cidades — Cavalcante', url: 'https://cidades.ibge.gov.br/brasil/go/cavalcante/panorama' },
    { nome: 'Prefeitura de Cavalcante', url: 'https://cavalcante.go.gov.br/' },
    { nome: 'Observatório Terras Quilombolas — Kalunga', url: 'https://cpisp.org.br/kalunga/' },
  ],
  atualizadoEm: '2026-08-04',
};
