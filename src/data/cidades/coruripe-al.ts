import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'coruripe-al',
  nome: 'Coruripe',
  uf: 'AL',
  estado: 'Alagoas',
  estadoSlug: 'alagoas',
  regiao: 'Nordeste',
  gentilico: 'coruripense',
  tipo: 'cidade',

  populacao: 50414,
  populacaoAno: 2022,
  idhm: 0.626,
  idhmClasse: 'médio',
  altitudeM: 16,

  resumoEconomico:
    'No litoral sul de Alagoas, Coruripe tem a economia historicamente ligada à agroindústria sucroalcooleira — a Usina Coruripe é uma das maiores produtoras de açúcar e etanol do estado e estrutura boa parte do emprego da região. A faixa litorânea reúne a cultura do coco, a pesca artesanal e um turismo de praia em expansão, puxado por destinos como o Pontal do Coruripe, as lagoas e os recifes que formam piscinas naturais na maré baixa.',

  mercado:
    'Por ser uma cidade média do interior nordestino, o mercado fitness de Coruripe é enxuto e concentrado em academias locais de musculação e treino funcional. A procura por personal trainers tende a aparecer entre quem busca acompanhamento individual e entre moradores que aproveitam a orla e a faixa de areia como espaço de treino ao ar livre, especialmente no período de maior movimento turístico.',

  bairrosNobres: ['Centro', 'Pontal do Coruripe', 'Poxim', 'Pindorama'],
  bairrosPopulares: ['Miaí de Baixo', 'Miaí de Cima', 'Barreiras', 'Mangabeira'],

  parques: [
    {
      nome: 'Praia do Pontal do Coruripe',
      descricao:
        'O principal cartão-postal da cidade, com águas calmas, coqueiros e piscinas naturais que se formam entre os recifes na maré baixa. A faixa de areia e o calçadão da orla são os pontos mais usados para caminhada, corrida e treino ao ar livre.',
    },
    {
      nome: 'Farol do Pontal',
      descricao:
        'Construído em 1948 na parte alta acima da praia do Pontal, o farol é símbolo da cidade e ponto de referência. O entorno, com mirante, bares e artesanato, e as ladeiras de acesso servem de percurso para quem treina ao ar livre com vista para o mar.',
    },
    {
      nome: 'Lagoas do litoral (Lagoa do Pau e região)',
      descricao:
        'A região litorânea concentra lagoas como a Lagoa do Pau, Jequiá e Guaxuma, cercadas de área verde e usadas para banho e lazer — alternativa de ambiente natural para atividades ao ar livre fora da faixa de praia.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta e concentrada em trechos da área urbana e da orla; boa parte do pedal e da corrida acontece nas vias do Centro e ao longo da faixa litorânea do Pontal.',

  clima:
    'O clima é tropical litorâneo, quente e úmido o ano todo, com temperatura média em torno de 25,5 °C e brisa do mar que ameniza a sensação térmica na orla. As chuvas se concentram no outono e inverno (com pico em maio e junho), enquanto o período de setembro a março é o mais seco e ensolarado.',
  climaTreino:
    'O calor e a umidade pedem treinar no começo da manhã ou no fim da tarde, com hidratação reforçada; a brisa litorânea ajuda, mas nos picos de sol a faixa de areia exige cautela. No período mais chuvoso, de maio a junho, ambientes cobertos garantem a constância.',

  mobilidade:
    'Coruripe se conecta ao restante do litoral sul alagoano principalmente pela AL-101 Sul, que liga a região a Maceió e aos demais destinos da costa, com apoio de rodovias estaduais de acesso ao Pontal e aos povoados. O deslocamento interno é feito por carro, motocicleta e transporte rodoviário, com distâncias relevantes entre o Centro, os distritos e a faixa de praia.',

  corridas: [
    {
      nome: 'Provas de corrida de rua na orla',
      descricao:
        'A faixa litorânea e o calçadão do Pontal recebem eventualmente provas de corrida de rua e caminhadas ligadas a datas locais e a grupos de corrida da região do litoral sul alagoano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva combina o uso da praia e do calçadão do Pontal para caminhada e corrida, a tradição da pesca e da cultura do coco e o futebol como esporte popular — tudo marcado pelo ritmo litorâneo e pelo calor característico da costa.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo Centro e pelos bairros residenciais, com porte compatível com uma cidade média do litoral nordestino.',

  destaquesFitness: [
    'Praia do Pontal do Coruripe e seu calçadão como espaço de caminhada e corrida ao ar livre.',
    'Clima tropical litorâneo e quente, que exige planejamento de horário e hidratação no treino.',
    'Economia sucroalcooleira (Usina Coruripe), aliada ao coco, à pesca e ao turismo de praia.',
    'Conexão pela AL-101 Sul, que integra a cidade a Maceió e aos destinos do litoral sul alagoano.',
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
    'Cidade quente e litorânea, Coruripe pede um treino adaptado ao calor e que aproveite a praia do Pontal e o entorno natural como espaço de atividade. Um personal trainer ajuda a organizar a rotina respeitando o clima, definindo os melhores horários e mantendo a constância ao longo das estações seca e chuvosa.',

  vizinhas: ['penedo-al', 'maceio-al', 'marechal-deodoro-al'],

  fontes: [
    { nome: 'IBGE Cidades — Coruripe', url: 'https://cidades.ibge.gov.br/brasil/al/coruripe/panorama' },
    { nome: 'Prefeitura de Coruripe', url: 'https://site.coruripe.al.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
