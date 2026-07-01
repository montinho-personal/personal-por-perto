import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pitangui-mg',
  nome: 'Pitangui',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'pitanguiense',
  tipo: 'cidade',

  populacao: 26685,
  populacaoAno: 2022,
  idhm: 0.725,
  idhmClasse: 'alto',
  altitudeM: 705,

  resumoEconomico:
    'Fundada em 1715, Pitangui foi a sétima vila do ciclo do ouro em Minas Gerais e é o município mais antigo da região central do estado. No Centro-Oeste mineiro, às margens dos rios São João e Pará, a cidade preserva um centro histórico de traçado colonial. A economia atual se apoia principalmente no setor de serviços e no comércio, seguidos pela indústria, pela administração pública e pela agropecuária, com destaque para a pecuária. O turismo histórico e religioso complementa a atividade econômica, atraído pelo casario colonial e pela Matriz de Nossa Senhora do Pilar.',

  mercado:
    'Por ser uma cidade de porte médio-pequeno no interior mineiro, o mercado fitness de Pitangui é enxuto e concentrado em academias locais de musculação e treino funcional. A procura por personal trainers cresce entre quem busca acompanhamento individual e quem quer aproveitar as praças, o entorno do centro histórico e os percursos com aclives da região para treinar ao ar livre.',

  bairrosNobres: ['Centro', 'São Francisco', 'Santo Antônio', 'Novo Horizonte'],
  bairrosPopulares: ['Nossa Senhora de Fátima', 'Padre Libério', 'Santa Rita', 'Penha'],

  parques: [
    {
      nome: 'Centro Histórico e Praça Getúlio Vargas',
      descricao:
        'Coração da cidade, com traçado colonial, casario histórico e a Matriz de Nossa Senhora do Pilar; a praça e as ruas do entorno concentram caminhadas e treinos leves ao ar livre.',
    },
    {
      nome: 'Serra da Cruz do Monte (Cristo Redentor)',
      descricao:
        'Elevação que domina a paisagem, com um Cristo Redentor no topo e vista para toda a cidade; a subida e as trilhas do entorno servem de percurso para quem treina resistência com desnível.',
    },
    {
      nome: 'Orla dos rios São João e Pará',
      descricao:
        'Os cursos d’água que cortam o município e suas matas próximas oferecem trechos naturais para caminhada e corrida, integrando o treino à paisagem do Centro-Oeste mineiro.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e restrita a poucos trechos urbanos; boa parte do pedal e da corrida acontece nas vias da cidade e em estradas rurais do entorno, que exigem atenção ao relevo ondulado.',

  clima:
    'O clima é tropical de altitude, com verão chuvoso e quente (de outubro a março) e inverno seco e mais ameno (de maio a agosto), quando as manhãs e noites ficam frias. A posição em relevo ondulado, próximo à Serra da Cruz do Monte, ajuda a amenizar as temperaturas em boa parte do ano.',
  climaTreino:
    'As estações bem definidas favorecem o treino ao ar livre na maior parte do ano; no verão convém treinar cedo ou no fim da tarde e reforçar a hidratação, enquanto o inverno seco pede aquecimento cuidadoso nas manhãs frias, sobretudo para percursos com aclives.',

  mobilidade:
    'Pitangui se conecta à região pela BR-352, importante eixo de escoamento da produção do Centro-Oeste mineiro, com ligação às cidades vizinhas de Pará de Minas e Bom Despacho e acesso a Belo Horizonte, a cerca de 125 km. O transporte dentro da cidade é feito por vias urbanas, e o relevo ondulado marca os deslocamentos a pé e de bicicleta.',

  corridas: [
    {
      nome: 'Corrida Rústica AABB de Pitangui',
      descricao:
        'Prova de rua com percurso de cerca de 7 km realizada na cidade, que reforça a presença da corrida de rua no calendário esportivo local.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso das praças e ruas do centro histórico para caminhada, o desafio dos percursos com aclives em direção à Serra da Cruz do Monte e provas de corrida de rua que movimentam a comunidade, num ambiente de cidade histórica do interior mineiro.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade de médio-pequeno porte do interior de Minas.',

  destaquesFitness: [
    'Cidade histórica do ciclo do ouro, com centro colonial que serve de cenário para caminhadas e treinos ao ar livre.',
    'Serra da Cruz do Monte, com subida e trilhas para quem treina resistência com desnível.',
    'Rios São João e Pará e matas do entorno como opções de treino em meio à natureza.',
    'Clima tropical de altitude, com estações bem definidas que favorecem o treino ao ar livre boa parte do ano.',
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
    'Cidade histórica do Centro-Oeste mineiro, cercada por serras, rios e um centro colonial preservado, Pitangui reúne bons cenários para treinar ao ar livre ao longo do ano. Um personal trainer ajuda a aproveitar o relevo ondulado e as estações bem definidas com segurança, ajustando horários e intensidade para manter a constância.',

  vizinhas: ['para-de-minas-mg', 'bom-despacho-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Pitangui', url: 'https://cidades.ibge.gov.br/brasil/mg/pitangui/panorama' },
    { nome: 'Prefeitura de Pitangui', url: 'https://pitangui.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
