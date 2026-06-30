import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'mococa-sp',
  nome: 'Mococa',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'mococense',
  tipo: 'cidade',

  populacao: 67681,
  populacaoAno: 2022,
  idhm: 0.762,
  idhmClasse: 'alto',
  altitudeM: 645,

  resumoEconomico:
    'No nordeste paulista, na divisa com o Sul de Minas Gerais, Mococa nasceu com os "barões do café" e reinventou sua economia em torno do agronegócio. Hoje é um polo agropecuário regional, com produção de café, cana-de-açúcar e laranja e forte pecuária leiteira — herança que rendeu o apelido de "terra do leitinho". O comércio e os serviços do centro atendem também municípios vizinhos e cidades mineiras próximas, e a cidade sedia há décadas uma unidade de pesquisa do Instituto Agronômico (IAC) voltada à cafeicultura.',

  mercado:
    'O mercado de personal trainers acompanha o perfil de uma cidade média do interior: a oferta concentra-se em academias de bairro, estúdios e profissionais autônomos que atendem em domicílio, em condomínios e nas praças e avenidas da cidade. A clientela mistura público do agronegócio e do comércio com um número crescente de pessoas interessadas em treino orientado e qualidade de vida.',

  bairrosNobres: ['Centro', 'Jardim Santa Maria', 'Jardim Itália', 'Vila Mariana'],
  bairrosPopulares: ['Cohab', 'Cecap', 'Jardim Bianchesi', 'Jardim Maziero'],

  parques: [
    {
      nome: 'Praça da Mãe Preta',
      descricao:
        'Um dos espaços públicos mais conhecidos da cidade, com a estátua da Mãe Preta como símbolo, usado para caminhadas e encontros ao ar livre no entorno arborizado.',
    },
    {
      nome: 'Avenida Marginal',
      descricao:
        'Avenida que margeia o curso d’água e funciona como principal corredor para caminhada e corrida na cidade, palco recorrente de provas de rua locais.',
    },
    {
      nome: 'Quadras da Cidadania',
      descricao:
        'Complexo poliesportivo municipal que reúne quadras e espaço aberto, ponto de largada e chegada de corridas e caminhadas promovidas pela prefeitura.',
    },
  ],
  ciclovias:
    'A malha cicloviária é modesta, como em boa parte das cidades médias do interior; os deslocamentos de bicicleta se apoiam sobretudo nas avenidas e vias marginais, com trechos sinalizados.',

  clima:
    'O clima é tropical com inverno seco (Aw na classificação de Köppen), com temperatura média anual em torno de 22 °C, verões quentes e chuvosos (dezembro a fevereiro) e inverno seco, podendo registrar entradas de frentes frias.',
  climaTreino:
    'O inverno seco e ameno é a melhor janela para treino ao ar livre; no verão, o ideal é correr e pedalar nas primeiras horas da manhã ou no fim da tarde, evitando o calor e a maior incidência de chuvas do meio do dia.',

  mobilidade:
    'Mococa é articulada pela SP-340, que a liga a Casa Branca, Aguaí, Mogi Guaçu e Campinas, e pela SP-345, que segue rumo a São João da Boa Vista; a posição na divisa com Minas Gerais reforça seu papel de centro de comércio e serviços para a região.',

  corridas: [
    {
      nome: 'Corrida e Caminhada de Aniversário de Mococa',
      descricao:
        'Prova promovida pela prefeitura nas comemorações do aniversário da cidade, com percursos de caminhada (cerca de 3 km) e corrida (cerca de 6 km), reunindo atletas da região e do Sul de Minas.',
    },
    {
      nome: 'Corrida Superação',
      descricao:
        'Prova de rua de 5 km disputada na Avenida Marginal, com participação de centenas de corredores de Mococa e municípios vizinhos.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local mistura o futebol amador e de várzea com um movimento crescente de corrida de rua e caminhada, estimulado pelas provas organizadas pela prefeitura e por grupos de corredores da cidade e da região.',
  academias:
    'A oferta reúne academias de bairro, estúdios de treino e personal trainers autônomos, complementados por praças e avenidas usadas para atividade física ao ar livre.',

  destaquesFitness: [
    'Inverno seco e ameno, ótima janela para treino ao ar livre.',
    'Avenida Marginal e praças centrais usadas para caminhada e corrida.',
    'Calendário de corridas de rua locais (aniversário da cidade, Superação).',
    'Cidade média compacta, que facilita o atendimento domiciliar e em condomínios.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 270,
    mensalMax: 720,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Polo agropecuário do nordeste paulista, na divisa com Minas, Mococa combina o ritmo de uma cidade média com clima favorável ao treino e um calendário ativo de corridas de rua. Um personal trainer ajuda a aproveitar a Avenida Marginal, as praças e os espaços públicos com método e segurança, ajustando o treino ao inverno seco e ao verão quente.',

  vizinhas: ['sao-joao-da-boa-vista-sp', 'mogi-guacu-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Mococa', url: 'https://cidades.ibge.gov.br/brasil/sp/mococa/panorama' },
    { nome: 'Prefeitura de Mococa', url: 'https://www.mococa.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
