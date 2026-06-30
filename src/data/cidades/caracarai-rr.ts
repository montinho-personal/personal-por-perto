import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'caracarai-rr',
  nome: 'Caracaraí',
  uf: 'RR',
  estado: 'Roraima',
  estadoSlug: 'roraima',
  regiao: 'Norte',
  gentilico: 'caracaraiense',
  tipo: 'cidade',

  populacao: 20957,
  populacaoAno: 2022,
  idhm: 0.624,
  idhmClasse: 'médio',
  altitudeM: 60,

  resumoEconomico:
    'Conhecida como a Cidade-Porto, Caracaraí fica no centro-sul de Roraima, às margens do rio Branco, e abriga a maior movimentação fluvial do estado — o trecho a jusante, em direção a Manaus, é o mais navegável do baixo rio Branco. A economia combina o porto fluvial (que escoa cargas e abastece a região), a agropecuária (com a cidade entre as principais produtoras de arroz, milho, soja e na pecuária do estado) e o extrativismo, como a coleta da castanha-do-brasil por famílias ribeirinhas e indígenas. A posição na BR-174, eixo terrestre que liga Roraima ao Amazonas, reforça o papel logístico do município, o maior em área de Roraima.',

  mercado:
    'Por ser uma cidade pequena e relativamente isolada no interior de Roraima, o mercado fitness de Caracaraí é enxuto, concentrado em algumas academias locais de musculação e treino funcional. A procura por personal trainers tende a aparecer entre quem busca acompanhamento individual num lugar com poucas opções de estrutura, treino adaptado ao calor equatorial e aproveitamento da orla do rio e dos espaços abertos da cidade para atividade ao ar livre.',

  bairrosNobres: ['Centro', 'São Francisco', 'Vila Vintém'],
  bairrosPopulares: ['Bela Vista', 'Cacau', 'Cidade Nova', 'Pricumã'],

  parques: [
    {
      nome: 'Orla do Rio Branco (Porto)',
      descricao:
        'O coração da Cidade-Porto, junto ao rio Branco, reúne o movimento fluvial e a beira-rio — o trecho mais usado para caminhada e treino ao ar livre, com vista para o principal porto fluvial de Roraima.',
    },
    {
      nome: 'Corredeiras do Bem-Querer',
      descricao:
        'Quedas e corredeiras na margem direita do rio Branco, a cerca de 125 km de Boa Vista, são o principal cartão-postal natural do município e um ponto de lazer e contato com a natureza no entorno da cidade.',
    },
    {
      nome: 'Parque Nacional do Viruá',
      descricao:
        'Unidade de conservação no centro-sul de Roraima, dentro do município, reúne um mosaico de florestas, campinaranas e áreas alagáveis; suas trilhas e passarelas oferecem opção de atividade em meio à floresta amazônica, sujeita à visitação controlada.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é mínima, própria de uma cidade pequena do interior; a maior parte do pedal e da corrida acontece nas vias urbanas planas e ao longo da orla do rio Branco.',

  clima:
    'O clima é equatorial, quente e úmido, com temperatura média anual em torno de 26 a 27 °C e máximas que passam dos 32 °C. Diferente do Centro-Sul do país, o ano em Roraima se divide em duas estações invertidas: a chuvosa, de abril a setembro (com chuvas intensas típicas da Amazônia), e a seca, de outubro a março, quando o calor e a baixa umidade se acentuam.',
  climaTreino:
    'O calor e a umidade elevados durante quase todo o ano pedem treinar bem cedo ou no fim da tarde, com hidratação reforçada; no período chuvoso, ambientes cobertos garantem a constância, enquanto a estação seca exige atenção redobrada à hidratação e ao horário no treino ao ar livre.',

  mobilidade:
    'Caracaraí é cortada pela BR-174, eixo rodoviário que liga Boa Vista ao Amazonas e a Manaus, e conta também com a BR-432 no acesso regional. O grande diferencial é o porto fluvial no rio Branco, com a maior movimentação de embarcações do estado, que escoa cargas e abastece a região. O deslocamento urbano é curto, feito a pé, de bicicleta ou em veículos próprios.',

  corridas: [
    {
      nome: 'Festival Folclórico de Caracaraí',
      descricao:
        'Criado em 2006, é um dos eventos que mais movimentam a cidade; embora seja cultural, concentra a agenda esportiva e de lazer ao ar livre do município ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é a de uma cidade pequena e ribeirinha: gira em torno do rio Branco, da orla e dos espaços abertos, com caminhada e corrida nas vias planas e o lazer ligado às corredeiras do Bem-Querer e à natureza amazônica do entorno.',
  academias:
    'A oferta se resume a algumas academias locais de musculação e treino funcional na área central, com porte compatível com uma cidade pequena e isolada do interior de Roraima.',

  destaquesFitness: [
    'Cidade-Porto: maior movimentação fluvial de Roraima, com a orla do rio Branco como espaço de treino ao ar livre.',
    'Corredeiras do Bem-Querer e Parque Nacional do Viruá no entorno, ligando atividade física e natureza amazônica.',
    'Clima equatorial quente e úmido, com estações invertidas (chuva de abril a setembro), que exige planejar horário e hidratação.',
    'Cidade pequena e isolada na BR-174, com economia de porto fluvial, agropecuária e extrativismo.',
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
    'Pequena, ribeirinha e cercada pela floresta amazônica, Caracaraí pede um treino adaptado ao calor equatorial e que aproveite a orla do rio Branco e os espaços abertos da Cidade-Porto. Num lugar com poucas opções de estrutura, um personal trainer ajuda a organizar a rotina, escolher os melhores horários diante do clima e manter a constância ao longo das estações chuvosa e seca.',

  vizinhas: ['boa-vista-rr', 'rorainopolis-rr'],

  fontes: [
    { nome: 'IBGE Cidades — Caracaraí', url: 'https://cidades.ibge.gov.br/brasil/rr/caracarai/panorama' },
    { nome: 'Prefeitura de Caracaraí', url: 'https://www.caracarai.rr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
