import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'dom-pedrito-rs',
  nome: 'Dom Pedrito',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'pedritense',
  tipo: 'cidade',

  populacao: 36981,
  populacaoAno: 2022,
  idhm: 0.71,
  idhmClasse: 'alto',
  altitudeM: 128,

  resumoEconomico:
    'Situada às margens do rio Santa Maria, na Campanha gaúcha, a poucos quilômetros da fronteira com o Uruguai, Dom Pedrito é um dos municípios de maior valor de produção agrícola do Rio Grande do Sul, com destaque nacional na produção de arroz e forte presença de soja e pecuária de corte. A cidade também desponta na vitivinicultura da Indicação de Procedência Campanha Gaúcha, com vinícolas como Guatambu, Vinhos Dom Pedrito, Cerros de Gaya e Dunamis, e é reconhecida como polo da criação do cavalo Crioulo, com cabanhas que disputam o tradicional Freio de Ouro.',

  mercado:
    'Por ser uma cidade média do interior da Campanha, o mercado de personal trainer em Dom Pedrito é enxuto e concentrado nas academias e estúdios do centro. O campus da Unipampa, com cursos como Zootecnia, Agronegócio e Enologia, atrai população estudantil e movimenta a procura por atividade física, enquanto a rotina da lida campeira e do agronegócio reforça a demanda por treino de força e condicionamento entre quem trabalha no campo e na cidade.',

  bairrosNobres: ['Centro', 'Bela Vista', 'Ivo Costa'],
  bairrosPopulares: ['Cerrito', 'Vila Progresso', 'Passo Fundo', 'Vila Michel'],

  parques: [
    {
      nome: 'Praça General Osório',
      descricao:
        'Praça central e histórica da cidade, com a tradicional caixa d\'água iluminada como ponto de referência; suas alamedas arborizadas são usadas para caminhada leve no coração de Dom Pedrito.',
    },
    {
      nome: 'Margens do rio Santa Maria',
      descricao:
        'O rio que deu origem ao povoamento da cidade corre nos arredores da área urbana, com trechos de vegetação ciliar aproveitados informalmente para caminhada e contato com a natureza.',
    },
    {
      nome: 'Campos e coxilhas do Pampa',
      descricao:
        'O relevo suave de coxilhas típico do bioma Pampa, nas saídas da cidade e nas estâncias vizinhas, é cenário de cavalgadas, provas de laço e treinos ao ar livre ligados à lida campeira.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada, restrita a poucos trechos sinalizados na área central; grande parte de quem pedala ou corre usa as avenidas do entorno do centro e as estradas rurais que levam às estâncias e vinícolas da região.',

  clima:
    'O clima é subtropical, marcado pelo bioma Pampa: verões quentes, com máximas que passam dos 34 °C, e invernos rigorosos, entre os mais frios do Rio Grande do Sul, com geadas frequentes e registros de temperatura negativa em junho e julho.',
  climaTreino:
    'De outubro a abril, as condições costumam favorecer o treino ao ar livre, com atenção à hidratação nos dias mais quentes e secos. No inverno, o frio intenso e o vento da Campanha pedem aquecimento cuidadoso, agasalho em camadas e, nos dias mais rigorosos, a opção por ambientes fechados.',

  mobilidade:
    'Dom Pedrito é cortada pela BR-293, rodovia que liga Pelotas a Quaraí e conecta o município a Bagé, a leste, e a Santana do Livramento, na fronteira com o Uruguai, a oeste — eixo usado tanto pelo fluxo de grãos quanto pelo deslocamento diário da população. O transporte urbano é feito por ônibus, e boa parte dos deslocamentos internos ocorre a pé ou de carro, dado o porte compacto da malha urbana.',

  corridas: [
    {
      nome: 'Rústica Aniversário de Dom Pedrito',
      descricao:
        'Prova de rua tradicional que celebra o aniversário de emancipação do município, reunindo corredores locais e de cidades vizinhas pelas ruas do centro.',
    },
    {
      nome: 'Circuito DP Runners',
      descricao:
        'Etapas organizadas pelo grupo de corrida local ao longo do ano, com percursos que passam pela Praça General Osório e vias centrais da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Dom Pedrito é atravessada pela tradição campeira — hipismo, laço e a criação do cavalo Crioulo, com destaque no Freio de Ouro — somada a um movimento crescente de corrida de rua e musculação, puxado em parte pela comunidade universitária da Unipampa.',
  academias:
    'A oferta reúne academias de bairro e estúdios de musculação e treino funcional concentrados principalmente no centro da cidade, com porte compatível com um município médio da Campanha, complementada pelo trabalho de personal trainers que atendem em domicílio e ao ar livre.',

  destaquesFitness: [
    'Maior valor de produção agrícola do RS, com destaque nacional em arroz e soja, ao lado da vitivinicultura da Campanha Gaúcha.',
    'Tradição na criação do cavalo Crioulo e no Freio de Ouro, com a lida campeira moldando a cultura esportiva local.',
    'Invernos entre os mais rigorosos do Rio Grande do Sul, com geadas e temperaturas negativas que pedem treino adaptado.',
    'Campus da Unipampa (Zootecnia, Agronegócio, Enologia) aquecendo a demanda por atividade física entre a população estudantil.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 680,
    onlineMin: 115,
    onlineMax: 330,
  },

  conclusao:
    'Entre os campos do Pampa e as margens do rio Santa Maria, Dom Pedrito combina a rotina da lida campeira com o ritmo de uma cidade universitária de fronteira. Um personal trainer ajuda a manter a constância diante dos extremos de temperatura da Campanha, organizando o treino ao ar livre nos meses mais amenos e migrando para ambientes fechados quando o inverno aperta.',

  vizinhas: ['bage-rs', 'santana-do-livramento-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Dom Pedrito', url: 'https://cidades.ibge.gov.br/brasil/rs/dom-pedrito/panorama' },
    { nome: 'Prefeitura de Dom Pedrito', url: 'https://www.dompedrito.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
