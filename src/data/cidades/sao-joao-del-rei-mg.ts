import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'sao-joao-del-rei-mg',
  nome: 'São João del-Rei',
  uf: 'MG',
  estado: 'Minas Gerais',
  estadoSlug: 'minas-gerais',
  regiao: 'Sudeste',
  gentilico: 'são-joanense',
  tipo: 'cidade',

  populacao: 90225,
  populacaoAno: 2022,
  idhm: 0.758,
  idhmClasse: 'alto',
  altitudeM: 898,

  resumoEconomico:
    'Principal cidade do Campo das Vertentes, São João del-Rei é referência de turismo histórico — arquitetura barroca, a ferrovia Maria-Fumaça e a vizinha Tiradentes. Tem forte polo universitário com a UFSJ, que dinamiza serviços, cultura e economia local.',

  mercado:
    'A população universitária e jovem sustenta academias e estúdios, com demanda mista entre estudantes e público local.',

  bairrosNobres: ['Centro', 'Tijuco', 'Colônia do Marçal', 'Fábricas'],
  bairrosPopulares: ['Senhor dos Montes', 'Bonfim', 'Matosinhos', 'São José Operário'],

  parques: [
    {
      nome: 'Parque Municipal da Serra do Lenheiro',
      descricao:
        'Tem a Trilha do Lenheiro, com vales e mata, popular para caminhada e atividade ao ar livre.',
    },
    {
      nome: 'Avenida Tancredo Neves',
      descricao:
        'Corredor central usado em corridas de rua e caminhadas, no eixo do Coreto.',
    },
    {
      nome: 'Parque de Exposições',
      descricao:
        'Área pública ampla, usada para eventos e caminhada.',
    },
  ],
  ciclovias:
    'A extensão da malha cicloviária ainda não é divulgada em fonte oficial.',

  clima:
    'O clima é tropical de altitude, com verões chuvosos e invernos secos e amenos, média anual em torno de 19 °C.',
  climaTreino:
    'O clima ameno de altitude é favorável ao treino externo e à corrida boa parte do ano.',

  mobilidade:
    'O acesso se dá pela BR-265 e pela MG-383, com ligação a Tiradentes e à região das Vertentes.',

  corridas: [
    {
      nome: 'Corrida da Cidade',
      descricao:
        'Comemorativa do aniversário da cidade, com meia maratona, 10 km, 5 km e kids, e largada na Av. Tancredo Neves.',
    },
    {
      nome: 'Vertentes Trail Run',
      descricao:
        'Prova de trail e rua na região, parte do calendário esportivo local.',
    },
  ],
  culturaEsportiva:
    'O calendário de corridas está ligado às comemorações cívicas da cidade, e o público universitário da UFSJ alimenta a base de praticantes.',
  academias:
    'A oferta reúne academias e estúdios, com público jovem da UFSJ, complementada pela Serra do Lenheiro para o trail e o treino outdoor.',

  destaquesFitness: [
    'Polo universitário (UFSJ), que garante público jovem e constante.',
    'Meia maratona oficial no calendário anual.',
    'Serra do Lenheiro para trail e treino outdoor.',
    'Clima ameno de altitude (cerca de 900 m), favorável à corrida.',
  ],

  precos: {
    avulsaMin: 60,
    avulsaMax: 150,
    mensalMin: 320,
    mensalMax: 880,
    onlineMin: 160,
    onlineMax: 420,
  },

  conclusao:
    'Joia barroca do Campo das Vertentes, São João del-Rei une turismo histórico, a UFSJ e a Serra do Lenheiro. Um personal trainer ajuda a aproveitar o trail e a meia maratona da cidade com método, num clima ameno de altitude.',

  vizinhas: ['belo-horizonte-mg', 'juiz-de-fora-mg'],

  fontes: [
    { nome: 'IBGE Cidades — São João del-Rei', url: 'https://cidades.ibge.gov.br/brasil/mg/sao-joao-del-rei/panorama' },
    { nome: 'Prefeitura de São João del-Rei', url: 'https://www.saojoaodelrei.mg.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
