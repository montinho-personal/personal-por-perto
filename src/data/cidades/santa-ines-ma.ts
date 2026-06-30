import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santa-ines-ma',
  nome: 'Santa Inês',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'santa-inesense',
  tipo: 'cidade',

  populacao: 85014,
  populacaoAno: 2022,
  idhm: 0.674,
  idhmClasse: 'médio',
  altitudeM: 24,

  resumoEconomico:
    'No centro maranhense, no Vale do Pindaré, Santa Inês é conhecida como a "cidade entroncamento" do Maranhão: cruzamento das rodovias BR-316 e BR-222 com a Estrada de Ferro Carajás, da Vale, que liga o sudeste do Pará ao porto de São Luís. Essa posição logística fez da cidade um polo regional de comércio e serviços, que abastece os municípios vizinhos do oeste maranhense.',

  mercado:
    'O mercado fitness acompanha o porte de cidade média do interior: academias de bairro, estúdios de musculação e funcional concentrados no Centro e nos bairros mais estruturados, com personal trainers atuando tanto em academia quanto em atendimento individual. A cultura de treino ao ar livre se apoia em praças e no Parque Ecológico.',

  bairrosNobres: ['Centro', 'Jardim América', 'São Francisco', 'Vila Nova'],
  bairrosPopulares: ['Laranjeiras', 'Bom Jesus', 'Maria de Fátima', 'Trizidela'],

  parques: [
    {
      nome: 'Parque Ecológico de Santa Inês',
      descricao:
        'Área verde com trilhas, mata preservada, lagos e espaços de lazer — um dos principais pontos de encontro da cidade e referência para caminhada e treino ao ar livre.',
    },
    {
      nome: 'Parque da Raposa',
      descricao:
        'Amplo espaço de eventos que recebe as festas juninas e comporta milhares de pessoas, também usado como área aberta para atividades físicas fora do calendário de festas.',
    },
    {
      nome: 'Praça Santo Antônio',
      descricao:
        'Praça central tradicional, ponto de convívio e de caminhadas no fim de tarde, no coração comercial da cidade.',
    },
  ],
  ciclovias:
    'A malha cicloviária é incipiente, como na maioria das cidades médias do interior maranhense; o uso da bicicleta se concentra em vias urbanas e nas margens das avenidas, sem infraestrutura segregada consolidada.',

  clima:
    'O clima é equatorial/tropical úmido do centro maranhense, quente o ano todo (médias em torno de 26 a 27 °C), com estação chuvosa concentrada entre janeiro e maio e período mais seco no segundo semestre.',
  climaTreino:
    'O treino ao ar livre rende mais no início da manhã e no fim da tarde, evitando o pico de calor e exigindo boa hidratação por causa da umidade elevada do Vale do Pindaré.',

  mobilidade:
    'A mobilidade gira em torno do "trevo" rodoferroviário: o entroncamento das BR-316 e BR-222 com a Estrada de Ferro Carajás (Vale), que conecta a cidade a São Luís, ao oeste maranhense e ao sudeste do Pará. O deslocamento urbano é feito principalmente por carro, moto e transporte por ônibus.',

  corridas: [
    {
      nome: 'Circuito Sesc de Corrida nos Bairros — Etapa Santa Inês',
      descricao:
        'Etapa local do circuito de corridas de rua promovido pelo Sesc no Maranhão, levando provas e incentivo à prática esportiva para os bairros da cidade.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva é puxada pelo futebol e pelas atividades ao ar livre em praças e no Parque Ecológico, com a corrida de rua ganhando espaço por meio de iniciativas como o Circuito Sesc. As festas juninas no Parque da Raposa marcam o calendário de movimento da cidade.',
  academias:
    'A oferta reúne academias de bairro e estúdios de musculação e funcional, concentrados no Centro e nos bairros mais estruturados, atendendo um público que combina treino em academia com personal trainer e atividades nas áreas verdes.',

  destaquesFitness: [
    'Parque Ecológico de Santa Inês como principal espaço verde para caminhada e treino ao ar livre.',
    'Praças centrais, como a Santo Antônio, usadas para caminhada e convívio no fim de tarde.',
    'Etapa local do Circuito Sesc de Corrida nos Bairros estimulando a corrida de rua.',
    'Rede de academias de bairro e estúdios de funcional no eixo comercial da cidade.',
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
    'Polo regional e entroncamento logístico do Maranhão, Santa Inês oferece praças, o Parque Ecológico e um calendário de corridas em crescimento para quem quer treinar. Um personal trainer ajuda a montar uma rotina que respeite o calor e a umidade do Vale do Pindaré e a aproveitar bem a estrutura disponível na cidade.',

  vizinhas: ['bacabal-ma', 'imperatriz-ma'],

  fontes: [
    { nome: 'IBGE Cidades — Santa Inês', url: 'https://cidades.ibge.gov.br/brasil/ma/santa-ines/panorama' },
    { nome: 'Prefeitura de Santa Inês', url: 'https://santaines.ma.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
