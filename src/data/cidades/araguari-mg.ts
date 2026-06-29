import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'araguari-mg',
  nome: 'Araguari',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'araguarino',
  tipo: 'cidade',

  populacao: 117808,
  populacaoAno: 2022,
  idhm: 0.773,
  idhmClasse: 'alto',
  altitudeM: 920,

  resumoEconomico:
    'No norte do Triângulo Mineiro e a poucos quilômetros de Uberlândia, Araguari é um dos grandes polos de café irrigado do país. A cafeicultura responde por boa parte da economia local, sustentada por dezenas de cooperativas e centenas de produtores e reforçada por eventos como a Fenicafé, feira nacional de irrigação da cafeicultura. À produção de café somam-se grãos, hortifruti e uma agroindústria consolidada, em uma cidade que historicamente se firmou como importante entroncamento ferroviário entre São Paulo, Minas e Goiás.',

  mercado:
    'Araguari combina o porte de cidade média mineira com a proximidade de Uberlândia, o que aproxima padrões de consumo e referências de mercado dos dois municípios. A oferta vai das redes e academias de bairro a estúdios de treino funcional e personalizado, com demanda puxada pelo agronegócio aquecido e por um público que valoriza qualidade de vida e atividade ao ar livre.',

  bairrosNobres: ['Jardim Europa', 'Jardim do Lago', 'Jardim Interlagos', 'Bela Vista'],
  bairrosPopulares: ['Centro', 'Goiás', 'Santiago', 'São Sebastião'],

  parques: [
    {
      nome: 'Bosque Municipal John Kennedy',
      descricao:
        'Uma das maiores reservas urbanas de Minas Gerais, com cerca de 12 hectares no Centro. Reúne trilhas calçadas para caminhada, academia ao ar livre, lago e fauna preservada — o principal espaço público para treino e lazer na cidade.',
    },
    {
      nome: 'Praça Getúlio Vargas',
      descricao:
        'Praça central tradicional de Araguari, ponto de encontro e de caminhadas no coração da cidade, cercada de comércio e serviços.',
    },
    {
      nome: 'Praça Manoel Bonito',
      descricao:
        'Praça arborizada de uso cotidiano dos moradores, usada para caminhadas leves e atividades ao ar livre na rotina urbana.',
    },
  ],
  ciclovias:
    'Araguari conta com trechos de ciclovias e ciclofaixas em avenidas e vias principais, complementando o uso da bicicleta no deslocamento e no lazer pela cidade.',

  clima:
    'O clima é tropical de altitude, típico do Triângulo Mineiro, com verão chuvoso e inverno seco — mais de 80% das chuvas se concentram no verão. As temperaturas costumam variar, em média, entre cerca de 19 °C e 26 °C, e a cidade fica em torno de 920 m de altitude.',
  climaTreino:
    'O treino ao ar livre é viável o ano todo. No verão chuvoso (de outubro a março), vale reforçar a hidratação e organizar a sessão em torno das pancadas de chuva; no inverno seco, a atenção é ao ar seco e à poeira, priorizando início da manhã ou fim da tarde.',

  mobilidade:
    'Araguari tem acesso rodoviário pela BR-050, eixo federal que liga a região a Uberlândia, ao restante de Minas e a Goiás. A cidade também carrega forte herança ferroviária: foi ponto de partida da Estrada de Ferro Goiás e importante entroncamento entre São Paulo, Minas e Goiás, marca presente até hoje em seu patrimônio histórico.',

  corridas: [
    {
      nome: 'Corrida Mauá',
      descricao:
        'Prova de rua tradicional de Araguari, com dezenas de edições no calendário e percursos de 5 km e 10 km, além de categoria kids — uma das corridas mais longevas da região.',
    },
    {
      nome: 'Circuito da Inconfidência — Etapa Araguari',
      descricao:
        'Etapa araguarina de um circuito consolidado de corrida de rua de Minas Gerais, com provas de 5 km e 10 km que reúnem milhares de atletas ao longo da temporada.',
    },
  ],
  culturaEsportiva:
    'Araguari tem cultura de corrida de rua ativa, com provas tradicionais como a Corrida Mauá e etapas de circuitos mineiros, além do uso constante do Bosque John Kennedy e das praças centrais para caminhada e treino ao ar livre.',
  academias:
    'A oferta vai das academias de bairro às redes e a estúdios de funcional e personal, atendendo tanto o público local quanto quem busca padrões de treino semelhantes aos da vizinha Uberlândia.',

  destaquesFitness: [
    'Bosque John Kennedy: cerca de 12 hectares com trilhas calçadas e academia ao ar livre no Centro.',
    'Proximidade de Uberlândia aproxima referências de mercado e amplia as opções de treino na região.',
    'Calendário de corridas com provas tradicionais (Corrida Mauá) e circuitos mineiros gerando demanda por preparação.',
    'Clima tropical de altitude que viabiliza treino ao ar livre o ano todo, com ajustes sazonais simples.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 280,
    mensalMax: 700,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Polo do café no Triângulo Mineiro e vizinha de Uberlândia, Araguari une qualidade de vida, espaços ao ar livre como o Bosque John Kennedy e uma cena de corrida de rua ativa. Um personal trainer ajuda a aproveitar essa estrutura com método, segurança e constância, do treino na praça à preparação para as provas locais.',

  vizinhas: ['uberlandia-mg', 'uberaba-mg', 'patos-de-minas-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Araguari', url: 'https://cidades.ibge.gov.br/brasil/mg/araguari/panorama' },
    { nome: 'Prefeitura de Araguari', url: 'https://www.araguari.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
