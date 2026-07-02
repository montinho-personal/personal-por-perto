import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'carmo-do-cajuru-mg',
  nome: 'Carmo do Cajuru',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'cajuruense',
  tipo: 'cidade',

  populacao: 23479,
  populacaoAno: 2022,
  idhm: 0.710,
  idhmClasse: 'alto',
  altitudeM: 770,

  resumoEconomico:
    'Carmo do Cajuru fica no Centro-Oeste de Minas, na região de Divinópolis, e é conhecida como o segundo maior polo moveleiro do estado, atrás apenas de Ubá. O setor de móveis responde por uma fatia relevante da produção mineira e emprega uma parcela expressiva da população economicamente ativa, ao lado da agropecuária (com destaque para a avicultura de postura) e do comércio local que atende a cidade e o entorno rural.',

  mercado:
    'Por ser uma cidade pequena do interior mineiro, o mercado de personal trainers em Carmo do Cajuru é discreto e concentrado em poucas academias locais. A renda gerada pelo polo moveleiro e o dia a dia corrido de quem trabalha nas fábricas e no comércio abrem espaço para o atendimento personalizado, seja para quem busca resultado com pouco tempo disponível, seja para quem prefere treinar em casa ou em horários fora do expediente.',

  bairrosNobres: ['Centro', 'São Luiz', 'Nossa Senhora do Carmo', 'Vitória'],
  bairrosPopulares: ['Bonfim', 'São José dos Salgados', 'Cidade Nova', 'Distrito Industrial'],

  parques: [
    {
      nome: 'Barragem de Carmo do Cajuru',
      descricao:
        'Represa formada no rio Pará, inaugurada na década de 1950, com praias de água doce nas margens; é o principal ponto de lazer da região, usado para caminhada na orla, passeios de barco e descanso ao ar livre.',
    },
    {
      nome: 'Praça da Matriz (Praça do Cruzeiro)',
      descricao:
        'Praça central junto à Igreja Nossa Senhora do Carmo, ponto de encontro da cidade e local de largada de corridas de rua realizadas no município.',
    },
    {
      nome: 'Ponte da Estrada de Ferro do Rio Pará',
      descricao:
        'Antiga ponte ferroviária sobre o rio Pará que liga o município a Divinópolis; um dos cartões-postais locais e referência para quem caminha pelas margens do rio.',
    },
  ],
  ciclovias:
    'A infraestrutura cicloviária é limitada, típica de cidade pequena do interior; caminhada e corrida acontecem principalmente nas ruas do Centro, na praça central e na orla da barragem no rio Pará.',

  clima:
    'O clima é tropical de altitude, com verão chuvoso (outubro a março) e inverno seco (junho a agosto), com amplitude térmica maior nos meses secos e temperaturas amenas à noite por causa da altitude em torno de 700 metros.',
  climaTreino:
    'O inverno seco favorece o treino ao ar livre em horários mais frescos, enquanto o verão pede atenção a chuvas de fim de tarde e ao calor mais úmido; a barragem do rio Pará é uma opção agradável para caminhada nos períodos de menor calor.',

  mobilidade:
    'A cidade fica a cerca de 15 km de Divinópolis e 25 km de Itaúna, servida pela rodovia estadual MG-050 e pela MG-430, que dá acesso à BR-262. O deslocamento entre bairros é curto, compatível com o porte pequeno do município, e o transporte para as cidades vizinhas da microrregião de Divinópolis é feito por ônibus intermunicipal.',

  corridas: [
    {
      nome: 'Corrida Nossa Senhora de La Salette',
      descricao:
        'Prova de rua com percursos de 5 km e 10 km, com largada na Praça Nossa Senhora Aparecida (Praça do Cruzeiro), no Centro de Carmo do Cajuru.',
    },
    {
      nome: 'Corrida Nossa Senhora do Carmo',
      descricao:
        'Evento de corrida de rua com largada na Praça da Matriz, em frente à Igreja Nossa Senhora do Carmo, reunindo corredores locais e da região.',
    },
  ],
  culturaEsportiva:
    'A rotina esportiva da cidade gira em torno das corridas de rua organizadas por grupos e paróquias locais, do lazer na barragem do rio Pará e das quadras e campos de bairro, num ambiente típico de cidade pequena onde a prática esportiva é próxima e comunitária.',
  academias:
    'A oferta é formada por academias de musculação e estúdios de treino funcional de pequeno porte, concentrados principalmente no Centro, compatíveis com o tamanho do município.',

  destaquesFitness: [
    'Segundo maior polo moveleiro de Minas Gerais, atrás apenas de Ubá, com forte geração de emprego industrial.',
    'Barragem de Carmo do Cajuru, no rio Pará, como principal espaço de lazer e caminhada ao ar livre da região.',
    'Corridas de rua locais, como as provas de Nossa Senhora de La Salette e de Nossa Senhora do Carmo, com largada na praça central.',
    'Clima tropical de altitude, com inverno seco favorável ao treino ao ar livre e verão chuvoso que pede atenção às condições do tempo.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 110,
    mensalMin: 250,
    mensalMax: 650,
    onlineMin: 115,
    onlineMax: 320,
  },

  conclusao:
    'Cidade pequena e industrial do Centro-Oeste mineiro, Carmo do Cajuru combina a rotina das fábricas de móveis com o lazer tranquilo da barragem do rio Pará. Um personal trainer local ajuda a encaixar o treino na jornada de trabalho e a aproveitar os espaços da cidade, da praça central às margens da represa, com constância ao longo do ano.',

  vizinhas: ['divinopolis-mg', 'itauna-mg'],

  fontes: [
    { nome: 'IBGE Cidades — Carmo do Cajuru', url: 'https://cidades.ibge.gov.br/brasil/mg/carmo-do-cajuru/panorama' },
    { nome: 'Prefeitura de Carmo do Cajuru', url: 'https://carmodocajuru.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
