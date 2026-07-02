import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santa-teresa-es',
  nome: 'Santa Teresa',
  uf: 'ES',
  estado: 'Espírito Santo',
  estadoSlug: 'espirito-santo',
  regiao: 'Sudeste',
  gentilico: 'teresense',
  tipo: 'cidade',

  populacao: 22808,
  populacaoAno: 2022,
  idhm: 0.714,
  idhmClasse: 'alto',
  altitudeM: 655,

  resumoEconomico:
    'Santa Teresa fica na Região Serrana do Espírito Santo, a cerca de 78 km de Vitória, e é reconhecida por lei federal como a primeira cidade de colonização italiana do Brasil: o Núcleo Timbuí recebeu os primeiros imigrantes em 1875, majoritariamente do Trentino, da Lombardia e do Vêneto, herança que hoje marca cerca de 90% da população local. O centro histórico, tombado em 2019, reúne casario, a Casa Lambert e cantinas que preservam a gastronomia italiana, enquanto vinícolas centenárias como Mattiello, Valsugana e Tabocas fazem do município responsável por boa parte da produção de vinho do estado. A economia combina agricultura de montanha (café arábica, hortaliças, uva), turismo rural nos circuitos de Valsugana Velha e Caravaggio, e ciência e ecoturismo em torno do Museu de Biologia Professor Mello Leitão, legado do cientista Augusto Ruschi e referência nacional em observação de beija-flores e orquídeas.',

  mercado:
    'Em uma cidade pequena e serrana, o mercado de personal trainers é reduzido e concentrado no Centro, atendendo sobretudo quem busca treino individualizado como complemento às poucas academias locais de musculação e funcional. A vocação turística e rural do município também abre espaço para acompanhamento de visitantes hospedados nas pousadas dos circuitos de Valsugana Velha e Caravaggio, e o acompanhamento online ajuda a alcançar moradores dos distritos afastados da sede.',

  bairrosNobres: ['Centro', 'Vila Nova', 'Nova Lombardia'],
  bairrosPopulares: ['Dois Pinheiros', 'Santo Antônio do Canaã', 'Alto Santa Maria'],

  parques: [
    {
      nome: 'Museu de Biologia Professor Mello Leitão',
      descricao:
        'Instituição fundada em 1949 a partir do trabalho do cientista Augusto Ruschi, reúne orquidário com coleção de milhares de orquídeas, jardim de epífitas, aviários e o famoso alpendre de observação de beija-flores — Santa Teresa é conhecida por abrigar uma das maiores concentrações de beija-flores do planeta, o que atrai caminhantes e observadores de aves de todo o país.',
    },
    {
      nome: 'Estação Biológica de Santa Lúcia',
      descricao:
        'Unidade de conservação com cerca de 440 hectares de Mata Atlântica preservada, a 8 km do centro da cidade, com sete trilhas ecológicas voltadas à pesquisa e à caminhada guiada em meio à floresta — inclusive o túmulo de Augusto Ruschi, cuja visita exige agendamento prévio.',
    },
    {
      nome: 'Circuitos rurais de Valsugana Velha e Caravaggio',
      descricao:
        'Roteiros de turismo rural entre vinícolas centenárias, sítios e mirantes na zona rural do município, usados tanto para passeios quanto para caminhada e cicloturismo entre as subidas e descidas da paisagem serrana.',
    },
  ],
  ciclovias:
    'A cidade não tem malha cicloviária estruturada; o ciclismo é praticado principalmente como mountain bike nas estradas de terra e vicinais da zona rural, cenário da tradicional Maratona de Santa Teresa, etapa da Copa Capixaba de Mountain Bike.',

  clima:
    'O clima é ameno de altitude, um dos mais frescos do Espírito Santo: junto com o distrito de Aracê, em Domingos Martins, Santa Teresa costuma disputar o título de cidade mais fria do estado, com madrugadas de outono e inverno registrando temperaturas na casa dos 10 °C e ocasionalmente mais baixas.',
  climaTreino:
    'O frio de altitude torna o treino ao ar livre confortável mesmo durante o dia na maior parte do ano, mas pede aquecimento mais longo e roupas adequadas nas manhãs e noites de outono e inverno; o relevo montanhoso da zona rural favorece naturalmente o trabalho de força em subidas e a resistência em trilhas.',

  mobilidade:
    'O acesso à Grande Vitória se dá por rodovias estaduais que cruzam a Região Serrana, e a ES-080 liga a sede a Santa Leopoldina em cerca de 30 km, seguindo o antigo caminho aberto pelos imigrantes italianos rumo ao litoral. O deslocamento interno é predominantemente feito por carro, já que boa parte do território é rural e os distritos ficam distantes uns dos outros pelas estradas de montanha.',

  corridas: [
    {
      nome: 'Circuito Capixaba de Montanhas — Etapa Santa Teresa',
      descricao:
        'Etapa tradicional do calendário de corrida de montanha do Espírito Santo, com percursos de 5 km, 10 km e 20 km em trilhas, estradas e subidas da zona rural de Santa Teresa.',
    },
    {
      nome: 'Maratona de Santa Teresa (Copa Capixaba de Mountain Bike)',
      descricao:
        'Uma das provas mais tradicionais do mountain bike capixaba, com percursos de até 61 km passando por localidades rurais como São Lourenço, Caravaggio e Valsugana, em meio a subidas e descidas da serra.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local é moldada pelo relevo de montanha e pelo clima ameno: caminhada, trekking e observação de aves atraem tanto moradores quanto visitantes ligados ao legado científico de Augusto Ruschi, enquanto o mountain bike tem tradição consolidada nas estradas rurais, com provas que fazem parte do calendário estadual havia mais de uma década.',
  academias:
    'A oferta de academias é pequena, típica de cidade serrana de porte reduzido, concentrada no Centro e voltada a musculação e treino funcional; parte da procura por atividade física se volta naturalmente para o treino ao ar livre, aproveitando o clima fresco e o cenário rural do município.',

  destaquesFitness: [
    'Clima ameno de altitude, entre os mais frescos do Espírito Santo, favorável ao treino ao ar livre.',
    'Museu de Biologia Mello Leitão e Estação Biológica de Santa Lúcia, referências em observação de beija-flores, orquídeas e trilhas na Mata Atlântica.',
    'Tradição consolidada em mountain bike, com a Maratona de Santa Teresa e etapas da Copa Capixaba de MTB nas estradas rurais.',
    'Primeira cidade de colonização italiana do Brasil, com vinícolas centenárias e circuitos rurais que também servem de percurso para caminhada e ciclismo.',
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
    'Cidade pequena, fria para os padrões capixabas e marcada pela herança da imigração italiana, Santa Teresa oferece um cenário natural raro para quem treina ao ar livre — das trilhas da Estação Biológica de Santa Lúcia às subidas exploradas pelo mountain bike. Um personal trainer ajuda a aproveitar esse relevo e esse clima com segurança, adaptando o treino às estradas rurais e à rotina de quem vive na sede ou nos distritos.',

  vizinhas: ['santa-maria-de-jetiba-es', 'cariacica-es', 'vitoria-es'],

  fontes: [
    { nome: 'IBGE Cidades — Santa Teresa', url: 'https://cidades.ibge.gov.br/brasil/es/santa-teresa/panorama' },
    { nome: 'Prefeitura de Santa Teresa', url: 'https://santateresa.es.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
