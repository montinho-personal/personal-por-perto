import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'andradina-sp',
  nome: 'Andradina',
  uf: 'SP',
  estado: 'São Paulo',
  estadoSlug: 'sao-paulo',
  regiao: 'Sudeste',
  gentilico: 'andradinense',
  tipo: 'cidade',

  populacao: 59783,
  populacaoAno: 2022,
  idhm: 0.780,
  idhmClasse: 'alto',
  altitudeM: 356,

  resumoEconomico:
    'No extremo oeste paulista, às margens do rio Tietê e perto de sua foz no rio Paraná, Andradina é polo regional de uma área marcada pela pecuária de corte, pelo cultivo de cana-de-açúcar e pela expansão recente da citricultura. A cidade também é referência em assentamentos de reforma agrária, com produção camponesa que abastece os mercados locais, e concentra comércio e serviços — incluindo clínicas e supermercados — para os municípios vizinhos. A proximidade com o Complexo Hidrelétrico de Jupiá e com Ilha Solteira reforça o papel da represa na paisagem e na economia da região.',

  mercado:
    'O mercado fitness de Andradina é o de uma cidade média do interior paulista, com academias de musculação e estúdios de treino funcional distribuídos entre o Centro e bairros como Jardim Alvorada e Stella Maris. A procura por personal trainer aparece tanto entre quem busca treino individualizado quanto entre quem precisa adaptar a rotina ao calor intenso típico da região, condicionante forte para quem treina ao ar livre.',

  bairrosNobres: ['Centro', 'Stella Maris', 'Jardim Alvorada', 'Vila Rica'],
  bairrosPopulares: ['Vila Mineira', 'Vila Botega', 'Vila Pereira Jordão', 'Vila Rondon'],

  parques: [
    {
      nome: 'Praças centrais (Praça Japão e entorno)',
      descricao:
        'O Centro de Andradina reúne praças arborizadas, entre elas a Praça Japão, usadas para caminhada e como ponto de encontro; a prefeitura tem investido na instalação de playgrounds e mobiliário de lazer em espaços públicos da cidade.',
    },
    {
      nome: 'Margens do rio Tietê',
      descricao:
        'A proximidade com o rio Tietê e com o Complexo de Jupiá, na divisa com o rio Paraná, dá à cidade paisagens de represa aproveitadas para pesca, passeios e atividades ao ar livre, dentro da vocação turística da região conhecida como Pantanal Paulista.',
    },
    {
      nome: 'Thermas Acqualinda',
      descricao:
        'Parque aquático inaugurado em 2022, um dos maiores da América Latina, que se tornou atração de lazer e turismo para moradores e visitantes da região.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada e concentrada em trechos pontuais da malha urbana; caminhada e corrida acontecem principalmente nas praças do Centro e nas vias dos bairros residenciais.',

  clima:
    'O clima é tropical, com verão quente e chuvoso e inverno seco e ameno. As temperaturas máximas costumam superar os 35 °C entre o fim do ano e o início do ano seguinte, com dias registrando 40 °C e umidade relativa do ar caindo bem abaixo dos níveis recomendados; junho, no auge da seca, tem chuva escassa.',
  climaTreino:
    'O calor forte e a baixa umidade no verão pedem treinos ao ar livre nos horários mais amenos — início da manhã ou fim de tarde — com atenção redobrada à hidratação; em dias de calor extremo, ambientes climatizados são a alternativa mais segura para manter a constância.',

  mobilidade:
    'Andradina é cortada pela rodovia SP-563 (Euclides de Oliveira Figueiredo), um dos principais eixos de integração do noroeste paulista, que se conecta à SP-300 (Marechal Rondon) em trevo próximo à cidade — rota que liga Andradina a Araçatuba e ao restante do estado. O transporte urbano é feito por ônibus, e a cidade também é servida por terminal rodoviário para ligações regionais.',

  corridas: [
    {
      nome: 'ACQUALINDA Volcano Run',
      descricao:
        'Corrida de rua com provas de 5 km e 10 km e caminhada de 3 km, com largada no Thermas Acqualinda, passando por trilhas naturais e vinhedos locais — um dos eventos esportivos recentes que movimentam a cidade.',
    },
    {
      nome: 'Liga Regional de Atletismo',
      descricao:
        'Andradina sedia etapas de competições regionais de atletismo que reúnem equipes de municípios vizinhos do extremo oeste paulista.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina o uso das praças do Centro para caminhada, o aproveitamento das margens do Tietê e da represa de Jupiá para pesca e lazer, e a organização de provas de rua e etapas de atletismo que aproximam Andradina de sua vizinhança regional.',
  academias:
    'A oferta reúne academias de musculação e estúdios de treino funcional distribuídos entre o Centro e bairros como Jardim Alvorada e Stella Maris, em número compatível com uma cidade média do interior paulista.',

  destaquesFitness: [
    'Cidade às margens do rio Tietê, próxima à foz no rio Paraná e ao Complexo de Jupiá, com paisagem de represa.',
    'Calor intenso no verão, com máximas acima de 35 °C, que exige planejar horário e hidratação do treino.',
    'Economia apoiada em pecuária, cana-de-açúcar, citricultura em expansão e assentamentos de reforma agrária.',
    'Cruzamento das rodovias SP-563 e SP-300, eixo de ligação com Araçatuba e o noroeste paulista.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 720,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Cidade do extremo oeste paulista às margens do rio Tietê, Andradina combina calor forte, vida em praças e represa e uma economia ligada ao campo. Um personal trainer ajuda a adaptar o treino ao clima, aproveitando os espaços públicos da cidade e mantendo a regularidade ao longo do ano.',

  vizinhas: ['araraquara-sp', 'aracatuba-sp'],

  fontes: [
    { nome: 'IBGE Cidades — Andradina', url: 'https://cidades.ibge.gov.br/brasil/sp/andradina/panorama' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
    { nome: 'Prefeitura de Andradina', url: 'https://www.andradina.sp.gov.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
