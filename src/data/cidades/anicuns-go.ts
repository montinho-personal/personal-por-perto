import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'anicuns-go',
  nome: 'Anicuns',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'anicuense',
  tipo: 'cidade',

  populacao: 18503,
  populacaoAno: 2022,
  idhm: 0.714,
  idhmClasse: 'alto',
  pibPerCapita: 39481,
  pibPerCapitaAno: 2023,
  altitudeM: 600,

  resumoEconomico:
    'No oeste goiano, a 86 km de Goiânia pela GO-060, Anicuns nasceu do garimpo de ouro no século 18 e hoje tem uma economia diversificada: o PIB municipal soma cerca de R$ 512,6 milhões, com os serviços respondendo por 34,4% do valor adicionado, a administração pública por 22,3%, a indústria por 22,2% e a agropecuária por 21%. Entre os empregos industriais, destacam-se a produção de álcool (com quase 800 postos de trabalho) e a fabricação de cerâmica e tijolos, ao lado da administração pública como maior empregadora isolada. No campo, a cana-de-açúcar ocupa cerca de 7 mil hectares, seguida por milho, arroz, soja, banana e café em áreas menores. A cidade fica na margem direita do Rio dos Bois, afluente do Paranaíba, que atravessa o perímetro urbano.',

  mercado:
    'Anicuns tem um mercado fitness compacto, típico de uma cidade de porte médio-pequeno do oeste goiano, com pouco mais de 18,5 mil habitantes. A demanda por personal trainer vem sobretudo de comerciantes, servidores públicos e trabalhadores das usinas e olarias locais, que buscam treino individualizado diante de uma oferta ainda limitada de estúdios especializados na cidade.',

  bairrosNobres: ['Centro', 'Setor Central'],
  bairrosPopulares: ['Setor Progresso', 'Vila Fernandes'],

  parques: [
    {
      nome: 'Lago Municipal e Bosque Municipal',
      descricao:
        'Espaço verde com espelho d\'água, uma das principais áreas de lazer e caminhada da cidade, usado por moradores para caminhada e descanso ao ar livre fora dos horários de calor mais intenso.',
    },
    {
      nome: 'Praça Irani Andrade Ferreira (Setor Progresso)',
      descricao:
        'Praça com quadra poliesportiva pública em um dos bairros mais tradicionais da cidade, servindo de ponto de encontro para caminhada e esportes coletivos no dia a dia do bairro.',
    },
    {
      nome: 'Rio dos Bois e balneários naturais',
      descricao:
        'O Rio dos Bois corta o município e forma pontos de banho natural, como o Tombador e a cachoeirinha de São José, além de sediar etapas da Copa Brasil de Canoagem, que reúne competidores de vários estados.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária estruturada e contínua; o deslocamento de bicicleta se concentra nas ruas do Centro e do Setor Progresso e nas estradas que levam à zona rural e às margens do Rio dos Bois.',

  clima:
    'O clima é tropical de Cerrado, com verão chuvoso (outubro a abril) e inverno seco (maio a setembro), quando a umidade relativa do ar cai bastante e as máximas costumam superar os 30°C mesmo no período mais fresco do ano.',
  climaTreino:
    'No inverno seco, a baixa umidade pede hidratação reforçada e cuidado com as vias respiratórias durante o treino ao ar livre; o início da manhã e o fim da tarde costumam ser os horários mais confortáveis, especialmente entre julho e setembro.',

  mobilidade:
    'Anicuns é cortada pela GO-060, principal rodovia de acesso, que liga o município a Trindade e Goiânia (86 km) de um lado, e a Sanclerlândia e ao oeste goiano do outro. O deslocamento interno é feito majoritariamente a pé ou de carro, dado o porte compacto da cidade.',

  corridas: [
    {
      nome: 'Copa Brasil de Canoagem (etapa no Rio dos Bois)',
      descricao:
        'Etapa da competição nacional de canoagem realizada nas águas do Rio dos Bois, acompanhada de desfiles e atividades culturais — um dos eventos esportivos mais tradicionais do calendário de Anicuns.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Anicuns tem no Rio dos Bois seu principal palco, com a Copa Brasil de Canoagem e os balneários naturais movimentando moradores e visitantes, ao lado das quadras de bairro, como a do Setor Progresso, usadas para esportes coletivos no cotidiano.',
  academias:
    'A oferta de academias é formada por estúdios de musculação e funcional concentrados no Centro, com porte compatível com uma cidade média do oeste goiano, complementada pelo treino ao ar livre no Bosque Municipal e nas praças de bairro.',

  destaquesFitness: [
    'Rio dos Bois corta a cidade e sedia etapas da Copa Brasil de Canoagem, uma das competições nacionais mais tradicionais do esporte.',
    'Economia diversificada entre álcool, cerâmica, agropecuária e serviços, com PIB municipal de cerca de R$ 512,6 milhões.',
    'Lago Municipal e Bosque Municipal como principais espaços de caminhada e lazer ao ar livre.',
    'Clima de Cerrado com inverno seco, que exige hidratação reforçada e ajuste de horário no treino.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 230,
    mensalMax: 600,
    onlineMin: 105,
    onlineMax: 300,
  },

  conclusao:
    'Cidade do oeste goiano nascida do garimpo e hoje sustentada por álcool, cerâmica e agropecuária, Anicuns tem no Rio dos Bois seu maior patrimônio esportivo e de lazer, sede da Copa Brasil de Canoagem. Um personal trainer ajuda a manter a constância do treino, aproveitando o Lago Municipal e as praças de bairro e respeitando o calor e a seca do Cerrado goiano.',

  vizinhas: ['trindade-go', 'goiania-go'],

  fontes: [
    { nome: 'IBGE Cidades — Anicuns', url: 'https://cidades.ibge.gov.br/brasil/go/anicuns/panorama' },
    { nome: 'Prefeitura de Anicuns', url: 'https://anicuns.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-05',
};
