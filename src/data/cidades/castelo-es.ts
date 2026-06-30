import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'castelo-es',
  nome: 'Castelo',
  uf: 'ES',
  estado: 'Espírito Santo',
  estadoSlug: 'espirito-santo',
  regiao: 'Sudeste',
  gentilico: 'castelense',
  tipo: 'cidade',

  populacao: 36930,
  populacaoAno: 2022,
  idhm: 0.762,
  idhmClasse: 'alto',

  altitudeM: 120,

  resumoEconomico:
    'Encravada na Região das Montanhas do sul capixaba, próxima ao maciço do Caparaó, Castelo tem economia ancorada no agronegócio de montanha — com destaque para o café — e no turismo de natureza. A colonização italiana do fim do século XIX marca a cultura local, presente nos cafés coloniais, nas massas artesanais e na arquitetura. O Parque Estadual do Forno Grande e o Pico do Forno Grande são os grandes atrativos.',

  mercado:
    'Cidade média do interior, com população urbana concentrada na sede, Castelo tem oferta de academias e estúdios voltada à musculação e ao condicionamento, com demanda crescente puxada pelo turismo de aventura e pelo público de trilhas e montanha.',

  bairrosNobres: ['Centro', 'Niterói', 'Volta Redonda'],
  bairrosPopulares: ['Aristeu Aguiar', 'São Miguel', 'Boa Vista'],

  parques: [
    {
      nome: 'Parque Estadual do Forno Grande',
      descricao:
        'Unidade de conservação de Mata Atlântica com cerca de 730 hectares, trilhas ecológicas, cachoeiras e mirantes — o principal cartão-postal natural da cidade.',
    },
    {
      nome: 'Pico do Forno Grande',
      descricao:
        'Maciço rochoso a mais de 2.000 m de altitude, um dos pontos mais altos do Espírito Santo, com trilha desafiadora e vista para o Pico da Bandeira e o litoral.',
    },
    {
      nome: 'Orla do Rio Castelo',
      descricao:
        'O rio Castelo corta a sede do município e suas margens funcionam como eixo de caminhada e lazer no Centro.',
    },
  ],
  ciclovias:
    'A cidade tem perfil interiorano e de relevo montanhoso; estruturas de ciclovia ainda não são divulgadas em fonte oficial, sendo o ciclismo praticado sobretudo em estradas rurais e vias da sede.',

  clima:
    'O clima é ameno de altitude, típico da Região das Montanhas e do Caparaó capixaba, com temperaturas agradáveis o ano todo e noites frias no inverno, quando os termômetros podem cair para perto de 5 °C nas áreas mais altas.',
  climaTreino:
    'O clima ameno favorece treinos ao ar livre em quase todos os horários; nos dias mais frios de inverno vale o aquecimento reforçado, e nas tardes de verão a atenção à hidratação.',

  mobilidade:
    'O acesso rodoviário se dá principalmente pela ES-166, que liga Castelo a Cachoeiro de Itapemirim e à região do Caparaó, e pela ES-181, que conecta o município a Vargem Alta e Conceição do Castelo.',

  corridas: [
    {
      nome: 'O Castelo Trail Run',
      descricao:
        'Prova de corrida em trilha realizada na cidade, explorando o relevo de montanha e o entorno natural característico da região.',
    },
    {
      nome: 'Insanity Mountain — Etapa Forno Grande',
      descricao:
        'Etapa de trail run e mountain run no maciço do Forno Grande, com percursos longos e de montanha que atraem corredores de fora do município.',
    },
  ],
  culturaEsportiva:
    'A vocação natural de Castelo impulsiona o trail run, o montanhismo e o cicloturismo, em torno do Forno Grande. A tradicional festa de Corpus Christi e a herança italiana também movimentam o calendário e o turismo, reforçando a procura por atividades ao ar livre.',
  academias:
    'A oferta reúne academias e estúdios locais voltados à musculação e ao condicionamento, complementada pelas trilhas do Forno Grande e pela orla do rio Castelo para o treino ao ar livre.',

  destaquesFitness: [
    'Parque Estadual do Forno Grande — trilhas ecológicas, cachoeiras e mirantes para treino em natureza.',
    'Pico do Forno Grande, acima de 2.000 m, palco de montanhismo e trail run de alto nível.',
    'Orla do rio Castelo, no Centro, como eixo de caminhada e corrida.',
    'Clima ameno de altitude que favorece treinos ao ar livre o ano inteiro.',
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
    'Cidade de montanha do sul capixaba marcada pelo café, pela herança italiana e pelo Parque Estadual do Forno Grande, Castelo é um cenário privilegiado para quem treina ao ar livre. Um personal trainer ajuda a aproveitar trilhas, altitude e clima ameno com método e segurança.',

  vizinhas: ['cachoeiro-de-itapemirim-es', 'marataizes-es'],

  fontes: [
    { nome: 'IBGE Cidades — Castelo', url: 'https://cidades.ibge.gov.br/brasil/es/castelo/panorama' },
    { nome: 'Prefeitura Municipal de Castelo', url: 'https://castelo.es.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
