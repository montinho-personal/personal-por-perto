import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itaitinga-ce',
  nome: 'Itaitinga',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'itaitinguense',
  tipo: 'cidade',

  populacao: 64650,
  populacaoAno: 2022,
  idhm: 0.626,
  idhmClasse: 'médio',
  altitudeM: 67,

  resumoEconomico:
    'Itaitinga integra a Região Metropolitana de Fortaleza e faz divisa direta com a capital, cortada pela BR-116. Foi um dos municípios de maior crescimento populacional do Ceará no Censo 2022, quase dobrando o número de habitantes em relação a 2010, impulsionada pela expansão urbana metropolitana. A economia é dominada pelo setor de serviços e pelo comércio (com destaque para atacado de mercadorias em geral, supermercados e lojas de variedades), somados à administração pública e à indústria — esta ligada à extração mineral de rochas ornamentais, brita, areia e argila para a construção civil. Boa parte das terras do município é ocupada pelos açudes Gavião e Pacoti/Riachão, que abastecem a capital.',

  mercado:
    'Como cidade metropolitana conurbada a Fortaleza, o mercado fitness de Itaitinga é fortemente influenciado pela capital: muitos moradores treinam em academias locais ou se deslocam para bairros vizinhos de Fortaleza. A procura por personal trainers cresce junto com a população, entre quem busca atendimento próximo de casa, treino orientado para o calor característico e alternativas ao trânsito da BR-116.',

  bairrosNobres: ['Centro', 'Jabuti', 'Sítios Novos', 'Aningas'],
  bairrosPopulares: ['Gereraú', 'Coaçu', 'Pedras', 'Novo Itaitinga'],

  parques: [
    {
      nome: 'Entorno do Açude Gavião',
      descricao:
        'O reservatório do Gavião, integrante do sistema que abastece Fortaleza, banha parte do território de Itaitinga e forma um cenário de água e mata usado para caminhadas e atividades ao ar livre no entorno, respeitadas as restrições de área de manancial.',
    },
    {
      nome: 'Distrito de Gereraú',
      descricao:
        'Antigo povoado às margens da rota Messejana-Pacatuba, o distrito reúne lagoas e áreas verdes que servem de espaço para caminhada e pedal fora do miolo urbano mais adensado.',
    },
    {
      nome: 'Serra da Aratanha (entorno metropolitano)',
      descricao:
        'O maciço da Aratanha, protegido por Área de Proteção Ambiental e vizinho a Itaitinga na porção sul da Região Metropolitana, é referência de natureza e trilhas para quem busca treino em relevo e ar livre nos municípios do entorno.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é limitada e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece em vias locais e em ruas afastadas do fluxo intenso da BR-116, que corta o município.',

  clima:
    'O clima é tropical quente, típico do litoral e da Região Metropolitana de Fortaleza, com temperaturas elevadas o ano inteiro e pouca variação térmica. O ano se divide entre a estação chuvosa (concentrada no primeiro semestre, de fevereiro a maio) e um período mais seco no segundo semestre, com forte insolação.',
  climaTreino:
    'O calor e a alta umidade do litoral pedem treinar no início da manhã ou no fim da tarde, com hidratação reforçada e atenção à exposição ao sol nos horários de pico. Ambientes climatizados são a opção mais confortável nos dias mais quentes.',

  mobilidade:
    'Itaitinga é cortada pela BR-116, principal eixo de ligação com Fortaleza e com o interior do estado, o que torna a rodovia central para o deslocamento diário. A CE-350 (Rodovia Edson Queiroz) conecta o município a Pacatuba, e o transporte se apoia em linhas de ônibus metropolitanas que integram a cidade à malha da capital.',

  corridas: [
    {
      nome: 'Corrida de Rua de Itaitinga (Sejuve)',
      descricao:
        'Prova de rua promovida pela Secretaria de Juventude e Esporte do município dentro das comemorações de aniversário da cidade, com percursos de 3 km e 5 km pelas ruas de Itaitinga.',
    },
    {
      nome: 'Corrida Academia Ita Fitness',
      descricao:
        'Corrida de rua organizada por academia local, realizada em edições anuais em Itaitinga e voltada a corredores amadores da cidade e do entorno metropolitano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura corridas de rua promovidas pela prefeitura e por academias locais, o futebol de bairro e o uso de vias urbanas e do entorno dos açudes para caminhada e pedal, tudo moldado pelo calor litorâneo e pela proximidade com Fortaleza.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional distribuídas pelos bairros centrais e residenciais, complementada pela proximidade com a rede de academias de Fortaleza, acessível a muitos moradores da divisa.',

  destaquesFitness: [
    'Cidade da Região Metropolitana de Fortaleza, conurbada à capital e cortada pela BR-116.',
    'Um dos municípios de maior crescimento populacional do Ceará no Censo 2022.',
    'Açudes Gavião e Pacoti/Riachão e o entorno da serra da Aratanha como cenário de natureza no entorno metropolitano.',
    'Calor litorâneo o ano inteiro, que exige planejamento de horário e hidratação no treino.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 660,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Metropolitana, quente e em plena expansão, Itaitinga combina a vida de cidade próxima a Fortaleza com espaços de natureza no entorno dos açudes e da serra da Aratanha. Um personal trainer ajuda a organizar a rotina respeitando o calor litorâneo, definindo os melhores horários e mantendo a constância mesmo com a correria do dia a dia metropolitano.',

  vizinhas: ['fortaleza-ce', 'pacatuba-ce', 'eusebio-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Itaitinga', url: 'https://cidades.ibge.gov.br/brasil/ce/itaitinga/panorama' },
    { nome: 'Prefeitura de Itaitinga', url: 'https://www.itaitinga.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
