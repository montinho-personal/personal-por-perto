import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'venda-nova-do-imigrante-es',
  nome: 'Venda Nova do Imigrante',
  uf: 'ES',
  estado: 'Espírito Santo',
  estadoSlug: 'espirito-santo',
  regiao: 'Sudeste',
  gentilico: 'vendanovense',
  tipo: 'cidade',

  populacao: 23831,
  populacaoAno: 2022,
  idhm: 0.728,
  idhmClasse: 'alto',
  pibPerCapita: 39671.53,
  pibPerCapitaAno: 2023,
  altitudeM: 722,

  resumoEconomico:
    'Na Região das Montanhas Capixabas, cortada pela BR-262, Venda Nova do Imigrante foi colonizada por imigrantes italianos no fim do século XIX e hoje é reconhecida por lei federal como a Capital Nacional do Agroturismo. Mais de 70 propriedades rurais, reunindo cerca de 300 famílias, recebem visitantes para conhecer o cultivo de café conilon e arábica, pomares, produção de flores e hortifrúti, queijos, embutidos artesanais (como o socol) e a gastronomia rural de herança italiana. A Festa da Polenta, em outubro, e o tradicional "Tombo da Polenta" são os grandes eventos do calendário local.',

  mercado:
    'Cidade pequena e de forte vocação turística, Venda Nova do Imigrante tem um mercado fitness ainda enxuto, formado por academias de bairro e estúdios locais concentrados no Centro. A procura por personal trainer tende a ser puxada tanto por moradores quanto pelo público que frequenta a cidade em finais de semana e feriados, atraído pelo agroturismo, pelas trilhas e pelo clima de serra que favorecem a atividade ao ar livre.',

  bairrosNobres: ['Centro', 'Vila da Mata'],
  bairrosPopulares: ['Alto Caxixe', 'São João de Viçosa', 'São Pedro'],

  parques: [
    {
      nome: 'Circuito de Agroturismo (Caminhos da Montanha)',
      descricao:
        'Roteiro que interliga dezenas de propriedades rurais nos distritos e comunidades do município, com estradas de terra e asfalto entre plantações de café, pomares e fazendas — usado tanto para passeios quanto para caminhada e cicloturismo em meio às montanhas.',
    },
    {
      nome: 'Cachoeira do Alto Bananeiras',
      descricao:
        'Conjunto de sete quedas em meio à Mata Atlântica, em área rural do município, ponto de caminhada e contato com a natureza na serra.',
    },
    {
      nome: 'Caxixe Frio e Pedra do Rego',
      descricao:
        'Localidade de altitude com vista para o Pico do Forno Grande e para Pedra Azul, na vizinha Domingos Martins; a Pedra do Rego é um dos pontos mais altos do município, procurado para caminhada, observação da paisagem e voo livre.',
    },
  ],
  ciclovias:
    'O município não tem ciclovias urbanas estruturadas; o ciclismo é praticado sobretudo nas estradas rurais do circuito de agroturismo e em trechos de terra e asfalto entre as fazendas, num relevo de serra que exige preparo físico.',

  clima:
    'A cerca de 722 m de altitude, na Região das Montanhas Capixabas, o clima é ameno e bem diferente do litoral do Espírito Santo, com verões mais suaves e invernos frios — as temperaturas já registraram mínimas próximas de 7 a 8 °C em noites de junho e julho.',
  climaTreino:
    'O clima ameno de altitude favorece o treino ao ar livre durante boa parte do ano, mas as manhãs e noites de inverno pedem aquecimento mais longo e roupas adequadas ao frio; no verão, o calor é mais brando que no litoral, o que facilita treinos em horários mais flexíveis.',

  mobilidade:
    'A BR-262 corta a sede do município e o distrito de São João de Viçosa, ligando Venda Nova do Imigrante a Vitória (a cerca de 100 km) e ao interior do estado em direção a Minas Gerais; a rodovia tem trechos em obras de duplicação. A ES-166 conecta o município a Castelo, e o transporte interno é predominantemente feito por veículo próprio, dado o relevo montanhoso e a dispersão das propriedades rurais.',

  corridas: [
    {
      nome: 'Corrida Rústica de Venda Nova do Imigrante',
      descricao:
        'Prova de rua tradicional do município, com percurso de 7 km, realizada anualmente em maio durante a Festa de Emancipação Política da cidade.',
    },
  ],
  culturaEsportiva:
    'O agroturismo molda a cultura esportiva local: caminhada entre fazendas, cicloturismo pelas estradas de montanha e trilhas até cachoeiras e mirantes fazem parte do dia a dia de moradores e visitantes. A proximidade com a Rota do Lagarto e Pedra Azul, em Domingos Martins, reforça a vocação regional para o ciclismo e o trekking de serra, e a Corrida Rústica de maio é o principal evento de corrida de rua da cidade.',
  academias:
    'A oferta de academias é modesta e concentrada no Centro, com estúdios e academias de bairro voltados à musculação, ao treino funcional e à hidroginástica, dimensionados para uma cidade pequena do interior serrano.',

  destaquesFitness: [
    'Capital Nacional do Agroturismo, com dezenas de fazendas de café, flores e hortifrúti abertas à visitação.',
    'Altitude de 722 m e clima ameno de montanha, propício ao treino ao ar livre na maior parte do ano.',
    'Circuito de estradas rurais entre fazendas usado para caminhada e cicloturismo de serra.',
    'Corrida Rústica de Venda Nova do Imigrante, tradicional prova de 7 km realizada em maio.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 650,
    onlineMin: 110,
    onlineMax: 320,
  },

  conclusao:
    'Cercada por fazendas de café e pelo clima ameno da serra capixaba, Venda Nova do Imigrante oferece um cenário natural favorável ao treino ao ar livre o ano inteiro. Um personal trainer ajuda a aproveitar as estradas rurais, as trilhas e a altitude com planejamento, mantendo a constância mesmo no ritmo mais sazonal de uma cidade turística de interior.',

  vizinhas: ['domingos-martins-es', 'castelo-es'],

  fontes: [
    { nome: 'IBGE Cidades — Venda Nova do Imigrante', url: 'https://cidades.ibge.gov.br/brasil/es/venda-nova-do-imigrante/panorama' },
    { nome: 'Prefeitura Municipal de Venda Nova do Imigrante', url: 'https://vendanova.es.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-03',
};
