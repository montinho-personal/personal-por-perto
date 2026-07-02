import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'carrancas-mg',
  nome: 'Carrancas',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'carranquense',
  tipo: 'cidade',

  populacao: 4049,
  populacaoAno: 2022,
  idhm: 0.725,
  idhmClasse: 'alto',
  altitudeM: 1060,

  resumoEconomico:
    'No Sul de Minas, perto da divisa com São Thomé das Letras, Carrancas é um pequeno município erguido em meio a serras que guardam mais de 60 atrativos naturais mapeados — entre cachoeiras, corredeiras, piscinas naturais e cavernas —, o que a consagrou como um dos destinos de ecoturismo mais procurados do estado. A origem remonta à mineração de ouro no século XVIII, cujas escavações em formações rochosas deram nome à cidade; hoje o turismo de natureza convive com a pecuária leiteira, atividade tradicional do Sul de Minas que segue presente na zona rural.',

  mercado:
    'Com pouco mais de 4 mil habitantes, o mercado fitness de Carrancas é mínimo e informal: não há academias de rede, e a oferta se limita a poucos espaços pequenos de musculação e a profissionais autônomos que atendem moradores e o fluxo constante de turistas. Boa parte da procura por orientação profissional está ligada ao próprio ecoturismo — preparo físico para trekking, rapel e caminhadas até as cachoeiras — mais do que à musculação tradicional, o que abre espaço para o personal trainer habituado a treinar ao ar livre.',

  bairrosNobres: ['Centro'],
  bairrosPopulares: ['Bairro Ponte', 'Bairro São José', 'Estação Carrancas'],

  parques: [
    {
      nome: 'Complexo da Fumaça',
      descricao:
        'A cerca de 7 km do centro, reúne a Cachoeira da Fumaça — uma das poucas de acesso público na região, hoje em processo de virar parque municipal — além das quedas Véu de Noiva, Serrinha e do Luciano e a Cascata da Barragem, formando um dos roteiros de trekking mais procurados do município.',
    },
    {
      nome: 'Complexo da Vargem Grande',
      descricao:
        'Localizado cerca de 10 km da sede, é conhecido pelas piscinas naturais e pela Cachoeira da Esmeralda, batizada pela coloração esverdeada e cristalina de suas águas — destino de caminhada e banho de cachoeira.',
    },
    {
      nome: 'Complexo da Zilda',
      descricao:
        'A cerca de 12 km do centro, combina cachoeiras, corredeiras e cavernas com o único sítio arqueológico conhecido do município, com pinturas rupestres — roteiro que une trilha e história geológica da Serra de Carrancas.',
    },
  ],
  ciclovias:
    'A cidade não tem estrutura cicloviária; o acesso à maioria das cachoeiras e complexos naturais se dá por estradas rurais de terra, usadas tanto a pé quanto de bicicleta ou veículo 4x4.',

  clima:
    'Com altitude média de cerca de 1.060 m na sede — podendo chegar a 1.590 m no Pico do Abanador —, Carrancas tem clima de altitude mais ameno e frio do que a média do Sul de Minas, com noites geladas em boa parte do ano e verões chuvosos, período em que os rios ficam mais volumosos e menos cristalinos.',
  climaTreino:
    'A altitude favorece o treino ao ar livre em boa parte do ano, mas as manhãs e noites frias pedem agasalho, e o piso irregular das estradas rurais e trilhas até as cachoeiras exige atenção redobrada, sobretudo no período chuvoso do verão.',

  mobilidade:
    'O acesso mais usual é pela BR-265 até Itutinga, seguindo por trecho pavimentado de cerca de 27 km pela MG-451 até a sede; outra rota comum passa pela MG-332 nas proximidades de Nazareno. Dentro do município, a malha viária é simples, concentrada no pequeno núcleo urbano em torno da Praça Manoel Moreira, e a maior parte do acesso às cachoeiras e complexos rurais segue por estradas de terra, com deslocamentos feitos majoritariamente de carro.',

  corridas: [
    {
      nome: 'Carrancas Trail – Desafio das Cachoeiras',
      descricao:
        'Prova de trail running com largada na Praça Manoel Moreira, no centro histórico, e percurso de cerca de 22 km alternando trechos de estrada e trilhas técnicas entre cachoeiras e serras do município; também oferece uma caminhada não competitiva de cerca de 6 km.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Carrancas gira em torno do contato direto com a natureza: trekking e caminhada até as dezenas de cachoeiras catalogadas, rapel e escalada em paredões rochosos, além de passeios off-road pelas estradas rurais da Serra de Carrancas. O trail running organizado, como o Desafio das Cachoeiras, reforça essa vocação para o esporte ao ar livre em meio às trilhas e mirantes do município.',
  academias:
    'Não há academias de rede na cidade; a oferta se resume a pequenos espaços de musculação e treino funcional e a profissionais autônomos, estrutura compatível com o porte reduzido e a vocação rural e turística do município.',

  destaquesFitness: [
    'Conhecida como "Terra das Cachoeiras", com mais de 60 atrativos naturais mapeados entre quedas d\'água, corredeiras e cavernas.',
    'Altitude média de cerca de 1.060 m na sede, com clima mais frio do que a média do Sul de Minas.',
    'Mercado fitness mínimo, sem academias de rede, sustentado por profissionais autônomos e pelo fluxo turístico.',
    'Carrancas Trail – Desafio das Cachoeiras, prova de trail running com percurso técnico entre trilhas, serras e quedas d\'água.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 90,
    mensalMin: 200,
    mensalMax: 500,
    onlineMin: 100,
    onlineMax: 300,
  },

  conclusao:
    'Cidade pequena e cercada por cachoeiras, Carrancas oferece um cenário raro para treinar em contato direto com a natureza, mas conta com pouquíssima estrutura formal de academias. Um personal trainer que trabalhe com trekking, treino funcional ao ar livre e preparo físico para caminhadas e rapel tende a ser a opção mais prática para manter a constância em um município tão pequeno e voltado ao ecoturismo.',

  vizinhas: ['sao-thome-das-letras-mg', 'lavras-mg', 'tiradentes-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Carrancas', url: 'https://cidades.ibge.gov.br/brasil/mg/carrancas/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Carrancas', url: 'https://www.carrancas.mg.gov.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
