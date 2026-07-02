import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'nobres-mt',
  nome: 'Nobres',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'nobrense',
  tipo: 'cidade',

  populacao: 15492,
  populacaoAno: 2022,
  idhm: 0.699,
  idhmClasse: 'médio',
  altitudeM: 200,

  resumoEconomico:
    'No médio-norte de Mato Grosso, Nobres se tornou um dos destinos de ecoturismo de água doce mais procurados do país, funcionando como alternativa a Bonito (MS) para quem busca flutuação em rios de águas cristalinas, grutas e cachoeiras — atrativos como o Aquário Encantado e a Lagoa das Araras aparecem em listas recentes de melhores destinos naturais do Brasil. Ao lado do turismo, a economia do município é sustentada pela indústria do calcário (com fábricas que abastecem cimenteiras e o agronegócio com calcário agrícola e dolomítico) e pela agropecuária, combinação que resulta em um PIB per capita superior à média do estado.',

  mercado:
    'O mercado fitness de Nobres é o de uma cidade pequena do interior, com academias locais de porte reduzido concentradas no Centro. O fluxo constante de turistas que chegam para flutuar, mergulhar e caminhar em trilhas cria uma demanda paralela por preparo físico e orientação de atividade ao ar livre, o que abre espaço para o personal trainer atuar tanto com moradores quanto com visitantes que buscam condicionamento para os passeios mais exigentes.',

  bairrosNobres: ['Centro', 'Jardim Glória', 'Jardim Petrópolis', 'São José'],
  bairrosPopulares: ['Aeroporto', 'Jardim Paraná', 'Jardim Carolina'],

  parques: [
    {
      nome: 'Aquário Encantado',
      descricao:
        'Um dos passeios mais procurados da região, no rio Salobra: flutuação em águas cristalinas cercadas por mata nativa, com trecho de caminhada até o ponto de entrada na água — atividade que exige preparo físico leve e serve de estímulo para quem quer manter a forma na cidade.',
    },
    {
      nome: 'Lagoa das Araras',
      descricao:
        'Santuário natural no distrito de Bom Jardim, a cerca de 65 km do centro pela MT-241, com trilha para caminhada ou pedal e observação de araras-azuis e araras-canindé retornando aos ninhos ao entardecer.',
    },
    {
      nome: 'Parque Estadual Gruta da Lagoa Azul',
      descricao:
        'Unidade de conservação criada em 2000 que protege a Gruta da Lagoa Azul, onde o rio Salobra emerge formando um lago de tom azulado entre espeleotemas; a visitação é restrita para preservar as formações, mas o entorno reforça a vocação da região para o turismo de natureza.',
    },
  ],
  ciclovias:
    'Não há estrutura cicloviária relevante na área urbana; a bicicleta aparece mais como meio de exploração das estradas de terra e trilhas que levam aos atrativos naturais do distrito de Bom Jardim.',

  clima:
    'O clima é tropical (Aw na classificação de Köppen), com temperatura média anual em torno de 25,8 °C. As chuvas se concentram de outubro a março, enquanto o período de maio a setembro é seco, quando os rios ficam mais baixos e as águas mais transparentes — a época mais procurada para flutuação e mergulho.',
  climaTreino:
    'O calor pede treinos no início da manhã ou no fim da tarde, com hidratação reforçada, principalmente na estação chuvosa; no período seco, as manhãs mais amenas e o ar mais limpo favorecem tanto o treino ao ar livre quanto os passeios de flutuação e trilha.',

  mobilidade:
    'O acesso a Nobres a partir de Cuiabá, a cerca de 140 km, é feito pela MT-010 até Rosário do Oeste e depois pela BR-364. Dentro do município, a MT-241 liga a sede ao distrito de Bom Jardim, polo dos principais atrativos turísticos, cerca de 60 km ao norte. O deslocamento interno é feito majoritariamente por carro, moto ou pelas vans que atendem os passeios.',

  corridas: [
    {
      nome: 'Corrida de Rua do 7º BPM',
      descricao:
        'Prova de rua organizada em parceria entre a Polícia Militar e associações locais, com edições recorrentes na cidade; mobiliza corredores e caminhantes de Nobres e da região de Rosário Oeste.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Nobres gira em torno da água e da natureza: flutuação e mergulho livre em rios de águas cristalinas, trilhas a pé ou de bicicleta até cachoeiras e mirantes, observação de aves na Lagoa das Araras e o interesse crescente por espeleologia turística nas grutas da região. A isso se soma o calendário local de corridas de rua, que reforça o hábito do exercício fora do circuito das academias.',
  academias:
    'A oferta de academias é pequena e concentrada no Centro, complementada por iniciativas locais de treino como a plataforma Nobres Fit; boa parte da preparação física na cidade também acontece de forma informal, ligada ao ritmo de caminhada e trilha exigido pelos passeios turísticos.',

  destaquesFitness: [
    'Um dos polos de ecoturismo de água doce mais procurados do país, com flutuação em rios de águas cristalinas como o Salobra.',
    'Lagoa das Araras e Parque Estadual Gruta da Lagoa Azul reforçam a vocação da região para trilha, observação de aves e espeleologia.',
    'Clima tropical com estação seca bem definida (maio a setembro), período mais indicado para atividades ao ar livre e para as águas mais transparentes.',
    'Economia apoiada na indústria do calcário e na agropecuária, com PIB per capita acima da média de Mato Grosso.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade pequena que se tornou referência nacional em ecoturismo de água doce, Nobres combina o ritmo do calcário e da agropecuária com um calendário de flutuação, trilhas e observação de aves que pede corpo preparado. Um personal trainer ajuda tanto o morador quanto o visitante a organizar o treino em torno do calor e das estações de seca e chuva, aproveitando o que a cidade tem de mais valioso: a natureza ao redor.',

  vizinhas: ['diamantino-mt', 'nova-mutum-mt', 'cuiaba-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Nobres', url: 'https://cidades.ibge.gov.br/brasil/mt/nobres/panorama' },
    { nome: 'Prefeitura de Nobres', url: 'https://www.nobres.mt.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
