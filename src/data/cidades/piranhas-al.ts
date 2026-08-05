import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'piranhas-al',
  nome: 'Piranhas',
  uf: 'AL',
  estado: 'Alagoas',
  estadoSlug: 'alagoas',
  regiao: 'Nordeste',
  gentilico: 'piranhense',
  tipo: 'cidade',

  populacao: 22609,
  populacaoAno: 2022,
  idhm: 0.589,
  idhmClasse: 'baixo',
  altitudeM: 90,

  resumoEconomico:
    'Encravada entre morros à beira do rio São Francisco, no sertão alagoano, Piranhas vive de três frentes: a administração pública, a agropecuária do semiárido e um turismo em ascensão. O conjunto histórico e paisagístico da cidade — casario colonial, ruas de pedra e um trecho de 13 km do rio — é tombado pelo Iphan desde 2004, e os passeios pelos cânions do Xingó tornaram a região um dos destinos mais procurados do Nordeste.',

  mercado:
    'O turismo movimenta pousadas, guias e restaurantes o ano inteiro, e a demanda por condicionamento acompanha: as ladeiras do casario, as trilhas dos mirantes e os esportes no rio pedem preparo real. O mercado formal de academias é compacto, com personal trainers atuando de forma próxima e pessoal.',

  bairrosNobres: ['Centro Histórico', 'Xingó', 'Alto do Cruzeiro', 'Bela Vista'],
  bairrosPopulares: ['Baixa Grande', 'Vila Bela', 'Entremontes', 'Bom Jesus'],

  parques: [
    {
      nome: 'Orla do rio São Francisco',
      descricao:
        'A beira-rio da cidade, com o casario histórico de um lado e as águas do Velho Chico do outro, é o cenário das caminhadas diárias e do fim de tarde piranhense.',
    },
    {
      nome: 'Cânions do Xingó',
      descricao:
        'Os paredões de até 170 metros sobre as águas verdes do São Francisco são o cartão-postal da região — passeios de catamarã, caiaque e stand up paddle saem da cidade e das marinas vizinhas.',
    },
    {
      nome: 'Mirantes e ladeiras do casario',
      descricao:
        'As ruas de pedra que sobem os morros até os mirantes funcionam como escadaria natural — treino de perna com vista para o rio na chegada.',
    },
  ],
  ciclovias:
    'O pedal acontece nas estradas do sertão e nas rotas para Delmiro Gouveia e o Xingó; não há malha cicloviária urbana relevante.',

  clima:
    'Clima semiárido quente: sol forte o ano quase todo, chuvas escassas e concentradas, com a umidade do rio amenizando as noites.',
  climaTreino:
    'Treina-se nas pontas do dia — amanhecer e fim de tarde, quando a brisa do rio ajuda; no meio do dia, sombra e espaços cobertos são obrigatórios.',

  mobilidade:
    'Piranhas fica a cerca de 30 minutos de Delmiro Gouveia, o polo de serviços do sertão alagoano, e a poucos quilômetros de Canindé de São Francisco, no lado sergipano do rio — o eixo do Xingó integra os três municípios.',

  corridas: [
    {
      nome: 'Provas do sertão alagoano',
      descricao:
        'O calendário regional inclui corridas de rua em Delmiro Gouveia e cidades vizinhas, com percursos de 5 km e 10 km ao longo do ano.',
    },
  ],
  culturaEsportiva:
    'A vida ativa gira em torno do rio e das ladeiras: caminhada na orla, esportes náuticos no São Francisco e o futebol de bairro que atravessa gerações no sertão.',
  academias:
    'A oferta reúne academias locais e personal trainers no centro, complementada pela orla, pelas ladeiras do casario e pela estrutura náutica do Xingó.',

  destaquesFitness: [
    'Cânions do Xingó, com paredões de até 170 metros sobre o São Francisco.',
    'Casario tombado pelo Iphan e ladeiras de pedra como escadaria natural.',
    'Esportes náuticos no rio: caiaque, stand up paddle e travessias.',
    'Orla do Velho Chico para caminhadas nas pontas do dia.',
  ],

  precos: {
    avulsaMin: 40,
    avulsaMax: 100,
    mensalMin: 220,
    mensalMax: 600,
    onlineMin: 100,
    onlineMax: 320,
  },

  conclusao:
    'Entre os cânions do Xingó e o casario tombado do Velho Chico, Piranhas tem cenários de treino que cidade nenhuma copia. Um personal trainer transforma as ladeiras, a orla e o rio em rotina de condicionamento — no horário certo do sol do sertão.',

  vizinhas: ['delmiro-gouveia-al', 'paulo-afonso-ba', 'arapiraca-al'],

  fontes: [
    { nome: 'IBGE Cidades — Piranhas', url: 'https://cidades.ibge.gov.br/brasil/al/piranhas/panorama' },
    { nome: 'Prefeitura de Piranhas', url: 'https://prefeitura.piranhas.al.gov.br/' },
    { nome: 'Iphan — Conjunto histórico de Piranhas', url: 'http://portal.iphan.gov.br/' },
  ],
  atualizadoEm: '2026-08-05',
};
