import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'peruibe-sp',
  nome: 'Peruíbe',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'peruibense',
  tipo: 'cidade',

  populacao: 68344,
  populacaoAno: 2022,
  idhm: 0.749,
  idhmClasse: 'alto',
  altitudeM: 5,

  resumoEconomico:
    'No extremo da Baixada Santista, no litoral sul paulista, Peruíbe é uma estância balneária conhecida pelas praias extensas, pela Estação Ecológica Juréia-Itatins e pela lama negra medicinal. A economia gira em torno do turismo de veraneio e do ecoturismo, do comércio e dos serviços, com forte sazonalidade no verão. A orla larga e tranquila e a natureza preservada ao redor são o eixo da vida ativa local.',

  mercado:
    'A população permanente vem crescendo de forma consistente — incluindo aposentados e famílias que trocam a capital pelo litoral —, o que amplia a demanda por treino ao longo do ano, e não apenas na alta temporada. A oferta combina academias de bairro, estúdios e a própria orla, com calçadão e equipamentos públicos, formando um cenário favorável ao trabalho de personal trainers.',

  bairrosNobres: ['Centro', 'Stella Maris', 'Parque Turístico', 'Oásis'],
  bairrosPopulares: ['Jardim Veneza', 'Jardim Brasil', 'Vila Romar', 'Caraguava'],

  parques: [
    {
      nome: 'Estação Ecológica Juréia-Itatins',
      descricao:
        'Unidade de conservação de Mata Atlântica que se estende por Peruíbe e municípios vizinhos, reconhecida como Patrimônio da Humanidade pela UNESCO. Reúne trilhas, cachoeiras, praias preservadas e a foz do Rio Guaraú, sendo o grande polo de ecoturismo e caminhadas na natureza da região.',
    },
    {
      nome: 'Orla e calçadão de Peruíbe',
      descricao:
        'Faixa de praias urbanas que passa por Arpoador, Oásis, Parque Turístico, Flórida e Stella Maris, com calçadão e areia firme que permitem caminhada, corrida, pedal e skate de frente para o mar ao longo de boa parte da extensão da cidade.',
    },
    {
      nome: 'Lagoa e Praia do Guaraú',
      descricao:
        'No entorno da Juréia, a Lagoa do Guaraú e a Praia do Guaraú formam um cenário de restinga e rio considerado um dos mais bonitos do litoral paulista, ideal para canoagem, caminhada na areia e atividades ao ar livre em ambiente preservado.',
    },
  ],
  ciclovias:
    'A orla concentra a maior parte da infraestrutura para pedal e corrida: o calçadão acompanha a praia ao longo de vários bairros, e a areia firme e plana funciona como uma extensão natural de treino à beira-mar, favorecendo percursos longos e contínuos.',

  clima:
    'O clima é litorâneo úmido, quente e chuvoso no verão e ameno no inverno, com a umidade do mar e a Serra do Mar ao fundo marcando o tempo o ano todo. Peruíbe figura entre as cidades com os menores índices de poluição das praias do litoral paulista.',
  climaTreino:
    'A orla extensa permite treinar ao ar livre em qualquer estação; no verão, atenção ao calor, à umidade e às chuvas de fim de tarde, priorizando manhã e começo da noite e cuidando da hidratação.',

  mobilidade:
    'O acesso rodoviário se dá principalmente pela Rodovia Padre Manoel da Nóbrega (SP-055), que liga Peruíbe a Itanhaém, Mongaguá, Praia Grande e às demais cidades da Baixada Santista, e a Itariri e ao Vale do Ribeira; dentro da cidade, a orla plana e arejada torna a bike e a caminhada opções reais de deslocamento.',

  corridas: [
    {
      nome: 'Peruíbe Run',
      descricao:
        'Circuito de corrida de rua com etapas de percurso plano de 5 km, com largada na região do Parque Turístico, próximo à Avenida Mário Covas, aproveitando a orla e as paisagens da cidade.',
    },
    {
      nome: '6K Night Run e provas na orla',
      descricao:
        'A cidade recebe provas noturnas e participativas, como a 6K Night Run, além de etapas de circuitos estaduais como o Verão no Clima, que levam atletas amadores e profissionais a percursos à beira-mar.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva de Peruíbe gira em torno do mar e da natureza: surfe e canoagem nas praias e no Rio Guaraú, pedal e corrida na orla, trilhas na Juréia-Itatins e caminhadas à beira-mar fazem parte da rotina de moradores e veranistas.',
  academias:
    'A oferta reúne academias de bairro, estúdios e espaços de treino funcional, complementados pelo calçadão e pelos equipamentos da orla, que funcionam como uma grande extensão de treino ao ar livre.',

  destaquesFitness: [
    'Praias extensas e preservadas no litoral sul paulista, com baixos índices de poluição.',
    'Estação Ecológica Juréia-Itatins, polo de trilhas e ecoturismo em Mata Atlântica.',
    'Calçadão e areia firme da orla para corrida, pedal e caminhada o ano todo.',
    'Calendário de corridas como a Peruíbe Run e a 6K Night Run, com percursos à beira-mar.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 270,
    mensalMax: 720,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Com praias largas, natureza preservada na Juréia-Itatins e clima litorâneo, Peruíbe é um cenário convidativo para treinar ao ar livre durante todo o ano. Um personal trainer ajuda a transformar a orla, o calçadão e as trilhas da cidade em um plano consistente, do iniciante a quem busca encarar provas de rua como a Peruíbe Run.',

  vizinhas: ['itanhaem-sp', 'praia-grande-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Peruíbe', url: 'https://cidades.ibge.gov.br/brasil/sp/peruibe/panorama' },
    { nome: 'Prefeitura de Peruíbe', url: 'https://www.peruibe.sp.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
