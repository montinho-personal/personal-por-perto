import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'silvania-go',
  nome: 'Silvânia',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'silvaniense',
  tipo: 'cidade',

  populacao: 22245,
  populacaoAno: 2022,
  idhm: 0.709,
  idhmClasse: 'alto',
  pibPerCapita: 71665,
  pibPerCapitaAno: 2023,
  altitudeM: 898,

  resumoEconomico:
    'No centro-sul de Goiás, a cerca de 77 km de Goiânia, Silvânia nasceu como arraial de garimpo sob o nome de Bonfim e recebeu a denominação atual em 1943, em homenagem à família Silva. Ainda no início do século 20, a cidade despontou como centro educacional do estado — chegou a ser chamada de "Atenas de Goiás" por sediar escolas que formaram poetas e escritores goianos, como Léo Lyra e Antônio Américo do Brasil. Hoje sua economia é predominantemente agropecuária: o município integra a bacia leiteira goiana, com rebanho bovino de cerca de 119 mil cabeças, e soma lavouras de soja e milho à tradicional fabricação de tijolos e telhas em olarias locais.',

  mercado:
    'Com pouco mais de 22 mil habitantes e proximidade relativa de Goiânia, Silvânia tem um mercado fitness pequeno, apoiado em academias de bairro e no interesse crescente por acompanhamento individual entre produtores rurais, comerciantes e servidores públicos. A tranquilidade do centro histórico e o acesso às cachoeiras da zona rural favorecem quem busca treinar ao ar livre fora da rotina da academia.',

  bairrosNobres: ['Centro', 'Setor Central'],
  bairrosPopulares: ['Bonfim', 'Setor Sul'],

  parques: [
    {
      nome: 'Praça da Matriz',
      descricao:
        'No coração do centro histórico, ao lado da Igreja Matriz de Nossa Senhora da Abadia, construída no século 18. É o principal ponto de encontro e caminhada da cidade, cercado pelo casario colonial preservado.',
    },
    {
      nome: 'Mirante do Cristo',
      descricao:
        'Localizado na entrada da cidade, próximo à antiga Estação Ferroviária Caturama (hoje Estação de Silvânia), restaurada pelo Iphan-GO em 2013. É um dos pontos mais procurados para caminhada e para apreciar a vista do município.',
    },
    {
      nome: 'Floresta Nacional de Silvânia',
      descricao:
        'Unidade de conservação federal com 486 hectares de Cerrado preservado nos arredores da cidade, usada para trilhas e contato com a natureza, ainda sem infraestrutura extensa de visitação.',
    },
    {
      nome: 'Cachoeiras do entorno rural',
      descricao:
        'O município reúne cachoeiras como as do Lageado, do Rio dos Bois, do Eli, do Paradão e do Chimbica, além da Cachoeira do Cervo e da prainha do Rio Jurubatuba — destinos de trilha e lazer ao ar livre na zona rural.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária estruturada; o deslocamento de bicicleta acontece nas ruas do centro histórico e nas estradas de terra que levam às cachoeiras e à zona rural.',

  clima:
    'O clima é tropical de altitude, com verão chuvoso e inverno seco, característico do Cerrado goiano; a altitude elevada do município — em torno de 898 metros — deixa as manhãs de inverno mais frias que em cidades goianas de altitude menor, com baixa umidade relativa do ar entre maio e setembro.',
  climaTreino:
    'Nas manhãs secas de inverno, o frio e a baixa umidade pedem aquecimento mais cuidadoso e atenção à hidratação; no verão chuvoso, o ideal é treinar ao ar livre pela manhã, antes das pancadas de chuva da tarde, mais comuns entre outubro e abril.',

  mobilidade:
    'Silvânia é servida pelas rodovias GO-010, GO-139, GO-330 e GO-437, que conectam o município a Goiânia (77 km), Vianópolis, Luziânia e Orizona. O deslocamento interno é predominantemente feito a pé ou de carro, dado o porte compacto do centro histórico da cidade.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva local se concentra na Praça da Matriz e no Mirante do Cristo, pontos de caminhada no dia a dia, e nas cachoeiras da zona rural, procuradas nos fins de semana. Não há um calendário consolidado de corridas de rua amplamente divulgado no município.',
  academias:
    'A oferta de estruturas de treino é formada por academias de bairro e pequenos estúdios de musculação, concentrados no Centro, com porte compatível com uma cidade pequena do interior goiano relativamente próxima da capital.',

  destaquesFitness: [
    'Cidade histórica conhecida como "Atenas de Goiás", com centro colonial preservado em torno da Praça da Matriz.',
    'Integra a bacia leiteira goiana, com rebanho bovino de cerca de 119 mil cabeças e forte tradição de agricultura familiar.',
    'Cachoeiras do Lageado, do Rio dos Bois e do Cervo, entre outras, como destinos de trilha na zona rural.',
    'Altitude elevada (cerca de 898 m) deixa o inverno mais frio, exigindo aquecimento e agasalho no treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 115,
    onlineMax: 330,
  },

  conclusao:
    'Cidade histórica do centro-sul goiano, conhecida como "Atenas de Goiás", Silvânia combina a tranquilidade do centro colonial com uma economia de base leiteira e agrícola. Um personal trainer ajuda a estruturar uma rotina de treino constante, aproveitando a Praça da Matriz e as cachoeiras do entorno, com atenção ao frio das manhãs de inverno na altitude elevada do município.',

  vizinhas: ['luziania-go', 'goiania-go'],

  fontes: [
    { nome: 'IBGE Cidades — Silvânia', url: 'https://cidades.ibge.gov.br/brasil/go/silvania/panorama' },
    { nome: 'Governo Municipal de Silvânia', url: 'https://silvania.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-05',
};
