import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-thome-das-letras-mg',
  nome: 'São Thomé das Letras',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'letrense',
  tipo: 'cidade',

  populacao: 6904,
  populacaoAno: 2022,
  idhm: 0.667,
  idhmClasse: 'médio',
  pibPerCapita: 23103,
  pibPerCapitaAno: 2023,
  altitudeM: 1440,

  resumoEconomico:
    'No Sul de Minas, a cerca de 35 km de Três Corações, São Thomé das Letras é um dos municípios mais altos do estado, erguido sobre uma das maiores reservas de quartzito do mundo. A extração e o beneficiamento da Pedra São Tomé — usada em revestimentos e exportada para vários países — respondem por boa parte da economia local, ao lado de um turismo místico e ecológico consolidado: a cidade atrai visitantes interessados em lendas, grutas, cachoeiras e práticas alternativas de bem-estar. A pecuária e o comércio voltado ao fluxo turístico completam a base econômica de um município pequeno e de baixa densidade populacional.',

  mercado:
    'O mercado fitness de São Thomé das Letras é muito pequeno, compatível com um município de pouco mais de 6 mil habitantes: não há redes de academia, e a oferta se resume a poucos espaços locais de musculação e a profissionais autônomos. Parte da demanda por atividade física orientada vem do próprio fluxo turístico e dos retiros de bem-estar (ioga, práticas contemplativas) instalados na cidade, que também impulsionam a procura por personal trainers para caminhada, trekking e treino ao ar livre entre moradores e visitantes de temporada.',

  bairrosNobres: ['Centro', 'Rosário', 'Jardim Chapadão'],
  bairrosPopulares: ['Sobradinho de Minas', 'Vilas Boas', 'Batinga'],

  parques: [
    {
      nome: 'Complexo da Garganta do Diabo (Complexo da Fenda)',
      descricao:
        'Acessado pela Pedreira Apelúcio, reúne uma cachoeira de cerca de 30 metros que desce por uma fenda estreita entre paredões de quartzito, com trilhas guiadas — um dos passeios mais procurados para quem busca caminhada e contato com a formação rochosa que sustenta a cidade.',
    },
    {
      nome: 'Trilha e Cachoeira do Chapadão',
      descricao:
        'Percurso de cerca de 4 km, feito em 1 a 2 horas de ida e volta, que leva a uma queda d\'água na zona rural — uma das mais de 30 cachoeiras catalogadas no território do município.',
    },
    {
      nome: 'Mirante da Cruz',
      descricao:
        'Instalado em um dos pontos mais altos da cidade, oferece vista panorâmica da área urbana e da região, com a Pirâmide e a Cruz como referências visuais — destino frequente de caminhada ao entardecer.',
    },
  ],
  ciclovias:
    'A cidade não tem estrutura cicloviária; boa parte do acesso às cachoeiras, grutas e mirantes se dá por trilhas e estradas rurais não pavimentadas, usadas tanto para caminhada quanto para mountain bike informal.',

  clima:
    'Por sua altitude elevada (cerca de 1.440 m), São Thomé das Letras tem clima tropical de altitude, mais ameno e frio do que a média do estado, com noites geladas e possibilidade de neblina frequente, sobretudo no inverno; os verões concentram as chuvas.',
  climaTreino:
    'O clima frio de altitude favorece o treino ao ar livre em boa parte do dia, mas pede agasalho nas primeiras horas da manhã e ao entardecer, quando a temperatura cai rapidamente; a neblina e o piso irregular das trilhas rurais também exigem atenção extra em caminhadas e corridas.',

  mobilidade:
    'O principal acesso é pela LMG-862, via pavimentada que liga Três Corações à cidade; a ligação por estrada de terra a partir de Cruzília, de cerca de 35 km, costuma estar em condições piores. Dentro do município, muitas ruas do próprio Centro histórico e praticamente todo o acesso às cachoeiras, grutas e mirantes da zona rural se dão por vias não pavimentadas, e os deslocamentos são feitos majoritariamente por carro.',

  corridas: [
    {
      nome: 'Meia Maratona Sobradinho de Minas a São Thomé das Letras',
      descricao:
        'Prova de corrida de rua já em sua 15ª edição (2025), com percurso entre o distrito de Sobradinho de Minas e a sede do município, organizada com apoio da Prefeitura.',
    },
    {
      nome: 'Corrida e Caminhada Ecológica',
      descricao:
        'Evento anual de corrida de rua e caminhada pelas ruas da cidade e estradas do entorno, promovido pelo Departamento Municipal de Esportes.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local gira em torno do contato direto com a paisagem rochosa: trekking e caminhada até cachoeiras e mirantes, escalada e rapel nos paredões de quartzito, além de ioga e práticas de bem-estar ligadas ao turismo místico que atrai a cidade. Provas de corrida e caminhada organizadas pela Prefeitura, como a Meia Maratona até o distrito de Sobradinho de Minas, complementam esse cenário voltado ao ar livre.',
  academias:
    'Não há redes de academia na cidade; a oferta se limita a poucos espaços pequenos de musculação e treino funcional e a profissionais autônomos, o que é compatível com o porte e a vocação turística e rural do município.',

  destaquesFitness: [
    'Um dos municípios mais altos de Minas Gerais, a cerca de 1.440 m, com clima frio de altitude favorável à caminhada e ao trekking.',
    'Erguida sobre uma das maiores reservas de quartzito do mundo, com a extração da Pedra São Tomé como base econômica ao lado do turismo místico.',
    'Mais de 30 cachoeiras, grutas e formações rochosas no território, cenário para trekking, escalada e rapel.',
    'Meia Maratona Sobradinho de Minas a São Thomé das Letras, prova de longa data que liga o distrito rural à sede do município.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 100,
    mensalMin: 240,
    mensalMax: 600,
    onlineMin: 110,
    onlineMax: 320,
  },

  conclusao:
    'Cidade pequena, alta e cercada por formações de quartzito, São Thomé das Letras tem nas trilhas, cachoeiras e mirantes o principal cenário para quem quer treinar ao ar livre, num clima mais frio do que o habitual em Minas Gerais. Como o mercado local de academias é bastante restrito, um personal trainer que trabalhe com caminhada, trekking e treino adaptável ao terreno rural tende a ser o caminho mais prático para manter a constância na cidade.',

  vizinhas: ['tres-coracoes-mg', 'varginha-mg', 'carmo-de-minas-mg'],

  fontes: [
    { nome: 'IBGE Cidades — São Tomé das Letras', url: 'https://cidades.ibge.gov.br/brasil/mg/sao-tome-das-letras/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de São Thomé das Letras', url: 'https://saotomedasletras.mg.gov.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
