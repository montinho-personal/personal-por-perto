import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'curitibanos-sc',
  nome: 'Curitibanos',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'curitibanense',
  tipo: 'cidade',

  populacao: 40045,
  populacaoAno: 2022,
  idhm: 0.721,
  idhmClasse: 'alto',
  altitudeM: 987,

  resumoEconomico:
    'No coração do Planalto Serrano catarinense, Curitibanos é um polo regional cercado pela Floresta Ombrófila Mista, a mata de araucárias. A economia se apoia no agronegócio — soja, milho, feijão e produção de leite —, na pecuária e na cadeia da madeira e do reflorestamento, que respondem por boa parte da indústria local. A cidade também é referência na produção de sementes e no cultivo do alho do Planalto, e ganhou novo fôlego com o campus da UFSC, voltado às ciências agrárias, que ampliou o público universitário e os serviços na cidade.',

  mercado:
    'Como cidade média e centro de serviços do Planalto Serrano, Curitibanos tem um mercado fitness em crescimento gradual, sustentado por academias locais e pela presença de estudantes e profissionais ligados ao campus universitário. A procura por personal trainers cresce entre quem busca treino orientado para enfrentar o inverno rigoroso e manter a constância apesar do frio prolongado.',

  bairrosNobres: ['Centro', 'São Luiz', 'Universitário', 'Bosque'],
  bairrosPopulares: ['Bom Jesus', 'Água Santa', 'Nossa Senhora Aparecida', 'São José'],

  parques: [
    {
      nome: 'Praça da República (Centro)',
      descricao:
        'Praça central de Curitibanos, junto ao casario e ao comércio do Centro, próxima à Igreja Matriz Imaculada Conceição — ponto de encontro e de caminhadas leves no miolo da cidade.',
    },
    {
      nome: 'Praça do Centenário',
      descricao:
        'Espaço público de convívio e lazer na área urbana, usado para caminhada e atividades ao ar livre quando o tempo no planalto permite.',
    },
    {
      nome: 'Entorno da mata de araucárias',
      descricao:
        'A cidade é cercada pela Floresta Ombrófila Mista, paisagem típica da serra catarinense; estradas e áreas rurais do entorno, incluindo as fazendas experimentais da UFSC, oferecem percursos para quem treina ao ar livre em meio à natureza de altitude.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana; boa parte do pedal e da corrida acontece nas vias da cidade e nas estradas vicinais do entorno rural, onde o relevo de planalto impõe subidas e o frio molda os horários de treino.',

  clima:
    'Curitibanos tem clima subtropical de altitude (Cfb na classificação de Köppen), com as quatro estações bem marcadas e grande amplitude térmica. A 987 metros de altitude, no Planalto Serrano, registra invernos rigorosos, com cerca de 25 dias de geada por ano e temperaturas que podem ficar abaixo de zero na entrada de massas de ar polar; os verões são amenos para os padrões brasileiros.',
  climaTreino:
    'O frio prolongado pede aquecimento mais cuidadoso e roupas em camadas para o treino ao ar livre, sobretudo de manhã cedo e à noite, quando há geada. Nos dias mais gelados, ambientes fechados são a opção mais confortável, e o verão ameno tende a ser a melhor janela para corrida e atividades externas.',

  mobilidade:
    'Curitibanos ocupa posição central em Santa Catarina e é cortada pela BR-470, eixo rodoviário que liga o Planalto Serrano ao Vale do Itajaí e ao litoral, articulando o escoamento da produção agrícola e madeireira. O deslocamento urbano se faz principalmente por carro e por ônibus, e a Rodovia Ulysses Gaboardi conecta a cidade ao campus da UFSC.',

  corridas: [
    {
      nome: 'Corrida da Berlanda',
      descricao:
        'Prova de rua tradicional em Curitibanos, com percursos de 5 km e 10 km, além de caminhada e categorias kids e PCD, que movimenta a comunidade de corredores da região serrana.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso das praças e vias do Centro para caminhada e corrida, provas de rua que reúnem a comunidade serrana e a ligação com a natureza de altitude e a mata de araucárias — tudo condicionado pelo inverno frio característico do planalto.',
  academias:
    'A oferta é formada sobretudo por academias locais de musculação e treino funcional, distribuídas pelos bairros centrais e residenciais, com porte compatível com uma cidade média do interior catarinense e um público reforçado pela presença universitária.',

  destaquesFitness: [
    'Cidade do Planalto Serrano a quase mil metros de altitude, com inverno rigoroso e geadas frequentes.',
    'Entorno de mata de araucárias e estradas rurais como cenário para treino ao ar livre.',
    'Corrida da Berlanda como principal prova de rua, com percursos de 5 km e 10 km.',
    'Polo de agronegócio, sementes e madeira, com campus da UFSC voltado às ciências agrárias.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade fria de altitude no centro de Santa Catarina, Curitibanos pede um treino adaptado ao inverno rigoroso e que aproveite as praças e a natureza serrana nos dias mais amenos. Um personal trainer ajuda a organizar a rotina respeitando o frio, ajustando aquecimento e horários e mantendo a constância ao longo das estações bem marcadas do planalto.',

  vizinhas: ['cacador-sc', 'lages-sc'],

  fontes: [
    { nome: 'IBGE Cidades — Curitibanos', url: 'https://cidades.ibge.gov.br/brasil/sc/curitibanos/panorama' },
    { nome: 'Prefeitura de Curitibanos', url: 'https://curitibanos.sc.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
