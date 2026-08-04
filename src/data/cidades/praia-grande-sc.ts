import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'praia-grande-sc',
  nome: 'Praia Grande',
  uf: 'SC',
  estado: 'Santa Catarina',
  estadoSlug: 'santa-catarina',
  regiao: 'Sul',
  gentilico: 'praia-grandense',
  tipo: 'cidade',

  populacao: 8270,
  populacaoAno: 2022,
  idhm: 0.72,
  idhmClasse: 'alto',
  altitudeM: 30,

  resumoEconomico:
    'Conhecida como a Capital dos Cânions, Praia Grande fica aos pés dos Aparados da Serra, no extremo sul catarinense — os parques nacionais de Aparados da Serra e da Serra Geral, com os cânions Itaimbezinho, Fortaleza e Malacara, fizeram do turismo de aventura o motor da economia local, ao lado da agricultura familiar do vale.',

  mercado:
    'O turismo ativo dita o ritmo: trilhas, canionismo e cicloturismo movimentam pousadas e agências o ano todo, e o condicionamento físico virou assunto prático — tanto para os visitantes que encaram os cânions quanto para os moradores que vivem do guiamento. A oferta local de academias é compacta, com o personal trainer atuando de forma próxima e pessoal.',

  bairrosNobres: ['Centro', 'Vila Rosa', 'Morro do Cipó', 'Costão'],
  bairrosPopulares: ['César Franco', 'Vila Becker', 'Rio do Boi', 'Pixirica'],

  parques: [
    {
      nome: 'Cânion Itaimbezinho e Aparados da Serra',
      descricao:
        'O cânion mais famoso do Brasil, com paredões de até 700 metros, fica no parque nacional na divisa com o RS — trilhas de borda e de fundo de vale para todos os níveis.',
    },
    {
      nome: 'Cânion Malacara e trilha do Rio do Boi',
      descricao:
        'As travessias aquáticas e as trilhas de fundo de cânion partem do território do município — exigem preparo físico real e são o cartão de visitas do turismo ativo local.',
    },
    {
      nome: 'Vale do rio Mampituba',
      descricao:
        'As estradas rurais do vale, entre a serra e o litoral, rendem pedais e caminhadas com os paredões dos Aparados como cenário permanente.',
    },
  ],
  ciclovias:
    'O cicloturismo é forte nas rotas do vale e nas subidas da serra; não há malha cicloviária urbana relevante — o asfalto rural e as estradas de terra são a pista.',

  clima:
    'Clima subtropical úmido de pé de serra: verões quentes, invernos frios com neblina descendo dos Aparados e chuva bem distribuída.',
  climaTreino:
    'Treina-se o ano todo ao ar livre, com atenção ao tempo da serra — a neblina e a chuva mudam rápido; nas trilhas de cânion, condição física e clima definem a segurança.',

  mobilidade:
    'Pela SC-450 e pelas rodovias do litoral sul, Praia Grande se conecta a Araranguá e Torres — e é a base natural de quem visita os cânions pelo lado catarinense.',

  corridas: [
    {
      nome: 'Trail runs e provas dos cânions',
      descricao:
        'A região dos Aparados recebe provas de corrida de montanha e trail running, com percursos que sobem a serra e beiram os cânions.',
    },
  ],
  culturaEsportiva:
    'Aqui o esporte é paisagem: canionismo, trilha, cicloturismo e corrida de montanha fazem parte da rotina de moradores e visitantes — e o preparo físico é ferramenta de trabalho para os guias locais.',
  academias:
    'A oferta é compacta — academias locais e personal trainers que atendem de forma próxima —, complementada pela maior academia a céu aberto do sul do país: os cânions.',

  destaquesFitness: [
    'Capital dos Cânions: Itaimbezinho, Fortaleza e Malacara na porta.',
    'Trilhas de todos os níveis, da borda do cânion ao fundo do Rio do Boi.',
    'Trail running e cicloturismo com os paredões dos Aparados de cenário.',
    'Preparo físico como cultura local — dos guias aos visitantes.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 110,
    mensalMin: 240,
    mensalMax: 660,
    onlineMin: 110,
    onlineMax: 340,
  },

  conclusao:
    'Capital dos Cânions e base dos Aparados da Serra, Praia Grande é o lugar onde o treino tem paredão de 700 metros como paisagem. Um personal trainer prepara o corpo para as trilhas — e transforma a natureza monumental da cidade em rotina de condicionamento.',

  vizinhas: ['ararangua-sc', 'torres-rs', 'cambara-do-sul-rs'],

  fontes: [
    { nome: 'IBGE Cidades — Praia Grande', url: 'https://cidades.ibge.gov.br/brasil/sc/praia-grande/panorama' },
    { nome: 'Portal de Turismo de Praia Grande', url: 'https://turismo.praiagrande.sc.gov.br/' },
    { nome: 'Capital dos Canyons', url: 'https://capitaldoscanyons.com/' },
  ],
  atualizadoEm: '2026-08-04',
};
