import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'ponta-pora-ms',
  nome: 'Ponta Porã',
  uf: 'MS',
  estado: 'Mato Grosso do Sul',
  estadoSlug: 'mato-grosso-do-sul',
  regiao: 'Centro-Oeste',
  gentilico: 'pontaporanense',
  tipo: 'cidade',

  populacao: 92017,
  populacaoAno: 2022,
  idhm: 0.701,
  idhmClasse: 'alto',
  altitudeM: 650,

  resumoEconomico:
    'Principal cidade da fronteira sul de Mato Grosso do Sul, Ponta Porã forma com Pedro Juan Caballero (Paraguai) uma das mais conhecidas cidades gêmeas do país, separadas apenas pela Avenida Internacional, em fronteira seca. A economia combina forte agropecuária — com lavouras de soja, milho e algodão e pecuária —, a tradição histórica da erva-mate (que impulsionou a região a partir do fim do século 19) e um comércio fronteiriço intenso, alimentado pelo trânsito diário entre os dois lados da linha.',

  mercado:
    'Em uma cidade média de fronteira, o mercado fitness se apoia em academias de bairro e na vida ao ar livre dos parques públicos, bem estruturados para caminhada e treino. O fluxo binacional e a presença de estudantes (inclusive de medicina) ajudam a sustentar a demanda por acompanhamento individualizado.',

  bairrosNobres: ['Centro', 'Jardim Primor', 'Jardim Aeroporto', 'Residencial Ponta Porã'],
  bairrosPopulares: ['Jardim Planalto', 'Granja', 'São Marcos', 'Jardim das Exposições'],

  parques: [
    {
      nome: 'Parque dos Ervais',
      descricao:
        'Principal parque da cidade, com pista de caminhada, academia ao ar livre, campos de futebol, quadras de vôlei e de skate, playground e bastante arborização — referência para quem treina ao ar livre.',
    },
    {
      nome: 'Horto Florestal',
      descricao:
        'Área verde que virou ponto de encontro para atividades físicas, com pista de caminhada ampliada e pavimentada, campos de grama sintética, quadra de vôlei de areia, basquete 3x3, academia ao ar livre e Wi-Fi gratuito; sedia treinões e provas de corrida.',
    },
  ],
  ciclovias:
    'A cidade tem trechos de ciclovia em vias urbanas; a extensão total da malha cicloviária não é divulgada em fonte oficial consolidada.',

  clima:
    'O clima é tropical com estação seca no inverno, mas, pela altitude elevada (a sede fica em torno de 650 m, na Serra de Amambai), Ponta Porã tem invernos mais frescos que boa parte de MS, com entradas de frentes frias e temperaturas que podem cair bastante à noite; os verões são quentes e chuvosos.',
  climaTreino:
    'No verão, o calor e a umidade favorecem o treino no início da manhã ou no fim da tarde, com boa hidratação; o inverno fresco e seco é confortável para correr, exigindo agasalho nos dias de frente fria.',

  mobilidade:
    'Ponta Porã é cidade gêmea de Pedro Juan Caballero (Paraguai) em fronteira seca: a Avenida Internacional separa os dois municípios e o trânsito entre eles é livre e cotidiano, com deslocamentos pendulares de moradores e trabalhadores. O acesso rodoviário se dá principalmente pela BR-463, que liga a cidade a Dourados.',

  corridas: [
    {
      nome: 'Corrida Águia da Fronteira (DOF)',
      descricao:
        'Prova de rua promovida na região de fronteira, que reúne centenas de inscritos de Ponta Porã e cidades vizinhas.',
    },
    {
      nome: 'Corrida do Verão no Parque',
      descricao:
        'Prova pedestre integrada ao "Verão no Parque", um dos maiores eventos esportivos e culturais da fronteira, com largada no Horto Florestal.',
    },
    {
      nome: 'Corrida dos Poderes',
      descricao:
        'Evento que integra o calendário esportivo de Mato Grosso do Sul e tem etapa e treinão na cidade, com concentração no Horto Florestal.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva local gira em torno das corridas de rua e do uso intenso dos parques públicos, com provas que mobilizam atletas dos dois lados da fronteira e programações de incentivo à atividade física promovidas pela prefeitura.',
  academias:
    'A oferta reúne academias de bairro e estúdios, complementada por dois parques bem equipados com academia ao ar livre e pistas de caminhada (Parque dos Ervais e Horto Florestal).',

  destaquesFitness: [
    'Dois parques estruturados para treino: Parque dos Ervais e Horto Florestal, com pistas e academia ao ar livre.',
    'Calendário de corridas de rua na fronteira (Águia da Fronteira, Verão no Parque, Corrida dos Poderes).',
    'Inverno fresco e seco pela altitude elevada, favorável para corrida e treino ao ar livre.',
    'Dinâmica binacional com Pedro Juan Caballero, que amplia o público e a movimentação esportiva.',
  ],

  precos: {
    avulsaMin: 50,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 350,
  },

  conclusao:
    'Cidade de fronteira com agropecuária forte, tradição na erva-mate e clima mais ameno pela altitude, Ponta Porã oferece bons parques públicos e um calendário ativo de corridas. Um personal trainer ajuda a aproveitar o Parque dos Ervais e o Horto Florestal com método, ajustando horários e intensidade ao calor do verão e ao frescor do inverno.',

  vizinhas: ['dourados-ms', 'campo-grande-ms'],

  fontes: [
    { nome: 'IBGE Cidades — Ponta Porã', url: 'https://cidades.ibge.gov.br/brasil/ms/ponta-pora/panorama' },
    { nome: 'Prefeitura de Ponta Porã', url: 'https://pontapora.ms.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
