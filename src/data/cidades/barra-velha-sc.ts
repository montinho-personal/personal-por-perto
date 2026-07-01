import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'barra-velha-sc',
  nome: 'Barra Velha',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'barra-velhense',
  tipo: 'cidade',

  populacao: 45369,
  populacaoAno: 2022,
  idhm: 0.738,
  idhmClasse: 'alto',
  altitudeM: 3,

  resumoEconomico:
    'No litoral norte catarinense, Barra Velha é uma cidade de veraneio de colonização açoriana, fundada em 1961 e marcada por uma faixa de praias que se estende por cerca de 20 km e serve de porta de entrada para o litoral norte do estado. A economia gira em torno do turismo de verão, da pesca artesanal, do comércio e da construção civil, com forte movimento imobiliário. Foi um dos municípios que mais cresceu em população no país entre os Censos de 2010 e 2022, refletindo a atração por moradia e segundas residências à beira-mar.',

  mercado:
    'O mercado fitness de Barra Velha acompanha o perfil litorâneo e sazonal da cidade: a procura por personal trainers cresce no verão, com a chegada de veranistas e famílias de segundas residências, e se apoia no público local que vive na cidade ao longo do ano. As praias, os calçadões da orla e os espaços ao ar livre favorecem a corrida e o treino funcional, enquanto a proximidade com Navegantes, Itajaí e Balneário Camboriú amplia as referências de serviço da região.',

  bairrosNobres: ['Centro', 'Tabuleiro', 'Itajuba', 'São Cristóvão'],
  bairrosPopulares: ['São Cristóvão', 'Quinta dos Açorianos', 'Morretes', 'Vila Nova'],

  parques: [
    {
      nome: 'Praia do Centro e orla urbana',
      descricao:
        'A faixa de areia mais movimentada da cidade concentra o calçadão e os trechos de orla usados para caminhada, corrida e treino ao ar livre, com estrutura reforçada na temporada de verão.',
    },
    {
      nome: 'Praia do Grant e Praia de Itajuba',
      descricao:
        'Praias ao norte do município, com barcos de pesca artesanal atracados e mar mais calmo; o entorno é procurado para caminhadas à beira-mar e atividades leves ao ar livre longe do centro.',
    },
    {
      nome: 'Praia do Tabuleiro',
      descricao:
        'Faixa litorânea extensa entre as mais procuradas do litoral norte catarinense, com longos trechos de areia que servem de percurso para corrida e caminhada em cenário mais aberto.',
    },
  ],
  ciclovias:
    'A malha cicloviária é pontual e concentrada em trechos da área urbana e da orla; boa parte do pedal e da corrida acontece nas vias litorâneas e nos calçadões das praias mais movimentadas.',

  clima:
    'O clima é subtropical úmido, com verões quentes e chuvosos e invernos amenos, típico do litoral catarinense. A brisa marítima ameniza o calor, mas a alta temporada (dezembro a março) combina temperaturas elevadas, umidade e forte incidência solar, enquanto o outono e o inverno são mais frescos.',
  climaTreino:
    'No verão, o ideal é treinar cedo ou no fim da tarde, com hidratação e proteção solar reforçadas, aproveitando a brisa do mar; o outono e o inverno, mais amenos, ampliam a janela de conforto para atividades ao ar livre ao longo do dia.',

  mobilidade:
    'O acesso principal a Barra Velha se dá pela BR-101, eixo que corta o município e o liga a Navegantes, Itajaí, Balneário Camboriú e ao restante do litoral catarinense, com forte aumento de fluxo na temporada. O transporte urbano é feito por ônibus, e o aeroporto de Navegantes, próximo, atende parte da demanda turística da região.',

  corridas: [
    {
      nome: 'Corridas de verão na orla',
      descricao:
        'Provas de rua realizadas na alta temporada aproveitam o calçadão e as praias da cidade, reforçando a vocação de Barra Velha para atividades ao ar livre no litoral norte catarinense.',
    },
    {
      nome: 'Meia Maratona Internacional de Navegantes',
      descricao:
        'Prova de rua tradicional realizada na vizinha Navegantes, que reúne corredores de toda a região do litoral norte, incluindo praticantes de Barra Velha.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva mistura o uso das praias e da orla para caminhada e corrida, a tradição da pesca artesanal e da herança açoriana e o movimento turístico do verão — tudo marcado pela sazonalidade da alta temporada litorânea.',
  academias:
    'A oferta reúne academias locais de musculação e treino funcional distribuídas pelo Centro e pelos bairros próximos às praias, com porte compatível com uma cidade litorânea de médio movimento que amplia a demanda na alta temporada.',

  destaquesFitness: [
    'Cidade de veraneio no litoral norte catarinense, com cerca de 20 km de praias como Grant, Itajuba e Tabuleiro.',
    'Orla e calçadões usados para caminhada, corrida e treino ao ar livre, com estrutura reforçada no verão.',
    'Herança açoriana e forte tradição de pesca artesanal ao longo da costa.',
    'Clima subtropical litorâneo e alta temporada de verão, que pedem treino em horários mais frescos e boa hidratação.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 130,
    mensalMin: 280,
    mensalMax: 780,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade litorânea, turística e marcada pela sazonalidade do verão, Barra Velha pede um treino que aproveite as praias e a orla e que se ajuste ao calor e à umidade da alta temporada. Um personal trainer ajuda a organizar a rotina, escolher os melhores horários e manter a constância durante todo o ano, dentro e fora da temporada.',

  vizinhas: ['penha-sc', 'navegantes-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Barra Velha', url: 'https://cidades.ibge.gov.br/brasil/sc/barra-velha/panorama' },
    { nome: 'Prefeitura de Barra Velha', url: 'https://www.barravelha.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
