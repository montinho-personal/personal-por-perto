import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'itaituba-pa',
  nome: 'Itaituba',
  uf: 'PA',
  estado: 'Pará',
  estadoSlug: 'para',
  regiao: 'Norte',
  gentilico: 'itaitubense',
  tipo: 'cidade',

  populacao: 123312,
  populacaoAno: 2022,
  idhm: 0.640,
  idhmClasse: 'médio',
  altitudeM: 36,

  resumoEconomico:
    'No sudoeste do Pará, à margem esquerda do rio Tapajós, Itaituba é conhecida como "Cidade Pepita" pela longa história de garimpo e mineração de ouro na Província Aurífera do Tapajós. Hoje a economia também gira em torno do agronegócio e da logística: o distrito de Miritituba, na outra margem do rio, concentra estações de transbordo e portos graneleiros que escoam a soja vinda do Mato Grosso pela BR-163, peça central do Arco Norte de exportação de grãos.',

  mercado:
    'A infraestrutura esportiva acompanha o crescimento econômico ligado à mineração e ao corredor de grãos. A oferta fitness se organiza em academias no Centro e nos bairros, complementada por praças com equipamentos ao ar livre e pela orla do Tapajós como espaço de caminhada.',

  bairrosNobres: ['Centro', 'Bela Vista', 'Jardim das Araras', 'Maria Magdalena'],
  bairrosPopulares: ['Floresta', 'Liberdade', 'Boa Esperança', 'Jardim Aeroporto'],

  parques: [
    {
      nome: 'Orla do Tapajós',
      descricao:
        'Beira-rio da cidade, voltada para o Tapajós, com calçadão e movimento no fim de tarde — principal espaço para caminhada e corrida leve.',
    },
    {
      nome: 'Praias fluviais do Tapajós',
      descricao:
        'Entre agosto e outubro, a vazante do rio descobre praias de areia de água doce no entorno de Itaituba, usadas para banho e atividades ao ar livre.',
    },
    {
      nome: 'Parque Nacional da Amazônia',
      descricao:
        'Uma das mais antigas unidades de conservação da Amazônia brasileira, com floresta, cachoeiras e trilhas no entorno do município — cenário para caminhada, trilha e contato com a natureza.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária não é divulgada em fonte oficial; a orla do Tapajós e as vias do Centro concentram o uso para caminhada e pedal.',

  clima:
    'O clima é equatorial, quente e úmido, com temperaturas elevadas o ano todo e estações seca e chuvosa bem marcadas.',
  climaTreino:
    'O calor e a umidade altos pedem hidratação reforçada e treino nos horários mais amenos — início da manhã e fim de tarde, quando a brisa do rio ajuda.',

  mobilidade:
    'O acesso combina rodovia e rio: a BR-230 (Transamazônica) cruza a cidade no sentido leste-oeste e a BR-163 (Santarém–Cuiabá) chega a Miritituba, na margem oposta do Tapajós, onde ficam os portos graneleiros. A travessia de balsa pelo rio liga a sede aos terminais, e o aeroporto completa as opções de chegada.',

  corridas: [
    {
      nome: 'Corridas de rua no calendário municipal',
      descricao:
        'A cidade recebe provas de rua promovidas pela prefeitura e por grupos locais, geralmente em datas comemorativas, com percursos pela área urbana e pela orla.',
    },
    {
      nome: 'Trilhas e atividades no Parque Nacional da Amazônia',
      descricao:
        'As trilhas da unidade de conservação são aproveitadas para corrida e caminhada na natureza, em meio à floresta amazônica do entorno.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva se apoia no ginásio municipal, nas praças e na relação cotidiana com o rio Tapajós. Corrida de rua, caminhada e atividades ao ar livre ganham espaço, favorecidas pela paisagem fluvial e pelas praias de vazante.',
  academias:
    'A oferta de academias se concentra no Centro e se espalha pelos bairros, complementada por equipamentos de ginástica ao ar livre em praças e pela orla do Tapajós como grande espaço aberto de treino.',

  destaquesFitness: [
    'Orla do Tapajós como principal espaço de caminhada e corrida.',
    'Praias fluviais de água doce descobertas na vazante (agosto a outubro).',
    'Trilhas do Parque Nacional da Amazônia no entorno do município.',
    'Praças com academias ao ar livre e o ginásio municipal como apoio ao esporte.',
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
    'Cidade Pepita do Tapajós e ponto-chave do corredor de grãos do Arco Norte, Itaituba une rio, floresta e movimento econômico. Um personal trainer ajuda a montar uma rotina que respeite o calor equatorial e aproveite a orla, as praias de vazante e as trilhas da Amazônia com segurança.',

  vizinhas: ['santarem-pa', 'altamira-pa'],

  fontes: [
    { nome: 'IBGE Cidades — Itaituba', url: 'https://cidades.ibge.gov.br/brasil/pa/itaituba/panorama' },
    { nome: 'Prefeitura de Itaituba', url: 'https://www.itaituba.pa.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
