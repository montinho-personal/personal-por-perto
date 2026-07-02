import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'tibau-do-sul-rn',
  nome: 'Tibau do Sul',
  uf: 'RN',
  estado: 'Rio Grande do Norte',
  estadoSlug: 'rio-grande-do-norte',
  regiao: 'Nordeste',
  gentilico: 'tibauense',
  tipo: 'cidade',

  populacao: 17210,
  populacaoAno: 2022,
  idhm: 0.650,
  idhmClasse: 'médio',

  resumoEconomico:
    'Tibau do Sul é o município do litoral sul potiguar que abriga a Praia de Pipa, um dos destinos turísticos mais conhecidos do Nordeste. A economia local gira em torno do turismo — hospedagem, gastronomia, passeios e serviços ligados às falésias, à Baía dos Golfinhos e à Lagoa de Guaraíras —, além da pesca artesanal, atividade histórica da região. O fluxo de visitantes nacionais e estrangeiros faz o município ter, segundo o Censo 2022, mais domicílios do que moradores fixos, reflexo do peso das casas de temporada e pousadas na paisagem urbana.',

  mercado:
    'O mercado de personal trainer em Tibau do Sul é pequeno e concentrado em Pipa, moldado pelo público turístico e pelos moradores que trabalham no setor de hospitalidade. A procura combina visitantes que querem manter a rotina de treino durante a estada, moradores locais e profissionais de turismo com horários variáveis, além de quem busca condicionamento físico para praticar surf, stand up paddle e trilhas nas falésias.',

  bairrosNobres: ['Pipa (Centro)', 'Sibaúma', 'Praia do Madeiro'],
  bairrosPopulares: ['Tibau do Sul (Centro/Sede)', 'Pernambuquinho', 'Cabeceiras', 'Manimbu'],

  parques: [
    {
      nome: 'Santuário Ecológico de Pipa',
      descricao:
        'Área de preservação de Mata Atlântica sobre as falésias, com trilhas que dão acesso a mirantes sobre o mar — um dos poucos remanescentes de mata na orla e opção natural para caminhada e observação da paisagem.',
    },
    {
      nome: 'Trilha das Falésias (Cacimbinhas–Praia do Madeiro)',
      descricao:
        'Percurso de cerca de 1 km sobre os paredões costeiros, ligando a Praia de Cacimbinhas à Praia do Madeiro, usado tanto por turistas quanto por moradores para caminhada e treino ao ar livre com vista para o mar.',
    },
    {
      nome: 'Lagoa de Guaraíras',
      descricao:
        'Espelho d\'água entre Tibau do Sul e Pipa, procurado para a prática de stand up paddle e outros esportes náuticos, em contraste com as ondas do mar aberto.',
    },
  ],
  ciclovias:
    'Tibau do Sul não conta com rede cicloviária estruturada; o deslocamento e o treino ao ar livre acontecem nas vias da RN-003, na orla das praias e nas trilhas que ligam os pontos turísticos do município.',

  clima:
    'O clima é tropical, quente o ano todo, com temperatura média anual em torno de 26 °C. As chuvas se concentram no outono e início do inverno (com pico em junho), enquanto o restante do ano tende a ser mais seco e ensolarado, favorecendo o turismo e as atividades ao ar livre.',
  climaTreino:
    'O calor constante e a forte incidência solar pedem treinos ao ar livre no início da manhã ou no fim da tarde, com atenção à hidratação; a água do mar aquecida o ano todo favorece esportes aquáticos em praticamente qualquer época, exceto nos dias de chuva mais intensa em maio e junho.',

  mobilidade:
    'O acesso principal se dá pela RN-003, que liga o município a Goianinha (onde entronca com a BR-101) e, a partir daí, a Natal, distante cerca de 80 km. Dentro do município, o deslocamento entre a sede, Pipa e as demais localidades costeiras é feito majoritariamente por carro, moto-táxi e vans de turismo, já que o transporte coletivo urbano é limitado.',

  corridas: [
    {
      nome: '21K de Pipa',
      descricao:
        'Prova de corrida de rua realizada em Tibau do Sul com percursos de 5 km, 10 km e 21 km, passando por trechos de asfalto, orla e falésias entre os principais pontos turísticos de Pipa.',
    },
    {
      nome: 'TRun Pipa / WTR Pipa',
      descricao:
        'Etapas de circuitos de corrida de trail e mountain bike sediadas em Pipa, com percursos entre 7 km e 42 km por trilhas, dunas e áreas de mata ao longo das falésias — parte de calendários que reúnem atletas de todo o país.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva de Tibau do Sul é voltada aos esportes de praia e natureza: surf e bodyboard nos picos de Pipa, stand up paddle na Lagoa de Guaraíras, trilhas sobre as falésias e provas de corrida e trail running que usam a paisagem do litoral sul potiguar como cenário.',
  academias:
    'A oferta de academias é pequena e concentrada em Pipa, com estúdios e espaços de musculação, funcional e modalidades como yoga e pilates voltados tanto a moradores quanto a turistas que buscam manter a rotina de treino durante a estada.',

  destaquesFitness: [
    'Trilhas sobre as falésias de Pipa, como a que liga Cacimbinhas à Praia do Madeiro, usadas para caminhada e treino ao ar livre.',
    'Baía dos Golfinhos e mar aquecido o ano todo, propícios a surf, bodyboard e natação.',
    'Lagoa de Guaraíras como point de stand up paddle, alternativa às ondas do mar aberto.',
    'Provas de corrida de rua e trail running (21K de Pipa, TRun Pipa, WTR Pipa) que atraem atletas de fora do município.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 140,
    mensalMin: 280,
    mensalMax: 750,
    onlineMin: 120,
    onlineMax: 350,
  },

  conclusao:
    'Marcada pelo turismo da Praia de Pipa, pelas falésias e pela Baía dos Golfinhos, Tibau do Sul favorece um treino que aproveite trilhas, praia e água como parte da rotina. Um personal trainer ajuda a adaptar os treinos ao calor constante, aos horários de quem trabalha com turismo e à sazonalidade de visitantes que passam temporadas na cidade.',

  vizinhas: ['nisia-floresta-rn', 'natal-rn', 'parnamirim-rn'],

  fontes: [
    { nome: 'IBGE Cidades — Tibau do Sul', url: 'https://cidades.ibge.gov.br/brasil/rn/tibau-do-sul/panorama' },
    { nome: 'Atlas do Desenvolvimento Humano no Brasil — Tibau do Sul', url: 'http://atlasbrasil.org.br/2013/pt/perfil_m/tibau-do-sul_rn' },
    { nome: 'Prefeitura Municipal de Tibau do Sul — Turismo e Lazer', url: 'https://tibaudosul.rn.gov.br/o-municipio/turismo-e-lazer/' },
  ],
  atualizadoEm: '2026-07-02',
};
