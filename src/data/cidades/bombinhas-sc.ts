import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'bombinhas-sc',
  nome: 'Bombinhas',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'bombinense',
  tipo: 'cidade',

  populacao: 25058,
  populacaoAno: 2022,
  idhm: 0.781,
  idhmClasse: 'alto',
  altitudeM: 3,

  resumoEconomico:
    'Menor município de Santa Catarina em área (cerca de 36 km²), Bombinhas é uma península do litoral centro-norte catarinense e um destino de praias premium. A economia gira em torno do turismo — a cidade é conhecida como Capital Nacional do Mergulho Ecológico, por ficar às portas da Reserva Biológica Marinha do Arvoredo —, complementado pela maricultura (uma das maiores produções de mexilhões e ostras do estado) e pela pesca artesanal de tradição açoriana. A forte sazonalidade faz a população efetiva multiplicar-se no verão, quando o fluxo de turistas movimenta hospedagem, gastronomia e serviços.',

  mercado:
    'O mercado fitness de Bombinhas é fortemente marcado pela sazonalidade turística: no verão, a demanda dispara com veranistas, temporadistas e trabalhadores da alta temporada, enquanto no inverno o público se concentra nos moradores fixos. Personal trainers encontram espaço tanto no atendimento a quem tem segunda residência na península quanto no público local que busca treino ao ar livre nas praias, trilhas e orlas, num destino de perfil premium e ao ar livre.',

  bairrosNobres: ['Centro', 'Bombas', 'Quatro Ilhas', 'Mariscal'],
  bairrosPopulares: ['Canto Grande', 'Zimbros', 'José Amândio', 'Morrinhos'],

  parques: [
    {
      nome: 'Parque Natural Municipal da Costeira de Zimbros',
      descricao:
        'Unidade de conservação municipal com trilhas em meio à Mata Atlântica preservada, mirantes naturais sobre a Baía de Zimbros e vestígios de sambaquis; um dos principais espaços para caminhada e trekking na península.',
    },
    {
      nome: 'Trilha da Sepultura',
      descricao:
        'Percurso curto (cerca de 800 m) que liga a Praia da Sepultura a mirantes e costões, com vegetação densa e evidências históricas de antigos ranchos de pesca — opção acessível para caminhada com vista para o mar.',
    },
    {
      nome: 'Mirante do Morro do Macaco',
      descricao:
        'Ponto elevado com vista panorâmica de praticamente toda a península e das ilhas vizinhas; a subida é um desafio buscado por quem treina ao ar livre e quer combinar esforço físico com paisagem.',
    },
  ],
  ciclovias:
    'A malha cicloviária é limitada e concentrada em trechos das orlas principais; boa parte do pedal e da corrida acontece nas vias que cortam a península e ao longo das praias mais estruturadas, com atenção redobrada ao trânsito intenso do verão.',

  clima:
    'O clima é subtropical litorâneo, com verões quentes e úmidos (dezembro a março), águas mornas e chuvas frequentes, e invernos amenos e mais secos. A península fica exposta à brisa marítima, e os meses de maio a agosto costumam ser os mais secos, com boa visibilidade — período valorizado para trilhas e atividades ao ar livre.',
  climaTreino:
    'No verão, o calor úmido e a alta lotação pedem treino no início da manhã ou fim de tarde, com hidratação reforçada e proteção solar nas praias. O inverno ameno e seco favorece corridas, trilhas e treino ao ar livre com conforto térmico, aproveitando a menor movimentação turística.',

  mobilidade:
    'Por ser uma península de acesso concentrado, Bombinhas depende essencialmente da rodovia SC-412, que liga a cidade a Porto Belo e ao restante do litoral; no verão, esse acesso único gera congestionamentos expressivos. O transporte interno é feito por vias que percorrem os bairros e as praias, e a proximidade com a BR-101 conecta a península a Itapema, Balneário Camboriú e à região da AMFRI.',

  corridas: [
    {
      nome: 'Indomit Bombinhas Trail Run',
      descricao:
        'Prova de trail running consolidada no calendário local, com percursos que exploram trilhas, costões e praias da península; reúne corredores do Brasil e do exterior em edições realizadas há mais de uma década.',
    },
    {
      nome: 'Costa Esmeralda Trail Run',
      descricao:
        'Corrida de trilha cujo percurso passa por Porto Belo e Bombinhas, unindo esporte, turismo e paisagem litorânea na chamada Costa Esmeralda.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Bombinhas é fortemente ligada ao mar e à natureza: mergulho ecológico na Reserva do Arvoredo, surfe em praias como Mariscal, esportes aquáticos nas baías calmas de Zimbros, além de trilhas e provas de trail que aproveitam os costões e a Mata Atlântica da península.',
  academias:
    'A oferta é composta por academias de musculação e treino funcional distribuídas pelos bairros mais estruturados, como Centro, Bombas e José Amândio, com porte compatível com um município pequeno e uma demanda que oscila conforme a temporada turística.',

  destaquesFitness: [
    'Capital Nacional do Mergulho Ecológico, às portas da Reserva Biológica Marinha do Arvoredo.',
    'Península com dezenas de praias e trilhas em Mata Atlântica, cenário natural para treino ao ar livre.',
    'Forte sazonalidade turística, que faz a demanda por treino oscilar entre verão lotado e inverno tranquilo.',
    'Provas de trail run consolidadas, como o Indomit Bombinhas, explorando costões e praias da região.',
  ],

  precos: {
    avulsaMin: 65,
    avulsaMax: 140,
    mensalMin: 300,
    mensalMax: 820,
    onlineMin: 140,
    onlineMax: 400,
  },

  conclusao:
    'Península de praias premium e natureza preservada, Bombinhas combina mar, trilhas e forte apelo ao ar livre com uma rotina marcada pela sazonalidade turística. Um personal trainer ajuda a aproveitar as praias, os costões e as trilhas da região, ajustando os horários ao calor do verão e mantendo a constância na baixa temporada.',

  vizinhas: ['itapema-sc', 'balneario-camboriu-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Bombinhas', url: 'https://cidades.ibge.gov.br/brasil/sc/bombinhas/panorama' },
    { nome: 'Turismo de Bombinhas — Prefeitura', url: 'https://turismo.bombinhas.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
