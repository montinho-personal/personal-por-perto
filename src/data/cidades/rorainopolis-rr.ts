import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'rorainopolis-rr',
  nome: 'Rorainópolis',
  uf: 'RR',
  estado: 'Roraima',
  estadoSlug: 'roraima',
  regiao: 'Norte',
  gentilico: 'rorainopolitano',
  tipo: 'cidade',

  populacao: 32647,
  populacaoAno: 2022,
  idhm: 0.62,
  idhmClasse: 'médio',
  altitudeM: 90,

  resumoEconomico:
    'Segunda cidade mais populosa de Roraima e principal polo do sul do estado, Rorainópolis nasceu na década de 1970 a partir dos projetos de colonização do INCRA ao longo da BR-174 e foi emancipada em 1995. Cortada pela Linha do Equador e cercada pela floresta amazônica, sua economia se apoia na agropecuária — bovinos, aves e suínos, além de mandioca, banana, milho e arroz —, no comércio e nos serviços que atendem os municípios vizinhos do extremo sul de Roraima.',

  mercado:
    'O mercado fitness é o de uma cidade média do interior amazônico: academias de bairro voltadas a musculação e treino funcional, somadas a personal trainers que atendem em estúdios menores, em casa e ao ar livre. O calor equatorial e a presença de igarapés e áreas verdes favorecem a cultura de treino ao ar livre, e o atendimento online ajuda a alcançar moradores das vilas mais distantes ao longo da BR-174.',

  bairrosNobres: ['Centro', 'Jardim Primavera'],
  bairrosPopulares: ['Suelândia', 'Vila Equador', 'Vila Nova Colina'],

  parques: [
    {
      nome: 'Floresta Nacional do Anauá (FLONA Anauá)',
      descricao:
        'Unidade de conservação federal de cerca de 259 mil hectares de floresta amazônica em Rorainópolis, com trilhas e natureza preservada — referência para caminhadas e contato com a mata na região.',
    },
    {
      nome: 'Rio Anauá',
      descricao:
        'Afluente do Rio Branco que banha o município, procurado para pesca e lazer às margens; suas praias e balneários na seca viram ponto de encontro para atividades ao ar livre.',
    },
    {
      nome: 'Marco da Linha do Equador',
      descricao:
        'Monumento que assinala a passagem da Linha do Equador pelo município, parte da região turística "Águas e Florestas da Linha do Equador", com igarapés e cachoeiras no entorno.',
    },
  ],
  ciclovias:
    'A cidade não dispõe de uma malha cicloviária estruturada; a bicicleta é meio de transporte comum no dia a dia e os deslocamentos ativos acontecem sobretudo pelas vias urbanas e pela orla da BR-174.',

  clima:
    'O clima é equatorial, quente e úmido o ano todo, com temperatura média em torno de 26 °C e chuvas concentradas no verão e no outono — característica da floresta amazônica que cobre todo o território municipal.',
  climaTreino:
    'A umidade e o calor equatorial pedem treino no começo da manhã ou no fim da tarde, com hidratação reforçada e atenção à intensidade — nos meses mais chuvosos, alternar para ambientes cobertos ajuda a manter a regularidade.',

  mobilidade:
    'Rorainópolis fica a cerca de 92 km de Boa Vista pela BR-174, o eixo rodoviário que liga Manaus à capital roraimense e estrutura toda a vida econômica do sul do estado. Dentro da cidade os deslocamentos são curtos, feitos a pé, de bicicleta, moto e carro, com a sede organizada ao longo da rodovia.',

  corridas: [
    {
      nome: 'Corridas de aniversário da cidade',
      descricao:
        'As celebrações de emancipação do município (outubro) costumam incluir provas e caminhadas de rua organizadas pela prefeitura, reunindo a comunidade local.',
    },
    {
      nome: 'Treinões e caminhadas pela BR-174',
      descricao:
        'A orla urbana ao longo da rodovia e as ruas do Centro servem de base para treinos de corrida e caminhada em grupo, principalmente no fim de tarde.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva gira em torno do futebol, das caminhadas e da corrida de rua, reforçada por eventos comunitários ligados às festas do município. O ambiente de floresta, com rios e igarapés, também aproxima os moradores de atividades ao ar livre.',
  academias:
    'A oferta reúne academias de bairro com musculação e treino funcional, além de personal trainers que atendem em pequenos estúdios, em domicílio e em espaços abertos, cobrindo diferentes perfis e horários.',

  destaquesFitness: [
    'Polo do sul de Roraima às margens da BR-174, eixo Manaus–Boa Vista.',
    'Floresta Nacional do Anauá e o Rio Anauá como cenário de natureza para treino ao ar livre.',
    'Região da Linha do Equador, com igarapés e cachoeiras no entorno.',
    'Academias de bairro e personal trainers cobrindo musculação e funcional.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Polo do sul de Roraima cercado pela floresta amazônica, Rorainópolis combina o calor equatorial com cenários naturais como a FLONA Anauá e o Rio Anauá. Um personal trainer ajuda a montar uma rotina que respeite o clima úmido e quente, aproveitando os espaços ao ar livre com método e progressão segura.',

  vizinhas: ['boa-vista-rr'],

  fontes: [
    { nome: 'IBGE Cidades — Rorainópolis', url: 'https://cidades.ibge.gov.br/brasil/rr/rorainopolis/panorama' },
    { nome: 'Prefeitura de Rorainópolis', url: 'https://rorainopolis.rr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
