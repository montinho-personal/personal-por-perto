import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'agua-boa-mt',
  nome: 'Água Boa',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'água-boense',
  tipo: 'cidade',

  populacao: 29219,
  populacaoAno: 2022,
  idhm: 0.729,
  idhmClasse: 'alto',
  altitudeM: 446,

  resumoEconomico:
    'Colonizada a partir de 1975 e emancipada em 1979, Água Boa é um dos polos do agronegócio no Vale do Araguaia, no nordeste de Mato Grosso, às margens da BR-158. A economia é liderada pela produção de soja, milho e algodão e por uma pecuária de qualidade reconhecida em feiras e leilões regionais, ao lado de um setor de comércio e serviços que atende também os municípios vizinhos do Médio Araguaia. Com PIB per capita entre os mais altos da região, o município já figurou entre os 100 mais ricos do agronegócio brasileiro.',

  mercado:
    'Como polo regional de serviços de uma área predominantemente rural, Água Boa concentra boa parte da oferta de academias e personal trainers do entorno do Vale do Araguaia, atendendo produtores rurais, comerciantes e famílias ligadas ao agronegócio. A renda elevada gerada pela safra e pela pecuária sustenta procura por acompanhamento individualizado, tanto presencial quanto online, inclusive para quem mora em fazendas ou em cidades menores da região.',

  bairrosNobres: ['Centro', 'Jardim Planalto', 'Universitário', 'Araguaia Park'],
  bairrosPopulares: ['Guarujá', 'Setor Cristalino', 'Vila Nova', 'Operário'],

  parques: [
    {
      nome: 'Parque Vale dos Ipês',
      descricao:
        'Complexo de lazer de cerca de 6 hectares recuperado pela prefeitura junto à Avenida Planalto, na região central, com ruas internas, calçadas, iluminação e paisagismo com ipês nativos — hoje uma das principais áreas verdes para caminhada da cidade.',
    },
    {
      nome: 'Praça da Cultura',
      descricao:
        'Praça central que reúne biblioteca, teatro de arena e feira de produtores aos sábados; funciona como ponto de encontro e também de caminhada no coração da cidade.',
    },
    {
      nome: 'Praça do bairro Guarujá',
      descricao:
        'Praça de cerca de 5 mil m² reformada pela prefeitura, com quadra de areia, playground, academia da terceira idade e área de convivência — modelo repetido em outros setores da cidade.',
    },
  ],
  ciclovias:
    'A cidade conta com uma ciclovia de aproximadamente 4 km ao longo da Avenida Araguaia, ligando o setor central ao bairro Cristalino — a principal estrutura cicloviária do município.',

  clima:
    'O clima é tropical, típico do cerrado, com temperatura média anual em torno de 30 °C e chuvas concentradas entre outubro e abril (pluviosidade média de 1.800 a 2.200 mm por ano). De junho a agosto, frentes frias vindas do Sul do país costumam derrubar a temperatura em dias pontuais.',
  climaTreino:
    'O calor típico do cerrado recomenda treinar ao ar livre nas primeiras horas da manhã ou no fim da tarde, com hidratação reforçada; na estação seca, a baixa umidade do ar pede atenção redobrada, especialmente para quem corre ou pedala.',

  mobilidade:
    'Água Boa está no cruzamento da BR-158 com a MT-240, eixo que liga o município a Canarana, ao norte, e a Nova Xavantina e Barra do Garças, ao sul, no Vale do Araguaia — a mais de 600 km de Cuiabá. O transporte urbano é feito por ônibus e táxis, e a cidade conta com o Aeroporto Frederico Carlos Müller, com voos regionais regulares para a capital.',

  corridas: [
    {
      nome: 'Corrida do Trabalhador',
      descricao:
        'Prova de 5 km organizada pela prefeitura, realizada anualmente em maio com largada na Avenida Olímpica; tem também corrida kids e já passou de sua quinta edição.',
    },
    {
      nome: 'Corrida Paróquia Nossa Senhora Aparecida',
      descricao:
        'Prova de 5 km promovida pela paróquia local em outubro, com largada na Avenida Planalto; consolidada no calendário esportivo da cidade.',
    },
  ],
  culturaEsportiva:
    'O Ginásio Municipal Domingos Zandoná, no setor Universitário, concentra boa parte da vida esportiva da cidade, oferecendo futsal, futebol de campo, basquete, vôlei, handebol, natação, hidroginástica, treino funcional, taekwondo e jiu-jitsu para a comunidade e a rede municipal de ensino. Somam-se a isso a ciclovia da Avenida Araguaia e um calendário de corridas de rua já consolidado.',
  academias:
    'A oferta de academias e estúdios se concentra no Centro e nas avenidas principais, com estruturas de porte compatível com uma cidade média do interior — de academias de musculação tradicionais a espaços de treino funcional —, atendendo tanto moradores da cidade quanto produtores da região.',

  destaquesFitness: [
    'Polo do agronegócio no Vale do Araguaia, com renda per capita entre as mais altas do interior de Mato Grosso.',
    'Ciclovia da Avenida Araguaia e o Parque Vale dos Ipês como estrutura pública para caminhada e pedal.',
    'Calendário de corridas de rua consolidado, com a Corrida do Trabalhador e a Corrida da Paróquia Nossa Senhora Aparecida.',
    'Clima de cerrado, quente o ano todo, que exige treino nos horários mais frescos do dia.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 300,
    mensalMax: 750,
    onlineMin: 140,
    onlineMax: 380,
  },

  conclusao:
    'Polo agropecuário do Vale do Araguaia, Água Boa combina renda elevada do agronegócio com uma estrutura pública de lazer em expansão — ciclovia, praças reformadas e um ginásio municipal com oferta esportiva variada. Um personal trainer ajuda a organizar o treino em torno do calor do cerrado, aproveitando os espaços da cidade e mantendo a constância entre a safra e a entressafra.',

  vizinhas: ['cuiaba-mt', 'barra-do-garcas-mt', 'primavera-do-leste-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Água Boa', url: 'https://cidades.ibge.gov.br/brasil/mt/agua-boa/panorama' },
    { nome: 'Prefeitura de Água Boa', url: 'https://www.aguaboa.mt.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
