import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'canarana-mt',
  nome: 'Canarana',
  uf: 'MT',
  estado: 'Mato Grosso',
  estadoSlug: 'mato-grosso',
  regiao: 'Centro-Oeste',
  gentilico: 'canaranense',
  tipo: 'cidade',

  populacao: 25858,
  populacaoAno: 2022,
  idhm: 0.693,
  idhmClasse: 'médio',
  pibPerCapita: 113673,
  pibPerCapitaAno: 2021,
  altitudeM: 420,

  resumoEconomico:
    'Canarana nasceu em 1975 de um projeto de colonização conduzido pelo pastor luterano Norberto Schwantes e pela Cooperativa Colonizadora 31 de Março (Coopercol), que atraiu famílias vindas do Rio Grande do Sul, de Santa Catarina e do Paraná para o cerrado do nordeste de Mato Grosso. Em poucas décadas, a cidade deixou o ritmo da pecuária extensiva do chamado "vale dos esquecidos" e se tornou um dos polos mais dinâmicos do Vale do Araguaia, com economia apoiada no agronegócio — soja, milho e gergelim, cultura em que a região desponta como referência nacional — além da pecuária e da indústria ligada ao campo. Canarana também é a principal porta de acesso ao Parque Indígena do Xingu, concentrando serviços, órgãos como a Funai e organizações indígenas que atendem comunidades da Terra Indígena do Xingu.',

  mercado:
    'O mercado fitness de Canarana é o de uma cidade média do interior em expansão, puxado pelo crescimento populacional e pela renda do agronegócio local. A oferta reúne academias de musculação e ginástica, estúdios de treino personalizado e profissionais que atendem tanto quem busca resultado estético quanto produtores e famílias rurais que precisam conciliar rotina de trabalho no campo com atividade física regular.',

  bairrosNobres: ['Centro', 'Serra Dourada'],
  bairrosPopulares: ['Nova Canarana', 'Garapu II', 'Matinha'],

  parques: [
    {
      nome: 'Parque de Exposições Cidade Jardim (Luís Cancian)',
      descricao:
        'Espaço que sedia a Feican, a feira agropecuária e industrial de Canarana, e serve de ponto de concentração para eventos esportivos da cidade, incluindo a corrida de rua do aniversário do município.',
    },
    {
      nome: 'Avenida Paraná e Centro',
      descricao:
        'Principal eixo comercial e de circulação da área central, referência de endereço na cidade e via usada por quem caminha ou corre no perímetro urbano.',
    },
    {
      nome: 'Cerrado e estradas rurais do entorno',
      descricao:
        'A vegetação de cerrado e as estradas que cortam as fazendas de soja e milho ao redor da cidade oferecem opções de treino ao ar livre para quem mora ou trabalha na zona rural do município.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária formal é limitada; deslocamentos de bicicleta e corrida acontecem principalmente pelas vias da área urbana central e por estradas rurais no entorno da cidade.',

  clima:
    'O clima é tropical, de transição entre o cerrado e a Amazônia, com temperatura média anual em torno de 26 °C. O ano se divide em uma estação chuvosa (outubro a abril) e uma seca (maio a setembro), com máximas que passam dos 35 °C nos meses mais quentes.',
  climaTreino:
    'O calor e a umidade elevados recomendam treinar nas primeiras horas da manhã ou no final da tarde; na estação seca, a baixa umidade e a poeira das estradas rurais pedem hidratação reforçada e atenção a ambientes fechados e ventilados como alternativa nos horários mais quentes.',

  mobilidade:
    'O acesso rodoviário principal é pela MT-020, que liga Canarana a Paranatinga e, de lá, à BR-364 rumo a Cuiabá — trajeto de cerca de 600 a 650 km até a capital. A cidade também funciona como base logística para quem segue rumo às aldeias do Parque Indígena do Xingu, com trechos finais em estrada de terra. O deslocamento interno é predominantemente feito por veículo próprio e motocicleta, típico de cidades do interior agrícola de Mato Grosso.',

  corridas: [
    {
      nome: 'Corrida de Rua do Aniversário de Canarana',
      descricao:
        'Prova de 5 km organizada pela Prefeitura de Canarana, por meio da Secretaria de Juventude, Esporte e Lazer (Sejel), como parte da programação de aniversário da cidade, com concentração no Parque de Exposições Luís Cancian.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva de Canarana gira em torno do Esporte Clube Canarana, que reúne futebol, futsal, vôlei, basquete e natação, e da programação de eventos ligados ao aniversário do município, como a corrida de rua e a Feican. A cidade também recebe etapas regionais de competições escolares mato-grossenses, reforçando o papel de polo esportivo do Vale do Araguaia.',
  academias:
    'A cidade conta com academias de musculação e ginástica, além de estúdios de treino personalizado, distribuídos principalmente pela região central — oferta compatível com uma cidade média que vem crescendo puxada pelo agronegócio.',

  destaquesFitness: [
    'Colonizada a partir de 1975 por migrantes do Rio Grande do Sul, Santa Catarina e Paraná, hoje é polo agroindustrial do Vale do Araguaia (soja, milho e gergelim).',
    'Principal porta de acesso ao Parque Indígena do Xingu, com forte presença de instituições indígenas e da Funai.',
    'Corrida de Rua do Aniversário de Canarana, prova anual de 5 km organizada pela Prefeitura no Parque de Exposições.',
    'Clima tropical de transição entre cerrado e Amazônia, com calor intenso que exige treino nos horários mais frescos do dia.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 115,
    mensalMin: 280,
    mensalMax: 700,
    onlineMin: 130,
    onlineMax: 350,
  },

  conclusao:
    'Cidade jovem e em ritmo acelerado de crescimento, Canarana combina a rotina do agronegócio com o calor característico do cerrado mato-grossense. Um personal trainer ajuda a montar um plano de treino que respeite os horários mais frescos do dia e a realidade de quem divide a semana entre o trabalho no campo ou no comércio e a vida na cidade, mantendo constância mesmo nos períodos de maior calor.',

  vizinhas: ['barra-do-garcas-mt', 'primavera-do-leste-mt', 'cuiaba-mt'],

  fontes: [
    { nome: 'IBGE Cidades — Canarana', url: 'https://cidades.ibge.gov.br/brasil/mt/canarana/panorama' },
    { nome: 'Prefeitura de Canarana', url: 'https://canarana.mt.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
