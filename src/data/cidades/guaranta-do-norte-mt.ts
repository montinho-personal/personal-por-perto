import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'guaranta-do-norte-mt',
  nome: 'Guarantã do Norte',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'guarantanhense',
  tipo: 'cidade',

  populacao: 31024,
  populacaoAno: 2022,
  idhm: 0.703,
  idhmClasse: 'alto',
  pibPerCapita: 41462,
  pibPerCapitaAno: 2023,
  altitudeM: 345,

  resumoEconomico:
    'Guarantã do Norte fica no extremo norte de Mato Grosso, na divisa com o Pará, às margens da BR-163 — a rodovia Cuiabá-Santarém — a cerca de 730 km da capital, o que lhe rendeu o apelido de porta de entrada do "Portal da Amazônia". A cidade nasceu no início dos anos 1980 do garimpo de ouro nos rios Peixoto de Azevedo e Teles Pires, que atraiu levas de garimpeiros e colonos, e migrou depois para uma economia diversificada apoiada no agronegócio — soja, milho e arroz somam mais de 100 mil hectares de lavouras temporárias — e em uma pecuária robusta, com uma das principais bacias leiteiras da região amazônica mato-grossense, produzindo dezenas de milhões de litros de leite por ano, ao lado de rebanho de corte expressivo. A exploração madeireira, herdada da ocupação agropastoril da faixa da BR-163, e o comércio e os serviços que atendem municípios vizinhos e o sul do Pará completam a base econômica, que gerou um PIB municipal superior a R$ 1 bilhão.',

  mercado:
    'O mercado de personal trainers em Guarantã do Norte é pequeno e concentrado, típico de uma cidade-polo do norte de Mato Grosso: reúne academias de musculação no Centro, procuradas por trabalhadores do comércio, do agronegócio e da administração pública, além de profissionais que atendem em domicílio e em espaços ao ar livre nos horários mais frescos do dia.',

  bairrosNobres: ['Centro', 'Jardim Vitória'],
  bairrosPopulares: ['Setor Industrial', 'Vila Cotrel', 'Jardim Aeroporto', 'Jardim Novo Horizonte'],

  parques: [
    {
      nome: 'Praça da Cultura',
      descricao:
        'Inaugurada em 1991, é o principal espaço público da cidade, com quadra poliesportiva, biblioteca, área verde, playground e palco fixo usado nas festas de aniversário do município e em feiras como a Feira Legal — funciona também como ponto de caminhada e convivência no início e no fim do dia.',
    },
    {
      nome: 'Rio Braço Norte e Balneário Paraíso',
      descricao:
        'O Rio Braço Norte, de águas claras, e o Balneário Paraíso, a cerca de 14 km da cidade às margens da BR-163, são pontos de lazer aquático, pesca esportiva, remo e caminhada nas margens arborizadas, aproveitados por quem busca atividade física fora do ambiente urbano.',
    },
  ],
  ciclovias:
    'A malha cicloviária formal é limitada; o pedal e a corrida acontecem principalmente nas avenidas do Centro e nas estradas vicinais que levam às fazendas e aos balneários do entorno.',

  clima:
    'O clima é tropical equatorial amazônico, quente e úmido o ano todo, com temperaturas médias entre 25 °C e 33 °C. A estação chuvosa vai de setembro a abril, com mais de 2.000 mm de precipitação anual, enquanto maio a agosto forma um período seco mais ameno.',
  climaTreino:
    'O calor e a umidade elevados pedem treino nas primeiras horas da manhã ou no fim da tarde, com hidratação reforçada; na estação seca, de maio a agosto, as condições costumam ser mais confortáveis para atividades ao ar livre, inclusive nas margens dos rios.',

  mobilidade:
    'A BR-163 (Cuiabá-Santarém) atravessa o município e é o principal eixo de acesso, ligando Guarantã do Norte a Peixoto de Azevedo, Matupá, Novo Mundo e Terra Nova do Norte, além do sul do Pará — a distância rodoviária até Cuiabá é de cerca de 730 km. A cidade funciona como polo de comércio e serviços para os municípios vizinhos, com deslocamento interno predominante por veículo próprio e motocicleta.',

  corridas: [],
  culturaEsportiva:
    'A vida esportiva local gira em torno da Praça da Cultura, palco de eventos, feiras e da programação de aniversário do município, e do lazer ligado aos rios da região — pesca esportiva, remo e passeios de barco no Braço Norte e no Braço Sul, que também atraem turismo de aventura para a cidade.',
  academias:
    'A oferta de academias e estúdios é modesta e concentrada no Centro, compatível com uma cidade-polo de porte médio do norte de Mato Grosso, complementada pelo trabalho de personal trainers que atendem em domicílio e em espaços ao ar livre.',

  destaquesFitness: [
    'Nasceu do garimpo de ouro nos rios Peixoto de Azevedo e Teles Pires e hoje é polo agropecuário do "Portal da Amazônia", às margens da BR-163.',
    'Uma das principais bacias leiteiras do norte de Mato Grosso, ao lado de agricultura de soja, milho e arroz e pecuária de corte.',
    'Rio Braço Norte e Balneário Paraíso oferecem opções de treino e lazer ativo ao ar livre, fora do ambiente urbano.',
    'Clima equatorial quente e úmido, com estação seca de maio a agosto mais favorável ao treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 680,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Nascida do garimpo e hoje polo agropecuário do extremo norte de Mato Grosso, Guarantã do Norte combina o ritmo da BR-163 com o calor amazônico e os rios que cortam a região. Um personal trainer ajuda a organizar o treino nos horários mais frescos do dia e a manter a constância entre a estação chuvosa e a seca, aproveitando espaços como a Praça da Cultura e as margens dos rios da cidade.',

  vizinhas: ['matupa-mt', 'novo-mundo-mt', 'peixoto-de-azevedo-mt', 'alta-floresta-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Guarantã do Norte', url: 'https://cidades.ibge.gov.br/brasil/mt/guaranta-do-norte/panorama' },
    { nome: 'Prefeitura de Guarantã do Norte — Economia', url: 'https://www.guarantadonorte.mt.gov.br/Conheca-Guaranta/Economia/' },
    { nome: 'Câmara Municipal de Guarantã do Norte — Geografia', url: 'https://www.camaraguarantadonorte.mt.gov.br/Cidade/Geografia/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/5104104' },
  ],
  atualizadoEm: '2026-07-05',
};
