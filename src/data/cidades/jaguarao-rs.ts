import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'jaguarao-rs',
  nome: 'Jaguarão',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'jaguarense',
  tipo: 'cidade',

  populacao: 26603,
  populacaoAno: 2022,
  idhm: 0.71,
  idhmClasse: 'alto',
  altitudeM: 11,

  resumoEconomico:
    'No extremo sul do Rio Grande do Sul, Jaguarão fica na fronteira com o Uruguai, separada de Rio Branco pelo rio Jaguarão e ligada à cidade uruguaia pela histórica Ponte Internacional Barão de Mauá. A economia combina a pecuária de corte e a lavoura de arroz da Campanha com o comércio de fronteira — impulsionado pelas free shops instaladas desde os anos 2000 — e um turismo histórico crescente, ancorado no conjunto arquitetônico do centro, tombado pelo Iphan em 2011.',

  mercado:
    'Por ser uma cidade pequena e fronteiriça, o mercado de personal trainers em Jaguarão é enxuto, concentrado em poucas academias e estúdios locais de musculação. A procura tende a vir de quem busca treino individualizado diante da oferta limitada de estruturas, além de moradores que aproveitam o centro histórico e a orla do rio para caminhada e corrida orientadas.',

  bairrosNobres: ['Centro', 'Cerrito', 'Bela Vista', 'Boa Esperança'],
  bairrosPopulares: ['Kennedy', 'Carvalho', 'Cristo', 'Pindorama'],

  parques: [
    {
      nome: 'Centro Histórico tombado',
      descricao:
        'Conjunto de mais de 700 edificações preservadas dos séculos XIX e XX, tombado pelo Iphan em 2011; as ruas de paralelepípedo e o entorno da Praça Dr. Antão de Farias formam o principal cenário de caminhada da cidade.',
    },
    {
      nome: 'Orla do rio Jaguarão',
      descricao:
        'Margem do rio que separa Jaguarão de Rio Branco (Uruguai), com vista para a Ponte Internacional Barão de Mauá — espaço usado por moradores para caminhada e atividade ao ar livre junto à água.',
    },
    {
      nome: 'Ponte Internacional Barão de Mauá',
      descricao:
        'Construída entre 1927 e 1930, com cerca de 2,1 km de extensão, é o primeiro bem binacional tombado pelo Iphan e tem calçadas ao longo de toda a travessia, usadas por pedestres entre os dois países.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária formal é limitada; o deslocamento a pé e de bicicleta se concentra nas ruas do centro histórico, de baixo tráfego, e no acesso à Ponte Mauá.',

  clima:
    'O clima é subtropical, com verões quentes e invernos frios e úmidos, marcados pelo vento minuano e por geadas frequentes em junho, julho e agosto; a temperatura máxima histórica registrada na cidade é de 42,6 °C.',
  climaTreino:
    'De outubro a abril, as condições favorecem o treino ao ar livre pela manhã ou ao entardecer, evitando o calor do meio-dia; no inverno, o frio intenso e o vento pedem agasalho reforçado e, em dias mais rigorosos, a migração do treino para ambientes fechados.',

  mobilidade:
    'Jaguarão é servida pela BR-293, que liga a cidade a Pelotas, Bagé e à região da Campanha, e pela Ponte Internacional Barão de Mauá, principal via de acesso rodoviário e de pedestres ao Uruguai. O deslocamento interno é predominantemente feito a pé ou de carro, dado o porte compacto do centro histórico.',

  corridas: [
    {
      nome: 'Corridas de rua locais',
      descricao:
        'Provas e caminhadas organizadas pontualmente pela prefeitura, escolas e entidades locais, com largada geralmente no centro histórico e percursos que passam perto da orla do rio Jaguarão.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Jaguarão tem forte marca gaúcha, com tradição campeira, rodeios e atividades ligadas aos CTGs, somada ao uso cotidiano das ruas do centro histórico e da orla do rio para caminhada. A proximidade com Rio Branco também aproxima moradores dos dois lados da fronteira em atividades ao ar livre.',
  academias:
    'A oferta de academias é pequena e concentrada no centro da cidade, formada por estúdios de musculação e espaços de treino funcional compatíveis com o porte de um município fronteiriço do interior gaúcho.',

  destaquesFitness: [
    'Centro histórico tombado pelo Iphan, com ruas de paralelepípedo para caminhada entre casarões preservados.',
    'Ponte Internacional Barão de Mauá, com calçada para pedestres ligando Jaguarão a Rio Branco, no Uruguai.',
    'Vento minuano e geadas no inverno, que pedem agasalho e ajuste de horário para o treino ao ar livre.',
    'Cidade de fronteira, com economia de pecuária, arroz e comércio, e mercado fitness enxuto e local.',
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
    'Cidade histórica e de fronteira, Jaguarão oferece um cenário único para caminhar e treinar ao ar livre, entre o casario tombado do centro e a orla do rio junto à Ponte Mauá. Um personal trainer ajuda a manter a constância diante da oferta local enxuta de academias e das variações do clima subtropical entre o calor do verão e o frio cortante do inverno.',

  vizinhas: ['pelotas-rs', 'bage-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Jaguarão', url: 'https://cidades.ibge.gov.br/brasil/rs/jaguarao/panorama' },
    { nome: 'Prefeitura de Jaguarão', url: 'https://www.jaguarao.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
