import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cairu-ba',
  nome: 'Cairu',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'cairuense',
  tipo: 'cidade',

  populacao: 17761,
  populacaoAno: 2022,
  idhm: 0.630,
  idhmClasse: 'médio',
  altitudeM: 4,

  resumoEconomico:
    'Cairu é o maior município-arquipélago do Brasil, formado pelas ilhas de Tinharé, Boipeba e Cairu, na região do Baixo Sul baiano. É nesse território, sem nenhuma ligação rodoviária com o continente, que fica Morro de São Paulo, um dos destinos de praia mais procurados do país e reconhecido pelo Ministério do Turismo como um dos principais indutores do turismo internacional no Brasil. O arquipélago recebe centenas de milhares de visitantes por ano, o que faz do turismo o principal motor econômico do município, ao lado da pesca artesanal, da mariscagem (camarão, caranguejo, siri, guaiamu), do extrativismo da piaçava e do cultivo de coco e dendê nas comunidades mais afastadas da faixa turística.',

  mercado:
    'O mercado de personal trainer em Cairu é pequeno e atípico, moldado pelo fato de o município viver do turismo em uma ilha sem carros. A procura vem menos de uma população residente numerosa e mais do fluxo constante de turistas hospedados em pousadas de Morro de São Paulo e Boipeba, muitos em busca de aulas avulsas, treino funcional na areia ou acompanhamento pontual durante a estadia. Também há espaço para atendimento a moradores e a quem trabalha na rede de turismo local, geralmente em formato de treino ao ar livre ou em pequenos espaços de academia, já que a estrutura convencional de grandes redes de fitness não existe na ilha.',

  bairrosNobres: ['Segunda Praia (Morro de São Paulo)', 'Terceira Praia (Morro de São Paulo)', 'Vila de Boipeba'],
  bairrosPopulares: ['Vila de Cairu (sede)', 'Gamboa', 'Galeão', 'Garapuá'],

  parques: [
    {
      nome: 'Praias do Morro de São Paulo',
      descricao:
        'A sequência de Primeira a Quinta Praia, unidas por uma faixa de areia e trilhas costeiras, é o principal espaço de caminhada, corrida na areia e treino ao ar livre do distrito, além de ponto de partida para surf, stand up paddle e mergulho.',
    },
    {
      nome: 'Ilha de Boipeba e Garapuá',
      descricao:
        'Ao sul do arquipélago, a Ilha de Boipeba e a vila de pescadores de Garapuá preservam praias mais vazias e piscinas naturais, com deslocamento a pé, de bicicleta ou tração animal por não haver circulação de carros.',
    },
    {
      nome: 'APA das Ilhas de Tinharé e Boipeba',
      descricao:
        'Área de Proteção Ambiental estadual que cobre boa parte do território de Cairu, com manguezais, restingas, remanescentes de Mata Atlântica e as trilhas que ligam vilas como Gamboa, Galeão e Morro de São Paulo.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária estruturada; como Morro de São Paulo e as demais vilas do arquipélago não têm circulação de automóveis, o deslocamento a pé, de bicicleta ou carrinho de mão é a norma, e as próprias ruas de areia e passarelas cumprem a função de vias para caminhada e pedal.',

  clima:
    'O clima do arquipélago é tropical quente e úmido, sem estação seca bem definida, com chuvas mais frequentes de abril a julho e pluviosidade média anual em torno de 1.750 mm. A umidade é constante ao longo do ano, com ventos regulares vindos de leste a sudoeste.',
  climaTreino:
    'O calor e a umidade elevada pedem treinos nos horários mais amenos, de manhã cedo ou no fim de tarde, com hidratação reforçada; a proteção solar é essencial dado o alto índice de insolação da região, e os meses mais chuvosos (abril a julho) podem limitar atividades a céu aberto na faixa de areia.',

  mobilidade:
    'Cairu não tem nenhuma ligação rodoviária direta com o continente: o acesso a Morro de São Paulo e às demais vilas do arquipélago é feito por mar ou ar. As principais rotas são a lancha ou catamarã saindo do Terminal Náutico de Salvador, e o barco lento ou a lancha rápida a partir do Terminal Hidroviário de Valença, cidade vizinha no continente que serve de porta de entrada rodoviária mais próxima. Dentro das ilhas, o deslocamento é feito a pé, de bicicleta, carrinho de mão ou tração animal, já que carros não circulam nas vilas.',

  corridas: [],
  culturaEsportiva:
    'A vida esportiva do arquipélago gira em torno do mar: surf nas praias de Morro de São Paulo (especialmente na Primeira e na Quarta Praia), stand up paddle, caiaque, mergulho livre e com cilindro nos recifes de coral, além das trilhas costeiras que ligam vilas como Gamboa e Garapuá, muitas vezes percorridas na maré baixa. A ausência de carros faz da caminhada o meio de locomoção mais comum, o que mantém boa parte da população fisicamente ativa no dia a dia.',
  academias:
    'A oferta de academias tradicionais é bastante limitada, restrita a pequenas estruturas locais em Morro de São Paulo; boa parte do treino na ilha acontece ao ar livre, na areia ou em espaços de pousadas, muitas vezes conduzido por profissionais que atendem turistas e moradores de forma itinerante.',

  destaquesFitness: [
    'Maior município-arquipélago do Brasil, sem nenhuma ligação rodoviária com o continente — acesso só por mar ou ar.',
    'Sede de Morro de São Paulo, um dos destinos de praia mais procurados do país, com economia voltada ao turismo.',
    'Praias, trilhas costeiras e recifes que sustentam surf, stand up paddle e mergulho como atividades centrais.',
    'Vilas sem circulação de carros, onde caminhar e pedalar são os meios de deslocamento do dia a dia.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 180,
    mensalMin: 300,
    mensalMax: 800,
    onlineMin: 150,
    onlineMax: 400,
  },

  conclusao:
    'Ilha, arquipélago e destino turístico, Cairu impõe uma rotina de treino diferente da maioria das cidades: sem carros, com calor constante e cercada de praia e mar por todos os lados. Um personal trainer ajuda a aproveitar esse cenário a favor do condicionamento físico, adaptando o treino ao clima, à geografia sem asfalto e à realidade de quem vive ou passa uma temporada na ilha.',

  vizinhas: ['valenca-ba', 'salvador-ba', 'ilheus-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Cairu', url: 'https://cidades.ibge.gov.br/brasil/ba/cairu/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'INEMA — APA das Ilhas de Tinharé e Boipeba', url: 'https://www.inema.ba.gov.br/gestao-2/unidades-de-conservacao/apa/apa-ilhas-do-tinhare-e-boipeba/' },
  ],
  atualizadoEm: '2026-07-02',
};
