import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'irece-ba',
  nome: 'Irecê',
  uf: 'BA',
  estado: 'Bahia',
  estadoSlug: 'bahia',
  regiao: 'Nordeste',
  gentilico: 'ireceense',
  tipo: 'cidade',

  populacao: 74507,
  populacaoAno: 2022,
  idhm: 0.691,
  idhmClasse: 'médio',
  pibPerCapita: 26348.84,
  pibPerCapitaAno: 2023,
  altitudeM: 722,

  resumoEconomico:
    'Historicamente conhecida como a "Capital Baiana do Feijão", Irecê é a sede do Território de Identidade Irecê, que reúne 20 municípios do Centro-Norte baiano, na porção norte da Chapada Diamantina. A economia se apoia na agricultura irrigada — tradicionalmente feijão e milho, com diversificação recente para cebola, tomate, banana e abacaxi em projetos como o Baixio de Irecê, tocado pela Codevasf — e em um comércio e setor de serviços fortes, que atendem toda a região circunvizinha nos ramos automotivo, de supermercados, vestuário e material de construção. Mais recentemente, a região ganhou destaque também na geração de energia solar, com o Complexo Solar Irecê, um dos maiores parques fotovoltaicos do estado.',

  mercado:
    'Por concentrar o comércio e os serviços de saúde, educação e varejo de cerca de 20 municípios do Centro-Norte baiano, Irecê tem um poder de consumo acima do que sua população isolada sugeriria, o que sustenta uma oferta de academias voltada à classe média local. A demanda por personal trainer tende a vir de quem busca treino orientado ao calor do semiárido e de um público que se desloca à cidade também para cuidar da saúde.',

  bairrosNobres: ['Centro', 'Asa Sul', 'Boa Vista', 'São José'],
  bairrosPopulares: ['Asa Norte', 'Arnóbio Batista', 'Novo Horizonte', 'Alto do Moura'],

  parques: [
    {
      nome: 'Lagoa do Canto',
      descricao:
        'Um dos principais pontos de lazer da cidade, com águas calmas cercadas por vegetação nativa; o entorno é usado por moradores para caminhada e para escapar do calor do sertão.',
    },
    {
      nome: 'Parque da Cidade',
      descricao:
        'Espaço verde com áreas para caminhada, playground e prática de esportes, funcionando como uma das principais opções de atividade física ao ar livre em Irecê.',
    },
    {
      nome: 'Estádio Municipal Joviano Dourado Lopes',
      descricao:
        'Estádio de futebol no coração da cidade, ponto de encontro para jogos e eventos esportivos que mobilizam a comunidade local.',
    },
  ],
  ciclovias:
    'Irecê não tem malha cicloviária urbana estruturada divulgada em fonte oficial; o deslocamento e o treino de bicicleta acontecem principalmente pelas vias do centro e pelas estradas de acesso à zona rural.',

  clima:
    'O clima é tropical semiárido quente (classificação Köppen BSh), dentro do Polígono das Secas, com pluviosidade média baixa, em torno de 580 mm anuais. As temperaturas costumam variar entre cerca de 18 °C e 27 °C ao longo do ano, com verões mais quentes e secos e noites de inverno mais amenas.',
  climaTreino:
    'O sol forte e a baixa umidade do semiárido pedem treino ao ar livre nas primeiras horas da manhã ou no fim de tarde, com hidratação reforçada; nas horas mais quentes do dia, ambientes cobertos ou climatizados são a opção mais segura.',

  mobilidade:
    'Irecê é servida pela BR-122, eixo rodoviário que liga o Centro-Norte baiano a Minas Gerais e ao Piauí, e pela BA-052, conhecida regionalmente como "Estrada do Feijão", que conecta a cidade a Salvador e ao restante do estado. Essa posição de entroncamento reforça o papel de Irecê como polo de comércio e serviços para os municípios vizinhos.',

  corridas: [],
  culturaEsportiva:
    'O futebol amador e o futsal têm forte presença no cotidiano esportivo de Irecê, com o Estádio Municipal Joviano Dourado Lopes como point de jogos e torneios, e clubes sociais como a AABB oferecendo natação, vôlei de areia e outras modalidades de lazer. A caminhada em espaços como a Lagoa do Canto e o Parque da Cidade complementa a rotina de quem busca atividade física ao ar livre no clima seco do sertão.',
  academias:
    'A oferta de academias em Irecê é formada por estúdios e centros de musculação, ginástica, funcional e modalidades como yoga e pilates, concentrados principalmente no bairro Centro, atendendo tanto a população local quanto o público que vem de outros municípios da região em busca de serviços.',

  destaquesFitness: [
    'Capital Baiana do Feijão e polo comercial de um território com cerca de 20 municípios do Centro-Norte baiano.',
    'Clima semiárido quente e seco, que exige planejamento de horário e hidratação no treino ao ar livre.',
    'Lagoa do Canto e Parque da Cidade como opções de caminhada e lazer ativo ao ar livre.',
    'Região em expansão na energia solar, com o Complexo Solar Irecê entre os maiores parques fotovoltaicos da Bahia.',
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
    'Polo regional do Centro-Norte baiano e referência histórica na produção de feijão, Irecê combina o calor seco do semiárido a uma vida econômica pujante, sustentada pelo comércio, pela agricultura irrigada e, mais recentemente, pela energia solar. Um personal trainer ajuda a adaptar o treino ao clima da região, aproveitando os poucos espaços verdes da cidade com segurança e constância.',

  vizinhas: ['jacobina-ba', 'senhor-do-bonfim-ba', 'juazeiro-ba'],

  fontes: [
    { nome: 'IBGE Cidades — Irecê', url: 'https://cidades.ibge.gov.br/brasil/ba/irece/panorama' },
    { nome: 'Prefeitura de Irecê', url: 'https://irece.ba.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
