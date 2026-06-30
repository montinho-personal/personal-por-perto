import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'bayeux-pb',
  nome: 'Bayeux',
  uf: 'PB',
  estado: 'Paraíba',
  estadoSlug: 'paraiba',
  regiao: 'Nordeste',
  gentilico: 'bayeuxense',
  tipo: 'cidade',

  populacao: 82742,
  populacaoAno: 2022,
  idhm: 0.649,
  idhmClasse: 'médio',
  altitudeM: 8,

  resumoEconomico:
    'Conurbada com João Pessoa e Santa Rita, Bayeux é um dos municípios mais densos da Região Metropolitana e funciona como um corredor de comércio e indústria ligado à capital. A economia se apoia na administração pública, no comércio atacadista e varejista e na indústria — com destaque histórico para a fabricação de calçados —, e o município é cortado pelo rio Sanhauá e por extensas áreas de manguezal no estuário do rio Paraíba.',

  mercado:
    'Por ser uma cidade predominantemente urbana e fortemente integrada a João Pessoa, parte da demanda por treino é atendida pela oferta da capital, a poucos quilômetros. Ainda assim, academias de bairro e estúdios atendem a população local ao longo dos principais eixos comerciais, e o personal trainer aparece como opção para quem busca acompanhamento mais próximo de casa.',

  bairrosNobres: ['Centro', 'Comercial Norte', 'Jardim Aeroporto'],
  bairrosPopulares: ['São Bento', 'Imaculada', 'Brasília', 'Sesi', 'Tambay'],

  parques: [
    {
      nome: 'Orla do rio Sanhauá',
      descricao:
        'Margem do rio que corta a cidade, com trechos usados para caminhada e como cenário do crescente ecoturismo local, incluindo passeios de caiaque pelo estuário.',
    },
    {
      nome: 'Área de manguezal do estuário do Paraíba',
      descricao:
        'Extensa faixa de manguezal preservado no norte do município, importante para a fauna e a flora da região e ponto de referência ambiental da cidade.',
    },
    {
      nome: 'Praças e quadras de bairro',
      descricao:
        'Praças e equipamentos esportivos espalhados pelos bairros funcionam como pontos de caminhada, treino ao ar livre e prática de esportes coletivos.',
    },
  ],
  ciclovias:
    'A malha cicloviária própria é limitada, mas a proximidade e a conurbação com João Pessoa facilitam o acesso às ciclovias da capital para quem pedala.',

  clima:
    'O clima é tropical úmido, quente o ano todo, típico do litoral da Região Metropolitana de João Pessoa, com chuvas concentradas entre o outono e o inverno.',
  climaTreino:
    'O calor e a umidade pedem treino no início da manhã ou no fim da tarde, com hidratação reforçada; nos meses mais chuvosos, a previsibilidade do treino indoor ajuda a manter a constância.',

  mobilidade:
    'Bayeux é cortada pela BR-230, eixo que liga o município a Santa Rita e ao restante do estado, e a Avenida Liberdade conecta a cidade a João Pessoa. A conurbação com a capital torna comum o deslocamento diário entre as duas cidades, feito principalmente por ônibus e carro.',

  corridas: [
    {
      nome: 'Corrida das Mulheres de Bayeux',
      descricao:
        'Prova de rua de 5 km promovida pela prefeitura, com forte adesão popular e caráter solidário, voltada ao incentivo da prática esportiva.',
    },
    {
      nome: 'Bayeux Ecology',
      descricao:
        'Evento que une esporte e ecoturismo, explorando o rio Sanhauá e o entorno natural do município, com atividades como remada de caiaque.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva se organiza em torno do futebol, dos torneios de bairro e de provas de rua promovidas pelo poder público. A proximidade com a orla de João Pessoa amplia as opções para quem busca corrida, ciclismo e esportes de praia.',
  academias:
    'A oferta reúne academias de bairro e estúdios distribuídos pelos eixos comerciais da cidade, complementada pela ampla rede de academias da vizinha João Pessoa, acessível pela conurbação.',

  destaquesFitness: [
    'Conurbação com João Pessoa, que amplia o acesso a academias, orla e ciclovias da capital.',
    'Rio Sanhauá e manguezais como cenário para caminhada e ecoturismo, incluindo passeios de caiaque.',
    'Provas de rua locais, como a Corrida das Mulheres, que incentivam a prática esportiva.',
    'Cidade compacta e urbana, com deslocamentos curtos para treinar perto de casa.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 240,
    mensalMax: 620,
    onlineMin: 110,
    onlineMax: 320,
  },

  conclusao:
    'Cidade urbana e bem conectada à capital, Bayeux combina a praticidade dos deslocamentos curtos com o acesso à estrutura de treino de João Pessoa. Um personal trainer ajuda a montar uma rotina que respeite o calor do litoral e aproveite tanto os espaços locais quanto a orla vizinha, com um plano sob medida para o seu objetivo.',

  vizinhas: ['joao-pessoa-pb', 'santa-rita-pb', 'cabedelo-pb'],

  fontes: [
    { nome: 'IBGE Cidades — Bayeux', url: 'https://cidades.ibge.gov.br/brasil/pb/bayeux/panorama' },
    { nome: 'Prefeitura de Bayeux', url: 'https://bayeux.pb.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
