import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santo-amaro-do-maranhao-ma',
  nome: 'Santo Amaro do Maranhão',
  uf: 'MA',
  estado: 'Maranhão',
  estadoSlug: 'maranhao',
  regiao: 'Nordeste',
  gentilico: 'santo-amarense',
  tipo: 'cidade',

  populacao: 13949,
  populacaoAno: 2022,

  resumoEconomico:
    'Com 13.949 habitantes (Censo 2022) e densidade de apenas 8,8 hab/km², Santo Amaro do Maranhão é a porta menos conhecida — e mais próxima das grandes lagoas — do Parque Nacional dos Lençóis Maranhenses: mais da metade do território do parque está dentro do município. A economia gira em torno do turismo de pousadas e receptivos credenciados, da pesca e da agricultura familiar.',

  mercado:
    'O mercado de personal trainer é mínimo em número e sazonal em demanda: guias, condutores de 4x4 e trabalhadores do turismo precisam de preparo para caminhar em duna solta, e a alta temporada multiplica a população da vila. O treino acontece em casa, na areia e com acompanhamento a distância.',

  bairrosNobres: ['Centro', 'Beira Rio', 'Nova Santo Amaro', 'Alegre'],
  bairrosPopulares: ['Barro Duro', 'Travosa', 'Betânia', 'Zona Rural'],

  parques: [
    {
      nome: 'Parque Nacional dos Lençóis Maranhenses — setor Santo Amaro',
      descricao:
        'O município detém mais da metade do território do parque, incluindo a área onde o lençol freático é mais ativo — as lagoas do lado de Santo Amaro são maiores, mais profundas e permanecem cheias por mais tempo.',
    },
    {
      nome: 'Lagoa da Gaivota e lagoas da vila',
      descricao:
        'As lagoas mais famosas do setor ficam a caminhada ou curto trajeto de 4x4 da vila — a Gaivota é o cartão-postal, com águas doces entre dunas de areia branca.',
    },
    {
      nome: 'Campo de dunas',
      descricao:
        'A vila fica literalmente aos pés das dunas: subir e descer areia solta é o exercício cotidiano de moradores, guias e visitantes.',
    },
  ],
  ciclovias:
    'Não há malha cicloviária. As ruas de areia da vila e os acessos rurais são percorridos a pé, de bicicleta e de 4x4.',

  clima:
    'Tropical quente, com estação chuvosa de janeiro a junho — quando as lagoas enchem — e um segundo semestre seco, de sol forte e vento constante.',
  climaTreino:
    'O calor pede treino no início da manhã ou no fim da tarde. A duna é um estádio natural: subir areia solta é dos estímulos de perna e fôlego mais duros que existem, e o vento do segundo semestre exige hidratação redobrada.',

  mobilidade:
    'O acesso se faz pela MA-402, com trecho final de estrada até a vila — a ligação com São Luís leva cerca de quatro horas. Dentro do parque, os deslocamentos são a pé ou em veículos 4x4 credenciados.',

  corridas: [
    {
      nome: 'Provas e travessias dos Lençóis',
      descricao:
        'O calendário da região inclui travessias a pé entre as vilas do parque e provas de trail run em duna e areia, com o setor de Santo Amaro entre os cenários mais procurados.',
    },
  ],
  culturaEsportiva:
    'Caminhar em duna faz parte da vida: guias e moradores cruzam o campo de areia diariamente, e a travessia dos Lençóis é rito local. Futebol de areia, banho de lagoa e a lida da pesca completam a rotina ativa da vila.',
  academias:
    'A oferta formal é praticamente inexistente — o treino de força acontece em casa, nas pousadas e em espaços improvisados, com o acompanhamento online cobrindo a lacuna para quem quer método.',

  destaquesFitness: [
    'Mais da metade do Parque Nacional dos Lençóis Maranhenses no município.',
    'As lagoas maiores e mais cheias do parque, como a Lagoa da Gaivota.',
    'Dunas na porta da vila: subida em areia solta como treino diário.',
    'Travessias a pé entre as vilas do parque como rito da região.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 100,
    mensalMin: 230,
    mensalMax: 580,
    onlineMin: 120,
    onlineMax: 320,
  },

  conclusao:
    'Santo Amaro é a porta silenciosa dos Lençóis: menos gente, lagoas maiores e a duna começando onde a rua termina. Um personal trainer daqui prepara pernas, tornozelos e fôlego para a areia solta — o terreno que define a vida e o trabalho de quem mora entre as dunas.',

  vizinhas: ['barreirinhas-ma', 'sao-luis-ma'],

  fontes: [
    { nome: 'IBGE Cidades — Santo Amaro do Maranhão', url: 'https://cidades.ibge.gov.br/brasil/ma/santo-amaro-do-maranhao/panorama' },
    { nome: 'ICMBio — Parque Nacional dos Lençóis Maranhenses', url: 'https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/unidade-de-conservacao/unidades-de-biomas/marinho/lista-de-ucs/parna-dos-lencois-maranhenses' },
    { nome: 'Prefeitura de Santo Amaro do Maranhão', url: 'https://santoamaro.ma.gov.br/' },
  ],
  atualizadoEm: '2026-08-12',
};
