import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'delmiro-gouveia-al',
  nome: 'Delmiro Gouveia',
  uf: 'AL',
  estado: 'Alagoas',
  estadoSlug: 'alagoas',
  regiao: 'Nordeste',
  gentilico: 'delmirense',
  tipo: 'cidade',

  populacao: 51319,
  populacaoAno: 2022,
  idhm: 0.612,
  idhmClasse: 'médio',
  altitudeM: 256,

  resumoEconomico:
    'Principal polo do alto sertão alagoano, Delmiro Gouveia tem economia ancorada em comércio, serviços, setor público e agropecuária, funcionando como centro de referência para os municípios vizinhos na região do São Francisco. A cidade carrega uma identidade industrial pioneira: foi aqui que o empreendedor Delmiro Gouveia ergueu, no começo do século XX, a Fábrica de Linhas Estrela, primeira grande indústria têxtil nacional do Nordeste.',

  mercado:
    'Por ser uma cidade média do interior, o mercado de personal trainers em Delmiro Gouveia se organiza em torno de academias e estúdios no Centro e nos bairros consolidados, somados ao atendimento em condomínios e residências. A clientela mistura jovens, servidores públicos e famílias que buscam acompanhamento próximo, com forte espaço para o treino ao ar livre nas primeiras horas do dia, antes do calor do sertão apertar.',

  bairrosNobres: ['Centro', 'Eldorado', 'Bom Conselho', 'Pininga'],
  bairrosPopulares: ['Alto da Boa Vista', 'Vila Tibério', 'Bela Vista', 'Santa Cecília'],

  parques: [
    {
      nome: 'Cachoeira de Paulo Afonso e Angiquinho',
      descricao:
        'Conjunto natural e histórico no rio São Francisco, onde Delmiro Gouveia construiu a Usina de Angiquinho — a primeira hidrelétrica do Nordeste. A área de cachoeira e cânions é cartão-postal da região e cenário para caminhadas, trilhas e atividades ao ar livre.',
    },
    {
      nome: 'Orla do Rio São Francisco / cânions',
      descricao:
        'O trecho do São Francisco e seus cânions, na divisa com a região de Paulo Afonso, oferece paisagens para caminhada, pedal e treino ao ar livre em meio ao sertão.',
    },
    {
      nome: 'Praças e calçadões do Centro',
      descricao:
        'As praças centrais e o entorno da antiga vila operária da Fábrica de Linhas Estrela concentram a vida ao ar livre da cidade, usados para caminhada e encontros de grupos de exercício.',
    },
  ],
  ciclovias:
    'Como cidade média do interior, Delmiro Gouveia não conta com uma malha cicloviária estruturada; o ciclismo de lazer e treino acontece sobretudo em vias do entorno e nos acessos rumo aos cânions e ao rio São Francisco.',

  clima:
    'O clima é semiárido quente e seco, típico do alto sertão alagoano e do bioma caatinga, com temperaturas elevadas, baixa umidade e chuvas concentradas em poucos meses do ano.',
  climaTreino:
    'O calor intenso e a baixa umidade do sertão pedem treino ao ar livre logo cedo ou no fim da tarde, com hidratação reforçada, proteção solar e atenção redobrada nos dias mais secos e quentes.',

  mobilidade:
    'A cidade é cortada pela BR-423, principal eixo rodoviário que a conecta ao restante do sertão alagoano e à região de Paulo Afonso (BA), funcionando como polo de acesso para os municípios vizinhos. Internamente, predominam carro, moto e transporte por aplicativo.',

  corridas: [
    {
      nome: 'Corrida Guardiões dos Cânions',
      descricao:
        'Prova de rua organizada na cidade com apoio da Polícia Militar (9º BPM), reunindo corredores locais e da região do São Francisco em percursos pelas ruas de Delmiro Gouveia.',
    },
    {
      nome: 'Corridas e caminhadas locais',
      descricao:
        'Provas e caminhadas pontuais promovidas por grupos, escolas e instituições da cidade, com forte presença de iniciantes ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva em Delmiro Gouveia se apoia no futebol, nas caminhadas matinais e em uma cena de corrida de rua em crescimento, impulsionada por eventos locais e grupos de treino que aproveitam o clima seco e as paisagens do sertão.',
  academias:
    'A oferta de academias e estúdios se concentra no Centro e nos bairros mais consolidados, atendendo a cidade e também moradores dos municípios vizinhos que têm em Delmiro Gouveia seu polo de serviços.',

  destaquesFitness: [
    'Polo do alto sertão alagoano, com academias e estúdios que atendem toda a região.',
    'Paisagens dos cânions e do rio São Francisco favorecem caminhadas, trilhas e treino ao ar livre.',
    'Identidade histórica e industrial ligada a Delmiro Gouveia e à primeira hidrelétrica do Nordeste.',
    'Clima semiárido permite treino externo o ano todo, com ajuste de horário pelo calor.',
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
    'Polo do alto sertão alagoano e berço de uma das grandes histórias industriais do Nordeste, Delmiro Gouveia combina paisagens de cânions e do São Francisco com uma vida ativa que cresce a cada ano. Um personal trainer ajuda a transformar o clima seco e os espaços ao ar livre em um plano consistente — respeitando o calor do sertão e levando você do objetivo à constância.',

  vizinhas: ['arapiraca-al', 'maceio-al'],

  fontes: [
    {
      nome: 'IBGE Cidades — Delmiro Gouveia',
      url: 'https://cidades.ibge.gov.br/brasil/al/delmiro-gouveia/panorama',
    },
    { nome: 'Prefeitura de Delmiro Gouveia', url: 'https://delmirogouveia.al.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
