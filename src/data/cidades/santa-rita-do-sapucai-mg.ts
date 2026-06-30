import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santa-rita-do-sapucai-mg',
  nome: 'Santa Rita do Sapucaí',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'santarritense',
  tipo: 'cidade',

  populacao: 40635,
  populacaoAno: 2022,
  idhm: 0.72,
  idhmClasse: 'alto',
  altitudeM: 821,

  resumoEconomico:
    'Conhecida nacionalmente como "Vale da Eletrônica", Santa Rita do Sapucaí é um polo tecnológico do Sul de Minas, com mais de uma centena de empresas de eletrônica, automação, telecomunicações e software. A cidade abriga o INATEL (Instituto Nacional de Telecomunicações) e a ETE (Escola Técnica de Eletrônica Francisco Moreira da Costa), que formaram um ecossistema raro de educação técnica, engenharia e startups. Esse perfil jovem e qualificado movimenta o comércio, os serviços e também o mercado fitness local.',

  mercado:
    'Apesar do porte de cidade média, Santa Rita do Sapucaí tem um público bastante ativo, puxado pela grande comunidade de estudantes do INATEL e da ETE e por profissionais de tecnologia. A oferta reúne academias de bairro, estúdios de musculação e funcional e personal trainers que atendem em academias parceiras e ao ar livre. A rotina intensa do polo tecnológico cria demanda por acompanhamento individualizado e horários flexíveis.',

  bairrosNobres: ['Centro', 'Santana', 'Cidade Jardim', 'Jardim Alvorada'],
  bairrosPopulares: ['Boa Vista', 'Vila Santa Cruz', 'São Sebastião', 'Cohab'],

  parques: [
    {
      nome: 'Parque Municipal de Eventos',
      descricao:
        'Principal espaço público para eventos da cidade, também usado como ponto de largada e chegada das corridas de rua e de atividades ao ar livre.',
    },
    {
      nome: 'Orla e margens do Rio Sapucaí',
      descricao:
        'As áreas às margens do rio que dá nome à cidade são usadas por moradores para caminhada e corrida em ritmo tranquilo.',
    },
    {
      nome: 'Praças do Centro',
      descricao:
        'As praças centrais funcionam como pontos de encontro e de caminhada no fim de tarde, integrando a vida ao ar livre ao dia a dia da cidade.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de ciclofaixa e vias de baixo tráfego que favorecem o deslocamento de bicicleta, comum entre estudantes do polo tecnológico.',

  clima:
    'O clima é tropical de altitude, típico do Sul de Minas (cerca de 820 m), com verões chuvosos e amenos e invernos secos e frescos, com manhãs frias.',
  climaTreino:
    'As condições para treino ao ar livre são favoráveis na maior parte do ano; recomenda-se atenção ao frio nas manhãs de inverno e às pancadas de chuva no verão.',

  mobilidade:
    'Santa Rita do Sapucaí é cortada pela BR-459, que liga a região de Poços de Caldas a Lorena (SP) e dá acesso rápido à BR-381 (Rodovia Fernão Dias), o eixo São Paulo–Belo Horizonte. Essa conexão aproxima a cidade de Pouso Alegre e Itajubá. O transporte urbano é feito por ônibus, e as distâncias curtas tornam viáveis deslocamentos a pé e de bicicleta.',

  corridas: [
    {
      nome: 'Corrida de Aniversário de Santa Rita do Sapucaí',
      descricao:
        'Prova de rua tradicional ligada às comemorações da cidade, com largada e chegada no Parque Municipal de Eventos.',
    },
    {
      nome: 'Corridas de rua do calendário local',
      descricao:
        'O calendário esportivo reúne provas de corrida e caminhada que mobilizam corredores da cidade e da região do Sul de Minas.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é impulsionada pela grande comunidade jovem do INATEL e da ETE, com forte presença de musculação, treino funcional e corrida de rua. O perfil de cidade tecnológica e universitária mantém um público ativo e aberto a acompanhamento profissional.',
  academias:
    'A oferta inclui academias de bairro, estúdios de musculação e funcional e profissionais que atendem em espaços parceiros, com a vantagem de uma cidade compacta e de distâncias curtas para chegar ao treino.',

  destaquesFitness: [
    'Polo tecnológico ("Vale da Eletrônica") com público jovem e ativo do INATEL e da ETE.',
    'Clima tropical de altitude favorável ao treino ao ar livre na maior parte do ano.',
    'Corrida de Aniversário e provas de rua no Parque Municipal de Eventos.',
    'Cidade compacta, com distâncias curtas e bom uso de praças e margens do Rio Sapucaí.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Com o dinamismo do "Vale da Eletrônica", clima de altitude agradável e uma comunidade jovem e ativa, Santa Rita do Sapucaí é uma cidade convidativa para treinar. Um personal trainer ajuda a aproveitar as academias locais, as praças e as margens do Rio Sapucaí com método e constância, encaixando o treino na rotina intensa de quem estuda e trabalha no polo tecnológico.',

  vizinhas: ['pouso-alegre-mg', 'itajuba-mg', 'varginha-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Santa Rita do Sapucaí', url: 'https://cidades.ibge.gov.br/brasil/mg/santa-rita-do-sapucai/panorama' },
    { nome: 'Prefeitura de Santa Rita do Sapucaí', url: 'https://pmsrs.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
