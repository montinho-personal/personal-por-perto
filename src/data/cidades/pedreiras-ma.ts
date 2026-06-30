import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'pedreiras-ma',
  nome: 'Pedreiras',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'pedreirense',
  tipo: 'cidade',

  populacao: 36980,
  populacaoAno: 2022,
  idhm: 0.682,
  idhmClasse: 'médio',
  altitudeM: 37,

  resumoEconomico:
    'Cidade-polo da Região do Médio Mearim, Pedreiras fica às margens do rio Mearim e está conurbada com Trizidela do Vale, ligada pela Ponte Francisco Sá. A economia se apoia em um comércio regional forte, que atende municípios vizinhos, e na função de polo de serviços, educação e do sistema de Justiça, por ser sede de comarca. No entorno rural, a agropecuária e o extrativismo do babaçu — tradicionalmente explorado pelas quebradeiras de coco — seguem com peso econômico e social na região.',

  mercado:
    'Por ser uma cidade média do interior maranhense e cabeça de uma conurbação que ultrapassa a casa dos sessenta mil habitantes somando Trizidela do Vale, Pedreiras concentra a oferta fitness do Médio Mearim. O mercado é formado por academias locais de musculação e treino funcional, e a procura por personal trainers tende a vir de quem busca acompanhamento mais individualizado e de quem aproveita as margens do rio Mearim para atividade ao ar livre.',

  bairrosNobres: ['Centro', 'São José'],
  bairrosPopulares: ['Traswal', 'Mutirão', 'Seringal'],

  parques: [
    {
      nome: 'Orla do rio Mearim',
      descricao:
        'As margens do rio Mearim, que corta a cidade e a separa de Trizidela do Vale, são o principal espaço de convivência e de atividade ao ar livre, usadas para caminhada e corrida no fim da tarde.',
    },
    {
      nome: 'Ponte Francisco Sá',
      descricao:
        'A travessia que liga Pedreiras a Trizidela do Vale sobre o rio Mearim é um ponto de referência da conurbação e dos trajetos a pé entre as duas cidades.',
    },
    {
      nome: 'Pedras do Mearim (bairro Traswal)',
      descricao:
        'O bloco de pedras na margem esquerda do rio, a poucos quilômetros do centro e que deu nome à cidade, é local tradicional de passeio e lazer junto à água.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária é modesta, e boa parte do pedal e da corrida acontece nas vias urbanas e ao longo das margens do rio Mearim, espaço mais procurado para atividade física na cidade.',

  clima:
    'O clima é equatorial úmido, quente o ano todo, com duas estações bem marcadas: a chuvosa, concentrada no primeiro semestre, e a de estiagem, mais seca, no segundo. A baixa altitude e a umidade junto ao rio Mearim reforçam a sensação de calor.',
  climaTreino:
    'O calor e a umidade pedem treino bem cedo ou no fim da tarde, com hidratação reforçada; no período chuvoso, ambientes cobertos garantem mais constância, e a estiagem tende a favorecer as atividades ao ar livre na orla.',

  mobilidade:
    'Pedreiras é um entroncamento regional do Médio Mearim, com acesso pela BR-226 e ligação direta a Trizidela do Vale pela Ponte Francisco Sá sobre o rio Mearim. O deslocamento interno é feito sobretudo a pé, de bicicleta e por transporte local, em uma malha urbana compacta e integrada à cidade vizinha.',

  corridas: [],
  culturaEsportiva:
    'A cultura esportiva gira em torno do uso das margens do rio Mearim para caminhada e corrida, do futebol e das atividades que aproveitam a integração entre Pedreiras e Trizidela do Vale, tudo condicionado pelo calor característico do Médio Mearim.',
  academias:
    'A oferta é formada principalmente por academias locais de musculação e treino funcional, distribuídas pelo centro e pelos bairros residenciais, com porte compatível com uma cidade média que funciona como polo regional.',

  destaquesFitness: [
    'Cidade-polo do Médio Mearim, às margens do rio Mearim, com a orla como principal espaço de treino ao ar livre.',
    'Conurbada com Trizidela do Vale e ligada pela Ponte Francisco Sá, formando um aglomerado de mais de sessenta mil habitantes.',
    'Clima equatorial úmido e quente, que exige planejamento de horário e hidratação no treino.',
    'Economia de comércio regional, agropecuária e extrativismo do babaçu, com acesso pela BR-226.',
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
    'Polo do Médio Mearim e conurbada com Trizidela do Vale, Pedreiras combina calor equatorial, vida às margens do rio e uma rotina de cidade média do interior maranhense. Um personal trainer ajuda a organizar o treino respeitando o clima, definindo os melhores horários e aproveitando a orla do Mearim para manter a constância ao longo das estações chuvosa e de estiagem.',

  vizinhas: ['bacabal-ma', 'santa-ines-ma'],

  fontes: [
    { nome: 'IBGE Cidades — Pedreiras', url: 'https://cidades.ibge.gov.br/brasil/ma/pedreiras/panorama' },
    { nome: 'Prefeitura de Pedreiras', url: 'https://www.pedreiras.ma.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
