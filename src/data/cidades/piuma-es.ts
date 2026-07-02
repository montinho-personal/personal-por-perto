import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'piuma-es',
  nome: 'Piúma',
  uf: 'ES',
  estado: 'Espírito Santo',
  estadoSlug: 'espirito-santo',
  regiao: 'Sudeste',
  gentilico: 'piumense',
  tipo: 'cidade',

  populacao: 22300,
  populacaoAno: 2022,
  idhm: 0.727,
  idhmClasse: 'alto',
  altitudeM: 2,

  resumoEconomico:
    'Conhecida nacionalmente como a Capital Capixaba das Conchas, Piúma é o menor município do Espírito Santo em extensão territorial e um dos destinos mais procurados do litoral sul capixaba. A economia local combina a pesca artesanal — com barcos coloridos que ainda desembarcam no centro — o artesanato feito a partir de conchas do mar e um comércio de serviços que se intensifica no verão com o turismo de praia. A cidade fica às margens da Rodovia do Sol (ES-060), eixo que liga o litoral sul capixaba a Vitória.',

  mercado:
    'O mercado fitness de Piúma é pequeno e bastante sazonal, acompanhando o fluxo turístico do verão e dos feriados prolongados na orla. Fora da alta temporada, a procura por personal trainers se concentra em moradores fixos e se apoia em academias locais de pequeno e médio porte; no período de veraneio, cresce a demanda por treinos ao ar livre na praia e por acompanhamento pontual de visitantes.',

  bairrosNobres: ['Centro', 'Monte Aghá I', 'Monte Aghá II', 'Portinho'],
  bairrosPopulares: ['Acaiaca', 'Niterói', 'Nova Esperança', 'Santa Rita'],

  parques: [
    {
      nome: 'Orla da Praia de Piúma',
      descricao:
        'Faixa de areia central, com mar calmo e infraestrutura de apoio, é o principal ponto de caminhada, corrida e treino ao ar livre da cidade, especialmente ao amanhecer e no fim da tarde.',
    },
    {
      nome: 'Monte Aghá',
      descricao:
        'Elevação de 340 metros que funciona como cartão-postal do município, na divisa com Itapemirim; trilhas de acesso são usadas por quem busca caminhada mais intensa com vista para o mar.',
    },
    {
      nome: 'Mirante e Ilha do Gambá',
      descricao:
        'Ligada ao continente por uma faixa estreita de terra, a região da Ilha do Gambá tem mirante com vista para os manguezais e o mar, servindo como opção de passeio a pé fora do eixo mais movimentado da orla.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é limitada, concentrada em trechos pontuais próximos à orla; a maior parte do deslocamento a pé e de bicicleta acontece nas vias urbanas e no calçadão da praia central.',

  clima:
    'O clima é tropical, quente e semiúmido, com temperatura média em torno de 22,6 °C e ventos marítimos fortes característicos da costa sul capixaba. Os verões são mais quentes e úmidos, enquanto os invernos são amenos, com poucas variações bruscas de temperatura.',
  climaTreino:
    'O sol forte e a exposição direta na orla pedem treino nos horários mais amenos — cedo pela manhã ou no fim da tarde — além de proteção solar e hidratação reforçada; os ventos constantes da costa também são um fator a considerar em atividades de maior duração ao ar livre.',

  mobilidade:
    'O acesso principal se dá pela Rodovia do Sol (ES-060), que liga Piúma a Vitória (cerca de 130 km) e conecta o município a Vila Velha, Guarapari e Anchieta ao norte, e a Itapemirim e Marataízes ao sul. Por ser um município pequeno e compacto, boa parte dos deslocamentos internos é feita a pé, de bicicleta ou em curtos trajetos de carro.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva de Piúma gira em torno do mar: caminhada e corrida na orla, futevôlei e outros esportes de praia, além da pesca e do surfe em pontos como a Praia Doce e a Boca da Barra. O ritmo da cidade também é marcado pelo Carnaval de rua e pela vida ao ar livre típica das comunidades litorâneas capixabas.',
  academias:
    'A oferta de academias é pequena e concentrada no Centro e em bairros próximos, com estúdios de musculação e funcional, incluindo unidades de rede regional que atuam no litoral sul do Espírito Santo desde os anos 2000.',

  destaquesFitness: [
    'Conhecida como a Capital Capixaba das Conchas, com economia ligada à pesca artesanal e ao turismo de praia.',
    'Orla da Praia de Piúma e praias vizinhas, como Pau Grande (Portinho) e Maria Neném, usadas para caminhada, corrida e esportes de praia.',
    'Menor município do Espírito Santo em extensão territorial, o que concentra a vida urbana e a orla em distâncias curtas.',
    'Clima tropical quente com ventos marítimos fortes ao longo da Rodovia do Sol (ES-060), o que pede treino adaptado ao sol e à maré.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Cidade pequena, litorânea e de forte identidade pesqueira, Piúma oferece na própria orla um cenário natural para caminhada, corrida e esportes de praia. Um personal trainer ajuda a aproveitar esse espaço com segurança, ajustando horários ao sol e ao vento da costa e mantendo a constância do treino entre a rotina local e o movimento sazonal do turismo de verão.',

  vizinhas: ['guarapari-es', 'marataizes-es', 'cachoeiro-de-itapemirim-es'],

  fontes: [
    { nome: 'IBGE Cidades — Piúma', url: 'https://cidades.ibge.gov.br/brasil/es/piuma/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Piúma', url: 'https://www.piuma.es.gov.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
