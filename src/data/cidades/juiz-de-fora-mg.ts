import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'juiz-de-fora-mg',
  nome: 'Juiz de Fora',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'juiz-forano',
  tipo: 'cidade',

  populacao: 540756,
  populacaoAno: 2022,
  idhm: 0.778,
  idhmClasse: 'alto',
  altitudeM: 1104,

  resumoEconomico:
    'Principal polo econômico da Zona da Mata mineira, Juiz de Fora tem indústria diversificada, forte setor de serviços (telecomunicações, comércio e saúde) e destaque em educação, ancorado na UFJF. A cidade vem se reposicionando como centro regional de serviços, e o grande público universitário dá energia ao mercado fitness.',

  mercado:
    'O mercado é maduro, com múltiplas unidades da Smart Fit (avenidas Rio Branco, Independência e bairros) e redes e academias locais consolidadas. A cultura de musculação é forte, reforçada pelo público da UFJF, e o Parque Halfeld funciona como ponto de encontro de corredores no centro.',

  bairrosNobres: ['Alto dos Passos', 'Granbery', 'Cascatinha', 'Bom Pastor'],
  bairrosPopulares: ['Benfica', 'Santa Luzia', 'Retiro', 'Vila Ideal'],

  parques: [
    {
      nome: 'Parque Halfeld',
      descricao:
        'No centro, no cruzamento da Avenida Rio Branco com a Rua Halfeld, é o principal espaço público de lazer e o ponto de largada das corridas de rua da cidade.',
    },
    {
      nome: 'Mata do Krambeck / Jardim Botânico da UFJF',
      descricao:
        'Um dos maiores remanescentes de Mata Atlântica urbana do Brasil, com trilhas para caminhada em meio à natureza preservada.',
    },
    {
      nome: 'Campus da UFJF',
      descricao:
        'Usado por moradores para corrida, caminhada e ciclismo, é uma extensão natural dos espaços de treino ao ar livre da cidade.',
    },
  ],
  ciclovias:
    'A cidade conta com ciclovias e ciclofaixas em pontos da malha viária, integrando-se aos espaços de lazer e à universidade.',

  clima:
    'O clima é tropical de altitude (cerca de 1.100 m), com temperaturas amenas e invernos secos e frios.',
  climaTreino:
    'As condições para treino ao ar livre são muito favoráveis na maior parte do ano; vale atenção ao frio nas manhãs de inverno e às chuvas de verão.',

  mobilidade:
    'Juiz de Fora é cortada pela BR-040 (eixo Rio–Belo Horizonte) e pelas BR-267 e BR-440, sendo um importante entroncamento da Zona da Mata. O transporte coletivo urbano é por ônibus, com terminais integrados.',

  corridas: [
    {
      nome: 'Meia Maratona de Juiz de Fora',
      descricao:
        'Festival de corrida tradicional, com provas de 21 km, 10 km e 5 km, além de night run e corrida kids.',
    },
    {
      nome: 'Corrida do Rodoviário',
      descricao:
        'Corrida e caminhada de rua tradicional na cidade, parte de um calendário esportivo ativo.',
    },
  ],
  culturaEsportiva:
    'Juiz de Fora tem forte tradição em corrida de rua, com o Parque Halfeld e a Avenida Rio Branco como cenários icônicos de largadas, e é uma cidade universitária com grande público jovem e ativo via UFJF.',
  academias:
    'A oferta reúne várias unidades da Smart Fit e academias locais bem distribuídas pelos bairros, com cultura consolidada de musculação e bom espaço para treino ao ar livre na Mata do Krambeck e no campus.',
  academiasProximas: [
    { nome: 'Smart Fit', detalhe: 'unidades nas avenidas Rio Branco e Independência e em bairros' },
    { nome: 'Academias locais', detalhe: 'bem distribuídas, com cultura consolidada de musculação' },
    { nome: 'Espaços da UFJF e Mata do Krambeck', detalhe: 'campus e trilhas abertos ao treino ao ar livre' },
  ],

  destaquesFitness: [
    'Várias unidades da Smart Fit e redes locais bem distribuídas.',
    'Meia Maratona de Juiz de Fora, evento de corrida consolidado.',
    'Parque Halfeld como hub de corrida no centro da cidade.',
    'Mata do Krambeck e campus da UFJF para treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 70,
    avulsaMax: 160,
    mensalMin: 350,
    mensalMax: 950,
    onlineMin: 170,
    onlineMax: 430,
  },

  conclusao:
    'Com clima de altitude agradável, forte cena de corrida e um grande público universitário, Juiz de Fora é uma cidade convidativa para treinar. Um personal trainer ajuda a aproveitar o Parque Halfeld, a Mata do Krambeck e as academias locais com método e constância.',

  faqsExtra: [
    {
      pergunta: 'Onde o personal costuma atender em Juiz de Fora?',
      resposta:
        'O eixo da Avenida Rio Branco com o Parque Halfeld é o coração — ali largam as corridas da cidade e se concentram as unidades da Smart Fit e academias locais. O campus da UFJF funciona como pista informal de corrida e bike dos moradores, e a Mata do Krambeck oferece trilhas em plena Mata Atlântica urbana. O atendimento em casa é comum no Alto dos Passos, no Granbery e no Bom Pastor, bairros de rua íngreme onde a subida já é parte do aquecimento.',
    },
    {
      pergunta: 'A altitude de 1.100 m de Juiz de Fora interfere no treino?',
      resposta:
        'Interfere a favor. A cerca de 1.100 m, o efeito fisiológico da altitude é discreto (adaptações relevantes aparecem bem mais alto), mas o efeito climático é enorme: temperaturas amenas o ano quase todo, noites frescas e um ar de montanha que torna correr em JF muito mais confortável que no calor do Rio, a 180 km dali. O único ajuste real é o inverno seco e frio das manhãs — aquecimento mais longo e, para quem prefere, treino no meio do dia. De resto, é clima de cidade feita para treinar fora.',
    },
    {
      pergunta: 'Há acompanhamento em Juiz de Fora para quem sente dores ou tem limitações?',
      resposta:
        'Há. O Montinho Personal, destacado pelo portal, tem cursos voltados ao treinamento de pessoas com dores e limitações musculoesqueléticas, além da vivência prática de mais de 20 anos de musculação. Para Juiz de Fora, o formato é o acompanhamento online: treino adaptado à estrutura disponível (academia, condomínio, casa ou parque), vídeos de execução e ajustes contínuos. O trabalho é progressivo e sem promessa de cura — quadros clínicos pedem também médico ou fisioterapeuta.',
    },
  ],

  vizinhas: ['belo-horizonte-mg', 'contagem-mg', 'rio-de-janeiro-rj'],

  fontes: [
    { nome: 'IBGE Cidades — Juiz de Fora', url: 'https://cidades.ibge.gov.br/brasil/mg/juiz-de-fora/panorama' },
    { nome: 'Prefeitura de Juiz de Fora', url: 'https://www.pjf.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-19',
};
