import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'assis-chateaubriand-pr',
  nome: 'Assis Chateaubriand',
  uf: 'PR',
  estado: 'Paraná',
  estadoSlug: 'parana',
  regiao: 'Sul',
  gentilico: 'assis-chateaubriense',
  tipo: 'cidade',

  populacao: 36808,
  populacaoAno: 2022,
  idhm: 0.729,
  idhmClasse: 'alto',
  altitudeM: 440,

  resumoEconomico:
    'Batizada em homenagem ao jornalista e empresário Assis Chateaubriand, a cidade nasceu de um projeto de colonização do interior iniciado em 1951, no governo Vargas, que atraiu migrantes nordestinos, mineiros, capixabas e paulistas, seguidos por gaúchos e catarinenses — tornando-se município em 1966. A economia é puxada pelo agronegócio: Assis Chateaubriand está entre os dez municípios com maior valor bruto de produção agropecuária do Paraná, é o segundo maior produtor de frango e de milho de segunda safra do estado, além de figurar entre os maiores produtores de tilápia. A pecuária leiteira e a agroindústria ligada a grãos e proteína animal completam a base econômica.',

  mercado:
    'Como cidade média do interior com economia sustentada pelo agronegócio, o mercado fitness de Assis Chateaubriand é formado principalmente por academias locais de musculação e treino funcional, sem grandes redes nacionais. A renda gerada pelas cadeias de grãos, frango e leite sustenta uma parcela de público disposta a investir em acompanhamento individualizado, com procura por personal trainer concentrada em treino presencial e, cada vez mais, em consultoria online.',

  bairrosNobres: ['Centro', 'Jardim América', 'Jardim Europa', 'Jardim Mônaco'],
  bairrosPopulares: ['Bragantina', 'Conjunto Alvorada', 'Vila Nice', 'Santa Felicidade'],

  parques: [
    {
      nome: 'Parque São Francisco (Horto Municipal)',
      descricao:
        'Principal espaço de lazer da cidade, no Jardim América, reúne pista de caminhada e corrida, academia da terceira idade, playground, quadra de areia, lagos e nascentes — ponto de referência para quem treina ao ar livre gratuitamente.',
    },
    {
      nome: 'Praças com academia ao ar livre',
      descricao:
        'Praças distribuídas pelos bairros contam com equipamentos de ginástica ao ar livre, complementando a oferta de espaços públicos para exercício fora das academias.',
    },
  ],
  ciclovias:
    'A cidade não tem uma malha cicloviária extensa divulgada oficialmente; a legislação municipal orienta ciclistas a circularem pela direita da via nos trechos sem ciclovia ou ciclofaixa, o que faz do pedal e da corrida de rua uma prática mais dependente de vias compartilhadas.',

  clima:
    'O clima é subtropical úmido (mesotérmico), com verões quentes e chuva concentrada (médias acima de 22 °C) e invernos amenos, com geadas pouco frequentes (médias abaixo de 18 °C) e sem estação seca definida ao longo do ano.',
  climaTreino:
    'O verão quente e úmido pede treino ao ar livre nas primeiras horas da manhã ou ao entardecer, com hidratação reforçada; nas manhãs mais frias de inverno, quando ocorrem geadas ocasionais, vale aquecer bem antes de atividades externas.',

  mobilidade:
    'O acesso rodoviário se dá por rodovias estaduais: a PR-317 liga o município a Toledo (cerca de 40 km), a PR-239 e a PR-486 completam a malha regional, e o transporte intermunicipal passa pela rodoviária local. A cidade não tem aeroporto próprio — o mais próximo fica em Toledo — e fica a cerca de 579 km (por volta de 7h30 de viagem) de Curitiba, refletindo a distância típica do oeste paranaense em relação à capital.',

  corridas: [
    {
      nome: 'Corrida Rústica Noturna Morada Amiga',
      descricao:
        'Prova organizada pela Secretaria Municipal de Esportes em comemoração ao aniversário da cidade, com percursos de 4 km e 8 km e largada na Avenida Itália; reúne corredores de Assis Chateaubriand e municípios vizinhos.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local gira em torno do Parque São Francisco, usado diariamente para caminhada e corrida, e de eventos pontuais ligados ao calendário de aniversário do município, como a Corrida Noturna Morada Amiga — apelido pelo qual a cidade é conhecida.',
  academias:
    'A oferta é formada por academias locais de musculação, funcional e ginástica, concentradas no Centro e em bairros como Jardim América, em porte compatível com uma cidade média do interior paranaense.',

  destaquesFitness: [
    'Parque São Francisco (Horto Municipal): pista de caminhada e corrida, academia da terceira idade e espaço natural de acesso gratuito.',
    'Economia do agronegócio pujante — 2º maior produtor de frango e de milho de segunda safra do Paraná — sustenta renda e demanda por treino personalizado.',
    'Corrida Rústica Noturna Morada Amiga, prova local ligada ao aniversário da cidade, com percursos de 4 km e 8 km.',
    'Clima subtropical úmido sem estação seca definida, com verões quentes e geadas ocasionais no inverno.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 140,
    mensalMin: 280,
    mensalMax: 750,
    onlineMin: 130,
    onlineMax: 380,
  },

  conclusao:
    'Cidade média do agronegócio no oeste do Paraná, Assis Chateaubriand tem no Parque São Francisco seu principal espaço de treino ao ar livre e na renda gerada pelas cadeias de grãos, frango e leite um público disposto a investir em acompanhamento individualizado. Um personal trainer ajuda a aproveitar o parque e as praças da cidade, organizando o treino em torno do clima subtropical úmido e das rotinas do interior.',

  vizinhas: ['toledo-pr', 'cascavel-pr', 'marechal-candido-rondon-pr'],

  fontes: [
    { nome: 'IBGE Cidades — Assis Chateaubriand', url: 'https://cidades.ibge.gov.br/brasil/pr/assis-chateaubriand/panorama' },
    { nome: 'Prefeitura de Assis Chateaubriand', url: 'https://www.assischateaubriand.pr.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
