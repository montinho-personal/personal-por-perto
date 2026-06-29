import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'formosa-go',
  nome: 'Formosa',
  uf: 'GO',
  estado: 'Goiás',
  estadoSlug: 'goias',
  regiao: 'Centro-Oeste',
  gentilico: 'formosense',
  tipo: 'cidade',

  populacao: 115901,
  populacaoAno: 2022,
  idhm: 0.744,
  idhmClasse: 'alto',
  altitudeM: 912,

  resumoEconomico:
    'A cerca de 80 km de Brasília, Formosa é um dos principais polos do nordeste goiano e integra a Região Integrada de Desenvolvimento do Distrito Federal e Entorno (RIDE). A economia combina forte produção de grãos e pecuária, comércio e serviços que atendem toda a microrregião, além de um turismo de natureza puxado pelo Salto do Itiquira — uma das maiores quedas d\'água do Brasil. A proximidade com o DF, pela BR-020, sustenta um fluxo diário de trabalho e consumo.',

  mercado:
    'Cidade-polo do nordeste goiano e do Entorno do DF, Formosa tem mercado fitness em consolidação, apoiado por uma classe média de servidores, produtores rurais e comerciantes, e por uma forte cultura de vida ao ar livre ligada às cachoeiras da região. O calor e a estação seca marcante do Cerrado pedem treinos planejados, o que valoriza o acompanhamento individualizado.',

  bairrosNobres: ['Centro', 'Setor Sul', 'Jardim Califórnia', 'Setor Aeroporto'],
  bairrosPopulares: ['Formosinha', 'Setor JK', 'Vila Mutirão', 'Bairro Abreu'],

  parques: [
    {
      nome: 'Parque Municipal do Itiquira',
      descricao:
        'Unidade de conservação que abriga o Salto do Itiquira, uma das maiores quedas d\'água do Brasil, com cerca de 168 metros. Tem trilhas, área de banho e percurso acessível, ótimo para caminhada e treino em meio à natureza do Cerrado.',
    },
    {
      nome: 'Lagoa Feia',
      descricao:
        'Grande lagoa natural a poucos quilômetros da cidade, com vários quilômetros de extensão, usada para banho, caminhada e atividades ao ar livre nos fins de semana.',
    },
    {
      nome: 'Buraco das Araras e praças centrais',
      descricao:
        'A cratera do Buraco das Araras é um cartão-postal geológico da região; já no perímetro urbano, praças e o circuito do Laguinho do Vovô oferecem pista de caminhada e área de exercícios.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de ciclovia e ciclofaixa em avenidas centrais, com a malha cicloviária ainda em expansão; o ciclismo de estrada se beneficia das rodovias e do relevo de chapada ao redor.',

  clima:
    'O clima é tropical de savana (Cerrado), com estação chuvosa no verão e uma estação seca marcante no inverno, quando a umidade do ar cai bastante. A cidade está a cerca de 912 m de altitude.',
  climaTreino:
    'A estação seca do Cerrado deixa o ar muito seco e os dias quentes ao meio-dia, o que pede hidratação reforçada e treinos no início da manhã ou no fim da tarde; em compensação, a altitude ameniza o calor e oferece bom estímulo cardiovascular.',

  mobilidade:
    'Formosa é cortada pela BR-020, principal eixo que a liga a Brasília (cerca de 80 km) e ao nordeste do país, e funciona como entroncamento regional do nordeste goiano. A proximidade com o DF e o Entorno cria um fluxo pendular diário de trabalho e estudo.',

  corridas: [
    {
      nome: 'Corridas de rua de Formosa',
      descricao:
        'O calendário local reúne provas de rua promovidas pela prefeitura e por grupos de corrida, com largadas em avenidas centrais e percursos de 5 e 10 km.',
    },
    {
      nome: 'Treinos no circuito do Laguinho do Vovô',
      descricao:
        'A pista em torno do laguinho concentra caminhadas e treinos de corredores iniciantes, sendo ponto de encontro de assessorias e grupos da cidade.',
    },
  ],
  culturaEsportiva:
    'A vida esportiva de Formosa mistura a corrida de rua urbana com uma forte cultura de natureza — trilhas e banhos de cachoeira no Itiquira e na Lagoa Feia — que aproxima os moradores da atividade física ao ar livre. Grupos de corrida e ciclismo ajudam a movimentar o calendário local.',
  academias:
    'A oferta reúne academias locais e estúdios no Centro e nos setores residenciais, sustentados pela renda de servidores, produtores rurais e comerciantes, e é complementada pelos espaços públicos de treino em praças e parques.',

  destaquesFitness: [
    'Salto do Itiquira, uma das maiores quedas d\'água do Brasil, no Parque Municipal do Itiquira.',
    'Forte cultura de natureza, com Lagoa Feia e Buraco das Araras para trilhas e atividades ao ar livre.',
    'Cidade-polo do Entorno do DF, a cerca de 80 km de Brasília pela BR-020.',
    'Clima de altitude (cerca de 912 m) que ameniza o calor do Cerrado para o treino.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 280,
    mensalMax: 720,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Polo do nordeste goiano e do Entorno do DF, Formosa une natureza exuberante — do Salto do Itiquira à Lagoa Feia — a uma cidade em crescimento. Um personal trainer ajuda a aproveitar esse cenário com método, ajustando a intensidade e a hidratação à estação seca marcante do Cerrado.',

  vizinhas: ['brasilia-df', 'luziania-go', 'valparaiso-de-goias-go'],

  fontes: [
    { nome: 'IBGE Cidades — Formosa', url: 'https://cidades.ibge.gov.br/brasil/go/formosa/panorama' },
    { nome: 'Prefeitura de Formosa', url: 'https://formosa.go.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
