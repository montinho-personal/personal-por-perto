import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'fernandopolis-sp',
  nome: 'Fernandópolis',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'fernandopolense',
  tipo: 'cidade',

  populacao: 71186,
  populacaoAno: 2022,
  idhm: 0.770,
  idhmClasse: 'alto',
  altitudeM: 535,

  resumoEconomico:
    'Fernandópolis é um dos principais polos regionais do extremo noroeste paulista, exercendo papel de centro de comércio, serviços e saúde para uma ampla microrregião. A economia se apoia em um setor de serviços expressivo, no comércio e na agroindústria do entorno, com forte presença da cana-de-açúcar e da pecuária de corte e leite, além de citros. A cidade reúne também um parque educacional relevante, com cursos superiores que atraem estudantes de toda a região.',

  mercado:
    'O perfil de polo regional concentra em Fernandópolis um público de classe média ligado a serviços, comércio, saúde e ensino superior, que valoriza bem-estar e qualidade de vida. A presença de estudantes universitários e de profissionais liberais sustenta uma demanda constante por academias, estúdios e personal trainers, com maior procura nos bairros de melhor renda e no entorno da área central.',

  bairrosNobres: ['Jardim Araguaia', 'Parque Universitário', 'Alto das Paineiras', 'Jardim Paraíso'],
  bairrosPopulares: ['Brasilândia', 'Jardim Uirapuru', 'Jardim Planalto', 'Jardim Ipanema'],

  parques: [
    {
      nome: 'Represa Beira Rio',
      descricao:
        'Principal espaço de lazer da cidade, com pista de caminhada, ciclovia e fontes de água no entorno do lago. É o ponto tradicional para treino ao ar livre, corrida e atividades em família.',
    },
    {
      nome: 'Casa da Memória a Céu Aberto',
      descricao:
        'Complexo cultural e de lazer cercado por dezenas de espécies de árvores nativas, com áreas verdes, museu e espaços abertos usados para caminhadas e passeios.',
    },
    {
      nome: 'Bosque Municipal',
      descricao:
        'Área verde arborizada no tecido urbano, utilizada para caminhadas, lazer e contato com a natureza no dia a dia da cidade.',
    },
  ],
  ciclovias:
    'Fernandópolis tem relevo relativamente suave e oferece trechos de ciclovia e ciclofaixa, com destaque para o percurso à beira da Represa Beira Rio, que integra deslocamento e atividade física ao ar livre.',

  clima:
    'O clima é tropical, quente, típico do noroeste paulista, com inverno seco e verões muito quentes e úmidos. As temperaturas elevadas marcam boa parte do ano, especialmente nos meses mais quentes.',
  climaTreino:
    'O calor intenso da região pede atenção redobrada à hidratação e à escolha de horários: o treino ao ar livre rende mais no início da manhã ou no fim da tarde, evitando o sol forte do meio-dia, sobretudo no verão.',

  mobilidade:
    'A cidade é cortada pela Rodovia Euclides da Cunha (SP-320), principal eixo do noroeste paulista, e funciona como entroncamento regional. Os deslocamentos internos se dão sobretudo por carro, moto e ônibus, com distâncias curtas favorecidas pelo porte médio do município.',

  corridas: [
    {
      nome: 'Corridas de rua na Represa Beira Rio',
      descricao:
        'O entorno da Represa Beira Rio é o palco habitual de provas e treinões de corrida de rua, reunindo atletas locais e da região em um circuito plano e arborizado.',
    },
    {
      nome: 'Eventos esportivos do calendário municipal',
      descricao:
        'A cidade promove provas e atividades esportivas ao longo do ano, integradas à agenda cultural e de lazer, que movimentam corredores e ciclistas da microrregião.',
    },
  ],
  culturaEsportiva:
    'Fernandópolis tem cultura esportiva ativa para o seu porte, apoiada na Represa Beira Rio e em espaços públicos arborizados que favorecem corrida, caminhada e ciclismo. O ritmo de cidade média do interior e a presença de público universitário incentivam uma rotina mais ativa ao ar livre.',
  academias:
    'A oferta de academias e estúdios é boa para o porte do município, concentrada nas avenidas centrais e nos bairros de maior renda, e bem complementada pelos espaços ao ar livre da Represa Beira Rio e das áreas verdes da cidade.',

  destaquesFitness: [
    'Polo regional de comércio, serviços, saúde e ensino superior no noroeste paulista.',
    'Represa Beira Rio como principal espaço de treino ao ar livre, com pista e ciclovia.',
    'Público universitário e de classe média que sustenta a demanda por treino.',
    'Cidade de porte médio e relevo suave, favorável a caminhadas e bike.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Polo regional do extremo noroeste paulista, Fernandópolis combina forte setor de serviços, agroindústria no entorno e um parque educacional que atrai estudantes de toda a região. Um personal trainer ajuda a aproveitar a Represa Beira Rio e as áreas verdes da cidade com um plano que respeite o calor característico do noroeste e acelere os resultados.',

  vizinhas: ['votuporanga-sp', 'sao-jose-do-rio-preto-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Fernandópolis', url: 'https://cidades.ibge.gov.br/brasil/sp/fernandopolis/panorama' },
    { nome: 'Prefeitura de Fernandópolis', url: 'https://www.fernandopolis.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
