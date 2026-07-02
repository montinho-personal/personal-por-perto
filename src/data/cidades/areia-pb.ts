import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'areia-pb',
  nome: 'Areia',
  uf: 'PB',
  estado: 'Paraíba',
  estadoSlug: 'paraiba',
  regiao: 'Nordeste',
  gentilico: 'areiense',
  tipo: 'cidade',

  populacao: 22633,
  populacaoAno: 2022,
  idhm: 0.594,
  idhmClasse: 'baixo',
  altitudeM: 618,

  resumoEconomico:
    'Principal cidade do Brejo paraibano, no alto da Serra da Borborema, Areia é um dos conjuntos históricos mais preservados da Paraíba — o casario colonial e o traçado urbano sobre o relevo acidentado são tombados pelo IPHAN desde 2006. A cidade tem lugar de destaque na história do país por ter sido, em 3 de maio de 1888, a primeira a abolir a escravidão no Brasil, dez dias antes da Lei Áurea, e por ter dado ao país nomes como o pintor Pedro Américo e o escritor José Américo de Almeida. A economia combina o turismo histórico e cultural (casarões, o Theatro Minerva, de 1859, e engenhos que ainda produzem cachaça, mel e rapadura), a agricultura do Brejo e a presença do Centro de Ciências Agrárias da UFPB, instalado no antigo Engenho Várzea desde 1934 e considerado a primeira instituição de ensino superior da Paraíba.',

  mercado:
    'O mercado fitness de Areia é pequeno e concentrado nas academias locais de musculação, funcional e crossfit da área central. A presença do campus do Centro de Ciências Agrárias da UFPB mantém uma população de estudantes e servidores que ajuda a sustentar a procura por treino orientado, enquanto o fluxo de turistas atraído pelo casario histórico e pelo clima ameno movimenta a cidade em datas como o Caminhos do Frio, no meio do ano.',

  bairrosNobres: ['Centro Histórico'],
  bairrosPopulares: ['Jussara', 'Mutirão', 'Frei Damião', 'Pedro Perazzo'],

  parques: [
    {
      nome: 'Centro Histórico e ladeiras do casario',
      descricao:
        'As ruas de pedra e ladeiras que acompanham o relevo acidentado do centro tombado pelo IPHAN, com praças como a Ministro José Américo de Almeida, formam o percurso mais usado para caminhada na cidade, com mirantes naturais sobre o Brejo.',
    },
    {
      nome: 'Chã de Jardim',
      descricao:
        'Comunidade rural a cerca de 7 km do centro, às margens da PB-079, que preserva um dos últimos remanescentes de Mata Atlântica de brejo de altitude do Nordeste — trilhas em meio à mata usadas por quem busca caminhada e contato com a natureza.',
    },
    {
      nome: 'Entorno do Centro de Ciências Agrárias da UFPB',
      descricao:
        'O campus, instalado no antigo Engenho Várzea, ocupa uma extensa área verde nos arredores da cidade; suas vias internas e cercanias são aproveitadas pela comunidade universitária para caminhada e corrida.',
    },
  ],
  ciclovias:
    'Areia não tem estrutura cicloviária relevante; o relevo de ladeiras do centro histórico e as estradas vicinais do Brejo é que definem os percursos de quem pedala ou caminha pela cidade.',

  clima:
    'A cerca de 618 metros de altitude, no alto da Serra da Borborema, Areia tem clima tropical de altitude, mais úmido e ameno que o do litoral e do agreste paraibano — a temperatura média fica perto de 23 °C, com chuvas concentradas no outono-inverno. É esse clima mais fresco, às vezes chamado de "europeu", que atrai turistas para o evento Caminhos do Frio, no meio do ano.',
  climaTreino:
    'O clima ameno de altitude favorece o treino ao ar livre durante boa parte do ano, inclusive em horários que seriam impraticáveis no calor do litoral. No período mais chuvoso e frio do outono-inverno, vale ter alternativa coberta para os dias de garoa, enquanto nos meses mais secos as ladeiras do centro e as estradas do Brejo ficam mais convidativas para caminhada e corrida.',

  mobilidade:
    'Areia fica a cerca de 120 km de João Pessoa, acessada pela BR-230 e pela PB-079, rodovia que liga a cidade à capital e aos municípios vizinhos do Brejo, além de dar acesso a comunidades rurais como Chã de Jardim. O deslocamento interno é feito a pé, de moto ou carro, dado o porte pequeno da cidade, e o transporte intermunicipal inclui linha regular de ônibus entre João Pessoa e Areia pela BR-230.',

  corridas: [
    {
      nome: 'Corrida de Emancipação Política de Areia',
      descricao:
        'Prova de rua organizada pela Diretoria de Esportes da Prefeitura de Areia como parte das comemorações do aniversário de emancipação política do município.',
    },
    {
      nome: 'TRUN Series — Etapa Areia',
      descricao:
        'Etapa paraibana do circuito de trail running TRUN Series, com percursos que alternam asfalto, estradas de terra e mata pelo relevo do Brejo, em distâncias que vão de trechos curtos a provas de longa distância.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Areia mistura a caminhada pelas ladeiras e praças do centro histórico, a rotina esportiva da comunidade do Centro de Ciências Agrárias da UFPB e o crescimento do trail running, puxado por etapas de circuitos regionais que exploram as trilhas e estradas rurais do Brejo paraibano.',
  academias:
    'A oferta é formada por academias locais de musculação, funcional e crossfit concentradas na área central da cidade, em número compatível com o porte pequeno do município.',

  destaquesFitness: [
    'Cidade histórica do Brejo paraibano, tombada pelo IPHAN, com clima ameno de altitude (618 m) favorável ao treino ao ar livre.',
    'Sede do Centro de Ciências Agrárias da UFPB, primeira instituição de ensino superior da Paraíba, com público universitário que movimenta a prática esportiva.',
    'Etapas do circuito TRUN Series levam o trail running às trilhas e estradas rurais do Brejo em torno da cidade.',
    'Economia ligada aos engenhos de cana, à cachaça artesanal e ao turismo cultural, com destaque para o evento Caminhos do Frio.',
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
    'Cidade histórica de clima ameno no alto do Brejo paraibano, Areia oferece o casario colonial, o entorno do Centro de Ciências Agrárias da UFPB e as trilhas rurais como cenário para o treino ao ar livre. Um personal trainer ajuda a aproveitar esse clima favorável, adaptando o treino às ladeiras do centro e mantendo a constância ao longo do ano.',

  vizinhas: ['campina-grande-pb', 'guarabira-pb', 'joao-pessoa-pb'],

  fontes: [
    { nome: 'IBGE Cidades — Areia', url: 'https://cidades.ibge.gov.br/brasil/pb/areia/panorama' },
    { nome: 'Prefeitura de Areia', url: 'https://areia.pb.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
