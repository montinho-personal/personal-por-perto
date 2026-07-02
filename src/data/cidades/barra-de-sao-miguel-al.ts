import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'barra-de-sao-miguel-al',
  nome: 'Barra de São Miguel',
  uf: 'AL',
  estado: 'Alagoas',
  estadoSlug: 'alagoas',
  regiao: 'Nordeste',
  gentilico: 'barrense',
  tipo: 'cidade',

  populacao: 7944,
  populacaoAno: 2022,
  idhm: 0.615,
  idhmClasse: 'médio',
  altitudeM: 2,

  resumoEconomico:
    'Barra de São Miguel nasceu como vila de pescadores no ponto em que o rio São Miguel forma sua "barra" antes de encontrar o mar, no litoral sul de Alagoas. Emancipada de São Miguel dos Campos em 1963 e hoje parte da Região Metropolitana de Maceió, a cidade vive principalmente do turismo de fim de semana e de segunda residência: quem mora na capital, a cerca de 30 km pela AL-101 Sul, mantém casa de praia ou frequenta pousadas na orla. A pesca artesanal segue presente no dia a dia, e o crescimento de loteamentos e condomínios como Barra Mar, Arquipélago do Sol e Alta Vista mostra a expansão do mercado imobiliário voltado ao veraneio.',

  mercado:
    'O mercado fitness de Barra de São Miguel é pequeno e segue o ritmo do turismo: cresce nos fins de semana, feriados e alta temporada, quando a população flutuante de quem tem casa na praia ou está hospedado em pousadas e resorts aumenta bastante. A cidade tem academias locais, como a BSM Fitness no Centro e a WAgym, além da estrutura própria de empreendimentos hoteleiros da orla. A procura por personal trainer tende a vir tanto de moradores fixos quanto de quem passa temporadas na cidade e quer manter a rotina de treino durante a estadia.',

  bairrosNobres: ['Barra Mar', 'Praia Bonita', 'Arquipélago do Sol', 'Alta Vista'],
  bairrosPopulares: ['Barra Velha'],

  parques: [
    {
      nome: 'Orla de Barra Velha',
      descricao:
        'Núcleo original da cidade, onde estão o comércio local e os barcos de pescadores; a orla mais próxima do centro é usada para caminhada, corrida leve e o convívio diário à beira-mar.',
    },
    {
      nome: 'Orla de Praia Bonita e Barra Mar',
      descricao:
        'Trecho de praia mais voltado ao veraneio, com casas e condomínios de segunda residência; areia e calçamento servem de espaço para caminhada, corrida e treino ao ar livre em ambiente mais tranquilo.',
    },
    {
      nome: 'Foz do rio São Miguel e passeio de barco',
      descricao:
        'Ponto de saída de passeios de barco pelos manguezais até a Lagoa do Roteiro e as piscinas naturais próximas à Praia do Gunga, já no município vizinho de Roteiro — um dos programas mais procurados por quem visita a região.',
    },
  ],
  ciclovias:
    'A cidade não tem estrutura cicloviária dedicada; pedaladas e corridas acontecem nas vias da orla e na AL-101 Sul, a rodovia que liga Barra de São Miguel a Maceió e às demais praias do litoral sul.',

  clima:
    'O clima é tropical, quente o ano todo, com temperatura média anual em torno de 25 °C. As chuvas se concentram no outono e no inverno, com pico em torno de junho, enquanto os meses de verão são mais secos — padrão típico do litoral sul alagoano.',
  climaTreino:
    'O calor e a umidade constantes pedem treinar cedo pela manhã ou no fim da tarde, com hidratação reforçada e proteção contra o sol forte da areia e da orla; o período mais seco, entre a primavera e o verão, costuma ser o mais convidativo para atividade ao ar livre.',

  mobilidade:
    'O acesso a Barra de São Miguel se dá pela AL-101 Sul, a Rota Ecológica que liga Maceió às praias do litoral sul, com cerca de 30 km e 35 a 45 minutos de viagem a partir da capital. Dentro da cidade, pequena e de perfil litorâneo, o deslocamento é feito principalmente a pé, de bicicleta ou de carro, sem sistema de transporte urbano estruturado.',

  corridas: [],
  culturaEsportiva:
    'A vida esportiva da cidade gira em torno do mar e do rio: caminhada e corrida na orla, pesca artesanal e passeios de barco pelos manguezais até a Lagoa do Roteiro convivem com atividades como stand up paddle, caiaque e natação, muito ligadas ao fluxo de turistas e donos de casas de praia vindos de Maceió.',
  academias:
    'A oferta de academias é pequena e concentrada no Centro (Barra Velha), com estabelecimentos como a BSM Fitness e a WAgym, complementada pela estrutura de ginástica de empreendimentos hoteleiros da orla que atendem hóspedes e moradores.',

  destaquesFitness: [
    'Vila de pescadores na foz do rio São Miguel, hoje procurada como point de segunda residência por quem mora em Maceió, a cerca de 30 km pela AL-101 Sul.',
    'Orlas de Barra Velha, Praia Bonita e Barra Mar como espaço natural para caminhada, corrida e treino ao ar livre.',
    'Clima tropical quente o ano todo, com temperatura média perto de 25 °C, favorável ao treino ao ar livre fora do horário de sol forte.',
    'Passeios de barco pelos manguezais até a Lagoa do Roteiro reforçam a vocação da região para esportes aquáticos como stand up paddle, caiaque e natação.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 120,
    mensalMin: 260,
    mensalMax: 700,
    onlineMin: 120,
    onlineMax: 360,
  },

  conclusao:
    'Pequena, litorânea e movida pelo vaivém de quem tem casa de praia ou passa uma temporada na região, Barra de São Miguel pede um treino que aproveite a orla e se adapte à rotina de quem divide a semana entre a cidade e Maceió. Um personal trainer ajuda a manter a constância nesses períodos, respeitando o calor e aproveitando a praia como espaço de treino ao ar livre.',

  vizinhas: ['maceio-al', 'marechal-deodoro-al', 'sao-miguel-dos-campos-al'],

  fontes: [
    {
      nome: 'IBGE Cidades — Barra de São Miguel',
      url: 'https://cidades.ibge.gov.br/brasil/al/barra-de-sao-miguel/panorama',
    },
    { nome: 'Prefeitura de Barra de São Miguel', url: 'https://www.barradesaomiguel.al.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-07-02',
};
