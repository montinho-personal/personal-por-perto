import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'lajeado-rs',
  nome: 'Lajeado',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'lajeadense',
  tipo: 'cidade',

  populacao: 92951,
  populacaoAno: 2022,
  idhm: 0.778,
  idhmClasse: 'alto',
  altitudeM: 31,

  resumoEconomico:
    'Principal cidade e polo regional do Vale do Taquari, Lajeado fica às margens do Rio Taquari, a cerca de 113 km de Porto Alegre. De colonização alemã, tem economia diversificada apoiada em comércio, serviços e forte agroindústria (alimentos, laticínios e abate), além de ser sede da Univates, que faz da cidade um centro universitário e de saúde para toda a região. É reconhecida pela alta qualidade de vida, entre as melhores do estado.',

  mercado:
    'Como polo regional do Vale do Taquari, Lajeado concentra a oferta de academias e serviços fitness de uma área que atende várias cidades vizinhas. Há boa presença de redes e estúdios locais, e o atendimento domiciliar é uma alternativa valorizada por quem busca acompanhamento próximo — público universitário da Univates, famílias dos bairros residenciais e profissionais do comércio e dos serviços.',

  bairrosNobres: ['Centro', 'Alto do Parque', 'Moinhos', 'Universitário'],
  bairrosPopulares: ['São Cristóvão', 'Conventos', 'Santo Antônio', 'Florestal'],

  parques: [
    {
      nome: 'Parque dos Dick',
      descricao:
        'Principal parque urbano de Lajeado, com ampla área verde, lago, pistas de caminhada, playgrounds e quadras — o espaço público mais procurado para caminhada e corrida na cidade.',
    },
    {
      nome: 'Parque Histórico Municipal',
      descricao:
        'Reúne casas típicas da época da imigração alemã que foram realocadas, formando um espaço de memória e lazer em meio ao verde, bom para caminhadas leves.',
    },
    {
      nome: 'Parque Ney Santos Arruda',
      descricao:
        'Área de lazer mais recente, próxima ao Rio Taquari, que amplia os espaços para atividade física ao ar livre na cidade.',
    },
  ],
  ciclovias:
    'A cidade conta com trechos de ciclovias e ciclofaixas em vias e avenidas centrais, em expansão gradual conforme o plano de mobilidade local.',

  clima:
    'O clima é subtropical úmido, com verões quentes (frequentemente acima de 30 °C, com sensação elevada no vale) e invernos frios, com geadas ocasionais e temperaturas que podem ficar perto de zero nas manhãs mais frias.',
  climaTreino:
    'No verão, o calor e a umidade do vale pedem treino ao ar livre no começo da manhã ou no fim da tarde, com boa hidratação. No inverno, as manhãs frias favorecem horários mais quentes do dia ou o treino indoor; a primavera e o outono são as estações mais confortáveis para correr.',

  mobilidade:
    'Lajeado é cortada pela BR-386 (Rodovia da Produção), principal eixo de ligação com Porto Alegre e o norte do estado, e pela RS-130. Essa posição faz da cidade um entroncamento logístico do Vale do Taquari. O deslocamento urbano é feito por carro e por ônibus.',

  corridas: [
    {
      nome: '21K Lajeado',
      descricao:
        'A meia maratona do Vale, com percursos de 5, 10 e 21 km — principal prova de corrida de rua da cidade e referência para corredores de toda a região.',
    },
    {
      nome: 'Provas do calendário regional do Vale do Taquari',
      descricao:
        'Como polo da região, Lajeado e cidades próximas sediam corridas de rua ao longo do ano, sustentando uma comunidade de corredores ativa.',
    },
  ],
  culturaEsportiva:
    'A cidade tem cultura esportiva ativa, impulsionada pela presença da Univates e de seus cursos e estrutura na área de saúde e educação física. A corrida de rua cresce em torno da 21K Lajeado, e a musculação tem público fiel, especialmente nos meses mais frios.',
  academias:
    'A oferta reúne redes e estúdios locais, atendendo tanto o público da cidade quanto o de municípios vizinhos que têm em Lajeado seu polo de serviços. A musculação ganha força no inverno, quando o treino indoor é mais confortável.',

  destaquesFitness: [
    'Parque dos Dick: melhor espaço público para caminhada e corrida, com pistas e área verde ampla.',
    '21K Lajeado: meia maratona que organiza o calendário de corrida do Vale do Taquari.',
    'Presença da Univates, que estimula a cultura de saúde, educação física e esporte na cidade.',
    'Polo regional: oferta de academias e personais que atende toda a microrregião do Vale do Taquari.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Polo regional do Vale do Taquari, com alta qualidade de vida e a força da Univates, Lajeado une cultura de musculação a uma cena de corrida em crescimento. Um personal trainer ajuda a manter a constância ao longo do ano — alternando o treino ao ar livre nos parques e às margens do Rio Taquari com a academia nos dias de calor intenso ou de frio.',

  vizinhas: ['porto-alegre-rs', 'santa-cruz-do-sul-rs', 'caxias-do-sul-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Lajeado', url: 'https://cidades.ibge.gov.br/brasil/rs/lajeado/panorama' },
    { nome: 'Prefeitura de Lajeado', url: 'https://www.lajeado.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/431140' },
  ],
  atualizadoEm: '2026-06-29',
};
