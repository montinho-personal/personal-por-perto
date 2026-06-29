import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itapipoca-ce',
  nome: 'Itapipoca',
  uf: 'CE',
  estado: 'Ceará',
  estadoSlug: 'ceara',
  regiao: 'Nordeste',
  gentilico: 'itapipoquense',
  tipo: 'cidade',

  populacao: 131123,
  populacaoAno: 2022,
  idhm: 0.640,
  idhmClasse: 'médio',
  altitudeM: 109,

  resumoEconomico:
    'Itapipoca é um dos maiores municípios do interior do Ceará e polo regional do litoral oeste do estado. Conhecida como "cidade das três naturezas" por reunir praia, serra e sertão no mesmo território, concentra um comércio forte que atrai consumidores de toda a microrregião, além de tradição na indústria têxtil e de confecções e em atividades agropecuárias.',

  mercado:
    'A demanda fitness é puxada pela posição de cidade-polo de comércio e serviços, que reúne população urbana de classe média e moradores das cidades vizinhas. O perfil é o de uma cidade média do interior cearense, com academias de bairro, estúdios e uso crescente dos espaços públicos para caminhada e corrida.',

  bairrosNobres: ['Centro', 'Boa Vista', 'São Cristóvão', 'Cruzeiro'],
  bairrosPopulares: ['São Sebastião', 'Violete', 'Alto da Boa Vista', 'Cemoaba'],

  parques: [
    {
      nome: 'Praça da Matriz (Centro)',
      descricao:
        'Coração da cidade e ponto de encontro tradicional, usado para caminhadas e atividades ao ar livre no núcleo urbano.',
    },
    {
      nome: 'Serra de Itapipoca',
      descricao:
        'Conjunto de serras nos arredores, com vilas, mirantes e clima mais ameno que o do sertão — área procurada para caminhadas, trilhas e treinos em subida.',
    },
    {
      nome: 'Praia da Baleia',
      descricao:
        'Principal praia do município, no litoral itapipoquense, com faixa de areia, dunas e lagoas que servem de cenário para corridas e treinos ao ar livre.',
    },
  ],
  ciclovias:
    'A cidade não dispõe de malha cicloviária estruturada divulgada em fonte oficial; o deslocamento por bicicleta é comum nas vias urbanas e nos distritos.',

  clima:
    'O clima é tropical quente, típico do litoral oeste cearense, com temperaturas elevadas ao longo do ano e estação chuvosa concentrada no primeiro semestre.',
  climaTreino:
    'O calor constante recomenda treinar no início da manhã ou no fim da tarde, com atenção redobrada à hidratação e à proteção solar.',

  mobilidade:
    'Itapipoca é cortada pela BR-222, principal eixo rodoviário do norte e oeste do Ceará que liga Fortaleza ao interior, e é servida pela CE-085 (Rodovia Estruturante), que conecta a sede ao litoral e às cidades da costa.',

  corridas: [
    {
      nome: 'Corridas de rua locais',
      descricao:
        'Provas e caminhadas comunitárias promovidas na cidade em datas comemorativas e por iniciativas esportivas locais, percorrendo vias do Centro.',
    },
    {
      nome: 'Etapas da Federação Cearense de Atletismo',
      descricao:
        'Competições oficiais do calendário estadual que alcançam municípios-polo do interior, como Itapipoca.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o futebol como paixão local com uma cena de corrida de rua e caminhada em crescimento, favorecida pela diversidade de cenários entre praia, serra e área urbana.',
  academias:
    'A oferta reúne academias de bairro e estúdios na sede, atendendo a população urbana e os moradores dos distritos e cidades próximas que buscam serviços no polo regional.',

  destaquesFitness: [
    'Diversidade de cenários para treino: praia (Praia da Baleia), serra (Serra de Itapipoca) e área urbana.',
    'Posição de cidade-polo de comércio do litoral oeste cearense, com público de toda a microrregião.',
    'Serra de Itapipoca como opção de trilhas e treinos em subida com clima mais ameno.',
    'Espaços públicos do Centro usados para caminhada e atividades ao ar livre.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Polo regional do litoral oeste cearense e "cidade das três naturezas", Itapipoca oferece praia, serra e sertão para quem treina. Um personal trainer ajuda a tirar proveito desses cenários com método, ajustando horários e hidratação ao calor constante da região.',

  vizinhas: ['fortaleza-ce', 'sobral-ce', 'caucaia-ce'],

  fontes: [
    { nome: 'IBGE Cidades — Itapipoca', url: 'https://cidades.ibge.gov.br/brasil/ce/itapipoca/panorama' },
    { nome: 'Prefeitura de Itapipoca', url: 'https://www.itapipoca.ce.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
