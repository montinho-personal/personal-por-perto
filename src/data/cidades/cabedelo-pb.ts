import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'cabedelo-pb',
  nome: 'Cabedelo',
  uf: 'PB',
  estado: 'Paraíba',
  estadoSlug: 'paraiba',
  regiao: 'Nordeste',
  gentilico: 'cabedelense',
  tipo: 'cidade',

  populacao: 66519,
  populacaoAno: 2022,
  idhm: 0.748,
  idhmClasse: 'alto',
  altitudeM: 4,

  resumoEconomico:
    'Encravada em uma península entre o rio Paraíba e o oceano, Cabedelo integra a Região Metropolitana de João Pessoa e abriga o Porto de Cabedelo, principal porto marítimo do estado. A economia combina movimentação portuária, comércio, serviços e um turismo de praia forte, sustentado por orlas como Intermares, Camboinha e Ponta de Campina. A conurbação com a capital faz da cidade praticamente uma extensão litorânea de João Pessoa.',

  mercado:
    'A vida ao ar livre e a cultura de praia movem a demanda por treino na orla, musculação e funcional. A oferta de academias e estúdios se concentra em Intermares e nos bairros próximos à divisa com Manaíra, em João Pessoa, atendendo moradores e veranistas que valorizam estética e performance.',

  bairrosNobres: ['Intermares', 'Camboinha', 'Ponta de Campina', 'Jardim Camboinha'],
  bairrosPopulares: ['Centro', 'Renascer', 'Salinas', 'Jacaré'],

  parques: [
    {
      nome: 'Orla de Intermares',
      descricao:
        'Calçadão plano com ciclovia na divisa com João Pessoa, ponto preferido de corredores, ciclistas e praticantes de treino funcional ao amanhecer e no fim de tarde.',
    },
    {
      nome: 'Praia de Camboinha',
      descricao:
        'Faixa de areia larga e águas calmas, dividida em trechos (I, II e III), boa para caminhada, corrida na areia e esportes de praia.',
    },
    {
      nome: 'Fortaleza de Santa Catarina e Ponta de Matos',
      descricao:
        'Conjunto histórico na ponta norte da península, com vista para o encontro do rio Paraíba com o mar; entorno usado para caminhadas e contemplação.',
    },
  ],
  ciclovias:
    'A orla de Intermares conta com ciclovia que se integra à malha cicloviária da orla de João Pessoa, formando um corredor litorâneo contínuo para pedalar e correr.',

  clima:
    'O clima é tropical úmido de litoral, quente o ano todo, com temperaturas estáveis e período chuvoso concentrado no outono e início do inverno.',
  climaTreino:
    'O calor e a umidade do litoral paraibano pedem treino no começo da manhã ou no fim da tarde, com hidratação reforçada; a brisa do mar na orla ajuda nas sessões ao ar livre.',

  mobilidade:
    'Cabedelo marca o quilômetro zero da BR-230 (Rodovia Transamazônica), que liga a península à capital e ao interior. A conurbação com João Pessoa torna o deslocamento entre as duas cidades parte da rotina, e o Porto de Cabedelo concentra a logística marítima do estado. O transporte coletivo é feito por ônibus metropolitanos.',

  corridas: [
    {
      nome: 'Meia Maratona de Cabedelo',
      descricao:
        'Prova de rua com percurso plano pela orla da cidade, reunindo corredores da Região Metropolitana de João Pessoa.',
    },
    {
      nome: 'Corridas de rua na Orla de Intermares',
      descricao:
        'A orla de Intermares é palco recorrente de provas noturnas e diurnas de 5 km e 10 km, aproveitando o calçadão plano e a paisagem litorânea.',
    },
  ],
  culturaEsportiva:
    'A rotina esportiva gira em torno da praia: corrida e caminhada na orla, ciclismo, vôlei, beach tennis e esportes náuticos. O litoral plano e a temperatura estável o ano todo favorecem a constância no treino ao ar livre.',
  academias:
    'A oferta reúne academias de bairro, redes e estúdios, com maior concentração em Intermares e nas proximidades da divisa com João Pessoa, complementada pela orla como espaço natural de treino.',

  destaquesFitness: [
    'Orla de Intermares plana e contínua, ideal para corrida, ciclismo e funcional.',
    'Praias de Camboinha e Ponta de Campina para treino na areia e esportes de praia.',
    'Quilômetro zero da BR-230 e conurbação com João Pessoa, ampliando o acesso a profissionais.',
    'Clima quente e estável o ano todo, com brisa marítima favorável ao treino ao ar livre.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 115,
    mensalMin: 250,
    mensalMax: 700,
    onlineMin: 115,
    onlineMax: 360,
  },

  conclusao:
    'Com uma orla plana e praias tranquilas, Cabedelo é um cenário convidativo para quem gosta de treinar ao ar livre na Região Metropolitana de João Pessoa. Um personal trainer ajuda a montar um plano que aproveite a estrutura da orla de Intermares e respeite o calor do litoral, ajustado ao seu objetivo e à sua rotina.',

  vizinhas: ['joao-pessoa-pb', 'campina-grande-pb'],

  fontes: [
    { nome: 'IBGE Cidades — Cabedelo', url: 'https://cidades.ibge.gov.br/brasil/pb/cabedelo/panorama' },
    { nome: 'Prefeitura de Cabedelo', url: 'https://cabedelo.pb.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
