import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'teutonia-rs',
  nome: 'Teutônia',
  uf: 'RS',
  estado: 'Rio Grande do Sul',
  estadoSlug: 'rio-grande-do-sul',
  regiao: 'Sul',
  gentilico: 'teutoniense',
  tipo: 'cidade',

  populacao: 32797,
  populacaoAno: 2022,
  idhm: 0.747,
  idhmClasse: 'alto',
  altitudeM: 100,

  resumoEconomico:
    'Teutônia fica no Vale do Taquari, na microrregião Lajeado-Estrela, da qual se emancipou em 1981. A colonização é alemã, iniciada em 1858 por iniciativa do comerciante Carlos Schilling, com imigrantes vindos sobretudo da Vestfália, Pomerânia, Saxônia, Boêmia e Silésia — herança que aparece na arquitetura enxaimel e no título de Capital Nacional do Canto Coral. A cidade é a segunda maior economia entre os 39 municípios da AMVAT, puxada pela agroindústria da Cooperativa Languiru (fundada em 1955, uma das maiores cooperativas do Rio Grande do Sul, com atuação em lácteos, avicultura e alimentos), pela indústria calçadista, pela metalmecânica e por segmentos como esquadrias, móveis e beneficiamento de pedras.',

  mercado:
    'O mercado fitness de Teutônia é o típico de uma cidade média e industrial do interior gaúcho: academias locais de musculação e treino funcional atendem o público que trabalha nas fábricas de calçados, na metalmecânica e na agroindústria ligada à Languiru. A procura por personal trainer cresce entre quem tem rotina de turno fixo na indústria e busca horários alternativos de treino, além de famílias dos bairros mais centrais que valorizam o acompanhamento individualizado.',

  bairrosNobres: ['Centro Administrativo', 'Boa Vista', 'Teutônia'],
  bairrosPopulares: ['Canabarro', 'Languiru', 'Alesgut'],

  parques: [
    {
      nome: 'Parque do Imigrante',
      descricao:
        'Um dos principais espaços públicos da cidade, com área ampla e arborizada — ponto de referência para caminhada, piquenique e lazer em família.',
    },
    {
      nome: 'Praça do Lago',
      descricao:
        'Localizada junto a uma rotatória da ERS-128, reúne lago com pequena ilha, pista de skate, pista de caminhada, bancos e arborização — bastante usada para caminhada e corrida leve no dia a dia.',
    },
    {
      nome: 'Centro Administrativo',
      descricao:
        'Complexo que reúne o Museu Henrique Übel, o Relógio das Flores, a Praça das Tradições e um lago no formato do mapa do município; funciona também como espaço de caminhada e ponto de encontro cultural.',
    },
  ],
  ciclovias:
    'A estrutura cicloviária ainda é limitada, concentrada em trechos pontuais da área urbana; a maior parte do deslocamento a pé e da corrida acontece nas calçadas do Centro Administrativo e no entorno dos parques e praças da cidade.',

  clima:
    'O clima é subtropical úmido, com verões quentes (facilmente acima de 30 °C, com umidade elevada no vale) e invernos frios, com geadas ocasionais nas manhãs mais rigorosas. Assim como outras cidades do Vale do Taquari, Teutônia foi afetada pelas enchentes históricas de abril e maio de 2024, que atingiram o rio Forqueta e o rio Taquari na região.',
  climaTreino:
    'No verão, o calor e a umidade pedem treino ao ar livre bem cedo ou no fim da tarde, com hidratação reforçada. No inverno, as manhãs frias favorecem horários mais quentes do dia ou o treino indoor; primavera e outono costumam ser as estações mais agradáveis para correr ao ar livre.',

  mobilidade:
    'A cidade é cortada pela ERS-128 (conhecida como Via Láctea), que liga a BR-386 à RSC-453 (Rota do Sol) e serve de eixo de acesso à maioria dos bairros. O deslocamento urbano é feito majoritariamente por carro e por ônibus, com a BR-386 funcionando como principal ligação regional com Lajeado, Estrela e Porto Alegre.',

  corridas: [
    {
      nome: 'Meia Maratona dos Vales',
      descricao:
        'Prova de destaque do calendário regional, com largada em Teutônia e percursos de 3, 5, 10 e 21 km, além de caminhada de 3 km e corridinha infantil — reúne corredores de todo o Vale do Taquari.',
    },
    {
      nome: 'Corrida Movimento Pela Vida',
      descricao:
        'Evento local de corrida de rua, com percursos de 3 km e 6 km, que movimenta a comunidade teutoniense em torno da atividade física.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local combina a tradição germânica — presente no Canto Coral e nas festas de colonização — com o futebol amador da SER Gaúcho, fundada em 1980, e uma cena de corrida de rua em crescimento em torno da Meia Maratona dos Vales e da Corrida Movimento Pela Vida. Trilhas como as da Lagoa da Harmonia, na área rural, também atraem quem busca caminhada em meio à natureza.',
  academias:
    'A oferta é formada por academias locais de musculação e treino funcional, concentradas no Centro Administrativo e nos bairros mais adensados, em porte compatível com uma cidade média e industrial do interior gaúcho.',

  destaquesFitness: [
    'Colonização alemã e Capital Nacional do Canto Coral, com forte identidade cultural no Vale do Taquari.',
    'Praça do Lago e Parque do Imigrante como principais espaços públicos para caminhada e corrida leve.',
    'ERS-128 (Via Láctea) cruzando a cidade e ligando-a à BR-386, eixo de mobilidade regional.',
    'Economia industrial pujante (agroindústria da Languiru, calçados e metalmecânica), com rotina de turnos que estimula a busca por personal trainer.',
  ],

  precos: {
    avulsaMin: 55,
    avulsaMax: 120,
    mensalMin: 270,
    mensalMax: 720,
    onlineMin: 130,
    onlineMax: 360,
  },

  conclusao:
    'Cidade industrial de colonização alemã no coração do Vale do Taquari, Teutônia combina rotina de trabalho intensa com espaços públicos como a Praça do Lago e o Parque do Imigrante. Um personal trainer ajuda a encaixar o treino na rotina de turnos da indústria local, aproveitando as estações mais amenas para o treino ao ar livre e mantendo a constância nos meses de calor e frio mais extremos.',

  vizinhas: ['lajeado-rs', 'estrela-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Teutônia', url: 'https://cidades.ibge.gov.br/brasil/rs/teutonia/panorama' },
    { nome: 'Prefeitura de Teutônia', url: 'https://teutonia.rs.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/perfil/municipio/432145' },
  ],
  atualizadoEm: '2026-06-29',
};
